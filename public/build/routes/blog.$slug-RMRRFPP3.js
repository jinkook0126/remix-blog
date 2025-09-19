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

// app/routes/blog.$slug.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/blog.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/blog.$slug.tsx"
  );
  import.meta.hot.lastModified = "1758081994223.3416";
}
var meta = ({
  data
}) => {
  if (!data) {
    return [{
      title: "\uD3EC\uC2A4\uD2B8\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4 - Dairium Blog"
    }];
  }
  const {
    post
  } = data;
  return [{
    title: `${post.title} - Dairium Blog`
  }, {
    name: "description",
    content: post.excerpt
  }, {
    name: "keywords",
    content: post.tags.join(", ")
  }, {
    property: "og:title",
    content: post.title
  }, {
    property: "og:description",
    content: post.excerpt
  }, {
    property: "og:type",
    content: "article"
  }, {
    property: "og:url",
    content: `https://dairium-blog.com/blog/${post.slug}`
  }, {
    property: "og:image",
    content: post.featured_image || "https://dairium-blog.com/og-image.jpg"
  }, {
    property: "article:published_time",
    content: post.published_at
  }, {
    property: "article:author",
    content: post.author.name
  }, {
    property: "article:tag",
    content: post.tags.join(", ")
  }, {
    property: "twitter:card",
    content: "summary_large_image"
  }, {
    property: "twitter:title",
    content: post.title
  }, {
    property: "twitter:description",
    content: post.excerpt
  }, {
    property: "twitter:image",
    content: post.featured_image || "https://dairium-blog.com/og-image.jpg"
  }];
};
function BlogPost() {
  _s();
  const {
    post,
    relatedPosts
  } = useLoaderData();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        post.tags && post.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-6", children: post.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 ${getHighlightColor(index)}`, children: tag }, tag, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 134,
          columnNumber: 48
        }, this)) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 133,
          columnNumber: 51
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight", children: post.title }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-secondary-600 mb-8 leading-relaxed", children: post.excerpt }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 145,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between py-6 border-t border-b border-secondary-200 mb-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white text-lg font-medium", children: post.author.name.charAt(0).toUpperCase() }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 153,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-secondary-900", children: post.author.name }, void 0, false, {
                fileName: "app/routes/blog.$slug.tsx",
                lineNumber: 158,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-secondary-500", children: formatDate(post.published_at) }, void 0, false, {
                fileName: "app/routes/blog.$slug.tsx",
                lineNumber: 161,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-secondary-500", children: [
            Math.ceil(post.content.length / 500),
            "\uBD84 \uC77D\uAE30"
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 150,
          columnNumber: 13
        }, this),
        post.featured_image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: post.featured_image, alt: post.title, className: "w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 174,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 173,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose prose-lg max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-secondary-800 leading-relaxed", dangerouslySetInnerHTML: {
          __html: post.content
        } }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this),
        post.tags && post.tags.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-12 pt-8 border-t border-secondary-200", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold text-secondary-900 mb-4", children: "\uD0DC\uADF8" }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: post.tags.map((tag, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/tags/${tag}`, className: `px-3 py-1 text-sm font-medium rounded-full bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-colors duration-200 ${getHighlightColor(index)}`, children: [
            "#",
            tag
          ] }, tag, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 190,
            columnNumber: 50
          }, this)) }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 189,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 185,
          columnNumber: 51
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      relatedPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-secondary-50 py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-bold text-secondary-900 mb-4", children: [
            "\uAD00\uB828 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-orange", children: "\uD3EC\uC2A4\uD2B8" }, void 0, false, {
              fileName: "app/routes/blog.$slug.tsx",
              lineNumber: 203,
              columnNumber: 22
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 202,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-secondary-600", children: "\uC774 \uD3EC\uC2A4\uD2B8\uC640 \uAD00\uB828\uB41C \uB2E4\uB978 \uAE00\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694." }, void 0, false, {
            fileName: "app/routes/blog.$slug.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 201,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: relatedPosts.map((relatedPost, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-up", style: {
          animationDelay: `${index * 0.1}s`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogCard_default, { post: relatedPost }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 214,
          columnNumber: 21
        }, this) }, relatedPost.id, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 211,
          columnNumber: 59
        }, this)) }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 200,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 199,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "btn-secondary px-6 py-3", children: "\u2190 \uBE14\uB85C\uADF8 \uBAA9\uB85D\uC73C\uB85C" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 224,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "btn-primary px-6 py-3", children: "\uD648\uC73C\uB85C \u2192" }, void 0, false, {
          fileName: "app/routes/blog.$slug.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 223,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/blog.$slug.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/blog.$slug.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/blog.$slug.tsx",
    lineNumber: 125,
    columnNumber: 10
  }, this);
}
_s(BlogPost, "a+/s3ovE06el+X0RjG/ZxGvz954=", false, function() {
  return [useLoaderData];
});
_c = BlogPost;
var _c;
$RefreshReg$(_c, "BlogPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  BlogPost as default,
  meta
};
//# sourceMappingURL=/build/routes/blog.$slug-RMRRFPP3.js.map
