import {
  BlogCard_default,
  require_node
} from "/build/_shared/chunk-2TYFH4YS.js";
import {
  Footer_default,
  Navigation_default
} from "/build/_shared/chunk-KUSWTBUD.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link,
  useLoaderData
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

// app/routes/tags.$tag.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tags.$tag.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tags.$tag.tsx"
  );
  import.meta.hot.lastModified = "1758082204310.4473";
}
var meta = ({
  data
}) => {
  if (!data) {
    return [{
      title: "\uD0DC\uADF8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 - Dairium Blog"
    }];
  }
  const {
    tag
  } = data;
  return [{
    title: `#${tag} - Dairium Blog`
  }, {
    name: "description",
    content: `${tag} \uD0DC\uADF8\uAC00 \uD3EC\uD568\uB41C \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.`
  }, {
    property: "og:title",
    content: `#${tag} - Dairium Blog`
  }, {
    property: "og:description",
    content: `${tag} \uD0DC\uADF8\uAC00 \uD3EC\uD568\uB41C \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.`
  }];
};
function TagPage() {
  _s();
  const {
    posts,
    tag
  } = useLoaderData();
  const getHighlightColor = (index) => {
    const colors = ["highlight-blue", "highlight-green", "highlight-purple", "highlight-orange", "highlight-pink"];
    return colors[index % colors.length];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/routes/tags.$tag.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "gradient-bg py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-flex items-center space-x-3 mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tags", className: "text-secondary-600 hover:text-primary-600 transition-colors duration-200", children: "\u2190 \uD0DC\uADF8 \uBAA9\uB85D" }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl lg:text-5xl font-bold text-secondary-900 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `${getHighlightColor(0)}`, children: [
          "#",
          tag
        ] }, void 0, true, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-secondary-600 max-w-3xl mx-auto", children: [
          tag,
          " \uD0DC\uADF8\uAC00 \uD3EC\uD568\uB41C \uD3EC\uC2A4\uD2B8 ",
          posts.length,
          "\uAC1C\uB97C \uCC3E\uC558\uC2B5\uB2C8\uB2E4."
        ] }, void 0, true, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: posts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-up", style: {
        animationDelay: `${index * 0.1}s`
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogCard_default, { post }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 112,
        columnNumber: 21
      }, this) }, post.id, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 109,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 108,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-16 h-16 text-secondary-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 117,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 116,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-secondary-900 mb-4", children: [
          "#",
          tag,
          " \uD0DC\uADF8\uC758 \uD3EC\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        ] }, void 0, true, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 120,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600 mb-8", children: "\uB2E4\uB978 \uD0DC\uADF8\uB97C \uD655\uC778\uD574\uBCF4\uC2DC\uAC70\uB098 \uBE14\uB85C\uADF8 \uBAA9\uB85D\uC744 \uB458\uB7EC\uBCF4\uC138\uC694." }, void 0, false, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 123,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tags", className: "btn-secondary px-6 py-3", children: "\uD0DC\uADF8 \uBAA9\uB85D\uC73C\uB85C" }, void 0, false, {
            fileName: "app/routes/tags.$tag.tsx",
            lineNumber: 127,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "btn-primary px-6 py-3", children: "\uBE14\uB85C\uADF8 \uB458\uB7EC\uBCF4\uAE30" }, void 0, false, {
            fileName: "app/routes/tags.$tag.tsx",
            lineNumber: 130,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/tags.$tag.tsx",
          lineNumber: 126,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 114,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/tags.$tag.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tags.$tag.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/tags.$tag.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tags.$tag.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(TagPage, "O7kfT6l9OV8TvKb2RhtATKBODR8=", false, function() {
  return [useLoaderData];
});
_c = TagPage;
var _c;
$RefreshReg$(_c, "TagPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TagPage as default,
  meta
};
//# sourceMappingURL=/build/routes/tags.$tag-5GP473SM.js.map
