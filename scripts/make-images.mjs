// Makes the pictures in public/ that can't be SVG: the preview picture for links shared elsewhere
// (og.png, 1200 × 630) and the PNG icons. Run it again after the name, tagline or logo change:
//   scripts/run.sh sh -c 'apt-get update -qq && apt-get install -y -qq fonts-noto-core >/dev/null && node scripts/make-images.mjs'
// (the fonts are for the text in og.png; the container is thrown away afterwards).
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { site } from '../site.config.mjs';

const mark = await readFile('public/mark.svg');
const markData = `data:image/svg+xml;base64,${mark.toString('base64')}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Icons from the mark.
for (const [file, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(mark, { density: Math.ceil((72 * size) / 64) * 2 }).resize(size, size).png().toFile(`public/${file}`);
}

// The preview picture: the hero's gradient, the mark, the name and tagline, and a corner of an app.
const W = 1200;
const H = 630;
const [first, second] = site.tagline.split(/(?<=\.)\s+/);
const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A8FD9"/><stop offset="0.5" stop-color="#2563EB"/><stop offset="1" stop-color="#1E3A8A"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0" r="0.7">
      <stop offset="0" stop-color="#38BDF8" stop-opacity="0.55"/><stop offset="1" stop-color="#38BDF8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <image href="${markData}" x="72" y="72" width="88" height="88"/>
  <text x="180" y="134" font-family="Noto Sans" font-weight="700" font-size="44" fill="#FFFFFF">${esc(site.name)}</text>
  <text x="72" y="300" font-family="Noto Sans" font-weight="800" font-size="62" fill="#FFFFFF" letter-spacing="-1.5">${esc(first)}</text>
  <text x="72" y="378" font-family="Noto Sans" font-weight="800" font-size="62" fill="#FFFFFF" fill-opacity="0.78" letter-spacing="-1.5">${esc(second ?? '')}</text>
  <text x="72" y="470" font-family="Noto Sans" font-size="27" fill="#FFFFFF" fill-opacity="0.9">A free Linux for everyday use,</text>
  <text x="72" y="508" font-family="Noto Sans" font-size="27" fill="#FFFFFF" fill-opacity="0.9">gaming and development.</text>
  <text x="72" y="572" font-family="Noto Sans" font-weight="600" font-size="22" fill="#FFFFFF" fill-opacity="0.75">${esc(new URL(site.url).host)}</text>
</svg>`);

// A corner of Asima Updater (dark), with a rounded top-left corner, cut off by the picture's edges.
const left = 640;
const top = 170;
const shotW = W - left;
const shotH = H - top;
const shot = await sharp('src/assets/screens/updater-versions-dark.png')
  .resize(820)
  .extract({ left: 0, top: 0, width: shotW, height: shotH })
  .composite([{
    input: Buffer.from(`<svg width="${shotW}" height="${shotH}"><rect width="${shotW + 40}" height="${shotH + 40}" rx="18" fill="#fff"/></svg>`),
    blend: 'dest-in',
  }])
  .png()
  .toBuffer();
const frame = Buffer.from(`<svg width="${shotW}" height="${shotH}"><rect x="0.75" y="0.75" width="${shotW + 40}" height="${shotH + 40}" rx="18" fill="none" stroke="#FFFFFF" stroke-opacity="0.35" stroke-width="1.5"/></svg>`);

await sharp(background)
  .composite([{ input: shot, left, top }, { input: frame, left, top }])
  .png({ compressionLevel: 9 })
  .toFile('public/og.png');

console.log('public/og.png and the icons are made');
