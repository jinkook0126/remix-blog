import {
  Footer_default,
  Navigation_default
} from "/build/_shared/chunk-KUSWTBUD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link
} from "/build/_shared/chunk-VNS2C4DF.js";
import {
  createHotContext
} from "/build/_shared/chunk-ILPLU4PC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tags.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tags.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tags.tsx"
  );
  import.meta.hot.lastModified = "1758082204304.1638";
}
var meta = () => [{
  title: "\uD0DC\uADF8 - Dairium Blog"
}, {
  name: "description",
  content: "\uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB97C \uD0DC\uADF8\uBCC4\uB85C \uBD84\uB958\uD558\uC5EC \uD655\uC778\uD574\uBCF4\uC138\uC694."
}, {
  property: "og:title",
  content: "\uD0DC\uADF8 - Dairium Blog"
}, {
  property: "og:description",
  content: "\uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB97C \uD0DC\uADF8\uBCC4\uB85C \uBD84\uB958\uD558\uC5EC \uD655\uC778\uD574\uBCF4\uC138\uC694."
}];
function Tags() {
  const tags = [{
    name: "\uC6F9\uAC1C\uBC1C",
    count: 5,
    color: "highlight-blue"
  }, {
    name: "React",
    count: 3,
    color: "highlight-green"
  }, {
    name: "TypeScript",
    count: 4,
    color: "highlight-purple"
  }, {
    name: "\uB514\uC790\uC778",
    count: 2,
    color: "highlight-orange"
  }, {
    name: "UX",
    count: 3,
    color: "highlight-pink"
  }, {
    name: "\uD29C\uD1A0\uB9AC\uC5BC",
    count: 6,
    color: "highlight-blue"
  }, {
    name: "\uC811\uADFC\uC131",
    count: 2,
    color: "highlight-green"
  }, {
    name: "\uC131\uB2A5",
    count: 3,
    color: "highlight-purple"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/routes/tags.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "gradient-bg py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl lg:text-5xl font-bold text-secondary-900 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-blue", children: "\uD0DC\uADF8" }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-secondary-600 max-w-3xl mx-auto", children: "\uAD00\uC2EC \uC788\uB294 \uC8FC\uC81C\uBCC4\uB85C \uD3EC\uC2A4\uD2B8\uB97C \uCC3E\uC544\uBCF4\uC138\uC694." }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 82,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tags/${tag.name}`, className: "card-hover text-center group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center bg-secondary-100 group-hover:scale-110 transition-transform duration-200`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `text-2xl font-bold ${tag.color}`, children: tag.name.charAt(0) }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 96,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 95,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-secondary-900 mb-2", children: tag.name }, void 0, false, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 100,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-secondary-500", children: [
          tag.count,
          "\uAC1C \uD3EC\uC2A4\uD2B8"
        ] }, void 0, true, {
          fileName: "app/routes/tags.tsx",
          lineNumber: 103,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 94,
        columnNumber: 19
      }, this) }, tag.name, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 93,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 91,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tags.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/tags.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tags.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_c = Tags;
var _c;
$RefreshReg$(_c, "Tags");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Tags as default,
  meta
};
//# sourceMappingURL=/build/routes/tags-32V57KZG.js.map
