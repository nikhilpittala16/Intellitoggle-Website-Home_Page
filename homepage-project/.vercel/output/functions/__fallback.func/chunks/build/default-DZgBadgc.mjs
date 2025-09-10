import { _ as __nuxt_component_0 } from './nuxt-link-DkFhxKMN.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { Y as YellowButton } from './YellowButton-BgprSTRb.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA9CAYAAAAd1W/BAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZvRTcMwEIZ/Q9+bETpCmYCwASPABBUTECagG7RMQNkgbJARMkJeeTJ3NJGqkjR2FSWx7z7JSmVdo97X2OdWtsEVWGtXdEmpVdQKY0wJCVDiCbV3+x/uSxA7lOTOdrNDzFCCa9tPisC48YhNHWLWCAwfAclAMbPCR0CUqAAIZ3HeUdfztrG8RD/LepE0W84XbaZ5QR/8kS4buM32IcOr1wO1N5bxJ4CSf6VLBlmU1O5u60f2AHnwMP/hSTCFXDYsYAW5JCyghFwKFsDjv4JMvpoqwCXwE7LIqQw+nK4DVjiWwvuON3QtkE6p0P80DXWfaympfVPyGXwgQZnD/wHZWPcZCv0xBOGoAAhHBUA4KgDCUQEQjgqAcFQAhKMCIBwVAOGoAAhHBUA4KgDCUQEQjgqAcFSAR2w1UMys8BFQOMTkCAxnAcaYHJe30+0pxkXSrPCdA56pfbT0c98LAmThE0zfMI/xp3oHBx+O4K0ueciHprwENNQJl4gALYMYn1mV0ykERFlOvaBJdH9hi1zc5w8ZezyBum1JfmtHPoFqMCH17tRJy+kvGA044kNBsvoAAAAASUVORK5CYII=";
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#42389E] mb-0" }, _attrs))}><div class="max-w-[1920px] mx-auto flex justify-between items-center px-6 md:px-[120px] py-4 md:py-10"><div class="flex flex-row items-center text-2xl font-semibold text-white"><img${ssrRenderAttr("src", _imports_0)} alt="IntelliToggle logo" width="50" height="45"><p>IntelliToggle</p></div><nav><ul class="hidden md:flex space-x-12 text-white text-center font-light cursor-pointer md:text-[15px] lg:text-[18px]"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        "exact-active-class": " font-semibold",
        class: "hover:text-gray-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        "exact-active-class": " font-semibold",
        class: "hover:text-gray-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About `);
          } else {
            return [
              createTextVNode(" About ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        "exact-active-class": " font-semibold",
        class: "hover:text-gray-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pricing `);
          } else {
            return [
              createTextVNode(" Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><div class="hidden md:block">`);
      _push(ssrRenderComponent(YellowButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-semibold text-2xl leading-8"${_scopeId}>Start Sandbox</p>`);
          } else {
            return [
              createVNode("p", { class: "font-semibold text-2xl leading-8" }, "Start Sandbox")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="md:hidden"><button class="text-white focus:outline-none">`);
      if (!mobileMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`);
      }
      _push(`</button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<nav class="md:hidden bg-[#42389E] px-6 py-4"><ul class="flex flex-col space-y-4 text-white font-light"><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          "exact-active-class": " font-semibold",
          class: "hover:text-gray-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          "exact-active-class": "text-[#F9A71E] font-semibold",
          class: "hover:text-gray-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` About `);
            } else {
              return [
                createTextVNode(" About ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/services",
          "exact-active-class": "text-[#F9A71E] font-semibold",
          class: "hover:text-gray-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pricing `);
            } else {
              return [
                createTextVNode(" Pricing ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li><button class="bg-[#F9A71E] hover:bg-blue-700 px-6 py-2 rounded w-full"><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-semibold text-center"> Start Sandbox </p></button></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DZgBadgc.mjs.map
