// Fills in %tokens% (%os%, %updater%, ...) from site.config.mjs, so that a rename is one change there.
import { names } from '../../site.config.mjs';

const TOKEN = /%([a-z]+)%/g;

export function fillNames(text) {
  return text.replace(TOKEN, (token, key) => (Object.hasOwn(names, key) ? names[key] : token));
}

// A Sätteri (Astro's Markdown processor) plugin: the same for every text, code block and link.
const fill = (key) => (node, ctx) => {
  const value = node[key];
  if (typeof value !== 'string' || !value.includes('%')) return;
  const filled = fillNames(value);
  if (filled !== value) ctx.setField(node, key, filled);
};

export const markdownNames = {
  name: 'asimaos-names',
  text: fill('value'),
  inlineCode: fill('value'),
  code: fill('value'),
  link: fill('url'),
};
