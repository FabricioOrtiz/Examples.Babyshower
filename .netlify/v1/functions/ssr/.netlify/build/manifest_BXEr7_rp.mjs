import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_CjbJd46K.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/","cacheDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/node_modules/.astro/","outDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/dist/","srcDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/","publicDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/public/","buildClientDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/dist/","buildServerDir":"file:///C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CoEGXvT4.css"}],"routeData":{"route":"/admin/tickets","isIndex":false,"type":"page","pattern":"^\\/admin\\/tickets\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"tickets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/tickets.astro","pathname":"/admin/tickets","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CoEGXvT4.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/tickets","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/tickets\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"tickets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/tickets.js","pathname":"/api/tickets","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CoEGXvT4.css"}],"routeData":{"route":"/ticket-details","isIndex":false,"type":"page","pattern":"^\\/ticket-details\\/?$","segments":[[{"content":"ticket-details","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ticket-details.astro","pathname":"/ticket-details","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.CoEGXvT4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/admin/tickets.astro",{"propagation":"none","containsHead":true}],["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/ticket-details.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/admin/tickets@_@astro":"pages/admin/tickets.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/api/tickets@_@js":"pages/api/tickets.astro.mjs","\u0000@astro-page:src/pages/ticket-details@_@astro":"pages/ticket-details.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BXEr7_rp.mjs","C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CToia9Qz.mjs","C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/TicketPopup.astro?astro&type=script&index=0&lang.ts":"_astro/TicketPopup.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.CMZgWnUY.js","C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Ticket.astro?astro&type=script&index=0&lang.ts":"_astro/Ticket.astro_astro_type_script_index_0_lang.CvsQiASY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/TicketPopup.astro?astro&type=script&index=0&lang.ts",""],["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"hero-get-tickets\");e&&e.addEventListener(\"click\",()=>{const t=document.getElementById(\"ticket-popup\");if(t){const n=document.getElementById(\"ticket-form\");n&&n.reset();const o=document.getElementById(\"ticket-id\");o&&(o.value=\"1\"),t.classList.remove(\"hidden\")}else document.querySelector(\"#tickets\")?.scrollIntoView({behavior:\"smooth\"})})});"],["C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/components/Ticket.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const d=document.getElementById(\"ticket-popup\"),p=document.getElementById(\"close-popup\"),u=document.getElementById(\"ticket-form\"),r=document.getElementById(\"ticket-id\"),m=document.getElementById(\"name\"),h=document.getElementById(\"email\"),I=document.getElementById(\"numberOfTickets\"),g=document.querySelectorAll(\".buy-ticket-btn\");function w(){const e=localStorage.getItem(\"ticketUsers\");return e?JSON.parse(e):[{id:1,name:\"John Smith\",email:\"john@example.com\",numberOfTickets:2,ticketId:1},{id:2,name:\"Sarah Johnson\",email:\"sarah@example.com\",numberOfTickets:4,ticketId:2},{id:3,name:\"Michael Brown\",email:\"michael@example.com\",numberOfTickets:1,ticketId:3},{id:4,name:\"Emma Wilson\",email:\"emma@example.com\",numberOfTickets:3,ticketId:2},{id:5,name:\"David Lee\",email:\"david@example.com\",numberOfTickets:2,ticketId:1}]}function f(e){return localStorage.setItem(\"ticketUsers\",JSON.stringify(e)),e}let n=w();function v(){const t=new URLSearchParams(window.location.search).get(\"userId\");if(t){const o=n.find(s=>s.id.toString()===t);o&&i(o)}}v();function i(e=null){e?(r.value=e.ticketId,m.value=e.name,h.value=e.email,I.value=e.numberOfTickets):u.reset(),d.classList.remove(\"hidden\"),m.focus()}g.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-ticket-id\");r.value=t;const s=new URLSearchParams(window.location.search).get(\"userId\");if(s){const c=n.find(a=>a.id.toString()===s);c?i(c):i()}else i()})}),p.addEventListener(\"click\",()=>{d.classList.add(\"hidden\");const e=new URL(window.location);e.searchParams.has(\"userId\")&&(e.searchParams.delete(\"userId\"),window.history.replaceState({},\"\",e))}),u.addEventListener(\"submit\",e=>{e.preventDefault();const t={ticketId:parseInt(r.value),name:m.value,email:h.value,numberOfTickets:parseInt(I.value)},s=new URLSearchParams(window.location.search).get(\"userId\");if(s){const a=n.findIndex(l=>l.id.toString()===s);a!==-1&&(n[a]={...n[a],...t},f(n),k(\"Ticket updated successfully!\"))}else{const a={id:n.length>0?Math.max(...n.map(l=>l.id))+1:1,...t};n.push(a),f(n),k(\"Ticket booked successfully!\")}d.classList.add(\"hidden\");const c=new URL(window.location);c.searchParams.has(\"userId\")&&(c.searchParams.delete(\"userId\"),window.history.replaceState({},\"\",c))});function k(e){const t=document.createElement(\"div\");t.className=\"fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50\",t.textContent=e,document.body.appendChild(t),setTimeout(()=>{t.remove()},3e3)}});"]],"assets":["/_astro/5meses.CAxmHIao.jpg","/_astro/4meses.EB6CiqPo.jpg","/_astro/3meses.CIgXyURz.jpg","/_astro/mapa.D3u7Ltag.png","/_astro/index.CoEGXvT4.css","/5meses.PNG","/favicon.svg","/invitation.png","/invitation.svg","/mapa.svg","/twins.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"z47ncIU7eNuer/GW5Pql3UaSY8nK7ZItNiOVJISLppg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
