"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { CheckGrid, Field, Select, TextArea, TextInput } from "@/components/ui/Field";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { BUDGET_BANDS, contactLeadSchema, type ContactLead } from "@/features/leads/schema";
import type { LeadResult } from "@/features/leads/schema";

const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.slug,
  label: `${s.number} ${s.title}`,
  note: s.category,
}));

const INDUSTRY_OPTIONS = [
  ...INDUSTRIES.map((i) => ({ value: i.slug, label: i.name })),
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [result, setResult] = useState<LeadResult | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactLead>({
    resolver: zodResolver(contactLeadSchema),
    defaultValues: {
      source: "contact",
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      country: "",
      message: "",
      services: [],
      companyWebsiteUrl: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as LeadResult;
      setResult(data);
      if (data.success) reset();
    } catch {
      setResult({
        success: false,
        message: "We could not reach the server. Please try again, or email us directly.",
      });
    }
  });

  if (result?.success) {
    return (
      <div role="status" className="border-t border-rule pt-8">
        <p className="type-label text-accent">Received</p>
        <p className="type-display-m mt-5 max-w-[16ch] text-balance">
          Thanks. We&rsquo;ll be in touch.
        </p>
        <p className="type-body prose-body measure mt-5">{result.message}</p>
        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => setResult(null)}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border-t border-rule pt-8">
      <input type="hidden" {...register("source")} />

      {/* Honeypot. Off-screen rather than display:none so bots still fill it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label htmlFor="company-website-url">Company website URL</label>
        <input
          id="company-website-url"
          tabIndex={-1}
          autoComplete="off"
          {...register("companyWebsiteUrl")}
        />
      </div>

      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          {({ id, describedBy, invalid }) => (
            <TextInput
              id={id}
              autoComplete="name"
              aria-describedby={describedBy}
              aria-invalid={invalid}
              placeholder="Your name"
              {...register("name")}
            />
          )}
        </Field>

        <Field label="Email" error={errors.email?.message}>
          {({ id, describedBy, invalid }) => (
            <TextInput
              id={id}
              type="email"
              autoComplete="email"
              aria-describedby={describedBy}
              aria-invalid={invalid}
              placeholder="you@company.com"
              {...register("email")}
            />
          )}
        </Field>

        <Field label="Company" optional error={errors.company?.message}>
          {({ id, describedBy }) => (
            <TextInput
              id={id}
              autoComplete="organization"
              aria-describedby={describedBy}
              placeholder="Company name"
              {...register("company")}
            />
          )}
        </Field>

        <Field label="Website" optional error={errors.website?.message}>
          {({ id, describedBy, invalid }) => (
            <TextInput
              id={id}
              inputMode="url"
              aria-describedby={describedBy}
              aria-invalid={invalid}
              placeholder="yourcompany.com"
              {...register("website")}
            />
          )}
        </Field>

        <Field label="Phone" optional error={errors.phone?.message}>
          {({ id, describedBy }) => (
            <TextInput
              id={id}
              type="tel"
              autoComplete="tel"
              aria-describedby={describedBy}
              placeholder="Including country code"
              {...register("phone")}
            />
          )}
        </Field>

        <Field label="Country" optional error={errors.country?.message}>
          {({ id, describedBy }) => (
            <TextInput
              id={id}
              autoComplete="country-name"
              aria-describedby={describedBy}
              placeholder="United States"
              {...register("country")}
            />
          )}
        </Field>

        <Field label="Industry" error={errors.industry?.message}>
          {({ id, describedBy, invalid }) => (
            <Select
              id={id}
              defaultValue=""
              aria-describedby={describedBy}
              aria-invalid={invalid}
              {...register("industry")}
            >
              <option value="" disabled>
                Choose the closest match
              </option>
              {INDUSTRY_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </Select>
          )}
        </Field>

        <Field
          label="Monthly marketing budget"
          optional
          hint="A range is fine. It helps us suggest a realistic starting point."
          error={errors.budget?.message}
        >
          {({ id, describedBy }) => (
            <Select id={id} defaultValue="" aria-describedby={describedBy} {...register("budget")}>
              <option value="">Prefer not to say</option>
              {BUDGET_BANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Select>
          )}
        </Field>
      </div>

      <div className="mt-12">
        <Controller
          control={control}
          name="services"
          render={({ field }) => (
            <CheckGrid
              legend="Services needed"
              hint="Select as many as apply. If you are not sure, pick the closest and we will work it out on the call."
              error={errors.services?.message}
              options={SERVICE_OPTIONS}
              selected={field.value ?? []}
              onToggle={(value) => {
                const next = new Set(field.value ?? []);
                if (next.has(value)) next.delete(value);
                else next.add(value);
                field.onChange([...next]);
              }}
            />
          )}
        />
      </div>

      <div className="mt-12">
        <Field
          label="Message"
          optional
          hint="What is currently working, what is not, and anything about your market we should know."
          error={errors.message?.message}
        >
          {({ id, describedBy }) => (
            <TextArea
              id={id}
              aria-describedby={describedBy}
              placeholder="Tell us what is complicated."
              {...register("message")}
            />
          )}
        </Field>
      </div>

      {result && !result.success && (
        <p role="alert" className="type-body mt-8 border-l-2 border-signal-red pl-4 text-signal-red-text">
          {result.message}
        </p>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Book a consultation"}
        </Button>
        <p className="type-small text-mute">
          We reply within one business day.
        </p>
      </div>
    </form>
  );
}
