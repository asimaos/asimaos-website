import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../../site.config.mjs';

export async function GET(context) {
  const posts = (await getCollection('news', (p) => !p.data.draft)).sort((a, b) => b.data.date - a.data.date);
  return rss({
    title: `${site.name} news`,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/news/${p.id}/`,
    })),
    customData: `<language>${site.language.toLowerCase()}</language>`,
  });
}
