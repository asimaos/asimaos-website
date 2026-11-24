import { site } from '../../site.config.mjs';

export function GET() {
  return Response.json({
    name: site.name,
    short_name: site.name,
    description: site.description,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/mark.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    theme_color: '#0a6cd6',
    background_color: '#0e1015',
    display: 'browser',
  });
}
