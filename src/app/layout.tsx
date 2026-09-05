import type { Metadata, Viewport } from "next";
import { Inter_Tight } from "next/font/google";
import { WordmarkSprite } from "@/components/brand/WordmarkSprite";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealProvider } from "@/hooks/useReveal";
import { SITE } from "@/content/site";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body>
        <script
          type="application/ld+json"
          // Site-wide entities. Page-level schema is emitted per route.
          dangerouslySetInnerHTML={{
            __html: graph(organizationSchema(), websiteSchema()),
          }}
        />
        <WordmarkSprite />
        <RevealProvider />
        <Header />
        <main id="main" className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
