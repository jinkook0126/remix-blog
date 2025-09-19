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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1758081954738.1443";
}
var meta = () => [{
  title: "Dairium Blog - \uD604\uB300\uC801\uC778 \uBE14\uB85C\uADF8 \uD50C\uB7AB\uD3FC"
}, {
  name: "description",
  content: "\uB208\uC774 \uD3B8\uC548\uD55C \uB514\uC790\uC778\uACFC \uBC18\uC751\uD615 \uB808\uC774\uC544\uC6C3\uC744 \uAC16\uCD98 \uD604\uB300\uC801\uC778 \uBE14\uB85C\uADF8 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."
}, {
  property: "og:title",
  content: "Dairium Blog"
}, {
  property: "og:description",
  content: "\uB208\uC774 \uD3B8\uC548\uD55C \uB514\uC790\uC778\uACFC \uBC18\uC751\uD615 \uB808\uC774\uC544\uC6C3\uC744 \uAC16\uCD98 \uD604\uB300\uC801\uC778 \uBE14\uB85C\uADF8 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4."
}];
function Index() {
  _s();
  const {
    posts
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "gradient-bg py-16 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl lg:text-6xl font-bold text-secondary-900 mb-6 fade-in", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-blue", children: "Dairium" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this),
          " \uBE14\uB85C\uADF8\uC5D0",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this),
          "\uC624\uC2E0 \uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4"
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl text-secondary-600 mb-8 max-w-3xl mx-auto leading-relaxed", children: [
          "\uD604\uB300\uC801\uC774\uACE0 \uB208\uC774 \uD3B8\uC548\uD55C \uB514\uC790\uC778\uC73C\uB85C \uC81C\uC791\uB41C \uBE14\uB85C\uADF8\uC5D0\uC11C",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-green", children: " \uD765\uBBF8\uB85C\uC6B4 \uC774\uC57C\uAE30" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          "\uC640",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-purple", children: " \uC720\uC6A9\uD55C \uC815\uBCF4" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          "\uB97C \uB9CC\uB098\uBCF4\uC138\uC694."
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "btn-primary px-8 py-3 text-lg", children: "\uBE14\uB85C\uADF8 \uB458\uB7EC\uBCF4\uAE30" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/about", className: "btn-secondary px-8 py-3 text-lg", children: "\uB354 \uC54C\uC544\uBCF4\uAE30" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "py-16 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl lg:text-4xl font-bold text-secondary-900 mb-4", children: [
            "\uCD5C\uC2E0 ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-orange", children: "\uD3EC\uC2A4\uD2B8" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 88,
              columnNumber: 20
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-secondary-600 max-w-2xl mx-auto", children: "\uCD5C\uC2E0 \uAE30\uC220 \uD2B8\uB80C\uB4DC\uC640 \uC778\uC0AC\uC774\uD2B8\uB97C \uB2F4\uC740 \uD3EC\uC2A4\uD2B8\uB4E4\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        posts.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: posts.map((post, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "slide-up", style: {
          animationDelay: `${index * 0.1}s`
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogCard_default, { post, featured: index === 0 }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this) }, post.id, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 96,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 95,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-12 h-12 text-secondary-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 104,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-secondary-900 mb-2", children: "\uC544\uC9C1 \uD3EC\uC2A4\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600", children: "\uACE7 \uD765\uBBF8\uB85C\uC6B4 \uB0B4\uC6A9\uC73C\uB85C \uCC3E\uC544\uBD59\uACA0\uC2B5\uB2C8\uB2E4." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 110,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 24
        }, this),
        posts.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/blog", className: "btn-primary px-8 py-3 text-lg", children: "\uBAA8\uB4E0 \uD3EC\uC2A4\uD2B8 \uBCF4\uAE30" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 115,
          columnNumber: 34
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "bg-white py-16 lg:py-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl lg:text-4xl font-bold text-secondary-900 mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "highlight-pink", children: "\uD2B9\uBCC4\uD55C" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this),
            " \uACBD\uD5D8"
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-secondary-600 max-w-2xl mx-auto", children: "Dairium \uBE14\uB85C\uADF8\uB9CC\uC758 \uD2B9\uBCC4\uD55C \uAE30\uB2A5\uB4E4\uC744 \uB9CC\uB098\uBCF4\uC138\uC694." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 130,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 text-primary-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 139,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 138,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-secondary-900 mb-2", children: "\uB208\uC774 \uD3B8\uC548\uD55C \uB514\uC790\uC778" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 143,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600", children: "\uACFC\uD559\uC801\uC73C\uB85C \uAC80\uC99D\uB41C \uC0C9\uC0C1\uACFC \uD0C0\uC774\uD3EC\uADF8\uB798\uD53C\uB85C \uC7A5\uC2DC\uAC04 \uC77D\uC5B4\uB3C4 \uD53C\uB85C\uAC10\uC774 \uC801\uC2B5\uB2C8\uB2E4." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 text-accent-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 155,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 154,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 153,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-secondary-900 mb-2", children: "\uC644\uBCBD\uD55C \uBC18\uC751\uD615" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600", children: "\uBAA8\uB4E0 \uB514\uBC14\uC774\uC2A4\uC5D0\uC11C \uCD5C\uC801\uD654\uB41C \uACBD\uD5D8\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uBAA8\uBC14\uC77C\uBD80\uD130 \uB370\uC2A4\uD06C\uD1B1\uAE4C\uC9C0 \uC644\uBCBD\uD558\uAC8C \uB300\uC751\uD569\uB2C8\uB2E4." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 161,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 bg-highlight-purple/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-8 h-8 text-highlight-purple", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 168,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold text-secondary-900 mb-2", children: "\uBE60\uB978 \uC131\uB2A5" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 173,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-secondary-600", children: "Remix\uC640 Supabase\uC758 \uAC15\uB825\uD55C \uC870\uD569\uC73C\uB85C \uBE60\uB974\uACE0 \uC548\uC815\uC801\uC778 \uC131\uB2A5\uC744 \uBCF4\uC7A5\uD569\uB2C8\uB2E4." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 176,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 167,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
}
_s(Index, "TAfyE0i9dyPQ7/d8lmPxXUSIugM=", false, function() {
  return [useLoaderData];
});
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-RWISHF4B.js.map
