import { p as publicAssetsURL, a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DkFhxKMN.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, ref, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { Y as YellowButton } from './YellowButton-BgprSTRb.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$4 = "data:image/png;base64,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";
const _imports_1$2 = publicAssetsURL("/github.png");
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#EDECF6] opacity-100 px-6 py-10 md:px-[120px] md:py-[100px]" }, _attrs))}><div class="flex flex-col md:flex-row justify-between gap-10"><div class="flex-1"><div class="flex flex-row items-center text-2xl font-bold mb-4"><img${ssrRenderAttr("src", _imports_0$4)} alt="IntelliToggle logo" width="50" height="45"><p class="ml-2 bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"> IntelliToggle </p></div><p class="text-gray-600 pr-[20px] mb-[10px]"> IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools. </p><img${ssrRenderAttr("src", _imports_1$2)} alt="github icon"></div><div class="flex flex-row flex-1 justify-between mb:gap-10"><div class="flex-1"><ul class="space-y-2"><li><h4 class="text-gray-400 mb-4 font-semibold">Company</h4></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Documentation`);
      } else {
        return [
          createTextVNode("Documentation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="flex-1"><ul class="space-y-2"><li><h4 class="text-gray-400 mb-4 font-semibold">Resources</h4></li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Why IntelliToggle is different`);
      } else {
        return [
          createTextVNode("Why IntelliToggle is different")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Customer Support`);
      } else {
        return [
          createTextVNode("Customer Support")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Terms &amp; conditions`);
      } else {
        return [
          createTextVNode("Terms & conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-black font-semibold"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Privacy policy`);
      } else {
        return [
          createTextVNode("Privacy policy")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="flex-1 flex flex-col mx-auto md:mx-0"><h4 class="text-black font-semibold mb-4"> Subscribe to our Newsletter </h4><div class="flex w-full"><input type="email" placeholder="Your email" class="flex-1 px-3 py-2 rounded-l bg-white text-black focus:outline-none"><button class="bg-[#F9A71E] px-6 py-3 rounded-r-md"><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold"> Subscribe </p></button></div></div></div></footer>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$3 = "" + buildAssetsURL("ControlPanel.CyxpqF5v.png");
const _sfc_main$a = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col gap-[48px] px-8 md:px-[70px] py-[60px] md:py-[120px]" }, _attrs))}><div class="text-center"><h2 class="text-2xl md:text-4xl font-bold">What Is IntelliToggle</h2></div><div class="flex flex-col md:flex-row justify-between items-center gap-[30px] md:gap-[50px]"><div class="flex-1 flex flex-col"><h3 class="font-semibold text-2xl md:text-3xl text-[#0E121B]"> Your AI Dart App\u2019s Control Panel For Feature Releases </h3><p class="mt-4 text-sm md:text-md text-[#5F5F60]"> IntelliToggle is a \u201CDart-Powered\u201D feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster. </p><h4 class="mt-4 text-lg md:text-xl font-semibold text-[#0E121B]"> Benefits </h4><ul class="mt-2 pl-4 text-[#5F5F60] list-disc text-sm md:text-base"><li>Toggle new features without app updates</li><li>Roll out to specific users or regions</li><li>Instantly rollback when needed</li></ul></div><div class="flex-1 flex justify-center md:justify-start"><img${ssrRenderAttr("src", _imports_0$3)} alt="Control Panel" class="w-full max-w-[500px] md:max-w-[830px] h-auto rounded-lg"></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlPanel.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const ControlPanel = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$9 = {
  __name: "ControlPower",
  __ssrInlineRender: true,
  setup(__props) {
    const features = ref([
      {
        id: 1,
        img: "/connect.png",
        title: "Connect",
        description: "Install SDK in your Dart project in 2 mins."
      },
      {
        id: 2,
        img: "/createFlags.png",
        title: "Create Flags",
        description: "Define features in IntelliToggle dashboard."
      },
      {
        id: 3,
        img: "/Ship&Control.png",
        title: "Ship & Control",
        description: "Flip switches anytime, see instant results."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="w-full bg-white flex flex-col items-center gap-10 py-[120px] px-6 md:px-[120px]"><div class="w-full text-center"><h2 class="text-4xl font-semibold leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"> Control &amp; Power-focused </h2></div><div class="flex flex-col md:flex-row gap-10 md:gap-[95px]"><!--[-->`);
      ssrRenderList(features.value, (feature) => {
        _push(`<div class="w-full md:w-1/3 flex flex-col"><img${ssrRenderAttr("src", feature.img)}${ssrRenderAttr("alt", feature.title)} class="object-cover rounded w-full md:w-[497px] h-auto"><div class="mt-4"><h3 class="text-2xl leading-none text-[#1A1C3D]">${ssrInterpolate(feature.title)}</h3><p class="mt-2 text-lg leading-none text-[#5F5F60]">${ssrInterpolate(feature.description)}</p><button class="mt-[32px] border border-[#F9A71E] text-[#F9A71E] px-3 py-2 rounded-lg w-auto"> View Documentation </button></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ControlPower.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "DartCodeAI",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        id: 1,
        img: "/flag.png",
        title: "AutoFlag AI (LLM-Assisted Flag Creation)",
        description: "Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you"
      },
      {
        id: 2,
        img: "/zoom.png",
        title: "SmartRamp AI (AI-Driven Rollout Optimization)",
        description: "Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics."
      },
      {
        id: 3,
        img: "/robo.png",
        title: "ExplainFlags AI (LLM Root-Cause + Insights)",
        description: "Understand issues instantly with AI-generated, plain-language insights tied to your flags."
      },
      {
        id: 4,
        img: "/zigzag.png",
        title: "AutoSegment AI (Behavioral Segmentation)",
        description: "Target the right users automatically. AI builds segments from live behavior\u2014no manual rules."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-[#42389E] bg-[url(/BG.jpg)] bg-cover bg-center bg-blend-soft-light flex flex-col gap-[48px] px-6 md:px-[120px] py-[60px] md:py-[120px]" }, _attrs))}><div class="flex flex-col items-center justify-center gap-2 text-center"><button class="bg-[#F9A71E] px-[32px] py-[8px] rounded-3xl font-semibold"> Coming Soon </button><h2 class="text-white font-bold text-2xl md:text-3xl"> DartCodeAI That Actually Changes Flagging </h2></div><div><div class="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[48px]"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="flex flex-col items-center p-6 border border-neutral-400/50 shadow-lg rounded-xl"><img${ssrRenderAttr("src", feature.img)}${ssrRenderAttr("alt", feature.title)} class="object-cover rounded" height="46" width="46"><h3 class="mt-2 text-white text-center text-lg md:text-xl">${ssrInterpolate(feature.title)}</h3><p class="mt-1 text-[#EDECF6] text-center text-sm md:text-base">${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div><h3 class="text-center text-[#F9A71E] font-semibold text-xl md:text-2xl mt-6"> Enterprise Only </h3></div><div class="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 px-[20px] md:px-[30px] py-[20px] md:py-[25px] bg-transparent backdrop-blur-[1px] border border-neutral-400/50 shadow-lg rounded-xl"><p class="text-white text-lg md:text-2xl text-center md:text-left"><span class="text-[#F9A71E]"> Be The First</span> To Try Out Our New AI Features. </p><div class="w-full md:w-auto flex flex-row gap-2 md:gap-0 p-1 border-2 rounded-lg"><input type="email" placeholder="Enter email address" class="flex-1 px-3 py-2 focus:outline-none bg-transparent text-white flex-1 min-w-0"><button class="bg-[#F9A71E] px-6 py-3 rounded-sm"><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold"> Join AI Early Access </p></button></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DartCodeAI.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _imports_0$2 = publicAssetsURL("/YouTube.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center -mt-px items-center max-w-[1920px] mx-auto pt-[70px] gap-[32px] px-6 md:px-[120px] opacity-100 bg-[url('/Vector.png')] bg-cover bg-center" }, _attrs))}><div class="flex flex-col justify-center items-center text-center text-white"><h1 class="font-semibold px-[20px] md:px-[100px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight"> The First <span class="bg-[#F9A71E] rounded-lg px-2 py-2 inline-block"><span class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent">Dart-Native</span></span> Feature Flag With DartCodeAI </h1><p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-light md:font-semibold max-w-full sm:max-w-[600px] md:max-w-[900px]"> Feature flags built for Dart, Ship faster, roll back safely, and scale with AI-powered delivery </p><p class="text-[#F9A71E] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold max-w-full sm:max-w-[600px] md:max-w-[900px]"> Starting at just $1/month </p></div><div class="flex flex-col items-center w-full text-white"><div class="flex-1 text-left"><p>Valid till 15th September,2025</p></div><div class="flex flex-col sm:flex-row gap-4 sm:gap-6 font-semibold text-lg w-full sm:w-auto justify-center"><button class="px-[44px] py-[7px] bg-[#F9A71E] rounded-lg w-full sm:w-auto"><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent text-center"> Get Access </p></button><button class="border border-[#F9A71E] px-4 py-3 text-[#F9A71E] rounded-lg w-full sm:w-auto text-center"> Join AI Early Access </button></div><div class="mt-4 w-full flex justify-center"><img${ssrRenderAttr("src", _imports_0$2)} alt="YouTube" class="w-full max-w-[1150px] h-auto"></div></div></main>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DartNative.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const DartNative = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$6 = {
  __name: "FeatureFlag",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      { name: "Dart-native SDK & server", intelliToggle: true, otherFlag: false },
      { name: "End-to-end type safety", intelliToggle: true, otherFlag: false },
      {
        name: "AI-assisted roll-outs & cleanup",
        intelliToggle: true,
        otherFlag: false
      },
      { name: "A/B testing built-in", intelliToggle: true, otherFlag: false },
      { name: "Dart-Powered SDKs", intelliToggle: true, otherFlag: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full px-4 md:px-[240px] pb-[100px]" }, _attrs))}><div class="flex flex-col gap-2 md:gap-[48px] mb-8"><h2 class="w-full text-center text-3xl bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"> Dart-Powered Feature Flag </h2><div class="flex flex-col items-start md:items-center"><h3 class="font-semibold text-xl md:text-lg text-[#1A1C3D]"> Not Another Generic Feature Flag Tool </h3><p class="mt-2 text-left md:px-[250px] md:text-center text-[#5F5F60]"> Most tools are built for every language, which means extra layers and slower toggles. IntelliToggle is built in Dart, for Dart \u2014 so it\u2019s faster, safer, and built for your stack. </p></div></div><div class="hidden md:block rounded-lg border border-gray-300 overflow-hidden"><table class="w-full text-left"><thead class="bg-gradient-to-b from-[#42389E] to-[#0F1026] text-xl font-semibold text-white"><tr><th class="px-4 py-2">Features</th><th class="px-4 py-2 text-center">IntelliToggle</th><th class="px-4 py-2 text-center">Other Feature Flag</th></tr></thead><tbody class="bg-[#EDECF6] text-base font-semibold text-[#5F5F60]"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<tr class="border-b border-gray-300"><td class="px-4 py-2">${ssrInterpolate(feature.name)}</td><td class="px-4 py-2 text-center">${ssrInterpolate(feature.intelliToggle ? "\u2714" : "\u2716")}</td><td class="px-4 py-2 text-center">${ssrInterpolate(feature.otherFlag ? "\u2714" : "\u2716")}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div><div class="md:hidden flex flex-col gap-4"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="bg-purple-50 border border-gray-300 rounded-lg p-4"><p class="font-semibold text-gray-800 mb-2 text-left">${ssrInterpolate(feature.name)}</p><div class="flex justify-between text-gray-700"><span>IntelliToggle:</span><span>${ssrInterpolate(feature.intelliToggle ? "\u2714" : "\u2716")}</span></div><div class="flex justify-between text-gray-700"><span>Other Feature Flag:</span><span>${ssrInterpolate(feature.otherFlag ? "\u2714" : "\u2716")}</span></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureFlag.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full px-[50px] md:px-[268px] py-[60px] md:py-[120px] flex flex-col" }, _attrs))}><div class="w-full flex flex-col gap-6 border-2 rounded-3xl md:rounded-lg px-[50px] md:px-[200px] py-[40px] md:py-[60px] bg-gradient-to-b from-[#42389E] to-[#0F1026]"><div class="text-white"><h2 class="text-center font-semibold text-2xl md:text-3xl leading-snug"> Launch Features Confidently With AI Driven Feature Flags </h2><p class="mt-4 font-light text-sm md:text-base text-center text-[#FAFAFA]"> Start for free, scale as your team grows </p></div><div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8 w-full"><button class="w-full md:w-[300px] bg-[#F9A71E] rounded-lg px-6 py-3"><p class="bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent font-bold text-lg md:text-[20px]"> Start for $1/mo </p></button><button class="w-full md:w-[300px] border-2 border-[#F9A71E] text-[#F9A71E] rounded-lg px-6 py-3"> Join AI Early Access </button></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launchFeatures.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LaunchFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0$1 = "data:image/png;base64,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";
const _imports_1$1 = "data:image/png;base64,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";
const _imports_2 = "data:image/png;base64,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";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA9CAYAAACJM8YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAy8SURBVHgB7VtvUttIFn+vJbEJMBXnw1ZBTBLnBCHfpiZx4pwAOEHICSAnwD5B4ASBE4ScABPY1H6LcwKcHQzU7ofR1OQPE6nV+15LsmUjS7ItGKZKvyrbstTqbvV7/f4LoECBAgUKFChQoECBAgUKFChQoECBAgUKFLheQMgZc5WfK+gYyyjEQ6WgAvzpjdambxuUt68QW2fHh03ICeXyL4sSjMXB8+iBrQxln38xW7bdtJPuV8JYo/b7nc7BNoyJUqlWmp711hSqknKcrbOzf7chZ8zN1SpgyJr+I51m2hgm5AB+sJszziqgWEIXapp1VMBB/WxU0d8olvn0nbvVNnjQ9KTTmHQxFPUpADYuXDB4CgjTsxJuzlabClQjjrmIwG+ZIRXC6tzCk/a4DDg9I1/TzyrS84NpPaDvZcgZBhGY5vmGj9EQL+lnO6m9gAlRLldXZ2blEaJ4TYSrjXKv3uW0qMK0ju6Uq2/m5n6uwCWC5ycA93gsZszwfKVCxxGJ40kswbigHdz7o25Fx5hfqO7x587C0zpcIcYmMosMnjBzFDHt+IsSgoltWXvMNDAhaLdueaCe09xWlPJekdrYoU87OtbNWfk2/NtusxhXDfq06N7mf08PdmFMeK75KuxH0Njh+fNzKDGT6Y2A6j5cIcYS177+km/79G0e8MXlG+L0+yfH7xswJmhxW53Oh+bg+TsLT+pEYS3SebFJLNdCsXxyfEjXoA4T4uys2aafR3CNMDKRmcCkCPaIIJPv3qFQdRKplZPOwUvIEUzI8sKTkgJc4//oE7zJx8QAG4BY4eNvfxivokYaSy205BrZD8uIbExiC1laCHhI6+Abe5ZcPT368HmBGMdDfMGnhFI7x8REum+QUaOwxlKQD1wlX/2v86E1OE4wP5YwrUltlpHENU+CDZRcxHMaSKTSjt6AnCFdc7M3BNRC3UyEr9HXKn9u3v7R1aXM1IYpP5Ihta4JrG9UiyxxBLXtiuAASmEl7IdURaXbd9QAI4kV3meg0OOX7z19ER1Hj0XjhDbLfLm6DmMiM5F5MYQl9zKKaJv1IutEz3QedD+sJ1lHkr6CTFD1+flqrtYpi1NkNy5AlKCDiGFqfq5mOP/MzK7gc59NwP3Q/+g55cF62J/uH2E7ep2IvhE1FkdBZnE985O3oVIIrCcO0Dgb7me2wRePm1o0GbJOk3+R1CcawJZwM8nHHRU0T5sW0V9QR7Cb8zmunTBd2pFY0e1o4b9/MVfCeUT1expOOwer+nlNeaRPIOyeHverIs8VK7QeJMK9rdPOv7rShsV6IClKUzfJN7ZhZKMwE5E1RyuZKC70InztLUIaAgNldb78uMXuV0JTCi6467Y9uVEUghirpMJjyzsa1o7E7DPsHkMj+mys34kAz0Z2G4eA14OY+dGNWbVIa0IiG0tKKRt5NweTsIS8vJ0sDJnIseyinHYOV2EMMNfOlau2CJz7eOAaLcBmHrtZMyz0FouNpWFt0ffjNWKDIySG84oZBjv9DbL+Rr9TxHw6T9XJOoRGyn/YdRbRLI5gArB4VxGfMgZ+RC0HCNPrqofstgGJzQe/XPBtEdUtyAls7+QlFS70ndYAp5xEw0dJ5znkAN7RKnBn4icilmBCsF/Mxlz4nyzhnaT2NJ/97vCO6NOhmvkBczEKtVsa2jtKtb59MW6fHB8g/7KUhAmRLq69hMVVsJ1nAJ7jyui7GxcQujtZRLaH4hYnSvhYOqJkUOKCDby+nUK+7lnn/XZSP5Rk2Kb5BDsfN+bvPr1FEucdG2NCkApTMB4ULFMId4jvi91ECv9Oz1THHaWLVCIniRAH5BbkCNZ75YWqPcw1yWpdEmE20bW0hSpi1Jp2g6STGmg58wMZjW6UTKl16ns9TMCMAjasIs9W0vH6hSqwW2mZZstxpX+NVCMZdBVqY5OYreURk0gU11qMDIcdRmryhKfg3bBrhvCDCxPAZt1/enz4PKsE8sOdqjHg52pbJEidZoanvNhQLcfOo9eCQMkyE3hw3HGQuJMlRWOGcQHthtwJrGF4LVIR8b5zEHaMnY+kUKN5MeVGbsjv9NVOzV8LFsOizYfff5v6PXrp2xeTLfu6r9NpisqzT4jBAx+2Er1HomoLxG19DH5/IbQnsfCkJXSSAn1DznHbA9fWmLgcsKFn2iG1QLEHoXX/D4BW2hhxSLTROSOkhrk2FJE5+TXf2PJfNWYSdGgV1arnOH27Xydp0PjIx2TAtU47769VUiKKxJ389auxe6N03oy7dm7fyC0CdV0xf5dCqoqsccWul/WRkia7CrxPIMR9HZ8OwCFcuMZIJLK28my4UmJ6hldCL15JaNE7IkIrm5ly1GDK6a8Hu5QY2AlCr9ooQjZjVM/uYhfnbIJyoatALuU/eQKleDhMiUQTC0kIU3acJVKub51y+c/0T6OXG+m4c7napLE3ulkoH2zENaJx5uuKnIJy+eHO3erRsEyXK2ElrWpj/t7TNfRUhoXH+qiFCeynk/rSTHPWzr9A77KQG5HZEPHQeB0/CO7TgtbT+mDrlWuwhl33XOdB0g7088+9iBbDd3VUmwMYAzsRxiH03xG5ievA3arFXuRFzgBMSN2xBZtEYG2V9xN411GyEfXlWYwLU1dTBuFIxW7Rfp6lwdcR2VKNgX/Yheu2864nDsRsbdj1NAtWCYiEGVUjqNnqQ5DeXCkvPNkMS4DI32R37UFcn//kqhAOiXLttnKGMpkuSaZoHM2hlKXtjVl3McxT8wYYZLKoWgi9mBszcnlY+zSkEllzP8g+EZql1ncU6Miap+qJkULpNIffT7s40ON+VuywDgmgMGL9T0cu+fVaUIkW9DG02mDih7aBrt22OIG/q1znVZSAzJzCk/UggNFty2W3g6qg1xZLPUWJuv486oczEwjX0ms+PetxPVmlF9702zueXMkacZy47npSaCmBxl5ijDYlEUKJhKVeU0jVsboE1/C6kgEj9Vdca6Xtghjjj9tx2XBYH842ABt58XNXdb96xEdoEMa2pbHYD48v71GLF+6h9pYw3mYtB/rLiMwTLN99+poXNInAvDPZ5UnqS++MABJkJu5WHkbaYYW/dUGBp7Z7/fp1avyBIIyrPP+an2qM2gCUQVPyEcXeX/ZcPV3soOcmpLsfnNc13lzzxu056xR0oCtgYudK89B96xq5IJZNhM6aY79SPznUR4i4JJRkEZvKibpmbAT9b07BbzAy/OS/YbrrKpSjJD1I7EcXfZd35vevHMc+sOfvPV6HbtCmzwZoUbtKkLnSxQ62DZsdEq3EGI8Q5eLp6WHXDaRzKyKo/aKxLySEAvXTnQdJPmIi3wPh980gA1KJzMYKRY36DBN0rDpFgvosYdJvTc9wYg0Yw7Fq1P6IHrCihZ7KmqlTjbPO4XZaK9JZdugNynODY8if0+4xyPBRPQfyE395gA/DU3Fp1Kgxhx4+642Pa/R8L3r/ezVkF5IqJjyjtq912a0fUGn3Ll6sNEExUEjhmm0wpd9aqQpkQKadPOj40yRh0OfkAYcFCMox7dMQ1I3VM7UVap8WXetVwwC2mlNzzp5fRBCM5YvMaE1XmlHDKiJS5FdC7EmlKAOT1NKEY/HOddVaemHvPl1bfcm4dmFNhk/gg9Ws7f8hrG2yNjcCC7c2R8bT2X/e7wxrHwRNasFY7XNKxPAxorJDcc01XYlFfhHpQUy2TmnBIXF1P0bAxZDRumq6cz/4/3BYNUxeuHZE1kn9EePBbC2THtwKKzgEGU9EyMqgC8M2gV8/rro6jgi7EyYuaNG5YMHfWT9MbtNXXMgWsksGVLDLWcT7r7N4cJuYcmuwrfrx413EnqgFvzYXLYTt+uqxLwnXhsjhW4AnY1absL4kwi6xyxH0WCd/ko079jM/cZKeLNTlqLE3qBI819wmkeon7VGtU2qx5BET8DXBwRNPLVto2PPz1ZdTprHpuH7baP0XShLjBmWtqC1a1jq5W4NVKCX266XlNPFPaxEMuQaXjPGILEjnqf5QJem1NowB/7UTaOQRWpwyxXMKcmx238rw3zmq6KrKAWMvTiWwkTlfftzoFvvze0iAq4PjcLVGu00WdqRtt/7LiA4CJcPw33UCzSy+pNHvUbkW9LW9RIxFZM6zAoz+ugaDdSDtkhaJzH1lyd08szn+e8agU4MCFe2QGJckZKpOPFOFxf4xqcWutOkE0maUtoNvVAbQ6cqUN0gmxpWkGsNY7FWn54K88iIFMErkitjf/zBGeqdKR+OCGLNBQZZOgiqJtgUSxcOeVQdRTLfCr8GE8wkLGxjhfUnFDnHtCxQoUKBAgQIFChQoUKBAgQIFChQoUKBAgb8T/g9GNrU5YhWFRAAAAABJRU5ErkJggg==";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAA9CAYAAACJM8YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUWSURBVHgB7ZtdUhtHEMe7Z1exbFMV5SFVMoaKOEF4pFyQEicIuQGcwOEENiewOUHgBIYTsAnElUd8Ai8VFFHJyz7EVQrsTGdmZSUyml3NfiY2/auCXXZ2pjUzy/x7elsADMMwDMMwDMMwDMMwDMMwDMMwDFM1CDXQ7a71wPd7UABJKvpj8Po8aWdpvQ8lmW4vjbx2Rn/651EURPPuyzsOLp+1CD7UgPD9bf38PIMCIIpAHza73X5PgDyBkgj0YHF5IwTCAxVfH15d/RJOlxex82Ah3osieD7vPtFqnQBBDxyZ9B0qppZJJiL9lGMIRUCM/m0HQqgCSn5to9/SD8/a9u2JzmtHL3/f6sPzrHvMw0NKmtMQnBvGuasDw1ipRZM7nX6n3Rl1oACjqB1N9K7b05pWE2XtTNe3UUebRalludaa9T3ErUKafH8hDrTejTU5lm+hJu4vyFJ2HixIPSHwha3s0fLGFsbwCnIy6TtUjIA7il7CVs2KA8XppHnlqBLNZhiGqZBaHK/bGN1DL20vqvaHg59fggOLy+uvSOHqTAFCOLw83cxVRxOD/M4WfMiqcxtC2rm6PAuK1AUFu8Ph6RHUTC2Olw3EtKAAOusiEXas7WCBOhovVlHeOrMkQZ/AnJmHGUhuoeO/DgpZxidwppFJbrchGsVk9xpjPwRHBMldiWJmYDylotx1dAjxdlBkXp15ZPbTwujdZ5WHMJk7SiOa3Ov1O3/F0rpvFASHg8HpATig958vdIjSTe8yQB3G/G1wulOVHdOekt4e+vIHyIOE/U9Gk0cj6Agf+rYy7bj8CK7ogddPZR9KQMmE3OwUtBNhUgwfLuX6ovCSOLWtzhv987XlutHkQ2iA5jT5BqwD64Fy1iWKaY88LDcw8iZI0+J5dnSQIyI9YqTArtcEsw+spBA87FnvlyoAhqmCxjT5WsoXtjKK4dhVlxaX1p/pvVgPSuBiL80OAUbDX3/afbT0zUtE+hwcbN275wVpfRdEh5dTe+y6aFKTt21l6NGFPjhNsh7kvnZy+lAC9GBbx5w3rzIGN82OnthQH3YR9JaN8CnMQav0cVbfiZS7P1KCxjT5WuucrUy9DyS4YDzxXI5aCkhkPOcActohRdG4vjoinP9u5/fh2VGyiqX0/RqA98lMNTSmyaMbuWUr80CeDxyT18x7Wptna7zeNJ2tq04SwvRkH1IYvfOOTAJAVt9dPP0qaFKTrYECAmGWMrdli+CpQIsm+0ke1VGuOp6ezJUnveHb1xdF7IwlKKVPei+uJ/jAnGf1HT1htpUHUDONvaAgoMB6ndwT/gTQG2W5jhlJg2l1DPF1ktlxUcROGAbRo8cbh1qgv5q5UeH+9J9pfVcoQmCYKqgvkW8hLhxjnmxvqkiuz2KSJJ/Hzu2t15ePn6x6U2+sbAnyru1/VMn1Dx/KLb3XzBesn4CJ7q1UlVyfgcmMTBLxBKCbnfefbfpSC4V+n4xTjpVndPaficrTj48quV4JiPQGOIRCJAGH8VlVyfU2kI7z26GZ+7R27+P0GyvtMc/Ucm2fk+uZovzvkusNV+F471hHcr0tgT2Pnclnm2bSX1tZFe2XpT5NjlvlNbni5HqzlWm3R0YzP5hkEbfc7Fg02WCcTN3GSbe7tmL9Qp1rP1LaL8tdSK6PzOQqoM3h5dlmHRGmscdNe01Er4rwSS/Xrt8tqns5/a+Xa4ZhGIZhGIZhGIZhGIZhGIZhGIapnr8Bp06xNU2q3coAAAAASUVORK5CYII=";
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-white py-24 sm:py-32" }, _attrs))}><div class="mx-auto max-w-7xl px-6 lg:px-8"><h2 class="text-center text-2xl font-semibold text-black"> Trusted by various engineering teams </h2><div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"${ssrRenderAttr("src", _imports_0$1)} alt="Transistor" width="158" height="48"><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"${ssrRenderAttr("src", _imports_1$1)} alt="Reform" width="158" height="48"><img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"${ssrRenderAttr("src", _imports_2)} alt="Tuple" width="158" height="48"><img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"${ssrRenderAttr("src", _imports_3)} alt="SavvyCal" width="158" height="48"><img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"${ssrRenderAttr("src", _imports_4)} alt="Statamic" width="158" height="48"></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LogoCloud.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const LogoCloud = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("OpenFeature.rWpD6h3e.png");
const _imports_1 = publicAssetsURL("/arrow.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OpenFeature",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#EDECF6] flex flex-col md:flex-row justify-between items-center gap-8 md:gap-[200px] px-6 md:px-[120px] py-10 md:py-[120px]" }, _attrs))}><div class="flex-1 flex justify-center md:justify-start"><img${ssrRenderAttr("src", _imports_0)} alt="Open Feature" class="w-full max-w-[830px] h-auto"></div><div class="flex-1 flex flex-col text-left items-start md:items-start"><h2 class="text-[#0E121B] text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[36px] font-semibold font-[&#39;Merriweather Sans&#39;] mb-4"> Seamless Feature Management with OpenFeature </h2><p class="text-lg text-[#5F5F60] font-normal mb-6"> Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly. </p>`);
      _push(ssrRenderComponent(YellowButton, { class: "w-full md:w-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-row items-center justify-center md:justify-start gap-2"${_scopeId}><span class="font-bold text-xl"${_scopeId}>Learn More</span><img${ssrRenderAttr("src", _imports_1)} alt="arrow" class="w-5 h-5"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-row items-center justify-center md:justify-start gap-2" }, [
                createVNode("span", { class: "font-bold text-xl" }, "Learn More"),
                createVNode("img", {
                  src: _imports_1,
                  alt: "arrow",
                  class: "w-5 h-5"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpenFeature.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Reasons",
  __ssrInlineRender: true,
  setup(__props) {
    const features = ref([
      {
        id: 1,
        img: "/switch.png",
        title: "Safer, faster rollouts",
        description: "Control feature releases in minutes, not weeks without risking production stability"
      },
      {
        id: 2,
        img: "/Ship.png",
        title: "Confidence to ship",
        description: "Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes"
      },
      {
        id: 3,
        img: "/AI.png",
        title: "Future-ready with AI delivery",
        description: "Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full bg-white flex flex-col items-center gap-10 py-10 px-4 md:px-[120px]" }, _attrs))}><h2 class="text-3xl font-bold text-center leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"> Why Teams use IntelliToggle </h2><div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-[94px]"><!--[-->`);
      ssrRenderList(features.value, (feature) => {
        _push(`<div class="flex flex-col items-center md:items-start gap-6"><img${ssrRenderAttr("src", feature.img)}${ssrRenderAttr("alt", feature.title)} class="object-cover rounded" width="129" height="118"><div class="text-center md:text-left"><h3 class="text-2xl leading-snug text-[#1A1C3D]">${ssrInterpolate(feature.title)}</h3><p class="mt-2 text-lg leading-snug text-[#5F5F60]">${ssrInterpolate(feature.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="w-full"><div class="w-full flex flex-col md:flex-row justify-between items-center gap-4 bg-[#EDECF6] border border-gray-300 rounded-lg px-6 md:px-8 py-4 text-center shadow"><h3 class="text-lg md:text-2xl leading-snug text-[#5F5F60] text-center md:text-left"><span class="text-[#1A1C3D] mr-2 font-bold">Read a 2-min case note:</span> How a sample Flutter app shipped faster with IntelliToggle </h3>`);
      _push(ssrRenderComponent(YellowButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-semibold text-lg leading-snug"${_scopeId}>Read Now</p>`);
          } else {
            return [
              createVNode("p", { class: "font-semibold text-lg leading-snug" }, "Read Now")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reasons.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Subscription",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full max-w-[1920px] mx-auto p-6 md:p-[120px] flex flex-col gap-12 items-center justify-center bg-[#EDECF6] opacity-100" }, _attrs))}><div class="w-full text-center"><h2 class="text-3xl font-bold leading-snug bg-gradient-to-b from-[#42389E] to-[#0F1026] bg-clip-text text-transparent"> Plans Built For Every Stage Of Growth </h2></div><div class="flex flex-col gap-6 items-center w-full md:w-auto"><button class="bg-gradient-to-b from-[#42389E] to-[#0F1026] text-white font-semibold w-full max-w-[280px] px-6 py-3 rounded-lg shadow"><div class="flex flex-col items-center"><p class="text-[20px]">Price Starts at</p><p><span class="text-[48px]">$10</span> /month</p></div></button>`);
      _push(ssrRenderComponent(YellowButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-semibold text-lg"${_scopeId}>View Subscription Details</p>`);
          } else {
            return [
              createVNode("p", { class: "font-semibold text-lg" }, "View Subscription Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col md:flex-row bg-white rounded-xl px-6 md:px-[32px] py-8 md:py-[64px] gap-6 md:gap-12 w-full items-center md:items-start justify-center"><div class="flex-1 text-center md:text-left"><p class="text-2xl font-semibold mb-2"> Start Your 7-Day Free Sandbox Plan </p><p class="text-base text-[#5F5F60]"> Join over 1,000+ startups already growing with Untitled. </p></div><div class="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">`);
      _push(ssrRenderComponent(YellowButton, { class: "w-full md:w-auto" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="font-semibold text-lg"${_scopeId}>Get Started</p>`);
          } else {
            return [
              createVNode("p", { class: "font-semibold text-lg" }, "Get Started")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="bg-white border border-gray-300 text-gray-800 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 w-full md:w-auto"> Learn More </button></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subscription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Footer = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(DartNative, null, null, _parent));
      _push(ssrRenderComponent(LogoCloud, null, null, _parent));
      _push(ssrRenderComponent(ControlPanel, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(LaunchFeatures, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BnNSAwaP.mjs.map
