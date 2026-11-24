// Writes dist/_headers for Cloudflare Pages: a strict Content-Security-Policy and the other security
// headers for every page, and long caching for the fingerprinted files Astro makes.
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { site } from '../../site.config.mjs';

export function contentSecurityPolicy() {
  // Cloudflare Web Analytics, only when it is switched on (site.analytics).
  const beacon = site.analytics ? ' https://static.cloudflareinsights.com' : '';
  const report = site.analytics ? ' https://cloudflareinsights.com' : '';
  return [
    "default-src 'self'",
    // 'wasm-unsafe-eval' lets the search (Pagefind) run its WebAssembly; no other code is evaluated.
    `script-src 'self' 'wasm-unsafe-eval'${beacon}`,
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src 'self'${report}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests',
  ].join('; ');
}

export function headersFile() {
  return `/*
  Content-Security-Policy: ${contentSecurityPolicy()}
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()
  Cross-Origin-Opener-Policy: same-origin
  Cross-Origin-Resource-Policy: same-origin

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
`;
}

export function securityHeaders() {
  return {
    name: 'asimaos-security-headers',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        await writeFile(new URL('_headers', dir), headersFile());
        logger.info(`wrote ${fileURLToPath(new URL('_headers', dir))}`);
      },
    },
  };
}
