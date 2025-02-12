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
})({"jqE4j":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "86aec102dabcafda";
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

},{}],"h6uih":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>n);
parcelHelpers.export(exports, "cssFontStyle", ()=>t);
parcelHelpers.export(exports, "cssFontWeight", ()=>e);
parcelHelpers.export(exports, "default", ()=>r);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>h);
parcelHelpers.export(exports, "resolution", ()=>o);
parcelHelpers.export(exports, "underlinePosition", ()=>z);
parcelHelpers.export(exports, "underlineThickness", ()=>i);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 183 485 b 386 88 183 297 196 88 b 589 485 573 88 589 297 b 386 881 589 674 577 881 b 301 861 353 881 325 874 b 183 485 195 802 183 650 z m 386 985 b 714 483 664 985 714 760 b 386 -15 714 207 665 -15 b 58 483 108 -15 58 207 b 386 985 58 760 108 985 z "
    },
    1: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 404 985 l 494 985 l 494 0 l 376 0 l 376 706 l 121 706 l 121 800 b 404 985 278 800 381 850 z "
    },
    2: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 371 881 b 283 859 337 881 307 873 b 179 636 216 820 176 740 l 61 636 b 378 985 49 848 172 985 b 498 966 420 985 460 978 b 686 701 606 930 686 845 b 447 364 686 518 561 436 b 272 251 388 328 324 293 b 171 104 225 215 183 171 l 676 104 l 676 0 l 33 0 b 126 257 42 112 73 192 b 419 474 200 347 324 409 b 561 703 494 526 561 583 b 546 776 561 730 556 754 b 371 881 517 836 458 881 z "
    },
    3: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 542 722 b 367 881 542 826 468 881 b 181 667 243 881 181 790 l 63 667 b 367 985 70 858 168 985 b 667 721 545 985 667 900 b 531 525 667 624 600 556 l 531 522 b 708 283 642 498 708 412 b 681 153 708 234 699 191 b 369 -15 631 48 523 -15 b 42 304 165 -15 38 98 l 160 304 b 369 88 163 176 236 88 b 583 278 489 88 583 157 b 374 467 583 400 497 467 b 303 463 349 467 325 465 l 303 563 b 315 561 307 562 312 561 l 354 561 b 542 722 459 561 542 617 z "
    },
    4: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 471 335 l 471 817 l 468 817 l 140 335 z m 582 335 l 715 335 l 715 231 l 582 231 l 582 0 l 471 0 l 471 231 l 39 231 l 39 344 l 488 985 l 582 985 z "
    },
    5: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 389 649 b 707 311 591 649 707 517 b 685 190 707 269 700 229 b 363 -15 641 67 531 -15 b 242 3 320 -15 280 -9 b 49 265 133 40 52 124 l 167 265 b 374 88 175 157 256 87 b 582 321 508 88 582 184 b 360 544 582 455 495 544 b 176 451 274 544 218 501 l 75 457 l 167 968 l 653 968 l 653 864 l 256 864 l 203 581 l 206 578 b 389 649 243 620 314 649 z "
    },
    6: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 693 733 l 575 733 b 410 881 564 820 506 881 b 289 844 360 881 319 868 b 171 507 206 777 174 650 l 174 504 b 419 633 223 585 298 633 b 547 609 467 633 509 625 b 721 314 651 564 721 461 b 392 -15 721 113 598 -15 b 53 457 127 -15 53 196 b 415 985 53 737 134 985 b 693 733 584 985 679 891 z m 397 88 b 596 306 523 88 596 180 b 397 529 596 437 528 529 b 193 307 267 529 193 437 b 397 88 193 178 268 87 z "
    },
    7: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 707 968 l 707 867 b 451 475 603 765 515 621 b 329 0 391 339 340 173 l 197 0 b 238 244 203 83 216 165 b 586 857 306 490 432 695 l 69 857 l 69 968 z "
    },
    8: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 390 571 b 553 729 486 571 553 632 b 388 881 553 828 485 881 b 215 729 289 881 215 828 b 390 571 215 625 287 571 z m 542 529 b 717 283 650 495 717 417 b 691 156 717 235 708 193 b 390 -15 643 51 541 -15 b 56 283 192 -15 56 84 b 228 529 56 412 127 494 b 90 733 154 559 90 635 b 114 841 90 774 98 810 b 379 985 158 927 252 985 b 678 733 552 985 678 902 b 542 529 678 634 615 562 z m 390 88 b 592 279 507 88 592 162 b 576 353 592 306 586 331 b 389 467 546 417 480 467 b 181 278 270 467 181 397 b 390 88 181 158 270 88 z "
    },
    9: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 68 238 l 186 238 b 367 88 195 145 268 88 b 529 181 439 88 493 119 b 589 468 565 244 585 339 l 586 471 b 358 335 547 397 465 335 b 47 664 157 335 47 463 b 71 794 47 711 55 754 b 371 985 115 905 218 985 b 708 514 631 985 708 785 b 367 -15 708 221 637 -15 b 68 238 195 -15 82 74 z m 172 647 b 187 569 172 620 177 594 b 367 439 214 500 273 439 b 450 456 397 439 425 445 b 568 656 519 488 568 557 b 365 881 568 785 496 881 b 172 647 231 881 172 781 z "
    },
    "\b": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "	": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\r": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\x1d": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    " ": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "!": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 103 154 l 257 154 l 257 0 l 103 0 z m 246 992 l 246 686 l 211 254 l 149 254 l 114 686 l 114 992 z "
    },
    '"': {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 346 992 l 440 992 l 440 633 l 346 633 z m 151 992 l 246 992 l 246 633 l 151 633 z "
    },
    "#": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 321 589 l 292 381 l 464 381 l 493 589 z m 686 286 l 546 286 l 506 0 l 410 0 l 450 286 l 278 286 l 238 0 l 142 0 l 182 286 l 47 286 l 47 381 l 196 381 l 225 589 l 83 589 l 83 683 l 238 683 l 278 968 l 374 968 l 333 683 l 506 683 l 546 968 l 642 968 l 601 683 l 725 683 l 725 589 l 589 589 l 560 381 l 686 381 z "
    },
    $: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 35 303 l 153 303 b 349 88 156 178 239 106 l 349 456 b 64 724 195 493 64 537 b 86 838 64 765 71 803 b 349 1015 128 937 218 1006 l 349 1107 l 425 1107 l 425 1014 b 699 739 585 994 664 891 l 581 739 b 425 900 562 831 510 884 l 425 558 l 508 536 b 729 278 623 507 729 425 b 706 157 729 232 722 192 b 425 -22 661 52 563 -11 l 425 -136 l 349 -136 l 349 -22 b 35 303 162 -4 49 111 z m 425 436 l 425 88 b 604 265 534 95 604 148 b 425 436 604 379 514 410 z m 349 579 l 349 904 b 189 736 257 895 189 839 b 349 579 189 633 267 602 z "
    },
    "%": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 349 504 b 471 707 450 504 471 606 b 353 908 471 806 453 908 b 232 706 254 908 232 804 b 349 504 232 607 250 504 z m 353 985 b 575 707 518 985 575 871 b 353 428 575 550 510 428 b 128 703 191 428 128 542 b 353 985 128 866 189 985 z m 1035 60 b 1157 263 1136 60 1157 162 b 1039 464 1157 362 1139 464 b 918 261 940 464 918 360 b 1035 60 918 163 936 60 z m 1039 540 b 1261 263 1204 540 1261 426 b 1039 -15 1261 106 1196 -15 b 814 258 877 -15 814 97 b 1039 540 814 421 875 540 z m 1008 1003 l 1126 1003 l 381 -29 l 261 -29 z "
    },
    "&": {
        ha: 875,
        x_min: 0,
        x_max: 0,
        o: "m 400 888 b 286 782 338 888 286 848 b 349 651 286 727 322 684 l 382 610 b 514 782 438 647 514 690 b 400 888 514 844 465 888 z m 356 -15 b 194 15 289 -15 235 -5 b 46 254 108 59 46 135 b 278 554 46 422 166 495 b 168 788 231 620 168 678 b 392 992 168 915 261 992 b 632 789 525 992 632 923 b 617 706 632 759 627 732 b 446 532 585 627 517 573 l 625 314 b 657 468 644 366 654 417 l 769 468 b 760 392 767 438 764 413 b 703 224 750 323 729 280 l 896 0 l 742 0 l 636 124 b 356 -15 584 43 480 -15 z m 571 206 l 343 479 b 171 256 261 433 171 382 b 187 187 171 231 176 208 b 360 88 215 131 278 88 b 571 206 460 88 528 142 z "
    },
    "'": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 146 992 l 240 992 l 240 633 l 146 633 z "
    },
    "(": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 374 -274 l 283 -274 b 65 375 170 -98 65 94 b 283 1015 65 634 161 853 l 374 1015 b 190 375 257 831 190 646 b 374 -274 190 100 258 -86 z "
    },
    ")": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 76 -274 l -12 -274 b 169 365 102 -91 169 97 b -12 1015 169 640 102 828 l 76 1015 b 294 365 189 840 294 646 b 76 -274 294 106 199 -112 z "
    },
    "*": {
        ha: 489,
        x_min: 0,
        x_max: 0,
        o: "m 279 992 l 279 835 l 428 890 l 456 824 l 304 771 l 396 644 l 339 601 l 243 735 l 153 601 l 90 644 l 181 771 l 33 824 l 58 890 l 206 835 l 206 992 z "
    },
    "+": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 464 399 l 767 399 l 767 304 l 464 304 l 464 0 l 369 0 l 369 304 l 67 304 l 67 399 l 369 399 l 369 703 l 464 703 z "
    },
    ",": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 117 -203 l 117 -133 b 197 0 165 -116 203 -66 l 115 0 l 115 154 l 269 154 l 269 14 b 117 -203 269 -104 214 -174 z "
    },
    "-": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 69 442 l 471 442 l 471 331 l 69 331 z "
    },
    ".": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 115 154 l 269 154 l 269 0 l 115 0 z "
    },
    "/": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 386 1015 l 488 1015 l 76 -22 l -24 -22 z "
    },
    ":": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 269 564 l 115 564 l 115 718 l 269 718 z m 115 154 l 269 154 l 269 0 l 115 0 z "
    },
    ";": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 269 564 l 115 564 l 115 718 l 269 718 z m 117 -203 l 117 -133 b 197 0 165 -116 203 -66 l 115 0 l 115 154 l 269 154 l 269 14 b 117 -203 272 -104 213 -174 z "
    },
    "<": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 769 619 l 179 351 l 769 83 l 769 -10 l 64 308 l 64 394 l 769 714 z "
    },
    "=": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 258 l 767 258 l 767 164 l 67 164 z m 767 444 l 67 444 l 67 539 l 767 539 z "
    },
    ">": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 64 83 l 654 351 l 64 619 l 64 714 l 769 394 l 769 308 l 64 -10 z "
    },
    "?": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 303 154 l 457 154 l 457 0 l 303 0 z m 194 682 l 76 682 b 97 814 75 729 82 773 b 388 1015 137 930 232 1015 b 681 738 565 1015 681 915 b 561 501 681 621 620 560 b 440 296 507 451 440 399 l 440 242 l 322 242 l 322 307 b 447 538 328 419 385 482 b 556 749 502 589 561 643 b 388 911 548 847 491 911 b 194 682 255 911 194 815 z "
    },
    "@": {
        ha: 1111,
        x_min: 0,
        x_max: 0,
        o: "m 739 682 l 771 769 l 858 769 l 742 375 b 726 304 735 355 726 328 b 760 261 726 275 738 261 b 826 290 781 261 803 271 b 951 581 892 347 951 459 b 920 729 951 635 941 685 b 575 939 865 848 745 939 b 409 903 516 939 460 927 b 153 493 267 838 153 696 b 280 180 153 358 209 251 b 582 53 349 111 452 53 b 926 221 731 53 857 132 l 1014 221 b 933 117 992 182 965 147 b 579 -22 851 38 736 -22 b 209 128 419 -22 293 44 b 58 500 124 213 58 339 b 210 865 58 657 127 781 b 574 1015 293 947 417 1015 b 756 983 638 1015 698 1005 b 1046 588 912 925 1046 797 b 932 296 1046 463 993 362 b 721 185 883 243 807 185 b 632 275 667 185 635 220 l 628 275 b 456 182 591 233 530 182 b 374 199 426 182 399 188 b 257 401 306 232 257 302 b 347 671 257 509 297 606 b 583 796 396 736 475 796 b 739 682 665 796 713 750 z m 481 276 b 565 306 511 276 539 286 b 696 572 631 357 696 460 b 583 701 696 638 649 701 b 494 673 551 701 521 692 b 361 411 424 624 361 526 b 481 276 361 337 408 276 z "
    },
    A: {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    B: {
        ha: 951,
        x_min: 0,
        x_max: 0,
        o: "m 715 724 b 504 881 715 853 632 881 l 240 881 l 240 565 l 504 565 b 715 724 636 565 715 603 z m 700 526 l 700 524 b 889 285 813 500 889 416 b 869 179 889 249 882 213 b 588 0 830 74 732 0 l 108 0 l 108 992 l 468 992 b 731 956 563 992 671 993 b 847 749 794 918 847 850 b 700 526 847 634 786 560 z m 757 289 b 542 454 757 412 664 454 l 240 454 l 240 111 l 571 111 b 757 289 685 111 757 176 z "
    },
    C: {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 528 904 b 376 871 469 904 418 893 b 192 503 259 809 192 678 b 529 88 192 267 293 88 b 645 109 573 88 611 95 b 815 374 744 151 806 243 l 947 374 b 518 -22 922 133 780 -22 b 317 17 441 -22 374 -9 b 60 493 154 92 60 258 b 90 697 60 565 70 633 b 529 1015 149 879 290 1015 b 938 693 756 1015 909 894 l 806 693 b 528 904 778 823 678 904 z "
    },
    D: {
        ha: 978,
        x_min: 0,
        x_max: 0,
        o: "m 793 501 b 463 881 793 741 702 881 l 240 881 l 240 111 l 460 111 b 793 501 690 111 793 264 z m 925 519 b 449 0 925 188 780 0 l 108 0 l 108 992 l 449 992 b 925 519 759 992 925 833 z "
    },
    E: {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 793 992 l 793 881 l 240 881 l 240 565 l 756 565 l 756 454 l 240 454 l 240 111 l 797 111 l 797 0 l 108 0 z "
    },
    F: {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 760 992 l 760 881 l 240 881 l 240 565 l 696 565 l 696 454 l 240 454 l 240 0 l 108 0 z "
    },
    G: {
        ha: 1054,
        x_min: 0,
        x_max: 0,
        o: "m 532 -22 b 333 19 458 -22 392 -9 b 60 476 176 92 60 251 b 90 683 60 549 70 617 b 532 1015 147 871 288 1015 b 958 686 775 1015 925 898 l 826 686 b 532 904 802 827 695 904 b 377 868 472 904 420 892 b 192 483 259 802 192 664 b 214 334 192 431 199 382 b 532 88 256 199 357 88 b 669 113 584 88 630 96 b 850 411 778 158 856 259 l 533 411 l 533 522 l 968 522 l 968 0 l 885 0 l 850 124 b 532 -22 784 36 672 -22 z "
    },
    H: {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 240 992 l 240 565 l 763 565 l 763 992 l 894 992 l 894 0 l 763 0 l 763 454 l 240 454 l 240 0 l 108 0 z "
    },
    I: {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 114 992 l 246 992 l 246 0 l 114 0 z "
    },
    J: {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 319 -22 b 31 265 133 -22 31 78 l 31 326 l 163 326 l 163 285 b 322 88 163 163 199 88 b 481 267 439 88 481 153 l 481 992 l 613 992 l 613 247 b 319 -22 613 70 502 -22 z "
    },
    K: {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 240 992 l 240 497 l 743 992 l 914 992 l 496 592 l 931 0 l 764 0 l 406 501 l 240 347 l 240 0 l 108 0 z "
    },
    L: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 240 992 l 240 111 l 765 111 l 765 0 l 108 0 z "
    },
    M: {
        ha: 1210,
        x_min: 0,
        x_max: 0,
        o: "m 111 992 l 292 992 l 604 158 l 918 992 l 1099 992 l 1099 0 l 974 0 l 974 825 l 971 825 l 661 0 l 549 0 l 239 825 l 236 825 l 236 0 l 111 0 z "
    },
    N: {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 107 992 l 247 992 l 769 188 l 772 188 l 772 992 l 897 992 l 897 0 l 753 0 l 235 796 l 232 796 l 232 0 l 107 0 z "
    },
    O: {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    P: {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 715 699 b 499 881 715 828 636 881 l 240 881 l 240 517 l 499 517 b 715 699 636 515 715 569 z m 847 699 b 543 406 847 508 737 404 l 240 406 l 240 0 l 108 0 l 108 992 l 543 992 b 847 699 737 992 847 889 z "
    },
    Q: {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 528 88 b 665 115 575 88 621 97 l 556 203 l 625 283 l 757 178 b 871 496 827 248 871 362 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 b 528 88 185 268 297 88 z m 853 101 l 983 -1 l 917 -85 l 765 36 b 528 -22 699 -3 619 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 853 101 1003 327 942 191 z "
    },
    R: {
        ha: 951,
        x_min: 0,
        x_max: 0,
        o: "m 876 732 b 704 481 876 599 814 511 l 704 478 b 911 0 929 434 808 124 l 764 0 b 745 42 755 10 748 24 b 728 244 734 103 740 182 b 563 424 712 349 684 424 l 240 424 l 240 0 l 108 0 l 108 992 l 575 992 b 876 732 752 992 876 903 z m 744 711 b 568 881 744 820 683 881 l 240 881 l 240 535 l 515 535 b 744 711 650 535 744 575 z "
    },
    S: {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 807 701 l 682 701 b 436 904 668 837 581 904 b 214 735 312 904 214 859 b 241 660 214 704 223 679 b 415 584 280 619 346 598 b 849 272 612 543 849 512 b 813 137 849 219 837 174 b 461 -22 749 35 623 -22 b 51 326 225 -22 51 89 l 176 326 b 201 219 176 285 184 249 b 465 88 246 135 339 88 b 717 268 601 88 717 131 b 690 351 717 302 708 330 b 399 462 630 422 507 438 b 82 725 246 496 82 537 b 113 855 82 775 92 818 b 442 1015 169 956 288 1015 b 807 701 659 1015 800 913 z "
    },
    T: {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 333 881 l 3 881 l 3 992 l 796 992 l 796 881 l 465 881 l 465 0 l 333 0 z "
    },
    U: {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 510 -22 b 103 358 251 -22 103 96 l 103 992 l 235 992 l 235 358 b 510 88 235 181 332 88 b 768 358 682 88 768 184 l 768 992 l 900 992 l 900 358 b 510 -22 900 106 761 -22 z "
    },
    V: {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 499 0 l 349 0 l 0 992 l 142 992 l 425 132 l 428 132 l 714 992 l 851 992 z "
    },
    W: {
        ha: 1286,
        x_min: 0,
        x_max: 0,
        o: "m 1004 0 l 867 0 l 640 833 l 638 833 l 408 0 l 271 0 l 17 992 l 151 992 l 346 167 l 349 167 l 571 992 l 714 992 l 933 167 l 936 167 l 1138 992 l 1269 992 z "
    },
    X: {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 344 510 l 18 992 l 176 992 l 424 604 l 682 992 l 829 992 l 501 510 l 850 0 l 689 0 l 422 410 l 147 0 l 0 0 z "
    },
    Y: {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 386 0 l 386 406 l 3 992 l 160 992 l 457 519 l 747 992 l 897 992 l 518 406 l 518 0 z "
    },
    Z: {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 31 0 l 31 111 l 647 881 l 78 881 l 78 992 l 803 992 l 803 881 l 188 111 l 819 111 l 819 0 z "
    },
    "[": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 360 921 l 211 921 l 211 -179 l 360 -179 l 360 -274 l 100 -274 l 100 1015 l 360 1015 z "
    },
    "\\": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 488 -22 l 386 -22 l -24 1015 l 76 1015 z "
    },
    "]": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 0 -179 l 149 -179 l 149 921 l 0 921 l 0 1015 l 260 1015 l 260 -274 l 0 -274 z "
    },
    "^": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 372 968 l 461 968 l 764 367 l 667 367 l 415 867 l 168 367 l 69 367 z "
    },
    _: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 0 -103 l 694 -103 l 694 -172 l 0 -172 z "
    },
    "`": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -31 1015 l 119 1015 l 239 817 l 150 817 z "
    },
    a: {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    b: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 443 735 b 588 704 499 735 547 725 b 774 357 703 648 774 525 b 446 -15 774 140 664 -15 b 214 96 340 -15 255 28 l 211 96 l 211 0 l 93 0 l 93 992 l 211 992 l 211 621 l 214 621 b 443 735 250 695 336 735 z m 426 631 b 325 607 387 631 353 623 b 207 360 249 564 207 477 b 433 88 207 205 277 88 b 649 365 589 88 649 211 b 426 631 649 513 575 631 z "
    },
    c: {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 699 488 l 576 488 b 399 631 559 575 502 631 b 175 350 237 631 175 510 b 385 88 175 205 239 88 b 582 263 505 88 568 155 l 703 263 b 386 -15 678 92 577 -15 b 50 350 165 -15 50 129 b 389 735 50 575 163 735 b 699 488 567 735 681 649 z "
    },
    d: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 175 353 b 397 88 175 205 248 88 b 499 111 437 88 471 95 b 617 358 575 154 617 241 b 390 631 617 514 546 631 b 175 353 235 631 175 507 z m 381 -15 b 235 15 325 -15 277 -5 b 50 361 121 72 50 192 b 378 735 50 577 160 735 b 610 622 484 735 568 690 l 613 622 l 613 992 l 731 992 l 731 0 l 613 0 l 613 97 l 610 97 b 381 -15 573 23 487 -15 z "
    },
    e: {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 175 428 l 588 428 b 381 631 580 543 503 631 b 175 428 257 631 183 544 z m 585 228 l 701 228 b 394 -15 672 77 568 -15 b 50 361 163 -15 58 138 b 75 511 50 416 58 466 b 388 735 120 634 223 735 b 547 695 451 735 504 722 b 713 324 654 628 720 495 l 175 324 b 399 88 171 179 255 87 b 585 228 504 88 565 138 z "
    },
    f: {
        ha: 411,
        x_min: 0,
        x_max: 0,
        o: "m 336 1003 b 413 992 361 1003 393 998 l 413 889 b 346 899 395 895 369 899 b 256 818 286 899 256 879 l 256 718 l 394 718 l 394 614 l 256 614 l 256 0 l 138 0 l 138 614 l 17 614 l 17 718 l 138 718 l 138 825 b 336 1003 138 946 212 1003 z "
    },
    g: {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 375 -290 b 78 -79 221 -290 85 -228 l 196 -79 b 216 -133 197 -100 203 -119 b 382 -196 250 -173 310 -196 b 597 75 539 -196 597 -83 l 597 122 l 594 122 b 371 -7 559 44 477 -7 b 231 22 317 -7 270 3 b 50 356 119 77 50 192 b 382 735 50 573 160 735 b 596 615 484 735 558 686 l 597 615 l 597 718 l 708 718 l 708 61 b 375 -290 708 -172 607 -290 z m 592 374 b 388 631 592 515 530 631 b 175 369 239 631 175 517 b 378 96 175 222 229 96 b 592 374 529 96 592 224 z "
    },
    h: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 436 735 b 683 472 609 735 683 644 l 683 0 l 565 0 l 565 486 b 419 631 565 575 509 631 b 207 406 281 631 207 543 l 207 0 l 89 0 l 89 992 l 207 992 l 207 613 l 210 613 b 436 735 242 690 329 735 z "
    },
    i: {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 214 847 l 96 847 l 96 992 l 214 992 z m 96 718 l 214 718 l 214 0 l 96 0 z "
    },
    j: {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 214 847 l 96 847 l 96 992 l 214 992 z m 42 -274 b -18 -268 20 -274 0 -272 l -18 -167 b 4 -169 -10 -168 -5 -169 l 29 -169 b 96 -71 88 -169 96 -136 l 96 718 l 214 718 l 214 -90 b 42 -274 214 -210 155 -274 z "
    },
    k: {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 96 992 l 214 992 l 214 404 l 542 718 l 700 718 l 415 457 l 721 0 l 571 0 l 325 375 l 214 272 l 214 0 l 96 0 z "
    },
    l: {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 96 992 l 214 992 l 214 0 l 96 0 z "
    },
    m: {
        ha: 1185,
        x_min: 0,
        x_max: 0,
        o: "m 632 613 b 857 735 675 681 752 735 b 1096 526 1003 735 1096 673 l 1096 0 l 978 0 l 978 471 b 839 631 978 573 942 631 b 651 447 725 631 651 560 l 651 0 l 533 0 l 533 471 b 399 631 533 570 499 631 b 310 610 364 631 335 624 b 207 447 259 580 207 522 l 207 0 l 89 0 l 89 718 l 200 718 l 200 613 l 203 613 b 435 735 256 694 334 735 b 632 613 535 735 605 693 z "
    },
    n: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 683 472 l 683 0 l 565 0 l 565 486 b 419 631 565 575 509 631 b 207 406 281 631 207 543 l 207 0 l 89 0 l 89 718 l 200 718 l 200 604 l 203 604 b 436 735 252 691 330 735 b 683 472 609 735 683 644 z "
    },
    o: {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    p: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 443 735 b 588 704 499 735 547 725 b 774 357 703 648 774 525 b 446 -15 774 140 664 -15 b 214 96 340 -15 255 28 l 211 96 l 211 -274 l 93 -274 l 93 718 l 211 718 l 211 621 l 214 621 b 443 735 250 695 336 735 z m 426 631 b 325 607 387 631 353 623 b 207 360 249 564 207 477 b 433 88 207 205 277 88 b 649 365 589 88 649 211 b 426 631 649 513 575 631 z "
    },
    q: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 175 353 b 397 88 175 205 248 88 b 499 111 437 88 471 95 b 617 358 575 154 617 241 b 390 631 617 514 546 631 b 175 353 235 631 175 507 z m 381 -15 b 235 15 325 -15 277 -5 b 50 361 121 72 50 192 b 378 735 50 577 160 735 b 610 622 484 735 568 690 l 613 622 l 613 718 l 731 718 l 731 -274 l 613 -274 l 613 97 l 610 97 b 381 -15 573 23 487 -15 z "
    },
    r: {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 463 735 l 463 610 b 203 319 276 610 203 506 l 203 0 l 85 0 l 85 718 l 196 718 l 196 567 l 199 567 b 463 735 249 670 319 739 z "
    },
    s: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 43 226 l 161 226 b 354 88 165 125 249 88 b 528 194 440 88 528 108 b 493 264 528 225 516 248 b 58 531 357 356 58 301 b 83 624 58 567 66 598 b 326 735 126 694 215 735 b 621 510 501 735 610 675 l 503 510 b 336 631 496 594 426 631 b 183 539 262 631 183 612 b 260 455 183 492 223 469 b 653 210 408 396 653 418 b 626 101 653 166 644 130 b 347 -15 575 21 475 -15 b 43 226 171 -15 50 56 z "
    },
    t: {
        ha: 438,
        x_min: 0,
        x_max: 0,
        o: "m 253 718 l 396 718 l 396 614 l 253 614 l 253 168 b 342 104 253 107 281 104 l 396 104 l 396 0 l 306 0 b 227 6 275 0 249 2 b 135 157 156 20 135 70 l 135 614 l 13 614 l 13 718 l 135 718 l 135 933 l 253 933 z "
    },
    u: {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 336 -15 b 89 246 163 -15 89 74 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    v: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 413 0 l 286 0 l 19 718 l 151 718 l 353 119 l 356 119 l 551 718 l 675 718 z "
    },
    w: {
        ha: 1053,
        x_min: 0,
        x_max: 0,
        o: "m 800 0 l 675 0 l 529 571 l 526 571 l 382 0 l 254 0 l 24 718 l 154 718 l 317 131 l 319 131 l 464 718 l 593 718 l 743 131 l 746 131 l 907 718 l 1029 718 z "
    },
    x: {
        ha: 719,
        x_min: 0,
        x_max: 0,
        o: "m 282 378 l 32 718 l 183 718 l 356 467 l 535 718 l 676 718 l 429 388 l 707 0 l 556 0 l 356 297 l 156 0 l 13 0 z "
    },
    y: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -274 l 81 -165 b 150 -182 101 -172 124 -182 b 247 -117 204 -182 227 -154 l 296 4 l 11 718 l 144 718 l 354 131 l 357 131 l 558 718 l 683 718 l 371 -94 b 163 -286 332 -192 294 -286 b 81 -274 132 -286 104 -282 z "
    },
    z: {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 31 0 l 31 90 l 464 614 l 58 614 l 58 718 l 617 718 l 617 638 l 178 104 l 636 104 l 636 0 z "
    },
    "{": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 293 813 l 293 558 b 172 372 293 467 244 388 l 172 368 b 205 357 181 367 191 363 b 293 182 259 331 293 267 l 293 -71 b 360 -190 293 -127 304 -190 l 429 -190 l 429 -274 l 332 -274 b 279 -262 314 -274 297 -270 b 182 -92 222 -236 182 -176 l 182 160 b 67 322 182 241 145 322 l 67 417 b 110 428 81 417 96 421 b 182 581 154 454 182 510 l 182 833 b 196 912 182 863 187 889 b 332 1015 217 965 262 1015 l 429 1015 l 429 932 l 360 932 b 293 813 303 932 293 870 z "
    },
    "|": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 107 1092 l 201 1092 l 201 -296 l 107 -296 z "
    },
    "}": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 169 -71 l 169 182 b 290 368 169 273 218 352 l 290 372 b 258 383 282 373 271 377 b 169 558 203 410 169 474 l 169 810 b 103 932 169 868 160 932 l 33 932 l 33 1015 l 131 1015 b 183 1003 148 1015 166 1011 b 281 833 241 978 281 917 l 281 581 b 396 417 281 500 317 417 l 396 322 b 353 310 381 322 367 318 b 281 160 309 285 281 229 l 281 -92 b 267 -170 281 -121 276 -147 b 131 -274 245 -223 201 -274 l 33 -274 l 33 -190 l 103 -190 b 169 -71 159 -190 169 -128 z "
    },
    "~": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 263 354 b 146 249 197 354 167 294 l 96 318 b 269 438 127 380 176 438 b 344 424 294 438 319 433 b 500 357 397 406 452 382 b 565 338 525 344 547 338 b 603 347 579 338 592 341 b 688 443 641 368 663 408 l 738 374 b 564 254 699 318 656 254 b 263 354 438 254 392 354 z "
    },
    "\xc2\xa0": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xc2\xa1": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 257 564 l 103 564 l 103 718 l 257 718 z m 114 -274 l 114 31 l 149 463 l 211 463 l 246 31 l 246 -274 z "
    },
    "\xc2\xa2": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 714 488 l 593 488 b 432 631 575 569 525 627 l 432 88 b 600 263 532 97 585 169 l 718 263 b 432 -15 702 109 603 -15 l 432 -160 l 378 -160 l 378 -15 b 243 16 327 -13 282 -3 b 64 350 132 70 64 187 b 378 735 64 566 175 720 l 378 867 l 432 867 l 432 735 b 714 488 600 731 693 642 z m 378 88 l 378 631 b 189 350 242 613 189 502 b 378 88 189 210 248 98 z "
    },
    "\xc2\xa3": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 81 733 b 106 852 81 778 89 817 b 397 1015 154 948 256 1015 b 725 657 614 1015 729 883 l 607 657 b 404 911 604 805 549 911 b 206 729 293 911 206 840 b 278 517 206 637 246 579 l 499 517 l 499 454 l 308 454 b 336 350 322 426 336 391 b 175 89 336 217 250 150 l 178 86 b 324 126 223 105 263 126 b 456 106 375 126 416 115 b 572 81 491 95 528 81 b 696 132 621 81 667 110 l 756 40 b 553 -22 707 -2 637 -22 b 269 33 446 -22 378 33 b 131 -14 210 33 169 11 l 65 76 b 218 325 139 125 218 204 b 183 454 218 371 198 421 l 65 454 l 65 517 l 146 517 b 81 733 110 577 81 640 z "
    },
    "\xc2\xa4": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 390 728 b 298 709 357 728 326 722 b 157 485 219 674 157 597 b 175 390 157 451 163 420 b 389 244 207 311 280 244 b 479 264 421 244 451 251 b 615 488 556 300 615 377 b 598 580 615 520 609 551 b 390 728 567 659 498 728 z m 114 690 l 35 771 l 103 839 l 181 761 b 390 832 229 801 306 832 b 589 763 470 832 544 801 l 668 840 l 738 769 l 661 693 b 733 488 705 646 733 573 b 661 279 733 400 704 330 l 738 201 l 672 136 l 594 217 b 389 140 547 172 476 140 b 178 215 297 140 228 170 l 101 135 l 35 201 l 111 282 b 39 485 70 332 39 399 b 114 690 39 572 68 644 z "
    },
    "\xc2\xa5": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 322 242 l 126 242 l 126 325 l 322 325 l 322 383 l 297 429 l 126 429 l 126 513 l 254 513 l 0 992 l 151 992 l 393 501 l 628 992 l 772 992 l 525 513 l 654 513 l 654 429 l 479 429 l 454 383 l 454 325 l 654 325 l 654 242 l 454 242 l 454 0 l 322 0 z "
    },
    "\xc2\xa6": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 201 571 l 107 571 l 107 918 l 201 918 z m 107 224 l 201 224 l 201 -122 l 107 -122 z "
    },
    "\xc2\xa7": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 646 758 l 528 758 b 388 911 526 844 476 911 b 256 792 310 911 256 872 b 275 731 256 769 262 749 b 486 588 322 666 411 628 b 717 318 586 533 717 470 b 572 114 717 218 647 144 b 654 -51 627 73 654 18 b 635 -142 654 -85 648 -115 b 394 -274 597 -223 512 -274 b 115 -11 225 -274 126 -171 l 233 -11 b 392 -169 235 -104 297 -169 b 532 -54 467 -169 532 -130 b 511 10 532 -31 525 -10 b 290 161 462 78 369 118 b 49 451 182 219 49 287 b 197 643 49 549 119 622 b 133 790 162 680 133 723 b 156 886 133 826 141 858 b 390 1015 196 961 278 1015 b 646 758 552 1015 642 923 z m 603 301 b 503 435 603 368 546 409 b 264 583 423 486 342 530 b 163 457 215 567 163 520 b 257 319 163 385 211 347 b 503 172 339 269 424 225 b 603 301 552 192 603 235 z "
    },
    "\xc2\xa8": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -37 967 l 86 967 l 86 822 l -37 822 z m 222 967 l 347 967 l 347 822 l 222 822 z "
    },
    "\xc2\xa9": {
        ha: 1111,
        x_min: 0,
        x_max: 0,
        o: "m 743 396 l 832 396 b 574 178 805 274 714 178 b 446 202 526 178 484 186 b 265 496 339 247 265 346 b 569 813 265 687 378 813 b 831 601 713 813 810 730 l 743 601 b 571 736 728 679 664 736 b 360 499 433 736 360 636 b 574 254 360 363 438 254 b 743 396 668 254 730 314 z m 128 499 b 160 322 128 435 139 376 b 557 53 220 173 353 53 b 725 87 617 53 673 64 b 983 499 871 151 983 291 b 951 672 983 561 972 619 b 557 939 892 818 758 939 b 387 905 496 939 439 928 b 128 499 241 842 128 704 z m 33 499 b 188 867 33 659 102 783 b 557 1015 273 949 399 1015 b 924 867 715 1015 839 949 b 1078 499 1009 783 1078 658 b 1036 291 1078 424 1064 354 b 557 -22 961 119 799 -22 b 188 126 399 -22 273 42 b 33 499 102 210 33 336 z "
    },
    "\xc2\xaa": {
        ha: 525,
        x_min: 0,
        x_max: 0,
        o: "m 357 693 l 357 758 b 129 654 297 721 129 752 b 215 597 129 606 169 597 b 357 693 288 597 357 625 z m 460 597 l 475 597 b 490 600 480 597 485 598 l 490 539 b 431 528 472 532 456 528 b 360 592 386 528 363 549 b 197 528 320 549 266 528 b 35 651 108 528 35 563 b 281 799 35 778 170 784 b 361 847 320 804 361 809 b 254 915 361 906 312 915 b 139 838 189 915 143 898 l 56 838 b 260 985 59 944 150 985 b 440 864 355 985 440 959 l 440 642 b 460 597 440 617 441 597 z "
    },
    "\xc2\xab": {
        ha: 643,
        x_min: 0,
        x_max: 0,
        o: "m 69 325 l 69 447 l 281 614 l 281 494 l 142 386 l 281 278 l 281 158 z m 342 325 l 342 447 l 553 614 l 553 494 l 414 386 l 553 278 l 553 158 z "
    },
    "\xc2\xac": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 767 151 l 672 151 l 672 444 l 67 444 l 67 539 l 767 539 z "
    },
    "\xc2\xae": {
        ha: 1111,
        x_min: 0,
        x_max: 0,
        o: "m 707 631 b 574 724 707 705 648 724 l 449 724 l 449 531 l 547 531 b 707 631 638 531 707 539 z m 801 626 b 642 461 801 520 735 471 l 815 193 l 714 193 l 549 454 l 449 454 l 449 193 l 354 193 l 354 800 l 589 800 b 801 626 722 800 801 753 z m 128 499 b 160 322 128 435 139 376 b 557 53 220 173 353 53 b 725 87 617 53 673 64 b 983 499 871 151 983 291 b 951 672 983 561 972 619 b 557 939 892 818 758 939 b 387 905 496 939 439 928 b 128 499 241 842 128 704 z m 33 499 b 188 867 33 659 102 783 b 557 1015 273 949 399 1015 b 924 867 715 1015 839 949 b 1078 499 1009 783 1078 658 b 1036 291 1078 424 1064 354 b 557 -22 961 119 799 -22 b 188 126 399 -22 273 42 b 33 499 102 210 33 336 z "
    },
    "\xc2\xaf": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -81 938 l 392 938 l 392 861 l -81 861 z "
    },
    "\xc2\xb0": {
        ha: 556,
        x_min: 0,
        x_max: 0,
        o: "m 278 654 b 408 785 354 654 408 709 b 278 915 408 860 354 915 b 147 785 201 915 147 860 b 278 654 147 709 201 654 z m 78 785 b 93 863 78 813 83 838 b 278 985 121 929 185 985 b 356 969 306 985 331 979 b 478 785 421 940 478 877 b 462 706 478 757 472 731 b 278 585 433 640 371 585 b 199 600 250 585 224 590 b 78 785 132 628 78 691 z "
    },
    "\xc2\xb1": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 94 l 767 94 l 767 0 l 67 0 z m 67 471 l 369 471 l 369 701 l 464 701 l 464 471 l 767 471 l 767 376 l 464 376 l 464 144 l 369 144 l 369 376 l 67 376 z "
    },
    "\xc2\xb2": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 449 810 b 435 741 449 784 444 761 b 233 574 397 659 310 617 b 114 465 188 549 127 518 l 440 465 l 440 389 l 19 389 b 264 674 28 560 155 604 b 354 811 311 704 354 737 b 239 908 354 872 301 908 b 125 771 159 908 125 847 l 31 771 b 243 985 31 899 115 985 b 449 810 358 985 449 924 z "
    },
    "\xc2\xb3": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 332 822 b 225 908 332 880 283 908 b 114 789 150 908 114 861 l 19 789 b 225 985 27 909 99 985 b 426 822 338 985 426 935 b 332 704 426 763 377 722 l 332 701 b 453 560 406 688 453 640 b 228 379 453 437 350 379 b 6 575 99 379 6 446 l 100 575 b 228 456 102 495 144 456 b 358 556 294 456 358 490 b 229 663 358 629 302 663 l 183 663 l 183 732 l 217 732 b 332 822 279 732 332 758 z "
    },
    "\xc2\xb4": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 189 1015 l 340 1015 l 158 817 l 69 817 z "
    },
    "\xc2\xb5": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 336 -15 b 210 36 276 -15 234 -1 l 207 36 l 207 -274 l 89 -274 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    "\xc2\xb6": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 383 992 l 715 992 l 715 -214 l 621 -214 l 621 915 l 451 915 l 451 -214 l 357 -214 l 357 447 b 240 467 314 447 275 454 b 67 706 146 503 67 581 b 383 992 67 893 193 992 z "
    },
    "\xc2\xb7": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 193 521 b 282 432 241 521 282 480 b 194 343 282 387 240 343 b 104 432 147 343 104 384 b 193 521 104 480 145 521 z "
    },
    "\xc2\xb8": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 7 -264 l 32 -203 b 117 -221 53 -212 87 -221 b 203 -178 152 -221 203 -212 b 138 -135 203 -148 169 -135 b 81 -146 113 -135 100 -139 l 57 -107 l 142 0 l 200 0 l 142 -72 l 144 -75 b 190 -65 154 -69 169 -65 b 307 -167 253 -65 307 -101 b 135 -290 307 -256 223 -290 b 7 -264 86 -290 46 -277 z "
    },
    "\xc2\xb9": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 276 985 l 346 985 l 346 389 l 251 389 l 251 817 l 92 817 l 92 886 b 276 985 184 886 258 910 z "
    },
    "\xc2\xba": {
        ha: 533,
        x_min: 0,
        x_max: 0,
        o: "m 129 754 b 268 597 129 661 174 597 b 404 753 361 597 404 661 b 267 915 404 852 362 915 b 129 754 177 915 129 852 z m 499 754 b 268 528 499 614 413 528 b 35 754 126 528 35 613 b 267 985 35 895 124 985 b 499 754 411 985 499 897 z "
    },
    "\xc2\xbb": {
        ha: 643,
        x_min: 0,
        x_max: 0,
        o: "m 574 447 l 574 325 l 363 158 l 363 278 l 501 386 l 363 494 l 363 614 z m 301 447 l 301 325 l 90 158 l 90 278 l 229 386 l 90 494 l 90 614 z "
    },
    "\xc2\xbc": {
        ha: 1158,
        x_min: 0,
        x_max: 0,
        o: "m 235 985 l 304 985 l 304 389 l 210 389 l 210 817 l 50 817 l 50 886 b 235 985 143 886 216 908 z m 813 1007 l 901 1007 l 297 -37 l 208 -37 z m 918 478 l 915 478 l 710 210 l 918 210 z m 1004 210 l 1088 210 l 1088 133 l 1004 133 l 1004 0 l 918 0 l 918 133 l 642 133 l 642 214 l 933 596 l 1004 596 z "
    },
    "\xc2\xbd": {
        ha: 1158,
        x_min: 0,
        x_max: 0,
        o: "m 1115 421 b 1101 352 1115 395 1111 372 b 899 185 1063 270 976 228 b 781 76 854 160 794 129 l 1107 76 l 1107 0 l 686 0 b 931 285 695 171 821 215 b 1021 422 978 315 1021 349 b 906 519 1021 483 968 519 b 792 382 826 519 792 458 l 697 382 b 910 596 697 510 781 596 b 1115 421 1024 596 1115 535 z m 235 985 l 304 985 l 304 389 l 210 389 l 210 817 l 50 817 l 50 886 b 235 985 143 886 216 908 z m 792 1007 l 881 1007 l 276 -37 l 188 -37 z "
    },
    "\xc2\xbe": {
        ha: 1158,
        x_min: 0,
        x_max: 0,
        o: "m 394 822 b 288 908 394 880 346 908 b 176 789 213 908 176 861 l 82 789 b 288 985 89 909 162 985 b 489 822 400 985 489 935 b 394 704 489 763 439 722 l 394 701 b 515 560 468 688 515 640 b 290 379 515 437 413 379 b 68 575 161 379 68 446 l 163 575 b 290 456 164 495 207 456 b 421 556 357 456 421 490 b 292 663 421 629 365 663 l 246 663 l 246 732 l 279 732 b 394 822 341 732 394 758 z m 903 1007 l 992 1007 l 388 -37 l 299 -37 z m 943 472 l 940 472 l 735 204 l 943 204 z m 1028 210 l 1111 210 l 1111 133 l 1028 133 l 1028 0 l 942 0 l 942 133 l 665 133 l 665 214 l 957 596 l 1028 596 z "
    },
    "\xc2\xbf": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 468 564 l 314 564 l 314 718 l 468 718 z m 581 42 l 699 42 b 679 -90 700 -6 693 -49 b 388 -290 640 -204 540 -290 b 94 -12 211 -290 94 -190 b 214 222 94 104 154 166 b 335 428 268 273 335 325 l 335 471 l 453 471 l 453 417 b 328 185 447 305 390 241 b 219 -24 273 136 214 81 b 388 -186 227 -122 284 -186 b 581 42 519 -186 581 -90 z "
    },
    "\xc3\x80": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 264 1261 l 415 1261 l 535 1063 l 446 1063 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x81": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 485 1261 l 636 1261 l 454 1063 l 365 1063 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x82": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 385 1261 l 514 1261 l 658 1063 l 542 1063 l 446 1196 l 349 1063 l 242 1063 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x83": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 619 1233 l 692 1233 b 649 1122 686 1192 672 1155 b 539 1079 624 1095 592 1079 b 354 1133 471 1079 423 1133 b 288 1075 323 1133 284 1109 l 215 1075 b 361 1228 236 1149 267 1228 b 464 1201 401 1228 435 1213 b 556 1172 490 1189 521 1172 b 619 1233 593 1172 610 1206 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x84": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 257 1213 l 382 1213 l 382 1068 l 257 1068 z m 518 1213 l 643 1213 l 643 1068 l 518 1068 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x85": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 293 1165 b 306 1226 293 1187 297 1207 b 450 1322 328 1277 378 1322 b 510 1310 471 1322 491 1318 b 607 1165 562 1287 607 1238 b 594 1105 607 1144 603 1124 b 450 1008 572 1053 522 1008 b 390 1021 429 1008 409 1013 b 293 1165 338 1043 293 1093 z m 450 1071 b 544 1165 503 1071 544 1112 b 450 1260 544 1219 503 1260 b 356 1165 397 1260 356 1219 b 450 1071 356 1112 397 1071 z m 279 410 l 615 410 l 450 872 l 447 872 z m 378 992 l 524 992 l 911 0 l 765 0 l 657 299 l 238 299 l 126 0 l -8 0 z "
    },
    "\xc3\x86": {
        ha: 1286,
        x_min: 0,
        x_max: 0,
        o: "m 622 881 l 565 881 l 332 400 l 622 400 z m 622 289 l 281 289 l 139 0 l -8 0 l 492 992 l 1235 992 l 1235 881 l 747 881 l 747 565 l 1206 565 l 1206 454 l 747 454 l 747 111 l 1243 111 l 1243 0 l 622 0 z "
    },
    "\xc3\x87": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 528 904 b 376 871 469 904 418 893 b 192 503 259 809 192 678 b 529 88 192 267 293 88 b 645 109 573 88 611 95 b 815 374 744 151 806 243 l 947 374 b 529 -21 922 138 781 -17 l 489 -72 l 492 -75 b 538 -65 501 -69 516 -65 b 654 -167 600 -65 654 -101 b 482 -290 654 -256 571 -290 b 354 -264 433 -290 393 -277 l 379 -203 b 464 -221 400 -212 434 -221 b 550 -178 499 -221 550 -212 b 485 -135 550 -148 516 -135 b 428 -146 460 -135 447 -139 l 404 -107 l 472 -19 b 290 31 403 -14 342 3 b 60 493 144 111 60 270 b 90 697 60 565 70 633 b 529 1015 149 879 290 1015 b 938 693 756 1015 909 894 l 806 693 b 528 904 778 823 678 904 z "
    },
    "\xc3\x88": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 239 1261 l 390 1261 l 510 1063 l 421 1063 z m 108 992 l 793 992 l 793 881 l 240 881 l 240 565 l 756 565 l 756 454 l 240 454 l 240 111 l 797 111 l 797 0 l 108 0 z "
    },
    "\xc3\x89": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 460 1261 l 611 1261 l 429 1063 l 340 1063 z m 108 992 l 793 992 l 793 881 l 240 881 l 240 565 l 756 565 l 756 454 l 240 454 l 240 111 l 797 111 l 797 0 l 108 0 z "
    },
    "\xc3\x8a": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 360 1261 l 489 1261 l 633 1063 l 517 1063 l 421 1196 l 324 1063 l 217 1063 z m 108 992 l 793 992 l 793 881 l 240 881 l 240 565 l 756 565 l 756 454 l 240 454 l 240 111 l 797 111 l 797 0 l 108 0 z "
    },
    "\xc3\x8b": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 232 1213 l 357 1213 l 357 1068 l 232 1068 z m 493 1213 l 618 1213 l 618 1068 l 493 1068 z m 108 992 l 793 992 l 793 881 l 240 881 l 240 565 l 756 565 l 756 454 l 240 454 l 240 111 l 797 111 l 797 0 l 108 0 z "
    },
    "\xc3\x8c": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m -4 1261 l 146 1261 l 265 1063 l 176 1063 z m 114 992 l 246 992 l 246 0 l 114 0 z "
    },
    "\xc3\x8d": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 215 1261 l 367 1261 l 185 1063 l 96 1063 z m 114 992 l 246 992 l 246 0 l 114 0 z "
    },
    "\xc3\x8e": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 115 1261 l 244 1261 l 389 1063 l 272 1063 l 176 1196 l 79 1063 l -26 1063 z m 114 992 l 246 992 l 246 0 l 114 0 z "
    },
    "\xc3\x8f": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m -11 1213 l 113 1213 l 113 1068 l -11 1068 z m 249 1213 l 374 1213 l 374 1068 l 249 1068 z m 114 992 l 246 992 l 246 0 l 114 0 z "
    },
    "\xc3\x90": {
        ha: 978,
        x_min: 0,
        x_max: 0,
        o: "m 793 501 b 463 881 793 741 702 881 l 240 881 l 240 565 l 538 565 l 538 471 l 240 471 l 240 111 l 460 111 b 793 501 690 111 793 264 z m 925 519 b 449 0 925 188 780 0 l 108 0 l 108 471 l 11 471 l 11 565 l 108 565 l 108 992 l 449 992 b 925 519 759 992 925 833 z "
    },
    "\xc3\x91": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 671 1233 l 743 1233 b 700 1122 738 1192 723 1155 b 590 1079 675 1095 643 1079 b 406 1133 522 1079 475 1133 b 339 1075 375 1133 335 1109 l 267 1075 b 413 1228 287 1149 319 1228 b 515 1201 452 1228 486 1213 b 607 1172 542 1189 573 1172 b 671 1233 644 1172 662 1206 z m 107 992 l 247 992 l 769 188 l 772 188 l 772 992 l 897 992 l 897 0 l 753 0 l 235 796 l 232 796 l 232 0 l 107 0 z "
    },
    "\xc3\x92": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 342 1261 l 493 1261 l 613 1063 l 524 1063 z m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    "\xc3\x93": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 563 1261 l 714 1261 l 532 1063 l 443 1063 z m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    "\xc3\x94": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 463 1261 l 592 1261 l 736 1063 l 619 1063 l 524 1196 l 426 1063 l 319 1063 z m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    "\xc3\x95": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 697 1233 l 769 1233 b 726 1122 764 1192 750 1155 b 617 1079 701 1095 669 1079 b 432 1133 549 1079 501 1133 b 365 1075 401 1133 362 1109 l 293 1075 b 439 1228 313 1149 345 1228 b 542 1201 479 1228 513 1213 b 633 1172 568 1189 599 1172 b 697 1233 670 1172 688 1206 z m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    "\xc3\x96": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 335 1213 l 460 1213 l 460 1068 l 335 1068 z m 596 1213 l 721 1213 l 721 1068 l 596 1068 z m 185 496 b 528 88 185 268 297 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 528 904 871 724 758 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 z m 53 496 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 735 972 606 1015 675 1001 b 1003 496 896 894 1003 729 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 321 20 449 -22 380 -8 b 53 496 160 97 53 263 z "
    },
    "\xc3\x97": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 99 100 l 351 353 l 100 603 l 167 669 l 418 419 l 668 669 l 735 603 l 485 353 l 736 100 l 669 33 l 418 286 l 165 33 z "
    },
    "\xc3\x98": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 850 893 l 960 1014 l 1004 972 l 890 847 b 1003 496 961 760 1003 644 b 973 301 1003 428 993 363 b 528 -22 914 116 770 -22 b 210 96 387 -22 284 25 l 97 -26 l 51 14 l 168 142 b 53 496 98 227 53 349 b 83 691 53 563 63 628 b 528 1015 141 875 286 1015 b 850 893 673 1015 776 967 z m 804 751 l 292 186 b 528 88 343 127 419 88 b 683 123 588 88 640 99 b 871 496 801 187 871 319 b 804 751 871 597 846 686 z m 254 236 l 767 801 b 528 904 715 862 637 904 b 372 869 468 904 416 892 b 185 496 255 805 185 672 b 254 236 185 391 211 303 z "
    },
    "\xc3\x99": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 315 1261 l 467 1261 l 586 1063 l 497 1063 z m 510 -22 b 103 358 251 -22 103 96 l 103 992 l 235 992 l 235 358 b 510 88 235 181 332 88 b 768 358 682 88 768 184 l 768 992 l 900 992 l 900 358 b 510 -22 900 106 761 -22 z "
    },
    "\xc3\x9a": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 536 1261 l 688 1261 l 506 1063 l 417 1063 z m 510 -22 b 103 358 251 -22 103 96 l 103 992 l 235 992 l 235 358 b 510 88 235 181 332 88 b 768 358 682 88 768 184 l 768 992 l 900 992 l 900 358 b 510 -22 900 106 761 -22 z "
    },
    "\xc3\x9b": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 436 1261 l 565 1261 l 710 1063 l 593 1063 l 497 1196 l 400 1063 l 293 1063 z m 510 -22 b 103 358 251 -22 103 96 l 103 992 l 235 992 l 235 358 b 510 88 235 181 332 88 b 768 358 682 88 768 184 l 768 992 l 900 992 l 900 358 b 510 -22 900 106 761 -22 z "
    },
    "\xc3\x9c": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 308 1213 l 433 1213 l 433 1068 l 308 1068 z m 569 1213 l 694 1213 l 694 1068 l 569 1068 z m 510 -22 b 103 358 251 -22 103 96 l 103 992 l 235 992 l 235 358 b 510 88 235 181 332 88 b 768 358 682 88 768 184 l 768 992 l 900 992 l 900 358 b 510 -22 900 106 761 -22 z "
    },
    "\xc3\x9d": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 485 1261 l 636 1261 l 454 1063 l 365 1063 z m 386 0 l 386 406 l 3 992 l 160 992 l 457 519 l 747 992 l 897 992 l 518 406 l 518 0 z "
    },
    "\xc3\x9e": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 715 539 b 499 722 715 671 638 722 l 240 722 l 240 358 l 499 358 b 715 539 636 357 715 409 z m 847 539 b 543 247 847 349 737 245 l 240 247 l 240 0 l 108 0 l 108 992 l 240 992 l 240 833 l 543 833 b 847 539 737 833 847 729 z "
    },
    "\xc3\x9f": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 507 557 l 507 554 b 590 526 538 550 566 541 b 696 306 654 484 696 410 b 672 174 696 257 688 214 b 375 -15 628 63 528 -15 b 315 -10 354 -15 334 -13 l 315 92 b 363 88 329 88 346 88 b 571 290 488 88 571 166 b 315 499 571 458 481 499 l 315 593 b 526 754 439 585 526 635 b 372 911 526 844 463 911 b 207 717 251 911 207 841 l 207 0 l 89 0 l 89 738 b 108 851 89 779 95 817 b 364 1015 146 948 231 1015 b 467 1000 398 1015 432 1010 b 651 772 565 971 651 898 b 507 557 651 654 603 587 z "
    },
    "\xc3\xa0": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 188 1015 l 339 1015 l 458 817 l 369 817 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa1": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 408 1015 l 560 1015 l 378 817 l 289 817 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa2": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 308 1015 l 438 1015 l 582 817 l 465 817 l 369 950 l 272 817 l 165 817 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa3": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 543 988 l 615 988 b 572 876 610 946 595 909 b 463 833 547 850 515 833 b 278 888 395 833 347 888 b 211 829 247 888 208 863 l 139 829 b 285 982 159 903 191 982 b 388 955 324 982 359 968 b 479 926 414 943 445 926 b 543 988 516 926 534 960 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa4": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 181 967 l 306 967 l 306 822 l 181 822 z m 442 967 l 567 967 l 567 822 l 442 822 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa5": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 217 919 b 229 980 217 941 221 961 b 374 1076 252 1031 301 1076 b 434 1064 395 1076 415 1072 b 531 919 485 1041 531 992 b 518 859 531 898 526 878 b 374 763 496 808 446 763 b 313 775 352 763 332 767 b 217 919 262 798 217 847 z m 374 825 b 468 919 427 825 468 866 b 374 1014 468 973 427 1014 b 279 919 320 1014 279 973 b 374 825 279 866 320 825 z m 689 88 b 725 94 699 88 711 90 l 725 3 b 640 -15 705 -9 676 -15 b 540 94 573 -15 540 23 b 288 -15 483 26 403 -15 b 50 185 148 -15 50 44 b 385 420 50 371 219 402 b 535 511 454 428 535 437 b 375 631 535 604 467 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 651 538 535 735 651 692 l 651 168 b 689 88 651 122 647 88 z m 314 88 b 414 103 353 88 386 93 b 533 250 474 126 533 174 l 533 371 b 475 347 519 360 499 352 b 175 193 355 321 175 339 b 314 88 175 117 237 88 z "
    },
    "\xc3\xa6": {
        ha: 1208,
        x_min: 0,
        x_max: 0,
        o: "m 1046 226 l 1167 226 b 856 -15 1134 79 1029 -15 b 596 124 724 -15 637 31 b 293 -15 545 30 433 -15 b 50 185 150 -15 50 41 b 126 348 50 265 79 315 b 405 425 190 394 314 411 b 538 519 473 435 538 445 b 375 631 538 610 465 631 b 196 494 271 631 201 597 l 78 494 b 382 735 85 664 207 735 b 622 631 495 735 584 708 b 851 735 665 696 751 735 b 1175 324 1093 735 1175 563 l 649 324 b 864 88 649 184 723 88 b 1046 226 963 88 1026 141 z m 314 88 b 415 103 353 88 386 93 b 538 250 475 126 538 174 l 538 371 b 494 353 525 363 511 357 b 175 193 375 321 175 344 b 314 88 175 117 237 88 z m 649 428 l 1050 428 b 851 631 1046 548 976 631 b 649 428 727 631 649 552 z "
    },
    "\xc3\xa7": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 699 488 l 576 488 b 399 631 559 575 502 631 b 175 350 237 631 175 510 b 385 88 175 205 239 88 b 582 263 505 88 568 155 l 703 263 b 407 -14 678 101 582 -6 l 361 -72 l 364 -75 b 410 -65 373 -69 388 -65 b 526 -167 472 -65 526 -101 b 354 -290 526 -256 443 -290 b 226 -264 305 -290 265 -277 l 251 -203 b 336 -221 272 -212 306 -221 b 422 -178 372 -221 422 -212 b 357 -135 422 -148 388 -135 b 300 -146 332 -135 319 -139 l 276 -107 l 350 -12 b 50 350 155 2 50 141 b 389 735 50 575 163 735 b 699 488 567 735 681 649 z "
    },
    "\xc3\xa8": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 188 1015 l 339 1015 l 458 817 l 369 817 z m 175 428 l 588 428 b 381 631 580 543 503 631 b 175 428 257 631 183 544 z m 585 228 l 701 228 b 394 -15 672 77 568 -15 b 50 361 163 -15 58 138 b 75 511 50 416 58 466 b 388 735 120 634 223 735 b 547 695 451 735 504 722 b 713 324 654 628 720 495 l 175 324 b 399 88 171 179 255 87 b 585 228 504 88 565 138 z "
    },
    "\xc3\xa9": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 408 1015 l 560 1015 l 378 817 l 289 817 z m 175 428 l 588 428 b 381 631 580 543 503 631 b 175 428 257 631 183 544 z m 585 228 l 701 228 b 394 -15 672 77 568 -15 b 50 361 163 -15 58 138 b 75 511 50 416 58 466 b 388 735 120 634 223 735 b 547 695 451 735 504 722 b 713 324 654 628 720 495 l 175 324 b 399 88 171 179 255 87 b 585 228 504 88 565 138 z "
    },
    "\xc3\xaa": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 308 1015 l 438 1015 l 582 817 l 465 817 l 369 950 l 272 817 l 165 817 z m 175 428 l 588 428 b 381 631 580 543 503 631 b 175 428 257 631 183 544 z m 585 228 l 701 228 b 394 -15 672 77 568 -15 b 50 361 163 -15 58 138 b 75 511 50 416 58 466 b 388 735 120 634 223 735 b 547 695 451 735 504 722 b 713 324 654 628 720 495 l 175 324 b 399 88 171 179 255 87 b 585 228 504 88 565 138 z "
    },
    "\xc3\xab": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 181 967 l 306 967 l 306 822 l 181 822 z m 442 967 l 567 967 l 567 822 l 442 822 z m 175 428 l 588 428 b 381 631 580 543 503 631 b 175 428 257 631 183 544 z m 585 228 l 701 228 b 394 -15 672 77 568 -15 b 50 361 163 -15 58 138 b 75 511 50 416 58 466 b 388 735 120 634 223 735 b 547 695 451 735 504 722 b 713 324 654 628 720 495 l 175 324 b 399 88 171 179 255 87 b 585 228 504 88 565 138 z "
    },
    "\xc3\xac": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -31 1015 l 119 1015 l 239 817 l 150 817 z m 96 0 l 96 718 l 214 718 l 214 0 z "
    },
    "\xc3\xad": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 189 1015 l 340 1015 l 158 817 l 69 817 z m 96 0 l 96 718 l 214 718 l 214 0 z "
    },
    "\xc3\xae": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 89 1015 l 218 1015 l 363 817 l 246 817 l 150 950 l 53 817 l -53 817 z m 96 0 l 96 718 l 214 718 l 214 0 z "
    },
    "\xc3\xaf": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -37 967 l 86 967 l 86 822 l -37 822 z m 222 967 l 347 967 l 347 822 l 222 822 z m 96 0 l 96 718 l 214 718 l 214 0 z "
    },
    "\xc3\xb0": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 175 358 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 392 599 622 506 541 599 b 175 358 249 599 175 500 z m 571 625 l 574 625 b 535 694 563 649 550 672 b 404 835 499 746 454 801 l 244 760 l 192 815 l 343 886 b 246 953 318 908 275 936 l 343 1015 b 450 938 373 994 419 962 l 617 1015 l 665 964 l 506 890 b 747 358 653 769 747 605 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 b 72 488 50 404 57 447 b 378 703 114 610 215 703 b 571 625 464 703 527 675 z "
    },
    "\xc3\xb1": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 556 988 l 628 988 b 585 876 622 946 608 909 b 475 833 560 850 528 833 b 290 888 407 833 359 888 b 224 829 259 888 220 863 l 151 829 b 297 982 172 903 203 982 b 400 955 337 982 371 968 b 492 926 427 943 457 926 b 556 988 529 926 546 960 z m 683 472 l 683 0 l 565 0 l 565 486 b 419 631 565 575 509 631 b 207 406 281 631 207 543 l 207 0 l 89 0 l 89 718 l 200 718 l 200 604 l 203 604 b 436 735 252 691 330 735 b 683 472 609 735 683 644 z "
    },
    "\xc3\xb2": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 213 1015 l 364 1015 l 483 817 l 394 817 z m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    "\xc3\xb3": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 433 1015 l 585 1015 l 403 817 l 314 817 z m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    "\xc3\xb4": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 333 1015 l 463 1015 l 607 817 l 490 817 l 394 950 l 297 817 l 190 817 z m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    "\xc3\xb5": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 568 988 l 640 988 b 597 876 635 946 620 909 b 488 833 572 850 540 833 b 303 888 420 833 372 888 b 236 829 272 888 233 863 l 164 829 b 310 982 184 903 216 982 b 413 955 349 982 384 968 b 504 926 439 943 470 926 b 568 988 541 926 559 960 z m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    "\xc3\xb6": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 206 967 l 331 967 l 331 822 l 206 822 z m 467 967 l 592 967 l 592 822 l 467 822 z m 399 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 399 88 175 207 250 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 399 631 622 509 547 631 z m 50 358 b 399 735 50 582 174 735 b 549 706 456 735 506 725 b 747 358 671 651 747 532 b 399 -15 747 135 624 -15 b 249 13 342 -15 292 -6 b 50 358 126 67 50 185 z "
    },
    "\xc3\xb7": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 417 154 b 506 65 464 154 506 113 b 418 -22 506 21 463 -22 b 328 65 370 -22 328 18 b 417 154 328 113 369 154 z m 417 726 b 506 638 464 726 506 685 b 418 549 506 593 463 549 b 328 638 370 549 328 590 b 417 726 328 685 369 726 z m 67 399 l 767 399 l 767 304 l 67 304 z "
    },
    "\xc3\xb8": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 632 653 l 713 743 l 750 707 l 667 615 b 747 358 717 554 747 466 b 399 -15 747 135 624 -15 b 169 63 298 -15 224 15 l 86 -29 l 47 3 l 133 99 b 50 358 82 162 50 249 b 399 735 50 582 174 735 b 632 653 504 735 575 704 z m 583 524 l 247 150 b 399 88 289 108 339 88 b 485 106 429 88 458 94 b 622 358 572 144 622 232 b 583 524 622 426 608 481 z m 217 190 l 553 565 b 399 631 512 609 461 631 b 312 613 368 631 339 625 b 175 358 225 574 175 484 b 217 190 175 290 192 235 z "
    },
    "\xc3\xb9": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 200 1015 l 351 1015 l 471 817 l 382 817 z m 336 -15 b 89 246 163 -15 89 74 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    "\xc3\xba": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 421 1015 l 572 1015 l 390 817 l 301 817 z m 336 -15 b 89 246 163 -15 89 74 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    "\xc3\xbb": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 321 1015 l 450 1015 l 594 817 l 478 817 l 382 950 l 285 817 l 178 817 z m 336 -15 b 89 246 163 -15 89 74 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    "\xc3\xbc": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 193 967 l 318 967 l 318 822 l 193 822 z m 454 967 l 579 967 l 579 822 l 454 822 z m 336 -15 b 89 246 163 -15 89 74 l 89 718 l 207 718 l 207 232 b 353 88 207 143 263 88 b 565 313 492 88 565 175 l 565 718 l 683 718 l 683 0 l 572 0 l 572 114 l 569 114 b 336 -15 524 34 454 -15 z "
    },
    "\xc3\xbd": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 382 1015 l 533 1015 l 351 817 l 263 817 z m 81 -274 l 81 -165 b 150 -182 101 -172 124 -182 b 247 -117 204 -182 227 -154 l 296 4 l 11 718 l 144 718 l 354 131 l 357 131 l 558 718 l 683 718 l 371 -94 b 163 -286 332 -192 294 -286 b 81 -274 132 -286 104 -282 z "
    },
    "\xc3\xbe": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 443 735 b 588 704 499 735 547 725 b 774 357 703 648 774 525 b 446 -15 774 140 664 -15 b 214 96 340 -15 255 28 l 211 96 l 211 -274 l 93 -274 l 93 992 l 211 992 l 211 621 l 214 621 b 443 735 250 695 336 735 z m 426 631 b 325 607 387 631 353 623 b 207 360 249 564 207 477 b 433 88 207 205 277 88 b 649 365 589 88 649 211 b 426 631 649 513 575 631 z "
    },
    "\xc3\xbf": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 154 967 l 279 967 l 279 822 l 154 822 z m 415 967 l 540 967 l 540 822 l 415 822 z m 81 -274 l 81 -165 b 150 -182 101 -172 124 -182 b 247 -117 204 -182 227 -154 l 296 4 l 11 718 l 144 718 l 354 131 l 357 131 l 558 718 l 683 718 l 371 -94 b 163 -286 332 -192 294 -286 b 81 -274 132 -286 104 -282 z "
    },
    "\xc4\x84": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 911 -204 l 867 -179 b 781 -221 847 -204 825 -221 b 728 -162 746 -221 728 -195 b 733 -132 728 -153 729 -143 b 842 0 750 -74 796 -39 l 911 0 l 524 992 l 378 992 l -8 0 l 126 0 l 238 299 l 657 299 l 765 0 l 785 0 b 704 -58 751 -20 725 -40 b 633 -176 671 -89 633 -125 b 761 -290 633 -258 683 -290 b 911 -204 834 -290 881 -257 z m 615 410 l 279 410 l 447 872 l 450 872 z "
    },
    "\xc4\x85": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 725 -204 l 681 -179 b 594 -221 661 -204 639 -221 b 542 -162 560 -221 542 -195 b 561 -101 542 -145 548 -124 b 638 -15 574 -77 600 -49 l 640 -15 b 725 3 676 -15 705 -9 l 725 94 b 689 88 709 90 697 88 b 651 168 647 88 651 122 l 651 538 b 382 735 651 692 535 735 b 78 494 206 735 85 664 l 196 494 b 375 631 201 597 271 631 b 535 511 467 631 535 604 b 293 406 535 411 379 423 b 50 185 161 382 50 342 b 288 -15 50 44 148 -15 b 540 94 403 -15 483 26 b 589 -6 540 43 556 9 b 514 -62 557 -25 532 -44 b 447 -176 483 -92 447 -127 b 575 -290 447 -258 497 -290 b 725 -204 648 -290 695 -257 z m 175 193 b 399 333 175 313 294 319 b 533 371 449 340 503 346 l 533 250 b 521 197 533 233 529 216 b 314 88 491 128 415 88 b 175 193 237 87 175 116 z "
    },
    "\xc4\x86": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 806 693 l 938 693 b 890 833 930 746 914 792 b 529 1015 824 943 702 1015 b 327 974 453 1015 386 1002 b 60 493 163 898 60 730 b 88 290 60 421 69 353 b 518 -22 143 107 281 -22 b 947 374 780 -22 922 132 l 815 374 b 529 88 804 207 707 87 b 376 121 470 88 419 99 b 192 503 254 185 192 319 b 528 904 192 730 299 904 b 806 693 678 904 778 823 z m 692 1261 l 540 1261 l 421 1063 l 510 1063 z "
    },
    "\xc4\x87": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 576 488 l 699 488 b 389 735 681 649 566 735 b 240 705 332 735 283 725 b 50 350 119 648 50 525 b 386 -15 50 129 165 -15 b 703 263 577 -15 678 92 l 582 263 b 385 88 568 155 505 88 b 175 350 239 87 175 205 b 399 631 175 510 237 631 b 576 488 502 631 559 575 z m 564 1015 l 413 1015 l 293 817 l 382 817 z "
    },
    "\xc4\x98": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 797 -204 l 753 -179 b 667 -221 733 -204 711 -221 b 614 -162 632 -221 614 -195 b 619 -132 614 -153 616 -143 b 728 0 636 -74 682 -39 l 797 0 l 797 111 l 240 111 l 240 454 l 756 454 l 756 565 l 240 565 l 240 881 l 793 881 l 793 992 l 108 992 l 108 0 l 671 0 b 590 -58 638 -20 611 -40 b 519 -176 557 -89 519 -125 b 647 -290 519 -258 569 -290 b 797 -204 720 -290 767 -257 z "
    },
    "\xc4\x99": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 497 -204 l 453 -179 b 367 -221 433 -204 411 -221 b 314 -162 332 -221 314 -195 b 333 -100 314 -144 320 -123 b 411 -15 346 -77 372 -49 b 701 228 575 -9 672 80 l 585 228 b 399 88 565 138 504 88 b 175 324 255 88 171 179 l 713 324 b 388 735 722 551 613 735 b 252 707 338 735 293 725 b 50 361 133 653 50 532 b 349 -12 54 151 153 6 b 280 -66 320 -31 297 -49 b 219 -176 251 -95 219 -129 b 347 -290 219 -258 269 -290 b 497 -204 420 -290 467 -257 z m 381 631 b 462 615 410 631 437 625 b 588 428 531 584 581 520 l 175 428 b 381 631 183 544 257 631 z "
    },
    "\xc4\xb1": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 96 0 l 96 718 l 214 718 l 214 0 z "
    },
    "\xc5\x81": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 108 0 l 108 333 l 0 256 l 0 361 l 108 439 l 108 992 l 240 992 l 240 533 l 557 756 l 557 650 l 240 428 l 240 111 l 765 111 l 765 0 z "
    },
    "\xc5\x82": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 96 0 l 96 446 l 0 369 l 0 468 l 96 546 l 96 992 l 214 992 l 214 639 l 311 717 l 311 618 l 214 540 l 214 0 z "
    },
    "\xc5\x83": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 772 188 l 769 188 l 247 992 l 107 992 l 107 0 l 232 0 l 232 796 l 235 796 l 753 0 l 897 0 l 897 992 l 772 992 z m 706 1261 l 554 1261 l 435 1063 l 524 1063 z "
    },
    "\xc5\x84": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 419 631 b 565 486 509 631 565 575 l 565 0 l 683 0 l 683 472 b 436 735 683 644 609 735 b 203 604 330 735 252 691 l 200 604 l 200 718 l 89 718 l 89 0 l 207 0 l 207 406 b 419 631 207 543 281 631 z m 576 1015 l 425 1015 l 306 817 l 394 817 z "
    },
    "\xc5\x92": {
        ha: 1492,
        x_min: 0,
        x_max: 0,
        o: "m 507 -22 b 313 17 434 -22 369 -9 b 53 493 151 93 53 259 b 84 701 53 568 63 637 b 518 1015 143 880 283 1015 b 763 910 624 1015 724 979 l 765 910 l 765 992 l 1428 992 l 1428 881 l 897 881 l 897 565 l 1383 565 l 1383 454 l 897 454 l 897 111 l 1436 111 l 1436 0 l 765 0 l 765 96 l 763 96 b 507 -22 717 23 623 -22 z m 517 88 b 615 102 552 88 584 92 b 765 283 692 127 765 184 l 765 701 b 744 797 765 740 762 770 b 519 904 706 857 620 904 b 372 871 463 904 414 893 b 185 488 253 807 185 668 b 206 331 185 432 192 380 b 517 88 246 196 343 88 z "
    },
    "\xc5\x93": {
        ha: 1238,
        x_min: 0,
        x_max: 0,
        o: "m 376 631 b 282 606 339 631 308 622 b 175 344 209 559 175 463 b 376 88 175 206 237 88 b 576 361 526 87 576 213 b 376 631 576 512 529 631 z m 679 428 l 1075 428 b 879 631 1075 550 1002 631 b 679 428 758 631 677 548 z m 1081 228 l 1193 228 b 886 -15 1146 66 1044 -15 b 625 125 755 -15 666 28 b 376 -15 585 32 499 -15 b 50 360 155 -15 50 140 b 376 735 50 579 156 735 b 625 608 502 735 581 700 b 879 735 670 684 765 735 b 1032 702 939 735 990 724 b 1200 324 1152 640 1209 507 l 679 324 b 886 88 675 187 750 87 b 1081 228 988 88 1055 146 z "
    },
    "\xc5\x9a": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 682 701 l 807 701 b 442 1015 800 912 659 1015 b 82 725 246 1015 82 923 b 399 462 82 538 246 496 b 717 268 526 434 717 420 b 465 88 717 131 601 88 b 176 326 303 87 176 163 l 51 326 b 84 170 51 266 62 214 b 461 -22 145 47 279 -22 b 849 272 665 -22 849 66 b 415 584 849 510 612 543 b 214 735 326 603 214 631 b 436 904 214 859 312 904 b 682 701 581 904 668 837 z m 654 1261 l 503 1261 l 383 1063 l 472 1063 z "
    },
    "\xc5\x9b": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 161 226 l 43 226 b 347 -15 50 57 171 -15 b 653 210 513 -15 653 43 b 418 414 653 350 534 389 b 183 539 339 432 183 444 b 336 631 183 612 262 631 b 503 510 426 631 496 594 l 621 510 b 326 735 610 675 501 735 b 58 531 186 735 58 672 b 406 302 58 347 262 342 b 528 194 464 286 528 263 b 354 88 528 108 440 88 b 161 226 249 88 165 125 z m 538 1015 l 386 1015 l 267 817 l 356 817 z "
    },
    "\xc5\xa0": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 515 1063 l 386 1063 l 242 1261 l 358 1261 l 454 1128 l 551 1261 l 658 1261 z m 807 701 l 682 701 b 436 904 668 837 581 904 b 214 735 312 904 214 859 b 241 660 214 704 223 679 b 415 584 280 619 346 598 b 849 272 612 543 849 512 b 813 137 849 219 837 174 b 461 -22 749 35 623 -22 b 51 326 225 -22 51 89 l 176 326 b 201 219 176 285 184 249 b 465 88 246 135 339 88 b 717 268 601 88 717 131 b 690 351 717 302 708 330 b 399 462 630 422 507 438 b 82 725 246 496 82 537 b 113 855 82 775 92 818 b 442 1015 169 956 288 1015 b 807 701 659 1015 800 913 z "
    },
    "\xc5\xa1": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 413 817 l 283 817 l 139 1015 l 256 1015 l 351 882 l 449 1015 l 556 1015 z m 43 226 l 161 226 b 354 88 165 125 249 88 b 528 194 440 88 528 108 b 493 264 528 225 516 248 b 58 531 357 356 58 301 b 83 624 58 567 66 598 b 326 735 126 694 215 735 b 621 510 501 735 610 675 l 503 510 b 336 631 496 594 426 631 b 183 539 262 631 183 612 b 260 455 183 492 223 469 b 653 210 408 396 653 418 b 626 101 653 166 644 130 b 347 -15 575 21 475 -15 b 43 226 171 -15 50 56 z "
    },
    "\xc5\xb8": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 257 1213 l 382 1213 l 382 1068 l 257 1068 z m 518 1213 l 643 1213 l 643 1068 l 518 1068 z m 386 0 l 386 406 l 3 992 l 160 992 l 457 519 l 747 992 l 897 992 l 518 406 l 518 0 z "
    },
    "\xc5\xb9": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 78 881 l 647 881 l 31 111 l 31 0 l 819 0 l 819 111 l 188 111 l 803 881 l 803 992 l 78 992 z m 629 1261 l 478 1261 l 358 1063 l 447 1063 z "
    },
    "\xc5\xba": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 58 614 l 464 614 l 31 90 l 31 0 l 636 0 l 636 104 l 178 104 l 617 638 l 617 718 l 58 718 z m 524 1015 l 372 1015 l 253 817 l 342 817 z "
    },
    "\xc5\xbb": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 78 881 l 647 881 l 31 111 l 31 0 l 819 0 l 819 111 l 188 111 l 803 881 l 803 992 l 78 992 z m 361 1068 l 486 1068 l 486 1213 l 361 1213 z "
    },
    "\xc5\xbc": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 58 614 l 464 614 l 31 90 l 31 0 l 636 0 l 636 104 l 178 104 l 617 638 l 617 718 l 58 718 z m 271 822 l 396 822 l 396 967 l 271 967 z "
    },
    "\xc5\xbd": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 490 1063 l 361 1063 l 217 1261 l 333 1261 l 429 1128 l 526 1261 l 633 1261 z m 31 0 l 31 111 l 647 881 l 78 881 l 78 992 l 803 992 l 803 881 l 188 111 l 819 111 l 819 0 z "
    },
    "\xc5\xbe": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 399 817 l 269 817 l 125 1015 l 242 1015 l 338 882 l 435 1015 l 542 1015 z m 31 0 l 31 90 l 464 614 l 58 614 l 58 718 l 617 718 l 617 638 l 178 104 l 636 104 l 636 0 z "
    },
    "\xc6\x8f": {
        ha: 1032,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 79 300 53 427 62 362 b 514 -22 133 111 271 -22 b 697 13 580 -22 641 -11 b 979 494 869 83 979 252 b 949 695 979 565 969 632 b 501 1015 890 879 743 1015 b 358 995 453 1015 405 1009 b 69 706 217 955 98 858 l 200 706 b 244 787 210 735 225 762 b 504 907 299 855 384 907 b 640 878 555 907 600 897 b 844 550 756 821 826 703 l 56 550 b 53 523 54 539 53 530 z m 508 85 b 365 117 452 85 404 95 b 186 440 258 175 196 289 l 850 440 b 821 299 847 389 838 342 b 508 85 775 178 672 85 z "
    },
    "\xc6\x92": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 581 992 l 683 992 l 664 888 l 582 888 b 496 815 529 888 506 860 l 453 624 l 594 624 l 575 529 l 436 529 l 360 97 b 96 -228 329 -77 293 -228 l 4 -228 l 24 -124 b 112 -119 60 -124 89 -122 b 217 17 189 -110 203 -60 l 314 529 l 186 529 l 204 624 l 331 624 l 367 813 b 581 992 386 915 460 992 z "
    },
    "\xc6\xa2": {
        ha: 1115,
        x_min: 0,
        x_max: 0,
        o: "m 771 39 l 771 881 l 875 881 l 875 -274 l 1007 -274 l 1007 992 l 688 992 b 528 1015 641 1007 588 1015 b 321 972 449 1015 380 1001 b 53 496 160 894 53 729 b 83 300 53 427 63 362 b 528 -22 142 116 286 -22 b 771 39 624 -22 712 6 z m 639 888 l 639 104 b 528 88 608 95 567 88 b 372 123 468 88 416 99 b 185 496 255 187 185 319 b 528 904 185 724 297 904 b 639 888 576 904 604 897 z "
    },
    "\xc6\xa3": {
        ha: 892,
        x_min: 0,
        x_max: 0,
        o: "m 593 36 l 593 614 l 685 614 l 685 -274 l 803 -274 l 803 718 l 515 718 b 399 735 480 729 441 735 b 248 706 341 735 291 725 b 50 358 126 651 50 532 b 399 -15 50 135 174 -15 b 593 36 480 -15 542 4 z m 399 631 b 475 617 424 631 449 626 l 475 101 b 399 88 449 92 424 88 b 312 106 368 88 339 94 b 175 358 225 144 175 232 b 399 631 175 509 250 631 z "
    },
    "\xc6\xb5": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 122 454 l 306 454 l 31 111 l 31 0 l 819 0 l 819 111 l 188 111 l 461 454 l 753 454 l 753 565 l 550 565 l 803 881 l 803 992 l 78 992 l 78 881 l 647 881 l 394 565 l 122 565 z "
    },
    "\xc6\xb6": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 111 326 l 225 326 l 31 90 l 31 0 l 636 0 l 636 104 l 178 104 l 360 326 l 558 326 l 558 431 l 446 431 l 617 638 l 617 718 l 58 718 l 58 614 l 464 614 l 311 431 l 111 431 z "
    },
    "\xc9\x99": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 365 735 b 58 492 191 735 88 644 l 175 492 b 361 632 194 581 256 632 b 585 396 504 632 589 540 l 47 396 b 372 -15 38 169 146 -15 b 508 13 421 -15 466 -6 b 710 358 627 66 710 186 b 365 735 710 586 594 735 z m 379 89 b 298 105 350 89 322 94 b 172 292 228 135 178 199 l 585 292 b 379 89 577 176 503 89 z "
    },
    "\xcb\x86": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 89 1015 l 218 1015 l 363 817 l 246 817 l 150 950 l 53 817 l -53 817 z "
    },
    "\xcb\x87": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 219 817 l 90 817 l -53 1015 l 63 1015 l 158 882 l 256 1015 l 363 1015 z "
    },
    "\xcb\x98": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -61 1015 l 7 1015 b 163 900 29 938 81 900 b 300 1015 248 900 275 951 l 371 1015 b 151 824 352 903 279 824 b -61 1015 18 824 -43 897 z "
    },
    "\xcb\x99": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 217 822 l 92 822 l 92 967 l 217 967 z "
    },
    "\xcb\x9a": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m -1 919 b 11 980 -1 941 3 961 b 154 1076 34 1031 82 1076 b 215 1064 175 1076 196 1072 b 311 919 266 1041 311 992 b 299 859 311 898 307 878 b 154 763 276 808 226 763 b -1 919 66 763 -1 831 z m 154 825 b 249 919 208 825 249 866 b 154 1014 249 973 208 1014 b 60 919 101 1014 60 973 b 154 825 60 866 101 825 z "
    },
    "\xcb\x9b": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 253 -221 b 339 -179 297 -221 319 -204 l 383 -204 b 233 -290 353 -257 306 -290 b 106 -176 155 -290 106 -258 b 132 -108 106 -149 116 -130 b 264 4 163 -62 207 -29 l 319 4 b 224 -94 271 -36 239 -69 b 200 -162 208 -120 200 -143 b 253 -221 200 -195 218 -221 z "
    },
    "\xcb\x9c": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 324 988 l 396 988 b 353 876 390 946 376 909 b 243 833 328 850 296 833 b 58 888 175 833 128 888 b -7 829 26 888 -11 863 l -79 829 b 65 982 -59 902 -27 982 b 168 955 105 982 139 968 b 260 926 195 943 225 926 b 324 988 297 926 314 960 z "
    },
    "\xcb\x9d": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 263 1015 l 408 1015 l 242 817 l 150 817 z m 46 1015 l 192 1015 l 25 817 l -65 817 z "
    },
    "\xcc\x80": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -336 1015 l -186 1015 l -67 817 l -156 817 z "
    },
    "\xcc\x81": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -117 1015 l 35 1015 l -147 817 l -236 817 z "
    },
    "\xcc\x82": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -217 1015 l -87 1015 l 57 817 l -60 817 l -156 950 l -253 817 l -358 817 z "
    },
    "\xcc\x83": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m 18 988 l 90 988 b 47 876 85 946 70 909 b -62 833 22 850 -10 833 b -247 888 -130 833 -178 888 b -312 829 -279 888 -316 863 l -385 829 b -240 982 -365 902 -333 982 b -137 955 -201 982 -166 968 b -46 926 -111 943 -80 926 b 18 988 -9 926 9 960 z "
    },
    "\xcc\x84": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -386 938 l 86 938 l 86 861 l -386 861 z "
    },
    "\xcc\x86": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -367 1015 l -299 1015 b -143 900 -276 938 -225 900 b -6 1015 -58 900 -31 951 l 65 1015 b -154 824 46 903 -26 824 b -367 1015 -287 824 -349 897 z "
    },
    "\xcc\x87": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -89 822 l -214 822 l -214 967 l -89 967 z "
    },
    "\xcc\x88": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -343 967 l -219 967 l -219 822 l -343 822 z m -83 967 l 42 967 l 42 822 l -83 822 z "
    },
    "\xcc\x8a": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -307 919 b -294 980 -307 941 -303 961 b -151 1076 -272 1031 -224 1076 b -91 1064 -130 1076 -110 1072 b 6 919 -40 1041 6 992 b -7 859 6 898 1 878 b -151 763 -29 808 -79 763 b -307 919 -240 763 -307 831 z m -151 825 b -57 919 -98 825 -57 866 b -151 1014 -57 973 -98 1014 b -246 919 -205 1014 -246 973 b -151 825 -246 866 -205 825 z "
    },
    "\xcc\x8b": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -43 1015 l 103 1015 l -64 817 l -156 817 z m -260 1015 l -114 1015 l -281 817 l -371 817 z "
    },
    "\xcc\x8c": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -86 817 l -215 817 l -358 1015 l -243 1015 l -147 882 l -50 1015 l 57 1015 z "
    },
    "\xcc\xa7": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -299 -264 l -274 -203 b -189 -221 -253 -212 -219 -221 b -103 -178 -153 -221 -103 -212 b -168 -135 -103 -148 -137 -135 b -225 -146 -193 -135 -206 -139 l -249 -107 l -164 0 l -106 0 l -164 -72 l -161 -75 b -115 -65 -152 -69 -137 -65 b 1 -167 -53 -65 1 -101 b -171 -290 1 -256 -82 -290 b -299 -264 -220 -290 -260 -277 z "
    },
    "\xcc\xa8": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -53 -221 b 33 -179 -9 -221 14 -204 l 78 -204 b -72 -290 47 -257 1 -290 b -200 -176 -150 -290 -200 -258 b -174 -108 -200 -149 -189 -130 b -42 4 -142 -62 -99 -29 l 14 4 b -82 -94 -34 -36 -66 -69 b -106 -162 -98 -120 -106 -143 b -53 -221 -106 -195 -87 -221 z "
    },
    "\xcc\xb8": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: "m -74 1015 l 28 1015 l -383 -22 l -483 -22 z "
    },
    "\xce\xa9": {
        ha: 1028,
        x_min: 0,
        x_max: 0,
        o: "m 200 574 b 222 699 200 618 207 660 b 513 890 263 810 362 890 b 644 866 561 890 604 882 b 828 574 751 822 828 723 b 606 286 828 412 744 316 l 606 0 l 958 0 l 958 111 l 688 111 l 688 194 b 803 250 731 206 770 225 b 958 578 893 316 958 426 b 923 749 958 640 947 697 b 514 1001 858 891 717 1001 b 342 969 453 1001 395 991 b 69 575 193 910 69 779 b 88 449 69 531 75 489 b 340 194 125 322 211 230 l 340 111 l 69 111 l 69 0 l 422 0 l 422 286 b 200 574 283 312 200 416 z "
    },
    "\xcf\x80": {
        ha: 864,
        x_min: 0,
        x_max: 0,
        o: "m 707 -10 b 811 17 751 -10 779 1 l 811 107 b 751 92 793 99 775 92 b 699 178 702 92 699 129 l 699 614 l 806 614 l 806 718 l 42 718 l 42 614 l 139 614 l 139 0 l 257 0 l 257 614 l 581 614 l 581 164 b 707 -10 581 58 599 -10 z "
    },
    "\xd0\x80": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 797 0 l 797 111 l 240 111 l 240 454 l 756 454 l 756 565 l 240 565 l 240 881 l 793 881 l 793 992 z m 425 1261 l 275 1261 l 456 1063 l 544 1063 z "
    },
    "\xd0\x81": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 797 0 l 797 111 l 240 111 l 240 454 l 756 454 l 756 565 l 240 565 l 240 881 l 793 881 l 793 992 z m 383 1213 l 260 1213 l 260 1068 l 383 1068 z m 644 1213 l 519 1213 l 519 1068 l 644 1068 z "
    },
    "\xd0\x82": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 989 333 b 672 642 989 531 868 642 b 425 528 561 642 466 599 l 422 528 l 422 881 l 794 881 l 794 992 l 3 992 l 3 881 l 290 881 l 290 0 l 422 0 l 422 265 b 656 532 422 419 503 532 b 857 333 783 532 857 462 b 638 104 857 185 788 104 l 619 104 b 599 106 613 104 606 105 l 599 -7 b 668 -11 622 -10 645 -11 b 989 333 878 -11 989 125 z "
    },
    "\xd0\x83": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 117 992 l 117 0 l 249 0 l 249 881 l 761 881 l 761 992 z m 628 1261 l 476 1261 l 357 1063 l 446 1063 z "
    },
    "\xd0\x84": {
        ha: 997,
        x_min: 0,
        x_max: 0,
        o: "m 944 344 l 811 344 b 517 85 784 189 691 85 b 380 112 466 85 420 94 b 182 454 259 166 190 288 l 644 454 l 644 564 l 188 564 b 514 907 210 747 307 907 b 804 706 668 907 771 827 l 935 706 b 885 840 928 756 912 801 b 517 1015 815 944 686 1015 b 313 974 439 1015 371 1001 b 53 494 150 896 53 730 b 88 276 53 413 64 340 b 511 -22 149 106 285 -22 b 944 344 763 -22 915 113 z "
    },
    "\xd0\x85": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 436 904 b 682 701 581 904 668 837 l 807 701 b 442 1015 800 912 659 1015 b 82 725 246 1015 82 923 b 399 462 82 538 246 496 b 717 268 526 434 717 420 b 465 88 717 131 601 88 b 176 326 303 87 176 163 l 51 326 b 84 170 51 266 62 214 b 461 -22 145 47 279 -22 b 849 272 665 -22 849 66 b 415 584 849 510 612 543 b 214 735 326 603 214 631 b 436 904 214 859 312 904 z "
    },
    "\xd0\x86": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 114 992 l 114 0 l 246 0 l 246 992 z "
    },
    "\xd0\x87": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 114 992 l 114 0 l 246 0 l 246 992 z m 111 1213 l -12 1213 l -12 1068 l 111 1068 z m 372 1213 l 247 1213 l 247 1068 l 372 1068 z "
    },
    "\xd0\x88": {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 613 247 l 613 992 l 481 992 l 481 267 b 322 88 481 153 439 88 b 163 285 199 88 163 163 l 163 326 l 31 326 l 31 265 b 319 -22 31 77 132 -22 b 613 247 502 -22 613 70 z "
    },
    "\xd0\x89": {
        ha: 1535,
        x_min: 0,
        x_max: 0,
        o: "m 1482 293 b 1178 588 1482 486 1372 588 l 868 588 l 868 992 l 246 992 b 240 647 246 856 244 741 b 201 262 233 494 225 377 b 71 103 184 179 162 103 b -14 111 37 103 8 106 l -14 0 b 94 -14 8 -6 67 -14 b 322 222 238 -14 292 101 b 371 881 369 414 371 629 l 736 881 l 736 0 l 1178 0 b 1482 293 1371 0 1482 102 z m 1133 111 l 868 111 l 868 478 l 1133 478 b 1350 293 1278 478 1350 416 b 1133 111 1350 172 1278 111 z "
    },
    "\xd0\x8a": {
        ha: 1561,
        x_min: 0,
        x_max: 0,
        o: "m 1508 286 b 1204 574 1508 479 1398 574 l 894 574 l 894 992 l 763 992 l 763 574 l 240 574 l 240 992 l 108 992 l 108 0 l 240 0 l 240 463 l 763 463 l 763 0 l 1204 0 b 1508 286 1397 0 1508 95 z m 1376 286 b 1160 111 1376 156 1295 111 l 894 111 l 894 464 l 1160 464 b 1376 286 1296 464 1376 417 z "
    },
    "\xd0\x8b": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 642 529 b 843 332 787 529 843 471 l 843 0 l 975 0 l 975 340 b 642 642 975 545 857 642 b 421 599 567 642 477 614 l 421 881 l 793 881 l 793 992 l 1 992 l 1 881 l 289 881 l 289 0 l 421 0 l 421 489 b 642 529 483 506 552 529 z "
    },
    "\xd0\x8c": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 347 l 406 501 l 764 0 l 931 0 l 496 592 l 914 992 l 743 992 l 240 497 l 240 992 z m 682 1261 l 531 1261 l 411 1063 l 500 1063 z "
    },
    "\xd0\x8d": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 274 0 l 774 843 l 774 0 l 906 0 l 906 992 l 739 992 l 240 151 l 240 992 z m 481 1261 l 331 1261 l 511 1063 l 600 1063 z "
    },
    "\xd0\x8e": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 85 110 l 85 1 b 207 -15 117 -8 165 -15 b 343 35 255 -15 300 1 b 469 213 386 68 428 127 l 850 992 l 710 992 l 431 397 l 144 992 l 1 992 l 360 269 l 343 235 b 182 96 313 171 275 96 b 85 110 150 96 108 102 z m 642 1249 l 571 1249 b 432 1150 549 1183 502 1150 b 293 1249 360 1150 313 1183 l 222 1249 b 433 1057 236 1142 314 1057 b 642 1249 558 1057 624 1141 z "
    },
    "\xd0\x8f": {
        ha: 989,
        x_min: 0,
        x_max: 0,
        o: "m 431 0 l 431 -246 l 561 -246 l 561 0 l 881 0 l 881 992 l 749 992 l 749 111 l 240 111 l 240 992 l 108 992 l 108 0 z "
    },
    "\xd0\x90": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 378 992 l -8 0 l 126 0 l 238 299 l 657 299 l 765 0 l 911 0 l 524 992 z m 615 410 l 279 410 l 447 872 l 450 872 z "
    },
    "\xd0\x91": {
        ha: 938,
        x_min: 0,
        x_max: 0,
        o: "m 875 293 b 571 589 875 486 765 589 l 240 589 l 240 881 l 788 881 l 788 992 l 108 992 l 108 0 l 571 0 b 875 293 764 0 875 102 z m 528 111 l 240 111 l 240 478 l 528 478 b 744 293 672 478 744 416 b 528 111 744 172 672 111 z "
    },
    "\xd0\x92": {
        ha: 951,
        x_min: 0,
        x_max: 0,
        o: "m 700 524 l 700 526 b 847 749 786 560 847 634 b 731 956 847 850 794 918 b 468 992 674 993 561 992 l 108 992 l 108 0 l 588 0 b 717 24 637 0 680 8 b 889 285 813 66 889 152 b 700 524 889 416 813 500 z m 757 289 b 571 111 757 176 685 111 l 240 111 l 240 454 l 542 454 b 757 289 664 454 757 412 z m 715 724 b 504 565 715 603 636 565 l 240 565 l 240 881 l 504 881 b 715 724 632 881 715 852 z "
    },
    "\xd0\x93": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 117 992 l 117 0 l 249 0 l 249 881 l 761 881 l 761 992 z "
    },
    "\xd0\x94": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 13 111 l 13 -246 l 139 -246 l 139 0 l 861 0 l 861 -246 l 988 -246 l 988 111 l 878 111 l 878 992 l 239 992 l 239 794 b 229 591 239 726 236 658 b 110 111 212 415 178 234 z m 746 111 l 254 111 b 297 226 269 142 283 180 b 367 738 339 372 367 550 l 367 881 l 746 881 z "
    },
    "\xd0\x95": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 797 0 l 797 111 l 240 111 l 240 454 l 756 454 l 756 565 l 240 565 l 240 881 l 793 881 l 793 992 z "
    },
    "\xd0\x96": {
        ha: 1404,
        x_min: 0,
        x_max: 0,
        o: "m 638 992 l 638 529 l 204 992 l 40 992 l 435 583 l -4 0 l 160 0 l 521 492 l 638 369 l 638 0 l 767 0 l 767 369 l 883 492 l 1244 0 l 1408 0 l 969 583 l 1364 992 l 1200 992 l 767 529 l 767 992 z "
    },
    "\xd0\x97": {
        ha: 908,
        x_min: 0,
        x_max: 0,
        o: "m 647 526 l 647 531 b 811 746 733 558 811 634 b 785 866 811 792 802 832 b 472 1015 733 965 622 1015 b 96 703 255 1015 103 913 l 222 703 b 468 907 237 843 317 907 b 681 746 586 907 681 864 b 465 568 681 615 595 568 l 421 568 b 376 571 402 568 388 569 l 376 463 b 465 465 397 464 442 465 b 715 292 605 465 715 432 b 697 206 715 260 709 232 b 472 85 660 132 581 85 b 178 326 300 85 181 156 l 51 326 b 82 171 51 266 62 214 b 461 -22 142 43 275 -22 b 758 88 595 -22 693 22 b 846 289 806 136 846 206 b 647 526 846 422 761 504 z "
    },
    "\xd0\x98": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 274 0 l 774 843 l 774 0 l 906 0 l 906 992 l 739 992 l 240 151 l 240 992 z "
    },
    "\xd0\x99": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 274 0 l 774 843 l 774 0 l 906 0 l 906 992 l 739 992 l 240 151 l 240 992 z m 715 1249 l 644 1249 b 506 1150 622 1183 576 1150 b 367 1249 433 1150 387 1183 l 296 1249 b 507 1057 310 1142 387 1057 b 715 1249 632 1057 697 1141 z "
    },
    "\xd0\x9a": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 347 l 406 501 l 764 0 l 931 0 l 496 592 l 914 992 l 743 992 l 240 497 l 240 992 z "
    },
    "\xd0\x9b": {
        ha: 976,
        x_min: 0,
        x_max: 0,
        o: "m 94 -14 b 322 222 238 -14 292 101 b 371 881 369 414 371 629 l 736 881 l 736 0 l 868 0 l 868 992 l 246 992 b 240 647 246 856 244 741 b 201 262 233 494 225 377 b 71 103 184 179 162 103 b -14 111 37 103 8 106 l -14 0 b 94 -14 8 -6 67 -14 z "
    },
    "\xd0\x9c": {
        ha: 1210,
        x_min: 0,
        x_max: 0,
        o: "m 111 992 l 111 0 l 236 0 l 236 825 l 239 825 l 549 0 l 661 0 l 971 825 l 974 825 l 974 0 l 1099 0 l 1099 992 l 918 992 l 604 158 l 292 992 z "
    },
    "\xd0\x9d": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 454 l 763 454 l 763 0 l 894 0 l 894 992 l 763 992 l 763 565 l 240 565 l 240 992 z "
    },
    "\xd0\x9e": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 83 300 53 427 63 362 b 528 -22 142 116 286 -22 b 735 20 606 -22 675 -8 b 1003 496 896 97 1003 262 b 973 691 1003 563 993 628 b 528 1015 914 875 769 1015 b 321 972 449 1015 380 1001 b 53 496 160 894 53 729 z m 528 88 b 372 123 468 88 416 99 b 185 496 255 187 185 319 b 528 904 185 724 297 904 b 683 869 588 904 640 892 b 871 496 801 805 871 672 b 528 88 871 268 758 88 z "
    },
    "\xd0\x9f": {
        ha: 989,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 881 l 749 881 l 749 0 l 881 0 l 881 992 z "
    },
    "\xd0\xa0": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 847 699 b 543 992 847 890 738 992 l 108 992 l 108 0 l 240 0 l 240 406 l 543 406 b 847 699 738 406 847 507 z m 715 699 b 499 517 715 569 636 517 l 240 517 l 240 881 l 499 881 b 715 699 636 881 715 828 z "
    },
    "\xd0\xa1": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 947 374 l 815 374 b 529 88 804 208 706 87 b 376 121 470 88 419 99 b 192 503 254 185 192 319 b 528 904 192 730 299 904 b 806 693 678 904 778 823 l 938 693 b 890 833 930 746 914 792 b 529 1015 824 943 702 1015 b 326 974 452 1015 385 1002 b 60 493 163 898 60 730 b 88 290 60 421 69 353 b 518 -22 143 107 281 -22 b 947 374 782 -22 922 131 z "
    },
    "\xd0\xa2": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 333 881 l 333 0 l 465 0 l 465 881 l 796 881 l 796 992 l 3 992 l 3 881 z "
    },
    "\xd0\xa3": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 85 110 l 85 1 b 207 -15 117 -8 165 -15 b 343 35 255 -15 300 1 b 469 213 386 68 428 127 l 850 992 l 710 992 l 431 397 l 144 992 l 1 992 l 360 269 l 343 235 b 182 96 313 171 275 96 b 85 110 150 96 108 102 z "
    },
    "\xd0\xa4": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 504 97 l 504 -22 l 636 -22 l 636 97 b 1099 499 909 97 1099 226 b 1067 669 1099 562 1088 618 b 636 908 1003 821 852 908 l 636 1015 l 504 1015 l 504 908 b 313 879 434 908 370 899 b 42 499 157 826 42 705 b 74 330 42 436 53 379 b 504 97 140 181 290 97 z m 504 801 l 504 204 b 174 499 297 214 174 295 b 504 801 174 701 296 795 z m 636 204 l 636 801 b 967 499 844 795 967 700 b 636 204 967 295 843 214 z "
    },
    "\xd0\xa5": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 344 510 l 0 0 l 147 0 l 422 410 l 689 0 l 850 0 l 501 510 l 829 992 l 682 992 l 424 604 l 176 992 l 18 992 z "
    },
    "\xd0\xa6": {
        ha: 1e3,
        x_min: 0,
        x_max: 0,
        o: "m 849 0 l 849 -246 l 975 -246 l 975 111 l 868 111 l 868 992 l 736 992 l 736 111 l 240 111 l 240 992 l 108 992 l 108 0 z "
    },
    "\xd0\xa7": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 674 425 l 674 0 l 806 0 l 806 992 l 674 992 l 674 536 b 399 497 605 516 500 497 b 196 697 250 497 196 555 l 196 992 l 65 992 l 65 686 b 399 385 65 476 179 385 b 674 425 496 385 594 407 z "
    },
    "\xd0\xa8": {
        ha: 1460,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 1351 0 l 1351 992 l 1219 992 l 1219 111 l 796 111 l 796 992 l 664 992 l 664 111 l 240 111 l 240 992 z "
    },
    "\xd0\xa9": {
        ha: 1489,
        x_min: 0,
        x_max: 0,
        o: "m 1336 0 l 1336 -246 l 1464 -246 l 1464 111 l 1351 111 l 1351 992 l 1219 992 l 1219 111 l 796 111 l 796 992 l 664 992 l 664 111 l 240 111 l 240 992 l 108 992 l 108 0 z "
    },
    "\xd0\xaa": {
        ha: 1081,
        x_min: 0,
        x_max: 0,
        o: "m 1028 293 b 724 588 1028 486 917 588 l 414 588 l 414 992 l 3 992 l 3 881 l 282 881 l 282 0 l 724 0 b 1028 293 917 0 1028 102 z m 679 111 l 414 111 l 414 478 l 679 478 b 896 293 824 478 896 416 b 679 111 896 172 824 111 z "
    },
    "\xd0\xab": {
        ha: 1211,
        x_min: 0,
        x_max: 0,
        o: "m 840 293 b 536 588 840 486 730 588 l 240 588 l 240 992 l 108 992 l 108 0 l 536 0 b 840 293 729 0 840 102 z m 492 111 l 240 111 l 240 478 l 492 478 b 708 293 636 478 708 416 b 492 111 708 172 636 111 z m 971 992 l 971 0 l 1103 0 l 1103 992 z "
    },
    "\xd0\xac": {
        ha: 907,
        x_min: 0,
        x_max: 0,
        o: "m 854 293 b 550 588 854 486 744 588 l 240 588 l 240 992 l 108 992 l 108 0 l 550 0 b 854 293 743 0 854 102 z m 506 111 l 240 111 l 240 478 l 506 478 b 722 293 650 478 722 416 b 506 111 722 172 650 111 z "
    },
    "\xd0\xad": {
        ha: 997,
        x_min: 0,
        x_max: 0,
        o: "m 483 907 b 617 878 534 907 579 897 b 810 564 727 824 792 708 l 353 564 l 353 454 l 815 454 b 481 85 805 246 699 85 b 186 344 306 85 213 189 l 53 344 b 486 -22 83 113 234 -22 b 669 13 552 -22 613 -11 b 944 494 840 83 944 252 b 916 695 944 565 935 632 b 481 1015 861 880 720 1015 b 338 996 432 1015 385 1009 b 63 706 199 957 82 862 l 193 706 b 483 907 226 827 329 907 z "
    },
    "\xd0\xae": {
        ha: 1417,
        x_min: 0,
        x_max: 0,
        o: "m 903 -22 b 1099 19 976 -22 1041 -8 b 1364 496 1258 97 1364 263 b 1244 860 1364 647 1316 774 b 903 1015 1171 947 1058 1015 b 721 980 835 1015 775 1003 b 444 565 566 912 465 765 l 240 565 l 240 992 l 108 992 l 108 0 l 240 0 l 240 454 l 443 454 b 482 269 447 388 460 327 b 903 -22 545 106 679 -22 z m 1232 496 b 1212 344 1232 444 1225 394 b 903 88 1174 206 1078 88 b 758 122 847 88 799 99 b 574 496 643 187 574 320 b 594 647 574 548 580 598 b 903 904 632 786 728 904 b 1048 869 958 904 1007 893 b 1232 496 1163 805 1232 672 z "
    },
    "\xd0\xaf": {
        ha: 932,
        x_min: 0,
        x_max: 0,
        o: "m 85 706 b 322 417 85 541 181 437 l 0 0 l 164 0 l 471 408 l 692 408 l 692 0 l 822 0 l 822 992 l 397 992 b 85 706 204 992 85 897 z m 217 706 b 442 881 217 835 307 881 l 692 881 l 692 519 l 442 519 b 217 706 306 519 217 575 z "
    },
    "\xd0\xb0": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 540 94 b 640 -15 540 23 573 -15 b 725 3 676 -15 705 -9 l 725 94 b 689 88 709 90 697 88 b 651 168 647 88 651 122 l 651 538 b 382 735 651 692 535 735 b 78 494 206 735 85 664 l 196 494 b 375 631 201 597 271 631 b 535 511 467 631 535 604 b 293 406 535 411 379 423 b 50 185 161 382 50 342 b 288 -15 50 44 148 -15 b 540 94 403 -15 483 26 z m 175 193 b 399 333 175 313 294 319 b 533 371 449 340 503 346 l 533 250 b 521 197 533 233 529 216 b 314 88 491 128 415 88 b 175 193 237 87 175 116 z "
    },
    "\xd0\xb1": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 419 719 b 168 557 293 719 207 647 l 164 557 b 422 858 185 717 254 847 b 722 1015 574 870 714 861 l 604 1015 b 553 981 600 997 583 985 b 439 968 522 976 484 972 b 268 926 370 963 313 949 b 69 406 113 845 69 643 b 410 -15 69 146 160 -15 b 746 353 631 -15 746 129 b 419 719 746 575 634 719 z m 190 349 b 408 621 190 501 263 621 b 625 350 554 621 625 503 b 607 235 625 306 619 268 b 411 85 578 155 516 85 b 190 349 264 85 190 196 z "
    },
    "\xd0\xb2": {
        ha: 750,
        x_min: 0,
        x_max: 0,
        o: "m 561 388 l 561 389 b 667 543 622 417 667 459 b 421 718 667 682 559 718 l 89 718 l 89 0 l 479 0 b 567 16 511 0 540 5 b 697 211 641 45 697 109 b 561 388 697 309 643 371 z m 575 219 b 457 100 575 148 531 100 l 206 100 l 206 326 l 436 326 b 575 219 522 326 575 296 z m 544 525 b 408 424 544 450 494 424 l 206 424 l 206 618 l 408 618 b 544 525 493 618 544 598 z "
    },
    "\xd0\xb3": {
        ha: 589,
        x_min: 0,
        x_max: 0,
        o: "m 92 718 l 92 0 l 210 0 l 210 614 l 583 614 l 583 718 z "
    },
    "\xd0\xb4": {
        ha: 818,
        x_min: 0,
        x_max: 0,
        o: "m 4 104 l 4 -218 l 117 -218 l 117 0 l 683 0 l 683 -218 l 796 -218 l 796 104 l 699 104 l 699 718 l 179 718 l 179 564 b 171 428 179 519 176 474 b 89 104 157 312 132 187 z m 581 104 l 211 104 b 240 182 220 124 230 150 b 294 553 271 287 294 416 l 294 614 l 581 614 z "
    },
    "\xd0\xb5": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 701 228 l 585 228 b 399 88 565 138 504 88 b 175 324 255 88 171 179 l 713 324 b 388 735 722 551 613 735 b 252 707 338 735 293 725 b 50 361 133 653 50 532 b 394 -15 50 133 166 -15 b 701 228 569 -15 672 76 z m 381 631 b 462 615 410 631 437 625 b 588 428 531 584 581 520 l 175 428 b 381 631 183 544 257 631 z "
    },
    "\xd0\xb6": {
        ha: 1088,
        x_min: 0,
        x_max: 0,
        o: "m 485 718 l 485 385 l 186 718 l 40 718 l 314 422 l 0 0 l 146 0 l 392 347 l 485 257 l 485 0 l 603 0 l 603 257 l 696 347 l 942 0 l 1088 0 l 774 422 l 1047 718 l 901 718 l 603 385 l 603 718 z "
    },
    "\xd0\xb7": {
        ha: 703,
        x_min: 0,
        x_max: 0,
        o: "m 511 389 l 511 392 b 626 542 574 405 626 463 b 605 628 626 575 619 604 b 357 735 562 700 473 735 b 54 507 188 735 64 668 l 174 507 b 356 638 184 597 257 638 b 507 536 435 638 507 605 b 356 421 507 451 439 421 l 279 421 l 279 325 l 375 325 b 528 210 470 325 528 295 b 351 82 528 123 447 82 b 161 231 243 82 168 127 l 42 231 b 353 -15 51 65 172 -15 b 650 213 510 -15 650 54 b 511 389 650 311 594 375 z "
    },
    "\xd0\xb8": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 240 0 l 579 586 l 579 0 l 697 0 l 697 718 l 546 718 l 207 132 l 207 718 z "
    },
    "\xd0\xb9": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 240 0 l 579 586 l 579 0 l 697 0 l 697 718 l 546 718 l 207 132 l 207 718 z m 590 1008 l 519 1008 b 392 913 500 949 465 913 b 264 1008 320 913 282 949 l 193 1008 b 393 824 207 904 278 824 b 590 1008 510 824 573 905 z "
    },
    "\xd0\xba": {
        ha: 731,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 243 l 319 353 l 579 0 l 731 0 l 404 435 l 693 718 l 536 718 l 207 375 l 207 718 z "
    },
    "\xd0\xbb": {
        ha: 782,
        x_min: 0,
        x_max: 0,
        o: "m 0 97 l 0 1 b 94 -8 21 -3 67 -8 b 282 192 215 -8 264 82 b 303 614 302 318 303 441 l 575 614 l 575 0 l 693 0 l 693 718 l 189 718 b 176 284 189 562 190 418 b 72 90 168 196 163 90 b 0 97 55 90 14 93 z "
    },
    "\xd0\xbc": {
        ha: 956,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 569 l 424 0 l 532 0 l 749 569 l 749 0 l 867 0 l 867 718 l 697 718 l 479 136 l 476 136 l 258 718 z "
    },
    "\xd0\xbd": {
        ha: 778,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 331 l 571 331 l 571 0 l 689 0 l 689 718 l 571 718 l 571 432 l 207 432 l 207 718 z "
    },
    "\xd0\xbe": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 399 -15 b 549 13 455 -15 505 -6 b 747 358 671 67 747 185 b 399 735 747 582 623 735 b 248 706 341 735 291 725 b 50 358 126 651 50 532 b 399 -15 50 135 174 -15 z m 622 358 b 399 88 622 207 547 88 b 312 106 368 88 339 94 b 175 358 225 144 175 232 b 399 631 175 509 250 631 b 485 613 429 631 458 625 b 622 358 572 574 622 484 z "
    },
    "\xd0\xbf": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 614 l 557 614 l 557 0 l 675 0 l 675 718 z "
    },
    "\xd1\x80": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 446 -15 b 590 14 500 -15 548 -6 b 774 357 706 69 774 188 b 753 501 774 408 767 456 b 443 735 712 634 615 735 b 214 621 336 735 250 695 l 211 621 l 211 718 l 93 718 l 93 -274 l 211 -274 l 211 96 l 214 96 b 446 -15 255 28 340 -15 z m 433 88 b 207 360 277 88 207 205 b 426 631 207 510 274 631 b 649 365 575 631 649 513 b 433 88 649 211 588 87 z "
    },
    "\xd1\x81": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 703 263 l 582 263 b 385 88 568 155 505 88 b 175 350 239 87 175 205 b 399 631 175 510 237 631 b 576 488 502 631 559 575 l 699 488 b 389 735 681 649 566 735 b 240 705 331 735 282 725 b 50 350 119 648 50 525 b 386 -15 50 128 165 -15 b 703 263 579 -15 678 90 z "
    },
    "\xd1\x82": {
        ha: 643,
        x_min: 0,
        x_max: 0,
        o: "m 263 614 l 263 0 l 381 0 l 381 614 l 638 614 l 638 718 l 6 718 l 6 614 z "
    },
    "\xd1\x83": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -165 l 81 -274 b 163 -286 104 -282 132 -286 b 371 -94 295 -286 332 -193 l 683 718 l 558 718 l 357 131 l 354 131 l 144 718 l 11 718 l 296 4 l 247 -117 b 150 -182 228 -154 203 -182 b 81 -165 124 -182 101 -172 z "
    },
    "\xd1\x84": {
        ha: 1111,
        x_min: 0,
        x_max: 0,
        o: "m 497 54 l 497 -274 l 614 -274 l 614 54 b 767 -15 640 23 710 -15 b 902 17 820 -15 866 -5 b 1056 369 1007 78 1056 206 b 776 735 1056 573 968 735 b 614 657 708 735 645 696 l 614 992 l 497 992 l 497 657 b 335 735 466 696 402 735 b 56 369 143 735 56 574 b 344 -15 56 159 133 -15 b 497 54 408 -15 464 21 z m 178 367 b 351 636 178 505 215 636 b 497 536 427 636 480 597 l 497 175 b 358 82 487 120 425 82 b 178 367 216 82 178 224 z m 753 82 b 614 175 686 82 624 120 l 614 536 b 760 636 631 597 685 636 b 838 616 790 636 816 629 b 933 367 908 573 933 481 b 753 82 933 224 895 82 z "
    },
    "\xd1\x85": {
        ha: 719,
        x_min: 0,
        x_max: 0,
        o: "m 282 378 l 13 0 l 156 0 l 356 297 l 556 0 l 707 0 l 429 388 l 676 718 l 535 718 l 356 467 l 183 718 l 32 718 z "
    },
    "\xd1\x86": {
        ha: 783,
        x_min: 0,
        x_max: 0,
        o: "m 649 0 l 649 -218 l 761 -218 l 761 104 l 664 104 l 664 718 l 546 718 l 546 104 l 207 104 l 207 718 l 89 718 l 89 0 z "
    },
    "\xd1\x87": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 182 492 l 182 718 l 64 718 l 64 472 b 297 267 64 331 156 267 b 364 271 319 267 341 268 b 519 301 415 277 480 284 l 519 0 l 638 0 l 638 718 l 519 718 l 519 399 l 486 390 b 319 367 439 378 378 367 b 182 492 228 367 182 399 z "
    },
    "\xd1\x88": {
        ha: 1124,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 1035 0 l 1035 718 l 917 718 l 917 104 l 621 104 l 621 718 l 503 718 l 503 104 l 207 104 l 207 718 z "
    },
    "\xd1\x89": {
        ha: 1154,
        x_min: 0,
        x_max: 0,
        o: "m 1019 0 l 1019 -218 l 1132 -218 l 1132 104 l 1035 104 l 1035 718 l 917 718 l 917 104 l 621 104 l 621 718 l 503 718 l 503 104 l 207 104 l 207 718 l 89 718 l 89 0 z "
    },
    "\xd1\x8a": {
        ha: 857,
        x_min: 0,
        x_max: 0,
        o: "m 818 224 b 585 443 818 363 724 443 l 329 443 l 329 718 l 4 718 l 4 614 l 211 614 l 211 0 l 590 0 b 818 224 728 0 818 87 z m 547 104 l 329 104 l 329 342 l 547 342 b 696 224 646 342 696 302 b 547 104 696 144 646 104 z "
    },
    "\xd1\x8b": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 663 224 b 429 443 663 363 569 443 l 207 443 l 207 718 l 89 718 l 89 0 l 435 0 b 663 224 573 0 663 87 z m 392 104 l 207 104 l 207 342 l 392 342 b 540 224 491 342 540 302 b 392 104 540 144 491 104 z m 776 718 l 776 0 l 894 0 l 894 718 z "
    },
    "\xd1\x8c": {
        ha: 742,
        x_min: 0,
        x_max: 0,
        o: "m 703 224 b 469 443 703 363 609 443 l 214 443 l 214 718 l 96 718 l 96 0 l 475 0 b 703 224 613 0 703 87 z m 432 104 l 214 104 l 214 342 l 432 342 b 581 224 531 342 581 302 b 432 104 581 144 531 104 z "
    },
    "\xd1\x8d": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 51 506 l 174 506 b 350 636 200 593 258 636 b 569 421 488 636 551 546 l 271 421 l 271 325 l 571 325 b 350 83 563 183 491 83 b 167 243 247 83 186 137 l 46 243 b 347 -15 59 80 172 -15 b 495 12 403 -15 452 -6 b 696 369 623 66 696 188 b 351 735 696 594 575 735 b 51 506 180 735 77 653 z "
    },
    "\xd1\x8e": {
        ha: 1075,
        x_min: 0,
        x_max: 0,
        o: "m 690 -15 b 833 13 744 -15 791 -6 b 1025 358 951 68 1025 188 b 1003 506 1025 411 1018 460 b 690 735 961 636 860 735 b 560 711 642 735 599 727 b 360 425 448 665 377 565 l 207 425 l 207 718 l 89 718 l 89 0 l 207 0 l 207 324 l 356 324 b 690 -15 367 127 482 -15 z m 481 358 b 497 474 481 402 486 441 b 690 631 525 558 582 631 b 772 613 719 631 746 625 b 900 358 855 574 900 480 b 883 242 900 315 894 276 b 690 88 856 159 797 88 b 481 358 549 88 481 206 z "
    },
    "\xd1\x8f": {
        ha: 744,
        x_min: 0,
        x_max: 0,
        o: "m 240 281 l 4 0 l 161 0 l 381 276 l 538 276 l 538 0 l 656 0 l 656 718 l 292 718 b 67 497 155 718 67 633 b 240 281 67 380 138 295 z m 188 496 b 329 614 188 578 240 614 l 538 614 l 538 378 l 329 378 b 188 496 239 378 188 413 z "
    },
    "\xd1\x90": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 701 228 l 585 228 b 399 88 565 138 504 88 b 175 324 255 88 171 179 l 713 324 b 388 735 722 551 613 735 b 252 707 338 735 293 725 b 50 361 133 653 50 532 b 394 -15 50 133 166 -15 b 701 228 569 -15 672 76 z m 381 631 b 462 615 410 631 437 625 b 588 428 531 584 581 520 l 175 428 b 381 631 183 544 257 631 z m 360 1015 l 210 1015 l 390 817 l 479 817 z "
    },
    "\xd1\x91": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 701 228 l 585 228 b 399 88 565 138 504 88 b 175 324 255 88 171 179 l 713 324 b 388 735 722 551 613 735 b 252 707 338 735 293 725 b 50 361 133 653 50 532 b 394 -15 50 133 166 -15 b 701 228 569 -15 672 76 z m 381 631 b 462 615 410 631 437 625 b 588 428 531 584 581 520 l 175 428 b 381 631 183 544 257 631 z m 304 967 l 181 967 l 181 822 l 304 822 z m 565 967 l 440 967 l 440 822 l 565 822 z "
    },
    "\xd1\x92": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 697 40 l 697 456 b 456 718 697 631 617 718 b 224 592 344 718 267 676 l 221 592 l 221 786 l 507 786 l 507 883 l 221 883 l 221 992 l 103 992 l 103 883 l -29 883 l -29 786 l 103 786 l 103 0 l 221 0 l 221 403 b 428 615 221 531 301 615 b 579 458 525 615 579 557 l 579 53 b 390 -167 579 -94 532 -167 b 318 -162 371 -167 335 -166 l 318 -268 b 404 -274 340 -271 380 -274 b 697 40 605 -274 697 -163 z "
    },
    "\xd1\x93": {
        ha: 589,
        x_min: 0,
        x_max: 0,
        o: "m 92 718 l 92 0 l 210 0 l 210 614 l 583 614 l 583 718 z m 513 1015 l 361 1015 l 242 817 l 331 817 z "
    },
    "\xd1\x94": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 700 243 l 579 243 b 396 83 560 137 499 83 b 175 325 255 83 183 183 l 475 325 l 475 421 l 176 421 b 396 636 195 546 257 636 b 572 506 488 636 546 593 l 694 506 b 394 735 669 653 566 735 b 50 369 171 735 50 594 b 399 -15 50 138 167 -15 b 700 243 574 -15 687 80 z "
    },
    "\xd1\x95": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 336 631 b 503 510 426 631 496 594 l 621 510 b 326 735 610 675 500 735 b 58 531 186 735 58 672 b 406 302 58 347 262 342 b 528 194 464 286 528 263 b 354 88 528 108 440 88 b 161 226 249 88 165 124 l 43 226 b 347 -15 50 56 171 -15 b 653 210 513 -15 653 43 b 335 433 653 381 476 402 b 183 539 273 446 183 467 b 336 631 183 612 263 631 z "
    },
    "\xd1\x96": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 96 718 l 96 0 l 214 0 l 214 718 z m 96 992 l 96 847 l 214 847 l 214 992 z "
    },
    "\xd1\x97": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 86 967 l -37 967 l -37 822 l 86 822 z m 347 967 l 222 967 l 222 822 l 347 822 z m 96 718 l 96 0 l 214 0 l 214 718 z "
    },
    "\xd1\x98": {
        ha: 308,
        x_min: 0,
        x_max: 0,
        o: "m 214 -90 l 214 718 l 96 718 l 96 -71 b 29 -169 96 -136 88 -169 b -18 -167 13 -169 -6 -169 l -18 -268 b 42 -274 0 -272 21 -274 b 214 -90 155 -274 214 -210 z m 96 992 l 96 847 l 214 847 l 214 992 z "
    },
    "\xd1\x99": {
        ha: 1221,
        x_min: 0,
        x_max: 0,
        o: "m 1182 224 b 949 443 1182 363 1088 443 l 693 443 l 693 718 l 189 718 b 176 284 189 562 190 418 b 72 90 168 196 163 90 b 0 97 55 90 14 93 l 0 1 b 94 -8 21 -3 67 -8 b 282 192 215 -8 264 82 b 303 614 302 318 303 441 l 575 614 l 575 0 l 954 0 b 1182 224 1092 0 1182 87 z m 911 104 l 693 104 l 693 342 l 911 342 b 1060 224 1010 342 1060 302 b 911 104 1060 144 1010 104 z "
    },
    "\xd1\x9a": {
        ha: 1217,
        x_min: 0,
        x_max: 0,
        o: "m 1178 219 b 944 435 1178 359 1084 435 l 689 435 l 689 718 l 571 718 l 571 435 l 207 435 l 207 718 l 89 718 l 89 0 l 207 0 l 207 333 l 571 333 l 571 0 l 950 0 b 1178 219 1088 0 1178 83 z m 1056 219 b 907 104 1056 143 1006 104 l 689 104 l 689 333 l 907 333 b 1056 219 998 333 1056 306 z "
    },
    "\xd1\x9b": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 433 614 b 579 469 523 614 579 559 l 579 0 l 697 0 l 697 456 b 450 718 697 627 623 718 b 224 596 343 718 256 673 l 221 596 l 221 786 l 507 786 l 507 883 l 221 883 l 221 992 l 103 992 l 103 883 l -29 883 l -29 786 l 103 786 l 103 0 l 221 0 l 221 389 b 433 614 221 527 294 614 z "
    },
    "\xd1\x9c": {
        ha: 731,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 243 l 319 353 l 579 0 l 731 0 l 404 435 l 693 718 l 536 718 l 207 375 l 207 718 z m 569 1015 l 418 1015 l 299 817 l 388 817 z "
    },
    "\xd1\x9d": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 240 0 l 579 586 l 579 0 l 697 0 l 697 718 l 546 718 l 207 132 l 207 718 z m 381 1015 l 231 1015 l 411 817 l 500 817 z "
    },
    "\xd1\x9e": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -165 l 81 -274 b 163 -286 104 -282 132 -286 b 371 -94 295 -286 332 -193 l 683 718 l 558 718 l 357 131 l 354 131 l 144 718 l 11 718 l 296 4 l 247 -117 b 150 -182 228 -154 203 -182 b 81 -165 124 -182 101 -172 z m 553 1008 l 482 1008 b 354 913 462 949 427 913 b 226 1008 283 913 244 949 l 156 1008 b 356 824 169 904 241 824 b 553 1008 473 824 536 905 z "
    },
    "\xd1\x9f": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 322 0 l 322 -218 l 440 -218 l 440 0 l 675 0 l 675 718 l 557 718 l 557 104 l 207 104 l 207 718 l 89 718 l 89 0 z "
    },
    "\xd1\xa2": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 961 293 b 657 588 961 486 851 588 l 354 588 l 354 751 l 685 751 l 685 863 l 354 863 l 354 992 l 222 992 l 222 863 l 0 863 l 0 751 l 222 751 l 222 0 l 657 0 b 961 293 850 0 961 102 z m 613 111 l 354 111 l 354 478 l 613 478 b 829 293 757 478 829 416 b 613 111 829 172 757 111 z "
    },
    "\xd1\xa3": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 768 224 b 535 443 768 363 674 443 l 279 443 l 279 614 l 536 614 l 536 718 l 279 718 l 279 992 l 161 992 l 161 718 l -6 718 l -6 614 l 161 614 l 161 0 l 540 0 b 768 224 678 0 768 87 z m 497 104 l 279 104 l 279 342 l 497 342 b 646 224 596 342 646 302 b 497 104 646 144 596 104 z "
    },
    "\xd1\xaa": {
        ha: 1299,
        x_min: 0,
        x_max: 0,
        o: "m 878 563 l 774 563 l 1054 992 l 243 992 l 524 563 l 421 563 b 88 271 207 563 88 474 l 88 0 l 219 0 l 219 263 b 223 327 219 283 221 304 b 421 454 232 420 310 454 l 583 454 l 583 0 l 715 0 l 715 454 l 878 454 b 1079 263 1021 454 1079 400 l 1079 0 l 1211 0 l 1211 271 b 878 563 1211 474 1092 563 z m 840 888 l 649 582 l 464 888 z "
    },
    "\xd1\xab": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 325 314 l 447 314 l 447 0 l 565 0 l 565 314 l 688 314 b 825 189 779 314 825 282 l 825 0 l 943 0 l 943 204 b 710 410 943 345 851 410 l 603 410 l 828 718 l 183 718 l 403 410 l 303 410 b 69 204 161 410 69 345 l 69 0 l 188 0 l 188 189 b 325 314 188 282 234 314 z m 633 629 l 507 436 l 385 629 z "
    },
    "\xd1\xb2": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 83 300 53 427 63 362 b 528 -22 142 116 286 -22 b 735 20 606 -22 675 -8 b 1003 496 896 97 1003 262 b 973 691 1003 563 993 628 b 528 1015 914 875 769 1015 b 321 972 449 1015 380 1001 b 53 496 160 894 53 729 z m 869 457 b 528 88 857 251 748 88 b 391 114 476 88 430 96 b 190 411 278 164 212 271 b 356 499 229 450 278 499 b 521 440 413 499 474 461 b 696 381 569 417 635 381 b 869 457 766 381 827 424 z m 185 528 b 528 904 197 736 305 904 b 865 575 737 904 838 757 b 697 489 825 538 773 489 b 631 508 680 489 658 495 b 546 548 605 520 576 534 b 363 607 496 571 428 607 b 185 528 292 607 226 561 z "
    },
    "\xd1\xb3": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 399 -15 b 549 13 455 -15 505 -6 b 747 358 671 67 747 185 b 399 735 747 582 623 735 b 248 706 341 735 291 725 b 50 358 126 651 50 532 b 399 -15 50 135 174 -15 z m 285 371 b 388 331 322 371 359 346 b 504 290 419 313 459 290 b 625 351 557 290 595 323 b 606 238 624 309 618 271 b 399 81 575 154 509 81 b 317 97 370 81 343 86 b 174 315 236 130 184 209 b 285 371 200 340 238 371 z m 175 406 b 201 503 179 442 187 474 b 399 638 234 574 297 638 b 617 435 520 638 594 544 b 506 375 592 410 551 375 b 406 416 473 375 434 401 b 292 457 375 433 333 457 b 175 406 240 457 204 431 z "
    },
    "\xd1\xb4": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 846 1006 b 638 833 742 1006 673 948 l 428 132 l 425 132 l 142 992 l 0 992 l 349 0 l 499 0 l 756 792 b 869 889 775 852 802 889 b 954 881 904 889 932 886 l 954 992 b 846 1006 933 998 873 1006 z "
    },
    "\xd1\xb5": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 750 626 l 750 722 b 668 731 729 727 697 731 b 497 583 567 731 522 664 l 356 119 l 353 119 l 151 718 l 19 718 l 281 0 l 419 0 l 603 550 b 690 632 617 592 637 632 b 750 626 708 632 735 631 z "
    },
    "\xd2\x8c": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 961 293 b 657 588 961 486 851 588 l 354 588 l 354 881 l 579 881 l 579 992 l 354 992 l 354 1138 l 222 1138 l 222 992 l 14 992 l 14 881 l 222 881 l 222 0 l 657 0 b 961 293 850 0 961 102 z m 613 111 l 354 111 l 354 478 l 613 478 b 829 293 757 478 829 416 b 613 111 829 172 757 111 z "
    },
    "\xd2\x8d": {
        ha: 785,
        x_min: 0,
        x_max: 0,
        o: "m 746 224 b 513 443 746 363 652 443 l 257 443 l 257 614 l 411 614 l 411 718 l 257 718 l 257 868 l 139 868 l 139 718 l 0 718 l 0 614 l 139 614 l 139 0 l 518 0 b 746 224 656 0 746 87 z m 475 104 l 257 104 l 257 342 l 475 342 b 624 224 574 342 624 302 b 475 104 624 144 574 104 z "
    },
    "\xd2\x90": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 117 992 l 117 0 l 249 0 l 249 881 l 761 881 l 761 1213 l 629 1213 l 629 992 z "
    },
    "\xd2\x91": {
        ha: 589,
        x_min: 0,
        x_max: 0,
        o: "m 92 718 l 92 0 l 210 0 l 210 614 l 583 614 l 583 933 l 465 933 l 465 718 z "
    },
    "\xd2\x92": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 201 454 l 201 0 l 333 0 l 333 454 l 611 454 l 611 565 l 333 565 l 333 881 l 846 881 l 846 992 l 201 992 l 201 565 l 31 565 l 31 454 z "
    },
    "\xd2\x93": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 157 308 l 157 0 l 275 0 l 275 308 l 506 308 l 506 413 l 275 413 l 275 614 l 649 614 l 649 718 l 157 718 l 157 413 l 28 413 l 28 308 z "
    },
    "\xd2\x96": {
        ha: 1425,
        x_min: 0,
        x_max: 0,
        o: "m 1306 0 l 1306 -246 l 1432 -246 l 1432 111 l 1325 111 l 969 583 l 1364 992 l 1200 992 l 767 529 l 767 992 l 638 992 l 638 529 l 204 992 l 40 992 l 435 583 l -4 0 l 160 0 l 521 492 l 638 369 l 638 0 l 767 0 l 767 369 l 883 492 l 1244 0 z "
    },
    "\xd2\x97": {
        ha: 1107,
        x_min: 0,
        x_max: 0,
        o: "m 994 0 l 994 -218 l 1107 -218 l 1107 104 l 1010 104 l 774 422 l 1047 718 l 901 718 l 603 385 l 603 718 l 485 718 l 485 385 l 186 718 l 40 718 l 314 422 l 0 0 l 146 0 l 392 347 l 485 257 l 485 0 l 603 0 l 603 257 l 696 347 l 942 0 z "
    },
    "\xd2\x98": {
        ha: 908,
        x_min: 0,
        x_max: 0,
        o: "m 599 -167 b 482 -65 599 -101 545 -65 b 436 -75 461 -65 445 -69 l 433 -72 l 474 -21 b 644 13 540 -20 597 -9 b 846 289 748 59 846 149 b 647 526 846 422 761 504 l 647 531 b 811 746 733 558 811 634 b 785 866 811 792 802 832 b 472 1015 733 965 622 1015 b 96 703 255 1015 103 913 l 222 703 b 468 907 237 843 317 907 b 681 746 586 907 681 864 b 465 568 681 615 595 568 l 421 568 b 376 571 402 568 388 569 l 376 463 b 465 465 397 464 442 465 b 715 292 605 465 715 432 b 697 206 715 260 709 232 b 472 85 660 132 581 85 b 178 326 300 85 181 156 l 51 326 b 417 -21 51 99 203 -6 l 349 -107 l 372 -146 b 429 -135 392 -139 404 -135 b 494 -178 461 -135 494 -148 b 408 -221 494 -212 444 -221 b 324 -203 379 -221 345 -212 l 299 -264 b 426 -290 337 -277 377 -290 b 599 -167 515 -290 599 -256 z "
    },
    "\xd2\x99": {
        ha: 703,
        x_min: 0,
        x_max: 0,
        o: "m 488 -167 b 371 -65 488 -101 433 -65 b 325 -75 350 -65 334 -69 l 322 -72 l 368 -15 b 650 213 517 -11 650 59 b 511 389 650 311 594 375 l 511 392 b 626 542 574 405 626 463 b 605 628 626 575 619 604 b 357 735 562 700 473 735 b 54 507 188 735 64 668 l 174 507 b 356 638 184 597 257 638 b 507 536 435 638 507 605 b 356 421 507 451 439 421 l 279 421 l 279 325 l 375 325 b 528 210 470 325 528 295 b 351 82 528 123 447 82 b 161 231 243 82 168 127 l 42 231 b 311 -14 51 77 155 -2 l 238 -107 l 261 -146 b 318 -135 280 -139 293 -135 b 383 -178 350 -135 383 -148 b 297 -221 383 -212 333 -221 b 213 -203 268 -221 234 -212 l 188 -264 b 315 -290 226 -277 266 -290 b 488 -167 404 -290 488 -256 z "
    },
    "\xd2\x9a": {
        ha: 950,
        x_min: 0,
        x_max: 0,
        o: "m 831 0 l 831 -246 l 957 -246 l 957 111 l 850 111 l 496 592 l 914 992 l 743 992 l 240 497 l 240 992 l 108 992 l 108 0 l 240 0 l 240 347 l 406 501 l 764 0 z "
    },
    "\xd2\x9b": {
        ha: 750,
        x_min: 0,
        x_max: 0,
        o: "m 638 0 l 638 -218 l 750 -218 l 750 104 l 653 104 l 404 435 l 693 718 l 536 718 l 207 375 l 207 718 l 89 718 l 89 0 l 207 0 l 207 243 l 319 353 l 579 0 z "
    },
    "\xd2\x9c": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 454 l 324 454 l 324 240 l 407 240 l 407 454 l 439 454 l 778 0 l 944 0 l 553 519 l 935 992 l 783 992 l 439 565 l 407 565 l 407 775 l 324 775 l 324 565 l 240 565 l 240 992 z "
    },
    "\xd2\x9d": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 331 l 269 331 l 269 167 l 346 167 l 346 331 l 369 331 l 614 0 l 765 0 l 472 392 l 756 718 l 613 718 l 369 432 l 346 432 l 346 576 l 269 576 l 269 432 l 207 432 l 207 718 z "
    },
    "\xd2\xa0": {
        ha: 1100,
        x_min: 0,
        x_max: 0,
        o: "m 282 881 l 282 0 l 414 0 l 414 347 l 579 501 l 938 0 l 1104 0 l 669 592 l 1088 992 l 917 992 l 414 497 l 414 992 l 3 992 l 3 881 z "
    },
    "\xd2\xa1": {
        ha: 853,
        x_min: 0,
        x_max: 0,
        o: "m 211 614 l 211 0 l 329 0 l 329 243 l 442 353 l 701 0 l 853 0 l 526 435 l 815 718 l 658 718 l 329 375 l 329 718 l 4 718 l 4 614 z "
    },
    "\xd2\xa2": {
        ha: 1026,
        x_min: 0,
        x_max: 0,
        o: "m 875 0 l 875 -246 l 1001 -246 l 1001 111 l 894 111 l 894 992 l 763 992 l 763 565 l 240 565 l 240 992 l 108 992 l 108 0 l 240 0 l 240 454 l 763 454 l 763 0 z "
    },
    "\xd2\xa3": {
        ha: 808,
        x_min: 0,
        x_max: 0,
        o: "m 674 0 l 674 -218 l 786 -218 l 786 104 l 689 104 l 689 718 l 571 718 l 571 432 l 207 432 l 207 718 l 89 718 l 89 0 l 207 0 l 207 331 l 571 331 l 571 0 z "
    },
    "\xd2\xa4": {
        ha: 1410,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 240 0 l 240 454 l 763 454 l 763 0 l 894 0 l 894 881 l 1407 881 l 1407 992 l 763 992 l 763 565 l 240 565 l 240 992 z "
    },
    "\xd2\xa5": {
        ha: 1068,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 207 0 l 207 331 l 571 331 l 571 0 l 689 0 l 689 614 l 1063 614 l 1063 718 l 571 718 l 571 432 l 207 432 l 207 718 z "
    },
    "\xd2\xaa": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 682 -167 b 565 -65 682 -101 628 -65 b 519 -75 544 -65 529 -69 l 517 -72 l 558 -21 b 947 374 796 -6 922 142 l 815 374 b 529 88 804 208 706 87 b 376 121 470 88 419 99 b 192 503 254 185 192 319 b 528 904 192 730 299 904 b 806 693 678 904 778 823 l 938 693 b 890 833 930 746 914 792 b 529 1015 824 943 702 1015 b 326 974 452 1015 385 1002 b 60 493 163 898 60 730 b 87 294 60 422 69 355 b 499 -21 140 114 273 -15 l 432 -107 l 456 -146 b 513 -135 475 -139 488 -135 b 578 -178 544 -135 578 -148 b 492 -221 578 -212 527 -221 b 407 -203 462 -221 428 -212 l 382 -264 b 510 -290 421 -277 461 -290 b 682 -167 598 -290 682 -256 z "
    },
    "\xd2\xab": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 529 -167 b 413 -65 529 -101 475 -65 b 367 -75 391 -65 376 -69 l 364 -72 l 410 -14 b 703 263 587 -4 678 97 l 582 263 b 385 88 568 155 505 88 b 175 350 239 87 175 205 b 399 631 175 510 237 631 b 576 488 502 631 559 575 l 699 488 b 389 735 681 649 566 735 b 240 705 331 735 282 725 b 50 350 119 648 50 525 b 353 -14 50 138 155 1 l 279 -107 l 303 -146 b 360 -135 322 -139 335 -135 b 425 -178 391 -135 425 -148 b 339 -221 425 -212 374 -221 b 254 -203 309 -221 275 -212 l 229 -264 b 357 -290 268 -277 308 -290 b 529 -167 446 -290 529 -256 z "
    },
    "\xd2\xae": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 518 0 l 518 406 l 897 992 l 747 992 l 457 519 l 160 992 l 3 992 l 386 406 l 386 0 z "
    },
    "\xd2\xaf": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 411 -274 l 411 35 l 683 718 l 558 718 l 357 158 l 354 158 l 144 718 l 11 718 l 293 33 l 293 -274 z "
    },
    "\xd2\xb0": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 386 221 l 386 0 l 518 0 l 518 221 l 738 221 l 738 332 l 518 332 l 518 406 l 897 992 l 747 992 l 457 519 l 160 992 l 3 992 l 386 406 l 386 332 l 167 332 l 167 221 z "
    },
    "\xd2\xb1": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 293 -132 l 293 -274 l 411 -274 l 411 -132 l 599 -132 l 599 -28 l 411 -28 l 411 35 l 683 718 l 558 718 l 357 158 l 354 158 l 144 718 l 11 718 l 293 33 l 293 -28 l 106 -28 l 106 -132 z "
    },
    "\xd2\xb2": {
        ha: 874,
        x_min: 0,
        x_max: 0,
        o: "m 754 0 l 754 -246 l 881 -246 l 881 111 l 774 111 l 501 510 l 829 992 l 682 992 l 424 604 l 176 992 l 18 992 l 344 510 l 0 0 l 147 0 l 422 410 l 689 0 z "
    },
    "\xd2\xb3": {
        ha: 731,
        x_min: 0,
        x_max: 0,
        o: "m 618 0 l 618 -218 l 731 -218 l 731 104 l 633 104 l 429 388 l 676 718 l 535 718 l 356 467 l 183 718 l 32 718 l 282 378 l 13 0 l 156 0 l 356 297 l 556 0 z "
    },
    "\xd2\xb6": {
        ha: 938,
        x_min: 0,
        x_max: 0,
        o: "m 399 504 b 196 704 250 504 196 562 l 196 992 l 65 992 l 65 693 b 399 392 65 483 179 392 b 674 429 495 392 594 411 l 674 0 l 786 0 l 786 -246 l 913 -246 l 913 111 l 806 111 l 806 992 l 674 992 l 674 540 b 399 504 604 522 499 504 z "
    },
    "\xd2\xb7": {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 182 492 l 182 718 l 64 718 l 64 472 b 297 267 64 331 156 267 b 364 271 319 267 341 268 b 519 301 415 277 480 284 l 519 0 l 622 0 l 622 -218 l 735 -218 l 735 104 l 638 104 l 638 718 l 519 718 l 519 399 l 486 390 b 319 367 439 378 378 367 b 182 492 228 367 182 399 z "
    },
    "\xd2\xb8": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 674 429 l 674 0 l 806 0 l 806 992 l 674 992 l 674 540 b 474 507 618 528 546 513 l 474 713 l 390 713 l 390 504 b 196 704 248 507 196 564 l 196 992 l 65 992 l 65 693 b 390 392 65 484 175 394 l 390 178 l 474 178 l 474 396 b 674 429 536 402 625 417 z "
    },
    "\xd2\xb9": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 519 301 l 519 0 l 638 0 l 638 718 l 519 718 l 519 399 b 388 372 487 390 429 378 l 388 529 l 311 529 l 311 367 b 182 492 226 369 182 403 l 182 718 l 64 718 l 64 472 b 297 267 64 331 156 267 l 311 267 l 311 119 l 388 119 l 388 274 b 519 301 431 280 489 289 z "
    },
    "\xd2\xba": {
        ha: 924,
        x_min: 0,
        x_max: 0,
        o: "m 515 501 b 718 301 663 501 718 444 l 718 0 l 849 0 l 849 313 b 515 614 849 523 735 614 b 240 576 418 614 320 595 l 240 992 l 108 992 l 108 0 l 240 0 l 240 465 b 515 501 310 483 415 501 z "
    },
    "\xd2\xbb": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 419 631 b 565 486 509 631 565 575 l 565 0 l 683 0 l 683 472 b 436 735 683 644 609 735 b 210 613 329 735 242 690 l 207 613 l 207 992 l 89 992 l 89 0 l 207 0 l 207 406 b 419 631 207 543 281 631 z "
    },
    "\xd3\x80": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 114 992 l 114 0 l 246 0 l 246 992 z "
    },
    "\xd3\x81": {
        ha: 1404,
        x_min: 0,
        x_max: 0,
        o: "m 638 992 l 638 529 l 204 992 l 40 992 l 435 583 l -4 0 l 160 0 l 521 492 l 638 369 l 638 0 l 767 0 l 767 369 l 883 492 l 1244 0 l 1408 0 l 969 583 l 1364 992 l 1200 992 l 767 529 l 767 992 z m 911 1249 l 840 1249 b 701 1150 818 1183 772 1150 b 563 1249 629 1150 583 1183 l 492 1249 b 703 1057 506 1142 583 1057 b 911 1249 828 1057 893 1141 z "
    },
    "\xd3\x82": {
        ha: 1088,
        x_min: 0,
        x_max: 0,
        o: "m 485 718 l 485 385 l 186 718 l 40 718 l 314 422 l 0 0 l 146 0 l 392 347 l 485 257 l 485 0 l 603 0 l 603 257 l 696 347 l 942 0 l 1088 0 l 774 422 l 1047 718 l 901 718 l 603 385 l 603 718 z m 742 1008 l 671 1008 b 543 913 651 949 616 913 b 415 1008 472 913 433 949 l 344 1008 b 544 824 358 904 430 824 b 742 1008 662 824 724 905 z "
    },
    "\xd3\x90": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 378 992 l -8 0 l 126 0 l 238 299 l 657 299 l 765 0 l 911 0 l 524 992 z m 615 410 l 279 410 l 447 872 l 450 872 z m 656 1249 l 585 1249 b 446 1150 563 1183 516 1150 b 307 1249 374 1150 327 1183 l 236 1249 b 447 1057 250 1142 328 1057 b 656 1249 572 1057 638 1141 z "
    },
    "\xd3\x91": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 540 94 b 640 -15 540 23 573 -15 b 725 3 676 -15 705 -9 l 725 94 b 689 88 709 90 697 88 b 651 168 647 88 651 122 l 651 538 b 382 735 651 692 535 735 b 78 494 206 735 85 664 l 196 494 b 375 631 201 597 271 631 b 535 511 467 631 535 604 b 293 406 535 411 379 423 b 50 185 161 382 50 342 b 288 -15 50 44 148 -15 b 540 94 403 -15 483 26 z m 175 193 b 399 333 175 313 294 319 b 533 371 449 340 503 346 l 533 250 b 521 197 533 233 529 216 b 314 88 491 128 415 88 b 175 193 237 87 175 116 z m 589 1008 l 518 1008 b 390 913 498 949 463 913 b 263 1008 319 913 281 949 l 192 1008 b 392 824 206 904 277 824 b 589 1008 509 824 572 905 z "
    },
    "\xd3\x92": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 378 992 l -8 0 l 126 0 l 238 299 l 657 299 l 765 0 l 911 0 l 524 992 z m 615 410 l 279 410 l 447 872 l 450 872 z m 381 1213 l 257 1213 l 257 1068 l 381 1068 z m 642 1213 l 517 1213 l 517 1068 l 642 1068 z "
    },
    "\xd3\x93": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 540 94 b 640 -15 540 23 573 -15 b 725 3 676 -15 705 -9 l 725 94 b 689 88 709 90 697 88 b 651 168 647 88 651 122 l 651 538 b 382 735 651 692 535 735 b 78 494 206 735 85 664 l 196 494 b 375 631 201 597 271 631 b 535 511 467 631 535 604 b 293 406 535 411 379 423 b 50 185 161 382 50 342 b 288 -15 50 44 148 -15 b 540 94 403 -15 483 26 z m 175 193 b 399 333 175 313 294 319 b 533 371 449 340 503 346 l 533 250 b 521 197 533 233 529 216 b 314 88 491 128 415 88 b 175 193 237 87 175 116 z m 304 967 l 181 967 l 181 822 l 304 822 z m 565 967 l 440 967 l 440 822 l 565 822 z "
    },
    "\xd3\x94": {
        ha: 1286,
        x_min: 0,
        x_max: 0,
        o: "m 1235 992 l 492 992 l -8 0 l 139 0 l 281 289 l 622 289 l 622 0 l 1243 0 l 1243 111 l 747 111 l 747 454 l 1206 454 l 1206 565 l 747 565 l 747 881 l 1235 881 z m 622 400 l 332 400 l 565 881 l 622 881 z "
    },
    "\xd3\x95": {
        ha: 1208,
        x_min: 0,
        x_max: 0,
        o: "m 596 124 b 856 -15 637 31 724 -15 b 1167 226 1029 -15 1134 79 l 1046 226 b 864 88 1026 141 963 88 b 649 324 723 88 649 184 l 1175 324 b 851 735 1175 563 1093 735 b 622 631 751 735 665 696 b 382 735 584 708 496 735 b 78 494 206 735 85 664 l 196 494 b 375 631 201 597 271 631 b 538 519 465 631 538 610 b 405 425 538 445 474 435 b 50 185 236 400 50 382 b 293 -15 50 41 150 -15 b 596 124 433 -15 545 30 z m 175 193 b 538 371 175 368 429 304 l 538 250 b 524 197 538 233 533 216 b 314 88 493 129 416 88 b 175 193 237 87 175 116 z m 1050 428 l 649 428 b 851 631 649 551 727 631 b 1050 428 976 631 1046 548 z "
    },
    "\xd3\x96": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 797 0 l 797 111 l 240 111 l 240 454 l 756 454 l 756 565 l 240 565 l 240 881 l 793 881 l 793 992 z m 669 1249 l 599 1249 b 460 1150 576 1183 530 1150 b 321 1249 388 1150 341 1183 l 250 1249 b 461 1057 264 1142 342 1057 b 669 1249 586 1057 651 1141 z "
    },
    "\xd3\x97": {
        ha: 746,
        x_min: 0,
        x_max: 0,
        o: "m 701 228 l 585 228 b 399 88 565 138 504 88 b 175 324 255 88 171 179 l 713 324 b 388 735 722 551 613 735 b 252 707 338 735 293 725 b 50 361 133 653 50 532 b 394 -15 50 133 166 -15 b 701 228 569 -15 672 76 z m 381 631 b 462 615 410 631 437 625 b 588 428 531 584 581 520 l 175 428 b 381 631 183 544 257 631 z m 589 1008 l 518 1008 b 390 913 498 949 463 913 b 263 1008 319 913 281 949 l 192 1008 b 392 824 206 904 277 824 b 589 1008 509 824 572 905 z "
    },
    "\xd3\x98": {
        ha: 1032,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 79 300 53 427 62 362 b 514 -22 133 111 271 -22 b 697 13 580 -22 641 -11 b 979 494 869 83 979 252 b 949 695 979 565 969 632 b 501 1015 890 879 743 1015 b 358 995 453 1015 405 1009 b 69 706 217 955 98 858 l 200 706 b 244 787 210 735 225 762 b 504 907 299 855 384 907 b 640 878 555 907 600 897 b 844 550 756 821 826 703 l 56 550 b 53 523 54 539 53 530 z m 508 85 b 365 117 452 85 404 95 b 186 440 258 175 196 289 l 850 440 b 821 299 847 389 838 342 b 508 85 775 178 672 85 z "
    },
    "\xd3\x99": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 365 735 b 58 492 191 735 88 644 l 175 492 b 361 632 194 581 256 632 b 585 396 504 632 589 540 l 47 396 b 372 -15 38 169 146 -15 b 508 13 421 -15 466 -6 b 710 358 627 66 710 186 b 365 735 710 586 594 735 z m 379 89 b 298 105 350 89 322 94 b 172 292 228 135 178 199 l 585 292 b 379 89 577 176 503 89 z "
    },
    "\xd3\x9c": {
        ha: 1404,
        x_min: 0,
        x_max: 0,
        o: "m 638 992 l 638 529 l 204 992 l 40 992 l 435 583 l -4 0 l 160 0 l 521 492 l 638 369 l 638 0 l 767 0 l 767 369 l 883 492 l 1244 0 l 1408 0 l 969 583 l 1364 992 l 1200 992 l 767 529 l 767 992 z m 633 1213 l 510 1213 l 510 1068 l 633 1068 z m 894 1213 l 769 1213 l 769 1068 l 894 1068 z "
    },
    "\xd3\x9d": {
        ha: 1088,
        x_min: 0,
        x_max: 0,
        o: "m 485 718 l 485 385 l 186 718 l 40 718 l 314 422 l 0 0 l 146 0 l 392 347 l 485 257 l 485 0 l 603 0 l 603 257 l 696 347 l 942 0 l 1088 0 l 774 422 l 1047 718 l 901 718 l 603 385 l 603 718 z m 475 967 l 351 967 l 351 822 l 475 822 z m 736 967 l 611 967 l 611 822 l 736 822 z "
    },
    "\xd3\x9e": {
        ha: 908,
        x_min: 0,
        x_max: 0,
        o: "m 647 526 l 647 531 b 811 746 733 558 811 634 b 785 866 811 792 802 832 b 472 1015 733 965 622 1015 b 96 703 255 1015 103 913 l 222 703 b 468 907 237 843 317 907 b 681 746 586 907 681 864 b 465 568 681 615 595 568 l 421 568 b 376 571 402 568 388 569 l 376 463 b 465 465 397 464 442 465 b 715 292 605 465 715 432 b 697 206 715 260 709 232 b 472 85 660 132 581 85 b 178 326 300 85 181 156 l 51 326 b 82 171 51 266 62 214 b 461 -22 142 43 275 -22 b 758 88 595 -22 693 22 b 846 289 806 136 846 206 b 647 526 846 422 761 504 z m 385 1213 l 261 1213 l 261 1068 l 385 1068 z m 646 1213 l 521 1213 l 521 1068 l 646 1068 z "
    },
    "\xd3\x9f": {
        ha: 703,
        x_min: 0,
        x_max: 0,
        o: "m 511 389 l 511 392 b 626 542 574 405 626 463 b 605 628 626 575 619 604 b 357 735 562 700 473 735 b 54 507 188 735 64 668 l 174 507 b 356 638 184 597 257 638 b 507 536 435 638 507 605 b 356 421 507 451 439 421 l 279 421 l 279 325 l 375 325 b 528 210 470 325 528 295 b 351 82 528 123 447 82 b 161 231 243 82 168 127 l 42 231 b 353 -15 51 65 172 -15 b 650 213 510 -15 650 54 b 511 389 650 311 594 375 z m 282 967 l 158 967 l 158 822 l 282 822 z m 543 967 l 418 967 l 418 822 l 543 822 z "
    },
    "\xd3\xa2": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 274 0 l 774 843 l 774 0 l 906 0 l 906 992 l 739 992 l 240 151 l 240 992 z m 743 1183 l 271 1183 l 271 1107 l 743 1107 z "
    },
    "\xd3\xa3": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 240 0 l 579 586 l 579 0 l 697 0 l 697 718 l 546 718 l 207 132 l 207 718 z m 629 938 l 157 938 l 157 861 l 629 861 z "
    },
    "\xd3\xa4": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 108 992 l 108 0 l 274 0 l 774 843 l 774 0 l 906 0 l 906 992 l 739 992 l 240 151 l 240 992 z m 438 1213 l 314 1213 l 314 1068 l 438 1068 z m 699 1213 l 574 1213 l 574 1068 l 699 1068 z "
    },
    "\xd3\xa5": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 89 718 l 89 0 l 240 0 l 579 586 l 579 0 l 697 0 l 697 718 l 546 718 l 207 132 l 207 718 z m 324 967 l 200 967 l 200 822 l 324 822 z m 585 967 l 460 967 l 460 822 l 585 822 z "
    },
    "\xd3\xa6": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 83 300 53 427 63 362 b 528 -22 142 116 286 -22 b 735 20 606 -22 675 -8 b 1003 496 896 97 1003 262 b 973 691 1003 563 993 628 b 528 1015 914 875 769 1015 b 321 972 449 1015 380 1001 b 53 496 160 894 53 729 z m 528 88 b 372 123 468 88 416 99 b 185 496 255 187 185 319 b 528 904 185 724 297 904 b 683 869 588 904 640 892 b 871 496 801 805 871 672 b 528 88 871 268 758 88 z m 458 1213 l 335 1213 l 335 1068 l 458 1068 z m 719 1213 l 594 1213 l 594 1068 l 719 1068 z "
    },
    "\xd3\xa7": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 399 -15 b 549 13 455 -15 505 -6 b 747 358 671 67 747 185 b 399 735 747 582 623 735 b 248 706 341 735 291 725 b 50 358 126 651 50 532 b 399 -15 50 135 174 -15 z m 622 358 b 399 88 622 207 547 88 b 312 106 368 88 339 94 b 175 358 225 144 175 232 b 399 631 175 509 250 631 b 485 613 429 631 458 625 b 622 358 572 574 622 484 z m 329 967 l 206 967 l 206 822 l 329 822 z m 590 967 l 465 967 l 465 822 l 590 822 z "
    },
    "\xd3\xa8": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 53 496 b 83 300 53 427 63 362 b 528 -22 142 116 286 -22 b 735 20 606 -22 675 -8 b 1003 496 896 97 1003 262 b 973 691 1003 563 993 628 b 528 1015 914 875 769 1015 b 321 972 449 1015 380 1001 b 53 496 160 894 53 729 z m 528 88 b 381 119 471 88 422 98 b 186 454 268 176 196 296 l 869 454 b 528 88 853 251 748 88 z m 528 904 b 668 876 581 904 628 895 b 867 565 781 822 848 711 l 189 565 b 528 904 213 752 316 904 z "
    },
    "\xd3\xa9": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 399 -15 b 549 13 455 -15 505 -6 b 747 358 671 67 747 185 b 399 735 747 582 623 735 b 248 706 341 735 291 725 b 50 358 126 651 50 532 b 399 -15 50 135 174 -15 z m 176 324 l 621 324 b 399 88 610 191 532 88 b 176 324 265 88 188 191 z m 617 425 l 181 425 b 399 631 200 540 275 631 b 617 425 523 631 597 540 z "
    },
    "\xd3\xae": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 85 110 l 85 1 b 207 -15 117 -8 165 -15 b 343 35 255 -15 300 1 b 469 213 386 68 428 127 l 850 992 l 710 992 l 431 397 l 144 992 l 1 992 l 360 269 l 343 235 b 182 96 313 171 275 96 b 85 110 150 96 108 102 z m 660 1183 l 188 1183 l 188 1107 l 660 1107 z "
    },
    "\xd3\xaf": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -165 l 81 -274 b 163 -286 104 -282 132 -286 b 371 -94 295 -286 332 -193 l 683 718 l 558 718 l 357 131 l 354 131 l 144 718 l 11 718 l 296 4 l 247 -117 b 150 -182 228 -154 203 -182 b 81 -165 124 -182 101 -172 z m 583 938 l 111 938 l 111 861 l 583 861 z "
    },
    "\xd3\xb0": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 85 110 l 85 1 b 207 -15 117 -8 165 -15 b 343 35 255 -15 300 1 b 469 213 386 68 428 127 l 850 992 l 710 992 l 431 397 l 144 992 l 1 992 l 360 269 l 343 235 b 182 96 313 171 275 96 b 85 110 150 96 108 102 z m 356 1213 l 232 1213 l 232 1068 l 356 1068 z m 617 1213 l 492 1213 l 492 1068 l 617 1068 z "
    },
    "\xd3\xb1": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -165 l 81 -274 b 163 -286 104 -282 132 -286 b 371 -94 295 -286 332 -193 l 683 718 l 558 718 l 357 131 l 354 131 l 144 718 l 11 718 l 296 4 l 247 -117 b 150 -182 228 -154 203 -182 b 81 -165 124 -182 101 -172 z m 278 967 l 154 967 l 154 822 l 278 822 z m 539 967 l 414 967 l 414 822 l 539 822 z "
    },
    "\xd3\xb2": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 85 110 l 85 1 b 207 -15 117 -8 165 -15 b 343 35 255 -15 300 1 b 469 213 386 68 428 127 l 850 992 l 710 992 l 431 397 l 144 992 l 1 992 l 360 269 l 343 235 b 182 96 313 171 275 96 b 85 110 150 96 108 102 z m 728 1261 l 582 1261 l 469 1063 l 561 1063 z m 511 1261 l 365 1261 l 254 1063 l 344 1063 z "
    },
    "\xd3\xb3": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 81 -165 l 81 -274 b 163 -286 104 -282 132 -286 b 371 -94 295 -286 332 -193 l 683 718 l 558 718 l 357 131 l 354 131 l 144 718 l 11 718 l 296 4 l 247 -117 b 150 -182 228 -154 203 -182 b 81 -165 124 -182 101 -172 z m 649 1015 l 503 1015 l 390 817 l 482 817 z m 432 1015 l 286 1015 l 175 817 l 265 817 z "
    },
    "\xd3\xb4": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 674 425 l 674 0 l 806 0 l 806 992 l 674 992 l 674 536 b 399 497 605 516 500 497 b 196 697 250 497 196 555 l 196 992 l 65 992 l 65 686 b 399 385 65 476 179 385 b 674 425 496 385 594 407 z m 388 1213 l 264 1213 l 264 1068 l 388 1068 z m 649 1213 l 524 1213 l 524 1068 l 649 1068 z "
    },
    "\xd3\xb5": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 182 492 l 182 718 l 64 718 l 64 472 b 297 267 64 331 156 267 b 364 271 319 267 341 268 b 519 301 415 277 480 284 l 519 0 l 638 0 l 638 718 l 519 718 l 519 399 l 486 390 b 319 367 439 378 378 367 b 182 492 228 367 182 399 z m 294 967 l 171 967 l 171 822 l 294 822 z m 556 967 l 431 967 l 431 822 l 556 822 z "
    },
    "\xd3\xb8": {
        ha: 1218,
        x_min: 0,
        x_max: 0,
        o: "m 840 293 b 536 588 840 486 730 588 l 240 588 l 240 992 l 108 992 l 108 0 l 536 0 b 840 293 729 0 840 102 z m 492 111 l 240 111 l 240 478 l 492 478 b 708 293 636 478 708 416 b 492 111 708 172 636 111 z m 971 992 l 971 0 l 1103 0 l 1103 992 z m 540 1213 l 417 1213 l 417 1068 l 540 1068 z m 801 1213 l 676 1213 l 676 1068 l 801 1068 z "
    },
    "\xd3\xb9": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 663 224 b 429 443 663 363 569 443 l 207 443 l 207 718 l 89 718 l 89 0 l 435 0 b 663 224 573 0 663 87 z m 392 104 l 207 104 l 207 342 l 392 342 b 540 224 491 342 540 302 b 392 104 540 144 491 104 z m 776 718 l 776 0 l 894 0 l 894 718 z m 422 967 l 299 967 l 299 822 l 422 822 z m 683 967 l 558 967 l 558 822 l 683 822 z "
    },
    "\xe2\x80\x93": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 0 442 l 694 442 l 694 331 l 0 331 z "
    },
    "\xe2\x80\x94": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 181 442 l 1208 442 l 1208 331 l 181 331 z "
    },
    "\xe2\x80\x98": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 269 992 l 269 922 b 189 788 205 922 189 853 l 271 788 l 271 633 l 117 633 l 117 788 b 269 992 117 897 161 992 z "
    },
    "\xe2\x80\x99": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 117 633 l 117 703 b 197 838 181 703 197 772 l 115 838 l 115 992 l 269 992 l 269 838 b 117 633 269 728 226 633 z "
    },
    "\xe2\x80\x9a": {
        ha: 386,
        x_min: 0,
        x_max: 0,
        o: "m 117 -203 l 117 -133 b 197 0 181 -133 197 -65 l 115 0 l 115 154 l 269 154 l 269 0 b 117 -203 269 -109 225 -203 z "
    },
    "\xe2\x80\x9c": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 244 992 l 244 922 b 164 788 180 922 164 853 l 246 788 l 246 633 l 92 633 l 92 788 b 244 992 92 897 136 992 z m 499 992 l 499 922 b 418 788 434 922 418 853 l 500 788 l 500 633 l 346 633 l 346 788 b 499 992 346 897 390 992 z "
    },
    "\xe2\x80\x9d": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 93 633 l 93 703 b 174 838 158 703 174 772 l 92 838 l 92 992 l 246 992 l 246 838 b 93 633 246 728 202 633 z m 347 633 l 347 703 b 428 838 412 703 428 772 l 346 838 l 346 992 l 500 992 l 500 838 b 347 633 500 728 456 633 z "
    },
    "\xe2\x80\x9e": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 347 -203 l 347 -133 b 428 0 411 -133 428 -65 l 346 0 l 346 154 l 500 154 l 500 0 b 347 -203 500 -109 456 -203 z m 93 -203 l 93 -133 b 174 0 157 -133 174 -65 l 92 0 l 92 154 l 246 154 l 246 0 b 93 -203 246 -109 202 -203 z "
    },
    "\xe2\x80\xa0": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 328 614 l 58 614 l 58 718 l 328 718 l 328 992 l 439 992 l 439 718 l 714 718 l 714 614 l 439 614 l 439 -214 l 328 -214 z "
    },
    "\xe2\x80\xa1": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 328 58 l 58 58 l 58 163 l 328 163 l 328 614 l 58 614 l 58 718 l 328 718 l 328 992 l 439 992 l 439 718 l 714 718 l 714 614 l 439 614 l 439 163 l 714 163 l 714 58 l 439 58 l 439 -214 l 328 -214 z "
    },
    "\xe2\x80\xa2": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 100 496 b 119 592 100 530 106 562 b 347 743 155 674 232 743 b 444 724 381 743 414 737 b 596 496 526 688 596 611 b 576 399 596 462 589 429 b 347 247 541 317 462 247 b 251 267 313 247 281 254 b 100 496 169 302 100 381 z "
    },
    "\xe2\x80\xa6": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 1079 154 l 1233 154 l 1233 0 l 1079 0 z m 617 154 l 771 154 l 771 0 l 617 0 z m 154 154 l 308 154 l 308 0 l 154 0 z "
    },
    "\xe2\x80\xb0": {
        ha: 1594,
        x_min: 0,
        x_max: 0,
        o: "m 1290 60 b 1390 218 1369 60 1390 140 b 1296 381 1390 294 1372 381 b 1190 219 1215 381 1190 300 b 1290 60 1190 137 1207 60 z m 1292 457 b 1494 222 1434 457 1494 363 b 1289 -15 1494 84 1429 -15 b 1086 215 1148 -15 1086 75 b 1292 457 1086 359 1147 457 z m 811 60 b 911 218 890 60 911 140 b 817 381 911 294 892 381 b 711 219 736 381 711 300 b 811 60 711 137 728 60 z m 813 457 b 1015 222 954 457 1015 363 b 810 -15 1015 84 950 -15 b 607 215 669 -15 607 75 b 813 457 607 359 668 457 z m 872 1003 l 990 1003 l 244 -29 l 125 -29 z m 304 588 b 404 746 383 588 404 667 b 310 908 404 822 386 908 b 204 747 229 908 204 827 b 304 588 204 665 221 588 z m 306 985 b 508 750 447 985 508 891 b 303 511 508 612 442 511 b 100 743 162 511 100 603 b 306 985 100 887 161 985 z "
    },
    "\xe2\x80\xb9": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 69 325 l 69 447 l 281 614 l 281 494 l 142 386 l 281 278 l 281 158 z "
    },
    "\xe2\x80\xba": {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 290 447 l 290 325 l 79 158 l 79 278 l 218 386 l 79 494 l 79 614 z "
    },
    "\xe2\x81\x84": {
        ha: 232,
        x_min: 0,
        x_max: 0,
        o: "m 374 1007 l 463 1007 l -140 -37 l -229 -37 z "
    },
    "\xe2\x82\xac": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 263 625 l 656 625 l 618 540 l 253 540 b 251 518 252 533 251 525 l 251 482 b 253 468 251 477 252 473 l 599 468 l 563 383 l 260 383 b 524 85 290 184 378 85 b 738 185 630 85 670 122 l 738 39 b 524 -21 675 -1 604 -21 b 125 383 297 -21 164 114 l 18 383 l 56 468 l 119 468 b 118 482 119 473 118 477 l 118 519 b 119 540 118 527 119 534 l 18 540 l 54 625 l 129 625 b 524 1007 170 834 293 1007 b 775 919 608 1007 692 978 l 711 804 b 513 900 646 868 580 900 b 263 625 365 900 291 764 z "
    },
    "\xe2\x84\x96": {
        ha: 1438,
        x_min: 0,
        x_max: 0,
        o: "m 114 968 l 114 0 l 232 0 l 232 772 l 701 0 l 839 0 l 839 968 l 721 968 l 721 188 l 247 968 z m 963 296 l 963 208 l 1351 208 l 1351 296 z m 1354 575 b 1146 779 1354 705 1277 779 b 946 576 1024 779 946 698 b 1153 378 946 452 1026 378 b 1354 575 1279 378 1354 450 z m 1047 578 b 1153 703 1047 655 1081 703 b 1253 579 1221 703 1253 654 b 1151 454 1253 500 1225 454 b 1047 578 1079 454 1047 501 z "
    },
    "\xe2\x84\xa2": {
        ha: 1375,
        x_min: 0,
        x_max: 0,
        o: "m 1288 419 l 1193 419 l 1193 897 l 1190 897 l 1003 419 l 943 419 l 756 897 l 753 897 l 753 419 l 658 419 l 658 992 l 804 992 l 975 557 l 1143 992 l 1288 992 z m 542 915 l 363 915 l 363 419 l 268 419 l 268 915 l 89 915 l 89 992 l 542 992 z "
    },
    "\xe2\x88\x82": {
        ha: 742,
        x_min: 0,
        x_max: 0,
        o: "m 92 915 l 158 838 b 318 903 201 870 248 903 b 430 868 363 903 400 891 b 550 553 509 807 554 690 l 549 501 b 333 597 499 553 428 597 b 215 574 290 597 250 590 b 49 297 118 532 49 435 b 69 176 49 255 56 214 b 340 -17 109 69 196 -17 b 510 33 411 -17 467 0 b 672 501 628 124 672 297 b 597 838 672 630 647 751 b 314 1001 544 930 457 1001 b 92 915 214 1001 153 963 z m 349 501 b 544 393 440 501 501 447 b 343 78 544 246 493 78 b 266 97 313 78 288 84 b 168 292 206 131 168 198 b 349 501 168 410 230 501 z "
    },
    "\xe2\x88\x86": {
        ha: 900,
        x_min: 0,
        x_max: 0,
        o: "m 376 992 l -10 0 l 910 0 l 522 992 z m 721 111 l 167 111 l 446 872 l 449 872 z "
    },
    "\xe2\x88\x8f": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 108 1092 l 108 -297 l 240 -297 l 240 981 l 801 981 l 801 -297 l 933 -297 l 933 1092 z "
    },
    "\xe2\x88\x91": {
        ha: 800,
        x_min: 0,
        x_max: 0,
        o: "m 19 1092 l 19 992 l 439 404 l 0 -197 l 0 -297 l 800 -297 l 800 -186 l 157 -186 l 589 406 l 183 981 l 783 981 l 783 1092 z "
    },
    "\xe2\x88\x92": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 399 l 767 399 l 767 304 l 67 304 z "
    },
    "\xe2\x88\x9a": {
        ha: 744,
        x_min: 0,
        x_max: 0,
        o: "m 113 158 l 332 -297 l 451 -297 l 744 1092 l 619 1092 l 372 -115 l 172 304 l 0 224 l 44 126 z "
    },
    "\xe2\x88\x9e": {
        ha: 1033,
        x_min: 0,
        x_max: 0,
        o: "m 251 128 b 331 141 280 128 307 132 b 518 281 410 169 464 227 b 574 224 536 261 554 242 b 783 128 626 178 689 128 b 873 146 817 128 847 134 b 997 357 947 180 997 250 b 782 583 997 489 914 583 b 703 569 754 583 728 578 b 518 422 625 538 570 480 b 247 583 453 490 377 583 b 158 565 214 583 184 577 b 36 354 86 532 36 458 b 251 128 36 221 117 128 z m 138 354 b 247 476 138 419 181 476 b 303 464 266 476 284 472 b 450 353 361 438 407 393 b 409 313 438 340 424 327 b 251 235 371 280 320 235 b 138 354 181 235 138 284 z m 896 353 b 786 235 896 285 855 235 b 728 246 766 235 746 238 b 583 351 669 269 626 312 b 782 476 630 398 692 476 b 896 353 855 476 896 424 z "
    },
    "\xe2\x88\xab": {
        ha: 476,
        x_min: 0,
        x_max: 0,
        o: "m 294 -10 l 294 911 b 329 1015 294 944 299 1015 b 344 1004 335 1015 340 1012 b 414 946 358 980 375 946 b 476 1006 447 946 476 972 b 353 1092 476 1066 413 1092 b 167 793 193 1092 167 951 l 167 728 b 168 488 167 650 168 587 l 168 -103 b 136 -229 168 -142 177 -229 b 122 -218 131 -229 126 -225 b 56 -157 110 -193 94 -157 b 0 -215 23 -157 0 -183 b 111 -296 0 -269 58 -296 b 294 -10 260 -296 294 -157 z "
    },
    "\xe2\x89\x88": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 50 118 l 122 118 b 226 226 129 170 167 226 b 406 176 287 226 352 195 b 604 126 463 155 534 126 b 783 328 723 126 772 220 l 714 328 b 610 225 703 274 674 225 b 424 274 543 225 479 254 b 229 324 367 296 300 324 b 50 118 110 324 65 222 z m 50 368 l 122 368 b 226 476 129 420 167 476 b 406 426 287 476 352 445 b 604 376 463 405 534 376 b 783 578 723 376 772 470 l 714 578 b 610 475 703 524 674 475 b 424 524 543 475 479 504 b 229 574 367 546 300 574 b 50 368 110 574 65 472 z "
    },
    "\xe2\x89\xa0": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 164 l 258 164 l 178 11 l 258 -31 l 360 164 l 767 164 l 767 258 l 410 258 l 507 444 l 767 444 l 767 539 l 556 539 l 639 696 l 560 736 l 456 539 l 67 539 l 67 444 l 406 444 l 308 258 l 67 258 z "
    },
    "\xe2\x89\xa4": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 63 l 67 -32 l 767 -32 l 767 63 z m 67 375 l 767 115 l 767 219 l 203 422 l 767 629 l 767 732 l 67 471 z "
    },
    "\xe2\x89\xa5": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 67 -32 l 767 -32 l 767 63 l 67 63 z m 67 115 l 767 375 l 767 471 l 67 732 l 67 629 l 631 422 l 67 219 z "
    },
    "\xe2\x97\x8a": {
        ha: 833,
        x_min: 0,
        x_max: 0,
        o: "m 119 485 l 360 -49 l 472 -49 l 714 485 l 472 1018 l 360 1018 z m 593 485 l 415 69 l 240 485 l 415 899 z "
    },
    "\xef\xa3\xbf": {
        ha: 1097,
        x_min: 0,
        x_max: 0,
        o: "m 1007 750 b 882 524 939 691 882 630 b 1040 281 882 413 956 307 b 956 107 1019 218 991 161 b 776 -28 896 17 837 -28 b 678 -6 751 -28 719 -20 b 574 15 638 8 603 15 b 474 -7 543 15 510 8 b 382 -31 435 -23 404 -31 b 174 149 312 -31 242 29 b 71 499 105 267 71 384 b 347 858 71 686 170 858 b 471 838 381 858 423 851 b 567 817 520 824 552 817 b 665 840 585 817 618 825 b 786 864 713 856 753 864 b 1007 750 887 864 958 811 z m 779 1097 b 694 906 779 1019 739 952 b 618 856 668 881 642 864 b 547 844 600 851 577 847 b 775 1126 549 1004 632 1094 b 779 1097 778 1116 779 1108 z "
    },
    "\xef\xac\x81": {
        ha: 719,
        x_min: 0,
        x_max: 0,
        o: "m 507 0 l 507 718 l 625 718 l 625 0 z m 507 847 l 507 992 l 625 992 l 625 847 z m 336 1003 b 413 992 361 1003 393 998 l 413 889 b 346 899 395 895 369 899 b 256 818 286 899 256 879 l 256 718 l 394 718 l 394 614 l 256 614 l 256 0 l 138 0 l 138 614 l 17 614 l 17 718 l 138 718 l 138 825 b 336 1003 138 946 212 1003 z "
    },
    "\xef\xac\x82": {
        ha: 719,
        x_min: 0,
        x_max: 0,
        o: "m 507 992 l 625 992 l 625 0 l 507 0 z m 336 1003 b 413 992 361 1003 393 998 l 413 889 b 346 899 395 895 369 899 b 256 818 286 899 256 879 l 256 718 l 394 718 l 394 614 l 256 614 l 256 0 l 138 0 l 138 614 l 17 614 l 17 718 l 138 718 l 138 825 b 336 1003 138 946 212 1003 z "
    }
}, x = "Helvetica Neue", a = 1322, _ = -296, z = -100, i = 50, n = {
    yMin: -214,
    xMin: -348,
    yMax: 952,
    xMax: 1086
}, o = 1e3, h = {
    format: 0,
    copyright: "Copyright (c) 1981, 1982, 1983, 1989 and 1993, Linotype Library GmbH or its affiliated Linotype-Hell companies. All rights reserved.\n\nThe digitally encoded machine readable software for producing the Typefaces licensed to you is now the property of Heidelberger Druckmaschinen AG and its licensors, and may not be reproduced, used, displayed, modified, disclosed or transferred without the express written approval of Heidelberger Druckmaschinen AG.\n\nCopyright (c) 1988, 1990, 1993 Adobe Systems Incorporated. All Rights Reserved.",
    fontFamily: "Helvetica Neue",
    fontSubfamily: "Regular",
    uniqueID: "Helvetica Neue; 6.1d8e1; 2010-04-06",
    fullName: "Helvetica Neue",
    version: "6.1d8e1",
    postScriptName: "HelveticaNeue",
    trademark: '"Helvetica Neue" is a trademark of Heidelberger Druckmaschinen AG, which may be registered in certain jurisdictions, exclusivly licensed through Linotype Library GmbH, a wholly owned subsidiary of Heidelberger Druckmaschinen AG.',
    designer: "Linotype Design Studio",
    description: "Helvetica (Latin for Swiss) has the objective and functional style which was associated with Swiss typography in the 1950s and 1960s. It is perfect for international correspondence: no ornament, no emotion, just clear presentation of information. Helvetica is still one of the best selling sans-serif fonts.",
    manufacturerURL: "http://www.Linotype.com/",
    designerURL: "http://www.linotype.com/fontdesigners"
}, e = "normal", t = "normal", r = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: z,
    underlineThickness: i,
    boundingBox: n,
    resolution: o,
    original_font_information: h,
    cssFontWeight: e,
    cssFontStyle: t
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jqE4j"], null, "parcelRequire79a8")

//# sourceMappingURL=HelveticaNeue-PHK3JE5I.dabcafda.js.map
