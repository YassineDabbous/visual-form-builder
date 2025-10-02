import * as de from "react";
import G, { createElement as Pe, isValidElement as Cn, cloneElement as Qr, Children as _o, Fragment as Co, createContext as ot, useContext as Ee, useCallback as ie, useState as W, useRef as Y, useEffect as F, useLayoutEffect as Oo, useMemo as te, memo as Eo, useReducer as Lo, forwardRef as Zr } from "react";
import { unstable_batchedUpdates as fn, createPortal as Ro } from "react-dom";
var bg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hn = { exports: {} }, At = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vs;
function $o() {
  if (vs) return At;
  vs = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return At.Fragment = t, At.jsx = n, At.jsxs = n, At;
}
var Tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Do() {
  return ws || (ws = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === $ ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case y:
          return "Fragment";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case N:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case g:
            return "Portal";
          case S:
            return (x.displayName || "Context") + ".Provider";
          case w:
            return (x._context.displayName || "Context") + ".Consumer";
          case k:
            var C = x.render;
            return x = x.displayName, x || (x = C.displayName || C.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case j:
            return C = x.displayName || null, C !== null ? C : e(x.type) || "Memo";
          case L:
            C = x._payload, x = x._init;
            try {
              return e(x(C));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var _ = C.error, R = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return _.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(x);
      }
    }
    function r(x) {
      if (x === y) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === L)
        return "<...>";
      try {
        var C = e(x);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var x = E.A;
      return x === null ? null : x.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(x) {
      if (I.call(x, "key")) {
        var C = Object.getOwnPropertyDescriptor(x, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function o(x, C) {
      function _() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: _,
        configurable: !0
      });
    }
    function l() {
      var x = e(this.type);
      return A[x] || (A[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function c(x, C, _, R, D, V, se, Ne) {
      return _ = V.ref, x = {
        $$typeof: p,
        type: x,
        key: C,
        props: V,
        _owner: D
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ne
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function u(x, C, _, R, D, V, se, Ne) {
      var U = C.children;
      if (U !== void 0)
        if (R)
          if (K(U)) {
            for (R = 0; R < U.length; R++)
              f(U[R]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(U);
      if (I.call(C, "key")) {
        U = e(x);
        var oe = Object.keys(C).filter(function(Fe) {
          return Fe !== "key";
        });
        R = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", re[U + R] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          U,
          oe,
          U
        ), re[U + R] = !0);
      }
      if (U = null, _ !== void 0 && (n(_), U = "" + _), a(C) && (n(C.key), U = "" + C.key), "key" in C) {
        _ = {};
        for (var X in C)
          X !== "key" && (_[X] = C[X]);
      } else _ = C;
      return U && o(
        _,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), c(
        x,
        U,
        V,
        D,
        s(),
        _,
        se,
        Ne
      );
    }
    function f(x) {
      typeof x == "object" && x !== null && x.$$typeof === p && x._store && (x._store.validated = 1);
    }
    var h = G, p = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), S = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, K = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var ae, A = {}, B = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), ne = H(r(i)), re = {};
    Tt.Fragment = y, Tt.jsx = function(x, C, _, R, D) {
      var V = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        x,
        C,
        _,
        !1,
        R,
        D,
        V ? Error("react-stack-top-frame") : B,
        V ? H(r(x)) : ne
      );
    }, Tt.jsxs = function(x, C, _, R, D) {
      var V = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        x,
        C,
        _,
        !0,
        R,
        D,
        V ? Error("react-stack-top-frame") : B,
        V ? H(r(x)) : ne
      );
    };
  })()), Tt;
}
var Ss;
function Ao() {
  return Ss || (Ss = 1, process.env.NODE_ENV === "production" ? hn.exports = $o() : hn.exports = Do()), hn.exports;
}
var d = Ao(), fr, js;
function To() {
  return js || (js = 1, fr = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }), fr;
}
var Po = To();
const Io = /* @__PURE__ */ Hi(Po);
var Mo = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function ks(e) {
  var t = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (Io[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
    var r = e.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? e.slice(4, r) : "" };
  }
  for (var s = new RegExp(Mo), i = null; (i = s.exec(e)) !== null; ) if (i[0].trim()) if (i[1]) {
    var a = i[1].trim(), o = [a, ""];
    a.indexOf("=") > -1 && (o = a.split("=")), t.attrs[o[0]] = o[1], s.lastIndex--;
  } else i[2] && (t.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
  return t;
}
var zo = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Fo = /^\s*$/, Vo = /* @__PURE__ */ Object.create(null);
function Bi(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? (function(n) {
        var r = [];
        for (var s in n) r.push(s + '="' + n[s] + '"');
        return r.length ? " " + r.join(" ") : "";
      })(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(Bi, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var qo = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = Vo);
  var n, r = [], s = [], i = -1, a = !1;
  if (e.indexOf("<") !== 0) {
    var o = e.indexOf("<");
    r.push({ type: "text", content: o === -1 ? e : e.substring(0, o) });
  }
  return e.replace(zo, function(l, c) {
    if (a) {
      if (l !== "</" + n.name + ">") return;
      a = !1;
    }
    var u, f = l.charAt(1) !== "/", h = l.startsWith("<!--"), p = c + l.length, g = e.charAt(p);
    if (h) {
      var y = ks(l);
      return i < 0 ? (r.push(y), r) : ((u = s[i]).children.push(y), r);
    }
    if (f && (i++, (n = ks(l)).type === "tag" && t.components[n.name] && (n.type = "component", a = !0), n.voidElement || a || !g || g === "<" || n.children.push({ type: "text", content: e.slice(p, e.indexOf("<", p)) }), i === 0 && r.push(n), (u = s[i - 1]) && u.children.push(n), s[i] = n), (!f || n.voidElement) && (i > -1 && (n.voidElement || n.name === l.slice(2, -1)) && (i--, n = i === -1 ? r : s[i]), !a && g !== "<" && g)) {
      u = i === -1 ? r : s[i].children;
      var m = e.indexOf("<", p), v = e.slice(p, m === -1 ? void 0 : m);
      Fo.test(v) && (v = " "), (m > -1 && i + u.length >= 0 || v !== " ") && u.push({ type: "text", content: v });
    }
  }), r;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + Bi("", n);
  }, "");
} };
const jn = (e, t, n, r) => {
  const s = [n, {
    code: t,
    ...r || {}
  }];
  if (e?.services?.logger?.forward)
    return e.services.logger.forward(s, "warn", "react-i18next::", !0);
  Oe(s[0]) && (s[0] = `react-i18next:: ${s[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...s) : console?.warn && console.warn(...s);
}, Ns = {}, Wt = (e, t, n, r) => {
  Oe(n) && Ns[n] || (Oe(n) && (Ns[n] = /* @__PURE__ */ new Date()), jn(e, t, n, r));
}, Ki = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
}, $r = (e, t, n) => {
  e.loadNamespaces(t, Ki(e, n));
}, _s = (e, t, n, r) => {
  if (Oe(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return $r(e, n, r);
  n.forEach((s) => {
    e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
  }), e.loadLanguages(t, Ki(e, r));
}, Uo = (e, t, n = {}) => !t.languages || !t.languages.length ? (Wt(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(e, {
  lng: n.lng,
  precheck: (r, s) => {
    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, e)) return !1;
  }
}), Oe = (e) => typeof e == "string", Ze = (e) => typeof e == "object" && e !== null, Ho = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Bo = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Ko = (e) => Bo[e], Wo = (e) => e.replace(Ho, Ko);
let Dr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Wo
};
const Jo = (e = {}) => {
  Dr = {
    ...Dr,
    ...e
  };
}, Wi = () => Dr;
let Ji;
const Xo = (e) => {
  Ji = e;
}, es = () => Ji, hr = (e, t) => {
  if (!e) return !1;
  const n = e.props?.children ?? e.children;
  return t ? n.length > 0 : !!n;
}, pr = (e) => {
  if (!e) return [];
  const t = e.props?.children ?? e.children;
  return e.props?.i18nIsDynamicList ? wt(t) : t;
}, Yo = (e) => Array.isArray(e) && e.every(Cn), wt = (e) => Array.isArray(e) ? e : [e], Go = (e, t) => {
  const n = {
    ...t
  };
  return n.props = Object.assign(e.props, t.props), n;
}, Xi = (e, t, n, r) => {
  if (!e) return "";
  let s = "";
  const i = wt(e), a = t?.transSupportBasicHtmlNodes ? t.transKeepBasicHtmlNodesFor ?? [] : [];
  return i.forEach((o, l) => {
    if (Oe(o)) {
      s += `${o}`;
      return;
    }
    if (Cn(o)) {
      const {
        props: c,
        type: u
      } = o, f = Object.keys(c).length, h = a.indexOf(u) > -1, p = c.children;
      if (!p && h && !f) {
        s += `<${u}/>`;
        return;
      }
      if (!p && (!h || f) || c.i18nIsDynamicList) {
        s += `<${l}></${l}>`;
        return;
      }
      if (h && f === 1 && Oe(p)) {
        s += `<${u}>${p}</${u}>`;
        return;
      }
      const g = Xi(p, t, n, r);
      s += `<${l}>${g}</${l}>`;
      return;
    }
    if (o === null) {
      jn(n, "TRANS_NULL_VALUE", "Passed in a null value as child", {
        i18nKey: r
      });
      return;
    }
    if (Ze(o)) {
      const {
        format: c,
        ...u
      } = o, f = Object.keys(u);
      if (f.length === 1) {
        const h = c ? `${f[0]}, ${c}` : f[0];
        s += `{{${h}}}`;
        return;
      }
      jn(n, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
        i18nKey: r,
        child: o
      });
      return;
    }
    jn(n, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
      i18nKey: r,
      child: o
    });
  }), s;
}, Qo = (e, t, n, r, s, i, a) => {
  if (n === "") return [];
  const o = s.transKeepBasicHtmlNodesFor || [], l = n && new RegExp(o.map((v) => `<${v}`).join("|")).test(n);
  if (!e && !t && !l && !a) return [n];
  const c = t ?? {}, u = (v) => {
    wt(v).forEach((S) => {
      Oe(S) || (hr(S) ? u(pr(S)) : Ze(S) && !Cn(S) && Object.assign(c, S));
    });
  };
  u(e);
  const f = qo.parse(`<0>${n}</0>`), h = {
    ...c,
    ...i
  }, p = (v, w, S) => {
    const k = pr(v), O = y(k, w.children, S);
    return Yo(k) && O.length === 0 || v.props?.i18nIsDynamicList ? k : O;
  }, g = (v, w, S, k, O) => {
    v.dummy ? (v.children = w, S.push(Qr(v, {
      key: k
    }, O ? void 0 : w))) : S.push(..._o.map([v], (N) => {
      const j = {
        ...N.props
      };
      return delete j.i18nIsDynamicList, Pe(N.type, {
        ...j,
        key: k,
        ref: N.props.ref ?? N.ref
      }, O ? null : w);
    }));
  }, y = (v, w, S) => {
    const k = wt(v);
    return wt(w).reduce((N, j, L) => {
      const T = j.children?.[0]?.content && r.services.interpolator.interpolate(j.children[0].content, h, r.language);
      if (j.type === "tag") {
        let $ = k[parseInt(j.name, 10)];
        !$ && t && ($ = t[j.name]), S.length === 1 && !$ && ($ = S[0][j.name]), $ || ($ = {});
        const E = Object.keys(j.attrs).length !== 0 ? Go({
          props: j.attrs
        }, $) : $, I = Cn(E), K = I && hr(j, !0) && !j.voidElement, H = l && Ze(E) && E.dummy && !I, ae = Ze(t) && Object.hasOwnProperty.call(t, j.name);
        if (Oe(E)) {
          const A = r.services.interpolator.interpolate(E, h, r.language);
          N.push(A);
        } else if (hr(E) || K) {
          const A = p(E, j, S);
          g(E, A, N, L);
        } else if (H) {
          const A = y(k, j.children, S);
          g(E, A, N, L);
        } else if (Number.isNaN(parseFloat(j.name)))
          if (ae) {
            const A = p(E, j, S);
            g(E, A, N, L, j.voidElement);
          } else if (s.transSupportBasicHtmlNodes && o.indexOf(j.name) > -1)
            if (j.voidElement)
              N.push(Pe(j.name, {
                key: `${j.name}-${L}`
              }));
            else {
              const A = y(k, j.children, S);
              N.push(Pe(j.name, {
                key: `${j.name}-${L}`
              }, A));
            }
          else if (j.voidElement)
            N.push(`<${j.name} />`);
          else {
            const A = y(k, j.children, S);
            N.push(`<${j.name}>${A}</${j.name}>`);
          }
        else if (Ze(E) && !I) {
          const A = j.children[0] ? T : null;
          A && N.push(A);
        } else
          g(E, T, N, L, j.children.length !== 1 || !T);
      } else if (j.type === "text") {
        const $ = s.transWrapTextNodes, E = a ? s.unescape(r.services.interpolator.interpolate(j.content, h, r.language)) : r.services.interpolator.interpolate(j.content, h, r.language);
        $ ? N.push(Pe($, {
          key: `${j.name}-${L}`
        }, E)) : N.push(E);
      }
      return N;
    }, []);
  }, m = y([{
    dummy: !0,
    children: e || []
  }], f, wt(e || []));
  return pr(m[0]);
}, Yi = (e, t, n) => {
  const r = e.key || t, s = Qr(e, {
    key: r
  });
  if (!s.props || !s.props.children || n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)
    return s;
  function i() {
    return Pe(Co, null, s);
  }
  return Pe(i, {
    key: r
  });
}, Zo = (e, t) => e.map((n, r) => Yi(n, r, t)), el = (e, t) => {
  const n = {};
  return Object.keys(e).forEach((r) => {
    Object.assign(n, {
      [r]: Yi(e[r], r, t)
    });
  }), n;
}, tl = (e, t, n, r) => e ? Array.isArray(e) ? Zo(e, t) : Ze(e) ? el(e, t) : (Wt(n, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
  i18nKey: r
}), null) : null, nl = (e) => !Ze(e) || Array.isArray(e) ? !1 : Object.keys(e).reduce((t, n) => t && Number.isNaN(Number.parseFloat(n)), !0);
function rl({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: s,
  tOptions: i = {},
  values: a,
  defaults: o,
  components: l,
  ns: c,
  i18n: u,
  t: f,
  shouldUnescape: h,
  ...p
}) {
  const g = u || es();
  if (!g)
    return Wt(g, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
      i18nKey: r
    }), e;
  const y = f || g.t.bind(g) || ((H) => H), m = {
    ...Wi(),
    ...g.options?.react
  };
  let v = c || y.ns || g.options?.defaultNS;
  v = Oe(v) ? [v] : v || ["translation"];
  const w = Xi(e, m, g, r), S = o || w || m.transEmptyNodeValue || r, {
    hashTransKey: k
  } = m, O = r || (k ? k(w || S) : w || S);
  g.options?.interpolation?.defaultVariables && (a = a && Object.keys(a).length > 0 ? {
    ...a,
    ...g.options.interpolation.defaultVariables
  } : {
    ...g.options.interpolation.defaultVariables
  });
  const N = a || t !== void 0 && !g.options?.interpolation?.alwaysFormat || !e ? i.interpolation : {
    interpolation: {
      ...i.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, j = {
    ...i,
    context: s || i.context,
    count: t,
    ...a,
    ...N,
    defaultValue: S,
    ns: v
  }, L = O ? y(O, j) : S, T = tl(l, L, g, r);
  let $ = T || e, E = null;
  nl(T) && (E = T, $ = e);
  const I = Qo($, E, L, g, m, j, h), K = n ?? m.defaultTransParent;
  return K ? Pe(K, p, I) : I;
}
const sl = {
  type: "3rdParty",
  init(e) {
    Jo(e.options.react), Xo(e);
  }
}, Gi = ot();
class il {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function al({
  children: e,
  count: t,
  parent: n,
  i18nKey: r,
  context: s,
  tOptions: i = {},
  values: a,
  defaults: o,
  components: l,
  ns: c,
  i18n: u,
  t: f,
  shouldUnescape: h,
  ...p
}) {
  const {
    i18n: g,
    defaultNS: y
  } = Ee(Gi) || {}, m = u || g || es(), v = f || m?.t.bind(m);
  return rl({
    children: e,
    count: t,
    parent: n,
    i18nKey: r,
    context: s,
    tOptions: i,
    values: a,
    defaults: o,
    components: l,
    ns: c || v?.ns || y || m?.options?.defaultNS,
    i18n: m,
    t: f,
    shouldUnescape: h,
    ...p
  });
}
const ol = (e, t) => {
  const n = Y();
  return F(() => {
    n.current = e;
  }, [e, t]), n.current;
}, Qi = (e, t, n, r) => e.getFixedT(t, n, r), ll = (e, t, n, r) => ie(Qi(e, t, n, r), [e, t, n, r]), me = (e, t = {}) => {
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: s
  } = Ee(Gi) || {}, i = n || r || es();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new il()), !i) {
    Wt(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const k = (N, j) => Oe(j) ? j : Ze(j) && Oe(j.defaultValue) ? j.defaultValue : Array.isArray(N) ? N[N.length - 1] : N, O = [k, {}, !1];
    return O.t = k, O.i18n = {}, O.ready = !1, O;
  }
  i.options.react?.wait && Wt(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...Wi(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: o,
    keyPrefix: l
  } = a;
  let c = s || i.options?.defaultNS;
  c = Oe(c) ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces?.(c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((k) => Uo(k, i, a)), f = ll(i, t.lng || null, a.nsMode === "fallback" ? c : c[0], l), h = () => f, p = () => Qi(i, t.lng || null, a.nsMode === "fallback" ? c : c[0], l), [g, y] = W(h);
  let m = c.join();
  t.lng && (m = `${t.lng}${m}`);
  const v = ol(m), w = Y(!0);
  F(() => {
    const {
      bindI18n: k,
      bindI18nStore: O
    } = a;
    w.current = !0, !u && !o && (t.lng ? _s(i, t.lng, c, () => {
      w.current && y(p);
    }) : $r(i, c, () => {
      w.current && y(p);
    })), u && v && v !== m && w.current && y(p);
    const N = () => {
      w.current && y(p);
    };
    return k && i?.on(k, N), O && i?.store.on(O, N), () => {
      w.current = !1, i && k && k?.split(" ").forEach((j) => i.off(j, N)), O && i && O.split(" ").forEach((j) => i.store.off(j, N));
    };
  }, [i, m]), F(() => {
    w.current && u && y(h);
  }, [i, l, u]);
  const S = [g, i, u];
  if (S.t = g, S.i18n = i, S.ready = u, u || !u && !o) return S;
  throw new Promise((k) => {
    t.lng ? _s(i, t.lng, c, () => k()) : $r(i, c, () => k());
  });
};
function cl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return te(
    () => (r) => {
      t.forEach((s) => s(r));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  );
}
const Wn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Ct(e) {
  const t = Object.prototype.toString.call(e);
  return t === "[object Window]" || // In Electron context the Window object serializes to [object global]
  t === "[object global]";
}
function ts(e) {
  return "nodeType" in e;
}
function ye(e) {
  var t, n;
  return e ? Ct(e) ? e : ts(e) && (t = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? t : window : window;
}
function ns(e) {
  const {
    Document: t
  } = ye(e);
  return e instanceof t;
}
function rn(e) {
  return Ct(e) ? !1 : e instanceof ye(e).HTMLElement;
}
function Zi(e) {
  return e instanceof ye(e).SVGElement;
}
function Ot(e) {
  return e ? Ct(e) ? e.document : ts(e) ? ns(e) ? e : rn(e) || Zi(e) ? e.ownerDocument : document : document : document;
}
const Le = Wn ? Oo : F;
function Jn(e) {
  const t = Y(e);
  return Le(() => {
    t.current = e;
  }), ie(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
function ul() {
  const e = Y(null), t = ie((r, s) => {
    e.current = setInterval(r, s);
  }, []), n = ie(() => {
    e.current !== null && (clearInterval(e.current), e.current = null);
  }, []);
  return [t, n];
}
function Jt(e, t) {
  t === void 0 && (t = [e]);
  const n = Y(e);
  return Le(() => {
    n.current !== e && (n.current = e);
  }, t), n;
}
function sn(e, t) {
  const n = Y();
  return te(
    () => {
      const r = e(n.current);
      return n.current = r, r;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...t]
  );
}
function On(e) {
  const t = Jn(e), n = Y(null), r = ie(
    (s) => {
      s !== n.current && t?.(s, n.current), n.current = s;
    },
    //eslint-disable-next-line
    []
  );
  return [n, r];
}
function En(e) {
  const t = Y();
  return F(() => {
    t.current = e;
  }, [e]), t.current;
}
let gr = {};
function an(e, t) {
  return te(() => {
    if (t)
      return t;
    const n = gr[e] == null ? 0 : gr[e] + 1;
    return gr[e] = n, e + "-" + n;
  }, [e, t]);
}
function ea(e) {
  return function(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    return r.reduce((i, a) => {
      const o = Object.entries(a);
      for (const [l, c] of o) {
        const u = i[l];
        u != null && (i[l] = u + e * c);
      }
      return i;
    }, {
      ...t
    });
  };
}
const jt = /* @__PURE__ */ ea(1), Ln = /* @__PURE__ */ ea(-1);
function dl(e) {
  return "clientX" in e && "clientY" in e;
}
function Xn(e) {
  if (!e)
    return !1;
  const {
    KeyboardEvent: t
  } = ye(e.target);
  return t && e instanceof t;
}
function fl(e) {
  if (!e)
    return !1;
  const {
    TouchEvent: t
  } = ye(e.target);
  return t && e instanceof t;
}
function Rn(e) {
  if (fl(e)) {
    if (e.touches && e.touches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.touches[0];
      return {
        x: t,
        y: n
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      const {
        clientX: t,
        clientY: n
      } = e.changedTouches[0];
      return {
        x: t,
        y: n
      };
    }
  }
  return dl(e) ? {
    x: e.clientX,
    y: e.clientY
  } : null;
}
const et = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(e) {
      if (!e)
        return;
      const {
        x: t,
        y: n
      } = e;
      return "translate3d(" + (t ? Math.round(t) : 0) + "px, " + (n ? Math.round(n) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(e) {
      if (!e)
        return;
      const {
        scaleX: t,
        scaleY: n
      } = e;
      return "scaleX(" + t + ") scaleY(" + n + ")";
    }
  },
  Transform: {
    toString(e) {
      if (e)
        return [et.Translate.toString(e), et.Scale.toString(e)].join(" ");
    }
  },
  Transition: {
    toString(e) {
      let {
        property: t,
        duration: n,
        easing: r
      } = e;
      return t + " " + n + "ms " + r;
    }
  }
}), Cs = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function hl(e) {
  return e.matches(Cs) ? e : e.querySelector(Cs);
}
const pl = {
  display: "none"
};
function gl(e) {
  let {
    id: t,
    value: n
  } = e;
  return G.createElement("div", {
    id: t,
    style: pl
  }, n);
}
function ml(e) {
  let {
    id: t,
    announcement: n,
    ariaLiveType: r = "assertive"
  } = e;
  const s = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return G.createElement("div", {
    id: t,
    style: s,
    role: "status",
    "aria-live": r,
    "aria-atomic": !0
  }, n);
}
function yl() {
  const [e, t] = W("");
  return {
    announce: ie((r) => {
      r != null && t(r);
    }, []),
    announcement: e
  };
}
const ta = /* @__PURE__ */ ot(null);
function xl(e) {
  const t = Ee(ta);
  F(() => {
    if (!t)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return t(e);
  }, [e, t]);
}
function bl() {
  const [e] = W(() => /* @__PURE__ */ new Set()), t = ie((r) => (e.add(r), () => e.delete(r)), [e]);
  return [ie((r) => {
    let {
      type: s,
      event: i
    } = r;
    e.forEach((a) => {
      var o;
      return (o = a[s]) == null ? void 0 : o.call(a, i);
    });
  }, [e]), t];
}
const vl = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, wl = {
  onDragStart(e) {
    let {
      active: t
    } = e;
    return "Picked up draggable item " + t.id + ".";
  },
  onDragOver(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was moved over droppable area " + n.id + "." : "Draggable item " + t.id + " is no longer over a droppable area.";
  },
  onDragEnd(e) {
    let {
      active: t,
      over: n
    } = e;
    return n ? "Draggable item " + t.id + " was dropped over droppable area " + n.id : "Draggable item " + t.id + " was dropped.";
  },
  onDragCancel(e) {
    let {
      active: t
    } = e;
    return "Dragging was cancelled. Draggable item " + t.id + " was dropped.";
  }
};
function Sl(e) {
  let {
    announcements: t = wl,
    container: n,
    hiddenTextDescribedById: r,
    screenReaderInstructions: s = vl
  } = e;
  const {
    announce: i,
    announcement: a
  } = yl(), o = an("DndLiveRegion"), [l, c] = W(!1);
  if (F(() => {
    c(!0);
  }, []), xl(te(() => ({
    onDragStart(f) {
      let {
        active: h
      } = f;
      i(t.onDragStart({
        active: h
      }));
    },
    onDragMove(f) {
      let {
        active: h,
        over: p
      } = f;
      t.onDragMove && i(t.onDragMove({
        active: h,
        over: p
      }));
    },
    onDragOver(f) {
      let {
        active: h,
        over: p
      } = f;
      i(t.onDragOver({
        active: h,
        over: p
      }));
    },
    onDragEnd(f) {
      let {
        active: h,
        over: p
      } = f;
      i(t.onDragEnd({
        active: h,
        over: p
      }));
    },
    onDragCancel(f) {
      let {
        active: h,
        over: p
      } = f;
      i(t.onDragCancel({
        active: h,
        over: p
      }));
    }
  }), [i, t])), !l)
    return null;
  const u = G.createElement(G.Fragment, null, G.createElement(gl, {
    id: r,
    value: s.draggable
  }), G.createElement(ml, {
    id: o,
    announcement: a
  }));
  return n ? Ro(u, n) : u;
}
var ce;
(function(e) {
  e.DragStart = "dragStart", e.DragMove = "dragMove", e.DragEnd = "dragEnd", e.DragCancel = "dragCancel", e.DragOver = "dragOver", e.RegisterDroppable = "registerDroppable", e.SetDroppableDisabled = "setDroppableDisabled", e.UnregisterDroppable = "unregisterDroppable";
})(ce || (ce = {}));
function $n() {
}
const Re = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function jl(e, t) {
  const n = Rn(e);
  if (!n)
    return "0 0";
  const r = {
    x: (n.x - t.left) / t.width * 100,
    y: (n.y - t.top) / t.height * 100
  };
  return r.x + "% " + r.y + "%";
}
function kl(e, t) {
  let {
    data: {
      value: n
    }
  } = e, {
    data: {
      value: r
    }
  } = t;
  return r - n;
}
function Nl(e, t) {
  if (!e || e.length === 0)
    return null;
  const [n] = e;
  return n[t];
}
function _l(e, t) {
  const n = Math.max(t.top, e.top), r = Math.max(t.left, e.left), s = Math.min(t.left + t.width, e.left + e.width), i = Math.min(t.top + t.height, e.top + e.height), a = s - r, o = i - n;
  if (r < s && n < i) {
    const l = t.width * t.height, c = e.width * e.height, u = a * o, f = u / (l + c - u);
    return Number(f.toFixed(4));
  }
  return 0;
}
const Cl = (e) => {
  let {
    collisionRect: t,
    droppableRects: n,
    droppableContainers: r
  } = e;
  const s = [];
  for (const i of r) {
    const {
      id: a
    } = i, o = n.get(a);
    if (o) {
      const l = _l(o, t);
      l > 0 && s.push({
        id: a,
        data: {
          droppableContainer: i,
          value: l
        }
      });
    }
  }
  return s.sort(kl);
};
function Ol(e, t, n) {
  return {
    ...e,
    scaleX: t && n ? t.width / n.width : 1,
    scaleY: t && n ? t.height / n.height : 1
  };
}
function na(e, t) {
  return e && t ? {
    x: e.left - t.left,
    y: e.top - t.top
  } : Re;
}
function El(e) {
  return function(n) {
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      s[i - 1] = arguments[i];
    return s.reduce((a, o) => ({
      ...a,
      top: a.top + e * o.y,
      bottom: a.bottom + e * o.y,
      left: a.left + e * o.x,
      right: a.right + e * o.x
    }), {
      ...n
    });
  };
}
const Ll = /* @__PURE__ */ El(1);
function ra(e) {
  if (e.startsWith("matrix3d(")) {
    const t = e.slice(9, -1).split(/, /);
    return {
      x: +t[12],
      y: +t[13],
      scaleX: +t[0],
      scaleY: +t[5]
    };
  } else if (e.startsWith("matrix(")) {
    const t = e.slice(7, -1).split(/, /);
    return {
      x: +t[4],
      y: +t[5],
      scaleX: +t[0],
      scaleY: +t[3]
    };
  }
  return null;
}
function Rl(e, t, n) {
  const r = ra(t);
  if (!r)
    return e;
  const {
    scaleX: s,
    scaleY: i,
    x: a,
    y: o
  } = r, l = e.left - a - (1 - s) * parseFloat(n), c = e.top - o - (1 - i) * parseFloat(n.slice(n.indexOf(" ") + 1)), u = s ? e.width / s : e.width, f = i ? e.height / i : e.height;
  return {
    width: u,
    height: f,
    top: c,
    right: l + u,
    bottom: c + f,
    left: l
  };
}
const $l = {
  ignoreTransform: !1
};
function Et(e, t) {
  t === void 0 && (t = $l);
  let n = e.getBoundingClientRect();
  if (t.ignoreTransform) {
    const {
      transform: c,
      transformOrigin: u
    } = ye(e).getComputedStyle(e);
    c && (n = Rl(n, c, u));
  }
  const {
    top: r,
    left: s,
    width: i,
    height: a,
    bottom: o,
    right: l
  } = n;
  return {
    top: r,
    left: s,
    width: i,
    height: a,
    bottom: o,
    right: l
  };
}
function Os(e) {
  return Et(e, {
    ignoreTransform: !0
  });
}
function Dl(e) {
  const t = e.innerWidth, n = e.innerHeight;
  return {
    top: 0,
    left: 0,
    right: t,
    bottom: n,
    width: t,
    height: n
  };
}
function Al(e, t) {
  return t === void 0 && (t = ye(e).getComputedStyle(e)), t.position === "fixed";
}
function Tl(e, t) {
  t === void 0 && (t = ye(e).getComputedStyle(e));
  const n = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((s) => {
    const i = t[s];
    return typeof i == "string" ? n.test(i) : !1;
  });
}
function rs(e, t) {
  const n = [];
  function r(s) {
    if (t != null && n.length >= t || !s)
      return n;
    if (ns(s) && s.scrollingElement != null && !n.includes(s.scrollingElement))
      return n.push(s.scrollingElement), n;
    if (!rn(s) || Zi(s) || n.includes(s))
      return n;
    const i = ye(e).getComputedStyle(s);
    return s !== e && Tl(s, i) && n.push(s), Al(s, i) ? n : r(s.parentNode);
  }
  return e ? r(e) : n;
}
function sa(e) {
  const [t] = rs(e, 1);
  return t ?? null;
}
function mr(e) {
  return !Wn || !e ? null : Ct(e) ? e : ts(e) ? ns(e) || e === Ot(e).scrollingElement ? window : rn(e) ? e : null : null;
}
function ia(e) {
  return Ct(e) ? e.scrollX : e.scrollLeft;
}
function aa(e) {
  return Ct(e) ? e.scrollY : e.scrollTop;
}
function Ar(e) {
  return {
    x: ia(e),
    y: aa(e)
  };
}
var ue;
(function(e) {
  e[e.Forward = 1] = "Forward", e[e.Backward = -1] = "Backward";
})(ue || (ue = {}));
function oa(e) {
  return !Wn || !e ? !1 : e === document.scrollingElement;
}
function la(e) {
  const t = {
    x: 0,
    y: 0
  }, n = oa(e) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: e.clientHeight,
    width: e.clientWidth
  }, r = {
    x: e.scrollWidth - n.width,
    y: e.scrollHeight - n.height
  }, s = e.scrollTop <= t.y, i = e.scrollLeft <= t.x, a = e.scrollTop >= r.y, o = e.scrollLeft >= r.x;
  return {
    isTop: s,
    isLeft: i,
    isBottom: a,
    isRight: o,
    maxScroll: r,
    minScroll: t
  };
}
const Pl = {
  x: 0.2,
  y: 0.2
};
function Il(e, t, n, r, s) {
  let {
    top: i,
    left: a,
    right: o,
    bottom: l
  } = n;
  r === void 0 && (r = 10), s === void 0 && (s = Pl);
  const {
    isTop: c,
    isBottom: u,
    isLeft: f,
    isRight: h
  } = la(e), p = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, y = {
    height: t.height * s.y,
    width: t.width * s.x
  };
  return !c && i <= t.top + y.height ? (p.y = ue.Backward, g.y = r * Math.abs((t.top + y.height - i) / y.height)) : !u && l >= t.bottom - y.height && (p.y = ue.Forward, g.y = r * Math.abs((t.bottom - y.height - l) / y.height)), !h && o >= t.right - y.width ? (p.x = ue.Forward, g.x = r * Math.abs((t.right - y.width - o) / y.width)) : !f && a <= t.left + y.width && (p.x = ue.Backward, g.x = r * Math.abs((t.left + y.width - a) / y.width)), {
    direction: p,
    speed: g
  };
}
function Ml(e) {
  if (e === document.scrollingElement) {
    const {
      innerWidth: i,
      innerHeight: a
    } = window;
    return {
      top: 0,
      left: 0,
      right: i,
      bottom: a,
      width: i,
      height: a
    };
  }
  const {
    top: t,
    left: n,
    right: r,
    bottom: s
  } = e.getBoundingClientRect();
  return {
    top: t,
    left: n,
    right: r,
    bottom: s,
    width: e.clientWidth,
    height: e.clientHeight
  };
}
function ca(e) {
  return e.reduce((t, n) => jt(t, Ar(n)), Re);
}
function zl(e) {
  return e.reduce((t, n) => t + ia(n), 0);
}
function Fl(e) {
  return e.reduce((t, n) => t + aa(n), 0);
}
function ua(e, t) {
  if (t === void 0 && (t = Et), !e)
    return;
  const {
    top: n,
    left: r,
    bottom: s,
    right: i
  } = t(e);
  sa(e) && (s <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) && e.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Vl = [["x", ["left", "right"], zl], ["y", ["top", "bottom"], Fl]];
class ss {
  constructor(t, n) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const r = rs(n), s = ca(r);
    this.rect = {
      ...t
    }, this.width = t.width, this.height = t.height;
    for (const [i, a, o] of Vl)
      for (const l of a)
        Object.defineProperty(this, l, {
          get: () => {
            const c = o(r), u = s[i] - c;
            return this.rect[l] + u;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class qt {
  constructor(t) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((n) => {
        var r;
        return (r = this.target) == null ? void 0 : r.removeEventListener(...n);
      });
    }, this.target = t;
  }
  add(t, n, r) {
    var s;
    (s = this.target) == null || s.addEventListener(t, n, r), this.listeners.push([t, n, r]);
  }
}
function ql(e) {
  const {
    EventTarget: t
  } = ye(e);
  return e instanceof t ? e : Ot(e);
}
function yr(e, t) {
  const n = Math.abs(e.x), r = Math.abs(e.y);
  return typeof t == "number" ? Math.sqrt(n ** 2 + r ** 2) > t : "x" in t && "y" in t ? n > t.x && r > t.y : "x" in t ? n > t.x : "y" in t ? r > t.y : !1;
}
var Ce;
(function(e) {
  e.Click = "click", e.DragStart = "dragstart", e.Keydown = "keydown", e.ContextMenu = "contextmenu", e.Resize = "resize", e.SelectionChange = "selectionchange", e.VisibilityChange = "visibilitychange";
})(Ce || (Ce = {}));
function Es(e) {
  e.preventDefault();
}
function Ul(e) {
  e.stopPropagation();
}
var Z;
(function(e) {
  e.Space = "Space", e.Down = "ArrowDown", e.Right = "ArrowRight", e.Left = "ArrowLeft", e.Up = "ArrowUp", e.Esc = "Escape", e.Enter = "Enter", e.Tab = "Tab";
})(Z || (Z = {}));
const da = {
  start: [Z.Space, Z.Enter],
  cancel: [Z.Esc],
  end: [Z.Space, Z.Enter, Z.Tab]
}, Hl = (e, t) => {
  let {
    currentCoordinates: n
  } = t;
  switch (e.code) {
    case Z.Right:
      return {
        ...n,
        x: n.x + 25
      };
    case Z.Left:
      return {
        ...n,
        x: n.x - 25
      };
    case Z.Down:
      return {
        ...n,
        y: n.y + 25
      };
    case Z.Up:
      return {
        ...n,
        y: n.y - 25
      };
  }
};
class fa {
  constructor(t) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = t;
    const {
      event: {
        target: n
      }
    } = t;
    this.props = t, this.listeners = new qt(Ot(n)), this.windowListeners = new qt(ye(n)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Ce.Resize, this.handleCancel), this.windowListeners.add(Ce.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Ce.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: t,
      onStart: n
    } = this.props, r = t.node.current;
    r && ua(r), n(Re);
  }
  handleKeyDown(t) {
    if (Xn(t)) {
      const {
        active: n,
        context: r,
        options: s
      } = this.props, {
        keyboardCodes: i = da,
        coordinateGetter: a = Hl,
        scrollBehavior: o = "smooth"
      } = s, {
        code: l
      } = t;
      if (i.end.includes(l)) {
        this.handleEnd(t);
        return;
      }
      if (i.cancel.includes(l)) {
        this.handleCancel(t);
        return;
      }
      const {
        collisionRect: c
      } = r.current, u = c ? {
        x: c.left,
        y: c.top
      } : Re;
      this.referenceCoordinates || (this.referenceCoordinates = u);
      const f = a(t, {
        active: n,
        context: r.current,
        currentCoordinates: u
      });
      if (f) {
        const h = Ln(f, u), p = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = r.current;
        for (const y of g) {
          const m = t.code, {
            isTop: v,
            isRight: w,
            isLeft: S,
            isBottom: k,
            maxScroll: O,
            minScroll: N
          } = la(y), j = Ml(y), L = {
            x: Math.min(m === Z.Right ? j.right - j.width / 2 : j.right, Math.max(m === Z.Right ? j.left : j.left + j.width / 2, f.x)),
            y: Math.min(m === Z.Down ? j.bottom - j.height / 2 : j.bottom, Math.max(m === Z.Down ? j.top : j.top + j.height / 2, f.y))
          }, T = m === Z.Right && !w || m === Z.Left && !S, $ = m === Z.Down && !k || m === Z.Up && !v;
          if (T && L.x !== f.x) {
            const E = y.scrollLeft + h.x, I = m === Z.Right && E <= O.x || m === Z.Left && E >= N.x;
            if (I && !h.y) {
              y.scrollTo({
                left: E,
                behavior: o
              });
              return;
            }
            I ? p.x = y.scrollLeft - E : p.x = m === Z.Right ? y.scrollLeft - O.x : y.scrollLeft - N.x, p.x && y.scrollBy({
              left: -p.x,
              behavior: o
            });
            break;
          } else if ($ && L.y !== f.y) {
            const E = y.scrollTop + h.y, I = m === Z.Down && E <= O.y || m === Z.Up && E >= N.y;
            if (I && !h.x) {
              y.scrollTo({
                top: E,
                behavior: o
              });
              return;
            }
            I ? p.y = y.scrollTop - E : p.y = m === Z.Down ? y.scrollTop - O.y : y.scrollTop - N.y, p.y && y.scrollBy({
              top: -p.y,
              behavior: o
            });
            break;
          }
        }
        this.handleMove(t, jt(Ln(f, this.referenceCoordinates), p));
      }
    }
  }
  handleMove(t, n) {
    const {
      onMove: r
    } = this.props;
    t.preventDefault(), r(n);
  }
  handleEnd(t) {
    const {
      onEnd: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  handleCancel(t) {
    const {
      onCancel: n
    } = this.props;
    t.preventDefault(), this.detach(), n();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
fa.activators = [{
  eventName: "onKeyDown",
  handler: (e, t, n) => {
    let {
      keyboardCodes: r = da,
      onActivation: s
    } = t, {
      active: i
    } = n;
    const {
      code: a
    } = e.nativeEvent;
    if (r.start.includes(a)) {
      const o = i.activatorNode.current;
      return o && e.target !== o ? !1 : (e.preventDefault(), s?.({
        event: e.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Ls(e) {
  return !!(e && "distance" in e);
}
function Rs(e) {
  return !!(e && "delay" in e);
}
class is {
  constructor(t, n, r) {
    var s;
    r === void 0 && (r = ql(t.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = t, this.events = n;
    const {
      event: i
    } = t, {
      target: a
    } = i;
    this.props = t, this.events = n, this.document = Ot(a), this.documentListeners = new qt(this.document), this.listeners = new qt(r), this.windowListeners = new qt(ye(a)), this.initialCoordinates = (s = Rn(i)) != null ? s : Re, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: t,
      props: {
        options: {
          activationConstraint: n,
          bypassActivationConstraint: r
        }
      }
    } = this;
    if (this.listeners.add(t.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(t.end.name, this.handleEnd), t.cancel && this.listeners.add(t.cancel.name, this.handleCancel), this.windowListeners.add(Ce.Resize, this.handleCancel), this.windowListeners.add(Ce.DragStart, Es), this.windowListeners.add(Ce.VisibilityChange, this.handleCancel), this.windowListeners.add(Ce.ContextMenu, Es), this.documentListeners.add(Ce.Keydown, this.handleKeydown), n) {
      if (r != null && r({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Rs(n)) {
        this.timeoutId = setTimeout(this.handleStart, n.delay), this.handlePending(n);
        return;
      }
      if (Ls(n)) {
        this.handlePending(n);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(t, n) {
    const {
      active: r,
      onPending: s
    } = this.props;
    s(r, t, this.initialCoordinates, n);
  }
  handleStart() {
    const {
      initialCoordinates: t
    } = this, {
      onStart: n
    } = this.props;
    t && (this.activated = !0, this.documentListeners.add(Ce.Click, Ul, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Ce.SelectionChange, this.removeTextSelection), n(t));
  }
  handleMove(t) {
    var n;
    const {
      activated: r,
      initialCoordinates: s,
      props: i
    } = this, {
      onMove: a,
      options: {
        activationConstraint: o
      }
    } = i;
    if (!s)
      return;
    const l = (n = Rn(t)) != null ? n : Re, c = Ln(s, l);
    if (!r && o) {
      if (Ls(o)) {
        if (o.tolerance != null && yr(c, o.tolerance))
          return this.handleCancel();
        if (yr(c, o.distance))
          return this.handleStart();
      }
      if (Rs(o) && yr(c, o.tolerance))
        return this.handleCancel();
      this.handlePending(o, c);
      return;
    }
    t.cancelable && t.preventDefault(), a(l);
  }
  handleEnd() {
    const {
      onAbort: t,
      onEnd: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleCancel() {
    const {
      onAbort: t,
      onCancel: n
    } = this.props;
    this.detach(), this.activated || t(this.props.active), n();
  }
  handleKeydown(t) {
    t.code === Z.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var t;
    (t = this.document.getSelection()) == null || t.removeAllRanges();
  }
}
const Bl = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class ha extends is {
  constructor(t) {
    const {
      event: n
    } = t, r = Ot(n.target);
    super(t, Bl, r);
  }
}
ha.activators = [{
  eventName: "onPointerDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return !n.isPrimary || n.button !== 0 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const Kl = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Tr;
(function(e) {
  e[e.RightClick = 2] = "RightClick";
})(Tr || (Tr = {}));
class Wl extends is {
  constructor(t) {
    super(t, Kl, Ot(t.event.target));
  }
}
Wl.activators = [{
  eventName: "onMouseDown",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    return n.button === Tr.RightClick ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
const xr = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class Jl extends is {
  constructor(t) {
    super(t, xr);
  }
  static setup() {
    return window.addEventListener(xr.move.name, t, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(xr.move.name, t);
    };
    function t() {
    }
  }
}
Jl.activators = [{
  eventName: "onTouchStart",
  handler: (e, t) => {
    let {
      nativeEvent: n
    } = e, {
      onActivation: r
    } = t;
    const {
      touches: s
    } = n;
    return s.length > 1 ? !1 : (r?.({
      event: n
    }), !0);
  }
}];
var Ut;
(function(e) {
  e[e.Pointer = 0] = "Pointer", e[e.DraggableRect = 1] = "DraggableRect";
})(Ut || (Ut = {}));
var Dn;
(function(e) {
  e[e.TreeOrder = 0] = "TreeOrder", e[e.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Dn || (Dn = {}));
function Xl(e) {
  let {
    acceleration: t,
    activator: n = Ut.Pointer,
    canScroll: r,
    draggingRect: s,
    enabled: i,
    interval: a = 5,
    order: o = Dn.TreeOrder,
    pointerCoordinates: l,
    scrollableAncestors: c,
    scrollableAncestorRects: u,
    delta: f,
    threshold: h
  } = e;
  const p = Gl({
    delta: f,
    disabled: !i
  }), [g, y] = ul(), m = Y({
    x: 0,
    y: 0
  }), v = Y({
    x: 0,
    y: 0
  }), w = te(() => {
    switch (n) {
      case Ut.Pointer:
        return l ? {
          top: l.y,
          bottom: l.y,
          left: l.x,
          right: l.x
        } : null;
      case Ut.DraggableRect:
        return s;
    }
  }, [n, s, l]), S = Y(null), k = ie(() => {
    const N = S.current;
    if (!N)
      return;
    const j = m.current.x * v.current.x, L = m.current.y * v.current.y;
    N.scrollBy(j, L);
  }, []), O = te(() => o === Dn.TreeOrder ? [...c].reverse() : c, [o, c]);
  F(
    () => {
      if (!i || !c.length || !w) {
        y();
        return;
      }
      for (const N of O) {
        if (r?.(N) === !1)
          continue;
        const j = c.indexOf(N), L = u[j];
        if (!L)
          continue;
        const {
          direction: T,
          speed: $
        } = Il(N, L, w, t, h);
        for (const E of ["x", "y"])
          p[E][T[E]] || ($[E] = 0, T[E] = 0);
        if ($.x > 0 || $.y > 0) {
          y(), S.current = N, g(k, a), m.current = $, v.current = T;
          return;
        }
      }
      m.current = {
        x: 0,
        y: 0
      }, v.current = {
        x: 0,
        y: 0
      }, y();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      t,
      k,
      r,
      y,
      i,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(w),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(p),
      g,
      c,
      O,
      u,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Yl = {
  x: {
    [ue.Backward]: !1,
    [ue.Forward]: !1
  },
  y: {
    [ue.Backward]: !1,
    [ue.Forward]: !1
  }
};
function Gl(e) {
  let {
    delta: t,
    disabled: n
  } = e;
  const r = En(t);
  return sn((s) => {
    if (n || !r || !s)
      return Yl;
    const i = {
      x: Math.sign(t.x - r.x),
      y: Math.sign(t.y - r.y)
    };
    return {
      x: {
        [ue.Backward]: s.x[ue.Backward] || i.x === -1,
        [ue.Forward]: s.x[ue.Forward] || i.x === 1
      },
      y: {
        [ue.Backward]: s.y[ue.Backward] || i.y === -1,
        [ue.Forward]: s.y[ue.Forward] || i.y === 1
      }
    };
  }, [n, t, r]);
}
function Ql(e, t) {
  const n = t != null ? e.get(t) : void 0, r = n ? n.node.current : null;
  return sn((s) => {
    var i;
    return t == null ? null : (i = r ?? s) != null ? i : null;
  }, [r, t]);
}
function Zl(e, t) {
  return te(() => e.reduce((n, r) => {
    const {
      sensor: s
    } = r, i = s.activators.map((a) => ({
      eventName: a.eventName,
      handler: t(a.handler, r)
    }));
    return [...n, ...i];
  }, []), [e, t]);
}
var Xt;
(function(e) {
  e[e.Always = 0] = "Always", e[e.BeforeDragging = 1] = "BeforeDragging", e[e.WhileDragging = 2] = "WhileDragging";
})(Xt || (Xt = {}));
var Pr;
(function(e) {
  e.Optimized = "optimized";
})(Pr || (Pr = {}));
const $s = /* @__PURE__ */ new Map();
function ec(e, t) {
  let {
    dragging: n,
    dependencies: r,
    config: s
  } = t;
  const [i, a] = W(null), {
    frequency: o,
    measure: l,
    strategy: c
  } = s, u = Y(e), f = m(), h = Jt(f), p = ie(function(v) {
    v === void 0 && (v = []), !h.current && a((w) => w === null ? v : w.concat(v.filter((S) => !w.includes(S))));
  }, [h]), g = Y(null), y = sn((v) => {
    if (f && !n)
      return $s;
    if (!v || v === $s || u.current !== e || i != null) {
      const w = /* @__PURE__ */ new Map();
      for (let S of e) {
        if (!S)
          continue;
        if (i && i.length > 0 && !i.includes(S.id) && S.rect.current) {
          w.set(S.id, S.rect.current);
          continue;
        }
        const k = S.node.current, O = k ? new ss(l(k), k) : null;
        S.rect.current = O, O && w.set(S.id, O);
      }
      return w;
    }
    return v;
  }, [e, i, n, f, l]);
  return F(() => {
    u.current = e;
  }, [e]), F(
    () => {
      f || p();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n, f]
  ), F(
    () => {
      i && i.length > 0 && a(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(i)]
  ), F(
    () => {
      f || typeof o != "number" || g.current !== null || (g.current = setTimeout(() => {
        p(), g.current = null;
      }, o));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [o, f, p, ...r]
  ), {
    droppableRects: y,
    measureDroppableContainers: p,
    measuringScheduled: i != null
  };
  function m() {
    switch (c) {
      case Xt.Always:
        return !1;
      case Xt.BeforeDragging:
        return n;
      default:
        return !n;
    }
  }
}
function as(e, t) {
  return sn((n) => e ? n || (typeof t == "function" ? t(e) : e) : null, [t, e]);
}
function tc(e, t) {
  return as(e, t);
}
function nc(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Jn(t), s = te(() => {
    if (n || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: i
    } = window;
    return new i(r);
  }, [r, n]);
  return F(() => () => s?.disconnect(), [s]), s;
}
function Yn(e) {
  let {
    callback: t,
    disabled: n
  } = e;
  const r = Jn(t), s = te(
    () => {
      if (n || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: i
      } = window;
      return new i(r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [n]
  );
  return F(() => () => s?.disconnect(), [s]), s;
}
function rc(e) {
  return new ss(Et(e), e);
}
function Ds(e, t, n) {
  t === void 0 && (t = rc);
  const [r, s] = W(null);
  function i() {
    s((l) => {
      if (!e)
        return null;
      if (e.isConnected === !1) {
        var c;
        return (c = l ?? n) != null ? c : null;
      }
      const u = t(e);
      return JSON.stringify(l) === JSON.stringify(u) ? l : u;
    });
  }
  const a = nc({
    callback(l) {
      if (e)
        for (const c of l) {
          const {
            type: u,
            target: f
          } = c;
          if (u === "childList" && f instanceof HTMLElement && f.contains(e)) {
            i();
            break;
          }
        }
    }
  }), o = Yn({
    callback: i
  });
  return Le(() => {
    i(), e ? (o?.observe(e), a?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (o?.disconnect(), a?.disconnect());
  }, [e]), r;
}
function sc(e) {
  const t = as(e);
  return na(e, t);
}
const As = [];
function ic(e) {
  const t = Y(e), n = sn((r) => e ? r && r !== As && e && t.current && e.parentNode === t.current.parentNode ? r : rs(e) : As, [e]);
  return F(() => {
    t.current = e;
  }, [e]), n;
}
function ac(e) {
  const [t, n] = W(null), r = Y(e), s = ie((i) => {
    const a = mr(i.target);
    a && n((o) => o ? (o.set(a, Ar(a)), new Map(o)) : null);
  }, []);
  return F(() => {
    const i = r.current;
    if (e !== i) {
      a(i);
      const o = e.map((l) => {
        const c = mr(l);
        return c ? (c.addEventListener("scroll", s, {
          passive: !0
        }), [c, Ar(c)]) : null;
      }).filter((l) => l != null);
      n(o.length ? new Map(o) : null), r.current = e;
    }
    return () => {
      a(e), a(i);
    };
    function a(o) {
      o.forEach((l) => {
        const c = mr(l);
        c?.removeEventListener("scroll", s);
      });
    }
  }, [s, e]), te(() => e.length ? t ? Array.from(t.values()).reduce((i, a) => jt(i, a), Re) : ca(e) : Re, [e, t]);
}
function Ts(e, t) {
  t === void 0 && (t = []);
  const n = Y(null);
  return F(
    () => {
      n.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), F(() => {
    const r = e !== Re;
    r && !n.current && (n.current = e), !r && n.current && (n.current = null);
  }, [e]), n.current ? Ln(e, n.current) : Re;
}
function oc(e) {
  F(
    () => {
      if (!Wn)
        return;
      const t = e.map((n) => {
        let {
          sensor: r
        } = n;
        return r.setup == null ? void 0 : r.setup();
      });
      return () => {
        for (const n of t)
          n?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e.map((t) => {
      let {
        sensor: n
      } = t;
      return n;
    })
  );
}
function lc(e, t) {
  return te(() => e.reduce((n, r) => {
    let {
      eventName: s,
      handler: i
    } = r;
    return n[s] = (a) => {
      i(a, t);
    }, n;
  }, {}), [e, t]);
}
function pa(e) {
  return te(() => e ? Dl(e) : null, [e]);
}
const Ps = [];
function cc(e, t) {
  t === void 0 && (t = Et);
  const [n] = e, r = pa(n ? ye(n) : null), [s, i] = W(Ps);
  function a() {
    i(() => e.length ? e.map((l) => oa(l) ? r : new ss(t(l), l)) : Ps);
  }
  const o = Yn({
    callback: a
  });
  return Le(() => {
    o?.disconnect(), a(), e.forEach((l) => o?.observe(l));
  }, [e]), s;
}
function ga(e) {
  if (!e)
    return null;
  if (e.children.length > 1)
    return e;
  const t = e.children[0];
  return rn(t) ? t : e;
}
function uc(e) {
  let {
    measure: t
  } = e;
  const [n, r] = W(null), s = ie((c) => {
    for (const {
      target: u
    } of c)
      if (rn(u)) {
        r((f) => {
          const h = t(u);
          return f ? {
            ...f,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [t]), i = Yn({
    callback: s
  }), a = ie((c) => {
    const u = ga(c);
    i?.disconnect(), u && i?.observe(u), r(u ? t(u) : null);
  }, [t, i]), [o, l] = On(a);
  return te(() => ({
    nodeRef: o,
    rect: n,
    setRef: l
  }), [n, o, l]);
}
const dc = [{
  sensor: ha,
  options: {}
}, {
  sensor: fa,
  options: {}
}], fc = {
  current: {}
}, kn = {
  draggable: {
    measure: Os
  },
  droppable: {
    measure: Os,
    strategy: Xt.WhileDragging,
    frequency: Pr.Optimized
  },
  dragOverlay: {
    measure: Et
  }
};
class Ht extends Map {
  get(t) {
    var n;
    return t != null && (n = super.get(t)) != null ? n : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((t) => {
      let {
        disabled: n
      } = t;
      return !n;
    });
  }
  getNodeFor(t) {
    var n, r;
    return (n = (r = this.get(t)) == null ? void 0 : r.node.current) != null ? n : void 0;
  }
}
const hc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new Ht(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: $n
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: kn,
  measureDroppableContainers: $n,
  windowRect: null,
  measuringScheduled: !1
}, ma = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: $n,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: $n
}, on = /* @__PURE__ */ ot(ma), ya = /* @__PURE__ */ ot(hc);
function pc() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new Ht()
    }
  };
}
function gc(e, t) {
  switch (t.type) {
    case ce.DragStart:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          initialCoordinates: t.initialCoordinates,
          active: t.active
        }
      };
    case ce.DragMove:
      return e.draggable.active == null ? e : {
        ...e,
        draggable: {
          ...e.draggable,
          translate: {
            x: t.coordinates.x - e.draggable.initialCoordinates.x,
            y: t.coordinates.y - e.draggable.initialCoordinates.y
          }
        }
      };
    case ce.DragEnd:
    case ce.DragCancel:
      return {
        ...e,
        draggable: {
          ...e.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case ce.RegisterDroppable: {
      const {
        element: n
      } = t, {
        id: r
      } = n, s = new Ht(e.droppable.containers);
      return s.set(r, n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: s
        }
      };
    }
    case ce.SetDroppableDisabled: {
      const {
        id: n,
        key: r,
        disabled: s
      } = t, i = e.droppable.containers.get(n);
      if (!i || r !== i.key)
        return e;
      const a = new Ht(e.droppable.containers);
      return a.set(n, {
        ...i,
        disabled: s
      }), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: a
        }
      };
    }
    case ce.UnregisterDroppable: {
      const {
        id: n,
        key: r
      } = t, s = e.droppable.containers.get(n);
      if (!s || r !== s.key)
        return e;
      const i = new Ht(e.droppable.containers);
      return i.delete(n), {
        ...e,
        droppable: {
          ...e.droppable,
          containers: i
        }
      };
    }
    default:
      return e;
  }
}
function mc(e) {
  let {
    disabled: t
  } = e;
  const {
    active: n,
    activatorEvent: r,
    draggableNodes: s
  } = Ee(on), i = En(r), a = En(n?.id);
  return F(() => {
    if (!t && !r && i && a != null) {
      if (!Xn(i) || document.activeElement === i.target)
        return;
      const o = s.get(a);
      if (!o)
        return;
      const {
        activatorNode: l,
        node: c
      } = o;
      if (!l.current && !c.current)
        return;
      requestAnimationFrame(() => {
        for (const u of [l.current, c.current]) {
          if (!u)
            continue;
          const f = hl(u);
          if (f) {
            f.focus();
            break;
          }
        }
      });
    }
  }, [r, t, s, a, i]), null;
}
function xa(e, t) {
  let {
    transform: n,
    ...r
  } = t;
  return e != null && e.length ? e.reduce((s, i) => i({
    transform: s,
    ...r
  }), n) : n;
}
function yc(e) {
  return te(
    () => ({
      draggable: {
        ...kn.draggable,
        ...e?.draggable
      },
      droppable: {
        ...kn.droppable,
        ...e?.droppable
      },
      dragOverlay: {
        ...kn.dragOverlay,
        ...e?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [e?.draggable, e?.droppable, e?.dragOverlay]
  );
}
function xc(e) {
  let {
    activeNode: t,
    measure: n,
    initialRect: r,
    config: s = !0
  } = e;
  const i = Y(!1), {
    x: a,
    y: o
  } = typeof s == "boolean" ? {
    x: s,
    y: s
  } : s;
  Le(() => {
    if (!a && !o || !t) {
      i.current = !1;
      return;
    }
    if (i.current || !r)
      return;
    const c = t?.node.current;
    if (!c || c.isConnected === !1)
      return;
    const u = n(c), f = na(u, r);
    if (a || (f.x = 0), o || (f.y = 0), i.current = !0, Math.abs(f.x) > 0 || Math.abs(f.y) > 0) {
      const h = sa(c);
      h && h.scrollBy({
        top: f.y,
        left: f.x
      });
    }
  }, [t, a, o, r, n]);
}
const Gn = /* @__PURE__ */ ot({
  ...Re,
  scaleX: 1,
  scaleY: 1
});
var Ge;
(function(e) {
  e[e.Uninitialized = 0] = "Uninitialized", e[e.Initializing = 1] = "Initializing", e[e.Initialized = 2] = "Initialized";
})(Ge || (Ge = {}));
const bc = /* @__PURE__ */ Eo(function(t) {
  var n, r, s, i;
  let {
    id: a,
    accessibility: o,
    autoScroll: l = !0,
    children: c,
    sensors: u = dc,
    collisionDetection: f = Cl,
    measuring: h,
    modifiers: p,
    ...g
  } = t;
  const y = Lo(gc, void 0, pc), [m, v] = y, [w, S] = bl(), [k, O] = W(Ge.Uninitialized), N = k === Ge.Initialized, {
    draggable: {
      active: j,
      nodes: L,
      translate: T
    },
    droppable: {
      containers: $
    }
  } = m, E = j != null ? L.get(j) : null, I = Y({
    initial: null,
    translated: null
  }), K = te(() => {
    var pe;
    return j != null ? {
      id: j,
      // It's possible for the active node to unmount while dragging
      data: (pe = E?.data) != null ? pe : fc,
      rect: I
    } : null;
  }, [j, E]), H = Y(null), [ae, A] = W(null), [B, ne] = W(null), re = Jt(g, Object.values(g)), x = an("DndDescribedBy", a), C = te(() => $.getEnabled(), [$]), _ = yc(h), {
    droppableRects: R,
    measureDroppableContainers: D,
    measuringScheduled: V
  } = ec(C, {
    dragging: N,
    dependencies: [T.x, T.y],
    config: _.droppable
  }), se = Ql(L, j), Ne = te(() => B ? Rn(B) : null, [B]), U = No(), oe = tc(se, _.draggable.measure);
  xc({
    activeNode: j != null ? L.get(j) : null,
    config: U.layoutShiftCompensation,
    initialRect: oe,
    measure: _.draggable.measure
  });
  const X = Ds(se, _.draggable.measure, oe), Fe = Ds(se ? se.parentElement : null), $e = Y({
    activatorEvent: null,
    active: null,
    activeNode: se,
    collisionRect: null,
    collisions: null,
    droppableRects: R,
    draggableNodes: L,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: $,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), ct = $.getNodeFor((n = $e.current.over) == null ? void 0 : n.id), Ve = uc({
    measure: _.dragOverlay.measure
  }), ut = (r = Ve.nodeRef.current) != null ? r : se, dt = N ? (s = Ve.rect) != null ? s : X : null, fs = !!(Ve.nodeRef.current && Ve.rect), hs = sc(fs ? null : X), cr = pa(ut ? ye(ut) : null), Ke = ic(N ? ct ?? se : null), un = cc(Ke), dn = xa(p, {
    transform: {
      x: T.x - hs.x,
      y: T.y - hs.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: B,
    active: K,
    activeNodeRect: X,
    containerNodeRect: Fe,
    draggingNodeRect: dt,
    over: $e.current.over,
    overlayNodeRect: Ve.rect,
    scrollableAncestors: Ke,
    scrollableAncestorRects: un,
    windowRect: cr
  }), ps = Ne ? jt(Ne, T) : null, gs = ac(Ke), xo = Ts(gs), bo = Ts(gs, [X]), ft = jt(dn, xo), ht = dt ? Ll(dt, dn) : null, Lt = K && ht ? f({
    active: K,
    collisionRect: ht,
    droppableRects: R,
    droppableContainers: C,
    pointerCoordinates: ps
  }) : null, ms = Nl(Lt, "id"), [We, ys] = W(null), vo = fs ? dn : jt(dn, bo), wo = Ol(vo, (i = We?.rect) != null ? i : null, X), ur = Y(null), xs = ie(
    (pe, be) => {
      let {
        sensor: ve,
        options: Je
      } = be;
      if (H.current == null)
        return;
      const _e = L.get(H.current);
      if (!_e)
        return;
      const we = pe.nativeEvent, De = new ve({
        active: H.current,
        activeNode: _e,
        event: we,
        options: Je,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: $e,
        onAbort(fe) {
          if (!L.get(fe))
            return;
          const {
            onDragAbort: Ae
          } = re.current, qe = {
            id: fe
          };
          Ae?.(qe), w({
            type: "onDragAbort",
            event: qe
          });
        },
        onPending(fe, Xe, Ae, qe) {
          if (!L.get(fe))
            return;
          const {
            onDragPending: $t
          } = re.current, Ye = {
            id: fe,
            constraint: Xe,
            initialCoordinates: Ae,
            offset: qe
          };
          $t?.(Ye), w({
            type: "onDragPending",
            event: Ye
          });
        },
        onStart(fe) {
          const Xe = H.current;
          if (Xe == null)
            return;
          const Ae = L.get(Xe);
          if (!Ae)
            return;
          const {
            onDragStart: qe
          } = re.current, Rt = {
            activatorEvent: we,
            active: {
              id: Xe,
              data: Ae.data,
              rect: I
            }
          };
          fn(() => {
            qe?.(Rt), O(Ge.Initializing), v({
              type: ce.DragStart,
              initialCoordinates: fe,
              active: Xe
            }), w({
              type: "onDragStart",
              event: Rt
            }), A(ur.current), ne(we);
          });
        },
        onMove(fe) {
          v({
            type: ce.DragMove,
            coordinates: fe
          });
        },
        onEnd: pt(ce.DragEnd),
        onCancel: pt(ce.DragCancel)
      });
      ur.current = De;
      function pt(fe) {
        return async function() {
          const {
            active: Ae,
            collisions: qe,
            over: Rt,
            scrollAdjustedTranslate: $t
          } = $e.current;
          let Ye = null;
          if (Ae && $t) {
            const {
              cancelDrop: Dt
            } = re.current;
            Ye = {
              activatorEvent: we,
              active: Ae,
              collisions: qe,
              delta: $t,
              over: Rt
            }, fe === ce.DragEnd && typeof Dt == "function" && await Promise.resolve(Dt(Ye)) && (fe = ce.DragCancel);
          }
          H.current = null, fn(() => {
            v({
              type: fe
            }), O(Ge.Uninitialized), ys(null), A(null), ne(null), ur.current = null;
            const Dt = fe === ce.DragEnd ? "onDragEnd" : "onDragCancel";
            if (Ye) {
              const dr = re.current[Dt];
              dr?.(Ye), w({
                type: Dt,
                event: Ye
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [L]
  ), So = ie((pe, be) => (ve, Je) => {
    const _e = ve.nativeEvent, we = L.get(Je);
    if (
      // Another sensor is already instantiating
      H.current !== null || // No active draggable
      !we || // Event has already been captured
      _e.dndKit || _e.defaultPrevented
    )
      return;
    const De = {
      active: we
    };
    pe(ve, be.options, De) === !0 && (_e.dndKit = {
      capturedBy: be.sensor
    }, H.current = Je, xs(ve, be));
  }, [L, xs]), bs = Zl(u, So);
  oc(u), Le(() => {
    X && k === Ge.Initializing && O(Ge.Initialized);
  }, [X, k]), F(
    () => {
      const {
        onDragMove: pe
      } = re.current, {
        active: be,
        activatorEvent: ve,
        collisions: Je,
        over: _e
      } = $e.current;
      if (!be || !ve)
        return;
      const we = {
        active: be,
        activatorEvent: ve,
        collisions: Je,
        delta: {
          x: ft.x,
          y: ft.y
        },
        over: _e
      };
      fn(() => {
        pe?.(we), w({
          type: "onDragMove",
          event: we
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ft.x, ft.y]
  ), F(
    () => {
      const {
        active: pe,
        activatorEvent: be,
        collisions: ve,
        droppableContainers: Je,
        scrollAdjustedTranslate: _e
      } = $e.current;
      if (!pe || H.current == null || !be || !_e)
        return;
      const {
        onDragOver: we
      } = re.current, De = Je.get(ms), pt = De && De.rect.current ? {
        id: De.id,
        rect: De.rect.current,
        data: De.data,
        disabled: De.disabled
      } : null, fe = {
        active: pe,
        activatorEvent: be,
        collisions: ve,
        delta: {
          x: _e.x,
          y: _e.y
        },
        over: pt
      };
      fn(() => {
        ys(pt), we?.(fe), w({
          type: "onDragOver",
          event: fe
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ms]
  ), Le(() => {
    $e.current = {
      activatorEvent: B,
      active: K,
      activeNode: se,
      collisionRect: ht,
      collisions: Lt,
      droppableRects: R,
      draggableNodes: L,
      draggingNode: ut,
      draggingNodeRect: dt,
      droppableContainers: $,
      over: We,
      scrollableAncestors: Ke,
      scrollAdjustedTranslate: ft
    }, I.current = {
      initial: dt,
      translated: ht
    };
  }, [K, se, Lt, ht, L, ut, dt, R, $, We, Ke, ft]), Xl({
    ...U,
    delta: T,
    draggingRect: ht,
    pointerCoordinates: ps,
    scrollableAncestors: Ke,
    scrollableAncestorRects: un
  });
  const jo = te(() => ({
    active: K,
    activeNode: se,
    activeNodeRect: X,
    activatorEvent: B,
    collisions: Lt,
    containerNodeRect: Fe,
    dragOverlay: Ve,
    draggableNodes: L,
    droppableContainers: $,
    droppableRects: R,
    over: We,
    measureDroppableContainers: D,
    scrollableAncestors: Ke,
    scrollableAncestorRects: un,
    measuringConfiguration: _,
    measuringScheduled: V,
    windowRect: cr
  }), [K, se, X, B, Lt, Fe, Ve, L, $, R, We, D, Ke, un, _, V, cr]), ko = te(() => ({
    activatorEvent: B,
    activators: bs,
    active: K,
    activeNodeRect: X,
    ariaDescribedById: {
      draggable: x
    },
    dispatch: v,
    draggableNodes: L,
    over: We,
    measureDroppableContainers: D
  }), [B, bs, K, X, v, x, L, We, D]);
  return G.createElement(ta.Provider, {
    value: S
  }, G.createElement(on.Provider, {
    value: ko
  }, G.createElement(ya.Provider, {
    value: jo
  }, G.createElement(Gn.Provider, {
    value: wo
  }, c)), G.createElement(mc, {
    disabled: o?.restoreFocus === !1
  })), G.createElement(Sl, {
    ...o,
    hiddenTextDescribedById: x
  }));
  function No() {
    const pe = ae?.autoScrollEnabled === !1, be = typeof l == "object" ? l.enabled === !1 : l === !1, ve = N && !pe && !be;
    return typeof l == "object" ? {
      ...l,
      enabled: ve
    } : {
      enabled: ve
    };
  }
}), vc = /* @__PURE__ */ ot(null), Is = "button", wc = "Draggable";
function ba(e) {
  let {
    id: t,
    data: n,
    disabled: r = !1,
    attributes: s
  } = e;
  const i = an(wc), {
    activators: a,
    activatorEvent: o,
    active: l,
    activeNodeRect: c,
    ariaDescribedById: u,
    draggableNodes: f,
    over: h
  } = Ee(on), {
    role: p = Is,
    roleDescription: g = "draggable",
    tabIndex: y = 0
  } = s ?? {}, m = l?.id === t, v = Ee(m ? Gn : vc), [w, S] = On(), [k, O] = On(), N = lc(a, t), j = Jt(n);
  Le(
    () => (f.set(t, {
      id: t,
      key: i,
      node: w,
      activatorNode: k,
      data: j
    }), () => {
      const T = f.get(t);
      T && T.key === i && f.delete(t);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f, t]
  );
  const L = te(() => ({
    role: p,
    tabIndex: y,
    "aria-disabled": r,
    "aria-pressed": m && p === Is ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": u.draggable
  }), [r, p, y, m, g, u.draggable]);
  return {
    active: l,
    activatorEvent: o,
    activeNodeRect: c,
    attributes: L,
    isDragging: m,
    listeners: r ? void 0 : N,
    node: w,
    over: h,
    setNodeRef: S,
    setActivatorNodeRef: O,
    transform: v
  };
}
function va() {
  return Ee(ya);
}
const Sc = "Droppable", jc = {
  timeout: 25
};
function wa(e) {
  let {
    data: t,
    disabled: n = !1,
    id: r,
    resizeObserverConfig: s
  } = e;
  const i = an(Sc), {
    active: a,
    dispatch: o,
    over: l,
    measureDroppableContainers: c
  } = Ee(on), u = Y({
    disabled: n
  }), f = Y(!1), h = Y(null), p = Y(null), {
    disabled: g,
    updateMeasurementsFor: y,
    timeout: m
  } = {
    ...jc,
    ...s
  }, v = Jt(y ?? r), w = ie(
    () => {
      if (!f.current) {
        f.current = !0;
        return;
      }
      p.current != null && clearTimeout(p.current), p.current = setTimeout(() => {
        c(Array.isArray(v.current) ? v.current : [v.current]), p.current = null;
      }, m);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), S = Yn({
    callback: w,
    disabled: g || !a
  }), k = ie((L, T) => {
    S && (T && (S.unobserve(T), f.current = !1), L && S.observe(L));
  }, [S]), [O, N] = On(k), j = Jt(t);
  return F(() => {
    !S || !O.current || (S.disconnect(), f.current = !1, S.observe(O.current));
  }, [O, S]), F(
    () => (o({
      type: ce.RegisterDroppable,
      element: {
        id: r,
        key: i,
        disabled: n,
        node: O,
        rect: h,
        data: j
      }
    }), () => o({
      type: ce.UnregisterDroppable,
      key: i,
      id: r
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), F(() => {
    n !== u.current.disabled && (o({
      type: ce.SetDroppableDisabled,
      id: r,
      key: i,
      disabled: n
    }), u.current.disabled = n);
  }, [r, i, n, o]), {
    active: a,
    rect: h,
    isOver: l?.id === r,
    node: O,
    over: l,
    setNodeRef: N
  };
}
function kc(e) {
  let {
    animation: t,
    children: n
  } = e;
  const [r, s] = W(null), [i, a] = W(null), o = En(n);
  return !n && !r && o && s(o), Le(() => {
    if (!i)
      return;
    const l = r?.key, c = r?.props.id;
    if (l == null || c == null) {
      s(null);
      return;
    }
    Promise.resolve(t(c, i)).then(() => {
      s(null);
    });
  }, [t, r, i]), G.createElement(G.Fragment, null, n, r ? Qr(r, {
    ref: a
  }) : null);
}
const Nc = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function _c(e) {
  let {
    children: t
  } = e;
  return G.createElement(on.Provider, {
    value: ma
  }, G.createElement(Gn.Provider, {
    value: Nc
  }, t));
}
const Cc = {
  position: "fixed",
  touchAction: "none"
}, Oc = (e) => Xn(e) ? "transform 250ms ease" : void 0, Ec = /* @__PURE__ */ Zr((e, t) => {
  let {
    as: n,
    activatorEvent: r,
    adjustScale: s,
    children: i,
    className: a,
    rect: o,
    style: l,
    transform: c,
    transition: u = Oc
  } = e;
  if (!o)
    return null;
  const f = s ? c : {
    ...c,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...Cc,
    width: o.width,
    height: o.height,
    top: o.top,
    left: o.left,
    transform: et.Transform.toString(f),
    transformOrigin: s && r ? jl(r, o) : void 0,
    transition: typeof u == "function" ? u(r) : u,
    ...l
  };
  return G.createElement(n, {
    className: a,
    style: h,
    ref: t
  }, i);
}), Lc = (e) => (t) => {
  let {
    active: n,
    dragOverlay: r
  } = t;
  const s = {}, {
    styles: i,
    className: a
  } = e;
  if (i != null && i.active)
    for (const [o, l] of Object.entries(i.active))
      l !== void 0 && (s[o] = n.node.style.getPropertyValue(o), n.node.style.setProperty(o, l));
  if (i != null && i.dragOverlay)
    for (const [o, l] of Object.entries(i.dragOverlay))
      l !== void 0 && r.node.style.setProperty(o, l);
  return a != null && a.active && n.node.classList.add(a.active), a != null && a.dragOverlay && r.node.classList.add(a.dragOverlay), function() {
    for (const [l, c] of Object.entries(s))
      n.node.style.setProperty(l, c);
    a != null && a.active && n.node.classList.remove(a.active);
  };
}, Rc = (e) => {
  let {
    transform: {
      initial: t,
      final: n
    }
  } = e;
  return [{
    transform: et.Transform.toString(t)
  }, {
    transform: et.Transform.toString(n)
  }];
}, $c = {
  duration: 250,
  easing: "ease",
  keyframes: Rc,
  sideEffects: /* @__PURE__ */ Lc({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function Dc(e) {
  let {
    config: t,
    draggableNodes: n,
    droppableContainers: r,
    measuringConfiguration: s
  } = e;
  return Jn((i, a) => {
    if (t === null)
      return;
    const o = n.get(i);
    if (!o)
      return;
    const l = o.node.current;
    if (!l)
      return;
    const c = ga(a);
    if (!c)
      return;
    const {
      transform: u
    } = ye(a).getComputedStyle(a), f = ra(u);
    if (!f)
      return;
    const h = typeof t == "function" ? t : Ac(t);
    return ua(l, s.draggable.measure), h({
      active: {
        id: i,
        data: o.data,
        node: l,
        rect: s.draggable.measure(l)
      },
      draggableNodes: n,
      dragOverlay: {
        node: a,
        rect: s.dragOverlay.measure(c)
      },
      droppableContainers: r,
      measuringConfiguration: s,
      transform: f
    });
  });
}
function Ac(e) {
  const {
    duration: t,
    easing: n,
    sideEffects: r,
    keyframes: s
  } = {
    ...$c,
    ...e
  };
  return (i) => {
    let {
      active: a,
      dragOverlay: o,
      transform: l,
      ...c
    } = i;
    if (!t)
      return;
    const u = {
      x: o.rect.left - a.rect.left,
      y: o.rect.top - a.rect.top
    }, f = {
      scaleX: l.scaleX !== 1 ? a.rect.width * l.scaleX / o.rect.width : 1,
      scaleY: l.scaleY !== 1 ? a.rect.height * l.scaleY / o.rect.height : 1
    }, h = {
      x: l.x - u.x,
      y: l.y - u.y,
      ...f
    }, p = s({
      ...c,
      active: a,
      dragOverlay: o,
      transform: {
        initial: l,
        final: h
      }
    }), [g] = p, y = p[p.length - 1];
    if (JSON.stringify(g) === JSON.stringify(y))
      return;
    const m = r?.({
      active: a,
      dragOverlay: o,
      ...c
    }), v = o.node.animate(p, {
      duration: t,
      easing: n,
      fill: "forwards"
    });
    return new Promise((w) => {
      v.onfinish = () => {
        m?.(), w();
      };
    });
  };
}
let Ms = 0;
function Tc(e) {
  return te(() => {
    if (e != null)
      return Ms++, Ms;
  }, [e]);
}
const Pc = /* @__PURE__ */ G.memo((e) => {
  let {
    adjustScale: t = !1,
    children: n,
    dropAnimation: r,
    style: s,
    transition: i,
    modifiers: a,
    wrapperElement: o = "div",
    className: l,
    zIndex: c = 999
  } = e;
  const {
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    containerNodeRect: p,
    draggableNodes: g,
    droppableContainers: y,
    dragOverlay: m,
    over: v,
    measuringConfiguration: w,
    scrollableAncestors: S,
    scrollableAncestorRects: k,
    windowRect: O
  } = va(), N = Ee(Gn), j = Tc(f?.id), L = xa(a, {
    activatorEvent: u,
    active: f,
    activeNodeRect: h,
    containerNodeRect: p,
    draggingNodeRect: m.rect,
    over: v,
    overlayNodeRect: m.rect,
    scrollableAncestors: S,
    scrollableAncestorRects: k,
    transform: N,
    windowRect: O
  }), T = as(h), $ = Dc({
    config: r,
    draggableNodes: g,
    droppableContainers: y,
    measuringConfiguration: w
  }), E = T ? m.setRef : void 0;
  return G.createElement(_c, null, G.createElement(kc, {
    animation: $
  }, f && j ? G.createElement(Ec, {
    key: j,
    id: f.id,
    ref: E,
    as: o,
    activatorEvent: u,
    adjustScale: t,
    className: l,
    transition: i,
    rect: T,
    style: {
      zIndex: c,
      ...s
    },
    transform: L
  }, n) : null));
});
let Ic = { data: "" }, Mc = (e) => typeof window == "object" ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : e || Ic, zc = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Fc = /\/\*[^]*?\*\/|  +/g, zs = /\n+/g, Qe = (e, t) => {
  let n = "", r = "", s = "";
  for (let i in e) {
    let a = e[i];
    i[0] == "@" ? i[1] == "i" ? n = i + " " + a + ";" : r += i[1] == "f" ? Qe(a, i) : i + "{" + Qe(a, i[1] == "k" ? "" : t) + "}" : typeof a == "object" ? r += Qe(a, t ? t.replace(/([^,])+/g, (o) => i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) => /&/.test(l) ? l.replace(/&/g, o) : o ? o + " " + l : l)) : i) : a != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), s += Qe.p ? Qe.p(i, a) : i + ":" + a + ";");
  }
  return n + (t && s ? t + "{" + s + "}" : s) + r;
}, Ue = {}, Sa = (e) => {
  if (typeof e == "object") {
    let t = "";
    for (let n in e) t += n + Sa(e[n]);
    return t;
  }
  return e;
}, Vc = (e, t, n, r, s) => {
  let i = Sa(e), a = Ue[i] || (Ue[i] = ((l) => {
    let c = 0, u = 11;
    for (; c < l.length; ) u = 101 * u + l.charCodeAt(c++) >>> 0;
    return "go" + u;
  })(i));
  if (!Ue[a]) {
    let l = i !== e ? e : ((c) => {
      let u, f, h = [{}];
      for (; u = zc.exec(c.replace(Fc, "")); ) u[4] ? h.shift() : u[3] ? (f = u[3].replace(zs, " ").trim(), h.unshift(h[0][f] = h[0][f] || {})) : h[0][u[1]] = u[2].replace(zs, " ").trim();
      return h[0];
    })(e);
    Ue[a] = Qe(s ? { ["@keyframes " + a]: l } : l, n ? "" : "." + a);
  }
  let o = n && Ue.g ? Ue.g : null;
  return n && (Ue.g = Ue[a]), ((l, c, u, f) => {
    f ? c.data = c.data.replace(f, l) : c.data.indexOf(l) === -1 && (c.data = u ? l + c.data : c.data + l);
  })(Ue[a], t, r, o), a;
}, qc = (e, t, n) => e.reduce((r, s, i) => {
  let a = t[i];
  if (a && a.call) {
    let o = a(n), l = o && o.props && o.props.className || /^go/.test(o) && o;
    a = l ? "." + l : o && typeof o == "object" ? o.props ? "" : Qe(o, "") : o === !1 ? "" : o;
  }
  return r + s + (a ?? "");
}, "");
function Qn(e) {
  let t = this || {}, n = e.call ? e(t.p) : e;
  return Vc(n.unshift ? n.raw ? qc(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, s) => Object.assign(r, s && s.call ? s(t.p) : s), {}) : n, Mc(t.target), t.g, t.o, t.k);
}
let ja, Ir, Mr;
Qn.bind({ g: 1 });
let Be = Qn.bind({ k: 1 });
function Uc(e, t, n, r) {
  Qe.p = t, ja = e, Ir = n, Mr = r;
}
function nt(e, t) {
  let n = this || {};
  return function() {
    let r = arguments;
    function s(i, a) {
      let o = Object.assign({}, i), l = o.className || s.className;
      n.p = Object.assign({ theme: Ir && Ir() }, o), n.o = / *go\d+/.test(l), o.className = Qn.apply(n, r) + (l ? " " + l : "");
      let c = e;
      return e[0] && (c = o.as || e, delete o.as), Mr && c[0] && Mr(o), ja(c, o);
    }
    return s;
  };
}
var Hc = (e) => typeof e == "function", An = (e, t) => Hc(e) ? e(t) : e, Bc = /* @__PURE__ */ (() => {
  let e = 0;
  return () => (++e).toString();
})(), ka = /* @__PURE__ */ (() => {
  let e;
  return () => {
    if (e === void 0 && typeof window < "u") {
      let t = matchMedia("(prefers-reduced-motion: reduce)");
      e = !t || t.matches;
    }
    return e;
  };
})(), Kc = 20, os = "default", Na = (e, t) => {
  let { toastLimit: n } = e.settings;
  switch (t.type) {
    case 0:
      return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
    case 1:
      return { ...e, toasts: e.toasts.map((a) => a.id === t.toast.id ? { ...a, ...t.toast } : a) };
    case 2:
      let { toast: r } = t;
      return Na(e, { type: e.toasts.find((a) => a.id === r.id) ? 1 : 0, toast: r });
    case 3:
      let { toastId: s } = t;
      return { ...e, toasts: e.toasts.map((a) => a.id === s || s === void 0 ? { ...a, dismissed: !0, visible: !1 } : a) };
    case 4:
      return t.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((a) => a.id !== t.toastId) };
    case 5:
      return { ...e, pausedAt: t.time };
    case 6:
      let i = t.time - (e.pausedAt || 0);
      return { ...e, pausedAt: void 0, toasts: e.toasts.map((a) => ({ ...a, pauseDuration: a.pauseDuration + i })) };
  }
}, Nn = [], _a = { toasts: [], pausedAt: void 0, settings: { toastLimit: Kc } }, Ie = {}, Ca = (e, t = os) => {
  Ie[t] = Na(Ie[t] || _a, e), Nn.forEach(([n, r]) => {
    n === t && r(Ie[t]);
  });
}, Oa = (e) => Object.keys(Ie).forEach((t) => Ca(e, t)), Wc = (e) => Object.keys(Ie).find((t) => Ie[t].toasts.some((n) => n.id === e)), Zn = (e = os) => (t) => {
  Ca(t, e);
}, Jc = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, Xc = (e = {}, t = os) => {
  let [n, r] = W(Ie[t] || _a), s = Y(Ie[t]);
  F(() => (s.current !== Ie[t] && r(Ie[t]), Nn.push([t, r]), () => {
    let a = Nn.findIndex(([o]) => o === t);
    a > -1 && Nn.splice(a, 1);
  }), [t]);
  let i = n.toasts.map((a) => {
    var o, l, c;
    return { ...e, ...e[a.type], ...a, removeDelay: a.removeDelay || ((o = e[a.type]) == null ? void 0 : o.removeDelay) || e?.removeDelay, duration: a.duration || ((l = e[a.type]) == null ? void 0 : l.duration) || e?.duration || Jc[a.type], style: { ...e.style, ...(c = e[a.type]) == null ? void 0 : c.style, ...a.style } };
  });
  return { ...n, toasts: i };
}, Yc = (e, t = "blank", n) => ({ createdAt: Date.now(), visible: !0, dismissed: !1, type: t, ariaProps: { role: "status", "aria-live": "polite" }, message: e, pauseDuration: 0, ...n, id: n?.id || Bc() }), ln = (e) => (t, n) => {
  let r = Yc(t, e, n);
  return Zn(r.toasterId || Wc(r.id))({ type: 2, toast: r }), r.id;
}, Q = (e, t) => ln("blank")(e, t);
Q.error = ln("error");
Q.success = ln("success");
Q.loading = ln("loading");
Q.custom = ln("custom");
Q.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? Zn(t)(n) : Oa(n);
};
Q.dismissAll = (e) => Q.dismiss(void 0, e);
Q.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? Zn(t)(n) : Oa(n);
};
Q.removeAll = (e) => Q.remove(void 0, e);
Q.promise = (e, t, n) => {
  let r = Q.loading(t.loading, { ...n, ...n?.loading });
  return typeof e == "function" && (e = e()), e.then((s) => {
    let i = t.success ? An(t.success, s) : void 0;
    return i ? Q.success(i, { id: r, ...n, ...n?.success }) : Q.dismiss(r), s;
  }).catch((s) => {
    let i = t.error ? An(t.error, s) : void 0;
    i ? Q.error(i, { id: r, ...n, ...n?.error }) : Q.dismiss(r);
  }), e;
};
var Gc = 1e3, Qc = (e, t = "default") => {
  let { toasts: n, pausedAt: r } = Xc(e, t), s = Y(/* @__PURE__ */ new Map()).current, i = ie((f, h = Gc) => {
    if (s.has(f)) return;
    let p = setTimeout(() => {
      s.delete(f), a({ type: 4, toastId: f });
    }, h);
    s.set(f, p);
  }, []);
  F(() => {
    if (r) return;
    let f = Date.now(), h = n.map((p) => {
      if (p.duration === 1 / 0) return;
      let g = (p.duration || 0) + p.pauseDuration - (f - p.createdAt);
      if (g < 0) {
        p.visible && Q.dismiss(p.id);
        return;
      }
      return setTimeout(() => Q.dismiss(p.id, t), g);
    });
    return () => {
      h.forEach((p) => p && clearTimeout(p));
    };
  }, [n, r, t]);
  let a = ie(Zn(t), [t]), o = ie(() => {
    a({ type: 5, time: Date.now() });
  }, [a]), l = ie((f, h) => {
    a({ type: 1, toast: { id: f, height: h } });
  }, [a]), c = ie(() => {
    r && a({ type: 6, time: Date.now() });
  }, [r, a]), u = ie((f, h) => {
    let { reverseOrder: p = !1, gutter: g = 8, defaultPosition: y } = h || {}, m = n.filter((S) => (S.position || y) === (f.position || y) && S.height), v = m.findIndex((S) => S.id === f.id), w = m.filter((S, k) => k < v && S.visible).length;
    return m.filter((S) => S.visible).slice(...p ? [w + 1] : [0, w]).reduce((S, k) => S + (k.height || 0) + g, 0);
  }, [n]);
  return F(() => {
    n.forEach((f) => {
      if (f.dismissed) i(f.id, f.removeDelay);
      else {
        let h = s.get(f.id);
        h && (clearTimeout(h), s.delete(f.id));
      }
    });
  }, [n, i]), { toasts: n, handlers: { updateHeight: l, startPause: o, endPause: c, calculateOffset: u } };
}, Zc = Be`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, eu = Be`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, tu = Be`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, nu = nt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zc} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${eu} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${tu} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ru = Be`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, su = nt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${ru} 1s linear infinite;
`, iu = Be`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, au = Be`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, ou = nt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iu} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${au} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, lu = nt("div")`
  position: absolute;
`, cu = nt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, uu = Be`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, du = nt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${uu} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, fu = ({ toast: e }) => {
  let { icon: t, type: n, iconTheme: r } = e;
  return t !== void 0 ? typeof t == "string" ? de.createElement(du, null, t) : t : n === "blank" ? null : de.createElement(cu, null, de.createElement(su, { ...r }), n !== "loading" && de.createElement(lu, null, n === "error" ? de.createElement(nu, { ...r }) : de.createElement(ou, { ...r })));
}, hu = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, pu = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`, gu = "0%{opacity:0;} 100%{opacity:1;}", mu = "0%{opacity:1;} 100%{opacity:0;}", yu = nt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, xu = nt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, bu = (e, t) => {
  let n = e.includes("top") ? 1 : -1, [r, s] = ka() ? [gu, mu] : [hu(n), pu(n)];
  return { animation: t ? `${Be(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Be(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, vu = de.memo(({ toast: e, position: t, style: n, children: r }) => {
  let s = e.height ? bu(e.position || t || "top-center", e.visible) : { opacity: 0 }, i = de.createElement(fu, { toast: e }), a = de.createElement(xu, { ...e.ariaProps }, An(e.message, e));
  return de.createElement(yu, { className: e.className, style: { ...s, ...n, ...e.style } }, typeof r == "function" ? r({ icon: i, message: a }) : de.createElement(de.Fragment, null, i, a));
});
Uc(de.createElement);
var wu = ({ id: e, className: t, style: n, onHeightUpdate: r, children: s }) => {
  let i = de.useCallback((a) => {
    if (a) {
      let o = () => {
        let l = a.getBoundingClientRect().height;
        r(e, l);
      };
      o(), new MutationObserver(o).observe(a, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [e, r]);
  return de.createElement("div", { ref: i, className: t, style: n }, s);
}, Su = (e, t) => {
  let n = e.includes("top"), r = n ? { top: 0 } : { bottom: 0 }, s = e.includes("center") ? { justifyContent: "center" } : e.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: ka() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t * (n ? 1 : -1)}px)`, ...r, ...s };
}, ju = Qn`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, pn = 16, ku = ({ reverseOrder: e, position: t = "top-center", toastOptions: n, gutter: r, children: s, toasterId: i, containerStyle: a, containerClassName: o }) => {
  let { toasts: l, handlers: c } = Qc(n, i);
  return de.createElement("div", { "data-rht-toaster": i || "", style: { position: "fixed", zIndex: 9999, top: pn, left: pn, right: pn, bottom: pn, pointerEvents: "none", ...a }, className: o, onMouseEnter: c.startPause, onMouseLeave: c.endPause }, l.map((u) => {
    let f = u.position || t, h = c.calculateOffset(u, { reverseOrder: e, gutter: r, defaultPosition: t }), p = Su(f, h);
    return de.createElement(wu, { id: u.id, key: u.id, onHeightUpdate: c.updateHeight, className: u.visible ? ju : "", style: p }, u.type === "custom" ? An(u.message, u) : s ? s(u) : de.createElement(vu, { toast: u, position: f }));
  }));
};
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _u = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Fs = (e) => {
  const t = _u(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Ea = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), Cu = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ou = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = Zr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: s = "",
    children: i,
    iconNode: a,
    ...o
  }, l) => Pe(
    "svg",
    {
      ref: l,
      ...Ou,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Ea("lucide", s),
      ...!i && !Cu(o) && { "aria-hidden": "true" },
      ...o
    },
    [
      ...a.map(([c, u]) => Pe(c, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (e, t) => {
  const n = Zr(
    ({ className: r, ...s }, i) => Pe(Eu, {
      ref: i,
      iconNode: t,
      className: Ea(
        `lucide-${Nu(Fs(e))}`,
        `lucide-${e}`,
        r
      ),
      ...s
    })
  );
  return n.displayName = Fs(e), n;
};
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], Tn = J("calendar", Lu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], $u = J("check", Ru);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Du = [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
], St = J("chevrons-up-down", Du);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Tu = J("circle-play", Au);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
], ls = J("circle-plus", Pu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iu = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", key: "1ssd4o" }]
], Mu = J("circle-stop", Iu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zu = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], La = J("clock", zu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
], Vu = J("cloud-upload", Fu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], Uu = J("cloud", qu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hu = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
], Bu = J("code-xml", Hu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Wu = J("copy", Ku);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
], Ra = J("file-up", Ju);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
], Yu = J("folder-down", Xu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
], Qu = J("folder-up", Gu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], $a = J("globe", Zu);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
], td = J("grip-vertical", ed);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], Da = J("hash", nd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
], Aa = J("heading", rd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], id = J("image", sd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ad = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
], Ta = J("key-round", ad);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], ld = J("list-ordered", od);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], ud = J("list", cd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
], cs = J("mail", dd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
      key: "18887p"
    }
  ],
  ["path", { d: "M14 13a2 2 0 0 0 2-2V9h-2", key: "zjz9hw" }],
  ["path", { d: "M8 13a2 2 0 0 0 2-2V9H8", key: "14e02x" }]
], hd = J("message-square-quote", fd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = [["path", { d: "M5 12h14", key: "1ays0h" }]], gd = J("minus", pd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
], yd = J("move", md);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
], Pa = J("phone", xd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = [
  ["path", { d: "M13 4v16", key: "8vvj80" }],
  ["path", { d: "M17 4v16", key: "7dpous" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
], Ia = J("pilcrow", bd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
], wd = J("redo-2", vd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], jd = J("settings", Sd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], Nd = J("square-check", kd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], Ma = J("star", _d);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], cn = J("trash-2", Cd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
], Ed = J("triangle-alert", Od);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], Yt = J("type", Ld);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
], $d = J("undo-2", Rd);
/**
 * @license lucide-react v0.537.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ad = J("x", Dd), Vs = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (c, u) => {
    const f = typeof c == "function" ? c(t) : c;
    if (!Object.is(f, t)) {
      const h = t;
      t = u ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((p) => p(t, h));
    }
  }, s = () => t, o = { setState: r, getState: s, getInitialState: () => l, subscribe: (c) => (n.add(c), () => n.delete(c)) }, l = t = e(r, s, o);
  return o;
}, za = ((e) => e ? Vs(e) : Vs), Td = (e) => e;
function Pd(e, t = Td) {
  const n = G.useSyncExternalStore(
    e.subscribe,
    G.useCallback(() => t(e.getState()), [e, t]),
    G.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return G.useDebugValue(n), n;
}
const qs = (e) => {
  const t = za(e), n = (r) => Pd(t, r);
  return Object.assign(n, t), n;
}, Id = ((e) => e ? qs(e) : qs);
var Us = (e, t, n) => (s, i) => ({
  pastStates: n?.pastStates || [],
  futureStates: n?.futureStates || [],
  undo: (a = 1) => {
    if (i().pastStates.length) {
      const o = n?.partialize?.(t()) || t(), l = i().pastStates.splice(-a, a), c = l.shift();
      e(c), s({
        pastStates: i().pastStates,
        futureStates: i().futureStates.concat(
          n?.diff?.(o, c) || o,
          l.reverse()
        )
      });
    }
  },
  redo: (a = 1) => {
    if (i().futureStates.length) {
      const o = n?.partialize?.(t()) || t(), l = i().futureStates.splice(-a, a), c = l.shift();
      e(c), s({
        pastStates: i().pastStates.concat(
          n?.diff?.(o, c) || o,
          l.reverse()
        ),
        futureStates: i().futureStates
      });
    }
  },
  clear: () => s({ pastStates: [], futureStates: [] }),
  isTracking: !0,
  pause: () => s({ isTracking: !1 }),
  resume: () => s({ isTracking: !0 }),
  setOnSave: (a) => s({ _onSave: a }),
  // Internal properties
  _onSave: n?.onSave,
  _handleSet: (a, o, l, c) => {
    n?.limit && i().pastStates.length >= n?.limit && i().pastStates.shift(), i()._onSave?.(a, l), s({
      pastStates: i().pastStates.concat(c || a),
      futureStates: []
    });
  }
}), Md = (e, t) => (r, s, i) => {
  i.temporal = za(
    t?.wrapTemporal?.(Us(r, s, t)) || Us(r, s, t)
  );
  const a = t?.handleSet?.(
    i.temporal.getState()._handleSet
  ) || i.temporal.getState()._handleSet, o = (c) => {
    if (!i.temporal.getState().isTracking) return;
    const u = t?.partialize?.(s()) || s(), f = t?.diff?.(c, u);
    // If the user has provided a diff function but nothing has been changed, deltaState will be null
    f === null || // If the user has provided an equality function, use it
    t?.equality?.(c, u) || a(
      c,
      void 0,
      u,
      f
    );
  }, l = i.setState;
  return i.setState = (...c) => {
    const u = t?.partialize?.(s()) || s();
    l(...c), o(u);
  }, e(
    // Modify the set function to call the userlandSet function
    (...c) => {
      const u = t?.partialize?.(s()) || s();
      r(...c), o(u);
    },
    s,
    i
  );
}, Fa = Symbol.for("immer-nothing"), Hs = Symbol.for("immer-draftable"), je = Symbol.for("immer-state"), zd = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function xe(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = zd[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var kt = Object.getPrototypeOf;
function Nt(e) {
  return !!e && !!e[je];
}
function st(e) {
  return e ? Va(e) || Array.isArray(e) || !!e[Hs] || !!e.constructor?.[Hs] || tr(e) || nr(e) : !1;
}
var Fd = Object.prototype.constructor.toString();
function Va(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = kt(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Fd;
}
function Pn(e, t) {
  er(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function er(e) {
  const t = e[je];
  return t ? t.type_ : Array.isArray(e) ? 1 : tr(e) ? 2 : nr(e) ? 3 : 0;
}
function zr(e, t) {
  return er(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function qa(e, t, n) {
  const r = er(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Vd(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function tr(e) {
  return e instanceof Map;
}
function nr(e) {
  return e instanceof Set;
}
function rt(e) {
  return e.copy_ || e.base_;
}
function Fr(e, t) {
  if (tr(e))
    return new Map(e);
  if (nr(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Va(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[je];
    let s = Reflect.ownKeys(r);
    for (let i = 0; i < s.length; i++) {
      const a = s[i], o = r[a];
      o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: o.enumerable,
        value: e[a]
      });
    }
    return Object.create(kt(e), r);
  } else {
    const r = kt(e);
    if (r !== null && n)
      return { ...e };
    const s = Object.create(r);
    return Object.assign(s, e);
  }
}
function us(e, t = !1) {
  return rr(e) || Nt(e) || !st(e) || (er(e) > 1 && (e.set = e.add = e.clear = e.delete = qd), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => us(r, !0))), e;
}
function qd() {
  xe(2);
}
function rr(e) {
  return Object.isFrozen(e);
}
var Ud = {};
function it(e) {
  const t = Ud[e];
  return t || xe(0, e), t;
}
var Gt;
function Ua() {
  return Gt;
}
function Hd(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Bs(e, t) {
  t && (it("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Vr(e) {
  qr(e), e.drafts_.forEach(Bd), e.drafts_ = null;
}
function qr(e) {
  e === Gt && (Gt = e.parent_);
}
function Ks(e) {
  return Gt = Hd(Gt, e);
}
function Bd(e) {
  const t = e[je];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ws(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[je].modified_ && (Vr(t), xe(4)), st(e) && (e = In(t, e), t.parent_ || Mn(t, e)), t.patches_ && it("Patches").generateReplacementPatches_(
    n[je].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = In(t, n, []), Vr(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Fa ? e : void 0;
}
function In(e, t, n) {
  if (rr(t))
    return t;
  const r = t[je];
  if (!r)
    return Pn(
      t,
      (s, i) => Js(e, r, t, s, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Mn(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let i = s, a = !1;
    r.type_ === 3 && (i = new Set(s), s.clear(), a = !0), Pn(
      i,
      (o, l) => Js(e, r, s, o, l, n, a)
    ), Mn(e, s, !1), n && e.patches_ && it("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Js(e, t, n, r, s, i, a) {
  if (process.env.NODE_ENV !== "production" && s === n && xe(5), Nt(s)) {
    const o = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !zr(t.assigned_, r) ? i.concat(r) : void 0, l = In(e, s, o);
    if (qa(n, r, l), Nt(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(s);
  if (st(s) && !rr(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    In(e, s), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Mn(e, s);
  }
}
function Mn(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && us(t, n);
}
function Kd(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ua(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let s = r, i = ds;
  n && (s = [r], i = Qt);
  const { revoke: a, proxy: o } = Proxy.revocable(s, i);
  return r.draft_ = o, r.revoke_ = a, o;
}
var ds = {
  get(e, t) {
    if (t === je)
      return e;
    const n = rt(e);
    if (!zr(n, t))
      return Wd(e, n, t);
    const r = n[t];
    return e.finalized_ || !st(r) ? r : r === br(e.base_, t) ? (vr(e), e.copy_[t] = Hr(r, e)) : r;
  },
  has(e, t) {
    return t in rt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(rt(e));
  },
  set(e, t, n) {
    const r = Ha(rt(e), t);
    if (r?.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const s = br(rt(e), t), i = s?.[je];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Vd(n, s) && (n !== void 0 || zr(e.base_, t)))
        return !0;
      vr(e), Ur(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return br(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, vr(e), Ur(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = rt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    xe(11);
  },
  getPrototypeOf(e) {
    return kt(e.base_);
  },
  setPrototypeOf() {
    xe(12);
  }
}, Qt = {};
Pn(ds, (e, t) => {
  Qt[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Qt.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && xe(13), Qt.set.call(this, e, t, void 0);
};
Qt.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && xe(14), ds.set.call(this, e[0], t, n, e[0]);
};
function br(e, t) {
  const n = e[je];
  return (n ? rt(n) : e)[t];
}
function Wd(e, t, n) {
  const r = Ha(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(e.draft_)
  ) : void 0;
}
function Ha(e, t) {
  if (!(t in e))
    return;
  let n = kt(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = kt(n);
  }
}
function Ur(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ur(e.parent_));
}
function vr(e) {
  e.copy_ || (e.copy_ = Fr(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Jd = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const a = this;
        return function(l = i, ...c) {
          return a.produce(l, (u) => n.call(this, u, ...c));
        };
      }
      typeof n != "function" && xe(6), r !== void 0 && typeof r != "function" && xe(7);
      let s;
      if (st(t)) {
        const i = Ks(this), a = Hr(t, void 0);
        let o = !0;
        try {
          s = n(a), o = !1;
        } finally {
          o ? Vr(i) : qr(i);
        }
        return Bs(i, r), Ws(s, i);
      } else if (!t || typeof t != "object") {
        if (s = n(t), s === void 0 && (s = t), s === Fa && (s = void 0), this.autoFreeze_ && us(s, !0), r) {
          const i = [], a = [];
          it("Patches").generateReplacementPatches_(t, s, i, a), r(i, a);
        }
        return s;
      } else
        xe(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...o) => this.produceWithPatches(a, (l) => t(l, ...o));
      let r, s;
      return [this.produce(t, n, (a, o) => {
        r = a, s = o;
      }), r, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    st(e) || xe(8), Nt(e) && (e = Xd(e));
    const t = Ks(this), n = Hr(e, void 0);
    return n[je].isManual_ = !0, qr(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[je];
    (!n || !n.isManual_) && xe(9);
    const { scope_: r } = n;
    return Bs(r, t), Ws(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const s = t[n];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = it("Patches").applyPatches_;
    return Nt(e) ? r(e, t) : this.produce(
      e,
      (s) => r(s, t)
    );
  }
};
function Hr(e, t) {
  const n = tr(e) ? it("MapSet").proxyMap_(e, t) : nr(e) ? it("MapSet").proxySet_(e, t) : Kd(e, t);
  return (t ? t.scope_ : Ua()).drafts_.push(n), n;
}
function Xd(e) {
  return Nt(e) || xe(10, e), Ba(e);
}
function Ba(e) {
  if (!st(e) || rr(e))
    return e;
  const t = e[je];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Fr(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Fr(e, !0);
  return Pn(n, (r, s) => {
    qa(n, r, Ba(s));
  }), t && (t.finalized_ = !1), n;
}
var ke = new Jd(), Te = ke.produce;
ke.produceWithPatches.bind(
  ke
);
ke.setAutoFreeze.bind(ke);
ke.setUseStrictShallowCopy.bind(ke);
ke.applyPatches.bind(ke);
ke.createDraft.bind(ke);
ke.finishDraft.bind(ke);
const z = (e) => typeof e == "string", Pt = () => {
  let e, t;
  const n = new Promise((r, s) => {
    e = r, t = s;
  });
  return n.resolve = e, n.reject = t, n;
}, Xs = (e) => e == null ? "" : "" + e, Yd = (e, t, n) => {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, Gd = /###/g, Ys = (e) => e && e.indexOf("###") > -1 ? e.replace(Gd, ".") : e, Gs = (e) => !e || z(e), Bt = (e, t, n) => {
  const r = z(t) ? t.split(".") : t;
  let s = 0;
  for (; s < r.length - 1; ) {
    if (Gs(e)) return {};
    const i = Ys(r[s]);
    !e[i] && n && (e[i] = new n()), Object.prototype.hasOwnProperty.call(e, i) ? e = e[i] : e = {}, ++s;
  }
  return Gs(e) ? {} : {
    obj: e,
    k: Ys(r[s])
  };
}, Qs = (e, t, n) => {
  const {
    obj: r,
    k: s
  } = Bt(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[s] = n;
    return;
  }
  let i = t[t.length - 1], a = t.slice(0, t.length - 1), o = Bt(e, a, Object);
  for (; o.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), o = Bt(e, a, Object), o?.obj && typeof o.obj[`${o.k}.${i}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${i}`] = n;
}, Qd = (e, t, n, r) => {
  const {
    obj: s,
    k: i
  } = Bt(e, t, Object);
  s[i] = s[i] || [], s[i].push(n);
}, zn = (e, t) => {
  const {
    obj: n,
    k: r
  } = Bt(e, t);
  if (n && Object.prototype.hasOwnProperty.call(n, r))
    return n[r];
}, Zd = (e, t, n) => {
  const r = zn(e, n);
  return r !== void 0 ? r : zn(t, n);
}, Ka = (e, t, n) => {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? z(e[r]) || e[r] instanceof String || z(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : Ka(e[r], t[r], n) : e[r] = t[r]);
  return e;
}, gt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var ef = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const tf = (e) => z(e) ? e.replace(/[&<>"'\/]/g, (t) => ef[t]) : e;
class nf {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const rf = [" ", ",", "?", "!", ";"], sf = new nf(20), af = (e, t, n) => {
  t = t || "", n = n || "";
  const r = rf.filter((a) => t.indexOf(a) < 0 && n.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const s = sf.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !s.test(e);
  if (!i) {
    const a = e.indexOf(n);
    a > 0 && !s.test(e.substring(0, a)) && (i = !0);
  }
  return i;
}, Br = (e, t, n = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const r = t.split(n);
  let s = e;
  for (let i = 0; i < r.length; ) {
    if (!s || typeof s != "object")
      return;
    let a, o = "";
    for (let l = i; l < r.length; ++l)
      if (l !== i && (o += n), o += r[l], a = s[o], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < r.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    s = a;
  }
  return s;
}, Zt = (e) => e?.replace("_", "-"), of = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console?.[e]?.apply?.(console, t);
  }
};
class Fn {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = t || of, this.options = n, this.debug = n.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, s) {
    return s && !this.debug ? null : (z(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Fn(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Fn(this.logger, t);
  }
}
var Me = new Fn();
class sr {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const s = this.observers[r].get(n) || 0;
      this.observers[r].set(n, s + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t, ...n) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([s, i]) => {
      for (let a = 0; a < i; a++)
        s(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([s, i]) => {
      for (let a = 0; a < i; a++)
        s.apply(s, [t, ...n]);
    });
  }
}
class Zs extends sr {
  constructor(t, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, s = {}) {
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, a = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    t.indexOf(".") > -1 ? o = t.split(".") : (o = [t, n], r && (Array.isArray(r) ? o.push(...r) : z(r) && i ? o.push(...r.split(i)) : o.push(r)));
    const l = zn(this.data, o);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = o[0], n = o[1], r = o.slice(2).join(".")), l || !a || !z(r) ? l : Br(this.data?.[t]?.[n], r, i);
  }
  addResource(t, n, r, s, i = {
    silent: !1
  }) {
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let o = [t, n];
    r && (o = o.concat(a ? r.split(a) : r)), t.indexOf(".") > -1 && (o = t.split("."), s = n, n = o[1]), this.addNamespaces(n), Qs(this.data, o, s), i.silent || this.emit("added", t, n, r, s);
  }
  addResources(t, n, r, s = {
    silent: !1
  }) {
    for (const i in r)
      (z(r[i]) || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    s.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, s, i, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let o = [t, n];
    t.indexOf(".") > -1 && (o = t.split("."), s = r, r = n, n = o[1]), this.addNamespaces(n);
    let l = zn(this.data, o) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), s ? Ka(l, r, i) : l = {
      ...l,
      ...r
    }, Qs(this.data, o, l), a.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((s) => n[s] && Object.keys(n[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Wa = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, s) {
    return e.forEach((i) => {
      t = this.processors[i]?.process(t, n, r, s) ?? t;
    }), t;
  }
};
const Ja = Symbol("i18next/PATH_KEY");
function lf() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let n;
  return t.get = (r, s) => (n?.revoke?.(), s === Ja ? e : (e.push(s), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function Kr(e, t) {
  const {
    [Ja]: n
  } = e(lf());
  return n.join(t?.keySeparator ?? ".");
}
const ei = {}, ti = (e) => !z(e) && typeof e != "boolean" && typeof e != "number";
class Vn extends sr {
  constructor(t, n = {}) {
    super(), Yd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Me.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = {
    interpolation: {}
  }) {
    const r = {
      ...n
    };
    return t == null ? !1 : this.resolve(t, r)?.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const a = r && t.indexOf(r) > -1, o = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !af(t, r, s);
    if (a && !o) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: z(i) ? [i] : i
        };
      const c = t.split(r);
      (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(s);
    }
    return {
      key: t,
      namespaces: z(i) ? [i] : i
    };
  }
  translate(t, n, r) {
    let s = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof s == "object" && (s = {
      ...s
    }), s || (s = {}), t == null) return "";
    typeof t == "function" && (t = Kr(t, {
      ...this.options,
      ...s
    })), Array.isArray(t) || (t = [String(t)]);
    const i = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, a = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, {
      key: o,
      namespaces: l
    } = this.extractFromKey(t[t.length - 1], s), c = l[l.length - 1];
    let u = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const f = s.lng || this.language, h = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (f?.toLowerCase() === "cimode")
      return h ? i ? {
        res: `${c}${u}${o}`,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(s)
      } : `${c}${u}${o}` : i ? {
        res: o,
        usedKey: o,
        exactUsedKey: o,
        usedLng: f,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(s)
      } : o;
    const p = this.resolve(t, s);
    let g = p?.res;
    const y = p?.usedKey || o, m = p?.exactUsedKey || o, v = ["[object Number]", "[object Function]", "[object RegExp]"], w = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject, k = s.count !== void 0 && !z(s.count), O = Vn.hasDefaultValue(s), N = k ? this.pluralResolver.getSuffix(f, s.count, s) : "", j = s.ordinal && k ? this.pluralResolver.getSuffix(f, s.count, {
      ordinal: !1
    }) : "", L = k && !s.ordinal && s.count === 0, T = L && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${N}`] || s[`defaultValue${j}`] || s.defaultValue;
    let $ = g;
    S && !g && O && ($ = T);
    const E = ti($), I = Object.prototype.toString.apply($);
    if (S && $ && E && v.indexOf(I) < 0 && !(z(w) && Array.isArray($))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const K = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, $, {
          ...s,
          ns: l
        }) : `key '${o} (${this.language})' returned an object instead of string.`;
        return i ? (p.res = K, p.usedParams = this.getUsedParamsDetails(s), p) : K;
      }
      if (a) {
        const K = Array.isArray($), H = K ? [] : {}, ae = K ? m : y;
        for (const A in $)
          if (Object.prototype.hasOwnProperty.call($, A)) {
            const B = `${ae}${a}${A}`;
            O && !g ? H[A] = this.translate(B, {
              ...s,
              defaultValue: ti(T) ? T[A] : void 0,
              joinArrays: !1,
              ns: l
            }) : H[A] = this.translate(B, {
              ...s,
              joinArrays: !1,
              ns: l
            }), H[A] === B && (H[A] = $[A]);
          }
        g = H;
      }
    } else if (S && z(w) && Array.isArray(g))
      g = g.join(w), g && (g = this.extendTranslation(g, t, s, r));
    else {
      let K = !1, H = !1;
      !this.isValidLookup(g) && O && (K = !0, g = T), this.isValidLookup(g) || (H = !0, g = o);
      const A = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && H ? void 0 : g, B = O && T !== g && this.options.updateMissing;
      if (H || K || B) {
        if (this.logger.log(B ? "updateKey" : "missingKey", f, c, o, B ? T : g), a) {
          const C = this.resolve(o, {
            ...s,
            keySeparator: !1
          });
          C && C.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ne = [];
        const re = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && re && re[0])
          for (let C = 0; C < re.length; C++)
            ne.push(re[C]);
        else this.options.saveMissingTo === "all" ? ne = this.languageUtils.toResolveHierarchy(s.lng || this.language) : ne.push(s.lng || this.language);
        const x = (C, _, R) => {
          const D = O && R !== g ? R : A;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(C, c, _, D, B, s) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(C, c, _, D, B, s), this.emit("missingKey", C, c, _, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && k ? ne.forEach((C) => {
          const _ = this.pluralResolver.getSuffixes(C, s);
          L && s[`defaultValue${this.options.pluralSeparator}zero`] && _.indexOf(`${this.options.pluralSeparator}zero`) < 0 && _.push(`${this.options.pluralSeparator}zero`), _.forEach((R) => {
            x([C], o + R, s[`defaultValue${R}`] || T);
          });
        }) : x(ne, o, T));
      }
      g = this.extendTranslation(g, t, s, p, r), H && g === o && this.options.appendNamespaceToMissingKey && (g = `${c}${u}${o}`), (H || K) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${u}${o}` : o, K ? g : void 0, s));
    }
    return i ? (p.res = g, p.usedParams = this.getUsedParamsDetails(s), p) : g;
  }
  extendTranslation(t, n, r, s, i) {
    if (this.i18nFormat?.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const l = z(t) && (r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let u = r.replace && !z(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (u = {
        ...this.options.interpolation.defaultVariables,
        ...u
      }), t = this.interpolator.interpolate(t, u, r.lng || this.language || s.usedLng, r), l) {
        const f = t.match(this.interpolator.nestingRegexp), h = f && f.length;
        c < h && (r.nest = !1);
      }
      !r.lng && s && s.res && (r.lng = this.language || s.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, (...f) => i?.[0] === f[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${n[0]}`), null) : this.translate(...f, n), r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, o = z(a) ? [a] : a;
    return t != null && o?.length && r.applyPostProcessor !== !1 && (t = Wa.handle(o, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t, n = {}) {
    let r, s, i, a, o;
    return z(t) && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      s = u;
      let f = c.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const h = n.count !== void 0 && !z(n.count), p = h && !n.ordinal && n.count === 0, g = n.context !== void 0 && (z(n.context) || typeof n.context == "number") && n.context !== "", y = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((m) => {
        this.isValidLookup(r) || (o = m, !ei[`${y[0]}-${m}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(o) && (ei[`${y[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((v) => {
          if (this.isValidLookup(r)) return;
          a = v;
          const w = [u];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, u, v, m, n);
          else {
            let k;
            h && (k = this.pluralResolver.getSuffix(v, n.count, n));
            const O = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (n.ordinal && k.indexOf(N) === 0 && w.push(u + k.replace(N, this.options.pluralSeparator)), w.push(u + k), p && w.push(u + O)), g) {
              const j = `${u}${this.options.contextSeparator || "_"}${n.context}`;
              w.push(j), h && (n.ordinal && k.indexOf(N) === 0 && w.push(j + k.replace(N, this.options.pluralSeparator)), w.push(j + k), p && w.push(j + O));
            }
          }
          let S;
          for (; S = w.pop(); )
            this.isValidLookup(r) || (i = S, r = this.getResource(v, m, S, n));
        }));
      });
    }), {
      res: r,
      usedKey: s,
      exactUsedKey: i,
      usedLng: a,
      usedNS: o
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r, s = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(t, n, r, s) : this.resourceStore.getResource(t, n, r, s);
  }
  getUsedParamsDetails(t = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && !z(t.replace);
    let s = r ? t.replace : t;
    if (r && typeof t.count < "u" && (s.count = t.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !r) {
      s = {
        ...s
      };
      for (const i of n)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
class ni {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Me.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Zt(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Zt(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (z(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const s = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const s = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(s)) return n = s;
      const i = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      n = this.options.supportedLngs.find((a) => {
        if (a === i) return a;
        if (!(a.indexOf("-") < 0 && i.indexOf("-") < 0) && (a.indexOf("-") > 0 && i.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === i || a.indexOf(i) === 0 && i.length > 1))
          return a;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), z(t) && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], t), s = [], i = (a) => {
      a && (this.isSupportedCode(a) ? s.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return z(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : z(t) && i(this.formatLanguageCode(t)), r.forEach((a) => {
      s.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), s;
  }
}
const ri = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, si = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class cf {
  constructor(t, n = {}) {
    this.languageUtils = t, this.options = n, this.logger = Me.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = Zt(t === "dev" ? "en" : t), s = n.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: r,
      type: s
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let a;
    try {
      a = new Intl.PluralRules(r, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), si;
      if (!t.match(/-|_/)) return si;
      const l = this.languageUtils.getLanguagePartFromCode(t);
      a = this.getRule(l, n);
    }
    return this.pluralRulesCache[i] = a, a;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((s) => `${n}${s}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r ? r.resolvedOptions().pluralCategories.sort((s, i) => ri[s] - ri[i]).map((s) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(t, n, r = {}) {
    const s = this.getRule(t, r);
    return s ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", n, r));
  }
}
const ii = (e, t, n, r = ".", s = !0) => {
  let i = Zd(e, t, n);
  return !i && s && z(n) && (i = Br(e, n, r), i === void 0 && (i = Br(t, n, r))), i;
}, wr = (e) => e.replace(/\$/g, "$$$$");
class uf {
  constructor(t = {}) {
    this.logger = Me.create("interpolator"), this.options = t, this.format = t?.interpolation?.format || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: f,
      nestingPrefix: h,
      nestingPrefixEscaped: p,
      nestingSuffix: g,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: m,
      maxReplaces: v,
      alwaysFormat: w
    } = t.interpolation;
    this.escape = n !== void 0 ? n : tf, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? gt(i) : a || "{{", this.suffix = o ? gt(o) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? gt(h) : p || gt("$t("), this.nestingSuffix = g ? gt(g) : y || gt(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = w !== void 0 ? w : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n?.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, s) {
    let i, a, o;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const v = ii(n, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, r, {
          ...s,
          ...n,
          interpolationkey: p
        }) : v;
      }
      const g = p.split(this.formatSeparator), y = g.shift().trim(), m = g.join(this.formatSeparator).trim();
      return this.format(ii(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, {
        ...s,
        ...n,
        interpolationkey: y
      });
    };
    this.resetRegExp();
    const u = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, f = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => wr(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? wr(this.escape(p)) : wr(p)
    }].forEach((p) => {
      for (o = 0; i = p.regex.exec(t); ) {
        const g = i[1].trim();
        if (a = c(g), a === void 0)
          if (typeof u == "function") {
            const m = u(t, i, s);
            a = z(m) ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, g))
            a = "";
          else if (f) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), a = "";
        else !z(a) && !this.useRawValueToEscape && (a = Xs(a));
        const y = p.safeValue(a);
        if (t = t.replace(i[0], y), f ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n, r = {}) {
    let s, i, a;
    const o = (l, c) => {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const f = l.split(new RegExp(`${u}[ ]*{`));
      let h = `{${f[1]}`;
      l = f[0], h = this.interpolate(h, a);
      const p = h.match(/'/g), g = h.match(/"/g);
      ((p?.length ?? 0) % 2 === 0 && !g || g.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        a = JSON.parse(h), c && (a = {
          ...c,
          ...a
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${u}${h}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l;
    };
    for (; s = this.nestingRegexp.exec(t); ) {
      let l = [];
      a = {
        ...r
      }, a = a.replace && !z(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const c = /{.*}/.test(s[1]) ? s[1].lastIndexOf("}") + 1 : s[1].indexOf(this.formatSeparator);
      if (c !== -1 && (l = s[1].slice(c).split(this.formatSeparator).map((u) => u.trim()).filter(Boolean), s[1] = s[1].slice(0, c)), i = n(o.call(this, s[1].trim(), a), a), i && s[0] === t && !z(i)) return i;
      z(i) || (i = Xs(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`), i = ""), l.length && (i = l.reduce((u, f) => this.format(u, f, r.lng, {
        ...r,
        interpolationkey: s[1].trim()
      }), i.trim())), t = t.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const df = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const s = r[1].substring(0, r[1].length - 1);
    t === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : t === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach((a) => {
      if (a) {
        const [o, ...l] = a.split(":"), c = l.join(":").trim().replace(/^'+|'+$/g, ""), u = o.trim();
        n[u] || (n[u] = c), c === "false" && (n[u] = !1), c === "true" && (n[u] = !0), isNaN(c) || (n[u] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, ai = (e) => {
  const t = {};
  return (n, r, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const a = r + JSON.stringify(i);
    let o = t[a];
    return o || (o = e(Zt(r), s), t[a] = o), o(n);
  };
}, ff = (e) => (t, n, r) => e(Zt(n), r)(t);
class hf {
  constructor(t = {}) {
    this.logger = Me.create("formatter"), this.options = t, this.init(t);
  }
  init(t, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? ai : ff;
    this.formats = {
      number: r((s, i) => {
        const a = new Intl.NumberFormat(s, {
          ...i
        });
        return (o) => a.format(o);
      }),
      currency: r((s, i) => {
        const a = new Intl.NumberFormat(s, {
          ...i,
          style: "currency"
        });
        return (o) => a.format(o);
      }),
      datetime: r((s, i) => {
        const a = new Intl.DateTimeFormat(s, {
          ...i
        });
        return (o) => a.format(o);
      }),
      relativetime: r((s, i) => {
        const a = new Intl.RelativeTimeFormat(s, {
          ...i
        });
        return (o) => a.format(o, i.range || "day");
      }),
      list: r((s, i) => {
        const a = new Intl.ListFormat(s, {
          ...i
        });
        return (o) => a.format(o);
      })
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ai(n);
  }
  format(t, n, r, s = {}) {
    const i = n.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((o) => o.indexOf(")") > -1)) {
      const o = i.findIndex((l) => l.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, o)].join(this.formatSeparator);
    }
    return i.reduce((o, l) => {
      const {
        formatName: c,
        formatOptions: u
      } = df(l);
      if (this.formats[c]) {
        let f = o;
        try {
          const h = s?.formatParams?.[s.interpolationkey] || {}, p = h.locale || h.lng || s.locale || s.lng || r;
          f = this.formats[c](o, p, {
            ...u,
            ...s,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return f;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return o;
    }, t);
  }
}
const pf = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class gf extends sr {
  constructor(t, n, r, s = {}) {
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = s, this.logger = Me.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(r, s.backend, s);
  }
  queueLoad(t, n, r, s) {
    const i = {}, a = {}, o = {}, l = {};
    return t.forEach((c) => {
      let u = !0;
      n.forEach((f) => {
        const h = `${c}|${f}`;
        !r.reload && this.store.hasResourceBundle(c, f) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? a[h] === void 0 && (a[h] = !0) : (this.state[h] = 1, u = !1, a[h] === void 0 && (a[h] = !0), i[h] === void 0 && (i[h] = !0), l[f] === void 0 && (l[f] = !0)));
      }), u || (o[c] = !0);
    }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const s = t.split("|"), i = s[0], a = s[1];
    n && this.emit("failedLoading", i, a, n), !n && r && this.store.addResourceBundle(i, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const o = {};
    this.queue.forEach((l) => {
      Qd(l.loaded, [i], a), pf(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        o[c] || (o[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((f) => {
          o[c][f] === void 0 && (o[c][f] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r, s = 0, i = this.retryTimeout, a) {
    if (!t.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: s,
        wait: i,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const o = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (c && u && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, s + 1, i * 2, a);
        }, i);
        return;
      }
      a(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, n);
        c && typeof c.then == "function" ? c.then((u) => o(null, u)).catch(o) : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return l(t, n, o);
  }
  prepareLoading(t, n, r = {}, s) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    z(t) && (t = this.languageUtils.toResolveHierarchy(t)), z(n) && (n = [n]);
    const i = this.queueLoad(t, n, r, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"), s = r[0], i = r[1];
    this.read(s, i, "read", void 0, void 0, (a, o) => {
      a && this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`, a), !a && o && this.logger.log(`${n}loaded namespace ${i} for language ${s}`, o), this.loaded(t, a, o);
    });
  }
  saveMissing(t, n, r, s, i, a = {}, o = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend?.create) {
        const l = {
          ...a,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(t, n, r, s, l) : u = c(t, n, r, s), u && typeof u.then == "function" ? u.then((f) => o(null, f)).catch(o) : o(null, u);
          } catch (u) {
            o(u);
          }
        else
          c(t, n, r, s, o, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, s);
    }
  }
}
const oi = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), z(e[1]) && (t.defaultValue = e[1]), z(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((r) => {
        t[r] = n[r];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), li = (e) => (z(e.ns) && (e.ns = [e.ns]), z(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), z(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), gn = () => {
}, mf = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class en extends sr {
  constructor(t = {}, n) {
    if (super(), this.options = li(t), this.services = {}, this.logger = Me, this.modules = {
      external: []
    }, mf(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (z(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = oi();
    this.options = {
      ...r,
      ...this.options,
      ...li(t)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const s = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? Me.init(s(this.modules.logger), this.options) : Me.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = hf;
      const u = new ni(this.options);
      this.store = new Zs(this.options.resources, this.options);
      const f = this.services;
      f.logger = Me, f.resourceStore = this.store, f.languageUtils = u, f.pluralResolver = new cf(u, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (f.formatter = s(c), f.formatter.init && f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new uf(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new gf(s(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", (p, ...g) => {
        this.emit(p, ...g);
      }), this.modules.languageDetector && (f.languageDetector = s(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = s(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Vn(this.services, this.options), this.translator.on("*", (p, ...g) => {
        this.emit(p, ...g);
      }), this.modules.external.forEach((p) => {
        p.init && p.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = gn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...u) => this.store[c](...u);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...u) => (this.store[c](...u), this);
    });
    const o = Pt(), l = () => {
      const c = (u, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), o.resolve(f), n(u, f);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? l() : setTimeout(l, 0), o;
  }
  loadResources(t, n = gn) {
    let r = n;
    const s = z(t) ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [], a = (o) => {
        if (!o || o === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(o).forEach((c) => {
          c !== "cimode" && i.indexOf(c) < 0 && i.push(c);
        });
      };
      s ? a(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((l) => a(l)), this.options.preload?.forEach?.((o) => a(o)), this.services.backendConnector.load(i, this.options.ns, (o) => {
        !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(o);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const s = Pt();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = gn), this.services.backendConnector.reload(t, n, (i) => {
      s.resolve(), r(i);
    }), s;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Wa.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = Pt();
    this.emit("languageChanging", t);
    const s = (o) => {
      this.language = o, this.languages = this.services.languageUtils.toResolveHierarchy(o), this.resolvedLanguage = void 0, this.setResolvedLanguage(o);
    }, i = (o, l) => {
      l ? this.isLanguageChangingTo === t && (s(l), this.translator.changeLanguage(l), this.isLanguageChangingTo = void 0, this.emit("languageChanged", l), this.logger.log("languageChanged", l)) : this.isLanguageChangingTo = void 0, r.resolve((...c) => this.t(...c)), n && n(o, (...c) => this.t(...c));
    }, a = (o) => {
      !t && !o && this.services.languageDetector && (o = []);
      const l = z(o) ? o : o && o[0], c = this.store.hasLanguageSomeTranslations(l) ? l : this.services.languageUtils.getBestMatchFromCodes(z(o) ? [o] : o);
      c && (this.language || s(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector?.cacheUserLanguage?.(c)), this.loadResources(c, (u) => {
        i(u, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), r;
  }
  getFixedT(t, n, r) {
    const s = (i, a, ...o) => {
      let l;
      typeof a != "object" ? l = this.options.overloadTranslationOptionHandler([i, a].concat(o)) : l = {
        ...a
      }, l.lng = l.lng || s.lng, l.lngs = l.lngs || s.lngs, l.ns = l.ns || s.ns, l.keyPrefix !== "" && (l.keyPrefix = l.keyPrefix || r || s.keyPrefix);
      const c = this.options.keySeparator || ".";
      let u;
      return l.keyPrefix && Array.isArray(i) ? u = i.map((f) => (typeof f == "function" && (f = Kr(f, {
        ...this.options,
        ...a
      })), `${l.keyPrefix}${c}${f}`)) : (typeof i == "function" && (i = Kr(i, {
        ...this.options,
        ...a
      })), u = l.keyPrefix ? `${l.keyPrefix}${c}${i}` : i), this.t(u, l);
    };
    return z(t) ? s.lng = t : s.lngs = t, s.ns = n, s.keyPrefix = r, s;
  }
  t(...t) {
    return this.translator?.translate(...t);
  }
  exists(...t) {
    return this.translator?.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const a = (o, l) => {
      const c = this.services.backendConnector.state[`${o}|${l}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const o = n.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, t) && (!s || a(i, t)));
  }
  loadNamespaces(t, n) {
    const r = Pt();
    return this.options.ns ? (z(t) && (t = [t]), t.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Pt();
    z(t) && (t = [t]);
    const s = this.options.preload || [], i = t.filter((a) => s.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((a) => {
      r.resolve(), n && n(a);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const s = new Intl.Locale(t);
      if (s && s.getTextInfo) {
        const i = s.getTextInfo();
        if (i && i.direction) return i.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services?.languageUtils || new ni(oi());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, n) {
    return new en(t, n);
  }
  cloneInstance(t = {}, n = gn) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const s = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new en(s);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((o) => {
      i[o] = this[o];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r) {
      const o = Object.keys(this.store.data).reduce((l, c) => (l[c] = {
        ...this.store.data[c]
      }, l[c] = Object.keys(l[c]).reduce((u, f) => (u[f] = {
        ...l[c][f]
      }, u), l[c]), l), {});
      i.store = new Zs(o, s), i.services.resourceStore = i.store;
    }
    return i.translator = new Vn(i.services, s), i.translator.on("*", (o, ...l) => {
      i.emit(o, ...l);
    }), i.init(s, n), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const P = en.createInstance();
P.createInstance = en.createInstance;
P.createInstance;
P.dir;
P.init;
P.loadResources;
P.reloadResources;
P.use;
P.changeLanguage;
P.getFixedT;
P.t;
P.exists;
P.setDefaultNamespace;
P.hasLoadedNamespace;
P.loadNamespaces;
P.loadLanguages;
const {
  slice: yf,
  forEach: xf
} = [];
function bf(e) {
  return xf.call(yf.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
function vf(e) {
  return typeof e != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((n) => n.test(e));
}
const ci = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, wf = function(e, t) {
  const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, s = encodeURIComponent(t);
  let i = `${e}=${s}`;
  if (r.maxAge > 0) {
    const a = r.maxAge - 0;
    if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
    i += `; Max-Age=${Math.floor(a)}`;
  }
  if (r.domain) {
    if (!ci.test(r.domain))
      throw new TypeError("option domain is invalid");
    i += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!ci.test(r.path))
      throw new TypeError("option path is invalid");
    i += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    i += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return r.partitioned && (i += "; Partitioned"), i;
}, ui = {
  create(e, t, n, r) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (s.expires = /* @__PURE__ */ new Date(), s.expires.setTime(s.expires.getTime() + n * 60 * 1e3)), r && (s.domain = r), document.cookie = wf(e, t, s);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let s = n[r];
      for (; s.charAt(0) === " "; ) s = s.substring(1, s.length);
      if (s.indexOf(t) === 0) return s.substring(t.length, s.length);
    }
    return null;
  },
  remove(e, t) {
    this.create(e, "", -1, t);
  }
};
var Sf = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return ui.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: s,
      cookieOptions: i
    } = t;
    n && typeof document < "u" && ui.create(n, e, r, s, i);
  }
}, jf = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: r
      } = window.location;
      !window.location.search && window.location.hash?.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      const i = r.substring(1).split("&");
      for (let a = 0; a < i.length; a++) {
        const o = i[a].indexOf("=");
        o > 0 && i[a].substring(0, o) === t && (n = i[a].substring(o + 1));
      }
    }
    return n;
  }
}, kf = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(e) {
    let {
      lookupHash: t,
      lookupFromHashIndex: n
    } = e, r;
    if (typeof window < "u") {
      const {
        hash: s
      } = window.location;
      if (s && s.length > 2) {
        const i = s.substring(1);
        if (t) {
          const a = i.split("&");
          for (let o = 0; o < a.length; o++) {
            const l = a[o].indexOf("=");
            l > 0 && a[o].substring(0, l) === t && (r = a[o].substring(l + 1));
          }
        }
        if (r) return r;
        if (!r && n > -1) {
          const a = s.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(a) ? a[typeof n == "number" ? n : 0]?.replace("/", "") : void 0;
        }
      }
    }
    return r;
  }
};
let mt = null;
const di = () => {
  if (mt !== null) return mt;
  try {
    if (mt = typeof window < "u" && window.localStorage !== null, !mt)
      return !1;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    mt = !1;
  }
  return mt;
};
var Nf = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && di())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && di() && window.localStorage.setItem(n, e);
  }
};
let yt = null;
const fi = () => {
  if (yt !== null) return yt;
  try {
    if (yt = typeof window < "u" && window.sessionStorage !== null, !yt)
      return !1;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    yt = !1;
  }
  return yt;
};
var _f = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && fi())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && fi() && window.sessionStorage.setItem(n, e);
  }
}, Cf = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: s
      } = navigator;
      if (n)
        for (let i = 0; i < n.length; i++)
          t.push(n[i]);
      r && t.push(r), s && t.push(s);
    }
    return t.length > 0 ? t : void 0;
  }
}, Of = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Ef = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u") return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? n[typeof t == "number" ? t : 0]?.replace("/", "") : void 0;
  }
}, Lf = {
  name: "subdomain",
  lookup(e) {
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[n];
  }
};
let Xa = !1;
try {
  document.cookie, Xa = !0;
} catch {
}
const Ya = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Xa || Ya.splice(1, 1);
const Rf = () => ({
  order: Ya,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (e) => e
});
class Ga {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t, this.options = bf(n, this.options || {}, Rf()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Sf), this.addDetector(jf), this.addDetector(Nf), this.addDetector(_f), this.addDetector(Cf), this.addDetector(Of), this.addDetector(Ef), this.addDetector(Lf), this.addDetector(kf);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let s = this.detectors[r].lookup(this.options);
        s && typeof s == "string" && (s = [s]), s && (n = n.concat(s));
      }
    }), n = n.filter((r) => r != null && !vf(r)).map((r) => this.options.convertDetectedLanguage(r)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
Ga.type = "languageDetector";
function Wr(e) {
  "@babel/helpers - typeof";
  return Wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wr(e);
}
function Qa() {
  return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : Wr(XMLHttpRequest)) === "object";
}
function $f(e) {
  return !!e && typeof e.then == "function";
}
function Df(e) {
  return $f(e) ? e : Promise.resolve(e);
}
function hi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hi(Object(n), !0).forEach(function(r) {
      Af(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : hi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Af(e, t, n) {
  return (t = Tf(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Tf(e) {
  var t = Pf(e, "string");
  return at(t) == "symbol" ? t : t + "";
}
function Pf(e, t) {
  if (at(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (at(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function at(e) {
  "@babel/helpers - typeof";
  return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, at(e);
}
var tt = typeof fetch == "function" ? fetch : void 0;
typeof global < "u" && global.fetch ? tt = global.fetch : typeof window < "u" && window.fetch && (tt = window.fetch);
var tn;
Qa() && (typeof global < "u" && global.XMLHttpRequest ? tn = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (tn = window.XMLHttpRequest));
var qn;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? qn = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (qn = window.ActiveXObject));
typeof tt != "function" && (tt = void 0);
if (!tt && !tn && !qn)
  try {
    import("./browser-ponyfill-spaDHz1N.js").then((e) => e.b).then(function(e) {
      tt = e.default;
    }).catch(function() {
    });
  } catch {
  }
var Jr = function(t, n) {
  if (n && at(n) === "object") {
    var r = "";
    for (var s in n)
      r += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(n[s]);
    if (!r) return t;
    t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1);
  }
  return t;
}, gi = function(t, n, r, s) {
  var i = function(l) {
    if (!l.ok) return r(l.statusText || "Error", {
      status: l.status
    });
    l.text().then(function(c) {
      r(null, {
        status: l.status,
        data: c
      });
    }).catch(r);
  };
  if (s) {
    var a = s(t, n);
    if (a instanceof Promise) {
      a.then(i).catch(r);
      return;
    }
  }
  typeof fetch == "function" ? fetch(t, n).then(i).catch(r) : tt(t, n).then(i).catch(r);
}, mi = !1, If = function(t, n, r, s) {
  t.queryStringParams && (n = Jr(n, t.queryStringParams));
  var i = pi({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
  typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (i["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (i["Content-Type"] = "application/json");
  var a = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions, o = pi({
    method: r ? "POST" : "GET",
    body: r ? t.stringify(r) : void 0,
    headers: i
  }, mi ? {} : a), l = typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
  try {
    gi(n, o, s, l);
  } catch (c) {
    if (!a || Object.keys(a).length === 0 || !c.message || c.message.indexOf("not implemented") < 0)
      return s(c);
    try {
      Object.keys(a).forEach(function(u) {
        delete o[u];
      }), gi(n, o, s, l), mi = !0;
    } catch (u) {
      s(u);
    }
  }
}, Mf = function(t, n, r, s) {
  r && at(r) === "object" && (r = Jr("", r).slice(1)), t.queryStringParams && (n = Jr(n, t.queryStringParams));
  try {
    var i = tn ? new tn() : new qn("MSXML2.XMLHTTP.3.0");
    i.open(r ? "POST" : "GET", n, 1), t.crossDomain || i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.withCredentials = !!t.withCredentials, r && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.overrideMimeType && i.overrideMimeType("application/json");
    var a = t.customHeaders;
    if (a = typeof a == "function" ? a() : a, a)
      for (var o in a)
        i.setRequestHeader(o, a[o]);
    i.onreadystatechange = function() {
      i.readyState > 3 && s(i.status >= 400 ? i.statusText : null, {
        status: i.status,
        data: i.responseText
      });
    }, i.send(r);
  } catch (l) {
    console && console.log(l);
  }
}, zf = function(t, n, r, s) {
  if (typeof r == "function" && (s = r, r = void 0), s = s || function() {
  }, tt && n.indexOf("file:") !== 0)
    return If(t, n, r, s);
  if (Qa() || typeof ActiveXObject == "function")
    return Mf(t, n, r, s);
  s(new Error("No fetch and no xhr implementation found!"));
};
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function yi(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yi(Object(n), !0).forEach(function(r) {
      Za(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yi(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ff(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Vf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, eo(r.key), r);
  }
}
function qf(e, t, n) {
  return t && Vf(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Za(e, t, n) {
  return (t = eo(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eo(e) {
  var t = Uf(e, "string");
  return _t(t) == "symbol" ? t : t + "";
}
function Uf(e, t) {
  if (_t(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (_t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var Hf = function() {
  return {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    addPath: "/locales/add/{{lng}}/{{ns}}",
    parse: function(n) {
      return JSON.parse(n);
    },
    stringify: JSON.stringify,
    parsePayload: function(n, r, s) {
      return Za({}, r, s || "");
    },
    parseLoadPayload: function(n, r) {
    },
    request: zf,
    reloadInterval: typeof window < "u" ? !1 : 3600 * 1e3,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: !1,
    withCredentials: !1,
    overrideMimeType: !1,
    requestOptions: {
      mode: "cors",
      credentials: "same-origin",
      cache: "default"
    }
  };
}, to = (function() {
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    Ff(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r);
  }
  return qf(e, [{
    key: "init",
    value: function(n) {
      var r = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (this.services = n, this.options = Sr(Sr(Sr({}, Hf()), this.options || {}), s), this.allOptions = i, this.services && this.options.reloadInterval) {
        var a = setInterval(function() {
          return r.reload();
        }, this.options.reloadInterval);
        _t(a) === "object" && typeof a.unref == "function" && a.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function(n, r, s) {
      this._readAny(n, n, r, r, s);
    }
  }, {
    key: "read",
    value: function(n, r, s) {
      this._readAny([n], n, [r], r, s);
    }
  }, {
    key: "_readAny",
    value: function(n, r, s, i, a) {
      var o = this, l = this.options.loadPath;
      typeof this.options.loadPath == "function" && (l = this.options.loadPath(n, s)), l = Df(l), l.then(function(c) {
        if (!c) return a(null, {});
        var u = o.services.interpolator.interpolate(c, {
          lng: n.join("+"),
          ns: s.join("+")
        });
        o.loadUrl(u, a, r, i);
      });
    }
  }, {
    key: "loadUrl",
    value: function(n, r, s, i) {
      var a = this, o = typeof s == "string" ? [s] : s, l = typeof i == "string" ? [i] : i, c = this.options.parseLoadPayload(o, l);
      this.options.request(this.options, n, c, function(u, f) {
        if (f && (f.status >= 500 && f.status < 600 || !f.status)) return r("failed loading " + n + "; status code: " + f.status, !0);
        if (f && f.status >= 400 && f.status < 500) return r("failed loading " + n + "; status code: " + f.status, !1);
        if (!f && u && u.message) {
          var h = u.message.toLowerCase(), p = ["failed", "fetch", "network", "load"].find(function(m) {
            return h.indexOf(m) > -1;
          });
          if (p)
            return r("failed loading " + n + ": " + u.message, !0);
        }
        if (u) return r(u, !1);
        var g, y;
        try {
          typeof f.data == "string" ? g = a.options.parse(f.data, s, i) : g = f.data;
        } catch {
          y = "failed parsing " + n + " to json";
        }
        if (y) return r(y, !1);
        r(null, g);
      });
    }
  }, {
    key: "create",
    value: function(n, r, s, i, a) {
      var o = this;
      if (this.options.addPath) {
        typeof n == "string" && (n = [n]);
        var l = this.options.parsePayload(r, s, i), c = 0, u = [], f = [];
        n.forEach(function(h) {
          var p = o.options.addPath;
          typeof o.options.addPath == "function" && (p = o.options.addPath(h, r));
          var g = o.services.interpolator.interpolate(p, {
            lng: h,
            ns: r
          });
          o.options.request(o.options, g, l, function(y, m) {
            c += 1, u.push(y), f.push(m), c === n.length && typeof a == "function" && a(u, f);
          });
        });
      }
    }
  }, {
    key: "reload",
    value: function() {
      var n = this, r = this.services, s = r.backendConnector, i = r.languageUtils, a = r.logger, o = s.language;
      if (!(o && o.toLowerCase() === "cimode")) {
        var l = [], c = function(f) {
          var h = i.toResolveHierarchy(f);
          h.forEach(function(p) {
            l.indexOf(p) < 0 && l.push(p);
          });
        };
        c(o), this.allOptions.preload && this.allOptions.preload.forEach(function(u) {
          return c(u);
        }), l.forEach(function(u) {
          n.allOptions.ns.forEach(function(f) {
            s.read(u, f, "read", null, null, function(h, p) {
              h && a.warn("loading namespace ".concat(f, " for language ").concat(u, " failed"), h), !h && p && a.log("loaded namespace ".concat(f, " for language ").concat(u), p), s.loaded("".concat(u, "|").concat(f), h, p);
            });
          });
        });
      }
    }
  }]);
})();
to.type = "backend";
P.use(to).use(Ga).use(sl).init({
  supportedLngs: ["en", "ar", "fr", "es", "it", "zh"],
  fallbackLng: "en",
  detection: {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    caches: ["cookie"]
  },
  backend: {
    loadPath: "/locales/{{lng}}/translation.json"
  },
  react: {
    useSuspense: !1
  }
});
const Bf = () => Math.random().toString(36).substring(2, 9), he = (e, t) => e, Kf = (e) => {
  const t = self.crypto.randomUUID(), n = { id: t, type: e };
  switch (e) {
    // === Generic 'heading' type for H1, H2, ... ===
    case "heading":
      return { ...n, type: "h2", text: P.t("new_heading") };
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return { ...n, text: P.t("new_heading") };
    case "p":
      return { ...n, text: P.t("new_paragraph") };
    case "hr":
      return n;
    case "blockquote":
      return { ...n, text: P.t("notable_quote") };
    case "code":
      return { ...n, content: 'console.log("Hello, World!");', options: { language: "javascript" } };
    case "ul":
      return { ...n, items: [P.t("list_item_1"), P.t("list_item_2")] };
    case "ol":
      return { ...n, items: [P.t("first_item"), P.t("second_item")] };
    case "text":
      return { ...n, name: he(t), question: P.t("text_question"), placeholder: P.t("placeholder_text") };
    case "textarea":
      return { ...n, name: he(t), question: P.t("textarea_question"), placeholder: P.t("textarea_placeholder") };
    case "email":
      return { ...n, name: he(t), question: P.t("email_question"), placeholder: "name@example.com" };
    case "password":
      return { ...n, name: he(t), question: P.t("password_question") };
    case "url":
      return { ...n, name: he(t), question: P.t("url_question"), placeholder: "https://example.com" };
    case "tel":
      return { ...n, name: he(t), question: P.t("tel_question") };
    case "number":
      return { ...n, name: he(t), question: P.t("number_question"), min: 0 };
    case "file":
      return { ...n, name: he(t), question: P.t("file_upload_question") };
    case "date":
      return { ...n, name: he(t), question: P.t("date_question") };
    case "time":
      return { ...n, name: he(t), question: P.t("time_question") };
    case "datetime":
      return { ...n, name: he(t), question: P.t("datetime_question") };
    case "select":
      return { ...n, name: he(t), question: P.t("select_question"), options: [P.t("option_1"), P.t("option_2")] };
    case "choice":
      return { ...n, name: he(t), question: P.t("choice_question"), choices: [P.t("choice_1"), P.t("choice_2")] };
    case "pictureChoice":
      return {
        ...n,
        name: he(t),
        question: P.t("picture_choice_question"),
        choices: [
          { label: P.t("option_1"), value: "option1", image: "https://img.icons8.com/clouds/200/image.png" },
          { label: P.t("option_2"), value: "option2", image: "https://img.icons8.com/clouds/200/gallery.png" }
        ]
      };
    case "rating":
      return { ...n, name: he(t), question: P.t("rating_question"), max: 5 };
    case "opinionScale":
      return { ...n, name: he(t), question: P.t("opinion_scale_question"), min: 0, max: 10, minLabel: P.t("disagree"), maxLabel: P.t("agree") };
    default:
      return { ...n, name: he(t) };
  }
};
function mn(e, t) {
  if (e.startSlide) {
    const n = e.startSlide.elements.findIndex((r) => r.id === t);
    if (n !== -1)
      return {
        element: e.startSlide.elements[n],
        elementIndex: n,
        slide: e.startSlide,
        slideId: "start"
      };
  }
  for (let n = 0; n < e.slides.length; n++) {
    const r = e.slides[n], s = r.elements.findIndex((i) => i.id === t);
    if (s !== -1)
      return {
        element: r.elements[s],
        elementIndex: s,
        slide: r,
        slideId: n
      };
  }
  if (e.endSlide) {
    const n = e.endSlide.elements.findIndex((r) => r.id === t);
    if (n !== -1)
      return {
        element: e.endSlide.elements[n],
        elementIndex: n,
        slide: e.endSlide,
        slideId: "end"
      };
  }
  return null;
}
function jr(e, t) {
  return t === "start" && e.startSlide ? { slide: e.startSlide, slideId: "start" } : t === "end" && e.endSlide ? { slide: e.endSlide, slideId: "end" } : typeof t == "number" && e.slides[t] ? { slide: e.slides[t], slideId: t } : null;
}
var yn = { exports: {} }, kr = {}, xn = { exports: {} }, Nr = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xi;
function Wf() {
  if (xi) return Nr;
  xi = 1;
  var e = G;
  function t(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, i = e.useLayoutEffect, a = e.useDebugValue;
  function o(f, h) {
    var p = h(), g = r({ inst: { value: p, getSnapshot: h } }), y = g[0].inst, m = g[1];
    return i(
      function() {
        y.value = p, y.getSnapshot = h, l(y) && m({ inst: y });
      },
      [f, p, h]
    ), s(
      function() {
        return l(y) && m({ inst: y }), f(function() {
          l(y) && m({ inst: y });
        });
      },
      [f]
    ), a(p), p;
  }
  function l(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var p = h();
      return !n(f, p);
    } catch {
      return !0;
    }
  }
  function c(f, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : o;
  return Nr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Nr;
}
var _r = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bi;
function Jf() {
  return bi || (bi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p, g) {
      return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
    }
    function t(p, g) {
      u || s.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var y = g();
      if (!f) {
        var m = g();
        i(y, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      m = a({
        inst: { value: y, getSnapshot: g }
      });
      var v = m[0].inst, w = m[1];
      return l(
        function() {
          v.value = y, v.getSnapshot = g, n(v) && w({ inst: v });
        },
        [p, y, g]
      ), o(
        function() {
          return n(v) && w({ inst: v }), p(function() {
            n(v) && w({ inst: v });
          });
        },
        [p]
      ), c(y), y;
    }
    function n(p) {
      var g = p.getSnapshot;
      p = p.value;
      try {
        var y = g();
        return !i(p, y);
      } catch {
        return !0;
      }
    }
    function r(p, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var s = G, i = typeof Object.is == "function" ? Object.is : e, a = s.useState, o = s.useEffect, l = s.useLayoutEffect, c = s.useDebugValue, u = !1, f = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    _r.useSyncExternalStore = s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), _r;
}
var vi;
function no() {
  return vi || (vi = 1, process.env.NODE_ENV === "production" ? xn.exports = Wf() : xn.exports = Jf()), xn.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function Xf() {
  if (wi) return kr;
  wi = 1;
  var e = G, t = no();
  function n(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, l = e.useDebugValue;
  return kr.useSyncExternalStoreWithSelector = function(c, u, f, h, p) {
    var g = i(null);
    if (g.current === null) {
      var y = { hasValue: !1, value: null };
      g.current = y;
    } else y = g.current;
    g = o(
      function() {
        function v(N) {
          if (!w) {
            if (w = !0, S = N, N = h(N), p !== void 0 && y.hasValue) {
              var j = y.value;
              if (p(j, N))
                return k = j;
            }
            return k = N;
          }
          if (j = k, r(S, N)) return j;
          var L = h(N);
          return p !== void 0 && p(j, L) ? (S = N, j) : (S = N, k = L);
        }
        var w = !1, S, k, O = f === void 0 ? null : f;
        return [
          function() {
            return v(u());
          },
          O === null ? void 0 : function() {
            return v(O());
          }
        ];
      },
      [u, f, h, p]
    );
    var m = s(c, g[0], g[1]);
    return a(
      function() {
        y.hasValue = !0, y.value = m;
      },
      [m]
    ), l(m), m;
  }, kr;
}
var Cr = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Si;
function Yf() {
  return Si || (Si = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = G, n = no(), r = typeof Object.is == "function" ? Object.is : e, s = n.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, l = t.useDebugValue;
    Cr.useSyncExternalStoreWithSelector = function(c, u, f, h, p) {
      var g = i(null);
      if (g.current === null) {
        var y = { hasValue: !1, value: null };
        g.current = y;
      } else y = g.current;
      g = o(
        function() {
          function v(N) {
            if (!w) {
              if (w = !0, S = N, N = h(N), p !== void 0 && y.hasValue) {
                var j = y.value;
                if (p(j, N))
                  return k = j;
              }
              return k = N;
            }
            if (j = k, r(S, N))
              return j;
            var L = h(N);
            return p !== void 0 && p(j, L) ? (S = N, j) : (S = N, k = L);
          }
          var w = !1, S, k, O = f === void 0 ? null : f;
          return [
            function() {
              return v(u());
            },
            O === null ? void 0 : function() {
              return v(O());
            }
          ];
        },
        [u, f, h, p]
      );
      var m = s(c, g[0], g[1]);
      return a(
        function() {
          y.hasValue = !0, y.value = m;
        },
        [m]
      ), l(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Cr;
}
var ji;
function Gf() {
  return ji || (ji = 1, process.env.NODE_ENV === "production" ? yn.exports = Xf() : yn.exports = Yf()), yn.exports;
}
var Qf = Gf();
const Zf = /* @__PURE__ */ Hi(Qf), { useSyncExternalStoreWithSelector: eh } = Zf, th = (e) => e;
function nh(e, t = th, n) {
  const r = eh(
    e.subscribe,
    e.getState,
    e.getInitialState,
    t,
    n
  );
  return G.useDebugValue(r), r;
}
const rh = "formsmd_builder_save";
function sh(e, t) {
  return nh(q.temporal, e, t);
}
const q = Id(
  Md(
    (e, t) => ({
      formDefinition: {
        settings: { id: "my-awesome-form", postUrl: "/api/submit" },
        options: {},
        slides: [
          { elements: [{ id: Bf(), type: "h1", text: "My New Form" }] }
        ]
      },
      selectedElementId: null,
      selectedSlideIndex: null,
      examValidationErrors: [],
      setExamValidationErrors: (n) => e({ examValidationErrors: n }),
      // --- ACTIONS ---
      setSelectedElementId: (n) => e({ selectedElementId: n, selectedSlideIndex: null }),
      setSelectedSlideIndex: (n) => e({ selectedSlideIndex: n, selectedElementId: null }),
      updateFormSettings: (n) => e(
        Te((r) => {
          r.formDefinition.settings = {
            ...r.formDefinition.settings,
            ...n
          };
        })
      ),
      updateSlideSettings: (n, r) => e(
        Te((s) => {
          const i = jr(s.formDefinition, n);
          i && (i.slide.slideOptions = {
            ...i.slide.slideOptions || {},
            ...r
          });
        })
      ),
      toggleStartSlide: (n) => e(
        Te((r) => {
          n ? r.formDefinition.startSlide || (r.formDefinition.startSlide = {
            elements: [
              {
                id: self.crypto.randomUUID(),
                type: "h1",
                text: "Welcome!"
              }
            ]
          }) : (delete r.formDefinition.startSlide, r.selectedSlideIndex === "start" && (r.selectedSlideIndex = null));
        })
      ),
      toggleEndSlide: (n) => e(
        Te((r) => {
          n ? r.formDefinition.endSlide || (r.formDefinition.endSlide = {
            elements: [
              {
                id: self.crypto.randomUUID(),
                type: "h1",
                text: "Thank You!"
              }
            ]
          }) : (delete r.formDefinition.endSlide, r.selectedSlideIndex === "end" && (r.selectedSlideIndex = null));
        })
      ),
      setFormDefinition: (n) => e({
        formDefinition: n,
        selectedElementId: null,
        selectedSlideIndex: null
      }),
      saveToLocalStorage: () => {
        const n = t();
        localStorage.setItem(
          rh,
          JSON.stringify(n.formDefinition)
        );
      },
      updateElement: (n, r) => e(
        Te((s) => {
          const i = mn(s.formDefinition, n);
          if (i)
            for (const a in r) {
              const o = a, l = r[o];
              l === "" || l === !1 ? delete i.element[o] : i.element[o] = l;
            }
        })
      ),
      deleteElement: (n) => e(
        Te((r) => {
          r.selectedElementId === n && (r.selectedElementId = null);
          const s = mn(r.formDefinition, n);
          s && s.slide.elements.splice(s.elementIndex, 1);
        })
      ),
      moveElement: (n, r, s) => e(
        Te((i) => {
          const a = mn(
            i.formDefinition,
            n
          );
          if (!a) return;
          const [o] = a.slide.elements.splice(
            a.elementIndex,
            1
          );
          if (!o) return;
          const l = jr(
            i.formDefinition,
            s
          );
          if (!l) return;
          let c;
          if (r) {
            const u = mn(
              i.formDefinition,
              r
            );
            c = u ? u.elementIndex : l.slide.elements.length;
          } else
            c = l.slide.elements.length;
          l.slide.elements.splice(c, 0, o);
        })
      ),
      addElementFromToolbox: (n, r, s) => e(
        Te((i) => {
          const a = jr(i.formDefinition, n);
          a && a.slide.elements.splice(r, 0, s);
        })
      ),
      addSlide: () => e(
        Te((n) => {
          n.formDefinition.slides.push({ elements: [] });
        })
      ),
      deleteSlide: (n) => e(
        Te((r) => {
          r.formDefinition.slides.length > 1 ? r.formDefinition.slides.splice(n, 1) : console.warn("Cannot delete the last slide.");
        })
      )
    }),
    {
      equality: (e, t) => JSON.stringify(e.formDefinition) === JSON.stringify(t.formDefinition)
    }
  )
), ih = () => {
  const e = q((s) => s.moveElement), t = q((s) => s.addElementFromToolbox), n = q((s) => s.setSelectedElementId);
  return { handleDragEnd: (s) => {
    const { active: i, over: a } = s;
    if (!a) return;
    if (i.data.current?.isToolboxElement) {
      const l = i.id, c = Kf(l), u = a.data.current?.isSlide, f = a.data.current?.slideIndex;
      let h = 0;
      u || (h = a.data.current?.elementIndex ?? 0), f !== void 0 && (t(f, h, c), n(c.id));
    } else {
      const l = i.id, c = a.id;
      if (l === c) return;
      const u = a.data.current?.isSlide, f = a.data.current?.slideIndex;
      f !== void 0 && e(l, u ? null : c, f);
    }
  } };
}, ro = ({ element: e }) => {
  const { t } = me(), n = (r, s, i) => /* @__PURE__ */ d.jsxs("div", { className: "p-3 bg-white rounded-lg border border-gray-200", children: [
    /* @__PURE__ */ d.jsx("label", { className: "text-sm text-gray-600 block mb-1", children: r }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 border border-gray-300 rounded-md p-2 bg-gray-50", children: [
      i,
      /* @__PURE__ */ d.jsx("span", { className: "text-gray-400 text-sm truncate", children: s })
    ] })
  ] });
  switch (e.type) {
    // CONTENT
    case "h1":
      return /* @__PURE__ */ d.jsx("h1", { className: "text-3xl font-bold py-2", children: e.text });
    case "h2":
      return /* @__PURE__ */ d.jsx("h2", { className: "text-2xl font-semibold py-2 border-b", children: e.text });
    case "h3":
      return /* @__PURE__ */ d.jsx("h3", { className: "text-xl font-semibold py-1", children: e.text });
    case "h4":
      return /* @__PURE__ */ d.jsx("h4", { className: "text-lg font-semibold py-1 text-gray-800", children: e.text });
    case "h5":
      return /* @__PURE__ */ d.jsx("h5", { className: "text-base font-bold py-1 text-gray-700", children: e.text });
    case "h6":
      return /* @__PURE__ */ d.jsx("h6", { className: "text-sm font-bold uppercase py-1 text-gray-600", children: e.text });
    case "p":
      return /* @__PURE__ */ d.jsx("p", { className: "text-base py-2", children: e.text });
    case "hr":
      return /* @__PURE__ */ d.jsx("hr", { className: "my-4" });
    case "blockquote":
      return /* @__PURE__ */ d.jsx("blockquote", { className: "pl-4 border-l-4 border-gray-300 italic text-gray-600 my-2", children: e.text });
    case "ul":
      return /* @__PURE__ */ d.jsx("ul", { className: "list-disc list-inside space-y-1 my-2", children: e.items?.map((r, s) => /* @__PURE__ */ d.jsx("li", { children: r }, s)) });
    case "ol":
      return /* @__PURE__ */ d.jsx("ol", { className: "list-decimal list-inside space-y-1 my-2", children: e.items?.map((r, s) => /* @__PURE__ */ d.jsx("li", { children: r }, s)) });
    case "code":
      return /* @__PURE__ */ d.jsx("pre", { className: "bg-gray-800 text-white p-3 rounded-md text-sm my-2", children: /* @__PURE__ */ d.jsx("code", { children: e.content }) });
    // SIMPLE INPUTS
    case "text":
      return n(e.question || t("display_text"), t("display_user_input"), /* @__PURE__ */ d.jsx(Yt, { size: 16 }));
    case "textarea":
      return n(e.question || t("display_text_area"), t("display_longer_user_input"), /* @__PURE__ */ d.jsx(Yt, { size: 16 }));
    case "email":
      return n(e.question || t("display_email"), t("display_email_placeholder"), /* @__PURE__ */ d.jsx(cs, { size: 16 }));
    case "password":
      return n(e.question || t("display_password"), t("display_password_placeholder"), /* @__PURE__ */ d.jsx(Ta, { size: 16 }));
    case "number":
      return n(e.question || t("display_number"), t("display_number_placeholder"), /* @__PURE__ */ d.jsx(Da, { size: 16 }));
    case "url":
      return n(e.question || t("display_url"), t("display_url_placeholder"), /* @__PURE__ */ d.jsx($a, { size: 16 }));
    case "tel":
      return n(e.question || t("display_telephone"), t("display_telephone_placeholder"), /* @__PURE__ */ d.jsx(Pa, { size: 16 }));
    // DATE/TIME INPUTS
    case "date":
      return n(e.question || t("display_date"), t("display_date_placeholder"), /* @__PURE__ */ d.jsx(Tn, { size: 16 }));
    case "time":
      return n(e.question || t("display_time"), t("display_time_placeholder"), /* @__PURE__ */ d.jsx(La, { size: 16 }));
    case "datetime":
      return n(e.question || t("display_datetime"), t("display_datetime_placeholder"), /* @__PURE__ */ d.jsx(Tn, { size: 16 }));
    // CHOICE-BASED & RATING
    case "select":
      return n(e.question || t("display_select"), t("display_choose_option"), /* @__PURE__ */ d.jsx(St, { size: 16 }));
    case "choice":
      return n(e.question || t("display_choice"), t("display_select_one_or_more"), /* @__PURE__ */ d.jsx(St, { size: 16 }));
    case "pictureChoice":
      return n(e.question || t("display_picture_choice"), t("display_select_a_picture"), /* @__PURE__ */ d.jsx(St, { size: 16 }));
    case "rating":
      return n(e.question || t("display_rating"), t("display_stars_will_be_shown"), /* @__PURE__ */ d.jsx(Ma, { size: 16 }));
    case "opinionScale":
      return n(e.question || t("display_opinion_scale"), t("display_a_scale_will_be_shown"), /* @__PURE__ */ d.jsx(St, { size: 16 }));
    // FILE
    case "file":
      return n(e.question || t("display_file_upload"), t("display_no_file_chosen"), /* @__PURE__ */ d.jsx(Ra, { size: 16 }));
    default:
      return /* @__PURE__ */ d.jsx("div", { className: "p-3 bg-red-100 text-red-700 rounded-lg border border-red-300", children: t("unknown_element_type", { type: e.type }) });
  }
}, It = ({ label: e, icon: t }) => /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg shadow-lg text-sm", children: [
  t,
  /* @__PURE__ */ d.jsx("span", { className: "mt-1", children: e })
] }), ah = ({ activeItem: e }) => {
  if (e.data.current?.isToolboxElement)
    switch (e.id) {
      case "heading":
        return /* @__PURE__ */ d.jsx(It, { label: "Heading", icon: /* @__PURE__ */ d.jsx(Aa, { size: 20 }) });
      case "p":
        return /* @__PURE__ */ d.jsx(It, { label: "Paragraph", icon: /* @__PURE__ */ d.jsx(Ia, { size: 20 }) });
      case "text":
        return /* @__PURE__ */ d.jsx(It, { label: "Text Input", icon: /* @__PURE__ */ d.jsx(Yt, { size: 20 }) });
      case "email":
        return /* @__PURE__ */ d.jsx(It, { label: "Email Input", icon: /* @__PURE__ */ d.jsx(cs, { size: 20 }) });
      // Add other toolbox items here if you want them to have a custom drag preview
      default:
        return /* @__PURE__ */ d.jsx("div", { className: "p-3 bg-white rounded-lg shadow-lg", children: "New Item" });
    }
  if (e.data.current?.isCanvasElement) {
    const r = e.data.current?.element;
    return r ? /* @__PURE__ */ d.jsx("div", { className: "bg-white p-2 rounded-lg shadow-lg opacity-80", children: /* @__PURE__ */ d.jsx(ro, { element: r }) }) : /* @__PURE__ */ d.jsx(It, { label: "Element", icon: /* @__PURE__ */ d.jsx(yd, { size: 20 }) });
  }
  return null;
};
function so(e, t, n) {
  const r = e.slice();
  return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r;
}
function oh(e, t) {
  return e.reduce((n, r, s) => {
    const i = t.get(r);
    return i && (n[s] = i), n;
  }, Array(e.length));
}
function bn(e) {
  return e !== null && e >= 0;
}
function lh(e, t) {
  if (e === t)
    return !0;
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function ch(e) {
  return typeof e == "boolean" ? {
    draggable: e,
    droppable: e
  } : e;
}
const io = (e) => {
  let {
    rects: t,
    activeIndex: n,
    overIndex: r,
    index: s
  } = e;
  const i = so(t, r, n), a = t[s], o = i[s];
  return !o || !a ? null : {
    x: o.left - a.left,
    y: o.top - a.top,
    scaleX: o.width / a.width,
    scaleY: o.height / a.height
  };
}, vn = {
  scaleX: 1,
  scaleY: 1
}, uh = (e) => {
  var t;
  let {
    activeIndex: n,
    activeNodeRect: r,
    index: s,
    rects: i,
    overIndex: a
  } = e;
  const o = (t = i[n]) != null ? t : r;
  if (!o)
    return null;
  if (s === n) {
    const c = i[a];
    return c ? {
      x: 0,
      y: n < a ? c.top + c.height - (o.top + o.height) : c.top - o.top,
      ...vn
    } : null;
  }
  const l = dh(i, s, n);
  return s > n && s <= a ? {
    x: 0,
    y: -o.height - l,
    ...vn
  } : s < n && s >= a ? {
    x: 0,
    y: o.height + l,
    ...vn
  } : {
    x: 0,
    y: 0,
    ...vn
  };
};
function dh(e, t, n) {
  const r = e[t], s = e[t - 1], i = e[t + 1];
  return r ? n < t ? s ? r.top - (s.top + s.height) : i ? i.top - (r.top + r.height) : 0 : i ? i.top - (r.top + r.height) : s ? r.top - (s.top + s.height) : 0 : 0;
}
const ao = "Sortable", oo = /* @__PURE__ */ G.createContext({
  activeIndex: -1,
  containerId: ao,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: io,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function fh(e) {
  let {
    children: t,
    id: n,
    items: r,
    strategy: s = io,
    disabled: i = !1
  } = e;
  const {
    active: a,
    dragOverlay: o,
    droppableRects: l,
    over: c,
    measureDroppableContainers: u
  } = va(), f = an(ao, n), h = o.rect !== null, p = te(() => r.map((N) => typeof N == "object" && "id" in N ? N.id : N), [r]), g = a != null, y = a ? p.indexOf(a.id) : -1, m = c ? p.indexOf(c.id) : -1, v = Y(p), w = !lh(p, v.current), S = m !== -1 && y === -1 || w, k = ch(i);
  Le(() => {
    w && g && u(p);
  }, [w, p, g, u]), F(() => {
    v.current = p;
  }, [p]);
  const O = te(
    () => ({
      activeIndex: y,
      containerId: f,
      disabled: k,
      disableTransforms: S,
      items: p,
      overIndex: m,
      useDragOverlay: h,
      sortedRects: oh(p, l),
      strategy: s
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, f, k.draggable, k.droppable, S, p, m, l, h, s]
  );
  return G.createElement(oo.Provider, {
    value: O
  }, t);
}
const hh = (e) => {
  let {
    id: t,
    items: n,
    activeIndex: r,
    overIndex: s
  } = e;
  return so(n, r, s).indexOf(t);
}, ph = (e) => {
  let {
    containerId: t,
    isSorting: n,
    wasDragging: r,
    index: s,
    items: i,
    newIndex: a,
    previousItems: o,
    previousContainerId: l,
    transition: c
  } = e;
  return !c || !r || o !== i && s === a ? !1 : n ? !0 : a !== s && t === l;
}, gh = {
  duration: 200,
  easing: "ease"
}, lo = "transform", mh = /* @__PURE__ */ et.Transition.toString({
  property: lo,
  duration: 0,
  easing: "linear"
}), yh = {
  roleDescription: "sortable"
};
function xh(e) {
  let {
    disabled: t,
    index: n,
    node: r,
    rect: s
  } = e;
  const [i, a] = W(null), o = Y(n);
  return Le(() => {
    if (!t && n !== o.current && r.current) {
      const l = s.current;
      if (l) {
        const c = Et(r.current, {
          ignoreTransform: !0
        }), u = {
          x: l.left - c.left,
          y: l.top - c.top,
          scaleX: l.width / c.width,
          scaleY: l.height / c.height
        };
        (u.x || u.y) && a(u);
      }
    }
    n !== o.current && (o.current = n);
  }, [t, n, r, s]), F(() => {
    i && a(null);
  }, [i]), i;
}
function bh(e) {
  let {
    animateLayoutChanges: t = ph,
    attributes: n,
    disabled: r,
    data: s,
    getNewIndex: i = hh,
    id: a,
    strategy: o,
    resizeObserverConfig: l,
    transition: c = gh
  } = e;
  const {
    items: u,
    containerId: f,
    activeIndex: h,
    disabled: p,
    disableTransforms: g,
    sortedRects: y,
    overIndex: m,
    useDragOverlay: v,
    strategy: w
  } = Ee(oo), S = vh(r, p), k = u.indexOf(a), O = te(() => ({
    sortable: {
      containerId: f,
      index: k,
      items: u
    },
    ...s
  }), [f, s, k, u]), N = te(() => u.slice(u.indexOf(a)), [u, a]), {
    rect: j,
    node: L,
    isOver: T,
    setNodeRef: $
  } = wa({
    id: a,
    data: O,
    disabled: S.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: N,
      ...l
    }
  }), {
    active: E,
    activatorEvent: I,
    activeNodeRect: K,
    attributes: H,
    setNodeRef: ae,
    listeners: A,
    isDragging: B,
    over: ne,
    setActivatorNodeRef: re,
    transform: x
  } = ba({
    id: a,
    data: O,
    attributes: {
      ...yh,
      ...n
    },
    disabled: S.draggable
  }), C = cl($, ae), _ = !!E, R = _ && !g && bn(h) && bn(m), D = !v && B, V = D && R ? x : null, Ne = R ? V ?? (o ?? w)({
    rects: y,
    activeNodeRect: K,
    activeIndex: h,
    overIndex: m,
    index: k
  }) : null, U = bn(h) && bn(m) ? i({
    id: a,
    items: u,
    activeIndex: h,
    overIndex: m
  }) : k, oe = E?.id, X = Y({
    activeId: oe,
    items: u,
    newIndex: U,
    containerId: f
  }), Fe = u !== X.current.items, $e = t({
    active: E,
    containerId: f,
    isDragging: B,
    isSorting: _,
    id: a,
    index: k,
    items: u,
    newIndex: X.current.newIndex,
    previousItems: X.current.items,
    previousContainerId: X.current.containerId,
    transition: c,
    wasDragging: X.current.activeId != null
  }), ct = xh({
    disabled: !$e,
    index: k,
    node: L,
    rect: j
  });
  return F(() => {
    _ && X.current.newIndex !== U && (X.current.newIndex = U), f !== X.current.containerId && (X.current.containerId = f), u !== X.current.items && (X.current.items = u);
  }, [_, U, f, u]), F(() => {
    if (oe === X.current.activeId)
      return;
    if (oe != null && X.current.activeId == null) {
      X.current.activeId = oe;
      return;
    }
    const ut = setTimeout(() => {
      X.current.activeId = oe;
    }, 50);
    return () => clearTimeout(ut);
  }, [oe]), {
    active: E,
    activeIndex: h,
    attributes: H,
    data: O,
    rect: j,
    index: k,
    newIndex: U,
    items: u,
    isOver: T,
    isSorting: _,
    isDragging: B,
    listeners: A,
    node: L,
    overIndex: m,
    over: ne,
    setNodeRef: C,
    setActivatorNodeRef: re,
    setDroppableNodeRef: $,
    setDraggableNodeRef: ae,
    transform: ct ?? Ne,
    transition: Ve()
  };
  function Ve() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      ct || // Or to prevent items jumping to back to their "new" position when items change
      Fe && X.current.newIndex === k
    )
      return mh;
    if (!(D && !Xn(I) || !c) && (_ || $e))
      return et.Transition.toString({
        ...c,
        property: lo
      });
  }
}
function vh(e, t) {
  var n, r;
  return typeof e == "boolean" ? {
    draggable: e,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (n = e?.draggable) != null ? n : t.draggable,
    droppable: (r = e?.droppable) != null ? r : t.droppable
  };
}
Z.Down, Z.Right, Z.Up, Z.Left;
const co = ({
  toastId: e,
  message: t,
  onConfirm: n
}) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ d.jsx("span", { children: t }),
  /* @__PURE__ */ d.jsxs("div", { className: "flex gap-2 ml-4", children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        onClick: () => {
          n(), Q.dismiss(e);
        },
        className: "px-2 py-1 text-xs font-semibold text-white bg-red-600 rounded-md hover:bg-red-700",
        children: "Confirm"
      }
    ),
    /* @__PURE__ */ d.jsx(
      "button",
      {
        onClick: () => Q.dismiss(e),
        className: "px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300",
        children: "Cancel"
      }
    )
  ] })
] }), wh = ({ element: e, slideIndex: t }) => {
  const { attributes: n, listeners: r, setNodeRef: s, transform: i, transition: a } = bh({
    id: e.id,
    data: { element: e, type: e.type, isCanvasElement: !0, slideIndex: t }
  }), l = q((g) => g.examValidationErrors).find((g) => g.elementId === e.id), c = { transform: et.Transform.toString(i), transition: a }, u = q((g) => g.selectedElementId), f = q((g) => g.setSelectedElementId), h = q((g) => g.deleteElement), p = (g) => {
    g.stopPropagation(), Q((y) => /* @__PURE__ */ d.jsx(
      co,
      {
        toastId: y.id,
        message: "Delete this element?",
        onConfirm: () => h(e.id)
      }
    ), { duration: 5e3 });
  };
  return /* @__PURE__ */ d.jsxs("div", { ref: s, style: c, onClick: () => f(e.id), className: `group p-1 rounded-lg transition-all flex items-center gap-2 ${u === e.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-gray-100"} ${l ? "ring-2 ring-red-500" : ""}`, children: [
    /* @__PURE__ */ d.jsx("div", { ...n, ...r, className: "p-2 cursor-grab touch-none", children: /* @__PURE__ */ d.jsx(td, { size: 16, className: "text-gray-400" }) }),
    /* @__PURE__ */ d.jsx("div", { className: "flex-1", children: /* @__PURE__ */ d.jsx(ro, { element: e }) }),
    l && /* @__PURE__ */ d.jsx("div", { title: l.message, children: /* @__PURE__ */ d.jsx(Ed, { size: 16, className: "text-red-600" }) }),
    /* @__PURE__ */ d.jsx("button", { onClick: p, className: "p-1 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all", "aria-label": "Delete element", children: /* @__PURE__ */ d.jsx(cn, { size: 16 }) })
  ] });
}, Or = ({ slide: e, slideIndex: t, isSpecial: n = !1, title: r, icon: s }) => {
  const i = q((f) => f.deleteSlide), a = q((f) => f.setSelectedSlideIndex), o = q((f) => f.selectedSlideIndex), { setNodeRef: l } = wa({ id: `slide-${t}`, data: { slideIndex: t, isSlide: !0 } }), c = o === t, u = () => {
    Q((f) => /* @__PURE__ */ d.jsx(
      co,
      {
        toastId: f.id,
        message: `Delete ${r}?`,
        onConfirm: () => {
          typeof t == "number" && i(t);
        }
      }
    ), { duration: 5e3 });
  };
  return /* @__PURE__ */ d.jsx(fh, { items: e.elements.map((f) => f.id), strategy: uh, children: /* @__PURE__ */ d.jsxs("div", { className: `mb-8 p-4 border rounded-lg shadow-sm transition-all ${c ? "border-blue-500 ring-2 ring-blue-200" : "border-dashed"} ${n ? "bg-indigo-50 border-indigo-200" : "bg-white"}`, children: [
    /* @__PURE__ */ d.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ d.jsxs("div", { className: `flex items-center gap-2 text-sm font-semibold tracking-wider ${n ? "text-indigo-700" : "text-gray-500"}`, children: [
        s,
        /* @__PURE__ */ d.jsx("span", { children: r })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ d.jsx("button", { onClick: () => a(t), className: `p-1 text-gray-400 hover:text-blue-600 transition-colors ${c ? "text-blue-600" : ""}`, children: /* @__PURE__ */ d.jsx(jd, { size: 16 }) }),
        !n && /* @__PURE__ */ d.jsx("button", { onClick: u, className: "p-1 text-gray-400 hover:text-red-600 transition-colors", children: /* @__PURE__ */ d.jsx(cn, { size: 16 }) })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { ref: l, className: "space-y-4 min-h-[100px] p-4 bg-white rounded-md", children: [
      e.elements.map((f) => /* @__PURE__ */ d.jsx(wh, { element: f, slideIndex: t }, f.id)),
      e.elements.length === 0 && /* @__PURE__ */ d.jsx("div", { className: "flex justify-center items-center text-sm text-gray-400 h-[80px]", children: "Drop elements here" })
    ] })
  ] }) });
}, Sh = () => {
  const e = q((i) => i.formDefinition), t = q((i) => i.addSlide), n = q((i) => i.setSelectedElementId), r = q((i) => i.setSelectedSlideIndex), s = (i) => {
    i.currentTarget === i.target && (n(null), r(null));
  };
  return /* @__PURE__ */ d.jsx("main", { onClick: s, className: "flex-1 p-8 bg-gray-100 overflow-y-auto cursor-pointer", children: /* @__PURE__ */ d.jsxs("div", { className: "max-w-3xl mx-auto cursor-default", children: [
    e.startSlide && /* @__PURE__ */ d.jsx(Or, { slide: e.startSlide, slideIndex: "start", isSpecial: !0, title: "Welcome Slide", icon: /* @__PURE__ */ d.jsx(Tu, { size: 16 }) }),
    e.slides.map((i, a) => /* @__PURE__ */ d.jsx(Or, { slide: i, slideIndex: a, title: `Slide ${a + 1}`, icon: /* @__PURE__ */ d.jsx(d.Fragment, {}) }, a)),
    e.endSlide && /* @__PURE__ */ d.jsx(Or, { slide: e.endSlide, slideIndex: "end", isSpecial: !0, title: "End Slide", icon: /* @__PURE__ */ d.jsx(Mu, { size: 16 }) }),
    /* @__PURE__ */ d.jsx("div", { className: "flex justify-center mt-4", children: /* @__PURE__ */ d.jsx("button", { onClick: t, className: "px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors", children: "+ Add New Slide" }) })
  ] }) });
}, M = ({ label: e, description: t, ...n }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: e }),
  /* @__PURE__ */ d.jsx(
    "input",
    {
      type: "text",
      className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
      ...n
    }
  ),
  t && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 mt-1", children: t })
] }), jh = ({ element: e }) => {
  const { t } = me(), n = q((a) => a.updateElement), r = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(e.type), s = (a) => {
    n(e.id, { type: a });
  }, i = ({ level: a }) => {
    const o = `h${a}`, l = e.type === o;
    return /* @__PURE__ */ d.jsxs(
      "button",
      {
        onClick: () => s(o),
        className: `px-3 py-1 text-sm font-bold rounded-md transition-colors ${l ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
        children: [
          "H",
          a
        ]
      }
    );
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    r && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("level") }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ d.jsx(i, { level: 1 }),
        /* @__PURE__ */ d.jsx(i, { level: 2 }),
        /* @__PURE__ */ d.jsx(i, { level: 3 }),
        /* @__PURE__ */ d.jsx(i, { level: 4 }),
        /* @__PURE__ */ d.jsx(i, { level: 5 }),
        /* @__PURE__ */ d.jsx(i, { level: 6 })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("text_content"),
        value: e.text || "",
        onChange: (a) => n(e.id, { text: a.target.value })
      }
    )
  ] });
}, ir = (e, t, n) => ![
  ...n.startSlide?.elements ?? [],
  ...n.slides.flatMap((i) => i.elements),
  ...n.endSlide?.elements ?? []
].find(
  (i) => i.name === e && i.id !== t
), ee = ({
  label: e,
  description: t,
  checked: n,
  onChange: r
}) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-start gap-2", children: [
  /* @__PURE__ */ d.jsx(
    "input",
    {
      id: `checkbox-${e}`,
      type: "checkbox",
      checked: n,
      onChange: r,
      className: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
    }
  ),
  /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("label", { htmlFor: `checkbox-${e}`, className: "text-sm font-medium text-gray-700", children: e }),
    t && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500", children: t })
  ] })
] }), ar = ({ element: e }) => {
  const { t } = me(), n = q((r) => r.updateElement);
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 p-3 border rounded-lg bg-gray-50/50", children: [
    /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("common_options") }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("description"),
        value: e.description || "",
        onChange: (r) => n(e.id, { description: r.target.value }),
        placeholder: t("helper_text")
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("required"),
          description: t("required_description"),
          checked: e.required || !1,
          onChange: (r) => n(e.id, { required: r.target.checked })
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("disabled"),
          description: t("disabled_description"),
          checked: e.disabled || !1,
          onChange: (r) => n(e.id, { disabled: r.target.checked })
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("autofocus"),
          description: t("autofocus_description"),
          checked: e.autofocus || !1,
          onChange: (r) => n(e.id, { autofocus: r.target.checked })
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("subfield_style"),
          description: t("subfield_style_description"),
          checked: e.subfield || !1,
          onChange: (r) => n(e.id, { subfield: r.target.checked })
        }
      )
    ] })
  ] });
}, or = ({ element: e }) => {
  const { t } = me(), n = q((a) => a.updateElement), r = e.displayCondition || { dependencies: [], condition: "" }, s = (a) => {
    const o = a.target.value.split(",").map((l) => l.trim()).filter(Boolean);
    n(e.id, { displayCondition: { ...r, dependencies: o } });
  }, i = (a) => {
    n(e.id, { displayCondition: { ...r, condition: a.target.value } });
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 p-3 border rounded-lg bg-gray-50/50", children: [
    /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("conditional_logic") }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("dependencies"),
        value: r.dependencies.join(", ") || "",
        onChange: s,
        placeholder: t("dependencies_placeholder")
      }
    ),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("condition"),
        value: r.condition || "",
        onChange: i,
        placeholder: t("condition_placeholder")
      }
    ),
    /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 -mt-2", children: t("condition_description") })
  ] });
}, kh = ({ label: e, description: t, tags: n, onTagsChange: r, placeholder: s }) => {
  const i = (o) => {
    if (o.key !== "Enter" && o.key !== ",") return;
    o.preventDefault();
    const l = o.currentTarget.value.trim();
    l && (n.includes(l) || r([...n, l]), o.currentTarget.value = "");
  }, a = (o) => {
    r(n.filter((l, c) => c !== o));
  };
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: e }),
    /* @__PURE__ */ d.jsxs("div", { className: "w-full p-2 border border-gray-300 rounded-md shadow-sm flex flex-wrap items-center gap-2", children: [
      n.map((o, l) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-1 bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full", children: [
        o,
        /* @__PURE__ */ d.jsx("button", { onClick: () => a(l), className: "hover:text-red-600", children: /* @__PURE__ */ d.jsx(Ad, { size: 14 }) })
      ] }, l)),
      /* @__PURE__ */ d.jsx(
        "input",
        {
          type: "text",
          onKeyDown: i,
          placeholder: s,
          className: "flex-grow bg-transparent outline-none p-1"
        }
      )
    ] }),
    t && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 mt-1", children: t })
  ] });
}, Nh = ({ element: e }) => {
  const { t } = me(), n = q((u) => u.updateElement), r = q((u) => u.formDefinition), s = q((u) => u.formDefinition.settings.isAutoSolvable), [i, a] = W(!0);
  F(() => {
    a(ir(e.name, e.id, r));
  }, [e.name, e.id, r]);
  const o = (u) => {
    const f = u.target.value.replace(/[^a-zA-Z0-9_]/g, "");
    n(e.id, { name: f || e.id });
  }, l = (u, f) => {
    const h = f === "" ? void 0 : parseInt(f, 10);
    n(e.id, { [u]: h });
  }, c = e.type === "file" ? "currentFile" : "value";
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("question"),
        value: e.question || "",
        onChange: (u) => n(e.id, { question: u.target.value })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx(M, { label: t("name_id"), value: e.name || "", onChange: o, className: `w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${i ? "border-gray-300" : "border-red-500"}` }),
      !i && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("name_in_use") })
    ] }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("placeholder"),
        value: e.placeholder || "",
        onChange: (u) => n(e.id, { placeholder: u.target.value })
      }
    ),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("default_value"),
        value: e[c] || "",
        onChange: (u) => n(e.id, { [c]: u.target.value }),
        description: t(e.type === "file" ? "url_to_file" : "initial_value_of_input")
      }
    ),
    s && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-green-50 border-green-300 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-sm font-semibold text-green-800", children: t("auto_correction") }),
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("correct_answer"),
          value: e.answer || "",
          onChange: (u) => n(e.id, { answer: u.target.value })
        }
      ),
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("score"),
          type: "number",
          value: e.score ?? "",
          onChange: (u) => n(e.id, { score: u.target.value === "" ? void 0 : parseFloat(u.target.value) })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("validation") }),
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("validation_pattern"),
          value: e.pattern || "",
          onChange: (u) => n(e.id, { pattern: u.target.value }),
          placeholder: "e.g., ^[A-Za-z]+$"
        }
      ),
      ["text", "email", "url", "tel", "password"].includes(e.type) && /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("max_length"),
          type: "number",
          value: e.maxlength ?? "",
          onChange: (u) => l("maxlength", u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-3", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("appearance") }),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("small_field_size"),
          description: t("small_field_size_description"),
          checked: e.fieldSize === "sm",
          onChange: (u) => n(e.id, { fieldSize: u.target.checked ? "sm" : void 0 })
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("classic_label_style"),
          description: t("classic_label_style_description"),
          checked: e.labelStyle === "classic",
          onChange: (u) => n(e.id, { labelStyle: u.target.checked ? "classic" : void 0 })
        }
      )
    ] }),
    e.type === "number" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("number_options") }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ d.jsx(M, { label: t("min"), type: "number", value: e.min ?? "", onChange: (u) => l("min", u.target.value) }),
        /* @__PURE__ */ d.jsx(M, { label: t("max"), type: "number", value: e.max ?? "", onChange: (u) => l("max", u.target.value) }),
        /* @__PURE__ */ d.jsx(M, { label: t("step"), type: "number", value: e.step ?? "", onChange: (u) => l("step", u.target.value) })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ d.jsx(M, { label: t("unit_prefix"), value: e.unit || "", onChange: (u) => n(e.id, { unit: u.target.value }), placeholder: "$" }),
        /* @__PURE__ */ d.jsx(M, { label: t("unit_suffix"), value: e.unitEnd || "", onChange: (u) => n(e.id, { unitEnd: u.target.value }), placeholder: "kg" })
      ] })
    ] }),
    e.type === "tel" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("telephone_options") }),
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("default_country"),
          value: e.country || "",
          onChange: (u) => n(e.id, { country: u.target.value.toUpperCase() }),
          placeholder: "US",
          description: t("iso_alpha_2")
        }
      ),
      /* @__PURE__ */ d.jsx(
        kh,
        {
          label: t("available_countries"),
          tags: e.availableCountries || [],
          onTagsChange: (u) => n(e.id, { availableCountries: u.length > 0 ? u : void 0 }),
          placeholder: t("add_country_placeholder"),
          description: t("iso_alpha_2_example")
        }
      )
    ] }),
    e.type === "file" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("file_options") }),
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("size_limit_mb"),
          type: "number",
          value: e.sizeLimit ?? "",
          onChange: (u) => l("sizeLimit", u.target.value)
        }
      ),
      /* @__PURE__ */ d.jsx(
        ee,
        {
          label: t("images_only"),
          description: t("images_only_description"),
          checked: e.imageOnly || !1,
          onChange: (u) => n(e.id, { imageOnly: u.target.checked })
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(ar, { element: e }),
    /* @__PURE__ */ d.jsx(or, { element: e })
  ] });
}, _h = ({ element: e }) => {
  const { t } = me(), n = q((m) => m.updateElement), r = q((m) => m.formDefinition), s = q((m) => m.formDefinition.settings.isAutoSolvable), [i, a] = W(!0);
  F(() => {
    a(ir(e.name, e.id, r));
  }, [e.name, e.id, r]);
  const o = (m) => {
    const v = m.target.value.replace(/[^a-zA-Z0-9_]/g, "");
    n(e.id, { name: v || e.id });
  }, l = e.type === "select" ? "options" : "choices", c = e[l] || [], u = e.checked || [], f = (m) => {
    n(e.id, { question: m.target.value });
  }, h = (m, v) => {
    const w = [...c];
    w[m] = v, n(e.id, { [l]: w });
  }, p = () => {
    const m = [...c, `New Option ${c.length + 1}`];
    n(e.id, { [l]: m });
  }, g = (m) => {
    const v = [...c];
    v.splice(m, 1), n(e.id, { [l]: v });
  }, y = (m, v) => {
    let w = [...u];
    v ? w.includes(m) || w.push(m) : w = w.filter((S) => S !== m), n(e.id, { checked: w.length > 0 ? w : void 0 });
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("question"),
        value: e.question || "",
        onChange: f
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("name_id"),
          value: e.name || "",
          onChange: o,
          className: `w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${i ? "border-gray-300" : "border-red-500"}`
        }
      ),
      !i && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("name_in_use") })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("choice_options") }),
      e.type === "select" && /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("default_selected_value"),
          value: e.selected || "",
          onChange: (m) => n(e.id, { selected: m.target.value }),
          description: t("must_match_option")
        }
      ),
      e.type === "choice" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ d.jsx(ee, { label: t("allow_multiple_selections"), checked: e.multiple || !1, onChange: (m) => n(e.id, { multiple: m.target.checked }) }),
        /* @__PURE__ */ d.jsx(ee, { label: t("display_horizontally"), checked: e.horizontal || !1, onChange: (m) => n(e.id, { horizontal: m.target.checked }) }),
        /* @__PURE__ */ d.jsx(ee, { label: t("hide_form_text"), description: t("hide_form_text_description"), checked: e.hideFormText || !1, onChange: (m) => n(e.id, { hideFormText: m.target.checked }) })
      ] }),
      e.type === "choice" && e.multiple && /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("default_selections") }),
        /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 p-3 border rounded-md bg-white", children: [
          c.map((m, v) => /* @__PURE__ */ d.jsx(ee, { label: m || t("option_n", { index: v + 1 }), checked: u.includes(m), onChange: (w) => y(m, w.target.checked) }, v)),
          c.length === 0 && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-400", children: t("add_choices_to_set_defaults") })
        ] })
      ] }),
      s && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-green-50 border-green-300 space-y-4", children: [
        /* @__PURE__ */ d.jsx("h3", { className: "text-sm font-semibold text-green-800", children: t("auto_correction") }),
        e.type === "select" && /* @__PURE__ */ d.jsx(
          M,
          {
            label: t("correct_answer"),
            value: e.answer || "",
            onChange: (m) => n(e.id, { answer: m.target.value }),
            description: t("must_match_one_option")
          }
        ),
        e.type === "choice" && /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("correct_answers") }),
          /* @__PURE__ */ d.jsx("div", { className: "space-y-2 p-3 border rounded-md bg-white", children: c.map((m, v) => /* @__PURE__ */ d.jsx(
            ee,
            {
              label: m || t("option_n", { index: v + 1 }),
              checked: (e.answer || []).includes(m),
              onChange: (w) => {
                let S = [...e.answer || []];
                w.target.checked ? S.includes(m) || S.push(m) : S = S.filter((k) => k !== m), n(e.id, { answer: S.length > 0 ? S : void 0 });
              }
            },
            v
          )) })
        ] }),
        /* @__PURE__ */ d.jsx(
          M,
          {
            label: t("score"),
            type: "number",
            value: e.score ?? "",
            onChange: (m) => n(e.id, { score: m.target.value === "" ? void 0 : parseFloat(m.target.value) })
          }
        )
      ] }),
      /* @__PURE__ */ d.jsxs("div", { children: [
        /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: e.type === "select" ? t("options") : t("choices") }),
        /* @__PURE__ */ d.jsxs("div", { className: "space-y-2", children: [
          c.map((m, v) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ d.jsx("input", { type: "text", value: m, onChange: (w) => h(v, w.target.value), className: "flex-grow p-2 border border-gray-300 rounded-md shadow-sm", placeholder: t("option_n", { index: v + 1 }) }),
            /* @__PURE__ */ d.jsx("button", { onClick: () => g(v), className: "text-gray-400 hover:text-red-500", children: /* @__PURE__ */ d.jsx(cn, { size: 16 }) })
          ] }, v)),
          /* @__PURE__ */ d.jsxs("button", { onClick: p, className: "flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800", children: [
            /* @__PURE__ */ d.jsx(ls, { size: 16 }),
            t("add_option")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx(ar, { element: e }),
    /* @__PURE__ */ d.jsx(or, { element: e })
  ] });
}, Ch = ({ label: e, children: t, ...n }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: e }),
  /* @__PURE__ */ d.jsx("select", { ...n, className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500", children: t })
] }), Oh = ({ element: e }) => {
  const { t } = me(), n = q((h) => h.updateElement), r = q((h) => h.formDefinition), [s, i] = W(!0), [a, o] = W({});
  F(() => {
    i(ir(e.name, e.id, r));
    const h = {};
    e.type === "opinionScale" && (e.startAt !== void 0 && ![0, 1].includes(e.startAt) && (h.startAt = "Must be 0 or 1."), e.outOf !== void 0 && (e.outOf < 5 || e.outOf > 10) && (h.outOf = "Must be between 5 and 10.")), o(h);
  }, [e.name, e.startAt, e.outOf, e.id, r]);
  const l = (h) => {
    const p = h.target.value.replace(/[^a-zA-Z0-9_]/g, "");
    n(e.id, { name: p || e.id });
  }, c = (h, p) => {
    const g = p === "" ? void 0 : parseInt(p, 10);
    n(e.id, { [h]: g });
  }, u = e.type === "rating", f = e.type === "opinionScale";
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("question"),
        value: e.question || "",
        onChange: (h) => n(e.id, { question: h.target.value })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("name_id"),
          value: e.name || "",
          onChange: l,
          className: `w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${s ? "border-gray-300" : "border-red-500"}`
        }
      ),
      !s && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("name_in_use") })
    ] }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("default_value"),
        type: "number",
        value: e.value ?? "",
        onChange: (h) => c("value", h.target.value)
      }
    ),
    u && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("rating_options") }),
      /* @__PURE__ */ d.jsx(M, { label: t("number_of_icons"), type: "number", value: e.outOf ?? "", onChange: (h) => c("outOf", h.target.value) }),
      /* @__PURE__ */ d.jsxs(Ch, { label: t("icon_style"), value: e.icon || "star", onChange: (h) => n(e.id, { icon: h.target.value }), children: [
        /* @__PURE__ */ d.jsx("option", { value: "star", children: t("star") }),
        /* @__PURE__ */ d.jsx("option", { value: "heart", children: t("heart") })
      ] }),
      /* @__PURE__ */ d.jsx(ee, { label: t("hide_numeric_labels"), checked: e.hideLabels || !1, onChange: (h) => n(e.id, { hideLabels: h.target.checked }) })
    ] }),
    f && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("opinion_scale_options") }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx(M, { label: t("starts_at"), type: "number", value: e.startAt ?? "", onChange: (h) => c("startAt", h.target.value), className: `w-full p-2 border rounded-md shadow-sm ${a.startAt ? "border-red-500" : "border-gray-300"}` }),
          a.startAt && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("must_be_0_or_1") })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx(M, { label: t("ends_at"), type: "number", value: e.outOf ?? "", onChange: (h) => c("outOf", h.target.value), className: `w-full p-2 border rounded-md shadow-sm ${a.outOf ? "border-red-500" : "border-gray-300"}` }),
          a.outOf && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("must_be_between_5_and_10") })
        ] })
      ] }),
      /* @__PURE__ */ d.jsx(M, { label: t("start_label"), value: e.labelStart || "", onChange: (h) => n(e.id, { labelStart: h.target.value }) }),
      /* @__PURE__ */ d.jsx(M, { label: t("end_label"), value: e.labelEnd || "", onChange: (h) => n(e.id, { labelEnd: h.target.value }) }),
      /* @__PURE__ */ d.jsx(ee, { label: t("hide_start_label"), checked: e.hideLabelStart || !1, onChange: (h) => n(e.id, { hideLabelStart: h.target.checked }) }),
      /* @__PURE__ */ d.jsx(ee, { label: t("hide_end_label"), checked: e.hideLabelEnd || !1, onChange: (h) => n(e.id, { hideLabelEnd: h.target.checked }) })
    ] }),
    /* @__PURE__ */ d.jsx(ar, { element: e }),
    /* @__PURE__ */ d.jsx(or, { element: e })
  ] });
}, Eh = ({ element: e }) => {
  const { t } = me(), n = q((p) => p.updateElement), r = q((p) => p.formDefinition), s = e.choices || [], i = e.checked || [], [a, o] = W(!0);
  F(() => {
    o(ir(e.name, e.id, r));
  }, [e.name, e.id, r]);
  const l = (p) => {
    const g = p.target.value.replace(/[^a-zA-Z0-9_]/g, "");
    n(e.id, { name: g || e.id });
  }, c = (p, g, y) => {
    const m = [...s];
    m[p] = { ...m[p], [g]: y }, n(e.id, { choices: m });
  }, u = () => {
    const p = {
      label: `New Label ${s.length + 1}`,
      value: `new_value_${s.length + 1}`,
      image: "https://img.icons8.com/clouds/200/help.png"
    };
    n(e.id, { choices: [...s, p] });
  }, f = (p) => {
    const g = [...s];
    g.splice(p, 1), n(e.id, { choices: g });
  }, h = (p, g) => {
    let y = [...i];
    g ? y.includes(p) || y.push(p) : y = y.filter((m) => m !== p), n(e.id, { checked: y.length > 0 ? y : void 0 });
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("question"),
        value: e.question || "",
        onChange: (p) => n(e.id, { question: p.target.value })
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx(
        M,
        {
          label: t("name_id"),
          value: e.name || "",
          onChange: l,
          className: `w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${a ? "border-gray-300" : "border-red-500"}`
        }
      ),
      !a && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-red-600 mt-1", children: t("name_in_use") })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-gray-50/50 space-y-4", children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-600 uppercase tracking-wider", children: t("picture_options") }),
      /* @__PURE__ */ d.jsx(ee, { label: t("allow_multiple_selections"), checked: e.multiple || !1, onChange: (p) => n(e.id, { multiple: p.target.checked }) }),
      /* @__PURE__ */ d.jsx(ee, { label: t("supersize_pictures"), checked: e.supersize || !1, onChange: (p) => n(e.id, { supersize: p.target.checked }) }),
      /* @__PURE__ */ d.jsx(ee, { label: t("hide_text_labels"), checked: e.hideLabels || !1, onChange: (p) => n(e.id, { hideLabels: p.target.checked }) }),
      /* @__PURE__ */ d.jsx(ee, { label: t("hide_form_text"), description: t("hide_form_text_description"), checked: e.hideFormText || !1, onChange: (p) => n(e.id, { hideFormText: p.target.checked }) })
    ] }),
    e.multiple && /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("default_selections") }),
      /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 p-3 border rounded-md bg-white", children: [
        s.map((p, g) => /* @__PURE__ */ d.jsx(ee, { label: p.label || t("option_n", { index: g + 1 }), checked: i.includes(p.value), onChange: (y) => h(p.value, y.target.checked) }, g)),
        s.length === 0 && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-400", children: t("add_choices_to_set_defaults") })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("choices") }),
      /* @__PURE__ */ d.jsxs("div", { className: "space-y-3", children: [
        s.map((p, g) => /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg space-y-2 bg-white relative", children: [
          /* @__PURE__ */ d.jsx("button", { onClick: () => f(g), className: "absolute top-2 right-2 text-gray-400 hover:text-red-500", children: /* @__PURE__ */ d.jsx(cn, { size: 16 }) }),
          /* @__PURE__ */ d.jsx(M, { label: t("label"), value: p.label, onChange: (y) => c(g, "label", y.target.value) }),
          /* @__PURE__ */ d.jsx(M, { label: t("value"), value: p.value, onChange: (y) => c(g, "value", y.target.value) }),
          /* @__PURE__ */ d.jsx(M, { label: t("image_url"), value: p.image, onChange: (y) => c(g, "image", y.target.value) })
        ] }, g)),
        /* @__PURE__ */ d.jsxs("button", { onClick: u, className: "flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 pt-2", children: [
          /* @__PURE__ */ d.jsx(ls, { size: 16 }),
          t("add_picture_option")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx(ar, { element: e }),
    /* @__PURE__ */ d.jsx(or, { element: e })
  ] });
}, Lh = ({ element: e }) => {
  const { t } = me(), n = q((o) => o.updateElement), r = e.items || [], s = (o, l) => {
    const c = [...r];
    c[o] = l, n(e.id, { items: c });
  }, i = () => {
    const o = [...r, `New Item ${r.length + 1}`];
    n(e.id, { items: o });
  }, a = (o) => {
    const l = [...r];
    l.splice(o, 1), n(e.id, { items: l.length > 0 ? l : void 0 });
  };
  return /* @__PURE__ */ d.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: t("list_items") }),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-2 p-3 border rounded-lg bg-gray-50/50", children: [
      r.map((o, l) => /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ d.jsx(
          "input",
          {
            type: "text",
            value: o,
            onChange: (c) => s(l, c.target.value),
            className: "flex-grow p-2 border border-gray-300 rounded-md shadow-sm",
            placeholder: t("item_n", { index: l + 1 })
          }
        ),
        /* @__PURE__ */ d.jsx("button", { onClick: () => a(l), className: "text-gray-400 hover:text-red-500", children: /* @__PURE__ */ d.jsx(cn, { size: 16 }) })
      ] }, l)),
      /* @__PURE__ */ d.jsxs("button", { onClick: i, className: "flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800", children: [
        /* @__PURE__ */ d.jsx(ls, { size: 16 }),
        t("add_item")
      ] })
    ] })
  ] }) });
}, Rh = ({ element: e }) => {
  const { t } = me(), n = q((i) => i.updateElement), r = (i) => {
    n(e.id, { content: i.target.value });
  }, s = (i) => {
    const a = { ...e.options, language: i.target.value };
    n(e.id, { options: a });
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: t("code_content") }),
      /* @__PURE__ */ d.jsx(
        "textarea",
        {
          value: e.content || "",
          onChange: r,
          rows: 6,
          className: "w-full p-2 border border-gray-300 rounded-md shadow-sm font-mono text-sm focus:ring-blue-500 focus:border-blue-500",
          placeholder: "console.log('Hello, World!');"
        }
      )
    ] }),
    /* @__PURE__ */ d.jsx(
      M,
      {
        label: t("language"),
        value: e.options?.language || "",
        onChange: s,
        placeholder: "e.g., javascript",
        description: t("syntax_highlighting_hint")
      }
    )
  ] });
}, Se = ({ label: e, description: t, children: n, ...r }) => /* @__PURE__ */ d.jsxs("div", { children: [
  /* @__PURE__ */ d.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: e }),
  /* @__PURE__ */ d.jsx(
    "select",
    {
      ...r,
      className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",
      children: n
    }
  ),
  t && /* @__PURE__ */ d.jsx("p", { className: "text-xs text-gray-500 mt-1", children: t })
] }), Er = () => {
  const { t: e } = me(), t = q((u) => u.formDefinition), n = q((u) => u.updateFormSettings), r = q((u) => u.toggleStartSlide), s = q((u) => u.toggleEndSlide), [i, a] = W("general"), o = (u, f) => {
    const h = f === "" || f === !1 ? void 0 : f, p = { ...t.options, [u]: h };
    n({ options: p });
  }, l = (u, f) => {
    const h = f === "" || f === !1 ? void 0 : f;
    n({ [u]: h });
  }, c = ({ tab: u, label: f }) => /* @__PURE__ */ d.jsx(
    "button",
    {
      onClick: () => a(u),
      className: `px-3 py-1 text-xs font-medium rounded-md ${i === u ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
      children: f
    }
  );
  return /* @__PURE__ */ d.jsx("aside", { className: "w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto", children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("h2", { className: "text-lg font-semibold mb-4", children: e("form_settings") }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-4 border-b pb-2", children: [
      /* @__PURE__ */ d.jsx(c, { tab: "general", label: e("general") }),
      /* @__PURE__ */ d.jsx(c, { tab: "appearance", label: e("appearance") }),
      /* @__PURE__ */ d.jsx(c, { tab: "behavior", label: e("behavior") }),
      /* @__PURE__ */ d.jsx(c, { tab: "submission", label: e("submission") }),
      /* @__PURE__ */ d.jsx(c, { tab: "advanced", label: e("advanced") })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
      i === "general" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
        /* @__PURE__ */ d.jsx(M, { label: e("form_id"), value: t.settings.id || "", onChange: (u) => l("id", u.target.value) }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("text_direction"), value: t.settings.dir || "ltr", onChange: (u) => l("dir", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "ltr", children: e("ltr") }),
          /* @__PURE__ */ d.jsx("option", { value: "rtl", children: e("rtl") })
        ] }),
        /* @__PURE__ */ d.jsx(M, { label: e("language_localization"), value: t.settings.localization || "", onChange: (u) => l("localization", u.target.value), placeholder: "en" }),
        /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-white space-y-3", children: [
          /* @__PURE__ */ d.jsx(
            ee,
            {
              label: e("add_welcome_slide"),
              description: e("introductory_slide"),
              checked: !!t.startSlide,
              onChange: (u) => r(u.target.checked)
            }
          ),
          /* @__PURE__ */ d.jsx(
            ee,
            {
              label: e("add_end_slide"),
              description: e("final_thank_you_slide"),
              checked: !!t.endSlide,
              onChange: (u) => s(u.target.checked)
            }
          )
        ] }),
        /* @__PURE__ */ d.jsx("div", { className: "p-3 border rounded-lg bg-white space-y-3", children: /* @__PURE__ */ d.jsx(
          ee,
          {
            label: e("enable_auto_correction"),
            description: e("exam_mode_description"),
            checked: !!t.settings.isAutoSolvable,
            onChange: (u) => l("isAutoSolvable", u.target.checked)
          }
        ) })
      ] }),
      i === "appearance" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
        /* @__PURE__ */ d.jsxs(Se, { label: e("form_style"), value: t.settings.formStyle || "", onChange: (u) => l("formStyle", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default") }),
          /* @__PURE__ */ d.jsx("option", { value: "classic", children: e("classic") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("font_size"), value: t.settings.fontSize || "", onChange: (u) => l("fontSize", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default") }),
          /* @__PURE__ */ d.jsx("option", { value: "sm", children: e("small") }),
          /* @__PURE__ */ d.jsx("option", { value: "lg", children: e("large") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("global_field_size"), value: t.settings.fieldSize || "", onChange: (u) => l("fieldSize", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default") }),
          /* @__PURE__ */ d.jsx("option", { value: "sm", children: e("small") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("global_label_style"), value: t.settings.labelStyle || "", onChange: (u) => l("labelStyle", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default") }),
          /* @__PURE__ */ d.jsx("option", { value: "classic", children: e("classic") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("rounding_style"), value: t.settings.rounded || "", onChange: (u) => l("rounded", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default") }),
          /* @__PURE__ */ d.jsx("option", { value: "none", children: e("none") }),
          /* @__PURE__ */ d.jsx("option", { value: "pill", children: e("pill") })
        ] }),
        /* @__PURE__ */ d.jsx(ee, { label: e("anchored_headings"), checked: t.settings.headings === "anchored", onChange: (u) => l("headings", u.target.checked ? "anchored" : void 0) })
      ] }),
      i === "behavior" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
        /* @__PURE__ */ d.jsxs(Se, { label: e("page_layout"), value: t.settings.page || "form-slides", onChange: (u) => l("page", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "form-slides", children: e("form_slides") }),
          /* @__PURE__ */ d.jsx("option", { value: "slides", children: e("slides") }),
          /* @__PURE__ */ d.jsx("option", { value: "single", children: e("single_page") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("page_progress_bar"), value: t.settings.pageProgress || "", onChange: (u) => l("pageProgress", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default_show") }),
          /* @__PURE__ */ d.jsx("option", { value: "hide", children: e("hide") }),
          /* @__PURE__ */ d.jsx("option", { value: "decorative", children: e("decorative") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("slide_controls"), value: t.settings.slideControls || "", onChange: (u) => l("slideControls", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default_show") }),
          /* @__PURE__ */ d.jsx("option", { value: "hide", children: e("hide") })
        ] }),
        /* @__PURE__ */ d.jsx(ee, { label: e("autofocus_first_field"), checked: t.settings.autofocus === "all-slides", onChange: (u) => l("autofocus", u.target.checked ? "all-slides" : void 0) }),
        /* @__PURE__ */ d.jsx(ee, { label: e("show_restart_button"), checked: t.settings.restartButton === "show", onChange: (u) => l("restartButton", u.target.checked ? "show" : void 0) }),
        /* @__PURE__ */ d.jsx(ee, { label: e("save_state_in_browser"), description: e("runtime_option"), checked: t.options.saveState !== !1, onChange: (u) => o("saveState", u.target.checked) })
      ] }),
      i === "submission" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
        /* @__PURE__ */ d.jsx(M, { label: e("submission_url"), value: t.settings.postUrl || "", onChange: (u) => l("postUrl", u.target.value) }),
        /* @__PURE__ */ d.jsx(M, { label: e("submit_button_text"), value: t.settings.submitButtonText || "", onChange: (u) => l("submitButtonText", u.target.value), placeholder: e("submit") }),
        /* @__PURE__ */ d.jsx(M, { label: e("google_sheet_name"), value: t.settings.postSheetName || "", onChange: (u) => l("postSheetName", u.target.value), description: e("google_sheets_integration") })
      ] }),
      i === "advanced" && /* @__PURE__ */ d.jsxs("div", { className: "space-y-4 animate-fade-in", children: [
        /* @__PURE__ */ d.jsxs(Se, { label: e("formsmd_branding"), value: t.settings.formsmdBranding || "", onChange: (u) => l("formsmdBranding", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default_show") }),
          /* @__PURE__ */ d.jsx("option", { value: "hide", children: e("hide_pro") })
        ] }),
        /* @__PURE__ */ d.jsxs(Se, { label: e("footer"), value: t.settings.footer || "", onChange: (u) => l("footer", u.target.value), children: [
          /* @__PURE__ */ d.jsx("option", { value: "", children: e("default_show") }),
          /* @__PURE__ */ d.jsx("option", { value: "hide", children: e("hide_pro") })
        ] }),
        /* @__PURE__ */ d.jsx(M, { label: e("css_prefix"), value: t.settings.cssPrefix || "", onChange: (u) => l("cssPrefix", u.target.value), placeholder: "fmd-" })
      ] })
    ] })
  ] }) });
}, $h = ({ slide: e, slideIndex: t }) => {
  const { t: n } = me(), r = q((o) => o.updateSlideSettings), s = e.slideOptions || {}, i = (o, l) => {
    const c = l === "" ? void 0 : l;
    r(t, { [o]: c });
  }, a = () => t === "start" ? n("start_slide_settings") : t === "end" ? n("end_slide_settings") : n("slide_settings", { number: t + 1 });
  return /* @__PURE__ */ d.jsx("aside", { className: "w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto", children: /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("h2", { className: "text-lg font-semibold mb-4", children: a() }),
    /* @__PURE__ */ d.jsxs("div", { className: "space-y-4", children: [
      typeof t == "number" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-white space-y-4", children: [
        /* @__PURE__ */ d.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: n("logic_progress") }),
        /* @__PURE__ */ d.jsx(
          M,
          {
            label: n("jump_condition"),
            value: s.jumpCondition || "",
            onChange: (o) => i("jumpCondition", o.target.value),
            description: n("jump_condition_placeholder")
          }
        ),
        /* @__PURE__ */ d.jsx(
          M,
          {
            label: n("page_progress"),
            value: s.pageProgress || "",
            onChange: (o) => i("pageProgress", o.target.value),
            description: n("page_progress_placeholder")
          }
        ),
        /* @__PURE__ */ d.jsxs(
          Se,
          {
            label: n("button_alignment"),
            value: s.buttonAlignment || "",
            onChange: (o) => i("buttonAlignment", o.target.value),
            children: [
              /* @__PURE__ */ d.jsx("option", { value: "", children: n("default") }),
              /* @__PURE__ */ d.jsx("option", { value: "start", children: n("start") }),
              /* @__PURE__ */ d.jsx("option", { value: "center", children: n("center") }),
              /* @__PURE__ */ d.jsx("option", { value: "end", children: n("end") }),
              /* @__PURE__ */ d.jsx("option", { value: "stretch", children: n("stretch") })
            ]
          }
        ),
        /* @__PURE__ */ d.jsx(
          ee,
          {
            label: n("partial_post"),
            description: n("partial_post_description"),
            checked: s.post || !1,
            onChange: (o) => i("post", o.target.checked)
          }
        ),
        /* @__PURE__ */ d.jsx(
          ee,
          {
            label: n("disable_previous_button"),
            checked: s.disablePrevious || !1,
            onChange: (o) => i("disablePrevious", o.target.checked)
          }
        )
      ] }),
      t === "start" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-white space-y-4", children: [
        /* @__PURE__ */ d.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: n("start_slide_options") }),
        /* @__PURE__ */ d.jsx(
          M,
          {
            label: n("button_text"),
            value: s.buttonText || "",
            onChange: (o) => i("buttonText", o.target.value),
            placeholder: n("start")
          }
        ),
        /* @__PURE__ */ d.jsxs(
          Se,
          {
            label: n("button_alignment"),
            value: s.buttonAlignment || "",
            onChange: (o) => i("buttonAlignment", o.target.value),
            children: [
              /* @__PURE__ */ d.jsx("option", { value: "", children: n("default") }),
              /* @__PURE__ */ d.jsx("option", { value: "start", children: n("start") }),
              /* @__PURE__ */ d.jsx("option", { value: "center", children: n("center") }),
              /* @__PURE__ */ d.jsx("option", { value: "end", children: n("end") }),
              /* @__PURE__ */ d.jsx("option", { value: "stretch", children: n("stretch") })
            ]
          }
        )
      ] }),
      t === "end" && /* @__PURE__ */ d.jsxs("div", { className: "p-3 border rounded-lg bg-white space-y-4", children: [
        /* @__PURE__ */ d.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: n("end_slide_options") }),
        /* @__PURE__ */ d.jsx(
          M,
          {
            label: n("redirect_url"),
            value: s.redirectUrl || "",
            onChange: (o) => i("redirectUrl", o.target.value),
            placeholder: n("redirect_url_placeholder")
          }
        )
      ] })
    ] })
  ] }) });
}, Dh = ({ selectedElement: e }) => {
  const { t } = me(), n = (r) => {
    switch (r.type) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "p":
      case "blockquote":
        return /* @__PURE__ */ d.jsx(jh, { element: r });
      case "ul":
      case "ol":
        return /* @__PURE__ */ d.jsx(Lh, { element: r });
      case "code":
        return /* @__PURE__ */ d.jsx(Rh, { element: r });
      case "email":
      case "text":
      case "textarea":
      case "password":
      case "url":
      case "tel":
      case "number":
      case "date":
      case "time":
      case "datetime":
      case "file":
        return /* @__PURE__ */ d.jsx(Nh, { element: r });
      case "select":
      case "choice":
        return /* @__PURE__ */ d.jsx(_h, { element: r });
      case "pictureChoice":
        return /* @__PURE__ */ d.jsx(Eh, { element: r });
      case "rating":
      case "opinionScale":
        return /* @__PURE__ */ d.jsx(Oh, { element: r });
      default:
        return /* @__PURE__ */ d.jsx("p", { className: "text-sm text-gray-500", children: /* @__PURE__ */ d.jsx(al, { i18nKey: "no_properties_editor", values: { type: r.type }, components: [/* @__PURE__ */ d.jsx("span", { className: "font-semibold" })] }) });
    }
  };
  return /* @__PURE__ */ d.jsxs("aside", { className: "w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto", children: [
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h2", { className: "text-lg font-semibold mb-2", children: t("element_properties") }),
      /* @__PURE__ */ d.jsxs("div", { className: "text-sm bg-gray-200 p-2 rounded-md", children: [
        /* @__PURE__ */ d.jsxs("p", { className: "flex justify-between", children: [
          /* @__PURE__ */ d.jsx("span", { className: "font-semibold", children: t("id") }),
          " ",
          /* @__PURE__ */ d.jsx("span", { className: "text-gray-600 truncate ml-2", children: e.id })
        ] }),
        /* @__PURE__ */ d.jsxs("p", { className: "flex justify-between", children: [
          /* @__PURE__ */ d.jsx("span", { className: "font-semibold", children: t("type") }),
          " ",
          /* @__PURE__ */ d.jsx("span", { className: "text-gray-600", children: e.type })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "flex-1", children: n(e) })
  ] });
}, Ah = () => {
  const e = q((r) => r.selectedElementId), t = q((r) => r.selectedSlideIndex), n = q((r) => r.formDefinition);
  if (e) {
    const r = [
      ...n.startSlide?.elements ?? [],
      ...n.slides.flatMap((s) => s.elements),
      ...n.endSlide?.elements ?? []
    ].find((s) => s.id === e);
    return r ? /* @__PURE__ */ d.jsx(Dh, { selectedElement: r }) : /* @__PURE__ */ d.jsx(Er, {});
  }
  if (t !== null) {
    let r;
    return t === "start" ? r = n.startSlide ?? { elements: [] } : t === "end" ? r = n.endSlide ?? { elements: [] } : r = n.slides[t], r ? /* @__PURE__ */ d.jsx($h, { slide: r, slideIndex: t }) : /* @__PURE__ */ d.jsx(Er, {});
  }
  return /* @__PURE__ */ d.jsx(Er, {});
}, le = ({ type: e, label: t, icon: n }) => {
  const { attributes: r, listeners: s, setNodeRef: i } = ba({
    id: e,
    data: {
      isToolboxElement: !0
    }
  });
  return /* @__PURE__ */ d.jsx("div", { ref: i, ...s, ...r, children: /* @__PURE__ */ d.jsx(Ph, { label: t, icon: n }) });
}, Th = () => {
  const { t: e } = me();
  return /* @__PURE__ */ d.jsx("aside", { className: "w-64 bg-gray-100 p-4 border-r overflow-y-auto", children: /* @__PURE__ */ d.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e("toolbox_content") }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ d.jsx(le, { type: "heading", label: e("toolbox_heading"), icon: /* @__PURE__ */ d.jsx(Aa, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "p", label: e("toolbox_paragraph"), icon: /* @__PURE__ */ d.jsx(Ia, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "hr", label: e("toolbox_divider"), icon: /* @__PURE__ */ d.jsx(gd, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "blockquote", label: e("toolbox_quote"), icon: /* @__PURE__ */ d.jsx(hd, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "ul", label: e("toolbox_list"), icon: /* @__PURE__ */ d.jsx(ud, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "ol", label: e("toolbox_ordered_list"), icon: /* @__PURE__ */ d.jsx(ld, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "code", label: e("toolbox_code_block"), icon: /* @__PURE__ */ d.jsx(Bu, { size: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e("toolbox_inputs") }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ d.jsx(le, { type: "text", label: e("toolbox_text"), icon: /* @__PURE__ */ d.jsx(Yt, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "textarea", label: e("toolbox_text_area"), icon: /* @__PURE__ */ d.jsx(Yt, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "email", label: e("toolbox_email"), icon: /* @__PURE__ */ d.jsx(cs, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "password", label: e("toolbox_password"), icon: /* @__PURE__ */ d.jsx(Ta, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "number", label: e("toolbox_number"), icon: /* @__PURE__ */ d.jsx(Da, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "url", label: e("toolbox_url"), icon: /* @__PURE__ */ d.jsx($a, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "tel", label: e("toolbox_telephone"), icon: /* @__PURE__ */ d.jsx(Pa, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "date", label: e("toolbox_date"), icon: /* @__PURE__ */ d.jsx(Tn, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "time", label: e("toolbox_time"), icon: /* @__PURE__ */ d.jsx(La, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "datetime", label: e("toolbox_datetime"), icon: /* @__PURE__ */ d.jsx(Tn, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "file", label: e("toolbox_file_upload"), icon: /* @__PURE__ */ d.jsx(Ra, { size: 20 }) })
      ] })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { children: [
      /* @__PURE__ */ d.jsx("h3", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2", children: e("toolbox_choice_inputs") }),
      /* @__PURE__ */ d.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
        /* @__PURE__ */ d.jsx(le, { type: "select", label: e("toolbox_select_box"), icon: /* @__PURE__ */ d.jsx(St, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "choice", label: e("toolbox_choice"), icon: /* @__PURE__ */ d.jsx(Nd, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "pictureChoice", label: e("toolbox_picture_choice"), icon: /* @__PURE__ */ d.jsx(id, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "rating", label: e("toolbox_rating"), icon: /* @__PURE__ */ d.jsx(Ma, { size: 20 }) }),
        /* @__PURE__ */ d.jsx(le, { type: "opinionScale", label: e("toolbox_opinion_scale"), icon: /* @__PURE__ */ d.jsx(St, { size: 20 }) })
      ] })
    ] })
  ] }) });
}, Ph = ({ label: e, icon: t }) => /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg cursor-grab text-sm text-center text-gray-700", children: [
  t,
  /* @__PURE__ */ d.jsx("span", { className: "mt-1", children: e })
] }), Ih = ["text", "number", "select", "choice", "date", "time"], Mh = [
  "text",
  "textarea",
  "email",
  "password",
  "number",
  "url",
  "tel",
  "date",
  "time",
  "datetime",
  "select",
  "choice",
  "pictureChoice",
  "rating",
  "opinionScale",
  "file"
], zh = (e) => {
  const t = [];
  if (!e.settings.isAutoSolvable)
    return [];
  const n = [
    ...e.startSlide?.elements ?? [],
    ...e.slides.flatMap((r) => r.elements),
    ...e.endSlide?.elements ?? []
  ];
  for (const r of n)
    if (Mh.includes(r.type)) {
      if (!Ih.includes(r.type)) {
        t.push({
          elementId: r.id,
          message: `Invalid Type: The '${r.type}' input is not supported in auto-correction mode.`
        });
        continue;
      }
      (r.score === void 0 || r.score === null || String(r.score).trim() === "") && t.push({
        elementId: r.id,
        message: "Score is required for auto-correction."
      }), (r.answer === void 0 || Array.isArray(r.answer) && r.answer.length === 0) && t.push({
        elementId: r.id,
        message: "A correct answer is required for auto-correction."
      });
    }
  return t;
}, Fh = () => {
  const e = q((n) => n.formDefinition), t = q((n) => n.setExamValidationErrors);
  return F(() => {
    const n = zh(e);
    t(n);
  }, [e, t]), /* @__PURE__ */ d.jsxs("div", { className: "flex h-full w-full bg-white", children: [
    /* @__PURE__ */ d.jsx(Th, {}),
    /* @__PURE__ */ d.jsx(Sh, {}),
    /* @__PURE__ */ d.jsx(Ah, {})
  ] });
}, Vh = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class Un {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || Vh, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, s) {
    return s && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Un(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Un(this.logger, t);
  }
}
var ze = new Un();
class lr {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const s = this.observers[r].get(n) || 0;
      this.observers[r].set(n, s + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((i) => {
      let [a, o] = i;
      for (let l = 0; l < o; l++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [a, o] = i;
      for (let l = 0; l < o; l++)
        a.apply(a, [t, ...r]);
    });
  }
}
function Mt() {
  let e, t;
  const n = new Promise((r, s) => {
    e = r, t = s;
  });
  return n.resolve = e, n.reject = t, n;
}
function ki(e) {
  return e == null ? "" : "" + e;
}
function qh(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const Uh = /###/g;
function Kt(e, t, n) {
  function r(o) {
    return o && o.indexOf("###") > -1 ? o.replace(Uh, ".") : o;
  }
  function s() {
    return !e || typeof e == "string";
  }
  const i = typeof t != "string" ? t : t.split(".");
  let a = 0;
  for (; a < i.length - 1; ) {
    if (s()) return {};
    const o = r(i[a]);
    !e[o] && n && (e[o] = new n()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {}, ++a;
  }
  return s() ? {} : {
    obj: e,
    k: r(i[a])
  };
}
function Ni(e, t, n) {
  const {
    obj: r,
    k: s
  } = Kt(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[s] = n;
    return;
  }
  let i = t[t.length - 1], a = t.slice(0, t.length - 1), o = Kt(e, a, Object);
  for (; o.obj === void 0 && a.length; )
    i = `${a[a.length - 1]}.${i}`, a = a.slice(0, a.length - 1), o = Kt(e, a, Object), o && o.obj && typeof o.obj[`${o.k}.${i}`] < "u" && (o.obj = void 0);
  o.obj[`${o.k}.${i}`] = n;
}
function Hh(e, t, n, r) {
  const {
    obj: s,
    k: i
  } = Kt(e, t, Object);
  s[i] = s[i] || [], s[i].push(n);
}
function Hn(e, t) {
  const {
    obj: n,
    k: r
  } = Kt(e, t);
  if (n)
    return n[r];
}
function Bh(e, t, n) {
  const r = Hn(e, n);
  return r !== void 0 ? r : Hn(t, n);
}
function uo(e, t, n) {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : uo(e[r], t[r], n) : e[r] = t[r]);
  return e;
}
function xt(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var Kh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
function Wh(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => Kh[t]) : e;
}
class Jh {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const Xh = [" ", ",", "?", "!", ";"], Yh = new Jh(20);
function Gh(e, t, n) {
  t = t || "", n = n || "";
  const r = Xh.filter((a) => t.indexOf(a) < 0 && n.indexOf(a) < 0);
  if (r.length === 0) return !0;
  const s = Yh.getRegExp(`(${r.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let i = !s.test(e);
  if (!i) {
    const a = e.indexOf(n);
    a > 0 && !s.test(e.substring(0, a)) && (i = !0);
  }
  return i;
}
function Xr(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let s = e;
  for (let i = 0; i < r.length; ) {
    if (!s || typeof s != "object")
      return;
    let a, o = "";
    for (let l = i; l < r.length; ++l)
      if (l !== i && (o += n), o += r[l], a = s[o], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < r.length - 1)
          continue;
        i += l - i + 1;
        break;
      }
    s = a;
  }
  return s;
}
function Bn(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class _i extends lr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, a = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let o;
    t.indexOf(".") > -1 ? o = t.split(".") : (o = [t, n], r && (Array.isArray(r) ? o.push(...r) : typeof r == "string" && i ? o.push(...r.split(i)) : o.push(r)));
    const l = Hn(this.data, o);
    return !l && !n && !r && t.indexOf(".") > -1 && (t = o[0], n = o[1], r = o.slice(2).join(".")), l || !a || typeof r != "string" ? l : Xr(this.data && this.data[t] && this.data[t][n], r, i);
  }
  addResource(t, n, r, s) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let o = [t, n];
    r && (o = o.concat(a ? r.split(a) : r)), t.indexOf(".") > -1 && (o = t.split("."), s = n, n = o[1]), this.addNamespaces(n), Ni(this.data, o, s), i.silent || this.emit("added", t, n, r, s);
  }
  addResources(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const i in r)
      (typeof r[i] == "string" || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], {
        silent: !0
      });
    s.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, s, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, o = [t, n];
    t.indexOf(".") > -1 && (o = t.split("."), s = r, r = n, n = o[1]), this.addNamespaces(n);
    let l = Hn(this.data, o) || {};
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))), s ? uo(l, r, i) : l = {
      ...l,
      ...r
    }, Ni(this.data, o, l), a.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((r) => n[r] && Object.keys(n[r]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var fo = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, s) {
    return e.forEach((i) => {
      this.processors[i] && (t = this.processors[i].process(t, n, r, s));
    }), t;
  }
};
const Ci = {};
class Kn extends lr {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), qh(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = ze.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const a = r && t.indexOf(r) > -1, o = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Gh(t, r, s);
    if (a && !o) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0)
        return {
          key: t,
          namespaces: i
        };
      const c = t.split(r);
      (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), t = c.join(s);
    }
    return typeof i == "string" && (i = [i]), {
      key: t,
      namespaces: i
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const s = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: a,
      namespaces: o
    } = this.extractFromKey(t[t.length - 1], n), l = o[o.length - 1], c = n.lng || this.language, u = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (u) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${l}${S}${a}`,
          usedKey: a,
          exactUsedKey: a,
          usedLng: c,
          usedNS: l,
          usedParams: this.getUsedParamsDetails(n)
        } : `${l}${S}${a}`;
      }
      return s ? {
        res: a,
        usedKey: a,
        exactUsedKey: a,
        usedLng: c,
        usedNS: l,
        usedParams: this.getUsedParamsDetails(n)
      } : a;
    }
    const f = this.resolve(t, n);
    let h = f && f.res;
    const p = f && f.usedKey || a, g = f && f.exactUsedKey || a, y = Object.prototype.toString.apply(h), m = ["[object Number]", "[object Function]", "[object RegExp]"], v = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, w = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (w && h && typeof h != "string" && typeof h != "boolean" && typeof h != "number" && m.indexOf(y) < 0 && !(typeof v == "string" && Array.isArray(h))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const S = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, h, {
          ...n,
          ns: o
        }) : `key '${a} (${this.language})' returned an object instead of string.`;
        return s ? (f.res = S, f.usedParams = this.getUsedParamsDetails(n), f) : S;
      }
      if (i) {
        const S = Array.isArray(h), k = S ? [] : {}, O = S ? g : p;
        for (const N in h)
          if (Object.prototype.hasOwnProperty.call(h, N)) {
            const j = `${O}${i}${N}`;
            k[N] = this.translate(j, {
              ...n,
              joinArrays: !1,
              ns: o
            }), k[N] === j && (k[N] = h[N]);
          }
        h = k;
      }
    } else if (w && typeof v == "string" && Array.isArray(h))
      h = h.join(v), h && (h = this.extendTranslation(h, t, n, r));
    else {
      let S = !1, k = !1;
      const O = n.count !== void 0 && typeof n.count != "string", N = Kn.hasDefaultValue(n), j = O ? this.pluralResolver.getSuffix(c, n.count, n) : "", L = n.ordinal && O ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", T = O && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), $ = T && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${j}`] || n[`defaultValue${L}`] || n.defaultValue;
      !this.isValidLookup(h) && N && (S = !0, h = $), this.isValidLookup(h) || (k = !0, h = a);
      const E = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && k ? void 0 : h, I = N && $ !== h && this.options.updateMissing;
      if (k || S || I) {
        if (this.logger.log(I ? "updateKey" : "missingKey", c, l, a, I ? $ : h), i) {
          const A = this.resolve(a, {
            ...n,
            keySeparator: !1
          });
          A && A.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let K = [];
        const H = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && H && H[0])
          for (let A = 0; A < H.length; A++)
            K.push(H[A]);
        else this.options.saveMissingTo === "all" ? K = this.languageUtils.toResolveHierarchy(n.lng || this.language) : K.push(n.lng || this.language);
        const ae = (A, B, ne) => {
          const re = N && ne !== h ? ne : E;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(A, l, B, re, I, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(A, l, B, re, I, n), this.emit("missingKey", A, l, B, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? K.forEach((A) => {
          const B = this.pluralResolver.getSuffixes(A, n);
          T && n[`defaultValue${this.options.pluralSeparator}zero`] && B.indexOf(`${this.options.pluralSeparator}zero`) < 0 && B.push(`${this.options.pluralSeparator}zero`), B.forEach((ne) => {
            ae([A], a + ne, n[`defaultValue${ne}`] || $);
          });
        }) : ae(K, a, $));
      }
      h = this.extendTranslation(h, t, n, f, r), k && h === a && this.options.appendNamespaceToMissingKey && (h = `${l}:${a}`), (k || S) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, S ? h : void 0) : h = this.options.parseMissingKeyHandler(h));
    }
    return s ? (f.res = h, f.usedParams = this.getUsedParamsDetails(n), f) : h;
  }
  extendTranslation(t, n, r, s, i) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let u;
      if (c) {
        const h = t.match(this.interpolator.nestingRegexp);
        u = h && h.length;
      }
      let f = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (f = {
        ...this.options.interpolation.defaultVariables,
        ...f
      }), t = this.interpolator.interpolate(t, f, r.lng || this.language, r), c) {
        const h = t.match(this.interpolator.nestingRegexp), p = h && h.length;
        u < p && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (r.lng = s.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var h = arguments.length, p = new Array(h), g = 0; g < h; g++)
          p[g] = arguments[g];
        return i && i[0] === p[0] && !r.context ? (a.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`), null) : a.translate(...p, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const o = r.postProcess || this.options.postProcess, l = typeof o == "string" ? [o] : o;
    return t != null && l && l.length && r.applyPostProcessor !== !1 && (t = fo.handle(l, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, s, i, a, o;
    return typeof t == "string" && (t = [t]), t.forEach((l) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(l, n), u = c.key;
      s = u;
      let f = c.namespaces;
      this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
      const h = n.count !== void 0 && typeof n.count != "string", p = h && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), g = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", y = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      f.forEach((m) => {
        this.isValidLookup(r) || (o = m, !Ci[`${y[0]}-${m}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (Ci[`${y[0]}-${m}`] = !0, this.logger.warn(`key "${s}" for languages "${y.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), y.forEach((v) => {
          if (this.isValidLookup(r)) return;
          a = v;
          const w = [u];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(w, u, v, m, n);
          else {
            let k;
            h && (k = this.pluralResolver.getSuffix(v, n.count, n));
            const O = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (h && (w.push(u + k), n.ordinal && k.indexOf(N) === 0 && w.push(u + k.replace(N, this.options.pluralSeparator)), p && w.push(u + O)), g) {
              const j = `${u}${this.options.contextSeparator}${n.context}`;
              w.push(j), h && (w.push(j + k), n.ordinal && k.indexOf(N) === 0 && w.push(j + k.replace(N, this.options.pluralSeparator)), p && w.push(j + O));
            }
          }
          let S;
          for (; S = w.pop(); )
            this.isValidLookup(r) || (i = S, r = this.getResource(v, m, S, n));
        }));
      });
    }), {
      res: r,
      usedKey: s,
      exactUsedKey: i,
      usedLng: a,
      usedNS: o
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, s) : this.resourceStore.getResource(t, n, r, s);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let s = r ? t.replace : t;
    if (r && typeof t.count < "u" && (s.count = t.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !r) {
      s = {
        ...s
      };
      for (const i of n)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
function Lr(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Oi {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = ze.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Bn(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Bn(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((s) => s.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Lr(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = Lr(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = Lr(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const s = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const s = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(s)) return n = s;
      n = this.options.supportedLngs.find((i) => {
        if (i === s || !(i.indexOf("-") < 0 && s.indexOf("-") < 0) && (i.indexOf("-") > 0 && s.indexOf("-") < 0 && i.substring(0, i.indexOf("-")) === s || i.indexOf(s) === 0 && s.length > 1))
          return i;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), s = [], i = (a) => {
      a && (this.isSupportedCode(a) ? s.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(t))) : typeof t == "string" && i(this.formatLanguageCode(t)), r.forEach((a) => {
      s.indexOf(a) < 0 && i(this.formatLanguageCode(a));
    }), s;
  }
}
let Qh = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Zh = {
  1: function(e) {
    return +(e > 1);
  },
  2: function(e) {
    return +(e != 1);
  },
  3: function(e) {
    return 0;
  },
  4: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  5: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
  },
  6: function(e) {
    return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
  },
  7: function(e) {
    return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  8: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
  },
  9: function(e) {
    return +(e >= 2);
  },
  10: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
  },
  11: function(e) {
    return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
  },
  12: function(e) {
    return +(e % 10 != 1 || e % 100 == 11);
  },
  13: function(e) {
    return +(e !== 0);
  },
  14: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
  },
  15: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
  },
  16: function(e) {
    return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
  },
  17: function(e) {
    return e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1;
  },
  18: function(e) {
    return e == 0 ? 0 : e == 1 ? 1 : 2;
  },
  19: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
  },
  20: function(e) {
    return e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
  },
  21: function(e) {
    return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
  },
  22: function(e) {
    return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
  }
};
const ep = ["v1", "v2", "v3"], tp = ["v4"], Ei = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
};
function np() {
  const e = {};
  return Qh.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: Zh[t.fc]
      };
    });
  }), e;
}
class rp {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = ze.create("pluralResolver"), (!this.options.compatibilityJSON || tp.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = np();
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Bn(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal"
        });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((s) => `${n}${s}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((s, i) => Ei[s] - Ei[i]).map((s) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : r.numbers.map((s) => this.getSuffix(t, s, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(t, r);
    return s ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : this.getSuffixRetroCompatible(s, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let s = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
    const i = () => this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? `_plural_${s.toString()}` : i() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !ep.includes(this.options.compatibilityJSON);
  }
}
function Li(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = Bh(e, t, n);
  return !i && s && typeof n == "string" && (i = Xr(e, n, r), i === void 0 && (i = Xr(t, n, r))), i;
}
class sp {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ze.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: c,
      unescapeSuffix: u,
      unescapePrefix: f,
      nestingPrefix: h,
      nestingPrefixEscaped: p,
      nestingSuffix: g,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: m,
      maxReplaces: v,
      alwaysFormat: w
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Wh, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? xt(i) : a || "{{", this.suffix = o ? xt(o) : l || "}}", this.formatSeparator = c || ",", this.unescapePrefix = u ? "" : f || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = h ? xt(h) : p || xt("$t("), this.nestingSuffix = g ? xt(g) : y || xt(")"), this.nestingOptionsSeparator = m || ",", this.maxReplaces = v || 1e3, this.alwaysFormat = w !== void 0 ? w : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, s) {
    let i, a, o;
    const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
    function c(p) {
      return p.replace(/\$/g, "$$$$");
    }
    const u = (p) => {
      if (p.indexOf(this.formatSeparator) < 0) {
        const v = Li(n, l, p, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(v, void 0, r, {
          ...s,
          ...n,
          interpolationkey: p
        }) : v;
      }
      const g = p.split(this.formatSeparator), y = g.shift().trim(), m = g.join(this.formatSeparator).trim();
      return this.format(Li(n, l, y, this.options.keySeparator, this.options.ignoreJSONStructure), m, r, {
        ...s,
        ...n,
        interpolationkey: y
      });
    };
    this.resetRegExp();
    const f = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, h = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (p) => c(p)
    }, {
      regex: this.regexp,
      safeValue: (p) => this.escapeValue ? c(this.escape(p)) : c(p)
    }].forEach((p) => {
      for (o = 0; i = p.regex.exec(t); ) {
        const g = i[1].trim();
        if (a = u(g), a === void 0)
          if (typeof f == "function") {
            const m = f(t, i, s);
            a = typeof m == "string" ? m : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, g))
            a = "";
          else if (h) {
            a = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${g} for interpolating ${t}`), a = "";
        else typeof a != "string" && !this.useRawValueToEscape && (a = ki(a));
        const y = p.safeValue(a);
        if (t = t.replace(i[0], y), h ? (p.regex.lastIndex += a.length, p.regex.lastIndex -= i[0].length) : p.regex.lastIndex = 0, o++, o >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, i, a;
    function o(l, c) {
      const u = this.nestingOptionsSeparator;
      if (l.indexOf(u) < 0) return l;
      const f = l.split(new RegExp(`${u}[ ]*{`));
      let h = `{${f[1]}`;
      l = f[0], h = this.interpolate(h, a);
      const p = h.match(/'/g), g = h.match(/"/g);
      (p && p.length % 2 === 0 && !g || g.length % 2 !== 0) && (h = h.replace(/'/g, '"'));
      try {
        a = JSON.parse(h), c && (a = {
          ...c,
          ...a
        });
      } catch (y) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, y), `${l}${u}${h}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l;
    }
    for (; s = this.nestingRegexp.exec(t); ) {
      let l = [];
      a = {
        ...r
      }, a = a.replace && typeof a.replace != "string" ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const u = s[1].split(this.formatSeparator).map((f) => f.trim());
        s[1] = u.shift(), l = u, c = !0;
      }
      if (i = n(o.call(this, s[1].trim(), a), a), i && s[0] === t && typeof i != "string") return i;
      typeof i != "string" && (i = ki(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`), i = ""), c && (i = l.reduce((u, f) => this.format(u, f, r.lng, {
        ...r,
        interpolationkey: s[1].trim()
      }), i.trim())), t = t.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
function ip(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const s = r[1].substring(0, r[1].length - 1);
    t === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : t === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach((i) => {
      if (i) {
        const [a, ...o] = i.split(":"), l = o.join(":").trim().replace(/^'+|'+$/g, ""), c = a.trim();
        n[c] || (n[c] = l), l === "false" && (n[c] = !1), l === "true" && (n[c] = !0), isNaN(l) || (n[c] = parseInt(l, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}
function bt(e) {
  const t = {};
  return function(n, r, s) {
    const i = r + JSON.stringify(s);
    let a = t[i];
    return a || (a = e(Bn(r), s), t[i] = a), a(n);
  };
}
class ap {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = ze.create("formatter"), this.options = t, this.formats = {
      number: bt((n, r) => {
        const s = new Intl.NumberFormat(n, {
          ...r
        });
        return (i) => s.format(i);
      }),
      currency: bt((n, r) => {
        const s = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (i) => s.format(i);
      }),
      datetime: bt((n, r) => {
        const s = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (i) => s.format(i);
      }),
      relativetime: bt((n, r) => {
        const s = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (i) => s.format(i, r.range || "day");
      }),
      list: bt((n, r) => {
        const s = new Intl.ListFormat(n, {
          ...r
        });
        return (i) => s.format(i);
      })
    }, this.init(t);
  }
  init(t) {
    const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = bt(n);
  }
  format(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((i, a) => {
      const {
        formatName: o,
        formatOptions: l
      } = ip(a);
      if (this.formats[o]) {
        let c = i;
        try {
          const u = s && s.formatParams && s.formatParams[s.interpolationkey] || {}, f = u.locale || u.lng || s.locale || s.lng || r;
          c = this.formats[o](i, f, {
            ...l,
            ...s,
            ...u
          });
        } catch (u) {
          this.logger.warn(u);
        }
        return c;
      } else
        this.logger.warn(`there was no format function for ${o}`);
      return i;
    }, t);
  }
}
function op(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class lp extends lr {
  constructor(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = s, this.logger = ze.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(t, n, r, s) {
    const i = {}, a = {}, o = {}, l = {};
    return t.forEach((c) => {
      let u = !0;
      n.forEach((f) => {
        const h = `${c}|${f}`;
        !r.reload && this.store.hasResourceBundle(c, f) ? this.state[h] = 2 : this.state[h] < 0 || (this.state[h] === 1 ? a[h] === void 0 && (a[h] = !0) : (this.state[h] = 1, u = !1, a[h] === void 0 && (a[h] = !0), i[h] === void 0 && (i[h] = !0), l[f] === void 0 && (l[f] = !0)));
      }), u || (o[c] = !0);
    }), (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(o),
      toLoadNamespaces: Object.keys(l)
    };
  }
  loaded(t, n, r) {
    const s = t.split("|"), i = s[0], a = s[1];
    n && this.emit("failedLoading", i, a, n), r && this.store.addResourceBundle(i, a, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2;
    const o = {};
    this.queue.forEach((l) => {
      Hh(l.loaded, [i], a), op(l, t), n && l.errors.push(n), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach((c) => {
        o[c] || (o[c] = {});
        const u = l.loaded[c];
        u.length && u.forEach((f) => {
          o[c][f] === void 0 && (o[c][f] = !0);
        });
      }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback());
    }), this.emit("loaded", o), this.queue = this.queue.filter((l) => !l.done);
  }
  read(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, a = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: s,
        wait: i,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const o = (c, u) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const f = this.waitingReads.shift();
        this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
      }
      if (c && u && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, s + 1, i * 2, a);
        }, i);
        return;
      }
      a(c, u);
    }, l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const c = l(t, n);
        c && typeof c.then == "function" ? c.then((u) => o(null, u)).catch(o) : o(null, c);
      } catch (c) {
        o(c);
      }
      return;
    }
    return l(t, n, o);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const i = this.queueLoad(t, n, r, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), s = r[0], i = r[1];
    this.read(s, i, "read", void 0, void 0, (a, o) => {
      a && this.logger.warn(`${n}loading namespace ${i} for language ${s} failed`, a), !a && o && this.logger.log(`${n}loaded namespace ${i} for language ${s}`, o), this.loaded(t, a, o);
    });
  }
  saveMissing(t, n, r, s, i) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const l = {
          ...a,
          isUpdate: i
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let u;
            c.length === 5 ? u = c(t, n, r, s, l) : u = c(t, n, r, s), u && typeof u.then == "function" ? u.then((f) => o(null, f)).catch(o) : o(null, u);
          } catch (u) {
            o(u);
          }
        else
          c(t, n, r, s, o, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, s);
    }
  }
}
function Ri() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function(e) {
      let t = {};
      if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0
    }
  };
}
function $i(e) {
  return typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e;
}
function wn() {
}
function cp(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((t) => {
    typeof e[t] == "function" && (e[t] = e[t].bind(e));
  });
}
class nn extends lr {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = $i(t), this.services = {}, this.logger = ze, this.modules = {
      external: []
    }, cp(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = Ri();
    this.options = {
      ...s,
      ...this.options,
      ...$i(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(l) {
      return l ? typeof l == "function" ? new l() : l : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? ze.init(i(this.modules.logger), this.options) : ze.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = ap);
      const c = new Oi(this.options);
      this.store = new _i(this.options.resources, this.options);
      const u = this.services;
      u.logger = ze, u.resourceStore = this.store, u.languageUtils = c, u.pluralResolver = new rp(c, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (u.formatter = i(l), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new sp(this.options), u.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, u.backendConnector = new lp(i(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function(f) {
        for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          p[g - 1] = arguments[g];
        t.emit(f, ...p);
      }), this.modules.languageDetector && (u.languageDetector = i(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = i(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new Kn(this.services, this.options), this.translator.on("*", function(f) {
        for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), g = 1; g < h; g++)
          p[g - 1] = arguments[g];
        t.emit(f, ...p);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = wn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = function() {
        return t.store[l](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = function() {
        return t.store[l](...arguments), t;
      };
    });
    const a = Mt(), o = () => {
      const l = (c, u) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(u), r(c, u);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initImmediate ? o() : setTimeout(o, 0), a;
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wn;
    const r = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (r && r.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const s = [], i = (a) => {
        !a || a === "cimode" || this.services.languageUtils.toResolveHierarchy(a).forEach((o) => {
          o !== "cimode" && s.indexOf(o) < 0 && s.push(o);
        });
      };
      r ? i(r) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((a) => i(a)), this.options.preload && this.options.preload.forEach((a) => i(a)), this.services.backendConnector.load(s, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(a);
      });
    } else
      n(null);
  }
  reloadResources(t, n, r) {
    const s = Mt();
    return t || (t = this.languages), n || (n = this.options.ns), r || (r = wn), this.services.backendConnector.reload(t, n, (i) => {
      s.resolve(), r(i);
    }), s;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && fo.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const s = Mt();
    this.emit("languageChanging", t);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, a = (l, c) => {
      c ? (i(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return r.t(...arguments);
      }), n && n(l, function() {
        return r.t(...arguments);
      });
    }, o = (l) => {
      !t && !l && this.services.languageDetector && (l = []);
      const c = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (u) => {
        a(u, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), s;
  }
  getFixedT(t, n, r) {
    var s = this;
    const i = function(a, o) {
      let l;
      if (typeof o != "object") {
        for (var c = arguments.length, u = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++)
          u[f - 2] = arguments[f];
        l = s.options.overloadTranslationOptionHandler([a, o].concat(u));
      } else
        l = {
          ...o
        };
      l.lng = l.lng || i.lng, l.lngs = l.lngs || i.lngs, l.ns = l.ns || i.ns, l.keyPrefix = l.keyPrefix || r || i.keyPrefix;
      const h = s.options.keySeparator || ".";
      let p;
      return l.keyPrefix && Array.isArray(a) ? p = a.map((g) => `${l.keyPrefix}${h}${g}`) : p = l.keyPrefix ? `${l.keyPrefix}${h}${a}` : a, s.t(p, l);
    };
    return typeof t == "string" ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const a = (o, l) => {
      const c = this.services.backendConnector.state[`${o}|${l}`];
      return c === -1 || c === 2;
    };
    if (n.precheck) {
      const o = n.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(r, t) && (!s || a(i, t)));
  }
  loadNamespaces(t, n) {
    const r = Mt();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Mt();
    typeof t == "string" && (t = [t]);
    const s = this.options.preload || [], i = t.filter((a) => s.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((a) => {
      r.resolve(), n && n(a);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new Oi(Ri());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new nn(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wn;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const s = {
      ...this.options,
      ...t,
      isClone: !0
    }, i = new nn(s);
    return (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      i[a] = this[a];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, r && (i.store = new _i(this.store.data, s), i.services.resourceStore = i.store), i.translator = new Kn(i.services, s), i.translator.on("*", function(a) {
      for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
        l[c - 1] = arguments[c];
      i.emit(a, ...l);
    }), i.init(s, n), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ge = nn.createInstance();
ge.createInstance = nn.createInstance;
ge.createInstance;
ge.dir;
ge.init;
ge.loadResources;
ge.reloadResources;
ge.use;
ge.changeLanguage;
ge.getFixedT;
ge.t;
ge.exists;
ge.setDefaultNamespace;
ge.hasLoadedNamespace;
ge.loadNamespaces;
ge.loadLanguages;
function up() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    typeof t[0] == "string" && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Di = {};
function Yr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  typeof t[0] == "string" && Di[t[0]] || (typeof t[0] == "string" && (Di[t[0]] = /* @__PURE__ */ new Date()), up(...t));
}
const ho = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
};
function Ai(e, t, n) {
  e.loadNamespaces(t, ho(e, n));
}
function Ti(e, t, n, r) {
  typeof n == "string" && (n = [n]), n.forEach((s) => {
    e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
  }), e.loadLanguages(t, ho(e, r));
}
function dp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0], s = t.options ? t.options.fallbackLng : !1, i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === "cimode") return !0;
  const a = (o, l) => {
    const c = t.services.backendConnector.state[`${o}|${l}`];
    return c === -1 || c === 2;
  };
  return n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e) ? !1 : !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || a(r, e) && (!s || a(i, e)));
}
function fp(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length ? (Yr("i18n.languages were undefined or empty", t.languages), !0) : t.options.ignoreJSONStructure !== void 0 ? t.hasLoadedNamespace(e, {
    lng: n.lng,
    precheck: (r, s) => {
      if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !s(r.isLanguageChangingTo, e)) return !1;
    }
  }) : dp(e, t, n);
}
const hp = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, pp = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, gp = (e) => pp[e], mp = (e) => e.replace(hp, gp);
let Gr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: mp
};
function yp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Gr = {
    ...Gr,
    ...e
  };
}
function xp() {
  return Gr;
}
let po;
function bp(e) {
  po = e;
}
function vp() {
  return po;
}
const wp = {
  type: "3rdParty",
  init(e) {
    yp(e.options.react), bp(e);
  }
}, Sp = ot();
class jp {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const kp = (e, t) => {
  const n = Y();
  return F(() => {
    n.current = e;
  }, [e, t]), n.current;
};
function go(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function Np(e, t, n, r) {
  return ie(go(e, t, n, r), [e, t, n, r]);
}
function lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: s
  } = Ee(Sp) || {}, i = n || r || vp();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new jp()), !i) {
    Yr("You will need to pass in an i18next instance by using initReactI18next");
    const k = (N, j) => typeof j == "string" ? j : j && typeof j == "object" && typeof j.defaultValue == "string" ? j.defaultValue : Array.isArray(N) ? N[N.length - 1] : N, O = [k, {}, !1];
    return O.t = k, O.i18n = {}, O.ready = !1, O;
  }
  i.options.react && i.options.react.wait !== void 0 && Yr("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...xp(),
    ...i.options.react,
    ...t
  }, {
    useSuspense: o,
    keyPrefix: l
  } = a;
  let c = s || i.options && i.options.defaultNS;
  c = typeof c == "string" ? [c] : c || ["translation"], i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(c);
  const u = (i.isInitialized || i.initializedStoreOnce) && c.every((k) => fp(k, i, a)), f = Np(i, t.lng || null, a.nsMode === "fallback" ? c : c[0], l), h = () => f, p = () => go(i, t.lng || null, a.nsMode === "fallback" ? c : c[0], l), [g, y] = W(h);
  let m = c.join();
  t.lng && (m = `${t.lng}${m}`);
  const v = kp(m), w = Y(!0);
  F(() => {
    const {
      bindI18n: k,
      bindI18nStore: O
    } = a;
    w.current = !0, !u && !o && (t.lng ? Ti(i, t.lng, c, () => {
      w.current && y(p);
    }) : Ai(i, c, () => {
      w.current && y(p);
    })), u && v && v !== m && w.current && y(p);
    function N() {
      w.current && y(p);
    }
    return k && i && i.on(k, N), O && i && i.store.on(O, N), () => {
      w.current = !1, k && i && k.split(" ").forEach((j) => i.off(j, N)), O && i && O.split(" ").forEach((j) => i.store.off(j, N));
    };
  }, [i, m]), F(() => {
    w.current && u && y(h);
  }, [i, l, u]);
  const S = [g, i, u];
  if (S.t = g, S.i18n = i, S.ready = u, u || !u && !o) return S;
  throw new Promise((k) => {
    t.lng ? Ti(i, t.lng, c, () => k()) : Ai(i, c, () => k());
  });
}
const {
  slice: _p,
  forEach: Cp
} = [];
function Op(e) {
  return Cp.call(_p.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const Pi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Ep = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const s = encodeURIComponent(t);
  let i = `${e}=${s}`;
  if (r.maxAge > 0) {
    const a = r.maxAge - 0;
    if (Number.isNaN(a)) throw new Error("maxAge should be a Number");
    i += `; Max-Age=${Math.floor(a)}`;
  }
  if (r.domain) {
    if (!Pi.test(r.domain))
      throw new TypeError("option domain is invalid");
    i += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!Pi.test(r.path))
      throw new TypeError("option path is invalid");
    i += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    i += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        i += "; SameSite=Strict";
        break;
      case "lax":
        i += "; SameSite=Lax";
        break;
      case "strict":
        i += "; SameSite=Strict";
        break;
      case "none":
        i += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return i;
}, Ii = {
  create(e, t, n, r) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (s.expires = /* @__PURE__ */ new Date(), s.expires.setTime(s.expires.getTime() + n * 60 * 1e3)), r && (s.domain = r), document.cookie = Ep(e, encodeURIComponent(t), s);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let s = n[r];
      for (; s.charAt(0) === " "; ) s = s.substring(1, s.length);
      if (s.indexOf(t) === 0) return s.substring(t.length, s.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var Lp = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return Ii.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: s,
      cookieOptions: i
    } = t;
    n && typeof document < "u" && Ii.create(n, e, r, s, i);
  }
}, Rp = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var t;
    let {
      lookupQuerystring: n
    } = e, r;
    if (typeof window < "u") {
      let {
        search: s
      } = window.location;
      !window.location.search && ((t = window.location.hash) == null ? void 0 : t.indexOf("?")) > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
      const i = s.substring(1).split("&");
      for (let a = 0; a < i.length; a++) {
        const o = i[a].indexOf("=");
        o > 0 && i[a].substring(0, o) === n && (r = i[a].substring(o + 1));
      }
    }
    return r;
  }
};
let zt = null;
const Mi = () => {
  if (zt !== null) return zt;
  try {
    zt = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    zt = !1;
  }
  return zt;
};
var $p = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && Mi())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && Mi() && window.localStorage.setItem(n, e);
  }
};
let Ft = null;
const zi = () => {
  if (Ft !== null) return Ft;
  try {
    Ft = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Ft = !1;
  }
  return Ft;
};
var Dp = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && zi())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && zi() && window.sessionStorage.setItem(n, e);
  }
}, Ap = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: s
      } = navigator;
      if (n)
        for (let i = 0; i < n.length; i++)
          t.push(n[i]);
      r && t.push(r), s && t.push(s);
    }
    return t.length > 0 ? t : void 0;
  }
}, Tp = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Pp = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var t;
    let {
      lookupFromPathIndex: n
    } = e;
    if (typeof window > "u") return;
    const r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(r) ? (t = r[typeof n == "number" ? n : 0]) == null ? void 0 : t.replace("/", "") : void 0;
  }
}, Ip = {
  name: "subdomain",
  lookup(e) {
    var t, n;
    let {
      lookupFromSubdomainIndex: r
    } = e;
    const s = typeof r == "number" ? r + 1 : 1, i = typeof window < "u" && ((n = (t = window.location) == null ? void 0 : t.hostname) == null ? void 0 : n.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (i)
      return i[s];
  }
};
function Mp() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class mo {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = Op(n, this.options || {}, Mp()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Lp), this.addDetector(Rp), this.addDetector($p), this.addDetector(Dp), this.addDetector(Ap), this.addDetector(Tp), this.addDetector(Pp), this.addDetector(Ip);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let s = this.detectors[r].lookup(this.options);
        s && typeof s == "string" && (s = [s]), s && (n = n.concat(s));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
mo.type = "languageDetector";
const zp = {
  en: {
    translation: {
      previous: "Previous",
      next: "Next",
      requiredField: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
      invalidUrl: "Please enter a valid URL.",
      invalidNumber: "Please enter a valid number.",
      minValue: "Value must be at least {{min}}.",
      maxValue: "Value must be no more than {{max}}.",
      patternMismatch: "The input does not match the required pattern.",
      reviewAnswers: "Review Your Answers",
      reviewInstructions: "Please check your answers below before submitting.",
      editAnswers: "Edit Answers",
      submit: "Confirm & Submit",
      submitting: "Submitting...",
      results: "Results",
      totalScore: "Total Score",
      yourAnswer: "Your Answer:",
      notAnswered: "Not answered",
      correctAnswer: "Correct Answer:",
      explanation: "EXPLANATION",
      chooseAsMany: "Choose as many as you like.",
      chooseFile: "Choose File",
      fileTooLarge: "File is too large. Max size is {{size}}MB.",
      invalidFileType: "Only image files are allowed.",
      disagree: "Disagree",
      agree: "Agree"
    }
  },
  fr: {
    translation: {
      previous: "Précédent",
      next: "Suivant",
      requiredField: "Ce champ est obligatoire.",
      invalidEmail: "Veuillez saisir une adresse e-mail valide.",
      invalidUrl: "Veuillez saisir une URL valide.",
      invalidNumber: "Veuillez saisir un nombre valide.",
      minValue: "La valeur doit être au moins de {{min}}.",
      maxValue: "La valeur ne doit pas dépasser {{max}}.",
      patternMismatch: "L'entrée ne correspond pas au format requis.",
      reviewAnswers: "Vérifiez vos réponses",
      reviewInstructions: "Veuillez vérifier vos réponses ci-dessous avant de soumettre.",
      editAnswers: "Modifier les réponses",
      submit: "Confirmer et Soumettre",
      submitting: "Soumission en cours...",
      results: "Résultats",
      totalScore: "Score Total",
      yourAnswer: "Votre réponse :",
      notAnswered: "Pas de réponse",
      correctAnswer: "Bonne réponse :",
      explanation: "EXPLICATION",
      chooseAsMany: "Choisissez-en autant que vous le souhaitez.",
      chooseFile: "Choisir un fichier",
      fileTooLarge: "Le fichier est trop volumineux. La taille maximale est de {{size}}MB.",
      invalidFileType: "Seuls les fichiers image sont autorisés.",
      disagree: "Pas d'accord",
      agree: "D'accord"
    }
  },
  ar: {
    translation: {
      previous: "السابق",
      next: "التالي",
      requiredField: "هذا الحقل مطلوب.",
      invalidEmail: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
      invalidUrl: "الرجاء إدخال عنوان URL صالح.",
      invalidNumber: "الرجاء إدخال رقم صالح.",
      minValue: "يجب أن تكون القيمة {{min}} على الأقل.",
      maxValue: "يجب ألا تزيد القيمة عن {{max}}.",
      patternMismatch: "لا يتطابق الإدخال مع النمط المطلوب.",
      reviewAnswers: "مراجعة إجاباتك",
      reviewInstructions: "يرجى التحقق من إجاباتك أدناه قبل الإرسال.",
      editAnswers: "تعديل الإجابات",
      submit: "تأكيد وإرسال",
      submitting: "جارٍ الإرسال...",
      results: "النتائج",
      totalScore: "النتيجة الإجمالية",
      yourAnswer: "إجابتك:",
      notAnswered: "لم تتم الإجابة",
      correctAnswer: "الإجابة الصحيحة:",
      explanation: "الشرح",
      chooseAsMany: "اختر أي عدد تريده.",
      chooseFile: "اختر ملف",
      fileTooLarge: "الملف كبير جدًا. الحجم الأقصى هو {{size}} ميجابايت.",
      invalidFileType: "يُسمح بملفات الصور فقط.",
      disagree: "غير موافق",
      agree: "موافق"
    }
  }
};
ge.use(mo).use(wp).init({
  resources: zp,
  fallbackLng: "en",
  interpolation: {
    escapeValue: !1
    // React already safes from xss
  },
  detection: {
    order: ["queryString", "cookie", "localStorage", "navigator", "htmlTag"],
    caches: ["cookie", "localStorage"]
  }
});
var Rr = { exports: {} }, Vt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function Fp() {
  if (Fi) return Vt;
  Fi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), s.key !== void 0 && (a = "" + s.key), "key" in s) {
      i = {};
      for (var o in s)
        o !== "key" && (i[o] = s[o]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: a,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Vt.Fragment = t, Vt.jsx = n, Vt.jsxs = n, Vt;
}
var Sn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function Vp() {
  return Vi || (Vi = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(x) {
      if (x == null) return null;
      if (typeof x == "function")
        return x.$$typeof === $ ? null : x.displayName || x.name || null;
      if (typeof x == "string") return x;
      switch (x) {
        case y:
          return "Fragment";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case N:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof x == "object")
        switch (typeof x.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), x.$$typeof) {
          case g:
            return "Portal";
          case S:
            return (x.displayName || "Context") + ".Provider";
          case w:
            return (x._context.displayName || "Context") + ".Consumer";
          case k:
            var C = x.render;
            return x = x.displayName, x || (x = C.displayName || C.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
          case j:
            return C = x.displayName || null, C !== null ? C : e(x.type) || "Memo";
          case L:
            C = x._payload, x = x._init;
            try {
              return e(x(C));
            } catch {
            }
        }
      return null;
    }
    function t(x) {
      return "" + x;
    }
    function n(x) {
      try {
        t(x);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var _ = C.error, R = typeof Symbol == "function" && Symbol.toStringTag && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return _.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), t(x);
      }
    }
    function r(x) {
      if (x === y) return "<>";
      if (typeof x == "object" && x !== null && x.$$typeof === L)
        return "<...>";
      try {
        var C = e(x);
        return C ? "<" + C + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var x = E.A;
      return x === null ? null : x.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function a(x) {
      if (I.call(x, "key")) {
        var C = Object.getOwnPropertyDescriptor(x, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return x.key !== void 0;
    }
    function o(x, C) {
      function _() {
        ae || (ae = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(x, "key", {
        get: _,
        configurable: !0
      });
    }
    function l() {
      var x = e(this.type);
      return A[x] || (A[x] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), x = this.props.ref, x !== void 0 ? x : null;
    }
    function c(x, C, _, R, D, V, se, Ne) {
      return _ = V.ref, x = {
        $$typeof: p,
        type: x,
        key: C,
        props: V,
        _owner: D
      }, (_ !== void 0 ? _ : null) !== null ? Object.defineProperty(x, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(x, "ref", { enumerable: !1, value: null }), x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(x, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(x, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: se
      }), Object.defineProperty(x, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ne
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    }
    function u(x, C, _, R, D, V, se, Ne) {
      var U = C.children;
      if (U !== void 0)
        if (R)
          if (K(U)) {
            for (R = 0; R < U.length; R++)
              f(U[R]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(U);
      if (I.call(C, "key")) {
        U = e(x);
        var oe = Object.keys(C).filter(function(Fe) {
          return Fe !== "key";
        });
        R = 0 < oe.length ? "{key: someKey, " + oe.join(": ..., ") + ": ...}" : "{key: someKey}", re[U + R] || (oe = 0 < oe.length ? "{" + oe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          U,
          oe,
          U
        ), re[U + R] = !0);
      }
      if (U = null, _ !== void 0 && (n(_), U = "" + _), a(C) && (n(C.key), U = "" + C.key), "key" in C) {
        _ = {};
        for (var X in C)
          X !== "key" && (_[X] = C[X]);
      } else _ = C;
      return U && o(
        _,
        typeof x == "function" ? x.displayName || x.name || "Unknown" : x
      ), c(
        x,
        U,
        V,
        D,
        s(),
        _,
        se,
        Ne
      );
    }
    function f(x) {
      typeof x == "object" && x !== null && x.$$typeof === p && x._store && (x._store.validated = 1);
    }
    var h = G, p = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), S = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, K = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(x) {
        return x();
      }
    };
    var ae, A = {}, B = h.react_stack_bottom_frame.bind(
      h,
      i
    )(), ne = H(r(i)), re = {};
    Sn.Fragment = y, Sn.jsx = function(x, C, _, R, D) {
      var V = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        x,
        C,
        _,
        !1,
        R,
        D,
        V ? Error("react-stack-top-frame") : B,
        V ? H(r(x)) : ne
      );
    }, Sn.jsxs = function(x, C, _, R, D) {
      var V = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        x,
        C,
        _,
        !0,
        R,
        D,
        V ? Error("react-stack-top-frame") : B,
        V ? H(r(x)) : ne
      );
    };
  })()), Sn;
}
var qi;
function qp() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? Rr.exports = Fp() : Rr.exports = Vp()), Rr.exports;
}
var b = qp();
const _n = (e, t) => {
  if (!e)
    return !0;
  const n = Object.keys(t), r = Object.values(t);
  try {
    return !!new Function(...n, `"use strict"; return ${e}`)(...r);
  } catch (s) {
    return s instanceof ReferenceError || console.error("Error evaluating condition:", e, s), !1;
  }
}, He = ({ element: e, value: t, onChange: n, error: r }) => {
  var s, i;
  const a = Y(null);
  F(() => {
    e.autofocus && a.current && a.current.focus();
  }, [e.autofocus]);
  const o = e.labelStyle === "classic" || e.subfield, l = e.fieldSize === "sm", c = `block font-bold mb-1 ${o || l ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, u = `text-gray-500 dark:text-gray-400 mb-2 ${o || l ? "text-xs" : "text-sm"}`, f = `shadow appearance-none border rounded w-full py-3 px-4 bg-white text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 disabled:bg-gray-200 dark:disabled:bg-gray-600 ${l ? "text-sm" : "text-base"} ${r ? "border-red-500 focus:ring-red-500" : "dark:border-gray-600 focus:ring-blue-500"}`, h = ((s = e.attrs) == null ? void 0 : s.reduce((g, { name: y, value: m }) => ({ ...g, [y]: m }), {})) || {}, p = /* @__PURE__ */ b.jsx(
    "input",
    {
      ref: a,
      type: e.type === "text" ? "text" : e.type,
      className: f,
      value: t || e.value || "",
      onChange: (g) => n(g.target.value),
      placeholder: e.placeholder,
      required: e.required,
      disabled: e.disabled,
      maxLength: e.maxlength,
      pattern: e.pattern,
      min: e.min,
      max: e.max,
      step: e.step,
      ...h
    }
  );
  return /* @__PURE__ */ b.jsxs("div", { className: `w-full mb-4 ${(i = e.classNames) == null ? void 0 : i.join(" ")}`, id: e.id, children: [
    e.question && /* @__PURE__ */ b.jsxs("label", { className: c, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: u, children: e.description }),
    e.unit || e.unitEnd ? /* @__PURE__ */ b.jsxs("div", { className: "flex items-center", children: [
      e.unit && /* @__PURE__ */ b.jsx("span", { className: "me-2 text-gray-500 dark:text-gray-400", children: e.unit }),
      p,
      e.unitEnd && /* @__PURE__ */ b.jsx("span", { className: "ms-2 text-gray-500 dark:text-gray-400", children: e.unitEnd })
    ] }) : p,
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2", children: r })
  ] });
}, Up = ({ element: e, value: t, onChange: n, error: r }) => {
  var s, i;
  const a = Y(null);
  F(() => {
    e.autofocus && a.current && a.current.focus();
  }, [e.autofocus]);
  const o = e.labelStyle === "classic" || e.subfield, l = e.fieldSize === "sm", c = `block font-bold mb-1 ${o || l ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, u = `text-gray-500 dark:text-gray-400 mb-2 ${o || l ? "text-xs" : "text-sm"}`, f = `shadow appearance-none border rounded w-full py-3 px-4 bg-white text-gray-700 dark:text-gray-300 dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 disabled:bg-gray-200 dark:disabled:bg-gray-600 ${l ? "text-sm" : "text-base"} ${r ? "border-red-500 focus:ring-red-500" : "dark:border-gray-600 focus:ring-blue-500"}`, h = ((s = e.attrs) == null ? void 0 : s.reduce((p, { name: g, value: y }) => ({ ...p, [g]: y }), {})) || {};
  return /* @__PURE__ */ b.jsxs("div", { className: `w-full mb-4 ${(i = e.classNames) == null ? void 0 : i.join(" ")}`, id: e.id, children: [
    e.question && /* @__PURE__ */ b.jsxs("label", { className: c, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: u, children: e.description }),
    /* @__PURE__ */ b.jsx(
      "textarea",
      {
        ref: a,
        className: f,
        rows: e.rows || 4,
        value: t || e.value || "",
        onChange: (p) => n(p.target.value),
        placeholder: e.placeholder,
        required: e.required,
        disabled: e.disabled,
        maxLength: e.maxlength,
        ...h
      }
    ),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2", children: r })
  ] });
}, Hp = (e) => e.map(
  (t) => typeof t == "string" ? { label: t, value: t } : { label: t.label, value: t.value || t.label }
), Bp = ({ element: e, value: t, onChange: n, error: r }) => {
  const { t: s } = lt(), i = (h) => {
    const p = Array.isArray(t) ? t : [];
    p.includes(h) ? n(p.filter((g) => g !== h)) : n([...p, h]);
  }, a = e.labelStyle === "classic" || e.subfield, o = e.fieldSize === "sm", l = `block font-bold mb-1 ${a || o ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, c = `text-gray-500 dark:text-gray-400 mb-2 ${a || o ? "text-xs" : "text-sm"}`, u = Hp(e.choices || []), f = t ?? e.checked ?? (e.multiple ? [] : "");
  return /* @__PURE__ */ b.jsxs("div", { className: `w-full mb-4 p-1 rounded-lg ${r ? "ring-2 ring-red-500" : ""}`, children: [
    e.question && /* @__PURE__ */ b.jsxs("div", { className: `${l} mb-2`, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: c, children: e.description }),
    e.multiple && !e.hideFormText && /* @__PURE__ */ b.jsx("p", { className: c, children: s("chooseAsMany") }),
    /* @__PURE__ */ b.jsx("div", { className: `space-y-2 ${e.horizontal ? "flex space-x-4 space-y-0" : ""}`, children: u.map((h) => {
      const p = e.multiple ? f && f.includes(h.value) : f === h.value, g = [
        "flex",
        "items-center",
        "p-3",
        "w-full",
        "rounded-lg",
        "border",
        "cursor-pointer",
        "transition-colors",
        !e.disabled && "hover:bg-gray-50",
        !e.disabled && "dark:hover:bg-gray-700",
        p ? "border-blue-500 ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/30" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ b.jsxs("label", { className: g, children: [
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: e.multiple ? "checkbox" : "radio",
            name: e.name,
            value: h.value,
            checked: p,
            onChange: () => e.multiple ? i(h.value) : n(h.value),
            disabled: e.disabled,
            className: "h-5 w-5 text-blue-600"
          }
        ),
        /* @__PURE__ */ b.jsx("span", { className: "ms-3 text-gray-800 dark:text-gray-200", children: h.label })
      ] }, h.value);
    }) }),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2 ps-1", children: r })
  ] });
}, Kp = ({ filled: e, onMouseEnter: t, onClick: n, onMouseLeave: r }) => /* @__PURE__ */ b.jsx("svg", { onMouseEnter: t, onClick: n, onMouseLeave: r, className: `w-8 h-8 cursor-pointer transition-colors ${e ? "text-yellow-400" : "text-gray-300 dark:text-gray-600 hover:text-yellow-300"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ b.jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }), Wp = ({ filled: e, onMouseEnter: t, onClick: n, onMouseLeave: r }) => /* @__PURE__ */ b.jsx("svg", { onMouseEnter: t, onClick: n, onMouseLeave: r, className: `w-8 h-8 cursor-pointer transition-colors ${e ? "text-red-500" : "text-gray-300 dark:text-gray-600 hover:text-red-400"}`, fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ b.jsx("path", { fillRule: "evenodd", d: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z", clipRule: "evenodd" }) }), Jp = ({ element: e, value: t, onChange: n, error: r }) => {
  const [s, i] = W(void 0), a = Math.min(Math.max(e.outOf || 5, 1), 10), o = e.icon === "heart" || e.icon === "hearts" ? Wp : Kp, l = t ?? e.value, c = e.labelStyle === "classic" || e.subfield, u = e.fieldSize === "sm", f = `block font-bold mb-1 ${c || u ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, h = `text-gray-500 dark:text-gray-400 mb-2 ${c || u ? "text-xs" : "text-sm"}`;
  return /* @__PURE__ */ b.jsxs("div", { className: "w-full mb-4", children: [
    e.question && /* @__PURE__ */ b.jsxs("div", { className: `${f} mb-2`, children: [
      /* @__PURE__ */ b.jsx("span", { className: "mr-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 mr-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: h, children: e.description }),
    /* @__PURE__ */ b.jsx("div", { className: "flex items-center space-x-1", onMouseLeave: () => i(void 0), children: [...Array(a)].map((p, g) => /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ b.jsx(
        o,
        {
          filled: (s || l) > g,
          onMouseEnter: () => !e.disabled && i(g + 1),
          onClick: () => !e.disabled && n(g + 1),
          onMouseLeave: () => {
          }
        }
      ),
      !e.hideLabels && /* @__PURE__ */ b.jsx("span", { className: "text-xs text-gray-500 mt-1", children: g + 1 })
    ] }, g)) }),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2", children: r })
  ] });
}, Xp = ({ element: e, value: t, onChange: n }) => {
  const r = t === !0 || e.value === !0, s = e.labelStyle === "classic" || e.subfield, i = e.fieldSize === "sm", a = `text-gray-800 dark:text-gray-200 font-medium ${s || i ? "text-sm" : "text-base"}`, o = `text-gray-500 dark:text-gray-400 ${s || i ? "text-xs" : "text-sm"}`;
  return /* @__PURE__ */ b.jsx("div", { className: "w-full mb-4", children: /* @__PURE__ */ b.jsxs("div", { className: "flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700", children: [
    /* @__PURE__ */ b.jsxs("div", { children: [
      e.question && /* @__PURE__ */ b.jsxs("div", { className: a, children: [
        /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
        e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
        e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
          e.score,
          " pts"
        ] })
      ] }),
      e.description && /* @__PURE__ */ b.jsx("p", { className: o, children: e.description })
    ] }),
    /* @__PURE__ */ b.jsx(
      "button",
      {
        type: "button",
        className: `${r ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-600"} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50`,
        role: "switch",
        "aria-checked": r,
        onClick: () => !e.disabled && n(!r),
        disabled: e.disabled,
        children: /* @__PURE__ */ b.jsx(
          "span",
          {
            className: `${r ? "translate-x-5" : "translate-x-0"} rtl:-translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`
          }
        )
      }
    )
  ] }) });
}, Yp = (e) => Array.isArray(e) ? e.map(
  (t) => typeof t == "string" ? { label: t, value: t } : { label: t.label, value: t.value || t.label }
) : typeof e == "object" && e !== null ? Object.entries(e).map(([t, n]) => ({ label: String(n), value: t })) : [], Gp = ({ element: e, value: t, onChange: n, error: r }) => {
  const s = e.labelStyle === "classic" || e.subfield, i = e.fieldSize === "sm", a = `block font-bold mb-1 ${s || i ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, o = `text-gray-500 dark:text-gray-400 mb-2 ${s || i ? "text-xs" : "text-sm"}`, l = `shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:ring-2 disabled:bg-gray-200 dark:disabled:bg-gray-600 ${i ? "text-sm" : "text-base"} ${r ? "border-red-500 focus:ring-red-500" : "dark:border-gray-600 focus:ring-blue-500"}`, c = Yp(e.options || []), u = t ?? e.selected ?? "";
  return /* @__PURE__ */ b.jsxs("div", { className: "w-full mb-4", children: [
    e.question && /* @__PURE__ */ b.jsxs("label", { className: a, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: o, children: e.description }),
    /* @__PURE__ */ b.jsxs(
      "select",
      {
        className: l,
        value: u,
        onChange: (f) => n(f.target.value),
        required: e.required,
        disabled: e.disabled,
        children: [
          e.placeholder && /* @__PURE__ */ b.jsx("option", { value: "", disabled: !0, children: e.placeholder }),
          c.map((f) => /* @__PURE__ */ b.jsx("option", { value: f.value, children: f.label }, f.value))
        ]
      }
    ),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2", children: r })
  ] });
}, Qp = ({ element: e, value: t, onChange: n, error: r }) => {
  var s;
  const i = (f) => {
    const h = Array.isArray(t) ? t : [];
    h.includes(f) ? n(h.filter((p) => p !== f)) : n([...h, f]);
  }, a = e.labelStyle === "classic" || e.subfield, o = e.fieldSize === "sm", l = `block font-bold mb-1 ${a || o ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, c = `text-gray-500 dark:text-gray-400 mb-2 ${a || o ? "text-xs" : "text-sm"}`, u = t ?? e.checked ?? (e.multiple ? [] : "");
  return /* @__PURE__ */ b.jsxs("div", { className: `w-full mb-4 p-1 rounded-lg ${r ? "ring-2 ring-red-500" : ""}`, children: [
    e.question && /* @__PURE__ */ b.jsxs("div", { className: `${l} mb-2`, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: c, children: e.description }),
    e.multiple && !e.hideFormText && /* @__PURE__ */ b.jsx("p", { className: c, children: "Choose as many as you like." }),
    /* @__PURE__ */ b.jsx("div", { className: `grid gap-4 ${e.supersize ? "grid-cols-2" : "grid-cols-3"}`, children: (s = e.choices) == null ? void 0 : s.map((f) => {
      const h = e.multiple ? u.includes(f.value) : u === f.value;
      return /* @__PURE__ */ b.jsxs(
        "label",
        {
          className: `relative cursor-pointer rounded-lg border-2 p-2 transition-all ${h ? "border-blue-500 ring-2 ring-blue-500" : "border-gray-300 dark:border-gray-600"} ${e.disabled ? "opacity-50 cursor-not-allowed" : "hover:border-blue-400"}`,
          children: [
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: e.multiple ? "checkbox" : "radio",
                name: e.name,
                value: f.value,
                checked: h,
                onChange: () => !e.disabled && (e.multiple ? i(f.value) : n(f.value)),
                className: "sr-only",
                disabled: e.disabled
              }
            ),
            /* @__PURE__ */ b.jsx("img", { src: f.image || "https://picsum.photos/200", alt: f.label, className: "w-full h-auto object-cover rounded-md" }),
            !e.hideLabels && /* @__PURE__ */ b.jsx("span", { className: "block text-center mt-2 text-sm text-gray-700 dark:text-gray-300", children: f.label })
          ]
        },
        f.value
      );
    }) }),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2 ps-1", children: r })
  ] });
}, Zp = ({ element: e, value: t, onChange: n, error: r }) => {
  const { t: s } = lt(), i = e.startAt === 0 ? 0 : 1, a = e.outOf || 10, o = Array.from({ length: a - i + 1 }, (p, g) => g + i), l = t ?? e.value, c = e.labelStyle === "classic" || e.subfield, u = e.fieldSize === "sm", f = `block font-bold mb-1 ${c || u ? "text-sm" : "text-base"} ${r ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, h = `text-gray-500 dark:text-gray-400 mb-2 ${c || u ? "text-xs" : "text-sm"}`;
  return /* @__PURE__ */ b.jsxs("div", { className: "w-full mb-4", children: [
    e.question && /* @__PURE__ */ b.jsxs("div", { className: `${f} mb-2`, children: [
      /* @__PURE__ */ b.jsx("span", { className: "me-2", children: e.question }),
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500 me-2", children: "*" }),
      e.score !== void 0 && /* @__PURE__ */ b.jsxs("span", { className: "px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-bold rounded-full", children: [
        e.score,
        " pts"
      ] })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: h, children: e.description }),
    /* @__PURE__ */ b.jsx("div", { className: "flex justify-between items-center space-x-2", children: o.map((p) => {
      const g = l === p;
      return /* @__PURE__ */ b.jsxs("label", { className: "cursor-pointer", children: [
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: "radio",
            name: e.name,
            value: p,
            checked: g,
            onChange: () => !e.disabled && n(p),
            className: "sr-only",
            disabled: e.disabled
          }
        ),
        /* @__PURE__ */ b.jsx(
          "div",
          {
            className: `w-10 h-10 flex items-center justify-center rounded-full border transition-all ${g ? "bg-blue-600 border-blue-600 text-white" : "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"} ${!e.disabled && "hover:border-blue-400"}`,
            children: p
          }
        )
      ] }, p);
    }) }),
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400", children: [
      !e.hideLabelStart && /* @__PURE__ */ b.jsx("span", { children: e.labelStart || s("disagree") }),
      !e.hideLabelEnd && /* @__PURE__ */ b.jsx("span", { children: e.labelEnd || s("agree") })
    ] }),
    r && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-xs italic mt-2", children: r })
  ] });
}, eg = ({ element: e, value: t, onChange: n, error: r }) => {
  const { t: s } = lt(), [i, a] = W(t?.name || e.currentFile || null), [o, l] = W(null), c = Y(null), u = (m) => {
    var v;
    const w = (v = m.target.files) == null ? void 0 : v[0];
    if (!w) {
      a(null), n(null), l(null);
      return;
    }
    const S = e.sizeLimit || 10, k = S * 1024 * 1024;
    if (w.size > k) {
      l(s("fileTooLarge", { size: S })), a(null), n(null), c.current && (c.current.value = "");
      return;
    }
    if (e.imageOnly && !w.type.startsWith("image/")) {
      l(s("invalidFileType")), a(null), n(null), c.current && (c.current.value = "");
      return;
    }
    l(null), a(w.name), n(w);
  }, f = e.labelStyle === "classic" || e.subfield, h = e.fieldSize === "sm", p = `block font-bold mb-1 ${f || h ? "text-sm" : "text-base"} ${r || o ? "text-red-700 dark:text-red-500" : "text-gray-700 dark:text-gray-300"}`, g = `text-gray-500 dark:text-gray-400 mb-2 ${f || h ? "text-xs" : "text-sm"}`, y = r || o;
  return /* @__PURE__ */ b.jsxs("div", { className: "w-full mb-4", children: [
    e.question && /* @__PURE__ */ b.jsxs("label", { className: p, children: [
      e.question,
      e.required && /* @__PURE__ */ b.jsx("span", { className: "text-red-500", children: "*" })
    ] }),
    e.description && /* @__PURE__ */ b.jsx("p", { className: g, children: e.description }),
    /* @__PURE__ */ b.jsxs("div", { className: "mt-2 flex items-center", children: [
      /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          disabled: e.disabled,
          onClick: () => {
            var m;
            return (m = c.current) == null ? void 0 : m.click();
          },
          className: `px-4 py-2 font-semibold rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-75 disabled:opacity-50 ${r || o ? "border-red-500 text-red-700" : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 focus:ring-blue-500"}`,
          children: s("chooseFile")
        }
      ),
      /* @__PURE__ */ b.jsx(
        "input",
        {
          type: "file",
          ref: c,
          className: "hidden",
          onChange: u,
          required: e.required && !i,
          disabled: e.disabled,
          accept: e.imageOnly ? "image/*" : void 0
        }
      ),
      i && /* @__PURE__ */ b.jsx("span", { className: "ms-4 text-gray-600 dark:text-gray-400 truncate", children: i })
    ] }),
    y && /* @__PURE__ */ b.jsx("p", { className: "text-red-500 text-sm mt-2", children: y })
  ] });
}, tg = ({
  allSlides: e,
  formAnswers: t,
  componentMap: n,
  onEdit: r,
  onSubmit: s,
  isSubmitting: i,
  formDefinition: a
}) => {
  const { t: o } = lt(), l = e.filter(
    (c) => c !== a.startSlide && c !== a.endSlide
  );
  return /* @__PURE__ */ b.jsxs("div", { className: "mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl", children: [
    /* @__PURE__ */ b.jsx("h1", { className: "text-3xl font-bold text-center mb-2", children: o("reviewAnswers") }),
    /* @__PURE__ */ b.jsx("p", { className: "text-center text-gray-600 dark:text-gray-400 mb-8", children: o("reviewInstructions") }),
    /* @__PURE__ */ b.jsx("div", { className: "space-y-6 border-t border-b border-gray-200 dark:border-gray-700 py-6", children: l.map((c, u) => /* @__PURE__ */ b.jsx("div", { children: c.elements.filter((f) => !(!f.name || f.displayCondition && !_n(f.displayCondition.condition, t))).map((f, h) => {
      const p = n[f.type];
      if (!p) return null;
      const g = {
        ...f,
        disabled: !0,
        autofocus: !1
      };
      return /* @__PURE__ */ b.jsx("div", { className: "opacity-75 pointer-events-none", children: /* @__PURE__ */ b.jsx(
        p,
        {
          element: g,
          value: t[f.name],
          onChange: () => {
          }
        }
      ) }, `${f.name}-${h}`);
    }) }, `preview-slide-${u}`)) }),
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between mt-8", children: [
      /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          onClick: r,
          disabled: i,
          className: "px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 disabled:opacity-50",
          children: o("editAnswers")
        }
      ),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          onClick: s,
          disabled: i,
          className: "px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 disabled:bg-green-300 transition-all",
          children: o(i ? "submitting" : "submit")
        }
      )
    ] })
  ] });
}, yo = (e, t) => {
  if (t === void 0 || e == null || e === "")
    return !1;
  if (Array.isArray(t)) {
    if (!Array.isArray(e))
      return !1;
    const n = e.slice().sort(), r = t.slice().sort();
    return JSON.stringify(n) === JSON.stringify(r);
  }
  return String(e).trim() == String(t).trim();
}, ng = () => /* @__PURE__ */ b.jsx("svg", { className: "w-6 h-6 text-green-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), rg = () => /* @__PURE__ */ b.jsx("svg", { className: "w-6 h-6 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ b.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), sg = ({ element: e, userAnswer: t }) => {
  const { t: n } = lt();
  if (e.answer === void 0 || e.score === void 0)
    return null;
  const r = yo(t, e.answer), s = r ? e.score : 0;
  return /* @__PURE__ */ b.jsxs("div", { className: `p-4 border-s-4 rounded-md mb-4 ${r ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-red-500 bg-red-50 dark:bg-red-900/20"}`, children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ b.jsx("p", { className: "font-semibold text-gray-800 dark:text-gray-200 pe-4", children: e.question }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex items-center space-x-2 flex-shrink-0", children: [
        /* @__PURE__ */ b.jsxs("span", { className: `font-bold ${r ? "text-green-600" : "text-red-600"}`, children: [
          s,
          " / ",
          e.score,
          " pts"
        ] }),
        r ? /* @__PURE__ */ b.jsx(ng, {}) : /* @__PURE__ */ b.jsx(rg, {})
      ] })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mt-2 text-sm space-y-1", children: [
      /* @__PURE__ */ b.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
        n("yourAnswer"),
        " ",
        /* @__PURE__ */ b.jsx("code", { className: "bg-gray-200 dark:bg-gray-700 rounded px-1 break-all", children: JSON.stringify(t ?? n("notAnswered")) })
      ] }),
      !r && /* @__PURE__ */ b.jsxs("p", { className: "text-green-700 dark:text-green-400 font-medium", children: [
        n("correctAnswer"),
        " ",
        /* @__PURE__ */ b.jsx("code", { className: "bg-green-200/50 dark:bg-green-800/50 rounded px-1 break-all", children: JSON.stringify(e.answer) })
      ] })
    ] }),
    !r && e.reason && /* @__PURE__ */ b.jsxs("div", { className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700/50", children: [
      /* @__PURE__ */ b.jsx("p", { className: "text-xs font-semibold text-gray-700 dark:text-gray-300 tracking-wider", children: n("explanation") }),
      /* @__PURE__ */ b.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: e.reason })
    ] })
  ] });
}, ig = ({ formAnswers: e, allSlides: t }) => {
  const { t: n } = lt(), r = t.flatMap((o) => o.elements).filter((o) => o.name), s = r.filter((o) => o.answer !== void 0 && o.score !== void 0), i = s.reduce((o, l) => o + (yo(e[l.name], l.answer) ? l.score : 0), 0), a = s.reduce((o, l) => o + (l.score || 0), 0);
  return /* @__PURE__ */ b.jsxs("div", { className: "mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl", children: [
    /* @__PURE__ */ b.jsx("h1", { className: "text-3xl font-bold text-center mb-2", children: n("results") }),
    /* @__PURE__ */ b.jsxs("div", { className: "text-center p-4 mb-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800", children: [
      /* @__PURE__ */ b.jsx("p", { className: "text-lg font-medium text-gray-600 dark:text-gray-300", children: n("totalScore") }),
      /* @__PURE__ */ b.jsxs("p", { className: "text-4xl font-bold text-blue-600 dark:text-blue-400", children: [
        i,
        " / ",
        a
      ] })
    ] }),
    /* @__PURE__ */ b.jsx("div", { className: "space-y-4", children: r.map((o) => /* @__PURE__ */ b.jsx(sg, { element: o, userAnswer: e[o.name] }, o.name)) })
  ] });
}, ag = ({ timeLeftInSeconds: e }) => {
  const t = Math.floor(e / 60), n = e % 60, r = e <= 60 ? "text-red-500" : e <= 300 ? "text-yellow-500" : "text-gray-800 dark:text-gray-200";
  return /* @__PURE__ */ b.jsx("div", { className: "text-center top-4 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 border border-gray-200 dark:border-gray-700 z-50", children: /* @__PURE__ */ b.jsxs("span", { className: `text-lg font-mono font-bold ${r}`, children: [
    String(t).padStart(2, "0"),
    ":",
    String(n).padStart(2, "0")
  ] }) });
}, vt = ({ element: e }) => {
  const { type: t, text: n } = e, r = "font-bold text-gray-900 dark:text-white mb-4";
  switch (t) {
    case "h1":
      return /* @__PURE__ */ b.jsx("h1", { className: `text-3xl text-center ${r}`, children: n });
    case "h2":
      return /* @__PURE__ */ b.jsx("h2", { className: `text-2xl ${r}`, children: n });
    case "h3":
      return /* @__PURE__ */ b.jsx("h3", { className: `text-xl ${r}`, children: n });
    case "h4":
      return /* @__PURE__ */ b.jsx("h4", { className: `text-lg ${r}`, children: n });
    case "h5":
      return /* @__PURE__ */ b.jsx("h5", { className: `text-base font-semibold ${r}`, children: n });
    case "h6":
      return /* @__PURE__ */ b.jsx("h6", { className: `text-sm font-semibold uppercase tracking-wider ${r}`, children: n });
    default:
      return /* @__PURE__ */ b.jsx("p", { className: r, children: n });
  }
}, og = ({ element: e }) => /* @__PURE__ */ b.jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: e.text }), lg = ({ element: e }) => /* @__PURE__ */ b.jsx("div", { className: "w-full flex justify-center my-4", children: /* @__PURE__ */ b.jsx(
  "img",
  {
    src: e.src || "https://picsum.photos/400/200",
    alt: e.alt || "Form image",
    className: "rounded-lg shadow-md max-w-full h-auto"
  }
) }), cg = () => /* @__PURE__ */ b.jsx("hr", { className: "my-6 border-gray-200 dark:border-gray-700" }), ug = ({ element: e }) => /* @__PURE__ */ b.jsx("blockquote", { className: "ps-4 my-4 border-s-4 border-gray-300 dark:border-gray-600 italic text-gray-600 dark:text-gray-400", children: e.text }), dg = ({ element: e }) => !e.items || !Array.isArray(e.items) ? null : /* @__PURE__ */ b.jsx("ul", { className: "list-disc list-inside my-4 space-y-1 text-gray-700 dark:text-gray-300", children: e.items.map((t, n) => /* @__PURE__ */ b.jsx("li", { children: t }, n)) }), fg = ({ element: e }) => !e.items || !Array.isArray(e.items) ? null : /* @__PURE__ */ b.jsx("ol", { className: "list-decimal list-inside my-4 space-y-1 text-gray-700 dark:text-gray-300", children: e.items.map((t, n) => /* @__PURE__ */ b.jsx("li", { children: t }, n)) }), hg = ({ element: e }) => /* @__PURE__ */ b.jsx("pre", { className: "bg-gray-800 text-white p-4 my-4 rounded-md overflow-x-auto", children: /* @__PURE__ */ b.jsx("code", { children: e.content }) }), Ui = {
  // Inputs
  text: He,
  textarea: Up,
  email: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "email" } }),
  url: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "url" } }),
  tel: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "tel" } }),
  password: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "password" } }),
  number: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "number" } }),
  datetime: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "datetime-local" } }),
  date: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "date" } }),
  time: (e) => /* @__PURE__ */ b.jsx(He, { ...e, element: { ...e.element, type: "time" } }),
  select: Gp,
  choice: Bp,
  pictureChoice: Qp,
  rating: Jp,
  opinionScale: Zp,
  file: eg,
  switch: Xp,
  // Display
  h1: vt,
  h2: vt,
  h3: vt,
  h4: vt,
  h5: vt,
  h6: vt,
  p: og,
  img: lg,
  hr: cg,
  blockquote: ug,
  ul: dg,
  ol: fg,
  code: hg
}, pg = ({ formDefinition: e, onSubmit: t, durationInMinutes: n, startedAt: r, language: s = "en", showCorrection: i = !1 }) => {
  const { t: a, i18n: o } = lt(), [l, c] = W(0), [u, f] = W({}), [h, p] = W(!1), [g, y] = W({}), [m, v] = W(!1), [w, S] = W("filling"), [k, O] = W(null), [N, j] = W(null);
  F(() => {
    s && o.language !== s && o.changeLanguage(s), document.documentElement.lang = s, document.documentElement.dir = o.dir(s);
  }, [s, o]);
  const L = te(() => [
    e.startSlide,
    ...e.slides,
    e.endSlide
  ].filter((_) => !!_), [e]), T = te(() => e.endSlide ? L.length - 2 : L.length - 1, [L, e.endSlide]), $ = (_, R) => {
    f((D) => ({ ...D, [_]: R })), g[_] && y((D) => {
      const V = { ...D };
      return delete V[_], V;
    });
  }, E = () => {
    const _ = {}, R = L[l].elements;
    for (const D of R) {
      if (!D.name || D.displayCondition && !_n(D.displayCondition.condition, u))
        continue;
      const V = u[D.name];
      if (D.required && (V == null || V === "" || Array.isArray(V) && V.length === 0)) {
        _[D.name] = a("requiredField");
        continue;
      }
      if (V) {
        switch (D.type) {
          case "email":
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V) || (_[D.name] = a("invalidEmail"));
            break;
          case "url":
            try {
              new URL(V);
            } catch {
              _[D.name] = a("invalidUrl");
            }
            break;
          case "number":
            if (isNaN(Number(V)))
              _[D.name] = a("invalidNumber");
            else {
              const se = Number(V);
              D.min !== void 0 && se < Number(D.min) && (_[D.name] = a("minValue", { min: D.min })), D.max !== void 0 && se > Number(D.max) && (_[D.name] = a("maxValue", { max: D.max }));
            }
            break;
        }
        D.pattern && (new RegExp(D.pattern).test(V) || (_[D.name] = a("patternMismatch")));
      }
    }
    return y(_), Object.keys(_).length === 0;
  }, I = () => {
    var _;
    for (let R = l + 1; R < L.length; R++) {
      const D = L[R];
      if (!((_ = D.slideOptions) != null && _.jumpCondition) || _n(D.slideOptions.jumpCondition, u))
        return R;
    }
    return L.length;
  }, K = () => {
    if (E())
      if (l === T)
        v(!0);
      else {
        const _ = I();
        _ < L.length && c(_);
      }
  }, H = () => {
    l > 0 && (y({}), c(l - 1));
  }, ae = ie(async () => {
    if (!h)
      if (p(!0), await t(u), p(!1), e.settings.isAutoSolvable && i)
        S("correction");
      else {
        const _ = L.findIndex((R) => R === e.endSlide);
        _ !== -1 && (v(!1), c(_));
      }
  }, [h, t, u, e, L, i]);
  F(() => {
    if (!n) return;
    const _ = r ? new Date(r) : /* @__PURE__ */ new Date(), R = new Date(_.getTime() + n * 60 * 1e3);
    O(R);
    const D = Math.max(0, Math.floor((R.getTime() - (/* @__PURE__ */ new Date()).getTime()) / 1e3));
    j(D);
  }, [n, r]), F(() => {
    if (!k) return;
    if (Math.floor((k.getTime() - (/* @__PURE__ */ new Date()).getTime()) / 1e3) <= 0) {
      w === "filling" && ae();
      return;
    }
    const _ = setInterval(() => {
      const R = Math.max(0, Math.floor((k.getTime() - (/* @__PURE__ */ new Date()).getTime()) / 1e3));
      j(R), R <= 0 && (clearInterval(_), w === "filling" && ae());
    }, 1e3);
    return () => clearInterval(_);
  }, [k, ae, w]);
  const A = () => {
    v(!1);
  };
  if (w === "correction")
    return /* @__PURE__ */ b.jsx(
      ig,
      {
        formDefinition: e,
        allSlides: L,
        formAnswers: u
      }
    );
  if (m)
    return /* @__PURE__ */ b.jsx(
      tg,
      {
        allSlides: L,
        formAnswers: u,
        componentMap: Ui,
        onEdit: A,
        onSubmit: ae,
        isSubmitting: h,
        formDefinition: e
      }
    );
  const B = L[l];
  if (!B)
    return null;
  const ne = !!e.endSlide && B === e.endSlide, re = l === 0, x = N !== null && N <= 0, C = (l + 1) / L.length * 100;
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    n && N !== null && /* @__PURE__ */ b.jsx(ag, { timeLeftInSeconds: N }),
    /* @__PURE__ */ b.jsxs("div", { className: "mx-auto my-10 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl transition-all duration-500", children: [
      /* @__PURE__ */ b.jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6", children: /* @__PURE__ */ b.jsx("div", { className: "bg-blue-600 h-2.5 rounded-full", style: { width: `${C}%`, transition: "width 0.5s ease-in-out" } }) }),
      /* @__PURE__ */ b.jsxs("form", { onSubmit: (_) => _.preventDefault(), noValidate: !0, children: [
        B.elements.map((_, R) => {
          if (_.displayCondition && !_n(_.displayCondition.condition, u))
            return null;
          const D = Ui[_.type];
          if (!D)
            return console.warn("Unknown element type:", _.type), /* @__PURE__ */ b.jsxs("div", { className: "text-red-500", children: [
              "Unknown element type: ",
              _.type
            ] }, R);
          const V = !!_.name;
          return /* @__PURE__ */ b.jsx(
            D,
            {
              element: { ..._, disabled: _.disabled || x },
              value: V ? u[_.name] : void 0,
              onChange: V ? (se) => $(_.name, se) : void 0,
              error: V ? g[_.name] : void 0
            },
            `${_.name || _.type}-${R}`
          );
        }),
        /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between mt-8", children: [
          !re && !ne ? /* @__PURE__ */ b.jsx(
            "button",
            {
              type: "button",
              onClick: H,
              disabled: x,
              className: "px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all disabled:opacity-50",
              children: a("previous")
            }
          ) : /* @__PURE__ */ b.jsx("div", {}),
          ne ? null : /* @__PURE__ */ b.jsx(
            "button",
            {
              type: "button",
              onClick: K,
              disabled: x,
              className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all disabled:opacity-50",
              children: a("next")
            }
          )
        ] })
      ] })
    ] })
  ] });
}, gg = () => {
  const e = q((n) => n.formDefinition), t = (n) => (console.log("Form Submitted:", n), new Promise((r) => setTimeout(() => {
    r(null);
  }, 1e3)));
  return /* @__PURE__ */ d.jsx("div", { className: "min-h-screen text-gray-900 dark:text-white p-8", children: /* @__PURE__ */ d.jsx(
    pg,
    {
      formDefinition: e,
      onSubmit: t,
      language: "ar"
    }
  ) });
}, mg = () => {
  const e = q((i) => i.formDefinition), [t, n] = W(!1), r = JSON.stringify(e, null, 2), s = () => {
    navigator.clipboard.writeText(r), n(!0), setTimeout(() => n(!1), 2e3);
  };
  return /* @__PURE__ */ d.jsxs("div", { className: "h-full w-full bg-gray-800 text-white font-mono text-sm p-4 relative overflow-auto", children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        onClick: s,
        className: "absolute top-4 right-4 p-2 bg-gray-600 hover:bg-gray-500 rounded-lg",
        children: t ? /* @__PURE__ */ d.jsx($u, { size: 16, className: "text-green-400" }) : /* @__PURE__ */ d.jsx(Wu, { size: 16 })
      }
    ),
    /* @__PURE__ */ d.jsx("pre", { children: /* @__PURE__ */ d.jsx("code", { children: r }) })
  ] });
}, vg = ({ initialData: e, onSave: t, onLoad: n }) => {
  const { t: r, i18n: s } = me(), { handleDragEnd: i } = ih(), [a, o] = W(null), [l, c] = W("builder"), [u, f] = W(!1), h = q((E) => E.formDefinition), p = q((E) => E.saveToLocalStorage), g = q((E) => E.setFormDefinition), { undo: y, redo: m, clear: v, pastStates: w, futureStates: S } = sh((E) => E);
  F(() => {
    e && (g(e), v());
  }, [e, g, v]);
  const k = () => {
    p(), Q.success(r("saved_to_browser_storage"));
  }, O = () => {
    const E = localStorage.getItem("formsmd_builder_save");
    if (E) {
      if (window.confirm(r("confirm_load_from_browser")))
        try {
          const I = JSON.parse(E);
          g(I), v(), Q.success(r("form_loaded_successfully"));
        } catch (I) {
          Q.error(r("could_not_load_form")), console.error("Failed to parse saved form data:", I);
        }
    } else
      Q.error(r("no_saved_form_found"));
  }, N = async () => {
    f(!0);
    const E = Q.loading(r("saving_to_server"));
    try {
      const I = await t(h);
      I ? Q.error(r("save_failed", { error: I }), { id: E }) : Q.success(r("saved_to_server_successfully"), { id: E });
    } catch (I) {
      Q.error(r("unexpected_error", { message: I.message }), { id: E });
    } finally {
      f(!1);
    }
  }, j = async () => {
    if (n && window.confirm(r("confirm_load_from_server"))) {
      const E = Q.loading(r("loading_from_server"));
      try {
        const I = await n();
        g(I), v(), Q.success(r("loaded_from_server_successfully"), { id: E });
      } catch (I) {
        Q.error(r("failed_to_load", { message: I.message }), { id: E });
      }
    }
  }, L = (E) => o(E.active), T = (E) => {
    i(E), o(null);
  }, $ = ({ tab: E, label: I }) => /* @__PURE__ */ d.jsx("button", { onClick: () => c(E), className: `px-4 py-2 text-sm font-medium rounded-t-lg ${l === E ? "bg-white text-blue-600 border-gray-200 border-t border-x" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`, children: I });
  return /* @__PURE__ */ d.jsxs(bc, { onDragStart: L, onDragEnd: T, children: [
    /* @__PURE__ */ d.jsx(ku, { position: "bottom-center", toastOptions: { duration: 3e3, style: { background: "#333", color: "#fff" } } }),
    /* @__PURE__ */ d.jsxs("div", { className: "flex flex-col h-full w-full bg-gray-100 text-gray-800", children: [
      /* @__PURE__ */ d.jsxs("header", { className: "flex justify-between items-end px-4 pt-2 border-b border-gray-200 bg-gray-100", children: [
        /* @__PURE__ */ d.jsxs("div", { children: [
          /* @__PURE__ */ d.jsx($, { tab: "builder", label: r("builder") }),
          /* @__PURE__ */ d.jsx($, { tab: "preview", label: r("live_preview") }),
          /* @__PURE__ */ d.jsx($, { tab: "json", label: r("export_json") })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ d.jsx("button", { onClick: () => y(), disabled: w.length === 0, className: "p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", "aria-label": r("undo"), children: /* @__PURE__ */ d.jsx($d, { size: 14 }) }),
          /* @__PURE__ */ d.jsx("button", { onClick: () => m(), disabled: S.length === 0, className: "p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed", "aria-label": r("redo"), children: /* @__PURE__ */ d.jsx(wd, { size: 14 }) }),
          /* @__PURE__ */ d.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }),
          /* @__PURE__ */ d.jsxs(
            "select",
            {
              value: s.language,
              onChange: (E) => s.changeLanguage(E.target.value),
              className: "p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50",
              children: [
                /* @__PURE__ */ d.jsx("option", { value: "en", children: "English" }),
                /* @__PURE__ */ d.jsx("option", { value: "ar", children: "العربية" }),
                /* @__PURE__ */ d.jsx("option", { value: "fr", children: "Français" }),
                /* @__PURE__ */ d.jsx("option", { value: "es", children: "Español" }),
                /* @__PURE__ */ d.jsx("option", { value: "it", children: "Italiano" }),
                /* @__PURE__ */ d.jsx("option", { value: "zh", children: "中文" })
              ]
            }
          ),
          /* @__PURE__ */ d.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }),
          /* @__PURE__ */ d.jsxs("button", { onClick: O, className: "flex items-center gap-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ d.jsx(Yu, { size: 14 }),
            r("local_load")
          ] }),
          /* @__PURE__ */ d.jsxs("button", { onClick: k, className: "flex items-center gap-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50", children: [
            /* @__PURE__ */ d.jsx(Qu, { size: 14 }),
            r("local_save")
          ] }),
          n && /* @__PURE__ */ d.jsxs("button", { onClick: j, className: "flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-400", children: [
            /* @__PURE__ */ d.jsx(Uu, { size: 14 }),
            r("remote_load")
          ] }),
          /* @__PURE__ */ d.jsxs("button", { onClick: N, disabled: u, className: "flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-400", children: [
            /* @__PURE__ */ d.jsx(Vu, { size: 14 }),
            r("remote_save")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "flex-1  overflow-y-auto", children: [
        l === "builder" && /* @__PURE__ */ d.jsx(Fh, {}),
        l === "preview" && /* @__PURE__ */ d.jsx(gg, {}),
        l === "json" && /* @__PURE__ */ d.jsx(mg, {})
      ] })
    ] }),
    /* @__PURE__ */ d.jsx(Pc, { dropAnimation: null, children: a && l === "builder" ? /* @__PURE__ */ d.jsx(ah, { activeItem: a }) : null })
  ] });
};
export {
  vg as F,
  bg as c,
  Hi as g
};
