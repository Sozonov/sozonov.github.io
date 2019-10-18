(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  [
    function(e, n) {
      !(function(n) {
        var t = [],
          o = "undefined" !== typeof n && !n.AndroidBridge && !n.webkit,
          p = o ? "message" : "VKWebAppEvent";
        "undefined" !== typeof n &&
          (n.CustomEvent ||
            (function() {
              function e(e, n) {
                n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
                var t = document.createEvent("CustomEvent");
                return t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), t;
              }
              (e.prototype = n.Event.prototype), (n.CustomEvent = e);
            })(),
          n.addEventListener(p, function() {
            var e = Array.prototype.slice.call(arguments),
              n = t.slice();
            o
              ? n.forEach(function(n) {
                  n({ detail: e[0].data });
                })
              : n.forEach(function(n) {
                  n.apply(null, e);
                });
          })),
          (e.exports = {
            send: function(e, t) {
              t || (t = {});
              var o = "undefined" !== typeof n,
                p = o && n.AndroidBridge,
                i = o && n.webkit && n.webkit.messageHandlers,
                s = !p && !i;
              p && "function" == typeof p[e] && p[e](JSON.stringify(t)),
                i && i[e] && "function" == typeof i[e].postMessage && i[e].postMessage(t),
                s && parent.postMessage({ handler: e, params: t, type: "vk-connect" }, "*");
            },
            subscribe: function(e) {
              t.push(e);
            },
            unsubscribe: function(e) {
              var n = t.indexOf(e);
              n > -1 && t.splice(n, 1);
            },
            supports: function(e) {
              var t = "undefined" !== typeof n,
                o = t && n.AndroidBridge,
                p = t && n.webkit && n.webkit.messageHandlers;
              return (
                !(!o || "function" != typeof o[e]) ||
                (!(!p || !p[e] || "function" != typeof p[e].postMessage) ||
                  !(
                    p ||
                    o ||
                    !~[
                      "VKWebAppGetAuthToken",
                      "VKWebAppCallAPIMethod",
                      "VKWebAppGetGeodata",
                      "VKWebAppGetUserInfo",
                      "VKWebAppGetPhoneNumber",
                      "VKWebAppGetClientVersion",
                      "VKWebAppOpenPayForm",
                      "VKWebAppShare",
                      "VKWebAppAllowNotifications",
                      "VKWebAppDenyNotifications",
                      "VKWebAppShowWallPostBox",
                      "VKWebAppGetEmail",
                      "VKWebAppAllowMessagesFromGroup",
                      "VKWebAppJoinGroup",
                      "VKWebAppOpenApp",
                      "VKWebAppSetLocation",
                      "VKWebAppScroll",
                      "VKWebAppResizeWindow",
                    ].indexOf(e)
                  ))
              );
            },
          });
      })(window);
    },
    function(e, n, t) {
      e.exports = t(2);
    },
    function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        p = t.n(o);
      console.info("!!!", p.a), (window.vkConnect = p.a), console.info("window.connect", p.a);
    },
  ],
  [[1, 1]],
]);
//# sourceMappingURL=main.3e94459f.chunk.js.map
