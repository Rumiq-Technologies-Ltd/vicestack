/**
 * Resize and compress source artwork into public/images.
 *
 * Output dimensions match the aspect ratio each image is displayed at, exactly.
 * A near-miss (e.g. 1400x1738 shown at 4/5) makes object-cover crop the file
 * and costs real resolution, which Lighthouse flags as a low-resolution image.
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SRC =
  "C:/Users/PMYLS/AppData/Local/Temp/claude/C--Haider-Jalal-Claude-Projects-vicestack/634215a1-a23e-44d3-bd75-c71410289b9d/scratchpad/gen";
const OUT = path.join(__dirname, "..", "public", "images");
fs.mkdirSync(OUT, { recursive: true });

const JOBS = [
  // ratio 4/5 — Hero
  { in: "1-hero-a.png", out: "hero-obscured.jpg", width: 1400, height: 1750 },
  // ratio 1/1 — Positioning
  { in: "3-hand.png", out: "positioning-contact.jpg", width: 1200, height: 1200 },
  // ratio 3/4 — Philosophy portrait
  { in: "4-portrait-a.png", out: "philosophy-portrait.jpg", width: 1116, height: 1488 },
  // ratio 16/10 — Case study
  { in: "6-vial.png", out: "case-peptide.jpg", width: 1800, height: 1125 },
];

(async () => {
  for (const job of JOBS) {
    const src = path.join(SRC, job.in);
    if (!fs.existsSync(src)) {
      console.log(`skip ${job.out} — source missing`);
      continue;
    }
    const dest = path.join(OUT, job.out);
    const info = await sharp(src)
      .resize({ width: job.width, height: job.height, fit: "cover", position: "attention" })
      .greyscale() // Monochrome by art direction; drops the chroma planes.
      .jpeg({ quality: 84, progressive: true, mozjpeg: true })
      .toFile(dest);
    console.log(
      `${job.out.padEnd(28)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`,
    );
  }
})();
