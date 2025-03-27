import { c as createComponent, m as maybeRenderHead, e as renderScript, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CjbJd46K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_DxuY1o6E.mjs';
import 'clsx';
import { $ as $$TicketPopup } from '../chunks/TicketPopup_D-3CqyKe.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_D7j0ws8A.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="items-center justify-center text-white"> <div class="  z-0"> <img src="/invitation.svg?height=1080&width=1920" alt="Baby shower Amalia y Amanda" class="w-full h-full object-cover "> </div> <div class="relative z-10 text-center px-4 max-w-4xl mx-auto" style="display: none;"> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="#tickets" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
Reservar
</a> <button id="hero-get-tickets" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
Get Tickets
</button> </div> </div> ${renderScript($$result, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Hero.astro", void 0);

const $$Ticket = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "TicketPopup", $$TicketPopup, {})} ${renderScript($$result, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Ticket.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Ticket.astro", void 0);

const myImage = new Proxy({"src":"/_astro/mapa.D3u7Ltag.png","width":1530,"height":861,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/assets/mapa.png";
							}
							
							return target[name];
						}
					});

const $$Map = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="venue" class="py-20 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-12">Ubicación del evento</h2> <div class="grid md:grid-cols-2 gap-8 items-center"> <div> <h3 class="text-2xl font-semibold mb-4">
Salon de Eventos Quinta Jimena
</h3> <p class="text-gray-600 mb-6"></p> <div class="space-y-4"> <div class="flex items-start"> <div class="bg-purple-100 p-2 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <div> <h4 class="font-medium">Dirección</h4> <p class="text-gray-600">
R2W3+P34, Provincia de Cartago, Quebradilla
</p> </div> </div> <div class="flex items-start"> <div class="bg-purple-100 p-2 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-medium">Hora de evento</h4> <p class="text-gray-600">2:00 pm</p> </div> </div> <div class="flex items-start"> <div class="bg-purple-100 p-2 rounded-full mr-4"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-medium">Link de google maps</h4> <a href="https://maps.app.goo.gl/ZLTx3oij6fzDfy7fA">Salón</a> </div> </div> </div> </div> <div class="h-96 bg-gray-200 rounded-lg overflow-hidden"> <!-- Interactive map would go here in a real implementation --> ${renderComponent($$result, "Image", $$Image, { "src": myImage, "alt": "A description of my image." })} <a href="https://maps.app.goo.gl/ZLTx3oij6fzDfy7fA"></a> </div> </div> </div> </section>`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Map.astro", void 0);

const threemonths = new Proxy({"src":"/_astro/3meses.CIgXyURz.jpg","width":1280,"height":960,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/assets/3meses.jpg";
							}
							
							return target[name];
						}
					});

const fourmonths = new Proxy({"src":"/_astro/4meses.EB6CiqPo.jpg","width":1136,"height":852,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/assets/4meses.jpg";
							}
							
							return target[name];
						}
					});

const fivemonths = new Proxy({"src":"/_astro/5meses.CAxmHIao.jpg","width":511,"height":420,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/assets/5meses.jpg";
							}
							
							return target[name];
						}
					});

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="gallery" class="py-20 bg-white"> <div class="container mx-auto px-4"> <h2 class="text-4xl font-bold text-center mb-4">Gallery</h2> <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
Tú hiciste todas las delicadas partes internas de mi cuerpo y las uniste en el vientre de mi madre.
      Gracias por haberme hecho tan admirable! Es admirable pensar en ello. Maravillosa es la obra de tus manos,
      y eso lo sé muy bien. Tú me observaste cuando en lo más recóndito era yo formado. Tus ojos vieron mi cuerpo en
      gestación: todo estaba ya escrito en tu libro; todos mis días se estaban diseñado, aunque no existía uno solo de ellos.
</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"> ${renderComponent($$result, "Image", $$Image, { "src": threemonths, "alt": "A description of my image.", "class": "w-full h-64 object-cover transition-transform hover:scale-105" })} </div> <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"> ${renderComponent($$result, "Image", $$Image, { "src": fourmonths, "alt": "A description of my image.", "class": "w-full h-64 object-cover transition-transform hover:scale-105" })} </div> <div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"> ${renderComponent($$result, "Image", $$Image, { "src": fivemonths, "alt": "A description of my image.", "class": "w-full h-64 object-cover transition-transform hover:scale-105" })} </div> </div> <div class="mt-12 text-center"> <a href="#" class="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
Pronto fotografías del evento...
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </section>`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Gallery.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-800 text-white py-6"> <div class="container mx-auto flex justify-between items-center px-4"> <div> <h3 class="text-lg font-semibold">Amalia y Amanda</h3> <p class="text-sm">&copy; 2025 Momentos tuanis. All rights reserved.</p> </div> <div class="flex space-x-4"> <a href="#" class="hover:text-gray-400"></a> <a href="#" class="hover:text-gray-400"></a> <a href="#" class="hover:text-gray-400"></a> </div> <div class="flex space-x-4"> <a href="#" class="hover:text-gray-400"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <!-- Facebook Icon SVG Path --> </svg> </a> <a href="#" class="hover:text-gray-400"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <!-- Twitter Icon SVG Path --> </svg> </a> <a href="#" class="hover:text-gray-400"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <!-- Instagram Icon SVG Path --> </svg> </a> </div> </div> </section>`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Map", $$Map, {})} ${renderComponent($$result2, "Ticket", $$Ticket, {})} ${renderComponent($$result2, "Gallery", $$Gallery, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "TicketPopup", $$TicketPopup, {})} ` })}`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/index.astro", void 0);

const $$file = "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
