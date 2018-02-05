/*

https://images.apple.com/v/home/dn/built/scripts/main.built.js

*/

(function e(h, j, l) {
    function m(a, c) {
        if (!j[a]) {
            if (!h[a]) {
                var d = typeof require == "function" && require;
                if (!c && d) {
                    return d(a, !0)
                }
                if (i) {
                    return i(a, !0)
                }
                var b = new Error("Cannot find module '" + a + "'");
                throw b.code = "MODULE_NOT_FOUND",
                b
            }
            var f = j[a] = {
                exports: {}
            };
            h[a][0].call(f.exports, function (g) {
                var n = h[a][1][g];
                return m(n
                    ? n
                    : g)
            }, f, f.exports, e, h, j, l)
        }
        return j[a].exports
    }
    var i = typeof require == "function" && require;
    for (var k = 0; k < l.length; k++) {
        m(l[k])
    }
    return m
})({
    1: [
        function (i, h, g) {
            var f = function () {
                var s = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
                var u = {
                    "animation-delay": "transitionend",
                    "-o-animation-delay": "oTransitionEnd",
                    "-moz-animation-delay": "transitionend",
                    "-webkit-animation-delay": "webkitTransitionEnd",
                    "-ms-animation-delay": "transitionend"
                };
                var d = {
                    "animation-delay": "animationstart",
                    "-o-animation-delay": "oanimationstart",
                    "-moz-animation-delay": "animationstart",
                    "-webkit-animation-delay": "webkitAnimationStart",
                    "-ms-animation-delay": "MSAnimationStart"
                };
                var r = {
                    "animation-delay": "animationiteration",
                    "-o-animation-delay": "oanimationiteration",
                    "-moz-animation-delay": "animationiteration",
                    "-webkit-animation-delay": "webkitAnimationIteration",
                    "-ms-animation-delay": "MSAnimationIteration"
                };
                var a = {
                    "animation-delay": "animationend",
                    "-o-animation-delay": "oanimationend",
                    "-moz-animation-delay": "animationend",
                    "-webkit-animation-delay": "webkitAnimationEnd",
                    "-ms-animation-delay": "MSAnimationEnd"
                };
                var t = document.createElement("_");
                var q = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
                function b(j) {
                    for (var l = 0; l < q.length; l++) {
                        var k = s[l] + j;
                        if (t.style[k] !== undefined) {
                            return k
                        }
                    }
                    return undefined
                }
                var c = ["-webkit-", "", "-moz-", "-o-", "-ms-"];
                function p(j) {
                    for (var l = 0; l < c.length; l++) {
                        var k = c[l] + j;
                        if (t.style[k] !== undefined) {
                            return k
                        }
                    }
                    return undefined
                }
                return {
                    filter: p("filter"),
                    transform: b("transform"),
                    transformOrigin: b("transform-origin"),
                    transition: b("transition"),
                    transitionDelay: b("transition-delay"),
                    transitionDuration: b("transition-duration"),
                    transitionProperty: b("transition-property"),
                    transitionTimingFunction: b("transition-timing-function"),
                    transitionEnd: u[b("animation-delay")],
                    animation: b("animation"),
                    animationDelay: b("animation-delay"),
                    animationDirection: b("animation-direction"),
                    animationDuration: b("animation-duration"),
                    animationFillMode: b("animation-fill-mode"),
                    animationIterationCount: b("animation-iteration-count"),
                    animationName: b("animation-name"),
                    animationTimingFunction: b("animation-timing-function"),
                    animationPlayState: b("animation-play-state"),
                    animationStart: d[b("animation-delay")],
                    animationIteration: r[b("animation-delay")],
                    animationEnd: a[b("animation-delay")]
                }
            }();
            h.exports = f
        }, {}
    ],
    2: [
        function (d, g, f) {
            g.exports = {
                path: d("./ac-path/path")
            }
        }, {
            "./ac-path/path": 3
        }
    ],
    3: [
        function (g, k, h) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            function i(a) {
                return i.parse(a)
            }
            i.basename = function (c, d) {
                i._assertStr(c);
                var a;
                var b = c.match(/[^/]*$/)[0];
                if (d) {
                    a = b.match(new RegExp("(.*)" + d + "$"));
                    if (a) {
                        b = a[1]
                    }
                }
                return b
            };
            i.dirname = function (a) {
                i._assertStr(a);
                var b = a.match(/^(.*)\b\/|.*/);
                return b[1] || a
            };
            i.extname = function (b) {
                i._assertStr(b);
                var a = b.match(/\.[^.]*$/);
                return a
                    ? a[0]
                    : ""
            };
            i.filename = function (a) {
                i._assertStr(a);
                return i.basename(a, i.extname(a))
            };
            i.format = function (b, a) {
                i._assertObj(b);
                var c = b.dirname
                    ? b.dirname + "/"
                    : "";
                if (b.basename) {
                    c += b.basename
                } else {
                    if (b.filename) {
                        c += b.filename;
                        if (b.extname) {
                            c += b.extname
                        }
                    }
                }
                if (a) {
                    if (typeof a === "string") {
                        c += "?" + a
                    } else {
                        if (Object.prototype.toString.call(a) === Object.prototype.toString.call([])) {
                            c += "?" + a.join("&")
                        }
                    }
                }
                return c
            };
            i.isAbsolute = function (a) {
                i._assertStr(a);
                return !!a.match(/(^http(s?))/)
            };
            i.isRootRelative = function (a) {
                i._assertStr(a);
                return !!a.match(/^\/(?!\/)/)
            };
            i.parse = function (a) {
                i._assertStr(a);
                return {
                    dirname: i.dirname(a),
                    basename: i.basename(a),
                    filename: i.filename(a),
                    extname: i.extname(a)
                }
            };
            i._assertStr = function (a) {
                i._assertType(a, "string")
            };
            i._assertObj = function (a) {
                i._assertType(a, "object")
            };
            i._assertType = function (a, c) {
                var b = typeof a === "undefined"
                    ? "undefined"
                    : j(a);
                if (b === "undefined" || b !== c) {
                    throw new TypeError("path param must be of type " + c)
                }
            };
            k.exports = i
        }, {}
    ],
    4: [
        function (d, g, f) {
            g.exports = {
                cname: d("./ac-cname/cname")
            }
        }, {
            "./ac-cname/cname": 5
        }
    ],
    5: [
        function (k, j, h) {
            var i = k("ac-path").path;
            function g(a) {
                return g.addPrefix(a)
            }
            g._prefix = function () {
                var a = "https://images.apple.com/global/elements/blank.gif";
                return a.replace(/global\/.*/, "")
            }();
            g.addPrefix = function (a) {
                if (i.isAbsolute(a)) {
                    return a
                }
                g._assertRootRelative(a);
                a = g._prefix + a.replace(/^\//, "");
                if (a.indexOf("/105/") > 0) {
                    a = a.replace("/105/", "/")
                }
                return a
            };
            g.formatUrl = function (c, m, a, b) {
                var d = i.format({
                    dirname: c,
                    filename: m,
                    extname: a
                }, b);
                if (i.isAbsolute(d)) {
                    return d
                }
                g._assertRootRelative(c);
                var f = g.addPrefix(d);
                return f
            };
            g._assertRootRelative = function (a) {
                if (!i.isRootRelative(a)) {
                    throw new URIError("Only root-relative paths are currently supported")
                }
            };
            j.exports = g
        }, {
            "ac-path": 2
        }
    ],
    6: [
        function (p, r, o) {
            var n = p("./utils/eventTypeAvailable");
            var k = p("./shared/camelCasedEventTypes");
            var q = p("./shared/windowFallbackEventTypes");
            var m = p("./shared/prefixHelper");
            var s = {};
            r.exports = function l(a, b) {
                var f;
                var d;
                var c;
                b = b || "div";
                a = a.toLowerCase();
                if (!(b in s)) {
                    s[b] = {}
                }
                d = s[b];
                if (a in d) {
                    return d[a]
                }
                if (n(a, b)) {
                    return d[a] = a
                }
                if (a in k) {
                    for (c = 0; c < k[a].length; c++) {
                        f = k[a][c];
                        if (n(f.toLowerCase(), b)) {
                            return d[a] = f
                        }
                    }
                }
                for (c = 0; c < m.evt.length; c++) {
                    f = m.evt[c] + a;
                    if (n(f, b)) {
                        m.reduce(c);
                        return d[a] = f
                    }
                }
                if (b !== "window" && q.indexOf(a)) {
                    return d[a] = l(a, "window")
                }
                return d[a] = false
            }
        }, {
            "./shared/camelCasedEventTypes": 7,
            "./shared/prefixHelper": 8,
            "./shared/windowFallbackEventTypes": 9,
            "./utils/eventTypeAvailable": 10
        }
    ],
    7: [
        function (d, g, f) {
            g.exports = {
                transitionend: [
                    "webkitTransitionEnd", "MSTransitionEnd"
                ],
                animationstart: [
                    "webkitAnimationStart", "MSAnimationStart"
                ],
                animationend: [
                    "webkitAnimationEnd", "MSAnimationEnd"
                ],
                animationiteration: [
                    "webkitAnimationIteration", "MSAnimationIteration"
                ],
                fullscreenchange: ["MSFullscreenChange"],
                fullscreenerror: ["MSFullscreenError"]
            }
        }, {}
    ],
    8: [
        function (j, p, k) {
            var l = ["-webkit-", "-moz-", "-ms-"];
            var o = ["Webkit", "Moz", "ms"];
            var m = ["webkit", "moz", "ms"];
            var q = function q() {
                this.initialize()
            };
            var n = q.prototype;
            n.initialize = function () {
                this.reduced = false;
                this.css = l;
                this.dom = o;
                this.evt = m
            };
            n.reduce = function (a) {
                if (!this.reduced) {
                    this.reduced = true;
                    this.css = [this.css[a]];
                    this.dom = [this.dom[a]];
                    this.evt = [this.evt[a]]
                }
            };
            p.exports = new q()
        }, {}
    ],
    9: [
        function (d, g, f) {
            g.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
        }, {}
    ],
    10: [
        function (k, i, g) {
            var h = {
                window: window,
                document: document
            };
            i.exports = function j(a, c) {
                var b;
                a = "on" + a;
                if (!(c in h)) {
                    h[c] = document.createElement(c)
                }
                b = h[c];
                if (a in b) {
                    return true
                }
                if ("setAttribute" in b) {
                    b.setAttribute(a, "return;");
                    return typeof b[a] === "function"
                }
                return false
            }
        }, {}
    ],
    11: [
        function (d, g, f) {
            g.exports = {
                addEventListener: d("./addEventListener"),
                dispatchEvent: d("./dispatchEvent"),
                removeEventListener: d("./removeEventListener")
            }
        }, {
            "./addEventListener": 12,
            "./dispatchEvent": 13,
            "./removeEventListener": 14
        }
    ],
    12: [
        function (k, j, g) {
            var h = k("./shared/getEventType");
            j.exports = function i(a, c, b, d) {
                c = h(a, c);
                d = d || false;
                a.addEventListener(c, b, d)
            }
        }, {
            "./shared/getEventType": 15
        }
    ],
    13: [
        function (k, j, g) {
            var h = k("./shared/getEventType");
            j.exports = function i(a, b, c) {
                var d;
                b = h(a, b);
                d = c
                    ? new CustomEvent(b, c)
                    : new CustomEvent(b);
                a.dispatchEvent(d)
            }
        }, {
            "./shared/getEventType": 15
        }
    ],
    14: [
        function (k, j, g) {
            var h = k("./shared/getEventType");
            j.exports = function i(a, c, b, d) {
                c = h(a, c);
                d = d || false;
                a.removeEventListener(c, b, d)
            }
        }, {
            "./shared/getEventType": 15
        }
    ],
    15: [
        function (k, i, g) {
            var j = k("@marcom/ac-prefixer/getEventType");
            i.exports = function h(a, b) {
                var c;
                var d;
                if ("tagName" in a) {
                    c = a.tagName
                } else {
                    if (a === window) {
                        c = "window"
                    } else {
                        c = "document"
                    }
                }
                d = j(b, c);
                return d || b
            }
        }, {
            "@marcom/ac-prefixer/getEventType": 6
        }
    ],
    16: [
        function (i, h, f) {
            h.exports = function g(c, a) {
                var b;
                if (a) {
                    b = c.getBoundingClientRect();
                    return {width: b.width, height: b.height}
                }
                return {width: c.offsetWidth, height: c.offsetHeight}
            }
        }, {}
    ],
    17: [
        function (m, l, n) {
            var o = m("./getDimensions");
            var i = m("./getScrollX");
            var j = m("./getScrollY");
            l.exports = function k(f, g) {
                var c;
                var a;
                var b;
                var d;
                if (g) {
                    c = f.getBoundingClientRect();
                    a = i();
                    b = j();
                    return {
                        top: c.top + b,
                        right: c.right + a,
                        bottom: c.bottom + b,
                        left: c.left + a
                    }
                }
                d = o(f, g);
                c = {
                    top: f.offsetTop,
                    left: f.offsetLeft,
                    width: d.width,
                    height: d.height
                };
                while (f = f.offsetParent) {
                    c.top += f.offsetTop;
                    c.left += f.offsetLeft
                }
                return {
                    top: c.top,
                    right: c.left + c.width,
                    bottom: c.top + c.height,
                    left: c.left
                }
            }
        }, {
            "./getDimensions": 16,
            "./getScrollX": 18,
            "./getScrollY": 19
        }
    ],
    18: [
        function (i, h, f) {
            h.exports = function g(a) {
                a = a || window;
                if (a === window) {
                    return window.scrollX || window.pageXOffset
                }
                return a.scrollLeft
            }
        }, {}
    ],
    19: [
        function (i, h, f) {
            h.exports = function g(a) {
                a = a || window;
                if (a === window) {
                    return window.scrollY || window.pageYOffset
                }
                return a.scrollTop
            }
        }, {}
    ],
    20: [
        function (m, l, h) {
            var j = m("./ac-clock/Clock"),
                k = m("./ac-clock/ThrottledClock"),
                i = m("./ac-clock/sharedClockInstance");
            i.Clock = j;
            i.ThrottledClock = k;
            l.exports = i
        }, {
            "./ac-clock/Clock": 21,
            "./ac-clock/ThrottledClock": 22,
            "./ac-clock/sharedClockInstance": 23
        }
    ],
    21: [
        function (o, n, i) {
            o("@marcom/ac-polyfills/Function/prototype.bind");
            o("@marcom/ac-polyfills/requestAnimationFrame");
            var l;
            var m = o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var j = new Date().getTime();
            function k() {
                m.call(this);
                this.lastFrameTime = null;
                this._animationFrame = null;
                this._active = false;
                this._startTime = null;
                this._boundOnAnimationFrame = this
                    ._onAnimationFrame
                    .bind(this);
                this._getTime = Date.now || function () {
                    return new Date().getTime()
                }
            }
            l = k.prototype = new m(null);
            l.start = function () {
                if (this._active) {
                    return
                }
                this._tick()
            };
            l.stop = function () {
                if (this._active) {
                    window.cancelAnimationFrame(this._animationFrame)
                }
                this._animationFrame = null;
                this.lastFrameTime = null;
                this._active = false
            };
            l.destroy = function () {
                this.stop();
                this.off();
                var a;
                for (a in this) {
                    if (this.hasOwnProperty(a)) {
                        this[a] = null
                    }
                }
            };
            l.isRunning = function () {
                return this._active
            };
            l._tick = function () {
                if (!this._active) {
                    this._active = true
                }
                this._animationFrame = window.requestAnimationFrame(this._boundOnAnimationFrame)
            };
            l._onAnimationFrame = function (b) {
                if (this.lastFrameTime === null) {
                    this.lastFrameTime = b
                }
                var a = b - this.lastFrameTime;
                var c = 0;
                if (a >= 1000) {
                    a = 0
                }
                if (a !== 0) {
                    c = 1000 / a
                }
                if (this._firstFrame === true) {
                    a = 0;
                    this._firstFrame = false
                }
                if (c === 0) {
                    this._firstFrame = true
                } else {
                    var d = {
                        time: b,
                        delta: a,
                        fps: c,
                        naturalFps: c,
                        timeNow: this._getTime()
                    };
                    this.trigger("update", d);
                    this.trigger("draw", d)
                }
                this._animationFrame = null;
                this.lastFrameTime = b;
                if (this._active !== false) {
                    this._tick()
                } else {
                    this.lastFrameTime = null
                }
            };
            n.exports = k
        }, {
            "@marcom/ac-event-emitter-micro": 69,
            "@marcom/ac-polyfills/Function/prototype.bind": undefined,
            "@marcom/ac-polyfills/requestAnimationFrame": undefined
        }
    ],
    22: [
        function (o, n, i) {
            o("@marcom/ac-polyfills/requestAnimationFrame");
            var l;
            var j = o("./sharedClockInstance"),
                m = o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            function k(a, b) {
                if (a === null) {
                    return
                }
                m.call(this);
                b = b || {};
                this._fps = a || null;
                this._clock = b.clock || j;
                this._lastThrottledTime = null;
                this._clockEvent = null;
                this._boundOnClockDraw = this
                    ._onClockDraw
                    .bind(this);
                this._boundOnClockUpdate = this
                    ._onClockUpdate
                    .bind(this);
                this
                    ._clock
                    .on("update", this._boundOnClockUpdate)
            }
            l = k.prototype = new m(null);
            l.setFps = function (a) {
                this._fps = a;
                return this
            };
            l.getFps = function () {
                return this._fps
            };
            l.start = function () {
                this
                    ._clock
                    .start();
                return this
            };
            l.stop = function () {
                this
                    ._clock
                    .stop();
                return this
            };
            l.isRunning = function () {
                return this
                    ._clock
                    .isRunning()
            };
            l.destroy = function () {
                this
                    ._clock
                    .off("update", this._boundOnClockUpdate);
                this
                    ._clock
                    .destroy
                    .call(this)
            };
            l._onClockUpdate = function (b) {
                if (this._lastThrottledTime === null) {
                    this._lastThrottledTime = this._clock.lastFrameTime
                }
                var a = b.time - this._lastThrottledTime;
                if (!this._fps) {
                    throw new TypeError("FPS is not defined.")
                }
                if (Math.ceil(1000 / a) >= this._fps + 2) {
                    return
                }
                this._clockEvent = b;
                this._clockEvent.delta = a;
                this._clockEvent.fps = 1000 / a;
                this._lastThrottledTime = this._clockEvent.time;
                this
                    ._clock
                    .once("draw", this._boundOnClockDraw);
                this.trigger("update", this._clockEvent)
            };
            l._onClockDraw = function () {
                this.trigger("draw", this._clockEvent)
            };
            n.exports = k
        }, {
            "./sharedClockInstance": 23,
            "@marcom/ac-event-emitter-micro": 69,
            "@marcom/ac-polyfills/requestAnimationFrame": undefined
        }
    ],
    23: [
        function (f, i, g) {
            var h = f("./Clock");
            i.exports = new h()
        }, {
            "./Clock": 21
        }
    ],
    24: [
        function (d, g, f) {
            g.exports = {
                Clip: d("./ac-clip/Clip")
            }
        }, {
            "./ac-clip/Clip": 25
        }
    ],
    25: [
        function (v, x, u) {
            var w = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            v("@marcom/ac-polyfills/Array/isArray");
            var s = v("@marcom/ac-object/create");
            var n = v("@marcom/ac-easing").createPredefined;
            var y = v("@marcom/ac-clock");
            var p = v("@marcom/ac-easing").Ease;
            var o = v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var q = "ease";
            function r(c, d, a, f) {
                f = f || {};
                this._options = f;
                this._isYoyo = f.yoyo;
                this._direction = 1;
                this._timeScale = 1;
                this._loop = f.loop || 0;
                this._loopCount = 0;
                this._target = c;
                this.duration(d);
                this._delay = (f.delay || 0) * 1000;
                this._remainingDelay = this._delay;
                this._progress = 0;
                this._clock = f.clock || y;
                this._playing = false;
                this._getTime = Date.now || function () {
                    return new Date().getTime()
                };
                this._propsTo = a || {};
                this._propsFrom = f.propsFrom || {};
                this._onStart = f.onStart || null;
                this._onUpdate = f.onUpdate || null;
                this._onDraw = f.onDraw || null;
                this._onComplete = f.onComplete || null;
                var b = f.ease || q;
                this._ease = typeof b === "function"
                    ? new p(b)
                    : n(b);
                this._start = this
                    ._start
                    .bind(this);
                this._update = this
                    ._update
                    .bind(this);
                this._draw = this
                    ._draw
                    .bind(this);
                this._isPrepared = false;
                r._add(this);
                o.call(this)
            }
            var t = r.prototype = s(o.prototype);
            r.COMPLETE = "complete";
            r.PAUSE = "pause";
            r.PLAY = "play";
            t.play = function () {
                if (!this._playing) {
                    this._playing = true;
                    if (this._delay === 0 || this._remainingDelay === 0) {
                        this._start()
                    } else {
                        if (!this._isPrepared) {
                            this._setDiff();
                            this._updateProps()
                        }
                        this._startTimeout = setTimeout(this._start, this._remainingDelay / this._timeScale);
                        this._delayStart = this._getTime()
                    }
                }
                return this
            };
            t.pause = function () {
                if (this._playing) {
                    if (this._startTimeout) {
                        this._remainingDelay = this._getTime() - this._delayStart;
                        clearTimeout(this._startTimeout)
                    }
                    this._stop();
                    this.trigger(r.PAUSE, this)
                }
                return this
            };
            t.destroy = function () {
                this.pause();
                this._options = null;
                this._target = null;
                this._storeTarget = null;
                this._ease = null;
                this._clock = null;
                this._propsTo = null;
                this._propsFrom = null;
                this._storePropsTo = null;
                this._storePropsFrom = null;
                this._propsDiff = null;
                this._propsEase = null;
                this._onStart = null;
                this._onUpdate = null;
                this._onDraw = null;
                this._onComplete = null;
                r._remove(this);
                o
                    .prototype
                    .destroy
                    .call(this);
                return this
            };
            t.reset = function () {
                if (!this._isPrepared) {
                    return
                }
                this._stop();
                this._resetLoop(this._target, this._storeTarget);
                this._direction = 1;
                this._loop = this._options.loop || 0;
                this._loopCount = 0;
                this._propsFrom = this._storePropsFrom;
                this._propsTo = this._storePropsTo;
                this._progress = 0;
                this._setStartTime();
                if (this._onUpdate) {
                    this
                        ._onUpdate
                        .call(this, this)
                }
                if (this._onDraw) {
                    this
                        ._onDraw
                        .call(this, this)
                }
                return this
            };
            t.playing = function () {
                return this._playing
            };
            t.target = function () {
                return this._target
            };
            t.duration = function (a) {
                if (a !== undefined) {
                    this._duration = a;
                    this._durationMs = a * 1000 / this._timeScale;
                    if (this._playing) {
                        this._setStartTime()
                    }
                }
                return this._duration
            };
            t.timeScale = function (a) {
                if (a !== undefined) {
                    this._timeScale = a;
                    this.duration(this._duration)
                }
                return this._timeScale
            };
            t.currentTime = function (a) {
                if (a !== undefined) {
                    return this.progress(a / this._duration) * this._duration
                }
                return this.progress() * this._duration
            };
            t.progress = function (a) {
                if (a !== undefined) {
                    this._progress = Math.min(1, Math.max(0, a));
                    this._setStartTime();
                    if (!this._isPrepared) {
                        this._setDiff()
                    }
                    if (this._playing && a === 1) {
                        this._completeProps();
                        if (this._onUpdate) {
                            this
                                ._onUpdate
                                .call(this, this)
                        }
                        if (this._onDraw) {
                            this
                                ._onDraw
                                .call(this, this)
                        }
                        this._complete()
                    } else {
                        this._updateProps();
                        if (this._onUpdate) {
                            this
                                ._onUpdate
                                .call(this, this)
                        }
                        if (this._onDraw) {
                            this
                                ._onDraw
                                .call(this, this)
                        }
                    }
                }
                return this._progress
            };
            t._resetLoop = function (b, c) {
                var a;
                for (a in c) {
                    if (c.hasOwnProperty(a)) {
                        if (c[a] !== null) {
                            if (w(c[a]) === "object") {
                                this._resetLoop(b[a], c[a])
                            } else {
                                b[a] = c[a]
                            }
                        }
                    }
                }
            };
            t._cloneObjects = function () {
                var a = {};
                var b = {};
                var c = {};
                this._cloneObjectsLoop(this._target, this._propsTo, this._propsFrom, a, b, c);
                return {target: a, propsTo: b, propsFrom: c}
            };
            t._cloneObjectsLoop = function (f, a, b, c, h, i) {
                var g;
                var d;
                for (d in b) {
                    if (b.hasOwnProperty(d) && a[d] === undefined && f[d] !== undefined) {
                        c[d] = f[d];
                        h[d] = f[d];
                        i[d] = b[d]
                    }
                }
                for (d in a) {
                    if (f.hasOwnProperty(d)) {
                        g = w(f[d]);
                        if (f[d] !== null && g === "object") {
                            if (Array.isArray(f[d])) {
                                c[d] = [];
                                h[d] = [];
                                i[d] = []
                            } else {
                                c[d] = {};
                                h[d] = {};
                                i[d] = {}
                            }
                            this._cloneObjectsLoop(f[d], a[d] || {}, b[d] || {}, c[d], h[d], i[d])
                        } else {
                            if (a[d] !== null && g === "number") {
                                c[d] = f[d];
                                h[d] = a[d];
                                if (b && b[d] !== undefined) {
                                    i[d] = b[d]
                                }
                            }
                        }
                    }
                }
            };
            t._prepareProperties = function () {
                if (!this._isPrepared) {
                    var a = this._cloneObjects();
                    this._storeTarget = a.target;
                    this._propsTo = a.propsTo;
                    this._storePropsTo = this._propsTo;
                    this._propsFrom = a.propsFrom;
                    this._storePropsFrom = this._propsFrom;
                    this._isPrepared = true
                }
            };
            t._setStartTime = function () {
                this._startTime = this._getTime() - this.progress() * this._durationMs
            };
            t._setDiff = function () {
                if (!this._isPrepared) {
                    this._prepareProperties()
                }
                this._propsDiff = {};
                this._setDiffLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff)
            };
            t._setDiffLoop = function (a, b, d, f) {
                var g;
                var c;
                for (c in a) {
                    if (a.hasOwnProperty(c)) {
                        g = w(a[c]);
                        if (a[c] !== null && g === "object") {
                            b[c] = b[c] || {};
                            f[c] = f[c] || {};
                            this._setDiffLoop(a[c], b[c], d[c], f[c])
                        } else {
                            if (g === "number" && d[c] !== undefined) {
                                if (b[c] !== undefined) {
                                    d[c] = b[c]
                                } else {
                                    b[c] = d[c]
                                }
                                f[c] = a[c] - d[c]
                            } else {
                                a[c] = null;
                                b[c] = null
                            }
                        }
                    }
                }
            };
            t._start = function () {
                this._startTimeout = null;
                this._remainingDelay = 0;
                this._setStartTime();
                this
                    ._clock
                    .on("update", this._update);
                this
                    ._clock
                    .on("draw", this._draw);
                if (!this._clock.isRunning()) {
                    this
                        ._clock
                        .start()
                }
                this._setDiff();
                this._playing = true;
                this._running = true;
                if (this._onStart) {
                    this
                        ._onStart
                        .call(this, this)
                }
                this.trigger(r.PLAY, this)
            };
            t._stop = function () {
                this._playing = false;
                this._running = false;
                this
                    ._clock
                    .off("update", this._update);
                this
                    ._clock
                    .off("draw", this._draw)
            };
            t._updateProps = function () {
                var a;
                if (this._direction === 1) {
                    a = this
                        ._ease
                        .getValue(this._progress)
                } else {
                    a = 1 - this
                        ._ease
                        .getValue(1 - this._progress)
                }
                this._updatePropsLoop(this._propsTo, this._propsFrom, this._target, this._propsDiff, a)
            };
            t._updatePropsLoop = function (a, b, d, f, g) {
                var c;
                for (c in a) {
                    if (a.hasOwnProperty(c) && a[c] !== null) {
                        if (typeof a[c] !== "number") {
                            this._updatePropsLoop(a[c], b[c], d[c], f[c], g)
                        } else {
                            d[c] = b[c] + f[c] * g
                        }
                    }
                }
            };
            t._completeProps = function () {
                this._completePropsLoop(this._propsTo, this._target)
            };
            t._completePropsLoop = function (a, c) {
                var b;
                for (b in a) {
                    if (a.hasOwnProperty(b) && a[b] !== null) {
                        if (typeof a[b] !== "number") {
                            this._completePropsLoop(a[b], c[b])
                        } else {
                            c[b] = a[b]
                        }
                    }
                }
            };
            t._complete = function () {
                if (this._isYoyo && (this._loop > 0 && this._loopCount <= this._loop || this._loop === 0 && this._loopCount === 0)) {
                    this._propsFrom = this._direction === 1
                        ? this._storePropsTo
                        : this._storePropsFrom;
                    this._propsTo = this._direction === 1
                        ? this._storePropsFrom
                        : this._storePropsTo;
                    this._direction *= -1;
                    if (this._direction === -1) {
                        ++this._loopCount
                    }
                    this.progress(0);
                    this._start()
                } else {
                    if (this._loopCount < this._loop) {
                        ++this._loopCount;
                        this.progress(0);
                        this._start()
                    } else {
                        this.trigger(r.COMPLETE, this);
                        if (this._onComplete) {
                            this
                                ._onComplete
                                .call(this, this)
                        }
                        if (this._options && this._options.destroyOnComplete) {
                            this.destroy()
                        }
                    }
                }
            };
            t._update = function (a) {
                if (this._running) {
                    this._progress = (a.timeNow - this._startTime) / this._durationMs;
                    if (this._progress >= 1) {
                        this._progress = 1;
                        this._running = false;
                        this._completeProps()
                    } else {
                        this._updateProps()
                    }
                    if (this._onUpdate) {
                        this
                            ._onUpdate
                            .call(this, this)
                    }
                }
            };
            t._draw = function (a) {
                if (this._onDraw) {
                    this
                        ._onDraw
                        .call(this, this)
                }
                if (!this._running) {
                    this._stop();
                    if (this._progress === 1) {
                        this._complete()
                    }
                }
            };
            r._instantiate = function () {
                this._clips = [];
                return this
            };
            r._add = function (a) {
                this
                    ._clips
                    .push(a)
            };
            r._remove = function (a) {
                var b = this
                    ._clips
                    .indexOf(a);
                if (b > -1) {
                    this
                        ._clips
                        .splice(b, 1)
                }
            };
            r.getAll = function (a) {
                if (a !== undefined) {
                    var c = [];
                    var b = this._clips.length;
                    while (b--) {
                        if (this._clips[b].target() === a) {
                            c.push(this._clips[b])
                        }
                    }
                    return c
                }
                return Array
                    .prototype
                    .slice
                    .call(this._clips)
            };
            r.destroyAll = function (a) {
                var c = this.getAll(a);
                if (this._clips.length === c.length) {
                    this._clips = []
                }
                var b = c.length;
                while (b--) {
                    c[b].destroy()
                }
                return c
            };
            r.to = function (b, c, a, d) {
                d = d || {};
                if (d.destroyOnComplete === undefined) {
                    d.destroyOnComplete = true
                }
                return new r(b, c, a, d).play()
            };
            r.from = function (a, b, d, c) {
                c = c || {};
                c.propsFrom = d;
                if (c.destroyOnComplete === undefined) {
                    c.destroyOnComplete = true
                }
                return new r(a, b, c.propsTo, c).play()
            };
            x.exports = r._instantiate()
        }, {
            "@marcom/ac-clock": 20,
            "@marcom/ac-easing": 61,
            "@marcom/ac-event-emitter-micro": 69,
            "@marcom/ac-object/create": 72,
            "@marcom/ac-polyfills/Array/isArray": undefined
        }
    ],
    26: [
        function (f, i, g) {
            var h = f("./ac-color/Color");
            h.decimalToHex = f("./ac-color/static/decimalToHex");
            h.hexToDecimal = f("./ac-color/static/hexToDecimal");
            h.hexToRgb = f("./ac-color/static/hexToRgb");
            h.isColor = f("./ac-color/static/isColor");
            h.isHex = f("./ac-color/static/isHex");
            h.isRgb = f("./ac-color/static/isRgb");
            h.isRgba = f("./ac-color/static/isRgba");
            h.mixColors = f("./ac-color/static/mixColors");
            h.rgbaToArray = f("./ac-color/static/rgbaToArray");
            h.rgbToArray = f("./ac-color/static/rgbToArray");
            h.rgbToDecimal = f("./ac-color/static/rgbToDecimal");
            h.rgbToHex = f("./ac-color/static/rgbToHex");
            h.rgbToHsl = f("./ac-color/static/rgbToHsl");
            h.rgbToHsv = f("./ac-color/static/rgbToHsv");
            h.rgbaToObject = f("./ac-color/static/rgbaToObject");
            h.rgbToObject = f("./ac-color/static/rgbToObject");
            h.shortToLongHex = f("./ac-color/static/shortToLongHex");
            i.exports = {
                Color: h
            }
        }, {
            "./ac-color/Color": 27,
            "./ac-color/static/decimalToHex": 29,
            "./ac-color/static/hexToDecimal": 30,
            "./ac-color/static/hexToRgb": 31,
            "./ac-color/static/isColor": 32,
            "./ac-color/static/isHex": 33,
            "./ac-color/static/isRgb": 34,
            "./ac-color/static/isRgba": 35,
            "./ac-color/static/mixColors": 36,
            "./ac-color/static/rgbToArray": 37,
            "./ac-color/static/rgbToDecimal": 38,
            "./ac-color/static/rgbToHex": 39,
            "./ac-color/static/rgbToHsl": 40,
            "./ac-color/static/rgbToHsv": 41,
            "./ac-color/static/rgbToObject": 42,
            "./ac-color/static/rgbaToArray": 43,
            "./ac-color/static/rgbaToObject": 44,
            "./ac-color/static/shortToLongHex": 45
        }
    ],
    27: [
        function (H, K, v) {
            var E = H("./helpers/cssColorNames");
            var z = H("./static/hexToRgb");
            var A = H("./static/isColor");
            var G = H("./static/isHex");
            var J = H("./static/isRgba");
            var w = H("./static/mixColors");
            var B = H("./static/rgbaToArray");
            var y = H("./static/rgbToArray");
            var t = H("./static/rgbToDecimal");
            var D = H("./static/rgbToHex");
            var I = H("./static/rgbaToObject");
            var C = H("./static/rgbToObject");
            var x = H("./static/shortToLongHex");
            function u(a) {
                if (!A(a) && !E.nameToRgbObject[a]) {
                    throw new Error(a + " is not a supported color.")
                }
                this._setColor(a)
            }
            var F = u.prototype;
            F._setColor = function (c) {
                this._color = {};
                if (G(c)) {
                    this._color.hex = x(c);
                    this._color.rgb = {
                        color: z(c)
                    }
                } else {
                    if (J(c)) {
                        this._color.rgba = {
                            color: c
                        };
                        var a = this.rgbaObject();
                        this._color.rgb = {
                            color: "rgb(" + a.r + ", " + a.g + ", " + a.b + ")"
                        }
                    } else {
                        if (E.nameToRgbObject[c]) {
                            var b = E.nameToRgbObject[c];
                            this._color.rgb = {
                                object: b,
                                color: "rgb(" + b.r + ", " + b.g + ", " + b.b + ")"
                            }
                        } else {
                            this._color.rgb = {
                                color: c
                            }
                        }
                    }
                }
            };
            F.rgb = function () {
                return this._color.rgb.color
            };
            F.rgba = function () {
                if (this._color.rgba === undefined) {
                    var a = this.rgbObject();
                    this._color.rgba = {
                        color: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)"
                    }
                }
                return this._color.rgba.color
            };
            F.hex = function () {
                if (this._color.hex === undefined) {
                    this._color.hex = D.apply(this, this.rgbArray())
                }
                return this._color.hex
            };
            F.decimal = function () {
                if (this._color.decimal === undefined) {
                    this._color.decimal = t(this.rgb())
                }
                return this._color.decimal
            };
            F.cssName = function () {
                return E.rgbToName[this.rgb()] || null
            };
            F.rgbArray = function () {
                if (this._color.rgb.array === undefined) {
                    this._color.rgb.array = y(this.rgb())
                }
                return this._color.rgb.array
            };
            F.rgbaArray = function () {
                if (this._color.rgba === undefined) {
                    this.rgba()
                }
                if (this._color.rgba.array === undefined) {
                    this._color.rgba.array = B(this.rgba())
                }
                return this._color.rgba.array
            };
            F.rgbObject = function () {
                if (this._color.rgb.object === undefined) {
                    this._color.rgb.object = C(this.rgb())
                }
                return this._color.rgb.object
            };
            F.rgbaObject = function () {
                if (this._color.rgba === undefined) {
                    this.rgba()
                }
                if (this._color.rgba.object === undefined) {
                    this._color.rgba.object = I(this.rgba())
                }
                return this._color.rgba.object
            };
            F.getRed = function () {
                return this
                    .rgbObject()
                    .r
            };
            F.getGreen = function () {
                return this
                    .rgbObject()
                    .g
            };
            F.getBlue = function () {
                return this
                    .rgbObject()
                    .b
            };
            F.getAlpha = function () {
                if (this._color.rgba === undefined) {
                    return 1
                }
                return this
                    .rgbaObject()
                    .a
            };
            F.setRed = function (a) {
                if (a !== this.getRed()) {
                    this._setColor("rgba(" + a + ", " + this.getGreen() + ", " + this.getBlue() + ", " + this.getAlpha() + ")")
                }
                return this
                    .rgbObject()
                    .r
            };
            F.setGreen = function (a) {
                if (a !== this.getGreen()) {
                    this._setColor("rgba(" + this.getRed() + ", " + a + ", " + this.getBlue() + ", " + this.getAlpha() + ")")
                }
                return this
                    .rgbObject()
                    .g
            };
            F.setBlue = function (a) {
                if (a !== this.getBlue()) {
                    this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + a + ", " + this.getAlpha() + ")")
                }
                return this
                    .rgbObject()
                    .b
            };
            F.setAlpha = function (a) {
                if (a !== this.getAlpha()) {
                    this._setColor("rgba(" + this.getRed() + ", " + this.getGreen() + ", " + this.getBlue() + ", " + a + ")")
                }
                return this
                    .rgbaObject()
                    .a
            };
            F.mix = function (c, b) {
                var a = C(w(this.rgb(), c, b));
                this._setColor("rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + this.getAlpha() + ")");
                return this.rgb()
            };
            F.clone = function () {
                return new u(this.rgb())
            };
            K.exports = u
        }, {
            "./helpers/cssColorNames": 28,
            "./static/hexToRgb": 31,
            "./static/isColor": 32,
            "./static/isHex": 33,
            "./static/isRgba": 35,
            "./static/mixColors": 36,
            "./static/rgbToArray": 37,
            "./static/rgbToDecimal": 38,
            "./static/rgbToHex": 39,
            "./static/rgbToObject": 42,
            "./static/rgbaToArray": 43,
            "./static/rgbaToObject": 44,
            "./static/shortToLongHex": 45
        }
    ],
    28: [
        function (g, k, h) {
            var j = {
                "rgb(240, 248, 255)": "aliceblue",
                "rgb(250, 235, 215)": "antiquewhite",
                "rgb(0, 0, 0)": "black",
                "rgb(0, 0, 255)": "blue",
                "rgb(0, 255, 255)": "cyan",
                "rgb(0, 0, 139)": "darkblue",
                "rgb(0, 139, 139)": "darkcyan",
                "rgb(0, 100, 0)": "darkgreen",
                "rgb(0, 206, 209)": "darkturquoise",
                "rgb(0, 191, 255)": "deepskyblue",
                "rgb(0, 128, 0)": "green",
                "rgb(0, 255, 0)": "lime",
                "rgb(0, 0, 205)": "mediumblue",
                "rgb(0, 250, 154)": "mediumspringgreen",
                "rgb(0, 0, 128)": "navy",
                "rgb(0, 255, 127)": "springgreen",
                "rgb(0, 128, 128)": "teal",
                "rgb(25, 25, 112)": "midnightblue",
                "rgb(30, 144, 255)": "dodgerblue",
                "rgb(32, 178, 170)": "lightseagreen",
                "rgb(34, 139, 34)": "forestgreen",
                "rgb(46, 139, 87)": "seagreen",
                "rgb(47, 79, 79)": "darkslategray",
                "rgb(50, 205, 50)": "limegreen",
                "rgb(60, 179, 113)": "mediumseagreen",
                "rgb(64, 224, 208)": "turquoise",
                "rgb(65, 105, 225)": "royalblue",
                "rgb(70, 130, 180)": "steelblue",
                "rgb(72, 61, 139)": "darkslateblue",
                "rgb(72, 209, 204)": "mediumturquoise",
                "rgb(75, 0, 130)": "indigo",
                "rgb(85, 107, 47)": "darkolivegreen",
                "rgb(95, 158, 160)": "cadetblue",
                "rgb(100, 149, 237)": "cornflowerblue",
                "rgb(102, 205, 170)": "mediumaquamarine",
                "rgb(105, 105, 105)": "dimgray",
                "rgb(106, 90, 205)": "slateblue",
                "rgb(107, 142, 35)": "olivedrab",
                "rgb(112, 128, 144)": "slategray",
                "rgb(119, 136, 153)": "lightslategray",
                "rgb(123, 104, 238)": "mediumslateblue",
                "rgb(124, 252, 0)": "lawngreen",
                "rgb(127, 255, 212)": "aquamarine",
                "rgb(127, 255, 0)": "chartreuse",
                "rgb(128, 128, 128)": "gray",
                "rgb(128, 0, 0)": "maroon",
                "rgb(128, 128, 0)": "olive",
                "rgb(128, 0, 128)": "purple",
                "rgb(135, 206, 250)": "lightskyblue",
                "rgb(135, 206, 235)": "skyblue",
                "rgb(138, 43, 226)": "blueviolet",
                "rgb(139, 0, 139)": "darkmagenta",
                "rgb(139, 0, 0)": "darkred",
                "rgb(139, 69, 19)": "saddlebrown",
                "rgb(143, 188, 143)": "darkseagreen",
                "rgb(144, 238, 144)": "lightgreen",
                "rgb(147, 112, 219)": "mediumpurple",
                "rgb(148, 0, 211)": "darkviolet",
                "rgb(152, 251, 152)": "palegreen",
                "rgb(153, 50, 204)": "darkorchid",
                "rgb(154, 205, 50)": "yellowgreen",
                "rgb(160, 82, 45)": "sienna",
                "rgb(165, 42, 42)": "brown",
                "rgb(169, 169, 169)": "darkgray",
                "rgb(173, 255, 47)": "greenyellow",
                "rgb(173, 216, 230)": "lightblue",
                "rgb(175, 238, 238)": "paleturquoise",
                "rgb(176, 196, 222)": "lightsteelblue",
                "rgb(176, 224, 230)": "powderblue",
                "rgb(178, 34, 34)": "firebrick",
                "rgb(184, 134, 11)": "darkgoldenrod",
                "rgb(186, 85, 211)": "mediumorchid",
                "rgb(188, 143, 143)": "rosybrown",
                "rgb(189, 183, 107)": "darkkhaki",
                "rgb(192, 192, 192)": "silver",
                "rgb(199, 21, 133)": "mediumvioletred",
                "rgb(205, 92, 92)": "indianred",
                "rgb(205, 133, 63)": "peru",
                "rgb(210, 105, 30)": "chocolate",
                "rgb(210, 180, 140)": "tan",
                "rgb(211, 211, 211)": "lightgray",
                "rgb(216, 191, 216)": "thistle",
                "rgb(218, 165, 32)": "goldenrod",
                "rgb(218, 112, 214)": "orchid",
                "rgb(219, 112, 147)": "palevioletred",
                "rgb(220, 20, 60)": "crimson",
                "rgb(220, 220, 220)": "gainsboro",
                "rgb(221, 160, 221)": "plum",
                "rgb(222, 184, 135)": "burlywood",
                "rgb(224, 255, 255)": "lightcyan",
                "rgb(230, 230, 250)": "lavender",
                "rgb(233, 150, 122)": "darksalmon",
                "rgb(238, 232, 170)": "palegoldenrod",
                "rgb(238, 130, 238)": "violet",
                "rgb(240, 255, 255)": "azure",
                "rgb(240, 255, 240)": "honeydew",
                "rgb(240, 230, 140)": "khaki",
                "rgb(240, 128, 128)": "lightcoral",
                "rgb(244, 164, 96)": "sandybrown",
                "rgb(245, 245, 220)": "beige",
                "rgb(245, 255, 250)": "mintcream",
                "rgb(245, 222, 179)": "wheat",
                "rgb(245, 245, 245)": "whitesmoke",
                "rgb(248, 248, 255)": "ghostwhite",
                "rgb(250, 250, 210)": "lightgoldenrodyellow",
                "rgb(250, 240, 230)": "linen",
                "rgb(250, 128, 114)": "salmon",
                "rgb(253, 245, 230)": "oldlace",
                "rgb(255, 228, 196)": "bisque",
                "rgb(255, 235, 205)": "blanchedalmond",
                "rgb(255, 127, 80)": "coral",
                "rgb(255, 248, 220)": "cornsilk",
                "rgb(255, 140, 0)": "darkorange",
                "rgb(255, 20, 147)": "deeppink",
                "rgb(255, 250, 240)": "floralwhite",
                "rgb(255, 215, 0)": "gold",
                "rgb(255, 105, 180)": "hotpink",
                "rgb(255, 255, 240)": "ivory",
                "rgb(255, 240, 245)": "lavenderblush",
                "rgb(255, 250, 205)": "lemonchiffon",
                "rgb(255, 182, 193)": "lightpink",
                "rgb(255, 160, 122)": "lightsalmon",
                "rgb(255, 255, 224)": "lightyellow",
                "rgb(255, 0, 255)": "magenta",
                "rgb(255, 228, 225)": "mistyrose",
                "rgb(255, 228, 181)": "moccasin",
                "rgb(255, 222, 173)": "navajowhite",
                "rgb(255, 165, 0)": "orange",
                "rgb(255, 69, 0)": "orangered",
                "rgb(255, 239, 213)": "papayawhip",
                "rgb(255, 218, 185)": "peachpuff",
                "rgb(255, 192, 203)": "pink",
                "rgb(255, 0, 0)": "red",
                "rgb(255, 245, 238)": "seashell",
                "rgb(255, 250, 250)": "snow",
                "rgb(255, 99, 71)": "tomato",
                "rgb(255, 255, 255)": "white",
                "rgb(255, 255, 0)": "yellow",
                "rgb(102, 51, 153)": "rebeccapurple"
            };
            var i = {
                aqua: {
                    r: 0,
                    g: 255,
                    b: 255
                },
                aliceblue: {
                    r: 240,
                    g: 248,
                    b: 255
                },
                antiquewhite: {
                    r: 250,
                    g: 235,
                    b: 215
                },
                black: {
                    r: 0,
                    g: 0,
                    b: 0
                },
                blue: {
                    r: 0,
                    g: 0,
                    b: 255
                },
                cyan: {
                    r: 0,
                    g: 255,
                    b: 255
                },
                darkblue: {
                    r: 0,
                    g: 0,
                    b: 139
                },
                darkcyan: {
                    r: 0,
                    g: 139,
                    b: 139
                },
                darkgreen: {
                    r: 0,
                    g: 100,
                    b: 0
                },
                darkturquoise: {
                    r: 0,
                    g: 206,
                    b: 209
                },
                deepskyblue: {
                    r: 0,
                    g: 191,
                    b: 255
                },
                green: {
                    r: 0,
                    g: 128,
                    b: 0
                },
                lime: {
                    r: 0,
                    g: 255,
                    b: 0
                },
                mediumblue: {
                    r: 0,
                    g: 0,
                    b: 205
                },
                mediumspringgreen: {
                    r: 0,
                    g: 250,
                    b: 154
                },
                navy: {
                    r: 0,
                    g: 0,
                    b: 128
                },
                springgreen: {
                    r: 0,
                    g: 255,
                    b: 127
                },
                teal: {
                    r: 0,
                    g: 128,
                    b: 128
                },
                midnightblue: {
                    r: 25,
                    g: 25,
                    b: 112
                },
                dodgerblue: {
                    r: 30,
                    g: 144,
                    b: 255
                },
                lightseagreen: {
                    r: 32,
                    g: 178,
                    b: 170
                },
                forestgreen: {
                    r: 34,
                    g: 139,
                    b: 34
                },
                seagreen: {
                    r: 46,
                    g: 139,
                    b: 87
                },
                darkslategray: {
                    r: 47,
                    g: 79,
                    b: 79
                },
                darkslategrey: {
                    r: 47,
                    g: 79,
                    b: 79
                },
                limegreen: {
                    r: 50,
                    g: 205,
                    b: 50
                },
                mediumseagreen: {
                    r: 60,
                    g: 179,
                    b: 113
                },
                turquoise: {
                    r: 64,
                    g: 224,
                    b: 208
                },
                royalblue: {
                    r: 65,
                    g: 105,
                    b: 225
                },
                steelblue: {
                    r: 70,
                    g: 130,
                    b: 180
                },
                darkslateblue: {
                    r: 72,
                    g: 61,
                    b: 139
                },
                mediumturquoise: {
                    r: 72,
                    g: 209,
                    b: 204
                },
                indigo: {
                    r: 75,
                    g: 0,
                    b: 130
                },
                darkolivegreen: {
                    r: 85,
                    g: 107,
                    b: 47
                },
                cadetblue: {
                    r: 95,
                    g: 158,
                    b: 160
                },
                cornflowerblue: {
                    r: 100,
                    g: 149,
                    b: 237
                },
                mediumaquamarine: {
                    r: 102,
                    g: 205,
                    b: 170
                },
                dimgray: {
                    r: 105,
                    g: 105,
                    b: 105
                },
                dimgrey: {
                    r: 105,
                    g: 105,
                    b: 105
                },
                slateblue: {
                    r: 106,
                    g: 90,
                    b: 205
                },
                olivedrab: {
                    r: 107,
                    g: 142,
                    b: 35
                },
                slategray: {
                    r: 112,
                    g: 128,
                    b: 144
                },
                slategrey: {
                    r: 112,
                    g: 128,
                    b: 144
                },
                lightslategray: {
                    r: 119,
                    g: 136,
                    b: 153
                },
                lightslategrey: {
                    r: 119,
                    g: 136,
                    b: 153
                },
                mediumslateblue: {
                    r: 123,
                    g: 104,
                    b: 238
                },
                lawngreen: {
                    r: 124,
                    g: 252,
                    b: 0
                },
                aquamarine: {
                    r: 127,
                    g: 255,
                    b: 212
                },
                chartreuse: {
                    r: 127,
                    g: 255,
                    b: 0
                },
                gray: {
                    r: 128,
                    g: 128,
                    b: 128
                },
                grey: {
                    r: 128,
                    g: 128,
                    b: 128
                },
                maroon: {
                    r: 128,
                    g: 0,
                    b: 0
                },
                olive: {
                    r: 128,
                    g: 128,
                    b: 0
                },
                purple: {
                    r: 128,
                    g: 0,
                    b: 128
                },
                lightskyblue: {
                    r: 135,
                    g: 206,
                    b: 250
                },
                skyblue: {
                    r: 135,
                    g: 206,
                    b: 235
                },
                blueviolet: {
                    r: 138,
                    g: 43,
                    b: 226
                },
                darkmagenta: {
                    r: 139,
                    g: 0,
                    b: 139
                },
                darkred: {
                    r: 139,
                    g: 0,
                    b: 0
                },
                saddlebrown: {
                    r: 139,
                    g: 69,
                    b: 19
                },
                darkseagreen: {
                    r: 143,
                    g: 188,
                    b: 143
                },
                lightgreen: {
                    r: 144,
                    g: 238,
                    b: 144
                },
                mediumpurple: {
                    r: 147,
                    g: 112,
                    b: 219
                },
                darkviolet: {
                    r: 148,
                    g: 0,
                    b: 211
                },
                palegreen: {
                    r: 152,
                    g: 251,
                    b: 152
                },
                darkorchid: {
                    r: 153,
                    g: 50,
                    b: 204
                },
                yellowgreen: {
                    r: 154,
                    g: 205,
                    b: 50
                },
                sienna: {
                    r: 160,
                    g: 82,
                    b: 45
                },
                brown: {
                    r: 165,
                    g: 42,
                    b: 42
                },
                darkgray: {
                    r: 169,
                    g: 169,
                    b: 169
                },
                darkgrey: {
                    r: 169,
                    g: 169,
                    b: 169
                },
                greenyellow: {
                    r: 173,
                    g: 255,
                    b: 47
                },
                lightblue: {
                    r: 173,
                    g: 216,
                    b: 230
                },
                paleturquoise: {
                    r: 175,
                    g: 238,
                    b: 238
                },
                lightsteelblue: {
                    r: 176,
                    g: 196,
                    b: 222
                },
                powderblue: {
                    r: 176,
                    g: 224,
                    b: 230
                },
                firebrick: {
                    r: 178,
                    g: 34,
                    b: 34
                },
                darkgoldenrod: {
                    r: 184,
                    g: 134,
                    b: 11
                },
                mediumorchid: {
                    r: 186,
                    g: 85,
                    b: 211
                },
                rosybrown: {
                    r: 188,
                    g: 143,
                    b: 143
                },
                darkkhaki: {
                    r: 189,
                    g: 183,
                    b: 107
                },
                silver: {
                    r: 192,
                    g: 192,
                    b: 192
                },
                mediumvioletred: {
                    r: 199,
                    g: 21,
                    b: 133
                },
                indianred: {
                    r: 205,
                    g: 92,
                    b: 92
                },
                peru: {
                    r: 205,
                    g: 133,
                    b: 63
                },
                chocolate: {
                    r: 210,
                    g: 105,
                    b: 30
                },
                tan: {
                    r: 210,
                    g: 180,
                    b: 140
                },
                lightgray: {
                    r: 211,
                    g: 211,
                    b: 211
                },
                lightgrey: {
                    r: 211,
                    g: 211,
                    b: 211
                },
                thistle: {
                    r: 216,
                    g: 191,
                    b: 216
                },
                goldenrod: {
                    r: 218,
                    g: 165,
                    b: 32
                },
                orchid: {
                    r: 218,
                    g: 112,
                    b: 214
                },
                palevioletred: {
                    r: 219,
                    g: 112,
                    b: 147
                },
                crimson: {
                    r: 220,
                    g: 20,
                    b: 60
                },
                gainsboro: {
                    r: 220,
                    g: 220,
                    b: 220
                },
                plum: {
                    r: 221,
                    g: 160,
                    b: 221
                },
                burlywood: {
                    r: 222,
                    g: 184,
                    b: 135
                },
                lightcyan: {
                    r: 224,
                    g: 255,
                    b: 255
                },
                lavender: {
                    r: 230,
                    g: 230,
                    b: 250
                },
                darksalmon: {
                    r: 233,
                    g: 150,
                    b: 122
                },
                palegoldenrod: {
                    r: 238,
                    g: 232,
                    b: 170
                },
                violet: {
                    r: 238,
                    g: 130,
                    b: 238
                },
                azure: {
                    r: 240,
                    g: 255,
                    b: 255
                },
                honeydew: {
                    r: 240,
                    g: 255,
                    b: 240
                },
                khaki: {
                    r: 240,
                    g: 230,
                    b: 140
                },
                lightcoral: {
                    r: 240,
                    g: 128,
                    b: 128
                },
                sandybrown: {
                    r: 244,
                    g: 164,
                    b: 96
                },
                beige: {
                    r: 245,
                    g: 245,
                    b: 220
                },
                mintcream: {
                    r: 245,
                    g: 255,
                    b: 250
                },
                wheat: {
                    r: 245,
                    g: 222,
                    b: 179
                },
                whitesmoke: {
                    r: 245,
                    g: 245,
                    b: 245
                },
                ghostwhite: {
                    r: 248,
                    g: 248,
                    b: 255
                },
                lightgoldenrodyellow: {
                    r: 250,
                    g: 250,
                    b: 210
                },
                linen: {
                    r: 250,
                    g: 240,
                    b: 230
                },
                salmon: {
                    r: 250,
                    g: 128,
                    b: 114
                },
                oldlace: {
                    r: 253,
                    g: 245,
                    b: 230
                },
                bisque: {
                    r: 255,
                    g: 228,
                    b: 196
                },
                blanchedalmond: {
                    r: 255,
                    g: 235,
                    b: 205
                },
                coral: {
                    r: 255,
                    g: 127,
                    b: 80
                },
                cornsilk: {
                    r: 255,
                    g: 248,
                    b: 220
                },
                darkorange: {
                    r: 255,
                    g: 140,
                    b: 0
                },
                deeppink: {
                    r: 255,
                    g: 20,
                    b: 147
                },
                floralwhite: {
                    r: 255,
                    g: 250,
                    b: 240
                },
                fuchsia: {
                    r: 255,
                    g: 0,
                    b: 255
                },
                gold: {
                    r: 255,
                    g: 215,
                    b: 0
                },
                hotpink: {
                    r: 255,
                    g: 105,
                    b: 180
                },
                ivory: {
                    r: 255,
                    g: 255,
                    b: 240
                },
                lavenderblush: {
                    r: 255,
                    g: 240,
                    b: 245
                },
                lemonchiffon: {
                    r: 255,
                    g: 250,
                    b: 205
                },
                lightpink: {
                    r: 255,
                    g: 182,
                    b: 193
                },
                lightsalmon: {
                    r: 255,
                    g: 160,
                    b: 122
                },
                lightyellow: {
                    r: 255,
                    g: 255,
                    b: 224
                },
                magenta: {
                    r: 255,
                    g: 0,
                    b: 255
                },
                mistyrose: {
                    r: 255,
                    g: 228,
                    b: 225
                },
                moccasin: {
                    r: 255,
                    g: 228,
                    b: 181
                },
                navajowhite: {
                    r: 255,
                    g: 222,
                    b: 173
                },
                orange: {
                    r: 255,
                    g: 165,
                    b: 0
                },
                orangered: {
                    r: 255,
                    g: 69,
                    b: 0
                },
                papayawhip: {
                    r: 255,
                    g: 239,
                    b: 213
                },
                peachpuff: {
                    r: 255,
                    g: 218,
                    b: 185
                },
                pink: {
                    r: 255,
                    g: 192,
                    b: 203
                },
                red: {
                    r: 255,
                    g: 0,
                    b: 0
                },
                seashell: {
                    r: 255,
                    g: 245,
                    b: 238
                },
                snow: {
                    r: 255,
                    g: 250,
                    b: 250
                },
                tomato: {
                    r: 255,
                    g: 99,
                    b: 71
                },
                white: {
                    r: 255,
                    g: 255,
                    b: 255
                },
                yellow: {
                    r: 255,
                    g: 255,
                    b: 0
                },
                rebeccapurple: {
                    r: 102,
                    g: 51,
                    b: 153
                }
            };
            k.exports = {
                rgbToName: j,
                nameToRgbObject: i
            }
        }, {}
    ],
    29: [
        function (i, h, f) {
            h.exports = function g(a) {
                return "#" + a.toString(16)
            }
        }, {}
    ],
    30: [
        function (i, h, g) {
            h.exports = function f(a) {
                return parseInt(a.substr(1), 16)
            }
        }, {}
    ],
    31: [
        function (j, i, k) {
            var h = j("./shortToLongHex");
            i.exports = function g(a) {
                a = h(a);
                var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                return b
                    ? "rgb(" + parseInt(b[1], 16) + ", " + parseInt(b[2], 16) + ", " + parseInt(b[3], 16) + ")"
                    : null
            }
        }, {
            "./shortToLongHex": 45
        }
    ],
    32: [
        function (o, m, i) {
            var k = o("./isRgb");
            var l = o("./isRgba");
            var j = o("./isHex");
            m.exports = function n(a) {
                return j(a) || k(a) || l(a)
            }
        }, {
            "./isHex": 33,
            "./isRgb": 34,
            "./isRgba": 35
        }
    ],
    33: [
        function (i, h, f) {
            h.exports = function g(a) {
                var b = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
                return b.test(a)
            }
        }, {}
    ],
    34: [
        function (f, i, g) {
            i.exports = function h(a) {
                var b = /^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
                return b.exec(a) !== null
            }
        }, {}
    ],
    35: [
        function (f, i, g) {
            i.exports = function h(a) {
                var b = /^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
                return b.exec(a) !== null
            }
        }, {}
    ],
    36: [
        function (n, m, o) {
            var i = n("./isHex");
            var j = n("./hexToRgb");
            var k = n("./rgbToObject");
            m.exports = function l(g, a, b) {
                g = i(g)
                    ? j(g)
                    : g;
                a = i(a)
                    ? j(a)
                    : a;
                g = k(g);
                a = k(a);
                var c = g.r + (a.r - g.r) * b;
                var d = g.g + (a.g - g.g) * b;
                var f = g.b + (a.b - g.b) * b;
                return "rgb(" + Math.round(c) + ", " + Math.round(d) + ", " + Math.round(f) + ")"
            }
        }, {
            "./hexToRgb": 31,
            "./isHex": 33,
            "./rgbToObject": 42
        }
    ],
    37: [
        function (g, k, h) {
            var j = g("./rgbToObject");
            k.exports = function i(b) {
                var a = j(b);
                return [a.r, a.g, a.b]
            }
        }, {
            "./rgbToObject": 42
        }
    ],
    38: [
        function (n, m, i) {
            var o = n("./hexToDecimal");
            var k = n("./rgbToArray");
            var l = n("./rgbToHex");
            m.exports = function j(b) {
                var a = l.apply(this, k(b));
                return o(a)
            }
        }, {
            "./hexToDecimal": 30,
            "./rgbToArray": 37,
            "./rgbToHex": 39
        }
    ],
    39: [
        function (f, i, g) {
            i.exports = function h(a, b, c) {
                return "#" + ((1 << 24) + (a << 16) + (b << 8) + c)
                    .toString(16)
                    .slice(1)
            }
        }, {}
    ],
    40: [
        function (i, h, f) {
            h.exports = function g(v, l, c) {
                if (arguments.length !== 3) {
                    return false
                }
                v /= 255;
                l /= 255;
                c /= 255;
                var b = Math.max(v, l, c);
                var s = Math.min(v, l, c);
                var d = b + s;
                var a = b - s;
                var r;
                var w;
                var u = d / 2;
                if (b === s) {
                    r = w = 0
                } else {
                    w = u > 0.5
                        ? a / (2 - b - s)
                        : a / d;
                    switch (b) {
                        case v:
                            r = (l - c) / a;
                            break;
                        case l:
                            r = 2 + (c - v) / a;
                            break;
                        case c:
                            r = 4 + (v - l) / a;
                            break
                    }
                    r *= 60;
                    if (r < 0) {
                        r += 360
                    }
                }
                return [
                    r, Math.round(100 * w),
                    Math.round(100 * u)
                ]
            }
        }, {}
    ],
    41: [
        function (i, h, g) {
            h.exports = function f(y, r, d) {
                if (arguments.length !== 3) {
                    return false
                }
                var x = y / 255;
                var w = r / 255;
                var b = d / 255;
                var c = Math.max(x, w, b);
                var v = Math.min(x, w, b);
                var s;
                var z;
                var A = c;
                var a = c - v;
                z = c === 0
                    ? 0
                    : a / c;
                if (c === v) {
                    s = 0
                } else {
                    switch (c) {
                        case x:
                            s = (w - b) / a + (w < b
                                ? 6
                                : 0);
                            break;
                        case w:
                            s = (b - x) / a + 2;
                            break;
                        case b:
                            s = (x - w) / a + 4;
                            break
                    }
                    s /= 6
                }
                return [
                    Math.round(360 * s),
                    Math.round(100 * z),
                    Math.round(100 * A)
                ]
            }
        }, {}
    ],
    42: [
        function (f, i, g) {
            i.exports = function h(b) {
                var a = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
                var c = a.exec(b);
                return {
                    r: Number(c[1]),
                    g: Number(c[2]),
                    b: Number(c[3])
                }
            }
        }, {}
    ],
    43: [
        function (g, k, h) {
            var i = g("./rgbaToObject");
            k.exports = function j(b) {
                var a = i(b);
                return [a.r, a.g, a.b, a.a]
            }
        }, {
            "./rgbaToObject": 44
        }
    ],
    44: [
        function (f, i, g) {
            i.exports = function h(b) {
                var a = /rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
                var c = a.exec(b);
                return {
                    r: Number(c[1]),
                    g: Number(c[2]),
                    b: Number(c[3]),
                    a: Number(c[4])
                }
            }
        }, {}
    ],
    45: [
        function (i, h, f) {
            h.exports = function g(a) {
                var b = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                a = a.replace(b, function (l, c, d, m) {
                    return "#" + c + c + d + d + m + m
                });
                return a
            }
        }, {}
    ],
    46: [
        function (j, i, k) {
            var g = j("./utils/getBoundingClientRect");
            i.exports = function h(c, a) {
                var b;
                if (a) {
                    b = g(c);
                    return {width: b.width, height: b.height}
                }
                return {width: c.offsetWidth, height: c.offsetHeight}
            }
        }, {
            "./utils/getBoundingClientRect": 47
        }
    ],
    47: [
        function (i, h, f) {
            h.exports = function g(b) {
                var a = b.getBoundingClientRect();
                return {
                    top: a.top,
                    right: a.right,
                    bottom: a.bottom,
                    left: a.left,
                    width: a.width || a.right - a.left,
                    height: a.height || a.bottom - a.top
                }
            }
        }, {}
    ],
    48: [
        function (n, m, o) {
            var i = n("./shared/stylePropertyCache");
            var k = n("./getStyleProperty");
            var l = n("./getStyleValue");
            m.exports = function j(a, b) {
                var c;
                a = k(a);
                if (!a) {
                    return false
                }
                c = i[a].css;
                if (typeof b !== "undefined") {
                    b = l(a, b);
                    if (b === false) {
                        return false
                    }
                    c += ":" + b + ";"
                }
                return c
            }
        }, {
            "./getStyleProperty": 49,
            "./getStyleValue": 50,
            "./shared/stylePropertyCache": 53
        }
    ],
    49: [
        function (q, r, o) {
            var u = q("./shared/stylePropertyCache");
            var n = q("./shared/getStyleTestElement");
            var t = q("./utils/toCSS");
            var l = q("./utils/toDOM");
            var m = q("./shared/prefixHelper");
            var s = function s(c, b) {
                var a = t(c);
                var d = b === false
                    ? false
                    : t(b);
                u[c] = u[b] = u[a] = u[d] = {
                    dom: b,
                    css: d
                };
                return b
            };
            r.exports = function p(c) {
                var f;
                var b;
                var d;
                var a;
                c += "";
                if (c in u) {
                    return u[c].dom
                }
                d = n();
                c = l(c);
                b = c
                    .charAt(0)
                    .toUpperCase() + c.substring(1);
                if (c === "filter") {
                    f = ["WebkitFilter", "filter"]
                } else {
                    f = (c + " " + m.dom.join(b + " ") + b).split(" ")
                }
                for (a = 0; a < f.length; a++) {
                    if (typeof d.style[f[a]] !== "undefined") {
                        if (a !== 0) {
                            m.reduce(a - 1)
                        }
                        return s(c, f[a])
                    }
                }
                return s(c, false)
            }
        }, {
            "./shared/getStyleTestElement": 51,
            "./shared/prefixHelper": 52,
            "./shared/stylePropertyCache": 53,
            "./utils/toCSS": 56,
            "./utils/toDOM": 57
        }
    ],
    50: [
        function (t, v, q) {
            var s = t("./getStyleProperty");
            var n = t("./shared/styleValueAvailable");
            var o = t("./shared/prefixHelper");
            var w = t("./shared/stylePropertyCache");
            var p = {};
            var m = /(\([^\)]+\))/gi;
            var r = /([^ ,;\(]+(\([^\)]+\))?)/gi;
            v.exports = function u(b, c) {
                var a;
                c += "";
                b = s(b);
                if (!b) {
                    return false
                }
                if (n(b, c)) {
                    return c
                }
                a = w[b].css;
                c = c.replace(r, function (h) {
                    var i;
                    var d;
                    var f;
                    var g;
                    if (h[0] === "#" || !isNaN(h[0])) {
                        return h
                    }
                    d = h.replace(m, "");
                    f = a + ":" + d;
                    if (f in p) {
                        if (p[f] === false) {
                            return ""
                        }
                        return h.replace(d, p[f])
                    }
                    i = o
                        .css
                        .map(function (j) {
                            return j + h
                        });
                    i = [h].concat(i);
                    for (g = 0; g < i.length; g++) {
                        if (n(b, i[g])) {
                            if (g !== 0) {
                                o.reduce(g - 1)
                            }
                            p[f] = i[g].replace(m, "");
                            return i[g]
                        }
                    }
                    p[f] = false;
                    return ""
                });
                c = c.trim();
                return c === ""
                    ? false
                    : c
            }
        }, {
            "./getStyleProperty": 49,
            "./shared/prefixHelper": 52,
            "./shared/stylePropertyCache": 53,
            "./shared/styleValueAvailable": 54
        }
    ],
    51: [
        function (k, j, g) {
            var i;
            j.exports = function h() {
                if (!i) {
                    i = document.createElement("_")
                } else {
                    i.style.cssText = "";
                    i.removeAttribute("style")
                }
                return i
            };
            j.exports.resetElement = function () {
                i = null
            }
        }, {}
    ],
    52: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    53: [
        function (d, g, f) {
            g.exports = {}
        }, {}
    ],
    54: [
        function (s, t, r) {
            var u = s("./stylePropertyCache");
            var q = s("./getStyleTestElement");
            var n = false;
            var l;
            var m;
            var p = function p() {
                var b;
                if (!n) {
                    n = true;
                    l = "CSS" in window && "supports" in window.CSS;
                    m = false;
                    b = q();
                    try {
                        b.style.width = "invalid"
                    } catch (a) {
                        m = true
                    }
                }
            };
            t.exports = function o(d, f) {
                var a;
                var b;
                p();
                if (l) {
                    d = u[d].css;
                    return CSS.supports(d, f)
                }
                b = q();
                a = b.style[d];
                if (m) {
                    try {
                        b.style[d] = f
                    } catch (c) {
                        return false
                    }
                } else {
                    b.style[d] = f
                }
                return b.style[d] && b.style[d] !== a
            };
            t.exports.resetFlags = function () {
                n = false
            }
        }, {
            "./getStyleTestElement": 51,
            "./stylePropertyCache": 53
        }
    ],
    55: [
        function (k, j, h) {
            var g = /(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
            j.exports = function i(a) {
                a = String
                    .prototype
                    .replace
                    .call(a, g, "");
                return a
                    .charAt(0)
                    .toLowerCase() + a.substring(1)
            }
        }, {}
    ],
    56: [
        function (k, j, g) {
            var i = /^(webkit|moz|ms)/gi;
            j.exports = function h(a) {
                var b;
                if (a.toLowerCase() === "cssfloat") {
                    return "float"
                }
                if (i.test(a)) {
                    a = "-" + a
                }
                return a
                    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
                    .replace(/([a-z\d])([A-Z])/g, "$1-$2")
                    .toLowerCase()
            }
        }, {}
    ],
    57: [
        function (g, k, h) {
            var i = /-([a-z])/g;
            k.exports = function j(a) {
                var b;
                if (a.toLowerCase() === "float") {
                    return "cssFloat"
                }
                a = a.replace(i, function (c, d) {
                    return d.toUpperCase()
                });
                if (a.substr(0, 2) === "Ms") {
                    a = "ms" + a.substring(2)
                }
                return a
            }
        }, {}
    ],
    58: [
        function (m, l, h) {
            var k = m("@marcom/ac-prefixer/getStyleProperty");
            var j = m("@marcom/ac-prefixer/stripPrefixes");
            l.exports = function i() {
                var c = Array
                    .prototype
                    .slice
                    .call(arguments);
                var g = c.shift(c);
                var a = window.getComputedStyle(g);
                var b = {};
                var q;
                var f;
                var r;
                var d;
                if (typeof c[0] !== "string") {
                    c = c[0]
                }
                for (d = 0; d < c.length; d++) {
                    q = c[d];
                    f = k(q);
                    if (f) {
                        q = j(f);
                        r = a[f];
                        if (!r || r === "auto") {
                            r = null
                        }
                        if (r) {
                            r = j(r)
                        }
                    } else {
                        r = null
                    }
                    b[q] = r
                }
                return b
            }
        }, {
            "@marcom/ac-prefixer/getStyleProperty": 49,
            "@marcom/ac-prefixer/stripPrefixes": 55
        }
    ],
    59: [
        function (k, j, g) {
            var i = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            j.exports = function h(a) {
                var b;
                var c;
                var d;
                if (!a && a !== 0) {
                    return ""
                }
                if (Array.isArray(a)) {
                    return a + ""
                }
                if ((typeof a === "undefined"
                    ? "undefined"
                    : i(a)) === "object") {
                    b = "";
                    c = Object.keys(a);
                    for (d = 0; d < c.length; d++) {
                        b += c[d] + "(" + a[c[d]] + ") "
                    }
                    return b.trim()
                }
                return a
            }
        }, {}
    ],
    60: [
        function (p, o, q) {
            var m = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var k = p("@marcom/ac-prefixer/getStyleCSS");
            var n = p("@marcom/ac-prefixer/getStyleProperty");
            var j = p("./internal/normalizeValue");
            o.exports = function l(g, a) {
                var b = "";
                var c;
                var h;
                var d;
                var i;
                var f;
                if ((typeof a === "undefined"
                    ? "undefined"
                    : m(a)) !== "object") {
                    throw new TypeError("setStyle: styles must be an Object")
                }
                for (h in a) {
                    i = j(a[h]);
                    if (!i && i !== 0) {
                        d = n(h);
                        if ("removeAttribute" in g.style) {
                            g
                                .style
                                .removeAttribute(d)
                        } else {
                            g.style[d] = ""
                        }
                    } else {
                        c = k(h, i);
                        if (c !== false) {
                            b += " " + c
                        }
                    }
                }
                if (b.length) {
                    f = g.style.cssText;
                    if (f.charAt(f.length - 1) !== ";") {
                        f += ";"
                    }
                    f += b;
                    g.style.cssText = f
                }
                return g
            }
        }, {
            "./internal/normalizeValue": 59,
            "@marcom/ac-prefixer/getStyleCSS": 48,
            "@marcom/ac-prefixer/getStyleProperty": 49
        }
    ],
    61: [
        function (d, g, f) {
            g.exports = {
                createBezier: d("./ac-easing/createBezier"),
                createPredefined: d("./ac-easing/createPredefined"),
                createStep: d("./ac-easing/createStep"),
                Ease: d("./ac-easing/Ease")
            }
        }, {
            "./ac-easing/Ease": 62,
            "./ac-easing/createBezier": 63,
            "./ac-easing/createPredefined": 64,
            "./ac-easing/createStep": 65
        }
    ],
    62: [
        function (h, m, i) {
            var j = "Ease expects an easing function.";
            function k(a, b) {
                if (typeof a !== "function") {
                    throw new TypeError(j)
                }
                this.easingFunction = a;
                this.cssString = b || null
            }
            var l = k.prototype;
            l.getValue = function (a) {
                return this.easingFunction(a, 0, 1, 1)
            };
            m.exports = k
        }, {}
    ],
    63: [
        function (i, o, j) {
            i("@marcom/ac-polyfills/Array/prototype.every");
            var m = i("./Ease");
            var k = i("./helpers/KeySpline");
            var n = "Bezier curve expects exactly four (4) numbers. Given: ";
            o.exports = function l(r, b, s, c) {
                var a = Array
                    .prototype
                    .slice
                    .call(arguments);
                var f = a.every(function (p) {
                    return typeof p === "number"
                });
                if (a.length !== 4 || !f) {
                    throw new TypeError(n + a)
                }
                var d = new k(r, b, s, c);
                var h = function h(q, w, p, v) {
                    return d.get(q / v) * p + w
                };
                var g = "cubic-bezier(" + a.join(", ") + ")";
                return new m(h, g)
            }
        }, {
            "./Ease": 62,
            "./helpers/KeySpline": 66,
            "@marcom/ac-polyfills/Array/prototype.every": undefined
        }
    ],
    64: [
        function (q, s, p) {
            var l = q("./createStep");
            var o = q("./helpers/cssAliases");
            var r = q("./helpers/easingFunctions");
            var m = q("./Ease");
            var n = 'Easing function "%TYPE%" not recognized among the following: ' + Object
                .keys(r)
                .join(", ");
            s.exports = function k(b) {
                var a;
                if (b === "step-start") {
                    return l(1, "start")
                } else {
                    if (b === "step-end") {
                        return l(1, "end")
                    } else {
                        a = r[b]
                    }
                }
                if (!a) {
                    throw new Error(n.replace("%TYPE%", b))
                }
                return new m(a, o[b])
            }
        }, {
            "./Ease": 62,
            "./createStep": 65,
            "./helpers/cssAliases": 67,
            "./helpers/easingFunctions": 68
        }
    ],
    65: [
        function (n, m, o) {
            var l = n("./Ease");
            var i = "Step function expects a numeric value greater than zero. Given: ";
            var j = 'Step function direction must be either "start" or "end" (default). Given: ';
            m.exports = function k(d, a) {
                a = a || "end";
                if (typeof d !== "number" || d < 1) {
                    throw new TypeError(i + d)
                }
                if (a !== "start" && a !== "end") {
                    throw new TypeError(j + a)
                }
                var b = function b(h, f, g, s) {
                    var t = g / d;
                    var u = Math[a === "start"
                            ? "floor"
                            : "ceil"](h / s * d);
                    return f + t * u
                };
                var c = "steps(" + d + ", " + a + ")";
                return new l(b, c)
            }
        }, {
            "./Ease": 62
        }
    ],
    66: [
        function (f, i, g) {
            /*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */;
            function h(a, d, b, q) {
                this.get = function (j) {
                    if (a === d && b === q) {
                        return j
                    }
                    return t(p(j), d, q)
                };
                function r(k, j) {
                    return 1 - 3 * j + 3 * k
                }
                function s(k, j) {
                    return 3 * j - 6 * k
                }
                function u(j) {
                    return 3 * j
                }
                function t(j, l, k) {
                    return ((r(l, k) * j + s(l, k)) * j + u(l)) * j
                }
                function c(j, l, k) {
                    return 3 * r(l, k) * j * j + 2 * s(l, k) * j + u(l)
                }
                function p(k) {
                    var m = k;
                    for (var l = 0; l < 4; ++l) {
                        var j = c(m, a, b);
                        if (j === 0) {
                            return m
                        }
                        var n = t(m, a, b) - k;
                        m -= n / j
                    }
                    return m
                }
            }
            i.exports = h
        }, {}
    ],
    67: [
        function (i, h, f) {
            var g = {
                linear: "cubic-bezier(0, 0, 1, 1)",
                ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
                "ease-out": "cubic-bezier(0, 0, 0.58, 1)",
                "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
                "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
                "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
                "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
                "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
                "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
                "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
                "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
                "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
                "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
                "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
                "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
                "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
                "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
                "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
                "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
                "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
                "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
                "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
                "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
                "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
                "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            };
            g.easeIn = g["ease-in"];
            g.easeOut = g["ease-out"];
            g.easeInOut = g["ease-in-out"];
            g.easeInCubic = g["ease-in-cubic"];
            g.easeOutCubic = g["ease-out-cubic"];
            g.easeInOutCubic = g["ease-in-out-cubic"];
            g.easeInQuad = g["ease-in-quad"];
            g.easeOutQuad = g["ease-out-quad"];
            g.easeInOutQuad = g["ease-in-out-quad"];
            g.easeInQuart = g["ease-in-quart"];
            g.easeOutQuart = g["ease-out-quart"];
            g.easeInOutQuart = g["ease-in-out-quart"];
            g.easeInQuint = g["ease-in-quint"];
            g.easeOutQuint = g["ease-out-quint"];
            g.easeInOutQuint = g["ease-in-out-quint"];
            g.easeInSine = g["ease-in-sine"];
            g.easeOutSine = g["ease-out-sine"];
            g.easeInOutSine = g["ease-in-out-sine"];
            g.easeInExpo = g["ease-in-expo"];
            g.easeOutExpo = g["ease-out-expo"];
            g.easeInOutExpo = g["ease-in-out-expo"];
            g.easeInCirc = g["ease-in-circ"];
            g.easeOutCirc = g["ease-out-circ"];
            g.easeInOutCirc = g["ease-in-out-circ"];
            g.easeInBack = g["ease-in-back"];
            g.easeOutBack = g["ease-out-back"];
            g.easeInOutBack = g["ease-in-out-back"];
            h.exports = g
        }, {}
    ],
    68: [
        function (ay, aA, W) {
            var S = ay("../createBezier");
            var af = S(0.25, 0.1, 0.25, 1).easingFunction;
            var aw = S(0.42, 0, 1, 1).easingFunction;
            var Z = S(0, 0, 0.58, 1).easingFunction;
            var ae = S(0.42, 0, 0.58, 1).easingFunction;
            var ah = function ah(b, d, a, c) {
                return a * b / c + d
            };
            var av = function av(b, d, a, c) {
                return a * (b /= c) * b + d
            };
            var O = function O(b, d, a, c) {
                return -a * (b /= c) * (b - 2) + d
            };
            var Y = function Y(b, d, a, c) {
                if ((b /= c / 2) < 1) {
                    return a / 2 * b * b + d
                }
                return -a / 2 * (--b * (b - 2) - 1) + d
            };
            var au = function au(b, d, a, c) {
                return a * (b /= c) * b * b + d
            };
            var aB = function aB(b, d, a, c) {
                return a * ((b = b / c - 1) * b * b + 1) + d
            };
            var at = function at(b, d, a, c) {
                if ((b /= c / 2) < 1) {
                    return a / 2 * b * b * b + d
                }
                return a / 2 * ((b -= 2) * b * b + 2) + d
            };
            var an = function an(b, d, a, c) {
                return a * (b /= c) * b * b * b + d
            };
            var ap = function ap(b, d, a, c) {
                return -a * ((b = b / c - 1) * b * b * b - 1) + d
            };
            var am = function am(b, d, a, c) {
                if ((b /= c / 2) < 1) {
                    return a / 2 * b * b * b * b + d
                }
                return -a / 2 * ((b -= 2) * b * b * b - 2) + d
            };
            var ad = function ad(b, d, a, c) {
                return a * (b /= c) * b * b * b * b + d
            };
            var ag = function ag(b, d, a, c) {
                return a * ((b = b / c - 1) * b * b * b * b + 1) + d
            };
            var ac = function ac(b, d, a, c) {
                if ((b /= c / 2) < 1) {
                    return a / 2 * b * b * b * b * b + d
                }
                return a / 2 * ((b -= 2) * b * b * b * b + 2) + d
            };
            var az = function az(b, d, a, c) {
                return -a * Math.cos(b / c * (Math.PI / 2)) + a + d
            };
            var Q = function Q(b, d, a, c) {
                return a * Math.sin(b / c * (Math.PI / 2)) + d
            };
            var aa = function aa(b, d, a, c) {
                return -a / 2 * (Math.cos(Math.PI * b / c) - 1) + d
            };
            var V = function V(b, d, a, c) {
                return b === 0
                    ? d
                    : a * Math.pow(2, 10 * (b / c - 1)) + d
            };
            var ab = function ab(b, d, a, c) {
                return b === c
                    ? d + a
                    : a * (-Math.pow(2, -10 * b / c) + 1) + d
            };
            var ak = function ak(b, d, a, c) {
                if (b === 0) {
                    return d
                } else {
                    if (b === c) {
                        return d + a
                    } else {
                        if ((b /= c / 2) < 1) {
                            return a / 2 * Math.pow(2, 10 * (b - 1)) + d
                        }
                    }
                }
                return a / 2 * (-Math.pow(2, -10 * --b) + 2) + d
            };
            var aq = function aq(b, d, a, c) {
                return -a * (Math.sqrt(1 - (b /= c) * b) - 1) + d
            };
            var ax = function ax(b, d, a, c) {
                return a * Math.sqrt(1 - (b = b / c - 1) * b) + d
            };
            var T = function T(b, d, a, c) {
                if ((b /= c / 2) < 1) {
                    return -a / 2 * (Math.sqrt(1 - b * b) - 1) + d
                }
                return a / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + d
            };
            var X = function X(c, f, a, d) {
                var h = 1.70158;
                var b = 0;
                var g = a;
                if (c === 0) {
                    return f
                } else {
                    if ((c /= d) === 1) {
                        return f + a
                    }
                }
                if (!b) {
                    b = d * 0.3
                }
                if (g < Math.abs(a)) {
                    g = a;
                    h = b / 4
                } else {
                    h = b / (2 * Math.PI) * Math.asin(a / g)
                }
                return -(g * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * d - h) * (2 * Math.PI) / b)) + f
            };
            var U = function U(c, f, a, d) {
                var h = 1.70158;
                var b = 0;
                var g = a;
                if (c === 0) {
                    return f
                } else {
                    if ((c /= d) === 1) {
                        return f + a
                    }
                }
                if (!b) {
                    b = d * 0.3
                }
                if (g < Math.abs(a)) {
                    g = a;
                    h = b / 4
                } else {
                    h = b / (2 * Math.PI) * Math.asin(a / g)
                }
                return g * Math.pow(2, -10 * c) * Math.sin((c * d - h) * (2 * Math.PI) / b) + a + f
            };
            var ai = function ai(c, f, a, d) {
                var h = 1.70158;
                var b = 0;
                var g = a;
                if (c === 0) {
                    return f
                } else {
                    if ((c /= d / 2) === 2) {
                        return f + a
                    }
                }
                if (!b) {
                    b = d * (0.3 * 1.5)
                }
                if (g < Math.abs(a)) {
                    g = a;
                    h = b / 4
                } else {
                    h = b / (2 * Math.PI) * Math.asin(a / g)
                }
                if (c < 1) {
                    return -0.5 * (g * Math.pow(2, 10 * (c -= 1)) * Math.sin((c * d - h) * (2 * Math.PI) / b)) + f
                }
                return g * Math.pow(2, -10 * (c -= 1)) * Math.sin((c * d - h) * (2 * Math.PI) / b) * 0.5 + a + f
            };
            var aj = function aj(b, d, a, c, f) {
                if (f === undefined) {
                    f = 1.70158
                }
                return a * (b /= c) * b * ((f + 1) * b - f) + d
            };
            var al = function al(b, d, a, c, f) {
                if (f === undefined) {
                    f = 1.70158
                }
                return a * ((b = b / c - 1) * b * ((f + 1) * b + f) + 1) + d
            };
            var ar = function ar(b, d, a, c, f) {
                if (f === undefined) {
                    f = 1.70158
                }
                if ((b /= c / 2) < 1) {
                    return a / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + d
                }
                return a / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + d
            };
            var R = function R(b, d, a, c) {
                if ((b /= c) < 1 / 2.75) {
                    return a * (7.5625 * b * b) + d
                } else {
                    if (b < 2 / 2.75) {
                        return a * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + d
                    } else {
                        if (b < 2.5 / 2.75) {
                            return a * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + d
                        }
                    }
                }
                return a * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + d
            };
            var ao = function ao(b, d, a, c) {
                return a - R(c - b, 0, a, c) + d
            };
            var P = function P(b, d, a, c) {
                if (b < c / 2) {
                    return ao(b * 2, 0, a, c) * 0.5 + d
                }
                return R(b * 2 - c, 0, a, c) * 0.5 + a * 0.5 + d
            };
            aA.exports = {
                linear: ah,
                ease: af,
                easeIn: aw,
                "ease-in": aw,
                easeOut: Z,
                "ease-out": Z,
                easeInOut: ae,
                "ease-in-out": ae,
                easeInCubic: au,
                "ease-in-cubic": au,
                easeOutCubic: aB,
                "ease-out-cubic": aB,
                easeInOutCubic: at,
                "ease-in-out-cubic": at,
                easeInQuad: av,
                "ease-in-quad": av,
                easeOutQuad: O,
                "ease-out-quad": O,
                easeInOutQuad: Y,
                "ease-in-out-quad": Y,
                easeInQuart: an,
                "ease-in-quart": an,
                easeOutQuart: ap,
                "ease-out-quart": ap,
                easeInOutQuart: am,
                "ease-in-out-quart": am,
                easeInQuint: ad,
                "ease-in-quint": ad,
                easeOutQuint: ag,
                "ease-out-quint": ag,
                easeInOutQuint: ac,
                "ease-in-out-quint": ac,
                easeInSine: az,
                "ease-in-sine": az,
                easeOutSine: Q,
                "ease-out-sine": Q,
                easeInOutSine: aa,
                "ease-in-out-sine": aa,
                easeInExpo: V,
                "ease-in-expo": V,
                easeOutExpo: ab,
                "ease-out-expo": ab,
                easeInOutExpo: ak,
                "ease-in-out-expo": ak,
                easeInCirc: aq,
                "ease-in-circ": aq,
                easeOutCirc: ax,
                "ease-out-circ": ax,
                easeInOutCirc: T,
                "ease-in-out-circ": T,
                easeInBack: aj,
                "ease-in-back": aj,
                easeOutBack: al,
                "ease-out-back": al,
                easeInOutBack: ar,
                "ease-in-out-back": ar,
                easeInElastic: X,
                "ease-in-elastic": X,
                easeOutElastic: U,
                "ease-out-elastic": U,
                easeInOutElastic: ai,
                "ease-in-out-elastic": ai,
                easeInBounce: ao,
                "ease-in-bounce": ao,
                easeOutBounce: R,
                "ease-out-bounce": R,
                easeInOutBounce: P,
                "ease-in-out-bounce": P
            }
        }, {
            "../createBezier": 63
        }
    ],
    69: [
        function (d, g, f) {
            g.exports = {
                EventEmitterMicro: d("./ac-event-emitter-micro/EventEmitterMicro")
            }
        }, {
            "./ac-event-emitter-micro/EventEmitterMicro": 70
        }
    ],
    70: [
        function (g, k, h) {
            function i() {
                this._events = {}
            }
            var j = i.prototype;
            j.on = function (b, a) {
                this._events[b] = this._events[b] || [];
                this
                    ._events[b]
                    .unshift(a)
            };
            j.once = function (d, a) {
                var b = this;
                function c(f) {
                    b.off(d, c);
                    if (f !== undefined) {
                        a(f)
                    } else {
                        a()
                    }
                }
                this.on(d, c)
            };
            j.off = function (c, a) {
                if (!this.has(c)) {
                    return
                }
                var b = this
                    ._events[c]
                    .indexOf(a);
                if (b === -1) {
                    return
                }
                this
                    ._events[c]
                    .splice(b, 1)
            };
            j.trigger = function (c, a) {
                if (!this.has(c)) {
                    return
                }
                for (var b = this._events[c].length - 1; b >= 0; b--) {
                    if (a !== undefined) {
                        this._events[c][b](a)
                    } else {
                        this._events[c][b]()
                    }
                }
            };
            j.has = function (a) {
                if (a in this._events === false || this._events[a].length === 0) {
                    return false
                }
                return true
            };
            j.destroy = function () {
                for (var a in this._events) {
                    this._events[a] = null
                }
                this._events = null
            };
            k.exports = i
        }, {}
    ],
    71: [
        function (q, p, j) {
            var o = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            q("@marcom/ac-polyfills/Array/isArray");
            var l = q("./extend");
            var k = Object.prototype.hasOwnProperty;
            var n = function n(c, b) {
                var a;
                for (a in b) {
                    if (k.call(b, a)) {
                        if (b[a] === null) {
                            c[a] = null
                        } else {
                            if (o(b[a]) === "object") {
                                c[a] = Array.isArray(b[a])
                                    ? []
                                    : {};
                                n(c[a], b[a])
                            } else {
                                c[a] = b[a]
                            }
                        }
                    }
                }
                return c
            };
            p.exports = function m(a, b) {
                if (b) {
                    return n({}, a)
                }
                return l({}, a)
            }
        }, {
            "./extend": 73,
            "@marcom/ac-polyfills/Array/isArray": undefined
        }
    ],
    72: [
        function (h, l, i) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var k = function k() {};
            l.exports = function m(a) {
                if (arguments.length > 1) {
                    throw new Error("Second argument not supported")
                }
                if (a === null || (typeof a === "undefined"
                    ? "undefined"
                    : j(a)) !== "object") {
                    throw new TypeError("Object prototype may only be an Object.")
                }
                if (typeof Object.create === "function") {
                    return Object.create(a)
                } else {
                    k.prototype = a;
                    return new k()
                }
            }
        }, {}
    ],
    73: [
        function (k, j, g) {
            k("@marcom/ac-polyfills/Array/prototype.forEach");
            var h = Object.prototype.hasOwnProperty;
            j.exports = function i() {
                var a;
                var b;
                if (arguments.length < 2) {
                    a = [{}, arguments[0]]
                } else {
                    a = []
                        .slice
                        .call(arguments)
                }
                b = a.shift();
                a.forEach(function (c) {
                    if (c != null) {
                        for (var d in c) {
                            if (h.call(c, d)) {
                                b[d] = c[d]
                            }
                        }
                    }
                });
                return b
            }
        }, {
            "@marcom/ac-polyfills/Array/prototype.forEach": undefined
        }
    ],
    74: [
        function (d, g, f) {
            g.exports = {
                PageVisibilityManager: d("./ac-page-visibility/PageVisibilityManager")
            }
        }, {
            "./ac-page-visibility/PageVisibilityManager": 75
        }
    ],
    75: [
        function (o, m, i) {
            var n = o("@marcom/ac-object/create");
            var k = o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            function j() {
                if (typeof document.addEventListener === "undefined") {
                    return
                }
                var a;
                if (typeof document.hidden !== "undefined") {
                    this._hidden = "hidden";
                    a = "visibilitychange"
                } else {
                    if (typeof document.mozHidden !== "undefined") {
                        this._hidden = "mozHidden";
                        a = "mozvisibilitychange"
                    } else {
                        if (typeof document.msHidden !== "undefined") {
                            this._hidden = "msHidden";
                            a = "msvisibilitychange"
                        } else {
                            if (typeof document.webkitHidden !== "undefined") {
                                this._hidden = "webkitHidden";
                                a = "webkitvisibilitychange"
                            }
                        }
                    }
                }
                if (typeof document[this._hidden] === "undefined") {
                    this.isHidden = false
                } else {
                    this.isHidden = document[this._hidden]
                }
                if (a) {
                    document.addEventListener(a, this._handleVisibilityChange.bind(this), false)
                }
                k.call(this)
            }
            var l = j.prototype = n(k.prototype);
            l.CHANGED = "changed";
            l._handleVisibilityChange = function (a) {
                this.isHidden = document[this._hidden];
                this.trigger(this.CHANGED, {isHidden: this.isHidden})
            };
            m.exports = new j()
        }, {
            "@marcom/ac-event-emitter-micro": 69,
            "@marcom/ac-object/create": 72
        }
    ],
    76: [
        function (f, i, g) {
            i.exports = h;
            function h(b) {
                var a = new Float32Array(16);
                a[0] = b[0];
                a[1] = b[1];
                a[2] = b[2];
                a[3] = b[3];
                a[4] = b[4];
                a[5] = b[5];
                a[6] = b[6];
                a[7] = b[7];
                a[8] = b[8];
                a[9] = b[9];
                a[10] = b[10];
                a[11] = b[11];
                a[12] = b[12];
                a[13] = b[13];
                a[14] = b[14];
                a[15] = b[15];
                return a
            }
        }, {}
    ],
    77: [
        function (f, h, g) {
            h.exports = i;
            function i() {
                var a = new Float32Array(16);
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 1;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            }
        }, {}
    ],
    78: [
        function (f, i, g) {
            i.exports = h;
            function h(b, v, z) {
                var G = v[0],
                    H = v[1],
                    I = v[2],
                    F = v[3],
                    a = G + G,
                    M = H + H,
                    E = I + I,
                    J = G * a,
                    K = G * M,
                    L = G * E,
                    c = H * M,
                    y = H * E,
                    q = I * E,
                    d = F * a,
                    w = F * M,
                    x = F * E;
                b[0] = 1 - (c + q);
                b[1] = K + x;
                b[2] = L - w;
                b[3] = 0;
                b[4] = K - x;
                b[5] = 1 - (J + q);
                b[6] = y + d;
                b[7] = 0;
                b[8] = L + w;
                b[9] = y - d;
                b[10] = 1 - (J + c);
                b[11] = 0;
                b[12] = z[0];
                b[13] = z[1];
                b[14] = z[2];
                b[15] = 1;
                return b
            }
        }, {}
    ],
    79: [
        function (i, h, f) {
            h.exports = g;
            function g(a) {
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 1;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            }
        }, {}
    ],
    80: [
        function (f, i, g) {
            i.exports = h;
            function h(c, U) {
                var L = U[0],
                    P = U[1],
                    S = U[2],
                    Y = U[3],
                    ag = U[4],
                    ah = U[5],
                    ai = U[6],
                    aj = U[7],
                    K = U[8],
                    M = U[9],
                    O = U[10],
                    Q = U[11],
                    b = U[12],
                    d = U[13],
                    N = U[14],
                    W = U[15],
                    R = L * ah - P * ag,
                    T = L * ai - S * ag,
                    V = L * aj - Y * ag,
                    X = P * ai - S * ah,
                    aa = P * aj - Y * ah,
                    ab = S * aj - Y * ai,
                    ac = K * d - M * b,
                    ad = K * N - O * b,
                    ae = K * W - Q * b,
                    af = M * N - O * d,
                    Z = M * W - Q * d,
                    a = O * W - Q * N,
                    ak = R * a - T * Z + V * af + X * ae - aa * ad + ab * ac;
                if (!ak) {
                    return null
                }
                ak = 1 / ak;
                c[0] = (ah * a - ai * Z + aj * af) * ak;
                c[1] = (S * Z - P * a - Y * af) * ak;
                c[2] = (d * ab - N * aa + W * X) * ak;
                c[3] = (O * aa - M * ab - Q * X) * ak;
                c[4] = (ai * ae - ag * a - aj * ad) * ak;
                c[5] = (L * a - S * ae + Y * ad) * ak;
                c[6] = (N * V - b * ab - W * T) * ak;
                c[7] = (K * ab - O * V + Q * T) * ak;
                c[8] = (ag * Z - ah * ae + aj * ac) * ak;
                c[9] = (P * ae - L * Z - Y * ac) * ak;
                c[10] = (b * aa - d * V + W * R) * ak;
                c[11] = (M * V - K * aa - Q * R) * ak;
                c[12] = (ah * ad - ag * af - ai * ac) * ak;
                c[13] = (L * af - P * ad + S * ac) * ak;
                c[14] = (d * T - b * X - N * R) * ak;
                c[15] = (K * X - M * T + O * R) * ak;
                return c
            }
        }, {}
    ],
    81: [
        function (i, h, f) {
            h.exports = g;
            function g(G, C, F) {
                var a = C[0],
                    b = C[1],
                    d = C[2],
                    E = C[3],
                    O = C[4],
                    Q = C[5],
                    S = C[6],
                    U = C[7],
                    I = C[8],
                    K = C[9],
                    L = C[10],
                    M = C[11],
                    H = C[12],
                    J = C[13],
                    c = C[14],
                    D = C[15];
                var N = F[0],
                    P = F[1],
                    R = F[2],
                    T = F[3];
                G[0] = N * a + P * O + R * I + T * H;
                G[1] = N * b + P * Q + R * K + T * J;
                G[2] = N * d + P * S + R * L + T * c;
                G[3] = N * E + P * U + R * M + T * D;
                N = F[4];
                P = F[5];
                R = F[6];
                T = F[7];
                G[4] = N * a + P * O + R * I + T * H;
                G[5] = N * b + P * Q + R * K + T * J;
                G[6] = N * d + P * S + R * L + T * c;
                G[7] = N * E + P * U + R * M + T * D;
                N = F[8];
                P = F[9];
                R = F[10];
                T = F[11];
                G[8] = N * a + P * O + R * I + T * H;
                G[9] = N * b + P * Q + R * K + T * J;
                G[10] = N * d + P * S + R * L + T * c;
                G[11] = N * E + P * U + R * M + T * D;
                N = F[12];
                P = F[13];
                R = F[14];
                T = F[15];
                G[12] = N * a + P * O + R * I + T * H;
                G[13] = N * b + P * Q + R * K + T * J;
                G[14] = N * d + P * S + R * L + T * c;
                G[15] = N * E + P * U + R * M + T * D;
                return G
            }
        }, {}
    ],
    82: [
        function (i, h, g) {
            h.exports = f;
            function f(V, s, c, am) {
                var ac = am[0],
                    ad = am[1],
                    ae = am[2],
                    U = Math.sqrt(ac * ac + ad * ad + ae * ae),
                    Q,
                    x,
                    S,
                    a,
                    b,
                    d,
                    t,
                    af,
                    ag,
                    ah,
                    ai,
                    W,
                    Y,
                    aa,
                    ab,
                    T,
                    X,
                    Z,
                    y,
                    z,
                    R,
                    aj,
                    ak,
                    al;
                if (Math.abs(U) < 0.000001) {
                    return null
                }
                U = 1 / U;
                ac *= U;
                ad *= U;
                ae *= U;
                Q = Math.sin(c);
                x = Math.cos(c);
                S = 1 - x;
                a = s[0];
                b = s[1];
                d = s[2];
                t = s[3];
                af = s[4];
                ag = s[5];
                ah = s[6];
                ai = s[7];
                W = s[8];
                Y = s[9];
                aa = s[10];
                ab = s[11];
                T = ac * ac * S + x;
                X = ad * ac * S + ae * Q;
                Z = ae * ac * S - ad * Q;
                y = ac * ad * S - ae * Q;
                z = ad * ad * S + x;
                R = ae * ad * S + ac * Q;
                aj = ac * ae * S + ad * Q;
                ak = ad * ae * S - ac * Q;
                al = ae * ae * S + x;
                V[0] = a * T + af * X + W * Z;
                V[1] = b * T + ag * X + Y * Z;
                V[2] = d * T + ah * X + aa * Z;
                V[3] = t * T + ai * X + ab * Z;
                V[4] = a * y + af * z + W * R;
                V[5] = b * y + ag * z + Y * R;
                V[6] = d * y + ah * z + aa * R;
                V[7] = t * y + ai * z + ab * R;
                V[8] = a * aj + af * ak + W * al;
                V[9] = b * aj + ag * ak + Y * al;
                V[10] = d * aj + ah * ak + aa * al;
                V[11] = t * aj + ai * ak + ab * al;
                if (s !== V) {
                    V[12] = s[12];
                    V[13] = s[13];
                    V[14] = s[14];
                    V[15] = s[15]
                }
                return V
            }
        }, {}
    ],
    83: [
        function (i, h, g) {
            h.exports = f;
            function f(A, t, u) {
                var a = Math.sin(u),
                    v = Math.cos(u),
                    b = t[4],
                    c = t[5],
                    d = t[6],
                    s = t[7],
                    w = t[8],
                    x = t[9],
                    y = t[10],
                    z = t[11];
                if (t !== A) {
                    A[0] = t[0];
                    A[1] = t[1];
                    A[2] = t[2];
                    A[3] = t[3];
                    A[12] = t[12];
                    A[13] = t[13];
                    A[14] = t[14];
                    A[15] = t[15]
                }
                A[4] = b * v + w * a;
                A[5] = c * v + x * a;
                A[6] = d * v + y * a;
                A[7] = s * v + z * a;
                A[8] = w * v - b * a;
                A[9] = x * v - c * a;
                A[10] = y * v - d * a;
                A[11] = z * v - s * a;
                return A
            }
        }, {}
    ],
    84: [
        function (i, h, f) {
            h.exports = g;
            function g(w, b, c) {
                var a = Math.sin(c),
                    d = Math.cos(c),
                    x = b[0],
                    y = b[1],
                    z = b[2],
                    A = b[3],
                    s = b[8],
                    t = b[9],
                    u = b[10],
                    v = b[11];
                if (b !== w) {
                    w[4] = b[4];
                    w[5] = b[5];
                    w[6] = b[6];
                    w[7] = b[7];
                    w[12] = b[12];
                    w[13] = b[13];
                    w[14] = b[14];
                    w[15] = b[15]
                }
                w[0] = x * d - s * a;
                w[1] = y * d - t * a;
                w[2] = z * d - u * a;
                w[3] = A * d - v * a;
                w[8] = x * a + s * d;
                w[9] = y * a + t * d;
                w[10] = z * a + u * d;
                w[11] = A * a + v * d;
                return w
            }
        }, {}
    ],
    85: [
        function (i, h, f) {
            h.exports = g;
            function g(w, t, u) {
                var a = Math.sin(u),
                    v = Math.cos(u),
                    x = t[0],
                    y = t[1],
                    z = t[2],
                    A = t[3],
                    b = t[4],
                    c = t[5],
                    d = t[6],
                    s = t[7];
                if (t !== w) {
                    w[8] = t[8];
                    w[9] = t[9];
                    w[10] = t[10];
                    w[11] = t[11];
                    w[12] = t[12];
                    w[13] = t[13];
                    w[14] = t[14];
                    w[15] = t[15]
                }
                w[0] = x * v + b * a;
                w[1] = y * v + c * a;
                w[2] = z * v + d * a;
                w[3] = A * v + s * a;
                w[4] = b * v - x * a;
                w[5] = c * v - y * a;
                w[6] = d * v - z * a;
                w[7] = s * v - A * a;
                return w
            }
        }, {}
    ],
    86: [
        function (f, i, g) {
            i.exports = h;
            function h(c, l, d) {
                var m = d[0],
                    a = d[1],
                    b = d[2];
                c[0] = l[0] * m;
                c[1] = l[1] * m;
                c[2] = l[2] * m;
                c[3] = l[3] * m;
                c[4] = l[4] * a;
                c[5] = l[5] * a;
                c[6] = l[6] * a;
                c[7] = l[7] * a;
                c[8] = l[8] * b;
                c[9] = l[9] * b;
                c[10] = l[10] * b;
                c[11] = l[11] * b;
                c[12] = l[12];
                c[13] = l[13];
                c[14] = l[14];
                c[15] = l[15];
                return c
            }
        }, {}
    ],
    87: [
        function (f, i, g) {
            i.exports = h;
            function h(v, c, D) {
                var E = D[0],
                    F = D[1],
                    G = D[2],
                    y,
                    a,
                    b,
                    d,
                    H,
                    I,
                    J,
                    K,
                    x,
                    z,
                    B,
                    C;
                if (c === v) {
                    v[12] = c[0] * E + c[4] * F + c[8] * G + c[12];
                    v[13] = c[1] * E + c[5] * F + c[9] * G + c[13];
                    v[14] = c[2] * E + c[6] * F + c[10] * G + c[14];
                    v[15] = c[3] * E + c[7] * F + c[11] * G + c[15]
                } else {
                    y = c[0];
                    a = c[1];
                    b = c[2];
                    d = c[3];
                    H = c[4];
                    I = c[5];
                    J = c[6];
                    K = c[7];
                    x = c[8];
                    z = c[9];
                    B = c[10];
                    C = c[11];
                    v[0] = y;
                    v[1] = a;
                    v[2] = b;
                    v[3] = d;
                    v[4] = H;
                    v[5] = I;
                    v[6] = J;
                    v[7] = K;
                    v[8] = x;
                    v[9] = z;
                    v[10] = B;
                    v[11] = C;
                    v[12] = y * E + H * F + x * G + c[12];
                    v[13] = a * E + I * F + z * G + c[13];
                    v[14] = b * E + J * F + B * G + c[14];
                    v[15] = d * E + K * F + C * G + c[15]
                }
                return v
            }
        }, {}
    ],
    88: [
        function (f, i, g) {
            i.exports = h;
            function h(n, o) {
                if (n === o) {
                    var a = o[1],
                        c = o[2],
                        d = o[3],
                        q = o[6],
                        b = o[7],
                        p = o[11];
                    n[1] = o[4];
                    n[2] = o[8];
                    n[3] = o[12];
                    n[4] = a;
                    n[6] = o[9];
                    n[7] = o[13];
                    n[8] = c;
                    n[9] = q;
                    n[11] = o[14];
                    n[12] = d;
                    n[13] = b;
                    n[14] = p
                } else {
                    n[0] = o[0];
                    n[1] = o[4];
                    n[2] = o[8];
                    n[3] = o[12];
                    n[4] = o[1];
                    n[5] = o[5];
                    n[6] = o[9];
                    n[7] = o[13];
                    n[8] = o[2];
                    n[9] = o[6];
                    n[10] = o[10];
                    n[11] = o[14];
                    n[12] = o[3];
                    n[13] = o[7];
                    n[14] = o[11];
                    n[15] = o[15]
                }
                return n
            }
        }, {}
    ],
    89: [
        function (f, h, g) {
            h.exports = i;
            function i() {
                var a = new Float32Array(3);
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                return a
            }
        }, {}
    ],
    90: [
        function (f, i, g) {
            i.exports = h;
            function h(r, c, d) {
                var s = c[0],
                    a = c[1],
                    b = c[2],
                    o = d[0],
                    p = d[1],
                    q = d[2];
                r[0] = a * q - b * p;
                r[1] = b * o - s * q;
                r[2] = s * p - a * o;
                return r
            }
        }, {}
    ],
    91: [
        function (i, h, f) {
            h.exports = g;
            function g(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
            }
        }, {}
    ],
    92: [
        function (f, i, g) {
            i.exports = h;
            function h(d, a, b) {
                var c = new Float32Array(3);
                c[0] = d;
                c[1] = a;
                c[2] = b;
                return c
            }
        }, {}
    ],
    93: [
        function (f, i, g) {
            i.exports = h;
            function h(c) {
                var d = c[0],
                    a = c[1],
                    b = c[2];
                return Math.sqrt(d * d + a * a + b * b)
            }
        }, {}
    ],
    94: [
        function (i, h, f) {
            h.exports = g;
            function g(c, d) {
                var l = d[0],
                    a = d[1],
                    b = d[2];
                var m = l * l + a * a + b * b;
                if (m > 0) {
                    m = 1 / Math.sqrt(m);
                    c[0] = d[0] * m;
                    c[1] = d[1] * m;
                    c[2] = d[2] * m
                }
                return c
            }
        }, {}
    ],
    95: [
        function (f, h, g) {
            h.exports = i;
            function i() {
                var a = new Float32Array(4);
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                return a
            }
        }, {}
    ],
    96: [
        function (f, i, g) {
            i.exports = h;
            function h(k, a, b, d) {
                var c = new Float32Array(4);
                c[0] = k;
                c[1] = a;
                c[2] = b;
                c[3] = d;
                return c
            }
        }, {}
    ],
    97: [
        function (f, h, g) {
            h.exports = i;
            function i(c, d, n) {
                var o = d[0],
                    a = d[1],
                    b = d[2],
                    m = d[3];
                c[0] = n[0] * o + n[4] * a + n[8] * b + n[12] * m;
                c[1] = n[1] * o + n[5] * a + n[9] * b + n[13] * m;
                c[2] = n[2] * o + n[6] * a + n[10] * b + n[14] * m;
                c[3] = n[3] * o + n[7] * a + n[11] * b + n[15] * m;
                return c
            }
        }, {}
    ],
    98: [
        function (d, g, f) {
            g.exports = {
                Transform: d("./ac-transform/Transform")
            }
        }, {
            "./ac-transform/Transform": 99
        }
    ],
    99: [
        function (ae, al, L) {
            var af = ae("./gl-matrix/mat4");
            var an = ae("./gl-matrix/vec3");
            var ao = ae("./gl-matrix/vec4");
            var ak = Math.PI / 180;
            var am = 180 / Math.PI;
            var Q = 0,
                J = 0,
                U = 1,
                K = 1,
                Y = 2,
                I = 3;
            var ag = 4,
                M = 4,
                ah = 5,
                O = 5,
                ai = 6,
                aj = 7;
            var S = 8,
                X = 9,
                ab = 10,
                ac = 11;
            var N = 12,
                P = 12,
                R = 13,
                T = 13,
                W = 14,
                aa = 15;
            function Z() {
                this.m = af.create()
            }
            var V = Z.prototype;
            V.rotateX = function (a) {
                var b = ak * a;
                af.rotateX(this.m, this.m, b);
                return this
            };
            V.rotateY = function (a) {
                var b = ak * a;
                af.rotateY(this.m, this.m, b);
                return this
            };
            V.rotateZ = function (a) {
                var b = ak * a;
                af.rotateZ(this.m, this.m, b);
                return this
            };
            V.rotate = V.rotateZ;
            V.rotate3d = function (c, f, a, b) {
                if (f === null || f === undefined) {
                    f = c
                }
                if (a === null || f === undefined) {
                    a = c
                }
                var d = ak * b;
                af.rotate(this.m, this.m, d, [c, f, a]);
                return this
            };
            V.rotateAxisAngle = V.rotate3d;
            V.scale = function (a, b) {
                b = b || a;
                af.scale(this.m, this.m, [a, b, 1]);
                return this
            };
            V.scaleX = function (a) {
                af.scale(this.m, this.m, [a, 1, 1]);
                return this
            };
            V.scaleY = function (a) {
                af.scale(this.m, this.m, [1, a, 1]);
                return this
            };
            V.scaleZ = function (a) {
                af.scale(this.m, this.m, [1, 1, a]);
                return this
            };
            V.scale3d = function (a, b, c) {
                af.scale(this.m, this.m, [a, b, c]);
                return this
            };
            V.skew = function (a, b) {
                if (b === null || b === undefined) {
                    return this.skewX(a)
                }
                a = ak * a;
                b = ak * b;
                var c = af.create();
                c[M] = Math.tan(a);
                c[K] = Math.tan(b);
                af.multiply(this.m, this.m, c);
                return this
            };
            V.skewX = function (a) {
                a = ak * a;
                var b = af.create();
                b[M] = Math.tan(a);
                af.multiply(this.m, this.m, b);
                return this
            };
            V.skewY = function (a) {
                a = ak * a;
                var b = af.create();
                b[K] = Math.tan(a);
                af.multiply(this.m, this.m, b);
                return this
            };
            V.translate = function (a, b) {
                b = b || 0;
                af.translate(this.m, this.m, [a, b, 0]);
                return this
            };
            V.translate3d = function (b, c, a) {
                af.translate(this.m, this.m, [b, c, a]);
                return this
            };
            V.translateX = function (a) {
                af.translate(this.m, this.m, [a, 0, 0]);
                return this
            };
            V.translateY = function (a) {
                af.translate(this.m, this.m, [0, a, 0]);
                return this
            };
            V.translateZ = function (a) {
                af.translate(this.m, this.m, [0, 0, a]);
                return this
            };
            V.perspective = function (a) {
                var b = af.create();
                if (a !== 0) {
                    b[ac] = -1 / a
                }
                af.multiply(this.m, this.m, b)
            };
            V.inverse = function () {
                var a = this.clone();
                a.m = af.invert(a.m, this.m);
                return a
            };
            V.reset = function () {
                af.identity(this.m);
                return this
            };
            V.getTranslateXY = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return [a[P], a[T]]
                }
                return [a[N], a[R]]
            };
            V.getTranslateXYZ = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return [a[P], a[T], 0]
                }
                return [a[N], a[R], a[W]]
            };
            V.getTranslateX = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return a[P]
                }
                return a[N]
            };
            V.getTranslateY = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return a[T]
                }
                return a[R]
            };
            V.getTranslateZ = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return 0
                }
                return a[W]
            };
            V.clone = function () {
                var a = new Z();
                a.m = af.clone(this.m);
                return a
            };
            V.toArray = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return [
                        a[J],
                        a[K],
                        a[M],
                        a[O],
                        a[P],
                        a[T]
                    ]
                }
                return [
                    a[Q],
                    a[U],
                    a[Y],
                    a[I],
                    a[ag],
                    a[ah],
                    a[ai],
                    a[aj],
                    a[S],
                    a[X],
                    a[ab],
                    a[ac],
                    a[N],
                    a[R],
                    a[W],
                    a[aa]
                ]
            };
            V.fromArray = function (a) {
                this.m = Array
                    .prototype
                    .slice
                    .call(a);
                return this
            };
            V.setMatrixValue = function (c) {
                c = String(c).trim();
                var d = af.create();
                if (c === "none") {
                    this.m = d;
                    return this
                }
                var a = c.slice(0, c.indexOf("(")),
                    f,
                    b;
                if (a === "matrix3d") {
                    f = c
                        .slice(9, -1)
                        .split(",");
                    for (b = 0; b < f.length; b++) {
                        d[b] = parseFloat(f[b])
                    }
                } else {
                    if (a === "matrix") {
                        f = c
                            .slice(7, -1)
                            .split(",");
                        for (b = f.length; b--;) {
                            f[b] = parseFloat(f[b])
                        }
                        d[Q] = f[0];
                        d[U] = f[1];
                        d[N] = f[4];
                        d[ag] = f[2];
                        d[ah] = f[3];
                        d[R] = f[5]
                    } else {
                        throw new TypeError("Invalid Matrix Value")
                    }
                }
                this.m = d;
                return this
            };
            var ad = function ad(a) {
                return Math.abs(a) < 0.0001
            };
            V.decompose = function (h) {
                h = h || false;
                var c = af.clone(this.m);
                var m = an.create();
                var v = an.create();
                var p = an.create();
                var k = ao.create();
                var r = ao.create();
                var q = an.create();
                for (var a = 0; a < 16; a++) {
                    c[a] /= c[aa]
                }
                var f = af.clone(c);
                f[I] = 0;
                f[aj] = 0;
                f[ac] = 0;
                f[aa] = 1;
                var y = c[3],
                    o = c[7],
                    l = c[11],
                    t = c[12],
                    u = c[13],
                    w = c[14],
                    x = c[15];
                var i = ao.create();
                if (!ad(c[I]) || !ad(c[aj]) || !ad(c[ac])) {
                    i[0] = c[I];
                    i[1] = c[aj];
                    i[2] = c[ac];
                    i[3] = c[aa];
                    var b = af.invert(af.create(), f);
                    var j = af.transpose(af.create(), b);
                    k = ao.transformMat4(k, i, j)
                } else {
                    k = ao.fromValues(0, 0, 0, 1)
                }
                m[0] = t;
                m[1] = u;
                m[2] = w;
                var n = [
                    an.create(),
                    an.create(),
                    an.create()
                ];
                n[0][0] = c[0];
                n[0][1] = c[1];
                n[0][2] = c[2];
                n[1][0] = c[4];
                n[1][1] = c[5];
                n[1][2] = c[6];
                n[2][0] = c[8];
                n[2][1] = c[9];
                n[2][2] = c[10];
                v[0] = an.length(n[0]);
                an.normalize(n[0], n[0]);
                p[0] = an.dot(n[0], n[1]);
                n[1] = this._combine(n[1], n[0], 1, -p[0]);
                v[1] = an.length(n[1]);
                an.normalize(n[1], n[1]);
                p[0] /= v[1];
                p[1] = an.dot(n[0], n[2]);
                n[2] = this._combine(n[2], n[0], 1, -p[1]);
                p[2] = an.dot(n[1], n[2]);
                n[2] = this._combine(n[2], n[1], 1, -p[2]);
                v[2] = an.length(n[2]);
                an.normalize(n[2], n[2]);
                p[1] /= v[2];
                p[2] /= v[2];
                var d = an.cross(an.create(), n[1], n[2]);
                if (an.dot(n[0], d) < 0) {
                    for (a = 0; a < 3; a++) {
                        v[a] *= -1;
                        n[a][0] *= -1;
                        n[a][1] *= -1;
                        n[a][2] *= -1
                    }
                }
                r[0] = 0.5 * Math.sqrt(Math.max(1 + n[0][0] - n[1][1] - n[2][2], 0));
                r[1] = 0.5 * Math.sqrt(Math.max(1 - n[0][0] + n[1][1] - n[2][2], 0));
                r[2] = 0.5 * Math.sqrt(Math.max(1 - n[0][0] - n[1][1] + n[2][2], 0));
                r[3] = 0.5 * Math.sqrt(Math.max(1 + n[0][0] + n[1][1] + n[2][2], 0));
                if (n[2][1] > n[1][2]) {
                    r[0] = -r[0]
                }
                if (n[0][2] > n[2][0]) {
                    r[1] = -r[1]
                }
                if (n[1][0] > n[0][1]) {
                    r[2] = -r[2]
                }
                var s = ao.fromValues(r[0], r[1], r[2], 2 * Math.acos(r[3]));
                var g = this._rotationFromQuat(r);
                if (h) {
                    p[0] = Math.round(p[0] * am * 100) / 100;
                    p[1] = Math.round(p[1] * am * 100) / 100;
                    p[2] = Math.round(p[2] * am * 100) / 100;
                    g[0] = Math.round(g[0] * am * 100) / 100;
                    g[1] = Math.round(g[1] * am * 100) / 100;
                    g[2] = Math.round(g[2] * am * 100) / 100;
                    s[3] = Math.round(s[3] * am * 100) / 100
                }
                return {
                    translation: m,
                    scale: v,
                    skew: p,
                    perspective: k,
                    quaternion: r,
                    eulerRotation: g,
                    axisAngle: s
                }
            };
            V.recompose = function (f, g, b, a, h) {
                f = f || an.create();
                g = g || an.create();
                b = b || an.create();
                a = a || ao.create();
                h = h || ao.create();
                var c = af.fromRotationTranslation(af.create(), h, f);
                c[I] = a[0];
                c[aj] = a[1];
                c[ac] = a[2];
                c[aa] = a[3];
                var d = af.create();
                if (b[2] !== 0) {
                    d[X] = b[2];
                    af.multiply(c, c, d)
                }
                if (b[1] !== 0) {
                    d[X] = 0;
                    d[S] = b[1];
                    af.multiply(c, c, d)
                }
                if (b[0]) {
                    d[S] = 0;
                    d[4] = b[0];
                    af.multiply(c, c, d)
                }
                af.scale(c, c, g);
                this.m = c;
                return this
            };
            V.isAffine = function () {
                return this.m[Y] === 0 && this.m[I] === 0 && this.m[ai] === 0 && this.m[aj] === 0 && this.m[S] === 0 && this.m[X] === 0 && this.m[ab] === 1 && this.m[ac] === 0 && this.m[W] === 0 && this.m[aa] === 1
            };
            V.toString = function () {
                var a = this.m;
                if (this.isAffine()) {
                    return "matrix(" + a[J] + ", " + a[K] + ", " + a[M] + ", " + a[O] + ", " + a[P] + ", " + a[T] + ")"
                }
                return "matrix3d(" + a[Q] + ", " + a[U] + ", " + a[Y] + ", " + a[I] + ", " + a[ag] + ", " + a[ah] + ", " + a[ai] + ", " + a[aj] + ", " + a[S] + ", " + a[X] + ", " + a[ab] + ", " + a[ac] + ", " + a[N] + ", " + a[R] + ", " + a[W] + ", " + a[aa] + ")"
            };
            V.toCSSString = V.toString;
            V._combine = function (c, f, a, b) {
                var d = an.create();
                d[0] = a * c[0] + b * f[0];
                d[1] = a * c[1] + b * f[1];
                d[2] = a * c[2] + b * f[2];
                return d
            };
            V._matrix2dToMat4 = function (d) {
                var b = af.create();
                for (var a = 0; a < 4; a++) {
                    for (var c = 0; c < 4; c++) {
                        b[a * 4 + c] = d[a][c]
                    }
                }
                return b
            };
            V._mat4ToMatrix2d = function (a) {
                var d = [];
                for (var b = 0; b < 4; b++) {
                    d[b] = [];
                    for (var c = 0; c < 4; c++) {
                        d[b][c] = a[b * 4 + c]
                    }
                }
                return d
            };
            V._rotationFromQuat = function (k) {
                var g = k[3] * k[3];
                var h = k[0] * k[0];
                var i = k[1] * k[1];
                var j = k[2] * k[2];
                var a = h + i + j + g;
                var f = k[0] * k[1] + k[2] * k[3];
                var b,
                    c,
                    d;
                if (f > 0.499 * a) {
                    c = 2 * Math.atan2(k[0], k[3]);
                    d = Math.PI / 2;
                    b = 0;
                    return an.fromValues(b, c, d)
                }
                if (f < -0.499 * a) {
                    c = -2 * Math.atan2(k[0], k[3]);
                    d = -Math.PI / 2;
                    b = 0;
                    return an.fromValues(b, c, d)
                }
                c = Math.atan2(2 * k[1] * k[3] - 2 * k[0] * k[2], h - i - j + g);
                d = Math.asin(2 * f / a);
                b = Math.atan2(2 * k[0] * k[3] - 2 * k[1] * k[2], -h + i - j + g);
                return an.fromValues(b, c, d)
            };
            al.exports = Z
        }, {
            "./gl-matrix/mat4": 100,
            "./gl-matrix/vec3": 101,
            "./gl-matrix/vec4": 102
        }
    ],
    100: [
        function (i, h, g) {
            var f = {
                create: i("gl-mat4/create"),
                rotate: i("gl-mat4/rotate"),
                rotateX: i("gl-mat4/rotateX"),
                rotateY: i("gl-mat4/rotateY"),
                rotateZ: i("gl-mat4/rotateZ"),
                scale: i("gl-mat4/scale"),
                multiply: i("gl-mat4/multiply"),
                translate: i("gl-mat4/translate"),
                invert: i("gl-mat4/invert"),
                clone: i("gl-mat4/clone"),
                transpose: i("gl-mat4/transpose"),
                identity: i("gl-mat4/identity"),
                fromRotationTranslation: i("gl-mat4/fromRotationTranslation")
            };
            h.exports = f
        }, {
            "gl-mat4/clone": 76,
            "gl-mat4/create": 77,
            "gl-mat4/fromRotationTranslation": 78,
            "gl-mat4/identity": 79,
            "gl-mat4/invert": 80,
            "gl-mat4/multiply": 81,
            "gl-mat4/rotate": 82,
            "gl-mat4/rotateX": 83,
            "gl-mat4/rotateY": 84,
            "gl-mat4/rotateZ": 85,
            "gl-mat4/scale": 86,
            "gl-mat4/translate": 87,
            "gl-mat4/transpose": 88
        }
    ],
    101: [
        function (f, h, g) {
            var i = {
                create: f("gl-vec3/create"),
                dot: f("gl-vec3/dot"),
                normalize: f("gl-vec3/normalize"),
                length: f("gl-vec3/length"),
                cross: f("gl-vec3/cross"),
                fromValues: f("gl-vec3/fromValues")
            };
            h.exports = i
        }, {
            "gl-vec3/create": 89,
            "gl-vec3/cross": 90,
            "gl-vec3/dot": 91,
            "gl-vec3/fromValues": 92,
            "gl-vec3/length": 93,
            "gl-vec3/normalize": 94
        }
    ],
    102: [
        function (i, h, g) {
            var f = {
                create: i("gl-vec4/create"),
                transformMat4: i("gl-vec4/transformMat4"),
                fromValues: i("gl-vec4/fromValues")
            };
            h.exports = f
        }, {
            "gl-vec4/create": 95,
            "gl-vec4/fromValues": 96,
            "gl-vec4/transformMat4": 97
        }
    ],
    103: [
        function (p, r, o) {
            p("./helpers/Float32Array");
            var s = p("./helpers/transitionEnd");
            var n = p("@marcom/ac-clip").Clip;
            var l = p("./clips/ClipEasing");
            var q = p("./clips/ClipInlineCss");
            var m = p("./clips/ClipTransitionCss");
            function t(d, a, c, b) {
                if (d.nodeType) {
                    if (s === undefined || b && b.inlineStyles) {
                        return new q(d, a, c, b)
                    }
                    return new m(d, a, c, b)
                }
                return new l(d, a, c, b)
            }
            for (var u in n) {
                if (typeof n[u] === "function" && u.substr(0, 1) !== "_") {
                    t[u] = n[u].bind(n)
                }
            }
            t.to = function (d, a, c, b) {
                b = b || {};
                if (b.destroyOnComplete === undefined) {
                    b.destroyOnComplete = true
                }
                return new t(d, a, c, b).play()
            };
            t.from = function (c, d, b, a) {
                a = a || {};
                a.propsFrom = b;
                if (a.destroyOnComplete === undefined) {
                    a.destroyOnComplete = true
                }
                return new t(c, d, a.propsTo, a).play()
            };
            r.exports = t
        }, {
            "./clips/ClipEasing": 106,
            "./clips/ClipInlineCss": 107,
            "./clips/ClipTransitionCss": 108,
            "./helpers/Float32Array": 111,
            "./helpers/transitionEnd": 120,
            "@marcom/ac-clip": 24
        }
    ],
    104: [
        function (d, g, f) {
            g.exports = d("./timeline/Timeline")
        }, {
            "./timeline/Timeline": 122
        }
    ],
    105: [
        function (d, g, f) {
            g.exports = {
                Clip: d("./Clip"),
                Timeline: d("./Timeline")
            }
        }, {
            "./Clip": 103,
            "./Timeline": 104
        }
    ],
    106: [
        function (z, A, y) {
            var r = z("@marcom/ac-object/clone");
            var v = z("@marcom/ac-object/create");
            var o = z("@marcom/ac-easing").createPredefined;
            var q = z("../helpers/isCssCubicBezierString");
            var w = z("../helpers/BezierCurveCssManager");
            var t = z("@marcom/ac-clip").Clip;
            var s = z("@marcom/ac-easing").Ease;
            function p(b, c, a, d) {
                if (d && q(d.ease)) {
                    d.ease = w
                        .create(d.ease)
                        .toEasingFunction()
                }
                d = d || {};
                this._propsEase = d.propsEase || {};
                t.call(this, b, c, a, d)
            }
            var u = t.prototype;
            var x = p.prototype = v(u);
            x.reset = function () {
                var a = u
                    .reset
                    .call(this);
                if (this._clips) {
                    var b = this._clips.length;
                    while (b--) {
                        this
                            ._clips[b]
                            .reset()
                    }
                }
                return a
            };
            x.destroy = function () {
                if (this._clips) {
                    var a = this._clips.length;
                    while (a--) {
                        this
                            ._clips[a]
                            .destroy()
                    }
                    this._clips = null
                }
                this._eases = null;
                this._storeOnUpdate = null;
                return u
                    .destroy
                    .call(this)
            };
            x._prepareProperties = function () {
                var i = 0;
                var f = {};
                var h = {};
                var d = {};
                var a;
                var b;
                if (this._propsEase) {
                    for (a in this._propsTo) {
                        if (this._propsTo.hasOwnProperty(a)) {
                            b = this._propsEase[a];
                            if (q(b)) {
                                b = w
                                    .create(b)
                                    .toEasingFunction()
                            }
                            if (b === undefined) {
                                if (f[this._ease] === undefined) {
                                    f[this._ease] = {};
                                    h[this._ease] = {};
                                    d[this._ease] = this._ease.easingFunction;
                                    i++
                                }
                                f[this._ease][a] = this._propsTo[a];
                                h[this._ease][a] = this._propsFrom[a]
                            } else {
                                if (typeof b === "function") {
                                    f[i] = {};
                                    h[i] = {};
                                    f[i][a] = this._propsTo[a];
                                    h[i][a] = this._propsFrom[a];
                                    d[i] = b;
                                    i++
                                } else {
                                    if (f[b] === undefined) {
                                        f[b] = {};
                                        h[b] = {};
                                        d[b] = b;
                                        i++
                                    }
                                    f[b][a] = this._propsTo[a];
                                    h[b][a] = this._propsFrom[a]
                                }
                            }
                        }
                    }
                    if (i > 1) {
                        var g = r(this._options || {}, true);
                        var c = this._duration * 0.001;
                        this._storeOnUpdate = this._onUpdate;
                        this._onUpdate = this._onUpdateClips;
                        g.onStart = null;
                        g.onUpdate = null;
                        g.onDraw = null;
                        g.onComplete = null;
                        this._clips = [];
                        for (b in f) {
                            if (f.hasOwnProperty(b)) {
                                g.ease = d[b];
                                g.propsFrom = h[b];
                                this
                                    ._clips
                                    .push(new t(this._target, c, f[b], g))
                            }
                        }
                        b = "linear";
                        this._propsTo = {};
                        this._propsFrom = {}
                    } else {
                        for (a in d) {
                            if (d.hasOwnProperty(a)) {
                                b = d[a]
                            }
                        }
                    }
                    if (b !== undefined) {
                        this._ease = typeof b === "function"
                            ? new s(b)
                            : o(b)
                    }
                }
                return u
                    ._prepareProperties
                    .call(this)
            };
            x._onUpdateClips = function (a) {
                var c = this._direction === 1
                    ? a.progress()
                    : 1 - a.progress();
                var b = this._clips.length;
                while (b--) {
                    this
                        ._clips[b]
                        .progress(c)
                }
                if (typeof this._storeOnUpdate === "function") {
                    this
                        ._storeOnUpdate
                        .call(this, this)
                }
            };
            A.exports = p
        }, {
            "../helpers/BezierCurveCssManager": 110,
            "../helpers/isCssCubicBezierString": 116,
            "@marcom/ac-clip": 24,
            "@marcom/ac-easing": 61,
            "@marcom/ac-object/clone": 71,
            "@marcom/ac-object/create": 72
        }
    ],
    107: [
        function (v, y, u) {
            var x = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var p = v("@marcom/ac-dom-styles/setStyle");
            var z = v("../helpers/convertToStyleObject");
            var w = v("../helpers/convertToTransitionableObjects");
            var r = v("@marcom/ac-object/create");
            var s = v("../helpers/removeTransitions");
            var o = v("./ClipEasing");
            function A(b, c, a, d) {
                d = d || {};
                this._el = b;
                this._storeOnStart = d.onStart || null;
                this._storeOnDraw = d.onDraw || null;
                this._storeOnComplete = d.onComplete || null;
                d.onStart = this._onStart;
                d.onDraw = this._onDraw;
                d.onComplete = this._onComplete;
                o.call(this, {}, c, a, d)
            }
            var q = o.prototype;
            var t = A.prototype = r(q);
            t.play = function () {
                var a = q
                    .play
                    .call(this);
                if (this._remainingDelay !== 0) {
                    p(this._el, z(this._target))
                }
                return a
            };
            t.reset = function () {
                var a = q
                    .reset
                    .call(this);
                p(this._el, z(this._target));
                return a
            };
            t.destroy = function () {
                this._el = null;
                this._completeStyles = null;
                this._storeOnStart = null;
                this._storeOnDraw = null;
                this._storeOnComplete = null;
                return q
                    .destroy
                    .call(this)
            };
            t.target = function () {
                return this._el
            };
            t._prepareProperties = function () {
                var b = w(this._el, this._propsTo, this._propsFrom);
                this._target = b.target;
                this._propsFrom = b.propsFrom;
                this._propsTo = b.propsTo;
                s(this._el, this._target);
                var d = this._isYoyo
                    ? this._propsFrom
                    : this._propsTo;
                this._completeStyles = z(d);
                if (this._options.removeStylesOnComplete !== undefined) {
                    var a;
                    var c = this._options.removeStylesOnComplete;
                    if (typeof c === "boolean" && c) {
                        for (a in this._completeStyles) {
                            if (this._completeStyles.hasOwnProperty(a)) {
                                this._completeStyles[a] = null
                            }
                        }
                    } else {
                        if ((typeof c === "undefined"
                            ? "undefined"
                            : x(c)) === "object" && c.length) {
                            var f = c.length;
                            while (f--) {
                                a = c[f];
                                if (this._completeStyles.hasOwnProperty(a)) {
                                    this._completeStyles[a] = null
                                }
                            }
                        }
                    }
                }
                return q
                    ._prepareProperties
                    .call(this)
            };
            t._onStart = function (a) {
                if (this.playing() && this._direction === 1 && this._delay === 0) {
                    p(this._el, z(this._propsFrom))
                }
                if (typeof this._storeOnStart === "function") {
                    this
                        ._storeOnStart
                        .call(this, this)
                }
            };
            t._onDraw = function (a) {
                p(this._el, z(this._target));
                if (typeof this._storeOnDraw === "function") {
                    this
                        ._storeOnDraw
                        .call(this, this)
                }
            };
            t._onComplete = function (a) {
                p(this._el, this._completeStyles);
                if (typeof this._storeOnComplete === "function") {
                    this
                        ._storeOnComplete
                        .call(this, this)
                }
            };
            y.exports = A
        }, {
            "../helpers/convertToStyleObject": 113,
            "../helpers/convertToTransitionableObjects": 114,
            "../helpers/removeTransitions": 117,
            "./ClipEasing": 106,
            "@marcom/ac-dom-styles/setStyle": 60,
            "@marcom/ac-object/create": 72
        }
    ],
    108: [
        function (P, X, A) {
            var L = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var V = P("@marcom/ac-dom-styles/setStyle");
            var U = P("@marcom/ac-dom-styles/getStyle");
            var W = P("../helpers/convertToStyleObject");
            var J = P("../helpers/convertToTransitionableObjects");
            var B = P("@marcom/ac-object/clone");
            var M = P("@marcom/ac-object/create");
            var E = P("@marcom/ac-easing").createPredefined;
            var N = P("../helpers/isCssCubicBezierString");
            var D = P("../helpers/removeTransitions");
            var Q = P("../helpers/transitionEnd");
            var K = P("../helpers/waitAnimationFrames");
            var C = P("../helpers/BezierCurveCssManager");
            var Y = P("@marcom/ac-clip").Clip;
            var G = P("./ClipEasing");
            var F = P("@marcom/ac-page-visibility").PageVisibilityManager;
            var T = "ease";
            var R = "%EASE% is not a supported predefined ease when transitioning with Elements and C" +
                    "SS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
            var O = "Function eases are not supported when using CSS transitions with Elements. Eithe" +
                    "r use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineS" +
                    "tyle option as `true` to render styles each frame instead of using CSS transitio" +
                    "ns.";
            function S(c, d, b, a) {
                a = a || {};
                this._el = c;
                this._storeEase = a.ease;
                if (typeof this._storeEase === "function") {
                    throw new Error(O)
                }
                this._storeOnStart = a.onStart || null;
                this._storeOnComplete = a.onComplete || null;
                a.onStart = this
                    ._onStart
                    .bind(this);
                a.onComplete = this
                    ._onComplete
                    .bind(this);
                this._stylesTo = B(b, true);
                this._stylesFrom = a.propsFrom
                    ? B(a.propsFrom, true)
                    : {};
                this._propsEase = a.propsEase
                    ? B(a.propsEase, true)
                    : {};
                if (N(a.ease)) {
                    a.ease = C
                        .create(a.ease)
                        .toEasingFunction()
                }
                Y.call(this, {}, d, {}, a);
                this._propsFrom = {}
            }
            var I = Y.prototype;
            var H = S.prototype = M(I);
            H.play = function () {
                var a = I
                    .play
                    .call(this);
                if (this._direction === 1 && this.progress() === 0 && this._remainingDelay !== 0) {
                    this._applyStyles(0, W(this._stylesFrom))
                }
                return a
            };
            H.reset = function () {
                var a = I
                    .reset
                    .call(this);
                this
                    ._stylesClip
                    .reset();
                this._applyStyles(0, W(this._styles));
                return a
            };
            H.destroy = function () {
                F.off("changed", this._onVisibilityChanged);
                this._removeTransitionListener();
                this.off("pause", this._onPaused);
                this._onPaused();
                this
                    ._stylesClip
                    .destroy();
                this._stylesClip = null;
                this._el = null;
                this._propsArray = null;
                this._styles = null;
                this._stylesFrom = null;
                this._stylesTo = null;
                this._completeStyles = null;
                this._storeOnStart = null;
                this._storeOnComplete = null;
                this._onTransitionEnded = null;
                return I
                    .destroy
                    .call(this)
            };
            H.target = function () {
                return this._el
            };
            H.duration = function (b) {
                var a = I
                    .duration
                    .call(this, b);
                if (b === undefined) {
                    return a
                }
                if (this.playing()) {
                    this.progress(this._progress)
                }
                return a
            };
            H.progress = function (a) {
                var b = I
                    .progress
                    .call(this, a);
                if (a === undefined) {
                    return b
                }
                a = this._direction === 1
                    ? a
                    : 1 - a;
                this
                    ._stylesClip
                    .progress(a);
                this._applyStyles(0, W(this._styles));
                if (this.playing()) {
                    this._isWaitingForStylesToBeApplied = true;
                    K(this._setStylesAfterWaiting, 2)
                }
                return b
            };
            H._prepareProperties = function () {
                var f = J(this._el, this._stylesTo, this._stylesFrom);
                this._styles = f.target;
                this._stylesTo = f.propsTo;
                this._stylesFrom = f.propsFrom;
                var d = this._storeEase || T;
                this._eases = {};
                this._propsArray = [];
                var b;
                this._styleCompleteTo = W(this._stylesTo);
                this._styleCompleteFrom = W(this._stylesFrom);
                this._propsEaseKeys = {};
                var c;
                for (c in this._stylesTo) {
                    if (this._stylesTo.hasOwnProperty(c)) {
                        this._propsArray[this._propsArray.length] = c;
                        if (this._propsEase[c] === undefined) {
                            if (this._eases[d] === undefined) {
                                b = this._convertEase(d);
                                this._eases[d] = b.css
                            }
                            this._propsEaseKeys[c] = d
                        } else {
                            if (this._eases[this._propsEase[c]] === undefined) {
                                b = this._convertEase(this._propsEase[c]);
                                this._eases[this._propsEase[c]] = b.css;
                                this._propsEaseKeys[c] = this._propsEase[c];
                                this._propsEase[c] = b.js
                            } else {
                                if (N(this._propsEase[c])) {
                                    this._propsEaseKeys[c] = this._propsEase[c];
                                    this._propsEase[c] = this
                                        ._eases[this._propsEase[c]]["1"]
                                        .toEasingFunction()
                                }
                            }
                        }
                    }
                }
                this._onPaused = this
                    ._onPaused
                    .bind(this);
                this.on("pause", this._onPaused);
                this._setOtherTransitions();
                this._currentTransitionStyles = this._otherTransitions;
                this._completeStyles = W(this._isYoyo
                    ? this._stylesFrom
                    : this._stylesTo);
                if (this._options.removeStylesOnComplete !== undefined) {
                    var g = this._options.removeStylesOnComplete;
                    if (typeof g === "boolean" && g) {
                        for (c in this._stylesTo) {
                            this._completeStyles[c] = null
                        }
                    } else {
                        if ((typeof g === "undefined"
                            ? "undefined"
                            : L(g)) === "object" && g.length) {
                            var a = g.length;
                            while (a--) {
                                this._completeStyles[g[a]] = null
                            }
                        }
                    }
                }
                this._onTransitionEnded = this
                    ._onTransitionEnded
                    .bind(this);
                this._setStylesAfterWaiting = this
                    ._setStylesAfterWaiting
                    .bind(this);
                this._onVisibilityChanged = this
                    ._onVisibilityChanged
                    .bind(this);
                F.on(F.CHANGED, this._onVisibilityChanged);
                this._stylesClip = new G(this._styles, 1, this._stylesTo, {
                    ease: this._options.ease,
                    propsFrom: this._stylesFrom,
                    propsEase: this._options.propsEase
                });
                Y._remove(this._stylesClip);
                return I
                    ._prepareProperties
                    .call(this)
            };
            H._convertEase = function (c) {
                if (typeof c === "function") {
                    throw new Error(O)
                }
                var a;
                var d;
                if (N(c)) {
                    a = C.create(c);
                    d = a.toEasingFunction()
                } else {
                    var b = E(c);
                    if (b.cssString === null) {
                        throw new Error(R.replace(/%EASE%/g, c))
                    }
                    a = C.create(b.cssString);
                    d = c
                }
                return {
                    css: {
                        "1": a,
                        "-1": a.reversed()
                    },
                    js: d
                }
            };
            H._complete = function () {
                if ((this._isWaitingForStylesToBeApplied || this._isTransitionEnded || !this._isListeningForTransitionEnd) && this.progress() === 1) {
                    this._isWaitingForStylesToBeApplied = false;
                    I
                        ._complete
                        .call(this)
                }
            };
            H._onTransitionEnded = function () {
                this._isTransitionEnded = true;
                this._complete()
            };
            H._addTransitionListener = function () {
                if (!this._isListeningForTransitionEnd && this._el && this._onTransitionEnded) {
                    this._isListeningForTransitionEnd = true;
                    this._isTransitionEnded = false;
                    this
                        ._el
                        .addEventListener(Q, this._onTransitionEnded)
                }
            };
            H._removeTransitionListener = function () {
                if (this._isListeningForTransitionEnd && this._el && this._onTransitionEnded) {
                    this._isListeningForTransitionEnd = false;
                    this._isTransitionEnded = false;
                    this
                        ._el
                        .removeEventListener(Q, this._onTransitionEnded)
                }
            };
            H._applyStyles = function (d, a) {
                if (d > 0) {
                    var c = "";
                    var f = {};
                    var b;
                    for (b in this._eases) {
                        if (this._eases.hasOwnProperty(b)) {
                            f[b] = this
                                ._eases[b][this._direction]
                                .splitAt(this.progress())
                                .toCSSString()
                        }
                    }
                    for (b in this._stylesTo) {
                        if (this._stylesTo.hasOwnProperty(b)) {
                            c += b + " " + d + "ms " + f[this._propsEaseKeys[b]] + " 0ms, "
                        }
                    }
                    this._currentTransitionStyles = c.substr(0, c.length - 2);
                    if (!this._doStylesMatchCurrentStyles(a)) {
                        this._addTransitionListener()
                    } else {
                        this._removeTransitionListener()
                    }
                } else {
                    this._currentTransitionStyles = "";
                    this._removeTransitionListener()
                }
                a.transition = this._getOtherClipTransitionStyles() + this._currentTransitionStyles;
                V(this._el, a)
            };
            H._doStylesMatchCurrentStyles = function (b) {
                var c = U.apply(this, [this._el].concat([this._propsArray]));
                var a;
                for (a in b) {
                    if (b.hasOwnProperty(a) && c.hasOwnProperty(a) && b[a] !== c[a]) {
                        return false
                    }
                }
                return true
            };
            H._setStylesAfterWaiting = function () {
                this._isWaitingForStylesToBeApplied = false;
                if (this.playing()) {
                    var b = this._durationMs * (1 - this.progress());
                    var a = this._direction > 0
                        ? this._styleCompleteTo
                        : this._styleCompleteFrom;
                    this._applyStyles(b, a)
                }
            };
            H._setOtherTransitions = function () {
                D(this._el, this._stylesTo);
                var a = Y.getAll(this._el);
                var b = a.length;
                while (b--) {
                    if (a[b] !== this && a[b].playing() && a[b]._otherTransitions && a[b]._otherTransitions.length) {
                        this._otherTransitions = a[b]._otherTransitions;
                        return
                    }
                }
                this._otherTransitions = U(this._el, "transition").transition;
                if (this._otherTransitions === null || this._otherTransitions === "all 0s ease 0s") {
                    this._otherTransitions = ""
                }
            };
            H._getTransitionStyles = function () {
                var a = this._getOtherClipTransitionStyles();
                if (this._otherTransitions.length) {
                    a += this._otherTransitions
                } else {
                    if (a.length) {
                        a = a.substr(0, a.length - 2)
                    }
                }
                return a
            };
            H._getOtherClipTransitionStyles = function () {
                var b = "";
                var a = Y.getAll(this._el);
                var c = a.length;
                while (c--) {
                    if (a[c] !== this && a[c].playing() && a[c]._currentTransitionStyles && a[c]._currentTransitionStyles.length) {
                        b += a[c]._currentTransitionStyles + ", "
                    }
                }
                return b
            };
            H._onVisibilityChanged = function (a) {
                if (this.playing() && !a.isHidden) {
                    this._update({
                        timeNow: this._getTime()
                    });
                    var b = this.progress();
                    if (b < 1) {
                        this.progress(b)
                    }
                }
            };
            H._onPaused = function (b) {
                var a = U.apply(this, [this._el].concat([this._propsArray]));
                a.transition = this._getTransitionStyles();
                this._removeTransitionListener();
                V(this._el, a)
            };
            H._onStart = function (a) {
                var b = this._direction === 1 && this.progress() === 0 && this._delay === 0
                    ? 2
                    : 0;
                if (b) {
                    this._isWaitingForStylesToBeApplied = true;
                    this._applyStyles(0, this._styleCompleteFrom)
                }
                K(this._setStylesAfterWaiting, b);
                if (typeof this._storeOnStart === "function") {
                    this
                        ._storeOnStart
                        .call(this, this)
                }
            };
            H._onComplete = function (a) {
                this._removeTransitionListener();
                this._completeStyles.transition = this._getTransitionStyles();
                V(this._el, this._completeStyles);
                if (typeof this._storeOnComplete === "function") {
                    this
                        ._storeOnComplete
                        .call(this, this)
                }
            };
            X.exports = S
        }, {
            "../helpers/BezierCurveCssManager": 110,
            "../helpers/convertToStyleObject": 113,
            "../helpers/convertToTransitionableObjects": 114,
            "../helpers/isCssCubicBezierString": 116,
            "../helpers/removeTransitions": 117,
            "../helpers/transitionEnd": 120,
            "../helpers/waitAnimationFrames": 121,
            "./ClipEasing": 106,
            "@marcom/ac-clip": 24,
            "@marcom/ac-dom-styles/getStyle": 58,
            "@marcom/ac-dom-styles/setStyle": 60,
            "@marcom/ac-easing": 61,
            "@marcom/ac-object/clone": 71,
            "@marcom/ac-object/create": 72,
            "@marcom/ac-page-visibility": 74
        }
    ],
    109: [
        function (m, l, i) {
            var j = m("@marcom/ac-easing").createBezier;
            function h(a, b) {
                this.manager = b;
                this.p1 = {
                    x: a[0],
                    y: a[1]
                };
                this.p2 = {
                    x: a[2],
                    y: a[3]
                };
                this._isLinear = this.p1.x === this.p1.y && this.p2.x === this.p2.y;
                this._cacheSplits = {}
            }
            var k = h.prototype;
            k.splitAt = function (t) {
                if (this._isLinear) {
                    return this
                }
                t = Math.round(t * 40) / 40;
                if (t === 0) {
                    return this
                } else {
                    if (this._cacheSplits[t] !== undefined) {
                        return this._cacheSplits[t]
                    }
                }
                var b = [this.p1.x, this.p2.x];
                var f = [this.p1.y, this.p2.y];
                var g = 0;
                var d = t;
                var v = 0;
                var c = 1;
                var u = this._getStartX(t, b);
                while (d !== u && g < 1000) {
                    if (d < u) {
                        c = t
                    } else {
                        v = t
                    }
                    t = v + (c - v) * 0.5;
                    u = this._getStartX(t, b);
                    ++g
                }
                var s = this._splitBezier(t, b, f);
                var a = this._normalize(s);
                var w = this
                    .manager
                    .create(a);
                this._cacheSplits[d] = w;
                return w
            };
            k.reversed = function () {
                var a = this.toArray();
                return this
                    .manager
                    .create([
                        0.5 - (a[2] - 0.5),
                        0.5 - (a[3] - 0.5),
                        0.5 - (a[0] - 0.5),
                        0.5 - (a[1] - 0.5)
                    ])
            };
            k.toArray = function () {
                return [this.p1.x, this.p1.y, this.p2.x, this.p2.y]
            };
            k.toCSSString = function () {
                return "cubic-bezier(" + this.p1.x + ", " + this.p1.y + ", " + this.p2.x + ", " + this.p2.y + ")"
            };
            k.toEasingFunction = function () {
                return j
                    .apply(this, this.toArray())
                    .easingFunction
            };
            k._getStartX = function (a, g) {
                var b = a - 1;
                var c = a * a;
                var d = b * b;
                var f = c * a;
                return f - 3 * c * b * g[1] + 3 * a * d * g[0]
            };
            k._splitBezier = function (a, g, o) {
                var b = a - 1;
                var c = a * a;
                var d = b * b;
                var f = c * a;
                return [
                    f - 3 * c * b * g[1] + 3 * a * d * g[0],
                    f - 3 * c * b * o[1] + 3 * a * d * o[0],
                    c - 2 * a * b * g[1] + d * g[0],
                    c - 2 * a * b * o[1] + d * o[0],
                    a - b * g[1],
                    a - b * o[1]
                ]
            };
            k._normalize = function (a) {
                return [
                    (a[2] - a[0]) / (1 - a[0]),
                    (a[3] - a[1]) / (1 - a[1]),
                    (a[4] - a[0]) / (1 - a[0]),
                    (a[5] - a[1]) / (1 - a[1])
                ]
            };
            l.exports = h
        }, {
            "@marcom/ac-easing": 61
        }
    ],
    110: [
        function (m, l, i) {
            var h = m("./BezierCurveCss");
            function j() {
                this._instances = {}
            }
            var k = j.prototype;
            k.create = function (a) {
                var b;
                if (typeof a === "string") {
                    b = a.replace(/ /g, "")
                } else {
                    b = "cubic-bezier(" + a.join(",") + ")"
                }
                if (this._instances[b] === undefined) {
                    if (typeof a === "string") {
                        a = a.match(/\d*\.?\d+/g);
                        var c = a.length;
                        while (c--) {
                            a[c] = Number(a[c])
                        }
                    }
                    this._instances[b] = new h(a, this)
                }
                return this._instances[b]
            };
            l.exports = new j()
        }, {
            "./BezierCurveCss": 109
        }
    ],
    111: [
        function (d, g, f) {
            if (typeof window.Float32Array === "undefined") {
                window.Float32Array = function () {}
            }
        }, {}
    ],
    112: [
        function (o, n, p) {
            var k = o("@marcom/ac-dom-metrics/getDimensions");
            var q = o("./splitUnits");
            var j = {
                translateX: "width",
                translateY: "height"
            };
            function l(d, b, a) {
                this._transform = d;
                var c;
                var g;
                var f;
                for (f in a) {
                    if (a.hasOwnProperty(f) && typeof this._transform[f] === "function") {
                        c = q(a[f]);
                        if (c.unit === "%") {
                            g = this._convertPercentToPixelValue(f, c.value, b)
                        } else {
                            g = c.value
                        }
                        this
                            ._transform[f]
                            .call(this._transform, g)
                    }
                }
            }
            var m = l.prototype;
            m._convertPercentToPixelValue = function (a, b, c) {
                a = j[a];
                var d = k(c);
                if (d[a]) {
                    b *= 0.01;
                    return d[a] * b
                }
                return b
            };
            m.toArray = function () {
                return this
                    ._transform
                    .toArray()
            };
            m.toCSSString = function () {
                return this
                    ._transform
                    .toCSSString()
            };
            n.exports = l
        }, {
            "./splitUnits": 118,
            "@marcom/ac-dom-metrics/getDimensions": 46
        }
    ],
    113: [
        function (f, i, g) {
            i.exports = function h(b) {
                var c = {};
                var d;
                var a;
                for (a in b) {
                    if (b.hasOwnProperty(a) && b[a] !== null) {
                        if (b[a].isColor) {
                            if (b[a].isRgb) {
                                c[a] = "rgb(" + Math.round(b[a].r) + ", " + Math.round(b[a].g) + ", " + Math.round(b[a].b) + ")"
                            } else {
                                if (b[a].isRgba) {
                                    c[a] = "rgba(" + Math.round(b[a].r) + ", " + Math.round(b[a].g) + ", " + Math.round(b[a].b) + ", " + b[a].a + ")"
                                }
                            }
                        } else {
                            if (a === "transform") {
                                d = b[a].length === 6
                                    ? "matrix"
                                    : "matrix3d";
                                c[a] = d + "(" + b[a].join(",") + ")"
                            } else {
                                if (!b[a].unit) {
                                    c[a] = b[a].value
                                } else {
                                    c[a] = b[a].value + b[a].unit
                                }
                            }
                        }
                    }
                }
                return c
            }
        }, {}
    ],
    114: [
        function (C, F, A) {
            var x = C("@marcom/ac-dom-styles/getStyle");
            var v = C("@marcom/ac-object/clone");
            var E = C("./splitUnits");
            var H = C("./toCamCase");
            var G = C("@marcom/ac-color").Color;
            var y = C("@marcom/ac-feature/cssPropertyAvailable");
            var B = C("@marcom/ac-transform").Transform;
            var I = C("./TransformMatrix");
            var w = function w(a) {
                if (G.isRgba(a)) {
                    a = new G(a).rgbaObject();
                    a.isRgba = true
                } else {
                    a = new G(a).rgbObject();
                    a.isRgb = true
                }
                a.isColor = true;
                return a
            };
            var s = function s(a) {
                if (a.isRgb) {
                    a.isRgb = false;
                    a.isRgba = true;
                    a.a = 1
                }
            };
            var t = function t(b, c, a) {
                if (b.isRgba || c.isRgba || a.isRgba) {
                    s(b);
                    s(c);
                    s(a)
                }
            };
            var u = function u(a) {
                return [
                    a[0],
                    a[1],
                    0,
                    0,
                    a[2],
                    a[3],
                    0,
                    0,
                    0,
                    0,
                    1,
                    0,
                    a[4],
                    a[5],
                    0,
                    1
                ]
            };
            var z = function z(b, c, a) {
                if (b.transform.length === 16 || c.transform.length === 16 || a.transform.length === 16) {
                    if (b.transform.length === 6) {
                        b.transform = u(b.transform)
                    }
                    if (c.transform.length === 6) {
                        c.transform = u(c.transform)
                    }
                    if (a.transform.length === 6) {
                        a.transform = u(a.transform)
                    }
                }
            };
            F.exports = function D(i, b, c) {
                var g = {};
                b = v(b, true);
                c = v(c, true);
                var j;
                var a;
                var f;
                var d;
                var h = y("transform");
                var k;
                for (k in b) {
                    if (b.hasOwnProperty(k) && b[k] !== null) {
                        if (k === "transform") {
                            if (h) {
                                a = new B();
                                j = x(i, "transform")["transform"] || "none";
                                a.setMatrixValue(j);
                                f = new I(new B(), i, b[k])
                            }
                            if (f && f.toCSSString() !== a.toCSSString()) {
                                d = new I(c[k]
                                    ? new B()
                                    : a.clone(), i, c[k]);
                                g[k] = a.toArray();
                                b[k] = f.toArray();
                                c[k] = d.toArray()
                            } else {
                                g[k] = null;
                                b[k] = null
                            }
                        } else {
                            j = x(i, k)[H(k)] || c[k];
                            if (G.isColor(j)) {
                                g[k] = w(j);
                                c[k] = c[k] !== undefined
                                    ? w(c[k])
                                    : v(g[k], true);
                                b[k] = w(b[k])
                            } else {
                                g[k] = E(j);
                                c[k] = c[k] !== undefined
                                    ? E(c[k])
                                    : v(g[k], true);
                                b[k] = E(b[k])
                            }
                        }
                    }
                }
                for (k in c) {
                    if (c.hasOwnProperty(k) && c[k] !== null && (b[k] === undefined || b[k] === null)) {
                        if (k === "transform") {
                            if (h) {
                                a = new B();
                                a.setMatrixValue(getComputedStyle(i).transform || getComputedStyle(i).webkitTransform || "none");
                                d = new I(new B(), i, c[k])
                            }
                            if (d && d.toCSSString() !== a.toCSSString()) {
                                f = new I(a.clone());
                                g[k] = a.toArray();
                                b[k] = f.toArray();
                                c[k] = d.toArray()
                            } else {
                                g[k] = null;
                                b[k] = null;
                                c[k] = null
                            }
                        } else {
                            j = x(i, k)[H(k)];
                            if (G.isColor(j)) {
                                g[k] = w(j);
                                b[k] = v(g[k], true);
                                c[k] = w(c[k])
                            } else {
                                g[k] = E(j);
                                c[k] = E(c[k]);
                                b[k] = v(g[k], true)
                            }
                        }
                    }
                    if (g[k] && g[k].isColor) {
                        t(g[k], c[k], b[k])
                    }
                }
                if (g.transform) {
                    z(g, c, b)
                }
                return {target: g, propsTo: b, propsFrom: c}
            }
        }, {
            "./TransformMatrix": 112,
            "./splitUnits": 118,
            "./toCamCase": 119,
            "@marcom/ac-color": 26,
            "@marcom/ac-dom-styles/getStyle": 58,
            "@marcom/ac-feature/cssPropertyAvailable": 160,
            "@marcom/ac-object/clone": 71,
            "@marcom/ac-transform": 98
        }
    ],
    115: [
        function (f, i, g) {
            i.exports = function h(d) {
                if (d.transitionProperty) {
                    var a = "";
                    var n = d
                        .transitionProperty
                        .split(", ");
                    var c = d
                        .transitionDuration
                        .split(", ");
                    var b = d
                        .transitionTimingFunction
                        .replace(/\d+[,]+[\s]/gi, function (j) {
                            return j.substr(0, j.length - 1)
                        })
                        .split(", ");
                    var p = d
                        .transitionDelay
                        .split(", ");
                    var o = n.length;
                    while (o--) {
                        a += n[o] + " " + c[o] + " " + b[o] + " " + p[o] + ", "
                    }
                    return a.substr(0, a.length - 2)
                }
                return false
            }
        }, {}
    ],
    116: [
        function (i, h, f) {
            h.exports = function g(a) {
                return typeof a === "string" && a.substr(0, 13) === "cubic-bezier("
            }
        }, {}
    ],
    117: [
        function (n, m, o) {
            var k = n("@marcom/ac-dom-styles/setStyle");
            var j = n("@marcom/ac-dom-styles/getStyle");
            var l = n("./getShorthandTransition");
            m.exports = function i(b, g) {
                var a = j(b, "transition", "transition-property", "transition-duration", "transition-timing-function", "transition-delay");
                a = a.transition || l(a);
                if (a && a.length) {
                    a = a.split(",");
                    var c = 0;
                    var f;
                    var d = a.length;
                    while (d--) {
                        f = a[d]
                            .trim()
                            .split(" ")[0];
                        if (g[f] !== undefined) {
                            a.splice(d, 1);
                            ++c
                        }
                    }
                    if (c) {
                        if (a.length === 0) {
                            a = ["all"]
                        }
                        k(b, {
                            transition: a
                                .join(",")
                                .trim()
                        })
                    }
                }
            }
        }, {
            "./getShorthandTransition": 115,
            "@marcom/ac-dom-styles/getStyle": 58,
            "@marcom/ac-dom-styles/setStyle": 60
        }
    ],
    118: [
        function (i, h, f) {
            h.exports = function g(a) {
                a = String(a);
                if (a.indexOf(" ") > -1) {
                    throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
                }
                var b = /(\d*\.?\d*)(.*)/;
                var d = 1;
                if (a && a.substr(0, 1) === "-") {
                    a = a.substr(1);
                    d = -1
                }
                var c = String(a).match(b);
                return {
                    value: Number(c[1]) * d,
                    unit: c[2]
                }
            }
        }, {}
    ],
    119: [
        function (i, h, f) {
            h.exports = function g(a) {
                var b = function b(l, d, c, m) {
                    return c === 0 && m.substr(1, 3) !== "moz"
                        ? d
                        : d.toUpperCase()
                };
                return a.replace(/-(\w)/g, b)
            }
        }, {}
    ],
    120: [
        function (j, i, k) {
            var h;
            i.exports = function g() {
                if (h) {
                    return h
                }
                var c;
                var b = document.createElement("fakeelement");
                var a = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (c in a) {
                    if (b.style[c] !== undefined) {
                        h = a[c];
                        return h
                    }
                }
            }()
        }, {}
    ],
    121: [
        function (j, i, g) {
            var h = j("@marcom/ac-page-visibility").PageVisibilityManager;
            i.exports = function k(a, c) {
                if (c) {
                    var b = function b(m) {
                        if (h.isHidden) {
                            setTimeout(m, 16)
                        } else {
                            window.requestAnimationFrame(m)
                        }
                    };
                    var d = 0;
                    var f = function f() {
                        if (d === c) {
                            a.call(this)
                        } else {
                            ++d;
                            b(f)
                        }
                    };
                    f()
                } else {
                    a.call(this)
                }
            }
        }, {
            "@marcom/ac-page-visibility": 74
        }
    ],
    122: [
        function (u, w, t) {
            var q = u("@marcom/ac-object/create");
            var p = u("@marcom/ac-clip").Clip;
            var s = u("./TimelineClip");
            var v = u("./TimelineCallback");
            var m = u("./TimelineItemList");
            var n = p.prototype;
            function o(a) {
                a = a || {};
                a.ease = a.ease || "linear";
                a.destroyOnComplete = false;
                this.options = a;
                p.call(this, {
                    t: 0
                }, 0, {
                    t: 1
                }, a);
                this._itemList = new m()
            }
            var r = o.prototype = q(n);
            o.prototype.constructor = o;
            r._update = function (a) {
                n
                    ._update
                    .call(this, a);
                this._render()
            };
            r.progress = function (a) {
                n
                    .progress
                    .call(this, a);
                if (a !== undefined) {
                    this._render()
                }
                return this._progress
            };
            r._render = function () {
                if (this._itemList.length === 0) {
                    return
                }
                var b = this._target.t * this._duration;
                var a = this._itemList.head;
                var d = a;
                while (d) {
                    d = a.next;
                    var c = b - a.position;
                    a.currentTime(c);
                    a = d
                }
            };
            r.addClip = function (b, c) {
                c = c === undefined
                    ? this.duration()
                    : c;
                var a = b._delay / 1000;
                this
                    ._itemList
                    .append(new s(b, c + a));
                this._updateDuration()
            };
            r.addCallback = function (b, a) {
                a = a === undefined
                    ? this.duration()
                    : a;
                this
                    ._itemList
                    .append(new v(b, a));
                this._updateDuration()
            };
            r.remove = function (a) {
                var b = this
                    ._itemList
                    .getItem(a);
                if (b) {
                    this
                        ._itemList
                        .remove(b);
                    this._updateDuration()
                }
            };
            r._updateDuration = function () {
                var a = this._itemList.head;
                var b = a.position + a.duration();
                this
                    ._itemList
                    .forEach(function (c) {
                        var d = c.position + c.duration();
                        if (d >= b) {
                            a = c;
                            b = d
                        }
                    });
                this.duration(b)
            };
            r.destroy = function () {
                var a = this._itemList.head;
                while (a) {
                    var b = a;
                    a = b.next;
                    this
                        ._itemList
                        .remove(b)
                }
                this._duration = 0;
                return n
                    .destroy
                    .call(this)
            };
            w.exports = o
        }, {
            "./TimelineCallback": 123,
            "./TimelineClip": 124,
            "./TimelineItemList": 125,
            "@marcom/ac-clip": 24,
            "@marcom/ac-object/create": 72
        }
    ],
    123: [
        function (g, k, h) {
            function i(a, b) {
                this.callback = a;
                this._delay = 0;
                this.position = b;
                this._hasTriggered = false;
                this.prev = null;
                this.next = null
            }
            var j = i.prototype;
            j.duration = function () {
                return 0
            };
            j.currentTime = function (a) {
                if (a >= 0 && !this._hasTriggered) {
                    this.callback();
                    this._hasTriggered = true
                }
                if (a < 0 && this._hasTriggered) {
                    this.callback();
                    this._hasTriggered = false
                }
                return 0
            };
            k.exports = i
        }, {}
    ],
    124: [
        function (g, k, h) {
            function i(a, b) {
                this.clip = a;
                this.position = b;
                this.duration = this
                    .clip
                    .duration
                    .bind(this.clip);
                this.lastProgress = -1;
                this.prev = null;
                this.next = null
            }
            var j = i.prototype;
            j.currentTime = function (a) {
                var b = Math.min(1, Math.max(0, a / this.clip._duration));
                if (b !== b) {
                    b = 1
                }
                if (this.lastProgress === b) {
                    return this.lastProgress
                }
                if (this.lastProgress === 0 || b === 0 || this.lastProgress === -1) {
                    if (this.clip._storeOnStart) {
                        this
                            .clip
                            ._storeOnStart(this.clip)
                    }
                }
                this.clip._playing = b * this.clip._duration === this.clip._duration;
                this.lastProgress = this
                    .clip
                    .progress(b);
                return this.lastProgress
            };
            j.destroy = function () {
                this
                    .clip
                    .destroy();
                this.prev = null;
                this.next = null;
                this.duration = null
            };
            k.exports = i
        }, {}
    ],
    125: [
        function (i, o, j) {
            var k = i("./TimelineClip");
            var m = i("./TimelineCallback");
            var l = function l() {
                this.head = null;
                this.tail = null;
                this.length = 0
            };
            var n = l.prototype;
            n.append = function (a) {
                a.prev = null;
                a.next = null;
                if (this.tail) {
                    this.tail.next = a;
                    a.prev = this.tail
                } else {
                    this.head = a
                }
                this.tail = a;
                this.length++
            };
            n.remove = function (a) {
                if (a === this.head) {
                    this.head = this.head.next
                } else {
                    if (a === this.tail) {
                        this.tail = this.tail.prev
                    }
                }
                if (a.prev) {
                    a.prev.next = a.next
                }
                if (a.next) {
                    a.next.prev = a.prev
                }
                a.next = a.prev = null;
                if (this.head === null) {
                    this.tail = null
                }
                this.length--
            };
            n.getItem = function (c) {
                var b = this.head;
                while (b) {
                    var a = b;
                    if (a instanceof k && a.clip === c || a instanceof m && a.callback === c) {
                        return a
                    }
                    b = a.next
                }
                return null
            };
            n.forEach = function (a) {
                var d = 0;
                var c = this.head;
                while (c) {
                    var b = c;
                    a(b, d, this.length);
                    c = b.next
                }
            };
            n.destroy = function () {
                while (this.head) {
                    var a = this.head;
                    this.remove(a);
                    a.destroy()
                }
            };
            o.exports = l
        }, {
            "./TimelineCallback": 123,
            "./TimelineClip": 124
        }
    ],
    126: [
        function (d, g, f) {
            g.exports = 1
        }, {}
    ],
    127: [
        function (g, k, h) {
            var j = g("../isNode");
            k.exports = function i(a, b) {
                if (!j(a)) {
                    return false
                }
                if (typeof b === "number") {
                    return a.nodeType === b
                }
                return b.indexOf(a.nodeType) !== -1
            }
        }, {
            "../isNode": 129
        }
    ],
    128: [
        function (m, l, h) {
            var j = m("./internal/isNodeType");
            var i = m("./ELEMENT_NODE");
            l.exports = function k(a) {
                return j(a, i)
            }
        }, {
            "./ELEMENT_NODE": 126,
            "./internal/isNodeType": 127
        }
    ],
    129: [
        function (f, i, g) {
            i.exports = function h(a) {
                return !!(a && a.nodeType)
            }
        }, {}
    ],
    130: [
        function (m, l, h) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var k = /^\[object (HTMLCollection|NodeList|Object)\]$/;
            l.exports = function i(a) {
                if (!a) {
                    return false
                }
                if (typeof a.length !== "number") {
                    return false
                }
                if (j(a[0]) === "object" && (!a[0] || !a[0].nodeType)) {
                    return false
                }
                return k.test(Object.prototype.toString.call(a))
            }
        }, {}
    ],
    131: [
        function (g, k, h) {
            var i = g("./ac-element-tracker/ElementTracker");
            var j = g("./ac-element-tracker/TrackedElement");
            k.exports = new i();
            k.exports.ElementTracker = i;
            k.exports.TrackedElement = j
        }, {
            "./ac-element-tracker/ElementTracker": 132,
            "./ac-element-tracker/TrackedElement": 133
        }
    ],
    132: [
        function (s, u, p) {
            var t = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var m = {
                isNodeList: s("@marcom/ac-dom-nodes/isNodeList"),
                isElement: s("@marcom/ac-dom-nodes/isElement")
            };
            var w = {
                getDimensions: s("@marcom/ac-dom-metrics/getDimensions"),
                getPagePosition: s("@marcom/ac-dom-metrics/getPagePosition"),
                getScrollY: s("@marcom/ac-dom-metrics/getScrollY")
            };
            var q = {
                clone: s("@marcom/ac-object/clone"),
                extend: s("@marcom/ac-object/extend")
            };
            var n = s("./TrackedElement");
            var r = {
                autoStart: false,
                useRenderedPosition: false
            };
            function v(b, a) {
                this.options = q.clone(r);
                this.options = (typeof a === "undefined"
                    ? "undefined"
                    : t(a)) === "object"
                    ? q.extend(this.options, a)
                    : this.options;
                this._scrollY = this._getScrollY();
                this._windowHeight = this._getWindowHeight();
                this.tracking = false;
                this.elements = [];
                if (b && (Array.isArray(b) || m.isNodeList(b) || m.isElement(b))) {
                    this.addElements(b)
                }
                this.refreshAllElementStates = this
                    .refreshAllElementStates
                    .bind(this);
                this.refreshAllElementMetrics = this
                    .refreshAllElementMetrics
                    .bind(this);
                if (this.options.autoStart) {
                    this.start()
                }
            }
            var o = v.prototype;
            o.destroy = function () {
                var b,
                    a;
                this.stop();
                for (b = 0, a = this.elements.length; b < a; b++) {
                    this
                        .elements[b]
                        .destroy()
                }
                this.elements = null;
                this.options = null
            };
            o._registerTrackedElements = function (a) {
                var b = [].concat(a);
                b.forEach(function (c) {
                    if (this._elementInDOM(c.element)) {
                        c.offsetTop = c.element.offsetTop;
                        this
                            .elements
                            .push(c)
                    }
                }, this)
            };
            o._elementInDOM = function (b) {
                var c = false;
                var a = document.getElementsByTagName("body")[0];
                if (m.isElement(b) && a.contains(b)) {
                    c = true
                }
                return c
            };
            o._elementPercentInView = function (a) {
                return a.pixelsInView / a.height
            };
            o._elementPixelsInView = function (c) {
                var a = c.top - this._scrollY;
                var b = c.bottom - this._scrollY;
                if (a > this._windowHeight || b < 0) {
                    return 0
                }
                return Math.min(b, this._windowHeight) - Math.max(a, 0)
            };
            o._ifInView = function (a, b) {
                if (!b) {
                    a.trigger("enterview", a)
                }
            };
            o._ifAlreadyInView = function (a) {
                if (!a.inView) {
                    a.trigger("exitview", a)
                }
            };
            o.addElements = function (b, c) {
                if (typeof c === "undefined") {
                    c = this.options.useRenderedPosition
                }
                b = m.isNodeList(b)
                    ? Array
                        .prototype
                        .slice
                        .call(b)
                    : [].concat(b);
                for (var d = 0, a = b.length; d < a; d++) {
                    this.addElement(b[d], c)
                }
            };
            o.addElement = function (c, b) {
                var a = null;
                if (typeof b === "undefined") {
                    b = this.options.useRenderedPosition
                }
                if (m.isElement(c)) {
                    a = new n(c, b);
                    this._registerTrackedElements(a);
                    this.refreshElementMetrics(a);
                    this.refreshElementState(a)
                } else {
                    throw new TypeError("ElementTracker: " + c + " is not a valid DOM element")
                }
                return a
            };
            o.removeElement = function (b) {
                var c = [];
                var a;
                this
                    .elements
                    .forEach(function (d, f) {
                        if (d === b || d.element === b) {
                            c.push(f)
                        }
                    });
                a = this
                    .elements
                    .filter(function (d, f) {
                        return c.indexOf(f) < 0
                    });
                this.elements = a
            };
            o.start = function () {
                if (this.tracking === false) {
                    this.tracking = true;
                    window.addEventListener("resize", this.refreshAllElementMetrics);
                    window.addEventListener("orientationchange", this.refreshAllElementMetrics);
                    window.addEventListener("scroll", this.refreshAllElementStates);
                    this.refreshAllElementMetrics()
                }
            };
            o.stop = function () {
                if (this.tracking === true) {
                    this.tracking = false;
                    window.removeEventListener("resize", this.refreshAllElementMetrics);
                    window.removeEventListener("orientationchange", this.refreshAllElementMetrics);
                    window.removeEventListener("scroll", this.refreshAllElementStates)
                }
            };
            o.refreshAllElementMetrics = function (a, b) {
                if (typeof a !== "number") {
                    a = this._getScrollY()
                }
                if (typeof b !== "number") {
                    b = this._getWindowHeight()
                }
                this._scrollY = a;
                this._windowHeight = b;
                this
                    .elements
                    .forEach(this.refreshElementMetrics, this)
            };
            o.refreshElementMetrics = function (c) {
                if (!c.isActive) {
                    return c
                }
                var b = w.getDimensions(c.element, c.useRenderedPosition);
                var a = w.getPagePosition(c.element, c.useRenderedPosition);
                c = q.extend(c, b, a);
                return this.refreshElementState(c)
            };
            o.refreshAllElementStates = function (a) {
                if (typeof a !== "number") {
                    a = this._getScrollY()
                }
                this._scrollY = a;
                this
                    .elements
                    .forEach(this.refreshElementState, this)
            };
            o.refreshElementState = function (a) {
                if (!a.isActive) {
                    return a
                }
                var b = a.inView;
                a.pixelsInView = this._elementPixelsInView(a);
                a.percentInView = this._elementPercentInView(a);
                a.inView = a.pixelsInView > 0;
                if (a.inView) {
                    this._ifInView(a, b)
                }
                if (b) {
                    this._ifAlreadyInView(a)
                }
                return a
            };
            o.pauseElementTracking = function (a) {
                if (a) {
                    a.isActive = false
                }
            };
            o.resumeElementTracking = function (a) {
                if (a) {
                    a.isActive = true
                }
            };
            o._getWindowHeight = function () {
                return window.innerHeight
            };
            o._getScrollY = function () {
                return w.getScrollY()
            };
            u.exports = v
        }, {
            "./TrackedElement": 133,
            "@marcom/ac-dom-metrics/getDimensions": 16,
            "@marcom/ac-dom-metrics/getPagePosition": 17,
            "@marcom/ac-dom-metrics/getScrollY": 19,
            "@marcom/ac-dom-nodes/isElement": 128,
            "@marcom/ac-dom-nodes/isNodeList": 130,
            "@marcom/ac-object/clone": 134,
            "@marcom/ac-object/extend": 136
        }
    ],
    133: [
        function (q, p, j) {
            var k = {
                isElement: q("@marcom/ac-dom-nodes/isElement")
            };
            var n = q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var l = n.prototype;
            function m(b, a) {
                if (!k.isElement(b)) {
                    throw new TypeError("TrackedElement: " + b + " is not a valid DOM element")
                }
                n.call(this);
                this.element = b;
                this.inView = false;
                this.isActive = true;
                this.percentInView = 0;
                this.pixelsInView = 0;
                this.offsetTop = 0;
                this.top = 0;
                this.right = 0;
                this.bottom = 0;
                this.left = 0;
                this.width = 0;
                this.height = 0;
                this.useRenderedPosition = a || false
            }
            var o = m.prototype = Object.create(l);
            o.destroy = function () {
                this.element = null;
                l
                    .destroy
                    .call(this)
            };
            p.exports = m
        }, {
            "@marcom/ac-dom-nodes/isElement": 128,
            "@marcom/ac-event-emitter-micro": 139
        }
    ],
    134: [
        function (d, g, f) {
            arguments[4][71][0].apply(f, arguments)
        }, {
            "./extend": 136,
            "@marcom/ac-polyfills/Array/isArray": undefined,
            dup: 71
        }
    ],
    135: [
        function (h, m, i) {
            var l = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var j = h("./extend");
            m.exports = function k(a, b) {
                if ((typeof a === "undefined"
                    ? "undefined"
                    : l(a)) !== "object") {
                    throw new TypeError("defaults: must provide a defaults object")
                }
                b = b || {};
                if ((typeof b === "undefined"
                    ? "undefined"
                    : l(b)) !== "object") {
                    throw new TypeError("defaults: options must be a typeof object")
                }
                return j({}, a, b)
            }
        }, {
            "./extend": 136
        }
    ],
    136: [
        function (d, g, f) {
            arguments[4][73][0].apply(f, arguments)
        }, {
            "@marcom/ac-polyfills/Array/prototype.forEach": undefined,
            dup: 73
        }
    ],
    137: [
        function (f, h, g) {
            var i = f("./ac-element-engagement/ElementEngagement");
            h.exports = new i();
            h.exports.ElementEngagement = i
        }, {
            "./ac-element-engagement/ElementEngagement": 138
        }
    ],
    138: [
        function (s, t, q) {
            var p;
            var l = s("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var r = {
                defaults: s("@marcom/ac-object/defaults"),
                extend: s("@marcom/ac-object/extend")
            };
            var o = s("@marcom/ac-element-tracker").ElementTracker;
            var m = {
                timeToEngage: 500,
                inViewThreshold: 0.75,
                stopOnEngaged: true
            };
            var n = {
                thresholdEnterTime: 0,
                thresholdExitTime: 0,
                inThreshold: false,
                engaged: false,
                tracking: true
            };
            var u = function u(a) {
                o.call(this, null, a);
                l.call(this);
                this._thresholdEnter = this
                    ._thresholdEnter
                    .bind(this);
                this._thresholdExit = this
                    ._thresholdExit
                    .bind(this);
                this._enterView = this
                    ._enterView
                    .bind(this);
                this._exitView = this
                    ._exitView
                    .bind(this)
            };
            p = u.prototype = Object.create(o.prototype);
            p = r.extend(p, l.prototype);
            p._decorateTrackedElement = function (a, b) {
                var c;
                c = r.defaults(m, b || {});
                r.extend(a, c);
                r.extend(a, n)
            };
            p._attachElementListeners = function (a) {
                a.on("thresholdenter", this._thresholdEnter, this);
                a.on("thresholdexit", this._thresholdExit, this);
                a.on("enterview", this._enterView, this);
                a.on("exitview", this._exitView, this)
            };
            p._removeElementListeners = function (a) {
                a.off("thresholdenter", this._thresholdEnter);
                a.off("thresholdexit", this._thresholdExit);
                a.off("enterview", this._enterView);
                a.off("exitview", this._exitView)
            };
            p._attachAllElementListeners = function () {
                this
                    .elements
                    .forEach(function (a) {
                        if (!a.stopOnEngaged) {
                            this._attachElementListeners(a)
                        } else {
                            if (!a.engaged) {
                                this._attachElementListeners(a)
                            }
                        }
                    }, this)
            };
            p._removeAllElementListeners = function () {
                this
                    .elements
                    .forEach(function (a) {
                        this._removeElementListeners(a)
                    }, this)
            };
            p._elementInViewPastThreshold = function (a) {
                var b = false;
                if (a.pixelsInView === this._windowHeight) {
                    b = true
                } else {
                    b = a.percentInView > a.inViewThreshold
                }
                return b
            };
            p._ifInView = function (b, c) {
                var a = b.inThreshold;
                o
                    .prototype
                    ._ifInView
                    .apply(this, arguments);
                if (!a && this._elementInViewPastThreshold(b)) {
                    b.inThreshold = true;
                    b.trigger("thresholdenter", b);
                    if (typeof b.timeToEngage === "number" && b.timeToEngage >= 0) {
                        b.engagedTimeout = window.setTimeout(this._engaged.bind(this, b), b.timeToEngage)
                    }
                }
            };
            p._ifAlreadyInView = function (b) {
                var a = b.inThreshold;
                o
                    .prototype
                    ._ifAlreadyInView
                    .apply(this, arguments);
                if (a && !this._elementInViewPastThreshold(b)) {
                    b.inThreshold = false;
                    b.trigger("thresholdexit", b);
                    if (b.engagedTimeout) {
                        window.clearTimeout(b.engagedTimeout);
                        b.engagedTimeout = null
                    }
                }
            };
            p._engaged = function (a) {
                a.engagedTimeout = null;
                this._elementEngaged(a);
                a.trigger("engaged", a);
                this.trigger("engaged", a)
            };
            p._thresholdEnter = function (a) {
                a.thresholdEnterTime = Date.now();
                a.thresholdExitTime = 0;
                this.trigger("thresholdenter", a)
            };
            p._thresholdExit = function (a) {
                a.thresholdExitTime = Date.now();
                this.trigger("thresholdexit", a)
            };
            p._enterView = function (a) {
                this.trigger("enterview", a)
            };
            p._exitView = function (a) {
                this.trigger("exitview", a)
            };
            p._elementEngaged = function (a) {
                a.engaged = true;
                if (a.stopOnEngaged) {
                    this.stop(a)
                }
            };
            p.stop = function (a) {
                if (this.tracking && !a) {
                    this._removeAllElementListeners();
                    o
                        .prototype
                        .stop
                        .call(this)
                }
                if (a && a.tracking) {
                    a.tracking = false;
                    this._removeElementListeners(a);
                    this.removeElement(a)
                }
            };
            p.start = function (a) {
                if (!a) {
                    this._attachAllElementListeners()
                }
                if (a && !a.tracking) {
                    if (!a.stopOnEngaged) {
                        a.tracking = true;
                        this._attachElementListeners(a)
                    } else {
                        if (!a.engaged) {
                            a.tracking = true;
                            this._attachElementListeners(a)
                        }
                    }
                }
                if (!this.tracking) {
                    o
                        .prototype
                        .start
                        .call(this)
                } else {
                    this.refreshAllElementMetrics();
                    this.refreshAllElementStates()
                }
            };
            p.addElement = function (c, b) {
                b = b || {};
                var a = o
                    .prototype
                    .addElement
                    .call(this, c, b.useRenderedPosition);
                this._decorateTrackedElement(a, b);
                return a
            };
            p.addElements = function (a, b) {
                []
                    .forEach
                    .call(a, function (c) {
                        this.addElement(c, b)
                    }, this)
            };
            t.exports = u
        }, {
            "@marcom/ac-element-tracker": 131,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/defaults": 135,
            "@marcom/ac-object/extend": 136
        }
    ],
    139: [
        function (d, g, f) {
            g.exports = {
                EventEmitterMicro: d("./ac-event-emitter-micro/EventEmitterMicro")
            }
        }, {
            "./ac-event-emitter-micro/EventEmitterMicro": 140
        }
    ],
    140: [
        function (g, k, h) {
            function i() {
                this._events = {}
            }
            var j = i.prototype;
            j.on = function (b, a) {
                this._events[b] = this._events[b] || [];
                this
                    ._events[b]
                    .unshift(a)
            };
            j.once = function (d, a) {
                var b = this;
                function c(f) {
                    b.off(d, c);
                    if (f !== undefined) {
                        a(f)
                    } else {
                        a()
                    }
                }
                this.on(d, c)
            };
            j.off = function (c, a) {
                if (!this.has(c)) {
                    return
                }
                if (arguments.length === 1) {
                    this._events[c] = null;
                    delete this._events[c];
                    return
                }
                var b = this
                    ._events[c]
                    .indexOf(a);
                if (b === -1) {
                    return
                }
                this
                    ._events[c]
                    .splice(b, 1)
            };
            j.trigger = function (c, a) {
                if (!this.has(c)) {
                    return
                }
                for (var b = this._events[c].length - 1; b >= 0; b--) {
                    if (a !== undefined) {
                        this._events[c][b](a)
                    } else {
                        this._events[c][b]()
                    }
                }
            };
            j.has = function (a) {
                if (a in this._events === false || this._events[a].length === 0) {
                    return false
                }
                return true
            };
            j.destroy = function () {
                for (var a in this._events) {
                    this._events[a] = null
                }
                this._events = null
            };
            k.exports = i
        }, {}
    ],
    141: [
        function (k, j, g) {
            var h = function h() {
                var a = "";
                var b;
                for (b = 0; b < arguments.length; b++) {
                    if (b > 0) {
                        a += ","
                    }
                    a += arguments[b]
                }
                return a
            };
            j.exports = function i(a, b) {
                b = b || h;
                var c = function c() {
                    var f = arguments;
                    var d = b.apply(this, f);
                    if (!(d in c.cache)) {
                        c.cache[d] = a.apply(this, f)
                    }
                    return c.cache[d]
                };
                c.cache = {};
                return c
            }
        }, {}
    ],
    142: [
        function (f, i, g) {
            i.exports = function h(a) {
                var b;
                return function () {
                    if (typeof b === "undefined") {
                        b = a.apply(this, arguments)
                    }
                    return b
                }
            }
        }, {}
    ],
    143: [
        function (d, g, f) {
            arguments[4][6][0].apply(f, arguments)
        }, {
            "./shared/camelCasedEventTypes": 146,
            "./shared/prefixHelper": 148,
            "./shared/windowFallbackEventTypes": 151,
            "./utils/eventTypeAvailable": 152,
            dup: 6
        }
    ],
    144: [
        function (d, g, f) {
            arguments[4][49][0].apply(f, arguments)
        }, {
            "./shared/getStyleTestElement": 147,
            "./shared/prefixHelper": 148,
            "./shared/stylePropertyCache": 149,
            "./utils/toCSS": 153,
            "./utils/toDOM": 154,
            dup: 49
        }
    ],
    145: [
        function (d, g, f) {
            arguments[4][50][0].apply(f, arguments)
        }, {
            "./getStyleProperty": 144,
            "./shared/prefixHelper": 148,
            "./shared/stylePropertyCache": 149,
            "./shared/styleValueAvailable": 150,
            dup: 50
        }
    ],
    146: [
        function (d, g, f) {
            arguments[4][7][0].apply(f, arguments)
        }, {
            dup: 7
        }
    ],
    147: [
        function (d, g, f) {
            arguments[4][51][0].apply(f, arguments)
        }, {
            dup: 51
        }
    ],
    148: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    149: [
        function (d, g, f) {
            arguments[4][53][0].apply(f, arguments)
        }, {
            dup: 53
        }
    ],
    150: [
        function (d, g, f) {
            arguments[4][54][0].apply(f, arguments)
        }, {
            "./getStyleTestElement": 147,
            "./stylePropertyCache": 149,
            dup: 54
        }
    ],
    151: [
        function (d, g, f) {
            arguments[4][9][0].apply(f, arguments)
        }, {
            dup: 9
        }
    ],
    152: [
        function (d, g, f) {
            arguments[4][10][0].apply(f, arguments)
        }, {
            dup: 10
        }
    ],
    153: [
        function (d, g, f) {
            arguments[4][56][0].apply(f, arguments)
        }, {
            dup: 56
        }
    ],
    154: [
        function (d, g, f) {
            arguments[4][57][0].apply(f, arguments)
        }, {
            dup: 57
        }
    ],
    155: [
        function (d, g, f) {
            g.exports = {
                canvasAvailable: d("./canvasAvailable"),
                continuousScrollEventsAvailable: d("./continuousScrollEventsAvailable"),
                cookiesAvailable: d("./cookiesAvailable"),
                cssLinearGradientAvailable: d("./cssLinearGradientAvailable"),
                cssPropertyAvailable: d("./cssPropertyAvailable"),
                cssViewportUnitsAvailable: d("./cssViewportUnitsAvailable"),
                elementAttributeAvailable: d("./elementAttributeAvailable"),
                eventTypeAvailable: d("./eventTypeAvailable"),
                isDesktop: d("./isDesktop"),
                isHandheld: d("./isHandheld"),
                isRetina: d("./isRetina"),
                isTablet: d("./isTablet"),
                localStorageAvailable: d("./localStorageAvailable"),
                mediaElementsAvailable: d("./mediaElementsAvailable"),
                mediaQueriesAvailable: d("./mediaQueriesAvailable"),
                prefersReducedMotion: d("./prefersReducedMotion"),
                sessionStorageAvailable: d("./sessionStorageAvailable"),
                svgAvailable: d("./svgAvailable"),
                threeDTransformsAvailable: d("./threeDTransformsAvailable"),
                touchAvailable: d("./touchAvailable"),
                webGLAvailable: d("./webGLAvailable")
            }
        }, {
            "./canvasAvailable": 156,
            "./continuousScrollEventsAvailable": 157,
            "./cookiesAvailable": 158,
            "./cssLinearGradientAvailable": 159,
            "./cssPropertyAvailable": 160,
            "./cssViewportUnitsAvailable": 161,
            "./elementAttributeAvailable": 162,
            "./eventTypeAvailable": 163,
            "./isDesktop": 165,
            "./isHandheld": 166,
            "./isRetina": 167,
            "./isTablet": 168,
            "./localStorageAvailable": 169,
            "./mediaElementsAvailable": 170,
            "./mediaQueriesAvailable": 171,
            "./prefersReducedMotion": 172,
            "./sessionStorageAvailable": 173,
            "./svgAvailable": 174,
            "./threeDTransformsAvailable": 175,
            "./touchAvailable": 176,
            "./webGLAvailable": 177
        }
    ],
    156: [
        function (h, m, i) {
            var j = h("./helpers/globals");
            var k = h("@marcom/ac-function/once");
            var l = function l() {
                var b = j.getDocument();
                var a = b.createElement("canvas");
                return !!(typeof a.getContext === "function" && a.getContext("2d"))
            };
            m.exports = k(l);
            m.exports.original = l
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    157: [
        function (o, m, i) {
            var n = o("@marcom/ac-useragent");
            var j = o("./touchAvailable").original;
            var l = o("@marcom/ac-function/once");
            function k() {
                return !j() || n.os.ios && n.os.version.major >= 8 || n.browser.chrome
            }
            m.exports = l(k);
            m.exports.original = k
        }, {
            "./touchAvailable": 176,
            "@marcom/ac-function/once": 142,
            "@marcom/ac-useragent": 439
        }
    ],
    158: [
        function (m, l, h) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = false;
                var d = j.getDocument();
                var b = j.getNavigator();
                try {
                    if ("cookie" in d && !!b.cookieEnabled) {
                        d.cookie = "ac_feature_cookie=1";
                        a = d
                            .cookie
                            .indexOf("ac_feature_cookie") !== -1;
                        d.cookie = "ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
                    }
                } catch (c) {}
                return a
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    159: [
        function (m, l, h) {
            var j = m("@marcom/ac-prefixer/getStyleValue");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = ["linear-gradient(to bottom right, #9f9, white)", "linear-gradient(top left, #9f9, white)", "gradient(linear, left top, right bottom, from(#9f9), to(white))"];
                return a.some(function (b) {
                    return !!j("background-image", b)
                })
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "@marcom/ac-function/once": 142,
            "@marcom/ac-prefixer/getStyleValue": 145
        }
    ],
    160: [
        function (o, n, i) {
            var l = o("@marcom/ac-prefixer/getStyleValue");
            var m = o("@marcom/ac-prefixer/getStyleProperty");
            var k = o("@marcom/ac-function/memoize");
            function j(a, b) {
                if (typeof b !== "undefined") {
                    return !!l(a, b)
                } else {
                    return !!m(a)
                }
            }
            n.exports = k(j);
            n.exports.original = j
        }, {
            "@marcom/ac-function/memoize": 141,
            "@marcom/ac-prefixer/getStyleProperty": 144,
            "@marcom/ac-prefixer/getStyleValue": 145
        }
    ],
    161: [
        function (h, m, i) {
            var k = h("@marcom/ac-prefixer/getStyleValue");
            var l = h("@marcom/ac-function/once");
            function j() {
                return !!k("margin", "1vw 1vh")
            }
            m.exports = l(j);
            m.exports.original = j
        }, {
            "@marcom/ac-function/once": 142,
            "@marcom/ac-prefixer/getStyleValue": 145
        }
    ],
    162: [
        function (h, l, i) {
            var k = h("./helpers/globals");
            var j = h("@marcom/ac-function/memoize");
            function m(d, b) {
                var c = k.getDocument();
                var a;
                b = b || "div";
                a = c.createElement(b);
                return d in a
            }
            l.exports = j(m);
            l.exports.original = m
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/memoize": 141
        }
    ],
    163: [
        function (m, k, h) {
            var i = m("@marcom/ac-prefixer/getEventType");
            var j = m("@marcom/ac-function/memoize");
            function l(a, b) {
                return !!i(a, b)
            }
            k.exports = j(l);
            k.exports.original = l
        }, {
            "@marcom/ac-function/memoize": 141,
            "@marcom/ac-prefixer/getEventType": 143
        }
    ],
    164: [
        function (h, l, i) {
            l.exports = {
                getWindow: function m() {
                    return window
                },
                getDocument: function k() {
                    return document
                },
                getNavigator: function j() {
                    return navigator
                }
            }
        }, {}
    ],
    165: [
        function (n, m, i) {
            var j = n("./touchAvailable").original;
            var k = n("./helpers/globals");
            var l = n("@marcom/ac-function/once");
            function o() {
                var a = k.getWindow();
                return !j() && !a.orientation
            }
            m.exports = l(o);
            m.exports.original = o
        }, {
            "./helpers/globals": 164,
            "./touchAvailable": 176,
            "@marcom/ac-function/once": 142
        }
    ],
    166: [
        function (m, l, o) {
            var n = m("./isDesktop").original;
            var j = m("./isTablet").original;
            var k = m("@marcom/ac-function/once");
            function i() {
                return !n() && !j()
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./isDesktop": 165,
            "./isTablet": 168,
            "@marcom/ac-function/once": 142
        }
    ],
    167: [
        function (g, k, h) {
            var j = g("./helpers/globals");
            k.exports = function i() {
                var a = j.getWindow();
                return "devicePixelRatio" in a && a.devicePixelRatio >= 1.5
            }
        }, {
            "./helpers/globals": 164
        }
    ],
    168: [
        function (o, n, q) {
            var p = o("./isDesktop").original;
            var l = o("./helpers/globals");
            var m = o("@marcom/ac-function/once");
            var j = 600;
            function k() {
                var a = l.getWindow();
                var b = a.screen.width;
                if (a.orientation && a.screen.height < b) {
                    b = a.screen.height
                }
                return !p() && b >= j
            }
            n.exports = m(k);
            n.exports.original = k
        }, {
            "./helpers/globals": 164,
            "./isDesktop": 165,
            "@marcom/ac-function/once": 142
        }
    ],
    169: [
        function (m, l, i) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function h() {
                var a = j.getWindow();
                var b = false;
                try {
                    b = !!(a.localStorage && a.localStorage.non_existent !== null)
                } catch (c) {}
                return b
            }
            l.exports = k(h);
            l.exports.original = h
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    170: [
        function (h, m, i) {
            var j = h("./helpers/globals");
            var l = h("@marcom/ac-function/once");
            function k() {
                var a = j.getWindow();
                return "HTMLMediaElement" in a
            }
            m.exports = l(k);
            m.exports.original = k
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    171: [
        function (m, l, h) {
            m("@marcom/ac-polyfills/matchMedia");
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = j.getWindow();
                var b = a.matchMedia("only all");
                return !!(b && b.matches)
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142,
            "@marcom/ac-polyfills/matchMedia": undefined
        }
    ],
    172: [
        function (g, k, h) {
            var i = g("./helpers/globals");
            function j() {
                var a = i.getWindow();
                var b = a.matchMedia("(prefers-reduced-motion)");
                return !!(b && b.matches)
            }
            k.exports = j
        }, {
            "./helpers/globals": 164
        }
    ],
    173: [
        function (m, l, h) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = j.getWindow();
                var c = false;
                try {
                    if ("sessionStorage" in a && typeof a.sessionStorage.setItem === "function") {
                        a
                            .sessionStorage
                            .setItem("ac_feature", "test");
                        c = true;
                        a
                            .sessionStorage
                            .removeItem("ac_feature", "test")
                    }
                } catch (b) {}
                return c
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    174: [
        function (m, l, h) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = j.getDocument();
                return !!a
                    .implementation
                    .hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    175: [
        function (h, m, i) {
            var j = h("@marcom/ac-prefixer/getStyleValue");
            var l = h("@marcom/ac-function/once");
            function k() {
                return !!(j("perspective", "1px") && j("transform", "translateZ(0)"))
            }
            m.exports = l(k);
            m.exports.original = k
        }, {
            "@marcom/ac-function/once": 142,
            "@marcom/ac-prefixer/getStyleValue": 145
        }
    ],
    176: [
        function (m, l, h) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var a = j.getWindow();
                var c = j.getDocument();
                var b = j.getNavigator();
                return !!("ontouchstart" in a || a.DocumentTouch && c instanceof a.DocumentTouch || b.maxTouchPoints > 0 || b.msMaxTouchPoints > 0)
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    177: [
        function (m, l, h) {
            var j = m("./helpers/globals");
            var k = m("@marcom/ac-function/once");
            function i() {
                var b = j.getDocument();
                var a = b.createElement("canvas");
                if (typeof a.getContext === "function") {
                    return !!(a.getContext("webgl") || a.getContext("experimental-webgl"))
                }
                return false
            }
            l.exports = k(i);
            l.exports.original = i
        }, {
            "./helpers/globals": 164,
            "@marcom/ac-function/once": 142
        }
    ],
    178: [
        function (g, k, h) {
            g("@marcom/ac-polyfills/Array/prototype.slice");
            g("@marcom/ac-polyfills/Element/prototype.classList");
            var j = g("./className/add");
            k.exports = function i() {
                var a = Array
                    .prototype
                    .slice
                    .call(arguments);
                var b = a.shift(a);
                var c;
                if (b.classList && b.classList.add) {
                    b
                        .classList
                        .add
                        .apply(b.classList, a);
                    return
                }
                for (c = 0; c < a.length; c++) {
                    j(b, a[c])
                }
            }
        }, {
            "./className/add": 180,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined,
            "@marcom/ac-polyfills/Element/prototype.classList": undefined
        }
    ],
    179: [
        function (d, g, f) {
            g.exports = {
                add: d("./className/add"),
                contains: d("./className/contains"),
                remove: d("./className/remove")
            }
        }, {
            "./className/add": 180,
            "./className/contains": 181,
            "./className/remove": 183
        }
    ],
    180: [
        function (g, k, h) {
            var j = g("./contains");
            k.exports = function i(a, b) {
                if (!j(a, b)) {
                    a.className += " " + b
                }
            }
        }, {
            "./contains": 181
        }
    ],
    181: [
        function (g, k, h) {
            var i = g("./getTokenRegExp");
            k.exports = function j(a, b) {
                return i(b).test(a.className)
            }
        }, {
            "./getTokenRegExp": 182
        }
    ],
    182: [
        function (f, i, g) {
            i.exports = function h(a) {
                return new RegExp("(\\s|^)" + a + "(\\s|$)")
            }
        }, {}
    ],
    183: [
        function (m, l, h) {
            var k = m("./contains");
            var j = m("./getTokenRegExp");
            l.exports = function i(a, b) {
                if (k(a, b)) {
                    a.className = a
                        .className
                        .replace(j(b), "$1")
                        .trim()
                }
            }
        }, {
            "./contains": 181,
            "./getTokenRegExp": 182
        }
    ],
    184: [
        function (g, j, h) {
            g("@marcom/ac-polyfills/Element/prototype.classList");
            var i = g("./className/contains");
            j.exports = function k(a, b) {
                if (a.classList && a.classList.contains) {
                    return a
                        .classList
                        .contains(b)
                }
                return i(a, b)
            }
        }, {
            "./className/contains": 181,
            "@marcom/ac-polyfills/Element/prototype.classList": undefined
        }
    ],
    185: [
        function (d, g, f) {
            g.exports = {
                add: d("./add"),
                contains: d("./contains"),
                remove: d("./remove"),
                toggle: d("./toggle")
            }
        }, {
            "./add": 178,
            "./contains": 184,
            "./remove": 186,
            "./toggle": 187
        }
    ],
    186: [
        function (j, i, k) {
            j("@marcom/ac-polyfills/Array/prototype.slice");
            j("@marcom/ac-polyfills/Element/prototype.classList");
            var g = j("./className/remove");
            i.exports = function h() {
                var a = Array
                    .prototype
                    .slice
                    .call(arguments);
                var b = a.shift(a);
                var c;
                if (b.classList && b.classList.remove) {
                    b
                        .classList
                        .remove
                        .apply(b.classList, a);
                    return
                }
                for (c = 0; c < a.length; c++) {
                    g(b, a[c])
                }
            }
        }, {
            "./className/remove": 183,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined,
            "@marcom/ac-polyfills/Element/prototype.classList": undefined
        }
    ],
    187: [
        function (k, j, g) {
            k("@marcom/ac-polyfills/Element/prototype.classList");
            var i = k("./className");
            j.exports = function h(b, c, a) {
                var d = typeof a !== "undefined";
                var f;
                if (b.classList && b.classList.toggle) {
                    if (d) {
                        return b
                            .classList
                            .toggle(c, a)
                    }
                    return b
                        .classList
                        .toggle(c)
                }
                if (d) {
                    f = !!a
                } else {
                    f = !i.contains(b, c)
                }
                if (f) {
                    i.add(b, c)
                } else {
                    i.remove(b, c)
                }
                return f
            }
        }, {
            "./className": 179,
            "@marcom/ac-polyfills/Element/prototype.classList": undefined
        }
    ],
    188: [
        function (m, l, h) {
            var j = m("./utils/addEventListener");
            var i = m("./shared/getEventType");
            l.exports = function k(a, c, b, d) {
                c = i(a, c);
                return j(a, c, b, d)
            }
        }, {
            "./shared/getEventType": 196,
            "./utils/addEventListener": 197
        }
    ],
    189: [
        function (d, g, f) {
            arguments[4][6][0].apply(f, arguments)
        }, {
            "./shared/camelCasedEventTypes": 190,
            "./shared/prefixHelper": 191,
            "./shared/windowFallbackEventTypes": 192,
            "./utils/eventTypeAvailable": 193,
            dup: 6
        }
    ],
    190: [
        function (d, g, f) {
            arguments[4][7][0].apply(f, arguments)
        }, {
            dup: 7
        }
    ],
    191: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    192: [
        function (d, g, f) {
            arguments[4][9][0].apply(f, arguments)
        }, {
            dup: 9
        }
    ],
    193: [
        function (d, g, f) {
            arguments[4][10][0].apply(f, arguments)
        }, {
            dup: 10
        }
    ],
    194: [
        function (i, h, g) {
            h.exports = function f(a) {
                a = a || window.event;
                if (a.preventDefault) {
                    a.preventDefault()
                } else {
                    a.returnValue = false
                }
            }
        }, {}
    ],
    195: [
        function (l, k, m) {
            var h = l("./utils/removeEventListener");
            var i = l("./shared/getEventType");
            k.exports = function j(a, c, b, d) {
                c = i(a, c);
                return h(a, c, b, d)
            }
        }, {
            "./shared/getEventType": 196,
            "./utils/removeEventListener": 198
        }
    ],
    196: [
        function (k, i, g) {
            var j = k("@marcom/ac-prefixer/getEventType");
            i.exports = function h(a, b) {
                var c;
                var d;
                if ("tagName" in a) {
                    c = a.tagName
                } else {
                    if (a === window) {
                        c = "window"
                    } else {
                        c = "document"
                    }
                }
                d = j(b, c);
                if (d) {
                    return d
                }
                return b
            }
        }, {
            "@marcom/ac-prefixer/getEventType": 189
        }
    ],
    197: [
        function (f, i, g) {
            i.exports = function h(a, c, b, d) {
                if (a.addEventListener) {
                    a.addEventListener(c, b, !!d)
                } else {
                    a.attachEvent("on" + c, b)
                }
                return a
            }
        }, {}
    ],
    198: [
        function (f, i, g) {
            i.exports = function h(a, c, b, d) {
                if (a.removeEventListener) {
                    a.removeEventListener(c, b, !!d)
                } else {
                    a.detachEvent("on" + c, b)
                }
                return a
            }
        }, {}
    ],
    199: [
        function (j, i, k) {
            var g = j("./utils/getBoundingClientRect");
            i.exports = function h(c, a) {
                var b = 1;
                if (a) {
                    b = g(c).width / c.offsetWidth
                }
                return {width: c.*b, height: c.*b}
            }
        }, {
            "./utils/getBoundingClientRect": 209
        }
    ],
    200: [
        function (d, g, f) {
            arguments[4][46][0].apply(f, arguments)
        }, {
            "./utils/getBoundingClientRect": 209,
            dup: 46
        }
    ],
    201: [
        function (n, m, o) {
            var q = n("./getDimensions");
            var p = n("./utils/getBoundingClientRect");
            var j = n("./getScrollX");
            var k = n("./getScrollY");
            m.exports = function l(d, f) {
                var b;
                var g;
                var a;
                var c;
                if (f) {
                    b = p(d);
                    g = j();
                    a = k();
                    return {
                        top: b.top + a,
                        right: b.right + g,
                        bottom: b.bottom + a,
                        left: b.left + g
                    }
                }
                c = q(d, f);
                b = {
                    top: d.offsetTop,
                    left: d.offsetLeft,
                    width: c.width,
                    height: c.height
                };
                while (d = d.offsetParent) {
                    b.top += d.offsetTop;
                    b.left += d.offsetLeft
                }
                return {
                    top: b.top,
                    right: b.left + b.width,
                    bottom: b.top + b.height,
                    left: b.left
                }
            }
        }, {
            "./getDimensions": 200,
            "./getScrollX": 205,
            "./getScrollY": 206,
            "./utils/getBoundingClientRect": 209
        }
    ],
    202: [
        function (m, k, h) {
            var i = m("./getDimensions");
            var j = m("./getPixelsInViewport");
            k.exports = function l(b, a) {
                var c = j(b, a);
                var d = i(b, a).height;
                return c / d
            }
        }, {
            "./getDimensions": 200,
            "./getPixelsInViewport": 203
        }
    ],
    203: [
        function (k, j, g) {
            var h = k("./getViewportPosition");
            j.exports = function i(d, a) {
                var b = document.documentElement.clientHeight;
                var f = h(d, a);
                var c;
                if (f.top >= b || f.bottom <= 0) {
                    return 0
                }
                c = f.bottom - f.top;
                if (f.top < 0) {
                    c += f.top
                }
                if (f.bottom > b) {
                    c -= f.bottom - b
                }
                return c
            }
        }, {
            "./getViewportPosition": 207
        }
    ],
    204: [
        function (l, k, m) {
            var i = l("./getDimensions");
            var h = l("./utils/getBoundingClientRect");
            k.exports = function j(d, a) {
                var b;
                var f;
                var c;
                if (a) {
                    b = h(d);
                    if (d.offsetParent) {
                        f = h(d.offsetParent);
                        b.top -= f.top;
                        b.left -= f.left
                    }
                } else {
                    c = i(d, a);
                    b = {
                        top: d.offsetTop,
                        left: d.offsetLeft,
                        width: c.width,
                        height: c.height
                    }
                }
                return {
                    top: b.top,
                    right: b.left + b.width,
                    bottom: b.top + b.height,
                    left: b.left
                }
            }
        }, {
            "./getDimensions": 200,
            "./utils/getBoundingClientRect": 209
        }
    ],
    205: [
        function (i, h, f) {
            h.exports = function g(b) {
                var a;
                b = b || window;
                if (b === window) {
                    a = window.pageXOffset;
                    if (!a) {
                        b = document.documentElement || document.body.parentNode || document.body
                    } else {
                        return a
                    }
                }
                return b.scrollLeft
            }
        }, {}
    ],
    206: [
        function (i, h, f) {
            h.exports = function g(b) {
                var a;
                b = b || window;
                if (b === window) {
                    a = window.pageYOffset;
                    if (!a) {
                        b = document.documentElement || document.body.parentNode || document.body
                    } else {
                        return a
                    }
                }
                return b.scrollTop
            }
        }, {}
    ],
    207: [
        function (n, m, o) {
            var l = n("./getPagePosition");
            var p = n("./utils/getBoundingClientRect");
            var q = n("./getScrollX");
            var j = n("./getScrollY");
            m.exports = function k(c, f) {
                var d;
                var a;
                var b;
                if (f) {
                    d = p(c);
                    return {top: d.top, right: d.right, bottom: d.bottom, left: d.left}
                }
                d = l(c);
                a = q();
                b = j();
                return {
                    top: d.top - b,
                    right: d.right - a,
                    bottom: d.bottom - b,
                    left: d.left - a
                }
            }
        }, {
            "./getPagePosition": 201,
            "./getScrollX": 205,
            "./getScrollY": 206,
            "./utils/getBoundingClientRect": 209
        }
    ],
    208: [
        function (h, l, i) {
            var j = h("./getPixelsInViewport");
            var m = h("./getPercentInViewport");
            l.exports = function k(b, a, d) {
                var c;
                d = d || 0;
                if (typeof d === "string" && d.slice(-2) === "px") {
                    d = parseInt(d, 10);
                    c = j(b, a)
                } else {
                    c = m(b, a)
                }
                return c > 0 && c >= d
            }
        }, {
            "./getPercentInViewport": 202,
            "./getPixelsInViewport": 203
        }
    ],
    209: [
        function (d, g, f) {
            arguments[4][47][0].apply(f, arguments)
        }, {
            dup: 47
        }
    ],
    210: [
        function (d, g, f) {
            arguments[4][48][0].apply(f, arguments)
        }, {
            "./getStyleProperty": 211,
            "./getStyleValue": 212,
            "./shared/stylePropertyCache": 215,
            dup: 48
        }
    ],
    211: [
        function (d, g, f) {
            arguments[4][49][0].apply(f, arguments)
        }, {
            "./shared/getStyleTestElement": 213,
            "./shared/prefixHelper": 214,
            "./shared/stylePropertyCache": 215,
            "./utils/toCSS": 218,
            "./utils/toDOM": 219,
            dup: 49
        }
    ],
    212: [
        function (d, g, f) {
            arguments[4][50][0].apply(f, arguments)
        }, {
            "./getStyleProperty": 211,
            "./shared/prefixHelper": 214,
            "./shared/stylePropertyCache": 215,
            "./shared/styleValueAvailable": 216,
            dup: 50
        }
    ],
    213: [
        function (d, g, f) {
            arguments[4][51][0].apply(f, arguments)
        }, {
            dup: 51
        }
    ],
    214: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    215: [
        function (d, g, f) {
            arguments[4][53][0].apply(f, arguments)
        }, {
            dup: 53
        }
    ],
    216: [
        function (d, g, f) {
            arguments[4][54][0].apply(f, arguments)
        }, {
            "./getStyleTestElement": 213,
            "./stylePropertyCache": 215,
            dup: 54
        }
    ],
    217: [
        function (d, g, f) {
            arguments[4][55][0].apply(f, arguments)
        }, {
            dup: 55
        }
    ],
    218: [
        function (d, g, f) {
            arguments[4][56][0].apply(f, arguments)
        }, {
            dup: 56
        }
    ],
    219: [
        function (d, g, f) {
            arguments[4][57][0].apply(f, arguments)
        }, {
            dup: 57
        }
    ],
    220: [
        function (d, g, f) {
            g.exports = {
                getStyle: d("./getStyle"),
                setStyle: d("./setStyle")
            }
        }, {
            "./getStyle": 221,
            "./setStyle": 223
        }
    ],
    221: [
        function (d, g, f) {
            arguments[4][58][0].apply(f, arguments)
        }, {
            "@marcom/ac-prefixer/getStyleProperty": 211,
            "@marcom/ac-prefixer/stripPrefixes": 217,
            dup: 58
        }
    ],
    222: [
        function (d, g, f) {
            arguments[4][59][0].apply(f, arguments)
        }, {
            dup: 59
        }
    ],
    223: [
        function (d, g, f) {
            arguments[4][60][0].apply(f, arguments)
        }, {
            "./internal/normalizeValue": 222,
            "@marcom/ac-prefixer/getStyleCSS": 210,
            "@marcom/ac-prefixer/getStyleProperty": 211,
            dup: 60
        }
    ],
    224: [
        function (d, g, f) {
            g.exports = 8
        }, {}
    ],
    225: [
        function (d, g, f) {
            g.exports = 11
        }, {}
    ],
    226: [
        function (d, g, f) {
            g.exports = 9
        }, {}
    ],
    227: [
        function (d, g, f) {
            arguments[4][126][0].apply(f, arguments)
        }, {
            dup: 126
        }
    ],
    228: [
        function (d, g, f) {
            g.exports = 3
        }, {}
    ],
    229: [
        function (d, g, f) {
            arguments[4][127][0].apply(f, arguments)
        }, {
            "../isNode": 233,
            dup: 127
        }
    ],
    230: [
        function (F, M, w) {
            var u = F("./isNodeType");
            var A = F("../COMMENT_NODE");
            var D = F("../DOCUMENT_FRAGMENT_NODE");
            var E = F("../ELEMENT_NODE");
            var v = F("../TEXT_NODE");
            var J = [E, v, A, D];
            var B = " must be an Element, TextNode, Comment, or Document Fragment";
            var C = [E, v, A];
            var I = " must be an Element, TextNode, or Comment";
            var x = [E, D];
            var L = " must be an Element, or Document Fragment";
            var z = " must have a parentNode";
            M.exports = {
                parentNode: function G(d, a, b, c) {
                    c = c || "target";
                    if ((d || a) && !u(d, x)) {
                        throw new TypeError(b + ": " + c + L)
                    }
                },
                childNode: function K(d, a, b, c) {
                    c = c || "target";
                    if (!d && !a) {
                        return
                    }
                    if (!u(d, C)) {
                        throw new TypeError(b + ": " + c + I)
                    }
                },
                insertNode: function H(d, a, b, c) {
                    c = c || "node";
                    if (!d && !a) {
                        return
                    }
                    if (!u(d, J)) {
                        throw new TypeError(b + ": " + c + B)
                    }
                },
                hasParentNode: function y(c, a, b) {
                    b = b || "target";
                    if (!c.parentNode) {
                        throw new TypeError(a + ": " + b + z)
                    }
                }
            }
        }, {
            "../COMMENT_NODE": 224,
            "../DOCUMENT_FRAGMENT_NODE": 225,
            "../ELEMENT_NODE": 227,
            "../TEXT_NODE": 228,
            "./isNodeType": 229
        }
    ],
    231: [
        function (m, l, h) {
            var j = m("./internal/isNodeType");
            var i = m("./DOCUMENT_FRAGMENT_NODE");
            l.exports = function k(a) {
                return j(a, i)
            }
        }, {
            "./DOCUMENT_FRAGMENT_NODE": 225,
            "./internal/isNodeType": 229
        }
    ],
    232: [
        function (d, g, f) {
            arguments[4][128][0].apply(f, arguments)
        }, {
            "./ELEMENT_NODE": 227,
            "./internal/isNodeType": 229,
            dup: 128
        }
    ],
    233: [
        function (d, g, f) {
            arguments[4][129][0].apply(f, arguments)
        }, {
            dup: 129
        }
    ],
    234: [
        function (k, j, g) {
            var i = k("./internal/validate");
            j.exports = function h(a) {
                i.childNode(a, true, "remove");
                if (!a.parentNode) {
                    return a
                }
                return a
                    .parentNode
                    .removeChild(a)
            }
        }, {
            "./internal/validate": 230
        }
    ],
    235: [
        function (o, n, i) {
            var l = o("@marcom/ac-dom-nodes/isElement");
            var j = o("./matchesSelector");
            var k = o("./internal/validate");
            n.exports = function m(a, d, f, b) {
                var c = [];
                k.childNode(a, true, "ancestors");
                k.selector(d, false, "ancestors");
                if (f && l(a) && (!d || j(a, d))) {
                    c.push(a)
                }
                b = b || document.body;
                if (a !== b) {
                    while ((a = a.parentNode) && l(a)) {
                        if (!d || j(a, d)) {
                            c.push(a)
                        }
                        if (a === b) {
                            break
                        }
                    }
                }
                return c
            }
        }, {
            "./internal/validate": 237,
            "./matchesSelector": 238,
            "@marcom/ac-dom-nodes/isElement": 232
        }
    ],
    236: [
        function (d, g, f) {
            g.exports = window.Element
                ? function (a) {
                    return a.matches || a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector
                }(Element.prototype)
                : null
        }, {}
    ],
    237: [
        function (F, K, v) {
            F("@marcom/ac-polyfills/Array/prototype.indexOf");
            var z = F("@marcom/ac-dom-nodes/isNode");
            var x = F("@marcom/ac-dom-nodes/COMMENT_NODE");
            var C = F("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");
            var D = F("@marcom/ac-dom-nodes/DOCUMENT_NODE");
            var E = F("@marcom/ac-dom-nodes/ELEMENT_NODE");
            var u = F("@marcom/ac-dom-nodes/TEXT_NODE");
            var t = function t(a, b) {
                if (!z(a)) {
                    return false
                }
                if (typeof b === "number") {
                    return a.nodeType === b
                }
                return b.indexOf(a.nodeType) !== -1
            };
            var w = [E, D, C];
            var J = " must be an Element, Document, or Document Fragment";
            var A = [E, u, x];
            var H = " must be an Element, TextNode, or Comment";
            var B = " must be a string";
            K.exports = {
                parentNode: function G(d, a, b, c) {
                    c = c || "node";
                    if ((d || a) && !t(d, w)) {
                        throw new TypeError(b + ": " + c + J)
                    }
                },
                childNode: function I(d, a, b, c) {
                    c = c || "node";
                    if (!d && !a) {
                        return
                    }
                    if (!t(d, A)) {
                        throw new TypeError(b + ": " + c + H)
                    }
                },
                selector: function y(d, a, b, c) {
                    c = c || "selector";
                    if ((d || a) && typeof d !== "string") {
                        throw new TypeError(b + ": " + c + B)
                    }
                }
            }
        }, {
            "@marcom/ac-dom-nodes/COMMENT_NODE": 224,
            "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 225,
            "@marcom/ac-dom-nodes/DOCUMENT_NODE": 226,
            "@marcom/ac-dom-nodes/ELEMENT_NODE": 227,
            "@marcom/ac-dom-nodes/TEXT_NODE": 228,
            "@marcom/ac-dom-nodes/isNode": 233,
            "@marcom/ac-polyfills/Array/prototype.indexOf": undefined
        }
    ],
    238: [
        function (p, o, q) {
            var n = p("@marcom/ac-dom-nodes/isElement");
            var l = p("./internal/validate");
            var k = p("./internal/nativeMatches");
            var m = p("./shims/matchesSelector");
            o.exports = function j(a, b) {
                l.selector(b, true, "matchesSelector");
                if (!n(a)) {
                    return false
                }
                if (!k) {
                    return m(a, b)
                }
                return k.call(a, b)
            }
        }, {
            "./internal/nativeMatches": 236,
            "./internal/validate": 237,
            "./shims/matchesSelector": 241,
            "@marcom/ac-dom-nodes/isElement": 232
        }
    ],
    239: [
        function (o, n, j) {
            var k = o("./internal/validate");
            var i = o("./shims/querySelector");
            var l = "querySelector" in document;
            n.exports = function m(b, a) {
                a = a || document;
                k.parentNode(a, true, "querySelector", "context");
                k.selector(b, true, "querySelector");
                if (!l) {
                    return i(b, a)
                }
                return a.querySelector(b)
            }
        }, {
            "./internal/validate": 237,
            "./shims/querySelector": 242
        }
    ],
    240: [
        function (i, o, j) {
            i("@marcom/ac-polyfills/Array/prototype.slice");
            var k = i("./internal/validate");
            var l = i("./shims/querySelectorAll");
            var m = "querySelectorAll" in document;
            o.exports = function n(b, a) {
                a = a || document;
                k.parentNode(a, true, "querySelectorAll", "context");
                k.selector(b, true, "querySelectorAll");
                if (!m) {
                    return l(b, a)
                }
                return Array
                    .prototype
                    .slice
                    .call(a.querySelectorAll(b))
            }
        }, {
            "./internal/validate": 237,
            "./shims/querySelectorAll": 243,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined
        }
    ],
    241: [
        function (k, j, g) {
            var i = k("../querySelectorAll");
            j.exports = function h(a, f) {
                var b = a.parentNode || document;
                var d = i(f, b);
                var c;
                for (c = 0; c < d.length; c++) {
                    if (d[c] === a) {
                        return true
                    }
                }
                return false
            }
        }, {
            "../querySelectorAll": 240
        }
    ],
    242: [
        function (g, k, h) {
            var j = g("./querySelectorAll");
            k.exports = function i(b, a) {
                var c = j(b, a);
                return c.length
                    ? c[0]
                    : null
            }
        }, {
            "./querySelectorAll": 243
        }
    ],
    243: [
        function (s, t, q) {
            s("@marcom/ac-polyfills/Array/prototype.indexOf");
            var m = s("@marcom/ac-dom-nodes/isElement");
            var o = s("@marcom/ac-dom-nodes/isDocumentFragment");
            var l = s("@marcom/ac-dom-nodes/remove");
            var r = "_ac_qsa_";
            var n = function n(c, b) {
                var a;
                if (b === document) {
                    return true
                }
                a = c;
                while ((a = a.parentNode) && m(a)) {
                    if (a === b) {
                        return true
                    }
                }
                return false
            };
            var p = function p(a) {
                if ("recalc" in a) {
                    a.recalc(false)
                } else {
                    document.recalc(false)
                }
                window.scrollBy(0, 0)
            };
            t.exports = function u(b, g) {
                var d = document.createElement("style");
                var c = r + (Math.random() + "").slice(-6);
                var a = [];
                var f;
                g = g || document;
                document[c] = [];
                if (o(g)) {
                    g.appendChild(d)
                } else {
                    document
                        .documentElement
                        .firstChild
                        .appendChild(d)
                }
                d.styleSheet.cssText = "*{display:recalc;}" + b + '{ac-qsa:expression(document["' + c + '"] && document["' + c + '"].push(this));}';
                p(g);
                while (document[c].length) {
                    f = document[c].shift();
                    f
                        .style
                        .removeAttribute("ac-qsa");
                    if (a.indexOf(f) === -1 && n(f, g)) {
                        a.push(f)
                    }
                }
                document[c] = null;
                l(d);
                p(g);
                return a
            }
        }, {
            "@marcom/ac-dom-nodes/isDocumentFragment": 231,
            "@marcom/ac-dom-nodes/isElement": 232,
            "@marcom/ac-dom-nodes/remove": 234,
            "@marcom/ac-polyfills/Array/prototype.indexOf": undefined
        }
    ],
    244: [
        function (f, i, g) {
            i.exports = function h(c, a) {
                var b = null;
                return function () {
                    if (b === null) {
                        c.apply(this, arguments);
                        b = setTimeout(function () {
                            b = null
                        }, a)
                    }
                }
            }
        }, {}
    ],
    245: [
        function (d, g, f) {
            arguments[4][71][0].apply(f, arguments)
        }, {
            "./extend": 247,
            "@marcom/ac-polyfills/Array/isArray": undefined,
            dup: 71
        }
    ],
    246: [
        function (d, g, f) {
            arguments[4][72][0].apply(f, arguments)
        }, {
            dup: 72
        }
    ],
    247: [
        function (d, g, f) {
            arguments[4][73][0].apply(f, arguments)
        }, {
            "@marcom/ac-polyfills/Array/prototype.forEach": undefined,
            dup: 73
        }
    ],
    248: [
        function (d, g, f) {
            arguments[4][74][0].apply(f, arguments)
        }, {
            "./ac-page-visibility/PageVisibilityManager": 249,
            dup: 74
        }
    ],
    249: [
        function (d, g, f) {
            arguments[4][75][0].apply(f, arguments)
        }, {
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/create": 246,
            dup: 75
        }
    ],
    250: [
        function (d, g, f) {
            arguments[4][76][0].apply(f, arguments)
        }, {
            dup: 76
        }
    ],
    251: [
        function (d, g, f) {
            arguments[4][77][0].apply(f, arguments)
        }, {
            dup: 77
        }
    ],
    252: [
        function (d, g, f) {
            arguments[4][78][0].apply(f, arguments)
        }, {
            dup: 78
        }
    ],
    253: [
        function (d, g, f) {
            arguments[4][79][0].apply(f, arguments)
        }, {
            dup: 79
        }
    ],
    254: [
        function (d, g, f) {
            arguments[4][80][0].apply(f, arguments)
        }, {
            dup: 80
        }
    ],
    255: [
        function (d, g, f) {
            arguments[4][81][0].apply(f, arguments)
        }, {
            dup: 81
        }
    ],
    256: [
        function (d, g, f) {
            arguments[4][82][0].apply(f, arguments)
        }, {
            dup: 82
        }
    ],
    257: [
        function (d, g, f) {
            arguments[4][83][0].apply(f, arguments)
        }, {
            dup: 83
        }
    ],
    258: [
        function (d, g, f) {
            arguments[4][84][0].apply(f, arguments)
        }, {
            dup: 84
        }
    ],
    259: [
        function (d, g, f) {
            arguments[4][85][0].apply(f, arguments)
        }, {
            dup: 85
        }
    ],
    260: [
        function (d, g, f) {
            arguments[4][86][0].apply(f, arguments)
        }, {
            dup: 86
        }
    ],
    261: [
        function (d, g, f) {
            arguments[4][87][0].apply(f, arguments)
        }, {
            dup: 87
        }
    ],
    262: [
        function (d, g, f) {
            arguments[4][88][0].apply(f, arguments)
        }, {
            dup: 88
        }
    ],
    263: [
        function (d, g, f) {
            arguments[4][89][0].apply(f, arguments)
        }, {
            dup: 89
        }
    ],
    264: [
        function (d, g, f) {
            arguments[4][90][0].apply(f, arguments)
        }, {
            dup: 90
        }
    ],
    265: [
        function (d, g, f) {
            arguments[4][91][0].apply(f, arguments)
        }, {
            dup: 91
        }
    ],
    266: [
        function (d, g, f) {
            arguments[4][92][0].apply(f, arguments)
        }, {
            dup: 92
        }
    ],
    267: [
        function (d, g, f) {
            arguments[4][93][0].apply(f, arguments)
        }, {
            dup: 93
        }
    ],
    268: [
        function (d, g, f) {
            arguments[4][94][0].apply(f, arguments)
        }, {
            dup: 94
        }
    ],
    269: [
        function (d, g, f) {
            arguments[4][95][0].apply(f, arguments)
        }, {
            dup: 95
        }
    ],
    270: [
        function (d, g, f) {
            arguments[4][96][0].apply(f, arguments)
        }, {
            dup: 96
        }
    ],
    271: [
        function (d, g, f) {
            arguments[4][97][0].apply(f, arguments)
        }, {
            dup: 97
        }
    ],
    272: [
        function (d, g, f) {
            arguments[4][98][0].apply(f, arguments)
        }, {
            "./ac-transform/Transform": 273,
            dup: 98
        }
    ],
    273: [
        function (d, g, f) {
            arguments[4][99][0].apply(f, arguments)
        }, {
            "./gl-matrix/mat4": 274,
            "./gl-matrix/vec3": 275,
            "./gl-matrix/vec4": 276,
            dup: 99
        }
    ],
    274: [
        function (d, g, f) {
            arguments[4][100][0].apply(f, arguments)
        }, {
            dup: 100,
            "gl-mat4/clone": 250,
            "gl-mat4/create": 251,
            "gl-mat4/fromRotationTranslation": 252,
            "gl-mat4/identity": 253,
            "gl-mat4/invert": 254,
            "gl-mat4/multiply": 255,
            "gl-mat4/rotate": 256,
            "gl-mat4/rotateX": 257,
            "gl-mat4/rotateY": 258,
            "gl-mat4/rotateZ": 259,
            "gl-mat4/scale": 260,
            "gl-mat4/translate": 261,
            "gl-mat4/transpose": 262
        }
    ],
    275: [
        function (d, g, f) {
            arguments[4][101][0].apply(f, arguments)
        }, {
            dup: 101,
            "gl-vec3/create": 263,
            "gl-vec3/cross": 264,
            "gl-vec3/dot": 265,
            "gl-vec3/fromValues": 266,
            "gl-vec3/length": 267,
            "gl-vec3/normalize": 268
        }
    ],
    276: [
        function (d, g, f) {
            arguments[4][102][0].apply(f, arguments)
        }, {
            dup: 102,
            "gl-vec4/create": 269,
            "gl-vec4/fromValues": 270,
            "gl-vec4/transformMat4": 271
        }
    ],
    277: [
        function (l, k, h) {
            var m = l("@marcom/ac-eclipse").Clip;
            var i = l("@marcom/ac-feature/cssPropertyAvailable");
            k.exports = function j(d, a, b, c, f) {
                if (i("opacity")) {
                    f = f || {};
                    if (c) {
                        f.autoplay = f.autoplay === false
                            ? f.autoplay
                            : true;
                        f.propsFrom = f.propsFrom || {};
                        f.propsFrom.opacity = a;
                        if (f.autoplay) {
                            return m.to(d, c, {
                                opacity: b
                            }, f)
                        }
                        return new m(d, c, {
                            opacity: b
                        }, f)
                    }
                    d.style.opacity = b;
                    if (typeof f.onStart === "function") {
                        f.onStart()
                    }
                    if (typeof f.onComplete === "function") {
                        f.onComplete()
                    }
                } else {
                    d.style.visibility = b
                        ? "visible"
                        : "hidden";
                    if (typeof f.onStart === "function") {
                        f.onStart()
                    }
                    if (typeof f.onComplete === "function") {
                        f.onComplete()
                    }
                }
            }
        }, {
            "@marcom/ac-eclipse": 105,
            "@marcom/ac-feature/cssPropertyAvailable": 160
        }
    ],
    278: [
        function (k, j, m) {
            var l = k("@marcom/ac-eclipse").Clip;
            var h = k("@marcom/ac-feature/cssPropertyAvailable");
            j.exports = function i(c, b, d) {
                var a = 1;
                d = d || {};
                if (h("opacity")) {
                    if (b) {
                        d.autoplay = d.autoplay === false
                            ? d.autoplay
                            : true;
                        if (d.autoplay) {
                            return l.to(c, b, {
                                opacity: a
                            }, d)
                        }
                        return new l(c, b, {
                            opacity: a
                        }, d)
                    }
                    c.style.opacity = a;
                    if (typeof d.onStart === "function") {
                        d.onStart()
                    }
                    if (typeof d.onComplete === "function") {
                        d.onComplete()
                    }
                } else {
                    c.style.visibility = "visible";
                    if (typeof d.onStart === "function") {
                        d.onStart()
                    }
                    if (typeof d.onComplete === "function") {
                        d.onComplete()
                    }
                }
            }
        }, {
            "@marcom/ac-eclipse": 105,
            "@marcom/ac-feature/cssPropertyAvailable": 160
        }
    ],
    279: [
        function (l, k, h) {
            var m = l("@marcom/ac-eclipse").Clip;
            var i = l("@marcom/ac-feature/cssPropertyAvailable");
            k.exports = function j(c, b, d) {
                var a = 0;
                d = d || {};
                if (i("opacity")) {
                    if (b) {
                        d.autoplay = d.autoplay === false
                            ? d.autoplay
                            : true;
                        if (d.autoplay) {
                            return m.to(c, b, {
                                opacity: a
                            }, d)
                        }
                        return new m(c, b, {
                            opacity: a
                        }, d)
                    }
                    c.style.opacity = a;
                    if (typeof d.onStart === "function") {
                        d.onStart()
                    }
                    if (typeof d.onComplete === "function") {
                        d.onComplete()
                    }
                } else {
                    c.style.visibility = "hidden";
                    if (typeof d.onStart === "function") {
                        d.onStart()
                    }
                    if (typeof d.onComplete === "function") {
                        d.onComplete()
                    }
                }
            }
        }, {
            "@marcom/ac-eclipse": 105,
            "@marcom/ac-feature/cssPropertyAvailable": 160
        }
    ],
    280: [
        function (l, k, h) {
            var m = l("@marcom/ac-eclipse").Clip;
            var j = l("@marcom/ac-dom-styles");
            k.exports = function i(c, g, p, b, d) {
                d = d || {};
                d.autoplay = d.autoplay === false
                    ? d.autoplay
                    : true;
                var f = d.onStart || null;
                var q = d.onComplete || null;
                var a;
                a = {
                    transform: {
                        translateX: g + "px",
                        translateY: p + "px"
                    }
                };
                if (b) {
                    d.onStart = function () {
                        c.style.willChange = "transform";
                        if (f !== null) {
                            f.call(this)
                        }
                    };
                    d.onComplete = function () {
                        c.style.willChange = "";
                        if (q !== null) {
                            q.call(this)
                        }
                    };
                    if (d.autoplay) {
                        return m.to(c, b, a, d)
                    }
                    return new m(c, b, a, d)
                }
                j.setStyle(c, a);
                if (typeof d.onStart === "function") {
                    d.onStart()
                }
                if (typeof d.onComplete === "function") {
                    d.onComplete()
                }
            }
        }, {
            "@marcom/ac-dom-styles": 220,
            "@marcom/ac-eclipse": 105
        }
    ],
    281: [
        function (m, l, i) {
            var n = m("@marcom/ac-browser-prefixed");
            var o = m("@marcom/ac-transform").Transform;
            var j = m("./move");
            l.exports = function k(b, f, a, c) {
                var d = new o();
                d.setMatrixValue(getComputedStyle(b)[n.transform]);
                return j(b, f, d.getTranslateY(), a, c)
            }
        }, {
            "./move": 280,
            "@marcom/ac-browser-prefixed": 1,
            "@marcom/ac-transform": 272
        }
    ],
    282: [
        function (j, i, g) {
            var k = j("@marcom/ac-eclipse").Clip;
            i.exports = function h(y, d, u, w, a) {
                a = a || {};
                a.autoplay = a.autoplay === false
                    ? a.autoplay
                    : true;
                var x = y === window;
                var b;
                var f;
                if (x) {
                    b = y.pageXOffset;
                    f = y.pageYOffset
                } else {
                    b = y.scrollLeft;
                    f = y.scrollTop
                }
                var s = {
                    x: b,
                    y: f
                };
                var c = {
                    x: d,
                    y: u
                };
                if (typeof a.onDraw === "function") {
                    var t = a.onDraw
                }
                var v = function v(l) {
                    if (x) {
                        y.scrollTo(s.x, s.y)
                    } else {
                        y.scrollLeft = s.x;
                        y.scrollTop = s.y
                    }
                    if (t) {
                        t.call(this, l)
                    }
                };
                a.onDraw = v;
                if (a.autoplay) {
                    return k.to(s, w, c, a)
                }
                return new k(s, w, c, a)
            }
        }, {
            "@marcom/ac-eclipse": 105
        }
    ],
    283: [
        function (k, j, g) {
            var h = k("./scroll");
            j.exports = function i(b, m, a, c) {
                var d = b === window;
                var f;
                if (d) {
                    f = b.pageYOffset
                } else {
                    f = b.scrollTop
                }
                return h(b, m, f, a, c)
            }
        }, {
            "./scroll": 282
        }
    ],
    284: [
        function (v, w, s) {
            var t = v("@marcom/ac-classlist");
            var o = v("./singletons/analyticsManager");
            var q = v("@marcom/ac-object/create");
            var m = v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var u = v("./Item");
            function p(a) {
                a = a || {};
                this._wrapAround = a.wrapAround || false;
                this._itemType = a.itemType || u;
                this._items = [];
                this._itemsIdLookup = {};
                this.showNext = this
                    .showNext
                    .bind(this);
                this.showPrevious = this
                    .showPrevious
                    .bind(this);
                this._update = this
                    ._update
                    .bind(this);
                this._updateItems = this
                    ._updateItems
                    .bind(this);
                m.call(this);
                if (a.startAt) {
                    this._startAt(a.startAt)
                }
                p._add(this, a.analyticsOptions)
            }
            p.FADE = "fade";
            p.FADE_SELECTOR = "[data-ac-gallery-fade]";
            p.SLIDE = "slide";
            p.SLIDE_SELECTOR = "[data-ac-gallery-slide]";
            p.UPDATE = "update";
            p.UPDATE_COMPLETE = "update:complete";
            var n = m.prototype;
            var r = p.prototype = q(n);
            r.addItem = function (b, a) {
                if (b.nodeType) {
                    b = new this._itemType(b)
                } else {
                    if (this._items.indexOf(b) > -1) {
                        return b
                    }
                }
                if (typeof a === "number") {
                    this
                        ._items
                        .splice(a, 0, b)
                } else {
                    this
                        ._items
                        .push(b)
                }
                if (this._items.length === 1) {
                    b.show();
                    this._setCurrentItem(b)
                } else {
                    b.hide();
                    if (this.getNextItem() === b) {
                        this._setNextItem(b)
                    }
                    if (this.getPreviousItem() === b) {
                        this._setPreviousItem(b)
                    }
                }
                if (b.getElementId() !== null) {
                    this._itemsIdLookup[b.getElementId()] = b
                }
                b.on(u.SELECTED, this._update);
                return b
            };
            r.removeItem = function (b, c) {
                c = c || {};
                if (typeof b === "number") {
                    b = this._items[b]
                }
                var d = this
                    ._items
                    .indexOf(b);
                if (d > -1) {
                    var a = this.getNextItem();
                    var f = this.getPreviousItem();
                    this
                        ._items
                        .splice(d, 1);
                    b.off(u.SELECTED, this._update);
                    if (a === b) {
                        this._setNextItem(this.getNextItem())
                    }
                    if (f === b) {
                        this._setPreviousItem(this.getPreviousItem())
                    }
                }
                if (b === this._currentItem && this._items.length && c.setCurrentItem !== false) {
                    this._update({item: this._items[0]});
                    this._setLastItem(null)
                }
                if (c.destroyItem && b.getElement()) {
                    b.destroy()
                }
                return b
            };
            r.show = function (b, a) {
                if (typeof b === "number") {
                    b = this._items[b]
                } else {
                    if (typeof b === "string") {
                        b = this._itemsIdLookup[b]
                    }
                }
                if (b) {
                    a = a || {};
                    this._update({item: b, interactionEvent: a.interactionEvent})
                }
                return b || null
            };
            r.showNext = function (a) {
                var b = this.getNextItem();
                if (b) {
                    this.show(b, a)
                }
                return b
            };
            r.showPrevious = function (a) {
                var b = this.getPreviousItem();
                if (b) {
                    this.show(b, a)
                }
                return b
            };
            r.isInView = function () {
                return this._currentItem && this
                    ._currentItem
                    .isInView()
            };
            r.getTotalItems = function () {
                return this._items.length
            };
            r.getItems = function () {
                return this._items
            };
            r.getItem = function (a) {
                if (typeof a === "number") {
                    return this.getItemAt(a)
                } else {
                    if (typeof a === "string") {
                        return this.getItemById(a)
                    }
                }
            };
            r.getItemAt = function (a) {
                return this._items[a] || null
            };
            r.getItemById = function (a) {
                return this._itemsIdLookup[a] || null
            };
            r.getItemIndex = function (a) {
                return this
                    ._items
                    .indexOf(a)
            };
            r.getCurrentItem = function () {
                return this._currentItem || null
            };
            r.getLastItem = function () {
                return this._lastItem || null
            };
            r.getNextItem = function () {
                var b;
                var a = this
                    ._items
                    .indexOf(this._currentItem);
                if (a < this._items.length - 1) {
                    b = this._items[a + 1]
                } else {
                    if (this._wrapAround) {
                        b = this._items[0]
                    }
                }
                return b || null
            };
            r.getPreviousItem = function () {
                var b;
                var a = this
                    ._items
                    .indexOf(this._currentItem);
                if (a > 0) {
                    b = this._items[a - 1]
                } else {
                    if (this._wrapAround) {
                        b = this._items[this._items.length - 1]
                    }
                }
                return b || null
            };
            r.getId = function () {
                return this._id
            };
            r.destroy = function (a) {
                a = a || {};
                if (a.destroyItems === undefined) {
                    a.destroyItems = true
                }
                this._setCurrentItem(null);
                if (a.destroyItems) {
                    var b;
                    while (this._items.length) {
                        b = this._items[0];
                        b.off(u.SELECTED, this._update);
                        this.removeItem(b, {
                            destroyItem: true,
                            setCurrentItem: false
                        })
                    }
                }
                this._items = null;
                this._itemsIdLookup = null;
                p._remove(this);
                return n
                    .destroy
                    .call(this)
            };
            r._startAt = function (a) {
                var b = this._items[a];
                if (b && this._currentItem !== b) {
                    this
                        ._currentItem
                        .hide();
                    this._setCurrentItem(b);
                    this
                        ._currentItem
                        .show();
                    this.trigger(p.UPDATE, this._items)
                }
            };
            r._setCurrentItem = function (a) {
                if (this._currentItem && this._currentItem.getElement() && this._currentItem !== a) {
                    t.remove(this._currentItem.getElement(), u.CSS_CURRENT_ITEM);
                    this._setLastItem(this._currentItem)
                }
                this._currentItem = a;
                if (this._currentItem && this._currentItem.getElement()) {
                    t.add(this._currentItem.getElement(), u.CSS_CURRENT_ITEM);
                    this._setNextItem(this.getNextItem());
                    this._setPreviousItem(this.getPreviousItem())
                }
            };
            r._setLastItem = function (a) {
                if (this._lastItem && this._lastItem.getElement() && this._lastItem !== a) {
                    t.remove(this._lastItem.getElement(), u.CSS_LAST_ITEM)
                }
                this._lastItem = a;
                if (this._lastItem && this._lastItem.getElement()) {
                    t.add(this._lastItem.getElement(), u.CSS_LAST_ITEM)
                }
            };
            r._setNextItem = function (a) {
                if (this._nextItem && this._nextItem.getElement() && this._nextItem !== a) {
                    t.remove(this._nextItem.getElement(), u.CSS_NEXT_ITEM)
                }
                this._nextItem = a;
                if (this._nextItem && this._nextItem.getElement()) {
                    t.add(this._nextItem.getElement(), u.CSS_NEXT_ITEM)
                }
            };
            r._setPreviousItem = function (a) {
                if (this._previousItem && this._previousItem.getElement() && this._previousItem !== a) {
                    t.remove(this._previousItem.getElement(), u.CSS_PREVIOUS_ITEM)
                }
                this._previousItem = a;
                if (this._previousItem && this._previousItem.getElement()) {
                    t.add(this._previousItem.getElement(), u.CSS_PREVIOUS_ITEM)
                }
            };
            r._updateItems = function (b, a) {
                if (b.outgoing[0]) {
                    b
                        .outgoing[0]
                        .hide()
                }
                b
                    .incoming[0]
                    .show();
                if (!a) {
                    this.trigger(p.UPDATE_COMPLETE, b)
                }
            };
            r._update = function (a) {
                var b = this._currentItem !== a.item;
                if (b) {
                    this._setCurrentItem(a.item)
                }
                var c = {
                    incoming: [a.item],
                    outgoing: this._lastItem
                        ? [this._lastItem]
                        : [],
                    interactionEvent: a.interactionEvent || null
                };
                if (b) {
                    this.trigger(p.UPDATE, c)
                }
                this._updateItems(c, !b)
            };
            p._instantiate = function () {
                this._galleries = [];
                this._idCounter = 0;
                return this
            };
            p._add = function (b, a) {
                this
                    ._galleries
                    .push(b);
                b._id = ++this._idCounter;
                o.add(b, a)
            };
            p._remove = function (a) {
                var b = this
                    ._galleries
                    .indexOf(a);
                if (b > -1) {
                    this
                        ._galleries
                        .splice(b, 1);
                    o.remove(a)
                }
            };
            p.getAll = function () {
                return Array
                    .prototype
                    .slice
                    .call(this._galleries)
            };
            p.getAllInView = function () {
                var b = [];
                var a = this._galleries.length;
                while (a--) {
                    if (this._galleries[a].isInView()) {
                        b.push(this._galleries[a])
                    }
                }
                return b
            };
            p.destroyAll = function () {
                var a = this._galleries.length;
                while (a--) {
                    this
                        ._galleries[a]
                        .destroy()
                }
                this._galleries = []
            };
            w.exports = p._instantiate()
        }, {
            "./Item": 285,
            "./singletons/analyticsManager": 299,
            "@marcom/ac-classlist": 185,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/create": 246
        }
    ],
    285: [
        function (z, J, t) {
            var I = z("@marcom/ac-classlist");
            var D = z("@marcom/ac-dom-events/addEventListener");
            var B = z("@marcom/ac-dom-events/removeEventListener");
            var A = z("@marcom/ac-dom-events/preventDefault");
            var E = z("@marcom/ac-dom-metrics/isInViewport");
            var K = z("@marcom/ac-dom-metrics/getPercentInViewport");
            var u = z("@marcom/ac-dom-traversal/querySelectorAll");
            var y = z("@marcom/ac-object/create");
            var F = z("./singletons/tabManager");
            var v = z("@marcom/ac-keyboard/keyMap");
            var x = z("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var G = z("@marcom/ac-keyboard");
            var C = "current";
            function H(a, b) {
                this._el = a;
                b = b || {};
                this._triggerKeys = [];
                this._triggerEls = {};
                this._isShown = false;
                this._isACaption = b.isACaption === undefined
                    ? false
                    : b.isACaption;
                this._onKeyboardInteraction = this
                    ._onKeyboardInteraction
                    .bind(this);
                this._onTriggered = this
                    ._onTriggered
                    .bind(this);
                if (!this._isACaption) {
                    this
                        ._el
                        .setAttribute("role", "tabpanel")
                }
                this._focusableEls = u(F.focusableSelectors, a);
                x.call(this)
            }
            H.CSS_CURRENT_ITEM = "ac-gallery-currentitem";
            H.CSS_LAST_ITEM = "ac-gallery-lastitem";
            H.CSS_NEXT_ITEM = "ac-gallery-nextitem";
            H.CSS_PREVIOUS_ITEM = "ac-gallery-previousitem";
            H.SELECTED = "selected";
            H.SHOW = "show";
            H.HIDE = "hide";
            var w = H.prototype = y(x.prototype);
            w.show = function () {
                this._isShown = true;
                this._addCurrentClassToTriggers();
                this._setTabIndexOnFocusableItems(null);
                this
                    ._el
                    .removeAttribute("aria-hidden");
                this.trigger(H.SHOW, this)
            };
            w.hide = function () {
                this._isShown = false;
                this._removeCurrentClassFromTriggers();
                this._setTabIndexOnFocusableItems("-1");
                this
                    ._el
                    .setAttribute("aria-hidden", "true");
                this.trigger(H.HIDE, this)
            };
            w.addElementTrigger = function (b, c) {
                c = c || "click";
                if (this._triggerEls[c] === undefined) {
                    this._triggerEls[c] = []
                }
                var d = this
                    ._triggerEls[c]
                    .indexOf(b);
                if (d < 0) {
                    b.setAttribute("role", "tab");
                    b.setAttribute("tabindex", "0");
                    var a = this.getElementId();
                    if (a) {
                        b.setAttribute("aria-controls", a)
                    }
                    a = b.getAttribute("id");
                    if (a && this._el.getAttribute("aria-labelledby") === null) {
                        this
                            ._el
                            .setAttribute("aria-labelledby", a)
                    }
                    D(b, c, this._onTriggered);
                    this
                        ._triggerEls[c]
                        .push(b);
                    if (this._isShown) {
                        b.setAttribute("aria-selected", "true");
                        I.add(b, C)
                    } else {
                        b.setAttribute("aria-selected", "false")
                    }
                }
            };
            w.removeElementTrigger = function (a, b) {
                b = b || "click";
                if (this._triggerEls[b] === undefined) {
                    return
                }
                var c = this
                    ._triggerEls[b]
                    .indexOf(a);
                if (c > -1) {
                    this._cleanElementTrigger(a, b)
                }
                if (this._triggerEls[b].length === 0) {
                    this._triggerEls[b] = undefined
                }
            };
            w.addKeyTrigger = function (a) {
                if (typeof a === "string") {
                    a = v[a.toUpperCase()]
                }
                if (typeof a === "number") {
                    var b = this
                        ._triggerKeys
                        .indexOf(a);
                    if (b < 0) {
                        G.onDown(a, this._onKeyboardInteraction);
                        this
                            ._triggerKeys
                            .push(a)
                    }
                }
            };
            w.removeKeyTrigger = function (a) {
                if (typeof a === "string") {
                    a = v[a.toUpperCase()]
                }
                if (typeof a === "number") {
                    var b = this
                        ._triggerKeys
                        .indexOf(a);
                    if (b > -1) {
                        G.offDown(a, this._onKeyboardInteraction);
                        this
                            ._triggerKeys
                            .splice(b, 1)
                    }
                }
            };
            w.removeAllTriggers = function () {
                var c;
                var d = this._triggerKeys.length;
                while (d--) {
                    c = this._triggerKeys[d];
                    G.offDown(c, this._onKeyboardInteraction)
                }
                this._triggerKeys = [];
                var a;
                var b;
                for (b in this._triggerEls) {
                    d = this._triggerEls[b].length;
                    while (d--) {
                        a = this._triggerEls[b][d];
                        this._cleanElementTrigger(a, b)
                    }
                }
                this._triggerEls = {}
            };
            w.isInView = function () {
                if (this._el) {
                    return E(this._el)
                }
                return false
            };
            w.percentageInView = function () {
                if (this._el) {
                    return K(this._el)
                }
                return 0
            };
            w.getElement = function () {
                return this._el
            };
            w.getElementId = function () {
                if (this._elId !== undefined) {
                    return this._elId
                }
                this._elId = this
                    ._el
                    .getAttribute("id") || null;
                return this._elId
            };
            w.destroy = function () {
                if (this._isShown) {
                    this._isShown = null;
                    I.remove(this._el, H.CSS_CURRENT_ITEM, H.CSS_LAST_ITEM, H.CSS_NEXT_ITEM, H.CSS_PREVIOUS_ITEM);
                    this._removeCurrentClassFromTriggers()
                }
                this.removeAllTriggers();
                this._setTabIndexOnFocusableItems(null);
                this
                    ._el
                    .removeAttribute("aria-hidden");
                this
                    ._el
                    .removeAttribute("role");
                this
                    ._el
                    .removeAttribute("aria-labelledby");
                this._isACaption = null;
                this._triggerKeys = null;
                this._triggerEls = null;
                this._el = null
            };
            w._addCurrentClassToTriggers = function () {
                var a;
                var b;
                var c;
                for (b in this._triggerEls) {
                    c = this._triggerEls[b].length;
                    while (c--) {
                        a = this._triggerEls[b][c];
                        a.setAttribute("aria-selected", "true");
                        I.add(a, C)
                    }
                }
            };
            w._removeCurrentClassFromTriggers = function () {
                var a;
                var b;
                var c;
                for (b in this._triggerEls) {
                    c = this._triggerEls[b].length;
                    while (c--) {
                        a = this._triggerEls[b][c];
                        a.setAttribute("aria-selected", "false");
                        I.remove(a, C)
                    }
                }
            };
            w._cleanElementTrigger = function (a, b) {
                a.removeAttribute("aria-selected");
                a.removeAttribute("role");
                a.removeAttribute("tabindex");
                a.removeAttribute("aria-controls");
                B(a, b, this._onTriggered);
                if (this._isShown) {
                    I.remove(a, C)
                }
            };
            w._onKeyboardInteraction = function (a) {
                if (this.isInView()) {
                    this._onTriggered(a)
                }
            };
            w._setTabIndexOnFocusableItems = function (c) {
                var d = c === null;
                var a = [];
                this._currentTabbableEls = this._currentTabbableEls || F.getTabbable(this._focusableEls);
                if (!d) {
                    a = F.getTabbable(this._focusableEls);
                    this._currentTabbableEls = a
                }
                var b = this._currentTabbableEls.length;
                while (b--) {
                    if (d) {
                        this
                            ._currentTabbableEls[b]
                            .removeAttribute("tabindex")
                    } else {
                        this
                            ._currentTabbableEls[b]
                            .setAttribute("tabindex", c)
                    }
                }
            };
            w._onTriggered = function (a) {
                A(a);
                this.trigger(H.SELECTED, {
                    item: this,
                    interactionEvent: a
                })
            };
            J.exports = H
        }, {
            "./singletons/tabManager": 300,
            "@marcom/ac-classlist": 185,
            "@marcom/ac-dom-events/addEventListener": 188,
            "@marcom/ac-dom-events/preventDefault": 194,
            "@marcom/ac-dom-events/removeEventListener": 195,
            "@marcom/ac-dom-metrics/getPercentInViewport": 202,
            "@marcom/ac-dom-metrics/isInViewport": 208,
            "@marcom/ac-dom-traversal/querySelectorAll": 240,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-keyboard": 310,
            "@marcom/ac-keyboard/keyMap": 312,
            "@marcom/ac-object/create": 246
        }
    ],
    286: [
        function (t, w, r) {
            var q = t("./helpers/extendProto");
            var o = t("./Gallery");
            var v = t("./auto/AutoGallery");
            var p = t("./fade/FadeGallery");
            var m = t("./fade/FadeItem");
            var u = t("./slide/SlideGallery");
            var n = t("./slide/SlideItem");
            var s = t("./Item");
            o.create = t("./factories/create");
            o.autoCreate = t("./factories/autoCreate");
            o.extend = q;
            v.extend = q;
            p.extend = q;
            m.extend = q;
            u.extend = q;
            n.extend = q;
            s.extend = q;
            w.exports = {
                Gallery: o,
                AutoGallery: v,
                FadeGallery: p,
                FadeGalleryItem: m,
                SlideGallery: u,
                SlideGalleryItem: n,
                Item: s,
                ToggleNav: t("./navigation/ToggleNav")
            }
        }, {
            "./Gallery": 284,
            "./Item": 285,
            "./auto/AutoGallery": 288,
            "./factories/autoCreate": 289,
            "./factories/create": 290,
            "./fade/FadeGallery": 291,
            "./fade/FadeItem": 292,
            "./helpers/extendProto": 293,
            "./navigation/ToggleNav": 298,
            "./slide/SlideGallery": 301,
            "./slide/SlideItem": 302
        }
    ],
    287: [
        function (j, p, k) {
            var l;
            try {
                l = j("ac-analytics").observer.Gallery
            } catch (m) {}
            var n = "data-analytics-gallery-id";
            function q() {
                this._observers = {}
            }
            var o = q.prototype;
            o.add = function (d, b) {
                var a = d.getId();
                if (!l || this._observers[a]) {
                    return
                }
                b = b || {};
                if (!b.galleryName) {
                    b.galleryName = this._getAnalyticsId(d, b.dataAttribute) || a
                }
                if (!b.beforeUpdateEvent) {
                    b.beforeUpdateEvent = "update"
                }
                if (!b.afterUpdateEvent) {
                    b.afterUpdateEvent = "update:complete"
                }
                var c = new l(d, b);
                if (c.gallery) {
                    this._observers[a] = c
                }
            };
            o.remove = function (b) {
                var a = b.getId();
                if (!l || !this._observers[a]) {
                    return
                }
                if (typeof this._observers[a].destroy === "function") {
                    this
                        ._observers[a]
                        .destroy()
                }
                this._observers[a] = null
            };
            o._getAnalyticsId = function (c, b) {
                if (typeof c.getElement === "function") {
                    b = b || n;
                    var a = c.getElement();
                    return a.getAttribute(b) || a.getAttribute("id")
                }
                return null
            };
            p.exports = q
        }, {
            "ac-analytics": undefined
        }
    ],
    288: [
        function (ae, ar, N) {
            ae("@marcom/ac-polyfills/requestAnimationFrame");
            var aq = ae("@marcom/ac-classlist");
            var aj = ae("@marcom/ac-dom-events/addEventListener");
            var ag = ae("@marcom/ac-dom-events/removeEventListener");
            var af = ae("@marcom/ac-dom-events/preventDefault");
            var Q = ae("@marcom/ac-dom-styles");
            var an = ae("@marcom/ac-dom-traversal/querySelector");
            var U = ae("@marcom/ac-dom-traversal/querySelectorAll");
            var aa = ae("@marcom/ac-object/create");
            var S = ae("@marcom/ac-dom-metrics/getContentDimensions");
            var O = ae("@marcom/ac-keyboard/keyMap");
            var W = ae("./../helpers/selectElementFromDataAttributeValue");
            var ac = ae("./../helpers/selectElementThatHasDataAttribute");
            var ah = ae("./../helpers/inputHasFocus");
            var ak = ae("@marcom/ac-function/throttle");
            var ai = ae("@marcom/ac-feature/touchAvailable");
            var V = ae("./../Gallery");
            var ap = ae("@marcom/ac-keyboard");
            var K = ae("@marcom/ac-page-visibility").PageVisibilityManager;
            var al = ae("@marcom/ac-pointer-tracker").PointerTracker;
            var R = ae("./../navigation/ToggleNav");
            var ab = "disabled";
            var ad = 3;
            var ao = 0.5;
            var M = "[data-ac-gallery-item]";
            var Y = 0.12;
            var Z = ae("../templates/paddlenav.js");
            var P = "No element supplied.";
            var L = 'Container element needed when autoPlay is on. Use the "container" option when yo' +
                    'u instantiate your gallery.';
            var am = 'Captions datatag needed when enableCaptions is on. Use the "data-related-gallery' +
                    '" tag (with an ID of the related captions container) on your gallery container t' +
                    'o automatically use captions.';
            function X(d, g) {
                g = g || {};
                if (!d || d.nodeType === undefined) {
                    throw new Error(P)
                }
                this._el = d;
                V.call(this, g);
                this._itemHeights = [];
                this._itemHeightsLookup = {};
                this._toggleNavDuration = g.toggleNavDuration;
                this._isRightToLeft = g.rightToLeft === undefined
                    ? Q
                        .getStyle(d, "direction")
                        .direction === "rtl"
                    : g.rightToLeft;
                this._keyboardThrottleDelay = (g.keyboardThrottleDelay === undefined
                    ? Y
                    : g.keyboardThrottleDelay) * 1000;
                this._resizeContainer = !!g.resizeContainer;
                this._setUpContainerAutoResize(g.resizeContainerOnUpdate);
                this._createToggleNav();
                this._addPaddleNav(g.addPaddleNav);
                this._isACaptionsGallery = d.getAttribute("data-ac-gallery-captions") === "";
                this._addItems(g.itemSelector || M);
                if (!this._wrapAround) {
                    this._updatePaddleNavState()
                }
                if (g.enableArrowKeys !== false) {
                    this._enableArrowKeys = true;
                    this._addKeyboardListener()
                }
                if (g.updateOnWindowResize !== false) {
                    this._onWindowResize = this
                        ._onWindowResize
                        .bind(this);
                    aj(window, "resize", this._onWindowResize)
                }
                this._componentsContainer = document.getElementById(g.container);
                if (g.startAt) {
                    this._startAt(g.startAt)
                }
                this.stopAutoPlay = this
                    .stopAutoPlay
                    .bind(this);
                if (g.autoPlay) {
                    if (!this._componentsContainer) {
                        throw new Error(L)
                    }
                    var a = typeof g.autoPlay === "number"
                        ? g.autoPlay
                        : ad;
                    this.startAutoPlay(a)
                }
                if (g.deeplink !== false) {
                    var c = this._getDeeplinkedItem();
                    if (c && c !== this._currentItem) {
                        this.show(c)
                    }
                }
                if (this._containerResizeDuration !== false) {
                    var b = this._itemHeightsLookup[
                        this
                            ._currentItem
                            .getElementId()
                    ];
                    if (b) {
                        this._setElHeight(b)
                    }
                }
                if (this._toggleNav) {
                    this
                        ._toggleNav
                        .start()
                }
                this._setUpSwiping(g.touch && ai(), g.desktopSwipe);
                if (this._componentsContainer) {
                    this
                        ._componentsContainer
                        .setAttribute("tabIndex", -1)
                }
                var f = d.getAttribute("data-related-gallery");
                if (f) {
                    this._captionsContainer = document.querySelector(f)
                }
                if (g.enableCaptions) {
                    if (!this._captionsContainer) {
                        throw new Error(am)
                    }
                    this._captionsOptions = g.captionsOptions
                        ? g.captionsOptions
                        : false;
                    this.enableCaptions()
                }
            }
            X.RESIZED = "resized";
            X.UPDATE = V.UPDATE;
            X.UPDATE_COMPLETE = V.UPDATE_COMPLETE;
            var at = V.prototype;
            var T = X.prototype = aa(at);
            T.addItem = function (c, b) {
                if (c.nodeType) {
                    var a = this._isACaptionsGallery;
                    c = new this._itemType(c, {isACaption: a})
                } else {
                    if (this._items.indexOf(c) > -1) {
                        return c
                    }
                }
                if (this._resizeContainer) {
                    this._storeItemHeight(c, this._containerResizeDuration === false)
                }
                this._addItemTriggers(c);
                return at
                    .addItem
                    .call(this, c, b)
            };
            T.removeItem = function (c, a) {
                if (this._resizeContainer) {
                    var b = this._itemHeights.length;
                    while (b--) {
                        if (this._itemHeights[b].item === c) {
                            this
                                ._itemHeights
                                .splice(b, 1);
                            if (b === 0 && this._itemHeights.length) {
                                this._setElHeight(this._itemHeights[0].height)
                            }
                        }
                    }
                }
                return at
                    .removeItem
                    .call(this, c, a)
            };
            T.startAutoPlay = function (a, b) {
                b = b || {};
                this._isAutoPlaying = true;
                this._autoPlayDelay = (a || ad) * 1000;
                this._cancelAutoPlayOnInteraction = b.cancelOnInteraction === undefined
                    ? true
                    : b.cancelOnInteraction;
                setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay);
                if (this._cancelAutoPlayOnInteraction) {
                    this.on(V.UPDATE, this.stopAutoPlay)
                }
                if (this._componentsContainer) {
                    aj(this._componentsContainer, "focus", this.stopAutoPlay, true);
                    aj(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                    aj(this._componentsContainer, "click", this.stopAutoPlay, true)
                } else {
                    throw new Error(L)
                }
            };
            T.stopAutoPlay = function () {
                this._isAutoPlaying = false;
                if (this._cancelAutoPlayOnInteraction) {
                    this.off(V.UPDATE, this.stopAutoPlay)
                }
                if (this._componentsContainer) {
                    ag(this._componentsContainer, "focus", this.stopAutoPlay, true);
                    ag(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                    ag(this._componentsContainer, "click", this.stopAutoPlay, true)
                }
            };
            T.getElement = function () {
                return this._el
            };
            T.getToggleNav = function () {
                return this._toggleNav || null
            };
            T.resize = function (a, b) {
                if (this._resizeContainer) {
                    this._itemHeights = [];
                    var c = this._items.length;
                    while (c--) {
                        this._storeItemHeight(this._items[c], false)
                    }
                    if (this._containerResizeDuration !== false) {
                        this._setElHeight(this._itemHeightsLookup[
                            this
                                ._currentItem
                                .getElementId()
                        ])
                    } else {
                        this._setElHeight(this._itemHeights[0].height)
                    }
                }
                if (this._toggleNav) {
                    this
                        ._toggleNav
                        .resize()
                }
                this.trigger(X.RESIZED, this)
            };
            T.enableKeyboard = function () {
                if (!this._enableArrowKeys) {
                    this._enableArrowKeys = true;
                    this._addKeyboardListener()
                }
            };
            T.disableKeyboard = function () {
                if (this._enableArrowKeys) {
                    this._enableArrowKeys = false;
                    ap.offDown(O.ARROW_RIGHT, this._rightArrowFunc);
                    ap.offDown(O.ARROW_LEFT, this._leftArrowFunc)
                }
            };
            T.enableTouch = function () {
                if (!this._touchSwipe) {
                    this._setUpSwiping(true, false)
                }
            };
            T.disableTouch = function () {
                if (this._touchSwipe) {
                    this
                        ._touchSwipe
                        .off(al.END, this._onSwipeEnd);
                    this
                        ._touchSwipe
                        .destroy();
                    this._touchSwipe = null
                }
            };
            T.enableDesktopSwipe = function () {
                if (!this._clickSwipe) {
                    this._setUpSwiping(false, true)
                }
            };
            T.disableDesktopSwipe = function () {
                if (this._clickSwipe) {
                    this
                        ._clickSwipe
                        .off(al.END, this._onSwipeEnd);
                    this
                        ._clickSwipe
                        .destroy();
                    this._clickSwipe = null
                }
            };
            T.enableCaptions = function () {
                if (!this._galleryWithCaptions) {
                    this._initCaptionsGallery(this._captionsContainer, this._captionsOptions)
                }
            };
            T.disableCaptions = function () {
                if (this._galleryWithCaptions) {
                    this
                        ._galleryWithCaptions
                        .destroy()
                }
            };
            T.destroy = function (a) {
                if (this._isAutoPlaying) {
                    this.stopAutoPlay()
                }
                if (this._componentsContainer) {
                    ag(this._componentsContainer, "focus", this.stopAutoPlay, true);
                    ag(this._componentsContainer, "touchend", this.stopAutoPlay, true);
                    ag(this._componentsContainer, "click", this.stopAutoPlay, true)
                }
                if (this._resizeContainer) {
                    Q.setStyle(this._el, {
                        height: null,
                        transition: null
                    })
                }
                if (this._enableArrowKeys) {
                    ap.offDown(O.ARROW_RIGHT, this._rightArrowFunc);
                    ap.offDown(O.ARROW_LEFT, this._leftArrowFunc)
                }
                var b;
                if (this._previousButtons) {
                    b = this._previousButtons.length;
                    while (b--) {
                        ag(this._previousButtons[b], "click", this._onPaddlePrevious)
                    }
                    this._setPaddleDisabledState(this._previousButtons, false)
                }
                if (this._nextButtons) {
                    b = this._nextButtons.length;
                    while (b--) {
                        ag(this._nextButtons[b], "click", this._onPaddleNext)
                    }
                    this._setPaddleDisabledState(this._nextButtons, false)
                }
                if (this._dynamicPaddleNav) {
                    this
                        ._el
                        .removeChild(this._dynamicPaddleNav)
                }
                if (this._hasPaddleNavStateHandler) {
                    this.off(V.UPDATE, this._updatePaddleNavState)
                }
                this.disableTouch();
                this.disableDesktopSwipe();
                this.disableCaptions();
                if (this._toggleNav) {
                    this
                        ._toggleNav
                        .destroy();
                    this._toggleNav = null
                }
                ag(window, "resize", this._onWindowResize);
                this._el = null;
                this._itemHeights = null;
                this._itemHeightsLookup = null;
                this._resizeContainer = null;
                this._isRightToLeft = null;
                this._enableArrowKeys = null;
                this._previousButtons = null;
                this._onPaddlePrevious = null;
                this._nextButtons = null;
                this._onPaddleNext = null;
                this._isACaptionsGallery = null;
                this._componentsContainer = null;
                this._galleryWithCaptions = null;
                this._captionsContainer = null;
                this._captionsOptions = null;
                return at
                    .destroy
                    .call(this, a)
            };
            T._getDeeplinkedItem = function () {
                var c = window
                    .location
                    .hash
                    .substr(1);
                var a;
                var b = this._items.length;
                while (b--) {
                    a = this._items[b];
                    if (c === a.getElementId()) {
                        return a
                    }
                }
                return null
            };
            T._addItems = function (a) {
                var c;
                var b;
                var f = /(^\[).*(\]$)/.test(a);
                if (f) {
                    a = a.replace(/\[|\]/g, "");
                    b = ac(a, this._el)
                } else {
                    b = U(a, this._el)
                }
                var h = 0;
                var d = b.length;
                var g = this._isACaptionsGallery;
                for (h; h < d; h++) {
                    c = new this._itemType(b[h], {isACaption: g});
                    this.addItem(c);
                    this._addItemTriggers(c)
                }
            };
            T._createToggleNav = function () {
                var c = this._getElementId();
                var b = '[data-ac-gallery-togglenav="' + c + '"], [data-ac-gallery-tabnav="' + c + '"]';
                var a = an(b);
                if (a) {
                    this._toggleNav = new R(a, this, {duration: this._toggleNavDuration})
                }
            };
            T._addItemTriggers = function (c, b) {
                var f = W("data-ac-gallery-trigger", c.getElementId());
                if (b && b.length) {
                    f = f.concat(b)
                }
                var a = 0;
                var d = f.length;
                for (a; a < d; a++) {
                    c.addElementTrigger(f[a]);
                    if (this._toggleNav) {
                        this
                            ._toggleNav
                            .addTrigger(f[a], c)
                    }
                }
            };
            T._addPaddleNav = function (f) {
                var h;
                var c = this._getElementId();
                if (f) {
                    var g = typeof f === "string"
                        ? f
                        : Z;
                    g = g.replace(/%ID%/g, this._getElementId());
                    this._dynamicPaddleNav = document.createElement("div");
                    this._dynamicPaddleNav.innerHTML = g;
                    this
                        ._el
                        .insertBefore(this._dynamicPaddleNav, this._el.firstChild)
                }
                this._previousButtons = W("data-ac-gallery-previous-trigger", c);
                this._nextButtons = W("data-ac-gallery-next-trigger", c);
                var b = this
                    ._el
                    .getAttribute("aria-label") || "";
                if (b.length) {
                    b = "(" + b + ")"
                }
                this._onPaddlePrevious = this
                    ._onPaddleInteraction
                    .bind(null, this.showPrevious);
                h = this._previousButtons.length;
                if (h) {
                    var d = this
                        ._el
                        .getAttribute("data-ac-gallery-previouslabel");
                    if (d && b.length) {
                        if (this._isRightToLeft) {
                            d = b + " " + d
                        } else {
                            d += " " + b
                        }
                    }
                    while (h--) {
                        if (d && this._previousButtons[h].getAttribute("aria-label") === null) {
                            this
                                ._previousButtons[h]
                                .setAttribute("aria-label", d)
                        }
                        aj(this._previousButtons[h], "click", this._onPaddlePrevious)
                    }
                }
                this._onPaddleNext = this
                    ._onPaddleInteraction
                    .bind(null, this.showNext);
                h = this._nextButtons.length;
                if (h) {
                    var a = this
                        ._el
                        .getAttribute("data-ac-gallery-nextlabel");
                    if (a && b.length) {
                        if (this._isRightToLeft) {
                            a = b + " " + a
                        } else {
                            a += " " + b
                        }
                    }
                    while (h--) {
                        if (a && this._nextButtons[h].getAttribute("aria-label") === null) {
                            this
                                ._nextButtons[h]
                                .setAttribute("aria-label", a)
                        }
                        aj(this._nextButtons[h], "click", this._onPaddleNext)
                    }
                }
                if (this._nextButtons.length || this._previousButtons.length) {
                    this._hasPaddleNavStateHandler = true;
                    this._updatePaddleNavState = this
                        ._updatePaddleNavState
                        .bind(this);
                    this.on(V.UPDATE, this._updatePaddleNavState)
                }
            };
            T._onPaddleInteraction = function (a, b) {
                af(b);
                a.call(null, {interactionEvent: b})
            };
            T._updatePaddleNavState = function () {
                if (!this._wrapAround) {
                    var a = this
                        ._items
                        .indexOf(this._currentItem);
                    if (a === 0 && this._previousButtons.length) {
                        this._setPaddleDisabledState(this._previousButtons, true);
                        this._setPaddleDisabledState(this._nextButtons, false)
                    } else {
                        if (a === this._items.length - 1 && this._nextButtons.length) {
                            this._setPaddleDisabledState(this._nextButtons, true);
                            this._setPaddleDisabledState(this._previousButtons, false)
                        } else {
                            this._setPaddleDisabledState(this._previousButtons, false);
                            this._setPaddleDisabledState(this._nextButtons, false)
                        }
                    }
                } else {
                    this._setPaddleDisabledState(this._previousButtons, false);
                    this._setPaddleDisabledState(this._nextButtons, false)
                }
            };
            T._setPaddleDisabledState = function (c, b) {
                var a = c.length;
                while (a--) {
                    c[a].disabled = b;
                    if (b) {
                        aq.add(c[a], ab)
                    } else {
                        aq.remove(c[a], ab)
                    }
                }
            };
            T._addKeyboardListener = function () {
                if (this._enableArrowKeys) {
                    this._onKeyboardInteraction = this
                        ._onKeyboardInteraction
                        .bind(this);
                    var b;
                    var a;
                    if (this._isRightToLeft) {
                        b = this.showPrevious;
                        a = this.showNext
                    } else {
                        b = this.showNext;
                        a = this.showPrevious
                    }
                    this._rightArrowFunc = ak(this._onKeyboardInteraction.bind(null, b), this._keyboardThrottleDelay);
                    this._leftArrowFunc = ak(this._onKeyboardInteraction.bind(null, a), this._keyboardThrottleDelay);
                    ap.onDown(O.ARROW_RIGHT, this._rightArrowFunc);
                    ap.onDown(O.ARROW_LEFT, this._leftArrowFunc)
                }
            };
            T._onKeyboardInteraction = function (c, a) {
                if (this.isInView() && !ah()) {
                    var b = V.getAllInView();
                    if (b.length > 1) {
                        b
                            .sort(function (d, f) {
                                d = d._enableArrowKeys
                                    ? d
                                        .getCurrentItem()
                                        .percentageInView()
                                    : 0;
                                f = f._enableArrowKeys
                                    ? f
                                        .getCurrentItem()
                                        .percentageInView()
                                    : 0;
                                return f - d
                            });
                        if (this !== b[0]) {
                            return
                        }
                    }
                    c.call(null, {interactionEvent: a})
                }
            };
            T._setUpSwiping = function (a, b) {
                this._onSwipeEnd = this
                    ._onSwipeEnd
                    .bind(this);
                if (a) {
                    this._touchSwipe = new al(this._el, al.TOUCH_EVENTS);
                    this
                        ._touchSwipe
                        .on(al.END, this._onSwipeEnd)
                }
                if (b) {
                    this._clickSwipe = new al(this._el, al.MOUSE_EVENTS);
                    this
                        ._clickSwipe
                        .on(al.END, this._onSwipeEnd)
                }
            };
            T._onSwipeEnd = function (a) {
                var c;
                var b = a.interactionEvent;
                var f = b.type !== "touchend" || b.type !== "touchstart" || b.type !== "touchmove";
                if (f) {
                    var d = {
                        type: "touchmove",
                        target: b.target,
                        srcElement: b.srcElement
                    }
                }
                var g = {
                    interactionEvent: d || b
                };
                if (a.swipe === al.SWIPE_RIGHT) {
                    c = this._isRightToLeft
                        ? this.showNext
                        : this.showPrevious
                } else {
                    if (a.swipe === al.SWIPE_LEFT) {
                        c = this._isRightToLeft
                            ? this.showPrevious
                            : this.showNext
                    }
                }
                if (c) {
                    return c.call(this, g)
                }
                b = null;
                return null
            };
            T._getElementId = function () {
                if (this._elementId === undefined) {
                    this._elementId = this
                        ._el
                        .getAttribute("id")
                }
                return this._elementId
            };
            T._setUpContainerAutoResize = function (a) {
                if (typeof a === "number") {
                    this._containerResizeDuration = a
                } else {
                    if (a) {
                        this._containerResizeDuration = ao
                    } else {
                        this._containerResizeDuration = false
                    }
                }
                if (this._containerResizeDuration !== false) {
                    this._resizeContainer = true;
                    this._updateContainerSize = this
                        ._updateContainerSize
                        .bind(this);
                    this.on(V.UPDATE, this._updateContainerSize)
                }
            };
            T._updateContainerSize = function (a) {
                var b = this._itemHeightsLookup[
                    a
                        .incoming[0]
                        .getElementId()
                ];
                if (b) {
                    this._setElHeight(b, this._containerResizeDuration)
                }
            };
            T._storeItemHeight = function (a, c) {
                var b = S(a.getElement());
                this
                    ._itemHeights
                    .push({item: a, height: b.height});
                this._itemHeightsLookup[a.getElementId()] = b.height;
                this
                    ._itemHeights
                    .sort(function (d, f) {
                        return f.height - d.height
                    });
                if (c && this._itemHeights[0].item === a) {
                    this._setElHeight(b.height)
                }
            };
            T._setElHeight = function (b, c) {
                var a = {
                    height: b + "px"
                };
                if (c) {
                    a.transition = "height " + c + "s"
                } else {
                    a.transition = null
                }
                Q.setStyle(this._el, a)
            };
            T._initCaptionsGallery = function (b, a) {
                if (!b) {
                    return
                }
                this._galleryWithCaptions = V.create(b, "fade", a
                    ? a
                    : {
                        crossFade: true
                    });
                if (this._enableArrowKeys) {
                    this._galleryWithCaptions._enableArrowKeys = false
                }
                this
                    .on(V.UPDATE, function (d) {
                        var c = this.getItemIndex(d.incoming[0]);
                        this
                            ._galleryWithCaptions
                            .show(c)
                    }.bind(this))
            };
            T._onAutoPlayToNextItem = function () {
                if (this._isAutoPlaying) {
                    if (!K.isHidden && this._currentItem.isInView()) {
                        if (this._cancelAutoPlayOnInteraction) {
                            this.off(V.UPDATE, this.stopAutoPlay)
                        }
                        var a = this.showNext();
                        if (a !== null) {
                            if (this._cancelAutoPlayOnInteraction) {
                                this.on(V.UPDATE, this.stopAutoPlay)
                            }
                            setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
                        }
                    } else {
                        setTimeout(this._onAutoPlayToNextItem.bind(this), this._autoPlayDelay)
                    }
                }
            };
            T._onWindowResize = function (a) {
                window
                    .requestAnimationFrame(function () {
                        if (this._el) {
                            this.resize()
                        }
                    }.bind(this))
            };
            ar.exports = X
        }, {
            "../templates/paddlenav.js": 304,
            "./../Gallery": 284,
            "./../helpers/inputHasFocus": 295,
            "./../helpers/selectElementFromDataAttributeValue": 296,
            "./../helpers/selectElementThatHasDataAttribute": 297,
            "./../navigation/ToggleNav": 298,
            "@marcom/ac-classlist": 185,
            "@marcom/ac-dom-events/addEventListener": 188,
            "@marcom/ac-dom-events/preventDefault": 194,
            "@marcom/ac-dom-events/removeEventListener": 195,
            "@marcom/ac-dom-metrics/getContentDimensions": 199,
            "@marcom/ac-dom-styles": 220,
            "@marcom/ac-dom-traversal/querySelector": 239,
            "@marcom/ac-dom-traversal/querySelectorAll": 240,
            "@marcom/ac-feature/touchAvailable": 176,
            "@marcom/ac-function/throttle": 244,
            "@marcom/ac-keyboard": 310,
            "@marcom/ac-keyboard/keyMap": 312,
            "@marcom/ac-object/create": 246,
            "@marcom/ac-page-visibility": 248,
            "@marcom/ac-pointer-tracker": 349,
            "@marcom/ac-polyfills/requestAnimationFrame": undefined
        }
    ],
    289: [
        function (q, r, p) {
            var m = q("./create");
            var k = q("./../helpers/selectElementThatHasDataAttribute");
            var l = q("./../Gallery");
            var s = l
                .FADE_SELECTOR
                .replace(/\[|\]/g, "");
            var n = l
                .SLIDE_SELECTOR
                .replace(/\[|\]/g, "");
            r.exports = function o(b) {
                b = b || {};
                var a = b.context || document.body;
                var d;
                var c;
                d = k(n, a);
                c = d.length;
                while (c--) {
                    m(d[c], l.SLIDE, b)
                }
                d = k(s, a);
                c = d.length;
                while (c--) {
                    m(d[c], l.FADE, b)
                }
                return l.getAll()
            }
        }, {
            "./../Gallery": 284,
            "./../helpers/selectElementThatHasDataAttribute": 297,
            "./create": 290
        }
    ],
    290: [
        function (r, t, q) {
            var n = r("./../fade/FadeGallery");
            var l = r("./../Gallery");
            var s = r("./../slide/SlideGallery");
            var m = "%TYPE% is not a supported gallery type and el has no gallery data attribute.";
            var u = l
                .FADE_SELECTOR
                .replace(/\[|\]/g, "");
            var o = l
                .SLIDE_SELECTOR
                .replace(/\[|\]/g, "");
            t.exports = function p(c, d, a) {
                var b;
                if (typeof d === "string") {
                    if (d === l.SLIDE) {
                        b = s
                    } else {
                        if (d === l.FADE) {
                            b = n
                        }
                    }
                }
                if (b === undefined) {
                    if (c.getAttribute(o) !== null) {
                        b = s
                    } else {
                        if (c.getAttribute(u) !== null) {
                            b = n
                        }
                    }
                }
                if (b === undefined) {
                    throw new Error(m.replace(/%TYPE%/g, d))
                }
                return new b(c, a)
            }
        }, {
            "./../Gallery": 284,
            "./../fade/FadeGallery": 291,
            "./../slide/SlideGallery": 301
        }
    ],
    291: [
        function (u, w, s) {
            var o = u("@marcom/ac-object/clone");
            var q = u("@marcom/ac-object/create");
            var t = u("./FadeItem");
            var v = u("./../auto/AutoGallery");
            var n = 0.5;
            function p(b, a) {
                a = o(a) || {};
                a.itemType = a.itemType || t;
                this._fadeDuration = a.duration || n;
                a.toggleNavDuration = a.toggleNavDuration === undefined
                    ? this._fadeDuration
                    : a.toggleNavDuration;
                this._crossFade = a.crossFade;
                this._zIndexCount = a.startZIndex || 1;
                this._ease = a.ease;
                if (a.resizeContainerOnUpdate === true) {
                    a.resizeContainerOnUpdate = this._fadeDuration
                }
                this._onItemShowComplete = this
                    ._onItemShowComplete
                    .bind(this);
                v.call(this, b, a);
                if (this._currentItem) {
                    this
                        ._currentItem
                        .fadeIn(0)
                }
            }
            p.RESIZED = v.RESIZED;
            p.UPDATE = v.UPDATE;
            p.UPDATE_COMPLETE = v.UPDATE_COMPLETE;
            var m = v.prototype;
            var r = p.prototype = q(m);
            r.addItem = function (b, a) {
                if (b.nodeType) {
                    b = new this._itemType(b)
                }
                var c = m
                    .addItem
                    .call(this, b, a);
                if (b !== this._currentItem) {
                    b.fadeOut()
                } else {
                    b.fadeIn(0)
                }
                return c
            };
            r.destroy = function (a) {
                var b = m
                    .destroy
                    .call(this, a);
                this._fadeDuration = null;
                this._crossFade = null;
                this._zIndexCount = null;
                this._ease = null;
                this._onItemShowComplete = null;
                return b
            };
            r._startAt = function (a) {
                var b = this._items[a];
                if (b && this._currentItem !== b) {
                    this
                        ._currentItem
                        .fadeOut(0);
                    this
                        ._currentItem
                        .hide();
                    this._setCurrentItem(b);
                    this
                        ._currentItem
                        .show();
                    this
                        ._currentItem
                        .fadeIn(0);
                    this.trigger(p.UPDATE, this._items)
                }
            };
            r._onItemShowComplete = function (b) {
                if (b && b.target() !== this._currentItem.getElement()) {
                    if (!this._currentItem.isFading()) {
                        this
                            ._currentItem
                            .fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete)
                    }
                    return
                }
                var c;
                var a = this._items.length;
                while (a--) {
                    c = this._items[a];
                    if (c !== this._currentItem) {
                        c.fadeOut()
                    }
                }
                if (this._incomingOutgoingItems) {
                    this.trigger(p.UPDATE_COMPLETE, this._incomingOutgoingItems)
                }
            };
            r._updateItems = function (c, a) {
                if (a) {
                    return
                }
                if (this._crossFade) {
                    var b = a
                        ? null
                        : this
                            .trigger
                            .bind(this, p.UPDATE_COMPLETE, c);
                    c
                        .outgoing[0]
                        .fadeOut(this._fadeDuration * 0.99, this._ease);
                    c
                        .incoming[0]
                        .fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, b)
                } else {
                    this._incomingOutgoingItems = a
                        ? false
                        : c;
                    if (!c.outgoing[0].isFading()) {
                        c
                            .incoming[0]
                            .fadeIn(this._fadeDuration, this._ease, ++this._zIndexCount, this._onItemShowComplete)
                    }
                }
                c
                    .outgoing[0]
                    .hide();
                c
                    .incoming[0]
                    .show()
            };
            w.exports = p
        }, {
            "./../auto/AutoGallery": 288,
            "./FadeItem": 292,
            "@marcom/ac-object/clone": 245,
            "@marcom/ac-object/create": 246
        }
    ],
    292: [
        function (x, y, t) {
            var p = x("@marcom/ac-dom-styles/setStyle");
            var q = x("@marcom/ac-object/create");
            var u = x("@marcom/ac-solar/fade");
            var o = x("@marcom/ac-solar/fadeIn");
            var r = x("@marcom/ac-solar/fadeOut");
            var v = x("./../Item");
            function w(a, b) {
                v.call(this, a, b);
                p(a, {position: "absolute"})
            }
            w.SELECTED = v.SELECTED;
            w.SHOW = v.SHOW;
            w.HIDE = v.HIDE;
            var n = v.prototype;
            var s = w.prototype = q(n);
            s.fadeIn = function (d, c, a, b) {
                if (d) {
                    p(this._el, {
                        zIndex: a || 1
                    });
                    this._destroyCurrentClip();
                    this._clip = u(this._el, 0, 1, d, {
                        ease: c,
                        onComplete: b
                    })
                } else {
                    o(this._el, 0);
                    p(this._el, {
                        zIndex: a || 1
                    })
                }
            };
            s.fadeOut = function (b, a) {
                if (b) {
                    this._destroyCurrentClip();
                    this._clip = r(this._el, b, {ease: a})
                } else {
                    r(this._el, 0)
                }
            };
            s.isFading = function () {
                return !!(this._clip && this._clip.playing())
            };
            s.destroy = function () {
                p(this._el, {
                    position: null,
                    opacity: null,
                    zIndex: null
                });
                n
                    .destroy
                    .call(this);
                this._destroyCurrentClip();
                this._clip = null
            };
            s._destroyCurrentClip = function () {
                if (this.isFading()) {
                    this
                        ._clip
                        .destroy()
                }
            };
            y.exports = w
        }, {
            "./../Item": 285,
            "@marcom/ac-dom-styles/setStyle": 223,
            "@marcom/ac-object/create": 246,
            "@marcom/ac-solar/fade": 277,
            "@marcom/ac-solar/fadeIn": 278,
            "@marcom/ac-solar/fadeOut": 279
        }
    ],
    293: [
        function (m, k, h) {
            var l = m("@marcom/ac-object/create");
            var j = m("@marcom/ac-object/extend");
            k.exports = function i(a) {
                var c = this;
                var b = function b() {
                    c.apply(this, arguments)
                };
                var d = l(this.prototype);
                b.prototype = j(d, a);
                j(b, this);
                return b
            }
        }, {
            "@marcom/ac-object/create": 246,
            "@marcom/ac-object/extend": 247
        }
    ],
    294: [
        function (l, k, m) {
            var h = l("@marcom/ac-dom-styles/getStyle");
            var i = l("@marcom/ac-dom-metrics/getContentDimensions");
            k.exports = function j(b) {
                var a = h(b, "margin-right", "margin-left");
                return Math.round(i(b).width) + parseInt(a.marginRight, 10) + parseInt(a.marginLeft, 10)
            }
        }, {
            "@marcom/ac-dom-metrics/getContentDimensions": 199,
            "@marcom/ac-dom-styles/getStyle": 221
        }
    ],
    295: [
        function (f, i, g) {
            i.exports = function h() {
                var a = ["input", "select", "textarea"];
                return a.indexOf(document.activeElement.nodeName.toLowerCase()) > -1
            }
        }, {}
    ],
    296: [
        function (m, k, h) {
            var j = m("@marcom/ac-dom-traversal/querySelectorAll");
            var i = function i(f, o) {
                var d;
                var a = document.getElementsByTagName("*");
                var g = 0;
                var c = a.length;
                var b = [];
                for (g; g < c; g++) {
                    d = a[g];
                    if (d.getAttribute(f) !== null && d.getAttribute(f).split(" ").indexOf(o) > -1) {
                        b[b.length] = d
                    }
                }
                return b
            };
            k.exports = function l(d, a) {
                var b = j("[" + d + '*="' + a + '"]');
                if (b.length === 0 && document.documentMode === 7) {
                    return i(d, a)
                }
                var o = [];
                var f = 0;
                var c = b.length;
                var g;
                for (f; f < c; f++) {
                    g = b[f].getAttribute(d);
                    if (g === a) {
                        o.push(b[f])
                    } else {
                        if (g && g.length) {
                            g = g.split(" ");
                            if (g.indexOf(a) > -1) {
                                o.push(b[f])
                            }
                        }
                    }
                }
                return o
            }
        }, {
            "@marcom/ac-dom-traversal/querySelectorAll": 240
        }
    ],
    297: [
        function (o, n, i) {
            var k = o("@marcom/ac-dom-traversal/querySelectorAll");
            var m = o("@marcom/ac-dom-traversal/ancestors");
            var j = function j(d, c) {
                var b;
                var g = document.getElementsByTagName("*");
                var f = 0;
                var a = g.length;
                var h = [];
                for (f; f < a; f++) {
                    b = g[f];
                    if (b.getAttribute(d) !== null && (!c || m(b).indexOf(c) > -1)) {
                        h[h.length] = b
                    }
                }
                return h
            };
            n.exports = function l(c, b) {
                b = b || document.body;
                var a = k("[" + c + "]", b);
                if (a.length === 0 && document.documentMode === 7) {
                    return j(c, b)
                }
                return a
            }
        }, {
            "@marcom/ac-dom-traversal/ancestors": 235,
            "@marcom/ac-dom-traversal/querySelectorAll": 240
        }
    ],
    298: [
        function (D, I, t) {
            var F = D("@marcom/ac-dom-events/addEventListener");
            var E = D("@marcom/ac-dom-events/removeEventListener");
            var z = D("@marcom/ac-dom-metrics/getDimensions");
            var u = D("@marcom/ac-dom-metrics/getPosition");
            var G = D("@marcom/ac-dom-styles/getStyle");
            var H = D("@marcom/ac-dom-styles/setStyle");
            var K = D("@marcom/ac-dom-traversal/ancestors");
            var C = D("@marcom/ac-object/create");
            var v = D("@marcom/ac-solar/scrollX");
            var B = D("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var y = D("./../Gallery");
            var A = 0.5;
            function w(a, c, b) {
                b = b || {};
                this._el = a;
                this._isRightToLeft = b.rightToLeft === undefined
                    ? G(a, "direction").direction === "rtl"
                    : b.rightToLeft;
                this._scrollType = this._scrollDirection();
                this._gallery = c;
                this._triggers = {};
                this._ordered = [];
                this._containerEl = this._el.children[0];
                this._slideDuration = b.duration === undefined
                    ? A
                    : b.duration;
                B.call(this)
            }
            var J = B.prototype;
            var x = w.prototype = C(J);
            x.start = function () {
                this._onWindowLoad = this
                    ._onWindowLoad
                    .bind(this);
                this._onGalleryUpdated = this
                    ._onGalleryUpdated
                    .bind(this);
                this
                    ._gallery
                    .on(y.UPDATE, this._onGalleryUpdated);
                this.resize();
                F(window, "load", this._onWindowLoad)
            };
            x.addTrigger = function (c, b) {
                if (this._triggers[b.getElementId()] !== undefined) {
                    return
                }
                var d = K(c);
                if (d.indexOf(this._el) > -1) {
                    var a = {
                        el: c
                    };
                    this._triggers[b.getElementId()] = a;
                    this
                        ._ordered
                        .push(a)
                }
            };
            x.resize = function () {
                if (!this._ordered.length) {
                    return
                }
                H(this._containerEl, {
                    paddingLeft: null,
                    paddingRight: null
                });
                this._containerWidth = z(this._containerEl).width;
                this._width = z(this._el).width;
                this._viewCenter = Math.round(this._width * 0.5);
                var c = this._ordered.length;
                while (c--) {
                    this._setTriggerData(this._ordered[c])
                }
                this
                    ._ordered
                    .sort(function (h, i) {
                        return h.left - i.left
                    });
                if (this._containerWidth > this._width) {
                    var a = this._ordered[0];
                    var b = this._ordered[this._ordered.length - 1];
                    var d = (this._width - a.width) * 0.5;
                    var g = (this._width - b.width) * 0.5;
                    H(this._containerEl, {
                        paddingLeft: d + "px",
                        paddingRight: g + "px"
                    });
                    var f = this._triggers[
                        this
                            ._gallery
                            .getCurrentItem()
                            .getElementId()
                    ];
                    if (f) {
                        this._centerNav(f)
                    }
                }
            };
            x.destroy = function () {
                this
                    ._gallery
                    .off(y.UPDATE, this._onGalleryUpdated);
                E(window, "load", this._onWindowLoad);
                H(this._containerEl, {
                    paddingLeft: null,
                    paddingRight: null
                });
                this._el = null;
                this._gallery = null;
                this._triggers = null;
                this._ordered = null;
                this._containerEl = null;
                this._destroyCurrentClip();
                this._clip = null;
                return J
                    .destroy
                    .call(this)
            };
            x._onWindowLoad = function () {
                E(window, "load", this._onWindowLoad);
                this.resize()
            };
            x._setTriggerData = function (a) {
                a.width = z(a.el).width;
                var b = u(a.el);
                a.left = b.left;
                a.right = b.right;
                a.center = a.left + a.width * 0.5
            };
            x._centerNav = function (c, a) {
                this._setTriggerData(c);
                this._width = z(this._el).width;
                this._viewCenter = Math.round(this._width * 0.5);
                var b = Math.round(c.center - this._viewCenter);
                if (this._isRightToLeft) {
                    if (this._scrollType !== "negative") {
                        b = Math.abs(b)
                    }
                    if (this._scrollType === "default") {
                        b = this._el.scrollWidth - this._el.clientWidth - b
                    }
                }
                this._destroyCurrentClip();
                if (a) {
                    this._clip = v(this._el, b, a)
                } else {
                    this._el.scrollLeft = b
                }
            };
            x._onGalleryUpdated = function (b) {
                var a = this._triggers[
                    b
                        .incoming[0]
                        .getElementId()
                ];
                if (a) {
                    this._centerNav(a, this._slideDuration)
                }
            };
            x._destroyCurrentClip = function () {
                if (this._clip && this._clip.playing()) {
                    this
                        ._clip
                        .destroy()
                }
            };
            x._scrollDirection = function () {
                var a = "reverse";
                var b = document.createElement("div");
                b.style.cssText = "width:2px; height:1px; position:absolute; top:-1000px; overflow:scroll; font-siz" +
                        "e: 14px;";
                b.style.direction = "rtl";
                b.innerHTML = "test";
                document
                    .body
                    .appendChild(b);
                if (b.scrollLeft > 0) {
                    a = "default"
                } else {
                    b.scrollLeft = 1;
                    if (b.scrollLeft === 0) {
                        a = "negative"
                    }
                }
                document
                    .body
                    .removeChild(b);
                return a
            };
            I.exports = w
        }, {
            "./../Gallery": 284,
            "@marcom/ac-dom-events/addEventListener": 188,
            "@marcom/ac-dom-events/removeEventListener": 195,
            "@marcom/ac-dom-metrics/getDimensions": 200,
            "@marcom/ac-dom-metrics/getPosition": 204,
            "@marcom/ac-dom-styles/getStyle": 221,
            "@marcom/ac-dom-styles/setStyle": 223,
            "@marcom/ac-dom-traversal/ancestors": 235,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/create": 246,
            "@marcom/ac-solar/scrollX": 283
        }
    ],
    299: [
        function (f, h, g) {
            var i = f("./../analytics/AnalyticsManager");
            h.exports = new i()
        }, {
            "./../analytics/AnalyticsManager": 287
        }
    ],
    300: [
        function (o, n, i) {
            var l = ["input", "select", "textarea", "button", "object"];
            var k = ["href", "tabindex", "contenteditable"];
            var j = function j() {
                this.focusableSelectors = l.concat(k.map(function (a) {
                    return a === "href"
                        ? "a[" + a + "]"
                        : "*[" + a + "]"
                })).join(",")
            };
            var m = j.prototype;
            m.isFocusable = function (b, d) {
                var a = b
                    .nodeName
                    .toLowerCase();
                var c = l.indexOf(a) > -1;
                if (a === "a") {
                    return true
                }
                if (c) {
                    return !b.disabled
                }
                if (!b.contentEditable) {
                    return true
                }
                d = d || b.tabIndex;
                return isNaN(d)
            };
            m.isTabbable = function (a) {
                var b = a.getAttribute("tabindex");
                if (!isNaN(b)) {
                    return b >= 0
                } else {
                    return this.isFocusable(a, b)
                }
            };
            m.getTabbable = function (d) {
                var b = d.length;
                var c = [];
                for (var a = 0; a < b; a++) {
                    if (this.isTabbable(d[a])) {
                        c.push(d[a])
                    }
                }
                return c
            };
            n.exports = new j()
        }, {}
    ],
    301: [
        function (N, Q, x) {
            var P = N("@marcom/ac-classlist");
            var F = N("@marcom/ac-dom-styles");
            var z = N("@marcom/ac-dom-traversal/querySelectorAll");
            var B = N("@marcom/ac-object/clone");
            var L = N("@marcom/ac-object/create");
            var y = N("./../helpers/getElementFullWidth");
            var H = N("@marcom/ac-solar/moveX");
            var A = N("./../helpers/selectElementFromDataAttributeValue");
            var M = N("./../helpers/selectElementThatHasDataAttribute");
            var I = N("./../auto/AutoGallery");
            var O = N("@marcom/ac-pointer-tracker").PointerTracker;
            var D = N("./SlideItem");
            var K = N("./SlideItemWrapper");
            var S = 0.5;
            var J = 0.5;
            var C = true;
            function E(c, d) {
                d = B(d) || {};
                d.itemType = d.itemType || D;
                this._itemsPerSlide = d.itemsPerSlide || 1;
                var b = d.deeplink !== false;
                d.deeplink = false;
                this._slideDuration = d.duration !== undefined
                    ? d.duration
                    : J;
                d.toggleNavDuration = d.toggleNavDuration === undefined
                    ? this._slideDuration
                    : d.toggleNavDuration;
                this._itemCenterPoint = d.itemCenterPoint !== undefined
                    ? d.itemCenterPoint
                    : S;
                this._edgePullResistance = d.edgePullResistance
                    ? d.edgePullResistance
                    : C;
                this._slideOptions = {
                    ease: d.ease
                };
                if (d.resizeContainerOnUpdate === true) {
                    d.resizeContainerOnUpdate = this._slideDuration
                }
                d.touch = d.touch !== false;
                this._originalWrapAround = d.wrapAround || false;
                I.call(this, c, d);
                if (b) {
                    var a = this._getDeeplinkedItem();
                    if (a) {
                        if (this._currentItem !== a) {
                            this
                                ._currentItem
                                .hide();
                            this._setCurrentItem(a);
                            this
                                ._currentItem
                                .show()
                        }
                    }
                }
                this._positionItems = this
                    ._positionItems
                    .bind(this);
                this._createContainer();
                if (this._items.length !== 0) {
                    this._positionItems()
                }
                this._isInstantiated = true
            }
            E.RESIZED = I.RESIZED;
            E.UPDATE = I.UPDATE;
            E.UPDATE_COMPLETE = I.UPDATE_COMPLETE;
            var R = I.prototype;
            var G = E.prototype = L(R);
            G.addItem = function (b, a) {
                if (b.nodeType) {
                    b = new this._itemType(b)
                }
                var c = R
                    .addItem
                    .call(this, b, a);
                if (this._containerEl !== undefined) {
                    this._addItemToContainer(b);
                    this._positionItems()
                }
                this._updateWrapAround();
                return c
            };
            G.removeItem = function (b, d) {
                if (this._containerEl && b.getElement().parentElement === this._containerEl) {
                    var a = b.getOriginalParentElement();
                    if (a) {
                        a.appendChild(b.getElement())
                    } else {
                        if (typeof b.removeItems === "function") {
                            b.removeItems();
                            d.destroyItem = true
                        }
                    }
                    var c = R
                        .removeItem
                        .call(this, b, d);
                    if (this._currentItem) {
                        this._positionItems(this._currentItem)
                    }
                    this._updateWrapAround();
                    return c
                }
                return R
                    .removeItem
                    .call(this, b, d)
            };
            G.resize = function () {
                this._positionItems();
                this._snapToPosition(this._currentItem.position());
                return R
                    .resize
                    .call(this)
            };
            G.destroy = function (d) {
                this._destroyCurrentClip();
                this._clip = null;
                var b = this._items.length;
                while (b--) {
                    this
                        ._items[b]
                        .off(D.CENTER_POINT_CHANGED, this._positionItems)
                }
                if (this._touchSwipe) {
                    this
                        ._touchSwipe
                        .off(O.START, this._onSwipeStart);
                    this
                        ._touchSwipe
                        .off(O.UPDATE, this._onSwipeUpdate)
                }
                if (this._clickSwipe) {
                    this
                        ._clickSwipe
                        .off(O.START, this._onSwipeStart);
                    this
                        ._clickSwipe
                        .off(O.UPDATE, this._onSwipeUpdate)
                }
                var a = this._el;
                var c = R
                    .destroy
                    .call(this, d);
                a.removeChild(this._containerEl);
                this._containerEl = null;
                this._slideDuration = null;
                this._itemCenterPoint = null;
                this._positionItems = null;
                this._slideOptions = null;
                return c
            };
            G._addItems = function (d) {
                if (this._itemsPerSlide > 1) {
                    var i;
                    var f = /(^\[).*(\]$)/.test(d);
                    if (f) {
                        i = M(d.replace(/\[|\]/g, ""), this._el)
                    } else {
                        i = z(d, this._el)
                    }
                    var h;
                    var j;
                    var c;
                    var b = 0;
                    var a = 0;
                    var g = i.length;
                    for (a; a < g; a++) {
                        if (b === 0) {
                            h = new K()
                        }
                        h.addItem(i[a]);
                        c = i[a].getAttribute("id");
                        if (c) {
                            j = A("data-ac-gallery-trigger", c);
                            this._addItemTriggers(h, j)
                        }
                        if (++b === this._itemsPerSlide || a === g - 1) {
                            b = 0;
                            h.resize();
                            this.addItem(h)
                        }
                    }
                } else {
                    R
                        ._addItems
                        .call(this, d)
                }
            };
            G._createContainer = function () {
                this._containerEl = document.createElement("div");
                P.add(this._containerEl, "ac-gallery-slidecontainer");
                F.setStyle(this._containerEl, {
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%"
                });
                this
                    ._el
                    .appendChild(this._containerEl);
                var a = 0;
                var b = this._items.length;
                for (a; a < b; a++) {
                    this._addItemToContainer(this._items[a])
                }
            };
            G._addItemToContainer = function (a) {
                this
                    ._containerEl
                    .appendChild(a.getElement());
                a.on(D.CENTER_POINT_CHANGED, this._positionItems)
            };
            G._positionItems = function (c) {
                c = c || this._currentItem;
                var l = this._items;
                if (this._wrapAround) {
                    l = this._shuffleItems()
                }
                var j = this._getActualPositionX() - c.position() || 0;
                var k = parseInt(F.getStyle(this._el, "width").width, 10);
                var g = 0;
                var a = 0;
                var d = l.length;
                var i;
                var f;
                var h;
                var b;
                var m;
                for (a; a < d; a++) {
                    i = l[a];
                    i.resize();
                    f = i.getElement();
                    F.setStyle(f, {
                        left: g + "px"
                    });
                    h = y(f);
                    b = k - h;
                    m = i.centerPoint && i.centerPoint() !== null
                        ? i.centerPoint()
                        : this._itemCenterPoint;
                    i.position(g * -1 + b * m);
                    if (this._isRightToLeft) {
                        g -= h
                    } else {
                        g += h
                    }
                }
                g = c.position() + j;
                this._snapToPosition(g)
            };
            G._getActualPositionX = function () {
                var c = F
                    .getStyle(this._containerEl, "transform")
                    .transform;
                if (!c || c === "none") {
                    var b = F
                        .getStyle(this._containerEl, "left")
                        .left;
                    return parseInt(b, 10)
                } else {
                    if (c === this._transformStyles && this._actualPositionX !== undefined) {
                        return this._actualPositionX
                    }
                }
                this._transformStyles = c;
                var a = this
                    ._transformStyles
                    .split(",");
                this._actualPositionX = a[4] || this
                    ._currentItem
                    .position();
                return this._actualPositionX * 1
            };
            G._snapToPosition = function (a) {
                this._destroyCurrentClip();
                this._positionX = a;
                F.setStyle(this._containerEl, {transition: "transform 0s, left 0s"});
                H(this._containerEl, a, 0, this._slideOptions)
            };
            G._slideToPosition = function (a, c, b) {
                this._positionX = a;
                this._clip = H(this._containerEl, a, c, {
                    ease: this._slideOptions.ease,
                    onComplete: b
                })
            };
            G._setUpSwiping = function (c, a) {
                var b = R
                    ._setUpSwiping
                    .call(this, c, a);
                this._onSwipeStart = this
                    ._onSwipeStart
                    .bind(this);
                this._onSwipeUpdate = this
                    ._onSwipeUpdate
                    .bind(this);
                if (this._touchSwipe) {
                    this
                        ._touchSwipe
                        .on(O.START, this._onSwipeStart);
                    this
                        ._touchSwipe
                        .on(O.UPDATE, this._onSwipeUpdate)
                }
                if (this._clickSwipe) {
                    this
                        ._clickSwipe
                        .on(O.START, this._onSwipeStart);
                    this
                        ._clickSwipe
                        .on(O.UPDATE, this._onSwipeUpdate)
                }
                return b
            };
            G._onSwipeStart = function (a) {
                if (this._clip && this._clip.playing()) {
                    this._destroyCurrentClip();
                    this._positionX = this._getActualPositionX()
                }
            };
            G._onSwipeUpdate = function (b) {
                this._destroyCurrentClip();
                var c = this
                    .getItems()
                    .slice(-1)[0]
                    .position();
                var a = this._positionX > 0 || this._positionX < c;
                var d = b.diffX;
                if (this._edgePullResistance && !this._wrapAround && a) {
                    d *= 0.5
                }
                this._snapToPosition(this._positionX - d)
            };
            G._onSwipeEnd = function (a) {
                var b = R
                    ._onSwipeEnd
                    .call(this, a);
                if (b === null) {
                    b = this.show(this._currentItem, {interactionEvent: a.interactionEvent})
                }
                return b
            };
            G._shuffleItems = function () {
                var i = this._items.length === 2 && !this._isAutoPlaying;
                if (i) {
                    return this
                        ._items
                        .slice()
                }
                var c = this._items.length;
                var h = this
                    ._items
                    .indexOf(this._currentItem);
                var d = Math.floor(c * 0.5);
                var b;
                var a;
                var g;
                if (h < d) {
                    b = d - h;
                    var f = c - b;
                    a = this
                        ._items
                        .slice(f);
                    g = this
                        ._items
                        .slice(0, f);
                    return a.concat(g)
                } else {
                    if (h > d) {
                        b = h - d;
                        a = this
                            ._items
                            .slice(0, b);
                        g = this
                            ._items
                            .slice(b);
                        return g.concat(a)
                    }
                }
                return this._items
            };
            G._updateItems = function (d, b) {
                this._destroyCurrentClip();
                if (this._wrapAround) {
                    this._positionItems(d.outgoing[0])
                }
                if (this.getItemIndex(d.outgoing[0]) > -1) {
                    var a = b
                        ? null
                        : this
                            .trigger
                            .bind(this, E.UPDATE_COMPLETE, d);
                    var c = this._slideDuration;
                    this._slideToPosition(d.incoming[0].position(), c, a);
                    if (d.incoming[0] !== d.outgoing[0]) {
                        d
                            .incoming[0]
                            .show();
                        d
                            .outgoing[0]
                            .hide()
                    }
                } else {
                    this._slideToPosition(this._currentItem.position(), this._slideDuration);
                    d
                        .incoming[0]
                        .show();
                    if (!b) {
                        this.trigger(E.UPDATE_COMPLETE, d)
                    }
                }
            };
            G._updateWrapAround = function () {
                if (this._items.length <= 2) {
                    this._wrapAround = false
                } else {
                    if (this._originalWrapAround) {
                        this._wrapAround = this._originalWrapAround
                    }
                }
                if (this._isInstantiated && (this._previousButtons || this._nextButtons)) {
                    this._updatePaddleNavState()
                }
            };
            G._destroyCurrentClip = function () {
                if (this._clip && this._clip.playing()) {
                    this
                        ._clip
                        .destroy()
                }
            };
            Q.exports = E
        }, {
            "./../auto/AutoGallery": 288,
            "./../helpers/getElementFullWidth": 294,
            "./../helpers/selectElementFromDataAttributeValue": 296,
            "./../helpers/selectElementThatHasDataAttribute": 297,
            "./SlideItem": 302,
            "./SlideItemWrapper": 303,
            "@marcom/ac-classlist": 185,
            "@marcom/ac-dom-styles": 220,
            "@marcom/ac-dom-traversal/querySelectorAll": 240,
            "@marcom/ac-object/clone": 245,
            "@marcom/ac-object/create": 246,
            "@marcom/ac-pointer-tracker": 349,
            "@marcom/ac-solar/moveX": 281
        }
    ],
    302: [
        function (r, s, p) {
            var m = r("@marcom/ac-dom-styles/setStyle");
            var n = r("@marcom/ac-object/create");
            var q = r("./../Item");
            function l(a, b) {
                q.call(this, a, b);
                m(a, {
                    position: "absolute",
                    transform: {
                        translateZ: 0
                    }
                });
                this._parentElement = a.parentElement
            }
            l.CENTER_POINT_CHANGED = "centerpointchanged";
            l.SELECTED = q.SELECTED;
            l.SHOW = q.SHOW;
            l.HIDE = q.HIDE;
            var k = q.prototype;
            var o = l.prototype = n(k);
            o.position = function (a) {
                if (a !== undefined) {
                    this._position = a
                }
                return this._position || 0
            };
            o.centerPoint = function (a) {
                if (a !== undefined) {
                    this._centerPoint = a;
                    this.trigger(l.CENTER_POINT_CHANGED)
                }
                return this._centerPoint !== undefined
                    ? this._centerPoint
                    : null
            };
            o.getOriginalParentElement = function () {
                return this._parentElement
            };
            o.resize = function () {};
            o.destroy = function () {
                m(this._el, {
                    position: null,
                    left: null,
                    transform: null
                });
                k
                    .destroy
                    .call(this)
            };
            s.exports = l
        }, {
            "./../Item": 285,
            "@marcom/ac-dom-styles/setStyle": 223,
            "@marcom/ac-object/create": 246
        }
    ],
    303: [
        function (x, z, w) {
            var q = x("@marcom/ac-classlist");
            var t = x("@marcom/ac-dom-styles/setStyle");
            var A = x("@marcom/ac-dom-traversal/querySelectorAll");
            var u = x("@marcom/ac-object/create");
            var p = x("./../singletons/tabManager");
            var C = x("./../helpers/getElementFullWidth");
            var s = x("./SlideItem");
            var B = "ac-gallery-slideitemwrapper";
            function y() {
                s.call(this, document.createElement("div"));
                this._items = [];
                this._currentWidth = 0;
                q.add(this._el, B)
            }
            var r = s.prototype;
            var v = y.prototype = u(r);
            v.addItem = function (b) {
                this
                    ._items
                    .push({el: b, parentElement: b.parentElement});
                this
                    ._el
                    .appendChild(b);
                var d = b.getAttribute("id");
                if (d) {
                    var a = this
                        ._el
                        .getAttribute("id") || "";
                    var c = a.length
                        ? "-"
                        : "";
                    a += c + d;
                    this
                        ._el
                        .setAttribute("id", a)
                }
                this._focusableEls = this
                    ._focusableEls
                    .concat(A(p.focusableSelectors, b))
            };
            v.removeItems = function () {
                var b;
                var d;
                var c = 0;
                var a = this._items.length;
                for (c; c < a; c++) {
                    b = this._items[c].el;
                    t(b, {
                        position: null,
                        left: null
                    });
                    d = this._items[c].parentElement;
                    if (d) {
                        d.appendChild(b)
                    }
                }
            };
            v.resize = function () {
                this._currentWidth = 0;
                var b;
                var c = 0;
                var a = this._items.length;
                for (c; c < a; c++) {
                    b = this._items[c].el;
                    t(b, {
                        position: "absolute",
                        left: this._currentWidth + "px"
                    });
                    this._currentWidth += C(b)
                }
                t(this._el, {
                    width: this._currentWidth + "px"
                })
            };
            v.destroy = function () {
                this.removeItems();
                this._items = null;
                this._currentWidth = null;
                var a = this._el.parentElement;
                if (a) {
                    a.removeChild(this._el)
                }
                r
                    .destroy
                    .call(this)
            };
            z.exports = y
        }, {
            "./../helpers/getElementFullWidth": 294,
            "./../singletons/tabManager": 300,
            "./SlideItem": 302,
            "@marcom/ac-classlist": 185,
            "@marcom/ac-dom-styles/setStyle": 223,
            "@marcom/ac-dom-traversal/querySelectorAll": 240,
            "@marcom/ac-object/create": 246
        }
    ],
    304: [
        function (f, i, g) {
            var h = "";
            h += '<nav class="paddlenav">';
            h += "<ul>";
            h += '<li><button class="paddlenav-arrow paddlenav-arrow-previous" data-ac-gallery-pre' +
                    'vious-trigger="%ID%"></button></li>';
            h += '<li><button class="paddlenav-arrow paddlenav-arrow-next" data-ac-gallery-next-tr' +
                    'igger="%ID%"></button></li>';
            h += "</ul>";
            h += "</nav>";
            i.exports = h
        }, {}
    ],
    305: [
        function (d, g, f) {}, {}
    ],
    306: [
        function (d, g, f) {
            arguments[4][197][0].apply(f, arguments)
        }, {
            dup: 197
        }
    ],
    307: [
        function (d, g, f) {
            arguments[4][198][0].apply(f, arguments)
        }, {
            dup: 198
        }
    ],
    308: [
        function (d, g, f) {
            arguments[4][72][0].apply(f, arguments)
        }, {
            dup: 72
        }
    ],
    309: [
        function (v, w, t) {
            var n = v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var q = v("@marcom/ac-dom-events/utils/addEventListener");
            var x = v("@marcom/ac-dom-events/utils/removeEventListener");
            var r = v("@marcom/ac-object/create");
            var u = v("./internal/KeyEvent");
            var p = "keydown";
            var o = "keyup";
            function y(a) {
                this._keysDown = {};
                this._DOMKeyDown = this
                    ._DOMKeyDown
                    .bind(this);
                this._DOMKeyUp = this
                    ._DOMKeyUp
                    .bind(this);
                this._context = a || document;
                q(this._context, p, this._DOMKeyDown, true);
                q(this._context, o, this._DOMKeyUp, true);
                n.call(this)
            }
            var s = y.prototype = r(n.prototype);
            s.onDown = function (b, a) {
                return this.on(p + ":" + b, a)
            };
            s.onceDown = function (b, a) {
                return this.once(p + ":" + b, a)
            };
            s.offDown = function (b, a) {
                return this.off(p + ":" + b, a)
            };
            s.onUp = function (b, a) {
                return this.on(o + ":" + b, a)
            };
            s.onceUp = function (b, a) {
                return this.once(o + ":" + b, a)
            };
            s.offUp = function (b, a) {
                return this.off(o + ":" + b, a)
            };
            s.isDown = function (a) {
                a += "";
                return this._keysDown[a] || false
            };
            s.isUp = function (a) {
                return !this.isDown(a)
            };
            s.destroy = function () {
                x(this._context, p, this._DOMKeyDown, true);
                x(this._context, o, this._DOMKeyUp, true);
                this._keysDown = null;
                this._context = null;
                n
                    .prototype
                    .destroy
                    .call(this);
                return this
            };
            s._DOMKeyDown = function (b) {
                var c = this._normalizeKeyboardEvent(b);
                var a = c.keyCode += "";
                this._trackKeyDown(a);
                this.trigger(p + ":" + a, c)
            };
            s._DOMKeyUp = function (b) {
                var c = this._normalizeKeyboardEvent(b);
                var a = c.keyCode += "";
                this._trackKeyUp(a);
                this.trigger(o + ":" + a, c)
            };
            s._normalizeKeyboardEvent = function (a) {
                return new u(a)
            };
            s._trackKeyUp = function (a) {
                if (this._keysDown[a]) {
                    this._keysDown[a] = false
                }
            };
            s._trackKeyDown = function (a) {
                if (!this._keysDown[a]) {
                    this._keysDown[a] = true
                }
            };
            w.exports = y
        }, {
            "./internal/KeyEvent": 311,
            "@marcom/ac-dom-events/utils/addEventListener": 306,
            "@marcom/ac-dom-events/utils/removeEventListener": 307,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/create": 308
        }
    ],
    310: [
        function (i, h, f) {
            var g = i("./Keyboard");
            h.exports = new g()
        }, {
            "./Keyboard": 309
        }
    ],
    311: [
        function (m, l, o) {
            var j = ["keyLocation"];
            function k(b) {
                this.originalEvent = b;
                var a;
                for (a in b) {
                    if (j.indexOf(a) === -1 && typeof b[a] !== "function") {
                        this[a] = b[a]
                    }
                }
                this.location = this.originalEvent.location !== undefined
                    ? this.originalEvent.location
                    : this.originalEvent.keyLocation
            }
            k.prototype = {
                preventDefault: function n() {
                    if (typeof this.originalEvent.preventDefault !== "function") {
                        this.originalEvent.returnValue = false;
                        return
                    }
                    return this
                        .originalEvent
                        .preventDefault()
                },
                stopPropagation: function i() {
                    return this
                        .originalEvent
                        .stopPropagation()
                }
            };
            l.exports = k
        }, {}
    ],
    312: [
        function (d, g, f) {
            g.exports = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                SHIFT: 16,
                CONTROL: 17,
                ALT: 18,
                COMMAND: 91,
                CAPSLOCK: 20,
                ESCAPE: 27,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                DELETE: 46,
                ZERO: 48,
                ONE: 49,
                TWO: 50,
                THREE: 51,
                FOUR: 52,
                FIVE: 53,
                SIX: 54,
                SEVEN: 55,
                EIGHT: 56,
                NINE: 57,
                A: 65,
                B: 66,
                C: 67,
                D: 68,
                E: 69,
                F: 70,
                G: 71,
                H: 72,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                M: 77,
                N: 78,
                O: 79,
                P: 80,
                Q: 81,
                R: 82,
                S: 83,
                T: 84,
                U: 85,
                V: 86,
                W: 87,
                X: 88,
                Y: 89,
                Z: 90,
                NUMPAD_ZERO: 96,
                NUMPAD_ONE: 97,
                NUMPAD_TWO: 98,
                NUMPAD_THREE: 99,
                NUMPAD_FOUR: 100,
                NUMPAD_FIVE: 101,
                NUMPAD_SIX: 102,
                NUMPAD_SEVEN: 103,
                NUMPAD_EIGHT: 104,
                NUMPAD_NINE: 105,
                NUMPAD_ASTERISK: 106,
                NUMPAD_PLUS: 107,
                NUMPAD_DASH: 109,
                NUMPAD_DOT: 110,
                NUMPAD_SLASH: 111,
                NUMPAD_EQUALS: 187,
                TICK: 192,
                LEFT_BRACKET: 219,
                RIGHT_BRACKET: 221,
                BACKSLASH: 220,
                SEMICOLON: 186,
                APOSTRAPHE: 222,
                APOSTROPHE: 222,
                SPACEBAR: 32,
                CLEAR: 12,
                COMMA: 188,
                DOT: 190,
                SLASH: 191
            }
        }, {}
    ],
    313: [
        function (n, m, i) {
            var l = n("./ac-browser/BrowserData");
            var j = /applewebkit/i;
            var k = n("./ac-browser/IE");
            var o = l.create();
            o.isWebKit = function (b) {
                var a = b || window.navigator.userAgent;
                return a
                    ? !!j.test(a)
                    : false
            };
            o.lowerCaseUserAgent = navigator
                .userAgent
                .toLowerCase();
            if (o.name === "IE") {
                o.IE = {
                    documentMode: k.getDocumentMode()
                }
            }
            m.exports = o
        }, {
            "./ac-browser/BrowserData": 314,
            "./ac-browser/IE": 315
        }
    ],
    314: [
        function (u, w, q) {
            u("@marcom/ac-polyfills/Array/prototype.filter");
            u("@marcom/ac-polyfills/Array/prototype.some");
            var x = u("./data");
            function o() {}
            o.prototype = {
                __getBrowserVersion: function n(c, b) {
                    var d;
                    if (!c || !b) {
                        return
                    }
                    var a = x
                        .browser
                        .filter(function (f) {
                            return f.identity === b
                        });
                    a.some(function (f) {
                        var h = f.versionSearch || b;
                        var g = c.indexOf(h);
                        if (g > -1) {
                            d = parseFloat(c.substring(g + h.length + 1));
                            return true
                        }
                    });
                    return d
                },
                __getName: function t(a) {
                    return this.__getIdentityStringFromArray(a)
                },
                __getIdentity: function s(a) {
                    if (a.string) {
                        return this.__matchSubString(a)
                    } else {
                        if (a.prop) {
                            return a.identity
                        }
                    }
                },
                __getIdentityStringFromArray: function y(d) {
                    for (var a = 0, c = d.length, b; a < c; a++) {
                        b = this.__getIdentity(d[a]);
                        if (b) {
                            return b
                        }
                    }
                },
                __getOS: function p(a) {
                    return this.__getIdentityStringFromArray(a)
                },
                __getOSVersion: function r(d, a) {
                    if (!d || !a) {
                        return
                    }
                    var b = x
                        .os
                        .filter(function (h) {
                            return h.identity === a
                        })[0];
                    var g = b.versionSearch || a;
                    var c = new RegExp(g + " ([\\d_\\.]+)", "i");
                    var f = d.match(c);
                    if (f !== null) {
                        return f[1].replace(/_/g, ".")
                    }
                },
                __matchSubString: function v(b) {
                    var c = b.subString;
                    if (c) {
                        var a = c.test
                            ? !!c.test(b.string)
                            : b
                                .string
                                .indexOf(c) > -1;
                        if (a) {
                            return b.identity
                        }
                    }
                }
            };
            o.create = function () {
                var b = new o();
                var a = {};
                a.name = b.__getName(x.browser);
                a.version = b.__getBrowserVersion(x.versionString, a.name);
                a.os = b.__getOS(x.os);
                a.osVersion = b.__getOSVersion(x.versionString, a.os);
                return a
            };
            w.exports = o
        }, {
            "./data": 316,
            "@marcom/ac-polyfills/Array/prototype.filter": undefined,
            "@marcom/ac-polyfills/Array/prototype.some": undefined
        }
    ],
    315: [
        function (f, h, g) {
            h.exports = {
                getDocumentMode: function i() {
                    var a;
                    if (document.documentMode) {
                        a = parseInt(document.documentMode, 10)
                    } else {
                        a = 5;
                        if (document.compatMode) {
                            if (document.compatMode === "CSS1Compat") {
                                a = 7
                            }
                        }
                    }
                    return a
                }
            }
        }, {}
    ],
    316: [
        function (d, g, f) {
            g.exports = {
                browser: [
                    {
                        string: window.navigator.userAgent,
                        subString: "Edge",
                        identity: "Edge"
                    }, {
                        string: window.navigator.userAgent,
                        subString: /silk/i,
                        identity: "Silk"
                    }, {
                        string: window.navigator.userAgent,
                        subString: /(android).*(version\/[0-9+].[0-9+])/i,
                        identity: "Android"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Chrome",
                        identity: "Chrome"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "OmniWeb",
                        versionSearch: "OmniWeb/",
                        identity: "OmniWeb"
                    }, {
                        string: window.navigator.userAgent,
                        subString: /mobile\/[^\s]*\ssafari\//i,
                        identity: "Safari Mobile",
                        versionSearch: "Version"
                    }, {
                        string: window.navigator.vendor,
                        subString: "Apple",
                        identity: "Safari",
                        versionSearch: "Version"
                    }, {
                        prop: window.opera,
                        identity: "Opera",
                        versionSearch: "Version"
                    }, {
                        string: window.navigator.vendor,
                        subString: "iCab",
                        identity: "iCab"
                    }, {
                        string: window.navigator.vendor,
                        subString: "KDE",
                        identity: "Konqueror"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Firefox",
                        identity: "Firefox"
                    }, {
                        string: window.navigator.vendor,
                        subString: "Camino",
                        identity: "Camino"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Netscape",
                        identity: "Netscape"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "MSIE",
                        identity: "IE",
                        versionSearch: "MSIE"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Trident",
                        identity: "IE",
                        versionSearch: "rv"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Gecko",
                        identity: "Mozilla",
                        versionSearch: "rv"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "Mozilla",
                        identity: "Netscape",
                        versionSearch: "Mozilla"
                    }
                ],
                os: [
                    {
                        string: window.navigator.platform,
                        subString: "Win",
                        identity: "Windows",
                        versionSearch: "Windows NT"
                    }, {
                        string: window.navigator.platform,
                        subString: "Mac",
                        identity: "OS X"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "iPhone",
                        identity: "iOS",
                        versionSearch: "iPhone OS"
                    }, {
                        string: window.navigator.userAgent,
                        subString: "iPad",
                        identity: "iOS",
                        versionSearch: "CPU OS"
                    }, {
                        string: window.navigator.userAgent,
                        subString: /android/i,
                        identity: "Android"
                    }, {
                        string: window.navigator.platform,
                        subString: "Linux",
                        identity: "Linux"
                    }
                ],
                versionString: window.navigator.userAgent || window.navigator.appVersion || undefined
            }
        }, {}
    ],
    317: [
        function (d, g, f) {
            arguments[4][188][0].apply(f, arguments)
        }, {
            "./shared/getEventType": 327,
            "./utils/addEventListener": 331,
            dup: 188
        }
    ],
    318: [
        function (l, k, m) {
            var i = l("./utils/dispatchEvent");
            var h = l("./shared/getEventType");
            k.exports = function j(a, b, c) {
                b = h(a, b);
                return i(a, b, c)
            }
        }, {
            "./shared/getEventType": 327,
            "./utils/dispatchEvent": 332
        }
    ],
    319: [
        function (d, g, f) {
            g.exports = {
                addEventListener: d("./addEventListener"),
                dispatchEvent: d("./dispatchEvent"),
                preventDefault: d("./preventDefault"),
                removeEventListener: d("./removeEventListener"),
                stop: d("./stop"),
                stopPropagation: d("./stopPropagation"),
                target: d("./target")
            }
        }, {
            "./addEventListener": 317,
            "./dispatchEvent": 318,
            "./preventDefault": 325,
            "./removeEventListener": 326,
            "./stop": 328,
            "./stopPropagation": 329,
            "./target": 330
        }
    ],
    320: [
        function (d, g, f) {
            arguments[4][6][0].apply(f, arguments)
        }, {
            "./shared/camelCasedEventTypes": 321,
            "./shared/prefixHelper": 322,
            "./shared/windowFallbackEventTypes": 323,
            "./utils/eventTypeAvailable": 324,
            dup: 6
        }
    ],
    321: [
        function (d, g, f) {
            arguments[4][7][0].apply(f, arguments)
        }, {
            dup: 7
        }
    ],
    322: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    323: [
        function (d, g, f) {
            arguments[4][9][0].apply(f, arguments)
        }, {
            dup: 9
        }
    ],
    324: [
        function (d, g, f) {
            arguments[4][10][0].apply(f, arguments)
        }, {
            dup: 10
        }
    ],
    325: [
        function (d, g, f) {
            arguments[4][194][0].apply(f, arguments)
        }, {
            dup: 194
        }
    ],
    326: [
        function (d, g, f) {
            arguments[4][195][0].apply(f, arguments)
        }, {
            "./shared/getEventType": 327,
            "./utils/removeEventListener": 333,
            dup: 195
        }
    ],
    327: [
        function (d, g, f) {
            arguments[4][196][0].apply(f, arguments)
        }, {
            "@marcom/ac-prefixer/getEventType": 320,
            dup: 196
        }
    ],
    328: [
        function (l, j, h) {
            var i = l("./stopPropagation");
            var m = l("./preventDefault");
            j.exports = function k(a) {
                a = a || window.event;
                i(a);
                m(a);
                a.stopped = true;
                a.returnValue = false
            }
        }, {
            "./preventDefault": 325,
            "./stopPropagation": 329
        }
    ],
    329: [
        function (i, h, f) {
            h.exports = function g(a) {
                a = a || window.event;
                if (a.stopPropagation) {
                    a.stopPropagation()
                } else {
                    a.cancelBubble = true
                }
            }
        }, {}
    ],
    330: [
        function (f, i, g) {
            i.exports = function h(a) {
                a = a || window.event;
                return typeof a.target !== "undefined"
                    ? a.target
                    : a.srcElement
            }
        }, {}
    ],
    331: [
        function (d, g, f) {
            arguments[4][197][0].apply(f, arguments)
        }, {
            dup: 197
        }
    ],
    332: [
        function (f, i, g) {
            f("@marcom/ac-polyfills/CustomEvent");
            i.exports = function h(a, b, c) {
                var d;
                if (a.dispatchEvent) {
                    if (c) {
                        d = new CustomEvent(b, c)
                    } else {
                        d = new CustomEvent(b)
                    }
                    a.dispatchEvent(d)
                } else {
                    d = document.createEventObject();
                    if (c && "detail" in c) {
                        d.detail = c.detail
                    }
                    a.fireEvent("on" + b, d)
                }
                return a
            }
        }, {
            "@marcom/ac-polyfills/CustomEvent": undefined
        }
    ],
    333: [
        function (d, g, f) {
            arguments[4][198][0].apply(f, arguments)
        }, {
            dup: 198
        }
    ],
    334: [
        function (d, g, f) {
            arguments[4][48][0].apply(f, arguments)
        }, {
            "./getStyleProperty": 335,
            "./getStyleValue": 336,
            "./shared/stylePropertyCache": 339,
            dup: 48
        }
    ],
    335: [
        function (d, g, f) {
            arguments[4][49][0].apply(f, arguments)
        }, {
            "./shared/getStyleTestElement": 337,
            "./shared/prefixHelper": 338,
            "./shared/stylePropertyCache": 339,
            "./utils/toCSS": 342,
            "./utils/toDOM": 343,
            dup: 49
        }
    ],
    336: [
        function (d, g, f) {
            arguments[4][50][0].apply(f, arguments)
        }, {
            "./getStyleProperty": 335,
            "./shared/prefixHelper": 338,
            "./shared/stylePropertyCache": 339,
            "./shared/styleValueAvailable": 340,
            dup: 50
        }
    ],
    337: [
        function (d, g, f) {
            arguments[4][51][0].apply(f, arguments)
        }, {
            dup: 51
        }
    ],
    338: [
        function (d, g, f) {
            arguments[4][8][0].apply(f, arguments)
        }, {
            dup: 8
        }
    ],
    339: [
        function (d, g, f) {
            arguments[4][53][0].apply(f, arguments)
        }, {
            dup: 53
        }
    ],
    340: [
        function (d, g, f) {
            arguments[4][54][0].apply(f, arguments)
        }, {
            "./getStyleTestElement": 337,
            "./stylePropertyCache": 339,
            dup: 54
        }
    ],
    341: [
        function (d, g, f) {
            arguments[4][55][0].apply(f, arguments)
        }, {
            dup: 55
        }
    ],
    342: [
        function (d, g, f) {
            arguments[4][56][0].apply(f, arguments)
        }, {
            dup: 56
        }
    ],
    343: [
        function (d, g, f) {
            arguments[4][57][0].apply(f, arguments)
        }, {
            dup: 57
        }
    ],
    344: [
        function (d, g, f) {
            arguments[4][220][0].apply(f, arguments)
        }, {
            "./getStyle": 345,
            "./setStyle": 347,
            dup: 220
        }
    ],
    345: [
        function (d, g, f) {
            arguments[4][58][0].apply(f, arguments)
        }, {
            "@marcom/ac-prefixer/getStyleProperty": 335,
            "@marcom/ac-prefixer/stripPrefixes": 341,
            dup: 58
        }
    ],
    346: [
        function (d, g, f) {
            arguments[4][59][0].apply(f, arguments)
        }, {
            dup: 59
        }
    ],
    347: [
        function (d, g, f) {
            arguments[4][60][0].apply(f, arguments)
        }, {
            "./internal/normalizeValue": 346,
            "@marcom/ac-prefixer/getStyleCSS": 334,
            "@marcom/ac-prefixer/getStyleProperty": 335,
            dup: 60
        }
    ],
    348: [
        function (d, g, f) {
            arguments[4][72][0].apply(f, arguments)
        }, {
            dup: 72
        }
    ],
    349: [
        function (d, g, f) {
            g.exports = {
                PointerTracker: d("./ac-pointer-tracker/PointerTracker")
            }
        }, {
            "./ac-pointer-tracker/PointerTracker": 350
        }
    ],
    350: [
        function (z, A, w) {
            var o = z("@marcom/ac-browser");
            var q = z("@marcom/ac-dom-events");
            var r = z("@marcom/ac-dom-styles");
            var u = z("@marcom/ac-object/create");
            var y = o.os === "Android" || o.name === "IE" && o.version <= 8;
            var s = z("@marcom/ac-feature/touchAvailable")();
            var p = z("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            function x(b, a, c) {
                this._el = b;
                c = c || {};
                this._lockVertical = c.lockVertical !== false;
                this._swipeThreshold = c.swipeThreshold || x.DEFAULT_SWIPE_THRESHOLD;
                this._pointerEvents = a || {};
                this._trackHover = c.trackHover;
                if (!this._trackHover) {
                    this._pointerEvents.down = this._pointerEvents.down || (s
                        ? x.TOUCH_EVENTS.down
                        : x.MOUSE_EVENTS.down);
                    this._pointerEvents.up = this._pointerEvents.up || (s
                        ? x.TOUCH_EVENTS.up
                        : x.MOUSE_EVENTS.up)
                } else {
                    this._pointerEvents.down = this._pointerEvents.down || x.MOUSE_EVENTS.over;
                    this._pointerEvents.up = this._pointerEvents.up || x.MOUSE_EVENTS.out
                }
                this._pointerEvents.out = this._pointerEvents.out || (s
                    ? x.TOUCH_EVENTS.out
                    : x.MOUSE_EVENTS.out);
                this._pointerEvents.move = this._pointerEvents.move || (s
                    ? x.TOUCH_EVENTS.move
                    : x.MOUSE_EVENTS.move);
                this._onMouseDown = this
                    ._onMouseDown
                    .bind(this);
                this._onMouseUp = this
                    ._onMouseUp
                    .bind(this);
                this._onMouseOut = this
                    ._onMouseOut
                    .bind(this);
                this._onMouseMove = this
                    ._onMouseMove
                    .bind(this);
                p.call(this);
                q.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
                this._setCursorStyle("grab")
            }
            x.START = "start";
            x.END = "end";
            x.UPDATE = "update";
            x.SWIPE_RIGHT = "swiperight";
            x.SWIPE_LEFT = "swipeleft";
            x.DEFAULT_SWIPE_THRESHOLD = y
                ? 2
                : 8;
            x.TOUCH_EVENTS = {
                down: "touchstart",
                up: "touchend",
                out: "mouseout",
                move: "touchmove"
            };
            x.MOUSE_EVENTS = {
                down: "mousedown",
                up: "mouseup",
                out: "mouseout",
                move: "mousemove",
                over: "mouseover"
            };
            var t = p.prototype;
            var v = x.prototype = u(t);
            v.destroy = function () {
                if (this._isDragging) {
                    this._onMouseUp()
                }
                q.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
                this._setCursorStyle(null);
                this._el = null;
                this._pointerEvents = null;
                this._lockVertical = null;
                this._swipeThreshold = null;
                this._checkForTouchScrollY = null;
                this._isDragging = null;
                this._currentX = null;
                this._currentY = null;
                this._velocityX = null;
                this._velocityY = null;
                this._lastX = null;
                this._lastY = null;
                return t
                    .destroy
                    .call(this)
            };
            v._onMouseDown = function (b) {
                if (this._isDragging) {
                    return
                }
                this._isDragging = true;
                this._setCursorStyle("grabbing");
                q.removeEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
                q.addEventListener(document.body, this._pointerEvents.up, this._onMouseUp);
                q.addEventListener(document, this._pointerEvents.out, this._onMouseOut);
                q.addEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
                this._checkForTouchScrollY = this._lockVertical && !!(b.touches && b.touches[0]);
                if (this._checkForTouchScrollY) {
                    this._lastY = this._getTouchY(b)
                }
                var a = this._storeAndGetValues(b);
                this._velocityX = a.diffX = 0;
                this._velocityY = a.diffY = 0;
                this.trigger(x.START, a)
            };
            v._onMouseUp = function (c) {
                if (!this._isDragging) {
                    return
                }
                this._isDragging = false;
                this._setCursorStyle("grab");
                q.addEventListener(this._el, this._pointerEvents.down, this._onMouseDown);
                q.removeEventListener(document.body, this._pointerEvents.up, this._onMouseUp);
                q.removeEventListener(document, this._pointerEvents.out, this._onMouseOut);
                q.removeEventListener(document.body, this._pointerEvents.move, this._onMouseMove);
                var a;
                if (this._checkForTouchScrollY || this._trackHover) {
                    a = null
                } else {
                    if (this._velocityX > this._swipeThreshold) {
                        a = x.SWIPE_LEFT
                    } else {
                        if (this._velocityX * -1 > this._swipeThreshold) {
                            a = x.SWIPE_RIGHT
                        }
                    }
                }
                var b = this._storeAndGetValues(c);
                b.swipe = a;
                this.trigger(x.END, b);
                if (a && !this._trackHover) {
                    this.trigger(a, b)
                }
            };
            v._onMouseOut = function (b) {
                b = b
                    ? b
                    : window.event;
                var a = b.relatedTarget || b.toElement;
                if (!a || a.nodeName === "HTML") {
                    this._onMouseUp(b)
                }
            };
            v._onMouseMove = function (a) {
                if (this._checkForTouchScrollY && this._isVerticalTouchMove(a)) {
                    this._onMouseUp(a);
                    return
                }
                q.preventDefault(a);
                this.trigger(x.UPDATE, this._storeAndGetValues(a))
            };
            v._storeAndGetValues = function (b) {
                if (b === undefined) {
                    return {}
                }
                this._currentX = this._getPointerX(b);
                this._currentY = this._getPointerY(b);
                this._velocityX = this._lastX - this._currentX;
                this._velocityY = this._lastY - this._currentY;
                var a = {
                    x: this._currentX,
                    y: this._currentY,
                    lastX: this._lastX,
                    lastY: this._lastY,
                    diffX: this._velocityX,
                    diffY: this._velocityY,
                    interactionEvent: b
                };
                this._lastX = this._currentX;
                this._lastY = this._currentY;
                return a
            };
            v._getPointerX = function (a) {
                if (a.pageX) {
                    return a.pageX
                } else {
                    if (a.touches && a.touches[0]) {
                        return a.touches[0].pageX
                    } else {
                        if (a.clientX) {
                            return a.clientX
                        }
                    }
                }
                return 0
            };
            v._getPointerY = function (a) {
                if (a.pageY) {
                    return a.pageY
                } else {
                    if (a.touches && a.touches[0]) {
                        return a.touches[0].pageY
                    } else {
                        if (a.clientY) {
                            return a.clientY
                        }
                    }
                }
                return 0
            };
            v._getTouchX = function (a) {
                if (a.touches && a.touches[0]) {
                    return a.touches[0].pageX
                }
                return 0
            };
            v._getTouchY = function (a) {
                if (a.touches && a.touches[0]) {
                    return a.touches[0].pageY
                }
                return 0
            };
            v._isVerticalTouchMove = function (d) {
                var f = this._getTouchX(d);
                var a = this._getTouchY(d);
                var b = Math.abs(f - this._lastX);
                var c = Math.abs(a - this._lastY);
                this._checkForTouchScrollY = b < c;
                return this._checkForTouchScrollY
            };
            v._setCursorStyle = function (a) {
                r.setStyle(this._el, {cursor: a})
            };
            A.exports = x
        }, {
            "@marcom/ac-browser": 313,
            "@marcom/ac-dom-events": 319,
            "@marcom/ac-dom-styles": 344,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-feature/touchAvailable": 176,
            "@marcom/ac-object/create": 348
        }
    ],
    351: [
        function (d, g, f) {
            arguments[4][135][0].apply(f, arguments)
        }, {
            "./extend": 352,
            dup: 135
        }
    ],
    352: [
        function (d, g, f) {
            arguments[4][73][0].apply(f, arguments)
        }, {
            "@marcom/ac-polyfills/Array/prototype.forEach": undefined,
            dup: 73
        }
    ],
    353: [
        function (d, g, f) {
            g.exports = {
                Queue: d("./ac-queue/Queue"),
                QueueItem: d("./ac-queue/QueueItem"),
                LiveQueue: d("./ac-queue/LiveQueue")
            }
        }, {
            "./ac-queue/LiveQueue": 354,
            "./ac-queue/Queue": 355,
            "./ac-queue/QueueItem": 356
        }
    ],
    354: [
        function (i, o, j) {
            i("@marcom/ac-polyfills/Promise");
            i("@marcom/ac-polyfills/requestAnimationFrame");
            i("@marcom/ac-polyfills/Function/prototype.bind");
            var l = i("./Queue");
            var k = i("./QueueItem");
            function m(a) {
                this._queue = new l();
                this._maxProcesses = a || 1;
                this._availableSlots = this._maxProcesses;
                this._rafId = 0;
                this._isRunning = false;
                this._boundFunctions = {
                    _run: this
                        ._run
                        .bind(this),
                    _releaseSlot: this
                        ._releaseSlot
                        .bind(this)
                }
            }
            var n = m.prototype;
            n.start = function () {
                if (this._isRunning) {
                    cancelAnimationFrame(this._rafId)
                }
                this._rafId = requestAnimationFrame(this._boundFunctions._run);
                this._isRunning = true
            };
            n.pause = function () {
                if (this._isRunning) {
                    cancelAnimationFrame(this._rafId);
                    this._rafId = 0
                }
                this._isRunning = false
            };
            n.stop = function () {
                this.pause();
                this.clear()
            };
            n.enqueue = function (c, b) {
                if (typeof c !== "function") {
                    throw new Error("LiveQueue can only enqueue functions")
                }
                if (b === undefined) {
                    b = l.PRIORITY_DEFAULT
                }
                var a = new k(c, b);
                return this.enqueueQueueItem(a)
            };
            n.enqueueQueueItem = function (a) {
                this
                    ._queue
                    .enqueueQueueItem(a);
                if (this._isRunning && this._rafId === 0) {
                    this.start()
                }
                return a
            };
            n.dequeueQueueItem = function (a) {
                return this
                    ._queue
                    .dequeueQueueItem(a)
            };
            n.clear = function () {
                this._queue = new l()
            };
            n.destroy = function () {
                this.pause();
                this._isRunning = false;
                this._queue = null;
                this._boundFunctions = null
            };
            n.count = function () {
                return this
                    ._queue
                    .count() + this.pending()
            };
            n.pending = function () {
                return this._maxProcesses - this._availableSlots
            };
            n.isEmpty = function () {
                return this.count() === 0
            };
            n._run = function () {
                if (!this._isRunning) {
                    return
                }
                this._rafId = requestAnimationFrame(this._boundFunctions._run);
                if (this._queue.isEmpty() || this._availableSlots === 0) {
                    return
                }
                var a = this
                    ._queue
                    .dequeue();
                var b = a.data();
                if (this._isPromise(b)) {
                    this._retainSlot();
                    b.then(this._boundFunctions._releaseSlot, this._boundFunctions._releaseSlot)
                }
                this._stopRunningIfDone()
            };
            n._retainSlot = function () {
                this._availableSlots--
            };
            n._releaseSlot = function () {
                this._availableSlots++;
                this._stopRunningIfDone()
            };
            n._stopRunningIfDone = function () {
                if (this._rafId != 0 && this._queue.count() === 0 && this._availableSlots == this._maxProcesses) {
                    cancelAnimationFrame(this._rafId);
                    this._rafId = 0
                }
            };
            n._isPromise = function (a) {
                return !!(a && typeof a.then === "function")
            };
            o.exports = m
        }, {
            "./Queue": 355,
            "./QueueItem": 356,
            "@marcom/ac-polyfills/Function/prototype.bind": undefined,
            "@marcom/ac-polyfills/Promise": undefined,
            "@marcom/ac-polyfills/requestAnimationFrame": undefined
        }
    ],
    355: [
        function (h, m, i) {
            var j = h("./QueueItem");
            function k() {
                this._items = []
            }
            var l = k.prototype;
            l.enqueue = function (a, c) {
                if (c === undefined) {
                    c = k.PRIORITY_DEFAULT
                }
                var b = new j(a, c);
                return this.enqueueQueueItem(b)
            };
            l.enqueueQueueItem = function (a) {
                if (this._items.indexOf(a) === -1) {
                    this
                        ._items
                        .push(a)
                }
                return a
            };
            l.dequeue = function () {
                this._heapSort();
                var a = this._items.length - 1;
                var b = this._items[0];
                this._items[0] = this._items[a];
                this
                    ._items
                    .pop();
                return b
            };
            l.dequeueQueueItem = function (a) {
                var b = this
                    ._items
                    .indexOf(a);
                if (b > -1) {
                    this
                        ._items
                        .splice(b, 1)
                }
                return a
            };
            l.peek = function () {
                if (this.count() == 0) {
                    return null
                }
                this._heapSort();
                return this._items[0]
            };
            l.isEmpty = function () {
                return this._items.length === 0
            };
            l.count = function () {
                return this._items.length
            };
            l.toString = function () {
                var a = ["Queue total items: " + this.count() + "\n"];
                for (var b = 0; b < this.count(); ++b) {
                    a.push(this._items[b].toString() + "\n")
                }
                return a.join("")
            };
            l._heapSort = function () {
                var d = 0;
                for (var a = this._items.length - 1; a >= 0; a--) {
                    var f = a;
                    while (f > 0) {
                        d++;
                        var c = Math.floor((f - 1) / 2);
                        if (this._items[f].compareTo(this._items[c]) >= 0) {
                            break
                        }
                        var b = this._items[f];
                        this._items[f] = this._items[c];
                        this._items[c] = b;
                        f = c
                    }
                }
            };
            k.PRIORITY_LOW = 10;
            k.PRIORITY_DEFAULT = 5;
            k.PRIORITY_HIGH = 1;
            m.exports = k
        }, {
            "./QueueItem": 356
        }
    ],
    356: [
        function (h, m, i) {
            var j = 0;
            function k(a, b) {
                this.priority = b;
                this.data = a;
                this.insertionOrder = j++
            }
            var l = k.prototype;
            l.compareTo = function (a) {
                if (this.priority < a.priority) {
                    return -1
                } else {
                    if (this.priority > a.priority) {
                        return 1
                    } else {
                        return this.insertionOrder < a.insertionOrder
                            ? -1
                            : 1
                    }
                }
            };
            l.toString = function () {
                return "QueueItem {priority:" + this.priority + ",\tdata:" + this.data + "\tinsertionOrder:" + this.insertionOrder + "}"
            };
            m.exports = k
        }, {}
    ],
    357: [
        function (x, y, s) {
            var v = x("@marcom/ac-object/defaults");
            var u = x("@marcom/ac-queue").LiveQueue;
            var o = x("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var t = x("@marcom/ac-raf-emitter/update");
            var q = x("@marcom/ac-raf-emitter/draw");
            var w = {
                container: document.body,
                includeContainer: false
            };
            var p = {
                loadingPoolSize: 8,
                timeout: null,
                imageDataAttribute: "data-progressive-image",
                imageAnimate: true,
                imageAnimateClass: "progressive-image-animated"
            };
            n.Events = {
                ImageLoad: "image-load",
                Complete: "complete"
            };
            function n(a) {
                o.call(this);
                this.options = v(w, a);
                this.loadingOptions = null;
                this.els = [];
                this.loadingQueue = null;
                this._queueItems = [];
                this._queueItemsObj = {};
                this._loadOrder = [];
                this._timeout = null;
                this._didCallLoad = false
            }
            var r = n.prototype = Object.create(o.prototype);
            r.load = function (a) {
                if (this._didCallLoad) {
                    return
                }
                this._didCallLoad = true;
                this.loadingOptions = v(p, a);
                this.loadingQueue = new u(this.loadingOptions.loadingPoolSize);
                this.els = Array.from(this._getProgressiveImageElements());
                if (this.options.includeContainer && this.options.container.hasAttribute(this._getProgressiveImageDataAttribute())) {
                    this
                        .els
                        .unshift(this.options.container)
                }
                q(function () {
                    var c,
                        d = this.els.length,
                        b;
                    for (c = 0; c < d; c++) {
                        b = {
                            queueItem: this
                                .loadingQueue
                                .enqueue(this._loadNextItem.bind(this, c), c),
                            el: this.els[c],
                            id: c
                        };
                        this
                            ._queueItems
                            .push(b);
                        this._queueItemsObj[c] = b;
                        if (this.loadingOptions.imageAnimate) {
                            this
                                .els[c]
                                .classList
                                .add(this.loadingOptions.imageAnimateClass)
                        }
                    }
                    t(function () {
                        this
                            .loadingQueue
                            .start();
                        if (typeof this.loadingOptions.timeout === "number") {
                            this._timeout = setTimeout(this.cancel.bind(this), this.loadingOptions.timeout)
                        }
                    }.bind(this))
                }.bind(this))
            };
            r.setVisible = function (a) {
                return new Promise(function (b, c) {
                    q(function () {
                        a.removeAttribute(this._getProgressiveImageDataAttribute());
                        b();
                        a = null
                    }.bind(this))
                }.bind(this))
            };
            r.cancel = function () {
                if (this.els) {
                    var a,
                        b = this.els.length;
                    for (a = 0; a < b; a++) {
                        this.setVisible(this.els[a]);
                        if (this.loadingOptions.imageAnimate) {
                            q(function () {
                                this
                                    .els[a]
                                    .setAttribute("data-progressive-image-loaded", "")
                            }.bind(this, a))
                        }
                    }
                }
                this._handleLoadingComplete()
            };
            r.destroy = function () {
                this.cancel();
                this.off();
                o
                    .prototype
                    .destroy
                    .call(this)
            };
            r._loadNextItem = function (a) {
                return new Promise(function (f, c, d) {
                    var b = this._queueItemsObj[f];
                    this
                        ._loadAndSetVisible(b.el)
                        .then(function () {
                            var g = this
                                ._queueItems
                                .indexOf(b);
                            this
                                ._queueItems
                                .splice(g, 1);
                            this._queueItemsObj[b.id] = null;
                            c();
                            this._handleImageLoad(b.el);
                            b = c = null;
                            if (this.loadingQueue.count() === 1) {
                                this._handleLoadingComplete()
                            }
                        }.bind(this))
                }.bind(this, a))
            };
            r._loadAndSetVisible = function (a) {
                return new Promise(function (b, c) {
                    this
                        .setVisible(a)
                        .then(function () {
                            this
                                ._getBackgroundImageSrc(a)
                                .then(function (d) {
                                    this
                                        ._loadImage(d)
                                        .then(b);
                                    a = null
                                }.bind(this))
                        }.bind(this))
                }.bind(this))
            };
            r._getBackgroundImageSrc = function (a) {
                return new Promise(function (b, c) {
                    t(function () {
                        var d = a.currentStyle;
                        if (!d) {
                            d = window.getComputedStyle(a, false)
                        }
                        a = null;
                        if (d.backgroundImage.indexOf("url(") === 0) {
                            b(d.backgroundImage.slice(4, -1).replace(/"/g, ""));
                            return
                        }
                        b(null)
                    }.bind(this))
                }.bind(this))
            };
            r._getProgressiveImageDataAttribute = function () {
                return this.loadingOptions.imageDataAttribute
            };
            r._getProgressiveImageCSSQuery = function () {
                return "[" + this._getProgressiveImageDataAttribute() + "]"
            };
            r._getProgressiveImageElements = function () {
                return this
                    .options
                    .container
                    .querySelectorAll(this._getProgressiveImageCSSQuery()) || []
            };
            r._loadImage = function (a) {
                return new Promise(this._loadImagePromiseFunc.bind(this, a))
            };
            r._loadImagePromiseFunc = function (a, b, c) {
                function d() {
                    this.removeEventListener("load", d);
                    b(this);
                    b = null
                }
                if (!a) {
                    b(null);
                    return
                }
                var f = new Image();
                f.addEventListener("load", d);
                f.src = a
            };
            r._clearTimeout = function () {
                if (this._timeout) {
                    window.clearTimeout(this._timeout);
                    this._timeout = null
                }
            };
            r._handleImageLoad = function (a) {
                q(function () {
                    this.trigger(n.Events.ImageLoad, a);
                    if (this.loadingOptions.imageAnimate) {
                        a.setAttribute("data-progressive-image-loaded", "")
                    }
                    a = null
                }.bind(this))
            };
            r._handleLoadingComplete = function () {
                this
                    .loadingQueue
                    .stop();
                this._clearTimeout();
                this.trigger(n.Events.Complete)
            };
            y.exports = n
        }, {
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-object/defaults": 351,
            "@marcom/ac-queue": 353,
            "@marcom/ac-raf-emitter/draw": 436,
            "@marcom/ac-raf-emitter/update": 438
        }
    ],
    358: [
        function (d, g, f) {
            g.exports = {
                log: d("./ac-console/log")
            }
        }, {
            "./ac-console/log": 359
        }
    ],
    359: [
        function (l, k, h) {
            var i = "f7c9180f-5c45-47b4-8de4-428015f096c0";
            var m = !!function () {
                try {
                    return window
                        .localStorage
                        .getItem(i)
                } catch (a) {}
            }();
            k.exports = function j() {
                if (window.console && typeof console.log !== "undefined" && m) {
                    console
                        .log
                        .apply(console, Array.prototype.slice.call(arguments, 0))
                }
            }
        }, {}
    ],
    360: [
        function (d, g, f) {
            arguments[4][224][0].apply(f, arguments)
        }, {
            dup: 224
        }
    ],
    361: [
        function (d, g, f) {
            arguments[4][225][0].apply(f, arguments)
        }, {
            dup: 225
        }
    ],
    362: [
        function (d, g, f) {
            arguments[4][226][0].apply(f, arguments)
        }, {
            dup: 226
        }
    ],
    363: [
        function (d, g, f) {
            g.exports = 10
        }, {}
    ],
    364: [
        function (d, g, f) {
            arguments[4][126][0].apply(f, arguments)
        }, {
            dup: 126
        }
    ],
    365: [
        function (d, g, f) {
            arguments[4][228][0].apply(f, arguments)
        }, {
            dup: 228
        }
    ],
    366: [
        function (d, g, f) {
            g.exports = {
                createDocumentFragment: d("./createDocumentFragment"),
                filterByNodeType: d("./filterByNodeType"),
                hasAttribute: d("./hasAttribute"),
                indexOf: d("./indexOf"),
                insertAfter: d("./insertAfter"),
                insertBefore: d("./insertBefore"),
                insertFirstChild: d("./insertFirstChild"),
                insertLastChild: d("./insertLastChild"),
                isComment: d("./isComment"),
                isDocument: d("./isDocument"),
                isDocumentFragment: d("./isDocumentFragment"),
                isDocumentType: d("./isDocumentType"),
                isElement: d("./isElement"),
                isNode: d("./isNode"),
                isNodeList: d("./isNodeList"),
                isTextNode: d("./isTextNode"),
                remove: d("./remove"),
                replace: d("./replace"),
                COMMENT_NODE: d("./COMMENT_NODE"),
                DOCUMENT_FRAGMENT_NODE: d("./DOCUMENT_FRAGMENT_NODE"),
                DOCUMENT_NODE: d("./DOCUMENT_NODE"),
                DOCUMENT_TYPE_NODE: d("./DOCUMENT_TYPE_NODE"),
                ELEMENT_NODE: d("./ELEMENT_NODE"),
                TEXT_NODE: d("./TEXT_NODE")
            }
        }, {
            "./COMMENT_NODE": 360,
            "./DOCUMENT_FRAGMENT_NODE": 361,
            "./DOCUMENT_NODE": 362,
            "./DOCUMENT_TYPE_NODE": 363,
            "./ELEMENT_NODE": 364,
            "./TEXT_NODE": 365,
            "./createDocumentFragment": 367,
            "./filterByNodeType": 368,
            "./hasAttribute": 369,
            "./indexOf": 370,
            "./insertAfter": 371,
            "./insertBefore": 372,
            "./insertFirstChild": 373,
            "./insertLastChild": 374,
            "./isComment": 377,
            "./isDocument": 378,
            "./isDocumentFragment": 379,
            "./isDocumentType": 380,
            "./isElement": 381,
            "./isNode": 382,
            "./isNodeList": 383,
            "./isTextNode": 384,
            "./remove": 385,
            "./replace": 386
        }
    ],
    367: [
        function (i, h, f) {
            h.exports = function g(b) {
                var c = document.createDocumentFragment();
                var a;
                if (b) {
                    a = document.createElement("div");
                    a.innerHTML = b;
                    while (a.firstChild) {
                        c.appendChild(a.firstChild)
                    }
                }
                return c
            }
        }, {}
    ],
    368: [
        function (l, k, m) {
            l("@marcom/ac-polyfills/Array/prototype.slice");
            l("@marcom/ac-polyfills/Array/prototype.filter");
            var j = l("./internal/isNodeType");
            var i = l("./ELEMENT_NODE");
            k.exports = function h(a, b) {
                b = b || i;
                a = Array
                    .prototype
                    .slice
                    .call(a);
                return a.filter(function (c) {
                    return j(c, b)
                })
            }
        }, {
            "./ELEMENT_NODE": 364,
            "./internal/isNodeType": 375,
            "@marcom/ac-polyfills/Array/prototype.filter": undefined,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined
        }
    ],
    369: [
        function (i, h, g) {
            h.exports = function f(a, b) {
                if ("hasAttribute" in a) {
                    return a.hasAttribute(b)
                }
                return a
                    .attributes
                    .getNamedItem(b) !== null
            }
        }, {}
    ],
    370: [
        function (m, l, h) {
            m("@marcom/ac-polyfills/Array/prototype.indexOf");
            m("@marcom/ac-polyfills/Array/prototype.slice");
            var j = m("./internal/validate");
            var i = m("./filterByNodeType");
            l.exports = function k(a, c) {
                var d = a.parentNode;
                var b;
                if (!d) {
                    return 0
                }
                b = d.childNodes;
                if (c !== false) {
                    b = i(b, c)
                } else {
                    b = Array
                        .prototype
                        .slice
                        .call(b)
                }
                return b.indexOf(a)
            }
        }, {
            "./filterByNodeType": 368,
            "./internal/validate": 376,
            "@marcom/ac-polyfills/Array/prototype.indexOf": undefined,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined
        }
    ],
    371: [
        function (g, k, h) {
            var i = g("./internal/validate");
            k.exports = function j(b, a) {
                i.insertNode(b, true, "insertAfter");
                i.childNode(a, true, "insertAfter");
                i.hasParentNode(a, "insertAfter");
                if (!a.nextSibling) {
                    return a
                        .parentNode
                        .appendChild(b)
                }
                return a
                    .parentNode
                    .insertBefore(b, a.nextSibling)
            }
        }, {
            "./internal/validate": 376
        }
    ],
    372: [
        function (k, j, h) {
            var i = k("./internal/validate");
            j.exports = function g(b, a) {
                i.insertNode(b, true, "insertBefore");
                i.childNode(a, true, "insertBefore");
                i.hasParentNode(a, "insertBefore");
                return a
                    .parentNode
                    .insertBefore(b, a)
            }
        }, {
            "./internal/validate": 376
        }
    ],
    373: [
        function (k, j, g) {
            var i = k("./internal/validate");
            j.exports = function h(b, a) {
                i.insertNode(b, true, "insertFirstChild");
                i.parentNode(a, true, "insertFirstChild");
                if (!a.firstChild) {
                    return a.appendChild(b)
                }
                return a.insertBefore(b, a.firstChild)
            }
        }, {
            "./internal/validate": 376
        }
    ],
    374: [
        function (g, k, h) {
            var j = g("./internal/validate");
            k.exports = function i(b, a) {
                j.insertNode(b, true, "insertLastChild");
                j.parentNode(a, true, "insertLastChild");
                return a.appendChild(b)
            }
        }, {
            "./internal/validate": 376
        }
    ],
    375: [
        function (d, g, f) {
            arguments[4][127][0].apply(f, arguments)
        }, {
            "../isNode": 382,
            dup: 127
        }
    ],
    376: [
        function (d, g, f) {
            arguments[4][230][0].apply(f, arguments)
        }, {
            "../COMMENT_NODE": 360,
            "../DOCUMENT_FRAGMENT_NODE": 361,
            "../ELEMENT_NODE": 364,
            "../TEXT_NODE": 365,
            "./isNodeType": 375,
            dup: 230
        }
    ],
    377: [
        function (m, l, i) {
            var j = m("./internal/isNodeType");
            var k = m("./COMMENT_NODE");
            l.exports = function h(a) {
                return j(a, k)
            }
        }, {
            "./COMMENT_NODE": 360,
            "./internal/isNodeType": 375
        }
    ],
    378: [
        function (m, l, h) {
            var j = m("./internal/isNodeType");
            var i = m("./DOCUMENT_NODE");
            l.exports = function k(a) {
                return j(a, i)
            }
        }, {
            "./DOCUMENT_NODE": 362,
            "./internal/isNodeType": 375
        }
    ],
    379: [
        function (d, g, f) {
            arguments[4][231][0].apply(f, arguments)
        }, {
            "./DOCUMENT_FRAGMENT_NODE": 361,
            "./internal/isNodeType": 375,
            dup: 231
        }
    ],
    380: [
        function (h, m, i) {
            var j = h("./internal/isNodeType");
            var k = h("./DOCUMENT_TYPE_NODE");
            m.exports = function l(a) {
                return j(a, k)
            }
        }, {
            "./DOCUMENT_TYPE_NODE": 363,
            "./internal/isNodeType": 375
        }
    ],
    381: [
        function (d, g, f) {
            arguments[4][128][0].apply(f, arguments)
        }, {
            "./ELEMENT_NODE": 364,
            "./internal/isNodeType": 375,
            dup: 128
        }
    ],
    382: [
        function (d, g, f) {
            arguments[4][129][0].apply(f, arguments)
        }, {
            dup: 129
        }
    ],
    383: [
        function (d, g, f) {
            arguments[4][130][0].apply(f, arguments)
        }, {
            dup: 130
        }
    ],
    384: [
        function (m, l, i) {
            var j = m("./internal/isNodeType");
            var h = m("./TEXT_NODE");
            l.exports = function k(a) {
                return j(a, h)
            }
        }, {
            "./TEXT_NODE": 365,
            "./internal/isNodeType": 375
        }
    ],
    385: [
        function (d, g, f) {
            arguments[4][234][0].apply(f, arguments)
        }, {
            "./internal/validate": 376,
            dup: 234
        }
    ],
    386: [
        function (g, j, h) {
            var i = g("./internal/validate");
            j.exports = function k(b, a) {
                i.insertNode(b, true, "insertFirstChild", "newNode");
                i.childNode(a, true, "insertFirstChild", "oldNode");
                i.hasParentNode(a, "insertFirstChild", "oldNode");
                return a
                    .parentNode
                    .replaceChild(b, a)
            }
        }, {
            "./internal/validate": 376
        }
    ],
    387: [
        function (d, g, f) {
            arguments[4][237][0].apply(f, arguments)
        }, {
            "@marcom/ac-dom-nodes/COMMENT_NODE": 360,
            "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 361,
            "@marcom/ac-dom-nodes/DOCUMENT_NODE": 362,
            "@marcom/ac-dom-nodes/ELEMENT_NODE": 364,
            "@marcom/ac-dom-nodes/TEXT_NODE": 365,
            "@marcom/ac-dom-nodes/isNode": 382,
            "@marcom/ac-polyfills/Array/prototype.indexOf": undefined,
            dup: 237
        }
    ],
    388: [
        function (d, g, f) {
            arguments[4][240][0].apply(f, arguments)
        }, {
            "./internal/validate": 387,
            "./shims/querySelectorAll": 389,
            "@marcom/ac-polyfills/Array/prototype.slice": undefined,
            dup: 240
        }
    ],
    389: [
        function (d, g, f) {
            arguments[4][243][0].apply(f, arguments)
        }, {
            "@marcom/ac-dom-nodes/isDocumentFragment": 379,
            "@marcom/ac-dom-nodes/isElement": 381,
            "@marcom/ac-dom-nodes/remove": 385,
            "@marcom/ac-polyfills/Array/prototype.indexOf": undefined,
            dup: 243
        }
    ],
    390: [
        function (d, g, f) {
            g.exports = {
                clone: d("./clone"),
                create: d("./create"),
                defaults: d("./defaults"),
                extend: d("./extend"),
                getPrototypeOf: d("./getPrototypeOf"),
                isDate: d("./isDate"),
                isEmpty: d("./isEmpty"),
                isRegExp: d("./isRegExp"),
                toQueryParameters: d("./toQueryParameters")
            }
        }, {
            "./clone": 391,
            "./create": 392,
            "./defaults": 393,
            "./extend": 394,
            "./getPrototypeOf": 395,
            "./isDate": 396,
            "./isEmpty": 397,
            "./isRegExp": 398,
            "./toQueryParameters": 399
        }
    ],
    391: [
        function (d, g, f) {
            arguments[4][71][0].apply(f, arguments)
        }, {
            "./extend": 394,
            "@marcom/ac-polyfills/Array/isArray": undefined,
            dup: 71
        }
    ],
    392: [
        function (d, g, f) {
            arguments[4][72][0].apply(f, arguments)
        }, {
            dup: 72
        }
    ],
    393: [
        function (d, g, f) {
            arguments[4][135][0].apply(f, arguments)
        }, {
            "./extend": 394,
            dup: 135
        }
    ],
    394: [
        function (d, g, f) {
            arguments[4][73][0].apply(f, arguments)
        }, {
            "@marcom/ac-polyfills/Array/prototype.forEach": undefined,
            dup: 73
        }
    ],
    395: [
        function (m, l, h) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var i = Object.prototype.hasOwnProperty;
            l.exports = function k(a) {
                if (Object.getPrototypeOf) {
                    return Object.getPrototypeOf(a)
                } else {
                    if ((typeof a === "undefined"
                        ? "undefined"
                        : j(a)) !== "object") {
                        throw new Error("Requested prototype of a value that is not an object.")
                    } else {
                        if (j(this.__proto__) === "object") {
                            return a.__proto__
                        } else {
                            var c = a.constructor;
                            var b;
                            if (i.call(a, "constructor")) {
                                b = c;
                                if (!delete a.constructor) {
                                    return null
                                }
                                c = a.constructor;
                                a.constructor = b
                            }
                            return c
                                ? c.prototype
                                : null
                        }
                    }
                }
            }
        }, {}
    ],
    396: [
        function (f, h, g) {
            h.exports = function i(a) {
                return Object
                    .prototype
                    .toString
                    .call(a) === "[object Date]"
            }
        }, {}
    ],
    397: [
        function (m, l, h) {
            var k = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var i = Object.prototype.hasOwnProperty;
            l.exports = function j(b) {
                var a;
                if ((typeof b === "undefined"
                    ? "undefined"
                    : k(b)) !== "object") {
                    throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
                }
                for (a in b) {
                    if (i.call(b, a)) {
                        return false
                    }
                }
                return true
            }
        }, {}
    ],
    398: [
        function (i, h, f) {
            h.exports = function g(a) {
                return window.RegExp
                    ? a instanceof RegExp
                    : false
            }
        }, {}
    ],
    399: [
        function (m, k, h) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var i = m("@marcom/ac-url/joinSearchParams");
            k.exports = function l(a) {
                if ((typeof a === "undefined"
                    ? "undefined"
                    : j(a)) !== "object") {
                    throw new TypeError("toQueryParameters error: argument is not an object")
                }
                return i(a, false)
            }
        }, {
            "@marcom/ac-url/joinSearchParams": 413
        }
    ],
    400: [
        function (d, g, f) {
            g.exports = {
                adler32: d("./ac-checksum/adler32")
            }
        }, {
            "./ac-checksum/adler32": 401
        }
    ],
    401: [
        function (f, i, g) {
            i.exports = function h(d) {
                var n = 65521;
                var b = 1;
                var m = 0;
                var a;
                var c;
                for (c = 0; c < d.length; c += 1) {
                    a = d.charCodeAt(c);
                    b = (b + a) % n;
                    m = (m + b) % n
                }
                return m << 16 | b
            }
        }, {}
    ],
    402: [
        function (p, n, k) {
            var m = "ac-storage-";
            var q = p("./ac-storage/Item");
            var l = p("./ac-storage/Storage");
            var j = p("./ac-storage/Storage/storageAvailable");
            var o = new l(m);
            o.Item = q;
            o.storageAvailable = j;
            n.exports = o
        }, {
            "./ac-storage/Item": 403,
            "./ac-storage/Storage": 410,
            "./ac-storage/Storage/storageAvailable": 412
        }
    ],
    403: [
        function (U, ad, Q) {
            var Y = U("@marcom/ac-checksum").adler32;
            var G = U("@marcom/ac-object");
            var M = U("./Item/apis");
            var K = U("./Item/createExpirationDate");
            var H = U("./Item/encoder");
            var F = 1000 * 60 * 60 * 24;
            var J = 30;
            function ac(a) {
                if (!a || typeof a !== "string") {
                    throw "ac-storage/Item: Key for Item must be a string"
                }
                this._key = a;
                this._checksum = null;
                this._expirationDate = null;
                this._metadata = null;
                this._value = null;
                this.setExpirationDate(ac.createExpirationDate(J))
            }
            ac.prototype = {
                save: function I() {
                    var b;
                    var c;
                    var a;
                    var d = {};
                    b = M.best(d);
                    if (b) {
                        if (this.value() === null && typeof b.removeItem === "function") {
                            return b.removeItem(this.key())
                        } else {
                            if (typeof b.setItem === "function") {
                                c = this.__state();
                                a = H.encode(c);
                                return b.setItem(this.key(), a, this.expirationDate())
                            }
                        }
                    }
                    return false
                },
                load: function V() {
                    var b;
                    var a;
                    b = M.best();
                    if (b && typeof b.getItem === "function") {
                        a = b.getItem(this.key());
                        this.__updateState(H.decode(a));
                        if (a === null || this.hasExpired()) {
                            this.remove();
                            return false
                        } else {
                            return true
                        }
                    } else {
                        return false
                    }
                },
                remove: function D() {
                    var a;
                    this.__updateState(null);
                    a = M.best();
                    return a.removeItem(this.key())
                },
                hasExpired: function S(a) {
                    if (this.expirationDate() !== false && this.expirationDate() <= Date.now() || !this.__checksumIsValid(a)) {
                        return true
                    }
                    return false
                },
                value: function O(a) {
                    if (this.hasExpired(a)) {
                        this.remove()
                    }
                    return this._value
                },
                setValue: function ab(a) {
                    this._value = a
                },
                setChecksum: function W(a) {
                    if (a === null) {
                        this._checksum = a
                    } else {
                        if (typeof a === "string" && a !== "") {
                            this._checksum = Y(a)
                        } else {
                            throw "ac-storage/Item#setChecksum: Checksum must be null or a string"
                        }
                    }
                },
                checksum: function Z() {
                    return this._checksum
                },
                setExpirationDate: function L(a) {
                    if (a === null) {
                        a = ac.createExpirationDate(J)
                    }
                    if (a !== false) {
                        if (typeof a === "string") {
                            a = new Date(a).getTime()
                        }
                        if (a && typeof a.getTime === "function") {
                            a = a.getTime()
                        }
                        if (!a || isNaN(a)) {
                            throw "ac-storage/Item: Invalid date object provided as expirationDate"
                        }
                        a -= a % F;
                        if (a <= Date.now()) {
                            a = false
                        }
                    }
                    this._expirationDate = a
                },
                expirationDate: function E() {
                    return this._expirationDate
                },
                __state: function aa() {
                    var a = {};
                    a.checksum = this.checksum();
                    a.expirationDate = this.expirationDate();
                    a.metadata = this.metadata();
                    a.value = this.value();
                    return a
                },
                __updateState: function X(c) {
                    var a;
                    var b;
                    if (c === null) {
                        c = {
                            checksum: null,
                            expirationDate: null,
                            metadata: null,
                            value: null
                        }
                    }
                    for (a in c) {
                        b = "set" + a
                            .charAt(0)
                            .toUpperCase() + a.slice(1);
                        if (typeof this[b] === "function") {
                            this[b](c[a])
                        }
                    }
                },
                __checksumIsValid: function T(a) {
                    if (a) {
                        a = Y(a);
                        if (!this.checksum()) {
                            throw "ac-storage/Item: No checksum exists to determine if this Item’s value is valid. " +
                                "Try loading context from persistent storage first."
                        } else {
                            if (a === this.checksum()) {
                                return true
                            }
                        }
                        return false
                    } else {
                        if (this.checksum()) {
                            throw "ac-storage/Item: No checksum passed, but checksum exists in Item’s state."
                        }
                    }
                    return true
                },
                setKey: function ae() {
                    throw "ac-storage/Item: Cannot set key /after/ initialization!"
                },
                key: function N() {
                    return this._key
                },
                metadata: function R() {
                    return this._metadata
                },
                setMetadata: function P(a) {
                    this._metadata = a
                }
            };
            ac.createExpirationDate = K;
            ad.exports = ac
        }, {
            "./Item/apis": 404,
            "./Item/createExpirationDate": 407,
            "./Item/encoder": 408,
            "@marcom/ac-checksum": 400,
            "@marcom/ac-object": 390
        }
    ],
    404: [
        function (s, t, p) {
            var l = s("@marcom/ac-console").log;
            var q = s("./apis/localStorage");
            var u = s("./apis/userData");
            var o = {
                _list: [
                    q, u
                ],
                list: function n() {
                    return this._list
                },
                all: function m(c) {
                    l("ac-storage/Item/apis.all: Method is deprecated");
                    var b = Array
                        .prototype
                        .slice
                        .call(arguments, 1);
                    if (typeof c !== "string") {
                        throw "ac-storage/Item/apis.all: Method name must be provided as a string"
                    }
                    var a = this
                        .list()
                        .map(function (d) {
                            if (d.available()) {
                                if (typeof d[c] === "function") {
                                    return d[c].apply(d, b)
                                } else {
                                    throw "ac-storage/Item/apis.all: Method not available on api"
                                }
                            }
                            return false
                        });
                    return a
                },
                best: function r() {
                    var a = null;
                    this
                        .list()
                        .some(function (b) {
                            if (b.available()) {
                                a = b;
                                return true
                            }
                        });
                    return a
                }
            };
            t.exports = o
        }, {
            "./apis/localStorage": 405,
            "./apis/userData": 406,
            "@marcom/ac-console": 358
        }
    ],
    405: [
        function (w, z, u) {
            var x = w("@marcom/ac-feature");
            var A;
            try {
                var s = window.localStorage;
                var q = window.sessionStorage
            } catch (r) {
                A = false
            }
            var v = {
                name: "localStorage",
                available: function y() {
                    try {
                        s.setItem("localStorage", 1);
                        s.removeItem("localStorage")
                    } catch (a) {
                        A = false
                    }
                    if (A === undefined) {
                        A = x.localStorageAvailable()
                    }
                    return A
                },
                getItem: function o(a) {
                    return s.getItem(a) || q.getItem(a)
                },
                setItem: function t(b, a, c) {
                    if (c === false) {
                        q.setItem(b, a)
                    } else {
                        s.setItem(b, a)
                    }
                    return true
                },
                removeItem: function p(a) {
                    s.removeItem(a);
                    q.removeItem(a);
                    return true
                }
            };
            z.exports = v
        }, {
            "@marcom/ac-feature": 155
        }
    ],
    406: [
        function (y, A, v) {
            var s = y("@marcom/ac-dom-nodes");
            var x = 1000 * 60 * 60 * 24;
            var w = "ac-storage";
            var B;
            var C = {
                name: "userData",
                available: function z() {
                    if (B === undefined) {
                        B = false;
                        if (document && document.body) {
                            var a = this.element();
                            if (s.isElement(a) && a.addBehavior !== undefined) {
                                B = true
                            }
                            if (B === false) {
                                this.removeElement()
                            }
                        } else {
                            throw "ac-storage/Item/apis/userData: DOM must be ready before using #userData."
                        }
                    }
                    return B
                },
                getItem: function p(b) {
                    var a = this.element();
                    a.load(w);
                    return a.getAttribute(b) || null
                },
                setItem: function t(c, a, d) {
                    var b = this.element();
                    b.setAttribute(c, a);
                    if (d === false) {
                        d = new Date(Date.now() + x)
                    }
                    if (d && typeof d.toUTCString === "function") {
                        b.expires = d.toUTCString()
                    }
                    b.save(w);
                    return true
                },
                removeItem: function q(b) {
                    var a = this.element();
                    a.removeAttribute(b);
                    a.save(w);
                    return true
                },
                _element: null,
                element: function u() {
                    if (this._element === null) {
                        this._element = document.createElement("meta");
                        this
                            ._element
                            .setAttribute("id", "userData");
                        this
                            ._element
                            .setAttribute("name", "ac-storage");
                        this._element.style.behavior = "url('#default#userData')";
                        document
                            .getElementsByTagName("head")[0]
                            .appendChild(this._element)
                    }
                    return this._element
                },
                removeElement: function r() {
                    if (this._element !== null) {
                        s.remove(this._element)
                    }
                    return this._element
                }
            };
            A.exports = C
        }, {
            "@marcom/ac-dom-nodes": 366
        }
    ],
    407: [
        function (g, k, h) {
            var i = 1000 * 60 * 60 * 24;
            var j = function j(a, b) {
                if (typeof a !== "number") {
                    throw "ac-storage/Item/createExpirationDate: days parameter must be a number."
                }
                if (b === undefined || typeof b === "number") {
                    b = b === undefined
                        ? new Date()
                        : new Date(b)
                }
                if (typeof b.toUTCString !== "function" || b.toUTCString() === "Invalid Date") {
                    throw "ac-storage/Item/createExpirationDate: fromDate must be a date object, timestamp," +
                        " or undefined."
                }
                b.setTime(b.getTime() + a * i);
                return b.getTime()
            };
            k.exports = j
        }, {}
    ],
    408: [
        function (j, q, k) {
            var l = j("./encoder/compressor");
            var p = {
                encode: function o(b) {
                    var d;
                    var c;
                    c = l.compress(b);
                    try {
                        d = JSON.stringify(c)
                    } catch (a) {}
                    if (!this.__isValidStateObjString(d)) {
                        throw "ac-storage/Item/encoder/encode: state object is invalid or cannot be saved as st" +
                            "ring"
                    }
                    return d
                },
                decode: function m(d) {
                    var c;
                    var b;
                    if (!this.__isValidStateObjString(d)) {
                        if (d === undefined || d === null || d === "") {
                            return null
                        }
                        throw "ac-storage/Item/encoder/decode: state string does not contain a valid state obje" +
                            "ct"
                    }
                    try {
                        c = JSON.parse(d)
                    } catch (a) {
                        throw "ac-storage/Item/encoder/decode: Item state object could not be decoded"
                    }
                    b = l.decompress(c);
                    return b
                },
                __isValidStateObjString: function n(b) {
                    try {
                        if (b !== undefined && b.substring(0, 1) === "{") {
                            return true
                        }
                        return false
                    } catch (a) {
                        return false
                    }
                }
            };
            q.exports = p
        }, {
            "./encoder/compressor": 409
        }
    ],
    409: [
        function (r, t, n) {
            var q = 1000 * 60 * 60 * 24;
            var l = 14975;
            var m = {
                mapping: {
                    key: "k",
                    checksum: "c",
                    expirationDate: "e",
                    metadata: "m",
                    value: "v"
                },
                compress: function p(f) {
                    var b = {};
                    var a = m.mapping;
                    for (var c in a) {
                        if (f.hasOwnProperty(c) && f[c]) {
                            if (c === "expirationDate") {
                                var d = this.millisecondsToOffsetDays(f[c]);
                                b[a[c]] = d
                            } else {
                                b[a[c]] = f[c]
                            }
                        }
                    }
                    return b
                },
                decompress: function u(b) {
                    var d = {};
                    var f = m.mapping;
                    for (var c in f) {
                        if (b.hasOwnProperty(f[c])) {
                            if (c === "expirationDate") {
                                var a = this.offsetDaysToMilliseconds(b[f[c]]);
                                d[c] = a
                            } else {
                                d[c] = b[f[c]]
                            }
                        }
                    }
                    return d
                },
                millisecondsToOffsetDays: function s(a) {
                    return Math.floor(a / q) - l
                },
                offsetDaysToMilliseconds: function o(a) {
                    return (a + l) * q
                }
            };
            t.exports = m
        }, {}
    ],
    410: [
        function (F, G, A) {
            var C = F("@marcom/ac-object");
            var D = F("./Item/apis/localStorage");
            var I = F("./Storage/registry");
            var B = {};
            function s(a, b) {
                this._namespace = a || "";
                this._options = C.extend(C.clone(B), b || {})
            }
            s.prototype = {
                getItem: function u(b) {
                    var a = this.__item(b);
                    a.load();
                    return a.value()
                },
                setItem: function z(c, a) {
                    var b = this.__item(c);
                    if (a === undefined) {
                        throw "ac-storage/Storage#setItem: Must provide value to set key to. Use #removeItem to" +
                            " remove."
                    }
                    b.setValue(a);
                    return b.save()
                },
                removeItem: function v(b) {
                    var a = this.__item(b);
                    I.remove(a.key(), true);
                    return a.save()
                },
                removeExpired: function H() {
                    var i;
                    var b;
                    if (D.available()) {
                        for (b = 0; b < window.localStorage.length; b++) {
                            i = this.__item(window.localStorage.key(b));
                            if (i.hasExpired() && JSON.parse(window.localStorage[
                                window
                                    .localStorage
                                    .key(b)
                            ]).v !== "undefined") {
                                i.remove()
                            }
                        }
                    } else {
                        var d = "ac-storage";
                        var a = document.getElementById("userData");
                        a.load(d);
                        var f;
                        var h = a.xmlDocument;
                        var c = h.firstChild.attributes;
                        var g = c.length;
                        b = -1;
                        while (++b < g) {
                            f = c[b];
                            i = this.__item(f.nodeName);
                            if (i.hasExpired() && JSON.parse(f.nodeValue).v !== "undefined") {
                                i.remove()
                            }
                        }
                    }
                },
                __item: function w(b) {
                    if (typeof b !== "string" || b === "") {
                        throw "ac-storage/Storage: Key must be a String."
                    }
                    var a = I.item(this.namespace() + b);
                    return a
                },
                namespace: function E() {
                    return this._namespace
                },
                setNamespace: function y(a) {
                    this._namespace = a
                },
                options: function t() {
                    return this._namespace
                },
                setOptions: function x(a) {
                    this._namespace = a
                }
            };
            G.exports = s
        }, {
            "./Item/apis/localStorage": 405,
            "./Storage/registry": 411,
            "@marcom/ac-object": 390
        }
    ],
    411: [
        function (s, t, q) {
            var r = s("../Item");
            var n = {};
            var u = {
                item: function l(b) {
                    var a = n[b];
                    if (!a) {
                        a = this.register(b)
                    }
                    return a
                },
                register: function m(b) {
                    var a = n[b];
                    if (!a) {
                        a = new r(b);
                        n[b] = a
                    }
                    return a
                },
                clear: function o(a) {
                    var b;
                    for (b in n) {
                        this.remove(b, a)
                    }
                    return true
                },
                remove: function p(b, a) {
                    var c = n[b];
                    if (c && !!a) {
                        c.remove()
                    }
                    n[b] = null;
                    return true
                }
            };
            t.exports = u
        }, {
            "../Item": 403
        }
    ],
    412: [
        function (m, k, i) {
            var l = m("../Item/apis");
            var j;
            k.exports = function h() {
                if (j !== undefined) {
                    return j
                }
                j = !!l.best();
                return j
            }
        }, {
            "../Item/apis": 404
        }
    ],
    413: [
        function (j, i, k) {
            var h = j("qs");
            i.exports = function g(b, c) {
                var a = h.stringify(b, {strictNullHandling: true});
                if (a && c !== false) {
                    a = "?" + a
                }
                return a
            }
        }, {
            qs: 414
        }
    ],
    414: [
        function (h, l, i) {
            var j = h("./stringify");
            var m = h("./parse");
            var k = {};
            l.exports = {
                stringify: j,
                parse: m
            }
        }, {
            "./parse": 415,
            "./stringify": 416
        }
    ],
    415: [
        function (g, k, h) {
            var i = g("./utils");
            var j = {
                delimiter: "&",
                depth: 5,
                arrayLimit: 20,
                parameterLimit: 1000,
                strictNullHandling: false,
                plainObjects: false,
                allowPrototypes: false
            };
            j.parseValues = function (f, a) {
                var s = {};
                var t = f.split(a.delimiter, a.parameterLimit === Infinity
                    ? undefined
                    : a.parameterLimit);
                for (var r = 0, c = t.length; r < c; ++r) {
                    var v = t[r];
                    var d = v.indexOf("]=") === -1
                        ? v.indexOf("=")
                        : v.indexOf("]=") + 1;
                    if (d === -1) {
                        s[i.decode(v)] = "";
                        if (a.strictNullHandling) {
                            s[i.decode(v)] = null
                        }
                    } else {
                        var b = i.decode(v.slice(0, d));
                        var u = i.decode(v.slice(d + 1));
                        if (!Object.prototype.hasOwnProperty.call(s, b)) {
                            s[b] = u
                        } else {
                            s[b] = []
                                .concat(s[b])
                                .concat(u)
                        }
                    }
                }
                return s
            };
            j.parseObject = function (b, q, c) {
                if (!b.length) {
                    return q
                }
                var p = b.shift();
                var a;
                if (p === "[]") {
                    a = [];
                    a = a.concat(j.parseObject(b, q, c))
                } else {
                    a = c.plainObjects
                        ? Object.create(null)
                        : {};
                    var d = p[0] === "[" && p[p.length - 1] === "]"
                        ? p.slice(1, p.length - 1)
                        : p;
                    var f = parseInt(d, 10);
                    var o = "" + f;
                    if (!isNaN(f) && p !== d && o === d && f >= 0 && c.parseArrays && f <= c.arrayLimit) {
                        a = [];
                        a[f] = j.parseObject(b, q, c)
                    } else {
                        a[d] = j.parseObject(b, q, c)
                    }
                }
                return a
            };
            j.parseKeys = function (d, r, p) {
                if (!d) {
                    return
                }
                if (p.allowDots) {
                    d = d.replace(/\.([^\.\[]+)/g, "[$1]")
                }
                var c = /^([^\[\]]*)/;
                var q = /(\[[^\[\]]*\])/g;
                var a = c.exec(d);
                var b = [];
                if (a[1]) {
                    if (!p.plainObjects && Object.prototype.hasOwnProperty(a[1])) {
                        if (!p.allowPrototypes) {
                            return
                        }
                    }
                    b.push(a[1])
                }
                var f = 0;
                while ((a = q.exec(d)) !== null && f < p.depth) {
                    ++f;
                    if (!p.plainObjects && Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g, ""))) {
                        if (!p.allowPrototypes) {
                            continue
                        }
                    }
                    b.push(a[1])
                }
                if (a) {
                    b.push("[" + d.slice(a.index) + "]")
                }
                return j.parseObject(b, r, p)
            };
            k.exports = function (q, a) {
                a = a || {};
                a.delimiter = typeof a.delimiter === "string" || i.isRegExp(a.delimiter)
                    ? a.delimiter
                    : j.delimiter;
                a.depth = typeof a.depth === "number"
                    ? a.depth
                    : j.depth;
                a.arrayLimit = typeof a.arrayLimit === "number"
                    ? a.arrayLimit
                    : j.arrayLimit;
                a.parseArrays = a.parseArrays !== false;
                a.allowDots = a.allowDots !== false;
                a.plainObjects = typeof a.plainObjects === "boolean"
                    ? a.plainObjects
                    : j.plainObjects;
                a.allowPrototypes = typeof a.allowPrototypes === "boolean"
                    ? a.allowPrototypes
                    : j.allowPrototypes;
                a.parameterLimit = typeof a.parameterLimit === "number"
                    ? a.parameterLimit
                    : j.parameterLimit;
                a.strictNullHandling = typeof a.strictNullHandling === "boolean"
                    ? a.strictNullHandling
                    : j.strictNullHandling;
                if (q === "" || q === null || typeof q === "undefined") {
                    return a.plainObjects
                        ? Object.create(null)
                        : {}
                }
                var f = typeof q === "string"
                    ? j.parseValues(q, a)
                    : q;
                var s = a.plainObjects
                    ? Object.create(null)
                    : {};
                var b = Object.keys(f);
                for (var r = 0, d = b.length; r < d; ++r) {
                    var c = b[r];
                    var t = j.parseKeys(c, f[c], a);
                    s = i.merge(s, t, a)
                }
                return i.compact(s)
            }
        }, {
            "./utils": 417
        }
    ],
    416: [
        function (p, r, o) {
            var q = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var m = p("./utils");
            var n = {
                delimiter: "&",
                arrayPrefixGenerators: {
                    brackets: function k(a, b) {
                        return a + "[]"
                    },
                    indices: function l(a, b) {
                        return a + "[" + b + "]"
                    },
                    repeat: function s(a, b) {
                        return a
                    }
                },
                strictNullHandling: false
            };
            n.stringify = function (d, b, i, g, h) {
                if (typeof h === "function") {
                    d = h(b, d)
                } else {
                    if (m.isBuffer(d)) {
                        d = d.toString()
                    } else {
                        if (d instanceof Date) {
                            d = d.toISOString()
                        } else {
                            if (d === null) {
                                if (g) {
                                    return m.encode(b)
                                }
                                d = ""
                            }
                        }
                    }
                }
                if (typeof d === "string" || typeof d === "number" || typeof d === "boolean") {
                    return [m.encode(b) + "=" + m.encode(d)]
                }
                var j = [];
                if (typeof d === "undefined") {
                    return j
                }
                var f = Array.isArray(h)
                    ? h
                    : Object.keys(d);
                for (var c = 0, a = f.length; c < a; ++c) {
                    var u = f[c];
                    if (Array.isArray(d)) {
                        j = j.concat(n.stringify(d[u], i(b, u), i, g, h))
                    } else {
                        j = j.concat(n.stringify(d[u], b + "[" + u + "]", i, g, h))
                    }
                }
                return j
            };
            r.exports = function (a, j) {
                j = j || {};
                var g = typeof j.delimiter === "undefined"
                    ? n.delimiter
                    : j.delimiter;
                var d = typeof j.strictNullHandling === "boolean"
                    ? j.strictNullHandling
                    : n.strictNullHandling;
                var b;
                var f;
                if (typeof j.filter === "function") {
                    f = j.filter;
                    a = f("", a)
                } else {
                    if (Array.isArray(j.filter)) {
                        b = f = j.filter
                    }
                }
                var w = [];
                if ((typeof a === "undefined"
                    ? "undefined"
                    : q(a)) !== "object" || a === null) {
                    return ""
                }
                var i;
                if (j.arrayFormat in n.arrayPrefixGenerators) {
                    i = j.arrayFormat
                } else {
                    if ("indices" in j) {
                        i = j.indices
                            ? "indices"
                            : "repeat"
                    } else {
                        i = "indices"
                    }
                }
                var h = n.arrayPrefixGenerators[i];
                if (!b) {
                    b = Object.keys(a)
                }
                for (var c = 0, y = b.length; c < y; ++c) {
                    var x = b[c];
                    w = w.concat(n.stringify(a[x], x, h, d, f))
                }
                return w.join(g)
            }
        }, {
            "./utils": 417
        }
    ],
    417: [
        function (h, m, i) {
            var j = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var k = {};
            k.hexTable = new Array(256);
            for (var l = 0; l < 256; ++l) {
                k.hexTable[l] = "%" + ((l < 16
                    ? "0"
                    : "") + l.toString(16)).toUpperCase()
            }
            i.arrayToObject = function (b, d) {
                var a = d.plainObjects
                    ? Object.create(null)
                    : {};
                for (var c = 0, f = b.length; c < f; ++c) {
                    if (typeof b[c] !== "undefined") {
                        a[c] = b[c]
                    }
                }
                return a
            };
            i.merge = function (g, q, d) {
                if (!q) {
                    return g
                }
                if ((typeof q === "undefined"
                    ? "undefined"
                    : j(q)) !== "object") {
                    if (Array.isArray(g)) {
                        g.push(q)
                    } else {
                        if ((typeof g === "undefined"
                            ? "undefined"
                            : j(g)) === "object") {
                            g[q] = true
                        } else {
                            g = [g, q]
                        }
                    }
                    return g
                }
                if ((typeof g === "undefined"
                    ? "undefined"
                    : j(g)) !== "object") {
                    g = [g].concat(q);
                    return g
                }
                if (Array.isArray(g) && !Array.isArray(q)) {
                    g = i.arrayToObject(g, d)
                }
                var a = Object.keys(q);
                for (var f = 0, b = a.length; f < b; ++f) {
                    var c = a[f];
                    var r = q[c];
                    if (!Object.prototype.hasOwnProperty.call(g, c)) {
                        g[c] = r
                    } else {
                        g[c] = i.merge(g[c], r, d)
                    }
                }
                return g
            };
            i.decode = function (a) {
                try {
                    return decodeURIComponent(a.replace(/\+/g, " "))
                } catch (b) {
                    return a
                }
            };
            i.encode = function (b) {
                if (b.length === 0) {
                    return b
                }
                if (typeof b !== "string") {
                    b = "" + b
                }
                var d = "";
                for (var c = 0, f = b.length; c < f; ++c) {
                    var a = b.charCodeAt(c);
                    if (a === 45 || a === 46 || a === 95 || a === 126 || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122) {
                        d += b[c];
                        continue
                    }
                    if (a < 128) {
                        d += k.hexTable[a];
                        continue
                    }
                    if (a < 2048) {
                        d += k.hexTable[192 | a >> 6] + k.hexTable[128 | a & 63];
                        continue
                    }
                    if (a < 55296 || a >= 57344) {
                        d += k.hexTable[224 | a >> 12] + k.hexTable[128 | a >> 6 & 63] + k.hexTable[128 | a & 63];
                        continue
                    }
                    ++c;
                    a = 65536 + ((a & 1023) << 10 | b.charCodeAt(c) & 1023);
                    d += k.hexTable[240 | a >> 18] + k.hexTable[128 | a >> 12 & 63] + k.hexTable[128 | a >> 6 & 63] + k.hexTable[128 | a & 63]
                }
                return d
            };
            i.compact = function (g, c) {
                if ((typeof g === "undefined"
                    ? "undefined"
                    : j(g)) !== "object" || g === null) {
                    return g
                }
                c = c || [];
                var q = c.indexOf(g);
                if (q !== -1) {
                    return c[q]
                }
                c.push(g);
                if (Array.isArray(g)) {
                    var f = [];
                    for (var a = 0, d = g.length; a < d; ++a) {
                        if (typeof g[a] !== "undefined") {
                            f.push(g[a])
                        }
                    }
                    return f
                }
                var r = Object.keys(g);
                for (a = 0, d = r.length; a < d; ++a) {
                    var b = r[a];
                    g[b] = i.compact(g[b], c)
                }
                return g
            };
            i.isRegExp = function (a) {
                return Object
                    .prototype
                    .toString
                    .call(a) === "[object RegExp]"
            };
            i.isBuffer = function (a) {
                if (a === null || typeof a === "undefined") {
                    return false
                }
                return !!(a.constructor && a.constructor.isBuffer && a.constructor.isBuffer(a))
            }
        }, {}
    ],
    418: [
        function (k, j, g) {
            var h = k("qs");
            j.exports = function i(a) {
                a = a || window.location.search;
                a = a.replace(/^\?/, "");
                return h.parse(a, {strictNullHandling: true})
            }
        }, {
            qs: 414
        }
    ],
    419: [
        function (k, j, g) {
            var i = k("./parseSearchParams");
            j.exports = function h(c) {
                var a;
                var b;
                if (!c) {
                    a = window.location
                } else {
                    if (window.URL) {
                        a = new URL(c, window.location)
                    } else {
                        a = document.createElement("a");
                        a.href = c;
                        a.href = a.href
                    }
                }
                return {
                    hash: a.hash,
                    host: a.host,
                    hostname: a.hostname,
                    href: a.href,
                    origin: a.origin || a.protocol + "//" + a.host,
                    pathname: a.pathname,
                    port: a.port,
                    protocol: a.protocol,
                    search: a.search,
                    searchParams: i(a.search)
                }
            }
        }, {
            "./parseSearchParams": 418
        }
    ],
    420: [
        function (q, r, p) {
            var k = q("@marcom/ac-console").log;
            var s = q("@marcom/ac-dom-traversal/querySelectorAll");
            var m = q("./PromoManager");
            var l = q("./PromoManager/selectors");
            function n(a, b) {
                this._options = b || {};
                this._el = a;
                this._selectors = l;
                this.promoManagers = {};
                this._initialize()
            }
            var o = n.prototype;
            o._setUpPromoManagersProp = function () {
                var a = this._selectors.manager.types.length;
                for (var b = 0; b < a; b++) {
                    this.promoManagers[this._selectors.manager.types[b]] = []
                }
            };
            o._initialize = function () {
                var b = s(this._selectors.manager.selector, this._el);
                var a = b.length;
                var d;
                this._setUpPromoManagersProp();
                for (var c = 0; c < a; c++) {
                    d = b[c].getAttribute(this._selectors.manager.dataAttribute);
                    if (this.promoManagers[d]) {
                        this
                            .promoManagers[d]
                            .push(new m(b[c], this._options))
                    } else {
                        k(d + " is not a valid manager type.")
                    }
                }
            };
            r.exports = n
        }, {
            "./PromoManager": 421,
            "./PromoManager/selectors": 424,
            "@marcom/ac-console": 358,
            "@marcom/ac-dom-traversal/querySelectorAll": 388
        }
    ],
    421: [
        function (s, t, q) {
            var m = s("@marcom/ac-url/parseURL");
            var u = s("@marcom/ac-dom-traversal/querySelectorAll");
            var r = s("./PromoManager/History");
            var n = s("./PromoManager/Promo");
            var l = s("./PromoManager/selectors");
            function o(a, b) {
                this._options = b;
                this._id = a.id;
                this._selectors = l;
                this._history = null;
                this._type = null;
                this.el = a;
                this.promos = {
                    all: null,
                    current: null
                };
                this._removeManagerAttr = this
                    ._removeManagerAttr
                    .bind(this);
                this._initialize()
            }
            var p = o.prototype;
            p.setCurrentPromo = function (a) {
                this.promos.current = a;
                this
                    ._history
                    .addValue(a.historyValue)
            };
            p._getManagerType = function () {
                var a = this
                    .el
                    .getAttribute(this._selectors.manager.dataAttribute);
                if (this._selectors.manager.types.indexOf(a) !== -1) {
                    return a
                }
            };
            p._createPromoArr = function (a) {
                var c = u(this._selectors.promo.selector, a);
                var d = c.length - 1;
                var f = [];
                var b;
                while (d >= 0) {
                    b = new n(c[d]);
                    b.index = d;
                    f.unshift(b);
                    d--
                }
                return f
            };
            p._getURLIdentifier = function () {
                var a = m().pathname;
                a = a.replace(/\/+/g, "/");
                a = a.substring(1, a.lastIndexOf("/") + 1);
                a = a.replace(/\//g, "-");
                return a
            };
            p._assembleHistoryKey = function (c) {
                var a = this._getURLIdentifier();
                var b = c.concat("-", this._type);
                return a.concat(b)
            };
            p._setupHistory = function () {
                var b = this.promos.all.length - 1;
                var a = this._assembleHistoryKey(this._id);
                return new r(a, b, this._options)
            };
            p._getPromosNotInHistory = function () {
                var b = this
                    ._history
                    .getValue();
                var a = function a(c) {
                    return b.indexOf(c.historyValue) === -1
                };
                return this
                    .promos
                    .all
                    .filter(a)
            };
            p._selectFirstPromo = function () {
                var a = this.promos.all.length;
                var d = this._getPromosNotInHistory();
                var c = d.length;
                var b;
                if (a > 1 && c > 0) {
                    b = d[0]
                } else {
                    b = this.promos.all[0];
                    if (c < 1) {
                        this
                            ._history
                            .resetValue()
                    }
                }
                return b
            };
            p._removeHiddenPromos = function () {
                var a = this.promos.all.length - 1;
                while (a >= 0) {
                    if (this.promos.all[a].historyValue !== this.promos.current.historyValue) {
                        this
                            .promos
                            .all[a]
                            .remove()
                    }
                    a--
                }
            };
            p._reorderPromoArr = function () {
                var a = this
                    .promos
                    .all
                    .splice(this.promos.current.index);
                var b;
                this.promos.all = a.concat(this.promos.all);
                b = this.promos.all.length - 1;
                while (b >= 0) {
                    this.promos.all[b].index = b;
                    b--
                }
            };
            p._appendPromoArrToDom = function () {
                var b = document.createDocumentFragment();
                var c = this.promos.all.length;
                var a = 0;
                var d;
                while (a < c) {
                    d = this.promos.all[a].el;
                    b.appendChild(d);
                    a++
                }
                this
                    .el
                    .appendChild(b)
            };
            p._removeManagerAttr = function () {
                this
                    .el
                    .removeAttribute(this._selectors.manager.dataAttribute)
            };
            p._initialize = function () {
                var a;
                this._type = this._getManagerType();
                this.promos.all = this._createPromoArr(this.el);
                this._history = this._setupHistory();
                a = this._selectFirstPromo();
                this.setCurrentPromo(a);
                if (this._type === this._selectors.manager.types[0]) {
                    this._removeHiddenPromos()
                } else {
                    if (this._type === this._selectors.manager.types[1]) {
                        this._reorderPromoArr();
                        this._appendPromoArrToDom()
                    } else {
                        throw new Error("PromoManager must be supplied with a valid manager type")
                    }
                }
                window.requestAnimationFrame(this._removeManagerAttr)
            };
            t.exports = o
        }, {
            "./PromoManager/History": 422,
            "./PromoManager/Promo": 423,
            "./PromoManager/selectors": 424,
            "@marcom/ac-dom-traversal/querySelectorAll": 388,
            "@marcom/ac-url/parseURL": 419
        }
    ],
    422: [
        function (r, t, o) {
            var s = r("@marcom/ac-storage");
            var m = s.Item;
            var l = r("@marcom/ac-console").log;
            var p = r("@marcom/ac-object/defaults");
            var u = {
                daysUntilExpires: null
            };
            function q(c, b, a) {
                this._key = c;
                this._maxLen = b;
                this._options = p(u, a);
                this._item = null;
                this._initialize()
            }
            var n = q.prototype;
            n.getValue = function () {
                this
                    ._item
                    .load();
                return this
                    ._item
                    .value() || []
            };
            n.addValue = function (a) {
                var b = this.getValue();
                b.unshift(a);
                b = this._maxLenArrTrim(b);
                this
                    ._item
                    .setValue(b);
                this
                    ._item
                    .save()
            };
            n.resetValue = function () {
                this
                    ._item
                    .setValue([]);
                this
                    ._item
                    .save()
            };
            n._setHistoryExpiration = function (a) {
                var b = this._options.daysUntilExpires;
                var c = a;
                if (b !== 30 && b !== null) {
                    if (typeof b !== "number") {
                        l("daysUntilExpires option must be a number.")
                    } else {
                        b = m.createExpirationDate(b);
                        a.setExpirationDate(b)
                    }
                }
                return c
            };
            n._createLocalStorageItem = function () {
                var a;
                a = new s.Item(this._key);
                a.load();
                if (!a.value()) {
                    a.setValue([]);
                    a.save();
                    a = this._setHistoryExpiration(a)
                }
                return a
            };
            n._maxLenArrTrim = function (b) {
                var a = b;
                if (a.length > this._maxLen) {
                    a.pop()
                }
                return a
            };
            n._initialize = function () {
                this._item = this._createLocalStorageItem();
                this
                    ._item
                    .save()
            };
            t.exports = q
        }, {
            "@marcom/ac-console": 358,
            "@marcom/ac-object/defaults": 393,
            "@marcom/ac-storage": 402
        }
    ],
    423: [
        function (i, n, j) {
            var m = i("@marcom/ac-dom-nodes/remove");
            var o = i("./selectors");
            function k(a) {
                this.el = a;
                this.index = null;
                this.historyValue = this._getDataAttribPromoId()
            }
            var l = k.prototype;
            l.remove = function () {
                m(this.el)
            };
            l._getDataAttribPromoId = function () {
                var a = o.promo.dataAttribute;
                return this
                    .el
                    .getAttribute(a)
            };
            n.exports = k
        }, {
            "./selectors": 424,
            "@marcom/ac-dom-nodes/remove": 385
        }
    ],
    424: [
        function (g, j, h) {
            function k() {
                this.dataAttributePrefix = "data-promo-";
                this.promo = {
                    attribute: "id",
                    dataAttribute: null,
                    selector: null
                };
                this.manager = {
                    types: [
                        "show-hide", "reorder"
                    ],
                    attribute: "type",
                    dataAttribute: null,
                    selector: null
                };
                this._initialize()
            }
            var i = k.prototype;
            i._assembleDataAttribute = function (a) {
                return this.dataAttributePrefix + a
            };
            i._assembleDataAttribSelector = function (a) {
                return "[" + a + "]"
            };
            i._initialize = function () {
                this.promo.dataAttribute = this._assembleDataAttribute(this.promo.attribute);
                this.promo.selector = this._assembleDataAttribSelector(this.promo.dataAttribute);
                this.manager.dataAttribute = this._assembleDataAttribute(this.manager.attribute);
                this.manager.selector = this._assembleDataAttribSelector(this.manager.dataAttribute)
            };
            j.exports = new k()
        }, {}
    ],
    425: [
        function (d, g, f) {
            g.exports = {
                SharedInstance: d("./ac-shared-instance/SharedInstance")
            }
        }, {
            "./ac-shared-instance/SharedInstance": 426
        }
    ],
    426: [
        function (o, r, m) {
            var p = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var s = window,
                n = "AC",
                l = "SharedInstance",
                k = s[n];
            var q = function () {
                var b = {};
                return {
                    get: function a(h, i) {
                        var g = null;
                        if (b[h] && b[h][i]) {
                            g = b[h][i]
                        }
                        return g
                    },
                    set: function d(g, i, h) {
                        if (!b[g]) {
                            b[g] = {}
                        }
                        if (typeof h === "function") {
                            b[g][i] = new h()
                        } else {
                            b[g][i] = h
                        }
                        return b[g][i]
                    },
                    share: function f(h, j, i) {
                        var g = this.get(h, j);
                        if (!g) {
                            g = this.set(h, j, i)
                        }
                        return g
                    },
                    remove: function c(h, i) {
                        var g = typeof i === "undefined"
                            ? "undefined"
                            : p(i);
                        if (g === "string" || g === "number") {
                            if (!b[h] || !b[h][i]) {
                                return
                            }
                            b[h][i] = null;
                            return
                        }
                        if (b[h]) {
                            b[h] = null
                        }
                    }
                }
            }();
            if (!k) {
                k = s[n] = {}
            }
            if (!k[l]) {
                k[l] = q
            }
            r.exports = k[l]
        }, {}
    ],
    427: [
        function (o, m, i) {
            var j = o("@marcom/ac-shared-instance").SharedInstance;
            var l = "ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance",
                n = "1.0.3";
            var k = function k() {
                this._currentID = 0
            };
            k.prototype.getNewID = function () {
                this._currentID++;
                return "raf:" + this._currentID
            };
            m.exports = j.share(l, n, k)
        }, {
            "@marcom/ac-shared-instance": 425
        }
    ],
    428: [
        function (d, g, f) {
            arguments[4][425][0].apply(f, arguments)
        }, {
            "./ac-shared-instance/SharedInstance": 429,
            dup: 425
        }
    ],
    429: [
        function (d, g, f) {
            arguments[4][426][0].apply(f, arguments)
        }, {
            dup: 426
        }
    ],
    430: [
        function (g, j, h) {
            g("@marcom/ac-polyfills/performance/now");
            var i;
            function k(a) {
                a = a || {};
                this._reset();
                this._willRun = false;
                this._totalSubscribeCount = -1;
                this._requestAnimationFrame = window.requestAnimationFrame;
                this._cancelAnimationFrame = window.cancelAnimationFrame;
                this._boundOnAnimationFrame = this
                    ._onAnimationFrame
                    .bind(this);
                this._boundOnExternalAnimationFrame = this
                    ._onExternalAnimationFrame
                    .bind(this)
            }
            i = k.prototype;
            i.subscribe = function (b, a) {
                this._totalSubscribeCount++;
                if (!this._nextFrameSubscribers[b.id]) {
                    if (a) {
                        this
                            ._nextFrameSubscribersOrder
                            .unshift(b.id)
                    } else {
                        this
                            ._nextFrameSubscribersOrder
                            .push(b.id)
                    }
                    this._nextFrameSubscribers[b.id] = b;
                    this._nextFrameSubscriberArrayLength++;
                    this._nextFrameSubscriberCount++;
                    this._run()
                }
                return this._totalSubscribeCount
            };
            i.unsubscribe = function (a) {
                if (!this._nextFrameSubscribers[a.id]) {
                    return false
                }
                this._nextFrameSubscribers[a.id] = null;
                this._nextFrameSubscriberCount--;
                if (this._nextFrameSubscriberCount === 0) {
                    this._cancel()
                }
                return true
            };
            i.trigger = function (a, b) {
                var c;
                for (c = 0; c < this._subscriberArrayLength; c++) {
                    if (this._subscribers[this._subscribersOrder[c]] !== null && this._subscribers[this._subscribersOrder[c]]._didDestroy === false) {
                        this
                            ._subscribers[this._subscribersOrder[c]]
                            .trigger(a, b)
                    }
                }
            };
            i.destroy = function () {
                var a = this._cancel();
                this._subscribers = null;
                this._subscribersOrder = null;
                this._nextFrameSubscribers = null;
                this._nextFrameSubscribersOrder = null;
                this._rafData = null;
                this._boundOnAnimationFrame = null;
                this._onExternalAnimationFrame = null;
                return a
            };
            i.useExternalAnimationFrame = function (b) {
                if (typeof b !== "boolean") {
                    return
                }
                var a = this._isUsingExternalAnimationFrame;
                if (b && this._animationFrame) {
                    this
                        ._cancelAnimationFrame
                        .call(window, this._animationFrame);
                    this._animationFrame = null
                }
                if (this._willRun && !b && !this._animationFrame) {
                    this._animationFrame = this
                        ._requestAnimationFrame
                        .call(window, this._boundOnAnimationFrame)
                }
                this._isUsingExternalAnimationFrame = b;
                if (b) {
                    return this._boundOnExternalAnimationFrame
                }
                return a || false
            };
            i._run = function () {
                if (!this._willRun) {
                    this._willRun = true;
                    if (this.lastFrameTime === 0) {
                        this.lastFrameTime = performance.now()
                    }
                    this._animationFrameActive = true;
                    if (!this._isUsingExternalAnimationFrame) {
                        this._animationFrame = this
                            ._requestAnimationFrame
                            .call(window, this._boundOnAnimationFrame)
                    }
                    return true
                }
            };
            i._cancel = function () {
                var a = false;
                if (this._animationFrameActive) {
                    if (this._animationFrame) {
                        this
                            ._cancelAnimationFrame
                            .call(window, this._animationFrame);
                        this._animationFrame = null
                    }
                    this._animationFrameActive = false;
                    this._willRun = false;
                    a = true
                }
                if (!this._isRunning) {
                    this._reset()
                }
                return a
            };
            i._onSubscribersAnimationFrameStart = function (a) {
                var b;
                for (b = 0; b < this._subscriberArrayLength; b++) {
                    if (this._subscribers[this._subscribersOrder[b]] !== null && this._subscribers[this._subscribersOrder[b]]._didDestroy === false) {
                        this
                            ._subscribers[this._subscribersOrder[b]]
                            ._onAnimationFrameStart(a)
                    }
                }
            };
            i._onSubscribersAnimationFrameEnd = function (a) {
                var b;
                for (b = 0; b < this._subscriberArrayLength; b++) {
                    if (this._subscribers[this._subscribersOrder[b]] !== null && this._subscribers[this._subscribersOrder[b]]._didDestroy === false) {
                        this
                            ._subscribers[this._subscribersOrder[b]]
                            ._onAnimationFrameEnd(a)
                    }
                }
            };
            i._onAnimationFrame = function (a) {
                this._subscribers = this._nextFrameSubscribers;
                this._subscribersOrder = this._nextFrameSubscribersOrder;
                this._subscriberArrayLength = this._nextFrameSubscriberArrayLength;
                this._subscriberCount = this._nextFrameSubscriberCount;
                this._nextFrameSubscribers = {};
                this._nextFrameSubscribersOrder = [];
                this._nextFrameSubscriberArrayLength = 0;
                this._nextFrameSubscriberCount = 0;
                this._isRunning = true;
                this._willRun = false;
                this._didRequestNextRAF = false;
                this._rafData.delta = a - this.lastFrameTime;
                this.lastFrameTime = a;
                this._rafData.fps = 0;
                if (this._rafData.delta >= 1000) {
                    this._rafData.delta = 0
                }
                if (this._rafData.delta !== 0) {
                    this._rafData.fps = 1000 / this._rafData.delta
                }
                this._rafData.time = a;
                this._rafData.naturalFps = this._rafData.fps;
                this._rafData.timeNow = Date.now();
                this._onSubscribersAnimationFrameStart(this._rafData);
                this.trigger("update", this._rafData);
                this.trigger("external", this._rafData);
                this.trigger("draw", this._rafData);
                this._onSubscribersAnimationFrameEnd(this._rafData);
                if (!this._willRun) {
                    this._reset()
                }
            };
            i._onExternalAnimationFrame = function (a) {
                if (!this._isUsingExternalAnimationFrame) {
                    return
                }
                this._onAnimationFrame(a)
            };
            i._reset = function () {
                this._rafData = {
                    time: 0,
                    delta: 0,
                    fps: 0,
                    naturalFps: 0,
                    timeNow: 0
                };
                this._subscribers = {};
                this._subscribersOrder = [];
                this._subscriberArrayLength = 0;
                this._subscriberCount = 0;
                this._nextFrameSubscribers = {};
                this._nextFrameSubscribersOrder = [];
                this._nextFrameSubscriberArrayLength = 0;
                this._nextFrameSubscriberCount = 0;
                this._didEmitFrameData = false;
                this._animationFrame = null;
                this._animationFrameActive = false;
                this._isRunning = false;
                this._shouldReset = false;
                this.lastFrameTime = 0
            };
            j.exports = k
        }, {
            "@marcom/ac-polyfills/performance/now": undefined
        }
    ],
    431: [
        function (o, l, i) {
            var j = o("@marcom/ac-shared-instance").SharedInstance;
            var k = "ac-raf-executor:sharedRAFExecutorInstance",
                m = "2.0.1";
            var n = o("./RAFExecutor");
            l.exports = j.share(k, m, n)
        }, {
            "./RAFExecutor": 430,
            "@marcom/ac-shared-instance": 428
        }
    ],
    432: [
        function (o, n, p) {
            var l;
            var m = o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var q = o("@marcom/ac-raf-executor/sharedRAFExecutorInstance");
            var j = o("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
            function k(a) {
                a = a || {};
                m.call(this);
                this.id = j.getNewID();
                this.executor = a.executor || q;
                this._reset();
                this._willRun = false;
                this._didDestroy = false
            }
            l = k.prototype = Object.create(m.prototype);
            l.run = function () {
                if (!this._willRun) {
                    this._willRun = true
                }
                return this._subscribe()
            };
            l.cancel = function () {
                this._unsubscribe();
                if (this._willRun) {
                    this._willRun = false
                }
                this._reset()
            };
            l.destroy = function () {
                var a = this.willRun();
                this.cancel();
                this.executor = null;
                m
                    .prototype
                    .destroy
                    .call(this);
                this._didDestroy = true;
                return a
            };
            l.willRun = function () {
                return this._willRun
            };
            l.isRunning = function () {
                return this._isRunning
            };
            l._subscribe = function () {
                return this
                    .executor
                    .subscribe(this)
            };
            l._unsubscribe = function () {
                return this
                    .executor
                    .unsubscribe(this)
            };
            l._onAnimationFrameStart = function (a) {
                this._isRunning = true;
                this._willRun = false;
                if (!this._didEmitFrameData) {
                    this._didEmitFrameData = true;
                    this.trigger("start", a)
                }
            };
            l._onAnimationFrameEnd = function (a) {
                if (!this._willRun) {
                    this.trigger("stop", a);
                    this._reset()
                }
            };
            l._reset = function () {
                this._didEmitFrameData = false;
                this._isRunning = false
            };
            n.exports = k
        }, {
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 427,
            "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 431
        }
    ],
    433: [
        function (h, m, i) {
            var l = h("./SingleCallRAFEmitter");
            var j = function j(a) {
                this.rafEmitter = new l();
                this
                    .rafEmitter
                    .on(a, this._onRAFExecuted.bind(this));
                this.requestAnimationFrame = this
                    .requestAnimationFrame
                    .bind(this);
                this.cancelAnimationFrame = this
                    .cancelAnimationFrame
                    .bind(this);
                this._frameCallbacks = [];
                this._nextFrameCallbacks = [];
                this._currentFrameID = -1;
                this._cancelFrameIdx = -1;
                this._frameCallbackLength = 0;
                this._nextFrameCallbacksLength = 0;
                this._frameCallbackIteration = 0
            };
            var k = j.prototype;
            k.requestAnimationFrame = function (a) {
                this._currentFrameID = this
                    .rafEmitter
                    .run();
                this
                    ._nextFrameCallbacks
                    .push(this._currentFrameID, a);
                this._nextFrameCallbacksLength += 2;
                return this._currentFrameID
            };
            k.cancelAnimationFrame = function (a) {
                this._cancelFrameIdx = this
                    ._nextFrameCallbacks
                    .indexOf(a);
                if (this._cancelFrameIdx === -1) {
                    return
                }
                this
                    ._nextFrameCallbacks
                    .splice(this._cancelFrameIdx, 2);
                this._nextFrameCallbacksLength -= 2;
                if (this._nextFrameCallbacksLength === 0) {
                    this
                        .rafEmitter
                        .cancel()
                }
            };
            k._onRAFExecuted = function (a) {
                this._frameCallbacks = this._nextFrameCallbacks;
                this._frameCallbackLength = this._nextFrameCallbacksLength;
                this._nextFrameCallbacks = [];
                this._nextFrameCallbacksLength = 0;
                for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2) {
                    this._frameCallbacks[this._frameCallbackIteration + 1](a.time, a)
                }
            };
            m.exports = j
        }, {
            "./SingleCallRAFEmitter": 435
        }
    ],
    434: [
        function (h, m, i) {
            var j = h("./RAFInterface");
            var k = function k() {
                this.events = {}
            };
            var l = k.prototype;
            l.requestAnimationFrame = function (a) {
                if (!this.events[a]) {
                    this.events[a] = new j(a)
                }
                return this.events[a].requestAnimationFrame
            };
            l.cancelAnimationFrame = function (a) {
                if (!this.events[a]) {
                    this.events[a] = new j(a)
                }
                return this.events[a].cancelAnimationFrame
            };
            m.exports = new k()
        }, {
            "./RAFInterface": 433
        }
    ],
    435: [
        function (m, l, h) {
            var i = m("./RAFEmitter");
            var k = function k(a) {
                i.call(this, a)
            };
            var j = k.prototype = Object.create(i.prototype);
            j._subscribe = function () {
                return this
                    .executor
                    .subscribe(this, true)
            };
            l.exports = k
        }, {
            "./RAFEmitter": 432
        }
    ],
    436: [
        function (f, i, g) {
            var h = f("./RAFInterfaceController");
            i.exports = h.requestAnimationFrame("draw")
        }, {
            "./RAFInterfaceController": 434
        }
    ],
    437: [
        function (f, i, g) {
            var h = f("./RAFInterfaceController");
            i.exports = h.requestAnimationFrame("external")
        }, {
            "./RAFInterfaceController": 434
        }
    ],
    438: [
        function (f, i, g) {
            var h = f("./RAFInterfaceController");
            i.exports = h.requestAnimationFrame("update")
        }, {
            "./RAFInterfaceController": 434
        }
    ],
    439: [
        function (f, i, g) {
            var h = {
                ua: window.navigator.userAgent,
                platform: window.navigator.platform,
                vendor: window.navigator.vendor
            };
            i.exports = f("./parseUserAgent")(h)
        }, {
            "./parseUserAgent": 442
        }
    ],
    440: [
        function (d, g, f) {
            g.exports = {
                browser: {
                    safari: false,
                    chrome: false,
                    firefox: false,
                    ie: false,
                    opera: false,
                    android: false,
                    edge: false,
                    version: {
                        name: "",
                        major: 0,
                        minor: 0,
                        patch: 0,
                        documentMode: false
                    }
                },
                os: {
                    osx: false,
                    ios: false,
                    android: false,
                    windows: false,
                    linux: false,
                    fireos: false,
                    chromeos: false,
                    version: {
                        name: "",
                        major: 0,
                        minor: 0,
                        patch: 0
                    }
                }
            }
        }, {}
    ],
    441: [
        function (k, j, h) {
            j.exports = {
                browser: [
                    {
                        name: "edge",
                        userAgent: "Edge",
                        version: [
                            "rv", "Edge"
                        ],
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("Edge") > -1 || a.ua === "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                        }
                    }, {
                        name: "chrome",
                        userAgent: "Chrome"
                    }, {
                        name: "firefox",
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("Firefox") > -1 && a
                                .ua
                                .indexOf("Opera") === -1
                        },
                        version: "Firefox"
                    }, {
                        name: "android",
                        userAgent: "Android"
                    }, {
                        name: "safari",
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("Safari") > -1 && a
                                .vendor
                                .indexOf("Apple") > -1
                        },
                        version: "Version"
                    }, {
                        name: "ie",
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("IE") > -1 || a
                                .ua
                                .indexOf("Trident") > -1
                        },
                        version: [
                            "MSIE", "rv"
                        ],
                        parseDocumentMode: function g() {
                            var a = false;
                            if (document.documentMode) {
                                a = parseInt(document.documentMode, 10)
                            }
                            return a
                        }
                    }, {
                        name: "opera",
                        userAgent: "Opera",
                        version: ["Version", "Opera"]
                    }
                ],
                os: [
                    {
                        name: "windows",
                        test: function i(a) {
                            return a
                                .platform
                                .indexOf("Win") > -1
                        },
                        version: "Windows NT"
                    }, {
                        name: "osx",
                        userAgent: "Mac",
                        test: function i(a) {
                            return a
                                .platform
                                .indexOf("Mac") > -1
                        }
                    }, {
                        name: "ios",
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("iPhone") > -1 || a
                                .ua
                                .indexOf("iPad") > -1
                        },
                        version: ["iPhone OS", "CPU OS"]
                    }, {
                        name: "linux",
                        userAgent: "Linux",
                        test: function i(a) {
                            return a
                                .platform
                                .indexOf("Linux") > -1 && a
                                .ua
                                .indexOf("Android") === -1
                        }
                    }, {
                        name: "fireos",
                        test: function i(a) {
                            return a
                                .ua
                                .indexOf("Firefox") > -1 && a
                                .ua
                                .indexOf("Mobile") > -1
                        },
                        version: "rv"
                    }, {
                        name: "android",
                        userAgent: "Android"
                    }, {
                        name: "chromeos",
                        userAgent: "CrOS"
                    }
                ]
            }
        }, {}
    ],
    442: [
        function (r, s, p) {
            var q = r("./defaults");
            var m = r("./dictionary");
            function n(a) {
                return new RegExp(a + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")
            }
            function o(g, a) {
                if (typeof g.parseVersion === "function") {
                    return g.parseVersion(a)
                } else {
                    var d = g.version || g.userAgent;
                    if (typeof d === "string") {
                        d = [d]
                    }
                    var f = d.length;
                    var c;
                    for (var b = 0; b < f; b++) {
                        c = a.match(n(d[b]));
                        if (c && c.length > 1) {
                            return c[1].replace(/_/g, ".")
                        }
                    }
                }
            }
            function k(a, d, g) {
                var h = a.length;
                var f;
                var c;
                for (var i = 0; i < h; i++) {
                    if (typeof a[i].test === "function") {
                        if (a[i].test(g) === true) {
                            f = a[i].name
                        }
                    } else {
                        if (g.ua.indexOf(a[i].userAgent) > -1) {
                            f = a[i].name
                        }
                    }
                    if (f) {
                        d[f] = true;
                        c = o(a[i], g.ua);
                        if (typeof c === "string") {
                            var b = c.split(".");
                            d.version.name = c;
                            if (b && b.length > 0) {
                                d.version.major = parseInt(b[0] || 0);
                                d.version.minor = parseInt(b[1] || 0);
                                d.version.patch = parseInt(b[2] || 0)
                            }
                        } else {
                            if (f === "edge") {
                                d.version.name = "12.0.0";
                                d.version.major = "12";
                                d.version.minor = "0";
                                d.version.patch = "0"
                            }
                        }
                        if (typeof a[i].parseDocumentMode === "function") {
                            d.version.documentMode = a[i].parseDocumentMode()
                        }
                        return d
                    }
                }
                return d
            }
            function l(a) {
                var b = {};
                b.browser = k(m.browser, q.browser, a);
                b.os = k(m.os, q.os, a);
                return b
            }
            s.exports = l
        }, {
            "./defaults": 440,
            "./dictionary": 441
        }
    ],
    443: [
        function (d, g, f) {
            arguments[4][197][0].apply(f, arguments)
        }, {
            dup: 197
        }
    ],
    444: [
        function (v, w, s) {
            v("@marcom/ac-polyfills/Function/prototype.bind");
            v("@marcom/ac-polyfills/Object/keys");
            v("@marcom/ac-polyfills/Object/create");
            var m = v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var p = v("@marcom/ac-dom-events/utils/addEventListener");
            var q = v("@marcom/ac-feature/mediaQueriesAvailable");
            var u = "viewport-emitter";
            var o = "::before";
            var t = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolutio" +
                    "n: 1.5dppx), screen and (min-resolution: 144dpi)";
            function n(a) {
                m.call(this);
                this._initializeElement(a);
                if (q()) {
                    this._updateViewport = this
                        ._updateViewport
                        .bind(this);
                    p(window, "resize", this._updateViewport);
                    p(window, "orientationchange", this._updateViewport);
                    this._retinaQuery = window.matchMedia(t);
                    this._updateRetina();
                    if (this._retinaQuery.addListener) {
                        this._updateRetina = this
                            ._updateRetina
                            .bind(this);
                        this
                            ._retinaQuery
                            .addListener(this._updateRetina)
                    }
                }
                this._updateViewport()
            }
            var r = n.prototype = Object.create(m.prototype);
            r.viewport = false;
            r.retina = false;
            r._initializeElement = function (b) {
                var a;
                b = b || u;
                a = document.getElementById(b);
                if (!a) {
                    a = document.createElement("div");
                    a.id = b;
                    a = document
                        .body
                        .appendChild(a)
                }
                this._el = a
            };
            r._getElementContent = function () {
                var a;
                if ("currentStyle" in this._el) {
                    a = this._el.currentStyle["x-content"]
                } else {
                    this._invalidateStyles();
                    a = window
                        .getComputedStyle(this._el, o)
                        .content
                }
                if (a) {
                    a = a.replace(/["']/g, "")
                }
                if (a) {
                    return a
                }
                return false
            };
            r._updateViewport = function () {
                var a = this.viewport;
                var c;
                var b;
                this.viewport = this._getElementContent();
                if (this.viewport) {
                    this.viewport = this
                        .viewport
                        .split(":")
                        .pop()
                }
                if (a && this.viewport !== a) {
                    b = {
                        from: a,
                        to: this.viewport
                    };
                    this.trigger("change", b);
                    this.trigger("from:" + a, b);
                    this.trigger("to:" + this.viewport, b)
                }
            };
            r._updateRetina = function (a) {
                var b = this.retina;
                this.retina = this._retinaQuery.matches;
                if (b !== this.retina) {
                    this.trigger("retinachange", {
                        from: b,
                        to: this.retina
                    })
                }
            };
            r._invalidateStyles = function () {
                document.documentElement.clientWidth;
                this._el.innerHTML = this._el.innerHTML === " "
                    ? " "
                    : " ";
                document.documentElement.clientWidth
            };
            w.exports = n
        }, {
            "@marcom/ac-dom-events/utils/addEventListener": 443,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-feature/mediaQueriesAvailable": 171,
            "@marcom/ac-polyfills/Function/prototype.bind": undefined,
            "@marcom/ac-polyfills/Object/create": undefined,
            "@marcom/ac-polyfills/Object/keys": undefined
        }
    ],
    445: [
        function (i, h, f) {
            var g = i("./ViewportEmitter");
            h.exports = new g()
        }, {
            "./ViewportEmitter": 444
        }
    ],
    446: [
        function (ah, ao, L) {
            var ai = {
                create: ah("gl-mat4/create"),
                invert: ah("gl-mat4/invert"),
                clone: ah("gl-mat4/clone"),
                transpose: ah("gl-mat4/transpose")
            };
            var ar = {
                create: ah("gl-vec3/create"),
                dot: ah("gl-vec3/dot"),
                normalize: ah("gl-vec3/normalize"),
                length: ah("gl-vec3/length"),
                cross: ah("gl-vec3/cross"),
                fromValues: ah("gl-vec3/fromValues")
            };
            var at = {
                create: ah("gl-vec4/create"),
                transformMat4: ah("gl-vec4/transformMat4"),
                fromValues: ah("gl-vec4/fromValues")
            };
            var an = Math.PI / 180;
            var ap = 180 / Math.PI;
            var Q = 0,
                ae = 0,
                U = 1,
                K = 1,
                Y = 2,
                ac = 3;
            var aj = 4,
                M = 4,
                ak = 5,
                O = 5,
                al = 6,
                am = 7;
            var S = 8,
                W = 9,
                X = 10,
                aa = 11;
            var N = 12,
                P = 12,
                R = 13,
                T = 13,
                V = 14,
                Z = 15;
            var aq = function aq(d, f) {
                f = f || false;
                var z = ai.clone(d);
                var k = ar.create();
                var t = ar.create();
                var n = ar.create();
                var i = at.create();
                var p = at.create();
                var o = ar.create();
                for (var x = 0; x < 16; x++) {
                    z[x] /= z[Z]
                }
                var b = ai.clone(z);
                b[ac] = 0;
                b[am] = 0;
                b[aa] = 0;
                b[Z] = 1;
                var w = z[3],
                    m = z[7],
                    j = z[11],
                    r = z[12],
                    s = z[13],
                    u = z[14],
                    v = z[15];
                var g = at.create();
                if (!ab(z[ac]) || !ab(z[am]) || !ab(z[aa])) {
                    g[0] = z[ac];
                    g[1] = z[am];
                    g[2] = z[aa];
                    g[3] = z[Z];
                    var y = ai.invert(ai.create(), b);
                    var h = ai.transpose(ai.create(), y);
                    i = at.transformMat4(i, g, h)
                } else {
                    i = at.fromValues(0, 0, 0, 1)
                }
                k[0] = r;
                k[1] = s;
                k[2] = u;
                var l = [
                    ar.create(),
                    ar.create(),
                    ar.create()
                ];
                l[0][0] = z[0];
                l[0][1] = z[1];
                l[0][2] = z[2];
                l[1][0] = z[4];
                l[1][1] = z[5];
                l[1][2] = z[6];
                l[2][0] = z[8];
                l[2][1] = z[9];
                l[2][2] = z[10];
                t[0] = ar.length(l[0]);
                ar.normalize(l[0], l[0]);
                n[0] = ar.dot(l[0], l[1]);
                l[1] = af(l[1], l[0], 1, -n[0]);
                t[1] = ar.length(l[1]);
                ar.normalize(l[1], l[1]);
                n[0] /= t[1];
                n[1] = ar.dot(l[0], l[2]);
                l[2] = af(l[2], l[0], 1, -n[1]);
                n[2] = ar.dot(l[1], l[2]);
                l[2] = af(l[2], l[1], 1, -n[2]);
                t[2] = ar.length(l[2]);
                ar.normalize(l[2], l[2]);
                n[1] /= t[2];
                n[2] /= t[2];
                var a = ar.cross(ar.create(), l[1], l[2]);
                if (ar.dot(l[0], a) < 0) {
                    for (x = 0; x < 3; x++) {
                        t[x] *= -1;
                        l[x][0] *= -1;
                        l[x][1] *= -1;
                        l[x][2] *= -1
                    }
                }
                p[0] = 0.5 * Math.sqrt(Math.max(1 + l[0][0] - l[1][1] - l[2][2], 0));
                p[1] = 0.5 * Math.sqrt(Math.max(1 - l[0][0] + l[1][1] - l[2][2], 0));
                p[2] = 0.5 * Math.sqrt(Math.max(1 - l[0][0] - l[1][1] + l[2][2], 0));
                p[3] = 0.5 * Math.sqrt(Math.max(1 + l[0][0] + l[1][1] + l[2][2], 0));
                if (l[2][1] > l[1][2]) {
                    p[0] = -p[0]
                }
                if (l[0][2] > l[2][0]) {
                    p[1] = -p[1]
                }
                if (l[1][0] > l[0][1]) {
                    p[2] = -p[2]
                }
                var q = at.fromValues(p[0], p[1], p[2], 2 * Math.acos(p[3]));
                var c = ad(p);
                if (f) {
                    n[0] = Math.round(n[0] * ap * 100) / 100;
                    n[1] = Math.round(n[1] * ap * 100) / 100;
                    n[2] = Math.round(n[2] * ap * 100) / 100;
                    c[0] = Math.round(c[0] * ap * 100) / 100;
                    c[1] = Math.round(c[1] * ap * 100) / 100;
                    c[2] = Math.round(c[2] * ap * 100) / 100;
                    q[3] = Math.round(q[3] * ap * 100) / 100
                }
                return {
                    translation: k,
                    scale: t,
                    skew: n,
                    perspective: i,
                    quaternion: p,
                    eulerRotation: c,
                    axisAngle: q
                }
            };
            var af = function af(a, c, d, f) {
                var b = ar.create();
                b[0] = d * a[0] + f * c[0];
                b[1] = d * a[1] + f * c[1];
                b[2] = d * a[2] + f * c[2];
                return b
            };
            var ad = function ad(k) {
                var g = k[3] * k[3];
                var h = k[0] * k[0];
                var i = k[1] * k[1];
                var j = k[2] * k[2];
                var a = h + i + j + g;
                var f = k[0] * k[1] + k[2] * k[3];
                var b,
                    c,
                    d;
                if (f > 0.499 * a) {
                    c = 2 * Math.atan2(k[0], k[3]);
                    d = Math.PI / 2;
                    b = 0;
                    return ar.fromValues(b, c, d)
                }
                if (f < -0.499 * a) {
                    c = -2 * Math.atan2(k[0], k[3]);
                    d = -Math.PI / 2;
                    b = 0;
                    return ar.fromValues(b, c, d)
                }
                c = Math.atan2(2 * k[1] * k[3] - 2 * k[0] * k[2], h - i - j + g);
                d = Math.asin(2 * f / a);
                b = Math.atan2(2 * k[0] * k[3] - 2 * k[1] * k[2], -h + i - j + g);
                return ar.fromValues(b, c, d)
            };
            var ab = function ab(a) {
                return Math.abs(a) < 0.0001
            };
            var ag = function ag(f) {
                var a = String(getComputedStyle(f).transform).trim();
                var b = ai.create();
                if (a === "none") {
                    return b
                }
                var d = a.slice(0, a.indexOf("(")),
                    c,
                    g;
                if (d === "matrix3d") {
                    c = a
                        .slice(9, -1)
                        .split(",");
                    for (g = 0; g < c.length; g++) {
                        b[g] = parseFloat(c[g])
                    }
                } else {
                    if (d === "matrix") {
                        c = a
                            .slice(7, -1)
                            .split(",");
                        for (g = c.length; g--;) {
                            c[g] = parseFloat(c[g])
                        }
                        b[Q] = c[0];
                        b[U] = c[1];
                        b[N] = c[4];
                        b[aj] = c[2];
                        b[ak] = c[3];
                        b[R] = c[5]
                    } else {
                        throw new TypeError("Invalid Matrix Value")
                    }
                }
                return b
            };
            ao.exports = function (c, a) {
                var b = ag(c);
                return aq(b, a)
            }
        }, {
            "gl-mat4/clone": 447,
            "gl-mat4/create": 448,
            "gl-mat4/invert": 449,
            "gl-mat4/transpose": 450,
            "gl-vec3/create": 451,
            "gl-vec3/cross": 452,
            "gl-vec3/dot": 453,
            "gl-vec3/fromValues": 454,
            "gl-vec3/length": 455,
            "gl-vec3/normalize": 456,
            "gl-vec4/create": 457,
            "gl-vec4/fromValues": 458,
            "gl-vec4/transformMat4": 459
        }
    ],
    447: [
        function (d, g, f) {
            arguments[4][76][0].apply(f, arguments)
        }, {
            dup: 76
        }
    ],
    448: [
        function (d, g, f) {
            arguments[4][77][0].apply(f, arguments)
        }, {
            dup: 77
        }
    ],
    449: [
        function (d, g, f) {
            arguments[4][80][0].apply(f, arguments)
        }, {
            dup: 80
        }
    ],
    450: [
        function (d, g, f) {
            arguments[4][88][0].apply(f, arguments)
        }, {
            dup: 88
        }
    ],
    451: [
        function (d, g, f) {
            arguments[4][89][0].apply(f, arguments)
        }, {
            dup: 89
        }
    ],
    452: [
        function (d, g, f) {
            arguments[4][90][0].apply(f, arguments)
        }, {
            dup: 90
        }
    ],
    453: [
        function (d, g, f) {
            arguments[4][91][0].apply(f, arguments)
        }, {
            dup: 91
        }
    ],
    454: [
        function (d, g, f) {
            arguments[4][92][0].apply(f, arguments)
        }, {
            dup: 92
        }
    ],
    455: [
        function (d, g, f) {
            arguments[4][93][0].apply(f, arguments)
        }, {
            dup: 93
        }
    ],
    456: [
        function (d, g, f) {
            arguments[4][94][0].apply(f, arguments)
        }, {
            dup: 94
        }
    ],
    457: [
        function (d, g, f) {
            arguments[4][95][0].apply(f, arguments)
        }, {
            dup: 95
        }
    ],
    458: [
        function (d, g, f) {
            arguments[4][96][0].apply(f, arguments)
        }, {
            dup: 96
        }
    ],
    459: [
        function (d, g, f) {
            arguments[4][97][0].apply(f, arguments)
        }, {
            dup: 97
        }
    ],
    460: [
        function (I, N, w) {
            var A = function () {
                function a(d, b) {
                    for (var c = 0; c < b.length; c++) {
                        var f = b[c];
                        f.enumerable = f.enumerable || false;
                        f.configurable = true;
                        if ("value" in f) {
                            f.writable = true
                        }
                        Object.defineProperty(d, f.key, f)
                    }
                }
                return function (d, c, b) {
                    if (c) {
                        a(d.prototype, c)
                    }
                    if (b) {
                        a(d, b)
                    }
                    return d
                }
            }();
            var O = function x(c, f, g) {
                if (c === null) {
                    c = Function.prototype
                }
                var b = Object.getOwnPropertyDescriptor(c, f);
                if (b === undefined) {
                    var a = Object.getPrototypeOf(c);
                    if (a === null) {
                        return undefined
                    } else {
                        return x(a, f, g)
                    }
                } else {
                    if ("value" in b) {
                        return b.value
                    } else {
                        var d = b.get;
                        if (d === undefined) {
                            return undefined
                        }
                        return d.call(g)
                    }
                }
            };
            function L(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            function G(b, a) {
                if (!b) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }
                return a && (typeof a === "object" || typeof a === "function")
                    ? a
                    : b
            }
            function D(a, b) {
                if (typeof b !== "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof b)
                }
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (b) {
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(a, b)
                        : a.__proto__ = b
                }
            }
            var F = I("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var z = I("@marcom/sm-math-utils");
            var E = I("./Model/AnimSystemModel");
            var C = I("./Model/ElementMetricsLookup");
            var B = I("./Keyframes/AnimatedContentKeyframe");
            var J = I("./Keyframes/AnimatedContentKeyframeTrigger");
            var M = I("./Keyframes/AnimatedContentKeyframeEvent");
            var K = I("./Utils/BaseComponentShim");
            var H = I("./AnimatedContentController");
            var y = {
                create: I("@marcom/ac-raf-emitter/RAFEmitter"),
                update: I("@marcom/ac-raf-emitter/update"),
                draw: I("@marcom/ac-raf-emitter/draw")
            };
            var v = function (h) {
                D(a, h);
                function a(Q) {
                    L(this, a);
                    var u = G(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
                    if (Q instanceof HTMLElement) {
                        u.element = Q
                    } else {
                        if (arguments.length > 1) {
                            K.make(u, arguments)
                        } else {
                            throw new TypeError("Cannot invalid constructor. Attach anim systems to the containing elements.")
                        }
                    }
                    a.StaticInit();
                    u.isEnabled = true;
                    u.timelines = new E.Timeline();
                    u.oldValues = new E.Timeline();
                    u.metrics = new C();
                    u
                        .metrics
                        .add(u.element);
                    u.boundsMin = 0;
                    u.boundsMax = 0;
                    u.lastPosition = 0;
                    u.keyFrames = new E.KeyFrames(u.metrics.get(u.element), E.pageMetrics.windowHeight);
                    u.animatedContentControllers = [];
                    u.setupRAFEmitter();
                    u.setupAnimatedContent();
                    u.updateProgress(E.pageMetrics.scrollY);
                    u.gui = null;
                    if (a.GUI_CLASS && a.GUI_CLASS.IS_ENABLED) {
                        a
                            .GUI_CLASS
                            .REGISTER(u)
                    }
                    a
                        .systems
                        .push(u);
                    return u
                }
                A(a, [
                    {
                        key: "destroy",
                        value: function c() {
                            for (var u = 0, Q = this.animatedContentControllers.length; u < Q; u++) {
                                this
                                    .animatedContentControllers[u]
                                    .destroy()
                            }
                            this.timelines = null;
                            this.keyFrames = null;
                            this.oldValues = null;
                            O(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "setupAnimatedContent",
                        value: function f() {
                            var W = this;
                            var ab = [];
                            [B.DATA_ATTRIBUTE, J.DATA_ATTRIBUTE, M.DATA_ATTRIBUTE].forEach(function (P) {
                                for (var Q = 0; Q < 12; Q++) {
                                    ab.push(P + (Q === 0
                                        ? ""
                                        : "-" + (Q - 1)))
                                }
                            });
                            for (var X = 0; X < ab.length; X++) {
                                var Z = ab[X];
                                var u = this
                                    .element
                                    .querySelectorAll("[" + Z + "]");
                                for (var aa = 0; aa < u.length; aa++) {
                                    var Y = u[aa];
                                    var ac = this.getControllerForElement(Y);
                                    if (ac === null) {
                                        ac = new H(this, Y, this.animatedContentControllers.length);
                                        this
                                            .animatedContentControllers
                                            .push(ac)
                                    }
                                    ac.addKeyframe(Z)
                                }
                            }
                            y
                                .update(function () {
                                    for (var Q = 0, P = W.animatedContentControllers.length; Q < P; Q++) {
                                        W
                                            .animatedContentControllers[Q]
                                            .determineActiveKeyframes();
                                        W
                                            .animatedContentControllers[Q]
                                            .updateAnimationConstraints()
                                    }
                                    W.updateProgress(E.pageMetrics.scrollY);
                                    W.updateBounds();
                                    W.timelines.local = z.clamp(W.timelines.localUnclamped, W.boundsMin, W.boundsMax);
                                    W.trigger(E.EVENTS.ON_KEYFRAMES_CREATED, W);
                                    W._onScroll(E.pageMetrics.scrollY)
                                })
                        }
                    }, {
                        key: "updateBounds",
                        value: function m() {
                            if (this.animatedContentControllers.length === 0) {
                                this.boundsMin = 0;
                                this.boundsMax = 0.1;
                                return
                            }
                            var U = {
                                min: Number.POSITIVE_INFINITY,
                                max: Number.NEGATIVE_INFINITY
                            };
                            for (var T = 0, W = this.animatedContentControllers.length; T < W; T++) {
                                this
                                    .animatedContentControllers[T]
                                    .getBounds(U)
                            }
                            var u = this.convertTValueToScrollPosition(U.min);
                            var V = this.convertTValueToScrollPosition(U.max);
                            if (V - u < E.pageMetrics.windowHeight) {
                                U.min = this.convertScrollPositionToTValue(u - E.pageMetrics.windowHeight * 0.5);
                                U.max = this.convertScrollPositionToTValue(V + E.pageMetrics.windowHeight * 0.5)
                            } else {
                                U.min -= 0.001;
                                U.max += 0.001
                            }
                            this.boundsMin = U.min;
                            this.boundsMax = U.max;
                            this.lastPosition = z.lerp(Math.random(), this.boundsMin, this.boundsMax)
                        }
                    }, {
                        key: "_onBreakpointChange",
                        value: function d(u, S) {
                            for (var T = 0, U = this.animatedContentControllers.length; T < U; T++) {
                                this
                                    .animatedContentControllers[T]
                                    .determineActiveKeyframes()
                            }
                        }
                    }, {
                        key: "_onResizeDebounced",
                        value: function b(R) {
                            if (!this.isEnabled) {
                                return
                            }
                            this
                                .metrics
                                .refreshAll();
                            this.keyFrames = new E.KeyFrames(this.metrics.get(this.element), E.pageMetrics.windowHeight);
                            this.updateProgress(E.pageMetrics.scrollY);
                            if (!this.hasDuration()) {
                                return
                            }
                            for (var u = 0, S = this.animatedContentControllers.length; u < S; u++) {
                                this
                                    .animatedContentControllers[u]
                                    .updateAnimationConstraints()
                            }
                            this.updateBounds();
                            if (this.gui !== null) {
                                this
                                    .gui
                                    .onResizeDebounced()
                            }
                            if (R) {
                                this.timelines.local = this.timelines.localUnclamped = z.randFloat(this.boundsMin, this.boundsMax)
                            }
                            if (this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) {
                                this.oldValues.local = -Math.random();
                                this._onScroll(E.pageMetrics.scrollY)
                            }
                        }
                    }, {
                        key: "updateProgress",
                        value: function s(u) {
                            if (!this.hasDuration()) {
                                this.timelines.local = this.timelines.localUnclamped = 0;
                                return
                            }
                            this.timelines.localUnclamped = z.map(u, this.keyFrames.a, this.keyFrames.d, 0, 1)
                        }
                    }, {
                        key: "performTimelineDispatch",
                        value: function o() {
                            if (this.oldValues.local !== this.timelines.local) {
                                this.trigger(E.EVENTS.ON_UPDATE_T_LOCAL, this.timelines);
                                for (var u = 0, Q = this.animatedContentControllers.length; u < Q; u++) {
                                    this
                                        .animatedContentControllers[u]
                                        .onScrollUpdate(this.timelines)
                                }
                            }
                            this.oldValues.local = this.timelines.local
                        }
                    }, {
                        key: "_onScroll",
                        value: function q(U) {
                            if (!this.isEnabled) {
                                return false
                            }
                            this.updateProgress(U);
                            if (this.timelines.localUnclamped >= this.boundsMin && this.timelines.localUnclamped <= this.boundsMax) {
                                this.timelines.local = z.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax);
                                this.lastPosition = this.timelines.localUnclamped;
                                this.performTimelineDispatch();
                                this.requestDOMChange();
                                return
                            }
                            var T = this.lastPosition === this.boundsMin || this.lastPosition === this.boundsMax;
                            if (T) {
                                return
                            }
                            var u = this.lastPosition > this.boundsMin && this.lastPosition < this.boundsMax;
                            var S = this.timelines.localUnclamped < this.boundsMin || this.timelines.localUnclamped > this.boundsMax;
                            if (u && S) {
                                this.timelines.local = z.clamp(this.timelines.localUnclamped, this.boundsMin, this.boundsMax);
                                this.lastPosition = this.timelines.localUnclamped;
                                this.performTimelineDispatch();
                                this.requestDOMChange();
                                return
                            }
                            if (this.gui !== null) {}
                        }
                    }, {
                        key: "setupRAFEmitter",
                        value: function g() {
                            this._rafEmitter = new y.create();
                            this.onDOMRead = this
                                .onDOMRead
                                .bind(this);
                            this.onDOMWrite = this
                                .onDOMWrite
                                .bind(this);
                            this
                                ._rafEmitter
                                .on("update", this.onDOMRead);
                            this
                                ._rafEmitter
                                .on("draw", this.onDOMWrite)
                        }
                    }, {
                        key: "requestDOMChange",
                        value: function p() {
                            if (!this.isEnabled) {
                                return false
                            }
                            return this
                                ._rafEmitter
                                .run()
                        }
                    }, {
                        key: "onDOMRead",
                        value: function r() {
                            for (var u = 0, Q = this.animatedContentControllers.length; u < Q; u++) {
                                this
                                    .animatedContentControllers[u]
                                    .onDOMRead(this.timelines)
                            }
                        }
                    }, {
                        key: "onDOMWrite",
                        value: function n() {
                            for (var u = 0, Q = this.animatedContentControllers.length; u < Q; u++) {
                                this
                                    .animatedContentControllers[u]
                                    .onDOMWrite(this.timelines)
                            }
                            if (this.needsUpdate()) {
                                this.requestDOMChange()
                            }
                        }
                    }, {
                        key: "needsUpdate",
                        value: function t() {
                            for (var u = 0, Q = this.animatedContentControllers.length; u < Q; u++) {
                                if (this.animatedContentControllers[u].needsUpdate()) {
                                    return true
                                }
                            }
                            return false
                        }
                    }, {
                        key: "getControllerForElement",
                        value: function l(u) {
                            for (var R = 0, S = this.animatedContentControllers.length; R < S; R++) {
                                if (this.animatedContentControllers[R].element === u) {
                                    return this.animatedContentControllers[R]
                                }
                            }
                            return null
                        }
                    }, {
                        key: "convertScrollPositionToTValue",
                        value: function k(u) {
                            if (!this.hasDuration()) {
                                return 0
                            }
                            return z.map(u, this.keyFrames.a, this.keyFrames.d, 0, 1)
                        }
                    }, {
                        key: "convertTValueToScrollPosition",
                        value: function j(u) {
                            if (!this.hasDuration()) {
                                return 0
                            }
                            return z.map(u, 0, 1, this.keyFrames.a, this.keyFrames.d)
                        }
                    }, {
                        key: "hasDuration",
                        value: function i() {
                            return this.keyFrames.a !== this.keyFrames.d
                        }
                    }
                ]);
                return a
            }(F);
            v.GUI_CLASS = null;
            v.systems = [];
            v.onScroll = function () {
                E.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
                for (var a = 0, b = v.systems.length; a < b; a++) {
                    v
                        .systems[a]
                        ._onScroll(E.pageMetrics.scrollY)
                }
            };
            v.onResizedDebounced = function () {
                y
                    .update(function () {
                        var f = E.pageMetrics.breakpoint;
                        var h = E.getBreakpoint();
                        if (h !== f) {
                            E.DOCUMENT_ELEMENT_CLASSES = Array.from(document.documentElement.classList);
                            E.pageMetrics.breakpoint = h;
                            for (var g = 0, c = v.systems.length; g < c; g++) {
                                v
                                    .systems[g]
                                    ._onBreakpointChange(h, f)
                            }
                        }
                        var d = h !== f;
                        for (var b = 0, a = v.systems.length; b < a; b++) {
                            v
                                .systems[b]
                                ._onResizeDebounced(d)
                        }
                    })
            };
            v.INITIALIZED = false;
            v.StaticInit = function () {
                if (v.INITIALIZED) {
                    return
                }
                v.INITIALIZED = true;
                E.DOCUMENT_ELEMENT_CLASSES = Array.from(document.documentElement.classList);
                E.pageMetrics.windowHeight = window.innerHeight;
                E.pageMetrics.windowWidth = window.innerWidth;
                E.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
                E.pageMetrics.breakpoint = E.getBreakpoint();
                window.addEventListener("resize", function () {
                    E.pageMetrics.windowHeight = window.innerHeight;
                    E.pageMetrics.windowWidth = window.innerWidth;
                    E.pageMetrics.scrollY = window.scrollY || window.pageYOffset;
                    window.clearTimeout(E.RESIZE_TIMEOUT);
                    E.RESIZE_TIMEOUT = window.setTimeout(v.onResizedDebounced, 250)
                });
                window.addEventListener("scroll", v.onScroll);
                try {
                    var a = I("@marcom/ac-jetpack-lib/utils/Page");
                    a.on(a.DEEP_REFRESH_ALL_METRICS, v.onResizedDebounced)
                } catch (b) {}
            };
            N.exports = v
        }, {
            "./AnimatedContentController": 461,
            "./Keyframes/AnimatedContentKeyframe": 462,
            "./Keyframes/AnimatedContentKeyframeEvent": 463,
            "./Keyframes/AnimatedContentKeyframeTrigger": 464,
            "./Model/AnimSystemModel": 465,
            "./Model/ElementMetricsLookup": 467,
            "./Utils/BaseComponentShim": 472,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-jetpack-lib/utils/Page": 305,
            "@marcom/ac-raf-emitter/RAFEmitter": 432,
            "@marcom/ac-raf-emitter/draw": 436,
            "@marcom/ac-raf-emitter/update": 438,
            "@marcom/sm-math-utils": 473
        }
    ],
    461: [
        function (z, B, y) {
            var v = z("./Model/AnimSystemModel");
            var p = z("./Keyframes/AnimatedContentKeyframe");
            var C = z("./Keyframes/AnimatedContentKeyframeTrigger");
            var r = z("./Keyframes/AnimatedContentKeyframeEvent");
            var w = z("./Parsing/ExpressionParser");
            var x = z("./Parsing/TimeParser");
            var s = z("./Model/UUID");
            var q = z("@marcom/decompose-css-transform");
            var u = {
                update: z("@marcom/ac-raf-emitter/update"),
                external: z("@marcom/ac-raf-emitter/external"),
                draw: z("@marcom/ac-raf-emitter/draw")
            };
            function t(b, a) {
                this.uuid = s();
                this.animSystem = b;
                this.element = a;
                this.element._animController = this;
                this.element._animationInfo = {
                    x: new v.TargetValue(0, 0.05, false),
                    y: new v.TargetValue(0, 0.05, false),
                    rotation: new v.TargetValue(0, 0.05, false),
                    scale: new v.TargetValue(0, 0.05, false),
                    scaleX: new v.TargetValue(0, 0.05, false),
                    scaleY: new v.TargetValue(0, 0.05, false),
                    opacity: new v.TargetValue(0, 0.05, false),
                    targetStyles: {},
                    targetClasses: {
                        add: [],
                        remove: []
                    }
                };
                this.eventObject = new v.EventObject(this, new p(this, "--fake--"));
                this.needsStyleUpdate = false;
                this.needsClassUpdate = false;
                this.elementMetrics = this
                    .animSystem
                    .metrics
                    .add(this.element);
                this._parentElementMetrics = null;
                this.expressionParser = new w(this);
                this.timeParser = new x(this);
                this.attributes = [];
                this.keyframes = {};
                this._allKeyframes = [];
                this._activeKeyframes = [];
                this.keyframesRequiringDispatch = [];
                this.updateCachedValuesFromElement();
                this.onKeyframesCreated = this
                    .onKeyframesCreated
                    .bind(this);
                this
                    .animSystem
                    .on(v.EVENTS.ON_KEYFRAMES_CREATED, this.onKeyframesCreated)
            }
            t.prototype.constructor = t;
            t.prototype.destroy = function () {
                this.element._animController = null;
                this.element._animationInfo = null;
                this.eventObject.controller = null;
                this.eventObject.element = null;
                this.eventObject.keyframe = null;
                this.eventObject.animationInfo = null;
                this
                    .elementMetrics
                    .destroy();
                this
                    .animSystem
                    .off(v.EVENTS.ON_KEYFRAMES_CREATED, this.onKeyframesCreated);
                this.animSystem = null;
                for (var a = 0; a < this._allKeyframes.length; a++) {
                    this
                        ._allKeyframes[a]
                        .destroy()
                }
                this._allKeyframes = null;
                this._activeKeyframes = null;
                this.attributes = null;
                this.keyframes = null;
                this
                    .expressionParser
                    .destroy();
                this.expressionParser = null;
                this
                    .timeParser
                    .destroy();
                this.timeParser = null
            };
            t.prototype.updateCachedValuesFromElement = function () {
                var a = getComputedStyle(this.element);
                var b = q(this.element, true);
                this.element._animationInfo.x.initialValue = this.element._animationInfo.x.target = this.element._animationInfo.x.current = b.translation[0];
                this.element._animationInfo.y.initialValue = this.element._animationInfo.y.target = this.element._animationInfo.y.current = b.translation[1];
                this.element._animationInfo.rotation.initialValue = this.element._animationInfo.rotation.target = this.element._animationInfo.rotation.current = b.eulerRotation[2];
                this.element._animationInfo.scale.initialValue = this.element._animationInfo.scale.target = this.element._animationInfo.scale.current = b.scale[0];
                this.element._animationInfo.scaleX.initialValue = this.element._animationInfo.scaleX.target = this.element._animationInfo.scaleX.current = b.scale[0];
                this.element._animationInfo.scaleY.initialValue = this.element._animationInfo.scaleY.target = this.element._animationInfo.scaleY.current = b.scale[1];
                this.element._animationInfo.opacity.initialValue = this.element._animationInfo.opacity.target = this.element._animationInfo.opacity.current = parseFloat(a.opacity)
            };
            t.prototype.addKeyframe = function (b) {
                var a = null;
                if (b.indexOf(p.DATA_ATTRIBUTE) !== -1) {
                    a = new p(this, b)
                } else {
                    if (b.indexOf(r.DATA_ATTRIBUTE) !== -1) {
                        a = new r(this, b)
                    } else {
                        if (b.indexOf(C.DATA_ATTRIBUTE) !== -1) {
                            a = new C(this, b)
                        }
                    }
                }
                if (!a) {
                    throw new Error("AnimSystem Cannot create keyframe for type `" + b + "`")
                }
                a.parseOptions(a.jsonProps);
                a.id = this._allKeyframes.length;
                this
                    ._allKeyframes
                    .push(a)
            };
            t.prototype.needsUpdate = function () {
                for (var c = 0, f = this.attributes.length; c < f; c++) {
                    var d = this.attributes[c];
                    var b = this.element._animationInfo[d];
                    var a = Math.abs(b.current - b.target);
                    if (a > b.epsilon) {
                        return true
                    }
                }
                return false
            };
            t.prototype.onScrollUpdate = function (b) {
                for (var c = 0, g = this.attributes.length; c < g; c++) {
                    var f = this.attributes[c];
                    var a = this.keyframes[this.attributes[c]];
                    if (a.length === 1) {
                        a[0].onScrollUpdate(b.local);
                        continue
                    }
                    var d = this.getNearestKeyframeForAttribute(b.local, f);
                    if (d) {
                        d.onScrollUpdate(b.local)
                    }
                }
            };
            t.prototype.onKeyframesCreated = function (d) {
                for (var a = 0, f = this.attributes.length; a < f; a++) {
                    var c = this.attributes[a];
                    var b = this.getNearestKeyframeForAttribute(d.timelines.local, c);
                    b.onScrollUpdate(d.timelines.local);
                    if (this.element._animationInfo[c].snapAtCreation) {
                        b.reconcile(c)
                    }
                }
            };
            t.prototype.determineActiveKeyframes = function () {
                var a = this;
                var h = this._activeKeyframes;
                var c = this.attributes;
                this._activeKeyframes = [];
                this.attributes = [];
                this.keyframes = {};
                for (var f = 0; f < this._allKeyframes.length; f++) {
                    var g = this._allKeyframes[f];
                    if (!g.setEnabled()) {
                        continue
                    }
                    this
                        ._activeKeyframes
                        .push(g);
                    for (var b in g.animValues) {
                        this.keyframes[b] = this.keyframes[b] || [];
                        this
                            .keyframes[b]
                            .push(g);
                        if (this.attributes.indexOf(b) === -1) {
                            this
                                .attributes
                                .push(b)
                        }
                    }
                }
                var d = h.filter(function (j) {
                    return a
                        ._activeKeyframes
                        .indexOf(j) === -1
                });
                if (d.length === 0) {
                    return
                }
                var i = c.filter(function (j) {
                    return a
                        .attributes
                        .indexOf(j) === -1
                });
                if (i.length == 0) {
                    return
                }
                u
                    .external(function () {
                        var G = [
                            "x",
                            "y",
                            "scale",
                            "scaleX",
                            "scaleY",
                            "rotation"
                        ];
                        var k = i.filter(function (D) {
                            return G.indexOf(D) !== -1
                        });
                        if (k.length !== -1) {
                            a
                                .element
                                .style
                                .removeProperty("transform")
                        }
                        for (var o = 0, m = i.length; o < m; ++o) {
                            var l = i[o];
                            var n = a.element._animationInfo[l];
                            n.current = n.target = n.initialValue;
                            if (l === "opacity") {
                                a
                                    .element
                                    .style
                                    .removeProperty("opacity")
                            }
                        }
                        for (var H = 0, j = d.length; H < j; ++H) {
                            var I = d[H];
                            if (!(I instanceof C)) {
                                continue
                            }
                            I._unapply()
                        }
                    })
            };
            t.prototype.onDOMRead = function (a) {
                for (var b = 0, f = this.attributes.length; b < f; b++) {
                    var d = this.attributes[b];
                    var c = this.getNearestKeyframeForAttribute(a.local, d);
                    if (c) {
                        c.onDOMRead(d)
                    }
                }
            };
            t.prototype.onDOMWrite = function (a) {
                var i = this.element._animationInfo;
                var b = "";
                if (typeof this.keyframes.rotation !== "undefined") {
                    b += "rotate(" + i.rotation.current + "deg) "
                }
                if (typeof this.keyframes.scale !== "undefined") {
                    b += "scale(" + i.scale.current + "," + i.scale.current + ") "
                } else {
                    var f = typeof this.keyframes.scaleX !== "undefined";
                    var g = typeof this.keyframes.scaleY !== "undefined";
                    if (f || g) {
                        b += "scale(" + i.scaleX.current + "," + i.scaleY.current + ") "
                    }
                }
                if (typeof this.keyframes.y !== "undefined" || typeof this.keyframes.x !== "undefined") {
                    b += "translate(" + i.x.current + "px," + i.y.current + "px)"
                }
                if (b !== "") {
                    this.element.style.transform = b
                }
                if (typeof this.keyframes.opacity !== "undefined") {
                    this.element.style.opacity = i.opacity.current
                }
                if (this.needsStyleUpdate) {
                    for (var c in this.element._animationInfo.targetStyles) {
                        if (this.element._animationInfo.targetStyles[c] !== null) {
                            this.element.style[c] = this.element._animationInfo.targetStyles[c]
                        }
                        this.element._animationInfo.targetStyles[c] = null
                    }
                    this.needsStyleUpdate = false
                }
                if (this.needsClassUpdate) {
                    if (this.element._animationInfo.targetClasses.add.length > 0) {
                        this
                            .element
                            .classList
                            .add
                            .apply(this.element.classList, this.element._animationInfo.targetClasses.add)
                    }
                    if (this.element._animationInfo.targetClasses.remove.length > 0) {
                        this
                            .element
                            .classList
                            .remove
                            .apply(this.element.classList, this.element._animationInfo.targetClasses.remove)
                    }
                    this.element._animationInfo.targetClasses.add.length = 0;
                    this.element._animationInfo.targetClasses.remove.length = 0;
                    this.needsClassUpdate = false
                }
                if (this.keyframesRequiringDispatch.length === 0) {
                    return
                }
                for (var j = 0, h = this.keyframesRequiringDispatch.length; j < h; j++) {
                    var d = this.keyframesRequiringDispatch[j];
                    d.needsEventDispatch = false;
                    this.eventObject.keyframe = d;
                    this.eventObject.event = d.event;
                    this
                        .animSystem
                        .trigger(d.event, this.eventObject)
                }
                this.keyframesRequiringDispatch.length = 0
            };
            t.prototype.updateAnimationConstraints = function () {
                var h = this;
                for (var k = 0, i = this._activeKeyframes.length; k < i; k++) {
                    this
                        ._activeKeyframes[k]
                        .updateAnimationConstraints(this._activeKeyframes[k].jsonProps)
                }
                this
                    .attributes
                    .forEach(function (l) {
                        if (h.keyframes[l].length === 1) {
                            return
                        }
                        h
                            .keyframes[l]
                            .sort(v.KeyframeComparison)
                    });
                for (var f = 0, c = this.attributes.length; f < c; f++) {
                    var b = this.attributes[f];
                    var g = this.keyframes[b];
                    var j = g[0];
                    if (j.keyframeType > v.KeyframeTypes.InterpolationForward) {
                        continue
                    }
                    for (var a = 0; a < g.length; a++) {
                        var d = g[a];
                        if (d.jsonProps[b][0] === null) {
                            if (a === 0) {
                                throw new RangeError("AnimSystem - earliest keyframe cannot defer it's beginning value! " + b + ":[null," + d.jsonProps[b][1] + "]")
                            }
                            d.animValues[b][0] = g[a - 1].animValues[b][1]
                        }
                        if (d.jsonProps[b][1] === null) {
                            if (a === c - 1) {
                                throw new RangeError("AnimSystem - last keyframe cannot defer it's end value! " + b + ":[" + d.jsonProps[b][0] + ",null]")
                            }
                            d.animValues[b][1] = g[a + 1].animValues[b][0]
                        }
                    }
                }
            };
            t.prototype.getBounds = function (b) {
                for (var c = 0, g = this.attributes.length; c < g; c++) {
                    var a = this.keyframes[this.attributes[c]];
                    for (var f = 0; f < a.length; f++) {
                        var d = a[f];
                        b.min = Math.min(d.start, b.min);
                        b.max = Math.max(d.end, b.max)
                    }
                }
            };
            t.prototype.getNearestKeyframeForAttribute = function (b, a) {
                var i = null;
                var d = Number.POSITIVE_INFINITY;
                var g = this.keyframes[a];
                var h = g.length;
                if (h === 0) {
                    return null
                }
                if (h === 1) {
                    return g[0]
                }
                for (var j = 0; j < h; j++) {
                    var f = g[j];
                    if (f.isInRange(b)) {
                        i = f;
                        break
                    }
                    var c = Math.min(Math.abs(b - f.start), Math.abs(b - f.end));
                    if (c < d) {
                        d = c;
                        i = f
                    }
                }
                return i
            };
            t.prototype.getAllKeyframesForAttribute = function (a) {
                return this.keyframes[a]
            };
            t.prototype.updateAnimation = function (a, b) {
                var c = this;
                a.parseOptions(b);
                a.updateAnimationConstraints();
                this
                    .animSystem
                    .updateBounds();
                this
                    .animSystem
                    ._onScroll(v.pageMetrics.scrollY);
                this.onScrollUpdate(this.animSystem.timelines);
                this
                    .animSystem
                    .requestDOMChange();
                u.update(function () {
                    c
                        .animSystem
                        .trigger(v.EVENTS.ON_KEYFRAME_UPDATED, a)
                })
            };
            Object.defineProperty(t.prototype, "parentElementMetrics", {
                get: function A() {
                    if (this._parentElementMetrics === null) {
                        this._parentElementMetrics = this
                            .animSystem
                            .metrics
                            .add(this.element.parentElement)
                    }
                    return this._parentElementMetrics
                }
            });
            B.exports = t
        }, {
            "./Keyframes/AnimatedContentKeyframe": 462,
            "./Keyframes/AnimatedContentKeyframeEvent": 463,
            "./Keyframes/AnimatedContentKeyframeTrigger": 464,
            "./Model/AnimSystemModel": 465,
            "./Model/UUID": 468,
            "./Parsing/ExpressionParser": 469,
            "./Parsing/TimeParser": 471,
            "@marcom/ac-raf-emitter/draw": 436,
            "@marcom/ac-raf-emitter/external": 437,
            "@marcom/ac-raf-emitter/update": 438,
            "@marcom/decompose-css-transform": 446
        }
    ],
    462: [
        function (m, l, o) {
            var j = m("../Model/AnimSystemModel");
            var i = m("@marcom/sm-math-utils");
            var k = m("../Model/EasingFunctions");
            function n(c, b) {
                this.controller = c;
                this.relativeTo = c.element;
                this.relativeToQS = "";
                this.attributeName = b;
                var a = this
                    .controller
                    .element
                    .getAttribute(this.attributeName);
                this.jsonProps = a === null
                    ? {}
                    : JSON.parse(a);
                this.ease = j.KeyframeDefaults.ease;
                this.easeFunctionString = j.KeyframeDefaults.easeFunctionString;
                this.easeFunction = k[this.easeFunctionString];
                this.start = 0;
                this.end = 0;
                this.localT = 0;
                this.id = 0;
                this.event = "";
                this.needsEventDispatch = false;
                this.snapAtCreation = false;
                this.isEnabled = false;
                this.animValues = {};
                this.breakpointMask = "SMLX";
                this.disabledWhen = "";
                this.keyframeType = j.KeyframeTypes.Interpolation;
                this.hold = false
            }
            n.prototype.constructor = n;
            n.prototype.destroy = function () {
                this.controller = null;
                this.jsonProps = null;
                this.easeFunction = null;
                this.animValues = null
            };
            n.prototype.parseOptions = function (c) {
                if (c.relativeTo === "") {
                    this.relativeTo = this.controller.element
                } else {
                    if (c.relativeTo) {
                        this.relativeToQS = c.relativeTo;
                        this.relativeTo = this
                            .controller
                            .animSystem
                            .element
                            .querySelector(c.relativeTo);
                        if (this.relativeTo === null) {
                            console.warn("AnimatedContentKeyframe for", this, "failed to find 'relativeTo:" + c.relativeTo + "' setting to this.element");
                            this.relativeTo = this.controller.element
                        }
                        this
                            .controller
                            .animSystem
                            .metrics
                            .add(this.relativeTo)
                    }
                }
                if (c.ease) {
                    this.ease = parseFloat(c.ease)
                } else {
                    c.ease = this.ease
                }
                if (c.snapAtCreation) {
                    this.snapAtCreation = c.snapAtCreation
                } else {
                    c.snapAtCreation = this.snapAtCreation
                }
                if (c.easeFunction) {
                    this.easeFunction = c.easeFunction
                } else {
                    c.easeFunction = this.easeFunctionString
                }
                if (c.breakpointMask) {
                    this.breakpointMask = c.breakpointMask
                } else {
                    c.breakpointMask = this.breakpointMask
                }
                if (c.disabledWhen) {
                    this.disabledWhen = c.disabledWhen
                } else {
                    c.disabledWhen = this.disabledWhen
                }
                if (c.hold) {
                    this.hold = c.hold
                } else {
                    c.hold = this.hold
                }
                if (!k.hasOwnProperty(c.easeFunction)) {
                    console.error("AnimatedContentKeyframe parseOptions cannot find EasingFunction named '" + c.easingFunction + "'")
                }
                this.easeFunction = k[c.easeFunction];
                for (var b in c) {
                    var a = c[b];
                    if (j.KeyframeJSONReservedWords.indexOf(b) !== -1) {
                        continue
                    }
                    if (!Array.isArray(a)) {
                        continue
                    }
                    this.animValues[b] = this
                        .controller
                        .expressionParser
                        .parse(this, a);
                    if (this.controller.element._animationInfo[b] === undefined) {
                        var d = this.snapAtCreation
                            ? this.animValues[b][0]
                            : 0;
                        this.controller.element._animationInfo[b] = new j.TargetValue(d, 0.05, this.snapAtCreation)
                    }
                }
                this.keyframeType = this.hold
                    ? j.KeyframeTypes.InterpolationForward
                    : j.KeyframeTypes.Interpolation;
                if (c.event) {
                    this.event = c.event
                }
            };
            n.prototype.onScrollUpdate = function (a) {
                if (this.start === this.end || a > this.end) {
                    this.localT = 1;
                    return
                }
                var b = this.hold
                    ? this.localT
                    : 0;
                this.localT = i.mapClamp(a, this.start, this.end, b, 1)
            };
            n.prototype.reconcile = function (c) {
                var b = this.easeFunction(this.localT);
                var a = this.animValues[c];
                var d = this.controller.element._animationInfo[c];
                d.target = a[0] + b * (a[1] - a[0]);
                if (d.current !== d.target) {
                    d.current = d.target;
                    if (!this.needsEventDispatch) {
                        this.needsEventDispatch = true;
                        this
                            .controller
                            .keyframesRequiringDispatch
                            .push(this)
                    }
                }
            };
            n.prototype.reset = function (a) {
                this.localT = a || 0;
                var c = this.ease;
                this.ease = 1;
                for (var b in this.animValues) {
                    this.reconcile(b)
                }
                this.ease = c
            };
            n.prototype.onDOMRead = function (c) {
                var b = this.easeFunction(this.localT);
                var g = this.animValues[c];
                var d = this.controller.element._animationInfo[c];
                d.target = g[0] + b * (g[1] - g[0]);
                var f = d.current;
                d.current += (d.target - d.current) * this.ease;
                var a = d.current - d.target;
                if (a < d.epsilon && a > -d.epsilon) {
                    d.current = d.target;
                    a = 0
                }
                if (this.event === "" || this.needsEventDispatch) {
                    return
                }
                if (a > d.epsilon || a < -d.epsilon || a === 0 && f !== d.current) {
                    this.needsEventDispatch = true;
                    this
                        .controller
                        .keyframesRequiringDispatch
                        .push(this)
                }
            };
            n.prototype.isInRange = function (a) {
                return a >= this.start && a <= this.end
            };
            n.prototype.setEnabled = function () {
                var a = this
                    .breakpointMask
                    .indexOf(j.pageMetrics.breakpoint) !== -1;
                var b = false;
                if (this.disabledWhen !== "") {
                    b = j
                        .DOCUMENT_ELEMENT_CLASSES
                        .indexOf(this.disabledWhen) !== -1
                }
                this.isEnabled = a && !b;
                return this.isEnabled
            };
            n.prototype.updateAnimationConstraints = function () {
                this.start = this
                    .controller
                    .timeParser
                    .parse(this, this.jsonProps.start);
                this.end = this
                    .controller
                    .timeParser
                    .parse(this, this.jsonProps.end);
                for (var b in this.animValues) {
                    var a = this.jsonProps[b];
                    this.animValues[b] = this
                        .controller
                        .expressionParser
                        .parse(this, a)
                }
            };
            n.DATA_ATTRIBUTE = "data-animated-content";
            l.exports = n
        }, {
            "../Model/AnimSystemModel": 465,
            "../Model/EasingFunctions": 466,
            "@marcom/sm-math-utils": 473
        }
    ],
    463: [
        function (w, y, u) {
            var v = function () {
                function a(b, d) {
                    for (var f = 0; f < d.length; f++) {
                        var c = d[f];
                        c.enumerable = c.enumerable || false;
                        c.configurable = true;
                        if ("value" in c) {
                            c.writable = true
                        }
                        Object.defineProperty(b, c.key, c)
                    }
                }
                return function (b, d, c) {
                    if (d) {
                        a(b.prototype, d)
                    }
                    if (c) {
                        a(b, c)
                    }
                    return b
                }
            }();
            var s = function x(f, b, c) {
                if (f === null) {
                    f = Function.prototype
                }
                var a = Object.getOwnPropertyDescriptor(f, b);
                if (a === undefined) {
                    var d = Object.getPrototypeOf(f);
                    if (d === null) {
                        return undefined
                    } else {
                        return x(d, b, c)
                    }
                } else {
                    if ("value" in a) {
                        return a.value
                    } else {
                        var g = a.get;
                        if (g === undefined) {
                            return undefined
                        }
                        return g.call(c)
                    }
                }
            };
            function t(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            function r(b, a) {
                if (!b) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }
                return a && (typeof a === "object" || typeof a === "function")
                    ? a
                    : b
            }
            function p(a, b) {
                if (typeof b !== "function" && b !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + typeof b)
                }
                a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
                if (b) {
                    Object.setPrototypeOf
                        ? Object.setPrototypeOf(a, b)
                        : a.__proto__ = b
                }
            }
            var n = w("./AnimatedContentKeyframe");
            var q = w("../Model/AnimSystemModel.js");
            var o = function (a) {
                p(d, a);
                function d(l, k) {
                    t(this, d);
                    var j = r(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, l, k));
                    j.keyframeType = q.KeyframeTypes.Event;
                    j.isApplied = false;
                    j.hasDuration = false;
                    j.isCurrentlyInRange = false;
                    return j
                }
                v(d, [
                    {
                        key: "parseOptions",
                        value: function f(j) {
                            j.x = undefined;
                            j.y = undefined;
                            j.scale = undefined;
                            j.scaleX = undefined;
                            j.scaleY = undefined;
                            j.rotation = undefined;
                            j.style = undefined;
                            j.cssClass = undefined;
                            j.rotation = undefined;
                            j.opacity = undefined;
                            j.hold = undefined;
                            if (j.end === undefined) {
                                j.end = j.start
                            }
                            this.event = j.event;
                            this.animValues[this.event] = [0, 0];
                            if (typeof this.controller.element._animationInfo[this.event] === "undefined") {
                                this.controller.element._animationInfo[this.event] = new q.TargetValue(0, 1, false)
                            }
                            s(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "parseOptions", this).call(this, j);
                            this.keyframeType = q.KeyframeTypes.Event
                        }
                    }, {
                        key: "onScrollUpdate",
                        value: function b(j) {
                            if (this.hasDuration) {
                                var k = this.isCurrentlyInRange;
                                var l = j >= this.start && j <= this.end;
                                if (k === l) {
                                    return
                                }
                                if (l && !k) {
                                    this._trigger(this.event + ":enter")
                                } else {
                                    if (k && !l) {
                                        this._trigger(this.event + ":exit")
                                    }
                                }
                                this.isCurrentlyInRange = l;
                                return
                            }
                            if (!this.isApplied && j > this.start) {
                                this._trigger(this.event);
                                this.isApplied = true
                            } else {
                                if (this.isApplied && j < this.start) {
                                    this.isApplied = false
                                }
                            }
                        }
                    }, {
                        key: "_trigger",
                        value: function i(j) {
                            this.controller.eventObject.event = j;
                            this.controller.eventObject.keyframe = this;
                            this
                                .controller
                                .animSystem
                                .trigger(j, this.controller.eventObject)
                        }
                    }, {
                        key: "updateAnimationConstraints",
                        value: function c() {
                            this.start = this
                                .controller
                                .timeParser
                                .parse(this, this.jsonProps.start);
                            this.end = this
                                .controller
                                .timeParser
                                .parse(this, this.jsonProps.end);
                            this.hasDuration = this.start !== this.end
                        }
                    }, {
                        key: "onDOMRead",
                        value: function g(k, j) {}
                    }, {
                        key: "reconcile",
                        value: function h(k, j) {}
                    }
                ]);
                return d
            }(n);
            o.DATA_ATTRIBUTE = "data-trigger-event";
            y.exports = o
        }, {
            "../Model/AnimSystemModel.js": 465,
            "./AnimatedContentKeyframe": 462
        }
    ],
    464: [
        function (n, m, i) {
            var k = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
                ? function (a) {
                    return typeof a
                }
                : function (a) {
                    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype
                        ? "symbol"
                        : typeof a
                };
            var o = n("./AnimatedContentKeyframe");
            var j = n("../Model/AnimSystemModel.js");
            function l(b, a) {
                o.call(this, b, a);
                this.keyframeType = j.KeyframeTypes.Trigger;
                this._triggerType = l.TRIGGER_TYPE_CSS_CLASS;
                this.cssClass = "";
                this.friendlyName = "";
                this.style = {
                    on: null,
                    off: null
                };
                this.toggle = false;
                this.isApplied = false
            }
            l.prototype = Object.create(o.prototype);
            l.prototype.constructor = l;
            l.prototype.parseOptions = function (c) {
                c.x = undefined;
                c.y = undefined;
                c.scale = undefined;
                c.scaleX = undefined;
                c.scaleY = undefined;
                c.rotation = undefined;
                c.opacity = undefined;
                c.hold = undefined;
                if (c.toggle !== undefined) {
                    this.toggle = c.toggle
                }
                if (c.cssClass !== undefined) {
                    this._triggerType = l.TRIGGER_TYPE_CSS_CLASS;
                    this.cssClass = c.cssClass;
                    this.friendlyName = "." + this.cssClass
                } else {
                    if (c.style !== undefined && this.isValidStyleProperty(c.style)) {
                        this._triggerType = l.TRIGGER_TYPE_STYLE_PROPERTY;
                        this.style = c.style;
                        this.toggle = this.style.off !== undefined
                            ? true
                            : this.toggle;
                        if (this.toggle && this.style.off === undefined) {
                            this.style.off = {};
                            for (var a in this.style.on) {
                                this.style.off[a] = ""
                            }
                        }
                    } else {
                        throw new TypeError("AnimatedContentKeyframeTrigger no 'cssClass` property found. If using `style` pr" +
                                "operty its also missing or invalid")
                    }
                }
                if (c.end === undefined) {
                    c.end = c.start
                }
                if (this._triggerType === l.TRIGGER_TYPE_CSS_CLASS) {
                    this.isApplied = this
                        .controller
                        .element
                        .classList
                        .contains(this.cssClass)
                } else {
                    var d = getComputedStyle(this.controller.element);
                    this.isApplied = true;
                    for (var b in this.style.on) {
                        if (d[b] !== this.style.on[b]) {
                            this.isApplied = false;
                            break
                        }
                    }
                }
                o
                    .prototype
                    .parseOptions
                    .call(this, c);
                this.animValues[this.friendlyName] = [0, 0];
                if (this.controller.element._animationInfo[this.friendlyName] === undefined) {
                    this.controller.element._animationInfo[this.friendlyName] = new j.TargetValue(0, 1, false)
                }
                this.keyframeType = j.KeyframeTypes.Trigger
            };
            l.prototype.onScrollUpdate = function (a) {
                if (this.isApplied && !this.toggle) {
                    return
                }
                if (this.start !== this.end) {
                    if (!this.isApplied && a >= this.start && a <= this.end) {
                        this._apply()
                    } else {
                        if (this.isApplied && this.toggle && (a < this.start || a > this.end)) {
                            this._unapply()
                        }
                    }
                } else {
                    if (!this.isApplied && a >= this.start) {
                        this._apply()
                    } else {
                        if (this.isApplied && this.toggle && a < this.start) {
                            this._unapply()
                        }
                    }
                }
            };
            l.prototype._apply = function () {
                if (this._triggerType === l.TRIGGER_TYPE_CSS_CLASS) {
                    this
                        .controller
                        .element
                        ._animationInfo
                        .targetClasses
                        .add
                        .push(this.cssClass);
                    this.controller.needsClassUpdate = true
                } else {
                    for (var a in this.style.on) {
                        this.controller.element._animationInfo.targetStyles[a] = this.style.on[a]
                    }
                    this.controller.needsStyleUpdate = true
                }
                this.isApplied = true
            };
            l.prototype._unapply = function () {
                if (this._triggerType === l.TRIGGER_TYPE_CSS_CLASS) {
                    this
                        .controller
                        .element
                        ._animationInfo
                        .targetClasses
                        .remove
                        .push(this.cssClass);
                    this.controller.needsClassUpdate = true
                } else {
                    for (var a in this.style.off) {
                        this.controller.element._animationInfo.targetStyles[a] = this.style.off[a]
                    }
                    this.controller.needsStyleUpdate = true
                }
                this.isApplied = false
            };
            l.prototype.updateAnimationConstraints = function () {
                this.start = this
                    .controller
                    .timeParser
                    .parse(this, this.jsonProps.start);
                this.end = this
                    .controller
                    .timeParser
                    .parse(this, this.jsonProps.end)
            };
            l.prototype.isValidStyleProperty = function (a) {
                if (!a.hasOwnProperty("on")) {
                    return false
                }
                if (k(a.on) !== "object") {
                    throw new TypeError("AnimatedContentKeyframeTrigger `style` property should be in the form of: {on:{v" +
                            "isibility:hidden, otherProperty: value}}")
                }
                if (this.toggle && a.hasOwnProperty("off") && k(a.off) !== "object") {
                    throw new TypeError("AnimatedContentKeyframeTrigger `style` property should be in the form of: {on:{v" +
                            "isibility:hidden, otherProperty: value}}")
                }
                return true
            };
            l.prototype.reconcile = function (b, a) {};
            l.prototype.onDOMRead = function (b, a) {};
            l.TRIGGER_TYPE_CSS_CLASS = 0;
            l.TRIGGER_TYPE_STYLE_PROPERTY = 1;
            l.DATA_ATTRIBUTE = "data-trigger";
            m.exports = l
        }, {
            "../Model/AnimSystemModel.js": 465,
            "./AnimatedContentKeyframe": 462
        }
    ],
    465: [
        function (r, t, q) {
            var l = {
                COMPONENT_NAME: "AnimSystem",
                LOCAL_STORAGE_KEYS: {
                    GuiPosition: "GuiPosition"
                },
                DOCUMENT_ELEMENT_CLASSES: [],
                RESIZE_TIMEOUT: -1,
                BREAKPOINTS: [
                    {
                        name: "S",
                        min: 0,
                        max: 735,
                        fullName: "small"
                    }, {
                        name: "M",
                        min: 736,
                        max: 1068,
                        fullName: "medium"
                    }, {
                        name: "L",
                        min: 1069,
                        max: Number.POSITIVE_INFINITY,
                        fullName: "large"
                    }
                ],
                getBreakpoint: function s() {
                    for (var b = 0; b < l.BREAKPOINTS.length; b++) {
                        var a = l.BREAKPOINTS[b];
                        if (l.pageMetrics.windowWidth <= a.max) {
                            return a.name
                        }
                    }
                    console.warn("AnimSystem Could not determine breakpoint via ViewportEmitter or internal reason" +
                            "able defaults")
                },
                KeyframeDefaults: {
                    ease: 0.1,
                    easeFunctionString: "linear",
                    easeFunction: "linear",
                    relativeToQS: "",
                    snapAtCreation: false,
                    breakpointMask: "SMLX",
                    cssClass: ""
                },
                KeyframeTypes: {
                    Interpolation: 0,
                    InterpolationForward: 1,
                    Trigger: 2,
                    Event: 3
                },
                EVENTS: {
                    ON_CONSTRAINTS_UPDATED: "ON_CONSTRAINTS_UPDATED",
                    ON_KEYFRAMES_CREATED: "ON_KEYFRAMES_CREATED",
                    ON_KEYFRAME_UPDATED: "ON_KEYFRAME_UPDATED",
                    ON_UPDATE_T_LOCAL: "ON_UPDATE_T_LOCAL"
                },
                KeyframeJSONReservedWords: [
                    "event",
                    "relativeTo",
                    "start",
                    "end",
                    "easeFunction",
                    "easing",
                    "breakpointMask"
                ],
                TargetValue: function p(b, c, a) {
                    this.epsilon = parseFloat(c);
                    this.snapAtCreation = a;
                    this.initialValue = b;
                    this.target = 0;
                    this.current = 0
                },
                Timeline: function o() {
                    this.local = 0;
                    this.localUnclamped = 0
                },
                KeyFrames: function n(b, a) {
                    this.a = b.top - a;
                    if (this.a < 0) {
                        this.a = b.top
                    }
                    this.b = b.top;
                    this.d = b.bottom;
                    this.c = Math.max(this.d - a, this.b)
                },
                pageMetrics: new function () {
                    this.scrollY = 0;
                    this.windowHeight = 0;
                    this.windowWidth = 0;
                    this.breakpoint = ""
                }(),
                EventObject: function m(b, a) {
                    this.controller = b;
                    this.element = this.controller.element;
                    this.keyframe = a;
                    this.event = "";
                    this.animationInfo = this.element._animationInfo
                },
                KeyframeComparison: function u(a, b) {
                    if (a.start < b.start) {
                        return -1
                    } else {
                        if (a.start > b.start) {
                            return 1
                        }
                    }
                    return 0
                }
            };
            t.exports = l
        }, {}
    ],
    466: [
        function (g, k, h) {
            function i(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var j = function j() {
                i(this, j);
                this.linear = function (a) {
                    return a
                },
                this.easeInQuad = function (a) {
                    return a * a
                },
                this.easeOutQuad = function (a) {
                    return a * (2 - a)
                },
                this.easeInOutQuad = function (a) {
                    return a < 0.5
                        ? 2 * a * a
                        : -1 + (4 - 2 * a) * a
                },
                this.easeInCubic = function (a) {
                    return a * a * a
                },
                this.easeOutCubic = function (a) {
                    return-- a * a * a + 1
                },
                this.easeInOutCubic = function (a) {
                    return a < 0.5
                        ? 4 * a * a * a
                        : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
                },
                this.easeInQuart = function (a) {
                    return a * a * a * a
                },
                this.easeOutQuart = function (a) {
                    return 1 - --a * a * a * a
                },
                this.easeInOutQuart = function (a) {
                    return a < 0.5
                        ? 8 * a * a * a * a
                        : 1 - 8 * --a * a * a * a
                },
                this.easeInQuint = function (a) {
                    return a * a * a * a * a
                },
                this.easeOutQuint = function (a) {
                    return 1 + --a * a * a * a * a
                },
                this.easeInOutQuint = function (a) {
                    return a < 0.5
                        ? 16 * a * a * a * a * a
                        : 1 + 16 * --a * a * a * a * a
                }
            };
            k.exports = new j()
        }, {}
    ],
    467: [
        function (p, n, j) {
            var o = function () {
                function a(f, c) {
                    for (var d = 0; d < c.length; d++) {
                        var b = c[d];
                        b.enumerable = b.enumerable || false;
                        b.configurable = true;
                        if ("value" in b) {
                            b.writable = true
                        }
                        Object.defineProperty(f, b.key, b)
                    }
                }
                return function (b, d, c) {
                    if (d) {
                        a(b.prototype, d)
                    }
                    if (c) {
                        a(b, c)
                    }
                    return b
                }
            }();
            function m(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var l = window.Symbol || function () {
                var a = 0;
                return function () {
                    return++ a + ""
                }
            }();
            var k = function () {
                function d() {
                    m(this, d);
                    this._symbols = [];
                    this._lut = {}
                }
                o(d, [
                    {
                        key: "destroy",
                        value: function a() {
                            for (var i = 0, s = this._symbols.length; i < s; i++) {
                                var h = this._lut[this._symbols[i]];
                                h.el.__animSystemSymbol = null;
                                h.el = null
                            }
                            this._lut = null
                        }
                    }, {
                        key: "add",
                        value: function f(h) {
                            if (h.__animSystemSymbol === undefined) {
                                h.__animSystemSymbol = l()
                            }
                            if (this._lut[h.__animSystemSymbol] === undefined) {
                                var i = new q(h);
                                this._refreshMetrics(i);
                                this._lut[h.__animSystemSymbol] = i;
                                this
                                    ._symbols
                                    .push(h.__animSystemSymbol)
                            }
                            return this._lut[h.__animSystemSymbol]
                        }
                    }, {
                        key: "get",
                        value: function c(h) {
                            return this._lut[h.__animSystemSymbol]
                        }
                    }, {
                        key: "refreshAll",
                        value: function b() {
                            for (var i = 0, s = this._symbols.length; i < s; i++) {
                                var h = this._lut[this._symbols[i]];
                                this._refreshMetrics(h)
                            }
                        }
                    }, {
                        key: "_refreshMetrics",
                        value: function g(t) {
                            var u = t.el;
                            if (u.offsetWidth === undefined) {
                                var h = u.getBoundingClientRect();
                                t.width = h.width;
                                t.height = h.height;
                                t.top = window.pageYOffset + h.top;
                                t.left = window.pageXOffset + h.left;
                                t.right = t.left + t.width;
                                t.bottom = t.top + t.height;
                                return
                            }
                            t.width = u.offsetWidth;
                            t.height = u.offsetHeight;
                            t.top = 0;
                            t.left = 0;
                            var i = u;
                            while (i) {
                                t.top += i.offsetTop;
                                t.left += i.offsetLeft;
                                i = i.offsetParent
                            }
                            t.right = t.left + t.width;
                            t.bottom = t.top + t.height
                        }
                    }
                ]);
                return d
            }();
            var q = function () {
                function c(d) {
                    m(this, c);
                    this.el = d;
                    this.top = 0;
                    this.bottom = 0;
                    this.left = 0;
                    this.right = 0;
                    this.height = 0;
                    this.width = 0
                }
                o(c, [
                    {
                        key: "toString",
                        value: function a() {
                            return "top:" + top + ", bottom:" + bottom + ", left:" + left + ", right:" + right + ", height:" + height + ", width:" + width
                        }
                    }, {
                        key: "toObject",
                        value: function b() {
                            return {
                                top: this.top,
                                bottom: this.bottom,
                                left: this.left,
                                right: this.right,
                                height: this.height,
                                width: this.width
                            }
                        }
                    }
                ]);
                return c
            }();
            n.exports = k
        }, {}
    ],
    468: [
        function (f, i, g) {
            i.exports = function h() {
                var c = "";
                for (var b = 0; b < 32; b++) {
                    var a = Math.random() * 16 | 0;
                    if (b === 8 || b === 12 || b === 16 || b === 20) {
                        c += "-"
                    }
                    c += (b === 12
                        ? 4
                        : b === 16
                            ? a & 3 | 8
                            : a).toString(16)
                }
                return c
            }
        }, {}
    ],
    469: [
        function (s, u, p) {
            var q = function () {
                function a(c, f) {
                    for (var b = 0; b < f.length; b++) {
                        var d = f[b];
                        d.enumerable = d.enumerable || false;
                        d.configurable = true;
                        if ("value" in d) {
                            d.writable = true
                        }
                        Object.defineProperty(c, d.key, d)
                    }
                }
                return function (c, b, d) {
                    if (b) {
                        a(c.prototype, b)
                    }
                    if (d) {
                        a(c, d)
                    }
                    return c
                }
            }();
            function o(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var l = s("../Model/AnimSystemModel");
            var n = s("./Operations");
            var r = /([-|\+])?(\d+\.?\d*)(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)?|(-|\+|\*|\/)/g;
            var t = /(px|vh|vw|pw|ph|\%w|\%h|rw|rh|\%)/g;
            var m = function () {
                function j(k) {
                    o(this, j);
                    this.controller = k
                }
                q(j, [
                    {
                        key: "parse",
                        value: function d(w, k) {
                            if (Array.isArray(k)) {
                                return this.parseArray(w, k)
                            } else {
                                throw new Error("AnimatedContentKeyframe value `" + k + "` is not supported. Only arrays in the form of [start,end] are currently support" +
                                        "ed")
                            }
                        }
                    }, {
                        key: "parseArray",
                        value: function g(z, y) {
                            var k = this.parseExpression(z, y[0]);
                            var A = this.parseExpression(z, y[1]);
                            return [k, A]
                        }
                    }, {
                        key: "parseExpression",
                        value: function h(ah, R) {
                            if (R === null) {
                                return 0
                            }
                            if (typeof R === "number") {
                                return R
                            }
                            var T = 5;
                            var ab = void 0;
                            while ((ab = R.indexOf("(")) !== -1 && --T > 0) {
                                var Z = this.captureParenthesis(R, ab);
                                var ad = this.parseExpression(ah, Z);
                                R = R.replace("(" + Z + ")", ad)
                            }
                            var ag = void 0;
                            var V = [];
                            while ((ag = r.exec(R)) !== null) {
                                if (ag.index === r.lastIndex) {
                                    r.lastIndex++
                                }
                                if (ag[4]) {
                                    V.push(n.GetOpCode(ag[4]))
                                } else {
                                    var af = ag[1];
                                    var W = parseFloat(ag[2]);
                                    var Y = ag[3];
                                    if (af === "-") {
                                        W *= -1
                                    }
                                    var k = this.parseSplitUnit(ah, W, Y);
                                    V.push(k)
                                }
                            }
                            var P = V.length;
                            if (P === 3) {
                                return V[1](V[0], V[2])
                            }
                            for (var X = 0; X < P; X++) {
                                if (typeof V[X] === "function" && V[X].priority === 1) {
                                    var S = V[X - 1];
                                    var ai = V[X + 1];
                                    var aa = V[X](S, ai);
                                    V[X - 1] = null;
                                    V[X + 0] = null;
                                    V[X + 1] = aa;
                                    X += 1
                                }
                            }
                            var Q = 0;
                            while (V[Q] == null && Q < P) {
                                Q += 1
                            }
                            var U = V[Q];
                            var ae = null;
                            var ac = null;
                            for (Q = Q + 1; Q < P; Q++) {
                                if (V[Q] === null) {
                                    Q += 1;
                                    continue
                                }
                                if (V[Q]instanceof Function) {
                                    ae = V[Q];
                                    continue
                                }
                                if (ac === null) {
                                    ac = V[Q]
                                }
                                if (ac !== null) {
                                    ae = ae || n.add;
                                    U = ae(U, ac);
                                    ae = null;
                                    ac = null
                                }
                            }
                            return U
                        }
                    }, {
                        key: "parseSplitUnit",
                        value: function b(y, k, x) {
                            if (typeof x === "undefined") {
                                return parseFloat(k)
                            }
                            switch (x) {
                                case "vh":
                                    return k * 0.01 * l.pageMetrics.windowHeight;
                                    break;
                                case "%":
                                    return k * 0.01 * this.controller.elementMetrics.height;
                                    break;
                                case "px":
                                    return k;
                                    break;
                                case "rh":
                                    return k * 0.01 * this
                                        .controller
                                        .animSystem
                                        .metrics
                                        .get(y.relativeTo)
                                        .height;
                                    break;
                                case "vw":
                                    return k * 0.01 * l.pageMetrics.windowWidth;
                                    break;
                                case "rw":
                                    return k * 0.01 * this
                                        .controller
                                        .animSystem
                                        .metrics
                                        .get(y.relativeTo)
                                        .width;
                                    break;
                                case "%w":
                                    return k * 0.01 * this.controller.elementMetrics.width;
                                    break;
                                case "%h":
                                    return k * 0.01 * this.controller.elementMetrics.height;
                                    break;
                                case "pw":
                                    return k * 0.01 * this.controller.parentElementMetrics.width;
                                    break;
                                case "ph":
                                    return k * 0.01 * this.controller.parentElementMetrics.height;
                                    break;
                                default:
                                    throw new Error("AnimatedContentKeyframe no strategy found for unit `" + x + "` only `vh, vw, %, ph, pw` are supported")
                            }
                            return 0
                        }
                    }, {
                        key: "captureParenthesis",
                        value: function a(B, F) {
                            var D = "";
                            var G = 0;
                            var k = false;
                            var E = B.length;
                            for (var C = F; C < E; C++) {
                                if (B[C] === "(") {
                                    G += 1;
                                    if (k) {
                                        D += B[C]
                                    }
                                    k = true
                                } else {
                                    if (B[C] === ")") {
                                        G -= 1;
                                        if (G !== 0) {
                                            D += B[C]
                                        }
                                    } else {
                                        if (k) {
                                            D += B[C]
                                        }
                                    }
                                }
                                if (k && G === 0) {
                                    return D
                                }
                            }
                        }
                    }, {
                        key: "isUnitlessNumber",
                        value: function f(k) {
                            return String(k).match(t) === null
                        }
                    }, {
                        key: "destroy",
                        value: function i() {
                            this.controller = null
                        }
                    }, {
                        key: "logParts",
                        value: function c(k) {
                            console.log(k.reduce(function (y, x) {
                                if (typeof x === "function") {
                                    return y + x.friendlyName + " "
                                }
                                return y + (x + " ")
                            }, ""))
                        }
                    }
                ]);
                return j
            }();
            u.exports = m
        }, {
            "../Model/AnimSystemModel": 465,
            "./Operations": 470
        }
    ],
    470: [
        function (g, k, h) {
            function i(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var j = function j() {
                i(this, j);
                this.sub = function (b, a) {
                    return b - a
                };
                this.add = function (b, a) {
                    return b + a
                };
                this.mul = function (b, a) {
                    return b * a
                };
                this.div = function (b, a) {
                    return b / a
                };
                this.add.friendlyName = "add";
                this.sub.friendlyName = "sub";
                this.mul.friendlyName = "mul";
                this.div.friendlyName = "div";
                this.add.priority = 0;
                this.sub.priority = 0;
                this.mul.priority = 1;
                this.div.priority = 1;
                this.GetOpCode = function (a) {
                    switch (a) {
                        case "-":
                            return this.sub;
                            break;
                        case "+":
                            return this.add;
                            break;
                        case "*":
                            return this.mul;
                            break;
                        case "/":
                            return this.div;
                            break;
                        default:
                            throw new Error('AnimSystem.parsing.Operations - op code "' + a + "\" was found. Only '+ - * /' are supported. Check expression for typos/spacing i" +
                                    "ssues")
                    }
                }
            };
            k.exports = new j()
        }, {}
    ],
    471: [
        function (h, l, i) {
            var m = function () {
                function a(b, d) {
                    for (var f = 0; f < d.length; f++) {
                        var c = d[f];
                        c.enumerable = c.enumerable || false;
                        c.configurable = true;
                        if ("value" in c) {
                            c.writable = true
                        }
                        Object.defineProperty(b, c.key, c)
                    }
                }
                return function (b, d, c) {
                    if (d) {
                        a(b.prototype, d)
                    }
                    if (c) {
                        a(b, c)
                    }
                    return b
                }
            }();
            function j(b, a) {
                if (!(b instanceof a)) {
                    throw new TypeError("Cannot call a class as a function")
                }
            }
            var k = function () {
                function b(d) {
                    j(this, b);
                    this.controller = d
                }
                m(b, [
                    {
                        key: "parse",
                        value: function a(q, p) {
                            if (typeof p === "number") {
                                return p
                            }
                            var d = this
                                .controller
                                .animSystem
                                .metrics
                                .get(q.relativeTo)
                                .top;
                            var g = this
                                .controller
                                .expressionParser
                                .parseExpression(q, p);
                            var f = g + d;
                            return this
                                .controller
                                .animSystem
                                .convertScrollPositionToTValue(f)
                        }
                    }, {
                        key: "destroy",
                        value: function c() {
                            this.controller = null
                        }
                    }
                ]);
                return b
            }();
            l.exports = k
        }, {}
    ],
    472: [
        function (j, i, k) {
            var g = function g() {};
            g.destroy = function () {};
            g.setupEvents = function () {};
            g.teardownEvents = function () {};
            g.onSectionWillAppearWithPadding = function (b, a) {};
            g.onSectionWillAppear = function (b, a) {};
            g.activate = function () {};
            g.deactivate = function () {};
            g.animateIn = function () {};
            g.onScroll = function (b, c, a) {};
            g.onSectionWillDisappearWithPadding = function (b, a) {};
            g.onSectionWillDisappear = function (b, a) {};
            g.onResizeImmediate = function (b, c, a) {};
            g.onResizeDebounced = function (b, c, a) {};
            g.onBreakpoint = function (c, a, d, b) {};
            g.onRetinaChange = function (a, c, d, b) {};
            g.onOrientationChange = function (b, c, d, a) {};
            i.exports = {
                make: function h(a, b) {
                    a.section = b[0];
                    a.element = b[1];
                    a.index = b[6];
                    a.componentName = "AnimSystem";
                    a.destroy = g.destroy;
                    a.setupEvents = g.setupEvents;
                    a.teardownEvents = g.teardownEvents;
                    a.onSectionWillAppearWithPadding = g.onSectionWillAppearWithPadding;
                    a.onSectionWillAppear = g.onSectionWillAppear;
                    a.activate = g.activate;
                    a.deactivate = g.deactivate;
                    a.animateIn = g.animateIn;
                    a.onScroll = g.onScroll;
                    a.onSectionWillDisappearWithPadding = g.onSectionWillDisappearWithPadding;
                    a.onSectionWillDisappear = g.onSectionWillDisappear;
                    a.onResizeImmediate = g.onResizeImmediate;
                    a.onResizeDebounced = g.onResizeDebounced;
                    a.onOrientationChange = g.onOrientationChange;
                    a.onBreakpoint = g.onBreakpoint;
                    a.onRetinaChange = g.onRetinaChange
                }
            }
        }, {}
    ],
    473: [
        function (r, s, o) {
            s.exports = {
                lerp: function q(a, c, b) {
                    return c + (b - c) * a
                },
                map: function t(d, f, b, a, c) {
                    return a + (c - a) * (d - f) / (b - f)
                },
                mapClamp: function l(f, g, b, a, c) {
                    var d = a + (c - a) * (f - g) / (b - g);
                    return Math.max(a, Math.min(c, d))
                },
                norm: function u(c, a, b) {
                    return (c - a) / (b - a)
                },
                clamp: function m(c, a, b) {
                    return Math.max(a, Math.min(b, c))
                },
                randFloat: function p(a, b) {
                    return Math.random() * (b - a) + a
                },
                randInt: function n(a, b) {
                    return Math.floor(Math.random() * (b - a) + a)
                }
            }
        }, {}
    ],
    474: [
        function (y, A, w) {
            var s = y("@marcom/ac-dom-events").addEventListener;
            var v = y("@marcom/ac-feature/isTablet");
            var u = y("@marcom/ac-feature/touchAvailable");
            var z = y("@marcom/ac-viewport-emitter");
            var r = null;
            try {
                r = y("@marcom/ac-analytics")
            } catch (x) {}
            var t = "a.backing-link";
            var o = "has-backing-link";
            var q = "homepage-section";
            var p = y("./js/extendedHomepageSectionsLib.built.js");
            A.exports = function () {
                var a = [];
                []
                    .forEach
                    .call(document.querySelectorAll("." + q), function (i, f) {
                        var g = i.getAttribute("data-section-content-type"),
                            h = p[g].SectionClass,
                            d = p[g].contentUnits;
                        a.push(new h(i, f, d))
                    });
                function c() {
                    setTimeout(function () {
                        requestAnimationFrame(function () {
                            var d = document.body.scrollTop;
                            var f = document.body.offsetHeight - window.innerHeight + 1;
                            if (d > f) {
                                window.scrollTo(0, f)
                            }
                        })
                    }, 250)
                }
                if (v && u) {
                    s(window, "orientationchange", c)
                }
                function b() {
                    var f = r
                        .createBasicObserverSuite()
                        .section;
                    var d = f.elementEngagement.elements;
                    d.forEach(function (g) {
                        if (g.inThreshold) {
                            f.endSectionEngagement(g)
                        } else {
                            g
                                .once("thresholdenter", function (h) {
                                    f.endSectionEngagement(g)
                                })
                        }
                    })
                }
                if (r) {
                    s(window, "load", b)
                }
            }
        }, {
            "./js/extendedHomepageSectionsLib.built.js": 485,
            "@marcom/ac-analytics": undefined,
            "@marcom/ac-dom-events": 11,
            "@marcom/ac-feature/isTablet": 168,
            "@marcom/ac-feature/touchAvailable": 176,
            "@marcom/ac-viewport-emitter": 445
        }
    ],
    475: [
        function (n, m, o) {
            var j = n("../../js/BaseHomepageSection.js");
            var k = j.prototype;
            function i(b, a, c) {
                j.apply(this, arguments)
            }
            var l = i.prototype = Object.create(k);
            l.destroy = function () {
                k
                    .destroy
                    .call(this)
            };
            m.exports = i
        }, {
            "../../js/BaseHomepageSection.js": 478
        }
    ],
    476: [
        function (d, g, f) {
            arguments[4][475][0].apply(f, arguments)
        }, {
            "../../js/BaseHomepageSection.js": 478,
            dup: 475
        }
    ],
    477: [
        function (d, g, f) {
            arguments[4][475][0].apply(f, arguments)
        }, {
            "../../js/BaseHomepageSection.js": 478,
            dup: 475
        }
    ],
    478: [
        function (x, z, v) {
            var q = x("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var p = q.prototype;
            var A = x("@marcom/ac-element-engagement").ElementEngagement;
            var o = x("@marcom/ac-progressive-image-loader/ProgressiveImageLoader");
            var t = x("./PromoManager");
            var y = x("./baseHomepageContentUnit");
            var s = x("@marcom/anim-system");
            function w(b) {
                var a = /^http(s)?\:\/\//i;
                if (a.test(b)) {
                    b = b.split(a)[2]
                }
                if (b.indexOf(document.location.host) === 0) {
                    b = b.split(document.location.host)[1]
                }
                return b
            }
            function r(b, a, c) {
                q.apply(this);
                this.sectionElement = b;
                this.sectionIndex = a;
                this.contentTypeName = b.getAttribute("data-section-content-type");
                this.viewportEmitter = x("@marcom/ac-viewport-emitter");
                this.anim = new s(this.sectionElement);
                this.sectionAnalyticsRegion = b.getAttribute("data-analytics-region");
                this.promoManager = new t(this.sectionElement);
                this.sectionUnits = this
                    .sectionElement
                    .querySelectorAll(".homepage-section-positions .homepage-section-item>.promo-managed-unit");
                this.elementEngagement = new A();
                this.setProgressiveImageLoading();
                this
                    .elementEngagement
                    .start();
                this.sectionContentUnitObjs = {};
                this._setDebouncedResizeEvents(500);
                this.initContentUnitClasses(c)
            }
            var u = r.prototype = Object.create(p);
            u.initContentUnitClasses = function (a) {
                Array
                    .from(this.sectionUnits)
                    .forEach(function (b) {
                        var d = b.getAttribute("data-content-unit");
                        var c = a[d]
                            ? a[d]
                            : y;
                        this.sectionContentUnitObjs[d] = new c(b, d, this)
                    }.bind(this))
            };
            u.destroy = function () {
                p
                    .destroy
                    .call(this)
            };
            u.addWrapperClass = function (a) {
                this
                    .sectionElement
                    .classList
                    .add(a)
            };
            u.removeWrapperClass = function (a) {
                this
                    .sectionElement
                    .classList
                    .remove(a)
            };
            u.setProgressiveImageLoading = function () {
                this.sectionImageLoaderEngagement = this
                    .elementEngagement
                    .addElement(this.sectionElement, {
                        timeToEngage: 0,
                        inViewThreshold: 0.001
                    });
                this
                    .sectionImageLoaderEngagement
                    .once("engaged", function () {
                        this.sectionImageLoader = new o({container: this.sectionElement, includeContainer: true});
                        this
                            .sectionImageLoader
                            .load({imageAnimate: false})
                    }.bind(this))
            };
            u._setDebouncedResizeEvents = function (b) {
                var a = false;
                window.addEventListener("resize", function () {
                    clearTimeout(this._checkResizeEndTimer);
                    if (!a) {
                        this.trigger("resize:start");
                        a = true
                    }
                    this._checkResizeEndTimer = setTimeout(function () {
                        if (a) {
                            a = false;
                            this.trigger("resize:end")
                        }
                    }.bind(this), b)
                }.bind(this))
            };
            z.exports = r
        }, {
            "./PromoManager": 479,
            "./baseHomepageContentUnit": 484,
            "@marcom/ac-element-engagement": 137,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-progressive-image-loader/ProgressiveImageLoader": 357,
            "@marcom/ac-viewport-emitter": 445,
            "@marcom/anim-system": 460
        }
    ],
    479: [
        function (n, m, o) {
            var j = n("@marcom/ac-promomanager/AutoPromoManager");
            var k = n("@marcom/ac-gallery").FadeGallery;
            var i = function i(a, b) {
                this.sectionElement = a;
                this._options = b || {};
                this.intervalPromos = null;
                this.initialize()
            };
            var l = i.prototype;
            l.initialize = function () {
                var a = this._initAutoPromoManager();
                this.intervalPromoArr = this._initIntervalGalleries(a);
                this._addIntervalGalleryItems(this.intervalPromoArr);
                this._initUpdateIntervalCurrentPromos(this.intervalPromoArr);
                this._startIntervalGallery(this.intervalPromoArr)
            };
            l._initAutoPromoManager = function () {
                var a = this
                    .sectionElement
                    .querySelector(".homepage-section-positions");
                return new j(a, this._options)
            };
            l._initIntervalGalleries = function (f) {
                var g = f.promoManagers.reorder;
                var b = g.length;
                var r = [];
                var h = {
                    enableArrowKeys: false,
                    deeplink: false,
                    wrapAround: true
                };
                var c;
                var d;
                if (b > 0) {
                    for (var a = 0; a < b; a++) {
                        c = g[a];
                        d = new k(c.el, h);
                        r.push({promoManager: c, gallery: d})
                    }
                }
                return r
            };
            l._addIntervalGalleryItems = function (f) {
                var a = f.length;
                var d;
                var b;
                var g;
                var c;
                for (var h = 0; h < a; h++) {
                    b = f[h].gallery;
                    g = f[h].promoManager.promos.all;
                    c = g.length;
                    for (var s = 0; s < c; s++) {
                        b.addItem(g[s].el)
                    }
                }
            };
            l._onIntervalGalleryUpdate = function (b) {
                var a = this;
                var c = a
                    .gallery
                    .getItemIndex(b.incoming[0]);
                var d = a.promoManager.promos.all[c];
                a
                    .promoManager
                    .setCurrentPromo(d)
            };
            l._bindIntervalGalleryUpdate = function (b) {
                var d = b.length;
                var a;
                for (var c = 0; c < d; c++) {
                    a = b[c];
                    a.boundUpdate = this
                        ._onIntervalGalleryUpdate
                        .bind(b[c])
                }
            };
            l._initUpdateIntervalCurrentPromos = function (a) {
                var b = a.length;
                this._bindIntervalGalleryUpdate(a);
                for (var c = 0; c < b; c++) {
                    a[c]
                        .gallery
                        .on("update", a[c].boundUpdate)
                }
            };
            l._startIntervalGallery = function (a) {
                var c = a.length;
                for (var b = 0; b < c; b++) {
                    a[b]
                        .gallery
                        .startAutoPlay()
                }
            };
            m.exports = i
        }, {
            "@marcom/ac-gallery": 286,
            "@marcom/ac-promomanager/AutoPromoManager": 420
        }
    ],
    480: [
        function (t, u, r) {
            var n = t("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var m = n.prototype;
            var p = t("./getTestVideoSource.js");
            var s = t("./BackgroundVideoSource.js");
            var l = function l() {
                if (/^iP(ad|hone|od)$/.test(navigator.platform) && navigator.appVersion) {
                    var a = navigator
                        .appVersion
                        .match(/\s+OS\s+(\d+)_\d+_\d+\s+like\s+Mac\s+OS\s+X/);
                    if (a && a[1]) {
                        return parseInt(a[1])
                    }
                }
                return null
            };
            function o(b, a) {
                this._isSupported = null;
                this._disabled = false;
                this.isTouch = t("@marcom/ac-feature/touchAvailable");
                this._iosMajorVersion = l();
                this._isIos = typeof this._iosMajorVersion === "number" && this.isTouch && typeof window.orientation === "number";
                n.apply(this);
                this.contentUnitObj = b;
                this.id = this.contentUnitObj.id;
                this.contentUnitElement = this.contentUnitObj.contentUnitElement;
                this.sectionObj = this.contentUnitObj.sectionObj;
                this.videoSources = {};
                this.videoKey = a;
                this.imgEle = this
                    .contentUnitElement
                    .querySelector("figure.unit-image");
                this.parentEle = this.imgEle.parentNode;
                this.videoEle = null;
                this.lastPlayHeadPosition = 0;
                this.elementIsInPlayRange = false;
                this.elementIsInLoadRange = false;
                this.isResizing = false;
                this.fastScrollDebounceMs = this.isTouch
                    ? 1500
                    : 500;
                this.setEventListeners();
                this.setVideoSources(true);
                this
                    .testVideoSupport()
                    .then(function () {
                        this.cleanupTestVideo();
                        this._isSupported = true;
                        this.load()
                    }.bind(this), function () {
                        this.cleanupTestVideo();
                        this._isSupported = false
                    }.bind(this))
            }
            var q = o.prototype = Object.create(m);
            q.testVideoSupport = function () {
                return new Promise(function (d, a) {
                    if (window.matchMedia("(prefers-reduced-motion)").matches) {
                        a();
                        return
                    }
                    if (this._isIos && this._iosMajorVersion <= 10) {
                        a();
                        return
                    }
                    try {
                        this.testVideoEle = document.createElement("video");
                        [
                            {
                                name: "muted",
                                value: ""
                            }, {
                                name: "loop",
                                value: ""
                            }, {
                                name: "playsinline",
                                value: ""
                            }, {
                                name: "class",
                                value: "hidden-test-video"
                            }, {
                                    name: "src",
                                    value: p()
                                }
                            ]
                            .forEach(function (f) {
                                this
                                    .testVideoEle
                                    .setAttribute(f.name, f.value)
                            }.bind(this));
                        this.testVideoEle = this
                            .parentEle
                            .appendChild(this.testVideoEle);
                        if (typeof this.testVideoEle.play != "function") {
                            this._hasVideoSupport = false
                        }
                        var b = this
                            .testVideoEle
                            .play();
                        if (typeof b != "undefined" && typeof b.then === "function") {
                            b.then(d, a)
                        } else {
                            d()
                        }
                    } catch (c) {
                        a(c)
                    }
                }.bind(this))
            };
            q.cleanupTestVideo = function () {
                if (this.testVideoEle) {
                    var a = this
                        .parentEle
                        .removeChild(this.testVideoEle);
                    this.testVideoEle = null
                }
            };
            q.setVideoSources = function (a) {
                ["large", "medium", "small"]
                    .forEach(function (b) {
                        this.videoSources[b] = new s(this.sectionObj.contentTypeName, this.videoKey, b, a)
                    }.bind(this))
            };
            q.setEventListeners = function () {
                var a = this.sectionObj.contentTypeName + "-" + this.id + "-",
                    c = a + "videoplay",
                    b = a + "videoload";
                this.animEvents = {
                    loadEnter: b + ":enter",
                    loadExit: b + ":exit",
                    playEnter: c + ":enter",
                    playExit: c + ":exit"
                };
                this
                    .sectionObj
                    .anim
                    .on(this.animEvents.loadEnter, this.onLoadEnter.bind(this));
                this
                    .sectionObj
                    .anim
                    .on(this.animEvents.loadExit, this.onLoadExit.bind(this));
                this
                    .sectionObj
                    .anim
                    .on(this.animEvents.playEnter, this.onPlayEnter.bind(this));
                this
                    .sectionObj
                    .anim
                    .on(this.animEvents.playExit, this.onPlayExit.bind(this));
                this
                    .sectionObj
                    .on("resize:start", this.onResizeStart.bind(this));
                this
                    .sectionObj
                    .viewportEmitter
                    .on("change", this.onViewportChange.bind(this));
                this
                    .sectionObj
                    .on("resize:end", this.onResizeEnd.bind(this));
                this.secondsToEnd = 1
            };
            q.destroy = function () {
                m
                    .destroy
                    .call(this)
            };
            q.getVideoSource = function () {
                var a = this.sectionObj.viewportEmitter.viewport;
                a = a.split(/tall$/)[0];
                if (a === "xlarge") {
                    a = "large"
                }
                return this.videoSources[a]
            };
            q.load = function (a) {
                if (!this._isSupported) {
                    return
                }
                if (this._disabled) {
                    this.hide();
                    return
                }
                if (this.elementIsInLoadRange && !this.isResizing) {
                    if (this.getVideoSource().blobUri) {
                        this.playPromise = this.play();
                        if (this.playPromise && typeof this.playPromise.then === "function") {
                            this
                                .playPromise
                                .then(function () {}, function () {})
                        }
                        if (this.playPromise && typeof this.playPromise["catch"] === "function") {
                            this.playPromise["catch"](function () {})
                        }
                    } else {
                        if (!this.getVideoSource().isLoading) {
                            this
                                .getVideoSource()
                                .load()
                                .then(this.play.bind(this))
                        }
                    }
                }
            };
            q.play = function () {
                if (!this._isSupported) {
                    return
                }
                if (this._disabled) {
                    this.hide();
                    return
                }
                if (this.elementIsInPlayRange && !this.isResizing) {
                    var b = this
                        .getVideoSource()
                        .blobUri;
                    if (!b) {
                        this.load();
                        return
                    }
                    if (!this.videoEle) {
                        this.createVideoEle()
                    }
                    if (this.videoEle.src != b) {
                        this.videoEle.src = b
                    }
                    if (this.videoEle.paused) {
                        try {
                            this.videoEle.currentTime = this.lastPlayHeadPosition
                        } catch (a) {}
                        this.show();
                        this.playPromise = this
                            .videoEle
                            .play();
                        if (this.playPromise && typeof this.playPromise.then === "function") {
                            this
                                .playPromise
                                .then(function () {}, function () {})
                        }
                        if (this.playPromise && typeof this.playPromise["catch"] === "function") {
                            this.playPromise["catch"](function () {})
                        }
                        setTimeout(function () {
                            this
                                .videoEle
                                .classList
                                .add("loaded")
                        }.bind(this), 250)
                    }
                }
            };
            q.pause = function (a) {
                if (this.videoEle && !this.videoEle.paused) {
                    this
                        .videoEle
                        .pause();
                    this.lastPlayHeadPosition = this.videoEle.currentTime;
                    if (a) {
                        this.hide()
                    }
                }
            };
            q.onPlayEnter = function () {
                if (this._disabled) {
                    this.hide();
                    return
                }
                this.playEnterTimeout = setTimeout(function () {
                    this.elementIsInPlayRange = true;
                    this.play()
                }.bind(this), this.fastScrollDebounceMs)
            };
            q.onPlayExit = function () {
                clearTimeout(this.playEnterTimeout);
                this.pause();
                this.elementIsInPlayRange = false;
                this.hide()
            };
            q.onLoadEnter = function () {
                if (this._disabled) {
                    this.hide();
                    return
                }
                this.loadEnterTimeout = setTimeout(function () {
                    this.elementIsInLoadRange = true;
                    this.load()
                }.bind(this), this.fastScrollDebounceMs)
            };
            q.onLoadExit = function () {
                clearTimeout(this.loadEnterTimeout);
                this.elementIsInLoadRange = false;
                this.hide()
            };
            q.createVideoEle = function (a) {
                if (this._disabled) {
                    this.hide();
                    return
                }
                if (!this._disabled) {
                    var b = document.createElement("video");
                    [
                        {
                            name: "muted",
                            value: ""
                        }, {
                            name: "loop",
                            value: ""
                        }, {
                            name: "playsinline",
                            value: ""
                        }, {
                            name: "class",
                            value: this.imgEle.className
                        }, {
                                name: "src",
                                value: a || ""
                            }
                        ]
                        .forEach(function (c) {
                            b.setAttribute(c.name, c.value)
                        });
                    this.videoEle = this
                        .parentEle
                        .appendChild(b);
                    this
                        .videoEle
                        .addEventListener("loadeddata", this.onLoadedVideoData.bind(this));
                    this
                        .videoEle
                        .addEventListener("ended", this.onEnded.bind(this))
                }
            };
            q.destroyVideoEle = function () {
                if (this.videoEle) {
                    var a = this
                        .parentEle
                        .removeChild(this.videoEle);
                    this.videoEle = null
                }
            };
            q.onLoadedVideoData = function () {
                if (this.videoEle) {
                    try {
                        this.videoEle.currentTime = this.lastPlayHeadPosition
                    } catch (a) {}
                }
            };
            q.endFast = function () {
                if (this.videoEle && !this.videoEle.paused && !this.isEnding) {
                    this.isEnding = true;
                    this.videoEle.loop = false
                }
            };
            q.onEnded = function () {
                if (this.isEnding && this.videoEle) {
                    this
                        .videoEle
                        .pause();
                    this.videoEle.loop = true;
                    this.isEnding = false;
                    this.lastPlayHeadPosition = this.videoEle.currentTime;
                    this.hide()
                }
            };
            q.hide = function (b) {
                if (this.videoEle) {
                    var a = function () {
                        if (this.videoEle) {
                            this.videoEle.style.display = "none";
                            this.videoEle.style.visibility = "hidden";
                            this.destroyVideoEle();
                            this.isHidden = true
                        }
                    }.bind(this);
                    this
                        .videoEle
                        .classList
                        .remove("loaded");
                    if (b) {
                        a()
                    } else {
                        setTimeout(a, 250)
                    }
                }
            };
            q.show = function () {
                if (this.videoEle && this.isHidden && !this._disabled) {
                    this.isHidden = false;
                    this.videoEle.style.display = "block";
                    this.videoEle.style.visibility = "visible"
                }
            };
            q.onResizeStart = function () {
                this.isResizing = true;
                this.endFast()
            };
            q.onViewportChange = function () {
                if (this.isResizing && this.isEnding) {
                    this.onEnded();
                    this.lastPlayHeadPosition = 0
                }
            };
            q.onResizeEnd = function () {
                if (this.videoEle) {
                    this.videoEle.loop = true
                }
                this.isEnding = false;
                this.isResizing = false;
                this.load()
            };
            q.disable = function () {
                this._disabled = true;
                this.hide()
            };
            q.enable = function () {
                this._disabled = false;
                this.play()
            };
            q.isDisabled = function () {
                return this._disabled
            };
            u.exports = o
        }, {
            "./BackgroundVideoSource.js": 481,
            "./getTestVideoSource.js": 483,
            "@marcom/ac-event-emitter-micro": 139,
            "@marcom/ac-feature/touchAvailable": 176
        }
    ],
    481: [
        function (p, o, q) {
            var k = p("@marcom/ac-cname").cname;
            var m = p("@marcom/ac-viewport-emitter");
            var n = p("../homepage-settings.built.js");
            var l = p("./BlobVideoLoader.js");
            function j(b, c, d, a) {
                this.type = b;
                this.key = c;
                this.size = d;
                this.isLoading = false;
                this.blobUri = null;
                this.baseUri = [n.VATbasePath, b, c, d].join("/");
                this.uri = k.addPrefix(this.baseUri + [
                    a || !m.retina
                        ? ""
                        : "_2x",
                    "mp4"
                ].join("."));
                this._blobVideoLoader = new l(this.uri)
            }
            j.prototype.load = function () {
                if (!this.blobUri) {
                    this.isLoading = true
                }
                return new Promise(function (a, b) {
                    this
                        ._blobVideoLoader
                        .load()
                        .then(function (c) {
                            this.blobUri = c;
                            this.isLoading = false;
                            a(this.blobUri)
                        }.bind(this), function (c) {
                            b(c)
                        }.bind(this))
                }.bind(this))
            };
            o.exports = j
        }, {
            "../homepage-settings.built.js": 486,
            "./BlobVideoLoader.js": 482,
            "@marcom/ac-cname": 4,
            "@marcom/ac-viewport-emitter": 445
        }
    ],
    482: [
        function (y, A, x) {
            var q = y("@marcom/ac-event-emitter-micro/EventEmitterMicro");
            var p = q.prototype;
            var r = "video/mp4";
            var v = "blob";
            var C = 30000;
            var s = Object.freeze({type: null, status: null});
            function t() {
                return typeof(window.Blob && window.URL) === "function"
            }
            function B(a) {
                return window
                    .URL
                    .createObjectURL(a)
            }
            function u(b, c) {
                c = c || {
                    contentType: r,
                    timeout: C
                };
                var a = new XMLHttpRequest();
                a.open("GET", b);
                a.overrideMimeType(c.contentType);
                a.responseType = v;
                a.timeout = c.timeout;
                return a
            }
            function z(a) {
                q.apply(this);
                this._blobUrl = null;
                this._xhr = u(a);
                this._metrics = {
                    progress: null,
                    totalSize: null,
                    loadStartTime: null,
                    loadTotalTime: null
                };
                this._promise = {
                    load: null
                };
                this._onProgress = this
                    ._onProgress
                    .bind(this);
                this._rejectData = this
                    ._rejectData
                    .bind(this)
            }
            var w = z.prototype = Object.create(p);
            w._calcTotalLoadTime = function (a) {
                return Date.now() - a
            };
            w._onLoad = function (a, b) {
                var d = this._xhr.status;
                if (d !== 200) {
                    return b(d)
                }
                this._metrics.loadTotalTime = this._calcTotalLoadTime(this._metrics.loadStartTime);
                var c = this._xhr.response;
                this._blobUrl = B(c);
                return a(this._blobUrl)
            };
            w._onProgress = function (b) {
                if (!this._metrics.totalSize) {
                    this._metrics.totalSize = b.total
                }
                var a = b.total
                    ? b.loaded / b.total
                    : 0;
                this._metrics.progress = a;
                this.trigger("progress", b)
            };
            w._rejectData = function () {
                var b = this._xhr.status;
                var a = Object.assign({}, s);
                if (b === 0) {
                    a.type = "XHR";
                    a.status = "aborted"
                } else {
                    a.type = "HTTP";
                    a.status = b
                }
                return a
            };
            w._onError = function (a) {
                return a(this._rejectData())
            };
            w._onAbort = function (a) {
                return a(this._rejectData())
            };
            w.load = function () {
                var a = "thisisaveryuniquestring";
                if (this._promise.load) {
                    return this._promise.load
                }
                var b = new Promise(function (c, d) {
                    this._xhr.onprogress = this._onProgress;
                    this._xhr.onload = function () {
                        return this._onLoad(c, d)
                    }.bind(this);
                    this._xhr.onerror = function () {
                        return this._onError(d)
                    }.bind(this);
                    this._xhr.onabort = function () {
                        return this._onAbort(d)
                    }.bind(this);
                    this._metrics.loadStartTime = new Date();
                    this
                        ._xhr
                        .send()
                }.bind(this));
                return this._promise.load = b
            };
            w.destroy = function () {
                p
                    .destroy
                    .call(this);
                this._blobUrl = null;
                this._xhr = null;
                this._metrics = {
                    progress: null,
                    totalSize: null,
                    loadStartTime: null,
                    loadTotalTime: null
                };
                this._promise = {
                    load: null
                }
            };
            w.getXhr = function () {
                return this._xhr
            };
            w.getProgress = function () {
                return this._metrics.progress
            };
            w.getUrl = function () {
                return this._blobUrl
            };
            w.getTotalSize = function () {
                return this._metrics.totalSize
            };
            w.getTotalLoadTime = function () {
                return this._metrics.loadTotalTime
            };
            A.exports = z
        }, {
            "@marcom/ac-event-emitter-micro/EventEmitterMicro": 140
        }
    ],
    483: [
        function (d, g, f) {
            g.exports = function () {
                return "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAF" +
                    "5tZGF0AAAAAQYAAAAxZYiEBrb/+n/CVf8CjwLadH1Q/I7PffWLreW0rHh9aUhCAJIJrlPZX2vRTpjEfS" +
                        "jXJwAAAApBmjsQa2/+2qpgAAAACkGaRgg1t/7aqmEAAAMTbW9vdgAAAGxtdmhkAAAAANYSLhXWEi4VAA" +
                        "AD6AAAAEMAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAA" +
                        "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAj10cmFrAAAAXHRraGQAAAAD1hIuFdYSLhUAAAABAA" +
                        "AAAAAAAEMAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAC" +
                        "gAAAAoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAABDAAAAAAABAAAAAAG1bWRpYQAAACBtZGhkAA" +
                        "AAANYSLhXWEi4VAAA8AAAABABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0" +
                        "hhbmRsZXIAAAABYG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQ" +
                        "AAAAx1cmwgAAAAAQAAASBzdGJsAAAAlHN0c2QAAAAAAAAAAQAAAIRhdmMxAAAAAAAAAAEAAAAAAAAAAA" +
                        "AAAAAAAAAAACgAKABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP" +
                        "//AAAALmF2Y0MBTUAV/+EAF2dNQBXbN+WXARAAAAMAEAAAAwPA8WLuAQAEaOrNyAAAACBzdHRzAAAAAA" +
                        "AAAAIAAAACAAACAAAAAAEAAAAAAAAAFHN0c3MAAAAAAAAAAQAAAAEAAAAcc3RzYwAAAAAAAAABAAAAAQ" +
                        "AAAAMAAAABAAAAIHN0c3oAAAAAAAAAAAAAAAMAAAA6AAAADgAAAA4AAAAUc3RjbwAAAAAAAAABAAAAMA" +
                        "AAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3" +
                        "QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTcuNDAuMTAx"
            }
        }, {}
    ],
    484: [
        function (q, r, p) {
            var l = q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
            var k = l.prototype;
            var n = q("./ambientBackgroundVideo/AmbientBackgroundVideo.js");
            var m = "data-background-video";
            function s(a, b, c) {
                l.apply(this);
                this.contentUnitElement = a;
                this.id = b;
                this.sectionObj = c;
                this.setBackgroundVideo()
            }
            var o = s.prototype = Object.create(k);
            o.setBackgroundVideo = function () {
                if (this.contentUnitElement.querySelector(".unit-wrapper[" + m + "]")) {
                    this.backgroundVideo = new n(this, this.contentUnitElement.querySelector(".unit-wrapper[" + m + "]").getAttribute(m))
                }
            };
            o.destroy = function () {
                k
                    .destroy
                    .call(this)
            };
            r.exports = s
        }, {
            "./ambientBackgroundVideo/AmbientBackgroundVideo.js": 480,
            "@marcom/ac-event-emitter-micro": 139
        }
    ],
    485: [
        function (d, g, f) {
            g.exports = {
                generic: {
                    SectionClass: d("../content-type-definitions/generic/SectionClass.js"),
                    contentUnits: d("../../../../../tmp/content-units.generic.built.js")
                },
                heroes: {
                    SectionClass: d("../content-type-definitions/heroes/SectionClass.js"),
                    contentUnits: d("../../../../../tmp/content-units.heroes.built.js")
                },
                promos: {
                    SectionClass: d("../content-type-definitions/promos/SectionClass.js"),
                    contentUnits: d("../../../../../tmp/content-units.promos.built.js")
                },
                banners: {
                    SectionClass: d("../../../../../src/content/content-units/banners/SectionClass.js"),
                    contentUnits: d("../../../../../tmp/content-units.banners.built.js")
                }
            }
        }, {
            "../../../../../src/content/content-units/banners/SectionClass.js": 487,
            "../../../../../tmp/content-units.banners.built.js": 490,
            "../../../../../tmp/content-units.generic.built.js": 491,
            "../../../../../tmp/content-units.heroes.built.js": 492,
            "../../../../../tmp/content-units.promos.built.js": 493,
            "../content-type-definitions/generic/SectionClass.js": 475,
            "../content-type-definitions/heroes/SectionClass.js": 476,
            "../content-type-definitions/promos/SectionClass.js": 477
        }
    ],
    486: [
        function (d, g, f) {
            g.exports = {
                buildTarget: "/v/home/dn/built",
                VATbasePath: "/105/media/us/home/undefined/undefined",
                siteName: "home"
            }
        }, {}
    ],
    487: [
        function (n, m, o) {
            var j = n("@marcom/ac-homepage/BaseHomepageSection");
            var k = j.prototype;
            function i(b, a, c) {
                j.apply(this, arguments)
            }
            var l = i.prototype = Object.create(k);
            l.destroy = function () {
                k
                    .destroy
                    .call(this)
            };
            m.exports = i
        }, {
            "@marcom/ac-homepage/BaseHomepageSection": 478
        }
    ],
    488: [
        function (d, g, f) {
            d("@marcom/ac-homepage/src/ac-homepage-main")();
            d("./shame.js")()
        }, {
            "./shame.js": 489,
            "@marcom/ac-homepage/src/ac-homepage-main": 474
        }
    ],
    489: [
        function (f, h, g) {
            var i = "cta-visible";
            h.exports = function () {}
        }, {}
    ],
    490: [
        function (i, h, f) {
            var g = {};
            h.exports = g
        }, {}
    ],
    491: [
        function (d, g, f) {
            arguments[4][490][0].apply(f, arguments)
        }, {
            dup: 490
        }
    ],
    492: [
        function (d, g, f) {
            arguments[4][490][0].apply(f, arguments)
        }, {
            dup: 490
        }
    ],
    493: [
        function (d, g, f) {
            arguments[4][490][0].apply(f, arguments)
        }, {
            dup: 490
        }
    ]
}, {}, [488]);
