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

// app/routes/blog._index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog._index.tsx"
  );
  import.meta.hot.lastModified = "1758081968570.451";
}
var meta = () => [{
  title: "\uBE14\uB85C\uADF8 - Dairium Blog"
}, {
  name: "description",
  content: "\uCD5C\uC2E0 \uAE30\uC220 \uD2B8\uB80C\uB4DC\uC640 \uC778\uC0AC\uC774\uD2B8\uB97C \uB2F4\uC740 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694."
}, {
  property: "og:title",
  content: "\uBE14\uB85C\uADF8 - Dairium Blog"
}, {
  property: "og:description",
  content: "\uCD5C\uC2E0 \uAE30\uC220 \uD2B8\uB80C\uB4DC\uC640 \uC778\uC0AC\uC774\uD2B8\uB97C \uB2F4\uC740 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694."
}];
function BlogIndex() {
  _s();
  const {
    posts,
    currentPage,
    hasMore
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "gradient-bg py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl lg:text-5xl font-bold text-secondary-900 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-blue", children: "\uBE14\uB85C\uADF8" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-secondary-600 max-w-3xl mx-auto", children: "\uCD5C\uC2E0 \uAE30\uC220 \uD2B8\uB80C\uB4DC\uC640 \uC778\uC0AC\uC774\uD2B8\uB97C \uB2F4\uC740 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uB9CC\uB098\uBCF4\uC138\uC694." }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 72,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: posts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-up", style: {
          animationDelay: `${index * 0.1}s`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogCard_default, { post }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 87,
          columnNumber: 23
        }, this) }, post.id, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 84,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center space-x-4 mt-12", children: [
          currentPage > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog?page=${currentPage - 1}`, className: "btn-secondary px-6 py-2", children: "\uC774\uC804 \uD398\uC774\uC9C0" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 93,
            columnNumber: 39
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-secondary-600", children: [
            "\uD398\uC774\uC9C0 ",
            currentPage
          ] }, void 0, true, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this),
          hasMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog?page=${currentPage + 1}`, className: "btn-primary px-6 py-2", children: "\uB2E4\uC74C \uD398\uC774\uC9C0" }, void 0, false, {
            fileName: "app/routes/blog._index.tsx",
            lineNumber: 101,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 92,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 82,
        columnNumber: 33
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-16 h-16 text-secondary-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 108,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 106,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-secondary-900 mb-4", children: "\uC544\uC9C1 \uD3EC\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600 mb-8", children: "\uACE7 \uD765\uBBF8\uB85C\uC6B4 \uB0B4\uC6A9\uC73C\uB85C \uCC3E\uC544\uBD59\uACA0\uC2B5\uB2C8\uB2E4." }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "btn-primary px-6 py-3", children: "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30" }, void 0, false, {
          fileName: "app/routes/blog._index.tsx",
          lineNumber: 117,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 105,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 81,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog._index.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/blog._index.tsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog._index.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(BlogIndex, "QnF//WMfZRS/QvCuB8EiCJzzEe4=", false, function() {
  return [useLoaderData];
});
_c = BlogIndex;
var _c;
$RefreshReg$(_c, "BlogIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogIndex as default,
  meta
};
//# sourceMappingURL=/build/routes/blog._index-BTOFJUTX.js.map
