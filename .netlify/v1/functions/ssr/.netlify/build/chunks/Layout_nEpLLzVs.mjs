import { c as createComponent, j as createAstro, b as addAttribute, l as renderHead, n as renderSlot, a as renderTemplate } from './astro/server_CjbJd46K.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/twins.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Baby shower Amalia y Amanda</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
