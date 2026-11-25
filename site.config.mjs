// Every name, address and release fact the website shows lives here, and only here.
// Pages read it directly; Markdown (guides, news) uses %tokens% such as %os% or %updater%, which
// src/lib/names.mjs fills in from `names` below. Renaming the OS or an app is one change in this file.

// The name as written: "Asima OS"; "Asima OS Linux" where it must say what it is (titles, search).
const os = 'Asima OS';
const osLinux = `${os} Linux`;

export const site = {
  name: os,
  longName: osLinux,
  // The site's final address. Change it here when a name of our own (for example asimaos.eu.org)
  // is attached in Cloudflare; canonical links, the sitemap and the RSS feed follow.
  url: 'https://asimaos.pages.dev',
  language: 'en-GB',
  tagline: 'Install once. It keeps working.',
  description:
    `${os} is a free Linux operating system for everyday use, gaming and development. Every update ` +
    'is a complete, verified system, and a version that doesn’t start goes back to the one before ' +
    'it by itself.',
  // Cloudflare Web Analytics: no cookies, no personal data. When it is switched on for the site in
  // Cloudflare's dashboard, set this to true so the security headers allow its script.
  analytics: false,
};

// Names as people see them.
export const names = {
  os,
  oslinux: osLinux,
  updater: 'Asima Updater',
  maintenance: 'Asima Maintenance',
  manager: 'Asima Manager',
  gaming: 'Asima Gaming',
  dev: 'Asima Dev',
  appcenter: 'Asima App Center',
  hub: 'Asima Hub',
  rescue: 'Asima Rescue',
  installer: 'the installer',
  shield: 'Asima Shield',
  dialog: `the ${os} password dialog`,
  command: 'asimaos',
};

// The repositories on GitHub (organisation asimaos): the OS, Asima Hub and this website.
const code = 'https://github.com/asimaos/asimaos';
const hubCode = 'https://github.com/asimaos/asimaos-hub';

// Where things are. The repositories' links work once they are published.
export const links = {
  code,
  issues: `${code}/issues`,
  newIssue: `${code}/issues/new`,
  discussions: `${code}/discussions`,
  securityPolicy: `${code}/blob/main/SECURITY.md`,
  contributing: `${code}/blob/main/CONTRIBUTING.md`,
  codeOfConduct: `${code}/blob/main/CODE_OF_CONDUCT.md`,
  changelog: `${code}/blob/main/CHANGELOG.md`,
  status: `${code}/blob/main/docs/status.md`,
  architecture: `${code}/blob/main/docs/architecture.md`,
  decisions: `${code}/blob/main/docs/decisions.md`,
  building: `${code}/blob/main/docs/building.md`,
  roadmap: `${code}/blob/main/docs/roadmap.md`,
  license: `${code}/blob/main/LICENSE`,
  hub: `${hubCode}/releases/latest`,
  hubCode,
  // The ISO and update files go to SourceForge (free for open-source projects).
  downloads: 'https://sourceforge.net/projects/asima-os/files/',
};

// The release the Download page offers. While `public` is false the page says the first public
// release is being tested and shows no download buttons.
export const release = {
  public: false,
  version: null,
  date: null,
  isoFile: null,
  isoSize: null,
  updateFile: null,
  updateSize: null,
  // The release key's SHA-256 fingerprint (asimaos-release-key.txt of the build). Asima OS's first
  // build makes a new key; until then the pages say it comes with the first release.
  keyFingerprint: null,
  base: {
    snapshot: '14 November 2026',
    systemd: '262',
    kernel: '7.3',
    plasma: '6.8',
    gear: '26.08',
  },
};

export const requirements = [
  ['Computer', 'A 64-bit PC (x86_64) with UEFI firmware: laptop, desktop or handheld'],
  ['Memory', '4 GB or more'],
  ['Disk', `48 GB or more. ${os} uses the whole disk you choose; other systems stay on other disks`],
  ['USB stick', '8 GB or more, for the installer'],
  ['Graphics', 'AMD and Intel; NVIDIA GTX 16xx, RTX 20xx and newer with NVIDIA’s driver (older NVIDIA cards use the open drivers)'],
  ['Optional', 'Secure Boot, and a TPM 2.0 chip to open the encrypted disk for you'],
];
