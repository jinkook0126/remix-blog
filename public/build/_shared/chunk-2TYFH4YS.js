import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  Link
} from "/build/_shared/chunk-VNS2C4DF.js";
import {
  createHotContext
} from "/build/_shared/chunk-ILPLU4PC.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/BlogCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/BlogCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/BlogCard.tsx"
  );
  import.meta.hot.lastModified = "1758081924851.2808";
}
var BlogCard = ({
  post,
  featured = false
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };
  const getHighlightColor = (index) => {
    const colors = ["highlight-blue", "highlight-green", "highlight-purple", "highlight-orange", "highlight-pink"];
    return colors[index % colors.length];
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: `card-hover ${featured ? "lg:col-span-2" : ""}`, children: [
    post.featured_image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mb-4 ${featured ? "h-64" : "h-48"} overflow-hidden rounded-lg`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.featured_image, alt: post.title, className: "w-full h-full object-cover transition-transform duration-300 hover:scale-105" }, void 0, false, {
      fileName: "app/components/BlogCard.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/BlogCard.tsx",
      lineNumber: 39,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
      post.tags && post.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
        post.tags.slice(0, 3).map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-700 ${getHighlightColor(index)}`, children: tag }, tag, false, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 47,
          columnNumber: 56
        }, this)),
        post.tags.length > 3 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs font-medium rounded-full bg-secondary-100 text-secondary-500", children: [
          "+",
          post.tags.length - 3
        ] }, void 0, true, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 50,
          columnNumber: 38
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 46,
        columnNumber: 47
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: `font-bold text-secondary-900 leading-tight ${featured ? "text-2xl" : "text-xl"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/blog/${post.slug}`, className: "hover:text-primary-600 transition-colors duration-200", children: post.title }, void 0, false, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600 text-sm leading-relaxed line-clamp-3", children: post.excerpt }, void 0, false, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white text-sm font-medium", children: post.author.name.charAt(0).toUpperCase() }, void 0, false, {
            fileName: "app/components/BlogCard.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/BlogCard.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-secondary-900", children: post.author.name }, void 0, false, {
              fileName: "app/components/BlogCard.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-secondary-500", children: formatDate(post.published_at) }, void 0, false, {
              fileName: "app/components/BlogCard.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/BlogCard.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs text-secondary-500", children: [
          Math.ceil(post.content.length / 500),
          "\uBD84 \uC77D\uAE30"
        ] }, void 0, true, {
          fileName: "app/components/BlogCard.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/BlogCard.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/BlogCard.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/BlogCard.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c = BlogCard;
var BlogCard_default = BlogCard;
var _c;
$RefreshReg$(_c, "BlogCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_node,
  BlogCard_default
};
//# sourceMappingURL=/build/_shared/chunk-2TYFH4YS.js.map
