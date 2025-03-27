import { c as createComponent, r as renderComponent, a as renderTemplate, d as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_CjbJd46K.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_nEpLLzVs.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const adminCredentials = {
    username: "admin",
    password: "password123"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Admin Login" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="py-20 bg-gray-50 min-h-screen flex items-center"> <div class="container mx-auto px-4"> <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6"> <h1 class="text-2xl font-bold mb-6 text-center">Admin Login</h1> <form id="login-form" class="space-y-4"> <div class="space-y-2"> <label for="username" class="block font-medium">Username</label> <input type="text" id="username" name="username" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" required> </div> <div class="space-y-2"> <label for="password" class="block font-medium">Password</label> <input type="password" id="password" name="password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" required> </div> <div id="error-message" class="text-red-500 text-sm hidden">\nInvalid username or password. Please try again.\n</div> <div class="pt-2"> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">\nLogin\n</button> </div> </form> <div class="mt-4 text-center"> <a href="/" class="text-purple-600 hover:text-purple-800 text-sm">\nReturn to Homepage\n</a> </div> </div> </div> </section> <script>(function(){', "\n    document.addEventListener('DOMContentLoaded', () => {\n      const loginForm = document.getElementById('login-form');\n      const errorMessage = document.getElementById('error-message');\n      \n      if (loginForm) {\n        loginForm.addEventListener('submit', (e) => {\n          e.preventDefault();\n          \n          const username = document.getElementById('username').value;\n          const password = document.getElementById('password').value;\n          \n          // Simple client-side validation (not secure for production)\n          if (username === adminCredentials.username && password === adminCredentials.password) {\n            // In a real app, you would set a secure session or token\n            // For this demo, we'll just redirect to the admin dashboard\n            window.location.href = '/admin/tickets';\n          } else {\n            // Show error message\n            errorMessage.classList.remove('hidden');\n          }\n        });\n      }\n    });\n  })();<\/script> "])), maybeRenderHead(), defineScriptVars({ adminCredentials })) })}`;
}, "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/titoortizcr/Documents/GitHub/Examples.Babyshower/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
