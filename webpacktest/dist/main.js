(() => {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      e &&
        (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        r.push.apply(r, o);
    }
    return r;
  }
  function r(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = null != arguments[o] ? arguments[o] : {};
      o % 2
        ? e(Object(n), !0).forEach(function (e) {
            var o, i, c, u;
            (o = r),
              (i = e),
              (c = n[e]),
              (u = (function (e, r) {
                if ("object" != t(e) || !e) return e;
                var o = e[Symbol.toPrimitive];
                if (void 0 !== o) {
                  var n = o.call(e, "string");
                  if ("object" != t(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(e);
              })(i)),
              (i = "symbol" == t(u) ? u : String(u)) in o
                ? Object.defineProperty(o, i, {
                    value: c,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (o[i] = c);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n))
        : e(Object(n)).forEach(function (t) {
            Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return r;
  }
  var o;
  console.log(3), console.log((
    (o = { b: 2 }), 
    r(r({}, { a: 1 }), o)
    ));
})();
//# sourceMappingURL=main.js.map
