/* */ 
"format cjs";
(function(process) {
  !function() {
    function e() {
      !function(e) {
        function t(e, n) {
          if ("string" != typeof e)
            throw new TypeError("URL must be a string");
          var r = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
          if (!r)
            throw new RangeError("Invalid URL format");
          var a = r[1] || "",
              o = r[2] || "",
              i = r[3] || "",
              s = r[4] || "",
              l = r[5] || "",
              u = r[6] || "",
              d = r[7] || "",
              c = r[8] || "",
              f = r[9] || "";
          if (void 0 !== n) {
            var m = n instanceof t ? n : new t(n),
                p = !a && !s && !o;
            !p || d || c || (c = m.search), p && "/" !== d[0] && (d = d ? (!m.host && !m.username || m.pathname ? "" : "/") + m.pathname.slice(0, m.pathname.lastIndexOf("/") + 1) + d : m.pathname);
            var h = [];
            d.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function(e) {
              "/.." === e ? h.pop() : h.push(e);
            }), d = h.join("").replace(/^\//, "/" === d[0] ? "/" : ""), p && (u = m.port, l = m.hostname, s = m.host, i = m.password, o = m.username), a || (a = m.protocol);
          }
          d = d.replace(/\\/g, "/"), this.origin = s ? a + ("" !== a || "" !== s ? "//" : "") + s : "", this.href = a + (a && s || "file:" == a ? "//" : "") + ("" !== o ? o + ("" !== i ? ":" + i : "") + "@" : "") + s + d + c + f, this.protocol = a, this.username = o, this.password = i, this.host = s, this.hostname = l, this.port = u, this.pathname = d, this.search = c, this.hash = f;
        }
        e.URLPolyfill = t;
      }("undefined" != typeof self ? self : global), function(e) {
        function t(e, t) {
          if (!e.originalErr)
            for (var n = ((e.message || e) + (e.stack ? "\n" + e.stack : "")).toString().split("\n"),
                r = [],
                a = 0; a < n.length; a++)
              "undefined" != typeof $__curScript && n[a].indexOf($__curScript.src) != -1 || r.push(n[a]);
          var o = "(SystemJS) " + (r ? r.join("\n\t") : e.message.substr(11)) + "\n\t" + t;
          q || (o = o.replace(U ? /file:\/\/\//g : /file:\/\//g, ""));
          var i = N ? new Error(o, e.fileName, e.lineNumber) : new Error(o);
          return i.stack = o, i.originalErr = e.originalErr || e, i;
        }
        function n() {}
        function r(t) {
          this._loader = {
            loaderObj: this,
            loads: [],
            modules: {},
            importPromises: {},
            moduleRecords: {}
          }, A(this, "global", {get: function() {
              return e;
            }});
        }
        function a() {
          r.call(this), this.paths = {}, this._loader.paths = {}, G.call(this);
        }
        function o() {}
        function i(e, t) {
          a.prototype[e] = t(a.prototype[e] || function() {});
        }
        function s(e) {
          G = e(G || function() {});
        }
        function l(e) {
          return e.match(V);
        }
        function u(e) {
          return "." == e[0] && (!e[1] || "/" == e[1] || "." == e[1]) || "/" == e[0];
        }
        function d(e) {
          return !u(e) && !l(e);
        }
        function c(e, t) {
          if ("." == e[0]) {
            if ("/" == e[1] && "." != e[2])
              return (t && t.substr(0, t.lastIndexOf("/") + 1) || $) + e.substr(2);
          } else if ("/" != e[0] && e.indexOf(":") == -1)
            return (t && t.substr(0, t.lastIndexOf("/") + 1) || $) + e;
          return new H(e, t && t.replace(/#/g, "%05") || Y).href.replace(/%05/g, "#");
        }
        function f(e, t) {
          var n,
              r = "",
              a = 0,
              o = e.paths,
              i = e._loader.paths;
          for (var s in o)
            if (!o.hasOwnProperty || o.hasOwnProperty(s)) {
              var l = o[s];
              if (l !== i[s] && (l = o[s] = i[s] = c(o[s], u(o[s]) ? $ : e.baseURL)), s.indexOf("*") === -1) {
                if (t == s)
                  return o[s];
                if (t.substr(0, s.length - 1) == s.substr(0, s.length - 1) && (t.length < s.length || t[s.length - 1] == s[s.length - 1]) && ("/" == o[s][o[s].length - 1] || "" == o[s]))
                  return o[s].substr(0, o[s].length - 1) + (t.length > s.length ? (o[s] && "/" || "") + t.substr(s.length) : "");
              } else {
                var d = s.split("*");
                if (d.length > 2)
                  throw new TypeError("Only one wildcard in a path is permitted");
                var f = d[0].length;
                f >= a && t.substr(0, d[0].length) == d[0] && t.substr(t.length - d[1].length) == d[1] && (a = f, r = s, n = t.substr(d[0].length, t.length - d[1].length - d[0].length));
              }
            }
          var m = o[r];
          return "string" == typeof n && (m = m.replace("*", n)), m;
        }
        function m(e) {
          for (var t = [],
              n = [],
              r = 0,
              a = e.length; r < a; r++) {
            var o = J.call(t, e[r]);
            o === -1 ? (t.push(e[r]), n.push([r])) : n[o].push(r);
          }
          return {
            names: t,
            indices: n
          };
        }
        function p(t) {
          var n = {};
          if (("object" == typeof t || "function" == typeof t) && t !== e)
            if (Z)
              for (var r in t)
                "default" !== r && h(n, t, r);
            else
              g(n, t);
          return n.default = t, A(n, "__useDefault", {value: !0}), n;
        }
        function h(e, t, n) {
          try {
            var r;
            (r = Object.getOwnPropertyDescriptor(t, n)) && A(e, n, r);
          } catch (r) {
            return e[n] = t[n], !1;
          }
        }
        function g(e, t, n) {
          var r = t && t.hasOwnProperty;
          for (var a in t)
            r && !t.hasOwnProperty(a) || n && a in e || (e[a] = t[a]);
          return e;
        }
        function v(e, t, n) {
          var r = t && t.hasOwnProperty;
          for (var a in t)
            if (!r || t.hasOwnProperty(a)) {
              var o = t[a];
              a in e ? o instanceof Array && e[a] instanceof Array ? e[a] = [].concat(n ? o : e[a]).concat(n ? e[a] : o) : "object" == typeof o && null !== o && "object" == typeof e[a] ? e[a] = g(g({}, e[a]), o, n) : n || (e[a] = o) : e[a] = o;
            }
        }
        function y(e, t, n, r, a) {
          for (var o in t)
            if (J.call(["main", "format", "defaultExtension", "basePath"], o) != -1)
              e[o] = t[o];
            else if ("map" == o)
              g(e.map = e.map || {}, t.map);
            else if ("meta" == o)
              g(e.meta = e.meta || {}, t.meta);
            else if ("depCache" == o)
              for (var i in t.depCache) {
                var s;
                s = "./" == i.substr(0, 2) ? n + "/" + i.substr(2) : k.call(r, i), r.depCache[s] = (r.depCache[s] || []).concat(t.depCache[i]);
              }
            else
              !a || J.call(["browserConfig", "nodeConfig", "devConfig", "productionConfig"], o) != -1 || t.hasOwnProperty && !t.hasOwnProperty(o) || w.call(r, '"' + o + '" is not a valid package configuration option in package ' + n);
        }
        function b(e, t, n, r) {
          var a;
          if (e.packages[t]) {
            var o = e.packages[t];
            a = e.packages[t] = {}, y(a, r ? n : o, t, e, r), y(a, r ? o : n, t, e, !r);
          } else
            a = e.packages[t] = n;
          return "object" == typeof a.main && (a.map = a.map || {}, a.map["./@main"] = a.main, a.main.default = a.main.default || "./", a.main = "@main"), a;
        }
        function w(e) {
          this.warnings && "undefined" != typeof console && console.warn;
        }
        function x(e, t) {
          for (var n = e.split("."); n.length; )
            t = t[n.shift()];
          return t;
        }
        function S(e, t) {
          var n,
              r = 0;
          for (var a in e)
            if (t.substr(0, a.length) == a && (t.length == a.length || "/" == t[a.length])) {
              var o = a.split("/").length;
              if (o <= r)
                continue;
              n = a, r = o;
            }
          return n;
        }
        function E(e) {
          this._loader.baseURL !== this.baseURL && ("/" != this.baseURL[this.baseURL.length - 1] && (this.baseURL += "/"), this._loader.baseURL = this.baseURL = new H(this.baseURL, Y).href);
        }
        function _(e, t) {
          this.set("@system-env", W = this.newModule({
            browser: q,
            node: !!this._nodeRequire,
            production: !t && e,
            dev: t || !e,
            build: t,
            default: !0
          }));
        }
        function P(e, t) {
          if (!d(e))
            throw new Error("Node module " + e + " can't be loaded as it is not a package require.");
          if (!ee) {
            var n = this._nodeRequire("module"),
                r = t.substr(U ? 8 : 7);
            ee = new n(r), ee.paths = n._nodeModulePaths(r);
          }
          return ee.require(e);
        }
        function k(e, t) {
          if (u(e))
            return c(e, t);
          if (l(e))
            return e;
          var n = S(this.map, e);
          if (n) {
            if (e = this.map[n] + e.substr(n.length), u(e))
              return c(e);
            if (l(e))
              return e;
          }
          if (this.has(e))
            return e;
          if ("@node/" == e.substr(0, 6)) {
            if (!this._nodeRequire)
              throw new TypeError("Error loading " + e + ". Can only load node core modules in Node.");
            return this.builder ? this.set(e, this.newModule({})) : this.set(e, this.newModule(p(P.call(this, e.substr(6), this.baseURL)))), e;
          }
          return E.call(this), f(this, e) || this.baseURL + e;
        }
        function j(e, t, n) {
          W.browser && t.browserConfig && n(t.browserConfig), W.node && t.nodeConfig && n(t.nodeConfig), W.dev && t.devConfig && n(t.devConfig), W.build && t.buildConfig && n(t.buildConfig), W.production && t.productionConfig && n(t.productionConfig);
        }
        function O(e) {
          var t = e.match(re);
          return t && "System.register" == e.substr(t[0].length, 15);
        }
        function R() {
          return {
            name: null,
            deps: null,
            originalIndices: null,
            declare: null,
            execute: null,
            executingRequire: !1,
            declarative: !1,
            normalizedDeps: null,
            groupIndex: null,
            evaluated: !1,
            module: null,
            esModule: null,
            esmExports: !1
          };
        }
        function M(t) {
          if ("string" == typeof t)
            return x(t, e);
          if (!(t instanceof Array))
            throw new Error("Global exports must be a string or array.");
          for (var n = {},
              r = !0,
              a = 0; a < t.length; a++) {
            var o = x(t[a], e);
            r && (n.default = o, r = !1), n[t[a].split(".").pop()] = o;
          }
          return n;
        }
        function z(e) {
          var t,
              n,
              r,
              r = "~" == e[0],
              a = e.lastIndexOf("|");
          return a != -1 ? (t = e.substr(a + 1), n = e.substr(r, a - r), r && w.call(this, 'Condition negation form "' + e + '" is deprecated for "' + n + "|~" + t + '"'), "~" == t[0] && (r = !0, t = t.substr(1))) : (t = "default", n = e.substr(r), ae.indexOf(n) != -1 && (t = n, n = null)), {
            module: n || "@system-env",
            prop: t,
            negate: r
          };
        }
        function I(e) {
          return e.module + "|" + (e.negate ? "~" : "") + e.prop;
        }
        function C(e, t, n) {
          var r = this;
          return this.normalize(e.module, t).then(function(t) {
            return r.load(t).then(function(a) {
              var o = x(e.prop, r.get(t));
              if (n && "boolean" != typeof o)
                throw new TypeError("Condition " + I(e) + " did not resolve to a boolean.");
              return e.negate ? !o : o;
            });
          });
        }
        function L(e, t) {
          var n = e.match(oe);
          if (!n)
            return Promise.resolve(e);
          var r = z.call(this, n[0].substr(2, n[0].length - 3));
          return this.builder ? this.normalize(r.module, t).then(function(t) {
            return r.module = t, e.replace(oe, "#{" + I(r) + "}");
          }) : C.call(this, r, t, !1).then(function(n) {
            if ("string" != typeof n)
              throw new TypeError("The condition value for " + e + " doesn't resolve to a string.");
            if (n.indexOf("/") != -1)
              throw new TypeError("Unabled to interpolate conditional " + e + (t ? " in " + t : "") + "\n\tThe condition value " + n + ' cannot contain a "/" separator.');
            return e.replace(oe, n);
          });
        }
        function T(e, t) {
          var n = e.lastIndexOf("#?");
          if (n == -1)
            return Promise.resolve(e);
          var r = z.call(this, e.substr(n + 2));
          return this.builder ? this.normalize(r.module, t).then(function(t) {
            return r.module = t, e.substr(0, n) + "#?" + I(r);
          }) : C.call(this, r, t, !0).then(function(t) {
            return t ? e.substr(0, n) : "@empty";
          });
        }
        var D = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts,
            q = "undefined" != typeof window && "undefined" != typeof document,
            U = "undefined" != typeof process && "undefined" != typeof process.platform && !!process.platform.match(/^win/);
        e.console || (e.console = {assert: function() {}});
        var A,
            J = Array.prototype.indexOf || function(e) {
              for (var t = 0,
                  n = this.length; t < n; t++)
                if (this[t] === e)
                  return t;
              return -1;
            };
        !function() {
          try {
            Object.defineProperty({}, "a", {}) && (A = Object.defineProperty);
          } catch (e) {
            A = function(e, t, n) {
              try {
                e[t] = n.value || n.get.call(e);
              } catch (e) {}
            };
          }
        }();
        var $,
            N = "_" == new Error(0, "_").fileName;
        if ("undefined" != typeof document && document.getElementsByTagName) {
          if ($ = document.baseURI, !$) {
            var F = document.getElementsByTagName("base");
            $ = F[0] && F[0].href || window.location.href;
          }
        } else
          "undefined" != typeof location && ($ = e.location.href);
        if ($)
          $ = $.split("#")[0].split("?")[0], $ = $.substr(0, $.lastIndexOf("/") + 1);
        else {
          if ("undefined" == typeof process || !process.cwd)
            throw new TypeError("No environment baseURI");
          $ = "file://" + (U ? "/" : "") + process.cwd() + "/", U && ($ = $.replace(/\\/g, "/"));
        }
        try {
          var B = "test:" == new e.URL("test:///").protocol;
        } catch (e) {}
        var H = B ? e.URL : e.URLPolyfill;
        A(n.prototype, "toString", {value: function() {
            return "Module";
          }}), function() {
          function e(e) {
            return {
              status: "loading",
              name: e || "<Anonymous" + ++b + ">",
              linkSets: [],
              dependencies: [],
              metadata: {}
            };
          }
          function a(e, t, n) {
            return new Promise(u({
              step: n.address ? "fetch" : "locate",
              loader: e,
              moduleName: t,
              moduleMetadata: n && n.metadata || {},
              moduleSource: n.source,
              moduleAddress: n.address
            }));
          }
          function o(t, n, r, a) {
            return new Promise(function(e, o) {
              e(t.loaderObj.normalize(n, r, a));
            }).then(function(n) {
              var r;
              if (t.modules[n])
                return r = e(n), r.status = "linked", r.module = t.modules[n], r;
              for (var a = 0,
                  o = t.loads.length; a < o; a++)
                if (r = t.loads[a], r.name == n)
                  return r;
              return r = e(n), t.loads.push(r), i(t, r), r;
            });
          }
          function i(e, t) {
            s(e, t, Promise.resolve().then(function() {
              return e.loaderObj.locate({
                name: t.name,
                metadata: t.metadata
              });
            }));
          }
          function s(e, t, n) {
            l(e, t, n.then(function(n) {
              if ("loading" == t.status)
                return t.address = n, e.loaderObj.fetch({
                  name: t.name,
                  metadata: t.metadata,
                  address: n
                });
            }));
          }
          function l(e, t, n) {
            n.then(function(n) {
              if ("loading" == t.status)
                return t.address = t.address || t.name, Promise.resolve(e.loaderObj.translate({
                  name: t.name,
                  metadata: t.metadata,
                  address: t.address,
                  source: n
                })).then(function(n) {
                  return t.source = n, e.loaderObj.instantiate({
                    name: t.name,
                    metadata: t.metadata,
                    address: t.address,
                    source: n
                  });
                }).then(function(e) {
                  if (void 0 === e)
                    throw new TypeError("Declarative modules unsupported in the polyfill.");
                  if ("object" != typeof e)
                    throw new TypeError("Invalid instantiate return value");
                  t.depsList = e.deps || [], t.execute = e.execute;
                }).then(function() {
                  t.dependencies = [];
                  for (var n = t.depsList,
                      r = [],
                      a = 0,
                      i = n.length; a < i; a++)
                    (function(n, a) {
                      r.push(o(e, n, t.name, t.address).then(function(e) {
                        if (t.dependencies[a] = {
                          key: n,
                          value: e.name
                        }, "linked" != e.status)
                          for (var r = t.linkSets.concat([]),
                              o = 0,
                              i = r.length; o < i; o++)
                            c(r[o], e);
                      }));
                    })(n[a], a);
                  return Promise.all(r);
                }).then(function() {
                  t.status = "loaded";
                  for (var e = t.linkSets.concat([]),
                      n = 0,
                      r = e.length; n < r; n++)
                    m(e[n], t);
                });
            }).catch(function(e) {
              t.status = "failed", t.exception = e;
              for (var n = t.linkSets.concat([]),
                  r = 0,
                  a = n.length; r < a; r++)
                p(n[r], t, e);
            });
          }
          function u(t) {
            return function(n, r) {
              var a = t.loader,
                  o = t.moduleName,
                  u = t.step;
              if (a.modules[o])
                throw new TypeError('"' + o + '" already exists in the module table');
              for (var c,
                  f = 0,
                  m = a.loads.length; f < m; f++)
                if (a.loads[f].name == o && (c = a.loads[f], "translate" != u || c.source || (c.address = t.moduleAddress, l(a, c, Promise.resolve(t.moduleSource))), c.linkSets.length && c.linkSets[0].loads[0].name == c.name))
                  return c.linkSets[0].done.then(function() {
                    n(c);
                  });
              var p = c || e(o);
              p.metadata = t.moduleMetadata;
              var h = d(a, p);
              a.loads.push(p), n(h.done), "locate" == u ? i(a, p) : "fetch" == u ? s(a, p, Promise.resolve(t.moduleAddress)) : (p.address = t.moduleAddress, l(a, p, Promise.resolve(t.moduleSource)));
            };
          }
          function d(e, t) {
            var n = {
              loader: e,
              loads: [],
              startingLoad: t,
              loadingCount: 0
            };
            return n.done = new Promise(function(e, t) {
              n.resolve = e, n.reject = t;
            }), c(n, t), n;
          }
          function c(e, t) {
            if ("failed" != t.status) {
              for (var n = 0,
                  r = e.loads.length; n < r; n++)
                if (e.loads[n] == t)
                  return;
              e.loads.push(t), t.linkSets.push(e), "loaded" != t.status && e.loadingCount++;
              for (var a = e.loader,
                  n = 0,
                  r = t.dependencies.length; n < r; n++)
                if (t.dependencies[n]) {
                  var o = t.dependencies[n].value;
                  if (!a.modules[o])
                    for (var i = 0,
                        s = a.loads.length; i < s; i++)
                      if (a.loads[i].name == o) {
                        c(e, a.loads[i]);
                        break;
                      }
                }
            }
          }
          function f(e) {
            var t = !1;
            try {
              y(e, function(n, r) {
                p(e, n, r), t = !0;
              });
            } catch (n) {
              p(e, null, n), t = !0;
            }
            return t;
          }
          function m(e, t) {
            if (e.loadingCount--, !(e.loadingCount > 0)) {
              var n = e.startingLoad;
              if (e.loader.loaderObj.execute === !1) {
                for (var r = [].concat(e.loads),
                    a = 0,
                    o = r.length; a < o; a++) {
                  var t = r[a];
                  t.module = {
                    name: t.name,
                    module: w({}),
                    evaluated: !0
                  }, t.status = "linked", h(e.loader, t);
                }
                return e.resolve(n);
              }
              var i = f(e);
              i || e.resolve(n);
            }
          }
          function p(e, n, r) {
            var a = e.loader;
            e: if (n)
              if (e.loads[0].name == n.name)
                r = t(r, "Error loading " + n.name);
              else {
                for (var o = 0; o < e.loads.length; o++)
                  for (var i = e.loads[o],
                      s = 0; s < i.dependencies.length; s++) {
                    var l = i.dependencies[s];
                    if (l.value == n.name) {
                      r = t(r, "Error loading " + n.name + ' as "' + l.key + '" from ' + i.name);
                      break e;
                    }
                  }
                r = t(r, "Error loading " + n.name + " from " + e.loads[0].name);
              }
            else
              r = t(r, "Error linking " + e.loads[0].name);
            for (var u = e.loads.concat([]),
                o = 0,
                d = u.length; o < d; o++) {
              var n = u[o];
              a.loaderObj.failed = a.loaderObj.failed || [], J.call(a.loaderObj.failed, n) == -1 && a.loaderObj.failed.push(n);
              var c = J.call(n.linkSets, e);
              if (n.linkSets.splice(c, 1), 0 == n.linkSets.length) {
                var f = J.call(e.loader.loads, n);
                f != -1 && e.loader.loads.splice(f, 1);
              }
            }
            e.reject(r);
          }
          function h(e, t) {
            if (e.loaderObj.trace) {
              e.loaderObj.loads || (e.loaderObj.loads = {});
              var n = {};
              t.dependencies.forEach(function(e) {
                n[e.key] = e.value;
              }), e.loaderObj.loads[t.name] = {
                name: t.name,
                deps: t.dependencies.map(function(e) {
                  return e.key;
                }),
                depMap: n,
                address: t.address,
                metadata: t.metadata,
                source: t.source
              };
            }
            t.name && (e.modules[t.name] = t.module);
            var r = J.call(e.loads, t);
            r != -1 && e.loads.splice(r, 1);
            for (var a = 0,
                o = t.linkSets.length; a < o; a++)
              r = J.call(t.linkSets[a].loads, t), r != -1 && t.linkSets[a].loads.splice(r, 1);
            t.linkSets.splice(0, t.linkSets.length);
          }
          function g(e, t, r) {
            try {
              var a = t.execute();
            } catch (e) {
              return void r(t, e);
            }
            return a && a instanceof n ? a : void r(t, new TypeError("Execution must define a Module instance"));
          }
          function v(e, t, n) {
            var r = e._loader.importPromises;
            return r[t] = n.then(function(e) {
              return r[t] = void 0, e;
            }, function(e) {
              throw r[t] = void 0, e;
            });
          }
          function y(e, t) {
            var n = e.loader;
            if (e.loads.length)
              for (var r = e.loads.concat([]),
                  a = 0; a < r.length; a++) {
                var o = r[a],
                    i = g(e, o, t);
                if (!i)
                  return;
                o.module = {
                  name: o.name,
                  module: i
                }, o.status = "linked", h(n, o);
              }
          }
          var b = 0;
          r.prototype = {
            constructor: r,
            define: function(e, t, n) {
              if (this._loader.importPromises[e])
                throw new TypeError("Module is already loading.");
              return v(this, e, new Promise(u({
                step: "translate",
                loader: this._loader,
                moduleName: e,
                moduleMetadata: n && n.metadata || {},
                moduleSource: t,
                moduleAddress: n && n.address
              })));
            },
            delete: function(e) {
              var t = this._loader;
              return delete t.importPromises[e], delete t.moduleRecords[e], !!t.modules[e] && delete t.modules[e];
            },
            get: function(e) {
              if (this._loader.modules[e])
                return this._loader.modules[e].module;
            },
            has: function(e) {
              return !!this._loader.modules[e];
            },
            import: function(e, t, n) {
              "object" == typeof t && (t = t.name);
              var r = this;
              return Promise.resolve(r.normalize(e, t)).then(function(e) {
                var t = r._loader;
                return t.modules[e] ? t.modules[e].module : t.importPromises[e] || v(r, e, a(t, e, {}).then(function(n) {
                  return delete t.importPromises[e], n.module.module;
                }));
              });
            },
            load: function(e) {
              var t = this._loader;
              return t.modules[e] ? Promise.resolve() : t.importPromises[e] || v(this, e, new Promise(u({
                step: "locate",
                loader: t,
                moduleName: e,
                moduleMetadata: {},
                moduleSource: void 0,
                moduleAddress: void 0
              })).then(function() {
                delete t.importPromises[e];
              }));
            },
            module: function(t, n) {
              var r = e();
              r.address = n && n.address;
              var a = d(this._loader, r),
                  o = Promise.resolve(t),
                  i = this._loader,
                  s = a.done.then(function() {
                    return r.module.module;
                  });
              return l(i, r, o), s;
            },
            newModule: function(e) {
              if ("object" != typeof e)
                throw new TypeError("Expected object");
              var t = new n,
                  r = [];
              if (Object.getOwnPropertyNames && null != e)
                r = Object.getOwnPropertyNames(e);
              else
                for (var a in e)
                  r.push(a);
              for (var o = 0; o < r.length; o++)
                (function(n) {
                  A(t, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: function() {
                      return e[n];
                    },
                    set: function() {
                      throw new Error("Module exports cannot be changed externally.");
                    }
                  });
                })(r[o]);
              return Object.freeze && Object.freeze(t), t;
            },
            set: function(e, t) {
              if (!(t instanceof n))
                throw new TypeError("Loader.set(" + e + ", module) must be a module");
              this._loader.modules[e] = {module: t};
            },
            normalize: function(e, t, n) {},
            locate: function(e) {
              return e.name;
            },
            fetch: function(e) {},
            translate: function(e) {
              return e.source;
            },
            instantiate: function(e) {}
          };
          var w = r.prototype.newModule;
        }();
        var X;
        o.prototype = r.prototype, a.prototype = new o, a.prototype.constructor = a;
        var G,
            V = /^[^\/]+:\/\//,
            Y = new H($),
            Z = !0;
        try {
          Object.getOwnPropertyDescriptor({a: 0}, "a");
        } catch (e) {
          Z = !1;
        }
        var K;
        if ("undefined" != typeof XMLHttpRequest)
          K = function(e, t, n, r) {
            function a() {
              n(i.responseText);
            }
            function o() {
              r(new Error("XHR error" + (i.status ? " (" + i.status + (i.statusText ? " " + i.statusText : "") + ")" : "") + " loading " + e));
            }
            var i = new XMLHttpRequest,
                s = !0,
                l = !1;
            if (!("withCredentials" in i)) {
              var u = /^(\w+:)?\/\/([^\/]+)/.exec(e);
              u && (s = u[2] === window.location.host, u[1] && (s &= u[1] === window.location.protocol));
            }
            s || "undefined" == typeof XDomainRequest || (i = new XDomainRequest, i.onload = a, i.onerror = o, i.ontimeout = o, i.onprogress = function() {}, i.timeout = 0, l = !0), i.onreadystatechange = function() {
              4 === i.readyState && (0 == i.status ? i.responseText ? a() : (i.addEventListener("error", o), i.addEventListener("load", a)) : 200 === i.status ? a() : o());
            }, i.open("GET", e, !0), i.setRequestHeader && (i.setRequestHeader("Accept", "application/x-es-module, */*"), t && ("string" == typeof t && i.setRequestHeader("Authorization", t), i.withCredentials = !0)), l ? setTimeout(function() {
              i.send();
            }, 0) : i.send(null);
          };
        else if ("undefined" != typeof require && "undefined" != typeof process) {
          var Q;
          K = function(e, t, n, r) {
            if ("file:///" != e.substr(0, 8))
              throw new Error('Unable to fetch "' + e + '". Only file URLs of the form file:/// allowed running in Node.');
            return Q = Q || require('fs'), e = U ? e.replace(/\//g, "\\").substr(8) : e.substr(7), Q.readFile(e, function(e, t) {
              if (e)
                return r(e);
              var a = t + "";
              "\ufeff" === a[0] && (a = a.substr(1)), n(a);
            });
          };
        } else {
          if ("undefined" == typeof self || "undefined" == typeof self.fetch)
            throw new TypeError("No environment fetch API available.");
          K = function(e, t, n, r) {
            var a = {headers: {Accept: "application/x-es-module, */*"}};
            t && ("string" == typeof t && (a.headers.Authorization = t), a.credentials = "include"), fetch(e, a).then(function(e) {
              if (e.ok)
                return e.text();
              throw new Error("Fetch error: " + e.status + " " + e.statusText);
            }).then(n, r);
          };
        }
        var W;
        s(function(e) {
          return function() {
            e.call(this), this.baseURL = $, this.map = {}, "undefined" != typeof $__curScript && (this.scriptSrc = $__curScript.src), this.warnings = !1, this.defaultJSExtensions = !1, this.pluginFirst = !1, this.loaderErrorStack = !1, this.set("@empty", this.newModule({})), _.call(this, !1, !1);
          };
        }), "undefined" == typeof require || "undefined" == typeof process || process.browser || (a.prototype._nodeRequire = require);
        var ee;
        i("normalize", function(e) {
          return function(e, t, n) {
            var r = k.call(this, e, t);
            return !this.defaultJSExtensions || n || ".js" == r.substr(r.length - 3, 3) || d(r) || (r += ".js"), r;
          };
        });
        var te = "undefined" != typeof XMLHttpRequest;
        i("locate", function(e) {
          return function(t) {
            return Promise.resolve(e.call(this, t)).then(function(e) {
              return te ? e.replace(/#/g, "%23") : e;
            });
          };
        }), i("fetch", function() {
          return function(e) {
            return new Promise(function(t, n) {
              K(e.address, e.metadata.authorization, t, n);
            });
          };
        }), i("import", function(e) {
          return function(t, n, r) {
            return n && n.name && w.call(this, "SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing " + t + " from " + n.name), e.call(this, t, n, r).then(function(e) {
              return e.__useDefault ? e.default : e;
            });
          };
        }), i("translate", function(e) {
          return function(t) {
            return "detect" == t.metadata.format && (t.metadata.format = void 0), e.apply(this, arguments);
          };
        }), i("instantiate", function(e) {
          return function(e) {
            if ("json" == e.metadata.format && !this.builder) {
              var t = e.metadata.entry = R();
              t.deps = [], t.execute = function() {
                try {
                  return JSON.parse(e.source);
                } catch (t) {
                  throw new Error("Invalid JSON file " + e.name);
                }
              };
            }
          };
        }), a.prototype.getConfig = function(e) {
          var t = {},
              n = this;
          for (var r in n)
            n.hasOwnProperty && !n.hasOwnProperty(r) || r in a.prototype && "transpiler" != r || J.call(["_loader", "amdDefine", "amdRequire", "defined", "failed", "version", "loads"], r) == -1 && (t[r] = n[r]);
          return t.production = W.production, t;
        };
        var ne;
        a.prototype.config = function(e, t) {
          function n(e) {
            for (var t in e)
              if (e.hasOwnProperty(t))
                return !0;
          }
          var r = this;
          if ("loaderErrorStack" in e && (ne = $__curScript, e.loaderErrorStack ? $__curScript = void 0 : $__curScript = ne), "warnings" in e && (r.warnings = e.warnings), e.transpilerRuntime === !1 && (r._loader.loadedTranspilerRuntime = !0), ("production" in e || "build" in e) && _.call(r, !!e.production, !!(e.build || W && W.build)), !t) {
            var a;
            if (j(r, e, function(e) {
              a = a || e.baseURL;
            }), a = a || e.baseURL) {
              if (n(r.packages) || n(r.meta) || n(r.depCache) || n(r.bundles) || n(r.packageConfigPaths))
                throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");
              this.baseURL = a, E.call(this);
            }
            if (e.paths && g(r.paths, e.paths), j(r, e, function(e) {
              e.paths && g(r.paths, e.paths);
            }), this.warnings)
              for (var o in r.paths)
                o.indexOf("*") != -1 && w.call(r, 'Paths configuration "' + o + '" -> "' + r.paths[o] + '" uses wildcards which are being deprecated for simpler trailing "/" folder paths.');
          }
          if (e.defaultJSExtensions && (r.defaultJSExtensions = e.defaultJSExtensions, w.call(r, "The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")), e.pluginFirst && (r.pluginFirst = e.pluginFirst), e.map) {
            var i = "";
            for (var o in e.map) {
              var s = e.map[o];
              if ("string" != typeof s) {
                i += (i.length ? ", " : "") + '"' + o + '"';
                var l = r.defaultJSExtensions && ".js" != o.substr(o.length - 3, 3),
                    u = r.decanonicalize(o);
                l && ".js" == u.substr(u.length - 3, 3) && (u = u.substr(0, u.length - 3));
                var c = "";
                for (var f in r.packages)
                  u.substr(0, f.length) == f && (!u[f.length] || "/" == u[f.length]) && c.split("/").length < f.split("/").length && (c = f);
                c && r.packages[c].main && (u = u.substr(0, u.length - r.packages[c].main.length - 1));
                var f = r.packages[u] = r.packages[u] || {};
                f.map = s;
              } else
                r.map[o] = s;
            }
            i && w.call(r, "The map configuration for " + i + ' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "' + o + '": { map: {...} } } }).');
          }
          if (e.packageConfigPaths) {
            for (var m = [],
                p = 0; p < e.packageConfigPaths.length; p++) {
              var h = e.packageConfigPaths[p],
                  v = Math.max(h.lastIndexOf("*") + 1, h.lastIndexOf("/")),
                  y = k.call(r, h.substr(0, v));
              m[p] = y + h.substr(v);
            }
            r.packageConfigPaths = m;
          }
          if (e.bundles)
            for (var o in e.bundles) {
              for (var x = [],
                  p = 0; p < e.bundles[o].length; p++) {
                var l = r.defaultJSExtensions && ".js" != e.bundles[o][p].substr(e.bundles[o][p].length - 3, 3),
                    S = r.decanonicalize(e.bundles[o][p]);
                l && ".js" == S.substr(S.length - 3, 3) && (S = S.substr(0, S.length - 3)), x.push(S);
              }
              r.bundles[o] = x;
            }
          if (e.packages)
            for (var o in e.packages) {
              if (o.match(/^([^\/]+:)?\/\/$/))
                throw new TypeError('"' + o + '" is not a valid package name.');
              var u = k.call(r, o);
              "/" == u[u.length - 1] && (u = u.substr(0, u.length - 1)), b(r, u, e.packages[o], !1);
            }
          for (var P in e) {
            var s = e[P];
            if (J.call(["baseURL", "map", "packages", "bundles", "paths", "warnings", "packageConfigPaths", "loaderErrorStack", "browserConfig", "nodeConfig", "devConfig", "buildConfig", "productionConfig"], P) == -1)
              if ("object" != typeof s || s instanceof Array)
                r[P] = s;
              else {
                r[P] = r[P] || {};
                for (var o in s)
                  if ("meta" == P && "*" == o[0])
                    g(r[P][o] = r[P][o] || {}, s[o]);
                  else if ("meta" == P) {
                    var O = k.call(r, o);
                    r.defaultJSExtensions && ".js" != O.substr(O.length - 3, 3) && !d(O) && (O += ".js"), g(r[P][O] = r[P][O] || {}, s[o]);
                  } else if ("depCache" == P) {
                    var l = r.defaultJSExtensions && ".js" != o.substr(o.length - 3, 3),
                        u = r.decanonicalize(o);
                    l && ".js" == u.substr(u.length - 3, 3) && (u = u.substr(0, u.length - 3)), r[P][u] = [].concat(s[o]);
                  } else
                    r[P][o] = s[o];
              }
          }
          j(r, e, function(e) {
            r.config(e, !0);
          });
        }, function() {
          function e(e, t) {
            var n,
                r,
                a = 0;
            for (var o in e.packages)
              t.substr(0, o.length) !== o || t.length !== o.length && "/" !== t[o.length] || (r = o.split("/").length, r > a && (n = o, a = r));
            return n;
          }
          function t(e, t, n, r, a) {
            if (!r || "/" == r[r.length - 1] || a || t.defaultExtension === !1)
              return r;
            var o = !1;
            if (t.meta && p(t.meta, r, function(e, t, n) {
              if (0 == n || e.lastIndexOf("*") != e.length - 1)
                return o = !0;
            }), !o && e.meta && p(e.meta, n + "/" + r, function(e, t, n) {
              if (0 == n || e.lastIndexOf("*") != e.length - 1)
                return o = !0;
            }), o)
              return r;
            var i = "." + (t.defaultExtension || "js");
            return r.substr(r.length - i.length) != i ? r + i : r;
          }
          function n(e, n, r, a, i) {
            if (!a) {
              if (!n.main)
                return r + (e.defaultJSExtensions ? ".js" : "");
              a = "./" == n.main.substr(0, 2) ? n.main.substr(2) : n.main;
            }
            if (n.map) {
              var s = "./" + a,
                  l = S(n.map, s);
              if (l || (s = "./" + t(e, n, r, a, i), s != "./" + a && (l = S(n.map, s))), l) {
                var u = o(e, n, r, l, s, i);
                if (u)
                  return u;
              }
            }
            return r + "/" + t(e, n, r, a, i);
          }
          function r(e, t, n, r) {
            if ("." == e)
              throw new Error("Package " + n + ' has a map entry for "." which is not permitted.');
            return !(t.substr(0, e.length) == e && r.length > e.length);
          }
          function o(e, n, a, o, i, s) {
            "/" == i[i.length - 1] && (i = i.substr(0, i.length - 1));
            var l = n.map[o];
            if ("object" == typeof l)
              throw new Error("Synchronous conditional normalization not supported sync normalizing " + o + " in " + a);
            if (r(o, l, a, i) && "string" == typeof l) {
              if ("." == l)
                l = a;
              else if ("./" == l.substr(0, 2))
                return a + "/" + t(e, n, a, l.substr(2) + i.substr(o.length), s);
              return e.normalizeSync(l + i.substr(o.length), a + "/");
            }
          }
          function l(e, n, r, a, o) {
            if (!a) {
              if (!n.main)
                return Promise.resolve(r + (e.defaultJSExtensions ? ".js" : ""));
              a = "./" == n.main.substr(0, 2) ? n.main.substr(2) : n.main;
            }
            var i,
                s;
            return n.map && (i = "./" + a, s = S(n.map, i), s || (i = "./" + t(e, n, r, a, o), i != "./" + a && (s = S(n.map, i)))), (s ? d(e, n, r, s, i, o) : Promise.resolve()).then(function(i) {
              return i ? Promise.resolve(i) : Promise.resolve(r + "/" + t(e, n, r, a, o));
            });
          }
          function u(e, n, r, a, o, i, s) {
            if ("." == o)
              o = r;
            else if ("./" == o.substr(0, 2))
              return Promise.resolve(r + "/" + t(e, n, r, o.substr(2) + i.substr(a.length), s)).then(function(t) {
                return L.call(e, t, r + "/");
              });
            return e.normalize(o + i.substr(a.length), r + "/");
          }
          function d(e, t, n, a, o, i) {
            "/" == o[o.length - 1] && (o = o.substr(0, o.length - 1));
            var s = t.map[a];
            if ("string" == typeof s)
              return r(a, s, n, o) ? u(e, t, n, a, s, o, i) : Promise.resolve();
            if (e.builder)
              return Promise.resolve(n + "/#:" + o);
            var l = [],
                d = [];
            for (var c in s) {
              var f = z(c);
              d.push({
                condition: f,
                map: s[c]
              }), l.push(e.import(f.module, n));
            }
            return Promise.all(l).then(function(e) {
              for (var t = 0; t < d.length; t++) {
                var n = d[t].condition,
                    r = x(n.prop, e[t]);
                if (!n.negate && r || n.negate && !r)
                  return d[t].map;
              }
            }).then(function(s) {
              if (s) {
                if (!r(a, s, n, o))
                  return;
                return u(e, t, n, a, s, o, i);
              }
            });
          }
          function c(e) {
            var t = e.lastIndexOf("*"),
                n = Math.max(t + 1, e.lastIndexOf("/"));
            return {
              length: n,
              regEx: new RegExp("^(" + e.substr(0, n).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^\\/]+") + ")(\\/|$)"),
              wildcard: t != -1
            };
          }
          function f(e, t) {
            for (var n,
                r,
                a = !1,
                o = 0; o < e.packageConfigPaths.length; o++) {
              var i = e.packageConfigPaths[o],
                  s = h[i] || (h[i] = c(i));
              if (!(t.length < s.length)) {
                var l = t.match(s.regEx);
                !l || n && (a && s.wildcard || !(n.length < l[1].length)) || (n = l[1], a = !s.wildcard, r = n + i.substr(s.length));
              }
            }
            if (n)
              return {
                packageName: n,
                configPath: r
              };
          }
          function m(e, t, n) {
            var r = e.pluginLoader || e;
            return (r.meta[n] = r.meta[n] || {}).format = "json", r.meta[n].loader = null, r.load(n).then(function() {
              var a = r.get(n).default;
              return a.systemjs && (a = a.systemjs), a.modules && (a.meta = a.modules, w.call(e, "Package config file " + n + ' is configured with "modules", which is deprecated as it has been renamed to "meta".')), b(e, t, a, !0);
            });
          }
          function p(e, t, n) {
            var r;
            for (var a in e) {
              var o = "./" == a.substr(0, 2) ? "./" : "";
              if (o && (a = a.substr(2)), r = a.indexOf("*"), r !== -1 && a.substr(0, r) == t.substr(0, r) && a.substr(r + 1) == t.substr(t.length - a.length + r + 1) && n(a, e[o + a], a.split("/").length))
                return;
            }
            var i = e[t] && e.hasOwnProperty && e.hasOwnProperty(t) ? e[t] : e["./" + t];
            i && n(i, i, 0);
          }
          s(function(e) {
            return function() {
              e.call(this), this.packages = {}, this.packageConfigPaths = [];
            };
          }), a.prototype.normalizeSync = a.prototype.decanonicalize = a.prototype.normalize, i("decanonicalize", function(t) {
            return function(n, r) {
              if (this.builder)
                return t.call(this, n, r, !0);
              var a = t.call(this, n, r, !1);
              if (!this.defaultJSExtensions)
                return a;
              var o = e(this, a),
                  i = this.packages[o],
                  s = i && i.defaultExtension;
              return void 0 == s && i && i.meta && p(i.meta, a.substr(o), function(e, t, n) {
                if (0 == n || e.lastIndexOf("*") != e.length - 1)
                  return s = !1, !0;
              }), (s === !1 || s && ".js" != s) && ".js" != n.substr(n.length - 3, 3) && ".js" == a.substr(a.length - 3, 3) && (a = a.substr(0, a.length - 3)), a;
            };
          }), i("normalizeSync", function(t) {
            return function(r, a, i) {
              var s = this;
              if (i = i === !0, a)
                var l = e(s, a) || s.defaultJSExtensions && ".js" == a.substr(a.length - 3, 3) && e(s, a.substr(0, a.length - 3));
              var u = l && s.packages[l];
              if (u && "." != r[0]) {
                var d = u.map,
                    c = d && S(d, r);
                if (c && "string" == typeof d[c]) {
                  var m = o(s, u, l, c, r, i);
                  if (m)
                    return m;
                }
              }
              var p = s.defaultJSExtensions && ".js" != r.substr(r.length - 3, 3),
                  h = t.call(s, r, a, !1);
              p && ".js" != h.substr(h.length - 3, 3) && (p = !1), p && (h = h.substr(0, h.length - 3));
              var g = f(s, h),
                  v = g && g.packageName || e(s, h);
              if (!v)
                return h + (p ? ".js" : "");
              var y = h.substr(v.length + 1);
              return n(s, s.packages[v] || {}, v, y, i);
            };
          }), i("normalize", function(t) {
            return function(n, r, a) {
              var o = this;
              return a = a === !0, Promise.resolve().then(function() {
                if (r)
                  var t = e(o, r) || o.defaultJSExtensions && ".js" == r.substr(r.length - 3, 3) && e(o, r.substr(0, r.length - 3));
                var i = t && o.packages[t];
                if (i && "./" != n.substr(0, 2)) {
                  var s = i.map,
                      l = s && S(s, n);
                  if (l)
                    return d(o, i, t, l, n, a);
                }
                return Promise.resolve();
              }).then(function(i) {
                if (i)
                  return i;
                var s = o.defaultJSExtensions && ".js" != n.substr(n.length - 3, 3),
                    u = t.call(o, n, r, !1);
                s && ".js" != u.substr(u.length - 3, 3) && (s = !1), s && (u = u.substr(0, u.length - 3));
                var d = f(o, u),
                    c = d && d.packageName || e(o, u);
                if (!c)
                  return Promise.resolve(u + (s ? ".js" : ""));
                var p = o.packages[c],
                    h = p && (p.configured || !d);
                return (h ? Promise.resolve(p) : m(o, c, d.configPath)).then(function(e) {
                  var t = u.substr(c.length + 1);
                  return l(o, e, c, t, a);
                });
              });
            };
          });
          var h = {};
          i("locate", function(t) {
            return function(n) {
              var r = this;
              return Promise.resolve(t.call(this, n)).then(function(t) {
                var a = e(r, n.name);
                if (a) {
                  var o = r.packages[a],
                      i = n.name.substr(a.length + 1),
                      s = {};
                  if (o.meta) {
                    var l = 0;
                    p(o.meta, i, function(e, t, n) {
                      n > l && (l = n), v(s, t, n && l > n);
                    }), v(n.metadata, s);
                  }
                  o.format && !n.metadata.loader && (n.metadata.format = n.metadata.format || o.format);
                }
                return t;
              });
            };
          });
        }(), function() {
          function t() {
            if (s && "interactive" === s.script.readyState)
              return s.load;
            for (var e = 0; e < d.length; e++)
              if ("interactive" == d[e].script.readyState)
                return s = d[e], s.load;
          }
          function n(e, t) {
            return new Promise(function(e, n) {
              t.metadata.integrity && n(new Error("Subresource integrity checking is not supported in web workers.")), l = t;
              try {
                importScripts(t.address);
              } catch (e) {
                l = null, n(e);
              }
              l = null, t.metadata.entry || n(new Error(t.address + " did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.")), e("");
            });
          }
          if ("undefined" != typeof document)
            var r = document.getElementsByTagName("head")[0];
          var a,
              o,
              s,
              l = null,
              u = r && function() {
                var e = document.createElement("script"),
                    t = "undefined" != typeof opera && "[object Opera]" === opera.toString();
                return e.attachEvent && !(e.attachEvent.toString && e.attachEvent.toString().indexOf("[native code") < 0) && !t;
              }(),
              d = [],
              c = 0,
              f = [];
          i("pushRegister_", function(e) {
            return function(n) {
              return !e.call(this, n) && (l ? this.reduceRegister_(l, n) : u ? this.reduceRegister_(t(), n) : c ? f.push(n) : this.reduceRegister_(null, n), !0);
            };
          }), i("fetch", function(t) {
            return function(i) {
              var l = this;
              return "json" != i.metadata.format && i.metadata.scriptLoad && (q || D) ? D ? n(l, i) : new Promise(function(t, n) {
                function m(e) {
                  if (!g.readyState || "loaded" == g.readyState || "complete" == g.readyState) {
                    if (c--, i.metadata.entry || f.length) {
                      if (!u) {
                        for (var r = 0; r < f.length; r++)
                          l.reduceRegister_(i, f[r]);
                        f = [];
                      }
                    } else
                      l.reduceRegister_(i);
                    h(), i.metadata.entry || i.metadata.bundle || n(new Error(i.name + " did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")), t("");
                  }
                }
                function p(e) {
                  h(), n(new Error("Unable to load script " + i.address));
                }
                function h() {
                  if (e.System = a, e.require = o, g.detachEvent) {
                    g.detachEvent("onreadystatechange", m);
                    for (var t = 0; t < d.length; t++)
                      d[t].script == g && (s && s.script == g && (s = null), d.splice(t, 1));
                  } else
                    g.removeEventListener("load", m, !1), g.removeEventListener("error", p, !1);
                  r.removeChild(g);
                }
                var g = document.createElement("script");
                g.async = !0, i.metadata.crossOrigin && (g.crossOrigin = i.metadata.crossOrigin), i.metadata.integrity && g.setAttribute("integrity", i.metadata.integrity), u ? (g.attachEvent("onreadystatechange", m), d.push({
                  script: g,
                  load: i
                })) : (g.addEventListener("load", m, !1), g.addEventListener("error", p, !1)), c++, a = e.System, o = e.require, g.src = i.address, r.appendChild(g);
              }) : t.call(this, i);
            };
          });
        }();
        var re = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;
        !function() {
          function t(e, n, r) {
            if (r[e.groupIndex] = r[e.groupIndex] || [], J.call(r[e.groupIndex], e) == -1) {
              r[e.groupIndex].push(e);
              for (var a = 0,
                  o = e.normalizedDeps.length; a < o; a++) {
                var i = e.normalizedDeps[a],
                    s = n.defined[i];
                if (s && !s.evaluated) {
                  var l = e.groupIndex + (s.declarative != e.declarative);
                  if (null === s.groupIndex || s.groupIndex < l) {
                    if (null !== s.groupIndex && (r[s.groupIndex].splice(J.call(r[s.groupIndex], s), 1), 0 == r[s.groupIndex].length))
                      throw new Error("Mixed dependency cycle detected");
                    s.groupIndex = l;
                  }
                  t(s, n, r);
                }
              }
            }
          }
          function r(e, n, r) {
            if (!n.module) {
              n.groupIndex = 0;
              var a = [];
              t(n, r, a);
              for (var o = !!n.declarative == a.length % 2,
                  i = a.length - 1; i >= 0; i--) {
                for (var s = a[i],
                    l = 0; l < s.length; l++) {
                  var d = s[l];
                  o ? u(d, r) : c(d, r);
                }
                o = !o;
              }
            }
          }
          function o() {}
          function l(e, t) {
            return t[e] || (t[e] = {
              name: e,
              dependencies: [],
              exports: new o,
              importers: []
            });
          }
          function u(t, n) {
            if (!t.module) {
              var r = n._loader.moduleRecords,
                  a = t.module = l(t.name, r),
                  o = t.module.exports,
                  i = t.declare.call(e, function(e, t) {
                    if (a.locked = !0, "object" == typeof e)
                      for (var n in e)
                        o[n] = e[n];
                    else
                      o[e] = t;
                    for (var r = 0,
                        i = a.importers.length; r < i; r++) {
                      var s = a.importers[r];
                      if (!s.locked) {
                        var l = J.call(s.dependencies, a),
                            u = s.setters[l];
                        u && u(o);
                      }
                    }
                    return a.locked = !1, t;
                  }, {id: t.name});
              if ("function" == typeof i && (i = {
                setters: [],
                execute: i
              }), i = i || {
                setters: [],
                execute: function() {}
              }, a.setters = i.setters, a.execute = i.execute, !a.setters || !a.execute)
                throw new TypeError("Invalid System.register form for " + t.name);
              for (var s = 0,
                  d = t.normalizedDeps.length; s < d; s++) {
                var c,
                    f = t.normalizedDeps[s],
                    m = n.defined[f],
                    p = r[f];
                p ? c = p.exports : m && !m.declarative ? c = m.esModule : m ? (u(m, n), p = m.module, c = p.exports) : c = n.get(f), p && p.importers ? (p.importers.push(a), a.dependencies.push(p)) : a.dependencies.push(null);
                for (var h = t.originalIndices[s],
                    g = 0,
                    v = h.length; g < v; ++g) {
                  var y = h[g];
                  a.setters[y] && a.setters[y](c);
                }
              }
            }
          }
          function d(e, t) {
            var n,
                r = t.defined[e];
            if (r)
              r.declarative ? f(e, r, [], t) : r.evaluated || c(r, t), n = r.module.exports;
            else if (n = t.get(e), !n)
              throw new Error("Unable to load dependency " + e + ".");
            return (!r || r.declarative) && n && n.__useDefault ? n.default : n;
          }
          function c(t, r) {
            if (!t.module) {
              var a = {},
                  o = t.module = {
                    exports: a,
                    id: t.name
                  };
              if (!t.executingRequire)
                for (var i = 0,
                    s = t.normalizedDeps.length; i < s; i++) {
                  var l = t.normalizedDeps[i],
                      u = r.defined[l];
                  u && c(u, r);
                }
              t.evaluated = !0;
              var f = t.execute.call(e, function(e) {
                for (var n = 0,
                    a = t.deps.length; n < a; n++)
                  if (t.deps[n] == e)
                    return d(t.normalizedDeps[n], r);
                var o = r.normalizeSync(e, t.name);
                if (J.call(t.normalizedDeps, o) != -1)
                  return d(o, r);
                throw new Error("Module " + e + " not declared as a dependency of " + t.name);
              }, a, o);
              void 0 !== f && (o.exports = f), a = o.exports, a && (a.__esModule || a instanceof n) ? t.esModule = r.newModule(a) : t.esmExports && a !== e ? t.esModule = r.newModule(p(a)) : t.esModule = r.newModule({
                default: a,
                __useDefault: !0
              });
            }
          }
          function f(t, n, r, a) {
            if (n && !n.evaluated && n.declarative) {
              r.push(t);
              for (var o = 0,
                  i = n.normalizedDeps.length; o < i; o++) {
                var s = n.normalizedDeps[o];
                J.call(r, s) == -1 && (a.defined[s] ? f(s, a.defined[s], r, a) : a.get(s));
              }
              n.evaluated || (n.evaluated = !0, n.module.execute.call(e));
            }
          }
          a.prototype.register = function(e, t, n) {
            if ("string" != typeof e && (n = t, t = e, e = null), "boolean" == typeof n)
              return this.registerDynamic.apply(this, arguments);
            var r = R();
            r.name = e && (this.decanonicalize || this.normalize).call(this, e), r.declarative = !0, r.deps = t, r.declare = n, this.pushRegister_({
              amd: !1,
              entry: r
            });
          }, a.prototype.registerDynamic = function(e, t, n, r) {
            "string" != typeof e && (r = n, n = t, t = e, e = null);
            var a = R();
            a.name = e && (this.decanonicalize || this.normalize).call(this, e), a.deps = t, a.execute = r, a.executingRequire = n, this.pushRegister_({
              amd: !1,
              entry: a
            });
          }, i("reduceRegister_", function() {
            return function(e, t) {
              if (t) {
                var n = t.entry,
                    r = e && e.metadata;
                if (n.name && (n.name in this.defined || (this.defined[n.name] = n), r && (r.bundle = !0)), !n.name || e && !r.entry && n.name == e.name) {
                  if (!r)
                    throw new TypeError("Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.");
                  if (r.entry)
                    throw "register" == r.format ? new Error("Multiple anonymous System.register calls in module " + e.name + ". If loading a bundle, ensure all the System.register calls are named.") : new Error("Module " + e.name + " interpreted as " + r.format + " module format, but called System.register.");
                  r.format || (r.format = "register"), r.entry = n;
                }
              }
            };
          }), s(function(e) {
            return function() {
              e.call(this), this.defined = {}, this._loader.moduleRecords = {};
            };
          }), A(o, "toString", {value: function() {
              return "Module";
            }}), i("delete", function(e) {
            return function(t) {
              return delete this._loader.moduleRecords[t], delete this.defined[t], e.call(this, t);
            };
          }), i("fetch", function(e) {
            return function(t) {
              return this.defined[t.name] ? (t.metadata.format = "defined", "") : (t.metadata.deps = t.metadata.deps || [], e.call(this, t));
            };
          }), i("translate", function(e) {
            return function(t) {
              return t.metadata.deps = t.metadata.deps || [], Promise.resolve(e.apply(this, arguments)).then(function(e) {
                return ("register" == t.metadata.format || !t.metadata.format && O(t.source)) && (t.metadata.format = "register"), e;
              });
            };
          }), i("load", function(e) {
            return function(t) {
              var n = this,
                  a = n.defined[t];
              return !a || a.deps.length ? e.apply(this, arguments) : (a.originalIndices = a.normalizedDeps = [], r(t, a, n), f(t, a, [], n), a.esModule || (a.esModule = n.newModule(a.module.exports)), n.trace || (n.defined[t] = void 0), n.set(t, a.esModule), Promise.resolve());
            };
          }), i("instantiate", function(e) {
            return function(t) {
              "detect" == t.metadata.format && (t.metadata.format = void 0), e.call(this, t);
              var n,
                  a = this;
              if (a.defined[t.name])
                n = a.defined[t.name], n.declarative || (n.deps = n.deps.concat(t.metadata.deps)), n.deps = n.deps.concat(t.metadata.deps);
              else if (t.metadata.entry)
                n = t.metadata.entry, n.deps = n.deps.concat(t.metadata.deps);
              else if (!(a.builder && t.metadata.bundle || "register" != t.metadata.format && "esm" != t.metadata.format && "es6" != t.metadata.format)) {
                if ("undefined" != typeof __exec && __exec.call(a, t), !t.metadata.entry && !t.metadata.bundle)
                  throw new Error(t.name + " detected as " + t.metadata.format + " but didn't execute.");
                n = t.metadata.entry, n && t.metadata.deps && (n.deps = n.deps.concat(t.metadata.deps));
              }
              n || (n = R(), n.deps = t.metadata.deps, n.execute = function() {}), a.defined[t.name] = n;
              var o = m(n.deps);
              n.deps = o.names, n.originalIndices = o.indices, n.name = t.name, n.esmExports = t.metadata.esmExports !== !1;
              for (var i = [],
                  s = 0,
                  l = n.deps.length; s < l; s++)
                i.push(Promise.resolve(a.normalize(n.deps[s], t.name)));
              return Promise.all(i).then(function(e) {
                return n.normalizedDeps = e, {
                  deps: n.deps,
                  execute: function() {
                    return r(t.name, n, a), f(t.name, n, [], a), n.esModule || (n.esModule = a.newModule(n.module.exports)), a.trace || (a.defined[t.name] = void 0), n.esModule;
                  }
                };
              });
            };
          });
        }(), i("reduceRegister_", function(e) {
          return function(t, n) {
            if (n || !t.metadata.exports && (!D || "global" != t.metadata.format))
              return e.call(this, t, n);
            t.metadata.format = "global";
            var r = t.metadata.entry = R();
            r.deps = t.metadata.deps;
            var a = M(t.metadata.exports);
            r.execute = function() {
              return a;
            };
          };
        }), s(function(t) {
          return function() {
            function n(t) {
              if (Object.keys)
                Object.keys(e).forEach(t);
              else
                for (var n in e)
                  i.call(e, n) && t(n);
            }
            function r(t) {
              n(function(n) {
                if (J.call(s, n) == -1) {
                  try {
                    var r = e[n];
                  } catch (e) {
                    s.push(n);
                  }
                  t(n, r);
                }
              });
            }
            var a = this;
            t.call(a);
            var o,
                i = Object.prototype.hasOwnProperty,
                s = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"];
            a.set("@@global-helpers", a.newModule({prepareGlobal: function(t, n, a, i) {
                var s = e.define;
                e.define = void 0;
                var l;
                if (a) {
                  l = {};
                  for (var u in a)
                    l[u] = e[u], e[u] = a[u];
                }
                return n || (o = {}, r(function(e, t) {
                  o[e] = t;
                })), function() {
                  var t,
                      a = n ? M(n) : {},
                      u = !!n;
                  if (n && !i || r(function(r, s) {
                    o[r] !== s && "undefined" != typeof s && (i && (e[r] = void 0), n || (a[r] = s, "undefined" != typeof t ? u || t === s || (u = !0) : t = s));
                  }), a = u ? a : t, l)
                    for (var d in l)
                      e[d] = l[d];
                  return e.define = s, a;
                };
              }}));
          };
        }), s(function(e) {
          return function() {
            function t(e) {
              return "file:///" == e.substr(0, 8) ? e.substr(7 + !!U) : r && e.substr(0, r.length) == r ? e.substr(r.length) : e;
            }
            var n = this;
            if (e.call(n), "undefined" != typeof window && "undefined" != typeof document && window.location)
              var r = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
            n.set("@@cjs-helpers", n.newModule({
              requireResolve: function(e, r) {
                return t(n.normalizeSync(e, r));
              },
              getPathVars: function(e) {
                var n,
                    r = e.lastIndexOf("!");
                n = r != -1 ? e.substr(0, r) : e;
                var a = n.split("/");
                return a.pop(), a = a.join("/"), {
                  filename: t(n),
                  dirname: t(a)
                };
              }
            }));
          };
        }), i("fetch", function(t) {
          return function(n) {
            return n.metadata.scriptLoad && q && (e.define = this.amdDefine), t.call(this, n);
          };
        }), s(function(t) {
          return function() {
            function n(e, t) {
              e = e.replace(s, "");
              var n = e.match(d),
                  r = (n[1].split(",")[t] || "require").replace(c, ""),
                  a = f[r] || (f[r] = new RegExp(l + r + u, "g"));
              a.lastIndex = 0;
              for (var o,
                  i = []; o = a.exec(e); )
                i.push(o[2] || o[3]);
              return i;
            }
            function r(e, t, n, a) {
              if ("object" == typeof e && !(e instanceof Array))
                return r.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
              if ("string" == typeof e && "function" == typeof t && (e = [e]), !(e instanceof Array)) {
                if ("string" == typeof e) {
                  var i = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3),
                      s = o.decanonicalize(e, a);
                  i && ".js" == s.substr(s.length - 3, 3) && (s = s.substr(0, s.length - 3));
                  var l = o.get(s);
                  if (!l)
                    throw new Error('Module not already loaded loading "' + e + '" as ' + s + (a ? ' from "' + a + '".' : "."));
                  return l.__useDefault ? l.default : l;
                }
                throw new TypeError("Invalid require");
              }
              for (var u = [],
                  d = 0; d < e.length; d++)
                u.push(o.import(e[d], a));
              Promise.all(u).then(function(e) {
                t && t.apply(null, e);
              }, n);
            }
            function a(t, a, i) {
              function s(t, n, s) {
                function c(e, n, a) {
                  return "string" == typeof e && "function" != typeof n ? t(e) : r.call(o, e, n, a, s.id);
                }
                for (var f = [],
                    m = 0; m < a.length; m++)
                  f.push(t(a[m]));
                s.uri = s.id, s.config = function() {}, d != -1 && f.splice(d, 0, s), u != -1 && f.splice(u, 0, n), l != -1 && (c.toUrl = function(e) {
                  var t = o.defaultJSExtensions && ".js" != e.substr(e.length - 3, 3),
                      n = o.decanonicalize(e, s.id);
                  return t && ".js" == n.substr(n.length - 3, 3) && (n = n.substr(0, n.length - 3)), n;
                }, f.splice(l, 0, c));
                var p = e.require;
                e.require = r;
                var h = i.apply(u == -1 ? e : n, f);
                if (e.require = p, "undefined" == typeof h && s && (h = s.exports), "undefined" != typeof h)
                  return h;
              }
              "string" != typeof t && (i = a, a = t, t = null), a instanceof Array || (i = a, a = ["require", "exports", "module"].splice(0, i.length)), "function" != typeof i && (i = function(e) {
                return function() {
                  return e;
                };
              }(i)), void 0 === a[a.length - 1] && a.pop();
              var l,
                  u,
                  d;
              (l = J.call(a, "require")) != -1 && (a.splice(l, 1), t || (a = a.concat(n(i.toString(), l)))), (u = J.call(a, "exports")) != -1 && a.splice(u, 1), (d = J.call(a, "module")) != -1 && a.splice(d, 1);
              var c = R();
              c.name = t && (o.decanonicalize || o.normalize).call(o, t), c.deps = a, c.execute = s, o.pushRegister_({
                amd: !0,
                entry: c
              });
            }
            var o = this;
            t.call(this);
            var s = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
                l = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",
                u = "\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",
                d = /\(([^\)]*)\)/,
                c = /^\s+|\s+$/g,
                f = {};
            a.amd = {}, i("reduceRegister_", function(e) {
              return function(t, n) {
                if (!n || !n.amd)
                  return e.call(this, t, n);
                var r = t && t.metadata,
                    a = n.entry;
                if (r)
                  if (r.format && "detect" != r.format) {
                    if (!a.name && "amd" != r.format)
                      throw new Error("AMD define called while executing " + r.format + " module " + t.name);
                  } else
                    r.format = "amd";
                if (a.name)
                  r && (r.entry || r.bundle ? r.entry && r.entry.name && r.entry.name != t.name && (r.entry = void 0) : r.entry = a, r.bundle = !0), a.name in this.defined || (this.defined[a.name] = a);
                else {
                  if (!r)
                    throw new TypeError("Unexpected anonymous AMD define.");
                  if (r.entry && !r.entry.name)
                    throw new Error("Multiple anonymous defines in module " + t.name);
                  r.entry = a;
                }
              };
            }), o.amdDefine = a, o.amdRequire = r;
          };
        }), function() {
          function e(e, t) {
            if (t) {
              var n;
              if (e.pluginFirst) {
                if ((n = t.lastIndexOf("!")) != -1)
                  return t.substr(n + 1);
              } else if ((n = t.indexOf("!")) != -1)
                return t.substr(0, n);
              return t;
            }
          }
          function t(e, t) {
            var n,
                r,
                a = t.lastIndexOf("!");
            if (a != -1)
              return e.pluginFirst ? (n = t.substr(a + 1), r = t.substr(0, a)) : (n = t.substr(0, a), r = t.substr(a + 1) || n.substr(n.lastIndexOf(".") + 1)), {
                argument: n,
                plugin: r
              };
          }
          function n(e, t, n, r) {
            return r && ".js" == t.substr(t.length - 3, 3) && (t = t.substr(0, t.length - 3)), e.pluginFirst ? n + "!" + t : t + "!" + n;
          }
          function r(e, t) {
            return e.defaultJSExtensions && ".js" != t.substr(t.length - 3, 3);
          }
          function a(a) {
            return function(o, i, s) {
              var l = this,
                  u = t(l, o);
              if (i = e(this, i), !u)
                return a.call(this, o, i, s);
              var d = l.normalizeSync(u.argument, i, !0),
                  c = l.normalizeSync(u.plugin, i, !0);
              return n(l, d, c, r(l, u.argument));
            };
          }
          i("decanonicalize", a), i("normalizeSync", a), i("normalize", function(a) {
            return function(o, i, s) {
              var l = this;
              i = e(this, i);
              var u = t(l, o);
              return u ? Promise.all([l.normalize(u.argument, i, !0), l.normalize(u.plugin, i, !1)]).then(function(e) {
                return n(l, e[0], e[1], r(l, u.argument));
              }) : a.call(l, o, i, s);
            };
          }), i("locate", function(e) {
            return function(t) {
              var n,
                  r = this,
                  a = t.name;
              return r.pluginFirst ? (n = a.indexOf("!")) != -1 && (t.metadata.loader = a.substr(0, n), t.name = a.substr(n + 1)) : (n = a.lastIndexOf("!")) != -1 && (t.metadata.loader = a.substr(n + 1), t.name = a.substr(0, n)), e.call(r, t).then(function(e) {
                return n == -1 && t.metadata.loader ? (r.pluginLoader || r).normalize(t.metadata.loader, t.name).then(function(n) {
                  return t.metadata.loader = n, e;
                }) : e;
              }).then(function(e) {
                var n = t.metadata.loader;
                if (!n)
                  return e;
                if (t.name == n)
                  throw new Error("Plugin " + n + " cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");
                if (r.defined && r.defined[a])
                  return e;
                var o = r.pluginLoader || r;
                return o.import(n).then(function(n) {
                  return t.metadata.loaderModule = n, t.address = e, n.locate ? n.locate.call(r, t) : e;
                });
              });
            };
          }), i("fetch", function(e) {
            return function(t) {
              var n = this;
              return t.metadata.loaderModule && t.metadata.loaderModule.fetch && "defined" != t.metadata.format ? (t.metadata.scriptLoad = !1, t.metadata.loaderModule.fetch.call(n, t, function(t) {
                return e.call(n, t);
              })) : e.call(n, t);
            };
          }), i("translate", function(e) {
            return function(t) {
              var n = this,
                  r = arguments;
              return t.metadata.loaderModule && t.metadata.loaderModule.translate && "defined" != t.metadata.format ? Promise.resolve(t.metadata.loaderModule.translate.apply(n, r)).then(function(a) {
                var o = t.metadata.sourceMap;
                if (o) {
                  if ("object" != typeof o)
                    throw new Error("load.metadata.sourceMap must be set to an object.");
                  var i = t.address.split("!")[0];
                  o.file && o.file != t.address || (o.file = i + "!transpiled"), (!o.sources || o.sources.length <= 1 && (!o.sources[0] || o.sources[0] == t.address)) && (o.sources = [i]);
                }
                return "string" == typeof a ? t.source = a : w.call(this, "Plugin " + t.metadata.loader + " should return the source in translate, instead of setting load.source directly. This support will be deprecated."), e.apply(n, r);
              }) : e.apply(n, r);
            };
          }), i("instantiate", function(e) {
            return function(t) {
              var n = this,
                  r = !1;
              return t.metadata.loaderModule && t.metadata.loaderModule.instantiate && !n.builder && "defined" != t.metadata.format ? Promise.resolve(t.metadata.loaderModule.instantiate.call(n, t, function(t) {
                if (r)
                  throw new Error("Instantiate must only be called once.");
                return r = !0, e.call(n, t);
              })).then(function(a) {
                return r ? a : (t.metadata.entry = R(), t.metadata.entry.execute = function() {
                  return a;
                }, t.metadata.entry.deps = t.metadata.deps, t.metadata.format = "defined", e.call(n, t));
              }) : e.call(n, t);
            };
          });
        }();
        var ae = ["browser", "node", "dev", "build", "production", "default"],
            oe = /#\{[^\}]+\}/;
        i("normalize", function(e) {
          return function(t, n, r) {
            var a = this;
            return T.call(a, t, n).then(function(t) {
              return e.call(a, t, n, r);
            }).then(function(e) {
              return L.call(a, e, n);
            });
          };
        }), function() {
          i("fetch", function(e) {
            return function(t) {
              var n = t.metadata.alias,
                  r = t.metadata.deps || [];
              if (n) {
                t.metadata.format = "defined";
                var a = R();
                return this.defined[t.name] = a, a.declarative = !0, a.deps = r.concat([n]), a.declare = function(e) {
                  return {
                    setters: [function(t) {
                      for (var n in t)
                        e(n, t[n]);
                      t.__useDefault && (a.module.exports.__useDefault = !0);
                    }],
                    execute: function() {}
                  };
                }, "";
              }
              return e.call(this, t);
            };
          });
        }(), function() {
          function e(e, t, n) {
            for (var r,
                a = t.split("."); a.length > 1; )
              r = a.shift(), e = e[r] = e[r] || {};
            r = a.shift(), r in e || (e[r] = n);
          }
          s(function(e) {
            return function() {
              this.meta = {}, e.call(this);
            };
          }), i("locate", function(e) {
            return function(t) {
              var n,
                  r = this.meta,
                  a = t.name,
                  o = 0;
              for (var i in r)
                if (n = i.indexOf("*"), n !== -1 && i.substr(0, n) === a.substr(0, n) && i.substr(n + 1) === a.substr(a.length - i.length + n + 1)) {
                  var s = i.split("/").length;
                  s > o && (o = s), v(t.metadata, r[i], o != s);
                }
              return r[a] && v(t.metadata, r[a]), e.call(this, t);
            };
          });
          var t = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,
              n = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;
          i("translate", function(r) {
            return function(a) {
              if ("defined" == a.metadata.format)
                return a.metadata.deps = a.metadata.deps || [], Promise.resolve(a.source);
              var o = a.source.match(t);
              if (o)
                for (var i = o[0].match(n),
                    s = 0; s < i.length; s++) {
                  var l = i[s],
                      u = l.length,
                      d = l.substr(0, 1);
                  if (";" == l.substr(u - 1, 1) && u--, '"' == d || "'" == d) {
                    var c = l.substr(1, l.length - 3),
                        f = c.substr(0, c.indexOf(" "));
                    if (f) {
                      var m = c.substr(f.length + 1, c.length - f.length - 1);
                      "[]" == f.substr(f.length - 2, 2) ? (f = f.substr(0, f.length - 2), a.metadata[f] = a.metadata[f] || [], a.metadata[f].push(m)) : a.metadata[f] instanceof Array ? (w.call(this, "Module " + a.name + ' contains deprecated "deps ' + m + '" meta syntax.\nThis should be updated to "deps[] ' + m + '" for pushing to array meta.'), a.metadata[f].push(m)) : e(a.metadata, f, m);
                    } else
                      a.metadata[c] = !0;
                  }
                }
              return r.apply(this, arguments);
            };
          });
        }(), function() {
          s(function(e) {
            return function() {
              e.call(this), this.bundles = {}, this._loader.loadedBundles = {};
            };
          }), i("locate", function(e) {
            return function(t) {
              var n = this,
                  r = !1;
              if (!(t.name in n.defined))
                for (var a in n.bundles) {
                  for (var o = 0; o < n.bundles[a].length; o++) {
                    var i = n.bundles[a][o];
                    if (i == t.name) {
                      r = !0;
                      break;
                    }
                    if (i.indexOf("*") != -1) {
                      var s = i.split("*");
                      if (2 != s.length) {
                        n.bundles[a].splice(o--, 1);
                        continue;
                      }
                      if (t.name.substring(0, s[0].length) == s[0] && t.name.substr(t.name.length - s[1].length, s[1].length) == s[1] && t.name.substr(s[0].length, t.name.length - s[1].length - s[0].length).indexOf("/") == -1) {
                        r = !0;
                        break;
                      }
                    }
                  }
                  if (r)
                    return n.import(a).then(function() {
                      return e.call(n, t);
                    });
                }
              return e.call(n, t);
            };
          });
        }(), function() {
          s(function(e) {
            return function() {
              e.call(this), this.depCache = {};
            };
          }), i("locate", function(e) {
            return function(t) {
              var n = this,
                  r = n.depCache[t.name];
              if (r)
                for (var a = 0; a < r.length; a++)
                  n.import(r[a], t.name);
              return e.call(n, t);
            };
          });
        }(), s(function(t) {
          return function() {
            t.apply(this, arguments), e.define = this.amdDefine;
          };
        }), i("fetch", function(e) {
          return function(t) {
            return t.metadata.scriptLoad = !0, e.call(this, t);
          };
        }), X = new a, e.SystemJS = X, X.version = "0.19.39 CSP", "object" == typeof module && module.exports && "object" == typeof exports && (module.exports = X), e.System = X;
      }("undefined" != typeof self ? self : global);
    }
    var t = "undefined" == typeof Promise;
    if ("undefined" != typeof document) {
      var n = document.getElementsByTagName("script");
      if ($__curScript = n[n.length - 1], document.currentScript && ($__curScript.defer || $__curScript.async) && ($__curScript = document.currentScript), t) {
        var r = $__curScript.src,
            a = r.substr(0, r.lastIndexOf("/") + 1);
        window.systemJSBootstrap = e, document.write('<script type="text/javascript" src="' + a + 'system-polyfills.js"></script>');
      } else
        e();
    } else if ("undefined" != typeof importScripts) {
      var a = "";
      try {
        throw new Error("_");
      } catch (e) {
        e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(e, t) {
          $__curScript = {src: t}, a = t.replace(/\/[^\/]*$/, "/");
        });
      }
      t && importScripts(a + "system-polyfills.js"), e();
    } else
      $__curScript = "undefined" != typeof __filename ? {src: __filename} : null, e();
  }();
})(require('process'));
