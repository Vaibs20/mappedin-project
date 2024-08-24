// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6siK7":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6e5246215594c064";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"idGhe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PerformanceController", ()=>b);
parcelHelpers.export(exports, "PerformanceView", ()=>d);
var _chunk4XLXKB34Js = require("./chunk-4XLXKB34.js");
var _chunkA5C75TI6Js = require("./chunk-A5C75TI6.js");
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
(0, _chunkA5C75TI6Js.a)();
var F, y, P = class {
    constructor(t){
        (0, _chunkZRT45YCMJs.f)(this, "_currentStats", {
            fps: 0,
            ms: 0,
            mb: 0
        }), (0, _chunkZRT45YCMJs.f)(this, "view"), (0, _chunkZRT45YCMJs.f)(this, "timer"), (0, _chunkZRT45YCMJs.f)(this, "counter"), (0, _chunkZRT45YCMJs.f)(this, "onFPSChangeArray"), (0, _chunkZRT45YCMJs.f)(this, "onFPSChangeIndex"), (0, _chunkZRT45YCMJs.f)(this, "lastFPS", 0), (0, _chunkZRT45YCMJs.f)(this, "SECONDS_TO_DECIDE", 3), (0, _chunkZRT45YCMJs.f)(this, "MIN_FPS", 38), (0, _chunkZRT45YCMJs.f)(this, "CRITICAL_FPS", 24), (0, _chunkZRT45YCMJs.f)(this, "MAX_FPS", 120), (0, _chunkZRT45YCMJs.f)(this, "MAX_MS", 200), (0, _chunkZRT45YCMJs.f)(this, "MAX_MB", ((null == (y = null == (F = window.performance) ? void 0 : F.memory) ? void 0 : y.jsHeapSizeLimit) || 1 / 0) / 1048576), (0, _chunkZRT45YCMJs.f)(this, "updateMappedinDevtools", (0, _chunkZRT45YCMJs.a)(()=>{
            let t = "__MAPPEDIN_DEVTOOLS__";
            window[t] = window[t] || {};
            let e = window[t];
            e.showPerformancePanelArray = e.showPerformancePanelArray || [], e.hidePerformancePanelArray = e.hidePerformancePanelArray || [], e.showPerformancePanelArray.push(()=>this.showPerformancePanel()), e.hidePerformancePanelArray.push(()=>this.hidePerformancePanel());
        }, "updateMappedinDevtools"));
        let { MAX_FPS: i, MAX_MS: s, MAX_MB: n } = this, a = {
            fps: i,
            ms: s,
            mb: n
        };
        this.view = new d(t.debug, t.container, a), this.timer = new c, this.counter = new u, this.onFPSChangeArray = t.onFPSChangeArray, this.onFPSChangeIndex = t.dynamicPerformance ? t.onFPSChangeArray.length : -1, this.updateMappedinDevtools();
    }
    static getDefaultOnFPSChangeArray(t) {
        let { effectComposer: e } = t.renderer.implementation;
        return [
            ()=>{
                null == e || e.setAntialiasConfiguration({
                    antialias: !1
                }), t.paths.pathSegments.forEach(({ arrowAnimationTween: t })=>{
                    t.stop();
                });
                for(let e in t.polygonMeshesById){
                    let { material: i } = t.polygonMeshesById[e];
                    i.map && (i.map.anisotropy = 1, i.needsUpdate = !0);
                }
                t.tryRendering();
            },
            ()=>{
                null == e || e.setAmbientOcclusionConfiguration({
                    aoEnabled: !1
                }), t.tryRendering();
            }
        ];
    }
    updateStats(t) {
        var e, i;
        let s = (null == (i = null == (e = window.performance) ? void 0 : e.memory) ? void 0 : i.usedJSHeapSize) || 0;
        this._currentStats.fps = Math.min(t, this.MAX_FPS), this._currentStats.ms = Math.min(1e3 / t, this.MAX_MS), this._currentStats.mb = Math.min(s / 1048576, this.MAX_MB), this.view.updatePanels(this._currentStats);
    }
    isFPSSpiked(t) {
        return Math.abs(this.lastFPS - t) / this.lastFPS > .1;
    }
    updateOnFPSChangeIndex(t, e) {
        let i = this.onFPSChangeIndex;
        return e && i > 0 ? i = 0 : t && (i -= 1), this.onFPSChangeIndex = (0, _chunk4XLXKB34Js.L).clamp(i, -1, this.onFPSChangeArray.length), this.onFPSChangeIndex;
    }
    handleFPSChange(t, e) {
        let i = this.onFPSChangeIndex, s = this.updateOnFPSChangeIndex(t, e), n = this.onFPSChangeArray[s];
        !n || s === i || n(this.currentStats);
    }
    update() {
        let { fps: t, duration: e } = this.timer.update();
        if (e >= 1e3) {
            if (!this.isFPSSpiked(t)) {
                let { lowFPS: e, criticalFPS: i } = this.counter.update(t, this.MIN_FPS, this.CRITICAL_FPS, this.SECONDS_TO_DECIDE);
                this.updateStats(t), this.handleFPSChange(e, i);
            }
            this.lastFPS = t, this.timer.reset();
        }
    }
    get currentStats() {
        return {
            ...this._currentStats
        };
    }
    get dom() {
        return this.view.dom;
    }
    hidePerformancePanel() {
        this.view.hidePerformancePanel();
    }
    showPerformancePanel() {
        this.view.showPerformancePanel();
    }
};
(0, _chunkZRT45YCMJs.a)(P, "PerformanceController");
var b = P, m = class {
    constructor(){
        (0, _chunkZRT45YCMJs.f)(this, "beginTime", performance.now()), (0, _chunkZRT45YCMJs.f)(this, "frames", 0), (0, _chunkZRT45YCMJs.f)(this, "duration", 0);
    }
    reset() {
        this.duration = 0, this.frames = 0;
    }
    update() {
        let t = performance.now(), e = t - this.beginTime;
        return this.frames++, this.duration += e, this.beginTime = t, {
            duration: this.duration,
            fps: this.frames / (this.duration / 1e3)
        };
    }
};
(0, _chunkZRT45YCMJs.a)(m, "PerformanceTimer");
var c = m, f = class {
    constructor(){
        (0, _chunkZRT45YCMJs.f)(this, "criticalFpsCounter", 0), (0, _chunkZRT45YCMJs.f)(this, "lowFpsCounter", 0), (0, _chunkZRT45YCMJs.f)(this, "highFpsCounter", 0);
    }
    update(t, e, i, s) {
        let n = t < e, a = t < i;
        return this.criticalFpsCounter = a ? this.criticalFpsCounter + 1 : 0, this.lowFpsCounter = n ? this.lowFpsCounter + 1 : 0, this.highFpsCounter = n ? 0 : this.highFpsCounter + 1, this.lowFpsCounter === s ? (this.lowFpsCounter = 0, this.criticalFpsCounter === s ? (this.criticalFpsCounter = 0, {
            lowFPS: !0,
            highFPS: !1,
            criticalFPS: !0
        }) : {
            lowFPS: !0,
            highFPS: !1,
            criticalFPS: !1
        }) : this.highFpsCounter === s ? (this.highFpsCounter = 0, {
            lowFPS: !1,
            highFPS: !0,
            criticalFPS: !1
        }) : (n ? this.highFpsCounter = 0 : (this.lowFpsCounter = 0, this.criticalFpsCounter = 0), {
            lowFPS: !1,
            highFPS: !1,
            criticalFPS: !1
        });
    }
};
(0, _chunkZRT45YCMJs.a)(f, "PerformanceCounter");
var u = f, g = class {
    constructor(t, i, s){
        var n;
        (0, _chunkZRT45YCMJs.f)(this, "mode", -1), (0, _chunkZRT45YCMJs.f)(this, "panels", []), (0, _chunkZRT45YCMJs.f)(this, "appContainer"), (0, _chunkZRT45YCMJs.f)(this, "maxValues"), (0, _chunkZRT45YCMJs.f)(this, "debug"), (0, _chunkZRT45YCMJs.f)(this, "stats"), (0, _chunkZRT45YCMJs.f)(this, "container"), this.debug = t, this.appContainer = i, this.maxValues = s, this.container = this.createContainer(), this.addPanel(new l({
            name: "FPS",
            foregroundColor: "#0ff",
            backgroundColor: "#002"
        })), this.addPanel(new l({
            name: "MS",
            foregroundColor: "#0f0",
            backgroundColor: "#020"
        })), null != (n = window.performance) && n.memory && this.addPanel(new l({
            name: "MB",
            foregroundColor: "#f08",
            backgroundColor: "#201"
        })), this.debug && this.showPerformancePanel();
    }
    createContainer() {
        let t = document.createElement("div");
        return t.style.cssText = "position:absolute;top:0;right:0;cursor:pointer;opacity:0.9;z-index:10000", t.addEventListener("click", (t)=>{
            t.preventDefault(), this.showPanel(++this.mode % this.panels.length);
        }), t;
    }
    addPanel(t) {
        this.panels.push(t), this.container.appendChild(t.dom);
    }
    showPanel(t) {
        this.panels.forEach((e, i)=>{
            e.dom.style.display = i === t ? "block" : "none";
        }), this.mode = t;
    }
    hidePerformancePanel() {
        this.container.parentNode && (this.debug = !1, this.appContainer.removeChild(this.container));
    }
    showPerformancePanel() {
        this.container.parentNode || (this.debug = !0, this.stats && this.updatePanels(this.stats), this.appContainer.appendChild(this.container));
    }
    updatePanels(t) {
        this.stats = t, this.debug && this.panels.forEach((e, i)=>{
            0 === i ? e.update(t.fps, this.maxValues.fps) : 1 === i ? e.update(t.ms, this.maxValues.ms) : 2 === i && e.update(t.mb, this.maxValues.mb);
        });
    }
    get dom() {
        return this.container;
    }
};
(0, _chunkZRT45YCMJs.a)(g, "PerformanceView");
var d = g, v = class {
    constructor(t){
        this.config = t, (0, _chunkZRT45YCMJs.f)(this, "min", 1 / 0), (0, _chunkZRT45YCMJs.f)(this, "max", 0), (0, _chunkZRT45YCMJs.f)(this, "canvas"), (0, _chunkZRT45YCMJs.f)(this, "context"), (0, _chunkZRT45YCMJs.f)(this, "PR", Math.round(window.devicePixelRatio || 1)), (0, _chunkZRT45YCMJs.f)(this, "WIDTH", 80 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "HEIGHT", 48 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "TEXT_X", 3 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "TEXT_Y", 2 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "GRAPH_X", 3 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "GRAPH_Y", 15 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "GRAPH_WIDTH", 74 * this.PR), (0, _chunkZRT45YCMJs.f)(this, "GRAPH_HEIGHT", 30 * this.PR), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.setupCanvas();
    }
    setupCanvas() {
        this.canvas.dataset.name = this.config.name, this.canvas.width = this.WIDTH, this.canvas.height = this.HEIGHT, this.canvas.style.width = "".concat(this.WIDTH / this.PR, "px"), this.canvas.style.height = "".concat(this.HEIGHT / this.PR, "px"), this.context.font = "bold ".concat(9 * this.PR, "px Helvetica,Arial,sans-serif"), this.context.textBaseline = "top", this.context.fillStyle = this.config.backgroundColor, this.context.fillRect(0, 0, this.WIDTH, this.HEIGHT), this.context.fillStyle = this.config.foregroundColor, this.context.fillText(this.config.name, this.TEXT_X, this.TEXT_Y), this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT), this.context.fillStyle = this.config.backgroundColor, this.context.globalAlpha = .9, this.context.fillRect(this.GRAPH_X, this.GRAPH_Y, this.GRAPH_WIDTH, this.GRAPH_HEIGHT);
    }
    get dom() {
        return this.canvas;
    }
    update(t, e) {
        this.min = Math.min(this.min, t), this.max = Math.max(this.max, t);
        let { context: i, WIDTH: s, GRAPH_Y: n, GRAPH_WIDTH: a, GRAPH_HEIGHT: h, PR: o } = this;
        i.fillStyle = this.config.backgroundColor, i.globalAlpha = 1, i.fillRect(0, 0, s, n), i.fillStyle = this.config.foregroundColor, i.fillText("".concat(Math.round(t), " ").concat(this.config.name, " (").concat(Math.round(this.min), "-").concat(Math.round(this.max), ")"), this.TEXT_X, this.TEXT_Y), i.drawImage(this.canvas, this.GRAPH_X + o, this.GRAPH_Y, a - o, h, this.GRAPH_X, this.GRAPH_Y, a - o, h), i.fillRect(this.GRAPH_X + a - o, this.GRAPH_Y, o, h), i.fillStyle = this.config.backgroundColor, i.globalAlpha = .9, i.fillRect(this.GRAPH_X + a - o, this.GRAPH_Y, o, Math.round((1 - t / e) * h));
    }
};
(0, _chunkZRT45YCMJs.a)(v, "Panel");
var l = v;

},{"./chunk-4XLXKB34.js":"aezwX","./chunk-A5C75TI6.js":"1qWho","./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6siK7"], null, "parcelRequire79a8")

//# sourceMappingURL=PerformanceController-F735IIJL.5594c064.js.map
