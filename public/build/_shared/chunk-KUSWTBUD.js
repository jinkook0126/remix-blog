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
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Navigation.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navigation.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navigation.tsx"
  );
  import.meta.hot.lastModified = "1758081905292.0227";
}
var Navigation = () => {
  _s();
  const [isMenuOpen, setIsMenuOpen] = (0, import_react2.useState)(false);
  const navigationItems = [{
    name: "\uD648",
    href: "/"
  }, {
    name: "\uBE14\uB85C\uADF8",
    href: "/blog"
  }, {
    name: "\uD0DC\uADF8",
    href: "/tags"
  }, {
    name: "\uC18C\uAC1C",
    href: "/about"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "bg-white/80 backdrop-blur-sm border-b border-secondary-200 sticky top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white font-bold text-lg", children: "D" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xl font-bold text-secondary-900", children: "Dairium" }, void 0, false, {
          fileName: "app/components/Navigation.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:flex items-center space-x-8", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium", children: item.name }, item.name, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 53,
        columnNumber: 42
      }, this)) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "md:hidden p-2 rounded-lg text-secondary-700 hover:text-primary-600 hover:bg-secondary-100 transition-colors duration-200", onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": "\uBA54\uB274 \uC5F4\uAE30", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: isMenuOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 61,
        columnNumber: 29
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 61,
        columnNumber: 126
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navigation.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    isMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:hidden border-t border-secondary-200 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-4", children: navigationItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1", onClick: () => setIsMenuOpen(false), children: item.name }, item.name, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 69,
      columnNumber: 44
    }, this)) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 68,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Navigation.tsx",
      lineNumber: 67,
      columnNumber: 24
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navigation.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(Navigation, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Navigation;
var Navigation_default = Navigation;
var _c;
$RefreshReg$(_c, "Navigation");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Footer.tsx"
  );
  import.meta.hot.lastModified = "1758081915367.0176";
}
var Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const footerLinks = {
    \uBE14\uB85C\uADF8: [{
      name: "\uCD5C\uC2E0 \uD3EC\uC2A4\uD2B8",
      href: "/blog"
    }, {
      name: "\uC778\uAE30 \uD3EC\uC2A4\uD2B8",
      href: "/blog/popular"
    }, {
      name: "\uD0DC\uADF8",
      href: "/tags"
    }],
    \uC815\uBCF4: [{
      name: "\uC18C\uAC1C",
      href: "/about"
    }, {
      name: "\uC5F0\uB77D\uCC98",
      href: "/contact"
    }, {
      name: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68",
      href: "/privacy"
    }],
    \uC18C\uC15C: [{
      name: "GitHub",
      href: "https://github.com",
      external: true
    }, {
      name: "Twitter",
      href: "https://twitter.com",
      external: true
    }, {
      name: "LinkedIn",
      href: "https://linkedin.com",
      external: true
    }]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-secondary-900 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", className: "flex items-center space-x-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-white font-bold text-lg", children: "D" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xl font-bold", children: "Dairium" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-secondary-300 text-sm leading-relaxed", children: "\uD604\uB300\uC801\uC774\uACE0 \uB208\uC774 \uD3B8\uC548\uD55C \uBE14\uB85C\uADF8 \uD50C\uB7AB\uD3FC\uC785\uB2C8\uB2E4. Remix\uC640 Supabase\uB85C \uAD6C\uCD95\uB418\uC5C8\uC2B5\uB2C8\uB2E4." }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      Object.entries(footerLinks).map(([category, links]) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg font-semibold mb-4 text-white", children: category }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "space-y-2", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: link.external ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: link.href, target: "_blank", rel: "noopener noreferrer", className: "text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 83,
          columnNumber: 38
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: link.href, className: "text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm", children: link.name }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 85,
          columnNumber: 30
        }, this) }, link.name, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 82,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, category, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 77,
        columnNumber: 67
      }, this))
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-secondary-800 mt-8 pt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-secondary-400 text-sm", children: [
        "\xA9 ",
        currentYear,
        " Dairium Blog. All rights reserved."
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-4 mt-4 md:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-secondary-400 text-sm", children: "Made with \u2764\uFE0F using Remix & Supabase" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 100,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 99,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
};
_c2 = Footer;
var Footer_default = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Navigation_default,
  Footer_default
};
//# sourceMappingURL=/build/_shared/chunk-KUSWTBUD.js.map
