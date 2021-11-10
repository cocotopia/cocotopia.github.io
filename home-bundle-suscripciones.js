!(function () {
  function t(e, i, n) {
    function o(s, r) {
      if (!i[s]) {
        if (!e[s]) {
          var u = "function" == typeof require && require;
          if (!r && u) return u(s, !0);
          if (a) return a(s, !0);
          var c = new Error("Cannot find module '" + s + "'");
          throw ((c.code = "MODULE_NOT_FOUND"), c);
        }
        var l = (i[s] = { exports: {} });
        e[s][0].call(
          l.exports,
          function (t) {
            return o(e[s][1][t] || t);
          },
          l,
          l.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[s].exports;
    }
    for (
      var a = "function" == typeof require && require, s = 0;
      s < n.length;
      s++
    )
      o(n[s]);
    return o;
  }
  return t;
})()(
  {
    1: [
      function (t, e, i) {
        !(function () {
          var t,
            n = this,
            o = Array.prototype.forEach,
            a = Object.prototype.hasOwnProperty,
            s = Array.prototype.slice,
            r = 0,
            u = (function () {
              return {
                keys:
                  Object.keys ||
                  function (t) {
                    if (
                      ("object" != typeof t && "function" != typeof t) ||
                      null === t
                    )
                      throw new TypeError("keys() called on a non-object");
                    var e,
                      i = [];
                    for (e in t) t.hasOwnProperty(e) && (i[i.length] = e);
                    return i;
                  },
                uniqueId: function (t) {
                  var e = ++r + "";
                  return t ? t + e : e;
                },
                has: function (t, e) {
                  return a.call(t, e);
                },
                each: function (t, e, i) {
                  if (null != t)
                    if (o && t.forEach === o) t.forEach(e, i);
                    else if (t.length === +t.length)
                      for (var n = 0, a = t.length; n < a; n++)
                        e.call(i, t[n], n, t);
                    else
                      for (var s in t) this.has(t, s) && e.call(i, t[s], s, t);
                },
                once: function (t) {
                  var e,
                    i = !1;
                  return function () {
                    return i
                      ? e
                      : ((i = !0),
                        (e = t.apply(this, arguments)),
                        (t = null),
                        e);
                  };
                },
              };
            })();
          t = {
            on: function (t, e, i) {
              return l(this, "on", t, [e, i]) && e
                ? (this._events || (this._events = {}),
                  (this._events[t] || (this._events[t] = [])).push({
                    callback: e,
                    context: i,
                    ctx: i || this,
                  }),
                  this)
                : this;
            },
            once: function (t, e, i) {
              if (!l(this, "once", t, [e, i]) || !e) return this;
              var n = this,
                o = u.once(function () {
                  n.off(t, o), e.apply(this, arguments);
                });
              return (o._callback = e), this.on(t, o, i);
            },
            off: function (t, e, i) {
              var n, o, a, s, r, c, d, h;
              if (!this._events || !l(this, "off", t, [e, i])) return this;
              if (!t && !e && !i) return (this._events = {}), this;
              for (
                s = t ? [t] : u.keys(this._events), r = 0, c = s.length;
                r < c;
                r++
              )
                if (((t = s[r]), (a = this._events[t]))) {
                  if (((this._events[t] = n = []), e || i))
                    for (d = 0, h = a.length; d < h; d++)
                      (o = a[d]),
                        ((e &&
                          e !== o.callback &&
                          e !== o.callback._callback) ||
                          (i && i !== o.context)) &&
                          n.push(o);
                  n.length || delete this._events[t];
                }
              return this;
            },
            trigger: function (t) {
              if (!this._events) return this;
              var e = s.call(arguments, 1);
              if (!l(this, "trigger", t, e)) return this;
              var i = this._events[t],
                n = this._events.all;
              return i && d(i, e), n && d(n, arguments), this;
            },
            stopListening: function (t, e, i) {
              var n = this._listeners;
              if (!n) return this;
              var o = !e && !i;
              "object" == typeof e && (i = this),
                t && ((n = {})[t._listenerId] = t);
              for (var a in n)
                n[a].off(e, i, this), o && delete this._listeners[a];
              return this;
            },
          };
          var c = /\s+/,
            l = function (t, e, i, n) {
              if (!i) return !0;
              if ("object" == typeof i) {
                for (var o in i) t[e].apply(t, [o, i[o]].concat(n));
                return !1;
              }
              if (c.test(i)) {
                for (var a = i.split(c), s = 0, r = a.length; s < r; s++)
                  t[e].apply(t, [a[s]].concat(n));
                return !1;
              }
              return !0;
            },
            d = function (t, e) {
              var i,
                n = -1,
                o = t.length,
                a = e[0],
                s = e[1],
                r = e[2];
              switch (e.length) {
                case 0:
                  for (; ++n < o; ) (i = t[n]).callback.call(i.ctx);
                  return;
                case 1:
                  for (; ++n < o; ) (i = t[n]).callback.call(i.ctx, a);
                  return;
                case 2:
                  for (; ++n < o; ) (i = t[n]).callback.call(i.ctx, a, s);
                  return;
                case 3:
                  for (; ++n < o; ) (i = t[n]).callback.call(i.ctx, a, s, r);
                  return;
                default:
                  for (; ++n < o; ) (i = t[n]).callback.apply(i.ctx, e);
              }
            },
            h = { listenTo: "on", listenToOnce: "once" };
          u.each(h, function (e, i) {
            t[i] = function (t, i, n) {
              return (
                ((this._listeners || (this._listeners = {}))[
                  t._listenerId || (t._listenerId = u.uniqueId("l"))
                ] = t),
                "object" == typeof i && (n = this),
                t[e](i, n, this),
                this
              );
            };
          }),
            (t.bind = t.on),
            (t.unbind = t.off),
            (t.mixin = function (t) {
              var e = [
                "on",
                "once",
                "off",
                "trigger",
                "stopListening",
                "listenTo",
                "listenToOnce",
                "bind",
                "unbind",
              ];
              return (
                u.each(
                  e,
                  function (e) {
                    t[e] = this[e];
                  },
                  this
                ),
                t
              );
            }),
            void 0 !== i
              ? (void 0 !== e && e.exports && (i = e.exports = t),
                (i.BackboneEvents = t))
              : "function" == typeof define && "object" == typeof define.amd
              ? define(function () {
                  return t;
                })
              : (n.BackboneEvents = t);
        })();
      },
      {},
    ],
    2: [
      function (t, e, i) {
        e.exports = t("./backbone-events-standalone");
      },
      { "./backbone-events-standalone": 1 },
    ],
    3: [
      function (t, e, i) {
        e.exports = t("./lib/jquery").extend;
      },
      { "./lib/jquery": 4 },
    ],
    4: [
      function (t, e, i) {
        var n = {
            "[object Boolean]": "boolean",
            "[object Number]": "number",
            "[object String]": "string",
            "[object Function]": "function",
            "[object Array]": "array",
            "[object Date]": "date",
            "[object RegExp]": "regexp",
            "[object Object]": "object",
            "[object Error]": "error",
          },
          o = n.toString,
          a = n.hasOwnProperty,
          s = (e.exports = {});
        (s.isFunction = function (t) {
          return "function" === s.type(t);
        }),
          (s.isArray = Array.isArray),
          (s.isWindow = function (t) {
            return null != t && t === t.window;
          }),
          (s.type = function (t) {
            return null == t
              ? String(t)
              : "object" == typeof t || "function" == typeof t
              ? n[o.call(t)] || "object"
              : typeof t;
          }),
          (s.isPlainObject = function (t) {
            if ("object" !== s.type(t) || t.nodeType || s.isWindow(t))
              return !1;
            try {
              if (
                t.constructor &&
                !a.call(t.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (t) {
              return !1;
            }
            return !0;
          }),
          (s.extend = function () {
            var t,
              e,
              i,
              n,
              o,
              a,
              r = arguments[0] || {},
              u = 1,
              c = arguments.length,
              l = !1;
            for (
              "boolean" == typeof r &&
                ((l = r), (r = arguments[1] || {}), (u = 2)),
                "object" == typeof r || s.isFunction(r) || (r = {}),
                c === u && ((r = this), --u);
              u < c;
              u++
            )
              if (null != (t = arguments[u]))
                for (e in t)
                  (i = r[e]),
                    (n = t[e]),
                    r !== n &&
                      (l && n && (s.isPlainObject(n) || (o = s.isArray(n)))
                        ? (o
                            ? ((o = !1), (a = i && s.isArray(i) ? i : []))
                            : (a = i && s.isPlainObject(i) ? i : {}),
                          (r[e] = s.extend(l, a, n)))
                        : void 0 !== n && (r[e] = n));
            return r;
          });
      },
      {},
    ],
    5: [
      function (t, e, i) {
        var n = t("backbone-events-standalone"),
          o = {};
        n.mixin(o), (e.exports = o);
      },
      { "backbone-events-standalone": 2 },
    ],
    6: [
      function (t, e, i) {
        function n(t) {
          var e = /(whatsapp):\/\//gi,
            i = /link-comments/;
          this.href &&
            (e.test(this.href) || i.test(this.className)
              ? t.stopPropagation()
              : s.popup(this, t));
        }

        function o() {
          var t = a(a(this).attr("href"));
          return (
            a("html, body").animate({ scrollTop: t.offset().top }, 500), !1
          );
        }
        var a = t("jquery"),
          s = t("./utils");
        t("../plugins/jquery.tap");
        var r = {
          setShareDelegate: function (t, e) {
            var i = "a.share-link, a.share_link";
            a(t)
              .on("click", i, function (t) {
                t.preventDefault();
              })
              .on("tap", i, n);
          },
          setAnchorDelegate: function (t, e) {
            a(t).on("tap", ".link-comments", o);
          },
        };
        e.exports = r;
      },
      { "../plugins/jquery.tap": 23, "./utils": 7, jquery: "jquery" },
    ],
    7: [
      function (t, e, i) {
        var n = {};
        (n.preventDefault = function (t) {
          t.preventDefault();
        }),
          (n.popUpWindow = function (t, e, i, n) {
            var o = screen.width / 2 - i / 2,
              a = screen.height / 2 - n / 2;
            return window.open(
              t,
              e,
              "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                i +
                ", height=" +
                n +
                ", top=" +
                a +
                ", left=" +
                o
            );
          }),
          (n.popup = function (t, e) {
            n.preventDefault(e),
              n.popUpWindow(t.getAttribute("href"), "", 600, 400);
          }),
          (e.exports = n);
      },
      {},
    ],
    8: [
      function (t, e, i) {
        function n() {
          return Object.keys(j).map(function (t) {
            return "[data-validate-" + t + "]";
          });
        }

        function o(t) {
          var e = w(t).get(0);
          return "checkbox,radio".indexOf(e.type) >= 0
            ? e.checked
              ? e.value
              : ""
            : e.value;
        }

        function a(t) {
          var e = t.closest(".ui-form-row");
          return e.length ? e : t.parent();
        }

        function s(t) {
          return String(t).split("|");
        }

        function r(t) {
          return (
            (t = t || "Este valor es incorrecto"),
            ('<div class="ui-message-error">' + x + "</div>").replace(
              "{{MESSAGE}}",
              t
            )
          );
        }

        function u(t, e) {
          c(t), e && t.addClass("ui-error").append(r(e));
        }

        function c(t) {
          a(t).removeClass("ui-error").find(".ui-message-error").remove();
        }

        function l(t, e) {
          var i = a(t);
          switch (e.attr) {
            case "require":
            case "email":
            case "alpha":
            case "integer":
            case "alphanumeric":
            case "extcard":
            case "remote":
              !t.attr("data-validate-aditional") ||
                ("alpha" != e.attr &&
                  "alphanumeric" != e.attr &&
                  "integer" != e.attr) ||
                t
                  .attr("data-validate-aditional")
                  .replace(
                    /äëïöü|ÄËÏÖÜ|áéíóú|ÁÉÍÓÚ|ÂÊÎÔÛ|âêîôû|àèìòù|ÀÈÌÒÙ|ãẽĩõũỹ|ÃẼĨÕŨỸ/g,
                    ""
                  )
                  .split("")
                  .join(" ");
              u(i, e.value || j[e.attr].message);
              break;
            case "max-size":
            case "size":
            case "min-size":
            case "compare":
              var n = s(e.value);
              u(i, (n[1] || j[e.attr].message).replace("{{size}}", n[0]));
          }
        }

        function d(t) {
          var e = w(t);
          if (!e.is(":visible")) return !0;
          var i,
            n = v(e),
            o = !0,
            a = Object.keys(n),
            s = a.indexOf("require");
          -1 != s && (a.splice(s, 1), a.splice(0, 0, "require"));
          for (i in a)
            if (a.hasOwnProperty(i)) {
              if (j[a[i]] && "function" == typeof T[j[a[i]].fn]) {
                if ("remote" == a[i] && void 0 === e.data("remoteStatus"))
                  continue;
                o =
                  "remote" == a[i] && "boolean" == typeof e.data("remoteStatus")
                    ? e.data("remoteStatus")
                    : T[j[a[i]].fn](e);
              }
              if (!o) {
                l(e, { attr: a[i], value: n[a[i]] });
                break;
              }
              c(e);
            }
          return o;
        }

        function h(t) {
          var e = !0;
          return (
            w(t)
              .find(n().join(", "))
              .each(function () {
                e *= d(w(this));
              }),
            e
          );
        }

        function f(t, e) {
          function i(t) {
            return Object.keys(v(e)).indexOf(t) > -1;
          }
          var n = t.which || t.keyCode || t.charCode,
            o = ["alpha", "integer", "alphanumeric", "extcard"],
            a = [8, 9, 37, 39],
            s = String.fromCharCode(n),
            r =
              !!e.attr("data-validate-aditional") &&
              e.attr("data-validate-aditional").split("");
          if (
            !s.match(_[o.find(i)]) &&
            -1 == w.inArray(n, a) &&
            -1 == w.inArray(s, r)
          )
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
        }

        function p(t, e) {
          switch (e) {
            case "keypress":
              t.on(e + ".validate", function (e) {
                f(e, t);
              });
              break;
            case "blur":
              t.on(e + ".validate", function (e) {
                if (t.attr("data-validate-remote"))
                  return void T[j.remote.fn](t, function (e) {
                    e
                      ? c(t)
                      : l(t, {
                          attr: "remote",
                          value: t.attr("data-validate-remote"),
                        });
                  });
                d(this);
              });
              break;
            case "change":
            case "keyup":
              t.on(e + ".validate", function (i) {
                if (t.attr("persistent"))
                  return void ("change" == e && d(this));
                d(this);
              });
          }
        }

        function m(t) {
          for (var e in I)
            if (-1 != e.indexOf(t.get(0).tagName))
              for (var i in I[e]) p(t, I[e][i]);
        }

        function v(t) {
          if (t.data("validates")) return t.data("validates");
          var e = {},
            i = !1;
          return (
            [].forEach.call(t.get(0).attributes, function (t) {
              E.test(t.name) && ((i = !0), (e[t.name.substr(14)] = t.value));
            }),
            i && t.data("validates", e),
            e
          );
        }

        function g(t, e) {
          var i = e || {};
          k = w.extend(k, i);
          var o = w(t);
          o.find(n().join(", ")).each(function () {
            var t = w(this);
            v(t), m(t);
          }),
            o.on("submit", function (t) {
              if (!h(o))
                return t.preventDefault(), o.removeClass("isValid"), !1;
              o.addClass("isValid");
            });
        }

        function b(t) {
          (t = w(t)),
            t.find(n().join(", ")).each(function () {
              var t = w(this);
              w.removeData(t.get(0), "validates");
            }),
            g(t);
        }

        function y(t) {
          x = t;
        }
        var w = t("jquery"),
          x = "{{MESSAGE}}",
          _ = {
            alpha: /^[a-zA-ZñÑ\sÃ±Ã‘\']+$/,
            alphanumeric: /^\w+$/,
            extcard: /^[\w-\/]+/,
            integer: /^\d+$/,
            decimal: /^[\d|\.,]+$/,
            date: /^[\d|\-\/]+$/,
            email:
              /[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/,
            all: /([^\s])/,
          },
          k = { fields: [] },
          E = /^data-validate/,
          j = {
            email: {
              fn: "validateMail",
              message: "Formato de correo inválido",
            },
            require: { fn: "validateRequire", message: "Campo obligatorio" },
            alpha: { fn: "validateAlpha", message: "Solo letras" },
            integer: { fn: "validateInteger", message: "Solo números" },
            compare: {
              fn: "validateCompare",
              message: "No coinciden los datos",
            },
            "max-size": {
              fn: "validateMaxSize",
              message: "Máximo {{size}} caracteres",
            },
            size: {
              fn: "validateSize",
              message: "Tiene que ser {{size}} caracteres",
            },
            "min-size": {
              fn: "validateMinSize",
              message: "Mínimo {{size}} caracteres",
            },
            alphanumeric: {
              fn: "validateAlphaNumeric",
              message: "Solo números y letras",
            },
            remote: { fn: "validateRemote", message: "Este dato ya existe" },
            extcard: {
              fn: "validateExtCard",
              message: "Solo números, letras y simbolos - (guión) / (slash)",
            },
          },
          I = {
            SELECT: ["blur", "change"],
            "INPUT TEXTAREA": ["blur", "keyup", "keypress"],
          },
          T = {
            validateMail: function (t) {
              var e = w.trim(o(t));
              return _.email.test(e);
            },
            validateAlphaNumeric: function (t) {
              var e = w.trim(o(t));
              return _.alphanumeric.test(e);
            },
            validateExtCard: function (t) {
              var e = w.trim(o(t));
              return _.extcard.test(e);
            },
            validateRequire: function (t) {
              var e = w.trim(o(t));
              return "" !== e && void 0 !== e;
            },
            validateAlpha: function (t) {
              var e = w.trim(o(t)),
                i =
                  !!t.attr("data-validate-aditional") &&
                  t.attr("data-validate-aditional").split("");
              return (
                _.alpha.test(e.charAt(e.length - 1)) ||
                -1 != w.inArray(e.charAt(e.length - 1), i)
              );
            },
            validateInteger: function (t) {
              var e = w.trim(o(t));
              return _.integer.test(e);
            },
            validateCompare: function (t) {
              var e = w.trim(o(t)),
                i = s(t.data("validate-compare"));
              return w(i[0]).val() == e;
            },
            validateMaxSize: function (t) {
              var e = w.trim(o(t)),
                i = t.attr("data-validate-max-size");
              return t.attr("maxlength", i), e.length <= +s(i)[0];
            },
            validateSize: function (t) {
              var e = w.trim(o(t)),
                i = t.attr("data-validate-size");
              return t.attr("maxlength", i), e.length == +s(i)[0];
            },
            validateMinSize: function (t) {
              return w.trim(o(t)).length >= +s(t.data("validate-min-size"))[0];
            },
            validateRemote: function (t, e) {
              var i = k.fields,
                n = t.attr("name") || t.attr("id");
              if (-1 != Object.keys(i).indexOf(n)) {
                var o = i[n],
                  a = {},
                  s = t.parents("form");
                for (var r in o.data)
                  "" != s.find(o.data[r]).val() &&
                    (a[r] = s.find(o.data[r]).val());
                w.isEmptyObject(a) ||
                  w.ajax({
                    url: o.url,
                    data: a,
                    method: o.method,
                    dataType: "json",
                    success: function (i) {
                      if (o.valueSuccess)
                        return (
                          (o.status = i[o.keySuccess] == o.valueSuccess),
                          t.data("remoteStatus", o.status),
                          void e(o.status)
                        );
                      (o.status = 1 == i[o.keySuccess]),
                        t.data("remoteStatus", o.status),
                        e(o.status);
                    },
                  });
              }
            },
          };
        Array.prototype.find ||
          (Array.prototype.find = function (t) {
            "use strict";
            if (null == this)
              throw new TypeError(
                "Array.prototype.find called on null or undefined"
              );
            if ("function" != typeof t)
              throw new TypeError("predicate must be a function");
            for (
              var e,
                i = Object(this),
                n = i.length >>> 0,
                o = arguments[1],
                a = 0;
              a < n;
              a++
            )
              if (((e = i[a]), t.call(o, e, a, i))) return e;
          }),
          (e.exports = {
            form: g,
            isValid: h,
            setErrorTemplate: y,
            refresh: b,
          });
      },
      { jquery: "jquery" },
    ],
    9: [
      function (t, e, i) {
        function n(t) {
          o.call(this, t);
        }
        var o = t("./UIView");
        t("jquery"),
          (n.prototype = Object.create(o.prototype)),
          (n.prototype.defaults = {}),
          (n.prototype.constructor = n),
          (n.prototype.saveDataset = function () {
            return n.saveDataset(this.$el, this);
          }),
          (n.prototype.hasDataset = function () {
            return n.hasDataset(this.$el, this.constructor);
          }),
          (n.dataSetName = "UIElement"),
          (n.hasDataset = function (t, e) {
            return !!t.data(
              "api-" + (e.dataSetName || "UIElement").toLowerCase()
            );
          }),
          (n.saveDataset = function (t, e) {
            return (
              t.data(
                "api-" +
                  (e.constructor.dataSetName || "UIElement").toLowerCase(),
                e
              ),
              e
            );
          }),
          (e.exports = n);
      },
      { "./UIView": 12, jquery: "jquery" },
    ],
    10: [
      function (t, e, i) {
        function n(t) {
          o.call(this, t),
            this.$el
              .append(a("<span/>").addClass("ui-spinner-indicator"))
              .css({ height: this.options.height, width: this.options.width }),
            this.options.center &&
              this.$el.css({
                position: "absolute",
                left: "50%",
                top: "50%",
                marginLeft: -this.options.width / 2 + "px",
                marginTop: -this.options.height / 2 + "px",
              });
        }
        var o = t("./UIElement"),
          a = t("jquery");
        (n.prototype = a.extend(Object.create(o.prototype), {
          tagName: "span",
          className: "ui-spinner",
          defaults: { height: 50, width: 50, center: !1 },
          constructor: n,
          detach: function () {
            return this.$el.detach();
          },
          show: function () {
            this.$el.css("display", "inline-block");
          },
          hide: function () {
            this.$el.hide();
          },
        })),
          (e.exports = n);
      },
      { "./UIElement": 9, jquery: "jquery" },
    ],
    11: [
      function (t, e, i) {
        function n(t) {
          o.call(this, t),
            this.$el.css({
              height: this.options.height,
              width: this.options.width,
            });
        }
        var o = t("./UIElement"),
          a = t("jquery");
        (n.prototype = a.extend(Object.create(o.prototype), {
          tagName: "span",
          className: "ui-stateicon",
          defaults: { height: 24, width: 24 },
          constructor: n,
          setType: function (t) {
            this.$el
              .removeClass(
                "ui-stateicon-success ui-stateicon-fail ui-stateicon-error ui-stateicon-info"
              )
              .addClass("ui-stateicon-" + (t || "success"));
          },
          show: function () {
            this.$el.css("display", "inline-block");
          },
          hide: function () {
            this.$el.hide();
          },
        })),
          (e.exports = n);
      },
      { "./UIElement": 9, jquery: "jquery" },
    ],
    12: [
      function (t, e, i) {
        function n(t) {
          a.call(this),
            (this.uid = ++r),
            (this.dom = {}),
            (this.options = s.extend({}, this.defaults, t)),
            o.call(this, this.options),
            this.el instanceof HTMLElement || "string" == typeof this.el
              ? (this.$el = s(this.el))
              : this.el instanceof s
              ? (this.$el = this.el)
              : (this.$el = s(document.createElement(this.tagName))),
            (this.el = this.$el
              .attr("id", this.$el.attr("id") || this.id)
              .addClass(this.className)
              .get(0));
        }

        function o(t) {
          var e,
            i,
            o = [
              "tagName",
              "className",
              "model",
              "collection",
              "id",
              "el",
              "template",
            ];
          for (i in o)
            (e = o[i]),
              (this[e] =
                t[e] || this.constructor.prototype[e] || n.prototype[e]);
        }
        var a = t("../../views/masters/View"),
          s = t("jquery"),
          r = -1;
        (n.prototype = s.extend(Object.create(a.prototype), {
          id: "",
          model: {},
          collection: [],
          template: null,
          constructor: n,
          tagName: "div",
          className: "",
          defaults: {},
          _mergeTemplate: function (t, e) {
            if ("function" == typeof t) return this.template(e);
            if ("string" == typeof t) {
              for (var i in e)
                t = t.replace(new RegExp("{{" + i + "}}", "g"), e[i]);
              return t;
            }
          },
          render: function () {
            var t = this._mergeTemplate(this.template, this.model);
            return this.$el.html(t), this;
          },
          remove: function () {
            this.$el
              ? this.$el.remove()
              : this.el &&
                this.el.parentNode &&
                this.parentNode.removeChild(this.el),
              this.stopListening();
          },
        })),
          (e.exports = n);
      },
      { "../../views/masters/View": 25, jquery: "jquery" },
    ],
    13: [
      function (t, e, i) {
        function n(t) {
          o.call(this, t);
          var e = this.$el;
          if (
            ((this.$body = a("body")),
            (this.$current = e.find("li.ui-active")),
            (this.$caption = e.children(".ui-caption")),
            (this.$hidden = a("<input/>")
              .attr({
                type: "hidden",
                id: this.options.name || "ui-dropdown",
                name: this.options.name || "ui-dropdown",
              })
              .appendTo(this.$el)),
            this.$current.length)
          ) {
            var i = this.$current.attr("data-value");
            "" !== i && void 0 !== i && this.$hidden.val(i);
          }
          (this.isOpen =
            void 0 === this.options.isOpen
              ? e.hasClass("ui-open")
              : this.options.isOpen),
            this.bindEvents(),
            (this._close = function () {
              this.isOpen && this.close();
            }.bind(this));
        }
        var o = t("./UIElement"),
          a = t("jquery");
        t("../../plugins/jquery.tap"),
          (n.prototype = a.extend(Object.create(o.prototype), {
            constructor: n,
            defaults: { isOpen: !1 },
            bindEvents: function (t) {
              var e = this;
              this.$caption.on("tap.uidropdown", function (t) {
                e.isOpen || t.stopPropagation(),
                  t.originalEvent && t.preventDefault(),
                  t.preventDefault(),
                  e.toggle();
              }),
                this.$el.on("tap.uidropdown", "li", function (t) {
                  t.preventDefault();
                  var i = a(this);
                  if (!e.$current.length || e.$current.get(0) !== i.get(0)) {
                    var n = i.attr("data-value");
                    e.$hidden.val(n),
                      e.$current.removeClass("ui-active"),
                      e.$caption
                        .find("span")
                        .text(i.addClass("ui-active").text()),
                      (e.$current = i),
                      e.trigger("change", this, i.index(), n);
                  }
                });
            },
            unBindEvents: function () {
              this.$caption.off("tap.uidropdown"),
                this.$el.off("tap.uidropdown");
            },
            toggle: function () {
              this.isOpen ? this.close() : this.open();
            },
            open: function () {
              (this.isOpen = !0),
                this.$el.addClass("ui-open"),
                this.trigger("open"),
                this.$body.on("tap.uidropdown", this._close);
            },
            close: function () {
              (this.isOpen = !1),
                this.$el.removeClass("ui-open"),
                this.trigger("close"),
                this.$body.off("tap.uidropdown", this._close);
            },
          })),
          (n.dataSetName = "UIDropDown"),
          (a.fn.UIDropDown = function () {
            return this.each(function (t) {
              var e = a(this);
              o.hasDataset(e, n) ||
                new n(a.extend({}, t, { el: e })).saveDataset();
            });
          }),
          (e.exports = n);
      },
      { "../../plugins/jquery.tap": 23, "./UIElement": 9, jquery: "jquery" },
    ],
    14: [
      function (t, e, i) {
        function n(t) {
          a.call(this, t);
          var e = this,
            i = s.touchevents
              ? function () {
                  var t = e._unLazy(o(this)).css("display", "").off("scrollin");
                  e._setSource(t);
                }
              : function () {
                  var t = e._unLazy(o(this));
                  t
                    .fadeIn("slow", function () {
                      t.css("display", "");
                    })
                    .off("scrollin"),
                    e._setSource(t);
                };
          e.$el.on("scrollin", i);
        }
        var o = t("jquery"),
          a = t("./UIElement"),
          s = window.Modernizr;
        t("../../plugins/jquery.sonar"),
          (n.dataSetName = "UILazyload"),
          (n.prototype = o.extend(Object.create(a.prototype), {
            constructor: n,
            _unLazy: function (t) {
              return t.hide(0).removeClass("ui-lazy");
            },
            _setSource: function (t) {
              switch (t.data("type")) {
                case "srcset":
                  t.attr("srcset", t.data("srcset"));
                  break;
                default:
                  t.attr("src", t.data("src"));
              }
              return t;
            },
          })),
          (o.fn.UILazyload = function () {
            return this.each(function () {
              var t = o(this);
              a.hasDataset(t, n) || new n({ el: t }).saveDataset();
            });
          }),
          (e.exports = n);
      },
      { "../../plugins/jquery.sonar": 22, "./UIElement": 9, jquery: "jquery" },
    ],
    15: [
      function (t, e, i) {
        function n(t) {
          a.call(this, t),
            (this.timer = 0),
            (this.options = o.extend({}, n.options, this.options)),
            this.$el.html(this.tpl(this.options.title, this.options.message)),
            (this.dom = {}),
            (this.dom.title = this.$el.find("div.ui-messagebox-title")),
            (this.dom.text = this.$el.find("div.ui-messagebox-text")),
            (this.dom.buttons = this.$el.find("div.ui-messagebox-buttons")),
            this._setup();
        }
        var o = t("jquery"),
          a = t("./UIElement"),
          s = document.createElement("div").style,
          r = (function () {
            for (
              var t = "t,webkitT,MozT,msT,OT".split(","), e = 0, i = t.length;
              e < i;
              e++
            )
              if (t[e] + "ransform" in s)
                return t[e].substr(0, t[e].length - 1);
            return !1;
          })(),
          u = (function () {
            return (
              !1 !== r &&
              {
                "": "transitionend",
                webkit: "webkitTransitionEnd",
                Moz: "transitionend",
                O: "otransitionend",
                ms: "MSTransitionEnd",
              }[r]
            );
          })(),
          c = (function () {
            return (
              !1 !== r &&
              {
                "": "animationend",
                webkit: "webkitAnimationEnd",
                Moz: "animationend",
                O: "oanimationend",
                ms: "MSAnimationEnd",
              }[r]
            );
          })();
        (n.options = { close: "Close", title: "", message: "" }),
          (n.prototype = o.extend(Object.create(a.prototype), {
            constructor: n,
            className: "ui-messagebox",
            _setup: function () {
              (this.dom.close = this.$el.find(".close").on(
                "click",
                o.proxy(function (t) {
                  t.preventDefault(), this.close();
                }, this)
              )),
                this.options.close && this.dom.close.show();
            },
            _hide: function (t) {
              this.$el.slideUp(
                o.proxy(function () {
                  t && t.call(this),
                    this.options.onClose && this.options.onClose(this);
                }, this)
              );
            },
            _show: function (t) {
              this.$el.slideDown(
                o.proxy(function () {
                  t && t.call(this),
                    this.options.onOpen && this.options.onOpen(this);
                }, this)
              );
            },
            _setContent: function (t, e) {
              return (
                this.dom.title.html(t || ""), this.dom.text.html(e || ""), this
              );
            },
            _buildBtns: function (t) {
              var e = this,
                i = [];
              return (
                o.each(t || [], function (t) {
                  var n = this;
                  i.push(
                    o('<button class="ui-messagebox-button" />')
                      .text(t)
                      .addClass(n.className)
                      .on("click", function (t) {
                        t.preventDefault(), n && n.call(e, this, t);
                      })
                      .get(0)
                  );
                }),
                i
              );
            },
            question: function (t) {
              var e = this;
              return (
                (buttons = buttons || {}),
                e._setContent(t.title, t.text),
                e.dom.buttons.show().empty().append(e._buildBtns(t.buttons)),
                e
              );
            },
            message: function (t) {
              var e = this,
                i = t.type || "success";
              return (
                e.$el
                  .removeClass("ui-messagebox-fail ui-messagebox-success")
                  .addClass("ui-messagebox-" + i)
                  .height(),
                e.open().blink(t.blinks || 0),
                e.dom.buttons.empty().hide(),
                e._setContent(t.title, t.text),
                t.delayToClose && this.close(t.delayToClose),
                e
              );
            },
            open: function (t) {
              return this._show(t), this;
            },
            close: function (t, e) {
              return (
                t
                  ? setTimeout(
                      o.proxy(function () {
                        this._hide(e);
                      }, this),
                      1e3 * t
                    )
                  : this._hide(e),
                this
              );
            },
            blink: function (t) {
              var e = this;
              return (
                t &&
                  e.$el
                    .one(u, function (i) {
                      e.$el
                        .one(u, function (i) {
                          e.blink(t - 1);
                        })
                        .removeClass("ui-messagebox-emphasis");
                    })
                    .addClass("ui-messagebox-emphasis"),
                e
              );
            },
            shake: function (t) {
              var e = this;
              return (
                e.$el
                  .one(c, function (i) {
                    t && t.call(e, this, i),
                      e.$el.removeClass("animation-shake");
                  })
                  .css("animation-duration", "1s")
                  .addClass("animation-shake"),
                this
              );
            },
            tpl: function (t, e) {
              return (
                '<a class="ui-messagebox-closer close" href="#close" style="display:none" title="' +
                this.options.close +
                '"/><div class="ui-messagebox-title">' +
                t +
                '</div><div class="ui-messagebox-text">' +
                e +
                '</div><div class="ui-messagebox-buttons" style="display:none"></div>'
              );
            },
          })),
          (e.exports = n);
      },
      { "./UIElement": 9, jquery: "jquery" },
    ],
    16: [
      function (t, e, i) {
        function n(t) {
          a.call(this, t);
          var e = this;
          e.$el.html(n.template),
            (e.document = o(document)),
            (e.dom.contentOutside = e.$el.find(".ui-modal-content")),
            (e.dom.contentDocument = e.$el.find(".ui-modal-document")),
            (e.dom.contentInside = e.$el.find(
              ".ui-modal-content-inside:first"
            )),
            (e.dom.overlay = e.$el.find(".ui-modal-overlay")),
            (e.isOpen = !1),
            e.options.view && e.setView(e.options.view),
            (e.onKeyDownProxy = e._onKeyDown.bind(e)),
            (e.closeHandlerProxy = e._closeHandler.bind(e)),
            e._bindEvents();
        }
        var o = t("jquery"),
          a = t("./UIElement");
        t("../../plugins/jquery.ends.js"),
          t("../../plugins/jquery.tap"),
          (n.template = [
            '<div class="ui-modal-overlay"></div>',
            '<div class="ui-modal-content">',
            '<div class="ui-modal-content-inside">',
            '<div class="ui-modal-document"></div>',
            "</div>",
            "</div>",
          ].join("")),
          (n.prototype = o.extend(Object.create(a.prototype), {
            constructor: n,
            className: "ui-modal",
            defaults: { overlayCloser: !1, keyboardClose: !1, view: null },
            _closeHandler: function (t) {
              t.preventDefault(), this.close(), this.trigger("close");
            },
            shake: function () {
              var t = this,
                e = t.dom.contentInside;
              if (!o.fn.animationEnd)
                throw "UIModalError: $.fn.animationEnd is required";
              e.animationEnd(function () {
                e.removeClass("animation-shake");
              }).addClass("animation-shake");
            },
            setView: function (t) {
              (this.subView = t), (t.modal = this);
              var e = this,
                i = function () {
                  e.dom.contentDocument.empty(),
                    (e.hasSubView = !0),
                    e.dom.contentDocument[
                      "object" == typeof el ? "append" : "html"
                    ](t.el);
                };
              return (
                this.isOpen
                  ? this._change(function () {
                      i.call(e);
                    })
                  : i.call(this),
                e
              );
            },
            open: function () {
              var t = this;
              if (!t.isAnimating && !t.isOpen)
                return t.$el.appendTo("body"), t._show(), t;
            },
            close: function () {
              var t = this;
              if (!t.isAnimating && t.isOpen) return t._hide(), t;
            },
            _onKeyDown: function (t) {
              var e = this;
              e.options.keyboardClose &&
                27 == t.keyCode &&
                (e.close(), e.trigger("close"));
            },
            _bindEvents: function () {
              var t = this;
              t.dom.contentDocument.on(
                "tap.uimodal",
                ".close",
                t.closeHandlerProxy
              ),
                t.document.on("keydown.modal", t.onKeyDownProxy),
                t.options.overlayCloser &&
                  t.dom.overlay.one(
                    Modernizr.touchevents
                      ? "touchstart.uimodal"
                      : "click.uimodal",
                    t.closeHandlerProxy
                  );
            },
            _unBindEvents: function () {
              var t = this;
              t.dom.contentDocument.off(
                "tap.uimodal",
                ".close",
                t.closeHandlerProxy
              ),
                t.document.off("keydown.modal", t.onKeyDownProxy),
                t.options.overlayCloser && t.dom.overlay.off(".uimodal");
            },
            _change: function (t) {
              var e = this,
                i = function () {
                  "function" == typeof t && t(),
                    e.trigger("changeView", e.subView);
                },
                n = e.dom.contentInside;
              Modernizr.csstransitions
                ? (n.transitionEnd(function () {
                    n.transitionEnd(i),
                      e.$el.height(),
                      e.$el.removeClass("ui-modal-change");
                  }),
                  e.$el.height(),
                  e.$el.addClass("ui-modal-change"))
                : (n.css("display", "inline-block"), i && i.call(e));
            },
            _show: function () {
              var t = this,
                e = function () {
                  t.trigger("openEnd"), (t.isOpen = !0), (t.isAnimating = !1);
                },
                i = t.dom.contentInside;
              (t.isAnimating = !0),
                Modernizr.csstransitions && !1 === t.isOpen
                  ? (i.transitionEnd(e),
                    t.$el.height(),
                    t.$el.addClass("ui-modal-show"))
                  : (i.css("display", "inline-block"), e && e.call(t));
            },
            _hide: function () {
              var t = this,
                e = function () {
                  t.trigger("closeEnd"),
                    (t.isOpen = !1),
                    (t.isAnimating = !1),
                    t.destroy();
                };
              t._unBindEvents(),
                (t.isAnimating = !0),
                Modernizr.csstransitions && t.isOpen
                  ? (t.dom.contentInside.transitionEnd(e),
                    t.$el.height(),
                    t.$el.removeClass("ui-modal-show"))
                  : e && e.call(t);
            },
            destroy: function () {
              var t = this;
              t.destroyed ||
                ((t.destroyed = !0),
                t._unBindEvents(),
                (t.document = null),
                t.subView && t.subView.$el && t.subView.$el.detach(),
                (t.options.view = null),
                t.remove());
            },
          })),
          (e.exports = n);
      },
      {
        "../../plugins/jquery.ends.js": 21,
        "../../plugins/jquery.tap": 23,
        "./UIElement": 9,
        jquery: "jquery",
      },
    ],
    17: [
      function (t, e, i) {
        function n(t, e) {
          return (
            (e = parseFloat(e || 2) + 1),
            (e = parseFloat("10000".substr(0, e))),
            Math.round(t * e) / e
          );
        }

        function o(t) {
          function e() {
            var t, e, i, n, o, s;
            I
              ? ((i = w.width()),
                (t = E * i),
                (e = t + i - h),
                e > 0 && (t -= e),
                y.stop().animate({ "margin-left": -1 * t }),
                w.removeClass("ui-active").eq(E).addClass("ui-active"))
              : (T
                  ? ((n = l[d][0] * E),
                    (o = n + l[d][0]),
                    k < o && (n -= o - k),
                    w.slice(n, o).each(function () {
                      s =
                        s > a(this).outerHeight(!0)
                          ? s
                          : a(this).outerHeight(!0);
                    }))
                  : (s = "auto"),
                (t = 100 * E),
                (e = t + 100 - h),
                e > 0 && (t -= e + f / p),
                (t += f * E),
                y.stop().animate({ height: s, "margin-left": -1 * t + "%" })),
              b.children().length > 0 &&
                b
                  .children("li")
                  .removeClass("ui-active")
                  .eq(E)
                  .addClass("ui-active");
          }

          function i() {
            var t,
              i,
              o,
              s,
              u,
              x,
              _ = "";
            if (
              (I
                ? ((h = 0),
                  w.each(function () {
                    h += a(this).width() + 1;
                  }),
                  (x = Math.ceil((c.width() - (w.width() + 1)) / 2)),
                  y.width(h + x),
                  (m = w.length),
                  (s = w.length),
                  w.eq(0).css({ "margin-left": x }).addClass("ui-active"))
                : ((u = l[d]),
                  (p = u[0]),
                  (t = u[1]),
                  (f = u[2]),
                  (h = Math.round((t + f) * k)),
                  (s = Math.ceil((m = h / 100))),
                  w.removeAttr("style"),
                  y.removeAttr("style"),
                  y.css("width", h + f * m + "%"),
                  T &&
                    setTimeout(function () {
                      y.css({ height: w.eq(0).outerHeight(!0) });
                    }, 500),
                  (i = n((100 * f) / t / k)),
                  (o = 100 / k - i),
                  w.css({
                    width: o + "%",
                    "margin-right": (f ? n(i) : 0) + "%",
                  }),
                  0 != 100 - (i + n(o)) * k &&
                    navigator.userAgent.match(/iPhone|iPad|iPod/i) &&
                    w.css({ width: o + 1e-4 + "%" })),
              T &&
                a(window).on("debouncedresize", function () {
                  var t = w.eq(E).height();
                  y.css("height", t + "px");
                }),
              b.empty(),
              (E = E > s ? s - 1 : E),
              s > 1)
            ) {
              for (var j = 1; j <= s; j++) _ += "<li>" + j + "</li>";
              b
                .html(_)
                .children("li")
                .on("click", function (t) {
                  t.preventDefault();
                  var i = a(this);
                  i.hasClass("ui-active") ||
                    ((E = i.prevAll().length),
                    (v = clearInterval(v)),
                    void 0 === v && r(),
                    e());
                })
                .eq(E)
                .trigger("click"),
                b.show();
            } else g.hide(), b.hide();
          }

          function o() {
            if (I) return i();
            var t = a(window, document).width(),
              e = 0;
            for (var n in l) {
              if (t >= e && t < n) return void (n != d && ((d = n), i()));
              e = n;
            }
          }

          function r() {
            j > 0 &&
              (v = setInterval(function () {
                (E += 1), E < 0 && (E = k - 1), E >= k && (E = 0), e();
              }, j));
          }

          function u(t) {
            var i = Math.ceil(m);
            (E += "prev" == t ? -1 : 1),
              (E = E < 0 ? i - 1 : E >= i ? 0 : E),
              e();
          }
          s.call(this, t);
          var c = this.$el;
          if (!(c.length < 1 || c.hasClass("orbit-ed"))) {
            var l,
              d,
              h,
              f,
              p,
              m,
              v,
              g = c.find(".ui-arrows"),
              b = c.find(".ui-pager"),
              y = (c.find(".ui-indicator").hide(), c.find(".ui-inner")),
              w = y.children(".ui-item"),
              x = y.children(".ui-item-clone-first")
                ? y.children(".ui-item-clone-first")
                : "",
              _ = y.children(".ui-item-clone-last")
                ? y.children(".ui-item-clone-last")
                : "",
              k = w.length,
              E = 0,
              j = 1 * (c.data("interval") || 0),
              I = "auto" == c.data("size"),
              T = "auto" == c.data("height");
            c.data("async");
            T &&
              c.on("heightAuto", function () {
                e();
              });
            var S, q;
            (S = w.last().html()),
              (q = w.first().html()),
              "" != x && "" != _ && (x.html(S), _.html(q)),
              I ||
                ((l = c.data("size")
                  ? c
                      .data("size")
                      .replace(/:([\w\.]*)/g, ":[$1]")
                      .replace(/x/g, ",")
                  : '"3020":[1,100,0]'),
                (l = JSON.parse("{" + l + "}"))),
              g.find(".ui-prev, .ui-next").on("click.libui", function (t) {
                t.preventDefault(),
                  clearInterval(v),
                  u(a(this).hasClass("ui-prev") ? "prev" : "next"),
                  r();
              }),
              "auto" == (c.data("resize") || "auto") &&
                a(window).on("resize.libui orientationchange", o),
              o(),
              (this.resize = o),
              (this.slide = e),
              (this.cycle = r);
          }
        }
        var a = t("jquery"),
          s = t("./UIElement");
        (o.prototype = a.extend(Object.create(s.prototype), {
          constructor: o,
        })),
          (o.dataSetName = "UIOrbit"),
          (a.fn.UIOrbit = function () {
            return this.each(function () {
              var t = a(this);
              s.hasDataset(t, o) || new o({ el: t }).saveDataset();
            });
          }),
          (e.exports = o);
      },
      { "./UIElement": 9, jquery: "jquery" },
    ],
    18: [
      function (t, e, i) {
        function n(t) {
          o.call(this, t),
            (this.uiSpinner = new a(this.options.spinner)),
            (this.stateIcon = new s()),
            (this.dom.text = r("<span/>")
              .addClass("ui-statusbar-text")
              .text(t.text)),
            (this.dom.img = r("<span/>").addClass("ui-statusbar-img")),
            this.$el.append(this.dom.img),
            this.$el.append(this.dom.text);
        }
        var o = t("./UIElement"),
          a = t("./UISpinner"),
          s = t("./UIStateIcon"),
          r = t("jquery");
        (n.prototype = r.extend(Object.create(o.prototype), {
          constructor: n,
          className: "ui-statusbar",
          defaults: { text: "", spinner: { width: 20, height: 20 } },
          setWorkingMessage: function (t, e) {
            "string" == typeof t || "number" == typeof t
              ? (clearTimeout(this.delayTimerId),
                this.setStatusText(t),
                this.dom.img.html(this.uiSpinner.$el),
                this._showGraph(),
                isNaN(e) ||
                  (this.delayTimerId = setTimeout(
                    this.hide.bind(this),
                    1e3 * e
                  )))
              : this.hide();
          },
          setStateMessage: function (t, e, i) {
            "string" == typeof t || "number" == typeof t
              ? (clearTimeout(this.delayTimerId),
                this.setStatusText(t),
                this.dom.img.html(this.stateIcon.$el),
                this.stateIcon.setType(e),
                this._showGraph(),
                isNaN(i) ||
                  (this.delayTimerId = setTimeout(
                    this.hide.bind(this),
                    1e3 * i
                  )))
              : this.hide();
          },
          _showGraph: function () {
            this.dom.img.css("display", "inline-block");
          },
          _hideGraph: function () {
            this.dom.img.hide();
          },
          setStatusText: function (t) {
            t && this.show(), this.dom.text.text(t);
          },
          show: function () {
            this.$el.slideDown();
          },
          hide: function () {
            this.$el.slideUp(), this._hideGraph();
          },
        })),
          (n.toTypeName = function (t) {
            return /ok|success|true|1/.test(t)
              ? "success"
              : /fail|error|0|false/.test(t)
              ? "error"
              : /info/.test(t)
              ? "info"
              : void 0;
          }),
          (e.exports = n);
      },
      {
        "./UIElement": 9,
        "./UISpinner": 10,
        "./UIStateIcon": 11,
        jquery: "jquery",
      },
    ],
    19: [
      function (t, e, i) {
        arguments[4][12][0].apply(i, arguments);
      },
      { "../../views/masters/View": 25, dup: 12, jquery: "jquery" },
    ],
    20: [
      function (t, e, i) {
        function n(t) {
          o.call(this), (this.options = t);
        }
        var o = t("../views/masters/SitePage"),
          a = t("jquery"),
          s = t("../modules/ui/uiview"),
          r = t("../modules/ui/uimodal");
        (n.prototype = a.extend(Object.create(o.prototype), {
          constructor: n,
          ready: function () {
            console.log("Ready: HomePage"), o.prototype.ready.call(this);
            var t = a(".ingresar-button-header"),
              e = a(".min-box-ingresar");
            a(".btn-reg-beneficiario").on("click", function (i) {
              i.preventDefault(),
                i.stopPropagation(),
                a(this).data("login")
                  ? (window.location.href = a(this).attr("href"))
                  : o.prototype._showPopup(e, t);
            }),
              a("#form-activar-invitacion").on("submit", function (i) {
                a(this).data("login") && u.isValid(a(this)) ||
                  (i.preventDefault(),
                  console.log("entra v2"),
                  o.prototype._showPopup(e, t));
              }),
              a("#alert").on("click", function (t) {
                if ((t.preventDefault(), !window.location.search)) {
                  var e = a("#rptamsg").remove().get(0).innerHTML,
                    i = new s({ template: e }),
                    n = new r({ id: "modal-home", overlayCloser: !0 });
                  n.setView(i.render()),
                    n.open(),
                    a("#close-modal").on("click", function () {
                      n.close();
                    });
                }
              });
          },
          load: function () {
            console.log("Load: HomePage");
          },
        })),
          new n({ data: {} });
      },
      {
        "../modules/ui/uimodal": 16,
        "../modules/ui/uiview": 19,
        "../views/masters/SitePage": 24,
        jquery: "jquery",
      },
    ],
    21: [
      function (t, e, i) {
        !(function (e) {
          "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : e("object" == typeof i ? t("jquery") : jQuery);
        })(function (t) {
          (t.create = function (e) {
            return t(document.createElement(e));
          }),
            (t.fn.css3 = function (t) {
              var e = {},
                i = ["webkit", "moz", "ms", "o"];
              for (var n in t) {
                for (var o = 0; o < i.length; o++)
                  e["-" + i[o] + "-" + n] = t[n];
                e[n] = t[n];
              }
              return this.css(e), this;
            }),
            (t.fn.animationEnd = function (e) {
              for (
                var i = ["webkitAnimationEnd", "animationend", "oAnimationEnd"],
                  n = function (n) {
                    for (var o = 0; o < i.length; o++) t(this).off(i[o]);
                    e && e.call(this, n);
                  },
                  o = 0;
                o < i.length;
                o++
              )
                this.on(i[o], n);
              return this;
            }),
            (t.fn.transitionEnd = function (e) {
              for (
                var i = [
                    "webkitTransitionEnd",
                    "transitionend",
                    "oTransitionEnd",
                  ],
                  n = function (n, o) {
                    for (var a = 0; a < i.length; a++) t(this).off(i[a]);
                    e && e.call(this, o);
                  },
                  o = 0;
                o < i.length;
                o++
              )
                this.on(i[o], n);
              return this;
            }),
            (t.id = function (e) {
              return t("#" + e);
            });
        });
      },
      { jquery: "jquery" },
    ],
    22: [
      function (t, e, i) {
        !(function (t, e, i, n) {
          t.fn.sonar = function (e, i) {
            return (
              "boolean" == typeof e && ((i = e), (e = void 0)),
              t.sonar(this[0], e, i)
            );
          };
          var o,
            a = i.body,
            s = t(e),
            r = function (t, n, o) {
              if (t) {
                a || (a = i.body);
                var s = t,
                  r = 0,
                  u = a.offsetHeight,
                  c =
                    e.innerHeight ||
                    i.documentElement.clientHeight ||
                    a.clientHeight ||
                    0,
                  l =
                    i.documentElement.scrollTop ||
                    e.pageYOffset ||
                    a.scrollTop ||
                    0,
                  d = t.offsetHeight || 0;
                if (!t.sonarElemTop || t.sonarBodyHeight !== u) {
                  if (s.offsetParent)
                    do {
                      r += s.offsetTop;
                    } while ((s = s.offsetParent));
                  (t.sonarElemTop = r), (t.sonarBodyHeight = u);
                }
                return (
                  (n = void 0 === n ? 0 : n),
                  !(
                    t.sonarElemTop + (o ? 0 : d) < l - n ||
                    t.sonarElemTop + (o ? d : 0) > l + c + n
                  )
                );
              }
            },
            u = {},
            c = 0,
            l = function () {
              o && clearTimeout(o),
                (o = setTimeout(function () {
                  var e, i, n, o, a, s, c;
                  for (n in u)
                    for (i = u[n], s = 0, c = i.length; s < c; s++)
                      (o = i[s]),
                        (e = o.elem),
                        (a = r(e, o.px, o.full)),
                        ("scrollout" === n ? !a : a)
                          ? o.tr ||
                            (e["_" + n]
                              ? (t(e).triggerHandler(n), (o.tr = 1))
                              : (i.splice(s, 1), s--, c--))
                          : (o.tr = 0);
                }, 0));
            },
            d = function (t, e) {
              t["_" + e] = 0;
            },
            h = function (e, i) {
              var n = i.px,
                o = i.full,
                a = i.evt,
                d = r(e, n, o),
                h = 0;
              (e["_" + a] = 1),
                ("scrollout" === a ? !d : d) &&
                  (setTimeout(function () {
                    t(e).triggerHandler(
                      "scrollout" === a ? "scrollout" : "scrollin"
                    );
                  }, 0),
                  (h = 1)),
                u[a].push({ elem: e, px: n, full: o, tr: h }),
                c || (s.bind("scroll", l), (c = 1));
            };
          (t.sonar = r),
            (u.scrollin = []),
            (t.event.special.scrollin = {
              add: function (t) {
                var e = t.data || {};
                this.scrollin ||
                  h(this, { px: e.distance, full: e.full, evt: "scrollin" });
              },
              remove: function (t) {
                d(this, "scrollin");
              },
            }),
            (u.scrollout = []),
            (t.event.special.scrollout = {
              add: function (t) {
                var e = t.data || {},
                  i = this;
                i.scrollout ||
                  h(i, { px: e.distance, full: e.full, evt: "scrollout" });
              },
              remove: function (t) {
                d(this, "scrollout");
              },
            });
        })(jQuery, window, document);
      },
      {},
    ],
    23: [
      function (t, e, i) {
        !(function (t, e) {
          "use strict";
          var i,
            n,
            o,
            a = "clientX clientY screenX screenY pageX pageY".split(" "),
            s = { count: 0, event: 0 },
            r = function (t, i) {
              var n = i.originalEvent,
                o = e.Event(n);
              o.type = t;
              for (var s = 0, r = a.length; s < r; s++) o[a[s]] = i[a[s]];
              return o;
            },
            u = function (t) {
              if (t.isTrigger) return !1;
              var i = s.event,
                n = Math.abs(t.pageX - i.pageX),
                o = Math.abs(t.pageY - i.pageY),
                a = Math.max(n, o);
              return (
                t.timeStamp - i.timeStamp < e.tap.TIME_DELTA &&
                a < e.tap.POSITION_DELTA &&
                (!i.touches || 1 === s.count) &&
                d.isTracking
              );
            },
            c = function (t) {
              if (!o) return !1;
              var i = Math.abs(t.pageX - o.pageX),
                n = Math.abs(t.pageY - o.pageY),
                a = Math.max(i, n);
              return (
                Math.abs(t.timeStamp - o.timeStamp) < 750 &&
                a < e.tap.POSITION_DELTA
              );
            },
            l = function (t) {
              if (0 === t.type.indexOf("touch")) {
                t.touches = t.originalEvent.changedTouches;
                for (var e = t.touches[0], i = 0, n = a.length; i < n; i++)
                  t[a[i]] = e[a[i]];
              }
              t.timeStamp = Date.now ? Date.now() : +new Date();
            },
            d = {
              isEnabled: !1,
              isTracking: !1,
              enable: function () {
                d.isEnabled ||
                  ((d.isEnabled = !0),
                  (i = e(t.body)
                    .on("touchstart._tap", d.onStart)
                    .on("mousedown._tap", d.onStart)
                    .on("click._tap", d.onClick)));
              },
              disable: function () {
                d.isEnabled && ((d.isEnabled = !1), i.off("._tap"));
              },
              onStart: function (t) {
                t.isTrigger ||
                  (l(t),
                  (e.tap.LEFT_BUTTON_ONLY && !t.touches && 1 !== t.which) ||
                    (t.touches && (s.count = t.touches.length),
                    d.isTracking ||
                      (!t.touches && c(t)) ||
                      ((d.isTracking = !0),
                      (s.event = t),
                      t.touches
                        ? ((o = t),
                          i
                            .on("touchend._tap._tapActive", d.onEnd)
                            .on("touchcancel._tap._tapActive", d.onCancel))
                        : i.on("mouseup._tap._tapActive", d.onEnd))));
              },
              onEnd: function (t) {
                var i;
                t.isTrigger ||
                  (l(t),
                  u(t) &&
                    ((i = r("tap", t)), (n = i), e(s.event.target).trigger(i)),
                  d.onCancel(t));
              },
              onCancel: function (t) {
                t && "touchcancel" === t.type && t.preventDefault(),
                  (d.isTracking = !1),
                  i.off("._tapActive");
              },
              onClick: function (t) {
                if (
                  !t.isTrigger &&
                  n &&
                  n.isDefaultPrevented() &&
                  n.target === t.target &&
                  n.pageX === t.pageX &&
                  n.pageY === t.pageY &&
                  t.timeStamp - n.timeStamp < 750
                )
                  return (n = null), !1;
              },
            };
          e(t).ready(d.enable),
            (e.tap = {
              POSITION_DELTA: 10,
              TIME_DELTA: 400,
              LEFT_BUTTON_ONLY: !0,
            });
        })(document, jQuery);
      },
      {},
    ],
    24: [
      function (t, e, i) {
        function n(t) {
          o.call(this),
            (this.options = t),
            (this.messageBox = new c({ id: "header-messagebox" })),
            (this.regStatusBar = new h({ id: "minibox-reg-statusbar" })),
            this.regStatusBar.hide(),
            (this.loginStatusBar = new h({ id: "minibox-login-statusbar" })),
            this.loginStatusBar.hide(),
            (this.beforePos = 0),
            (this._requesting = {}),
            (this.visIn = !1),
            (this.visReg = !1),
            u.setErrorTemplate(
              '<span class="icon-error"></span><h4 class="error">{{MESSAGE}}</h4>'
            ),
            (window.visIng = this.visIn);
        }
        var o = t("./page"),
          a = t("jquery"),
          s = (t("../../modules/ui/uiorbit"), t("../../modules/ui/uidropdown")),
          r = t("../../lib/domdelegates"),
          u = t("../../lib/validate"),
          c = t("../../modules/ui/uimessagebox"),
          l = t("../../modules/ui/uimodal"),
          d = t("../../modules/ui/uiview"),
          h = t("../../modules/ui/uistatusbar");
        t("../../modules/ui/uilazyload");
        (n.prototype = a.extend(Object.create(o.prototype), {
          constructor: n,
          ready: function () {
            function t(t) {
              t.preventDefault(),
                u.isValid(a(this))
                  ? console.log("valido")
                  : console.log("no valido");
            }

            function e(t) {
              if ((t.preventDefault(), u.isValid(a(this)))) {
                ($.find("input[type='submit']")[0].disabled = !0),
                  ($.find("input[type='submit']")[0].value = "VALIDANDO...");
                var e = $.attr("action"),
                  i = $.find("select[name='tipodocumento']")[0].value,
                  n = $.find("input[name='numdocumento']")[0].value,
                  o = D.attr("data-link"),
                  s = e;
                a.ajax({
                  type: "POST",
                  url: s,
                  data: { document_type: i, document_number: n },
                  dataType: "json",
                  success: function (t) {
                    !0 === t.status
                      ? ($.find("#div-success").show(),
                        $.find("#div-success").css("width", "225px"),
                        $.find("#div-success").text(
                          "Eres suscriptor, clic en siguiente."
                        ),
                        ($.find("input[type='submit']")[0].disabled = !1),
                        ($.find("input[type='submit']")[0].value = "SIGUIENTE"),
                        $.find("input[type='submit']")[0].setAttribute(
                          "onclick",
                          "window.open('" + o + "' ,'_blank')"
                        ))
                      : ($.find("#div-error").show(),
                        $.find("#div-error").css("width", "225px"),
                        $.find("#div-error").text("Aún no eres suscriptor."),
                        ($.find("input[type='submit']")[0].disabled = !1),
                        ($.find("input[type='submit']")[0].value = "VALIDAR"));
                  },
                  error: function (t) {
                    console.log("Error Servicio ", t);
                  },
                });
              }
            }
            console.log("Ready: SitePage ok");
            var i = this;
            a(
              ".ui-form-row input, .ui-form-row textarea, .ui-form-row select"
            ).on("focus", function () {
              i._showMessageErrorForm(
                a(this).parents(".ui-form-row").find(".error")
              );
            }),
              a(".ui-form-row").on(
                "focus",
                ".recaptcha_input_area input",
                function () {
                  i._showMessageErrorForm(
                    a(this).parents(".ui-form-row").find(".error")
                  );
                }
              ),
              a(".ui-form-row").on("click", function (t) {
                t.stopPropagation();
              }),
              a(".ui-form-row").on("click", "span.icon-error", function (t) {
                i._showMessageErrorForm(a(this).next(".error"));
              });
            var i = this,
              n = a(".min-box-ingresar"),
              o = a(".min-box-registrate"),
              c = a("#form-login"),
              l = a("#box-registrate"),
              d = a("#box-recuperar-contrasenia"),
              h = a("#box-recuperar-usuario"),
              f = a(".ingresar-button-header"),
              p = a(".registrarse-button-header"),
              m = a(".olvide-contrasena"),
              v = a(".volver-ingresar"),
              g = a(".recuperar-contrasenia-box"),
              b = a(".ingresa-box"),
              y = a(".recuperar-usuario"),
              w = a(".volver-recuperar-contrasena"),
              x = a(".recuperar-usuario-box"),
              _ = a("#btn-registrate-login"),
              k = a(".tipo_documento"),
              E = a("header span i.search"),
              j = a(".busqueda-header"),
              I = a("#form-search"),
              T = a("#flyout-beneficiarios"),
              S = c.find("[name='redirect']"),
              q = a(document),
              D = a("#layout-documento"),
              A = a(".button-shop-flyout"),
              $ = a("#form-flyout"),
              C = a(".tipo_documento_flyout");
            (this.minBoxIngresar = n),
              (this.minBoxRegistrate = o),
              (this.btnRegistrarseHeader = p),
              (this.btnIngresarHeader = f),
              a(".ui-orbit").UIOrbit(),
              /iphone|ipad|iPod/gi.test(navigator.appVersion)
                ? a(".ui-lazy").each(function () {
                    a(this).attr("src", a(this).attr("data-src"));
                  })
                : a(".ui-lazy").UILazyload(),
              new s({ el: a("#buscador-categorias"), name: "tipo" }).on(
                "change",
                function (t) {
                  this.$caption.html(a(t).find("span").clone());
                }
              ),
              this.messageBox.$el.prependTo(document.body),
              this.loginStatusBar.$el.appendTo(n),
              this.regStatusBar.$el.appendTo(o),
              r.setShareDelegate(document),
              n.on("click", function (t) {
                t.stopPropagation();
              }),
              o.on("click", function (t) {
                t.stopPropagation();
              }),
              f.on(
                "click",
                function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    n.is(":visible")
                      ? (this._hidePopup(n, f),
                        this.loginStatusBar.hide(),
                        (window.visIng = !1))
                      : (this._showPopup(
                          this.minBoxIngresar,
                          this.btnIngresarHeader
                        ),
                        this._hidePopup(
                          this.minBoxRegistrate,
                          this.btnRegistrarseHeader
                        ),
                        this.regStatusBar.hide(),
                        (window.visIng = !0));
                }.bind(this)
              ),
              _.on(
                "click",
                function () {
                  this.minBoxRegistrate.is(":visible")
                    ? (this._hidePopup(
                        this.minBoxRegistrate,
                        this.btnRegistrarseHeader
                      ),
                      this.regStatusBar.hide(),
                      (window.visIng = !1))
                    : (this._hidePopup(
                        this.minBoxIngresar,
                        this.btnIngresarHeader
                      ),
                      this.loginStatusBar.hide(),
                      this._showPopup(
                        this.minBoxRegistrate,
                        this.btnRegistrarseHeader
                      ),
                      (window.visIng = !0));
                }.bind(this)
              );
            var O = window.location.search.replace("?", "");
            O &&
              ("login" == O
                ? (f.trigger("click"), a("#userEmail").focus())
                : "register" == O &&
                  (_.trigger("click"),
                  a("#tipo_documento_suscriptor").focus())),
              a(document.body).on(
                "click",
                function (t) {
                  this.visReg &&
                    (this._hidePopup(
                      this.minBoxRegistrate,
                      this.btnRegistrarseHeader
                    ),
                    this.regStatusBar.hide()),
                    !window.visIng ||
                      a(t.target).parent("#btn-reg-beneficios").length ||
                      "btn-cupon" == a(t.target)[0].id ||
                      a(t.target).parent("#form-activar-invitacion").length ||
                      "alert" == t.target.id ||
                      (this._hidePopup(
                        this.minBoxIngresar,
                        this.btnIngresarHeader
                      ),
                      this.loginStatusBar.hide());
                  var e = a(".error");
                  e.is(":visible") && e.hide();
                }.bind(this)
              ),
              this.minBoxIngresar.on("click", function (t) {
                t.stopPropagation();
              }),
              this.minBoxRegistrate.on("click", function (t) {
                t.stopPropagation();
              }),
              p.on(
                "click",
                function (t) {
                  t.preventDefault(),
                    t.stopPropagation(),
                    this.minBoxRegistrate.is(":visible")
                      ? (this._hidePopup(
                          this.minBoxRegistrate,
                          this.btnRegistrarseHeader
                        ),
                        this.regStatusBar.hide(),
                        (this.visReg = !1))
                      : (this._hidePopup(
                          this.minBoxIngresar,
                          this.btnIngresarHeader
                        ),
                        this.loginStatusBar.hide(),
                        this._showPopup(
                          this.minBoxRegistrate,
                          this.btnRegistrarseHeader
                        ),
                        (this.visReg = !0));
                }.bind(this)
              ),
              q.on("click", ".btn-redirect", function (t) {
                t.preventDefault();
                var e = this.getAttribute("href");
                S.val(e), f.click();
              }),
              m.on(
                "click",
                function () {
                  g.fadeIn(), b.hide(), this.loginStatusBar.hide();
                }.bind(this)
              ),
              v.on(
                "click",
                function () {
                  g.hide(), b.fadeIn(), this.loginStatusBar.hide();
                }.bind(this)
              ),
              y.on(
                "click",
                function () {
                  g.hide(), this.loginStatusBar.hide(), x.fadeIn();
                }.bind(this)
              ),
              w.on(
                "click",
                function () {
                  x.hide(), this.loginStatusBar.hide(), g.fadeIn();
                }.bind(this)
              ),
              E.on("click", function (t) {
                t.preventDefault(), j.is(":visible"), j.slideToggle("fast");
              }),
              a("#close-search").on("click", function (t) {
                t.preventDefault(),
                  j.slideToggle("fast"),
                  E.css("background-position", "0px 0px");
              }),
              k.find("option").each(function (t, e) {
                "DNI" == a(this).val().split("#")[0]
                  ? a(this)
                      .attr("data-min-length", 8)
                      .attr("data-max-length", 8)
                  : a(this)
                      .attr("data-min-length", 5)
                      .attr("data-max-length", 12);
              }),
              k.each(function () {
                var t = a(this)
                    .parents(".ui-form-row")
                    .next()
                    .find(".numero-documento"),
                  e =
                    "DNI" == a(this).val().split("#")[0]
                      ? "data-validate-integer"
                      : "data-validate-extcard",
                  i = a(this).find('option[selected="selected"]'),
                  n = i.length ? i.attr("data-min-length") : 8,
                  o = i.length ? i.attr("data-max-length") : 8;
                t.removeAttr(
                  "data-validate-integer data-validate-extcard data-validate-max-size data-validate-min-size maxlength"
                )
                  .attr(e, "")
                  .attr("data-validate-min-size", n)
                  .attr("data-validate-max-size", o)
                  .attr("maxlength", o);
              }),
              u.form(c),
              u.form($),
              $.on("submit", e),
              $.keypress(function (t) {
                (13 != t.keyCode && 13 != t.charCode && 13 != t.which) ||
                  $.trigger("submit", e);
              }),
              u.form(l),
              l.on("submit", t),
              u.form(d),
              d.on("submit", t),
              u.form(h),
              h.on("submit", t),
              c.on("submit", this._login.bind(this)),
              d.on("submit", this._passRecovery.bind(this)),
              h.on("submit", this._userRecovery.bind(this)),
              l.on("submit", this._registerUser.bind(this)),
              C.on("change", function () {
                var t = $.find("input[name='numdocumento']")[0];
                switch (a(this).val()) {
                  case "DNI":
                    (t.value = ""),
                      t.removeAttribute("data-validate-extcard"),
                      t.removeAttribute("data-validate-min-size"),
                      t.removeAttribute("data-validate-max-size"),
                      t.setAttribute("data-validate-integer", ""),
                      t.setAttribute("data-validate-size", "8"),
                      t.setAttribute("placeholder", "Ingresar DNI"),
                      t.focus();
                    break;
                  case "CEX":
                  case "CDI":
                  case "PAS":
                    (t.value = ""),
                      t.removeAttribute("data-validate-integer"),
                      t.removeAttribute("data-validate-size"),
                      t.setAttribute("data-validate-extcard", ""),
                      t.setAttribute("data-validate-min-size", "5"),
                      t.setAttribute("data-validate-max-size", "15"),
                      t.setAttribute("placeholder", "Ingresar Documento"),
                      t.focus();
                }
                u.refresh($);
              }),
              k.on("change", function () {
                var t = 8,
                  e = 8,
                  i = a(this).val().split("#")[0];
                a(this)
                  .find("option")
                  .each(function () {
                    a(this).val().split("#")[0] == i &&
                      ((t = a(this).attr("data-max-length")),
                      (e = a(this).attr("data-min-length")));
                  });
                var n = a(this.form),
                  o = n.find(".numero-documento");
                a(o)
                  .attr("data-validate-max-size", t)
                  .attr("data-validate-min-size", e)
                  .val(""),
                  "DNI" == this.value.split("#")[0]
                    ? a(o)
                        .attr("data-validate-integer", "")
                        .removeAttr("data-validate-extcard")
                    : a(o)
                        .attr("data-validate-extcard", "")
                        .removeAttr("data-validate-integer"),
                  u.refresh(n);
              });
            var P = a(location)[0].pathname,
              z =
                -1 != P.indexOf("/contacto")
                  ? { backgroundPosition: "-23px 0px" }
                  : { backgroundPosition: "0px 0px" };
            a(".call").css(z),
              a(".login-ready").on("click", function () {
                a(".min-box-micuenta").slideToggle("fast");
              }),
              a(window).on("scroll", this._navBarFixed.bind(this)),
              I.on("submit", function (t) {
                t.preventDefault();
                var e = this,
                  i = encodeURIComponent(e.buscar.value),
                  n = e.tipo.value;
                return "" != i
                  ? ((document.location.href =
                      "todos" != n
                        ? e.getAttribute("action") +
                          "tipo/" +
                          n +
                          "/buscar/" +
                          i.replace(/%20/g, "+").replace(/%2F/g, "")
                        : e.getAttribute("action") +
                          "buscar/" +
                          i.replace(/%20/g, "+").replace(/%2F/g, "")),
                    !1)
                  : (e.buscar.focus(), !1);
              }),
              T.find(".close").on("click", function (t) {
                t.preventDefault(), T.removeClass("in-view");
              }),
              A.each(function () {
                a(this).on("click", function (t) {
                  t.preventDefault();
                  var e = a(this).attr("data-url");
                  D.fadeIn("fast"),
                    D.addClass("in-view"),
                    D.attr("data-link", e),
                    D.find(".input-documento").val(""),
                    D.find(".tipo_documento_flyout").val("DNI"),
                    D.find(".error").hide(),
                    D.find(".success").hide(),
                    D.find(".button").val("VALIDAR"),
                    D.find(".button").attr("onclick", "");
                });
              }),
              D.find(".input-documento").on("input", function (t) {
                D.find(".success").hide(),
                  D.find(".error").hide(),
                  D.find(".button").val("VALIDAR"),
                  D.find(".button").attr("onclick", "");
              }),
              D.find(".tipo_documento_flyout").on("change", function (t) {
                D.find(".success").hide(),
                  D.find(".error").hide(),
                  D.find(".button").val("VALIDAR"),
                  D.find(".button").attr("onclick", "");
              }),
              D.find(".close").on("click", function (t) {
                t.preventDefault(), D.fadeOut("fast"), D.removeClass("in-view");
              });
            var B = a("#challenge-element .errors").length
              ? a("#challenge-element .errors").find("li").text()
              : null;
            if (B) {
              var N =
                '<div class="ui-message-error"><span class="icon-error"></span><h4 class="error">' +
                B +
                "</h4></div>";
              a("#challenge-element")
                .parents(".ui-form-row")
                .addClass("ui-error")
                .append(N)
                .find(".errors")
                .remove();
            }
            a(".close-modal").on("click", function (t) {
              a(this).parents("#modal-agreements").addClass("display_off");
            }),
              a(".item_colc .ofert_cs p").wrap("<div class='divp'></div>"),
              a(".divp").each(function () {
                for (; a(this).find("p").outerHeight() > a(this).height(); )
                  a(this)
                    .find("p")
                    .text(function (t, e) {
                      return e.replace(/\W*\s(\S)*$/, "....");
                    });
              }),
              a("#box-registrate #documento_suscriptor").on(
                "keypress",
                function (t) {
                  (13 != t.keyCode && 13 != t.charCode && 13 != t.which) ||
                    l.trigger("submit");
                }
              ),
              a("#box-recuperar-usuario #numero_documento").on(
                "keypress",
                function (t) {
                  (13 != t.keyCode && 13 != t.charCode && 13 != t.which) ||
                    h.trigger("submit");
                }
              );
          },
          _showMessageErrorForm: function (t) {
            a(".error").hide(), t.show();
          },
          showModalRegister: function () {
            var t = new l({ id: "modal-accomplished", overlayCloser: !0 });
            t.setView(new d({ el: a("#modal-congrats") })),
              t.open(),
              setTimeout(function () {
                t.close();
              }, 3e3);
          },
          _login: function (t) {
            u.isValid(a(t.target)) || t.preventDefault();
          },
          _registerUser: function (t) {
            if (
              (t.preventDefault(),
              u.isValid(a(t.target)) && !this._requesting[e])
            ) {
              var e = a("#box-registrate").attr("action"),
                i = {},
                n = a('select[name="tipo_documento_suscriptor"]').val(),
                o = a('input[name="documento_suscriptor"]').val(),
                s = this,
                r = s.regStatusBar;
              (i.tipo_documento = n),
                (i.documento = o),
                (i.distrito = 0),
                r.setWorkingMessage("Buscando.."),
                s
                  ._sendRequest(
                    e,
                    i,
                    "POST",
                    "application/x-www-form-urlencoded"
                  )
                  .done(function (t) {
                    var e = h.toTypeName(t.status) || "info";
                    r.setStateMessage(t.message, e, 10),
                      "success" === e &&
                        a(location).attr(
                          "href",
                          a("#box-registrate").data("redirect") +
                            "/ciudad_entrega/0/distrito_entrega/0/id/" +
                            t.suscriptor.id
                        );
                  })
                  .fail(function (t) {
                    r.setStateMessage("Error: " + t.statusText, "error", 10);
                  });
            }
          },
          _userRecovery: function (t) {
            if (
              (t.preventDefault(),
              u.isValid(a(t.target)) && !this._requesting[e])
            ) {
              var e = a("#box-recuperar-usuario").attr("action"),
                i = {},
                n = this,
                o = n.loginStatusBar;
              a(t.target)
                .serializeArray()
                .forEach(function (t) {
                  i[t.name] = t.value;
                }),
                o.setWorkingMessage("Enviando.."),
                n
                  ._sendRequest(
                    e,
                    i,
                    "POST",
                    "application/x-www-form-urlencoded"
                  )
                  .done(function (t) {
                    var e = h.toTypeName(t.status) || "info";
                    o.setStateMessage(t.msg, e, 2);
                  })
                  .fail(function (t) {
                    o.setStateMessage("Error: " + t.statusText, "error", 2);
                  });
            }
          },
          _passRecovery: function (t) {
            if (
              (t.preventDefault(),
              u.isValid(a(t.target)) && !this._requesting[e])
            ) {
              var e = a("#box-recuperar-contrasenia").attr("action"),
                i = {},
                n = this,
                o = n.loginStatusBar;
              (i.email = a('input[name="email"]').val()),
                (i.rol = a('input[name="tipo"]').val()),
                o.setWorkingMessage("Enviando.."),
                n
                  ._sendRequest(
                    e,
                    i,
                    "POST",
                    "application/x-www-form-urlencoded"
                  )
                  .done(function (t) {
                    var e = h.toTypeName(t.status) || "info";
                    o.setStateMessage(t.msg, e, 2);
                  })
                  .fail(function (t) {
                    o.setStateMessage("Error: " + t.statusText, "error", 2);
                  });
            }
          },
          /* here mtfk*/
          _sendRequest: function (t, e, i, n) {
            this._requesting[t] = !0;
            var o = a.ajax({
              url: t,
              type: i,
              data: e,
              contentType: n,
              dataType: "json",
            });
            return (
              o.always(
                function () {
                  this._requesting[t] = !1;
                }.bind(this)
              ),
              o
            );
          },
          _navBarFixed: function (t) {
            a(t.target).scrollTop() > 0
              ? (a("header").addClass("navbar-fixed"),
                a(t.target).scrollTop() > this.beforePos
                  ? ((this.beforePos = a(t.target).scrollTop()),
                    "-110px" == a("header").css("top") &&
                      a(".navbar-fixed").stop().animate({ top: "0px" }, "slow"))
                  : ((this.beforePos = a(t.target).scrollTop()),
                    "0px" == a("header").css("top") &&
                      (a(".navbar-fixed")
                        .stop()
                        .animate({ top: "-140px" }, "slow"),
                      this.minBoxIngresar.is(":visible") &&
                        (this._hidePopup(
                          this.minBoxIngresar,
                          this.btnIngresarHeader
                        ),
                        this.loginStatusBar.hide()),
                      this.minBoxRegistrate.is(":visible") &&
                        (this._hidePopup(
                          this.minBoxRegistrate,
                          this.btnRegistrarseHeader
                        ),
                        this.regStatusBar.hide()))))
              : ((this.beforePos = 0), a("header").removeClass("navbar-fixed"));
          },
          _hidePopup: function (t, e) {
            t.slideUp(),
              "min-box-ingresar" == t[0].className && (window.visIng = !1),
              e.css("border", "none");
          },
          _showPopup: function (t, e) {
            t.slideDown(),
              "min-box-ingresar" == t[0].className && (window.visIng = !0),
              e.css("border", "1px solid #f7c100");
          },
          load: function () {
            console.log("Load: SitePage");
          },
        })),
          (e.exports = n);
      },
      {
        "../../lib/domdelegates": 6,
        "../../lib/validate": 8,
        "../../modules/ui/uidropdown": 13,
        "../../modules/ui/uilazyload": 14,
        "../../modules/ui/uimessagebox": 15,
        "../../modules/ui/uimodal": 16,
        "../../modules/ui/uiorbit": 17,
        "../../modules/ui/uistatusbar": 18,
        "../../modules/ui/uiview": 19,
        "./page": 26,
        jquery: "jquery",
      },
    ],
    25: [
      function (t, e, i) {
        function n(t) {
          this.options = o({}, this.defaults, t);
        }
        var o = t("jquery-extend"),
          a = t("../../lib/CustomEvents");
        (n.prototype.defaults = {}), o(n.prototype, a), (e.exports = n);
      },
      { "../../lib/CustomEvents": 5, "jquery-extend": 3 },
    ],
    26: [
      function (t, e, i) {
        function n() {
          o.call(this);
          var t = document;
          (
            t.attachEvent
              ? "complete" === t.readyState
              : "loading" !== t.readyState
          )
            ? setTimeout(this.ready.bind(this), 1)
            : t.addEventListener("DOMContentLoaded", this.ready.bind(this), !1),
            window.addEventListener("load", this.load.bind(this)),
            (window.clubPage = this);
        }
        var o = t("./View");
        window.console || (window.console = {}),
          window.console.log || (window.console.log = function () {}),
          (n.prototype = Object.create(o.prototype)),
          (n.prototype.constructor = n),
          (n.prototype.ready = function () {
            console.log("Ready: Page");
          }),
          (n.prototype.load = function () {
            console.log("Load: Page");
          }),
          (e.exports = n);
      },
      { "./View": 25 },
    ],
  },
  {},
  [20]
);
//# sourceMappingURL=../maps/Home.bundle.js.map
