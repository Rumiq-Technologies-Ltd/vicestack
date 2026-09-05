/**
 * Slice a tall screenshot into readable tiles for review.
 * Usage: node scripts/slice.cjs <raw.png> <name>
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const [, , raw, name = "page"] = process.argv;
const dir = path.dirname(raw);

(async () => {
  // Drop the empty tail below the footer.
  const trimmed = await sharp(raw)
    .trim({ threshold: 3 })
    .toBuffer({ resolveWithObject: true });
  const src = trimmed.info.height > 800 ? trimmed.data : fs.readFileSync(raw);
  const meta = await sharp(src).metadata();

  const TILE = 1500;
  const tiles = Math.ceil(meta.height / TILE);
  for (let i = 0; i < tiles; i++) {
    const top = i * TILE;
    const height = Math.min(TILE, meta.height - top);
    await sharp(src)
      .extract({ left: 0, top, width: meta.width, height })
      .resize({ width: Math.min(meta.width, 1100) })
      .jpeg({ quality: 80 })
      .toFile(path.join(dir, `${name}-${String(i + 1).padStart(2, "0")}.jpg`));
  }
  console.log(`${name}: ${meta.width}x${meta.height} -> ${tiles} tiles`);
})();
