! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AV = t() : e.AV = t()
}(this, function () {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
      return e
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      })
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 31)
  }([function (e, t, n) {
    var r, i;
    (function () {
      function n(e) {
        function t(t, n, r, i, o, s) {
          for (; o >= 0 && o < s; o += e) {
            var a = i ? i[o] : o;
            r = n(r, t[a], a, t)
          }
          return r
        }
        return function (n, r, i, o) {
          r = S(r, o, 4);
          var s = !C(n) && O.keys(n),
            a = (s || n).length,
            u = e > 0 ? 0 : a - 1;
          return arguments.length < 3 && (i = n[s ? s[u] : u], u += e), t(n, r, i, s, u, a)
        }
      }

      function o(e) {
        return function (t, n, r) {
          n = E(n, r);
          for (var i = x(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
            if (n(t[o], o, t)) return o;
          return -1
        }
      }

      function s(e, t, n) {
        return function (r, i, o) {
          var s = 0,
            a = x(r);
          if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
          else if (n && o && a) return o = n(r, i), r[o] === i ? o : -1;
          if (i !== i) return o = t(p.call(r, s, a), O.isNaN), o >= 0 ? o + s : -1;
          for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
            if (r[o] === i) return o;
          return -1
        }
      }

      function a(e, t) {
        var n = P.length,
          r = e.constructor,
          i = O.isFunction(r) && r.prototype || h,
          o = "constructor";
        for (O.has(e, o) && !O.contains(t, o) && t.push(o); n--;) o = P[n], o in e && e[o] !== i[o] && !O.contains(t, o) && t.push(o)
      }
      var u = this,
        c = u._,
        l = Array.prototype,
        h = Object.prototype,
        f = Function.prototype,
        d = l.push,
        p = l.slice,
        _ = h.toString,
        v = h.hasOwnProperty,
        y = Array.isArray,
        m = Object.keys,
        g = f.bind,
        b = Object.create,
        w = function () { },
        O = function (e) {
          return e instanceof O ? e : this instanceof O ? void (this._wrapped = e) : new O(e)
        };
      "undefined" != typeof e && e.exports && (t = e.exports = O), t._ = O, O.VERSION = "1.8.3";
      var S = function (e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            };
          case 2:
            return function (n, r) {
              return e.call(t, n, r)
            };
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i)
            };
          case 4:
            return function (n, r, i, o) {
              return e.call(t, n, r, i, o)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      },
        E = function (e, t, n) {
          return null == e ? O.identity : O.isFunction(e) ? S(e, t, n) : O.isObject(e) ? O.matcher(e) : O.property(e)
        };
      O.iteratee = function (e, t) {
        return E(e, t, 1 / 0)
      };
      var A = function (e, t) {
        return function (n) {
          var r = arguments.length;
          if (r < 2 || null == n) return n;
          for (var i = 1; i < r; i++)
            for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
              var c = s[u];
              t && void 0 !== n[c] || (n[c] = o[c])
            }
          return n
        }
      },
        T = function (e) {
          if (!O.isObject(e)) return {};
          if (b) return b(e);
          w.prototype = e;
          var t = new w;
          return w.prototype = null, t
        },
        j = function (e) {
          return function (t) {
            return null == t ? void 0 : t[e]
          }
        },
        N = Math.pow(2, 53) - 1,
        x = j("length"),
        C = function (e) {
          var t = x(e);
          return "number" == typeof t && t >= 0 && t <= N
        };
      O.each = O.forEach = function (e, t, n) {
        t = S(t, n);
        var r, i;
        if (C(e))
          for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
        else {
          var o = O.keys(e);
          for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
        }
        return e
      }, O.map = O.collect = function (e, t, n) {
        t = E(t, n);
        for (var r = !C(e) && O.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
          var a = r ? r[s] : s;
          o[s] = t(e[a], a, e)
        }
        return o
      }, O.reduce = O.foldl = O.inject = n(1), O.reduceRight = O.foldr = n(-1), O.find = O.detect = function (e, t, n) {
        var r;
        if (r = C(e) ? O.findIndex(e, t, n) : O.findKey(e, t, n), void 0 !== r && r !== -1) return e[r]
      }, O.filter = O.select = function (e, t, n) {
        var r = [];
        return t = E(t, n), O.each(e, function (e, n, i) {
          t(e, n, i) && r.push(e)
        }), r
      }, O.reject = function (e, t, n) {
        return O.filter(e, O.negate(E(t)), n)
      }, O.every = O.all = function (e, t, n) {
        t = E(t, n);
        for (var r = !C(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;
          if (!t(e[s], s, e)) return !1
        }
        return !0
      }, O.some = O.any = function (e, t, n) {
        t = E(t, n);
        for (var r = !C(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
          var s = r ? r[o] : o;
          if (t(e[s], s, e)) return !0
        }
        return !1
      }, O.contains = O.includes = O.include = function (e, t, n, r) {
        return C(e) || (e = O.values(e)), ("number" != typeof n || r) && (n = 0), O.indexOf(e, t, n) >= 0
      }, O.invoke = function (e, t) {
        var n = p.call(arguments, 2),
          r = O.isFunction(t);
        return O.map(e, function (e) {
          var i = r ? t : e[t];
          return null == i ? i : i.apply(e, n)
        })
      }, O.pluck = function (e, t) {
        return O.map(e, O.property(t))
      }, O.where = function (e, t) {
        return O.filter(e, O.matcher(t))
      }, O.findWhere = function (e, t) {
        return O.find(e, O.matcher(t))
      }, O.max = function (e, t, n) {
        var r, i, o = -(1 / 0),
          s = -(1 / 0);
        if (null == t && null != e) {
          e = C(e) ? e : O.values(e);
          for (var a = 0, u = e.length; a < u; a++) r = e[a], r > o && (o = r)
        } else t = E(t, n), O.each(e, function (e, n, r) {
          i = t(e, n, r), (i > s || i === -(1 / 0) && o === -(1 / 0)) && (o = e, s = i)
        });
        return o
      }, O.min = function (e, t, n) {
        var r, i, o = 1 / 0,
          s = 1 / 0;
        if (null == t && null != e) {
          e = C(e) ? e : O.values(e);
          for (var a = 0, u = e.length; a < u; a++) r = e[a], r < o && (o = r)
        } else t = E(t, n), O.each(e, function (e, n, r) {
          i = t(e, n, r), (i < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i)
        });
        return o
      }, O.shuffle = function (e) {
        for (var t, n = C(e) ? e : O.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) t = O.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
        return i
      }, O.sample = function (e, t, n) {
        return null == t || n ? (C(e) || (e = O.values(e)), e[O.random(e.length - 1)]) : O.shuffle(e).slice(0, Math.max(0, t))
      }, O.sortBy = function (e, t, n) {
        return t = E(t, n), O.pluck(O.map(e, function (e, n, r) {
          return {
            value: e,
            index: n,
            criteria: t(e, n, r)
          }
        }).sort(function (e, t) {
          var n = e.criteria,
            r = t.criteria;
          if (n !== r) {
            if (n > r || void 0 === n) return 1;
            if (n < r || void 0 === r) return -1
          }
          return e.index - t.index
        }), "value")
      };
      var k = function (e) {
        return function (t, n, r) {
          var i = {};
          return n = E(n, r), O.each(t, function (r, o) {
            var s = n(r, o, t);
            e(i, r, s)
          }), i
        }
      };
      O.groupBy = k(function (e, t, n) {
        O.has(e, n) ? e[n].push(t) : e[n] = [t]
      }), O.indexBy = k(function (e, t, n) {
        e[n] = t
      }), O.countBy = k(function (e, t, n) {
        O.has(e, n) ? e[n]++ : e[n] = 1
      }), O.toArray = function (e) {
        return e ? O.isArray(e) ? p.call(e) : C(e) ? O.map(e, O.identity) : O.values(e) : []
      }, O.size = function (e) {
        return null == e ? 0 : C(e) ? e.length : O.keys(e).length
      }, O.partition = function (e, t, n) {
        t = E(t, n);
        var r = [],
          i = [];
        return O.each(e, function (e, n, o) {
          (t(e, n, o) ? r : i).push(e)
        }), [r, i]
      }, O.first = O.head = O.take = function (e, t, n) {
        if (null != e) return null == t || n ? e[0] : O.initial(e, e.length - t)
      }, O.initial = function (e, t, n) {
        return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
      }, O.last = function (e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : O.rest(e, Math.max(0, e.length - t))
      }, O.rest = O.tail = O.drop = function (e, t, n) {
        return p.call(e, null == t || n ? 1 : t)
      }, O.compact = function (e) {
        return O.filter(e, O.identity)
      };
      var U = function (e, t, n, r) {
        for (var i = [], o = 0, s = r || 0, a = x(e); s < a; s++) {
          var u = e[s];
          if (C(u) && (O.isArray(u) || O.isArguments(u))) {
            t || (u = U(u, t, n));
            var c = 0,
              l = u.length;
            for (i.length += l; c < l;) i[o++] = u[c++]
          } else n || (i[o++] = u)
        }
        return i
      };
      O.flatten = function (e, t) {
        return U(e, t, !1)
      }, O.without = function (e) {
        return O.difference(e, p.call(arguments, 1))
      }, O.uniq = O.unique = function (e, t, n, r) {
        O.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = E(n, r));
        for (var i = [], o = [], s = 0, a = x(e); s < a; s++) {
          var u = e[s],
            c = n ? n(u, s, e) : u;
          t ? (s && o === c || i.push(u), o = c) : n ? O.contains(o, c) || (o.push(c), i.push(u)) : O.contains(i, u) || i.push(u)
        }
        return i
      }, O.union = function () {
        return O.uniq(U(arguments, !0, !0))
      }, O.intersection = function (e) {
        for (var t = [], n = arguments.length, r = 0, i = x(e); r < i; r++) {
          var o = e[r];
          if (!O.contains(t, o)) {
            for (var s = 1; s < n && O.contains(arguments[s], o); s++);
            s === n && t.push(o)
          }
        }
        return t
      }, O.difference = function (e) {
        var t = U(arguments, !0, !0, 1);
        return O.filter(e, function (e) {
          return !O.contains(t, e)
        })
      }, O.zip = function () {
        return O.unzip(arguments)
      }, O.unzip = function (e) {
        for (var t = e && O.max(e, x).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = O.pluck(e, r);
        return n
      }, O.object = function (e, t) {
        for (var n = {}, r = 0, i = x(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
      }, O.findIndex = o(1), O.findLastIndex = o(-1), O.sortedIndex = function (e, t, n, r) {
        n = E(n, r, 1);
        for (var i = n(t), o = 0, s = x(e); o < s;) {
          var a = Math.floor((o + s) / 2);
          n(e[a]) < i ? o = a + 1 : s = a
        }
        return o
      }, O.indexOf = s(1, O.findIndex, O.sortedIndex), O.lastIndexOf = s(-1, O.findLastIndex), O.range = function (e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++ , e += n) i[o] = e;
        return i
      };
      var I = function (e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = T(e.prototype),
          s = e.apply(o, i);
        return O.isObject(s) ? s : o
      };
      O.bind = function (e, t) {
        if (g && e.bind === g) return g.apply(e, p.call(arguments, 1));
        if (!O.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = p.call(arguments, 2),
          r = function () {
            return I(e, r, t, this, n.concat(p.call(arguments)))
          };
        return r
      }, O.partial = function (e) {
        var t = p.call(arguments, 1),
          n = function () {
            for (var r = 0, i = t.length, o = Array(i), s = 0; s < i; s++) o[s] = t[s] === O ? arguments[r++] : t[s];
            for (; r < arguments.length;) o.push(arguments[r++]);
            return I(e, n, this, this, o)
          };
        return n
      }, O.bindAll = function (e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) n = arguments[t], e[n] = O.bind(e[n], e);
        return e
      }, O.memoize = function (e, t) {
        var n = function (r) {
          var i = n.cache,
            o = "" + (t ? t.apply(this, arguments) : r);
          return O.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
        };
        return n.cache = {}, n
      }, O.delay = function (e, t) {
        var n = p.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, n)
        }, t)
      }, O.defer = O.partial(O.delay, O, 1), O.throttle = function (e, t, n) {
        var r, i, o, s = null,
          a = 0;
        n || (n = {});
        var u = function () {
          a = n.leading === !1 ? 0 : O.now(), s = null, o = e.apply(r, i), s || (r = i = null)
        };
        return function () {
          var c = O.now();
          a || n.leading !== !1 || (a = c);
          var l = t - (c - a);
          return r = this, i = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), a = c, o = e.apply(r, i), s || (r = i = null)) : s || n.trailing === !1 || (s = setTimeout(u, l)), o
        }
      }, O.debounce = function (e, t, n) {
        var r, i, o, s, a, u = function () {
          var c = O.now() - s;
          c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (a = e.apply(o, i), r || (o = i = null)))
        };
        return function () {
          o = this, i = arguments, s = O.now();
          var c = n && !r;
          return r || (r = setTimeout(u, t)), c && (a = e.apply(o, i), o = i = null), a
        }
      }, O.wrap = function (e, t) {
        return O.partial(t, e)
      }, O.negate = function (e) {
        return function () {
          return !e.apply(this, arguments)
        }
      }, O.compose = function () {
        var e = arguments,
          t = e.length - 1;
        return function () {
          for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
          return r
        }
      }, O.after = function (e, t) {
        return function () {
          if (--e < 1) return t.apply(this, arguments)
        }
      }, O.before = function (e, t) {
        var n;
        return function () {
          return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        }
      }, O.once = O.partial(O.before, 2);
      var R = !{
        toString: null
      }.propertyIsEnumerable("toString"),
        P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
      O.keys = function (e) {
        if (!O.isObject(e)) return [];
        if (m) return m(e);
        var t = [];
        for (var n in e) O.has(e, n) && t.push(n);
        return R && a(e, t), t
      }, O.allKeys = function (e) {
        if (!O.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return R && a(e, t), t
      }, O.values = function (e) {
        for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r
      }, O.mapObject = function (e, t, n) {
        t = E(t, n);
        for (var r, i = O.keys(e), o = i.length, s = {}, a = 0; a < o; a++) r = i[a], s[r] = t(e[r], r, e);
        return s
      }, O.pairs = function (e) {
        for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
        return r
      }, O.invert = function (e) {
        for (var t = {}, n = O.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t
      }, O.functions = O.methods = function (e) {
        var t = [];
        for (var n in e) O.isFunction(e[n]) && t.push(n);
        return t.sort()
      }, O.extend = A(O.allKeys), O.extendOwn = O.assign = A(O.keys), O.findKey = function (e, t, n) {
        t = E(t, n);
        for (var r, i = O.keys(e), o = 0, s = i.length; o < s; o++)
          if (r = i[o], t(e[r], r, e)) return r
      }, O.pick = function (e, t, n) {
        var r, i, o = {},
          s = e;
        if (null == s) return o;
        O.isFunction(t) ? (i = O.allKeys(s), r = S(t, n)) : (i = U(arguments, !1, !1, 1), r = function (e, t, n) {
          return t in n
        }, s = Object(s));
        for (var a = 0, u = i.length; a < u; a++) {
          var c = i[a],
            l = s[c];
          r(l, c, s) && (o[c] = l)
        }
        return o
      }, O.omit = function (e, t, n) {
        if (O.isFunction(t)) t = O.negate(t);
        else {
          var r = O.map(U(arguments, !1, !1, 1), String);
          t = function (e, t) {
            return !O.contains(r, t)
          }
        }
        return O.pick(e, t, n)
      }, O.defaults = A(O.allKeys, !0), O.create = function (e, t) {
        var n = T(e);
        return t && O.extendOwn(n, t), n
      }, O.clone = function (e) {
        return O.isObject(e) ? O.isArray(e) ? e.slice() : O.extend({}, e) : e
      }, O.tap = function (e, t) {
        return t(e), e
      }, O.isMatch = function (e, t) {
        var n = O.keys(t),
          r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
          var s = n[o];
          if (t[s] !== i[s] || !(s in i)) return !1
        }
        return !0
      };
      var D = function (e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e === 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof O && (e = e._wrapped), t instanceof O && (t = t._wrapped);
        var i = _.call(e);
        if (i !== _.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e === +t
        }
        var o = "[object Array]" === i;
        if (!o) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var s = e.constructor,
            a = t.constructor;
          if (s !== a && !(O.isFunction(s) && s instanceof s && O.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--;)
          if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), o) {
          if (u = e.length, u !== t.length) return !1;
          for (; u--;)
            if (!D(e[u], t[u], n, r)) return !1
        } else {
          var c, l = O.keys(e);
          if (u = l.length, O.keys(t).length !== u) return !1;
          for (; u--;)
            if (c = l[u], !O.has(t, c) || !D(e[c], t[c], n, r)) return !1
        }
        return n.pop(), r.pop(), !0
      };
      O.isEqual = function (e, t) {
        return D(e, t)
      }, O.isEmpty = function (e) {
        return null == e || (C(e) && (O.isArray(e) || O.isString(e) || O.isArguments(e)) ? 0 === e.length : 0 === O.keys(e).length)
      }, O.isElement = function (e) {
        return !(!e || 1 !== e.nodeType)
      }, O.isArray = y || function (e) {
        return "[object Array]" === _.call(e)
      }, O.isObject = function (e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
      }, O.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
        O["is" + e] = function (t) {
          return _.call(t) === "[object " + e + "]"
        }
      }), O.isArguments(arguments) || (O.isArguments = function (e) {
        return O.has(e, "callee")
      }), "function" != typeof /./ && "object" != typeof Int8Array && (O.isFunction = function (e) {
        return "function" == typeof e || !1
      }), O.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      }, O.isNaN = function (e) {
        return O.isNumber(e) && e !== +e
      }, O.isBoolean = function (e) {
        return e === !0 || e === !1 || "[object Boolean]" === _.call(e)
      }, O.isNull = function (e) {
        return null === e
      }, O.isUndefined = function (e) {
        return void 0 === e
      }, O.has = function (e, t) {
        return null != e && v.call(e, t)
      }, O.noConflict = function () {
        return u._ = c, this
      }, O.identity = function (e) {
        return e
      }, O.constant = function (e) {
        return function () {
          return e
        }
      }, O.noop = function () { }, O.property = j, O.propertyOf = function (e) {
        return null == e ? function () { } : function (t) {
          return e[t]
        }
      }, O.matcher = O.matches = function (e) {
        return e = O.extendOwn({}, e),
          function (t) {
            return O.isMatch(t, e)
          }
      }, O.times = function (e, t, n) {
        var r = Array(Math.max(0, e));
        t = S(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r
      }, O.random = function (e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
      }, O.now = Date.now || function () {
        return (new Date).getTime()
      };
      var L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
        q = O.invert(L),
        M = function (e) {
          var t = function (t) {
            return e[t]
          },
            n = "(?:" + O.keys(e).join("|") + ")",
            r = RegExp(n),
            i = RegExp(n, "g");
          return function (e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
          }
        };
      O.escape = M(L), O.unescape = M(q), O.result = function (e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), O.isFunction(r) ? r.call(e) : r
      };
      var F = 0;
      O.uniqueId = function (e) {
        var t = ++F + "";
        return e ? e + t : t
      }, O.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var J = /(.)^/,
        B = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        W = /\\|'|\r|\n|\u2028|\u2029/g,
        V = function (e) {
          return "\\" + B[e]
        };
      O.template = function (e, t, n) {
        !t && n && (t = n), t = O.defaults({}, t, O.templateSettings);
        var r = RegExp([(t.escape || J).source, (t.interpolate || J).source, (t.evaluate || J).source].join("|") + "|$", "g"),
          i = 0,
          o = "__p+='";
        e.replace(r, function (t, n, r, s, a) {
          return o += e.slice(i, a).replace(W, V), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
          var s = new Function(t.variable || "obj", "_", o)
        } catch (e) {
          throw e.source = o, e
        }
        var a = function (e) {
          return s.call(this, e, O)
        },
          u = t.variable || "obj";
        return a.source = "function(" + u + "){\n" + o + "}", a
      }, O.chain = function (e) {
        var t = O(e);
        return t._chain = !0, t
      };
      var Q = function (e, t) {
        return e._chain ? O(t).chain() : t
      };
      O.mixin = function (e) {
        O.each(O.functions(e), function (t) {
          var n = O[t] = e[t];
          O.prototype[t] = function () {
            var e = [this._wrapped];
            return d.apply(e, arguments), Q(this, n.apply(O, e))
          }
        })
      }, O.mixin(O), O.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
        var t = l[e];
        O.prototype[e] = function () {
          var n = this._wrapped;
          return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], Q(this, n)
        }
      }), O.each(["concat", "join", "slice"], function (e) {
        var t = l[e];
        O.prototype[e] = function () {
          return Q(this, t.apply(this._wrapped, arguments))
        }
      }), O.prototype.value = function () {
        return this._wrapped
      }, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function () {
        return "" + this._wrapped
      }, r = [], i = function () {
        return O
      }.apply(t, r), !(void 0 !== i && (e.exports = i))
    }).call(this)
  }, function (e, t, n) {
    "use strict";
    var r = (n(0), n(53).Promise);
    r._continueWhile = function (e, t) {
      return e() ? t().then(function () {
        return r._continueWhile(e, t)
      }) : r.resolve()
    }, e.exports = r
  }, function (e, t, n) {
    "use strict";
    var r = n(58),
      i = n(0),
      o = i.extend,
      s = n(1),
      a = n(3),
      u = n(6),
      c = n(4),
      l = c.getSessionToken,
      h = c.ajax,
      f = function (e, t) {
        var n = (new Date).getTime(),
          i = r(n + e);
        return t ? i + "," + n + ",master" : i + "," + n
      },
      d = function (e, t) {
        t ? e["X-LC-Sign"] = f(u.applicationKey) : e["X-LC-Key"] = u.applicationKey
      },
      p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments[1],
          n = {
            "X-LC-Id": u.applicationId,
            "Content-Type": "application/json;charset=UTF-8"
          },
          r = !1;
        return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof u._config.useMasterKey && (r = u._config.useMasterKey), r ? u.masterKey ? t ? n["X-LC-Sign"] = f(u.masterKey, !0) : n["X-LC-Key"] = u.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, t)) : d(n, t), u.hookKey && (n["X-LC-Hook-Key"] = u.hookKey), null !== u._config.production && (n["X-LC-Prod"] = String(u._config.production)), n["X-LC-UA"] = u._config.userAgent, s.resolve().then(function () {
          var t = l(e);
          if (t) n["X-LC-Session"] = t;
          else if (!u._config.disableCurrentUser) return u.User.currentAsync().then(function (e) {
            return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n
          });
          return n
        })
      },
      _ = function (e) {
        var t = e.service,
          n = void 0 === t ? "api" : t,
          r = e.version,
          i = void 0 === r ? "1.1" : r,
          o = e.path,
          s = u._config.serverURLs[n];
        if (!s) throw new Error("undefined server URL for " + n);
        return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s
      },
      v = function (e) {
        return new s(function (t, n) {
          var r = {
            code: e.code || -1,
            error: e.message || e.responseText
          };
          if (e.response && e.response.code) r = e.response;
          else if (e.responseText) try {
            r = JSON.parse(e.responseText)
          } catch (e) { }
          n(new a(r.code, r.error))
        })
      },
      y = function (e) {
        var t = e.service,
          n = e.version,
          r = e.method,
          i = e.path,
          o = e.query,
          s = e.data,
          a = void 0 === s ? {} : s,
          c = e.authOptions,
          l = e.signKey,
          f = void 0 === l || l;
        if (!u.applicationId || !u.applicationKey && !u.masterKey) throw new Error("Not initialized");
        u._appRouter.refresh();
        var d = _({
          service: t,
          path: i,
          version: n
        });
        return p(c, f).then(function (e) {
          return h({
            method: r,
            url: d,
            query: o,
            data: a,
            headers: e
          }).catch(v)
        })
      },
      m = function (e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          s = arguments[5],
          a = arguments[6],
          u = "";
        if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
        if (i && i._where) throw new Error("_where should be in the query");
        return r && "get" === r.toLowerCase() && (a = o({}, a, i), i = null), y({
          method: r,
          path: u,
          query: a,
          data: i,
          authOptions: s
        })
      };
    u.request = y, e.exports = {
      _request: m,
      request: y
    }
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      var n = new Error(t);
      return n.code = e, n
    }
    var i = n(0);
    i.extend(r, {
      OTHER_CAUSE: -1,
      INTERNAL_SERVER_ERROR: 1,
      CONNECTION_FAILED: 100,
      OBJECT_NOT_FOUND: 101,
      INVALID_QUERY: 102,
      INVALID_CLASS_NAME: 103,
      MISSING_OBJECT_ID: 104,
      INVALID_KEY_NAME: 105,
      INVALID_POINTER: 106,
      INVALID_JSON: 107,
      COMMAND_UNAVAILABLE: 108,
      NOT_INITIALIZED: 109,
      INCORRECT_TYPE: 111,
      INVALID_CHANNEL_NAME: 112,
      PUSH_MISCONFIGURED: 115,
      OBJECT_TOO_LARGE: 116,
      OPERATION_FORBIDDEN: 119,
      CACHE_MISS: 120,
      INVALID_NESTED_KEY: 121,
      INVALID_FILE_NAME: 122,
      INVALID_ACL: 123,
      TIMEOUT: 124,
      INVALID_EMAIL_ADDRESS: 125,
      MISSING_CONTENT_TYPE: 126,
      MISSING_CONTENT_LENGTH: 127,
      INVALID_CONTENT_LENGTH: 128,
      FILE_TOO_LARGE: 129,
      FILE_SAVE_ERROR: 130,
      FILE_DELETE_ERROR: 153,
      DUPLICATE_VALUE: 137,
      INVALID_ROLE_NAME: 139,
      EXCEEDED_QUOTA: 140,
      SCRIPT_FAILED: 141,
      VALIDATION_ERROR: 142,
      INVALID_IMAGE_DATA: 150,
      UNSAVED_FILE_ERROR: 151,
      INVALID_PUSH_TIME_ERROR: 152,
      USERNAME_MISSING: 200,
      PASSWORD_MISSING: 201,
      USERNAME_TAKEN: 202,
      EMAIL_TAKEN: 203,
      EMAIL_MISSING: 204,
      EMAIL_NOT_FOUND: 205,
      SESSION_MISSING: 206,
      MUST_CREATE_USER_THROUGH_SIGNUP: 207,
      ACCOUNT_ALREADY_LINKED: 208,
      LINKED_ID_MISSING: 250,
      INVALID_LINKED_SESSION: 251,
      UNSUPPORTED_SERVICE: 252,
      X_DOMAIN_REQUEST: 602
    }), e.exports = r
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$"),
        n = t.exec(e);
      if (!n) return null;
      var r = n[1] || 0,
        i = (n[2] || 1) - 1,
        o = n[3] || 0,
        s = n[4] || 0,
        a = n[5] || 0,
        u = n[6] || 0,
        c = n[8] || 0;
      return new Date(Date.UTC(r, i, o, s, a, u, c))
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
      o = n(0),
      s = n(7),
      a = n(5)("leancloud:request"),
      u = 0,
      c = function (e) {
        var t = e.method,
          n = e.url,
          r = e.query,
          o = e.data,
          c = e.headers,
          l = void 0 === c ? {} : c,
          h = e.onprogress,
          f = u++;
        a("request(" + f + ")", t, n, r, o, l);
        var d = {};
        if (r)
          for (var p in r) "object" === i(r[p]) ? d[p] = JSON.stringify(r[p]) : d[p] = r[p];
        return new Promise(function (e, r) {
          var i = s(t, n).set(l).query(d).send(o);
          h && i.on("progress", h), i.end(function (t, n) {
            return n && a("response(" + f + ")", n.status, n.body || n.text, n.header), t ? (n && (t.statusCode = n.status, t.responseText = n.text, t.response = n.body), r(t)) : e(n.body)
          })
        })
      },
      l = function (e) {
        return o.isNull(e) || o.isUndefined(e)
      },
      h = function (e) {
        return o.isArray(e) ? e : void 0 === e || null === e ? [] : [e]
      },
      f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.keys,
          n = e.include,
          r = e.includeACL,
          i = {};
        return t && (i.keys = h(t).join(",")), n && (i.include = h(n).join(",")), r && (i.returnACL = r), i
      },
      d = function (e) {
        return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0
      },
      p = function (e) {
        return function (t) {
          return e(t), t
        }
      },
      _ = function () { },
      v = function (e, t, n) {
        var r;
        return r = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
          e.apply(this, arguments)
        }, o.extend(r, e), _.prototype = e.prototype, r.prototype = new _, t && o.extend(r.prototype, t), n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
      };
    e.exports = {
      ajax: c,
      isNullOrUndefined: l,
      ensureArray: h,
      transformFetchOptions: f,
      getSessionToken: d,
      tap: p,
      inherits: v,
      parseDate: r
    }
  }, function (e, t, n) {
    function r() {
      return !("undefined" == typeof window || !window || "undefined" == typeof window.process || "renderer" !== window.process.type) || ("undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
    }

    function i(e) {
      var n = this.useColors;
      if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
        var r = "color: " + this.color;
        e.splice(1, 0, r, "color: inherit");
        var i = 0,
          o = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && (i++ , "%c" === e && (o = i))
        }), e.splice(o, 0, r)
      }
    }

    function o() {
      return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(e) {
      try {
        null == e ? t.storage.removeItem("debug") : t.storage.debug = e
      } catch (e) { }
    }

    function a() {
      var e;
      try {
        e = t.storage.debug
      } catch (e) { }
      return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
    }

    function u() {
      try {
        return window.localStorage
      } catch (e) { }
    }
    t = e.exports = n(52), t.log = o, t.formatArgs = i, t.save = s, t.load = a, t.useColors = r, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : u(), t.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], t.formatters.j = function (e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message
      }
    }, t.enable(a())
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        i = n(43),
        o = n(4),
        s = o.inherits,
        a = o.parseDate,
        u = t.AV || {};
      u._config = {
        userAgent: i,
        serverURLs: {},
        useMasterKey: !1,
        production: null
      }, u._getAVPath = function (e) {
        if (!u.applicationId) throw new Error("You need to call AV.initialize before using AV.");
        if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
        return "/" === e[0] && (e = e.substring(1)), "AV/" + u.applicationId + "/" + e
      }, u._installationId = null, u._getInstallationId = function () {
        if (u._installationId) return u.Promise.resolve(u._installationId);
        var e = u._getAVPath("installationId");
        return u.localStorage.getItemAsync(e).then(function (t) {
          if (u._installationId = t, u._installationId) return t;
          var n = function () {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
          };
          return u._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), u.localStorage.setItemAsync(e, u._installationId)
        })
      }, u._parseDate = a, u._extend = function (e, t) {
        var n = s(this, e, t);
        return n.extend = this.extend, n
      }, u._encode = function (e, t, n) {
        var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (e instanceof u.Object) {
          if (n) throw new Error("AV.Objects not allowed here");
          return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer()
        }
        if (e instanceof u.ACL) return e.toJSON();
        if (r.isDate(e)) return i ? {
          __type: "Date",
          iso: e.toJSON()
        } : e.toJSON();
        if (e instanceof u.GeoPoint) return e.toJSON();
        if (r.isArray(e)) return r.map(e, function (e) {
          return u._encode(e, t, n, i)
        });
        if (r.isRegExp(e)) return e.source;
        if (e instanceof u.Relation) return e.toJSON();
        if (e instanceof u.Op) return e.toJSON();
        if (e instanceof u.File) {
          if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
          return e._toFullJSON(t, i)
        }
        return r.isObject(e) ? r.mapObject(e, function (e, r) {
          return u._encode(e, t, n, i)
        }) : e
      }, u._decode = function (e, t) {
        if (!r.isObject(e) || r.isDate(e)) return e;
        if (r.isArray(e)) return r.map(e, function (e) {
          return u._decode(e)
        });
        if (e instanceof u.Object) return e;
        if (e instanceof u.File) return e;
        if (e instanceof u.Op) return e;
        if (e instanceof u.GeoPoint) return e;
        if (e instanceof u.ACL) return e;
        if ("ACL" === t) return new u.ACL(e);
        if (e.__op) return u.Op._decode(e);
        var n;
        if ("Pointer" === e.__type) {
          n = e.className;
          var i = u.Object._create(n);
          if (Object.keys(e).length > 3) {
            var o = r.clone(e);
            delete o.__type, delete o.className, i._finishFetch(o, !0)
          } else i._finishFetch({
            objectId: e.objectId
          }, !1);
          return i
        }
        if ("Object" === e.__type) {
          n = e.className;
          var s = r.clone(e);
          delete s.__type, delete s.className;
          var a = u.Object._create(n);
          return a._finishFetch(s, !0), a
        }
        if ("Date" === e.__type) return u._parseDate(e.iso);
        if ("GeoPoint" === e.__type) return new u.GeoPoint({
          latitude: e.latitude,
          longitude: e.longitude
        });
        if ("Relation" === e.__type) {
          if (!t) throw new Error("key missing decoding a Relation");
          var c = new u.Relation(null, t);
          return c.targetClassName = e.className, c
        }
        if ("File" === e.__type) {
          var l = new u.File(e.name),
            h = r.clone(e);
          return delete h.__type, l._finishFetch(h), l
        }
        return r.mapObject(e, u._decode)
      }, u.parseJSON = u._decode, u._encodeObjectOrArray = function (e) {
        var t = function (e) {
          return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function (e) {
            return u._encode(e, [])
          })
        };
        return r.isArray(e) ? e.map(function (e) {
          return t(e)
        }) : t(e)
      }, u._arrayEach = r.each, u._traverse = function (e, t, n) {
        if (e instanceof u.Object) {
          if (n = n || [], r.indexOf(n, e) >= 0) return;
          return n.push(e), u._traverse(e.attributes, t, n), t(e)
        }
        return e instanceof u.Relation || e instanceof u.File ? t(e) : r.isArray(e) ? (r.each(e, function (r, i) {
          var o = u._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : r.isObject(e) ? (u._each(e, function (r, i) {
          var o = u._traverse(r, t, n);
          o && (e[i] = o)
        }), t(e)) : t(e)
      }, u._objectEach = u._each = function (e, t) {
        r.isObject(e) ? r.each(r.keys(e), function (n) {
          t(e[n], n)
        }) : r.each(e, t)
      }, e.exports = u
    }).call(t, n(8))
  }, function (e, t, n) {
    function r() { }

    function i(e) {
      if (!_(e)) return e;
      var t = [];
      for (var n in e) o(t, n, e[n]);
      return t.join("&")
    }

    function o(e, t, n) {
      if (null != n)
        if (Array.isArray(n)) n.forEach(function (n) {
          o(e, t, n)
        });
        else if (_(n))
          for (var r in n) o(e, t + "[" + r + "]", n[r]);
        else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n));
      else null === n && e.push(encodeURIComponent(t))
    }

    function s(e) {
      for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) t = i[o], n = t.indexOf("="), n == -1 ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      return r
    }

    function a(e) {
      var t, n, r, i, o = e.split(/\r?\n/),
        s = {};
      o.pop();
      for (var a = 0, u = o.length; a < u; ++a) n = o[a], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), i = b(n.slice(t + 1)), s[r] = i;
      return s
    }

    function u(e) {
      return /[\/+]json\b/.test(e)
    }

    function c(e) {
      this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
      var t = this.xhr.status;
      1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = a(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function l(e, t) {
      var n = this;
      this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function () {
        var e = null,
          t = null;
        try {
          t = new c(n)
        } catch (t) {
          return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), n.callback(e)
        }
        n.emit("response", t);
        var r;
        try {
          n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"), r.original = e, r.response = t, r.status = t.status)
        } catch (e) {
          r = e
        }
        r ? n.callback(r, t) : n.callback(null, t)
      })
    }

    function h(e, t, n) {
      var r = g("DELETE", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
    var f;
    "undefined" != typeof window ? f = window : "undefined" != typeof self ? f = self : (console.warn("Using browser-only version of superagent in non-browser environment"), f = this);
    var d = n(50),
      p = n(61),
      _ = n(11),
      v = n(60),
      y = n(62),
      m = n(63),
      g = t = e.exports = function (e, n) {
        return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
      };
    t.Request = l, g.getXHR = function () {
      if (!(!f.XMLHttpRequest || f.location && "file:" == f.location.protocol && f.ActiveXObject)) return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) { }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (e) { }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (e) { }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) { }
      throw Error("Browser-only verison of superagent could not find XHR")
    };
    var b = "".trim ? function (e) {
      return e.trim()
    } : function (e) {
      return e.replace(/(^\s*|\s*$)/g, "")
    };
    g.serializeObject = i, g.parseString = s, g.types = {
      html: "text/html",
      json: "application/json",
      xml: "application/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, g.serialize = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.stringify
    }, g.parse = {
      "application/x-www-form-urlencoded": s,
      "application/json": JSON.parse
    }, y(c.prototype), c.prototype._parseBody = function (e) {
      var t = g.parse[this.type];
      return this.req._parser ? this.req._parser(this, e) : (!t && u(this.type) && (t = g.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null)
    }, c.prototype.toError = function () {
      var e = this.req,
        t = e.method,
        n = e.url,
        r = "cannot " + t + " " + n + " (" + this.status + ")",
        i = new Error(r);
      return i.status = this.status, i.method = t, i.url = n, i
    }, g.Response = c, d(l.prototype), p(l.prototype),
      l.prototype.type = function (e) {
        return this.set("Content-Type", g.types[e] || e), this
      }, l.prototype.accept = function (e) {
        return this.set("Accept", g.types[e] || e), this
      }, l.prototype.auth = function (e, t, n) {
        switch ("object" == typeof t && null !== t && (n = t), n || (n = {
          type: "function" == typeof btoa ? "basic" : "auto"
        }), n.type) {
          case "basic":
            this.set("Authorization", "Basic " + btoa(e + ":" + t));
            break;
          case "auto":
            this.username = e, this.password = t;
            break;
          case "bearer":
            this.set("Authorization", "Bearer " + e)
        }
        return this
      }, l.prototype.query = function (e) {
        return "string" != typeof e && (e = i(e)), e && this._query.push(e), this
      }, l.prototype.attach = function (e, t, n) {
        if (t) {
          if (this._data) throw Error("superagent can't mix .send() and .attach()");
          this._getFormData().append(e, t, n || t.name)
        }
        return this
      }, l.prototype._getFormData = function () {
        return this._formData || (this._formData = new f.FormData), this._formData
      }, l.prototype.callback = function (e, t) {
        if (this._maxRetries && this._retries++ < this._maxRetries && m(e, t)) return this._retry();
        var n = this._callback;
        this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
      }, l.prototype.crossDomainError = function () {
        var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
      }, l.prototype.buffer = l.prototype.ca = l.prototype.agent = function () {
        return console.warn("This is not supported in browser version of superagent"), this
      }, l.prototype.pipe = l.prototype.write = function () {
        throw Error("Streaming is not supported in browser version of superagent")
      }, l.prototype._appendQueryString = function () {
        var e = this._query.join("&");
        if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._sort) {
          var t = this.url.indexOf("?");
          if (t >= 0) {
            var n = this.url.substring(t + 1).split("&");
            v(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&")
          }
        }
      }, l.prototype._isHost = function (e) {
        return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
      }, l.prototype.end = function (e) {
        return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || r, this._appendQueryString(), this._end()
      }, l.prototype._end = function () {
        var e = this,
          t = this.xhr = g.getXHR(),
          n = this._formData || this._data;
        this._setTimeouts(), t.onreadystatechange = function () {
          var n = t.readyState;
          if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 == n) {
            var r;
            try {
              r = t.status
            } catch (e) {
              r = 0
            }
            if (!r) {
              if (e.timedout || e._aborted) return;
              return e.crossDomainError()
            }
            e.emit("end")
          }
        };
        var r = function (t, n) {
          n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n)
        };
        if (this.hasListeners("progress")) try {
          t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"))
        } catch (e) { }
        try {
          this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
        } catch (e) {
          return this.callback(e)
        }
        if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
          var i = this._header["content-type"],
            o = this._serializer || g.serialize[i ? i.split(";")[0] : ""];
          !o && u(i) && (o = g.serialize["application/json"]), o && (n = o(n))
        }
        for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
        return this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send("undefined" != typeof n ? n : null), this
      }, g.get = function (e, t, n) {
        var r = g("GET", e);
        return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
      }, g.head = function (e, t, n) {
        var r = g("HEAD", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
      }, g.options = function (e, t, n) {
        var r = g("OPTIONS", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
      }, g.del = h, g.delete = h, g.patch = function (e, t, n) {
        var r = g("PATCH", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
      }, g.post = function (e, t, n) {
        var r = g("POST", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
      }, g.put = function (e, t, n) {
        var r = g("PUT", e);
        return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
      }
  }, function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
      o = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      }(),
      s = function () {
        function e() {
          r(this, e), this._entries = []
        }
        return o(e, [{
          key: "append",
          value: function (e, t) {
            if ("string" != typeof e) throw new TypeError("FormData name must be a string");
            if ("string" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : i(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
            this._entries.push([e, t])
          }
        }, {
          key: "set",
          value: function (e, t) {
            var n = this.get(e);
            n ? n[1] = t : this.append(e, t)
          }
        }, {
          key: "delete",
          value: function (e) {
            this._entries = this._entries.filter(function (t) {
              return t[0] !== e
            })
          }
        }, {
          key: "entries",
          value: function () {
            return this._entries
          }
        }, {
          key: "get",
          value: function (e) {
            return this._entries.find(function (t) {
              return t[0] === e
            })
          }
        }, {
          key: "getAll",
          value: function (e) {
            return this._entries.filter(function (t) {
              return t[0] === e
            })
          }
        }, {
          key: "has",
          value: function (e) {
            return this._entries.some(function (t) {
              return t[0] === e
            })
          }
        }, {
          key: "keys",
          value: function () {
            return this._entries.map(function (e) {
              return e[0]
            })
          }
        }, {
          key: "values",
          value: function () {
            return this._entries.map(function (e) {
              return e[1]
            })
          }
        }]), e
      }();
    e.exports = s
  }, function (e, t, n) {
    "use strict";
    var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function (e) {
      return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]"
    };
    t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function (e, t) {
      return {
        listener: e,
        kind: t,
        next: null
      }
    }
  }, function (e, t) {
    function n(e) {
      return null !== e && "object" == typeof e
    }
    e.exports = n
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
      o = function () {
        function e() {
          r(this, e)
        }
        return i(e, [{
          key: "getItem",
          value: function (e) {
            return wx.getStorageSync(e)
          }
        }, {
          key: "setItem",
          value: function (e, t) {
            return wx.setStorageSync(e, t)
          }
        }, {
          key: "removeItem",
          value: function (e) {
            return this.setItem(e, "")
          }
        }, {
          key: "clear",
          value: function () {
            return wx.clearStorageSync()
          }
        }]), e
      }();
    e.exports = new o
  }, function (e, t, n) {
    "use strict";
    e.exports = {}
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function s(e) {
      "" !== e.message && _ && (_._readyState = d, _.dispatchEvent({
        type: "error",
        message: e.errMsg
      }))
    }
    var a = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
      u = n(21),
      c = n(20),
      l = 0,
      h = 1,
      f = 2,
      d = 3,
      p = ["open", "error", "message", "close"],
      _ = void 0,
      v = function (e) {
        function t(e, n) {
          if (r(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
          if (n) throw new Error("subprotocal not supported in weapp");
          var o = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return o._url = e, o._protocal = "", o._readyState = l, _ && _.dispatchEvent({
            type: "close"
          }), _ = o, wx.onSocketOpen(function (e) {
            _ && (_._readyState = h, _.dispatchEvent({
              type: "open"
            }))
          }), wx.onSocketError(s), wx.onSocketMessage(function (e) {
            if (_) {
              var t = e.data,
                n = e.origin,
                r = e.ports,
                i = e.source;
              _.dispatchEvent({
                data: t,
                origin: n,
                ports: r,
                source: i,
                type: "message"
              })
            }
          }), wx.onSocketClose(function (e) {
            if (_) {
              _._readyState = d;
              var t = e.code,
                n = e.reason,
                r = e.wasClean;
              _.dispatchEvent({
                code: t,
                reason: n,
                wasClean: r,
                type: "close"
              }), _ = null
            }
          }), wx.connectSocket({
            url: e,
            fail: function (e) {
              return setTimeout(function () {
                return s(e)
              }, 0)
            }
          }), o
        }
        return o(t, e), a(t, [{
          key: "close",
          value: function () {
            this.readyState === l && console.warn("close WebSocket which is connecting might not work"), wx.closeSocket()
          }
        }, {
          key: "send",
          value: function (e) {
            if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");
            if ("string" != typeof e) throw new TypeError("only string typed data are supported");
            wx.sendSocketMessage({
              data: e
            })
          }
        }, {
          key: "url",
          get: function () {
            return this._url
          }
        }, {
          key: "protocal",
          get: function () {
            return this._protocal
          }
        }, {
          key: "readyState",
          get: function () {
            return this._readyState
          }
        }]), t
      }(c(p));
    u(v, {
      CONNECTING: l,
      OPEN: h,
      CLOSING: f,
      CLOSED: d
    }), e.exports = v
  }, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function s(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function a(e) {
      this.status = e.statusCode, this.statusText = e.statusCode;
      var t = e.data;
      "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, this.readyState = v, this.dispatchEvent({
        type: "readystatechange"
      })
    }
    var u = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }(),
      c = n(21),
      l = n(20),
      h = n(9),
      f = 0,
      d = 1,
      p = 2,
      _ = 3,
      v = 4,
      y = ["abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange"],
      m = function (e) {
        function t() {
          i(this, t);
          var e = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return e.readyState = f, e._headers = {}, e
        }
        return s(t, e), u(t, [{
          key: "abort",
          value: function () {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "getAllResponseHeaders",
          value: function () {
            return console.warn("getAllResponseHeaders always returns ''"), ""
          }
        }, {
          key: "getResponseHeader",
          value: function (e) {
            return "content-type" === e ? (console.warn("get content-type always returns 'application/json'"), "application/json") : (console.warn("getResponseHeader always returns ''"), "")
          }
        }, {
          key: "overrideMimeType",
          value: function () {
            throw new Error("not supported in weapp")
          }
        }, {
          key: "open",
          value: function (e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            if (this.readyState !== f) throw new Error("request is already opened");
            if (!n) throw new Error("sync request is not supported");
            this._method = e, this._url = t, this.readyState = d, this.dispatchEvent({
              type: "readystatechange"
            })
          }
        }, {
          key: "setRequestHeader",
          value: function (e, t) {
            if (this.readyState !== d) throw new Error("request is not opened");
            this._headers[e.toLowerCase()] = t
          }
        }, {
          key: "send",
          value: function (e) {
            var t = this;
            if (this.readyState !== d) throw new Error("request is not opened");
            if (e instanceof h) {
              var n = e.entries(),
                i = n.filter(function (e) {
                  return "string" != typeof e[1]
                });
              if (0 === i.length) throw new Error("Must specify a Blob field in FormData");
              i.length > 1 && console.warn("Only the first Blob will be send in Weapp");
              var o = n.filter(function (e) {
                return "string" == typeof e[1]
              }).reduce(function (e, t) {
                return c(e, r({}, t[0], t[1]))
              }, {});
              wx.uploadFile({
                url: this._url,
                name: i[0][0],
                filePath: i[0][1].uri,
                formData: o,
                header: this._headers,
                success: a.bind(this),
                fail: function (e) {
                  t.status = 0, t.readyState = v, t.dispatchEvent({
                    type: "readystatechange"
                  }), t.dispatchEvent({
                    type: "error"
                  })
                }
              })
            } else wx.request({
              url: this._url,
              data: e || "",
              method: this._method.toUpperCase(),
              header: this._headers,
              success: a.bind(this),
              fail: function (e) {
                t.status = 0, t.readyState = v, t.dispatchEvent({
                  type: "readystatechange"
                }), t.dispatchEvent({
                  type: "error"
                })
              }
            })
          }
        }]), t
      }(l(y));
    c(m, {
      UNSENT: f,
      OPENED: d,
      HEADERS_RECEIVED: p,
      LOADING: _,
      DONE: v
    }), e.exports = m
  }, function (e, t, n) {
    "use strict";
    var r = n(17),
      i = n(6),
      o = t.removeAsync = r.removeItemAsync.bind(r),
      s = function (e, t) {
        try {
          e = JSON.parse(e)
        } catch (e) {
          return null
        }
        if (e) {
          var n = e.expiredAt && e.expiredAt < Date.now();
          return n ? o(t).then(function () {
            return null
          }) : e.value
        }
        return null
      };
    t.getAsync = function (e) {
      return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function (t) {
        return s(t, e)
      })
    }, t.setAsync = function (e, t, n) {
      var o = {
        value: t
      };
      return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o))
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(1),
      o = n(48),
      s = ["getItem", "setItem", "removeItem", "clear"];
    o.async ? r(s).each(function (e) {
      "function" != typeof o[e] && (o[e] = function () {
        var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
        throw t.code = "SYNC_API_NOT_AVAILABLE", t
      })
    }) : r(s).each(function (e) {
      "function" == typeof o[e] && (o[e + "Async"] = function () {
        return i.resolve(o[e].apply(o, arguments))
      })
    }), e.exports = o
  }, function (e, t, n) {
    "use strict";
    e.exports = "3.0.0-beta.2"
  }, function (e, t) {
    var n = {
      utf8: {
        stringToBytes: function (e) {
          return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function (e) {
          return decodeURIComponent(escape(n.bin.bytesToString(e)))
        }
      },
      bin: {
        stringToBytes: function (e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
          return t
        },
        bytesToString: function (e) {
          for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
          return t.join("")
        }
      }
    };
    e.exports = n
  }, function (e, t, n) {
    "use strict";
    var r = n(10),
      i = n(54),
      o = n(55),
      s = r.LISTENERS,
      a = r.CAPTURE,
      u = r.BUBBLE,
      c = r.ATTRIBUTE,
      l = r.newNode,
      h = i.defineCustomEventTarget,
      f = o.createEventWrapper,
      d = o.STOP_IMMEDIATE_PROPAGATION_FLAG,
      p = "undefined" != typeof window && "undefined" != typeof window.EventTarget,
      _ = e.exports = function e() {
        if (!(this instanceof e)) {
          if (1 === arguments.length && Array.isArray(arguments[0])) return h(e, arguments[0]);
          if (arguments.length > 0) {
            for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
            return h(e, t)
          }
          throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(this, s, {
          value: Object.create(null)
        })
      };
    _.prototype = Object.create((p ? window.EventTarget : Object).prototype, {
      constructor: {
        value: _,
        writable: !0,
        configurable: !0
      },
      addEventListener: {
        value: function (e, t, n) {
          if (null == t) return !1;
          if ("function" != typeof t && "object" != typeof t) throw new TypeError('"listener" is not an object.');
          var r = n ? a : u,
            i = this[s][e];
          if (null == i) return this[s][e] = l(t, r), !0;
          for (var o = null; null != i;) {
            if (i.listener === t && i.kind === r) return !1;
            o = i, i = i.next
          }
          return o.next = l(t, r), !0
        },
        configurable: !0,
        writable: !0
      },
      removeEventListener: {
        value: function (e, t, n) {
          if (null == t) return !1;
          for (var r = n ? a : u, i = null, o = this[s][e]; null != o;) {
            if (o.listener === t && o.kind === r) return null == i ? this[s][e] = o.next : i.next = o.next, !0;
            i = o, o = o.next
          }
          return !1
        },
        configurable: !0,
        writable: !0
      },
      dispatchEvent: {
        value: function (e) {
          var t = this[s][e.type];
          if (null == t) return !0;
          for (var n = f(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== c && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), !n[d]);) t = t.next;
          return !n.defaultPrevented
        },
        configurable: !0,
        writable: !0
      }
    })
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e)
    }

    function i() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
        var r = Object.getOwnPropertyNames(t).map(function (e) {
          return t[e]
        });
        if ("0123456789" !== r.join("")) return !1;
        var i = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          i[e] = e
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
      } catch (e) {
        return !1
      }
    }
    var o = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable;
    e.exports = i() ? Object.assign : function (e, t) {
      for (var n, i, u = r(e), c = 1; c < arguments.length; c++) {
        n = Object(arguments[c]);
        for (var l in n) s.call(n, l) && (u[l] = n[l]);
        if (o) {
          i = o(n);
          for (var h = 0; h < i.length; h++) a.call(n, i[h]) && (u[i[h]] = n[i[h]])
        }
      }
      return u
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(24).polyfill;
    window = window || {}, r(), r(window);
    try {
      localStorage = localStorage || n(12)
    } catch (e) { }
    try {
      XMLHttpRequest = XMLHttpRequest || n(15)
    } catch (e) { }
    try {
      FormData = FormData || n(9)
    } catch (e) { }
    try {
      WebSocket = WebSocket || n(14)
    } catch (e) { }
    try {
      navigator = navigator || n(13)
    } catch (e) { }
  }, function (e, t, n) {
    "use strict";
    var r = n(6);
    r._ = n(0), r.version = n(18), r.Promise = n(1), r.localStorage = n(17), r.Cache = n(16), r.Error = n(3), n(32), n(28)(r), n(30)(r), n(25)(r), n(35)(r), n(38)(r), n(29)(r), n(34)(r), n(39)(r), n(47)(r), n(37)(r), n(27)(r), n(36)(r), n(41)(r), n(40)(r), n(33)(r), e.exports = r
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
        i = n(12),
        o = n(15),
        s = n(9),
        a = n(14),
        u = n(13);
      e.exports = {
        polyfill: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || window;
          if ("object" !== ("undefined" == typeof e ? "undefined" : r(e))) throw new Error("polyfill target is not an Object");
          var n = {
            localStorage: i,
            XMLHttpRequest: o,
            FormData: s,
            WebSocket: a,
            Object: Object,
            navigator: u
          };
          for (var c in n) e[c] || (e[c] = n[c])
        },
        localStorage: i,
        XMLHttpRequest: o,
        FormData: s,
        WebSocket: a
      }
    }).call(t, n(8))
  }, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e) {
      var t = "*";
      e.ACL = function (t) {
        var n = this;
        if (n.permissionsById = {}, r.isObject(t))
          if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
          else {
            if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
            e._objectEach(t, function (t, i) {
              if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
              n.permissionsById[i] = {}, e._objectEach(t, function (e, t) {
                if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                n.permissionsById[i][t] = e
              })
            })
          }
      }, e.ACL.prototype.toJSON = function () {
        return r.clone(this.permissionsById)
      }, e.ACL.prototype._setAccess = function (t, n, i) {
        if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
        if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
        var o = this.permissionsById[n];
        if (!o) {
          if (!i) return;
          o = {}, this.permissionsById[n] = o
        }
        i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n])
      }, e.ACL.prototype._getAccess = function (t, n) {
        n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
        var r = this.permissionsById[n];
        return !!r && !!r[t]
      }, e.ACL.prototype.setReadAccess = function (e, t) {
        this._setAccess("read", e, t)
      }, e.ACL.prototype.getReadAccess = function (e) {
        return this._getAccess("read", e)
      }, e.ACL.prototype.setWriteAccess = function (e, t) {
        this._setAccess("write", e, t)
      }, e.ACL.prototype.getWriteAccess = function (e) {
        return this._getAccess("write", e)
      }, e.ACL.prototype.setPublicReadAccess = function (e) {
        this.setReadAccess(t, e)
      }, e.ACL.prototype.getPublicReadAccess = function () {
        return this.getReadAccess(t)
      }, e.ACL.prototype.setPublicWriteAccess = function (e) {
        this.setWriteAccess(t, e)
      }, e.ACL.prototype.getPublicWriteAccess = function () {
        return this.getWriteAccess(t)
      }, e.ACL.prototype.getRoleReadAccess = function (t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.getRoleWriteAccess = function (t) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleReadAccess = function (t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setReadAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }, e.ACL.prototype.setRoleWriteAccess = function (t, n) {
        if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return void this.setWriteAccess("role:" + t, n);
        throw new Error("role must be a AV.Role or a String")
      }
    }
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      var t = this;
      this.AV = e, this.lockedUntil = 0, s.getAsync("serverURLs").then(function (e) {
        if (!e) return t.lock(0);
        var n = e.serverURLs,
          r = e.lockedUntil;
        t.AV._setServerURLs(n, !1), t.lockedUntil = r
      }).catch(function () {
        return t.lock(0)
      })
    }
    var i = n(4),
      o = i.ajax,
      s = n(16);
    r.prototype.disable = function () {
      this.disabled = !0
    }, r.prototype.lock = function (e) {
      this.lockedUntil = Date.now() + e
    }, r.prototype.refresh = function () {
      var e = this;
      if (!(this.disabled || Date.now() < this.lockedUntil)) {
        this.lock(10);
        var t = "https://app-router.leancloud.cn/2/route";
        return o({
          method: "get",
          url: t,
          query: {
            appId: this.AV.applicationId
          }
        }).then(function (t) {
          if (!e.disabled) {
            var n = t.ttl;
            if (!n) throw new Error("missing ttl");
            n *= 1e3;
            var r = "https://",
              i = {
                push: r + t.push_server,
                stats: r + t.stats_server,
                engine: r + t.engine_server,
                api: r + t.api_server
              };
            return e.AV._setServerURLs(i, !1), e.lock(n), s.setAsync("serverURLs", {
              serverURLs: i,
              lockedUntil: e.lockedUntil
            }, n)
          }
        }).catch(function (t) {
          console.warn("refresh server URLs failed: " + t.message), e.lock(600)
        })
      }
    }, e.exports = r
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2),
      o = i._request,
      s = i.request;
    e.exports = function (e) {
      e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
        run: function (t, n, r) {
          return s({
            service: "engine",
            method: "POST",
            path: "/functions/" + t,
            data: e._encode(n, null, !0),
            authOptions: r
          }).then(function (t) {
            return e._decode(t).result
          })
        },
        rpc: function (t, n, i) {
          return r.isArray(n) ? Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
            service: "engine",
            method: "POST",
            path: "/call/" + t,
            data: e._encodeObjectOrArray(n),
            authOptions: i
          }).then(function (t) {
            return e._decode(t).result
          })
        },
        getServerDate: function () {
          return o("date", null, null, "GET").then(function (t) {
            return e._decode(t)
          })
        },
        requestSmsCode: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (r.isString(e) && (e = {
            mobilePhoneNumber: e
          }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
          return t.validateToken && (e = r.extend({}, e, {
            validate_token: t.validateToken
          })), o("requestSmsCode", null, null, "POST", e, t)
        },
        verifySmsCode: function (e, t) {
          if (!e) throw new Error("Missing sms code.");
          var n = {};
          return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n)
        },
        requestCaptcha: function (e) {
          return o("requestCaptcha", null, null, "GET", e).then(function (e) {
            var t = e.captcha_url,
              n = e.captcha_token;
            return {
              captchaToken: n,
              url: t
            }
          })
        },
        verifyCaptcha: function (e, t) {
          return o("verifyCaptcha", null, null, "POST", {
            captcha_code: e,
            captcha_token: t
          }).then(function (e) {
            var t = e.validate_token;
            return t
          })
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e) {
      var t = /\s+/,
        n = Array.prototype.slice;
      e.Events = {
        on: function (e, n, r) {
          var i, o, s, a, u;
          if (!n) return this;
          for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o;) u = i[o], s = u ? u.tail : {}, s.next = a = {}, s.context = r, s.callback = n, i[o] = {
            tail: a,
            next: u ? u.next : s
          }, o = e.shift();
          return this
        },
        off: function (e, n, i) {
          var o, s, a, u, c, l;
          if (s = this._callbacks) {
            if (!(e || n || i)) return delete this._callbacks, this;
            for (e = e ? e.split(t) : r.keys(s), o = e.shift(); o;)
              if (a = s[o], delete s[o], a && (n || i)) {
                for (u = a.tail, a = a.next; a !== u;) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), a = a.next;
                o = e.shift()
              } return this
          }
        },
        trigger: function (e) {
          var r, i, o, s, a, u, c;
          if (!(o = this._callbacks)) return this;
          for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
            if (i = o[r])
              for (s = i.tail;
                (i = i.next) !== s;) i.callback.apply(i.context || this, c);
            if (i = u)
              for (s = i.tail, a = [r].concat(c);
                (i = i.next) !== s;) i.callback.apply(i.context || this, a);
            r = e.shift()
          }
          return this
        }
      }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(44),
      o = n(45),
      s = n(46),
      a = n(3),
      u = n(2)._request,
      c = n(1),
      l = n(4),
      h = l.tap,
      f = l.transformFetchOptions,
      d = n(5)("leancloud:file"),
      p = n(49);
    e.exports = function (e) {
      var t = (e._config, function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
      }),
        n = function (e) {
          return e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4]
        },
        l = function (e) {
          if (e < 26) return String.fromCharCode(65 + e);
          if (e < 52) return String.fromCharCode(97 + (e - 26));
          if (e < 62) return String.fromCharCode(48 + (e - 52));
          if (62 === e) return "+";
          if (63 === e) return "/";
          throw new Error("Tried to encode large digit " + e + " in base64.")
        },
        _ = function (e) {
          var t = [];
          return t.length = Math.ceil(e.length / 3), r.times(t.length, function (n) {
            var r = e[3 * n],
              i = e[3 * n + 1] || 0,
              o = e[3 * n + 2] || 0,
              s = 3 * n + 1 < e.length,
              a = 3 * n + 2 < e.length;
            t[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "="].join("")
          }), t.join("")
        };
      e.File = function (t, n, i) {
        if (this.attributes = {
          name: t,
          url: "",
          metaData: {},
          base64: ""
        }, r.isString(n)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
        r.isArray(n) && (this.attributes.metaData.size = n.length, n = {
          base64: _(n)
        }), this._extName = "", this._data = n;
        var o = void 0;
        if (n && n.owner) o = n.owner;
        else if (!e._config.disableCurrentUser) try {
          o = e.User.current()
        } catch (e) {
          if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
          console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().")
        }
        this.attributes.metaData.owner = o ? o.id : "unknown", this.set("mime_type", i)
      }, e.File.withURL = function (t, n, r, i) {
        if (!t || !n) throw new Error("Please provide file name and url");
        var o = new e.File(t, null, i);
        if (r)
          for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
        return o.attributes.url = n, o.attributes.metaData.__source = "external", o
      }, e.File.createWithoutData = function (t) {
        var n = new e.File;
        return n.id = t, n
      }, r.extend(e.File.prototype, {
        className: "_File",
        _toFullJSON: function (t) {
          var n = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = r.clone(this.attributes);
          return e._objectEach(o, function (n, r) {
            o[r] = e._encode(n, t, void 0, i)
          }), e._objectEach(this._operations, function (e, t) {
            o[t] = e
          }), r.has(this, "id") && (o.objectId = this.id), r(["createdAt", "updatedAt"]).each(function (e) {
            if (r.has(n, e)) {
              var t = n[e];
              o[e] = r.isDate(t) ? t.toJSON() : t
            }
          }), i && (o.__type = "File"), o
        },
        toFullJSON: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        toJSON: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
          return this._toFullJSON(n, !1)
        },
        getACL: function () {
          return this._acl
        },
        setACL: function (t) {
          return t instanceof e.ACL ? void (this._acl = t) : new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.")
        },
        name: function () {
          return this.get("name")
        },
        url: function () {
          return this.get("url")
        },
        get: function (e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "url":
            case "name":
            case "mime_type":
            case "metaData":
            case "createdAt":
            case "updatedAt":
              return this.attributes[e];
            default:
              return this.attributes.metaData[e]
          }
        },
        set: function e() {
          for (var t = this, e = function (e, n) {
            switch (e) {
              case "name":
              case "url":
              case "mime_type":
              case "base64":
              case "metaData":
                t.attributes[e] = n;
                break;
              default:
                t.attributes.metaData[e] = n
            }
          }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
          switch (r.length) {
            case 1:
              for (var o in r[0]) e(o, r[0][o]);
              break;
            case 2:
              e(r[0], r[1])
          }
        },
        metaData: function (e, t) {
          return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData
        },
        thumbnailURL: function (e, t, n, r, i) {
          var o = this.attributes.url;
          if (!o) throw new Error("Invalid url.");
          if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
          if (n = n || 100, r = !r || r, n <= 0 || n > 100) throw new Error("Invalid quality value.");
          i = i || "png";
          var s = r ? 2 : 1;
          return o + "?imageView/" + s + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i
        },
        size: function () {
          return this.metaData().size
        },
        ownerId: function () {
          return this.metaData().owner
        },
        destroy: function (e) {
          if (!this.id) return c.reject(new Error("The file id is not eixsts."));
          var t = u("files", null, this.id, "DELETE", null, e);
          return t
        },
        _fileToken: function (e) {
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "fileTokens",
            i = this.attributes.name,
            o = n(i);
          !o && this._extName && (i += this._extName, o = this._extName);
          var s = t() + t() + t() + t() + t() + o,
            a = {
              key: s,
              name: i,
              ACL: this._acl,
              mime_type: e,
              metaData: this.attributes.metaData
            };
          return this._qiniu_key = s, u(r, null, null, "POST", a)
        },
        save: function (e) {
          var t = this;
          if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
          if (!this._previousSave)
            if (this._data) {
              var r = this.get("mime_type");
              this._previousSave = this._fileToken(r).then(function (a) {
                return a.mime_type && (r = a.mime_type, t.set("mime_type", r)), t._token = a.token, c.resolve().then(function () {
                  var e = t._data;
                  if (e && e.base64) return p(e.base64, r);
                  if (e && e.blob) return !e.blob.type && r && (e.blob.type = r), e.blob.name || (e.blob.name = t.get("name")), t._extName = n(e.blob.uri), e.blob;
                  if ("undefined" != typeof File && e instanceof File) return e.size && (t.attributes.metaData.size = e.size), e.name && (t._extName = n(e.name)), e;
                  if ("undefined" != typeof Buffer && Buffer.isBuffer(e)) return t.attributes.metaData.size = e.length, e;
                  throw new TypeError("malformed file data")
                }).then(function (n) {
                  var r = void 0;
                  switch (a.provider) {
                    case "s3":
                      r = s(a, n, t, e);
                      break;
                    case "qcloud":
                      r = i(a, n, t, e);
                      break;
                    case "qiniu":
                    default:
                      r = o(a, n, t, e)
                  }
                  return r.then(h(function () {
                    return t._callback(!0)
                  }), function (e) {
                    throw t._callback(!1), e
                  })
                })
              })
            } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
              var a = {
                name: this.attributes.name,
                ACL: this._acl,
                metaData: this.attributes.metaData,
                mime_type: this.mimeType,
                url: this.attributes.url
              };
              this._previousSave = u("files", this.attributes.name, null, "post", a).then(function (e) {
                return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, e.size && (t.attributes.metaData.size = e.size), t
              })
            }
          return this._previousSave
        },
        _callback: function (e) {
          u("fileCallback", null, null, "post", {
            token: this._token,
            result: e
          }).catch(d), delete this._token, delete this._data
        },
        fetch: function (e, t) {
          var n = u("files", null, this.id, "GET", f(e), t);
          return n.then(this._finishFetch.bind(this))
        },
        _finishFetch: function (t) {
          var n = e.Object.prototype.parse(t);
          return n.attributes = {
            name: n.name,
            url: n.url,
            mime_type: n.mime_type,
            bucket: n.bucket
          }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, r.extend(this, n), this
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e) {
      e.GeoPoint = function (t, n) {
        r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
        var i = this;
        this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", function () {
          return i._latitude
        }), this.__defineGetter__("longitude", function () {
          return i._longitude
        }), this.__defineSetter__("latitude", function (t) {
          e.GeoPoint._validate(t, i.longitude), i._latitude = t
        }), this.__defineSetter__("longitude", function (t) {
          e.GeoPoint._validate(i.latitude, t), i._longitude = t;
        }))
      }, e.GeoPoint._validate = function (e, t) {
        if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
        if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
        if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
        if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.")
      }, e.GeoPoint.current = function () {
        return new e.Promise(function (t, n) {
          navigator.geolocation.getCurrentPosition(function (n) {
            t(new e.GeoPoint({
              latitude: n.coords.latitude,
              longitude: n.coords.longitude
            }))
          }, n)
        })
      }, r.extend(e.GeoPoint.prototype, {
        toJSON: function () {
          return e.GeoPoint._validate(this.latitude, this.longitude), {
            __type: "GeoPoint",
            latitude: this.latitude,
            longitude: this.longitude
          }
        },
        radiansTo: function (e) {
          var t = Math.PI / 180,
            n = this.latitude * t,
            r = this.longitude * t,
            i = e.latitude * t,
            o = e.longitude * t,
            s = n - i,
            a = r - o,
            u = Math.sin(s / 2),
            c = Math.sin(a / 2),
            l = u * u + Math.cos(n) * Math.cos(i) * c * c;
          return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l))
        },
        kilometersTo: function (e) {
          return 6371 * this.radiansTo(e)
        },
        milesTo: function (e) {
          return 3958.8 * this.radiansTo(e)
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    n(22), e.exports = n(23)
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      if ("us" === t) return h("https://us-api.leancloud.cn");
      var n = void 0;
      switch (e.slice(-9)) {
        case "-9Nh9j0Va":
          return h("https://e1-api.leancloud.cn");
        case "-MdYXbMMI":
          return h("https://us-api.leancloud.cn");
        default:
          return n = e.slice(0, 8).toLowerCase(), {
            push: "https://" + n + ".push.lncld.net",
            stats: "https://" + n + ".stats.lncld.net",
            engine: "https://" + n + ".engine.lncld.net",
            api: "https://" + n + ".api.lncld.net"
          }
      }
    }
    var i = n(6),
      o = n(26),
      s = n(4),
      a = s.isNullOrUndefined,
      u = n(0),
      c = u.extend,
      l = u.isObject,
      h = function (e) {
        return {
          push: e,
          stats: e,
          engine: e,
          api: e
        }
      },
      f = !1;
    i.init = function (e) {
      if (!l(e)) return i.init({
        appId: e,
        appKey: arguments.length <= 1 ? void 0 : arguments[1],
        masterKey: arguments.length <= 2 ? void 0 : arguments[2],
        region: arguments.length <= 3 ? void 0 : arguments[3]
      });
      var t = e.appId,
        n = e.appKey,
        s = e.masterKey,
        a = (e.hookKey, e.region),
        u = void 0 === a ? "cn" : a,
        h = e.serverURLs,
        d = e.disableCurrentUser,
        p = void 0 !== d && d,
        _ = e.production;
      if (i.applicationId) throw new Error("SDK is already initialized.");
      s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, i._config.applicationKey = n, i._config.masterKey = s, "undefined" != typeof _ && (i._config.production = _), "undefined" != typeof p && (i._config.disableCurrentUser = p), i._appRouter = new o(i);
      var v = f || "undefined" != typeof h || "cn" !== u;
      i._setServerURLs(c({}, r(t, u), i._config.serverURLs, h), v)
    }, i.setProduction = function (e) {
      a(e) ? i._config.production = null : i._config.production = e ? 1 : 0
    }, i._setServerURLs = function (e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "string" != typeof e ? c(i._config.serverURLs, e) : i._config.serverURLs = h(e), t && (i._appRouter ? i._appRouter.disable() : f = !0)
    }, i.setServerURLs = function (e) {
      return i._setServerURLs(e)
    }, i.initialize = i.init;
    var d = function (e) {
      return Object.defineProperty(i, e, {
        get: function () {
          return i._config[e]
        },
        set: function (t) {
          i._config[e] = t
        }
      })
    };
    ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(d)
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = n(2),
      s = o.request;
    e.exports = function (e) {
      e.Insight = e.Insight || {}, r.extend(e.Insight, {
        startJob: function (t, n) {
          if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
          var r = {
            jobConfig: t,
            appId: e.applicationId
          };
          return s({
            path: "/bigquery/jobs",
            method: "POST",
            data: e._encode(r, null, !0),
            authOptions: n,
            signKey: !1
          }).then(function (t) {
            return e._decode(t).id
          })
        },
        on: function (e, t) { }
      }), e.Insight.JobQuery = function (e, t) {
        if (!e) throw new Error("Please provide the job id.");
        this.id = e, this.className = t, this._skip = 0, this._limit = 100
      }, r.extend(e.Insight.JobQuery.prototype, {
        skip: function (e) {
          return this._skip = e, this
        },
        limit: function (e) {
          return this._limit = e, this
        },
        find: function (t) {
          var n = {
            skip: this._skip,
            limit: this._limit
          };
          return s({
            path: "/bigquery/jobs/" + this.id,
            method: "GET",
            query: n,
            authOptions: t,
            signKey: !1
          }).then(function (t) {
            return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t)
          })
        }
      })
    }
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      return e && e[t] ? i.isFunction(e[t]) ? e[t]() : e[t] : null
    }
    var i = n(0),
      o = n(3),
      s = n(2),
      a = s._request,
      u = n(4),
      c = u.isNullOrUndefined,
      l = u.ensureArray,
      h = u.transformFetchOptions,
      f = ["objectId", "createdAt", "updatedAt"],
      d = function (e) {
        if (f.indexOf(e) !== -1) throw new Error("key[" + e + "] is reserved")
      };
    e.exports = function (e) {
      e.Object = function (t, n) {
        if (i.isString(t)) return e.Object._create.apply(this, arguments);
        t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
        var o = r(this, "defaults");
        o && (t = i.extend({}, o, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = i.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
          silent: !0
        }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = i.clone(this.attributes), this.initialize.apply(this, arguments)
      }, e.Object.saveAll = function (t, n) {
        return e.Object._deepSaveAsync(t, null, n)
      }, e.Object.fetchAll = function (t, n) {
        return e.Promise.resolve().then(function () {
          return a("batch", null, null, "POST", {
            requests: i.map(t, function (e) {
              if (!e.className) throw new Error("object must have className to fetch");
              if (!e.id) throw new Error("object must have id to fetch");
              if (e.dirty()) throw new Error("object is modified but not saved");
              return {
                method: "GET",
                path: "/1.1/classes/" + e.className + "/" + e.id
              }
            })
          }, n)
        }).then(function (e) {
          return i.forEach(t, function (t, n) {
            if (!e[n].success) {
              var r = new Error(e[n].error.error);
              throw r.code = e[n].error.code, r
            }
            t._finishFetch(t.parse(e[n].success))
          }), t
        })
      }, i.extend(e.Object.prototype, e.Events, {
        _fetchWhenSave: !1,
        initialize: function () { },
        fetchWhenSave: function (e) {
          if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !i.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
          this._fetchWhenSave = e
        },
        getObjectId: function () {
          return this.id
        },
        getCreatedAt: function () {
          return this.createdAt || this.get("createdAt")
        },
        getUpdatedAt: function () {
          return this.updatedAt || this.get("updatedAt")
        },
        toJSON: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          return this._toFullJSON(n, !1)
        },
        toFullJSON: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return this._toFullJSON(e)
        },
        _toFullJSON: function (t) {
          var n = this,
            r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            o = i.clone(this.attributes);
          if (i.isArray(t)) var s = t.concat(this);
          return e._objectEach(o, function (t, n) {
            o[n] = e._encode(t, s, void 0, r)
          }), e._objectEach(this._operations, function (e, t) {
            o[t] = e
          }), i.has(this, "id") && (o.objectId = this.id), i(["createdAt", "updatedAt"]).each(function (e) {
            if (i.has(n, e)) {
              var t = n[e];
              o[e] = i.isDate(t) ? t.toJSON() : t
            }
          }), r && (o.__type = "Object", i.isArray(t) && t.length && (o.__type = "Pointer"), o.className = this.className), o
        },
        _refreshCache: function () {
          var t = this;
          t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function (n, r) {
            n instanceof e.Object ? n._refreshCache() : i.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
              silent: !0
            })
          }), delete t._refreshingCache)
        },
        dirty: function (e) {
          this._refreshCache();
          var t = i.last(this._opSetQueue);
          return e ? !!t[e] : !this.id || i.keys(t).length > 0
        },
        _toPointer: function () {
          return {
            __type: "Pointer",
            className: this.className,
            objectId: this.id
          }
        },
        get: function (e) {
          switch (e) {
            case "objectId":
              return this.id;
            case "createdAt":
            case "updatedAt":
              return this[e];
            default:
              return this.attributes[e]
          }
        },
        relation: function (t) {
          var n = this.get(t);
          if (n) {
            if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
            return n._ensureParentAndKey(this, t), n
          }
          return new e.Relation(this, t)
        },
        escape: function (e) {
          var t = this._escapedAttributes[e];
          if (t) return t;
          var n, r = this.attributes[e];
          return n = c(r) ? "" : i.escape(r.toString()), this._escapedAttributes[e] = n, n
        },
        has: function (e) {
          return !c(this.attributes[e])
        },
        _mergeMagicFields: function (t) {
          var n = this,
            r = ["objectId", "createdAt", "updatedAt"];
          return e._arrayEach(r, function (r) {
            t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || i.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), delete t[r])
          }), t
        },
        _startSave: function () {
          this._opSetQueue.push({})
        },
        _cancelSave: function () {
          var t = i.first(this._opSetQueue);
          this._opSetQueue = i.rest(this._opSetQueue);
          var n = i.first(this._opSetQueue);
          e._objectEach(t, function (e, r) {
            var i = t[r],
              o = n[r];
            i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
          }), this._saving = this._saving - 1
        },
        _finishSave: function (t) {
          var n = {};
          e._traverse(this.attributes, function (t) {
            t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
          });
          var r = i.first(this._opSetQueue);
          this._opSetQueue = i.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);
          var o = this;
          e._objectEach(t, function (t, r) {
            o._serverData[r] = e._decode(t, r);
            var i = e._traverse(o._serverData[r], function (t) {
              if (t instanceof e.Object && n[t.id]) return n[t.id]
            });
            i && (o._serverData[r] = i)
          }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1
        },
        _finishFetch: function (t, n) {
          this._opSetQueue = [{}], this._mergeMagicFields(t);
          var r = this;
          e._objectEach(t, function (t, n) {
            r._serverData[n] = e._decode(t, n)
          }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
        },
        _applyOpSet: function (t, n) {
          var r = this;
          e._objectEach(t, function (t, i) {
            n[i] = t._estimate(n[i], r, i), n[i] === e.Op._UNSET && delete n[i]
          })
        },
        _resetCacheForKey: function (t) {
          var n = this.attributes[t];
          if (i.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
            n = n.toJSON ? n.toJSON() : n;
            var r = JSON.stringify(n);
            if (this._hashedJSON[t] !== r) {
              var o = !!this._hashedJSON[t];
              return this._hashedJSON[t] = r, o
            }
          }
          return !1
        },
        _rebuildEstimatedDataForKey: function (t) {
          var n = this;
          delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function (r) {
            var i = r[t];
            i && (n.attributes[t] = i._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t))
          })
        },
        _rebuildAllEstimatedData: function () {
          var t = this,
            n = i.clone(this.attributes);
          this.attributes = i.clone(this._serverData), e._arrayEach(this._opSetQueue, function (n) {
            t._applyOpSet(n, t.attributes), e._objectEach(n, function (e, n) {
              t._resetCacheForKey(n)
            })
          }), e._objectEach(n, function (e, n) {
            t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {})
          }), e._objectEach(this.attributes, function (e, r) {
            i.has(n, r) || t.trigger("change:" + r, t, e, {})
          })
        },
        set: function (t, n, r) {
          var o;
          if (i.isObject(t) || c(t) ? (o = i.mapObject(t, function (t, n) {
            return d(n), e._decode(t, n)
          }), r = n) : (o = {}, d(t), o[t] = e._decode(n, t)), r = r || {}, !o) return this;
          o instanceof e.Object && (o = o.attributes), r.unset && e._objectEach(o, function (t, n) {
            o[n] = new e.Op.Unset
          });
          var s = i.clone(o),
            a = this;
          e._objectEach(s, function (t, n) {
            t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n])
          }), this._validate(o, r), r.changes = {};
          var u = this._escapedAttributes;
          this._previousAttributes || {};
          return e._arrayEach(i.keys(o), function (t) {
            var n = o[t];
            n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
            var s = !0;
            n instanceof e.Op.Set && i.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
            var c = i.last(a._opSetQueue);
            c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t])
          }), r.silent || this.change(r), this
        },
        unset: function (e, t) {
          return t = t || {}, t.unset = !0, this.set(e, null, t)
        },
        increment: function (t, n) {
          return (i.isUndefined(n) || i.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n))
        },
        add: function (t, n) {
          return this.set(t, new e.Op.Add(l(n)))
        },
        addUnique: function (t, n) {
          return this.set(t, new e.Op.AddUnique(l(n)))
        },
        remove: function (t, n) {
          return this.set(t, new e.Op.Remove(l(n)))
        },
        op: function (e) {
          return i.last(this._opSetQueue)[e]
        },
        clear: function (e) {
          e = e || {}, e.unset = !0;
          var t = i.extend(this.attributes, this._operations);
          return this.set(t, e)
        },
        _getSaveJSON: function () {
          var t = i.clone(i.first(this._opSetQueue));
          return e._objectEach(t, function (e, n) {
            t[n] = e.toJSON()
          }), t
        },
        _canBeSerialized: function () {
          return e.Object._canBeSerializedAsValue(this.attributes)
        },
        fetch: function (e, t) {
          var n = this,
            r = a("classes", this.className, this.id, "GET", h(e), t);
          return r.then(function (e) {
            return n._finishFetch(n.parse(e), !0), n
          })
        },
        save: function (t, n, r) {
          var o, s, u;
          i.isObject(t) || c(t) ? (o = t, u = n) : (o = {}, o[t] = n, u = r), u = i.clone(u) || {}, u.wait && (s = i.clone(this.attributes));
          var l = i.clone(u) || {};
          l.wait && (l.silent = !0), o && this.set(o, l);
          var h = this;
          h._refreshCache();
          var f = [],
            d = [];
          return e.Object._findUnsavedChildren(h.attributes, f, d), f.length + d.length > 0 ? e.Object._deepSaveAsync(this.attributes, h, u).then(function () {
            return h.save(null, u)
          }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch(function (e) { }).then(function () {
            var e = h.id ? "PUT" : "POST",
              t = h._getSaveJSON(),
              n = {};
            if ((h._fetchWhenSave || u.fetchWhenSave) && (n.new = "true"), u.query) {
              var r;
              if ("function" == typeof u.query.toJSON && (r = u.query.toJSON(), r && (n.where = r.where)), !n.where) {
                var c = new Error("options.query is not an AV.Query");
                throw c
              }
            }
            i.extend(t, h._flags);
            var f = "classes",
              d = h.className;
            "_User" !== h.className || h.id || (f = "users", d = null);
            var p = u._makeRequest || a,
              _ = p(f, d, h.id, e, t, u, n);
            return _ = _.then(function (e) {
              var t = h.parse(e);
              return u.wait && (t = i.extend(o || {}, t)), h._finishSave(t), u.wait && h.set(s, l), h
            }, function (e) {
              throw h._cancelSave(), e
            })
          }), this._allPreviousSaves)
        },
        destroy: function (e) {
          e = e || {};
          var t = this,
            n = function () {
              t.trigger("destroy", t, t.collection, e)
            };
          if (!this.id) return n();
          e.wait || n();
          var r = a("classes", this.className, this.id, "DELETE", this._flags, e);
          return r.then(function () {
            return e.wait && n(), t
          })
        },
        parse: function (t) {
          var n = i.clone(t);
          return i(["createdAt", "updatedAt"]).each(function (t) {
            n[t] && (n[t] = e._parseDate(n[t]))
          }), n.updatedAt || (n.updatedAt = n.createdAt), n
        },
        clone: function () {
          return new this.constructor(this.attributes)
        },
        isNew: function () {
          return !this.id
        },
        change: function (t) {
          t = t || {};
          var n = this._changing;
          this._changing = !0;
          var r = this;
          e._objectEach(this._silent, function (e) {
            r._pending[e] = !0
          });
          var o = i.extend({}, t.changes, this._silent);
          if (this._silent = {}, e._objectEach(o, function (e, n) {
            r.trigger("change:" + n, r, r.get(n), t)
          }), n) return this;
          for (var s = function (e, t) {
            r._pending[t] || r._silent[t] || delete r.changed[t]
          }; !i.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, s), r._previousAttributes = i.clone(this.attributes);
          return this._changing = !1, this
        },
        hasChanged: function (e) {
          return arguments.length ? this.changed && i.has(this.changed, e) : !i.isEmpty(this.changed)
        },
        changedAttributes: function (t) {
          if (!t) return !!this.hasChanged() && i.clone(this.changed);
          var n = {},
            r = this._previousAttributes;
          return e._objectEach(t, function (e, t) {
            i.isEqual(r[t], e) || (n[t] = e)
          }), n
        },
        previous: function (e) {
          return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function () {
          return i.clone(this._previousAttributes)
        },
        isValid: function () {
          try {
            this.validate(this.attributes)
          } catch (e) {
            return !1
          }
          return !0
        },
        validate: function (t) {
          if (i.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new o(o.OTHER_CAUSE, "ACL must be a AV.ACL.")
        },
        _validate: function (e, t) {
          !t.silent && this.validate && (e = i.extend({}, this.attributes, e), this.validate(e))
        },
        getACL: function () {
          return this.get("ACL")
        },
        setACL: function (e, t) {
          return this.set("ACL", e, t)
        },
        disableBeforeHook: function () {
          this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
        },
        disableAfterHook: function () {
          this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
        },
        ignoreHook: function (t) {
          i.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t) || console.trace("Unsupported hookName: " + t), e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t)
        }
      }), e.Object.createWithoutData = function (t, n, r) {
        var i = new e.Object(t);
        return i.id = n, i._hasData = r, i
      }, e.Object.destroyAll = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!t || 0 === t.length) return e.Promise.resolve();
        var r = i.groupBy(t, function (e) {
          return JSON.stringify({
            className: e.className,
            flags: e._flags
          })
        }),
          o = {
            requests: i.map(r, function (e) {
              var t = i.map(e, "id").join(",");
              return {
                method: "DELETE",
                path: "/1.1/classes/" + e[0].className + "/" + t,
                body: e[0]._flags
              }
            })
          };
        return a("batch", null, null, "POST", o, n)
      }, e.Object._getSubclass = function (t) {
        if (!i.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
        var n = e.Object._classMap[t];
        return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n
      }, e.Object._create = function (t, n, r) {
        var i = e.Object._getSubclass(t);
        return new i(n, r)
      }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function (t, n) {
        return new e.Object(t, n)
      }, e.Object.extend = function (t, n, r) {
        if (!i.isString(t)) {
          if (t && i.has(t, "className")) return e.Object.extend(t.className, t, n);
          throw new Error("AV.Object.extend's first argument should be the className.")
        }
        "User" === t && (t = "_User");
        var o = null;
        if (i.has(e.Object._classMap, t)) {
          var s = e.Object._classMap[t];
          if (!n && !r) return s;
          o = s._extend(n, r)
        } else n = n || {}, n._className = t, o = this._extend(n, r);
        return o.extend = function (n) {
          if (i.isString(n) || n && i.has(n, "className")) return e.Object.extend.apply(o, arguments);
          var r = [t].concat(i.toArray(arguments));
          return e.Object.extend.apply(o, r)
        }, o.new = function (e, t) {
          return new o(e, t)
        }, e.Object._classMap[t] = o, o
      }, Object.defineProperty(e.Object.prototype, "className", {
        get: function () {
          var e = this._className || this.constructor._LCClassName || this.constructor.name;
          return "User" === e ? "_User" : e
        }
      }), e.Object.register = function (t, n) {
        if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
        var r = n || t.name;
        if (!r.length) throw new Error("registered class must be named");
        n && (t._LCClassName = n), e.Object._classMap[r] = t
      }, e.Object._findUnsavedChildren = function (t, n, r) {
        e._traverse(t, function (t) {
          return t instanceof e.Object ? (t._refreshCache(), void (t.dirty() && n.push(t))) : t instanceof e.File ? void (t.url() || t.id || r.push(t)) : void 0
        })
      }, e.Object._canBeSerializedAsValue = function (t) {
        var n = !0;
        return t instanceof e.Object || t instanceof e.File ? n = !!t.id : i.isArray(t) ? e._arrayEach(t, function (t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }) : i.isObject(t) && e._objectEach(t, function (t) {
          e.Object._canBeSerializedAsValue(t) || (n = !1)
        }), n
      }, e.Object._deepSaveAsync = function (t, n, r) {
        var s = [],
          u = [];
        e.Object._findUnsavedChildren(t, s, u), n && (s = i.filter(s, function (e) {
          return e != n
        }));
        var c = e.Promise.resolve();
        i.each(u, function (e) {
          c = c.then(function () {
            return e.save()
          })
        });
        var l = i.uniq(s),
          h = i.uniq(l);
        return c.then(function () {
          return e.Promise._continueWhile(function () {
            return h.length > 0
          }, function () {
            var t = [],
              n = [];
            if (e._arrayEach(h, function (e) {
              return t.length > 20 ? void n.push(e) : void (e._canBeSerialized() ? t.push(e) : n.push(e))
            }), h = n, 0 === t.length) return e.Promise.reject(new o(o.OTHER_CAUSE, "Tried to save a batch with a cycle."));
            var s = e.Promise.resolve(i.map(t, function (t) {
              return t._allPreviousSaves || e.Promise.resolve()
            })),
              u = s.then(function () {
                return a("batch", null, null, "POST", {
                  requests: i.map(t, function (e) {
                    var t = e._getSaveJSON();
                    i.extend(t, e._flags);
                    var n = "POST",
                      r = "/1.1/classes/" + e.className;
                    return e.id && (r = r + "/" + e.id, n = "PUT"), e._startSave(), {
                      method: n,
                      path: r,
                      body: t
                    }
                  })
                }, r).then(function (n) {
                  var r;
                  if (e._arrayEach(t, function (e, t) {
                    n[t].success ? e._finishSave(e.parse(n[t].success)) : (r = r || n[t].error, e._cancelSave())
                  }), r) return e.Promise.reject(new o(r.code, r.error))
                })
              });
            return e._arrayEach(t, function (e) {
              e._allPreviousSaves = u
            }), u
          })
        }).then(function () {
          return t
        })
      }
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e) {
      e.Op = function () {
        this._initialize.apply(this, arguments)
      }, r.extend(e.Op.prototype, {
        _initialize: function () { }
      }), r.extend(e.Op, {
        _extend: e._extend,
        _opDecoderMap: {},
        _registerDecoder: function (t, n) {
          e.Op._opDecoderMap[t] = n
        },
        _decode: function (t) {
          var n = e.Op._opDecoderMap[t.__op];
          return n ? n(t) : void 0
        }
      }), e.Op._registerDecoder("Batch", function (t) {
        var n = null;
        return e._arrayEach(t.ops, function (t) {
          t = e.Op._decode(t), n = t._mergeWithPrevious(n)
        }), n
      }), e.Op.Set = e.Op._extend({
        _initialize: function (e) {
          this._value = e
        },
        value: function () {
          return this._value
        },
        toJSON: function () {
          return e._encode(this.value())
        },
        _mergeWithPrevious: function (e) {
          return this
        },
        _estimate: function (e) {
          return this.value()
        }
      }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
        toJSON: function () {
          return {
            __op: "Delete"
          }
        },
        _mergeWithPrevious: function (e) {
          return this
        },
        _estimate: function (t) {
          return e.Op._UNSET
        }
      }), e.Op._registerDecoder("Delete", function (t) {
        return new e.Op.Unset
      }), e.Op.Increment = e.Op._extend({
        _initialize: function (e) {
          this._amount = e
        },
        amount: function () {
          return this._amount
        },
        toJSON: function () {
          return {
            __op: "Increment",
            amount: this._amount
          }
        },
        _mergeWithPrevious: function (t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
            if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
            if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function (e) {
          return e ? e + this.amount() : this.amount()
        }
      }), e.Op._registerDecoder("Increment", function (t) {
        return new e.Op.Increment(t.amount)
      }), e.Op.Add = e.Op._extend({
        _initialize: function (e) {
          this._objects = e
        },
        objects: function () {
          return this._objects
        },
        toJSON: function () {
          return {
            __op: "Add",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function (t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function (e) {
          return e ? e.concat(this.objects()) : r.clone(this.objects())
        }
      }), e.Op._registerDecoder("Add", function (t) {
        return new e.Op.Add(e._decode(t.objects))
      }), e.Op.AddUnique = e.Op._extend({
        _initialize: function (e) {
          this._objects = r.uniq(e)
        },
        objects: function () {
          return this._objects
        },
        toJSON: function () {
          return {
            __op: "AddUnique",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function (t) {
          if (t) {
            if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function (t) {
          if (t) {
            var n = r.clone(t);
            return e._arrayEach(this.objects(), function (t) {
              if (t instanceof e.Object && t.id) {
                var i = r.find(n, function (n) {
                  return n instanceof e.Object && n.id === t.id
                });
                if (i) {
                  var o = r.indexOf(n, i);
                  n[o] = t
                } else n.push(t)
              } else r.contains(n, t) || n.push(t)
            }), n
          }
          return r.clone(this.objects())
        }
      }), e.Op._registerDecoder("AddUnique", function (t) {
        return new e.Op.AddUnique(e._decode(t.objects))
      }), e.Op.Remove = e.Op._extend({
        _initialize: function (e) {
          this._objects = r.uniq(e)
        },
        objects: function () {
          return this._objects
        },
        toJSON: function () {
          return {
            __op: "Remove",
            objects: e._encode(this.objects())
          }
        },
        _mergeWithPrevious: function (t) {
          if (t) {
            if (t instanceof e.Op.Unset) return t;
            if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
            if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function (t) {
          if (t) {
            var n = r.difference(t, this.objects());
            return e._arrayEach(this.objects(), function (t) {
              t instanceof e.Object && t.id && (n = r.reject(n, function (n) {
                return n instanceof e.Object && n.id === t.id
              }))
            }), n
          }
          return []
        }
      }), e.Op._registerDecoder("Remove", function (t) {
        return new e.Op.Remove(e._decode(t.objects))
      }), e.Op.Relation = e.Op._extend({
        _initialize: function (t, n) {
          this._targetClassName = null;
          var i = this,
            o = function (t) {
              if (t instanceof e.Object) {
                if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                return t.id
              }
              return t
            };
          this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o))
        },
        added: function () {
          var t = this;
          return r.map(this.relationsToAdd, function (n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        removed: function () {
          var t = this;
          return r.map(this.relationsToRemove, function (n) {
            var r = e.Object._create(t._targetClassName);
            return r.id = n, r
          })
        },
        toJSON: function () {
          var e = null,
            t = null,
            n = this,
            i = function (e) {
              return {
                __type: "Pointer",
                className: n._targetClassName,
                objectId: e
              }
            },
            o = null;
          return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
            __op: "AddRelation",
            objects: o
          }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), t = {
            __op: "RemoveRelation",
            objects: o
          }), e && t ? {
            __op: "Batch",
            ops: [e, t]
          } : e || t || {}
        },
        _mergeWithPrevious: function (t) {
          if (t) {
            if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
            if (t instanceof e.Op.Relation) {
              if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
              var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                o = new e.Op.Relation(n, i);
              return o._targetClassName = this._targetClassName, o
            }
            throw new Error("Op is invalid after previous op.")
          }
          return this
        },
        _estimate: function (t, n, r) {
          if (t) {
            if (t instanceof e.Relation) {
              if (this._targetClassName)
                if (t.targetClassName) {
                  if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                } else t.targetClassName = this._targetClassName;
              return t
            }
            throw new Error("Op is invalid after previous op.")
          }
          var i = new e.Relation(n, r);
          i.targetClassName = this._targetClassName
        }
      }), e.Op._registerDecoder("AddRelation", function (t) {
        return new e.Op.Relation(e._decode(t.objects), [])
      }), e.Op._registerDecoder("RemoveRelation", function (t) {
        return new e.Op.Relation([], e._decode(t.objects))
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(2).request;
    e.exports = function (e) {
      e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function (e, t) {
        if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
        if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
        return r({
          service: "push",
          method: "POST",
          path: "/push",
          data: e,
          authOptions: t
        })
      }
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(5)("leancloud:query"),
      o = n(1),
      s = n(3),
      a = n(2)._request,
      u = n(4),
      c = u.ensureArray,
      l = function (e, t) {
        if (void 0 === e) throw new Error(t)
      };
    e.exports = function (e) {
      e.Query = function (t) {
        r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._extraOptions = {}
      }, e.Query.or = function () {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function (e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._orQuery(t), i
      }, e.Query.and = function () {
        var t = r.toArray(arguments),
          n = null;
        e._arrayEach(t, function (e) {
          if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
        });
        var i = new e.Query(n);
        return i._andQuery(t), i
      }, e.Query.doCloudQuery = function (t, n, i) {
        var o = {
          cql: t
        };
        r.isArray(n) ? o.pvalues = n : i = n;
        var s = a("cloudQuery", null, null, "GET", o, i);
        return s.then(function (t) {
          var n = new e.Query(t.className),
            i = r.map(t.results, function (e) {
              var r = n._newObject(t);
              return r._finishFetch && r._finishFetch(n._processResult(e), !0), r
            });
          return {
            results: i,
            count: t.count,
            className: t.className
          }
        })
      }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
        _processResult: function (e) {
          return e
        },
        get: function (e, t) {
          if (!e) {
            var n = new s(s.OBJECT_NOT_FOUND, "Object not found.");
            throw n
          }
          var r = this,
            i = r._newObject();
          i.id = e;
          var o = r.toJSON(),
            a = {};
          return o.keys && (a.keys = o.keys), o.include && (a.include = o.include), o.includeACL && (a.includeACL = o.includeACL), i.fetch(a, t)
        },
        toJSON: function () {
          var t = {
            where: this._where
          };
          return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function (e, n) {
            t[n] = e
          }), t
        },
        _newObject: function (t) {
          var n;
          return n = t && t.className ? new e.Object(t.className) : new this.objectClass
        },
        _createRequest: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(),
            t = arguments[1];
          if (JSON.stringify(e).length > 2e3) {
            var n = {
              requests: [{
                method: "GET",
                path: "/1.1/classes/" + this.className,
                params: e
              }]
            };
            return a("batch", null, null, "POST", n, t).then(function (e) {
              var t = e[0];
              if (t.success) return t.success;
              var n = new Error(t.error.error || "Unknown batch error");
              throw n.code = t.error.code, n
            })
          }
          return a("classes", this.className, null, "GET", e, t)
        },
        _parseResponse: function (e) {
          var t = this;
          return r.map(e.results, function (n) {
            var r = t._newObject(e);
            return r._finishFetch && r._finishFetch(t._processResult(n), !0), r
          })
        },
        find: function (e) {
          var t = this._createRequest(void 0, e);
          return t.then(this._parseResponse.bind(this))
        },
        scan: function () {
          var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.orderedBy,
            s = t.batchSize,
            u = arguments[1],
            c = this.toJSON();
          i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
          var l = o.resolve([]),
            h = void 0,
            f = !1;
          return {
            next: function () {
              return l = l.then(function (t) {
                return f ? [] : t.length > 1 ? t : h || 0 === t.length ? a("scan/classes", e.className, null, "GET", h ? r.extend({}, c, {
                  cursor: h
                }) : c, u).then(function (t) {
                  return h = t.cursor, e._parseResponse(t)
                }).then(function (e) {
                  return e.length || (f = !0), t.concat(e)
                }) : (f = !0, t)
              }), l.then(function (e) {
                return e.shift()
              }).then(function (e) {
                return {
                  value: e,
                  done: f
                }
              })
            }
          }
        },
        destroyAll: function (t) {
          var n = this;
          return n.find(t).then(function (n) {
            return e.Object.destroyAll(n, t)
          })
        },
        count: function (e) {
          var t = this.toJSON();
          t.limit = 0, t.count = 1;
          var n = this._createRequest(t, e);
          return n.then(function (e) {
            return e.count
          })
        },
        first: function (e) {
          var t = this,
            n = this.toJSON();
          n.limit = 1;
          var i = this._createRequest(n, e);
          return i.then(function (e) {
            return r.map(e.results, function (e) {
              var n = t._newObject();
              return n._finishFetch && n._finishFetch(t._processResult(e), !0), n
            })[0]
          })
        },
        skip: function (e) {
          return l(e, "undefined is not a valid skip value"), this._skip = e, this
        },
        limit: function (e) {
          return l(e, "undefined is not a valid limit value"), this._limit = e, this
        },
        equalTo: function (t, n) {
          return l(t, "undefined is not a valid key"), l(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this
        },
        _addCondition: function (t, n, r) {
          return l(t, "undefined is not a valid condition key"), l(n, "undefined is not a valid condition"), l(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this
        },
        sizeEqualTo: function (e, t) {
          this._addCondition(e, "$size", t)
        },
        notEqualTo: function (e, t) {
          return this._addCondition(e, "$ne", t), this
        },
        lessThan: function (e, t) {
          return this._addCondition(e, "$lt", t), this
        },
        greaterThan: function (e, t) {
          return this._addCondition(e, "$gt", t), this
        },
        lessThanOrEqualTo: function (e, t) {
          return this._addCondition(e, "$lte", t), this
        },
        greaterThanOrEqualTo: function (e, t) {
          return this._addCondition(e, "$gte", t), this
        },
        containedIn: function (e, t) {
          return this._addCondition(e, "$in", t), this
        },
        notContainedIn: function (e, t) {
          return this._addCondition(e, "$nin", t), this
        },
        containsAll: function (e, t) {
          return this._addCondition(e, "$all", t), this
        },
        exists: function (e) {
          return this._addCondition(e, "$exists", !0), this
        },
        doesNotExist: function (e) {
          return this._addCondition(e, "$exists", !1), this
        },
        matches: function (e, t, n) {
          return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
        },
        matchesQuery: function (e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$inQuery", n), this
        },
        doesNotMatchQuery: function (e, t) {
          var n = t.toJSON();
          return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
        },
        matchesKeyInQuery: function (e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$select", {
            key: t,
            query: r
          }), this
        },
        doesNotMatchKeyInQuery: function (e, t, n) {
          var r = n.toJSON();
          return r.className = n.className, this._addCondition(e, "$dontSelect", {
            key: t,
            query: r
          }), this
        },
        _orQuery: function (e) {
          var t = r.map(e, function (e) {
            return e.toJSON().where
          });
          return this._where.$or = t, this
        },
        _andQuery: function (e) {
          var t = r.map(e, function (e) {
            return e.toJSON().where
          });
          return this._where.$and = t, this
        },
        _quote: function (e) {
          return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
        },
        contains: function (e, t) {
          return this._addCondition(e, "$regex", this._quote(t)), this
        },
        startsWith: function (e, t) {
          return this._addCondition(e, "$regex", "^" + this._quote(t)), this
        },
        endsWith: function (e, t) {
          return this._addCondition(e, "$regex", this._quote(t) + "$"), this
        },
        ascending: function (e) {
          return l(e, "undefined is not a valid key"), this._order = e, this
        },
        addAscending: function (e) {
          return l(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this
        },
        descending: function (e) {
          return l(e, "undefined is not a valid key"), this._order = "-" + e, this
        },
        addDescending: function (e) {
          return l(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this
        },
        near: function (t, n) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this
        },
        withinRadians: function (e, t, n) {
          return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
        },
        withinMiles: function (e, t, n) {
          return this.withinRadians(e, t, n / 3958.8)
        },
        withinKilometers: function (e, t, n) {
          return this.withinRadians(e, t, n / 6371)
        },
        withinGeoBox: function (t, n, r) {
          return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", {
            $box: [n, r]
          }), this
        },
        include: function (e) {
          var t = this;
          return l(e, "undefined is not a valid key"), r(arguments).forEach(function (e) {
            t._include = t._include.concat(c(e))
          }), this
        },
        includeACL: function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this._includeACL = e, this
        },
        select: function (e) {
          var t = this;
          return l(e, "undefined is not a valid key"), r(arguments).forEach(function (e) {
            t._select = t._select.concat(c(e))
          }), this
        },
        each: function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._order || this._skip || this._limit >= 0) {
            var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
            return e.Promise.reject(i)
          }
          var o = new e.Query(this.objectClass);
          o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), o.ascending("objectId");
          var s = !1;
          return e.Promise._continueWhile(function () {
            return !s
          }, function () {
            return o.find(n).then(function (n) {
              var i = e.Promise.resolve();
              return r.each(n, function (e) {
                i = i.then(function () {
                  return t(e)
                })
              }), i.then(function () {
                n.length >= o._limit ? o.greaterThan("objectId", n[n.length - 1].id) : s = !0
              })
            })
          })
        }
      }), e.FriendShipQuery = e.Query._extend({
        _objectClass: e.User,
        _newObject: function () {
          return new e.User
        },
        _processResult: function (e) {
          if (e && e[this._friendshipTag]) {
            var t = e[this._friendshipTag];
            return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t
          }
          return null
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e) {
      e.Relation = function (e, t) {
        if (!r.isString(t)) throw new TypeError("key must be a string");
        this.parent = e, this.key = t, this.targetClassName = null
      }, e.Relation.reverseQuery = function (t, n, r) {
        var i = new e.Query(t);
        return i.equalTo(n, r._toPointer()), i
      }, r.extend(e.Relation.prototype, {
        _ensureParentAndKey: function (e, t) {
          if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
          if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.")
        },
        add: function (t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation(t, []);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        remove: function (t) {
          r.isArray(t) || (t = [t]);
          var n = new e.Op.Relation([], t);
          this.parent.set(this.key, n), this.targetClassName = n._targetClassName
        },
        toJSON: function () {
          return {
            __type: "Relation",
            className: this.targetClassName
          }
        },
        query: function t() {
          var n, t;
          return this.targetClassName ? (n = e.Object._getSubclass(this.targetClassName), t = new e.Query(n)) : (n = e.Object._getSubclass(this.parent.className), t = new e.Query(n), t._extraOptions.redirectClassNameForKey = this.key), t._addCondition("$relatedTo", "object", this.parent._toPointer()), t._addCondition("$relatedTo", "key", this.key), t
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3);
    e.exports = function (e) {
      e.Role = e.Object.extend("_Role", {
        constructor: function (t, n) {
          if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), n) {
            if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
            this.setACL(n)
          }
        },
        getName: function () {
          return this.get("name")
        },
        setName: function (e, t) {
          return this.set("name", e, t)
        },
        getUsers: function () {
          return this.relation("users")
        },
        getRoles: function () {
          return this.relation("roles")
        },
        validate: function (t, n) {
          if ("name" in t && t.name !== this.getName()) {
            var o = t.name;
            if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
            if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
            if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
          }
          return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n)
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(2)._request;
    e.exports = function (e) {
      e.SearchSortBuilder = function () {
        this._sortFields = []
      }, r.extend(e.SearchSortBuilder.prototype, {
        _addField: function (e, t, n, r) {
          var i = {};
          return i[e] = {
            order: t || "asc",
            mode: n || "avg",
            missing: "_" + (r || "last")
          }, this._sortFields.push(i), this
        },
        ascending: function (e, t, n) {
          return this._addField(e, "asc", t, n)
        },
        descending: function (e, t, n) {
          return this._addField(e, "desc", t, n)
        },
        whereNear: function (e, t, n) {
          n = n || {};
          var r = {},
            i = {
              lat: t.latitude,
              lon: t.longitude
            },
            o = {
              order: n.order || "asc",
              mode: n.mode || "avg",
              unit: n.unit || "km"
            };
          return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this
        },
        build: function () {
          return JSON.stringify(e._encode(this._sortFields))
        }
      }), e.SearchQuery = e.Query._extend({
        _sid: null,
        _hits: 0,
        _queryString: null,
        _highlights: null,
        _sortBuilder: null,
        _createRequest: function (e, t) {
          return i("search/select", null, null, "GET", e || this.toJSON(), t)
        },
        sid: function (e) {
          return this._sid = e, this
        },
        queryString: function (e) {
          return this._queryString = e, this
        },
        highlights: function (e) {
          var t;
          return t = e && r.isString(e) ? arguments : e, this._highlights = t, this
        },
        sortBy: function (e) {
          return this._sortBuilder = e, this
        },
        hits: function () {
          return this._hits || (this._hits = 0), this._hits
        },
        _processResult: function (e) {
          return delete e.className, delete e._app_url, delete e._deeplink, e
        },
        hasMore: function () {
          return !this._hitEnd
        },
        reset: function () {
          this._hitEnd = !1, this._sid = null, this._hits = 0
        },
        find: function () {
          var e = this,
            t = this._createRequest();
          return t.then(function (t) {
            return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, r.map(t.results, function (n) {
              n.className && (t.className = n.className);
              var r = e._newObject(t);
              return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
            })
          })
        },
        toJSON: function () {
          var t = e.SearchQuery.__super__.toJSON.call(this);
          if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
          if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
          return this._sortBuilder && (t.sort = this._sortBuilder.build()), t
        }
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
      i = n(0),
      o = n(2)._request;
    e.exports = function (e) {
      var t = function () {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return e.User.currentAsync().then(function (n) {
          return n || e.User._fetchUserBySessionToken(t.sessionToken)
        })
      },
        n = function (n) {
          return t(n).then(function (t) {
            return e.Object.createWithoutData("_User", t.id)._toPointer()
          })
        };
      e.Status = function (e, t) {
        return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this
      }, i.extend(e.Status.prototype, {
        get: function (e) {
          return this.data[e]
        },
        set: function (e, t) {
          return this.data[e] = t, this
        },
        destroy: function (t) {
          if (!this.id) return e.Promise.reject(new Error("The status id is not exists."));
          var n = o("statuses", null, this.id, "DELETE", t);
          return n
        },
        toObject: function () {
          return this.id ? e.Object.createWithoutData("_Status", this.id) : null
        },
        _getDataJSON: function () {
          var t = i.clone(this.data);
          return e._encode(t)
        },
        send: function () {
          var t = this,
            r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
          return this.query ? n(r).then(function (e) {
            var n = t.query.toJSON();
            n.className = t.query.className;
            var i = {};
            return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", o("statuses", null, null, "POST", i, r)
          }).then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          }) : e.Status.sendStatusToFollowers(this, r)
        },
        _finishFetch: function (t) {
          this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t)
        }
      }), e.Status.sendStatusToFollowers = function (t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
        return n(r).then(function (n) {
          var i = {};
          i.className = "_Follower", i.keys = "follower", i.where = {
            user: n
          };
          var s = {};
          s.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, s.data = t._getDataJSON(), s.inboxType = t.inboxType || "default";
          var a = o("statuses", null, null, "POST", s, r);
          return a.then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.sendPrivateStatus = function (t, r) {
        var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!s.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
        if (!r) throw new Error("Invalid target user.");
        var a = i.isString(r) ? r : r.id;
        if (!a) throw new Error("Invalid target user.");
        return n(s).then(function (n) {
          var r = {};
          r.className = "_User", r.where = {
            objectId: a
          };
          var i = {};
          i.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, i.data = t._getDataJSON(), i.inboxType = "private", t.inboxType = "private";
          var u = o("statuses", null, null, "POST", i, s);
          return u.then(function (n) {
            return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
          })
        })
      }, e.Status.countUnreadStatuses = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (s = r), !s.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return t(s).then(function (t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/count", null, null, "GET", n, s)
        })
      }, e.Status.resetUnreadCount = function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (i.isString(r) || (s = r), !s.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
        return t(s).then(function (t) {
          var n = {};
          return n.inboxType = e._encode(r), n.owner = e._encode(t), o("subscribe/statuses/resetUnreadCount", null, null, "POST", n, s)
        })
      }, e.Status.statusQuery = function (t) {
        var n = new e.Query("_Status");
        return t && n.equalTo("source", t), n
      }, e.InboxQuery = e.Query._extend({
        _objectClass: e.Status,
        _sinceId: 0,
        _maxId: 0,
        _inboxType: "default",
        _owner: null,
        _newObject: function () {
          return new e.Status
        },
        _createRequest: function (e, t) {
          return o("subscribe/statuses", null, null, "GET", e || this.toJSON(), t)
        },
        sinceId: function (e) {
          return this._sinceId = e, this
        },
        maxId: function (e) {
          return this._maxId = e, this
        },
        owner: function (e) {
          return this._owner = e, this
        },
        inboxType: function (e) {
          return this._inboxType = e, this
        },
        toJSON: function () {
          var t = e.InboxQuery.__super__.toJSON.call(this);
          return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t
        }
      }), e.Status.inboxQuery = function (t, n) {
        var r = new e.InboxQuery(e.Status);
        return t && (r._owner = t), n && (r._inboxType = n), r
      }
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = []
  }, function (e, t, n) {
    "use strict";
    var r = n(18),
      i = ["Weapp"].concat(n(42));
    e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")"
  }, function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(5)("cos"),
      o = n(1);
    e.exports = function (e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
      return new o(function (e, o) {
        var u = r("POST", a).field("fileContent", t).field("op", "upload");
        s.onprogress && u.on("progress", s.onprogress), u.end(function (t, r) {
          return r && i(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), o(t)) : void e(n)
        })
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(7),
      i = n(1),
      o = n(5)("qiniu");
    e.exports = function (e, t, n) {
      var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
      var a = e.token;
      return new i(function (e, i) {
        var u = r("POST", "https://up.qbox.me").field("file", t).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
        s.onprogress && u.on("progress", s.onprogress), u.end(function (t, r) {
          return r && o(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, t.response = r.body), i(t)) : void e(n)
        })
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(7);
    n(1);
    e.exports = function (e, t, n) {
      var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new Promise(function (o, s) {
        var a = r("PUT", e.upload_url).set("Content-Type", n.get("mime_type")).send(t);
        i.onprogress && a.on("progress", i.onprogress), a.end(function (e, t) {
          return e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), s(e)) : void o(n)
        })
      })
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = n(2)._request,
      s = n(1),
      a = function () {
        if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
        return new s(function (e, t) {
          wx.login({
            success: function (n) {
              var r = n.code,
                i = n.errMsg;
              r ? e(r) : t(new Error(i))
            }
          })
        })
      };
    e.exports = function (e) {
      e.User = e.Object.extend("_User", {
        _isCurrentUser: !1,
        _mergeMagicFields: function (t) {
          t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t)
        },
        _cleanupAuthData: function () {
          if (this.isCurrent()) {
            var t = this.get("authData");
            t && e._objectEach(this.get("authData"), function (e, n) {
              t[n] || delete t[n]
            })
          }
        },
        _synchronizeAllAuthData: function () {
          var t = this.get("authData");
          if (t) {
            var n = this;
            e._objectEach(this.get("authData"), function (e, t) {
              n._synchronizeAuthData(t)
            })
          }
        },
        _synchronizeAuthData: function (t) {
          if (this.isCurrent()) {
            var n;
            r.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
            var i = this.get("authData");
            if (i && t) {
              var o = t.restoreAuthentication(i[n]);
              o || this._unlinkFrom(t)
            }
          }
        },
        _handleSaveResult: function (t) {
          return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? s.resolve() : s.resolve(e.User._saveCurrentUser(this))
        },
        _linkWith: function (t, n) {
          var i, o = this;
          if (r.isString(t) ? (i = t, t = e.User._authProviders[t]) : i = t.getAuthType(), n) {
            var s = this.get("authData") || {};
            return s[i] = n, this.save({
              authData: s
            }).then(function (e) {
              return e._handleSaveResult(!0).then(function () {
                return e
              })
            })
          }
          return t.authenticate().then(function (e) {
            return o._linkWith(t, e)
          })
        },
        linkWithWeapp: function () {
          var e = this;
          return a().then(function (t) {
            return e._linkWith("lc_weapp", {
              code: t
            })
          })
        },
        _unlinkFrom: function (t) {
          var n = this;
          return r.isString(t) && (t = e.User._authProviders[t]), this._linkWith(t, null).then(function (e) {
            return n._synchronizeAuthData(t), e
          })
        },
        _isLinked: function (e) {
          var t;
          t = r.isString(e) ? e : e.getAuthType();
          var n = this.get("authData") || {};
          return !!n[t]
        },
        logOut: function () {
          this._logOutWithAll(), this._isCurrentUser = !1
        },
        _logOutWithAll: function () {
          var t = this.get("authData");
          if (t) {
            var n = this;
            e._objectEach(this.get("authData"), function (e, t) {
              n._logOutWith(t)
            })
          }
        },
        _logOutWith: function (t) {
          this.isCurrent() && (r.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate())
        },
        signUp: function (e, t) {
          var n, r = e && e.username || this.get("username");
          if (!r || "" === r) throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");
          var o = e && e.password || this.get("password");
          if (!o || "" === o) throw n = new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");
          return this.save(e, t).then(function (e) {
            return e._handleSaveResult(!0).then(function () {
              return e
            })
          })
        },
        signUpOrlogInWithMobilePhone: function (e) {
          var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
          if (!r || "" === r) throw t = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
          var s = e && e.smsCode || this.get("smsCode");
          if (!s || "" === s) throw t = new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
          return n._makeRequest = function (e, t, n, r, i) {
            return o("usersByMobilePhone", null, null, "POST", i)
          }, this.save(e, n).then(function (e) {
            return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function () {
              return e
            })
          })
        },
        logIn: function () {
          var e = this,
            t = o("login", null, null, "POST", this.toJSON());
          return t.then(function (t) {
            var n = e.parse(t);
            return e._finishFetch(n), e._handleSaveResult(!0).then(function () {
              return n.smsCode || delete e.attributes.smsCode, e
            })
          })
        },
        save: function (t, n, i) {
          var o, s;
          return r.isObject(t) || r.isNull(t) || r.isUndefined(t) ? (o = t, s = n) : (o = {}, o[t] = n, s = i), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function (e) {
            return e._handleSaveResult(!1).then(function () {
              return e
            })
          })
        },
        follow: function (e, t) {
          if (!this.id) throw new Error("Please signin.");
          if (!e) throw new Error("Invalid target user.");
          var n = r.isString(e) ? e : e.id;
          if (!n) throw new Error("Invalid target user.");
          var i = "users/" + this.id + "/friendship/" + n,
            s = o(i, null, null, "POST", null, t);
          return s
        },
        unfollow: function (e, t) {
          if (!this.id) throw new Error("Please signin.");
          if (!e) throw new Error("Invalid target user.");
          var n = r.isString(e) ? e : e.id;
          if (!n) throw new Error("Invalid target user.");
          var i = "users/" + this.id + "/friendship/" + n,
            s = o(i, null, null, "DELETE", null, t);
          return s
        },
        followerQuery: function () {
          return e.User.followerQuery(this.id)
        },
        followeeQuery: function () {
          return e.User.followeeQuery(this.id)
        },
        fetch: function (t, n) {
          return e.Object.prototype.fetch.call(this, t, n).then(function (e) {
            return e._handleSaveResult(!1).then(function () {
              return e
            })
          })
        },
        updatePassword: function (e, t, n) {
          var r = "users/" + this.id + "/updatePassword",
            i = {
              old_password: e,
              new_password: t
            },
            s = o(r, null, null, "PUT", i, n);
          return s
        },
        isCurrent: function () {
          return this._isCurrentUser
        },
        getUsername: function () {
          return this.get("username")
        },
        getMobilePhoneNumber: function () {
          return this.get("mobilePhoneNumber")
        },
        setMobilePhoneNumber: function (e, t) {
          return this.set("mobilePhoneNumber", e, t)
        },
        setUsername: function (e, t) {
          return this.set("username", e, t)
        },
        setPassword: function (e, t) {
          return this.set("password", e, t)
        },
        getEmail: function () {
          return this.get("email")
        },
        setEmail: function (e, t) {
          return this.set("email", e, t)
        },
        authenticated: function () {
          return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id
        },
        isAuthenticated: function () {
          var t = this;
          return s.resolve().then(function () {
            return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function () {
              return !0
            }, function (e) {
              if (211 === e.code) return !1;
              throw e
            })
          })
        },
        getSessionToken: function () {
          return this._sessionToken
        },
        refreshSessionToken: function (e) {
          var t = this;
          return o("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function (e) {
            return t._finishFetch(e), t._handleSaveResult(!0).then(function () {
              return t
            })
          })
        },
        getRoles: function (t) {
          return e.Relation.reverseQuery("_Role", "users", this).find(t)
        }
      }, {
          _currentUser: null,
          _currentUserMatchesDisk: !1,
          _CURRENT_USER_KEY: "currentUser",
          _authProviders: {},
          signUp: function (t, n, r, i) {
            r = r || {}, r.username = t, r.password = n;
            var o = e.Object._create("_User");
            return o.signUp(r, i)
          },
          logIn: function (t, n, r) {
            var i = e.Object._create("_User");
            return i._finishFetch({
              username: t,
              password: n
            }), i.logIn(r)
          },
          become: function (e) {
            return this._fetchUserBySessionToken(e).then(function (e) {
              return e._handleSaveResult(!0).then(function () {
                return e
              })
            })
          },
          _fetchUserBySessionToken: function (t) {
            var n = e.Object._create("_User");
            return o("users", "me", null, "GET", {
              session_token: t
            }).then(function (e) {
              var t = n.parse(e);
              return n._finishFetch(t), n
            })
          },
          logInWithMobilePhoneSmsCode: function (t, n, r) {
            var i = e.Object._create("_User");
            return i._finishFetch({
              mobilePhoneNumber: t,
              smsCode: n
            }), i.logIn(r)
          },
          signUpOrlogInWithMobilePhone: function (t, n, r, i) {
            r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n;
            var o = e.Object._create("_User");
            return o.signUpOrlogInWithMobilePhone(r, i)
          },
          logInWithMobilePhone: function (t, n, r) {
            var i = e.Object._create("_User");
            return i._finishFetch({
              mobilePhoneNumber: t,
              password: n
            }), i.logIn(r)
          },
          signUpOrlogInWithAuthData: function (t, n) {
            return e.User._logInWith(n, t)
          },
          loginWithWeapp: function () {
            var e = this;
            return a().then(function (t) {
              return e.signUpOrlogInWithAuthData({
                code: t
              }, "lc_weapp")
            })
          },
          associateWithAuthData: function (e, t, n) {
            return e._linkWith(t, n)
          },
          logOut: function () {
            return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), s.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)))
          },
          followerQuery: function (t) {
            if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
            var n = new e.FriendShipQuery("_Follower");
            return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
          },
          followeeQuery: function (t) {
            if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
            var n = new e.FriendShipQuery("_Followee");
            return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
          },
          requestPasswordReset: function (e) {
            var t = {
              email: e
            },
              n = o("requestPasswordReset", null, null, "POST", t);
            return n
          },
          requestEmailVerify: function (e) {
            var t = {
              email: e
            },
              n = o("requestEmailVerify", null, null, "POST", t);
            return n
          },
          requestMobilePhoneVerify: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
                mobilePhoneNumber: e
              };
            t.validateToken && (n.validate_token = t.validateToken);
            var r = o("requestMobilePhoneVerify", null, null, "POST", n, t);
            return r
          },
          requestPasswordResetBySmsCode: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
                mobilePhoneNumber: e
              };
            t.validateToken && (n.validate_token = t.validateToken);
            var r = o("requestPasswordResetBySmsCode", null, null, "POST", n, t);
            return r
          },
          resetPasswordBySmsCode: function (e, t) {
            var n = {
              password: t
            },
              r = o("resetPasswordBySmsCode", null, e, "PUT", n);
            return r
          },
          verifyMobilePhone: function (e) {
            var t = o("verifyMobilePhone", null, e, "POST", null);
            return t
          },
          requestLoginSmsCode: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = {
                mobilePhoneNumber: e
              };
            t.validateToken && (n.validate_token = t.validateToken);
            var r = o("requestLoginSmsCode", null, null, "POST", n, t);
            return r
          },
          currentAsync: function () {
            return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), s.resolve(null)) : e.User._currentUser ? s.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? s.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function (t) {
              if (!t) return null;
              e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
              var n = JSON.parse(t);
              return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
            })
          },
          current: function () {
            if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
            if (e.User._currentUser) return e.User._currentUser;
            if (e.User._currentUserMatchesDisk) return e.User._currentUser;
            e.User._currentUserMatchesDisk = !0;
            var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
            if (!t) return null;
            e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
            var n = JSON.parse(t);
            return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
          },
          _saveCurrentUser: function (t) {
            var n;
            return n = e.User._currentUser !== t ? e.User.logOut() : s.resolve(), n.then(function () {
              t._isCurrentUser = !0, e.User._currentUser = t;
              var n = t.toJSON();
              return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function () {
                e.User._currentUserMatchesDisk = !0
              })
            })
          },
          _registerAuthenticationProvider: function (t) {
            e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType())
          },
          _logInWith: function (t, n) {
            var r = e.Object._create("_User");
            return r._linkWith(t, n)
          }
        })
    }
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        i = (n(1), {}),
        o = ["getItem", "setItem", "removeItem", "clear"],
        s = t.localStorage;
      try {
        var a = "__storejs__";
        if (s.setItem(a, a), s.getItem(a) != a) throw new Error;
        s.removeItem(a)
      } catch (e) {
        s = n(57)
      }
      r(o).each(function (e) {
        i[e] = function () {
          return s[e].apply(s, arguments)
        }
      }), i.async = !1, e.exports = i
    }).call(t, n(8))
  }, function (e, t, n) {
    "use strict";
    var r = function (e, t) {
      var n;
      e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
      for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
      return new Blob([r], {
        type: t
      })
    };
    e.exports = r
  }, function (e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments)
      }
      return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n = this._callbacks["$" + e];
      if (!n) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;
      for (var r, i = 0; i < n.length; i++)
        if (r = n[i], r === t || r.fn === t) {
          n.splice(i, 1);
          break
        } return this
    }, r.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
        n = this._callbacks["$" + e];
      if (n) {
        n = n.slice(0);
        for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
      }
      return this
    }, r.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length
    }
  }, function (e, t) {
    ! function () {
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        n = {
          rotl: function (e, t) {
            return e << t | e >>> 32 - t
          },
          rotr: function (e, t) {
            return e << 32 - t | e >>> t
          },
          endian: function (e) {
            if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
            for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
            return e
          },
          randomBytes: function (e) {
            for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
            return t
          },
          bytesToWords: function (e) {
            for (var t = [], n = 0, r = 0; n < e.length; n++ , r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
            return t
          },
          wordsToBytes: function (e) {
            for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
            return t
          },
          bytesToHex: function (e) {
            for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
            return t.join("")
          },
          hexToBytes: function (e) {
            for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
            return t
          },
          bytesToBase64: function (e) {
            for (var n = [], r = 0; r < e.length; r += 3)
              for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
            return n.join("")
          },
          base64ToBytes: function (e) {
            e = e.replace(/[^A-Z0-9+\/]/gi, "");
            for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
            return n
          }
        };
      e.exports = n
    }()
  }, function (e, t, n) {
    function r(e) {
      var n, r = 0;
      for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
      return t.colors[Math.abs(r) % t.colors.length]
    }

    function i(e) {
      function n() {
        if (n.enabled) {
          var e = n,
            r = +new Date,
            i = r - (c || r);
          e.diff = i, e.prev = c, e.curr = r, c = r;
          for (var o = new Array(arguments.length), s = 0; s < o.length; s++) o[s] = arguments[s];
          o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
          var a = 0;
          o[0] = o[0].replace(/%([a-zA-Z%])/g, function (n, r) {
            if ("%%" === n) return n;
            a++;
            var i = t.formatters[r];
            if ("function" == typeof i) {
              var s = o[a];
              n = i.call(e, s), o.splice(a, 1), a--
            }
            return n
          }), t.formatArgs.call(e, o);
          var u = n.log || t.log || console.log.bind(console);
          u.apply(e, o)
        }
      }
      return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), "function" == typeof t.init && t.init(n), n
    }

    function o(e) {
      t.save(e), t.names = [], t.skips = [];
      for (var n = ("string" == typeof e ? e : "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && (e = n[i].replace(/\*/g, ".*?"), "-" === e[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
    }

    function s() {
      t.enable("")
    }

    function a(e) {
      var n, r;
      for (n = 0, r = t.skips.length; n < r; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, r = t.names.length; n < r; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }

    function u(e) {
      return e instanceof Error ? e.stack || e.message : e
    }
    t = e.exports = i.debug = i.default = i, t.coerce = u, t.disable = s, t.enable = o, t.enabled = a, t.humanize = n(59), t.names = [], t.skips = [], t.formatters = {};
    var c
  }, function (e, t, n) {
    (function (t) {
      ! function (t, n) {
        e.exports = n()
      }(this, function () {
        "use strict";

        function e(e) {
          return "function" == typeof e || "object" == typeof e && null !== e
        }

        function r(e) {
          return "function" == typeof e
        }

        function i(e) {
          z = e
        }

        function o(e) {
          H = e
        }

        function s() {
          return function () {
            return process.nextTick(h)
          }
        }

        function a() {
          return "undefined" != typeof G ? function () {
            G(h)
          } : l()
        }

        function u() {
          var e = 0,
            t = new Y(h),
            n = document.createTextNode("");
          return t.observe(n, {
            characterData: !0
          }),
            function () {
              n.data = e = ++e % 2
            }
        }

        function c() {
          var e = new MessageChannel;
          return e.port1.onmessage = h,
            function () {
              return e.port2.postMessage(0)
            }
        }

        function l() {
          var e = setTimeout;
          return function () {
            return e(h, 1)
          }
        }

        function h() {
          for (var e = 0; e < K; e += 2) {
            var t = te[e],
              n = te[e + 1];
            t(n), te[e] = void 0, te[e + 1] = void 0
          }
          K = 0
        }

        function f() {
          try {
            var e = n(65);
            return G = e.runOnLoop || e.runOnContext, a()
          } catch (e) {
            return l()
          }
        }

        function d(e, t) {
          var n = arguments,
            r = this,
            i = new this.constructor(_);
          void 0 === i[re] && R(i);
          var o = r._state;
          return o ? ! function () {
            var e = n[o - 1];
            H(function () {
              return k(o, i, e, r._result)
            })
          }() : j(r, i, e, t), i
        }

        function p(e) {
          var t = this;
          if (e && "object" == typeof e && e.constructor === t) return e;
          var n = new t(_);
          return S(n, e), n
        }

        function _() { }

        function v() {
          return new TypeError("You cannot resolve a promise with itself")
        }

        function y() {
          return new TypeError("A promises callback cannot return that same promise.")
        }

        function m(e) {
          try {
            return e.then
          } catch (e) {
            return ae.error = e, ae
          }
        }

        function g(e, t, n, r) {
          try {
            e.call(t, n, r)
          } catch (e) {
            return e
          }
        }

        function b(e, t, n) {
          H(function (e) {
            var r = !1,
              i = g(n, t, function (n) {
                r || (r = !0, t !== n ? S(e, n) : A(e, n))
              }, function (t) {
                r || (r = !0, T(e, t))
              }, "Settle: " + (e._label || " unknown promise"));
            !r && i && (r = !0, T(e, i))
          }, e)
        }

        function w(e, t) {
          t._state === oe ? A(e, t._result) : t._state === se ? T(e, t._result) : j(t, void 0, function (t) {
            return S(e, t)
          }, function (t) {
            return T(e, t)
          })
        }

        function O(e, t, n) {
          t.constructor === e.constructor && n === d && t.constructor.resolve === p ? w(e, t) : n === ae ? (T(e, ae.error), ae.error = null) : void 0 === n ? A(e, t) : r(n) ? b(e, t, n) : A(e, t)
        }

        function S(t, n) {
          t === n ? T(t, v()) : e(n) ? O(t, n, m(n)) : A(t, n)
        }

        function E(e) {
          e._onerror && e._onerror(e._result), N(e)
        }

        function A(e, t) {
          e._state === ie && (e._result = t, e._state = oe, 0 !== e._subscribers.length && H(N, e))
        }

        function T(e, t) {
          e._state === ie && (e._state = se, e._result = t, H(E, e))
        }

        function j(e, t, n, r) {
          var i = e._subscribers,
            o = i.length;
          e._onerror = null, i[o] = t, i[o + oe] = n, i[o + se] = r, 0 === o && e._state && H(N, e)
        }

        function N(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], i = t[s + n], r ? k(n, r, i, o) : i(o);
            e._subscribers.length = 0
          }
        }

        function x() {
          this.error = null
        }

        function C(e, t) {
          try {
            return e(t)
          } catch (e) {
            return ue.error = e, ue
          }
        }

        function k(e, t, n, i) {
          var o = r(n),
            s = void 0,
            a = void 0,
            u = void 0,
            c = void 0;
          if (o) {
            if (s = C(n, i), s === ue ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void T(t, y())
          } else s = i, u = !0;
          t._state !== ie || (o && u ? S(t, s) : c ? T(t, a) : e === oe ? A(t, s) : e === se && T(t, s))
        }

        function U(e, t) {
          try {
            t(function (t) {
              S(e, t)
            }, function (t) {
              T(e, t)
            })
          } catch (t) {
            T(e, t)
          }
        }

        function I() {
          return ce++
        }

        function R(e) {
          e[re] = ce++ , e._state = void 0, e._result = void 0, e._subscribers = []
        }

        function P(e, t) {
          this._instanceConstructor = e, this.promise = new e(_), this.promise[re] || R(this.promise), Q(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && A(this.promise, this._result))) : T(this.promise, D())
        }

        function D() {
          return new Error("Array Methods must be provided an Array")
        }

        function L(e) {
          return new P(this, e).promise
        }

        function q(e) {
          var t = this;
          return new t(Q(e) ? function (n, r) {
            for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r)
          } : function (e, t) {
            return t(new TypeError("You must pass an array to race."))
          })
        }

        function M(e) {
          var t = this,
            n = new t(_);
          return T(n, e), n
        }

        function F() {
          throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function J() {
          throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function B(e) {
          this[re] = I(), this._result = this._state = void 0, this._subscribers = [], _ !== e && ("function" != typeof e && F(), this instanceof B ? U(this, e) : J())
        }

        function W() {
          var e = void 0;
          if ("undefined" != typeof t) e = t;
          else if ("undefined" != typeof self) e = self;
          else try {
            e = Function("return this")()
          } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
          }
          var n = e.Promise;
          if (n) {
            var r = null;
            try {
              r = Object.prototype.toString.call(n.resolve())
            } catch (e) { }
            if ("[object Promise]" === r && !n.cast) return
          }
          e.Promise = B
        }
        var V = void 0;
        V = Array.isArray ? Array.isArray : function (e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        };
        var Q = V,
          K = 0,
          G = void 0,
          z = void 0,
          H = function (e, t) {
            te[K] = e, te[K + 1] = t, K += 2, 2 === K && (z ? z(h) : ne())
          },
          $ = "undefined" != typeof window ? window : void 0,
          X = $ || {},
          Y = X.MutationObserver || X.WebKitMutationObserver,
          Z = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
          ee = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
          te = new Array(1e3),
          ne = void 0;
        ne = Z ? s() : Y ? u() : ee ? c() : void 0 === $ ? f() : l();
        var re = Math.random().toString(36).substring(16),
          ie = void 0,
          oe = 1,
          se = 2,
          ae = new x,
          ue = new x,
          ce = 0;
        return P.prototype._enumerate = function () {
          for (var e = this.length, t = this._input, n = 0; this._state === ie && n < e; n++) this._eachEntry(t[n], n)
        }, P.prototype._eachEntry = function (e, t) {
          var n = this._instanceConstructor,
            r = n.resolve;
          if (r === p) {
            var i = m(e);
            if (i === d && e._state !== ie) this._settledAt(e._state, t, e._result);
            else if ("function" != typeof i) this._remaining-- , this._result[t] = e;
            else if (n === B) {
              var o = new n(_);
              O(o, e, i), this._willSettleAt(o, t)
            } else this._willSettleAt(new n(function (t) {
              return t(e)
            }), t)
          } else this._willSettleAt(r(e), t)
        }, P.prototype._settledAt = function (e, t, n) {
          var r = this.promise;
          r._state === ie && (this._remaining-- , e === se ? T(r, n) : this._result[t] = n), 0 === this._remaining && A(r, this._result)
        }, P.prototype._willSettleAt = function (e, t) {
          var n = this;
          j(e, void 0, function (e) {
            return n._settledAt(oe, t, e)
          }, function (e) {
            return n._settledAt(se, t, e)
          })
        }, B.all = L, B.race = q, B.resolve = p, B.reject = M, B._setScheduler = i, B._setAsap = o, B._asap = H, B.prototype = {
          constructor: B,
          then: d,
          catch: function (e) {
            return this.then(null, e)
          }
        }, B.polyfill = W, B.Promise = B, B
      })
    }).call(t, n(8))
  }, function (e, t, n) {
    "use strict";

    function r(e, t) {
      for (var n = e[s][t]; null != n;) {
        if (n.kind === a) return n.listener;
        n = n.next
      }
      return null
    }

    function i(e, t, n) {
      "function" != typeof n && "object" != typeof n && (n = null);
      for (var r = null, i = e[s][t]; null != i;) i.kind === a ? null == r ? e[s][t] = i.next : r.next = i.next : r = i, i = i.next;
      null != n && (null == r ? e[s][t] = u(n, a) : r.next = u(n, a))
    }
    var o = n(10),
      s = o.LISTENERS,
      a = o.ATTRIBUTE,
      u = o.newNode;
    t.defineCustomEventTarget = function (e, t) {
      function n() {
        e.call(this)
      }
      var o = {
        constructor: {
          value: n,
          configurable: !0,
          writable: !0
        }
      };
      return t.forEach(function (e) {
        o["on" + e] = {
          get: function () {
            return r(this, e)
          },
          set: function (t) {
            i(this, e, t)
          },
          configurable: !0,
          enumerable: !0
        }
      }), n.prototype = Object.create(e.prototype, o), n
    }
  }, function (e, t, n) {
    "use strict";
    var r = n(10).createUniqueKey,
      i = r("stop_immediate_propagation_flag"),
      o = r("canceled_flag"),
      s = r("original_event"),
      a = Object.freeze({
        stopPropagation: Object.freeze({
          value: function () {
            var e = this[s];
            "function" == typeof e.stopPropagation && e.stopPropagation()
          },
          writable: !0,
          configurable: !0
        }),
        stopImmediatePropagation: Object.freeze({
          value: function () {
            this[i] = !0;
            var e = this[s];
            "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation()
          },
          writable: !0,
          configurable: !0
        }),
        preventDefault: Object.freeze({
          value: function () {
            this.cancelable === !0 && (this[o] = !0);
            var e = this[s];
            "function" == typeof e.preventDefault && e.preventDefault()
          },
          writable: !0,
          configurable: !0
        }),
        defaultPrevented: Object.freeze({
          get: function () {
            return this[o]
          },
          enumerable: !0,
          configurable: !0
        })
      });
    t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function (e, t) {
      var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(),
        r = {
          type: {
            value: e.type,
            enumerable: !0
          },
          target: {
            value: t,
            enumerable: !0
          },
          currentTarget: {
            value: t,
            enumerable: !0
          },
          eventPhase: {
            value: 2,
            enumerable: !0
          },
          bubbles: {
            value: Boolean(e.bubbles),
            enumerable: !0
          },
          cancelable: {
            value: Boolean(e.cancelable),
            enumerable: !0
          },
          timeStamp: {
            value: n,
            enumerable: !0
          },
          isTrusted: {
            value: !1,
            enumerable: !0
          }
        };
      return r[i] = {
        value: !1,
        writable: !0
      }, r[o] = {
        value: !1,
        writable: !0
      }, r[s] = {
        value: e
      }, "undefined" != typeof e.detail && (r.detail = {
        value: e.detail,
        enumerable: !0
      }), Object.create(Object.create(e, a), r)
    }
  }, function (e, t) {
    function n(e) {
      return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function r(e) {
      return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
    }
    e.exports = function (e) {
      return null != e && (n(e) || r(e) || !!e._isBuffer)
    }
  }, function (e, t, n) {
    ! function (t) {
      var n = {},
        r = {};
      n.length = 0, n.getItem = function (e) {
        return r[e] || null
      }, n.setItem = function (e, t) {
        "undefined" == typeof t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++ , r[e] = "" + t)
      }, n.removeItem = function (e) {
        r.hasOwnProperty(e) && (delete r[e], n.length--)
      }, n.key = function (e) {
        return Object.keys(r)[e] || null
      }, n.clear = function () {
        r = {}, n.length = 0
      }, e.exports = n
    }(this)
  }, function (e, t, n) {
    ! function () {
      var t = n(51),
        r = n(19).utf8,
        i = n(56),
        o = n(19).bin,
        s = function (e, n) {
          e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
          for (var a = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
          a[u >>> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
          for (var p = s._ff, _ = s._gg, v = s._hh, y = s._ii, d = 0; d < a.length; d += 16) {
            var m = c,
              g = l,
              b = h,
              w = f;
            c = p(c, l, h, f, a[d + 0], 7, -680876936), f = p(f, c, l, h, a[d + 1], 12, -389564586), h = p(h, f, c, l, a[d + 2], 17, 606105819), l = p(l, h, f, c, a[d + 3], 22, -1044525330), c = p(c, l, h, f, a[d + 4], 7, -176418897), f = p(f, c, l, h, a[d + 5], 12, 1200080426), h = p(h, f, c, l, a[d + 6], 17, -1473231341), l = p(l, h, f, c, a[d + 7], 22, -45705983), c = p(c, l, h, f, a[d + 8], 7, 1770035416), f = p(f, c, l, h, a[d + 9], 12, -1958414417), h = p(h, f, c, l, a[d + 10], 17, -42063), l = p(l, h, f, c, a[d + 11], 22, -1990404162), c = p(c, l, h, f, a[d + 12], 7, 1804603682), f = p(f, c, l, h, a[d + 13], 12, -40341101), h = p(h, f, c, l, a[d + 14], 17, -1502002290), l = p(l, h, f, c, a[d + 15], 22, 1236535329), c = _(c, l, h, f, a[d + 1], 5, -165796510), f = _(f, c, l, h, a[d + 6], 9, -1069501632), h = _(h, f, c, l, a[d + 11], 14, 643717713), l = _(l, h, f, c, a[d + 0], 20, -373897302), c = _(c, l, h, f, a[d + 5], 5, -701558691), f = _(f, c, l, h, a[d + 10], 9, 38016083), h = _(h, f, c, l, a[d + 15], 14, -660478335), l = _(l, h, f, c, a[d + 4], 20, -405537848), c = _(c, l, h, f, a[d + 9], 5, 568446438), f = _(f, c, l, h, a[d + 14], 9, -1019803690), h = _(h, f, c, l, a[d + 3], 14, -187363961), l = _(l, h, f, c, a[d + 8], 20, 1163531501), c = _(c, l, h, f, a[d + 13], 5, -1444681467), f = _(f, c, l, h, a[d + 2], 9, -51403784), h = _(h, f, c, l, a[d + 7], 14, 1735328473), l = _(l, h, f, c, a[d + 12], 20, -1926607734), c = v(c, l, h, f, a[d + 5], 4, -378558), f = v(f, c, l, h, a[d + 8], 11, -2022574463), h = v(h, f, c, l, a[d + 11], 16, 1839030562), l = v(l, h, f, c, a[d + 14], 23, -35309556), c = v(c, l, h, f, a[d + 1], 4, -1530992060), f = v(f, c, l, h, a[d + 4], 11, 1272893353), h = v(h, f, c, l, a[d + 7], 16, -155497632), l = v(l, h, f, c, a[d + 10], 23, -1094730640), c = v(c, l, h, f, a[d + 13], 4, 681279174), f = v(f, c, l, h, a[d + 0], 11, -358537222), h = v(h, f, c, l, a[d + 3], 16, -722521979), l = v(l, h, f, c, a[d + 6], 23, 76029189), c = v(c, l, h, f, a[d + 9], 4, -640364487), f = v(f, c, l, h, a[d + 12], 11, -421815835), h = v(h, f, c, l, a[d + 15], 16, 530742520), l = v(l, h, f, c, a[d + 2], 23, -995338651), c = y(c, l, h, f, a[d + 0], 6, -198630844), f = y(f, c, l, h, a[d + 7], 10, 1126891415), h = y(h, f, c, l, a[d + 14], 15, -1416354905), l = y(l, h, f, c, a[d + 5], 21, -57434055), c = y(c, l, h, f, a[d + 12], 6, 1700485571), f = y(f, c, l, h, a[d + 3], 10, -1894986606), h = y(h, f, c, l, a[d + 10], 15, -1051523), l = y(l, h, f, c, a[d + 1], 21, -2054922799), c = y(c, l, h, f, a[d + 8], 6, 1873313359), f = y(f, c, l, h, a[d + 15], 10, -30611744), h = y(h, f, c, l, a[d + 6], 15, -1560198380), l = y(l, h, f, c, a[d + 13], 21, 1309151649), c = y(c, l, h, f, a[d + 4], 6, -145523070), f = y(f, c, l, h, a[d + 11], 10, -1120210379), h = y(h, f, c, l, a[d + 2], 15, 718787259), l = y(l, h, f, c, a[d + 9], 21, -343485551), c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0
          }
          return t.endian([c, l, h, f])
        };
      s._ff = function (e, t, n, r, i, o, s) {
        var a = e + (t & n | ~t & r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._gg = function (e, t, n, r, i, o, s) {
        var a = e + (t & r | n & ~r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._hh = function (e, t, n, r, i, o, s) {
        var a = e + (t ^ n ^ r) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._ii = function (e, t, n, r, i, o, s) {
        var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
        return (a << o | a >>> 32 - o) + t
      }, s._blocksize = 16, s._digestsize = 16, e.exports = function (e, n) {
        if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
        var r = t.wordsToBytes(s(e, n));
        return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
      }
    }()
  }, function (e, t) {
    function n(e) {
      if (e = String(e), !(e.length > 1e4)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
          var n = parseFloat(t[1]),
            r = (t[2] || "ms").toLowerCase();
          switch (r) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * l;
            case "days":
            case "day":
            case "d":
              return n * c;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * u;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * a;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return
          }
        }
      }
    }

    function r(e) {
      return e >= c ? Math.round(e / c) + "d" : e >= u ? Math.round(e / u) + "h" : e >= a ? Math.round(e / a) + "m" : e >= s ? Math.round(e / s) + "s" : e + "ms"
    }

    function i(e) {
      return o(e, c, "day") || o(e, u, "hour") || o(e, a, "minute") || o(e, s, "second") || e + " ms"
    }

    function o(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    var s = 1e3,
      a = 60 * s,
      u = 60 * a,
      c = 24 * u,
      l = 365.25 * c;
    e.exports = function (e, t) {
      t = t || {};
      var o = typeof e;
      if ("string" === o && e.length > 0) return n(e);
      if ("number" === o && isNaN(e) === !1) return t.long ? i(e) : r(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    function r(e) {
      var t = i(e) ? Object.prototype.toString.call(e) : "";
      return "[object Function]" === t
    }
    var i = n(11);
    e.exports = r
  }, function (e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(11);
    e.exports = r, r.prototype.clearTimeout = function () {
      return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, this
    }, r.prototype.parse = function (e) {
      return this._parser = e, this
    }, r.prototype.responseType = function (e) {
      return this._responseType = e, this
    }, r.prototype.serialize = function (e) {
      return this._serializer = e, this
    }, r.prototype.timeout = function (e) {
      if (!e || "object" != typeof e) return this._timeout = e, this._responseTimeout = 0, this;
      for (var t in e) switch (t) {
        case "deadline":
          this._timeout = e.deadline;
          break;
        case "response":
          this._responseTimeout = e.response;
          break;
        default:
          console.warn("Unknown timeout option", t)
      }
      return this
    }, r.prototype.retry = function (e) {
      return 0 !== arguments.length && e !== !0 || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this
    }, r.prototype._retry = function () {
      return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this._end()
    }, r.prototype.then = function (e, t) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise(function (e, t) {
          n.end(function (n, r) {
            n ? t(n) : e(r)
          })
        })
      }
      return this._fullfilledPromise.then(e, t)
    }, r.prototype.catch = function (e) {
      return this.then(void 0, e)
    }, r.prototype.use = function (e) {
      return e(this), this
    }, r.prototype.ok = function (e) {
      if ("function" != typeof e) throw Error("Callback required");
      return this._okCallback = e, this
    }, r.prototype._isResponseOK = function (e) {
      return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
    }, r.prototype.get = function (e) {
      return this._header[e.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function (e, t) {
      if (o(e)) {
        for (var n in e) this.set(n, e[n]);
        return this
      }
      return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, r.prototype.unset = function (e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, r.prototype.field = function (e, t) {
      if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
      if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), o(e)) {
        for (var n in e) this.field(n, e[n]);
        return this
      }
      if (Array.isArray(t)) {
        for (var r in t) this.field(e, t[r]);
        return this
      }
      if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
    }, r.prototype.abort = function () {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype.withCredentials = function (e) {
      return void 0 == e && (e = !0), this._withCredentials = e, this
    }, r.prototype.redirects = function (e) {
      return this._maxRedirects = e, this
    }, r.prototype.toJSON = function () {
      return {
        method: this.method,
        url: this.url,
        data: this._data,
        headers: this._header
      }
    }, r.prototype.send = function (e) {
      var t = o(e),
        n = this._header["content-type"];
      if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
      else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
      if (t && o(this._data))
        for (var r in e) this._data[r] = e[r];
      else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
      return !t || this._isHost(e) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function (e) {
      return this._sort = "undefined" == typeof e || e, this
    }, r.prototype._timeoutError = function (e, t, n) {
      if (!this._aborted) {
        var r = new Error(e + t + "ms exceeded");
        r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), this.callback(r)
      }
    }, r.prototype._setTimeouts = function () {
      var e = this;
      this._timeout && !this._timer && (this._timer = setTimeout(function () {
        e._timeoutError("Timeout of ", e._timeout, "ETIME")
      }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function () {
        e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
      }, this._responseTimeout))
    }
  }, function (e, t, n) {
    function r(e) {
      if (e) return i(e)
    }

    function i(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }
    var o = n(64);
    e.exports = r, r.prototype.get = function (e) {
      return this.header[e.toLowerCase()]
    }, r.prototype._setHeaderProperties = function (e) {
      var t = e["content-type"] || "";
      this.type = o.type(t);
      var n = o.params(t);
      for (var r in n) this[r] = n[r];
      this.links = {};
      try {
        e.link && (this.links = o.parseLinks(e.link))
      } catch (e) { }
    }, r.prototype._setStatusProperties = function (e) {
      var t = e / 100 | 0;
      this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, this.notFound = 404 == e
    }
  }, function (e, t) {
    var n = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
    e.exports = function (e, t) {
      return !!(e && e.code && ~n.indexOf(e.code)) || (!!(t && t.status && t.status >= 500) || (!!(e && "timeout" in e && "ECONNABORTED" == e.code) || !!(e && "crossDomain" in e)))
    }
  }, function (e, t) {
    t.type = function (e) {
      return e.split(/ *; */).shift()
    }, t.params = function (e) {
      return e.split(/ *; */).reduce(function (e, t) {
        var n = t.split(/ *= */),
          r = n.shift(),
          i = n.shift();
        return r && i && (e[r] = i), e
      }, {})
    }, t.parseLinks = function (e) {
      return e.split(/ *, */).reduce(function (e, t) {
        var n = t.split(/ *; */),
          r = n[0].slice(1, -1),
          i = n[1].split(/ *= */)[1].slice(1, -1);
        return e[i] = r, e
      }, {})
    }, t.cleanHeader = function (e, t) {
      return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && delete e.cookie, e
    }
  }, function (e, t) { }])
});