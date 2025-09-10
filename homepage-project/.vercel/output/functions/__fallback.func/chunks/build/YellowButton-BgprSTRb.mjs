import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["bg-[#F9A71E] px-6 py-3 rounded-lg", _ctx.$attrs.class]
  }, _attrs))}><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent text-center">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</p></button>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/YellowButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const YellowButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { YellowButton as Y };
//# sourceMappingURL=YellowButton-BgprSTRb.mjs.map
