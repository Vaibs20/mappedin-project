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
})({"lLnFO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1fd20f80f3202f42";
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

},{}],"aDRPb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>i);
parcelHelpers.export(exports, "cssFontStyle", ()=>r);
parcelHelpers.export(exports, "cssFontWeight", ()=>e);
parcelHelpers.export(exports, "default", ()=>t);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>z);
parcelHelpers.export(exports, "resolution", ()=>h);
parcelHelpers.export(exports, "underlinePosition", ()=>n);
parcelHelpers.export(exports, "underlineThickness", ()=>o);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 853,
        x_min: 64,
        x_max: 789,
        o: "m 426 -17 q 262 26 331 -17 q 149 137 193 68 q 85 291 106 206 q 64 463 64 376 q 85 634 64 549 q 149 788 106 719 q 262 898 193 856 q 426 940 331 940 q 591 898 522 940 q 703 788 660 856 q 768 634 747 719 q 789 463 789 549 q 768 291 789 376 q 703 137 747 206 q 591 26 660 68 q 426 -17 522 -17 m 426 107 q 530 137 488 107 q 598 217 572 167 q 635 331 624 267 q 647 463 647 394 q 635 594 647 531 q 598 708 624 658 q 530 787 572 757 q 426 817 488 817 q 323 787 365 817 q 254 708 281 757 q 217 594 228 658 q 206 463 206 531 q 217 331 206 394 q 254 217 228 267 q 323 137 281 167 q 426 107 365 107 z "
    },
    1: {
        ha: 499,
        x_min: 25,
        x_max: 396,
        o: "m 257 0 l 257 744 l 107 588 l 25 672 l 274 926 l 396 926 l 396 0 l 257 0 z "
    },
    2: {
        ha: 821,
        x_min: 65,
        x_max: 725,
        o: "m 72 0 l 72 110 q 298 288 203 210 q 456 431 393 367 q 549 551 518 496 q 579 661 579 607 q 564 731 579 701 q 523 780 549 761 q 465 808 497 799 q 399 817 432 817 q 253 785 315 817 q 147 703 190 754 l 65 793 q 212 903 124 865 q 397 940 300 940 q 518 923 460 940 q 622 870 576 906 q 694 783 667 835 q 721 661 721 731 q 690 528 721 593 q 602 397 658 463 q 467 264 546 332 q 293 122 389 196 l 725 122 l 725 0 l 72 0 z "
    },
    3: {
        ha: 785,
        x_min: 36,
        x_max: 715,
        o: "m 376 -17 q 168 28 256 -17 q 36 135 81 72 l 114 225 q 226 140 158 172 q 372 107 293 107 q 522 149 468 107 q 576 265 576 192 q 518 377 576 343 q 358 411 460 411 q 300 411 331 411 q 258 410 269 411 l 258 536 q 300 535 269 535 q 358 535 331 535 q 438 543 400 535 q 503 568 475 551 q 547 610 531 585 q 563 672 563 636 q 547 734 563 707 q 505 780 532 761 q 442 808 478 799 q 364 817 406 817 q 232 790 290 817 q 122 710 174 763 l 49 796 q 183 899 101 858 q 376 940 264 940 q 507 924 447 940 q 610 874 567 907 q 677 796 653 842 q 701 692 701 750 q 683 606 701 643 q 635 543 664 569 q 570 500 606 517 q 500 478 535 483 q 571 460 533 475 q 640 416 608 444 q 694 347 672 388 q 715 251 715 306 q 692 144 715 193 q 624 59 668 94 q 518 3 581 24 q 376 -17 456 -17 z "
    },
    4: {
        ha: 790,
        x_min: 42,
        x_max: 749,
        o: "m 482 0 l 482 222 l 42 222 l 42 336 l 431 926 l 621 926 l 621 344 l 749 344 l 749 222 l 621 222 l 621 0 l 482 0 m 482 800 l 179 344 l 482 344 l 482 800 z "
    },
    5: {
        ha: 826,
        x_min: 85,
        x_max: 761,
        o: "m 421 -17 q 220 22 301 -17 q 85 129 139 61 l 167 224 q 275 137 213 167 q 419 107 338 107 q 502 121 465 107 q 565 159 539 135 q 606 217 592 183 q 621 288 621 250 q 567 420 621 371 q 422 469 513 469 q 310 450 361 469 q 214 386 260 431 l 114 418 l 114 926 l 700 926 l 700 804 l 253 804 l 253 508 q 342 566 286 542 q 465 590 397 590 q 577 571 524 590 q 672 513 631 551 q 737 419 713 475 q 761 293 761 364 q 735 165 761 222 q 665 67 710 107 q 557 5 619 26 q 421 -17 494 -17 z "
    },
    6: {
        ha: 828,
        x_min: 64,
        x_max: 767,
        o: "m 433 -17 q 263 22 333 -17 q 149 127 193 61 q 84 279 104 193 q 64 461 64 365 q 88 645 64 558 q 161 798 113 732 q 283 902 210 864 q 457 940 357 940 q 609 911 544 940 q 718 833 674 882 l 650 728 q 570 792 614 768 q 457 817 526 817 q 347 789 394 817 q 267 714 299 761 q 220 606 236 667 q 204 482 204 546 q 204 466 204 474 q 206 451 204 458 q 247 499 221 475 q 306 543 272 524 q 378 575 339 563 q 460 588 417 588 q 578 569 522 588 q 676 513 633 550 q 742 419 718 475 q 767 290 767 364 q 743 172 767 228 q 676 74 719 117 q 572 8 633 32 q 433 -17 510 -17 m 426 107 q 514 124 476 107 q 576 166 551 140 q 614 224 601 192 q 626 286 626 256 q 610 367 626 332 q 567 424 594 401 q 503 457 539 446 q 425 468 467 468 q 301 434 360 468 q 207 344 243 400 q 224 262 211 304 q 264 185 238 219 q 330 128 290 150 q 426 107 369 107 z "
    },
    7: {
        ha: 726,
        x_min: 40,
        x_max: 690,
        o: "m 168 0 l 529 804 l 40 804 l 40 926 l 690 926 l 690 831 l 321 0 l 168 0 z "
    },
    8: {
        ha: 817,
        x_min: 65,
        x_max: 751,
        o: "m 410 -17 q 276 0 339 -17 q 167 49 214 17 q 93 128 121 81 q 65 236 65 175 q 83 320 65 282 q 129 389 100 358 q 197 442 158 419 q 279 478 236 464 q 203 509 239 490 q 140 555 168 528 q 97 618 113 582 q 81 699 81 654 q 109 807 81 761 q 185 883 138 853 q 290 926 232 913 q 410 940 349 940 q 527 926 468 940 q 633 883 586 913 q 708 807 679 853 q 738 699 738 761 q 721 618 738 654 q 677 555 704 582 q 613 509 650 528 q 538 478 576 490 q 619 442 581 464 q 688 389 658 419 q 734 320 717 358 q 751 236 751 282 q 724 128 751 175 q 650 49 697 82 q 541 0 603 17 q 410 -17 479 -17 m 410 533 q 463 547 431 538 q 524 572 494 556 q 576 615 554 589 q 597 678 597 640 q 583 737 597 711 q 542 780 568 763 q 483 807 517 797 q 410 817 449 817 q 274 781 328 817 q 221 678 221 744 q 242 615 221 640 q 294 572 264 589 q 356 547 324 556 q 410 533 389 538 m 410 107 q 487 117 450 107 q 551 147 524 128 q 596 192 579 165 q 613 253 613 219 q 589 323 613 293 q 532 372 565 353 q 465 402 499 392 q 410 415 431 413 q 353 402 388 413 q 285 372 318 392 q 229 323 253 353 q 206 253 206 293 q 222 192 206 219 q 266 147 238 165 q 331 117 294 128 q 410 107 368 107 z "
    },
    9: {
        ha: 828,
        x_min: 60,
        x_max: 764,
        o: "m 371 -15 q 219 14 283 -15 q 110 92 154 43 l 176 196 q 257 132 213 156 q 371 108 301 108 q 485 138 438 108 q 564 214 533 167 q 609 321 594 261 q 624 442 624 381 l 624 474 q 581 426 607 450 q 522 381 556 401 q 449 349 489 361 q 368 336 410 336 q 249 355 306 336 q 151 411 193 374 q 85 505 110 449 q 60 635 60 561 q 83 753 60 697 q 150 850 107 808 q 255 917 193 892 q 393 942 317 942 q 563 903 493 942 q 678 798 633 864 q 744 645 724 732 q 764 463 764 558 q 740 278 764 365 q 666 126 715 192 q 543 23 617 61 q 371 -15 469 -15 m 403 457 q 525 490 467 457 q 619 581 583 524 q 603 663 617 621 q 563 740 589 706 q 497 796 538 774 q 400 818 457 818 q 313 801 350 818 q 251 759 276 785 q 214 701 226 733 q 201 639 201 669 q 217 558 201 593 q 261 501 233 524 q 325 468 289 479 q 403 457 361 457 z "
    },
    "\0": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\r": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    " ": {
        ha: 358,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    " ": {
        ha: 358,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xe2\x80\x89": {
        ha: 71,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    A: {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    B: {
        ha: 886,
        x_min: 103,
        x_max: 817,
        o: "m 103 0 l 103 926 l 538 926 q 649 908 600 926 q 731 859 697 890 q 781 784 764 828 q 799 690 799 740 q 785 610 799 646 q 750 547 772 574 q 699 502 728 519 q 638 478 669 485 q 708 451 675 472 q 765 400 740 431 q 803 331 789 369 q 817 250 817 292 q 799 150 817 196 q 747 71 781 104 q 663 19 713 38 q 549 0 613 0 l 103 0 m 511 533 q 619 572 582 533 q 656 668 656 610 q 619 765 656 726 q 511 804 582 804 l 242 804 l 242 533 l 511 533 m 518 122 q 633 161 592 122 q 674 268 674 200 q 664 323 674 297 q 635 368 654 349 q 586 399 615 388 q 518 411 557 411 l 242 411 l 242 122 l 518 122 z "
    },
    C: {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    D: {
        ha: 979,
        x_min: 103,
        x_max: 914,
        o: "m 103 0 l 103 926 l 433 926 q 631 892 542 926 q 782 794 719 857 q 879 647 844 732 q 914 463 914 563 q 879 277 914 363 q 782 131 844 192 q 631 35 719 69 q 433 0 542 0 l 103 0 m 433 122 q 576 149 514 122 q 682 222 639 176 q 748 330 725 268 q 771 463 771 392 q 749 596 771 533 q 684 705 726 658 q 578 778 642 751 q 433 804 515 804 l 242 804 l 242 122 l 433 122 z "
    },
    E: {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    F: {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 0 l 103 0 z "
    },
    G: {
        ha: 993,
        x_min: 64,
        x_max: 918,
        o: "m 544 -18 q 357 17 444 -18 q 204 114 269 51 q 101 265 139 176 q 64 463 64 354 q 101 659 64 571 q 204 810 139 747 q 357 908 269 874 q 544 942 444 942 q 664 928 610 942 q 763 889 718 914 q 845 831 808 864 q 911 758 882 797 l 799 693 q 692 782 758 746 q 544 818 626 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 206 258 254 q 410 132 349 158 q 544 106 472 106 q 618 114 583 106 q 683 135 653 122 q 738 165 714 149 q 779 197 763 182 l 779 364 l 482 364 l 482 486 l 918 486 l 918 146 q 757 26 851 71 q 544 -18 663 -18 z "
    },
    H: {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 0 l 754 0 z "
    },
    I: {
        ha: 346,
        x_min: 103,
        x_max: 242,
        o: "m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 z "
    },
    J: {
        ha: 664,
        x_min: 14,
        x_max: 560,
        o: "m 257 -17 q 123 7 183 -17 q 14 85 63 31 l 81 190 q 149 132 110 157 q 247 107 189 107 q 374 156 328 107 q 421 288 421 206 l 421 926 l 560 926 l 560 286 q 537 151 560 208 q 473 57 514 94 q 376 1 432 19 q 257 -17 321 -17 z "
    },
    K: {
        ha: 849,
        x_min: 103,
        x_max: 832,
        o: "m 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 832 0 l 660 0 z "
    },
    L: {
        ha: 713,
        x_min: 103,
        x_max: 663,
        o: "m 103 0 l 103 926 l 242 926 l 242 122 l 663 122 l 663 0 l 103 0 z "
    },
    M: {
        ha: 1142,
        x_min: 103,
        x_max: 1039,
        o: "m 900 0 l 900 725 l 600 0 l 542 0 l 242 725 l 242 0 l 103 0 l 103 926 l 301 926 l 571 272 l 840 926 l 1039 926 l 1039 0 l 900 0 z "
    },
    N: {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    O: {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    P: {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 103 0 l 103 926 l 493 926 q 619 903 564 926 q 713 842 675 881 q 769 751 750 803 q 789 642 789 700 q 769 532 789 583 q 712 442 750 481 q 619 380 674 403 q 493 357 564 357 l 242 357 l 242 0 l 103 0 m 475 479 q 598 524 550 479 q 646 642 646 568 q 598 760 646 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    Q: {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 965 275 997 361 q 872 125 932 189 l 954 35 l 858 -47 l 774 46 q 660 -1 721 15 q 531 -17 600 -17 m 531 107 q 685 144 618 107 l 561 281 l 658 363 l 781 226 q 835 333 817 274 q 854 463 854 393 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    R: {
        ha: 858,
        x_min: 103,
        x_max: 797,
        o: "m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    S: {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    T: {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 z "
    },
    U: {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 z "
    },
    V: {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 375 0 l 7 926 l 165 926 l 461 151 l 758 926 l 917 926 l 549 0 l 375 0 z "
    },
    W: {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 813 0 l 619 715 l 428 0 l 279 0 l 14 926 l 169 926 l 361 183 l 564 926 l 676 926 l 878 183 l 1069 926 l 1225 926 l 961 0 l 813 0 z "
    },
    X: {
        ha: 911,
        x_min: 10,
        x_max: 900,
        o: "m 733 0 l 456 378 l 178 0 l 10 0 l 365 475 l 31 926 l 199 926 l 456 571 l 711 926 l 879 926 l 547 476 l 900 0 l 733 0 z "
    },
    Y: {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 z "
    },
    Z: {
        ha: 815,
        x_min: 64,
        x_max: 750,
        o: "m 64 0 l 64 114 l 561 804 l 64 804 l 64 926 l 740 926 l 740 813 l 243 122 l 750 122 l 750 0 l 64 0 z "
    },
    a: {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 z "
    },
    b: {
        ha: 803,
        x_min: 100,
        x_max: 743,
        o: "m 225 192 q 302 123 250 151 q 411 94 354 94 q 496 113 458 94 q 560 163 533 131 q 600 238 586 194 q 614 335 614 282 q 600 432 614 388 q 560 508 586 476 q 496 558 533 540 q 411 576 458 576 q 302 547 354 576 q 225 476 250 517 l 225 192 m 100 0 l 100 926 l 225 926 l 225 574 q 322 658 265 628 q 444 688 378 688 q 565 663 510 688 q 659 592 619 638 q 721 481 699 546 q 743 335 743 415 q 721 188 743 253 q 659 77 699 122 q 565 8 619 32 q 444 -17 510 -17 q 319 15 376 -17 q 225 96 263 46 l 225 0 l 100 0 z "
    },
    c: {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    d: {
        ha: 803,
        x_min: 58,
        x_max: 703,
        o: "m 578 0 l 578 96 q 483 15 540 46 q 358 -17 425 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 926 l 703 926 l 703 0 l 578 0 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 478 q 501 547 551 518 q 392 576 450 576 q 307 558 344 576 q 243 508 269 540 q 203 432 217 476 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 z "
    },
    e: {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    f: {
        ha: 411,
        x_min: 19,
        x_max: 444,
        o: "m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 z "
    },
    g: {
        ha: 801,
        x_min: 58,
        x_max: 703,
        o: "m 369 -272 q 219 -251 285 -272 q 94 -172 154 -229 l 154 -81 q 248 -149 196 -129 q 369 -169 300 -169 q 446 -160 408 -169 q 513 -127 483 -150 q 560 -67 542 -104 q 578 22 578 -31 l 578 110 q 482 27 539 60 q 357 -6 425 -6 q 237 18 292 -6 q 142 86 182 42 q 81 195 103 131 q 58 342 58 260 q 81 486 58 422 q 142 595 103 550 q 237 664 182 640 q 357 688 292 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 26 q 674 -117 703 -60 q 598 -210 644 -175 q 492 -258 551 -244 q 369 -272 432 -272 m 392 106 q 500 135 449 106 q 578 206 551 165 l 578 478 q 500 547 551 518 q 392 576 449 576 q 307 559 344 576 q 243 510 269 542 q 203 436 217 479 q 189 342 189 393 q 203 246 189 289 q 243 172 217 203 q 307 123 269 140 q 392 106 344 106 z "
    },
    h: {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 553 0 l 553 432 q 514 546 553 515 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 926 l 225 926 l 225 576 q 267 617 242 597 q 322 652 292 636 q 388 678 353 668 q 463 688 424 688 q 678 474 678 688 l 678 0 l 553 0 z "
    },
    i: {
        ha: 324,
        x_min: 81,
        x_max: 242,
        o: "m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    j: {
        ha: 324,
        x_min: -61,
        x_max: 242,
        o: "m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 15 -272 q -61 -264 -28 -272 l -46 -160 q -24 -164 -36 -162 q 0 -165 -11 -165 q 72 -140 43 -165 q 100 -53 100 -114 l 100 671 l 225 671 l 225 -53 q 172 -215 225 -157 q 15 -272 118 -272 z "
    },
    k: {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 926 l 225 926 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    l: {
        ha: 324,
        x_min: 100,
        x_max: 225,
        o: "m 100 0 l 100 926 l 225 926 l 225 0 l 100 0 z "
    },
    m: {
        ha: 1139,
        x_min: 100,
        x_max: 1040,
        o: "m 915 0 l 915 447 q 888 541 915 506 q 799 576 861 576 q 749 568 774 576 q 701 547 724 560 q 662 516 679 533 q 632 481 644 499 l 632 0 l 507 0 l 507 447 q 480 541 507 506 q 389 576 453 576 q 340 568 364 576 q 295 546 317 560 q 256 515 274 532 q 225 479 238 497 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 256 611 235 592 q 306 647 278 631 q 369 676 335 664 q 442 688 404 688 q 563 652 518 688 q 624 563 608 617 q 661 608 638 586 q 715 649 685 631 q 778 677 744 667 q 850 688 813 688 q 992 637 943 688 q 1040 485 1040 586 l 1040 0 l 915 0 z "
    },
    n: {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 z "
    },
    o: {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    p: {
        ha: 799,
        x_min: 100,
        x_max: 743,
        o: "m 444 -17 q 322 13 378 -17 q 225 97 265 42 l 225 -256 l 100 -256 l 100 671 l 225 671 l 225 575 q 319 656 261 625 q 444 688 376 688 q 565 663 510 688 q 659 594 619 639 q 721 483 699 549 q 743 336 743 418 q 721 189 743 254 q 659 78 699 124 q 565 8 619 32 q 444 -17 510 -17 m 411 94 q 495 113 458 94 q 558 163 532 131 q 599 239 585 194 q 613 336 613 283 q 599 432 613 388 q 558 508 585 476 q 495 558 532 540 q 411 576 458 576 q 302 547 354 576 q 225 478 250 518 l 225 193 q 301 124 250 153 q 411 94 353 94 z "
    },
    q: {
        ha: 799,
        x_min: 56,
        x_max: 699,
        o: "m 388 94 q 497 124 444 94 q 574 193 549 153 l 574 478 q 541 516 561 499 q 496 547 521 533 q 443 569 471 561 q 388 576 415 576 q 303 558 340 576 q 240 508 265 540 q 200 432 214 476 q 186 336 186 388 q 200 239 186 283 q 240 163 214 194 q 303 113 265 131 q 388 94 340 94 m 353 -17 q 233 8 288 -17 q 138 78 178 32 q 77 189 99 124 q 56 336 56 254 q 77 483 56 418 q 138 594 99 549 q 233 663 178 639 q 353 688 288 688 q 480 656 422 688 q 574 575 538 625 l 574 671 l 699 671 l 699 -256 l 574 -256 l 574 97 q 476 13 533 42 q 353 -17 419 -17 z "
    },
    r: {
        ha: 469,
        x_min: 100,
        x_max: 444,
        o: "m 100 0 l 100 671 l 225 671 l 225 568 q 321 652 264 618 q 444 686 378 686 l 444 560 q 401 564 425 564 q 351 556 378 564 q 301 534 325 547 q 256 503 276 521 q 225 467 236 485 l 225 0 l 100 0 z "
    },
    s: {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    t: {
        ha: 425,
        x_min: 14,
        x_max: 415,
        o: "m 285 -17 q 165 26 206 -17 q 125 149 125 69 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 285 -17 333 -17 z "
    },
    u: {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 z "
    },
    v: {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 278 0 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 413 0 l 278 0 z "
    },
    w: {
        ha: 1033,
        x_min: 11,
        x_max: 1022,
        o: "m 682 0 l 517 515 l 351 0 l 222 0 l 11 671 l 142 671 l 294 160 l 463 671 l 571 671 l 739 160 l 892 671 l 1022 671 l 811 0 l 682 0 z "
    },
    x: {
        ha: 682,
        x_min: 11,
        x_max: 671,
        o: "m 529 0 l 342 261 l 153 0 l 11 0 l 263 344 l 26 671 l 168 671 l 342 429 l 514 671 l 656 671 l 418 344 l 671 0 l 529 0 z "
    },
    y: {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 z "
    },
    z: {
        ha: 658,
        x_min: 68,
        x_max: 589,
        o: "m 68 0 l 68 96 l 418 561 l 68 561 l 68 671 l 583 671 l 583 578 l 231 108 l 589 108 l 589 0 l 68 0 z "
    },
    "\xc3\x81": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 472 1004 l 381 1004 l 581 1204 l 704 1204 l 472 1004 z "
    },
    "\xc4\x82": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 704 1099 q 599 1009 663 1042 q 461 976 536 976 q 323 1009 386 976 q 217 1099 260 1042 l 276 1149 q 355 1078 308 1104 q 461 1053 401 1053 q 567 1078 519 1053 q 646 1149 614 1104 l 704 1099 l 704 1099 z "
    },
    "\xc3\x82": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 572 1004 l 461 1144 l 353 1004 l 272 1004 l 403 1204 l 519 1204 l 654 1004 l 572 1004 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xc3\x84": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 681 1074 q 659 1022 681 1043 q 607 1000 638 1000 q 555 1022 576 1000 q 533 1074 533 1043 q 555 1125 533 1104 q 607 1146 576 1146 q 659 1125 638 1146 q 681 1074 681 1104 m 390 1074 q 369 1022 390 1043 q 318 1000 349 1000 q 267 1022 288 1000 q 246 1074 246 1043 q 267 1125 246 1104 q 318 1146 288 1146 q 369 1125 349 1146 q 390 1074 390 1104 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xc3\x80": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 453 1004 l 221 1204 l 344 1204 l 544 1004 l 453 1004 z "
    },
    "\xc4\x80": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 208 1022 l 208 1099 l 713 1099 l 713 1022 l 208 1022 z "
    },
    "\xc4\x84": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 889 -235 q 786 -258 850 -258 q 733 -252 758 -258 q 688 -233 707 -246 q 656 -199 668 -219 q 644 -153 644 -179 q 657 -104 644 -128 q 691 -61 669 -81 q 740 -26 713 -42 q 796 0 767 -11 l 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 889 0 q 794 -56 826 -25 q 761 -124 761 -86 q 776 -160 761 -147 q 814 -172 792 -172 q 836 -170 825 -172 q 858 -161 847 -168 l 889 -235 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xc3\x85": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 463 957 q 408 968 433 957 q 365 999 383 979 q 335 1043 346 1018 q 324 1097 324 1068 q 335 1151 324 1126 q 365 1196 346 1176 q 408 1226 383 1215 q 463 1238 433 1238 q 517 1226 492 1238 q 560 1196 542 1215 q 590 1151 579 1176 q 600 1097 600 1126 q 590 1043 600 1068 q 560 999 579 1018 q 517 968 542 979 q 463 957 492 957 m 463 1019 q 517 1042 494 1019 q 539 1097 539 1065 q 517 1151 539 1129 q 463 1174 494 1174 q 408 1151 431 1174 q 386 1097 386 1129 q 408 1042 386 1065 q 463 1019 431 1019 z "
    },
    "\xc3\x83": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 543 1001 q 478 1024 501 1001 q 438 1069 456 1046 q 410 1104 424 1089 q 375 1119 396 1119 q 331 1094 349 1119 q 313 1010 313 1068 l 242 1010 q 277 1144 242 1093 q 381 1196 313 1196 q 444 1174 421 1196 q 485 1128 467 1151 q 514 1093 500 1108 q 549 1078 528 1078 q 592 1103 575 1078 q 610 1188 610 1129 l 682 1188 q 647 1053 682 1104 q 543 1001 611 1001 z "
    },
    "\xe1\xba\xa0": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 463 -258 q 410 -237 432 -258 q 389 -185 389 -217 q 410 -133 389 -156 q 463 -111 432 -111 q 514 -133 493 -111 q 535 -185 535 -156 q 514 -237 535 -217 q 463 -258 493 -258 z "
    },
    "\xe1\xba\xa2": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 357 1063 q 394 1117 368 1096 q 461 1139 421 1139 q 533 1116 501 1139 q 564 1042 564 1093 q 558 1003 564 1019 q 539 968 551 986 l 478 968 q 501 1003 494 986 q 508 1039 508 1021 q 495 1078 508 1065 q 461 1090 482 1090 q 407 1047 422 1090 l 357 1063 z "
    },
    "\xe1\xba\xa4": {
        ha: 925,
        x_min: 7,
        x_max: 933,
        o: "m 7 0 m 572 947 l 461 1052 l 353 947 l 272 947 l 403 1097 l 519 1097 l 654 947 l 572 947 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 701 1022 l 610 1022 l 810 1172 l 933 1172 l 701 1022 z "
    },
    "\xe1\xba\xac": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 571 1004 l 460 1144 l 351 1004 l 271 1004 l 401 1204 l 518 1204 l 653 1004 l 571 1004 m 463 -258 q 410 -237 432 -258 q 389 -185 389 -217 q 410 -133 389 -156 q 463 -111 432 -111 q 514 -133 493 -111 q 535 -185 535 -156 q 514 -237 535 -217 q 463 -258 493 -258 z "
    },
    "\xe1\xba\xa6": {
        ha: 925,
        x_min: -6,
        x_max: 917,
        o: "m 0 0 m 572 947 l 461 1052 l 353 947 l 272 947 l 403 1097 l 519 1097 l 654 947 l 572 947 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 226 1022 l -6 1172 l 118 1172 l 318 1022 l 226 1022 z "
    },
    "\xe1\xba\xa8": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 572 947 l 461 1052 l 353 947 l 272 947 l 403 1097 l 519 1097 l 654 947 l 572 947 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 558 1105 q 596 1146 569 1130 q 663 1162 622 1162 q 734 1145 703 1162 q 765 1089 765 1127 q 759 1060 765 1072 q 740 1034 753 1047 l 679 1034 q 703 1060 696 1047 q 710 1087 710 1073 q 697 1116 710 1107 q 663 1125 683 1125 q 608 1093 624 1125 l 558 1105 z "
    },
    "\xe1\xba\xae": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 472 1031 l 381 1031 l 581 1161 l 704 1161 l 472 1031 m 704 1049 q 599 977 663 1003 q 461 951 536 951 q 323 977 386 951 q 217 1049 260 1003 l 276 1089 q 355 1033 308 1053 q 461 1012 401 1012 q 567 1033 519 1012 q 646 1089 614 1053 l 704 1049 l 704 1049 z "
    },
    "\xe1\xba\xaa": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 572 942 l 461 1012 l 353 942 l 272 942 l 403 1042 l 519 1042 l 654 942 l 572 942 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 542 1051 q 477 1063 500 1051 q 436 1085 454 1074 q 408 1103 422 1095 q 374 1110 394 1110 q 329 1098 347 1110 q 311 1056 311 1085 l 240 1056 q 276 1123 240 1097 q 379 1149 311 1149 q 442 1138 419 1149 q 483 1115 465 1126 q 513 1097 499 1105 q 547 1090 526 1090 q 591 1102 574 1090 q 608 1144 608 1115 l 681 1144 q 645 1077 681 1103 q 542 1051 610 1051 z "
    },
    "\xe1\xba\xb0": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 454 1031 l 222 1161 l 346 1161 l 546 1031 l 454 1031 m 704 1045 q 599 973 663 999 q 461 947 536 947 q 323 973 386 947 q 217 1045 260 999 l 276 1085 q 355 1029 308 1049 q 461 1008 401 1008 q 567 1029 519 1008 q 646 1085 614 1049 l 704 1045 l 704 1045 z "
    },
    "\xe1\xba\xb2": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 357 1097 q 394 1133 368 1119 q 461 1147 421 1147 q 533 1132 501 1147 q 564 1083 564 1117 q 558 1058 564 1069 q 539 1036 551 1047 l 478 1036 q 501 1059 494 1047 q 508 1082 508 1070 q 495 1107 508 1099 q 461 1115 482 1115 q 407 1087 422 1115 l 357 1097 m 704 1046 q 599 974 663 1001 q 461 948 536 948 q 323 974 386 948 q 217 1046 260 1001 l 276 1086 q 355 1030 308 1051 q 461 1009 401 1009 q 567 1030 519 1009 q 646 1086 614 1051 l 704 1046 l 704 1046 z "
    },
    "\xe1\xba\xb4": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 706 1015 q 601 962 664 981 q 463 942 538 942 q 324 962 388 942 q 218 1015 261 981 l 278 1045 q 356 1003 310 1018 q 463 988 403 988 q 568 1003 521 988 q 647 1045 615 1018 l 706 1015 l 706 1015 m 542 1051 q 477 1063 500 1051 q 436 1085 454 1074 q 408 1103 422 1095 q 374 1110 394 1110 q 329 1098 347 1110 q 311 1056 311 1085 l 240 1056 q 276 1123 240 1097 q 379 1149 311 1149 q 442 1138 419 1149 q 483 1115 465 1126 q 513 1097 499 1105 q 547 1090 526 1090 q 591 1102 574 1090 q 608 1144 608 1115 l 681 1144 q 645 1077 681 1103 q 542 1051 610 1051 z "
    },
    "\xe1\xba\xb6": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 m 463 -258 q 410 -237 432 -258 q 389 -185 389 -217 q 410 -133 389 -156 q 463 -111 432 -111 q 514 -133 493 -111 q 535 -185 535 -156 q 514 -237 535 -217 q 463 -258 493 -258 m 704 1099 q 599 1009 663 1042 q 461 976 536 976 q 323 1009 386 976 q 217 1099 260 1042 l 276 1149 q 355 1078 308 1104 q 461 1053 401 1053 q 567 1078 519 1053 q 646 1149 614 1104 l 704 1099 l 704 1099 z "
    },
    "\xc3\x86": {
        ha: 1324,
        x_min: 4,
        x_max: 1254,
        o: "m 632 0 l 632 192 l 279 192 l 161 0 l 4 0 l 578 926 l 1254 926 l 1254 804 l 771 804 l 771 533 l 1244 533 l 1244 411 l 771 411 l 771 122 l 1254 122 l 1254 0 l 632 0 m 632 785 l 346 315 l 632 315 l 632 785 z "
    },
    "\xc7\xbc": {
        ha: 1324,
        x_min: 4,
        x_max: 1254,
        o: "m 4 0 m 714 1004 l 622 1004 l 822 1204 l 946 1204 l 714 1004 m 632 0 l 632 192 l 279 192 l 161 0 l 4 0 l 578 926 l 1254 926 l 1254 804 l 771 804 l 771 533 l 1244 533 l 1244 411 l 771 411 l 771 122 l 1254 122 l 1254 0 l 632 0 m 632 785 l 346 315 l 632 315 l 632 785 z "
    },
    "\xe1\xb8\x82": {
        ha: 886,
        x_min: 103,
        x_max: 817,
        o: "m 103 0 m 103 0 l 103 926 l 538 926 q 649 908 600 926 q 731 859 697 890 q 781 784 764 828 q 799 690 799 740 q 785 610 799 646 q 750 547 772 574 q 699 502 728 519 q 638 478 669 485 q 708 451 675 472 q 765 400 740 431 q 803 331 789 369 q 817 250 817 292 q 799 150 817 196 q 747 71 781 104 q 663 19 713 38 q 549 0 613 0 l 103 0 m 511 533 q 619 572 582 533 q 656 668 656 610 q 619 765 656 726 q 511 804 582 804 l 242 804 l 242 533 l 511 533 m 518 122 q 633 161 592 122 q 674 268 674 200 q 664 323 674 297 q 635 368 654 349 q 586 399 615 388 q 518 411 557 411 l 242 411 l 242 122 l 518 122 m 443 999 q 391 1019 413 999 q 369 1072 369 1040 q 391 1124 369 1101 q 443 1146 413 1146 q 494 1124 474 1146 q 515 1072 515 1101 q 494 1019 515 1040 q 443 999 474 999 z "
    },
    "\xc4\x86": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 64 0 m 554 1004 l 463 1004 l 663 1204 l 786 1204 l 554 1004 m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    "\xc3\x87": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 536 -262 q 452 -249 490 -262 q 393 -219 414 -236 l 421 -161 q 476 -192 447 -182 q 533 -201 506 -201 q 590 -188 565 -201 q 615 -147 615 -175 q 565 -103 615 -103 q 517 -124 535 -103 l 464 -94 l 493 -14 q 323 33 401 -6 q 187 133 244 71 q 97 278 129 194 q 64 463 64 363 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 847 104 881 139 q 770 44 813 69 q 676 1 728 18 q 561 -17 624 -15 l 540 -69 q 592 -54 563 -54 q 658 -80 632 -54 q 683 -149 683 -106 q 641 -232 683 -201 q 536 -262 599 -262 z "
    },
    "\xc4\x88": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 64 0 m 654 1004 l 543 1144 l 435 1004 l 354 1004 l 485 1204 l 601 1204 l 736 1004 l 654 1004 m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    "\xc4\x8a": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 64 0 m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 m 547 999 q 495 1019 517 999 q 474 1072 474 1040 q 495 1124 474 1101 q 547 1146 517 1146 q 599 1124 578 1146 q 619 1072 619 1101 q 599 1019 619 1040 q 547 999 578 999 z "
    },
    "\xc4\x8c": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 64 0 m 489 1004 l 354 1204 l 435 1204 l 547 1063 l 654 1204 l 736 1204 l 606 1004 l 489 1004 m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    "\xc4\x8e": {
        ha: 979,
        x_min: 103,
        x_max: 914,
        o: "m 103 0 m 436 1004 l 301 1204 l 382 1204 l 494 1063 l 601 1204 l 683 1204 l 553 1004 l 436 1004 m 103 0 l 103 926 l 433 926 q 631 892 542 926 q 782 794 719 857 q 879 647 844 732 q 914 463 914 563 q 879 277 914 363 q 782 131 844 192 q 631 35 719 69 q 433 0 542 0 l 103 0 m 433 122 q 576 149 514 122 q 682 222 639 176 q 748 330 725 268 q 771 463 771 392 q 749 596 771 533 q 684 705 726 658 q 578 778 642 751 q 433 804 515 804 l 242 804 l 242 122 l 433 122 z "
    },
    "\xc4\x90": {
        ha: 1017,
        x_min: 14,
        x_max: 951,
        o: "m 140 0 l 140 406 l 14 406 l 14 507 l 140 507 l 140 926 l 471 926 q 668 892 579 926 q 819 794 757 857 q 917 647 882 732 q 951 463 951 563 q 917 277 951 363 q 819 131 882 192 q 668 35 757 69 q 471 0 579 0 l 140 0 m 471 122 q 614 149 551 122 q 719 222 676 176 q 785 330 763 268 q 808 463 808 392 q 786 596 808 533 q 722 705 764 658 q 616 778 679 751 q 471 804 553 804 l 279 804 l 279 507 l 508 507 l 508 406 l 279 406 l 279 122 l 471 122 z "
    },
    "\xe1\xb8\x8a": {
        ha: 979,
        x_min: 103,
        x_max: 914,
        o: "m 103 0 m 103 0 l 103 926 l 433 926 q 631 892 542 926 q 782 794 719 857 q 879 647 844 732 q 914 463 914 563 q 879 277 914 363 q 782 131 844 192 q 631 35 719 69 q 433 0 542 0 l 103 0 m 433 122 q 576 149 514 122 q 682 222 639 176 q 748 330 725 268 q 771 463 771 392 q 749 596 771 533 q 684 705 726 658 q 578 778 642 751 q 433 804 515 804 l 242 804 l 242 122 l 433 122 m 489 999 q 437 1019 458 999 q 415 1072 415 1040 q 437 1124 415 1101 q 489 1146 458 1146 q 540 1124 519 1146 q 561 1072 561 1101 q 540 1019 561 1040 q 489 999 519 999 z "
    },
    "\xc3\x89": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 424 1004 l 332 1004 l 532 1204 l 656 1204 l 424 1004 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xc4\x94": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 658 1099 q 553 1009 617 1042 q 415 976 490 976 q 277 1009 340 976 q 171 1099 214 1042 l 231 1149 q 309 1078 263 1104 q 415 1053 356 1053 q 521 1078 474 1053 q 600 1149 568 1104 l 658 1099 l 658 1099 z "
    },
    "\xc3\x8a": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 522 1004 l 411 1144 l 303 1004 l 222 1004 l 353 1204 l 469 1204 l 604 1004 l 522 1004 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xc3\x8b": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 631 1074 q 609 1022 631 1043 q 557 1000 588 1000 q 505 1022 526 1000 q 483 1074 483 1043 q 505 1125 483 1104 q 557 1146 526 1146 q 609 1125 588 1146 q 631 1074 631 1104 m 340 1074 q 319 1022 340 1043 q 268 1000 299 1000 q 217 1022 238 1000 q 196 1074 196 1043 q 217 1125 196 1104 q 268 1146 238 1146 q 319 1125 299 1146 q 340 1074 340 1104 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xc4\x96": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 418 999 q 366 1019 388 999 q 344 1072 344 1040 q 366 1124 344 1101 q 418 1146 388 1146 q 469 1124 449 1146 q 490 1072 490 1101 q 469 1019 490 1040 q 418 999 449 999 z "
    },
    "\xc3\x88": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 404 1004 l 172 1204 l 296 1204 l 496 1004 l 404 1004 z "
    },
    "\xc4\x92": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 161 1022 l 161 1099 l 665 1099 l 665 1022 l 161 1022 z "
    },
    "\xc4\x98": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 725 0 q 630 -56 663 -25 q 597 -124 597 -86 q 613 -160 597 -147 q 650 -172 628 -172 q 672 -170 661 -172 q 694 -161 683 -168 l 725 -235 q 622 -258 686 -258 q 569 -252 594 -258 q 524 -233 543 -246 q 492 -199 504 -219 q 481 -153 481 -179 q 493 -104 481 -128 q 527 -61 506 -81 q 576 -26 549 -42 q 632 0 603 -11 l 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 725 0 z "
    },
    "\xc4\x9a": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 360 1004 l 225 1204 l 306 1204 l 418 1063 l 525 1204 l 607 1204 l 476 1004 l 360 1004 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xe1\xba\xb8": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 418 -258 q 366 -237 388 -258 q 344 -185 344 -217 q 366 -133 344 -156 q 418 -111 388 -111 q 469 -133 449 -111 q 490 -185 490 -156 q 469 -237 490 -217 q 418 -258 449 -258 z "
    },
    "\xe1\xba\xba": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 307 1063 q 344 1117 318 1096 q 411 1139 371 1139 q 483 1116 451 1139 q 514 1042 514 1093 q 508 1003 514 1019 q 489 968 501 986 l 428 968 q 451 1003 444 986 q 458 1039 458 1021 q 445 1078 458 1065 q 411 1090 432 1090 q 357 1047 372 1090 l 307 1063 z "
    },
    "\xe1\xba\xbc": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 496 1001 q 431 1024 454 1001 q 390 1069 408 1046 q 363 1104 376 1089 q 328 1119 349 1119 q 283 1094 301 1119 q 265 1010 265 1068 l 194 1010 q 230 1144 194 1093 q 333 1196 265 1196 q 397 1174 374 1196 q 438 1128 419 1151 q 467 1093 453 1108 q 501 1078 481 1078 q 545 1103 528 1078 q 563 1188 563 1129 l 635 1188 q 599 1053 635 1104 q 496 1001 564 1001 z "
    },
    "\xe1\xba\xbe": {
        ha: 796,
        x_min: 103,
        x_max: 890,
        o: "m 103 0 m 529 947 l 418 1052 l 310 947 l 229 947 l 360 1097 l 476 1097 l 611 947 l 529 947 m 658 1022 l 567 1022 l 767 1172 l 890 1172 l 658 1022 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xe1\xbb\x80": {
        ha: 796,
        x_min: -49,
        x_max: 725,
        o: "m 0 0 m 529 947 l 418 1052 l 310 947 l 229 947 l 360 1097 l 476 1097 l 611 947 l 529 947 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 183 1022 l -49 1172 l 75 1172 l 275 1022 l 183 1022 z "
    },
    "\xe1\xbb\x82": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 531 947 l 419 1052 l 311 947 l 231 947 l 361 1097 l 478 1097 l 613 947 l 531 947 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 517 1105 q 554 1146 528 1130 q 621 1162 581 1162 q 692 1145 661 1162 q 724 1089 724 1127 q 717 1060 724 1072 q 699 1034 711 1047 l 638 1034 q 661 1060 654 1047 q 668 1087 668 1073 q 655 1116 668 1107 q 621 1125 642 1125 q 567 1093 582 1125 l 517 1105 z "
    },
    "\xe1\xbb\x84": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 529 942 l 418 1012 l 310 942 l 229 942 l 360 1042 l 476 1042 l 611 942 l 529 942 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 499 1051 q 434 1063 457 1051 q 393 1085 411 1074 q 365 1103 379 1095 q 331 1110 351 1110 q 286 1098 304 1110 q 268 1056 268 1085 l 197 1056 q 233 1123 197 1097 q 336 1149 268 1149 q 399 1138 376 1149 q 440 1115 422 1126 q 469 1097 456 1105 q 504 1090 483 1090 q 548 1102 531 1090 q 565 1144 565 1115 l 638 1144 q 602 1077 638 1103 q 499 1051 567 1051 z "
    },
    "\xe1\xbb\x86": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 522 1004 l 411 1144 l 303 1004 l 222 1004 l 353 1204 l 469 1204 l 604 1004 l 522 1004 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 m 418 -258 q 366 -237 388 -258 q 344 -185 344 -217 q 366 -133 344 -156 q 418 -111 388 -111 q 469 -133 449 -111 q 490 -185 490 -156 q 469 -237 490 -217 q 418 -258 449 -258 z "
    },
    "\xe1\xb8\x9e": {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 414 999 q 362 1019 383 999 q 340 1072 340 1040 q 362 1124 340 1101 q 414 1146 383 1146 q 465 1124 444 1146 q 486 1072 486 1101 q 465 1019 486 1040 q 414 999 444 999 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 0 l 103 0 z "
    },
    "\xc4\x9c": {
        ha: 993,
        x_min: 64,
        x_max: 918,
        o: "m 64 0 m 660 1004 l 549 1144 l 440 1004 l 360 1004 l 490 1204 l 607 1204 l 742 1004 l 660 1004 m 544 -18 q 357 17 444 -18 q 204 114 269 51 q 101 265 139 176 q 64 463 64 354 q 101 659 64 571 q 204 810 139 747 q 357 908 269 874 q 544 942 444 942 q 664 928 610 942 q 763 889 718 914 q 845 831 808 864 q 911 758 882 797 l 799 693 q 692 782 758 746 q 544 818 626 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 206 258 254 q 410 132 349 158 q 544 106 472 106 q 618 114 583 106 q 683 135 653 122 q 738 165 714 149 q 779 197 763 182 l 779 364 l 482 364 l 482 486 l 918 486 l 918 146 q 757 26 851 71 q 544 -18 663 -18 z "
    },
    "\xc4\x9e": {
        ha: 993,
        x_min: 64,
        x_max: 918,
        o: "m 64 0 m 544 -18 q 357 17 444 -18 q 204 114 269 51 q 101 265 139 176 q 64 463 64 354 q 101 659 64 571 q 204 810 139 747 q 357 908 269 874 q 544 942 444 942 q 664 928 610 942 q 763 889 718 914 q 845 831 808 864 q 911 758 882 797 l 799 693 q 692 782 758 746 q 544 818 626 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 206 258 254 q 410 132 349 158 q 544 106 472 106 q 618 114 583 106 q 683 135 653 122 q 738 165 714 149 q 779 197 763 182 l 779 364 l 482 364 l 482 486 l 918 486 l 918 146 q 757 26 851 71 q 544 -18 663 -18 m 792 1099 q 687 1009 750 1042 q 549 976 624 976 q 410 1009 474 976 q 304 1099 347 1042 l 364 1149 q 442 1078 396 1104 q 549 1053 489 1053 q 654 1078 607 1053 q 733 1149 701 1104 l 792 1099 l 792 1099 z "
    },
    "\xc4\xa0": {
        ha: 993,
        x_min: 64,
        x_max: 918,
        o: "m 64 0 m 544 -18 q 357 17 444 -18 q 204 114 269 51 q 101 265 139 176 q 64 463 64 354 q 101 659 64 571 q 204 810 139 747 q 357 908 269 874 q 544 942 444 942 q 664 928 610 942 q 763 889 718 914 q 845 831 808 864 q 911 758 882 797 l 799 693 q 692 782 758 746 q 544 818 626 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 206 258 254 q 410 132 349 158 q 544 106 472 106 q 618 114 583 106 q 683 135 653 122 q 738 165 714 149 q 779 197 763 182 l 779 364 l 482 364 l 482 486 l 918 486 l 918 146 q 757 26 851 71 q 544 -18 663 -18 m 549 999 q 497 1019 518 999 q 475 1072 475 1040 q 497 1124 475 1101 q 549 1146 518 1146 q 600 1124 579 1146 q 621 1072 621 1101 q 600 1019 621 1040 q 549 999 579 999 z "
    },
    "\xc4\xa2": {
        ha: 993,
        x_min: 64,
        x_max: 918,
        o: "m 64 0 m 628 -192 q 598 -301 628 -250 q 524 -383 568 -351 l 474 -344 q 528 -292 504 -325 q 557 -228 553 -258 q 549 -230 554 -229 q 539 -231 543 -231 q 494 -212 511 -231 q 476 -164 476 -193 q 497 -114 476 -135 q 546 -93 517 -93 q 603 -119 578 -93 q 628 -192 628 -144 m 544 -18 q 357 17 444 -18 q 204 114 269 51 q 101 265 139 176 q 64 463 64 354 q 101 659 64 571 q 204 810 139 747 q 357 908 269 874 q 544 942 444 942 q 664 928 610 942 q 763 889 718 914 q 845 831 808 864 q 911 758 882 797 l 799 693 q 692 782 758 746 q 544 818 626 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 206 258 254 q 410 132 349 158 q 544 106 472 106 q 618 114 583 106 q 683 135 653 122 q 738 165 714 149 q 779 197 763 182 l 779 364 l 482 364 l 482 486 l 918 486 l 918 146 q 757 26 851 71 q 544 -18 663 -18 z "
    },
    "\xc4\xa6": {
        ha: 1022,
        x_min: 14,
        x_max: 1010,
        o: "m 768 0 l 768 414 l 256 414 l 256 0 l 117 0 l 117 690 l 14 690 l 14 767 l 117 767 l 117 926 l 256 926 l 256 767 l 768 767 l 768 926 l 907 926 l 907 767 l 1010 767 l 1010 690 l 907 690 l 907 0 l 768 0 m 768 538 l 768 690 l 256 690 l 256 538 l 768 538 z "
    },
    "\xc4\xa4": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 0 m 604 1004 l 493 1144 l 385 1004 l 304 1004 l 435 1204 l 551 1204 l 686 1004 l 604 1004 m 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 0 l 754 0 z "
    },
    "\xe1\xb8\xa2": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 0 m 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 0 l 754 0 m 497 999 q 445 1019 467 999 q 424 1072 424 1040 q 445 1124 424 1101 q 497 1146 467 1146 q 549 1124 528 1146 q 569 1072 569 1101 q 549 1019 569 1040 q 497 999 528 999 z "
    },
    "\xc3\x8d": {
        ha: 346,
        x_min: 93,
        x_max: 417,
        o: "m 93 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 185 1004 l 93 1004 l 293 1204 l 417 1204 l 185 1004 z "
    },
    "\xc4\xac": {
        ha: 346,
        x_min: -68,
        x_max: 419,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 419 1099 q 315 1009 378 1042 q 176 976 251 976 q 38 1009 101 976 q -68 1099 -25 1042 l -8 1149 q 70 1078 24 1104 q 176 1053 117 1053 q 282 1078 235 1053 q 361 1149 329 1104 l 419 1099 l 419 1099 z "
    },
    "\xc3\x8e": {
        ha: 346,
        x_min: -15,
        x_max: 367,
        o: "m 0 0 m 285 1004 l 174 1144 l 65 1004 l -15 1004 l 115 1204 l 232 1204 l 367 1004 l 285 1004 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 z "
    },
    "\xc3\x8f": {
        ha: 346,
        x_min: -42,
        x_max: 393,
        o: "m 0 0 m 393 1074 q 372 1022 393 1043 q 319 1000 350 1000 q 267 1022 289 1000 q 246 1074 246 1043 q 267 1125 246 1104 q 319 1146 289 1146 q 372 1125 350 1146 q 393 1074 393 1104 m 103 1074 q 82 1022 103 1043 q 31 1000 61 1000 q -21 1022 0 1000 q -42 1074 -42 1043 q -21 1125 -42 1104 q 31 1146 0 1146 q 82 1125 61 1146 q 103 1074 103 1104 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 z "
    },
    "\xc4\xb0": {
        ha: 346,
        x_min: 101,
        x_max: 247,
        o: "m 101 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 175 999 q 123 1019 144 999 q 101 1072 101 1040 q 123 1124 101 1101 q 175 1146 144 1146 q 226 1124 206 1146 q 247 1072 247 1101 q 226 1019 247 1040 q 175 999 206 999 z "
    },
    "\xc3\x8c": {
        ha: 346,
        x_min: -68,
        x_max: 256,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 164 1004 l -68 1204 l 56 1204 l 256 1004 l 164 1004 z "
    },
    "\xc4\xaa": {
        ha: 346,
        x_min: -76,
        x_max: 428,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m -76 1022 l -76 1099 l 428 1099 l 428 1022 l -76 1022 z "
    },
    "\xc4\xae": {
        ha: 346,
        x_min: -1,
        x_max: 243,
        o: "m 243 -235 q 140 -258 204 -258 q 87 -252 113 -258 q 42 -233 61 -246 q 10 -199 22 -219 q -1 -153 -1 -179 q 11 -104 -1 -128 q 45 -61 24 -81 q 94 -26 67 -42 q 150 0 121 -11 l 103 0 l 103 926 l 242 926 l 242 0 l 243 0 q 148 -56 181 -25 q 115 -124 115 -86 q 131 -160 115 -147 q 168 -172 146 -172 q 190 -170 179 -172 q 213 -161 201 -168 l 243 -235 z "
    },
    "\xc4\xa8": {
        ha: 346,
        x_min: -44,
        x_max: 396,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 257 1001 q 192 1024 215 1001 q 151 1069 169 1046 q 124 1104 138 1089 q 89 1119 110 1119 q 44 1094 63 1119 q 26 1010 26 1068 l -44 1010 q -9 1144 -44 1093 q 94 1196 26 1196 q 158 1174 135 1196 q 199 1128 181 1151 q 228 1093 214 1108 q 263 1078 242 1078 q 306 1103 289 1078 q 324 1188 324 1129 l 396 1188 q 360 1053 396 1104 q 257 1001 325 1001 z "
    },
    "\xe1\xbb\x88": {
        ha: 346,
        x_min: 71,
        x_max: 278,
        o: "m 71 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 71 1063 q 108 1117 82 1096 q 175 1139 135 1139 q 247 1116 215 1139 q 278 1042 278 1093 q 272 1003 278 1019 q 253 968 265 986 l 192 968 q 215 1003 208 986 q 222 1039 222 1021 q 209 1078 222 1065 q 175 1090 196 1090 q 121 1047 136 1090 l 71 1063 z "
    },
    "\xe1\xbb\x8a": {
        ha: 346,
        x_min: 101,
        x_max: 247,
        o: "m 101 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 175 -258 q 123 -237 144 -258 q 101 -185 101 -217 q 123 -133 101 -156 q 175 -111 144 -111 q 226 -133 206 -111 q 247 -185 247 -156 q 226 -237 247 -217 q 175 -258 206 -258 z "
    },
    "\xc4\xb2": {
        ha: 1010,
        x_min: 103,
        x_max: 906,
        o: "m 103 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 603 -17 q 469 7 529 -17 q 360 85 408 31 l 426 190 q 495 132 456 157 q 593 107 535 107 q 720 156 674 107 q 767 288 767 206 l 767 926 l 906 926 l 906 286 q 883 151 906 208 q 819 57 860 94 q 722 1 778 19 q 603 -17 667 -17 z "
    },
    "\xc4\xb4": {
        ha: 664,
        x_min: 14,
        x_max: 683,
        o: "m 14 0 m 601 1004 l 490 1144 l 382 1004 l 301 1004 l 432 1204 l 549 1204 l 683 1004 l 601 1004 m 257 -17 q 123 7 183 -17 q 14 85 63 31 l 81 190 q 149 132 110 157 q 247 107 189 107 q 374 156 328 107 q 421 288 421 206 l 421 926 l 560 926 l 560 286 q 537 151 560 208 q 473 57 514 94 q 376 1 432 19 q 257 -17 321 -17 z "
    },
    "\xc4\xb6": {
        ha: 858,
        x_min: 103,
        x_max: 832,
        o: "m 103 0 m 514 -192 q 484 -301 514 -250 q 410 -383 454 -351 l 360 -344 q 415 -292 390 -325 q 443 -228 439 -258 q 435 -230 440 -229 q 425 -231 429 -231 q 380 -212 397 -231 q 363 -164 363 -193 q 383 -114 363 -135 q 432 -93 403 -93 q 489 -119 464 -93 q 514 -192 514 -144 m 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 832 0 l 660 0 z "
    },
    "\xc4\xb9": {
        ha: 713,
        x_min: 103,
        x_max: 663,
        o: "m 103 0 m 392 1004 l 300 1004 l 500 1204 l 624 1204 l 392 1004 m 103 0 l 103 926 l 242 926 l 242 122 l 663 122 l 663 0 l 103 0 z "
    },
    "\xc4\xbd": {
        ha: 713,
        x_min: 103,
        x_max: 663,
        o: "m 103 0 m 519 846 q 490 737 519 788 q 415 654 460 686 l 365 693 q 420 746 396 713 q 449 810 444 779 q 440 808 446 808 q 431 807 435 807 q 385 826 403 807 q 368 874 368 844 q 388 924 368 903 q 438 944 408 944 q 494 919 469 944 q 519 846 519 893 m 103 0 l 103 926 l 242 926 l 242 122 l 663 122 l 663 0 l 103 0 z "
    },
    "\xc4\xbb": {
        ha: 713,
        x_min: 103,
        x_max: 663,
        o: "m 103 0 m 446 -192 q 416 -301 446 -250 q 342 -383 386 -351 l 292 -344 q 347 -292 322 -325 q 375 -228 371 -258 q 367 -230 372 -229 q 357 -231 361 -231 q 312 -212 329 -231 q 294 -164 294 -193 q 315 -114 294 -135 q 364 -93 335 -93 q 421 -119 396 -93 q 446 -192 446 -144 m 103 0 l 103 926 l 242 926 l 242 122 l 663 122 l 663 0 l 103 0 z "
    },
    "\xc4\xbf": {
        ha: 713,
        x_min: 103,
        x_max: 663,
        o: "m 103 0 m 103 0 l 103 926 l 242 926 l 242 122 l 663 122 l 663 0 l 103 0 m 611 474 q 585 413 611 439 q 524 388 560 388 q 463 413 488 388 q 438 474 438 439 q 463 535 438 510 q 524 561 488 561 q 585 535 560 561 q 611 474 611 510 z "
    },
    "\xc5\x81": {
        ha: 738,
        x_min: 14,
        x_max: 688,
        o: "m 14 413 l 128 478 l 128 926 l 267 926 l 267 558 l 393 632 l 393 515 l 267 442 l 267 122 l 688 122 l 688 0 l 128 0 l 128 361 l 14 294 l 14 413 z "
    },
    "\xc5\x83": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 511 1004 l 419 1004 l 619 1204 l 743 1204 l 511 1004 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xc5\x87": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 438 1004 l 303 1204 l 383 1204 l 496 1063 l 603 1204 l 685 1204 l 554 1004 l 438 1004 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xc5\x85": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 581 -192 q 551 -301 581 -250 q 476 -383 521 -351 l 426 -344 q 481 -292 457 -325 q 510 -228 506 -258 q 501 -230 507 -229 q 492 -231 496 -231 q 447 -212 464 -231 q 429 -164 429 -193 q 449 -114 429 -135 q 499 -93 469 -93 q 556 -119 531 -93 q 581 -192 581 -144 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xc3\x91": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 575 1001 q 510 1024 533 1001 q 469 1069 488 1046 q 442 1104 456 1089 q 407 1119 428 1119 q 363 1094 381 1119 q 344 1010 344 1068 l 274 1010 q 309 1144 274 1093 q 413 1196 344 1196 q 476 1174 453 1196 q 517 1128 499 1151 q 546 1093 532 1108 q 581 1078 560 1078 q 624 1103 607 1078 q 642 1188 642 1129 l 714 1188 q 678 1053 714 1104 q 575 1001 643 1001 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xc5\x8a": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 585 -272 q 450 -249 511 -272 q 340 -171 389 -225 l 408 -65 q 477 -124 436 -99 q 575 -149 518 -149 q 696 -106 650 -149 q 749 7 742 -64 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 28 q 865 -106 889 -50 q 801 -199 842 -162 q 705 -254 761 -236 q 585 -272 649 -272 z "
    },
    "\xc3\x93": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 542 1004 l 450 1004 l 650 1204 l 774 1204 l 542 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc5\x8e": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 774 1099 q 669 1009 732 1042 q 531 976 606 976 q 392 1009 456 976 q 286 1099 329 1042 l 346 1149 q 424 1078 378 1104 q 531 1053 471 1053 q 636 1078 589 1053 q 715 1149 683 1104 l 774 1099 l 774 1099 z "
    },
    "\xc3\x94": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 643 1004 l 532 1144 l 424 1004 l 343 1004 l 474 1204 l 590 1204 l 725 1004 l 643 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc3\x96": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 749 1074 q 727 1022 749 1043 q 675 1000 706 1000 q 623 1022 644 1000 q 601 1074 601 1043 q 623 1125 601 1104 q 675 1146 644 1146 q 727 1125 706 1146 q 749 1074 749 1104 m 458 1074 q 438 1022 458 1043 q 386 1000 417 1000 q 335 1022 356 1000 q 314 1074 314 1043 q 335 1125 314 1104 q 386 1146 356 1146 q 438 1125 417 1146 q 458 1074 458 1104 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc3\x92": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 522 1004 l 290 1204 l 414 1204 l 614 1004 l 522 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc5\x90": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 451 1004 l 374 1004 l 501 1204 l 611 1204 l 451 1004 m 651 1004 l 574 1004 l 701 1204 l 811 1204 l 651 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc5\x8c": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 278 1022 l 278 1099 l 782 1099 l 782 1022 l 278 1022 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xc3\x98": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 531 -17 q 400 -1 461 -17 q 286 46 339 15 l 254 0 l 147 0 l 215 99 q 103 257 143 164 q 64 463 64 350 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 656 926 597 942 q 764 883 714 911 l 794 926 l 901 926 l 836 833 q 955 673 913 768 q 997 463 997 578 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 829 608 854 542 q 760 724 804 675 l 361 153 q 531 107 435 107 m 207 463 q 229 322 207 386 q 293 210 251 257 l 690 778 q 615 808 656 797 q 531 818 575 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 z "
    },
    "\xc7\xbe": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 542 1004 l 450 1004 l 650 1204 l 774 1204 l 542 1004 m 531 -17 q 400 -1 461 -17 q 286 46 339 15 l 254 0 l 147 0 l 215 99 q 103 257 143 164 q 64 463 64 350 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 656 926 597 942 q 764 883 714 911 l 794 926 l 901 926 l 836 833 q 955 673 913 768 q 997 463 997 578 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 829 608 854 542 q 760 724 804 675 l 361 153 q 531 107 435 107 m 207 463 q 229 322 207 386 q 293 210 251 257 l 690 778 q 615 808 656 797 q 531 818 575 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 z "
    },
    "\xc3\x95": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 613 1001 q 548 1024 571 1001 q 507 1069 525 1046 q 479 1104 493 1089 q 444 1119 465 1119 q 400 1094 418 1119 q 382 1010 382 1068 l 311 1010 q 347 1144 311 1093 q 450 1196 382 1196 q 513 1174 490 1196 q 554 1128 536 1151 q 583 1093 569 1108 q 618 1078 597 1078 q 662 1103 644 1078 q 679 1188 679 1129 l 751 1188 q 716 1053 751 1104 q 613 1001 681 1001 z "
    },
    "\xe1\xbb\x8c": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 535 -258 q 483 -237 504 -258 q 461 -185 461 -217 q 483 -133 461 -156 q 535 -111 504 -111 q 586 -133 565 -111 q 607 -185 607 -156 q 586 -237 607 -217 q 535 -258 565 -258 z "
    },
    "\xe1\xbb\x8e": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 425 1063 q 463 1117 436 1096 q 529 1139 489 1139 q 601 1116 569 1139 q 632 1042 632 1093 q 626 1003 632 1019 q 607 968 619 986 l 546 968 q 569 1003 563 986 q 576 1039 576 1021 q 563 1078 576 1065 q 529 1090 550 1090 q 475 1047 490 1090 l 425 1063 z "
    },
    "\xe1\xbb\x90": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 636 947 l 525 1052 l 417 947 l 336 947 l 467 1097 l 583 1097 l 718 947 l 636 947 m 764 1022 l 672 1022 l 872 1172 l 996 1172 l 764 1022 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xe1\xbb\x92": {
        ha: 1063,
        x_min: 54,
        x_max: 997,
        o: "m 54 0 m 635 947 l 524 1052 l 415 947 l 335 947 l 465 1097 l 582 1097 l 717 947 l 635 947 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 286 1022 l 54 1172 l 178 1172 l 378 1022 l 286 1022 z "
    },
    "\xe1\xbb\x94": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 633 947 l 522 1052 l 414 947 l 333 947 l 464 1097 l 581 1097 l 715 947 l 633 947 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 619 1105 q 657 1146 631 1130 q 724 1162 683 1162 q 795 1145 764 1162 q 826 1089 826 1127 q 820 1060 826 1072 q 801 1034 814 1047 l 740 1034 q 764 1060 757 1047 q 771 1087 771 1073 q 758 1116 771 1107 q 724 1125 744 1125 q 669 1093 685 1125 l 619 1105 z "
    },
    "\xe1\xbb\x96": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 639 942 l 528 1012 l 419 942 l 339 942 l 469 1042 l 586 1042 l 721 942 l 639 942 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 608 1051 q 544 1063 567 1051 q 503 1085 521 1074 q 475 1103 489 1095 q 440 1110 461 1110 q 396 1098 414 1110 q 378 1056 378 1085 l 307 1056 q 342 1123 307 1097 q 446 1149 378 1149 q 509 1138 486 1149 q 550 1115 532 1126 q 579 1097 565 1105 q 614 1090 593 1090 q 658 1102 640 1090 q 675 1144 675 1115 l 747 1144 q 712 1077 747 1103 q 608 1051 676 1051 z "
    },
    "\xe1\xbb\x98": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 643 1004 l 532 1144 l 424 1004 l 343 1004 l 474 1204 l 590 1204 l 725 1004 l 643 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 535 -258 q 483 -237 504 -258 q 461 -185 461 -217 q 483 -133 461 -156 q 535 -111 504 -111 q 586 -133 565 -111 q 607 -185 607 -156 q 586 -237 607 -217 q 535 -258 565 -258 z "
    },
    "\xc6\xa0": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xe1\xbb\x9a": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 64 0 m 542 1004 l 450 1004 l 650 1204 l 774 1204 l 542 1004 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xe1\xbb\x9c": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 522 1004 l 290 1204 l 414 1204 l 614 1004 l 522 1004 z "
    },
    "\xe1\xbb\x9e": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 426 1063 q 464 1117 438 1096 q 531 1139 490 1139 q 602 1116 571 1139 q 633 1042 633 1093 q 627 1003 633 1019 q 608 968 621 986 l 547 968 q 571 1003 564 986 q 578 1039 578 1021 q 565 1078 578 1065 q 531 1090 551 1090 q 476 1047 492 1090 l 426 1063 z "
    },
    "\xe1\xbb\xa0": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 613 1001 q 548 1024 571 1001 q 507 1069 525 1046 q 479 1104 493 1089 q 444 1119 465 1119 q 400 1094 418 1119 q 382 1010 382 1068 l 311 1010 q 347 1144 311 1093 q 450 1196 382 1196 q 513 1174 490 1196 q 554 1128 536 1151 q 583 1093 569 1108 q 618 1078 597 1078 q 662 1103 644 1078 q 679 1188 679 1129 l 751 1188 q 716 1053 751 1104 q 613 1001 681 1001 z "
    },
    "\xe1\xbb\xa2": {
        ha: 1063,
        x_min: 64,
        x_max: 1008,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 729 901 640 942 q 881 790 818 861 q 922 838 904 810 q 943 890 939 865 q 926 888 940 888 q 886 905 903 888 q 869 949 869 922 q 888 995 869 976 q 933 1014 906 1014 q 985 991 963 1014 q 1008 924 1008 968 q 982 822 1008 868 q 915 744 956 775 q 976 615 956 686 q 997 463 997 543 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 m 535 -258 q 483 -237 504 -258 q 461 -185 461 -217 q 483 -133 461 -156 q 535 -111 504 -111 q 586 -133 565 -111 q 607 -185 607 -156 q 586 -237 607 -217 q 535 -258 565 -258 z "
    },
    "\xc5\x92": {
        ha: 1526,
        x_min: 64,
        x_max: 1456,
        o: "m 835 0 l 835 150 q 774 77 810 108 q 697 25 739 46 q 610 -6 656 4 q 518 -17 564 -17 q 333 19 417 -17 q 190 119 250 56 q 97 271 131 183 q 64 463 64 358 q 97 654 64 567 q 190 805 131 742 q 333 904 250 868 q 518 940 417 940 q 610 930 564 940 q 697 899 656 919 q 774 847 739 878 q 835 775 810 817 l 835 926 l 1456 926 l 1456 804 l 974 804 l 974 533 l 1446 533 l 1446 411 l 974 411 l 974 122 l 1456 122 l 1456 0 l 835 0 m 835 613 q 715 766 794 715 q 535 817 636 817 q 398 790 458 817 q 295 717 338 764 q 230 604 253 669 q 207 463 207 539 q 230 321 207 386 q 295 208 253 256 q 398 134 338 161 q 535 107 458 107 q 715 159 636 107 q 835 313 794 211 l 835 613 z "
    },
    "\xe1\xb9\x96": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 103 0 m 103 0 l 103 926 l 493 926 q 619 903 564 926 q 713 842 675 881 q 769 751 750 803 q 789 642 789 700 q 769 532 789 583 q 712 442 750 481 q 619 380 674 403 q 493 357 564 357 l 242 357 l 242 0 l 103 0 m 475 479 q 598 524 550 479 q 646 642 646 568 q 598 760 646 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 m 415 999 q 363 1019 385 999 q 342 1072 342 1040 q 363 1124 342 1101 q 415 1146 385 1146 q 467 1124 446 1146 q 488 1072 488 1101 q 467 1019 488 1040 q 415 999 446 999 z "
    },
    "\xc5\x94": {
        ha: 858,
        x_min: 103,
        x_max: 797,
        o: "m 103 0 m 449 1004 l 357 1004 l 557 1204 l 681 1204 l 449 1004 m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xc5\x98": {
        ha: 858,
        x_min: 103,
        x_max: 797,
        o: "m 103 0 m 375 1004 l 240 1204 l 321 1204 l 433 1063 l 540 1204 l 622 1204 l 492 1004 l 375 1004 m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xc5\x96": {
        ha: 858,
        x_min: 103,
        x_max: 797,
        o: "m 103 0 m 517 -192 q 487 -301 517 -250 q 413 -383 457 -351 l 363 -344 q 417 -292 393 -325 q 446 -228 442 -258 q 438 -230 443 -229 q 428 -231 432 -231 q 383 -212 400 -231 q 365 -164 365 -193 q 385 -114 365 -135 q 435 -93 406 -93 q 492 -119 467 -93 q 517 -192 517 -144 m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xc5\x9a": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 417 1004 l 325 1004 l 525 1204 l 649 1204 l 417 1004 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    "\xc5\xa0": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 343 1004 l 208 1204 l 289 1204 l 401 1063 l 508 1204 l 590 1204 l 460 1004 l 343 1004 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    "\xc5\x9c": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 508 1004 l 397 1144 l 289 1004 l 208 1004 l 339 1204 l 456 1204 l 590 1004 l 508 1004 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    "\xc5\x9e": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 400 -268 q 316 -255 354 -268 q 257 -225 278 -242 l 285 -167 q 340 -197 311 -187 q 397 -207 369 -207 q 454 -194 429 -207 q 479 -153 479 -181 q 429 -108 479 -108 q 381 -129 399 -108 l 328 -100 l 360 -14 q 177 33 256 -6 q 46 131 99 72 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 160 761 210 q 683 72 724 110 q 580 9 643 33 q 428 -17 517 -15 l 404 -75 q 456 -60 426 -60 q 522 -85 496 -60 q 547 -154 547 -111 q 505 -237 547 -207 q 400 -268 463 -268 z "
    },
    "\xc8\x98": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 489 -192 q 459 -301 489 -250 q 385 -383 429 -351 l 335 -344 q 390 -292 365 -325 q 418 -228 414 -258 q 410 -230 415 -229 q 400 -231 404 -231 q 355 -212 372 -231 q 338 -164 338 -193 q 358 -114 338 -135 q 407 -93 378 -93 q 464 -119 439 -93 q 489 -192 489 -144 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    "\xe1\xb9\xa0": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 m 410 999 q 358 1019 379 999 q 336 1072 336 1040 q 358 1124 336 1101 q 410 1146 379 1146 q 461 1124 440 1146 q 482 1072 482 1101 q 461 1019 482 1040 q 410 999 440 999 z "
    },
    "\xe1\xba\x9e": {
        ha: 946,
        x_min: 103,
        x_max: 906,
        o: "m 581 -17 q 415 13 479 -17 q 313 83 350 43 l 396 181 q 474 128 429 149 q 581 107 518 107 q 713 151 664 107 q 763 271 763 194 q 742 350 763 318 q 685 401 722 382 q 597 428 649 419 q 481 436 544 436 l 421 436 l 421 556 l 635 785 q 493 819 576 819 q 307 749 371 819 q 243 560 243 679 l 243 0 l 103 0 l 103 564 q 127 719 103 649 q 201 839 151 789 q 323 916 250 889 q 493 943 396 943 q 682 909 599 943 q 817 801 765 875 l 588 550 q 712 528 654 546 q 813 477 769 511 q 881 392 856 443 q 906 271 906 342 q 881 156 906 208 q 813 65 857 103 q 710 5 769 26 q 581 -17 650 -17 z "
    },
    "\xc5\xa6": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 329 0 l 329 396 l 126 396 l 126 472 l 329 472 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 472 l 671 472 l 671 396 l 468 396 l 468 0 l 329 0 z "
    },
    "\xc5\xa4": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 42 0 m 342 1004 l 207 1204 l 288 1204 l 400 1063 l 507 1204 l 589 1204 l 458 1004 l 342 1004 m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 z "
    },
    "\xc5\xa2": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 403 -268 q 319 -255 357 -268 q 260 -225 281 -242 l 288 -167 q 343 -197 314 -187 q 400 -207 372 -207 q 457 -194 432 -207 q 482 -153 482 -181 q 432 -108 482 -108 q 383 -129 401 -108 l 331 -100 l 368 0 l 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 438 0 l 407 -75 q 458 -60 429 -60 q 524 -85 499 -60 q 550 -154 550 -111 q 508 -237 550 -207 q 403 -268 465 -268 z "
    },
    "\xc8\x9a": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 42 0 m 483 -192 q 453 -301 483 -250 q 379 -383 424 -351 l 329 -344 q 384 -292 360 -325 q 413 -228 408 -258 q 404 -230 410 -229 q 394 -231 399 -231 q 349 -212 367 -231 q 332 -164 332 -193 q 352 -114 332 -135 q 401 -93 372 -93 q 458 -119 433 -93 q 483 -192 483 -144 m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 z "
    },
    "\xe1\xb9\xaa": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 42 0 m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 m 397 999 q 345 1019 367 999 q 324 1072 324 1040 q 345 1124 324 1101 q 397 1146 367 1146 q 449 1124 428 1146 q 469 1072 469 1101 q 449 1019 469 1040 q 397 999 428 999 z "
    },
    "\xc3\x9a": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 503 1004 l 411 1004 l 611 1204 l 735 1204 l 503 1004 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 z "
    },
    "\xc5\xac": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 740 1099 q 635 1009 699 1042 q 497 976 572 976 q 359 1009 422 976 q 253 1099 296 1042 l 313 1149 q 391 1078 344 1104 q 497 1053 438 1053 q 603 1078 556 1053 q 682 1149 650 1104 l 740 1099 l 740 1099 z "
    },
    "\xc3\x9b": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 606 1004 l 494 1144 l 386 1004 l 306 1004 l 436 1204 l 553 1204 l 688 1004 l 606 1004 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 z "
    },
    "\xc3\x9c": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 713 1074 q 691 1022 713 1043 q 639 1000 669 1000 q 587 1022 608 1000 q 565 1074 565 1043 q 587 1125 565 1104 q 639 1146 608 1146 q 691 1125 669 1146 q 713 1074 713 1104 m 422 1074 q 401 1022 422 1043 q 350 1000 381 1000 q 299 1022 319 1000 q 278 1074 278 1043 q 299 1125 278 1104 q 350 1146 319 1146 q 401 1125 381 1146 q 422 1074 422 1104 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 z "
    },
    "\xc3\x99": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 483 1004 l 251 1204 l 375 1204 l 575 1004 l 483 1004 z "
    },
    "\xc5\xb0": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 415 1004 l 338 1004 l 465 1204 l 575 1204 l 415 1004 m 615 1004 l 538 1004 l 665 1204 l 775 1204 l 615 1004 z "
    },
    "\xc5\xaa": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 242 1022 l 242 1099 l 746 1099 l 746 1022 l 242 1022 z "
    },
    "\xc5\xb2": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 824 135 882 226 q 654 7 767 44 q 543 -51 582 -17 q 504 -124 504 -86 q 519 -160 504 -147 q 557 -172 535 -172 q 578 -170 568 -172 q 600 -161 589 -168 l 631 -235 q 528 -258 592 -258 q 475 -252 500 -258 q 430 -233 450 -246 q 398 -199 410 -219 q 386 -153 386 -179 q 419 -76 386 -111 q 504 -17 453 -40 l 493 -17 l 493 -17 z "
    },
    "\xc5\xae": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 494 981 q 440 992 465 981 q 397 1022 415 1003 q 367 1067 378 1042 q 356 1121 356 1092 q 367 1175 356 1150 q 397 1219 378 1200 q 440 1250 415 1239 q 494 1261 465 1261 q 549 1250 524 1261 q 592 1219 574 1239 q 622 1175 611 1200 q 632 1121 632 1150 q 622 1067 632 1092 q 592 1022 611 1042 q 549 992 574 1003 q 494 981 524 981 m 494 1043 q 549 1066 526 1043 q 571 1121 571 1089 q 549 1175 571 1153 q 494 1197 526 1197 q 440 1175 463 1197 q 418 1121 418 1153 q 440 1066 418 1089 q 494 1043 463 1043 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 z "
    },
    "\xc5\xa8": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 576 1001 q 512 1024 535 1001 q 471 1069 489 1046 q 443 1104 457 1089 q 408 1119 429 1119 q 364 1094 382 1119 q 346 1010 346 1068 l 275 1010 q 310 1144 275 1093 q 414 1196 346 1196 q 477 1174 454 1196 q 518 1128 500 1151 q 547 1093 533 1108 q 582 1078 561 1078 q 626 1103 608 1078 q 643 1188 643 1129 l 715 1188 q 680 1053 715 1104 q 576 1001 644 1001 z "
    },
    "\xe1\xbb\xa4": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 497 -258 q 445 -237 467 -258 q 424 -185 424 -217 q 445 -133 424 -156 q 497 -111 467 -111 q 549 -133 528 -111 q 569 -185 569 -156 q 549 -237 569 -217 q 497 -258 528 -258 z "
    },
    "\xc6\xaf": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 z "
    },
    "\xe1\xbb\xa6": {
        ha: 986,
        x_min: 103,
        x_max: 882,
        o: "m 103 0 m 493 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 m 390 1063 q 428 1117 401 1096 q 494 1139 454 1139 q 566 1116 535 1139 q 597 1042 597 1093 q 591 1003 597 1019 q 572 968 585 986 l 511 968 q 535 1003 528 986 q 542 1039 542 1021 q 528 1078 542 1065 q 494 1090 515 1090 q 440 1047 456 1090 l 390 1063 z "
    },
    "\xe1\xbb\xa8": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 103 0 m 503 1004 l 411 1004 l 611 1204 l 735 1204 l 503 1004 m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 z "
    },
    "\xe1\xbb\xaa": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 103 0 m 483 1004 l 251 1204 l 375 1204 l 575 1004 l 483 1004 m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 z "
    },
    "\xe1\xbb\xac": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 103 0 m 390 1063 q 428 1117 401 1096 q 494 1139 454 1139 q 566 1116 535 1139 q 597 1042 597 1093 q 591 1003 597 1019 q 572 968 585 986 l 511 968 q 535 1003 528 986 q 542 1039 542 1021 q 528 1078 542 1065 q 494 1090 515 1090 q 440 1047 456 1090 l 390 1063 m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 z "
    },
    "\xe1\xbb\xae": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 103 0 m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 m 575 1001 q 510 1024 533 1001 q 469 1069 488 1046 q 442 1104 456 1089 q 407 1119 428 1119 q 363 1094 381 1119 q 344 1010 344 1068 l 274 1010 q 309 1144 274 1093 q 413 1196 344 1196 q 476 1174 453 1196 q 517 1128 499 1151 q 546 1093 532 1108 q 581 1078 560 1078 q 624 1103 607 1078 q 642 1188 642 1129 l 714 1188 q 678 1053 714 1104 q 575 1001 643 1001 z "
    },
    "\xe1\xbb\xb0": {
        ha: 986,
        x_min: 103,
        x_max: 1040,
        o: "m 103 0 m 497 -258 q 445 -237 467 -258 q 424 -185 424 -217 q 445 -133 424 -156 q 497 -111 467 -111 q 549 -133 528 -111 q 569 -185 569 -156 q 549 -237 569 -217 q 497 -258 528 -258 m 1040 1011 q 999 885 1040 944 q 882 794 957 826 l 882 364 q 858 208 882 278 q 785 88 833 138 q 663 10 736 38 q 493 -17 590 -17 q 323 10 396 -17 q 201 88 250 38 q 127 207 151 138 q 103 363 103 276 l 103 926 l 243 926 l 243 367 q 307 177 243 247 q 493 107 371 107 q 678 177 615 107 q 742 367 742 247 l 742 926 l 882 926 l 882 856 q 945 909 918 875 q 976 979 972 943 q 960 976 971 976 q 918 993 935 976 q 901 1038 901 1010 q 919 1083 901 1064 q 965 1101 938 1101 q 1018 1078 996 1101 q 1040 1011 1040 1056 z "
    },
    "\xe1\xba\x82": {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 14 0 m 629 1004 l 538 1004 l 738 1204 l 861 1204 l 629 1004 m 813 0 l 619 715 l 428 0 l 279 0 l 14 926 l 169 926 l 361 183 l 564 926 l 676 926 l 878 183 l 1069 926 l 1225 926 l 961 0 l 813 0 z "
    },
    "\xc5\xb4": {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 14 0 m 729 1004 l 618 1144 l 510 1004 l 429 1004 l 560 1204 l 676 1204 l 811 1004 l 729 1004 m 813 0 l 619 715 l 428 0 l 279 0 l 14 926 l 169 926 l 361 183 l 564 926 l 676 926 l 878 183 l 1069 926 l 1225 926 l 961 0 l 813 0 z "
    },
    "\xe1\xba\x84": {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 14 0 m 838 1074 q 816 1022 838 1043 q 764 1000 794 1000 q 712 1022 733 1000 q 690 1074 690 1043 q 712 1125 690 1104 q 764 1146 733 1146 q 816 1125 794 1146 q 838 1074 838 1104 m 547 1074 q 526 1022 547 1043 q 475 1000 506 1000 q 424 1022 444 1000 q 403 1074 403 1043 q 424 1125 403 1104 q 475 1146 444 1146 q 526 1125 506 1146 q 547 1074 547 1104 m 813 0 l 619 715 l 428 0 l 279 0 l 14 926 l 169 926 l 361 183 l 564 926 l 676 926 l 878 183 l 1069 926 l 1225 926 l 961 0 l 813 0 z "
    },
    "\xe1\xba\x80": {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 14 0 m 813 0 l 619 715 l 428 0 l 279 0 l 14 926 l 169 926 l 361 183 l 564 926 l 676 926 l 878 183 l 1069 926 l 1225 926 l 961 0 l 813 0 m 610 1004 l 378 1204 l 501 1204 l 701 1004 l 610 1004 z "
    },
    "\xc3\x9d": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 m 447 1004 l 356 1004 l 556 1204 l 679 1204 l 447 1004 z "
    },
    "\xc5\xb6": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 549 1004 l 438 1144 l 329 1004 l 249 1004 l 379 1204 l 496 1204 l 631 1004 l 549 1004 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 z "
    },
    "\xc5\xb8": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 658 1074 q 637 1022 658 1043 q 585 1000 615 1000 q 533 1022 554 1000 q 511 1074 511 1043 q 533 1125 511 1104 q 585 1146 554 1146 q 637 1125 615 1146 q 658 1074 658 1104 m 368 1074 q 347 1022 368 1043 q 296 1000 326 1000 q 244 1022 265 1000 q 224 1074 224 1043 q 244 1125 224 1104 q 296 1146 265 1146 q 347 1125 326 1146 q 368 1074 368 1104 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 z "
    },
    "\xe1\xbb\xb2": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 m 429 1004 l 197 1204 l 321 1204 l 521 1004 l 429 1004 z "
    },
    "\xc5\xb9": {
        ha: 815,
        x_min: 64,
        x_max: 750,
        o: "m 64 0 m 417 1004 l 325 1004 l 525 1204 l 649 1204 l 417 1004 m 64 0 l 64 114 l 561 804 l 64 804 l 64 926 l 740 926 l 740 813 l 243 122 l 750 122 l 750 0 l 64 0 z "
    },
    "\xc5\xbd": {
        ha: 815,
        x_min: 64,
        x_max: 750,
        o: "m 64 0 m 346 1004 l 211 1204 l 292 1204 l 404 1063 l 511 1204 l 593 1204 l 463 1004 l 346 1004 m 64 0 l 64 114 l 561 804 l 64 804 l 64 926 l 740 926 l 740 813 l 243 122 l 750 122 l 750 0 l 64 0 z "
    },
    "\xc5\xbb": {
        ha: 815,
        x_min: 64,
        x_max: 750,
        o: "m 64 0 m 64 0 l 64 114 l 561 804 l 64 804 l 64 926 l 740 926 l 740 813 l 243 122 l 750 122 l 750 0 l 64 0 m 403 999 q 351 1019 372 999 q 329 1072 329 1040 q 351 1124 329 1101 q 403 1146 372 1146 q 454 1124 433 1146 q 475 1072 475 1101 q 454 1019 475 1040 q 403 999 433 999 z "
    },
    "\xc3\x90": {
        ha: 1017,
        x_min: 14,
        x_max: 951,
        o: "m 140 0 l 140 406 l 14 406 l 14 507 l 140 507 l 140 926 l 471 926 q 668 892 579 926 q 819 794 757 857 q 917 647 882 732 q 951 463 951 563 q 917 277 951 363 q 819 131 882 192 q 668 35 757 69 q 471 0 579 0 l 140 0 m 471 122 q 614 149 551 122 q 719 222 676 176 q 785 330 763 268 q 808 463 808 392 q 786 596 808 533 q 722 705 764 658 q 616 778 679 751 q 471 804 553 804 l 279 804 l 279 507 l 508 507 l 508 406 l 279 406 l 279 122 l 471 122 z "
    },
    "\xc3\x9e": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 103 0 l 103 926 l 242 926 l 242 765 l 493 765 q 619 742 564 765 q 713 680 675 719 q 769 589 750 640 q 789 479 789 538 q 769 370 789 421 q 712 281 750 319 q 619 219 674 242 q 493 197 564 197 l 242 197 l 242 0 l 103 0 m 475 319 q 598 363 550 319 q 646 481 646 407 q 598 597 646 551 q 475 642 550 642 l 242 642 l 242 319 l 475 319 z "
    },
    "\xc3\xa1": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 379 772 l 288 772 l 488 972 l 611 972 l 379 772 z "
    },
    "\xc4\x83": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 613 867 q 508 777 571 810 q 369 744 444 744 q 231 777 294 744 q 125 867 168 810 l 185 917 q 263 847 217 872 q 369 821 310 821 q 475 847 428 821 q 554 917 522 872 l 613 867 l 613 867 z "
    },
    "\xc3\xa2": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 479 772 l 368 913 l 260 772 l 179 772 l 310 972 l 426 972 l 561 772 l 479 772 z "
    },
    "\xc3\xa4": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 588 842 q 566 790 588 811 q 514 768 544 768 q 462 790 483 768 q 440 842 440 811 q 462 893 440 872 q 514 914 483 914 q 566 893 544 914 q 588 842 588 872 m 297 842 q 276 790 297 811 q 225 768 256 768 q 174 790 194 768 q 153 842 153 811 q 174 893 153 872 q 225 914 194 914 q 276 893 256 914 q 297 842 297 872 z "
    },
    "\xc3\xa0": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 360 772 l 128 972 l 251 972 l 451 772 l 360 772 z "
    },
    "\xc4\x81": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 117 790 l 117 867 l 621 867 l 621 790 l 117 790 z "
    },
    "\xc4\x85": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 639 -235 q 536 -258 600 -258 q 483 -252 508 -258 q 438 -233 457 -246 q 406 -199 418 -219 q 394 -153 394 -179 q 407 -104 394 -128 q 441 -61 419 -81 q 490 -26 463 -42 q 546 0 517 -11 l 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 q 544 -56 576 -25 q 511 -124 511 -86 q 526 -160 511 -147 q 564 -172 542 -172 q 586 -170 575 -172 q 608 -161 597 -168 l 639 -235 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 z "
    },
    "\xc3\xa5": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 369 749 q 315 760 340 749 q 272 790 290 771 q 242 835 253 810 q 231 889 231 860 q 242 943 231 918 q 272 988 253 968 q 315 1018 290 1007 q 369 1029 340 1029 q 424 1018 399 1029 q 467 988 449 1007 q 497 943 486 968 q 507 889 507 918 q 497 835 507 860 q 467 790 486 810 q 424 760 449 771 q 369 749 399 749 m 369 811 q 424 834 401 811 q 446 889 446 857 q 424 943 446 921 q 369 965 401 965 q 315 943 338 965 q 293 889 293 921 q 315 834 293 857 q 369 811 338 811 z "
    },
    "\xc3\xa3": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 451 769 q 387 792 410 769 q 346 838 364 814 q 318 872 332 857 q 283 888 304 888 q 239 862 257 888 q 221 778 221 836 l 150 778 q 185 913 150 861 q 289 964 221 964 q 352 942 329 964 q 393 896 375 919 q 422 861 408 876 q 457 846 436 846 q 501 872 483 846 q 518 956 518 897 l 590 956 q 555 821 590 872 q 451 769 519 769 z "
    },
    "\xe1\xba\xa1": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 369 -258 q 317 -237 339 -258 q 296 -185 296 -217 q 317 -133 296 -156 q 369 -111 339 -111 q 421 -133 400 -111 q 442 -185 442 -156 q 421 -237 442 -217 q 369 -258 400 -258 z "
    },
    "\xe1\xba\xa3": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 265 828 q 303 883 276 861 q 369 904 329 904 q 441 881 410 904 q 472 807 472 858 q 466 768 472 785 q 447 733 460 751 l 386 733 q 410 769 403 751 q 417 804 417 786 q 403 843 417 831 q 369 856 390 856 q 315 813 331 856 l 265 828 z "
    },
    "\xe1\xba\xa5": {
        ha: 739,
        x_min: 61,
        x_max: 833,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 479 772 l 368 913 l 260 772 l 179 772 l 310 972 l 426 972 l 561 772 l 479 772 m 601 869 l 510 869 l 710 1069 l 833 1069 l 601 869 z "
    },
    "\xe1\xba\xad": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 478 772 l 367 913 l 258 772 l 178 772 l 308 972 l 425 972 l 560 772 l 478 772 m 369 -258 q 317 -237 339 -258 q 296 -185 296 -217 q 317 -133 296 -156 q 369 -111 339 -111 q 421 -133 400 -111 q 442 -185 442 -156 q 421 -237 442 -217 q 369 -258 400 -258 z "
    },
    "\xe1\xba\xa7": {
        ha: 739,
        x_min: -93,
        x_max: 639,
        o: "m 0 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 479 772 l 368 913 l 260 772 l 179 772 l 310 972 l 426 972 l 561 772 l 479 772 m 139 869 l -93 1069 l 31 1069 l 231 869 l 139 869 z "
    },
    "\xe1\xba\xa9": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 479 772 l 368 913 l 260 772 l 179 772 l 310 972 l 426 972 l 561 772 l 479 772 m 396 1021 q 433 1076 407 1054 q 500 1097 460 1097 q 572 1074 540 1097 q 603 1000 603 1051 q 597 961 603 978 q 578 926 590 944 l 517 926 q 540 962 533 944 q 547 997 547 979 q 534 1036 547 1024 q 500 1049 521 1049 q 446 1006 461 1049 l 396 1021 z "
    },
    "\xe1\xba\xaf": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 382 869 l 290 869 l 490 1069 l 614 1069 l 382 869 m 614 846 q 509 756 572 789 q 371 724 446 724 q 233 756 296 724 q 126 846 169 789 l 186 896 q 265 826 218 851 q 371 800 311 800 q 476 826 429 800 q 556 896 524 851 l 614 846 l 614 846 z "
    },
    "\xe1\xba\xab": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 479 728 l 368 868 l 260 728 l 179 728 l 310 928 l 426 928 l 561 728 l 479 728 m 450 947 q 385 969 408 947 q 344 1015 363 992 q 317 1050 331 1035 q 282 1065 303 1065 q 238 1040 256 1065 q 219 956 219 1014 l 149 956 q 184 1090 149 1039 q 288 1142 219 1142 q 351 1119 328 1142 q 392 1074 374 1097 q 421 1039 407 1054 q 456 1024 435 1024 q 499 1049 482 1024 q 517 1133 517 1075 l 589 1133 q 553 999 589 1050 q 450 947 518 947 z "
    },
    "\xe1\xba\xb1": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 354 869 l 122 1069 l 246 1069 l 446 869 l 354 869 m 614 850 q 509 760 572 793 q 371 728 446 728 q 233 760 296 728 q 126 850 169 793 l 186 900 q 265 830 218 856 q 371 804 311 804 q 476 830 429 804 q 556 900 524 856 l 614 850 l 614 850 z "
    },
    "\xe1\xba\xb3": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 265 967 q 303 1022 276 1000 q 369 1043 329 1043 q 441 1020 410 1043 q 472 946 472 997 q 466 907 472 924 q 447 872 460 890 l 386 872 q 410 908 403 890 q 417 943 417 925 q 403 982 417 969 q 369 994 390 994 q 315 951 331 994 l 265 967 m 614 850 q 509 760 572 793 q 371 728 446 728 q 233 760 296 728 q 126 850 169 793 l 186 900 q 265 830 218 856 q 371 804 311 804 q 476 830 429 804 q 556 900 524 856 l 614 850 l 614 850 z "
    },
    "\xe1\xba\xb5": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 614 850 q 509 760 572 793 q 371 728 446 728 q 233 760 296 728 q 126 850 169 793 l 186 900 q 265 830 218 856 q 371 804 311 804 q 476 830 429 804 q 556 900 524 856 l 614 850 l 614 850 m 450 914 q 385 936 408 914 q 344 982 363 958 q 317 1017 331 1001 q 282 1032 303 1032 q 238 1006 256 1032 q 219 922 219 981 l 149 922 q 184 1057 149 1006 q 288 1108 219 1108 q 351 1086 328 1108 q 392 1040 374 1064 q 421 1006 407 1021 q 456 990 435 990 q 499 1016 482 990 q 517 1100 517 1042 l 589 1100 q 553 965 589 1017 q 450 914 518 914 z "
    },
    "\xe1\xba\xb7": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 m 369 -258 q 317 -237 339 -258 q 296 -185 296 -217 q 317 -133 296 -156 q 369 -111 339 -111 q 421 -133 400 -111 q 442 -185 442 -156 q 421 -237 442 -217 q 369 -258 400 -258 m 610 867 q 505 777 568 810 q 367 744 442 744 q 228 777 292 744 q 122 867 165 810 l 182 917 q 260 847 214 872 q 367 821 307 821 q 472 847 425 821 q 551 917 519 872 l 610 867 l 610 867 z "
    },
    "\xc3\xa6": {
        ha: 1226,
        x_min: 61,
        x_max: 1171,
        o: "m 672 294 q 692 214 676 251 q 734 149 707 176 q 798 105 761 121 q 882 89 835 89 q 982 109 932 89 q 1067 168 1032 129 l 1125 83 q 1009 9 1075 35 q 876 -17 943 -17 q 721 18 789 -17 q 610 132 653 53 q 498 24 572 65 q 332 -17 424 -17 q 229 -3 278 -17 q 143 39 181 11 q 83 108 106 67 q 61 206 61 150 q 81 301 61 260 q 135 369 101 342 q 213 411 168 397 q 307 425 257 425 q 441 404 379 425 q 547 339 503 383 l 547 447 q 498 545 547 510 q 369 581 449 581 q 251 559 306 581 q 149 492 197 538 l 94 578 q 381 688 208 688 q 533 654 468 688 q 621 550 599 621 q 662 603 639 578 q 715 647 685 628 q 783 676 744 665 q 868 688 821 688 q 995 660 939 688 q 1090 583 1051 632 q 1150 468 1129 535 q 1171 325 1171 401 l 1171 294 l 672 294 m 1049 385 q 1036 453 1047 418 q 1002 518 1025 489 q 944 566 979 547 q 860 585 910 585 q 779 567 814 585 q 721 519 744 549 q 685 455 697 490 q 671 385 672 419 l 1049 385 m 547 260 q 465 317 515 297 q 357 338 414 338 q 235 305 282 338 q 188 213 188 272 q 235 121 188 153 q 357 89 282 89 q 432 103 397 89 q 492 140 467 117 q 533 190 518 163 q 547 247 547 218 l 547 260 z "
    },
    "\xc7\xbd": {
        ha: 1226,
        x_min: 61,
        x_max: 1171,
        o: "m 61 0 m 590 772 l 499 772 l 699 972 l 822 972 l 590 772 m 672 294 q 692 214 676 251 q 734 149 707 176 q 798 105 761 121 q 882 89 835 89 q 982 109 932 89 q 1067 168 1032 129 l 1125 83 q 1009 9 1075 35 q 876 -17 943 -17 q 721 18 789 -17 q 610 132 653 53 q 498 24 572 65 q 332 -17 424 -17 q 229 -3 278 -17 q 143 39 181 11 q 83 108 106 67 q 61 206 61 150 q 81 301 61 260 q 135 369 101 342 q 213 411 168 397 q 307 425 257 425 q 441 404 379 425 q 547 339 503 383 l 547 447 q 498 545 547 510 q 369 581 449 581 q 251 559 306 581 q 149 492 197 538 l 94 578 q 381 688 208 688 q 533 654 468 688 q 621 550 599 621 q 662 603 639 578 q 715 647 685 628 q 783 676 744 665 q 868 688 821 688 q 995 660 939 688 q 1090 583 1051 632 q 1150 468 1129 535 q 1171 325 1171 401 l 1171 294 l 672 294 m 1049 385 q 1036 453 1047 418 q 1002 518 1025 489 q 944 566 979 547 q 860 585 910 585 q 779 567 814 585 q 721 519 744 549 q 685 455 697 490 q 671 385 672 419 l 1049 385 m 547 260 q 465 317 515 297 q 357 338 414 338 q 235 305 282 338 q 188 213 188 272 q 235 121 188 153 q 357 89 282 89 q 432 103 397 89 q 492 140 467 117 q 533 190 518 163 q 547 247 547 218 l 547 260 z "
    },
    "\xe1\xb8\x83": {
        ha: 803,
        x_min: 100,
        x_max: 743,
        o: "m 100 0 m 225 192 q 302 123 250 151 q 411 94 354 94 q 496 113 458 94 q 560 163 533 131 q 600 238 586 194 q 614 335 614 282 q 600 432 614 388 q 560 508 586 476 q 496 558 533 540 q 411 576 458 576 q 302 547 354 576 q 225 476 250 517 l 225 192 m 100 0 l 100 926 l 225 926 l 225 574 q 322 658 265 628 q 444 688 378 688 q 565 663 510 688 q 659 592 619 638 q 721 481 699 546 q 743 335 743 415 q 721 188 743 253 q 659 77 699 122 q 565 8 619 32 q 444 -17 510 -17 q 319 15 376 -17 q 225 96 263 46 l 225 0 l 100 0 m 411 999 q 359 1019 381 999 q 338 1072 338 1040 q 359 1124 338 1101 q 411 1146 381 1146 q 463 1124 442 1146 q 483 1072 483 1101 q 463 1019 483 1040 q 411 999 442 999 z "
    },
    "\xc4\x87": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 58 0 m 408 772 l 317 772 l 517 972 l 640 972 l 408 772 m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    "\xc3\xa7": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 401 -265 q 317 -252 356 -265 q 258 -222 279 -239 l 286 -164 q 342 -194 313 -185 q 399 -204 371 -204 q 456 -191 431 -204 q 481 -150 481 -178 q 431 -106 481 -106 q 382 -126 400 -106 l 329 -97 l 360 -14 q 236 22 292 -7 q 141 97 181 51 q 80 204 101 143 q 58 336 58 265 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 564 23 617 56 q 428 -15 511 -10 l 406 -72 q 457 -57 428 -57 q 523 -83 497 -57 q 549 -151 549 -108 q 506 -235 549 -204 q 401 -265 464 -265 z "
    },
    "\xc4\x89": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 58 0 m 510 772 l 399 913 l 290 772 l 210 772 l 340 972 l 457 972 l 592 772 l 510 772 m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    "\xc4\x8b": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 58 0 m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 m 401 767 q 349 788 371 767 q 328 840 328 808 q 349 892 328 869 q 401 914 371 914 q 453 892 432 914 q 474 840 474 869 q 453 788 474 808 q 401 767 432 767 z "
    },
    "\xc4\x8d": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 58 0 m 344 772 l 210 972 l 290 972 l 403 831 l 510 972 l 592 972 l 461 772 l 344 772 m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    "\xc4\x8f": {
        ha: 913,
        x_min: 58,
        x_max: 919,
        o: "m 58 0 m 919 844 q 890 735 919 786 q 815 653 860 685 l 765 692 q 820 744 796 711 q 849 808 844 778 q 840 806 846 807 q 831 806 835 806 q 785 824 803 806 q 768 872 768 843 q 788 922 768 901 q 838 943 808 943 q 894 917 869 943 q 919 844 919 892 m 578 0 l 578 96 q 483 15 540 46 q 358 -17 425 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 926 l 703 926 l 703 0 l 578 0 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 478 q 501 547 551 518 q 392 576 450 576 q 307 558 344 576 q 243 508 269 540 q 203 432 217 476 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 z "
    },
    "\xc4\x91": {
        ha: 807,
        x_min: 58,
        x_max: 794,
        o: "m 578 0 l 578 96 q 483 15 540 46 q 358 -17 425 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 740 l 365 740 l 365 817 l 578 817 l 578 926 l 703 926 l 703 817 l 794 817 l 794 740 l 703 740 l 703 0 l 578 0 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 478 q 501 547 551 518 q 392 576 450 576 q 307 558 344 576 q 243 508 269 540 q 203 432 217 476 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 z "
    },
    "\xe1\xb8\x8b": {
        ha: 803,
        x_min: 58,
        x_max: 703,
        o: "m 58 0 m 578 0 l 578 96 q 483 15 540 46 q 358 -17 425 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 926 l 703 926 l 703 0 l 578 0 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 478 q 501 547 551 518 q 392 576 450 576 q 307 558 344 576 q 243 508 269 540 q 203 432 217 476 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 m 393 999 q 341 1019 363 999 q 319 1072 319 1040 q 341 1124 319 1101 q 393 1146 363 1146 q 444 1124 424 1146 q 465 1072 465 1101 q 444 1019 465 1040 q 393 999 424 999 z "
    },
    "\xc3\xa9": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 772 l 314 772 l 514 972 l 638 972 l 406 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xc4\x95": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 640 867 q 535 777 599 810 q 397 744 472 744 q 259 777 322 744 q 153 867 196 810 l 213 917 q 291 847 244 872 q 397 821 338 821 q 503 847 456 821 q 582 917 550 872 l 640 867 l 640 867 z "
    },
    "\xc3\xaa": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 506 772 l 394 913 l 286 772 l 206 772 l 336 972 l 453 972 l 588 772 l 506 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xc3\xab": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 614 842 q 592 790 614 811 q 540 768 571 768 q 488 790 510 768 q 467 842 467 811 q 488 893 467 872 q 540 914 510 914 q 592 893 571 914 q 614 842 614 872 m 324 842 q 303 790 324 811 q 251 768 282 768 q 200 790 221 768 q 179 842 179 811 q 200 893 179 872 q 251 914 221 914 q 303 893 282 914 q 324 842 324 872 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xc4\x97": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 397 767 q 345 788 367 767 q 324 840 324 808 q 345 892 324 869 q 397 914 367 914 q 449 892 428 914 q 469 840 469 869 q 449 788 469 808 q 397 767 428 767 z "
    },
    "\xc3\xa8": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 386 772 l 154 972 l 278 972 l 478 772 l 386 772 z "
    },
    "\xc4\x93": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 143 790 l 143 867 l 647 867 l 647 790 l 143 790 z "
    },
    "\xc4\x99": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 521 -1 q 469 -12 497 -8 q 406 -17 442 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 569 -20 610 31 q 528 -114 528 -71 q 544 -158 528 -144 q 583 -172 561 -172 q 628 -161 607 -172 l 657 -235 q 613 -252 639 -246 q 554 -258 586 -258 q 501 -252 526 -258 q 456 -233 476 -246 q 424 -199 436 -219 q 413 -153 413 -179 q 445 -71 413 -108 q 521 -1 478 -33 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xc4\x9b": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 339 772 l 204 972 l 285 972 l 397 831 l 504 972 l 586 972 l 456 772 l 339 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xe1\xba\xb9": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 397 -258 q 345 -237 367 -258 q 324 -185 324 -217 q 345 -133 324 -156 q 397 -111 367 -111 q 449 -133 428 -111 q 469 -185 469 -156 q 449 -237 469 -217 q 397 -258 428 -258 z "
    },
    "\xe1\xba\xbb": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 290 828 q 328 883 301 861 q 394 904 354 904 q 466 881 435 904 q 497 807 497 858 q 491 768 497 785 q 472 733 485 751 l 411 733 q 435 769 428 751 q 442 804 442 786 q 428 843 442 831 q 394 856 415 856 q 340 813 356 856 l 290 828 z "
    },
    "\xe1\xba\xbd": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 475 769 q 410 792 433 769 q 369 838 388 814 q 342 872 356 857 q 307 888 328 888 q 263 862 281 888 q 244 778 244 836 l 174 778 q 209 913 174 861 q 313 964 244 964 q 376 942 353 964 q 417 896 399 919 q 446 861 432 876 q 481 846 460 846 q 524 872 507 846 q 542 956 542 897 l 614 956 q 578 821 614 872 q 475 769 543 769 z "
    },
    "\xe1\xba\xbf": {
        ha: 778,
        x_min: 58,
        x_max: 854,
        o: "m 58 0 m 504 772 l 393 913 l 285 772 l 204 772 l 335 972 l 451 972 l 586 772 l 504 772 m 622 869 l 531 869 l 731 1069 l 854 1069 l 622 869 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xe1\xbb\x81": {
        ha: 778,
        x_min: -69,
        x_max: 721,
        o: "m 0 0 m 503 772 l 392 913 l 283 772 l 203 772 l 333 972 l 450 972 l 585 772 l 503 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 163 869 l -69 1069 l 54 1069 l 254 869 l 163 869 z "
    },
    "\xe1\xbb\x83": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 503 772 l 392 913 l 283 772 l 203 772 l 333 972 l 450 972 l 585 772 l 503 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 419 1021 q 457 1076 431 1054 q 524 1097 483 1097 q 595 1074 564 1097 q 626 1000 626 1051 q 620 961 626 978 q 601 926 614 944 l 540 926 q 564 962 557 944 q 571 997 571 979 q 558 1036 571 1024 q 524 1049 544 1049 q 469 1006 485 1049 l 419 1021 z "
    },
    "\xe1\xbb\x85": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 503 728 l 392 868 l 283 728 l 203 728 l 333 928 l 450 928 l 585 728 l 503 728 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 472 947 q 408 969 431 947 q 367 1015 385 992 q 339 1050 353 1035 q 304 1065 325 1065 q 260 1040 278 1065 q 242 956 242 1014 l 171 956 q 206 1090 171 1039 q 310 1142 242 1142 q 373 1119 350 1142 q 414 1074 396 1097 q 443 1039 429 1054 q 478 1024 457 1024 q 522 1049 504 1024 q 539 1133 539 1075 l 611 1133 q 576 999 611 1050 q 472 947 540 947 z "
    },
    "\xe1\xbb\x87": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 506 772 l 394 913 l 286 772 l 206 772 l 336 972 l 453 972 l 588 772 l 506 772 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 m 397 -258 q 345 -237 367 -258 q 324 -185 324 -217 q 345 -133 324 -156 q 397 -111 367 -111 q 449 -133 428 -111 q 469 -185 469 -156 q 449 -237 469 -217 q 397 -258 428 -258 z "
    },
    "\xef\xac\x80": {
        ha: 822,
        x_min: 19,
        x_max: 856,
        o: "m 19 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 m 542 0 l 542 561 l 431 561 l 431 671 l 542 671 l 542 715 q 599 882 542 824 q 746 940 656 940 q 856 915 811 940 l 826 822 q 767 838 800 838 q 693 807 719 838 q 667 715 667 776 l 667 671 l 803 671 l 803 561 l 667 561 l 667 0 l 542 0 z "
    },
    "\xef\xac\x81": {
        ha: 735,
        x_min: 19,
        x_max: 653,
        o: "m 19 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 392 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 m 572 760 q 516 783 540 760 q 492 840 492 807 q 516 897 492 874 q 572 919 540 919 q 629 897 606 919 q 653 840 653 874 q 629 783 653 807 q 572 760 606 760 m 511 0 l 511 671 l 636 671 l 636 0 l 511 0 z "
    },
    "\xee\x80\x85": {
        ha: 735,
        x_min: 19,
        x_max: 653,
        o: "m 19 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 392 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 m 572 760 q 516 783 540 760 q 492 840 492 807 q 516 897 492 874 q 572 919 540 919 q 629 897 606 919 q 653 840 653 874 q 629 783 653 807 q 572 760 606 760 m 426 -272 q 350 -264 383 -272 l 365 -160 q 388 -164 375 -162 q 411 -165 400 -165 q 483 -140 454 -165 q 511 -53 511 -114 l 511 671 l 636 671 l 636 -53 q 583 -215 636 -157 q 426 -272 529 -272 z "
    },
    "\xef\xac\x82": {
        ha: 735,
        x_min: 19,
        x_max: 636,
        o: "m 19 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 392 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 m 511 0 l 511 926 l 636 926 l 636 0 l 511 0 z "
    },
    "\xef\xac\x83": {
        ha: 1146,
        x_min: 19,
        x_max: 1064,
        o: "m 19 0 m 542 0 l 542 561 l 431 561 l 431 671 l 542 671 l 542 715 q 599 882 542 824 q 746 940 656 940 q 856 915 811 940 l 826 822 q 767 838 803 838 q 693 807 719 838 q 667 715 667 776 l 667 671 l 803 671 l 803 561 l 667 561 l 667 0 l 542 0 m 983 760 q 927 783 951 760 q 903 840 903 807 q 927 897 903 874 q 983 919 951 919 q 1040 897 1017 919 q 1064 840 1064 874 q 1040 783 1064 807 q 983 760 1017 760 m 922 0 l 922 671 l 1047 671 l 1047 0 l 922 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 z "
    },
    "\xee\x80\x84": {
        ha: 1146,
        x_min: 19,
        x_max: 1064,
        o: "m 19 0 m 542 0 l 542 561 l 431 561 l 431 671 l 542 671 l 542 715 q 599 882 542 824 q 746 940 656 940 q 856 915 811 940 l 826 822 q 767 838 803 838 q 693 807 719 838 q 667 715 667 776 l 667 671 l 803 671 l 803 561 l 667 561 l 667 0 l 542 0 m 983 760 q 927 783 951 760 q 903 840 903 807 q 927 897 903 874 q 983 919 951 919 q 1040 897 1017 919 q 1064 840 1064 874 q 1040 783 1064 807 q 983 760 1017 760 m 838 -272 q 761 -264 794 -272 l 776 -160 q 799 -164 786 -162 q 822 -165 811 -165 q 894 -140 865 -165 q 922 -53 922 -114 l 922 671 l 1047 671 l 1047 -53 q 994 -215 1047 -157 q 838 -272 940 -272 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 z "
    },
    "\xef\xac\x84": {
        ha: 1146,
        x_min: 19,
        x_max: 1047,
        o: "m 19 0 m 542 0 l 542 561 l 431 561 l 431 671 l 542 671 l 542 715 q 599 882 542 824 q 746 940 656 940 q 856 915 811 940 l 826 822 q 767 838 803 838 q 693 807 719 838 q 667 715 667 776 l 667 671 l 803 671 l 803 561 l 667 561 l 667 0 l 542 0 m 922 0 l 922 926 l 1047 926 l 1047 0 l 922 0 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 z "
    },
    "\xe1\xb8\x9f": {
        ha: 411,
        x_min: 19,
        x_max: 444,
        o: "m 19 0 m 336 999 q 284 1019 306 999 q 263 1072 263 1040 q 284 1124 263 1101 q 336 1146 306 1146 q 388 1124 367 1146 q 408 1072 408 1101 q 388 1019 408 1040 q 336 999 367 999 m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 671 l 392 671 l 392 561 l 256 561 l 256 0 l 131 0 z "
    },
    "\xc4\x9d": {
        ha: 801,
        x_min: 58,
        x_max: 703,
        o: "m 58 0 m 515 772 l 404 913 l 296 772 l 215 772 l 346 972 l 463 972 l 597 772 l 515 772 m 369 -272 q 219 -251 285 -272 q 94 -172 154 -229 l 154 -81 q 248 -149 196 -129 q 369 -169 300 -169 q 446 -160 408 -169 q 513 -127 483 -150 q 560 -67 542 -104 q 578 22 578 -31 l 578 110 q 482 27 539 60 q 357 -6 425 -6 q 237 18 292 -6 q 142 86 182 42 q 81 195 103 131 q 58 342 58 260 q 81 486 58 422 q 142 595 103 550 q 237 664 182 640 q 357 688 292 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 26 q 674 -117 703 -60 q 598 -210 644 -175 q 492 -258 551 -244 q 369 -272 432 -272 m 392 106 q 500 135 449 106 q 578 206 551 165 l 578 478 q 500 547 551 518 q 392 576 449 576 q 307 559 344 576 q 243 510 269 542 q 203 436 217 479 q 189 342 189 393 q 203 246 189 289 q 243 172 217 203 q 307 123 269 140 q 392 106 344 106 z "
    },
    "\xc4\x9f": {
        ha: 801,
        x_min: 58,
        x_max: 703,
        o: "m 58 0 m 369 -272 q 219 -251 285 -272 q 94 -172 154 -229 l 154 -81 q 248 -149 196 -129 q 369 -169 300 -169 q 446 -160 408 -169 q 513 -127 483 -150 q 560 -67 542 -104 q 578 22 578 -31 l 578 110 q 482 27 539 60 q 357 -6 425 -6 q 237 18 292 -6 q 142 86 182 42 q 81 195 103 131 q 58 342 58 260 q 81 486 58 422 q 142 595 103 550 q 237 664 182 640 q 357 688 292 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 26 q 674 -117 703 -60 q 598 -210 644 -175 q 492 -258 551 -244 q 369 -272 432 -272 m 392 106 q 500 135 449 106 q 578 206 551 165 l 578 478 q 500 547 551 518 q 392 576 449 576 q 307 559 344 576 q 243 510 269 542 q 203 436 217 479 q 189 342 189 393 q 203 246 189 289 q 243 172 217 203 q 307 123 269 140 q 392 106 344 106 m 649 867 q 544 777 607 810 q 406 744 481 744 q 267 777 331 744 q 161 867 204 810 l 221 917 q 299 847 253 872 q 406 821 346 821 q 511 847 464 821 q 590 917 558 872 l 649 867 l 649 867 z "
    },
    "\xc4\xa1": {
        ha: 801,
        x_min: 58,
        x_max: 703,
        o: "m 58 0 m 369 -272 q 219 -251 285 -272 q 94 -172 154 -229 l 154 -81 q 248 -149 196 -129 q 369 -169 300 -169 q 446 -160 408 -169 q 513 -127 483 -150 q 560 -67 542 -104 q 578 22 578 -31 l 578 110 q 482 27 539 60 q 357 -6 425 -6 q 237 18 292 -6 q 142 86 182 42 q 81 195 103 131 q 58 342 58 260 q 81 486 58 422 q 142 595 103 550 q 237 664 182 640 q 357 688 292 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 26 q 674 -117 703 -60 q 598 -210 644 -175 q 492 -258 551 -244 q 369 -272 432 -272 m 392 106 q 500 135 449 106 q 578 206 551 165 l 578 478 q 500 547 551 518 q 392 576 449 576 q 307 559 344 576 q 243 510 269 542 q 203 436 217 479 q 189 342 189 393 q 203 246 189 289 q 243 172 217 203 q 307 123 269 140 q 392 106 344 106 m 404 767 q 352 788 374 767 q 331 840 331 808 q 352 892 331 869 q 404 914 374 914 q 456 892 435 914 q 476 840 476 869 q 456 788 476 808 q 404 767 435 767 z "
    },
    "\xc4\xa3": {
        ha: 801,
        x_min: 58,
        x_max: 703,
        o: "m 329 849 q 358 966 329 913 q 429 1050 386 1019 l 479 1010 q 426 960 451 992 q 397 897 400 928 q 401 898 399 897 q 406 899 403 899 q 453 878 431 899 q 475 831 475 858 q 454 780 475 801 q 403 758 433 758 q 353 779 376 758 q 329 849 329 800 m 369 -272 q 219 -251 285 -272 q 94 -172 154 -229 l 154 -81 q 248 -149 196 -129 q 369 -169 300 -169 q 446 -160 408 -169 q 513 -127 483 -150 q 560 -67 542 -104 q 578 22 578 -31 l 578 110 q 482 27 539 60 q 357 -6 425 -6 q 237 18 292 -6 q 142 86 182 42 q 81 195 103 131 q 58 342 58 260 q 81 486 58 422 q 142 595 103 550 q 237 664 182 640 q 357 688 292 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 26 q 674 -117 703 -60 q 598 -210 644 -175 q 492 -258 551 -244 q 369 -272 432 -272 m 392 106 q 500 135 449 106 q 578 206 551 165 l 578 478 q 500 547 551 518 q 392 576 449 576 q 307 559 344 576 q 243 510 269 542 q 203 436 217 479 q 189 342 189 393 q 203 246 189 289 q 243 172 217 203 q 307 123 269 140 q 392 106 344 106 z "
    },
    "\xc4\xa7": {
        ha: 781,
        x_min: 13,
        x_max: 681,
        o: "m 228 740 l 228 576 q 269 617 244 597 q 325 652 294 636 q 391 678 356 668 q 465 688 426 688 q 681 474 681 688 l 681 0 l 556 0 l 556 432 q 517 546 556 515 q 413 576 478 576 q 305 547 354 576 q 228 479 256 517 l 228 0 l 103 0 l 103 740 l 13 740 l 13 817 l 103 817 l 103 926 l 228 926 l 228 817 l 442 817 l 442 740 l 228 740 z "
    },
    "\xc4\xa5": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 500 1004 l 389 1144 l 281 1004 l 200 1004 l 331 1204 l 447 1204 l 582 1004 l 500 1004 m 553 0 l 553 432 q 514 546 553 515 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 926 l 225 926 l 225 576 q 267 617 242 597 q 322 652 292 636 q 388 678 353 668 q 463 688 424 688 q 678 474 678 688 l 678 0 l 553 0 z "
    },
    "\xe1\xb8\xa3": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 432 q 514 546 553 515 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 926 l 225 926 l 225 576 q 267 617 242 597 q 322 652 292 636 q 388 678 353 668 q 463 688 424 688 q 678 474 678 688 l 678 0 l 553 0 m 389 999 q 337 1019 358 999 q 315 1072 315 1040 q 337 1124 315 1101 q 389 1146 358 1146 q 440 1124 419 1146 q 461 1072 461 1101 q 440 1019 461 1040 q 389 999 419 999 z "
    },
    "\xc4\xb1": {
        ha: 324,
        x_min: 100,
        x_max: 225,
        o: "m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xc3\xad": {
        ha: 324,
        x_min: 81,
        x_max: 404,
        o: "m 81 0 m 172 772 l 81 772 l 281 972 l 404 972 l 172 772 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xc4\xad": {
        ha: 324,
        x_min: -81,
        x_max: 407,
        o: "m 0 0 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 407 867 q 302 777 365 810 q 164 744 239 744 q 26 777 89 744 q -81 867 -37 810 l -21 917 q 58 847 11 872 q 164 821 104 821 q 269 847 222 821 q 349 917 317 872 l 407 867 l 407 867 z "
    },
    "\xc3\xae": {
        ha: 324,
        x_min: -28,
        x_max: 354,
        o: "m 0 0 m 272 772 l 161 913 l 53 772 l -28 772 l 103 972 l 219 972 l 354 772 l 272 772 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xc3\xaf": {
        ha: 324,
        x_min: -54,
        x_max: 381,
        o: "m 0 0 m 381 842 q 359 790 381 811 q 307 768 338 768 q 255 790 276 768 q 233 842 233 811 q 255 893 233 872 q 307 914 276 914 q 359 893 338 914 q 381 842 381 872 m 90 842 q 69 790 90 811 q 18 768 49 768 q -33 790 -12 768 q -54 842 -54 811 q -33 893 -54 872 q 18 914 -12 914 q 69 893 49 914 q 90 842 90 872 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xc3\xac": {
        ha: 324,
        x_min: -79,
        x_max: 244,
        o: "m 0 0 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 153 772 l -79 972 l 44 972 l 244 772 l 153 772 z "
    },
    "\xc4\xab": {
        ha: 324,
        x_min: -89,
        x_max: 415,
        o: "m 0 0 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m -89 790 l -89 867 l 415 867 l 415 790 l -89 790 z "
    },
    "\xc4\xaf": {
        ha: 324,
        x_min: -21,
        x_max: 242,
        o: "m 224 -235 q 121 -258 185 -258 q 67 -252 93 -258 q 22 -233 42 -246 q -9 -199 3 -219 q -21 -153 -21 -179 q -8 -104 -21 -128 q 26 -61 4 -81 q 74 -26 47 -42 q 131 0 101 -11 l 100 0 l 100 671 l 225 671 l 225 0 l 224 0 q 128 -56 161 -25 q 96 -124 96 -86 q 111 -160 96 -147 q 149 -172 126 -172 q 171 -170 160 -172 q 193 -161 182 -168 l 224 -235 m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 z "
    },
    "\xc4\xa9": {
        ha: 324,
        x_min: -57,
        x_max: 383,
        o: "m 0 0 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 244 769 q 180 792 203 769 q 139 838 157 814 q 111 872 125 857 q 76 888 97 888 q 32 862 50 888 q 14 778 14 836 l -57 778 q -22 913 -57 861 q 82 964 14 964 q 145 942 122 964 q 186 896 168 919 q 215 861 201 876 q 250 846 229 846 q 294 872 276 846 q 311 956 311 897 l 383 956 q 348 821 383 872 q 244 769 313 769 z "
    },
    "\xe1\xbb\x89": {
        ha: 324,
        x_min: 58,
        x_max: 265,
        o: "m 58 0 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 58 828 q 96 883 69 861 q 163 904 122 904 q 234 881 203 904 q 265 807 265 858 q 259 768 265 785 q 240 733 253 751 l 179 733 q 203 769 196 751 q 210 804 210 786 q 197 843 210 831 q 163 856 183 856 q 108 813 124 856 l 58 828 z "
    },
    "\xe1\xbb\x8b": {
        ha: 324,
        x_min: 81,
        x_max: 242,
        o: "m 81 0 m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 163 -258 q 110 -237 132 -258 q 89 -185 89 -217 q 110 -133 89 -156 q 163 -111 132 -111 q 214 -133 193 -111 q 235 -185 235 -156 q 214 -237 235 -217 q 163 -258 193 -258 z "
    },
    "\xc4\xb3": {
        ha: 647,
        x_min: 81,
        x_max: 565,
        o: "m 81 0 m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 m 485 760 q 428 783 453 760 q 404 840 404 807 q 428 897 404 874 q 485 919 453 919 q 542 897 518 919 q 565 840 565 874 q 542 783 565 807 q 485 760 518 760 m 339 -272 q 263 -264 296 -272 l 278 -160 q 300 -164 288 -162 q 324 -165 313 -165 q 395 -140 367 -165 q 424 -53 424 -114 l 424 671 l 549 671 l 549 -53 q 495 -215 549 -157 q 339 -272 442 -272 z "
    },
    "\xc8\xb7": {
        ha: 324,
        x_min: -61,
        x_max: 225,
        o: "m 15 -272 q -61 -264 -28 -272 l -46 -160 q -24 -164 -36 -162 q 0 -165 -11 -165 q 72 -140 43 -165 q 100 -53 100 -114 l 100 671 l 225 671 l 225 -53 q 172 -215 225 -157 q 15 -272 118 -272 z "
    },
    "\xc4\xb5": {
        ha: 324,
        x_min: -61,
        x_max: 357,
        o: "m 0 0 m 275 772 l 164 913 l 56 772 l -25 772 l 106 972 l 222 972 l 357 772 l 275 772 m 15 -272 q -61 -264 -28 -272 l -46 -160 q -24 -164 -36 -162 q 0 -165 -11 -165 q 72 -140 43 -165 q 100 -53 100 -114 l 100 671 l 225 671 l 225 -53 q 172 -215 225 -157 q 15 -272 118 -272 z "
    },
    "\xc4\xb7": {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 100 0 m 446 -192 q 416 -301 446 -250 q 342 -383 386 -351 l 292 -344 q 347 -292 322 -325 q 375 -228 371 -258 q 367 -230 372 -229 q 357 -231 361 -231 q 312 -212 329 -231 q 294 -164 294 -193 q 315 -114 294 -135 q 364 -93 335 -93 q 421 -119 396 -93 q 446 -192 446 -144 m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 926 l 225 926 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    "\xc4\xb8": {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 671 l 225 671 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    "\xc4\xba": {
        ha: 324,
        x_min: 81,
        x_max: 404,
        o: "m 81 0 m 172 1004 l 81 1004 l 281 1204 l 404 1204 l 172 1004 m 100 0 l 100 926 l 225 926 l 225 0 l 100 0 z "
    },
    "\xc4\xbc": {
        ha: 324,
        x_min: 93,
        x_max: 247,
        o: "m 93 0 m 247 -192 q 217 -301 247 -250 q 143 -383 188 -351 l 93 -344 q 148 -292 124 -325 q 176 -228 172 -258 q 168 -230 174 -229 q 158 -231 163 -231 q 113 -212 131 -231 q 96 -164 96 -193 q 116 -114 96 -135 q 165 -93 136 -93 q 222 -119 197 -93 q 247 -192 247 -144 m 100 0 l 100 926 l 225 926 l 225 0 l 100 0 z "
    },
    "\xc4\xbe": {
        ha: 429,
        x_min: 100,
        x_max: 457,
        o: "m 100 0 m 457 846 q 427 737 457 788 q 353 654 397 686 l 303 693 q 358 746 333 713 q 386 810 382 779 q 378 808 383 808 q 368 807 372 807 q 323 826 340 807 q 306 874 306 844 q 326 924 306 903 q 375 944 346 944 q 432 919 407 944 q 457 846 457 893 m 100 0 l 100 926 l 225 926 l 225 0 l 100 0 z "
    },
    "\xc5\x80": {
        ha: 457,
        x_min: 100,
        x_max: 476,
        o: "m 100 0 m 100 0 l 100 926 l 225 926 l 225 0 l 100 0 m 476 339 q 451 278 476 304 q 389 253 425 253 q 328 278 353 253 q 303 339 303 304 q 328 401 303 375 q 389 426 353 426 q 451 401 425 426 q 476 339 476 375 z "
    },
    "\xc5\x82": {
        ha: 407,
        x_min: 14,
        x_max: 392,
        o: "m 14 403 l 142 476 l 142 926 l 267 926 l 267 549 l 392 621 l 392 525 l 267 453 l 267 0 l 142 0 l 142 381 l 14 307 l 14 403 z "
    },
    "\xc5\x84": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 397 772 l 306 772 l 506 972 l 629 972 l 397 772 m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 z "
    },
    "\xc5\x89": {
        ha: 776,
        x_min: 76,
        x_max: 678,
        o: "m 76 0 m 231 942 q 201 833 231 883 q 126 750 171 782 l 76 789 q 131 842 107 808 q 160 906 156 875 q 151 903 157 904 q 142 903 146 903 q 97 922 114 903 q 79 969 79 940 q 99 1019 79 999 q 149 1040 119 1040 q 206 1015 181 1040 q 231 942 231 989 m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 z "
    },
    "\xc5\x88": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 333 772 l 199 972 l 279 972 l 392 831 l 499 972 l 581 972 l 450 772 l 333 772 m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 z "
    },
    "\xc5\x86": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 468 -192 q 438 -301 468 -250 q 364 -383 408 -351 l 314 -344 q 369 -292 344 -325 q 397 -228 393 -258 q 389 -230 394 -229 q 379 -231 383 -231 q 334 -212 351 -231 q 317 -164 317 -193 q 337 -114 317 -135 q 386 -93 357 -93 q 443 -119 418 -93 q 468 -192 468 -144 m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 z "
    },
    "\xc3\xb1": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 0 l 553 0 m 471 769 q 406 792 429 769 q 365 838 383 814 q 338 872 351 857 q 303 888 324 888 q 258 862 276 888 q 240 778 240 836 l 169 778 q 205 913 169 861 q 308 964 240 964 q 372 942 349 964 q 413 896 394 919 q 442 861 428 876 q 476 846 456 846 q 520 872 503 846 q 538 956 538 897 l 610 956 q 574 821 610 872 q 471 769 539 769 z "
    },
    "\xc5\x8b": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 678 -53 q 624 -215 678 -157 q 468 -272 571 -272 q 392 -264 425 -272 l 407 -160 q 429 -164 417 -162 q 453 -165 442 -165 q 524 -140 496 -165 q 553 -53 553 -114 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 -53 z "
    },
    "\xc3\xb3": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 408 772 l 317 772 l 517 972 l 640 972 l 408 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xc5\x8f": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 642 867 q 537 777 600 810 q 399 744 474 744 q 260 777 324 744 q 154 867 197 810 l 214 917 q 292 847 246 872 q 399 821 339 821 q 504 847 457 821 q 583 917 551 872 l 642 867 l 642 867 z "
    },
    "\xc3\xb4": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 507 772 l 396 913 l 288 772 l 207 772 l 338 972 l 454 972 l 589 772 l 507 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xc3\xb6": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 615 842 q 594 790 615 811 q 542 768 572 768 q 490 790 511 768 q 468 842 468 811 q 490 893 468 872 q 542 914 511 914 q 594 893 572 914 q 615 842 615 872 m 325 842 q 304 790 325 811 q 253 768 283 768 q 201 790 222 768 q 181 842 181 811 q 201 893 181 872 q 253 914 222 914 q 304 893 283 914 q 325 842 325 872 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xc3\xb2": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 389 772 l 157 972 l 281 972 l 481 772 l 389 772 z "
    },
    "\xc5\x91": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 317 772 l 239 772 l 367 972 l 476 972 l 317 772 m 517 772 l 439 772 l 567 972 l 676 972 l 517 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xc5\x8d": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 146 790 l 146 867 l 650 867 l 650 790 l 146 790 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xc3\xb8": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 79 0 l 149 86 q 81 199 104 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 502 673 454 688 q 589 632 550 658 l 621 671 l 707 671 l 640 589 q 711 476 686 540 q 736 336 736 411 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 289 -1 339 -17 q 199 43 239 15 l 164 0 l 79 0 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 561 490 606 425 l 274 136 q 329 106 299 117 q 397 94 360 94 m 189 336 q 229 186 189 250 l 515 539 q 462 567 492 557 q 397 576 432 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 z "
    },
    "\xc7\xbf": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 408 772 l 317 772 l 517 972 l 640 972 l 408 772 m 79 0 l 149 86 q 81 199 104 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 502 673 454 688 q 589 632 550 658 l 621 671 l 707 671 l 640 589 q 711 476 686 540 q 736 336 736 411 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 289 -1 339 -17 q 199 43 239 15 l 164 0 l 79 0 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 561 490 606 425 l 274 136 q 329 106 299 117 q 397 94 360 94 m 189 336 q 229 186 189 250 l 515 539 q 462 567 492 557 q 397 576 432 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 z "
    },
    "\xc3\xb5": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 479 769 q 415 792 438 769 q 374 838 392 814 q 346 872 360 857 q 311 888 332 888 q 267 862 285 888 q 249 778 249 836 l 178 778 q 213 913 178 861 q 317 964 249 964 q 380 942 357 964 q 421 896 403 919 q 450 861 436 876 q 485 846 464 846 q 528 872 511 846 q 546 956 546 897 l 618 956 q 583 821 618 872 q 479 769 547 769 z "
    },
    "\xe1\xbb\x8d": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 399 -258 q 347 -237 368 -258 q 325 -185 325 -217 q 347 -133 325 -156 q 399 -111 368 -111 q 450 -133 429 -111 q 471 -185 471 -156 q 450 -237 471 -217 q 399 -258 429 -258 z "
    },
    "\xe1\xbb\x8f": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 294 828 q 332 883 306 861 q 399 904 358 904 q 470 881 439 904 q 501 807 501 858 q 495 768 501 785 q 476 733 489 751 l 415 733 q 439 769 432 751 q 446 804 446 786 q 433 843 446 831 q 399 856 419 856 q 344 813 360 856 l 294 828 z "
    },
    "\xe1\xbb\x91": {
        ha: 794,
        x_min: 58,
        x_max: 858,
        o: "m 58 0 m 507 772 l 396 913 l 288 772 l 207 772 l 338 972 l 454 972 l 589 772 l 507 772 m 626 869 l 535 869 l 735 1069 l 858 1069 l 626 869 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xe1\xbb\x93": {
        ha: 794,
        x_min: -65,
        x_max: 736,
        o: "m 0 0 m 507 772 l 396 913 l 288 772 l 207 772 l 338 972 l 454 972 l 589 772 l 507 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 167 869 l -65 1069 l 58 1069 l 258 869 l 167 869 z "
    },
    "\xe1\xbb\x95": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 507 772 l 396 913 l 288 772 l 207 772 l 338 972 l 454 972 l 589 772 l 507 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 424 1021 q 461 1076 435 1054 q 528 1097 488 1097 q 599 1074 568 1097 q 631 1000 631 1051 q 624 961 631 978 q 606 926 618 944 l 544 926 q 568 962 561 944 q 575 997 575 979 q 562 1036 575 1024 q 528 1049 549 1049 q 474 1006 489 1049 l 424 1021 z "
    },
    "\xe1\xbb\x97": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 506 728 l 394 868 l 286 728 l 206 728 l 336 928 l 453 928 l 588 728 l 506 728 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 476 947 q 412 969 435 947 q 371 1015 389 992 q 343 1050 357 1035 q 308 1065 329 1065 q 264 1040 282 1065 q 246 956 246 1014 l 175 956 q 210 1090 175 1039 q 314 1142 246 1142 q 377 1119 354 1142 q 418 1074 400 1097 q 447 1039 433 1054 q 482 1024 461 1024 q 526 1049 508 1024 q 543 1133 543 1075 l 615 1133 q 580 999 615 1050 q 476 947 544 947 z "
    },
    "\xe1\xbb\x99": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 507 772 l 396 913 l 288 772 l 207 772 l 338 972 l 454 972 l 589 772 l 507 772 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 399 -258 q 347 -237 368 -258 q 325 -185 325 -217 q 347 -133 325 -156 q 399 -111 368 -111 q 450 -133 429 -111 q 471 -185 471 -156 q 450 -237 471 -217 q 399 -258 429 -258 z "
    },
    "\xc6\xa1": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xe1\xbb\x9b": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 58 0 m 408 772 l 317 772 l 517 972 l 640 972 l 408 772 m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xe1\xbb\x9d": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 58 0 m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 389 772 l 157 972 l 281 972 l 481 772 l 389 772 z "
    },
    "\xe1\xbb\x9f": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 58 0 m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 294 828 q 332 883 306 861 q 399 904 358 904 q 470 881 439 904 q 501 807 501 858 q 495 768 501 785 q 476 733 489 751 l 415 733 q 439 769 432 751 q 446 804 446 786 q 433 843 446 831 q 399 856 419 856 q 344 813 360 856 l 294 828 z "
    },
    "\xe1\xbb\xa1": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 58 0 m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 479 769 q 415 792 438 769 q 374 838 392 814 q 346 872 360 857 q 311 888 332 888 q 267 862 285 888 q 249 778 249 836 l 178 778 q 213 913 178 861 q 317 964 249 964 q 380 942 357 964 q 421 896 403 919 q 450 861 436 876 q 485 846 464 846 q 528 872 511 846 q 546 956 546 897 l 618 956 q 583 821 618 872 q 479 769 547 769 z "
    },
    "\xe1\xbb\xa3": {
        ha: 794,
        x_min: 58,
        x_max: 742,
        o: "m 58 0 m 742 738 q 718 642 742 686 q 658 568 694 599 q 716 462 696 521 q 736 336 736 403 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 521 666 465 688 q 619 608 576 644 q 658 654 643 628 q 678 706 674 681 q 661 703 672 703 q 619 719 636 703 q 603 764 603 736 q 622 809 603 790 q 668 828 640 828 q 719 805 697 828 q 742 738 742 782 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 m 399 -258 q 347 -237 368 -258 q 325 -185 325 -217 q 347 -133 325 -156 q 399 -111 368 -111 q 450 -133 429 -111 q 471 -185 471 -156 q 450 -237 471 -217 q 399 -258 429 -258 z "
    },
    "\xc5\x93": {
        ha: 1324,
        x_min: 58,
        x_max: 1267,
        o: "m 738 294 q 758 214 742 251 q 804 148 775 176 q 874 103 833 119 q 964 86 914 86 q 1072 106 1018 86 q 1164 165 1125 126 l 1222 83 q 1102 9 1171 35 q 953 -17 1033 -17 q 844 1 890 -17 q 763 44 797 18 q 706 103 729 71 q 669 163 683 135 q 634 105 656 136 q 580 47 613 74 q 502 1 547 19 q 397 -17 457 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 502 669 457 688 q 581 623 547 650 q 636 565 614 596 q 671 507 658 533 q 706 565 683 533 q 761 624 728 597 q 839 669 794 651 q 942 688 883 688 q 1077 660 1017 688 q 1180 583 1138 632 q 1244 468 1222 535 q 1267 325 1267 401 l 1267 294 l 738 294 m 1146 385 q 1132 453 1144 418 q 1094 518 1119 489 q 1031 566 1069 547 q 940 585 993 585 q 853 567 890 585 q 790 519 815 549 q 751 455 765 490 q 736 385 738 419 l 1146 385 m 606 336 q 592 430 606 386 q 551 506 578 474 q 485 558 524 539 q 397 576 446 576 q 310 558 349 576 q 245 506 272 539 q 203 430 218 474 q 189 336 189 386 q 203 242 189 286 q 245 165 218 197 q 310 113 272 132 q 397 93 349 93 q 485 113 446 93 q 551 165 524 132 q 592 242 578 197 q 606 336 606 286 z "
    },
    "\xe1\xb9\x97": {
        ha: 799,
        x_min: 100,
        x_max: 743,
        o: "m 100 0 m 444 -17 q 322 13 378 -17 q 225 97 265 42 l 225 -256 l 100 -256 l 100 671 l 225 671 l 225 575 q 319 656 261 625 q 444 688 376 688 q 565 663 510 688 q 659 594 619 639 q 721 483 699 549 q 743 336 743 418 q 721 189 743 254 q 659 78 699 124 q 565 8 619 32 q 444 -17 510 -17 m 411 94 q 495 113 458 94 q 558 163 532 131 q 599 239 585 194 q 613 336 613 283 q 599 432 613 388 q 558 508 585 476 q 495 558 532 540 q 411 576 458 576 q 302 547 354 576 q 225 478 250 518 l 225 193 q 301 124 250 153 q 411 94 353 94 m 408 767 q 356 788 378 767 q 335 840 335 808 q 356 892 335 869 q 408 914 378 914 q 460 892 439 914 q 481 840 481 869 q 460 788 481 808 q 408 767 439 767 z "
    },
    "\xc5\x95": {
        ha: 469,
        x_min: 100,
        x_max: 514,
        o: "m 100 0 m 282 772 l 190 772 l 390 972 l 514 972 l 282 772 m 100 0 l 100 671 l 225 671 l 225 568 q 321 652 264 618 q 444 686 378 686 l 444 560 q 401 564 425 564 q 351 556 378 564 q 301 534 325 547 q 256 503 276 521 q 225 467 236 485 l 225 0 l 100 0 z "
    },
    "\xc5\x99": {
        ha: 469,
        x_min: 79,
        x_max: 461,
        o: "m 79 0 m 214 772 l 79 972 l 160 972 l 272 831 l 379 972 l 461 972 l 331 772 l 214 772 m 100 0 l 100 671 l 225 671 l 225 568 q 321 652 264 618 q 444 686 378 686 l 444 560 q 401 564 425 564 q 351 556 378 564 q 301 534 325 547 q 256 503 276 521 q 225 467 236 485 l 225 0 l 100 0 z "
    },
    "\xc5\x97": {
        ha: 469,
        x_min: 100,
        x_max: 444,
        o: "m 100 0 m 319 -192 q 290 -301 319 -250 q 215 -383 260 -351 l 165 -344 q 220 -292 196 -325 q 249 -228 244 -258 q 240 -230 246 -229 q 231 -231 235 -231 q 185 -212 203 -231 q 168 -164 168 -193 q 188 -114 168 -135 q 238 -93 208 -93 q 294 -119 269 -93 q 319 -192 319 -144 m 100 0 l 100 671 l 225 671 l 225 568 q 321 652 264 618 q 444 686 378 686 l 444 560 q 401 564 425 564 q 351 556 378 564 q 301 534 325 547 q 256 503 276 521 q 225 467 236 485 l 225 0 l 100 0 z "
    },
    "\xc5\x9b": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 331 772 l 239 772 l 439 972 l 563 972 l 331 772 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    "\xc5\xa1": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 265 772 l 131 972 l 211 972 l 324 831 l 431 972 l 513 972 l 382 772 l 265 772 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    "\xc5\x9d": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 431 772 l 319 913 l 211 772 l 131 772 l 261 972 l 378 972 l 513 772 l 431 772 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    "\xc5\x9f": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 318 -268 q 234 -255 272 -268 q 175 -225 196 -242 l 203 -167 q 258 -197 229 -187 q 315 -207 288 -207 q 372 -194 347 -207 q 397 -153 397 -181 q 347 -108 397 -108 q 299 -129 317 -108 l 246 -100 l 278 -15 q 147 17 207 -8 q 42 88 86 42 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 529 49 592 106 q 346 -15 467 -8 l 322 -75 q 374 -60 344 -60 q 440 -85 414 -60 q 465 -154 465 -111 q 423 -237 465 -207 q 318 -268 381 -268 z "
    },
    "\xc8\x99": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 414 -192 q 384 -301 414 -250 q 310 -383 354 -351 l 260 -344 q 315 -292 290 -325 q 343 -228 339 -258 q 335 -230 340 -229 q 325 -231 329 -231 q 280 -212 297 -231 q 263 -164 263 -193 q 283 -114 263 -135 q 332 -93 303 -93 q 389 -119 364 -93 q 414 -192 414 -144 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    "\xe1\xb9\xa1": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 m 325 767 q 273 788 294 767 q 251 840 251 808 q 273 892 251 869 q 325 914 294 914 q 376 892 356 914 q 397 840 397 869 q 376 788 397 808 q 325 767 356 767 z "
    },
    "\xc3\x9f": {
        ha: 847,
        x_min: 100,
        x_max: 822,
        o: "m 822 190 q 805 110 822 149 q 754 44 788 72 q 672 0 721 17 q 557 -17 622 -17 q 468 -8 507 -17 q 399 15 429 0 q 342 49 368 29 q 294 92 317 69 l 354 179 q 437 113 383 140 q 557 85 490 85 q 666 116 631 85 q 701 188 701 147 q 689 227 701 211 q 655 255 676 243 q 605 275 633 267 q 546 292 576 283 q 465 314 506 301 q 390 348 424 326 q 335 403 357 369 q 314 490 314 438 q 324 547 314 522 q 351 591 335 571 q 389 626 368 611 q 431 656 410 642 q 485 696 463 676 q 507 742 507 715 q 495 779 507 763 q 465 807 483 796 q 424 824 447 818 q 378 829 400 829 q 269 791 314 829 q 225 683 225 753 l 225 0 l 100 0 l 100 683 q 119 783 100 736 q 175 865 139 831 q 263 920 211 900 q 381 940 315 940 q 476 928 431 940 q 558 892 522 915 q 614 834 593 868 q 635 757 635 800 q 624 701 635 725 q 597 659 614 678 q 560 626 581 640 q 519 597 540 611 q 460 551 486 574 q 433 493 433 528 q 445 458 433 472 q 477 435 457 444 q 524 417 497 425 q 579 403 550 410 q 664 381 621 393 q 742 345 707 368 q 800 285 778 322 q 822 190 822 249 z "
    },
    "\xc5\xbf": {
        ha: 411,
        x_min: 19,
        x_max: 444,
        o: "m 131 0 l 131 561 l 19 561 l 19 671 l 131 671 l 131 715 q 188 882 131 824 q 335 940 244 940 q 444 915 400 940 l 415 822 q 356 838 389 838 q 282 807 308 838 q 256 715 256 776 l 256 0 l 131 0 z "
    },
    "\xc5\xa7": {
        ha: 425,
        x_min: 14,
        x_max: 415,
        o: "m 285 -17 q 165 26 206 -17 q 125 149 125 69 l 125 307 l 14 307 l 14 383 l 125 383 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 383 l 347 383 l 347 307 l 250 307 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 285 -17 333 -17 z "
    },
    "\xc5\xa5": {
        ha: 461,
        x_min: 14,
        x_max: 483,
        o: "m 14 0 m 483 942 q 453 833 483 883 q 379 750 424 782 l 329 789 q 384 842 360 808 q 413 906 408 875 q 404 903 410 904 q 394 903 399 903 q 349 922 367 903 q 332 969 332 940 q 352 1019 332 999 q 401 1040 372 1040 q 458 1015 433 1040 q 483 942 483 989 m 285 -17 q 165 26 206 -17 q 125 149 125 69 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 285 -17 333 -17 z "
    },
    "\xc5\xa3": {
        ha: 425,
        x_min: 14,
        x_max: 415,
        o: "m 258 -268 q 174 -255 213 -268 q 115 -225 136 -242 l 143 -167 q 199 -197 169 -187 q 256 -207 228 -207 q 313 -194 288 -207 q 338 -153 338 -181 q 288 -108 338 -108 q 239 -129 257 -108 l 186 -100 l 221 -7 q 125 149 125 22 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 286 -17 335 -17 l 263 -75 q 314 -60 285 -60 q 380 -85 354 -60 q 406 -154 406 -111 q 363 -237 406 -207 q 258 -268 321 -268 z "
    },
    "\xc8\x9b": {
        ha: 425,
        x_min: 14,
        x_max: 415,
        o: "m 14 0 m 297 -192 q 267 -301 297 -250 q 193 -383 238 -351 l 143 -344 q 198 -292 174 -325 q 226 -228 222 -258 q 218 -230 224 -229 q 208 -231 213 -231 q 163 -212 181 -231 q 146 -164 146 -193 q 166 -114 146 -135 q 215 -93 186 -93 q 272 -119 247 -93 q 297 -192 297 -144 m 285 -17 q 165 26 206 -17 q 125 149 125 69 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 285 -17 333 -17 z "
    },
    "\xe1\xb9\xab": {
        ha: 425,
        x_min: 14,
        x_max: 415,
        o: "m 14 0 m 285 -17 q 165 26 206 -17 q 125 149 125 69 l 125 561 l 14 561 l 14 671 l 125 671 l 125 854 l 250 854 l 250 671 l 386 671 l 386 561 l 250 561 l 250 176 q 267 117 250 140 q 315 94 283 94 q 356 102 338 94 q 383 121 374 110 l 415 26 q 365 -5 396 7 q 285 -17 333 -17 m 196 999 q 144 1019 165 999 q 122 1072 122 1040 q 144 1124 122 1101 q 196 1146 165 1146 q 247 1124 226 1146 q 268 1072 268 1101 q 247 1019 268 1040 q 196 999 226 999 z "
    },
    "\xc3\xba": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 397 772 l 306 772 l 506 972 l 629 972 l 397 772 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 z "
    },
    "\xc5\xad": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 632 867 q 527 777 590 810 q 389 744 464 744 q 251 777 314 744 q 144 867 188 810 l 204 917 q 283 847 236 872 q 389 821 329 821 q 494 847 447 821 q 574 917 542 872 l 632 867 l 632 867 z "
    },
    "\xc3\xbb": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 497 772 l 386 913 l 278 772 l 197 772 l 328 972 l 444 972 l 579 772 l 497 772 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 z "
    },
    "\xc3\xbc": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 606 842 q 584 790 606 811 q 532 768 563 768 q 480 790 501 768 q 458 842 458 811 q 480 893 458 872 q 532 914 501 914 q 584 893 563 914 q 606 842 606 872 m 315 842 q 294 790 315 811 q 243 768 274 768 q 192 790 213 768 q 171 842 171 811 q 192 893 171 872 q 243 914 213 914 q 294 893 274 914 q 315 842 315 872 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 z "
    },
    "\xc3\xb9": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 378 772 l 146 972 l 269 972 l 469 772 l 378 772 z "
    },
    "\xc5\xb1": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 308 772 l 231 772 l 358 972 l 468 972 l 308 772 m 508 772 l 431 772 l 558 972 l 668 972 l 508 772 z "
    },
    "\xc5\xab": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 135 790 l 135 867 l 639 867 l 639 790 l 135 790 z "
    },
    "\xc5\xb3": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 678 0 q 583 -56 615 -25 q 550 -124 550 -86 q 565 -160 550 -147 q 603 -172 581 -172 q 625 -170 614 -172 q 647 -161 636 -168 l 678 -235 q 575 -258 639 -258 q 522 -252 547 -258 q 476 -233 496 -246 q 445 -199 457 -219 q 433 -153 433 -179 q 446 -104 433 -128 q 480 -61 458 -81 q 528 -26 501 -42 q 585 0 556 -11 l 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 678 0 z "
    },
    "\xc5\xaf": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 389 749 q 335 760 360 749 q 291 790 310 771 q 261 835 272 810 q 250 889 250 860 q 261 943 250 918 q 291 988 272 968 q 335 1018 310 1007 q 389 1029 360 1029 q 443 1018 418 1029 q 487 988 468 1007 q 516 943 506 968 q 526 889 526 918 q 516 835 526 860 q 487 790 506 810 q 443 760 468 771 q 389 749 418 749 m 389 811 q 443 834 421 811 q 465 889 465 857 q 443 943 465 921 q 389 965 421 965 q 335 943 357 965 q 313 889 313 921 q 335 834 313 857 q 389 811 357 811 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 z "
    },
    "\xc5\xa9": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 469 769 q 405 792 428 769 q 364 838 382 814 q 336 872 350 857 q 301 888 322 888 q 257 862 275 888 q 239 778 239 836 l 168 778 q 203 913 168 861 q 307 964 239 964 q 370 942 347 964 q 411 896 393 919 q 440 861 426 876 q 475 846 454 846 q 519 872 501 846 q 536 956 536 897 l 608 956 q 573 821 608 872 q 469 769 538 769 z "
    },
    "\xe1\xbb\xa5": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 390 -258 q 338 -237 360 -258 q 317 -185 317 -217 q 338 -133 317 -156 q 390 -111 360 -111 q 442 -133 421 -111 q 463 -185 463 -156 q 442 -237 463 -217 q 390 -258 421 -258 z "
    },
    "\xc6\xb0": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 z "
    },
    "\xe1\xbb\xa7": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 0 l 553 0 m 285 828 q 322 883 296 861 q 389 904 349 904 q 460 881 429 904 q 492 807 492 858 q 485 768 492 785 q 467 733 479 751 l 406 733 q 429 769 422 751 q 436 804 436 786 q 423 843 436 831 q 389 856 410 856 q 335 813 350 856 l 285 828 z "
    },
    "\xe1\xbb\xa9": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 100 0 m 397 772 l 306 772 l 506 972 l 629 972 l 397 772 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 z "
    },
    "\xe1\xbb\xab": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 100 0 m 378 772 l 146 972 l 269 972 l 469 772 l 378 772 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 z "
    },
    "\xe1\xbb\xad": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 100 0 m 285 828 q 322 883 296 861 q 389 904 349 904 q 460 881 429 904 q 492 807 492 858 q 485 768 492 785 q 467 733 479 751 l 406 733 q 429 769 422 751 q 436 804 436 786 q 423 843 436 831 q 389 856 410 856 q 335 813 350 856 l 285 828 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 z "
    },
    "\xe1\xbb\xaf": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 100 0 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 m 469 769 q 405 792 428 769 q 364 838 382 814 q 336 872 350 857 q 301 888 322 888 q 257 862 275 888 q 239 778 239 836 l 168 778 q 203 913 168 861 q 307 964 239 964 q 370 942 347 964 q 411 896 393 919 q 440 861 426 876 q 475 846 454 846 q 519 872 501 846 q 536 956 536 897 l 608 956 q 573 821 608 872 q 469 769 538 769 z "
    },
    "\xe1\xbb\xb1": {
        ha: 776,
        x_min: 100,
        x_max: 803,
        o: "m 100 0 m 390 -258 q 338 -237 360 -258 q 317 -185 317 -217 q 338 -133 317 -156 q 390 -111 360 -111 q 442 -133 421 -111 q 463 -185 463 -156 q 442 -237 463 -217 q 390 -258 421 -258 m 553 0 l 553 92 q 453 17 514 50 q 314 -17 392 -17 q 100 197 100 -17 l 100 671 l 225 671 l 225 239 q 263 125 225 156 q 367 94 301 94 q 475 123 425 94 q 553 189 525 151 l 553 671 l 678 671 l 678 615 q 718 662 701 635 q 738 717 735 689 q 731 715 736 715 q 722 714 725 714 q 679 731 696 714 q 663 775 663 747 q 681 820 663 801 q 728 839 700 839 q 781 816 758 839 q 803 749 803 793 q 769 638 803 690 q 678 550 736 585 l 678 0 l 553 0 z "
    },
    "\xe1\xba\x83": {
        ha: 1033,
        x_min: 11,
        x_max: 1022,
        o: "m 11 0 m 526 772 l 435 772 l 635 972 l 758 972 l 526 772 m 682 0 l 517 515 l 351 0 l 222 0 l 11 671 l 142 671 l 294 160 l 463 671 l 571 671 l 739 160 l 892 671 l 1022 671 l 811 0 l 682 0 z "
    },
    "\xc5\xb5": {
        ha: 1033,
        x_min: 11,
        x_max: 1022,
        o: "m 11 0 m 626 772 l 515 913 l 407 772 l 326 772 l 457 972 l 574 972 l 708 772 l 626 772 m 682 0 l 517 515 l 351 0 l 222 0 l 11 671 l 142 671 l 294 160 l 463 671 l 571 671 l 739 160 l 892 671 l 1022 671 l 811 0 l 682 0 z "
    },
    "\xe1\xba\x85": {
        ha: 1033,
        x_min: 11,
        x_max: 1022,
        o: "m 11 0 m 733 842 q 712 790 733 811 q 660 768 690 768 q 608 790 629 768 q 586 842 586 811 q 608 893 586 872 q 660 914 629 914 q 712 893 690 914 q 733 842 733 872 m 443 842 q 422 790 443 811 q 371 768 401 768 q 319 790 340 768 q 299 842 299 811 q 319 893 299 872 q 371 914 340 914 q 422 893 401 914 q 443 842 443 872 m 682 0 l 517 515 l 351 0 l 222 0 l 11 671 l 142 671 l 294 160 l 463 671 l 571 671 l 739 160 l 892 671 l 1022 671 l 811 0 l 682 0 z "
    },
    "\xe1\xba\x81": {
        ha: 1033,
        x_min: 11,
        x_max: 1022,
        o: "m 11 0 m 682 0 l 517 515 l 351 0 l 222 0 l 11 671 l 142 671 l 294 160 l 463 671 l 571 671 l 739 160 l 892 671 l 1022 671 l 811 0 l 682 0 m 507 772 l 275 972 l 399 972 l 599 772 l 507 772 z "
    },
    "\xc3\xbd": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 m 354 772 l 263 772 l 463 972 l 586 972 l 354 772 z "
    },
    "\xc5\xb7": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 m 454 772 l 343 913 l 235 772 l 154 772 l 285 972 l 401 972 l 536 772 l 454 772 z "
    },
    "\xc3\xbf": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 m 563 842 q 541 790 563 811 q 489 768 519 768 q 437 790 458 768 q 415 842 415 811 q 437 893 415 872 q 489 914 458 914 q 541 893 519 914 q 563 842 563 872 m 272 842 q 251 790 272 811 q 200 768 231 768 q 149 790 169 768 q 128 842 128 811 q 149 893 128 872 q 200 914 169 914 q 251 893 231 914 q 272 842 272 872 z "
    },
    "\xe1\xbb\xb3": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 m 335 772 l 103 972 l 226 972 l 426 772 l 335 772 z "
    },
    "\xc5\xba": {
        ha: 658,
        x_min: 68,
        x_max: 589,
        o: "m 68 0 m 338 772 l 246 772 l 446 972 l 569 972 l 338 772 m 68 0 l 68 96 l 418 561 l 68 561 l 68 671 l 583 671 l 583 578 l 231 108 l 589 108 l 589 0 l 68 0 z "
    },
    "\xc5\xbe": {
        ha: 658,
        x_min: 68,
        x_max: 589,
        o: "m 68 0 m 267 772 l 132 972 l 213 972 l 325 831 l 432 972 l 514 972 l 383 772 l 267 772 m 68 0 l 68 96 l 418 561 l 68 561 l 68 671 l 583 671 l 583 578 l 231 108 l 589 108 l 589 0 l 68 0 z "
    },
    "\xc5\xbc": {
        ha: 658,
        x_min: 68,
        x_max: 589,
        o: "m 68 0 m 68 0 l 68 96 l 418 561 l 68 561 l 68 671 l 583 671 l 583 578 l 231 108 l 589 108 l 589 0 l 68 0 m 326 767 q 274 788 296 767 q 253 840 253 808 q 274 892 253 869 q 326 914 296 914 q 378 892 357 914 q 399 840 399 869 q 378 788 399 808 q 326 767 357 767 z "
    },
    "\xc3\xb0": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 135 744 l 294 814 q 244 846 269 831 q 194 876 219 861 l 264 979 q 346 927 306 954 q 424 871 386 900 l 571 936 l 599 872 l 485 822 q 587 720 540 774 q 667 607 633 667 q 718 482 700 547 q 736 344 736 417 q 713 200 736 267 q 645 85 689 133 q 539 10 601 38 q 397 -17 476 -17 q 258 9 321 -17 q 151 80 196 35 q 83 187 107 125 q 58 321 58 249 q 81 455 58 393 q 144 561 104 517 q 240 631 185 606 q 363 657 296 657 q 483 628 429 657 q 582 533 538 599 q 489 658 546 600 q 361 768 432 717 l 161 679 l 135 744 m 397 94 q 486 113 447 94 q 551 162 525 131 q 592 234 578 193 q 606 321 606 275 q 592 406 606 365 q 551 478 578 447 q 486 528 525 510 q 397 547 447 547 q 308 528 347 547 q 243 478 269 510 q 203 406 217 447 q 189 321 189 365 q 203 234 189 275 q 243 162 217 193 q 308 113 269 131 q 397 94 347 94 z "
    },
    "\xc3\xbe": {
        ha: 799,
        x_min: 100,
        x_max: 743,
        o: "m 444 -17 q 322 13 378 -17 q 225 97 265 42 l 225 -256 l 100 -256 l 100 926 l 225 926 l 225 575 q 319 656 261 625 q 444 688 376 688 q 565 663 510 688 q 659 594 619 639 q 721 483 699 549 q 743 336 743 418 q 721 189 743 254 q 659 78 699 124 q 565 8 619 32 q 444 -17 510 -17 m 411 94 q 495 113 458 94 q 558 163 532 131 q 599 239 585 194 q 613 336 613 283 q 599 432 613 388 q 558 508 585 476 q 495 558 532 540 q 411 576 458 576 q 302 547 354 576 q 225 478 250 518 l 225 193 q 301 124 250 153 q 411 94 353 94 z "
    },
    "\xc2\xb4": {
        ha: 324,
        x_min: 0,
        x_max: 324,
        o: "m 92 772 l 0 772 l 200 972 l 324 972 l 92 772 z "
    },
    "\xc2\xa8": {
        ha: 386,
        x_min: -24,
        x_max: 411,
        o: "m 411 842 q 390 790 411 811 q 338 768 368 768 q 285 790 307 768 q 264 842 264 811 q 285 893 264 872 q 338 914 307 914 q 390 893 368 914 q 411 842 411 872 m 121 842 q 100 790 121 811 q 49 768 79 768 q -3 790 18 768 q -24 842 -24 811 q -3 893 -24 872 q 49 914 18 914 q 100 893 79 914 q 121 842 121 872 z "
    },
    "`": {
        ha: 324,
        x_min: 0,
        x_max: 324,
        o: "m 232 772 l 0 972 l 124 972 l 324 772 l 232 772 z "
    },
    "\xcb\x8b": {
        ha: 324,
        x_min: 0,
        x_max: 324,
        o: "m 232 772 l 0 972 l 124 972 l 324 772 l 232 772 z "
    },
    "\xcb\x86": {
        ha: 382,
        x_min: 0,
        x_max: 382,
        o: "m 300 772 l 189 913 l 81 772 l 0 772 l 131 972 l 247 972 l 382 772 l 300 772 z "
    },
    "\xcb\x9c": {
        ha: 440,
        x_min: 0,
        x_max: 440,
        o: "m 301 769 q 237 792 260 769 q 196 838 214 814 q 168 872 182 857 q 133 888 154 888 q 89 862 107 888 q 71 778 71 836 l 0 778 q 35 913 0 861 q 139 964 71 964 q 202 942 179 964 q 243 896 225 919 q 272 861 258 876 q 307 846 286 846 q 351 872 333 846 q 368 956 368 897 l 440 956 q 405 821 440 872 q 301 769 369 769 z "
    },
    "\xc2\xaf": {
        ha: 504,
        x_min: 0,
        x_max: 504,
        o: "m 0 790 l 0 867 l 504 867 l 504 790 l 0 790 z "
    },
    "\xe2\x80\xbe": {
        ha: 504,
        x_min: 0,
        x_max: 504,
        o: "m 0 790 l 0 867 l 504 867 l 504 790 l 0 790 z "
    },
    "\xcb\x98": {
        ha: 488,
        x_min: 0,
        x_max: 488,
        o: "m 488 867 q 383 777 446 810 q 244 744 319 744 q 106 777 169 744 q 0 867 43 810 l 60 917 q 138 847 92 872 q 244 821 185 821 q 350 847 303 821 q 429 917 397 872 l 488 867 l 488 867 z "
    },
    "\xcb\x99": {
        ha: 179,
        x_min: 17,
        x_max: 163,
        o: "m 90 767 q 38 788 60 767 q 17 840 17 808 q 38 892 17 869 q 90 914 60 914 q 142 892 121 914 q 163 840 163 869 q 142 788 163 808 q 90 767 121 767 z "
    },
    "\xcb\x9a": {
        ha: 276,
        x_min: 0,
        x_max: 276,
        o: "m 139 749 q 85 760 110 749 q 41 790 60 771 q 11 835 22 810 q 0 889 0 860 q 11 943 0 918 q 41 988 22 968 q 85 1018 60 1007 q 139 1029 110 1029 q 193 1018 168 1029 q 237 988 218 1007 q 266 943 256 968 q 276 889 276 918 q 266 835 276 860 q 237 790 256 810 q 193 760 218 771 q 139 749 168 749 m 139 811 q 193 834 171 811 q 215 889 215 857 q 193 943 215 921 q 139 965 171 965 q 85 943 107 965 q 63 889 63 921 q 85 834 63 857 q 139 811 107 811 z "
    },
    "\xc2\xb8": {
        ha: 290,
        x_min: 0,
        x_max: 290,
        o: "m 143 -268 q 59 -255 97 -268 q 0 -225 21 -242 l 28 -167 q 83 -197 54 -187 q 140 -207 113 -207 q 197 -194 172 -207 q 222 -153 222 -181 q 172 -108 222 -108 q 124 -129 142 -108 l 71 -100 l 114 15 l 183 15 l 147 -75 q 199 -60 169 -60 q 265 -85 239 -60 q 290 -154 290 -111 q 248 -237 290 -207 q 143 -268 206 -268 z "
    },
    "\xcb\x9d": {
        ha: 438,
        x_min: 0,
        x_max: 438,
        o: "m 78 772 l 0 772 l 128 972 l 238 972 l 78 772 m 278 772 l 200 772 l 328 972 l 438 972 l 278 772 z "
    },
    "\xcb\x9b": {
        ha: 253,
        x_min: -71,
        x_max: 174,
        o: "m 174 -235 q 71 -258 135 -258 q 17 -252 43 -258 q -28 -233 -8 -246 q -59 -199 -47 -219 q -71 -153 -71 -179 q -58 -103 -71 -126 q -23 -60 -44 -81 q 27 -25 -1 -40 q 85 1 56 -10 l 174 0 q 78 -56 111 -25 q 46 -124 46 -86 q 61 -160 46 -147 q 99 -172 76 -172 q 121 -170 110 -172 q 143 -161 132 -168 l 174 -235 z "
    },
    "\xcb\x87": {
        ha: 382,
        x_min: 0,
        x_max: 382,
        o: "m 135 772 l 0 972 l 81 972 l 193 831 l 300 972 l 382 972 l 251 772 l 135 772 z "
    },
    "\xcb\x89": {
        ha: 504,
        x_min: 0,
        x_max: 504,
        o: "m 0 821 l 0 897 l 504 897 l 504 821 l 0 821 z "
    },
    "\xcc\x89": {
        ha: 253,
        x_min: 21,
        x_max: 228,
        o: "m 21 1021 q 58 1076 32 1054 q 125 1097 85 1097 q 197 1074 165 1097 q 228 1000 228 1051 q 222 961 228 978 q 203 926 215 944 l 142 926 q 165 962 158 944 q 172 997 172 979 q 159 1036 172 1024 q 125 1049 146 1049 q 71 1006 86 1049 l 21 1021 z "
    },
    "\xce\x91": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xce\x92": {
        ha: 886,
        x_min: 103,
        x_max: 817,
        o: "m 103 0 m 103 0 l 103 926 l 538 926 q 649 908 600 926 q 731 859 697 890 q 781 784 764 828 q 799 690 799 740 q 785 610 799 646 q 750 547 772 574 q 699 502 728 519 q 638 478 669 485 q 708 451 675 472 q 765 400 740 431 q 803 331 789 369 q 817 250 817 292 q 799 150 817 196 q 747 71 781 104 q 663 19 713 38 q 549 0 613 0 l 103 0 m 511 533 q 619 572 582 533 q 656 668 656 610 q 619 765 656 726 q 511 804 582 804 l 242 804 l 242 533 l 511 533 m 518 122 q 633 161 592 122 q 674 268 674 200 q 664 323 674 297 q 635 368 654 349 q 586 399 615 388 q 518 411 557 411 l 242 411 l 242 122 l 518 122 z "
    },
    "\xce\x93": {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 0 l 103 0 z "
    },
    "\xce\x94": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 l 375 926 l 549 926 l 917 0 l 7 0 m 461 785 l 204 122 l 719 122 l 461 785 z "
    },
    "\xe2\x88\x86": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 l 375 926 l 549 926 l 917 0 l 7 0 m 461 785 l 204 122 l 719 122 l 461 785 z "
    },
    "\xce\x95": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xce\x96": {
        ha: 815,
        x_min: 64,
        x_max: 750,
        o: "m 64 0 m 64 0 l 64 114 l 561 804 l 64 804 l 64 926 l 740 926 l 740 813 l 243 122 l 750 122 l 750 0 l 64 0 z "
    },
    "\xce\x97": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 0 m 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 0 l 754 0 z "
    },
    "\xce\x98": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 285 411 l 285 533 l 776 533 l 776 411 l 285 411 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xce\x99": {
        ha: 346,
        x_min: 103,
        x_max: 242,
        o: "m 103 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 z "
    },
    "\xce\x9a": {
        ha: 849,
        x_min: 103,
        x_max: 832,
        o: "m 103 0 m 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 832 0 l 660 0 z "
    },
    "\xce\x9b": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 758 0 l 461 785 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 z "
    },
    "\xce\x9c": {
        ha: 1142,
        x_min: 103,
        x_max: 1039,
        o: "m 103 0 m 900 0 l 900 725 l 600 0 l 542 0 l 242 725 l 242 0 l 103 0 l 103 926 l 301 926 l 571 272 l 840 926 l 1039 926 l 1039 0 l 900 0 z "
    },
    "\xce\x9d": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xce\x9e": {
        ha: 858,
        x_min: 72,
        x_max: 785,
        o: "m 72 804 l 72 926 l 785 926 l 785 804 l 72 804 m 72 0 l 72 122 l 785 122 l 785 0 l 72 0 m 82 411 l 82 533 l 776 533 l 776 411 l 82 411 z "
    },
    "\xce\x9f": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xce\xa0": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 754 0 l 754 804 l 242 804 l 242 0 l 103 0 l 103 926 l 893 926 l 893 0 l 754 0 z "
    },
    "\xce\xa1": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 103 0 m 103 0 l 103 926 l 493 926 q 619 903 564 926 q 713 842 675 881 q 769 751 750 803 q 789 642 789 700 q 769 532 789 583 q 712 442 750 481 q 619 380 674 403 q 493 357 564 357 l 242 357 l 242 0 l 103 0 m 475 479 q 598 524 550 479 q 646 642 646 568 q 598 760 646 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xce\xa3": {
        ha: 803,
        x_min: 72,
        x_max: 732,
        o: "m 551 476 l 239 122 l 732 122 l 732 0 l 72 0 l 72 122 l 382 475 l 74 804 l 74 926 l 732 926 l 732 804 l 244 804 l 551 476 z "
    },
    "\xce\xa4": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 42 0 m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 z "
    },
    "\xce\xa5": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 z "
    },
    "\xce\xa6": {
        ha: 1139,
        x_min: 64,
        x_max: 1074,
        o: "m 500 0 l 500 92 q 317 128 397 99 q 180 205 236 157 q 94 318 124 253 q 64 463 64 383 q 94 606 64 540 q 180 719 124 671 q 317 796 236 767 q 500 833 397 825 l 500 926 l 639 926 l 639 833 q 821 796 740 825 q 958 719 901 767 q 1044 606 1014 671 q 1074 463 1074 540 q 1044 318 1074 383 q 958 205 1014 253 q 821 128 901 157 q 639 92 740 99 l 639 0 l 500 0 m 207 463 q 283 295 207 361 q 500 215 358 229 l 500 708 q 283 629 358 694 q 207 463 207 564 m 931 463 q 855 629 931 564 q 639 708 779 694 l 639 215 q 855 296 779 231 q 931 463 931 361 z "
    },
    "\xce\xa7": {
        ha: 911,
        x_min: 10,
        x_max: 900,
        o: "m 10 0 m 733 0 l 456 378 l 178 0 l 10 0 l 365 475 l 31 926 l 199 926 l 456 571 l 711 926 l 879 926 l 547 476 l 900 0 l 733 0 z "
    },
    "\xce\xa8": {
        ha: 1133,
        x_min: 103,
        x_max: 1031,
        o: "m 497 0 l 497 175 q 324 213 399 183 q 201 292 250 243 q 127 406 151 340 q 103 551 103 472 l 103 926 l 243 926 l 243 556 q 307 380 243 446 q 497 299 371 314 l 497 926 l 636 926 l 636 299 q 825 380 761 314 q 889 556 889 446 l 889 926 l 1031 926 l 1031 553 q 1006 407 1031 474 q 931 292 981 340 q 808 213 882 243 q 636 175 735 183 l 636 0 l 497 0 z "
    },
    "\xce\xa9": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 269 122 q 189 185 226 149 q 124 268 151 222 q 80 369 96 314 q 64 490 64 425 q 98 673 64 590 q 194 815 132 756 q 342 908 256 875 q 531 942 428 942 q 720 908 635 942 q 867 815 806 875 q 963 673 929 756 q 997 490 997 590 q 981 369 997 425 q 938 268 965 314 q 874 185 911 222 q 793 122 836 149 l 974 122 l 974 0 l 628 0 l 628 122 q 713 163 672 135 q 785 235 754 192 q 835 337 817 279 q 854 464 854 394 q 833 599 854 535 q 772 711 813 663 q 672 788 732 760 q 531 817 611 817 q 390 788 450 817 q 288 711 329 760 q 227 599 247 663 q 207 464 207 535 q 226 337 207 394 q 276 235 244 279 q 349 163 307 192 q 435 122 390 135 l 435 0 l 89 0 l 89 122 l 269 122 z "
    },
    "\xe2\x84\xa6": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 269 122 q 189 185 226 149 q 124 268 151 222 q 80 369 96 314 q 64 490 64 425 q 98 673 64 590 q 194 815 132 756 q 342 908 256 875 q 531 942 428 942 q 720 908 635 942 q 867 815 806 875 q 963 673 929 756 q 997 490 997 590 q 981 369 997 425 q 938 268 965 314 q 874 185 911 222 q 793 122 836 149 l 974 122 l 974 0 l 628 0 l 628 122 q 713 163 672 135 q 785 235 754 192 q 835 337 817 279 q 854 464 854 394 q 833 599 854 535 q 772 711 813 663 q 672 788 732 760 q 531 817 611 817 q 390 788 450 817 q 288 711 329 760 q 227 599 247 663 q 207 464 207 535 q 226 337 207 394 q 276 235 244 279 q 349 163 307 192 q 435 122 390 135 l 435 0 l 89 0 l 89 122 l 269 122 z "
    },
    "\xce\xb1": {
        ha: 822,
        x_min: 58,
        x_max: 801,
        o: "m 801 -10 q 739 -17 774 -17 q 634 15 672 -17 q 585 106 596 47 q 490 18 550 53 q 358 -17 431 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 169 q 719 115 703 135 q 765 94 736 94 q 792 97 781 94 l 801 -10 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 476 q 501 546 551 517 q 392 575 450 575 q 307 557 344 575 q 243 507 269 539 q 203 431 217 475 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 z "
    },
    "\xce\xb2": {
        ha: 803,
        x_min: 100,
        x_max: 743,
        o: "m 225 192 q 304 123 253 151 q 419 94 356 94 q 564 140 514 94 q 614 260 614 185 q 598 330 614 300 q 555 379 582 360 q 491 408 528 399 q 413 418 454 418 l 361 418 l 361 528 l 410 528 q 540 565 488 528 q 592 678 592 603 q 578 741 592 713 q 542 788 565 769 q 489 817 519 807 q 424 828 458 828 q 346 815 382 828 q 283 778 310 803 q 240 716 256 753 q 225 629 225 679 l 225 192 m 225 -256 l 100 -256 l 100 629 q 128 770 100 711 q 203 867 157 829 q 307 922 249 904 q 424 940 365 940 q 545 924 490 940 q 640 874 600 907 q 701 796 679 842 q 722 692 722 750 q 705 606 722 643 q 660 543 688 569 q 597 500 632 517 q 529 478 563 483 q 599 459 561 475 q 668 414 636 443 q 722 342 700 385 q 743 239 743 299 q 721 135 743 182 q 660 55 699 89 q 570 2 622 21 q 458 -17 518 -17 q 321 15 379 -17 q 225 96 263 46 l 225 -256 z "
    },
    "\xce\xb3": {
        ha: 690,
        x_min: -12,
        x_max: 654,
        o: "m 282 -256 l 282 -79 q 259 138 282 31 q 197 342 236 244 q 103 523 157 439 q -12 671 49 607 l 132 671 q 215 563 175 625 q 285 430 254 500 q 338 288 317 360 q 367 151 360 215 q 430 260 400 199 q 481 390 460 322 q 516 531 503 458 q 529 671 529 603 l 654 671 q 636 501 654 589 q 585 326 618 413 q 507 158 553 240 q 407 7 461 76 l 407 -256 l 282 -256 z "
    },
    "\xce\xb4": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 404 -17 q 260 10 324 -17 q 151 83 196 38 q 82 189 106 129 q 58 313 58 249 q 110 488 58 417 q 243 596 163 560 q 169 652 199 618 q 140 744 140 686 q 157 821 140 785 q 206 884 174 857 q 287 927 239 911 q 397 943 335 943 q 546 915 483 943 q 650 847 608 888 l 596 760 q 513 819 565 796 q 397 842 461 842 q 297 815 333 842 q 261 749 261 789 q 273 715 261 729 q 304 690 285 701 q 351 670 324 679 q 410 651 378 661 q 520 615 463 636 q 626 556 578 593 q 705 459 674 518 q 736 308 736 400 q 713 188 736 246 q 648 83 690 129 q 544 10 606 38 q 404 -17 482 -17 m 614 308 q 593 406 614 367 q 539 472 572 446 q 463 516 506 499 q 375 549 419 533 q 236 456 283 518 q 189 313 189 394 q 203 235 189 274 q 244 165 217 196 q 310 114 271 133 q 400 94 350 94 q 492 114 451 94 q 559 164 532 133 q 600 233 586 194 q 614 308 614 271 z "
    },
    "\xce\xb5": {
        ha: 710,
        x_min: 58,
        x_max: 676,
        o: "m 371 -17 q 240 -2 297 -17 q 142 39 182 13 q 80 101 101 65 q 58 181 58 138 q 77 251 58 221 q 125 300 96 281 q 188 330 154 319 q 253 343 222 340 q 190 360 222 347 q 132 392 158 372 q 89 441 106 413 q 72 506 72 469 q 94 582 72 549 q 158 639 117 615 q 258 674 200 663 q 388 686 317 686 q 548 656 479 686 q 665 578 617 626 l 601 501 q 382 585 518 585 q 253 558 304 585 q 203 490 203 532 q 253 415 203 439 q 383 390 304 390 l 531 390 l 531 289 l 383 289 q 307 283 342 289 q 246 267 272 278 q 205 236 219 256 q 190 190 190 217 q 239 115 190 143 q 371 86 288 86 q 506 107 442 86 q 617 172 569 128 l 676 93 q 550 13 626 43 q 371 -17 474 -17 z "
    },
    "\xce\xb6": {
        ha: 678,
        x_min: 58,
        x_max: 628,
        o: "m 497 -61 q 481 -26 497 -36 q 428 -17 464 -17 q 276 5 344 -17 q 160 67 208 26 q 85 164 111 107 q 58 293 58 221 q 87 447 58 374 q 167 586 115 521 q 292 710 219 651 q 456 817 365 768 l 81 817 l 81 926 l 618 926 l 618 833 q 445 719 524 779 q 310 593 367 660 q 221 453 253 526 q 189 303 189 381 q 258 147 189 199 q 443 94 328 94 q 585 64 543 94 q 628 -35 628 33 q 611 -119 628 -74 q 564 -218 594 -164 l 429 -218 q 453 -181 440 -201 q 475 -139 465 -160 q 491 -98 485 -118 q 497 -61 497 -78 z "
    },
    "\xce\xb7": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 553 -256 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 -256 l 553 -256 z "
    },
    "\xce\xb8": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 397 -17 q 249 22 313 -17 q 144 125 186 60 q 80 278 101 190 q 58 464 58 365 q 80 650 58 563 q 144 803 101 738 q 249 906 186 868 q 397 943 313 943 q 546 906 482 943 q 652 803 610 868 q 715 650 694 738 q 736 464 736 563 q 715 278 736 365 q 652 125 694 190 q 546 22 610 60 q 397 -17 482 -17 m 397 94 q 488 118 450 94 q 550 183 525 142 q 588 283 575 225 q 604 411 601 342 l 190 411 q 206 283 193 342 q 244 183 219 225 q 307 118 269 142 q 397 94 344 94 m 397 832 q 308 809 346 832 q 246 744 271 786 q 208 646 221 703 q 190 521 194 589 l 604 521 q 587 646 600 589 q 549 744 574 703 q 486 809 524 786 q 397 832 449 832 z "
    },
    "\xce\xb9": {
        ha: 343,
        x_min: 100,
        x_max: 322,
        o: "m 260 -17 q 140 26 179 -17 q 100 149 100 69 l 100 671 l 225 671 l 225 169 q 241 115 225 135 q 286 94 257 94 q 314 97 300 94 l 322 -10 q 260 -17 294 -17 z "
    },
    "\xce\xba": {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 100 0 m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 671 l 225 671 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    "\xce\xbb": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 67 932 q 106 940 82 938 q 144 943 129 943 q 272 909 218 940 q 358 799 326 878 l 689 0 l 554 0 l 344 526 l 135 0 l 1 0 l 278 678 l 239 767 q 200 818 224 804 q 142 832 176 832 q 113 829 129 832 q 86 819 97 826 l 67 932 z "
    },
    "\xce\xbc": {
        ha: 796,
        x_min: 100,
        x_max: 775,
        o: "m 225 -256 l 100 -256 l 100 671 l 225 671 l 225 239 q 263 126 225 160 q 368 93 301 93 q 476 122 426 93 q 553 189 525 151 l 553 671 l 678 671 l 678 169 q 694 115 678 135 q 739 94 710 94 q 767 97 753 94 l 775 -10 q 713 -17 747 -17 q 608 15 644 -17 q 558 103 571 46 q 469 18 524 53 q 351 -17 415 -17 q 269 1 299 -17 q 225 42 239 18 l 225 -256 z "
    },
    "\xc2\xb5": {
        ha: 796,
        x_min: 100,
        x_max: 775,
        o: "m 225 -256 l 100 -256 l 100 671 l 225 671 l 225 239 q 263 126 225 160 q 368 93 301 93 q 476 122 426 93 q 553 189 525 151 l 553 671 l 678 671 l 678 169 q 694 115 678 135 q 739 94 710 94 q 767 97 753 94 l 775 -10 q 713 -17 747 -17 q 608 15 644 -17 q 558 103 571 46 q 469 18 524 53 q 351 -17 415 -17 q 269 1 299 -17 q 225 42 239 18 l 225 -256 z "
    },
    "\xce\xbd": {
        ha: 690,
        x_min: 1,
        x_max: 654,
        o: "m 278 0 l 1 671 l 135 671 l 350 125 q 424 251 392 183 q 481 389 457 318 q 517 531 504 460 q 529 671 529 603 l 654 671 q 635 499 654 588 q 583 322 617 410 q 504 152 550 235 q 403 0 458 69 l 278 0 z "
    },
    "\xce\xbe": {
        ha: 678,
        x_min: 58,
        x_max: 628,
        o: "m 428 -17 q 153 51 247 -17 q 58 238 58 119 q 76 327 58 289 q 122 392 94 365 q 181 433 149 418 q 243 456 214 449 q 185 472 215 460 q 131 506 156 485 q 90 558 106 528 q 74 631 74 589 q 115 743 74 692 q 219 817 157 794 l 86 817 l 86 926 l 608 926 l 608 817 l 347 817 q 245 758 286 801 q 204 664 204 715 q 219 605 204 631 q 262 562 235 579 q 325 536 289 544 q 401 528 361 528 l 601 528 l 601 419 l 401 419 q 317 410 356 419 q 249 381 278 401 q 205 331 221 361 q 189 258 189 300 q 255 137 189 179 q 443 94 321 94 q 585 64 543 94 q 628 -35 628 33 q 611 -119 628 -74 q 564 -218 594 -164 l 429 -218 q 453 -181 440 -201 q 475 -139 465 -160 q 491 -98 485 -118 q 497 -61 497 -78 q 481 -26 497 -36 q 428 -17 464 -17 z "
    },
    "\xce\xbf": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xcf\x80": {
        ha: 828,
        x_min: 14,
        x_max: 814,
        o: "m 578 0 l 578 561 l 250 561 l 250 0 l 125 0 l 125 561 l 14 561 l 14 671 l 814 671 l 814 561 l 703 561 l 703 0 l 578 0 z "
    },
    "\xcf\x81": {
        ha: 799,
        x_min: 100,
        x_max: 743,
        o: "m 444 -17 q 322 13 378 -17 q 225 97 265 42 l 225 -256 l 100 -256 l 100 336 q 122 472 100 408 q 185 584 144 536 q 285 660 226 632 q 419 688 344 688 q 554 660 494 688 q 656 584 614 632 q 721 472 699 536 q 743 336 743 408 q 721 189 743 254 q 659 78 699 124 q 565 8 619 32 q 444 -17 510 -17 m 411 94 q 495 113 458 94 q 558 163 532 131 q 599 239 585 194 q 613 336 613 283 q 600 427 613 383 q 563 504 588 471 q 501 557 538 538 q 418 576 465 576 q 335 557 371 576 q 274 504 299 538 q 238 427 250 471 q 225 336 225 383 l 225 193 q 301 124 250 153 q 411 94 353 94 z "
    },
    "\xcf\x82": {
        ha: 674,
        x_min: 58,
        x_max: 651,
        o: "m 433 -17 q 281 8 350 -17 q 162 78 211 32 q 85 189 113 124 q 58 336 58 254 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 208 230 189 275 q 260 155 226 185 q 339 110 293 125 q 439 94 385 94 q 584 64 538 94 q 631 -35 631 33 q 614 -119 631 -74 q 567 -218 597 -164 l 438 -218 q 460 -181 449 -201 q 483 -139 472 -160 q 499 -98 493 -118 q 506 -61 506 -78 q 487 -26 506 -36 q 433 -17 468 -17 z "
    },
    "\xcf\x83": {
        ha: 794,
        x_min: 58,
        x_max: 763,
        o: "m 728 308 q 706 183 728 242 q 641 79 683 124 q 538 9 599 35 q 397 -17 476 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 467 58 406 q 151 573 106 528 q 263 644 197 618 q 414 671 329 671 l 763 671 l 763 560 l 613 560 q 697 457 665 517 q 728 308 728 397 m 606 329 q 570 470 606 411 q 479 560 535 529 l 414 560 q 315 540 357 560 q 245 490 274 521 q 203 418 217 458 q 189 336 189 378 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 q 486 114 447 94 q 551 166 525 133 q 592 241 578 199 q 606 329 606 283 z "
    },
    "\xcf\x84": {
        ha: 656,
        x_min: 35,
        x_max: 622,
        o: "m 425 -17 q 306 26 346 -17 q 265 149 265 69 l 265 561 l 35 561 l 35 671 l 622 671 l 622 561 l 390 561 l 390 176 q 407 117 390 140 q 456 94 424 94 q 496 102 478 94 q 524 121 514 110 l 556 26 q 505 -5 536 7 q 425 -17 474 -17 z "
    },
    "\xcf\x85": {
        ha: 786,
        x_min: 100,
        x_max: 726,
        o: "m 388 -17 q 262 6 315 -17 q 172 69 208 28 q 118 167 136 110 q 100 296 100 225 l 100 671 l 225 671 l 225 299 q 267 150 225 206 q 388 94 308 94 q 477 115 438 94 q 543 169 517 135 q 583 251 569 204 q 597 350 597 297 q 574 502 597 429 q 501 633 550 575 l 613 688 q 698 529 669 617 q 726 350 726 442 q 703 205 726 272 q 635 88 679 138 q 529 11 592 39 q 388 -17 467 -17 z "
    },
    "\xcf\x86": {
        ha: 1053,
        x_min: 58,
        x_max: 993,
        o: "m 993 336 q 968 201 993 263 q 893 94 943 140 q 767 20 843 49 q 589 -14 690 -8 l 589 -256 l 464 -256 l 464 -14 q 158 97 258 -1 q 58 354 58 194 q 78 466 58 415 q 133 558 99 517 q 213 632 167 600 q 310 688 258 664 l 363 590 q 235 492 281 551 q 189 354 189 433 q 204 258 189 303 q 253 181 219 214 q 338 125 286 147 q 464 97 390 103 l 464 688 l 526 688 q 732 662 644 688 q 878 590 819 636 q 965 478 936 543 q 993 336 993 414 m 863 336 q 794 501 863 436 q 589 574 726 567 l 589 97 q 715 124 663 103 q 799 177 767 146 q 847 249 832 208 q 863 336 863 290 z "
    },
    "\xcf\x87": {
        ha: 682,
        x_min: 11,
        x_max: 671,
        o: "m 532 -256 l 342 104 l 149 -256 l 11 -256 l 263 221 l 26 671 l 164 671 l 342 338 l 517 671 l 656 671 l 418 221 l 671 -256 l 532 -256 z "
    },
    "\xcf\x88": {
        ha: 1053,
        x_min: 100,
        x_max: 954,
        o: "m 464 -256 l 464 -14 q 190 87 281 -1 q 100 315 100 175 l 100 671 l 225 671 l 225 315 q 288 165 225 221 q 464 97 350 108 l 464 926 l 589 926 l 589 97 q 765 164 701 108 q 829 315 829 219 l 829 671 l 954 671 l 954 315 q 863 85 954 172 q 589 -14 772 -1 l 589 -256 l 464 -256 z "
    },
    "\xcf\x89": {
        ha: 1139,
        x_min: 58,
        x_max: 1079,
        o: "m 1079 336 q 1060 199 1079 263 q 1006 87 1042 135 q 920 11 971 39 q 807 -17 869 -17 q 718 0 757 -17 q 650 45 679 17 q 601 110 621 74 q 569 183 582 146 q 537 110 557 146 q 488 45 517 74 q 421 0 460 17 q 332 -17 382 -17 q 217 11 268 -17 q 131 87 167 39 q 77 199 96 135 q 58 336 58 263 q 94 540 58 449 q 197 688 131 632 l 290 614 q 210 487 232 558 q 189 336 189 415 q 199 244 189 288 q 230 167 210 200 q 280 114 250 133 q 347 94 310 94 q 416 114 386 94 q 466 167 446 133 q 497 244 486 200 q 507 336 507 288 l 507 506 l 632 506 l 632 336 q 642 244 632 288 q 673 167 653 200 q 722 114 693 133 q 790 94 751 94 q 858 114 828 94 q 908 167 888 133 q 938 244 928 200 q 949 336 949 288 q 928 487 949 415 q 849 614 907 558 l 942 688 q 1044 540 1008 632 q 1079 336 1079 449 z "
    },
    "\xce\x86": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 186 779 l 214 1063 l 332 1063 l 246 779 l 186 779 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xce\x88": {
        ha: 828,
        x_min: -19,
        x_max: 756,
        o: "m 0 0 m -19 779 l 8 1063 l 126 1063 l 40 779 l -19 779 m 133 0 l 133 926 l 756 926 l 756 804 l 272 804 l 272 533 l 746 533 l 746 411 l 272 411 l 272 122 l 756 122 l 756 0 l 133 0 z "
    },
    "\xce\x89": {
        ha: 1028,
        x_min: -19,
        x_max: 924,
        o: "m 0 0 m -19 779 l 8 1063 l 126 1063 l 40 779 l -19 779 m 785 0 l 785 414 l 272 414 l 272 0 l 133 0 l 133 926 l 272 926 l 272 538 l 785 538 l 785 926 l 924 926 l 924 0 l 785 0 z "
    },
    "\xce\x8a": {
        ha: 376,
        x_min: -19,
        x_max: 272,
        o: "m 0 0 m -19 779 l 8 1063 l 126 1063 l 40 779 l -19 779 m 133 0 l 133 926 l 272 926 l 272 0 l 133 0 z "
    },
    "\xce\x8c": {
        ha: 1063,
        x_min: 22,
        x_max: 997,
        o: "m 22 0 m 22 779 l 50 1063 l 168 1063 l 82 779 l 22 779 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xce\x8e": {
        ha: 968,
        x_min: -19,
        x_max: 960,
        o: "m 0 0 m -19 779 l 8 1063 l 126 1063 l 40 779 l -19 779 m 460 0 l 460 388 l 97 926 l 257 926 l 529 513 l 799 926 l 960 926 l 599 388 l 599 0 l 460 0 z "
    },
    "\xce\x8f": {
        ha: 1069,
        x_min: 22,
        x_max: 1006,
        o: "m 22 0 m 22 779 l 50 1063 l 168 1063 l 82 779 l 22 779 m 278 122 q 197 185 235 149 q 132 268 160 222 q 88 369 104 314 q 72 490 72 425 q 106 673 72 590 q 202 815 140 756 q 350 908 264 875 q 539 942 436 942 q 728 908 643 942 q 876 815 814 875 q 972 673 938 756 q 1006 490 1006 590 q 990 369 1006 425 q 947 268 974 314 q 882 185 919 222 q 801 122 844 149 l 982 122 l 982 0 l 636 0 l 636 122 q 722 163 681 135 q 794 235 763 192 q 844 337 825 279 q 863 464 863 394 q 842 599 863 535 q 781 711 821 663 q 680 788 740 760 q 539 817 619 817 q 398 788 458 817 q 297 711 338 760 q 235 599 256 663 q 215 464 215 535 q 234 337 215 394 q 284 235 253 279 q 357 163 315 192 q 443 122 399 135 l 443 0 l 97 0 l 97 122 l 278 122 z "
    },
    "\xce\xaa": {
        ha: 346,
        x_min: -43,
        x_max: 392,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 392 1097 q 370 1045 392 1067 q 318 1024 349 1024 q 266 1045 288 1024 q 244 1097 244 1067 q 266 1149 244 1128 q 318 1169 288 1169 q 370 1149 349 1169 q 392 1097 392 1128 m 101 1097 q 81 1045 101 1067 q 29 1024 60 1024 q -22 1045 -1 1024 q -43 1097 -43 1067 q -22 1149 -43 1128 q 29 1169 -1 1169 q 81 1149 60 1169 q 101 1097 101 1128 z "
    },
    "\xce\xab": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 7 0 m 369 0 l 369 388 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 508 388 l 508 0 l 369 0 m 656 1097 q 634 1045 656 1067 q 582 1024 613 1024 q 530 1045 551 1024 q 508 1097 508 1067 q 530 1149 508 1128 q 582 1169 551 1169 q 634 1149 613 1169 q 656 1097 656 1128 m 365 1097 q 344 1045 365 1067 q 293 1024 324 1024 q 242 1045 263 1024 q 221 1097 221 1067 q 242 1149 221 1128 q 293 1169 263 1169 q 344 1149 324 1169 q 365 1097 365 1128 z "
    },
    "\xce\xac": {
        ha: 822,
        x_min: 58,
        x_max: 801,
        o: "m 58 0 m 367 779 l 394 1063 l 513 1063 l 426 779 l 367 779 m 801 -10 q 739 -17 774 -17 q 634 15 672 -17 q 585 106 596 47 q 490 18 550 53 q 358 -17 431 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 671 l 703 671 l 703 169 q 719 115 703 135 q 765 94 736 94 q 792 97 781 94 l 801 -10 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 476 q 501 546 551 517 q 392 575 450 575 q 307 557 344 575 q 243 507 269 539 q 203 431 217 475 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 z "
    },
    "\xce\xad": {
        ha: 710,
        x_min: 58,
        x_max: 676,
        o: "m 58 0 m 310 779 l 338 1063 l 456 1063 l 369 779 l 310 779 m 371 -17 q 240 -2 297 -17 q 142 39 182 13 q 80 101 101 65 q 58 181 58 138 q 77 251 58 221 q 125 300 96 281 q 188 330 154 319 q 253 343 222 340 q 190 360 222 347 q 132 392 158 372 q 89 441 106 413 q 72 506 72 469 q 94 582 72 549 q 158 639 117 615 q 258 674 200 663 q 388 686 317 686 q 548 656 479 686 q 665 578 617 626 l 601 501 q 382 585 518 585 q 253 558 304 585 q 203 490 203 532 q 253 415 203 439 q 383 390 304 390 l 531 390 l 531 289 l 383 289 q 307 283 342 289 q 246 267 272 278 q 205 236 219 256 q 190 190 190 217 q 239 115 190 143 q 371 86 288 86 q 506 107 442 86 q 617 172 569 128 l 676 93 q 550 13 626 43 q 371 -17 474 -17 z "
    },
    "\xce\xae": {
        ha: 776,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 344 779 l 372 1063 l 490 1063 l 404 779 l 344 779 m 553 -256 l 553 429 q 514 544 553 513 q 410 576 475 576 q 302 547 351 576 q 225 479 253 517 l 225 0 l 100 0 l 100 671 l 225 671 l 225 576 q 266 617 242 597 q 321 652 290 636 q 388 678 351 668 q 463 688 424 688 q 624 633 569 688 q 678 471 678 578 l 678 -256 l 553 -256 z "
    },
    "\xce\xaf": {
        ha: 343,
        x_min: 100,
        x_max: 322,
        o: "m 100 0 m 129 779 l 157 1063 l 275 1063 l 189 779 l 129 779 m 260 -17 q 140 26 179 -17 q 100 149 100 69 l 100 671 l 225 671 l 225 169 q 241 115 225 135 q 286 94 257 94 q 314 97 300 94 l 322 -10 q 260 -17 294 -17 z "
    },
    "\xcf\x8a": {
        ha: 343,
        x_min: -44,
        x_max: 390,
        o: "m 0 0 m 390 842 q 369 790 390 811 q 317 768 347 768 q 265 790 286 768 q 243 842 243 811 q 265 893 243 872 q 317 914 286 914 q 369 893 347 914 q 390 842 390 872 m 100 842 q 79 790 100 811 q 28 768 58 768 q -24 790 -3 768 q -44 842 -44 811 q -24 893 -44 872 q 28 914 -3 914 q 79 893 58 914 q 100 842 100 872 m 260 -17 q 140 26 179 -17 q 100 149 100 69 l 100 671 l 225 671 l 225 169 q 241 115 225 135 q 286 94 257 94 q 314 97 300 94 l 322 -10 q 260 -17 294 -17 z "
    },
    "\xce\x90": {
        ha: 343,
        x_min: -93,
        x_max: 439,
        o: "m 0 0 m 122 779 l 149 1063 l 267 1063 l 183 779 l 122 779 m 439 842 q 417 790 439 811 q 365 768 396 768 q 314 790 335 768 q 293 842 293 811 q 314 893 293 872 q 365 914 335 914 q 417 893 396 914 q 439 842 439 872 m 53 842 q 31 790 53 811 q -19 768 10 768 q -72 790 -51 768 q -93 842 -93 811 q -72 893 -93 872 q -19 914 -51 914 q 31 893 10 914 q 53 842 53 872 m 260 -17 q 140 26 179 -17 q 100 149 100 69 l 100 671 l 225 671 l 225 169 q 241 115 225 135 q 286 94 257 94 q 314 97 300 94 l 322 -10 q 260 -17 294 -17 z "
    },
    "\xcf\x8d": {
        ha: 786,
        x_min: 100,
        x_max: 726,
        o: "m 100 0 m 349 779 l 376 1063 l 494 1063 l 408 779 l 349 779 m 388 -17 q 262 6 315 -17 q 172 69 208 28 q 118 167 136 110 q 100 296 100 225 l 100 671 l 225 671 l 225 299 q 267 150 225 206 q 388 94 308 94 q 477 115 438 94 q 543 169 517 135 q 583 251 569 204 q 597 350 597 297 q 574 502 597 429 q 501 633 550 575 l 613 688 q 698 529 669 617 q 726 350 726 442 q 703 205 726 272 q 635 88 679 138 q 529 11 592 39 q 388 -17 467 -17 z "
    },
    "\xcf\x8b": {
        ha: 786,
        x_min: 100,
        x_max: 726,
        o: "m 100 0 m 610 842 q 588 790 610 811 q 536 768 567 768 q 484 790 506 768 q 463 842 463 811 q 484 893 463 872 q 536 914 506 914 q 588 893 567 914 q 610 842 610 872 m 319 842 q 299 790 319 811 q 247 768 278 768 q 196 790 217 768 q 175 842 175 811 q 196 893 175 872 q 247 914 217 914 q 299 893 278 914 q 319 842 319 872 m 388 -17 q 262 6 315 -17 q 172 69 208 28 q 118 167 136 110 q 100 296 100 225 l 100 671 l 225 671 l 225 299 q 267 150 225 206 q 388 94 308 94 q 477 115 438 94 q 543 169 517 135 q 583 251 569 204 q 597 350 597 297 q 574 502 597 429 q 501 633 550 575 l 613 688 q 698 529 669 617 q 726 350 726 442 q 703 205 726 272 q 635 88 679 138 q 529 11 592 39 q 388 -17 467 -17 z "
    },
    "\xce\xb0": {
        ha: 786,
        x_min: 100,
        x_max: 726,
        o: "m 100 0 m 342 779 l 368 1063 l 486 1063 l 403 779 l 342 779 m 658 842 q 637 790 658 811 q 585 768 615 768 q 533 790 554 768 q 513 842 513 811 q 533 893 513 872 q 585 914 554 914 q 637 893 615 914 q 658 842 658 872 m 272 842 q 251 790 272 811 q 200 768 229 768 q 147 790 168 768 q 126 842 126 811 q 147 893 126 872 q 200 914 168 914 q 251 893 229 914 q 272 842 272 872 m 388 -17 q 262 6 315 -17 q 172 69 208 28 q 118 167 136 110 q 100 296 100 225 l 100 671 l 225 671 l 225 299 q 267 150 225 206 q 388 94 308 94 q 477 115 438 94 q 543 169 517 135 q 583 251 569 204 q 597 350 597 297 q 574 502 597 429 q 501 633 550 575 l 613 688 q 698 529 669 617 q 726 350 726 442 q 703 205 726 272 q 635 88 679 138 q 529 11 592 39 q 388 -17 467 -17 z "
    },
    "\xcf\x8c": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 353 779 l 381 1063 l 499 1063 l 413 779 l 353 779 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xcf\x8e": {
        ha: 1139,
        x_min: 58,
        x_max: 1079,
        o: "m 58 0 m 525 779 l 553 1063 l 671 1063 l 585 779 l 525 779 m 1079 336 q 1060 199 1079 263 q 1006 87 1042 135 q 920 11 971 39 q 807 -17 869 -17 q 718 0 757 -17 q 650 45 679 17 q 601 110 621 74 q 569 183 582 146 q 537 110 557 146 q 488 45 517 74 q 421 0 460 17 q 332 -17 382 -17 q 217 11 268 -17 q 131 87 167 39 q 77 199 96 135 q 58 336 58 263 q 94 540 58 449 q 197 688 131 632 l 290 614 q 210 487 232 558 q 189 336 189 415 q 199 244 189 288 q 230 167 210 200 q 280 114 250 133 q 347 94 310 94 q 416 114 386 94 q 466 167 446 133 q 497 244 486 200 q 507 336 507 288 l 507 506 l 632 506 l 632 336 q 642 244 632 288 q 673 167 653 200 q 722 114 693 133 q 790 94 751 94 q 858 114 828 94 q 908 167 888 133 q 938 244 928 200 q 949 336 949 288 q 928 487 949 415 q 849 614 907 558 l 942 688 q 1044 540 1008 632 q 1079 336 1079 449 z "
    },
    "\xce\x84": {
        ha: 286,
        x_min: 142,
        x_max: 288,
        o: "m 142 779 l 169 1063 l 288 1063 l 201 779 l 142 779 z "
    },
    "\xce\x85": {
        ha: 776,
        x_min: 122,
        x_max: 654,
        o: "m 338 779 l 364 1063 l 482 1063 l 399 779 l 338 779 m 654 842 q 633 790 654 811 q 581 768 611 768 q 529 790 550 768 q 508 842 508 811 q 529 893 508 872 q 581 914 550 914 q 633 893 611 914 q 654 842 654 872 m 268 842 q 247 790 268 811 q 196 768 225 768 q 143 790 164 768 q 122 842 122 811 q 143 893 122 872 q 196 914 164 914 q 247 893 225 914 q 268 842 268 872 z "
    },
    "\xd0\x90": {
        ha: 925,
        x_min: 7,
        x_max: 917,
        o: "m 7 0 m 758 0 l 683 192 l 240 192 l 165 0 l 7 0 l 375 926 l 549 926 l 917 0 l 758 0 m 461 785 l 281 315 l 643 315 l 461 785 z "
    },
    "\xd0\x91": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 722 926 l 722 804 l 242 804 l 242 569 l 493 569 q 619 547 564 569 q 712 485 674 524 q 769 394 750 446 q 789 285 789 343 q 769 175 789 226 q 713 85 750 124 q 619 23 675 46 q 493 0 564 0 l 103 0 l 103 926 l 722 926 m 242 447 l 242 122 l 475 122 q 598 167 550 122 q 646 285 646 211 q 598 403 646 358 q 475 447 550 447 l 242 447 z "
    },
    "\xd0\x92": {
        ha: 886,
        x_min: 103,
        x_max: 817,
        o: "m 103 0 m 103 0 l 103 926 l 538 926 q 649 908 600 926 q 731 859 697 890 q 781 784 764 828 q 799 690 799 740 q 785 610 799 646 q 750 547 772 574 q 699 502 728 519 q 638 478 669 485 q 708 451 675 472 q 765 400 740 431 q 803 331 789 369 q 817 250 817 292 q 799 150 817 196 q 747 71 781 104 q 663 19 713 38 q 549 0 613 0 l 103 0 m 511 533 q 619 572 582 533 q 656 668 656 610 q 619 765 656 726 q 511 804 582 804 l 242 804 l 242 533 l 511 533 m 518 122 q 633 161 592 122 q 674 268 674 200 q 664 323 674 297 q 635 368 654 349 q 586 399 615 388 q 518 411 557 411 l 242 411 l 242 122 l 518 122 z "
    },
    "\xd0\x93": {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 0 l 103 0 z "
    },
    "\xd0\x94": {
        ha: 1011,
        x_min: 42,
        x_max: 978,
        o: "m 42 111 q 112 127 81 114 q 167 176 143 140 q 208 279 190 213 q 239 456 226 346 l 294 926 l 893 926 l 893 122 l 978 122 l 978 -171 l 839 -171 l 839 0 l 181 0 l 181 -171 l 42 -171 l 42 111 m 378 446 q 328 240 363 317 q 244 122 294 164 l 754 122 l 754 804 l 419 804 l 378 446 z "
    },
    "\xd0\x95": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xd0\x81": {
        ha: 796,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 631 1074 q 609 1022 631 1043 q 557 1000 588 1000 q 505 1022 526 1000 q 483 1074 483 1043 q 505 1125 483 1104 q 557 1146 526 1146 q 609 1125 588 1146 q 631 1074 631 1104 m 340 1074 q 319 1022 340 1043 q 268 1000 299 1000 q 217 1022 238 1000 q 196 1074 196 1043 q 217 1125 196 1104 q 268 1146 238 1146 q 319 1125 299 1146 q 340 1074 340 1104 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 533 l 715 533 l 715 411 l 242 411 l 242 122 l 725 122 l 725 0 l 103 0 z "
    },
    "\xd0\x96": {
        ha: 1279,
        x_min: 17,
        x_max: 1263,
        o: "m 17 0 l 429 488 l 47 926 l 219 926 l 571 508 l 571 926 l 710 926 l 710 510 l 1060 926 l 1232 926 l 851 488 l 1263 0 l 1092 0 l 760 403 l 710 346 l 710 0 l 571 0 l 571 344 l 519 403 l 189 0 l 17 0 z "
    },
    "\xd0\x97": {
        ha: 822,
        x_min: 36,
        x_max: 751,
        o: "m 394 -17 q 278 -5 333 -17 q 176 28 222 7 q 94 76 131 49 q 36 135 58 103 l 114 225 q 234 140 158 172 q 390 107 310 107 q 553 149 494 107 q 613 265 613 192 q 550 377 613 343 q 381 411 488 411 l 193 411 l 193 535 l 381 535 q 466 543 426 535 q 535 568 506 551 q 581 610 564 585 q 597 672 597 636 q 581 734 597 707 q 535 780 564 761 q 467 808 506 799 q 383 817 428 817 q 242 790 308 817 q 125 710 176 763 l 51 796 q 193 899 104 858 q 396 940 282 940 q 529 924 467 940 q 638 874 592 907 q 711 796 685 842 q 738 692 738 750 q 719 606 738 643 q 671 543 700 569 q 606 500 642 517 q 536 478 571 483 q 607 460 569 475 q 676 416 644 444 q 730 347 708 388 q 751 251 751 306 q 725 144 751 193 q 652 59 699 94 q 540 3 606 24 q 394 -17 474 -17 z "
    },
    "\xd0\x98": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 l 103 926 l 242 926 l 242 243 l 746 926 l 889 926 l 889 0 l 750 0 l 750 700 l 238 0 l 103 0 z "
    },
    "\xd0\x99": {
        ha: 992,
        x_min: 103,
        x_max: 889,
        o: "m 103 0 m 103 0 l 103 926 l 242 926 l 242 243 l 746 926 l 889 926 l 889 0 l 750 0 l 750 700 l 238 0 l 103 0 m 739 1099 q 634 1009 697 1042 q 496 976 571 976 q 358 1009 421 976 q 251 1099 294 1042 l 311 1149 q 390 1078 343 1104 q 496 1053 436 1053 q 601 1078 554 1053 q 681 1149 649 1104 l 739 1099 l 739 1099 z "
    },
    "\xd0\x9a": {
        ha: 849,
        x_min: 103,
        x_max: 832,
        o: "m 103 0 m 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 832 0 l 660 0 z "
    },
    "\xd0\x9b": {
        ha: 996,
        x_min: 42,
        x_max: 893,
        o: "m 42 107 q 112 120 81 107 q 167 172 143 133 q 208 278 190 210 q 239 456 226 346 l 294 926 l 893 926 l 893 0 l 754 0 l 754 804 l 419 804 l 378 446 q 329 205 360 296 q 256 65 299 114 q 160 -1 214 15 q 42 -17 106 -17 l 42 107 z "
    },
    "\xd0\x9c": {
        ha: 1142,
        x_min: 103,
        x_max: 1039,
        o: "m 103 0 m 900 0 l 900 725 l 600 0 l 542 0 l 242 725 l 242 0 l 103 0 l 103 926 l 301 926 l 571 272 l 840 926 l 1039 926 l 1039 0 l 900 0 z "
    },
    "\xd0\x9d": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 0 m 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 0 l 754 0 z "
    },
    "\xd0\x9e": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 64 0 m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 664 134 604 107 q 766 209 724 161 q 831 322 808 257 q 854 463 854 386 q 831 604 854 539 q 766 717 808 669 q 664 791 724 764 q 531 818 604 818 q 396 791 456 818 q 294 717 336 764 q 230 604 253 669 q 207 463 207 539 q 230 322 207 386 q 294 209 253 257 q 396 134 336 161 q 531 107 456 107 z "
    },
    "\xd0\x9f": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 0 m 754 0 l 754 804 l 242 804 l 242 0 l 103 0 l 103 926 l 893 926 l 893 0 l 754 0 z "
    },
    "\xd0\xa0": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 103 0 m 103 0 l 103 926 l 493 926 q 619 903 564 926 q 713 842 675 881 q 769 751 750 803 q 789 642 789 700 q 769 532 789 583 q 712 442 750 481 q 619 380 674 403 q 493 357 564 357 l 242 357 l 242 0 l 103 0 m 475 479 q 598 524 550 479 q 646 642 646 568 q 598 760 646 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xd0\xa1": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 64 0 m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 410 792 472 818 q 303 718 349 765 q 233 606 258 671 q 207 463 207 540 q 233 319 207 385 q 303 207 258 254 q 410 133 349 160 q 544 107 472 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    "\xd0\xa2": {
        ha: 796,
        x_min: 42,
        x_max: 754,
        o: "m 42 0 m 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 0 l 329 0 z "
    },
    "\xd0\xa3": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 206 -17 q 94 4 144 -17 q 19 53 43 25 l 74 165 q 130 124 99 140 q 197 107 161 107 q 285 136 253 107 q 353 235 317 165 l 360 249 l 7 926 l 165 926 l 438 369 l 711 926 l 869 926 l 475 169 q 428 94 453 128 q 373 35 404 60 q 301 -3 342 10 q 206 -17 260 -17 z "
    },
    "\xd0\xa4": {
        ha: 1139,
        x_min: 64,
        x_max: 1074,
        o: "m 64 0 m 500 0 l 500 92 q 317 128 397 99 q 180 205 236 157 q 94 318 124 253 q 64 463 64 383 q 94 606 64 540 q 180 719 124 671 q 317 796 236 767 q 500 833 397 825 l 500 926 l 639 926 l 639 833 q 821 796 740 825 q 958 719 901 767 q 1044 606 1014 671 q 1074 463 1074 540 q 1044 318 1074 383 q 958 205 1014 253 q 821 128 901 157 q 639 92 740 99 l 639 0 l 500 0 m 207 463 q 283 295 207 361 q 500 215 358 229 l 500 708 q 283 629 358 694 q 207 463 207 564 m 931 463 q 855 629 931 564 q 639 708 779 694 l 639 215 q 855 296 779 231 q 931 463 931 361 z "
    },
    "\xd0\xa5": {
        ha: 911,
        x_min: 10,
        x_max: 900,
        o: "m 10 0 m 733 0 l 456 378 l 178 0 l 10 0 l 365 475 l 31 926 l 199 926 l 456 571 l 711 926 l 879 926 l 547 476 l 900 0 l 733 0 z "
    },
    "\xd0\xa6": {
        ha: 1011,
        x_min: 103,
        x_max: 978,
        o: "m 839 0 l 103 0 l 103 926 l 242 926 l 242 122 l 754 122 l 754 926 l 893 926 l 893 122 l 978 122 l 978 -171 l 839 -171 l 839 0 z "
    },
    "\xd0\xa7": {
        ha: 863,
        x_min: 76,
        x_max: 758,
        o: "m 215 683 q 267 529 215 579 q 417 479 318 479 q 526 488 474 479 q 619 513 578 497 l 619 926 l 758 926 l 758 0 l 619 0 l 619 390 q 522 367 576 376 q 404 357 467 357 q 259 381 321 357 q 156 447 197 404 q 96 549 115 489 q 76 683 76 610 l 76 926 l 215 926 l 215 683 z "
    },
    "\xd0\xa8": {
        ha: 1328,
        x_min: 103,
        x_max: 1224,
        o: "m 1224 926 l 1224 0 l 103 0 l 103 926 l 242 926 l 242 122 l 594 122 l 594 926 l 733 926 l 733 122 l 1085 122 l 1085 926 l 1224 926 z "
    },
    "\xd0\xa9": {
        ha: 1344,
        x_min: 107,
        x_max: 1313,
        o: "m 1228 926 l 1228 122 l 1313 122 l 1313 -171 l 1174 -171 l 1174 0 l 107 0 l 107 926 l 246 926 l 246 122 l 597 122 l 597 926 l 736 926 l 736 122 l 1089 122 l 1089 926 l 1228 926 z "
    },
    "\xd0\xaa": {
        ha: 1056,
        x_min: 42,
        x_max: 1015,
        o: "m 329 0 l 329 804 l 42 804 l 42 926 l 468 926 l 468 569 l 718 569 q 844 547 789 569 q 938 485 900 524 q 995 394 975 446 q 1015 285 1015 343 q 996 175 1015 226 q 938 85 976 124 q 844 23 900 46 q 718 0 789 0 l 329 0 m 468 447 l 468 122 l 700 122 q 824 167 776 122 q 872 285 872 211 q 824 403 872 358 q 700 447 776 447 l 468 447 z "
    },
    "\xd0\xab": {
        ha: 1125,
        x_min: 103,
        x_max: 1021,
        o: "m 242 926 l 242 569 l 493 569 q 619 547 564 569 q 712 485 674 524 q 769 394 750 446 q 789 285 789 343 q 769 175 789 226 q 713 85 750 124 q 619 23 675 46 q 493 0 564 0 l 103 0 l 103 926 l 242 926 m 242 447 l 242 122 l 475 122 q 598 167 550 122 q 646 285 646 211 q 598 403 646 358 q 475 447 550 447 l 242 447 m 882 0 l 882 926 l 1021 926 l 1021 0 l 882 0 z "
    },
    "\xd0\xac": {
        ha: 829,
        x_min: 103,
        x_max: 789,
        o: "m 242 926 l 242 569 l 493 569 q 619 547 564 569 q 712 485 674 524 q 769 394 750 446 q 789 285 789 343 q 769 175 789 226 q 713 85 750 124 q 619 23 675 46 q 493 0 564 0 l 103 0 l 103 926 l 242 926 m 242 447 l 242 122 l 475 122 q 598 167 550 122 q 646 285 646 211 q 598 403 646 358 q 475 447 550 447 l 242 447 z "
    },
    "\xd0\xad": {
        ha: 943,
        x_min: 36,
        x_max: 879,
        o: "m 399 -17 q 278 -1 332 -17 q 179 40 224 14 q 99 103 135 67 q 36 179 64 139 l 154 242 q 255 145 190 183 q 399 107 319 107 q 522 129 465 107 q 624 192 579 151 q 697 288 668 232 q 733 411 725 343 l 231 411 l 231 533 l 731 533 q 690 649 719 597 q 617 739 661 701 q 518 797 574 776 q 399 818 463 818 q 255 780 319 818 q 154 683 190 742 l 36 746 q 98 822 63 786 q 178 885 133 858 q 278 926 224 911 q 399 942 332 942 q 588 907 500 942 q 740 809 675 872 q 842 658 804 746 q 879 463 879 569 q 842 267 879 356 q 740 116 804 179 q 588 18 675 53 q 399 -17 500 -17 z "
    },
    "\xd0\xae": {
        ha: 1393,
        x_min: 103,
        x_max: 1329,
        o: "m 863 -17 q 683 15 765 -17 q 540 105 601 47 q 441 241 478 163 q 396 414 404 319 l 242 414 l 242 0 l 103 0 l 103 926 l 242 926 l 242 538 l 399 538 q 449 701 411 626 q 548 828 488 775 q 688 912 608 882 q 863 942 768 942 q 1051 906 965 942 q 1199 806 1138 869 q 1295 653 1261 742 q 1329 463 1329 565 q 1295 272 1329 360 q 1199 119 1261 183 q 1051 19 1138 56 q 863 -17 965 -17 m 863 107 q 996 134 936 107 q 1098 209 1056 161 q 1163 322 1140 257 q 1186 463 1186 386 q 1163 604 1186 539 q 1098 717 1140 669 q 996 791 1056 764 q 863 818 936 818 q 728 791 788 818 q 626 717 668 764 q 560 604 583 669 q 538 463 538 539 q 560 322 538 386 q 626 209 583 257 q 728 134 668 161 q 863 107 788 107 z "
    },
    "\xd0\xaf": {
        ha: 858,
        x_min: 61,
        x_max: 756,
        o: "m 61 0 l 299 371 q 213 396 254 376 q 140 449 172 415 q 89 531 108 483 q 69 642 69 579 q 91 758 69 706 q 151 849 113 811 q 244 906 190 886 q 365 926 299 926 l 756 926 l 756 0 l 617 0 l 617 357 l 443 357 l 222 0 l 61 0 m 617 479 l 617 804 l 383 804 q 260 760 308 804 q 213 642 213 715 q 260 524 213 568 q 383 479 308 479 l 617 479 z "
    },
    "\xd0\x82": {
        ha: 1065,
        x_min: 42,
        x_max: 1011,
        o: "m 699 107 q 826 152 779 107 q 872 274 872 197 l 872 286 q 821 419 872 374 q 671 465 769 465 q 562 456 614 465 q 468 432 510 447 l 468 0 l 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 554 q 566 578 511 569 q 683 588 621 588 q 828 564 767 588 q 931 499 890 540 q 992 403 972 458 q 1011 286 1011 349 l 1011 274 q 986 145 1011 200 q 919 54 961 90 q 819 1 876 18 q 699 -17 763 -17 l 699 107 z "
    },
    "\xd0\x83": {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 103 0 m 403 1004 l 311 1004 l 511 1204 l 635 1204 l 403 1004 m 103 0 l 103 926 l 725 926 l 725 804 l 242 804 l 242 0 l 103 0 z "
    },
    "\xd0\x84": {
        ha: 943,
        x_min: 64,
        x_max: 907,
        o: "m 544 -17 q 356 18 443 -17 q 203 116 268 53 q 101 267 139 179 q 64 463 64 356 q 101 658 64 569 q 203 809 139 746 q 356 907 268 872 q 544 942 443 942 q 665 926 611 942 q 765 885 719 911 q 844 822 810 858 q 907 746 879 786 l 789 683 q 688 780 753 742 q 544 818 624 818 q 425 797 481 818 q 326 739 369 776 q 253 649 282 701 q 213 533 224 597 l 713 533 l 713 411 l 210 411 q 246 288 218 343 q 318 192 274 232 q 420 129 363 151 q 544 107 478 107 q 688 145 624 107 q 789 242 753 183 l 907 179 q 844 103 879 139 q 764 40 808 67 q 665 -1 719 14 q 544 -17 611 -17 z "
    },
    "\xd0\x89": {
        ha: 1481,
        x_min: 42,
        x_max: 1440,
        o: "m 42 107 q 112 120 81 107 q 167 172 143 133 q 208 278 190 210 q 239 456 226 346 l 294 926 l 893 926 l 893 569 l 1144 569 q 1270 547 1215 569 q 1363 485 1325 524 q 1420 394 1400 446 q 1440 285 1440 343 q 1421 175 1440 226 q 1363 85 1401 124 q 1270 23 1325 46 q 1144 0 1215 0 l 754 0 l 754 804 l 419 804 l 378 446 q 329 205 360 296 q 256 65 299 114 q 160 -1 214 15 q 42 -17 106 -17 l 42 107 m 893 447 l 893 122 l 1126 122 q 1249 167 1201 122 q 1297 285 1297 211 q 1249 403 1297 358 q 1126 447 1201 447 l 893 447 z "
    },
    "\xd0\x8a": {
        ha: 1481,
        x_min: 103,
        x_max: 1440,
        o: "m 103 926 l 242 926 l 242 538 l 754 538 l 754 926 l 893 926 l 893 538 l 1161 538 q 1280 516 1228 538 q 1367 458 1332 494 q 1422 372 1403 421 q 1440 268 1440 322 q 1422 165 1440 214 q 1367 79 1403 115 q 1280 22 1332 43 q 1161 0 1228 0 l 754 0 l 754 414 l 242 414 l 242 0 l 103 0 l 103 926 m 1143 122 q 1255 163 1213 122 q 1297 268 1297 203 q 1255 374 1297 335 q 1143 414 1213 414 l 893 414 l 893 122 l 1143 122 z "
    },
    "\xd0\x8c": {
        ha: 849,
        x_min: 103,
        x_max: 832,
        o: "m 103 0 m 439 1004 l 347 1004 l 547 1204 l 671 1204 l 439 1004 m 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 832 0 l 660 0 z "
    },
    "\xd0\x8b": {
        ha: 1093,
        x_min: 42,
        x_max: 1011,
        o: "m 872 263 q 821 416 872 367 q 671 465 769 465 q 562 456 614 465 q 468 432 510 447 l 468 0 l 329 0 l 329 804 l 42 804 l 42 926 l 754 926 l 754 804 l 468 804 l 468 554 q 566 578 511 569 q 683 588 621 588 q 828 564 767 588 q 931 498 890 540 q 992 395 972 456 q 1011 263 1011 335 l 1011 0 l 872 0 l 872 263 z "
    },
    "\xd0\x8e": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 206 -17 q 94 4 144 -17 q 19 53 43 25 l 74 165 q 130 124 99 140 q 197 107 161 107 q 285 136 253 107 q 353 235 317 165 l 360 249 l 7 926 l 165 926 l 438 369 l 711 926 l 869 926 l 475 169 q 428 94 453 128 q 373 35 404 60 q 301 -3 342 10 q 206 -17 260 -17 m 682 1099 q 577 1009 640 1042 q 439 976 514 976 q 301 1009 364 976 q 194 1099 238 1042 l 254 1149 q 333 1078 286 1104 q 439 1053 379 1053 q 544 1078 497 1053 q 624 1149 592 1104 l 682 1099 z "
    },
    "\xd0\x8f": {
        ha: 996,
        x_min: 103,
        x_max: 893,
        o: "m 103 926 l 242 926 l 242 122 l 754 122 l 754 926 l 893 926 l 893 0 l 568 0 l 568 -178 l 429 -178 l 429 0 l 103 0 l 103 926 z "
    },
    "\xd2\x90": {
        ha: 772,
        x_min: 103,
        x_max: 725,
        o: "m 242 0 l 103 0 l 103 926 l 586 926 l 586 1097 l 725 1097 l 725 804 l 242 804 l 242 0 z "
    },
    "\xd0\x86": {
        ha: 346,
        x_min: 103,
        x_max: 242,
        o: "m 103 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 z "
    },
    "\xd0\x87": {
        ha: 346,
        x_min: -43,
        x_max: 392,
        o: "m 0 0 m 103 0 l 103 926 l 242 926 l 242 0 l 103 0 m 392 1074 q 370 1022 392 1043 q 318 1000 349 1000 q 266 1022 288 1000 q 244 1074 244 1043 q 266 1125 244 1104 q 318 1146 288 1146 q 370 1125 349 1146 q 392 1074 392 1104 m 101 1074 q 81 1022 101 1043 q 29 1000 60 1000 q -22 1022 -1 1000 q -43 1074 -43 1043 q -22 1125 -43 1104 q 29 1146 -1 1146 q 81 1125 60 1146 q 101 1074 101 1104 z "
    },
    "\xd0\x88": {
        ha: 664,
        x_min: 14,
        x_max: 560,
        o: "m 14 0 m 257 -17 q 123 7 183 -17 q 14 85 63 31 l 81 190 q 149 132 110 157 q 247 107 189 107 q 374 156 328 107 q 421 288 421 206 l 421 926 l 560 926 l 560 286 q 537 151 560 208 q 473 57 514 94 q 376 1 432 19 q 257 -17 321 -17 z "
    },
    "\xd0\x85": {
        ha: 819,
        x_min: 46,
        x_max: 761,
        o: "m 46 0 m 411 -17 q 196 24 286 -17 q 46 131 106 64 l 125 238 q 246 146 172 185 q 417 107 319 107 q 511 120 472 107 q 574 153 550 133 q 609 199 599 174 q 619 250 619 225 q 601 311 619 286 q 552 353 583 336 q 481 382 521 369 q 396 406 440 394 q 283 438 340 419 q 180 485 226 456 q 104 560 133 514 q 75 676 75 606 q 99 782 75 733 q 167 866 124 831 q 270 921 210 901 q 403 940 331 940 q 594 907 511 940 q 740 811 678 874 l 660 708 q 537 791 607 765 q 392 817 467 817 q 266 781 314 817 q 218 686 218 744 q 235 633 218 654 q 283 597 253 613 q 351 569 313 581 q 433 547 390 558 q 549 513 490 532 q 654 463 607 494 q 731 384 701 432 q 761 263 761 336 q 742 158 761 208 q 680 69 722 107 q 571 7 638 31 q 411 -17 504 -17 z "
    },
    "\xd2\x92": {
        ha: 772,
        x_min: 14,
        x_max: 725,
        o: "m 103 0 l 103 406 l 14 406 l 14 508 l 103 508 l 103 926 l 725 926 l 725 804 l 242 804 l 242 508 l 507 508 l 507 406 l 242 406 l 242 0 l 103 0 z "
    },
    "\xd2\x9a": {
        ha: 874,
        x_min: 103,
        x_max: 856,
        o: "m 717 -171 l 717 0 l 660 0 l 329 403 l 242 304 l 242 0 l 103 0 l 103 926 l 242 926 l 242 467 l 629 926 l 801 926 l 419 488 l 726 124 l 856 124 l 856 -171 l 717 -171 z "
    },
    "\xd2\xb2": {
        ha: 951,
        x_min: 10,
        x_max: 936,
        o: "m 797 -171 l 797 0 l 733 0 l 456 378 l 178 0 l 10 0 l 365 475 l 31 926 l 199 926 l 456 571 l 711 926 l 879 926 l 547 476 l 808 124 l 936 124 l 936 -171 l 797 -171 z "
    },
    "\xd3\xa8": {
        ha: 1063,
        x_min: 64,
        x_max: 997,
        o: "m 531 -17 q 341 19 426 -17 q 194 119 256 56 q 98 272 132 183 q 64 463 64 360 q 98 653 64 565 q 194 806 132 742 q 341 906 256 869 q 531 942 426 942 q 720 906 635 942 q 867 806 806 869 q 963 653 929 742 q 997 463 997 565 q 963 272 997 360 q 867 119 929 183 q 720 19 806 56 q 531 -17 635 -17 m 531 107 q 653 130 597 107 q 750 193 708 153 q 817 289 792 233 q 851 411 843 344 l 210 411 q 242 289 217 344 q 309 193 268 233 q 406 130 350 153 q 531 107 463 107 m 531 818 q 410 797 465 818 q 315 738 356 776 q 247 648 274 700 q 211 533 221 596 l 849 533 q 812 648 839 596 q 744 738 785 700 q 649 797 703 776 q 531 818 594 818 z "
    },
    "\xd0\xb0": {
        ha: 739,
        x_min: 61,
        x_max: 639,
        o: "m 61 0 m 514 0 l 514 74 q 418 6 474 29 q 294 -17 363 -17 q 211 -3 253 -17 q 136 39 169 11 q 82 108 103 67 q 61 206 61 150 q 82 304 61 263 q 136 373 103 346 q 211 413 169 400 q 294 425 253 425 q 419 403 363 425 q 514 336 475 381 l 514 447 q 468 545 514 510 q 350 581 422 581 q 149 492 238 581 l 94 578 q 369 688 206 688 q 473 675 424 688 q 559 634 522 663 q 617 561 596 606 q 639 453 639 517 l 639 0 l 514 0 m 342 71 q 440 90 394 71 q 514 147 486 110 l 514 261 q 440 318 486 299 q 342 338 394 338 q 231 301 274 338 q 188 204 188 264 q 231 108 188 144 q 342 71 274 71 z "
    },
    "\xd0\xb1": {
        ha: 801,
        x_min: 60,
        x_max: 735,
        o: "m 397 94 q 486 115 447 94 q 551 168 525 135 q 592 246 578 201 q 606 339 606 290 q 592 428 606 385 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 428 217 471 q 189 339 189 385 q 203 246 189 290 q 243 168 217 201 q 308 115 269 135 q 397 94 347 94 m 397 -17 q 256 13 318 -17 q 149 93 193 42 q 83 215 106 144 q 60 367 60 285 q 81 577 60 489 q 146 725 103 665 q 253 817 189 785 q 404 861 318 850 q 494 877 458 869 q 552 892 531 885 q 582 908 574 900 q 590 926 590 917 l 713 926 q 685 851 713 881 q 617 803 658 822 q 528 776 576 785 q 438 761 479 767 q 323 733 369 753 q 245 687 276 714 q 197 626 214 660 q 172 557 181 593 q 274 651 211 614 q 419 688 338 688 q 549 659 490 688 q 649 583 607 631 q 713 472 690 535 q 735 338 735 408 q 712 202 735 267 q 646 89 689 138 q 540 12 603 40 q 397 -17 476 -17 z "
    },
    "\xd0\xb2": {
        ha: 782,
        x_min: 100,
        x_max: 692,
        o: "m 100 0 l 100 671 l 485 671 q 628 622 576 671 q 679 499 679 574 q 646 399 679 438 q 568 346 613 360 q 656 287 621 333 q 692 182 692 240 q 640 51 692 101 q 493 0 589 0 l 100 0 m 467 110 q 537 133 511 110 q 563 199 563 157 q 539 262 563 235 q 467 289 515 289 l 225 289 l 225 110 l 467 110 m 464 399 q 528 422 506 399 q 551 479 551 444 q 528 538 551 515 q 464 561 506 561 l 225 561 l 225 399 l 464 399 z "
    },
    "\xd0\xb3": {
        ha: 617,
        x_min: 100,
        x_max: 589,
        o: "m 589 561 l 225 561 l 225 0 l 100 0 l 100 671 l 589 671 l 589 561 z "
    },
    "\xd0\xb4": {
        ha: 786,
        x_min: 25,
        x_max: 754,
        o: "m 25 103 q 65 119 47 107 q 98 156 83 131 q 124 226 113 182 q 144 342 136 271 l 186 671 l 678 671 l 678 110 l 754 110 l 754 -171 l 629 -171 l 629 0 l 150 0 l 150 -171 l 25 -171 l 25 103 m 269 328 q 236 192 260 244 q 176 110 213 140 l 553 110 l 553 561 l 297 561 l 269 328 z "
    },
    "\xd0\xb5": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xd1\x91": {
        ha: 778,
        x_min: 58,
        x_max: 721,
        o: "m 58 0 m 613 842 q 591 790 613 811 q 539 768 569 768 q 487 790 508 768 q 465 842 465 811 q 487 893 465 872 q 539 914 508 914 q 591 893 569 914 q 613 842 613 872 m 322 842 q 301 790 322 811 q 250 768 281 768 q 199 790 219 768 q 178 842 178 811 q 199 893 178 872 q 250 914 219 914 q 301 893 281 914 q 322 842 322 872 m 406 -17 q 267 9 331 -17 q 157 81 203 35 q 85 192 111 126 q 58 336 58 257 q 83 473 58 408 q 153 585 108 538 q 259 660 197 632 q 394 688 321 688 q 530 660 469 688 q 633 583 590 632 q 698 468 675 535 q 721 325 721 401 l 721 294 l 190 294 q 211 214 194 251 q 257 148 228 176 q 327 103 286 119 q 418 86 368 86 q 525 106 471 86 q 617 165 579 126 l 675 83 q 556 9 625 35 q 406 -17 488 -17 m 599 385 q 585 453 597 418 q 549 518 574 489 q 485 566 524 547 q 394 585 447 585 q 307 567 344 585 q 244 519 269 549 q 205 455 218 490 q 189 385 192 419 l 599 385 z "
    },
    "\xd0\xb6": {
        ha: 1001,
        x_min: 14,
        x_max: 988,
        o: "m 14 0 l 306 367 l 17 671 l 174 671 l 438 392 l 438 671 l 563 671 l 563 390 l 828 671 l 983 671 l 696 367 l 988 0 l 829 0 l 606 289 l 563 244 l 563 0 l 438 0 l 438 246 l 396 289 l 172 0 l 14 0 z "
    },
    "\xd0\xb7": {
        ha: 710,
        x_min: 33,
        x_max: 651,
        o: "m 339 -17 q 160 13 236 -17 q 33 93 83 43 l 93 172 q 204 107 140 128 q 339 86 268 86 q 471 115 422 86 q 519 190 519 143 q 505 236 519 217 q 464 267 490 256 q 403 283 438 278 q 326 289 368 289 l 179 289 l 179 390 l 326 390 q 456 415 406 390 q 507 490 507 439 q 456 558 507 532 q 328 585 406 585 q 108 501 192 585 l 44 578 q 162 656 93 626 q 322 686 231 686 q 451 674 393 686 q 551 639 510 663 q 615 582 593 615 q 638 506 638 549 q 621 441 638 469 q 578 392 604 413 q 519 360 551 372 q 457 343 488 347 q 522 330 488 340 q 585 300 556 319 q 633 251 614 281 q 651 181 651 221 q 630 101 651 138 q 568 39 608 65 q 470 -2 528 13 q 339 -17 413 -17 z "
    },
    "\xd0\xb8": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 l 100 671 l 225 671 l 225 189 l 554 671 l 678 671 l 678 0 l 553 0 l 553 493 l 219 0 l 100 0 z "
    },
    "\xd0\xb9": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 m 100 0 l 100 671 l 225 671 l 225 189 l 554 671 l 678 671 l 678 0 l 553 0 l 553 493 l 219 0 l 100 0 m 632 867 q 527 777 590 810 q 389 744 464 744 q 251 777 314 744 q 144 867 188 810 l 204 917 q 283 847 236 872 q 389 821 329 821 q 494 847 447 821 q 574 917 542 872 l 632 867 l 632 867 z "
    },
    "\xd0\xba": {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 100 0 m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 671 l 225 671 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    "\xd0\xbb": {
        ha: 778,
        x_min: 25,
        x_max: 678,
        o: "m 25 86 q 98 144 69 86 q 144 342 126 201 l 186 671 l 678 671 l 678 0 l 553 0 l 553 561 l 297 561 l 269 328 q 188 63 247 143 q 25 -17 128 -17 l 25 86 z "
    },
    "\xd0\xbc": {
        ha: 917,
        x_min: 100,
        x_max: 817,
        o: "m 692 0 l 692 497 l 483 0 l 435 0 l 225 497 l 225 0 l 100 0 l 100 671 l 264 671 l 458 206 l 651 671 l 817 671 l 817 0 l 692 0 z "
    },
    "\xd0\xbd": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 100 0 l 100 671 l 225 671 l 225 399 l 553 399 l 553 671 l 678 671 l 678 0 l 553 0 l 553 289 l 225 289 l 225 0 l 100 0 z "
    },
    "\xd0\xbe": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 58 0 m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 486 114 447 94 q 551 167 525 133 q 592 244 578 200 q 606 336 606 288 q 592 427 606 383 q 551 504 578 471 q 486 557 525 538 q 397 576 447 576 q 308 557 347 576 q 243 504 269 538 q 203 427 217 471 q 189 336 189 383 q 203 244 189 288 q 243 167 217 200 q 308 114 269 133 q 397 94 347 94 z "
    },
    "\xd0\xbf": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 553 0 l 553 561 l 225 561 l 225 0 l 100 0 l 100 671 l 678 671 l 678 0 l 553 0 z "
    },
    "\xd1\x80": {
        ha: 799,
        x_min: 100,
        x_max: 743,
        o: "m 100 0 m 444 -17 q 322 13 378 -17 q 225 97 265 42 l 225 -256 l 100 -256 l 100 671 l 225 671 l 225 575 q 319 656 261 625 q 444 688 376 688 q 565 663 510 688 q 659 594 619 639 q 721 483 699 549 q 743 336 743 418 q 721 189 743 254 q 659 78 699 124 q 565 8 619 32 q 444 -17 510 -17 m 411 94 q 495 113 458 94 q 558 163 532 131 q 599 239 585 194 q 613 336 613 283 q 599 432 613 388 q 558 508 585 476 q 495 558 532 540 q 411 576 458 576 q 302 547 354 576 q 225 478 250 518 l 225 193 q 301 124 250 153 q 411 94 353 94 z "
    },
    "\xd1\x81": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 58 0 m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 568 493 q 406 576 510 576 q 316 558 356 576 q 248 508 276 540 q 204 432 219 476 q 189 336 189 388 q 204 240 189 283 q 248 163 219 196 q 316 113 276 131 q 406 94 356 94 q 568 178 507 94 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    "\xd1\x82": {
        ha: 569,
        x_min: 29,
        x_max: 542,
        o: "m 222 0 l 222 561 l 29 561 l 29 671 l 542 671 l 542 561 l 347 561 l 347 0 l 222 0 z "
    },
    "\xd1\x83": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 z "
    },
    "\xd1\x84": {
        ha: 1133,
        x_min: 76,
        x_max: 1056,
        o: "m 322 688 q 423 658 376 688 q 504 574 469 629 l 504 926 l 629 926 l 629 575 q 706 656 660 625 q 810 688 753 688 q 909 663 864 688 q 987 594 954 639 q 1038 483 1019 549 q 1056 336 1056 418 q 1038 189 1056 254 q 987 78 1019 124 q 909 8 954 32 q 810 -17 864 -17 q 710 13 757 -17 q 629 97 663 42 l 629 -256 l 504 -256 l 504 96 q 426 15 474 46 q 322 -17 379 -17 q 223 8 268 -17 q 145 77 178 32 q 94 188 113 122 q 76 335 76 253 q 94 482 76 417 q 145 593 113 547 q 223 663 178 639 q 322 688 268 688 m 360 576 q 294 558 324 576 q 245 508 265 540 q 214 432 225 476 q 203 335 203 388 q 214 238 203 282 q 245 163 225 194 q 294 113 265 131 q 360 94 324 94 q 444 124 403 94 q 504 193 485 153 l 504 478 q 444 547 485 518 q 360 576 404 576 m 774 94 q 839 113 810 94 q 888 163 868 131 q 919 239 908 194 q 931 336 931 283 q 919 432 931 388 q 888 508 908 476 q 839 558 868 540 q 774 576 810 576 q 730 569 751 576 q 690 547 708 561 q 655 516 671 533 q 629 478 639 499 l 629 193 q 689 124 649 153 q 774 94 729 94 z "
    },
    "\xd1\x85": {
        ha: 682,
        x_min: 11,
        x_max: 671,
        o: "m 11 0 m 529 0 l 342 261 l 153 0 l 11 0 l 263 344 l 26 671 l 168 671 l 342 429 l 514 671 l 656 671 l 418 344 l 671 0 l 529 0 z "
    },
    "\xd1\x86": {
        ha: 786,
        x_min: 100,
        x_max: 754,
        o: "m 629 0 l 100 0 l 100 671 l 225 671 l 225 110 l 553 110 l 553 671 l 678 671 l 678 110 l 754 110 l 754 -171 l 629 -171 l 629 0 z "
    },
    "\xd1\x87": {
        ha: 758,
        x_min: 81,
        x_max: 658,
        o: "m 206 671 l 206 486 q 247 369 206 400 q 371 338 289 338 q 463 347 421 338 q 533 369 506 356 l 533 671 l 658 671 l 658 0 l 533 0 l 533 268 q 446 238 497 249 q 335 228 394 228 q 139 281 197 228 q 81 444 81 335 l 81 671 l 206 671 z "
    },
    "\xd1\x88": {
        ha: 1093,
        x_min: 100,
        x_max: 993,
        o: "m 993 671 l 993 0 l 100 0 l 100 671 l 225 671 l 225 110 l 483 110 l 483 671 l 608 671 l 608 110 l 868 110 l 868 671 l 993 671 z "
    },
    "\xd1\x89": {
        ha: 1113,
        x_min: 100,
        x_max: 1081,
        o: "m 993 671 l 993 110 l 1081 110 l 1081 -171 l 956 -171 l 956 0 l 100 0 l 100 671 l 225 671 l 225 110 l 483 110 l 483 671 l 608 671 l 608 110 l 868 110 l 868 671 l 993 671 z "
    },
    "\xd1\x8a": {
        ha: 860,
        x_min: 29,
        x_max: 808,
        o: "m 222 0 l 222 561 l 29 561 l 29 671 l 347 671 l 347 419 l 590 419 q 685 403 644 419 q 753 357 726 386 q 794 290 781 328 q 808 210 808 251 q 794 130 808 168 q 753 63 781 92 q 684 17 725 33 q 590 0 643 0 l 222 0 m 347 310 l 347 110 l 576 110 q 653 138 626 110 q 681 210 681 165 q 653 282 681 254 q 576 310 626 310 l 347 310 z "
    },
    "\xd1\x8b": {
        ha: 1015,
        x_min: 100,
        x_max: 915,
        o: "m 225 671 l 225 419 l 468 419 q 563 403 522 419 q 631 357 604 386 q 672 290 658 328 q 686 210 686 251 q 672 130 686 168 q 631 63 658 92 q 562 17 603 33 q 468 0 521 0 l 100 0 l 100 671 l 225 671 m 225 310 l 225 110 l 454 110 q 531 138 504 110 q 558 210 558 165 q 531 282 558 254 q 454 310 504 310 l 225 310 m 790 0 l 790 671 l 915 671 l 915 0 l 790 0 z "
    },
    "\xd1\x8c": {
        ha: 738,
        x_min: 100,
        x_max: 686,
        o: "m 225 671 l 225 419 l 468 419 q 563 403 522 419 q 631 357 604 386 q 672 290 658 328 q 686 210 686 251 q 672 130 686 168 q 631 63 658 92 q 562 17 603 33 q 468 0 521 0 l 100 0 l 100 671 l 225 671 m 225 310 l 225 110 l 454 110 q 531 138 504 110 q 558 210 558 165 q 531 282 558 254 q 454 310 504 310 l 225 310 z "
    },
    "\xd1\x8d": {
        ha: 689,
        x_min: 38,
        x_max: 631,
        o: "m 289 -17 q 135 18 194 -17 q 38 101 75 53 l 117 175 q 190 109 147 132 q 283 86 232 86 q 426 140 371 86 q 496 285 482 193 l 176 285 l 176 393 l 494 393 q 425 533 481 481 q 283 585 369 585 q 117 497 179 585 l 38 569 q 135 653 75 618 q 289 688 194 688 q 428 661 365 688 q 535 588 490 635 q 606 476 581 540 q 631 336 631 411 q 606 197 631 261 q 535 85 581 132 q 428 10 490 38 q 289 -17 365 -17 z "
    },
    "\xd1\x8e": {
        ha: 1081,
        x_min: 100,
        x_max: 1021,
        o: "m 682 -17 q 552 7 611 -17 q 450 72 493 31 q 381 168 407 113 q 347 289 354 224 l 225 289 l 225 0 l 100 0 l 100 671 l 225 671 l 225 399 l 349 399 q 385 513 358 460 q 456 604 413 565 q 556 665 499 643 q 682 688 613 688 q 824 660 761 688 q 930 584 886 632 q 997 472 974 536 q 1021 336 1021 408 q 997 199 1021 263 q 930 87 974 135 q 824 11 886 39 q 682 -17 761 -17 m 682 94 q 772 114 732 94 q 838 167 811 133 q 878 244 864 200 q 892 336 892 288 q 878 427 892 383 q 838 504 864 471 q 772 557 811 538 q 682 576 732 576 q 593 557 632 576 q 528 504 554 538 q 489 427 503 471 q 475 336 475 383 q 489 244 475 288 q 528 167 503 200 q 593 114 554 133 q 682 94 632 94 z "
    },
    "\xd1\x8f": {
        ha: 769,
        x_min: 76,
        x_max: 671,
        o: "m 76 0 l 249 257 q 131 322 178 269 q 85 461 85 375 q 99 542 85 504 q 140 609 113 581 q 208 654 168 638 q 301 671 249 671 l 671 671 l 671 0 l 546 0 l 546 251 l 376 251 l 221 0 l 76 0 m 546 361 l 546 561 l 315 561 q 240 533 267 561 q 213 461 213 506 q 239 389 213 417 q 315 361 265 361 l 546 361 z "
    },
    "\xd1\x92": {
        ha: 781,
        x_min: 13,
        x_max: 682,
        o: "m 471 -272 q 396 -264 426 -272 l 411 -160 q 433 -164 421 -162 q 457 -165 446 -165 q 528 -140 499 -165 q 557 -53 557 -114 l 557 429 q 518 544 557 513 q 413 576 479 576 q 305 547 354 576 q 228 479 256 517 l 228 0 l 103 0 l 103 740 l 13 740 l 13 817 l 103 817 l 103 926 l 228 926 l 228 817 l 442 817 l 442 740 l 228 740 l 228 576 q 269 617 244 597 q 325 652 294 636 q 391 678 356 668 q 465 688 426 688 q 627 633 572 688 q 682 471 682 578 l 682 -53 q 628 -215 682 -157 q 471 -272 575 -272 z "
    },
    "\xd1\x93": {
        ha: 617,
        x_min: 100,
        x_max: 589,
        o: "m 100 0 m 354 772 l 263 772 l 463 972 l 586 972 l 354 772 m 589 561 l 225 561 l 225 0 l 100 0 l 100 671 l 589 671 l 589 561 z "
    },
    "\xd1\x94": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 400 -17 q 261 10 324 -17 q 153 85 199 38 q 83 197 108 132 q 58 336 58 261 q 83 476 58 411 q 153 588 108 540 q 261 661 199 635 q 400 688 324 688 q 556 653 496 688 q 651 569 615 618 l 574 497 q 406 585 510 585 q 263 533 318 585 q 193 393 208 481 l 514 393 l 514 285 l 193 285 q 262 140 206 193 q 406 86 318 86 q 499 109 457 86 q 574 175 542 132 l 651 101 q 556 18 615 53 q 400 -17 496 -17 z "
    },
    "\xd1\x99": {
        ha: 1192,
        x_min: 25,
        x_max: 1139,
        o: "m 25 86 q 98 144 69 86 q 144 342 126 201 l 186 671 l 678 671 l 678 419 l 922 419 q 1017 403 976 419 q 1084 357 1057 386 q 1125 290 1111 328 q 1139 210 1139 251 q 1125 130 1139 168 q 1084 63 1111 92 q 1016 17 1057 33 q 922 0 975 0 l 553 0 l 553 561 l 297 561 l 269 328 q 188 63 247 143 q 25 -17 128 -17 l 25 86 m 678 310 l 678 110 l 908 110 q 985 138 958 110 q 1011 210 1011 165 q 985 282 1011 254 q 908 310 958 310 l 678 310 z "
    },
    "\xd1\x9a": {
        ha: 1192,
        x_min: 100,
        x_max: 1139,
        o: "m 100 0 l 100 671 l 225 671 l 225 399 l 553 399 l 553 671 l 678 671 l 678 399 l 933 399 q 1023 383 985 399 q 1087 340 1061 367 q 1126 276 1113 313 q 1139 199 1139 239 q 1126 123 1139 158 q 1087 60 1113 88 q 1022 16 1061 32 q 933 0 983 0 l 553 0 l 553 289 l 225 289 l 225 0 l 100 0 m 678 289 l 678 110 l 918 110 q 988 135 964 110 q 1011 199 1011 160 q 988 264 1011 239 q 918 289 964 289 l 678 289 z "
    },
    "\xd1\x9c": {
        ha: 722,
        x_min: 100,
        x_max: 708,
        o: "m 100 0 m 374 772 l 282 772 l 482 972 l 606 972 l 374 772 m 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 671 l 225 671 l 225 331 l 549 671 l 706 671 l 417 367 l 708 0 l 550 0 z "
    },
    "\xd1\x9b": {
        ha: 781,
        x_min: 13,
        x_max: 681,
        o: "m 228 740 l 228 576 q 269 617 244 597 q 325 652 294 636 q 391 678 356 668 q 465 688 426 688 q 681 474 681 688 l 681 0 l 556 0 l 556 432 q 517 546 556 515 q 413 576 478 576 q 305 547 354 576 q 228 479 256 517 l 228 0 l 103 0 l 103 740 l 13 740 l 13 817 l 103 817 l 103 926 l 228 926 l 228 817 l 442 817 l 442 740 l 228 740 z "
    },
    "\xd1\x9e": {
        ha: 690,
        x_min: 1,
        x_max: 689,
        o: "m 1 0 m 86 -150 q 113 -158 97 -156 q 142 -161 129 -161 q 200 -147 176 -161 q 239 -96 224 -133 l 278 -7 l 1 671 l 135 671 l 344 144 l 554 671 l 689 671 l 358 -128 q 272 -239 326 -207 q 144 -272 218 -271 q 106 -269 129 -272 q 67 -262 82 -267 l 86 -150 m 589 867 q 484 777 547 810 q 346 744 421 744 q 208 777 271 744 q 101 867 144 810 l 161 917 q 240 847 193 872 q 346 821 286 821 q 451 847 404 821 q 531 917 499 872 l 589 867 l 589 867 z "
    },
    "\xd1\x9f": {
        ha: 778,
        x_min: 100,
        x_max: 678,
        o: "m 326 0 l 100 0 l 100 671 l 225 671 l 225 110 l 553 110 l 553 671 l 678 671 l 678 0 l 451 0 l 451 -176 l 326 -176 l 326 0 z "
    },
    "\xd2\x91": {
        ha: 617,
        x_min: 100,
        x_max: 589,
        o: "m 225 0 l 100 0 l 100 671 l 464 671 l 464 847 l 589 847 l 589 561 l 225 561 l 225 0 z "
    },
    "\xd1\x96": {
        ha: 324,
        x_min: 81,
        x_max: 242,
        o: "m 81 0 m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xd1\x97": {
        ha: 324,
        x_min: -54,
        x_max: 381,
        o: "m 0 0 m 381 842 q 359 790 381 811 q 307 768 338 768 q 255 790 276 768 q 233 842 233 811 q 255 893 233 872 q 307 914 276 914 q 359 893 338 914 q 381 842 381 872 m 90 842 q 69 790 90 811 q 18 768 49 768 q -33 790 -12 768 q -54 842 -54 811 q -33 893 -54 872 q 18 914 -12 914 q 69 893 49 914 q 90 842 90 872 m 100 0 l 100 671 l 225 671 l 225 0 l 100 0 z "
    },
    "\xd1\x95": {
        ha: 650,
        x_min: 42,
        x_max: 592,
        o: "m 42 0 m 321 -17 q 165 9 236 -17 q 42 88 93 35 l 101 179 q 197 113 136 142 q 326 83 258 83 q 434 113 397 83 q 471 186 471 142 q 458 226 471 210 q 422 253 444 242 q 370 273 400 265 q 308 288 340 281 q 222 310 265 297 q 142 344 178 322 q 84 400 107 365 q 61 489 61 435 q 78 565 61 529 q 127 628 94 601 q 208 672 160 656 q 317 688 256 688 q 467 660 404 688 q 572 592 529 632 l 517 504 q 435 563 488 540 q 318 586 382 586 q 217 560 254 586 q 181 493 181 533 q 193 458 181 472 q 227 433 206 443 q 276 416 249 424 q 336 401 304 408 q 425 378 379 392 q 508 342 471 365 q 568 283 544 319 q 592 189 592 247 q 574 108 592 146 q 522 43 557 71 q 438 -1 488 15 q 321 -17 388 -17 z "
    },
    "\xd1\x98": {
        ha: 324,
        x_min: -61,
        x_max: 242,
        o: "m 0 0 m 161 760 q 105 783 129 760 q 81 840 81 807 q 105 897 81 874 q 161 919 129 919 q 218 897 194 919 q 242 840 242 874 q 218 783 242 807 q 161 760 194 760 m 15 -272 q -61 -264 -28 -272 l -46 -160 q -24 -164 -36 -162 q 0 -165 -11 -165 q 72 -140 43 -165 q 100 -53 100 -114 l 100 671 l 225 671 l 225 -53 q 172 -215 225 -157 q 15 -272 118 -272 z "
    },
    "\xd2\x93": {
        ha: 617,
        x_min: 14,
        x_max: 589,
        o: "m 225 297 l 225 0 l 100 0 l 100 297 l 14 297 l 14 385 l 100 385 l 100 671 l 589 671 l 589 561 l 225 561 l 225 385 l 406 385 l 406 297 l 225 297 z "
    },
    "\xd2\x9b": {
        ha: 764,
        x_min: 100,
        x_max: 749,
        o: "m 417 367 l 619 110 l 749 110 l 749 -171 l 624 -171 l 624 0 l 550 0 l 326 289 l 225 186 l 225 0 l 100 0 l 100 671 l 225 671 l 225 331 l 549 671 l 706 671 l 417 367 z "
    },
    "\xd2\xb3": {
        ha: 732,
        x_min: 11,
        x_max: 717,
        o: "m 418 344 l 589 110 l 717 110 l 717 -171 l 592 -171 l 592 0 l 529 0 l 342 261 l 153 0 l 11 0 l 263 344 l 26 671 l 168 671 l 342 429 l 514 671 l 656 671 l 418 344 z "
    },
    "\xd3\xa9": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 397 -17 q 256 11 319 -17 q 149 87 193 39 q 82 199 106 135 q 58 336 58 263 q 82 472 58 408 q 149 584 106 536 q 256 660 193 632 q 397 688 319 688 q 539 660 476 688 q 645 584 601 632 q 713 472 689 536 q 736 336 736 408 q 713 199 736 263 q 645 87 689 135 q 539 11 601 39 q 397 -17 476 -17 m 397 94 q 477 110 442 94 q 539 153 513 126 q 581 217 565 181 q 603 294 597 253 l 192 294 q 213 217 197 253 q 255 153 229 181 q 317 110 281 126 q 397 94 353 94 m 397 576 q 318 561 353 576 q 257 520 283 546 q 214 459 231 494 q 192 385 197 424 l 601 385 q 578 459 594 424 q 537 520 563 494 q 476 561 511 546 q 397 576 440 576 z "
    },
    "&": {
        ha: 893,
        x_min: 46,
        x_max: 861,
        o: "m 694 0 q 651 40 675 17 q 601 89 628 63 q 485 13 550 42 q 339 -17 421 -17 q 224 0 278 -17 q 131 49 171 17 q 69 131 92 82 q 46 244 46 179 q 63 340 46 299 q 107 413 79 381 q 172 472 135 446 q 249 518 208 497 q 199 623 218 571 q 181 724 181 675 q 199 809 181 769 q 250 878 218 849 q 326 924 282 907 q 422 940 371 940 q 508 928 468 940 q 578 892 549 915 q 625 833 608 868 q 642 754 642 799 q 622 663 642 701 q 569 594 601 624 q 494 541 536 564 q 408 496 451 518 q 460 428 433 460 q 507 372 486 396 q 558 313 533 342 q 608 257 583 285 q 668 365 644 310 q 704 460 692 419 l 808 413 q 753 297 785 357 q 681 179 722 236 q 767 92 722 135 q 861 0 811 49 l 694 0 m 353 85 q 449 106 404 85 q 531 163 493 128 q 460 238 493 203 q 408 297 428 274 q 353 365 381 329 q 300 438 326 400 q 213 363 247 406 q 179 254 179 319 q 194 182 179 214 q 232 128 208 150 q 288 96 256 107 q 353 85 319 85 m 307 721 q 321 649 307 686 q 358 571 335 611 q 424 606 393 588 q 478 644 456 624 q 515 691 501 665 q 529 749 529 717 q 500 821 529 796 q 428 846 471 846 q 342 811 378 846 q 307 721 307 776 z "
    },
    "#": {
        ha: 831,
        x_min: 28,
        x_max: 803,
        o: "m 333 0 l 418 246 l 269 246 l 188 0 l 89 0 l 171 246 l 28 246 l 56 331 l 201 331 l 288 594 l 142 594 l 167 678 l 317 678 l 399 926 l 497 926 l 415 678 l 561 678 l 643 926 l 742 926 l 658 678 l 803 678 l 778 594 l 631 594 l 542 331 l 692 331 l 667 246 l 514 246 l 432 0 l 333 0 m 532 594 l 386 594 l 299 331 l 444 331 l 532 594 z "
    },
    "@": {
        ha: 1088,
        x_min: 49,
        x_max: 1038,
        o: "m 489 -97 q 314 -64 394 -97 q 174 28 233 -31 q 82 167 115 88 q 49 339 49 247 q 94 551 49 451 q 216 724 140 650 q 392 842 292 799 q 600 886 492 886 q 779 851 699 886 q 917 758 860 817 q 1006 619 975 699 q 1038 450 1038 539 q 1015 304 1038 367 q 956 201 992 242 q 876 139 921 160 q 788 118 831 118 q 694 151 726 118 q 658 228 663 185 l 657 236 q 564 151 621 185 q 443 118 507 118 q 287 181 344 118 q 229 346 229 244 q 257 481 229 418 q 330 590 285 543 q 433 665 375 638 q 553 692 492 692 q 664 662 619 692 q 729 589 708 632 l 746 671 l 860 671 l 782 306 q 780 290 781 299 q 779 275 779 282 q 797 223 779 240 q 840 206 815 206 q 886 218 861 206 q 933 260 911 231 q 969 335 954 289 q 985 450 985 382 q 957 606 985 535 q 878 728 929 676 q 755 808 826 779 q 594 836 683 836 q 404 795 494 836 q 247 686 314 754 q 139 528 179 618 q 99 342 99 439 q 128 187 99 258 q 211 63 158 115 q 336 -19 264 11 q 494 -49 408 -49 q 631 -28 568 -49 q 751 28 694 -8 l 778 -10 q 640 -74 713 -51 q 489 -97 567 -97 m 481 208 q 543 219 514 208 q 596 246 572 229 q 639 283 619 263 q 672 324 658 304 l 711 508 q 694 539 706 522 q 667 569 683 556 q 628 592 650 583 q 576 601 606 601 q 485 581 528 601 q 413 525 443 560 q 365 446 382 490 q 347 354 347 401 q 382 249 347 290 q 481 208 417 208 z "
    },
    "%": {
        ha: 1026,
        x_min: 42,
        x_max: 985,
        o: "m 267 482 q 175 499 217 482 q 103 547 133 517 q 58 619 74 578 q 42 710 42 661 q 58 801 42 758 q 103 874 74 843 q 175 923 133 906 q 267 940 217 940 q 360 923 318 940 q 431 874 401 906 q 478 801 461 843 q 494 710 494 758 q 478 619 494 661 q 431 547 461 578 q 360 499 401 517 q 267 482 318 482 m 179 0 l 771 926 l 856 926 l 263 0 l 179 0 m 758 -17 q 667 1 708 -17 q 595 49 625 18 q 549 121 565 79 q 532 211 532 163 q 549 302 532 260 q 595 376 565 344 q 667 424 625 407 q 758 442 708 442 q 850 424 808 442 q 922 376 892 407 q 968 302 951 344 q 985 211 985 260 q 968 121 985 163 q 922 49 951 79 q 850 1 892 18 q 758 -17 808 -17 m 267 563 q 362 605 325 563 q 399 710 399 647 q 362 817 399 775 q 267 858 325 858 q 172 817 208 858 q 136 710 136 775 q 172 605 136 647 q 267 563 208 563 m 758 64 q 853 106 817 64 q 890 211 890 147 q 853 318 890 276 q 758 360 817 360 q 663 318 700 360 q 626 211 626 276 q 663 106 626 147 q 758 64 700 64 z "
    },
    "\xe2\x80\xb0": {
        ha: 1519,
        x_min: 42,
        x_max: 1479,
        o: "m 494 710 q 478 619 494 661 q 431 547 461 578 q 360 499 401 517 q 267 482 318 482 q 175 499 217 482 q 103 547 133 517 q 58 619 74 578 q 42 710 42 661 q 58 801 42 758 q 103 874 74 843 q 175 923 133 906 q 267 940 217 940 q 360 923 318 940 q 431 874 401 906 q 478 801 461 843 q 494 710 494 758 m 263 0 l 179 0 l 771 926 l 856 926 l 263 0 m 985 211 q 968 121 985 163 q 922 49 951 79 q 850 1 892 18 q 758 -17 808 -17 q 667 1 708 -17 q 595 49 625 18 q 549 121 565 79 q 532 211 532 163 q 549 302 532 260 q 595 376 565 344 q 667 424 625 407 q 758 442 708 442 q 850 424 808 442 q 922 376 892 407 q 968 302 951 344 q 985 211 985 260 m 399 710 q 362 822 399 779 q 267 865 325 865 q 172 822 208 865 q 136 710 136 779 q 172 599 136 643 q 267 556 208 556 q 362 599 325 556 q 399 710 399 643 m 890 211 q 853 324 890 281 q 758 367 817 367 q 663 324 700 367 q 626 211 626 281 q 663 101 626 144 q 758 57 700 57 q 853 101 817 57 q 890 211 890 144 m 1479 211 q 1463 121 1479 163 q 1416 49 1446 79 q 1344 1 1386 18 q 1251 -17 1301 -17 q 1160 1 1201 -17 q 1088 49 1118 18 q 1042 121 1058 79 q 1026 211 1026 163 q 1042 302 1026 260 q 1088 376 1058 344 q 1160 424 1118 407 q 1251 442 1201 442 q 1344 424 1301 442 q 1416 376 1386 407 q 1463 302 1446 344 q 1479 211 1479 260 m 1383 211 q 1347 324 1383 281 q 1251 367 1310 367 q 1157 324 1193 367 q 1121 211 1121 281 q 1157 101 1121 144 q 1251 57 1193 57 q 1347 101 1310 57 q 1383 211 1383 144 z "
    },
    "(": {
        ha: 364,
        x_min: 60,
        x_max: 339,
        o: "m 263 -276 q 176 -142 214 -214 q 113 9 139 -69 q 74 171 88 88 q 60 338 60 254 q 74 504 60 421 q 113 666 88 588 q 176 817 139 744 q 263 951 214 889 l 339 894 q 278 765 306 829 q 233 635 251 701 q 206 495 215 568 q 196 338 196 422 q 206 180 196 253 q 233 40 215 107 q 278 -90 251 -26 q 339 -218 306 -153 l 263 -276 z "
    },
    ")": {
        ha: 364,
        x_min: 24,
        x_max: 304,
        o: "m 24 -218 q 85 -90 58 -153 q 130 40 111 -26 q 158 180 149 107 q 168 338 168 253 q 158 495 168 422 q 130 635 149 568 q 85 765 111 701 q 24 894 58 829 l 100 951 q 251 666 197 826 q 304 338 304 506 q 290 171 304 254 q 251 9 276 88 q 187 -142 225 -69 q 100 -276 149 -214 l 24 -218 z "
    },
    "[": {
        ha: 353,
        x_min: 58,
        x_max: 329,
        o: "m 58 -264 l 58 942 l 329 942 l 329 853 l 153 853 l 153 -175 l 329 -175 l 329 -264 l 58 -264 z "
    },
    "]": {
        ha: 353,
        x_min: 24,
        x_max: 294,
        o: "m 24 -264 l 24 -175 l 200 -175 l 200 853 l 24 853 l 24 942 l 294 942 l 294 -264 l 24 -264 z "
    },
    "{": {
        ha: 372,
        x_min: 7,
        x_max: 349,
        o: "m 264 -264 q 195 -250 228 -264 q 136 -211 163 -236 q 94 -150 110 -186 q 79 -68 79 -114 l 79 204 q 61 272 79 243 q 7 300 43 300 l 7 378 q 61 406 43 378 q 79 474 79 435 l 79 744 q 94 826 79 790 q 136 888 110 863 q 195 928 163 914 q 264 942 228 942 l 349 942 l 349 853 l 264 853 q 201 823 228 853 q 174 744 174 793 l 174 463 q 159 386 174 418 q 110 339 144 354 q 159 292 144 324 q 174 215 174 260 l 174 -67 q 201 -145 174 -115 q 264 -175 228 -175 l 349 -175 l 349 -264 l 264 -264 z "
    },
    "}": {
        ha: 372,
        x_min: 24,
        x_max: 367,
        o: "m 24 -175 l 108 -175 q 172 -145 146 -175 q 199 -67 199 -115 l 199 215 q 213 292 199 260 q 263 339 228 324 q 213 386 228 354 q 199 463 199 418 l 199 744 q 172 823 199 793 q 108 853 146 853 l 24 853 l 24 942 l 108 942 q 177 928 143 942 q 237 888 211 914 q 278 826 263 863 q 294 744 294 790 l 294 474 q 313 406 294 435 q 367 378 331 378 l 367 300 q 313 272 331 300 q 294 204 294 243 l 294 -68 q 278 -150 294 -114 q 237 -211 263 -186 q 177 -250 211 -236 q 108 -264 143 -264 l 24 -264 l 24 -175 z "
    },
    "*": {
        ha: 476,
        x_min: 43,
        x_max: 432,
        o: "m 203 532 l 210 689 l 78 603 l 43 664 l 183 735 l 43 807 l 78 868 l 210 783 l 203 940 l 274 940 l 265 783 l 397 868 l 432 807 l 293 735 l 432 664 l 397 603 l 265 689 l 274 532 l 203 532 z "
    },
    "\xe2\x80\xa0": {
        ha: 371,
        x_min: 31,
        x_max: 340,
        o: "m 217 740 l 222 454 l 147 454 l 154 740 l 31 735 l 31 801 l 154 797 l 147 940 l 222 940 l 217 797 l 340 801 l 340 735 l 217 740 z "
    },
    "\xe2\x80\xa1": {
        ha: 371,
        x_min: 31,
        x_max: 340,
        o: "m 340 735 l 217 740 l 217 451 l 340 457 l 340 390 l 217 394 l 222 250 l 147 250 l 153 394 l 31 390 l 31 457 l 153 451 l 153 740 l 31 735 l 31 801 l 153 797 l 147 940 l 222 940 l 217 797 l 340 801 l 340 735 z "
    },
    "\xc2\xa7": {
        ha: 656,
        x_min: 43,
        x_max: 592,
        o: "m 592 442 q 560 338 592 383 q 467 264 529 292 q 558 203 524 242 q 592 94 592 164 q 572 7 592 46 q 515 -58 551 -32 q 430 -99 479 -85 q 321 -112 381 -112 q 153 -80 218 -112 q 43 -4 88 -47 l 101 76 q 140 40 118 58 q 191 8 163 22 q 252 -14 219 -6 q 321 -22 285 -22 q 429 6 388 -22 q 471 86 471 33 q 457 131 471 113 q 419 161 443 149 q 365 183 396 174 q 300 200 333 192 q 216 224 258 211 q 139 259 174 238 q 83 314 104 281 q 61 400 61 347 q 74 465 61 436 q 108 515 88 493 q 157 552 129 538 q 214 575 185 567 q 102 640 143 599 q 61 749 61 681 q 78 822 61 788 q 129 883 96 857 q 210 925 163 910 q 317 940 257 940 q 475 910 414 940 q 571 843 536 881 l 517 768 q 428 829 481 808 q 322 850 375 850 q 219 822 258 850 q 181 749 181 794 q 194 710 181 725 q 229 683 207 694 q 281 665 251 672 q 343 649 310 657 q 431 626 386 639 q 510 591 475 614 q 569 533 546 568 q 592 442 592 497 m 469 422 q 457 470 469 450 q 424 504 444 490 q 376 527 403 518 q 324 543 350 536 q 211 489 242 521 q 181 414 181 457 q 196 366 181 385 q 237 335 211 347 q 296 313 263 322 q 364 296 329 304 q 442 348 414 318 q 469 422 469 378 z "
    },
    "\xc2\xb6": {
        ha: 624,
        x_min: 38,
        x_max: 535,
        o: "m 465 -139 l 465 857 l 346 857 l 346 -139 l 276 -139 l 276 449 q 183 467 226 449 q 108 519 140 486 q 56 594 75 551 q 38 688 38 638 q 56 781 38 738 q 108 856 75 824 q 183 908 140 889 q 276 926 226 926 l 535 926 l 535 -139 l 465 -139 z "
    },
    ".": {
        ha: 331,
        x_min: 78,
        x_max: 251,
        o: "m 164 -15 q 103 10 128 -15 q 78 72 78 36 q 103 133 78 108 q 164 158 128 158 q 226 133 200 158 q 251 72 251 108 q 226 10 251 36 q 164 -15 200 -15 z "
    },
    "\xe2\x80\xa6": {
        ha: 989,
        x_min: 78,
        x_max: 910,
        o: "m 250 72 q 225 12 250 38 q 164 -14 200 -14 q 103 12 128 -14 q 78 72 78 38 q 103 133 78 108 q 164 158 128 158 q 225 133 200 158 q 250 72 250 108 m 581 72 q 555 12 581 38 q 493 -14 529 -14 q 432 12 457 -14 q 407 72 407 38 q 432 133 407 108 q 493 158 457 158 q 555 133 529 158 q 581 72 581 108 m 910 72 q 885 12 910 38 q 824 -14 860 -14 q 763 12 788 -14 q 738 72 738 38 q 763 133 738 108 q 824 158 788 158 q 885 133 860 158 q 910 72 910 108 z "
    },
    ":": {
        ha: 331,
        x_min: 78,
        x_max: 251,
        o: "m 164 507 q 103 533 128 507 q 78 593 78 558 q 103 655 78 629 q 164 681 128 681 q 226 655 200 681 q 251 593 251 629 q 226 533 251 558 q 164 507 200 507 m 164 -15 q 103 10 128 -15 q 78 72 78 36 q 103 133 78 108 q 164 158 128 158 q 226 133 200 158 q 251 72 251 108 q 226 10 251 36 q 164 -15 200 -15 z "
    },
    ",": {
        ha: 331,
        x_min: 78,
        x_max: 260,
        o: "m 260 43 q 225 -84 260 -25 q 138 -181 190 -143 l 79 -132 q 140 -74 113 -111 q 174 -3 168 -37 q 165 -4 171 -3 q 153 -6 158 -6 q 99 17 121 -6 q 78 74 78 39 q 102 134 78 110 q 163 158 126 158 q 231 128 201 158 q 260 43 260 99 z "
    },
    ";": {
        ha: 331,
        x_min: 78,
        x_max: 260,
        o: "m 164 507 q 103 533 128 507 q 78 593 78 558 q 103 655 78 629 q 164 681 128 681 q 226 655 200 681 q 251 593 251 629 q 226 533 251 558 q 164 507 200 507 m 260 46 q 225 -81 260 -22 q 138 -178 190 -140 l 79 -129 q 140 -71 113 -108 q 174 1 168 -33 q 165 -1 171 0 q 153 -3 158 -3 q 99 19 121 -3 q 78 76 78 42 q 102 138 78 113 q 163 163 126 163 q 231 133 201 163 q 260 46 260 103 z "
    },
    "\xcd\xbe": {
        ha: 331,
        x_min: 78,
        x_max: 260,
        o: "m 78 0 m 164 507 q 103 533 128 507 q 78 593 78 558 q 103 655 78 629 q 164 681 128 681 q 226 655 200 681 q 251 593 251 629 q 226 533 251 558 q 164 507 200 507 m 260 46 q 225 -81 260 -22 q 138 -178 190 -140 l 79 -129 q 140 -71 113 -108 q 174 1 168 -33 q 165 -1 171 0 q 153 -3 158 -3 q 99 19 121 -3 q 78 76 78 42 q 102 138 78 113 q 163 163 126 163 q 231 133 201 163 q 260 46 260 103 z "
    },
    "!": {
        ha: 331,
        x_min: 79,
        x_max: 251,
        o: "m 111 271 l 88 926 l 242 926 l 218 271 l 111 271 m 164 -14 q 103 12 128 -14 q 79 72 79 38 q 103 133 79 108 q 164 158 128 158 q 226 133 200 158 q 251 72 251 108 q 226 12 251 38 q 164 -14 200 -14 z "
    },
    "\xc2\xa1": {
        ha: 331,
        x_min: 79,
        x_max: 251,
        o: "m 111 399 l 218 399 l 243 -256 l 89 -256 l 111 399 m 79 599 q 103 659 79 633 q 164 685 128 685 q 226 659 200 685 q 251 599 251 633 q 226 538 251 563 q 164 513 200 513 q 103 538 128 513 q 79 599 79 563 z "
    },
    "?": {
        ha: 639,
        x_min: 22,
        x_max: 600,
        o: "m 272 264 q 221 381 221 314 q 232 442 221 415 q 262 491 243 469 q 303 531 281 513 q 350 565 326 549 q 390 594 371 579 q 424 624 410 608 q 448 660 439 640 q 457 703 457 679 q 421 783 457 749 q 310 817 385 817 q 189 788 239 817 q 103 711 139 760 l 22 800 q 150 903 74 867 q 324 940 226 940 q 439 924 388 940 q 526 878 490 907 q 581 809 563 849 q 600 724 600 769 q 587 647 600 681 q 551 588 574 614 q 502 541 529 563 q 449 501 475 519 q 408 472 428 486 q 374 442 389 457 q 351 408 360 426 q 342 368 342 390 q 351 333 342 351 q 375 303 360 315 l 272 264 m 311 -15 q 250 10 275 -15 q 225 72 225 36 q 250 133 225 108 q 311 158 275 158 q 373 133 347 158 q 399 72 399 108 q 373 10 399 36 q 311 -15 347 -15 z "
    },
    "\xc2\xbf": {
        ha: 549,
        x_min: 38,
        x_max: 617,
        o: "m 367 403 q 418 288 418 356 q 406 226 418 253 q 376 177 394 199 q 334 138 357 156 q 288 103 311 119 q 213 43 246 74 q 181 -35 181 13 q 217 -115 181 -81 q 329 -149 254 -149 q 449 -120 400 -149 q 536 -43 499 -92 l 617 -133 q 488 -235 565 -199 q 315 -272 411 -272 q 199 -256 250 -272 q 112 -210 147 -239 q 57 -141 76 -181 q 38 -56 38 -101 q 51 21 38 -12 q 87 80 65 54 q 135 126 108 106 q 189 167 163 147 q 265 227 232 197 q 297 300 297 257 q 288 335 297 317 q 263 365 278 353 l 367 403 m 326 685 q 388 659 363 685 q 414 597 414 633 q 388 538 414 563 q 326 513 363 513 q 265 538 290 513 q 240 597 240 563 q 265 659 240 633 q 326 685 290 685 z "
    },
    "\xe2\x80\xbd": {
        ha: 653,
        x_min: 22,
        x_max: 615,
        o: "m 258 271 l 233 719 l 388 719 l 376 515 q 456 578 425 539 q 488 681 488 618 q 443 781 488 744 q 325 817 399 817 q 191 788 243 817 q 103 711 139 758 l 22 800 q 150 903 74 867 q 324 940 226 940 q 442 922 388 940 q 534 869 496 903 q 594 787 572 835 q 615 681 615 739 q 592 576 615 622 q 532 493 568 529 q 453 432 496 457 q 371 390 410 407 l 364 271 l 258 271 m 311 -15 q 250 10 275 -15 q 225 72 225 36 q 250 133 225 108 q 311 158 275 158 q 373 133 347 158 q 399 72 399 108 q 373 10 399 36 q 311 -15 347 -15 z "
    },
    "\xe2\xb8\x98": {
        ha: 549,
        x_min: 24,
        x_max: 617,
        o: "m 381 399 l 406 -51 l 251 -51 l 260 150 q 182 88 213 126 q 151 -12 151 50 q 195 -112 151 -76 q 313 -149 239 -149 q 447 -120 396 -149 q 536 -43 499 -92 l 617 -133 q 488 -235 565 -199 q 315 -272 411 -272 q 197 -253 250 -272 q 105 -201 143 -235 q 45 -119 67 -167 q 24 -12 24 -71 q 47 92 24 46 q 106 174 71 139 q 185 235 142 210 q 267 276 228 260 l 274 399 l 381 399 m 326 685 q 388 659 363 685 q 414 597 414 633 q 388 536 414 561 q 326 511 363 511 q 265 536 290 511 q 240 597 240 561 q 265 659 240 633 q 326 685 290 685 z "
    },
    '"': {
        ha: 501,
        x_min: 71,
        x_max: 431,
        o: "m 114 557 q 92 704 101 638 q 84 760 88 732 q 77 810 81 788 q 72 849 74 833 q 71 868 71 864 q 92 919 71 897 q 143 940 113 940 q 195 919 174 940 q 217 868 217 897 q 215 849 217 864 q 210 810 213 833 q 203 760 207 788 q 194 704 199 732 q 174 557 185 638 l 114 557 m 329 557 q 307 704 317 638 q 299 760 303 732 q 292 810 296 788 q 288 849 289 833 q 286 868 286 864 q 307 919 286 897 q 360 940 328 940 q 410 919 389 940 q 431 868 431 897 q 428 849 431 864 q 424 810 426 833 q 417 760 421 788 q 408 704 413 732 q 388 557 399 638 l 329 557 z "
    },
    "'": {
        ha: 286,
        x_min: 71,
        x_max: 217,
        o: "m 114 557 q 92 704 101 638 q 84 760 88 732 q 77 810 81 788 q 72 849 74 833 q 71 868 71 864 q 92 919 71 897 q 143 940 113 940 q 195 919 174 940 q 217 868 217 897 q 215 849 217 864 q 210 810 213 833 q 203 760 207 788 q 194 704 199 732 q 174 557 185 638 l 114 557 z "
    },
    "\xe2\x80\x9c": {
        ha: 568,
        x_min: 69,
        x_max: 490,
        o: "m 69 718 q 103 844 69 786 q 190 940 138 903 l 250 893 q 188 835 217 872 q 154 763 160 799 q 163 765 157 764 q 176 765 169 765 q 229 743 208 765 q 250 686 250 721 q 226 626 250 651 q 165 601 201 601 q 98 632 126 601 q 69 718 69 663 m 310 718 q 343 844 310 786 q 429 940 376 903 l 489 893 q 428 835 456 872 q 394 763 400 799 q 415 765 400 765 q 469 743 447 765 q 490 686 490 721 q 466 626 490 651 q 406 601 442 601 q 338 632 367 601 q 310 718 310 663 z "
    },
    "\xe2\x80\x9d": {
        ha: 568,
        x_min: 78,
        x_max: 499,
        o: "m 499 825 q 465 697 499 756 q 378 601 431 638 l 319 649 q 380 707 353 669 q 414 779 407 744 q 405 776 411 778 q 393 775 399 775 q 339 797 361 775 q 317 854 317 819 q 342 915 317 890 q 401 940 367 940 q 469 910 440 940 q 499 825 499 881 m 260 825 q 225 697 260 756 q 138 601 190 638 l 79 649 q 140 707 113 669 q 174 779 168 744 q 165 776 171 778 q 153 775 158 775 q 99 797 121 775 q 78 854 78 819 q 102 915 78 890 q 163 940 126 940 q 231 910 201 940 q 260 825 260 881 z "
    },
    "\xe2\x80\x98": {
        ha: 329,
        x_min: 63,
        x_max: 244,
        o: "m 63 718 q 97 844 63 786 q 183 940 131 903 l 242 893 q 181 835 208 872 q 147 763 154 799 q 156 765 150 764 q 168 765 163 765 q 222 743 200 765 q 244 686 244 721 q 219 626 244 651 q 160 601 194 601 q 92 632 121 601 q 63 718 63 663 z "
    },
    "\xe2\x80\x9b": {
        ha: 329,
        x_min: 69,
        x_max: 251,
        o: "m 69 825 q 99 910 69 881 q 167 940 128 940 q 227 915 203 940 q 251 854 251 890 q 230 797 251 819 q 176 775 208 775 q 163 776 169 775 q 154 779 157 778 q 189 707 161 744 q 250 649 217 669 l 192 601 q 104 697 139 638 q 69 825 69 756 z "
    },
    "\xe2\x80\x99": {
        ha: 329,
        x_min: 78,
        x_max: 260,
        o: "m 260 825 q 225 697 260 756 q 138 601 190 638 l 79 649 q 140 707 113 669 q 174 779 168 744 q 165 776 171 778 q 153 775 158 775 q 99 797 121 775 q 78 854 78 819 q 102 915 78 890 q 163 940 126 940 q 231 910 201 940 q 260 825 260 881 z "
    },
    "\xca\xbc": {
        ha: 329,
        x_min: 78,
        x_max: 260,
        o: "m 260 825 q 225 697 260 756 q 138 601 190 638 l 79 649 q 140 707 113 669 q 174 779 168 744 q 165 776 171 778 q 153 775 158 775 q 99 797 121 775 q 78 854 78 819 q 102 915 78 890 q 163 940 126 940 q 231 910 201 940 q 260 825 260 881 z "
    },
    "\xe2\x80\x9e": {
        ha: 569,
        x_min: 78,
        x_max: 499,
        o: "m 260 43 q 225 -84 260 -25 q 138 -181 190 -143 l 79 -132 q 140 -74 113 -111 q 174 -3 168 -37 q 165 -4 171 -3 q 153 -6 158 -6 q 99 17 121 -6 q 78 74 78 39 q 102 134 78 110 q 163 158 126 158 q 231 128 201 158 q 260 43 260 99 m 499 43 q 465 -84 499 -25 q 378 -181 431 -143 l 319 -132 q 380 -74 353 -111 q 414 -3 407 -37 q 405 -4 411 -3 q 393 -6 399 -6 q 339 17 361 -6 q 317 74 317 39 q 342 134 317 110 q 401 158 367 158 q 469 128 440 158 q 499 43 499 99 z "
    },
    "\xe2\x80\x9a": {
        ha: 331,
        x_min: 78,
        x_max: 260,
        o: "m 260 43 q 225 -84 260 -25 q 138 -181 190 -143 l 79 -132 q 140 -74 113 -111 q 174 -3 168 -37 q 165 -4 171 -3 q 153 -6 158 -6 q 99 17 121 -6 q 78 74 78 39 q 102 134 78 110 q 163 158 126 158 q 231 128 201 158 q 260 43 260 99 z "
    },
    "\xc2\xab": {
        ha: 644,
        x_min: 42,
        x_max: 603,
        o: "m 482 88 l 260 338 l 482 583 l 603 583 l 381 338 l 603 88 l 482 88 m 264 88 l 42 338 l 264 583 l 385 583 l 163 338 l 385 88 l 264 88 z "
    },
    "\xc2\xbb": {
        ha: 644,
        x_min: 42,
        x_max: 603,
        o: "m 163 88 l 42 88 l 264 338 l 42 583 l 163 583 l 385 338 l 163 88 m 381 88 l 260 88 l 482 338 l 260 583 l 381 583 l 603 338 l 381 88 z "
    },
    "\xe2\x80\xb9": {
        ha: 426,
        x_min: 42,
        x_max: 385,
        o: "m 264 88 l 42 338 l 264 583 l 385 583 l 163 338 l 385 88 l 264 88 z "
    },
    "\xe2\x80\xba": {
        ha: 426,
        x_min: 42,
        x_max: 385,
        o: "m 163 88 l 42 88 l 264 338 l 42 583 l 163 583 l 385 338 l 163 88 z "
    },
    "-": {
        ha: 417,
        x_min: 42,
        x_max: 375,
        o: "m 42 282 l 42 390 l 375 390 l 375 282 l 42 282 z "
    },
    "\xc2\xad": {
        ha: 417,
        x_min: 42,
        x_max: 375,
        o: "m 42 282 l 42 390 l 375 390 l 375 282 l 42 282 z "
    },
    "\xe2\x80\x93": {
        ha: 824,
        x_min: 42,
        x_max: 782,
        o: "m 42 282 l 42 390 l 782 390 l 782 282 l 42 282 z "
    },
    "\xe2\x80\x95": {
        ha: 824,
        x_min: 42,
        x_max: 782,
        o: "m 42 282 m 42 282 l 42 390 l 782 390 l 782 282 l 42 282 z "
    },
    "\xe2\x80\x94": {
        ha: 1157,
        x_min: 42,
        x_max: 1115,
        o: "m 42 282 l 42 390 l 1115 390 l 1115 282 l 42 282 z "
    },
    "\xc2\xb7": {
        ha: 331,
        x_min: 78,
        x_max: 251,
        o: "m 251 339 q 226 278 251 304 q 164 253 200 253 q 103 278 128 253 q 78 339 78 304 q 103 401 78 375 q 164 426 128 426 q 226 401 200 426 q 251 339 251 375 z "
    },
    "\xe2\x88\x99": {
        ha: 331,
        x_min: 78,
        x_max: 251,
        o: "m 78 253 m 251 339 q 226 278 251 304 q 164 253 200 253 q 103 278 128 253 q 78 339 78 304 q 103 401 78 375 q 164 426 128 426 q 226 401 200 426 q 251 339 251 375 z "
    },
    "\xe2\x80\xa2": {
        ha: 497,
        x_min: 96,
        x_max: 404,
        o: "m 404 336 q 392 276 404 304 q 358 228 379 249 q 310 195 338 207 q 250 183 282 183 q 190 195 218 183 q 142 228 163 207 q 108 276 121 249 q 96 336 96 304 q 108 396 96 368 q 142 444 121 424 q 190 478 163 465 q 250 490 218 490 q 310 478 282 490 q 358 444 338 465 q 392 396 379 424 q 404 336 404 368 z "
    },
    $: {
        ha: 832,
        x_min: 54,
        x_max: 769,
        o: "m 374 -15 q 187 31 267 -8 q 54 131 107 71 l 133 238 q 234 157 174 193 q 374 110 294 121 l 374 413 q 269 444 321 426 q 176 492 217 463 q 109 566 135 522 q 83 676 83 610 q 104 775 83 729 q 163 856 125 821 q 255 912 201 890 q 374 939 308 933 l 374 1067 l 472 1067 l 472 938 q 627 897 558 929 q 749 811 696 864 l 668 708 q 578 776 628 751 q 472 811 528 801 l 472 539 q 579 505 526 524 q 674 455 632 486 q 743 377 717 424 q 769 263 769 331 q 753 165 769 213 q 700 81 736 118 q 608 17 664 43 q 472 -14 551 -8 l 472 -139 l 374 -139 l 374 -15 m 628 250 q 616 301 628 279 q 583 338 604 322 q 534 366 563 354 q 472 388 506 378 l 472 110 q 544 129 515 115 q 592 163 574 143 q 619 205 611 182 q 628 250 628 228 m 226 686 q 268 610 226 636 q 374 565 310 583 l 374 815 q 267 774 307 808 q 226 686 226 739 z "
    },
    "\xc2\xa2": {
        ha: 689,
        x_min: 58,
        x_max: 651,
        o: "m 346 -12 q 228 26 281 -4 q 138 101 175 56 q 79 207 100 147 q 58 336 58 267 q 79 464 58 404 q 138 569 100 524 q 228 645 175 615 q 346 683 281 675 l 346 785 l 442 785 l 442 685 q 569 645 518 678 q 651 569 619 613 l 568 493 q 442 574 518 561 l 442 97 q 568 178 518 110 l 651 101 q 569 25 619 57 q 442 -14 518 -7 l 442 -139 l 346 -139 l 346 -12 m 189 336 q 231 185 189 249 q 346 101 272 121 l 346 568 q 231 486 272 549 q 189 336 189 424 z "
    },
    "\xc2\xa3": {
        ha: 732,
        x_min: 28,
        x_max: 717,
        o: "m 28 458 l 160 458 q 129 497 144 478 q 101 536 114 515 q 76 594 86 564 q 65 663 65 625 q 92 773 65 722 q 162 861 118 824 q 264 919 206 899 q 385 940 322 940 q 560 900 485 940 q 676 782 636 860 l 565 715 q 503 792 547 760 q 399 825 458 825 q 328 814 361 825 q 269 781 294 803 q 230 729 244 760 q 215 660 215 699 q 238 566 215 604 q 289 492 261 528 l 314 458 l 521 458 l 521 372 l 356 372 q 363 322 363 347 q 333 219 363 263 q 261 147 303 175 q 333 158 294 158 q 391 150 367 158 q 439 131 415 142 q 481 113 460 121 q 531 106 503 106 q 610 123 576 106 q 660 160 644 140 l 717 49 q 642 1 689 19 q 525 -18 594 -18 q 444 -7 476 -18 q 385 17 413 4 q 336 36 361 28 q 275 44 311 44 q 197 29 239 44 q 113 -10 156 14 l 64 90 q 193 179 147 126 q 239 292 239 232 q 233 333 239 314 q 219 372 228 353 l 28 372 l 28 458 z "
    },
    "\xc2\xa5": {
        ha: 878,
        x_min: 7,
        x_max: 869,
        o: "m 369 0 l 369 167 l 32 167 l 32 250 l 369 250 l 369 388 l 32 388 l 32 471 l 313 471 l 7 926 l 167 926 l 439 513 l 708 926 l 869 926 l 564 471 l 847 471 l 847 388 l 508 388 l 508 250 l 847 250 l 847 167 l 508 167 l 508 0 l 369 0 z "
    },
    "\xe2\x82\xac": {
        ha: 971,
        x_min: 39,
        x_max: 938,
        o: "m 575 -17 q 417 7 492 -17 q 281 75 342 31 q 177 183 221 119 q 113 324 133 246 l 39 324 l 39 407 l 97 407 q 94 434 94 421 q 94 463 94 447 q 94 492 94 478 q 97 521 94 506 l 39 521 l 39 604 l 113 604 q 178 743 135 681 q 283 850 222 806 q 417 918 343 894 q 575 942 492 942 q 696 926 642 942 q 795 885 750 911 q 875 822 840 858 q 938 746 910 786 l 819 683 q 719 780 783 742 q 575 818 654 818 q 382 760 465 818 q 263 604 299 703 l 660 604 l 660 521 l 242 521 q 238 463 238 492 q 238 434 238 447 q 240 407 239 421 l 660 407 l 660 324 l 261 324 q 381 165 297 224 q 575 107 464 107 q 719 145 654 107 q 819 242 783 183 l 938 179 q 874 103 910 139 q 794 40 839 67 q 696 -1 750 14 q 575 -17 642 -17 z "
    },
    "\xc6\x92": {
        ha: 608,
        x_min: 28,
        x_max: 629,
        o: "m 28 -224 l 154 346 l 65 346 l 65 458 l 178 458 l 238 726 q 328 883 260 825 q 489 940 396 940 q 566 929 531 940 q 629 888 601 918 l 571 786 q 503 818 546 818 q 421 787 456 818 q 374 700 386 756 l 319 458 l 503 458 l 503 346 l 296 346 l 169 -224 l 28 -224 z "
    },
    "\xc2\xa4": {
        ha: 840,
        x_min: 36,
        x_max: 803,
        o: "m 419 126 q 308 142 358 126 q 217 186 257 158 l 114 82 l 38 157 l 142 261 q 82 463 82 349 q 97 571 82 519 q 143 664 113 622 l 36 772 l 113 846 l 219 739 q 310 782 260 767 q 419 797 360 797 q 619 739 538 797 l 726 846 l 803 771 l 696 664 q 758 463 758 578 q 696 261 758 347 l 803 157 l 726 82 l 621 185 q 530 142 581 157 q 419 126 479 126 m 419 239 q 510 257 471 239 q 576 306 550 275 q 617 378 603 338 q 631 463 631 418 q 617 546 631 506 q 576 617 603 586 q 510 665 550 647 q 419 683 471 683 q 330 665 369 683 q 263 617 290 647 q 222 546 236 586 q 208 463 208 506 q 222 378 208 418 q 263 306 236 338 q 330 257 290 275 q 419 239 369 239 z "
    },
    "\xe2\x82\xa1": {
        ha: 951,
        x_min: 71,
        x_max: 914,
        o: "m 551 -17 q 539 -17 544 -17 q 526 -15 533 -17 l 486 -139 l 407 -139 l 451 -7 q 398 6 424 -1 q 349 24 372 13 l 294 -139 l 215 -139 l 282 58 q 128 224 186 121 q 71 463 71 328 q 108 658 71 569 q 210 809 146 746 q 363 907 275 872 q 551 942 450 942 q 564 942 558 942 q 576 940 569 942 l 618 1067 l 697 1067 l 651 931 q 704 915 679 924 q 753 894 729 907 l 810 1067 l 888 1067 l 817 853 q 870 802 846 829 q 914 746 894 775 l 796 683 q 771 717 785 700 l 569 107 q 701 149 642 113 q 796 242 761 186 l 914 179 q 851 103 886 139 q 771 40 815 67 q 672 -1 726 14 q 551 -17 618 -17 m 214 463 q 244 308 214 378 q 326 190 274 239 l 535 818 q 406 788 465 815 q 305 713 347 760 q 238 603 263 667 q 214 463 214 539 m 390 146 q 439 125 414 133 q 492 111 464 117 l 711 769 q 664 795 689 785 q 613 811 639 806 l 390 146 z "
    },
    "\xe2\x82\xa3": {
        ha: 788,
        x_min: 14,
        x_max: 739,
        o: "m 117 0 l 117 179 l 14 179 l 14 256 l 117 256 l 117 926 l 739 926 l 739 804 l 256 804 l 256 533 l 729 533 l 729 411 l 256 411 l 256 256 l 518 256 l 518 179 l 256 179 l 256 0 l 117 0 z "
    },
    "\xe2\x82\xa4": {
        ha: 732,
        x_min: 28,
        x_max: 717,
        o: "m 28 529 l 106 529 q 76 590 88 557 q 65 663 65 622 q 92 773 65 722 q 162 861 118 824 q 264 919 206 899 q 385 940 322 940 q 560 900 485 940 q 676 782 636 860 l 565 715 q 503 792 547 760 q 399 825 458 825 q 328 814 361 825 q 269 781 294 803 q 230 729 244 760 q 215 660 215 699 q 228 588 215 619 q 260 529 240 557 l 521 529 l 521 457 l 315 457 q 340 415 329 438 q 357 367 351 393 l 521 367 l 521 296 l 360 296 q 325 209 353 246 q 261 147 297 172 q 333 158 294 158 q 391 150 367 158 q 439 131 415 142 q 481 113 460 121 q 531 106 503 106 q 610 123 576 106 q 660 160 644 140 l 717 49 q 642 1 689 19 q 525 -18 594 -18 q 444 -7 476 -18 q 385 17 413 4 q 336 36 361 28 q 275 44 311 44 q 197 29 239 44 q 113 -10 156 14 l 64 90 q 193 179 147 126 q 239 292 239 232 l 239 296 l 28 296 l 28 367 l 222 367 q 194 413 211 390 q 160 457 178 435 l 28 457 l 28 529 z "
    },
    "\xe2\x82\xa6": {
        ha: 1019,
        x_min: 14,
        x_max: 1006,
        o: "m 768 0 l 526 329 l 256 329 l 256 0 l 117 0 l 117 329 l 14 329 l 14 406 l 117 406 l 117 526 l 14 526 l 14 603 l 117 603 l 117 926 l 260 926 l 499 603 l 764 603 l 764 926 l 903 926 l 903 603 l 1006 603 l 1006 526 l 903 526 l 903 406 l 1006 406 l 1006 329 l 903 329 l 903 0 l 768 0 m 256 406 l 471 406 l 382 526 l 256 526 l 256 406 m 644 406 l 764 406 l 764 526 l 554 526 l 644 406 m 256 603 l 326 603 l 256 700 l 256 603 m 764 243 l 764 329 l 700 329 l 764 243 z "
    },
    "\xe2\x82\xa7": {
        ha: 903,
        x_min: 14,
        x_max: 899,
        o: "m 800 601 q 771 506 793 550 q 711 428 749 461 q 622 376 674 394 q 507 357 571 357 l 256 357 l 256 0 l 117 0 l 117 601 l 14 601 l 14 683 l 117 683 l 117 926 l 507 926 q 622 908 571 926 q 711 856 674 889 q 771 778 749 822 q 800 683 793 733 l 899 683 l 899 601 l 800 601 m 489 479 q 597 512 553 479 q 654 601 642 544 l 256 601 l 256 479 l 489 479 m 256 683 l 654 683 q 597 772 642 739 q 489 804 553 804 l 256 804 l 256 683 z "
    },
    "\xe2\x82\xa8": {
        ha: 1436,
        x_min: 103,
        x_max: 1376,
        o: "m 103 0 m 1106 -17 q 949 9 1021 -17 q 826 88 878 35 l 886 179 q 982 113 921 142 q 1111 83 1043 83 q 1219 113 1182 83 q 1256 186 1256 142 q 1242 226 1256 210 q 1207 253 1229 242 q 1155 273 1185 265 q 1093 288 1125 281 q 1006 310 1050 297 q 927 344 963 322 q 869 400 892 365 q 846 489 846 435 q 863 565 846 529 q 912 628 879 601 q 992 672 944 656 q 1101 688 1040 688 q 1251 660 1189 688 q 1357 592 1314 632 l 1301 504 q 1219 563 1272 540 q 1103 586 1167 586 q 1002 560 1039 586 q 965 493 965 533 q 978 458 965 472 q 1012 433 990 443 q 1061 416 1033 424 q 1121 401 1089 408 q 1210 378 1164 392 q 1292 342 1256 365 q 1353 283 1329 319 q 1376 189 1376 247 q 1359 108 1376 146 q 1307 43 1342 71 q 1222 -1 1272 15 q 1106 -17 1172 -17 m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xef\x9b\x9d": {
        ha: 1583,
        x_min: 103,
        x_max: 1528,
        o: "m 103 0 m 1229 -17 q 1106 13 1163 -17 q 1010 97 1050 42 l 1010 -256 l 885 -256 l 885 671 l 1010 671 l 1010 575 q 1103 656 1046 625 q 1229 688 1161 688 q 1349 663 1294 688 q 1444 594 1404 639 q 1506 483 1483 549 q 1528 336 1528 418 q 1506 189 1528 254 q 1444 78 1483 124 q 1349 8 1404 32 q 1229 -17 1294 -17 m 1196 94 q 1280 113 1243 94 q 1343 163 1317 131 q 1383 239 1369 194 q 1397 336 1397 283 q 1383 432 1397 388 q 1343 508 1369 476 q 1280 558 1317 540 q 1196 576 1243 576 q 1087 547 1139 576 q 1010 478 1035 518 l 1010 193 q 1086 124 1035 153 q 1196 94 1138 94 m 636 0 l 415 357 l 242 357 l 242 0 l 103 0 l 103 926 l 493 926 q 614 906 560 926 q 708 849 668 886 q 769 758 747 811 q 790 642 790 706 q 771 531 790 579 q 719 449 751 483 q 646 396 688 415 q 560 371 604 376 l 797 0 l 636 0 m 475 479 q 599 524 550 479 q 647 642 647 568 q 599 760 647 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 z "
    },
    "\xe2\x82\xa9": {
        ha: 1240,
        x_min: 14,
        x_max: 1225,
        o: "m 813 0 l 724 331 l 517 331 l 428 0 l 279 0 l 185 331 l 25 331 l 25 407 l 163 407 l 128 526 l 25 526 l 25 603 l 106 603 l 14 926 l 169 926 l 253 603 l 475 603 l 564 926 l 676 926 l 764 603 l 985 603 l 1069 926 l 1225 926 l 1132 603 l 1215 603 l 1215 526 l 1111 526 l 1076 407 l 1215 407 l 1215 331 l 1056 331 l 961 0 l 813 0 m 303 407 l 422 407 l 454 526 l 272 526 l 303 407 m 817 407 l 935 407 l 965 526 l 785 526 l 817 407 m 536 407 l 703 407 l 671 526 l 568 526 l 536 407 m 361 183 l 401 331 l 322 331 l 361 183 m 878 183 l 915 331 l 838 331 l 878 183 m 589 603 l 650 603 l 619 715 l 589 603 z "
    },
    "\xe2\x82\xaa": {
        ha: 1149,
        x_min: 100,
        x_max: 1050,
        o: "m 374 0 l 374 532 l 494 532 l 494 110 l 733 110 q 883 158 838 110 q 929 307 929 207 l 929 764 l 1050 764 l 1050 297 q 976 77 1050 154 q 733 0 903 0 l 374 0 m 460 764 q 701 687 628 764 q 775 467 775 610 l 775 231 l 654 231 l 654 457 q 608 606 654 557 q 460 654 563 654 l 219 654 l 219 0 l 100 0 l 100 764 l 460 764 z "
    },
    "\xe2\x82\xab": {
        ha: 808,
        x_min: 58,
        x_max: 794,
        o: "m 578 0 l 578 96 q 483 15 540 46 q 358 -17 425 -17 q 238 8 293 -17 q 142 77 182 32 q 81 188 103 122 q 58 335 58 253 q 81 481 58 415 q 142 592 103 546 q 238 663 182 638 q 358 688 293 688 q 481 658 424 688 q 578 574 538 628 l 578 740 l 365 740 l 365 817 l 578 817 l 578 926 l 703 926 l 703 817 l 794 817 l 794 740 l 703 740 l 703 0 l 578 0 m 392 94 q 501 123 450 94 q 578 192 551 151 l 578 478 q 501 547 551 518 q 392 576 450 576 q 307 558 344 576 q 243 508 269 540 q 203 432 217 476 q 189 335 189 388 q 203 238 189 282 q 243 163 217 194 q 307 113 269 131 q 392 94 344 94 m 168 -210 l 168 -133 l 672 -133 l 672 -210 l 168 -210 z "
    },
    "\xe2\x82\xb9": {
        ha: 728,
        x_min: 39,
        x_max: 693,
        o: "m 572 0 l 411 0 l 190 357 l 39 357 l 39 479 l 250 479 q 360 513 315 479 q 417 604 404 546 l 39 604 l 39 688 l 417 688 q 359 778 404 746 q 250 810 314 810 l 39 810 l 39 926 l 693 926 l 693 843 l 461 843 q 526 776 501 815 q 560 688 551 736 l 693 688 l 693 604 l 563 604 q 536 510 557 551 q 484 439 515 468 q 414 393 453 410 q 333 371 375 376 l 572 0 z "
    },
    "\xe2\x82\xba": {
        ha: 724,
        x_min: 14,
        x_max: 697,
        o: "m 121 0 l 121 300 l 14 238 l 14 332 l 121 394 l 121 525 l 14 463 l 14 557 l 121 619 l 121 926 l 260 926 l 260 699 l 501 839 l 501 744 l 260 604 l 260 475 l 501 615 l 501 519 l 260 379 l 260 122 l 285 122 q 467 183 389 122 q 576 356 544 243 l 697 322 q 638 192 676 251 q 545 90 599 133 q 426 24 492 47 q 285 0 360 0 l 121 0 z "
    },
    "\xe2\x82\xbd": {
        ha: 829,
        x_min: 10,
        x_max: 789,
        o: "m 475 479 q 598 524 550 479 q 646 642 646 568 q 598 760 646 715 q 475 804 550 804 l 242 804 l 242 479 l 475 479 m 242 161 l 242 0 l 103 0 l 103 161 l 10 161 l 10 243 l 103 243 l 103 369 l 10 369 l 10 479 l 103 479 l 103 926 l 493 926 q 619 904 564 926 q 713 843 675 882 q 769 753 750 804 q 789 647 789 703 q 769 540 789 590 q 712 452 750 490 q 619 392 674 414 q 493 369 564 369 l 242 369 l 242 243 l 588 243 l 588 161 l 242 161 z "
    },
    "\xc2\xae": {
        ha: 686,
        x_min: 49,
        x_max: 638,
        o: "m 638 646 q 615 531 638 585 q 552 438 592 478 q 458 374 513 397 q 343 351 404 351 q 228 374 282 351 q 135 438 175 397 q 72 531 94 478 q 49 646 49 585 q 72 761 49 707 q 135 855 94 815 q 228 917 175 894 q 343 940 282 940 q 458 917 404 940 q 552 855 513 894 q 615 761 592 815 q 638 646 638 707 m 596 646 q 576 745 596 699 q 522 826 557 792 q 442 879 488 860 q 343 899 396 899 q 244 879 290 899 q 163 826 197 860 q 109 745 129 792 q 89 646 89 699 q 109 547 89 593 q 163 467 129 501 q 244 412 197 432 q 343 392 290 392 q 442 412 396 392 q 522 467 488 432 q 576 547 557 501 q 596 646 596 593 m 424 476 l 336 610 l 275 610 l 275 476 l 231 476 l 231 814 l 368 814 q 443 786 411 814 q 475 711 475 758 q 465 664 475 683 q 440 633 454 644 q 410 616 425 621 q 389 611 396 611 l 479 476 l 424 476 m 429 711 q 410 756 429 739 q 368 774 390 774 l 275 774 l 275 651 l 368 651 q 410 668 390 651 q 429 711 429 685 z "
    },
    "\xc2\xa9": {
        ha: 1081,
        x_min: 61,
        x_max: 1019,
        o: "m 1019 464 q 982 278 1019 365 q 879 125 944 190 q 727 22 814 60 q 540 -15 640 -15 q 354 22 442 -15 q 201 125 267 60 q 99 278 136 190 q 61 464 61 365 q 99 651 61 564 q 201 803 136 738 q 354 906 267 868 q 540 943 442 943 q 727 906 640 943 q 879 803 814 868 q 982 651 944 738 q 1019 464 1019 564 m 975 464 q 941 632 975 553 q 847 771 907 711 q 708 865 788 831 q 540 899 629 899 q 372 865 450 899 q 233 771 293 831 q 140 632 174 711 q 106 464 106 553 q 140 295 106 374 q 233 157 174 217 q 372 63 293 97 q 540 29 450 29 q 708 63 629 29 q 847 157 788 97 q 941 295 907 217 q 975 464 975 374 m 749 261 q 660 192 711 217 q 544 168 610 168 q 432 191 485 168 q 340 253 379 214 q 278 347 301 293 q 256 465 256 401 q 278 583 256 529 q 340 676 301 636 q 432 738 379 715 q 544 760 485 760 q 661 735 610 760 q 749 668 713 711 l 710 632 q 638 690 682 668 q 544 711 593 711 q 455 693 497 711 q 381 643 413 675 q 330 566 349 611 q 311 465 311 521 q 330 365 311 411 q 381 287 349 319 q 455 235 413 254 q 544 217 497 217 q 639 239 594 217 q 711 297 683 261 l 749 261 z "
    },
    "\xe2\x84\x97": {
        ha: 1081,
        x_min: 61,
        x_max: 1019,
        o: "m 1019 464 q 982 278 1019 365 q 879 125 944 190 q 726 22 814 60 q 540 -15 639 -15 q 354 22 442 -15 q 201 125 267 60 q 99 278 136 190 q 61 464 61 365 q 99 650 61 563 q 201 803 136 738 q 354 906 267 868 q 540 943 442 943 q 726 906 639 943 q 879 803 814 868 q 982 650 944 738 q 1019 464 1019 563 m 975 464 q 940 632 975 553 q 847 770 906 711 q 708 864 788 829 q 540 899 629 899 q 372 864 450 899 q 233 770 293 829 q 140 632 174 711 q 106 464 106 553 q 140 295 106 374 q 233 157 174 217 q 372 63 293 97 q 540 29 450 29 q 708 63 629 29 q 847 157 788 97 q 940 295 906 217 q 975 464 975 374 m 765 581 q 751 514 765 543 q 713 464 738 485 q 657 432 689 443 q 590 421 625 421 l 435 421 l 435 182 l 379 182 l 379 744 l 590 744 q 657 733 625 744 q 713 701 689 722 q 751 650 736 681 q 765 581 765 619 m 708 581 q 674 663 708 633 q 590 693 640 693 l 435 693 l 435 471 l 590 471 q 674 501 640 471 q 708 581 708 531 z "
    },
    "\xe2\x84\xa2": {
        ha: 631,
        x_min: 24,
        x_max: 582,
        o: "m 543 621 l 543 874 l 439 621 l 428 621 l 324 874 l 324 621 l 285 621 l 285 926 l 344 926 l 433 704 l 522 926 l 582 926 l 582 621 l 543 621 m 149 890 l 149 621 l 110 621 l 110 890 l 24 890 l 24 926 l 235 926 l 235 890 l 149 890 z "
    },
    "\xe2\x84\xa0": {
        ha: 661,
        x_min: 21,
        x_max: 610,
        o: "m 571 621 l 571 874 l 467 621 l 456 621 l 351 874 l 351 621 l 313 621 l 313 926 l 372 926 l 461 704 l 550 926 l 610 926 l 610 621 l 571 621 m 261 703 q 231 635 261 660 q 140 610 200 610 q 70 624 100 610 q 21 660 40 638 l 46 689 q 85 658 61 671 q 139 644 110 644 q 197 660 179 644 q 215 699 215 675 q 190 738 215 726 q 132 758 164 750 q 94 769 113 764 q 60 785 75 775 q 36 809 46 794 q 26 847 26 824 q 58 910 26 886 q 138 935 89 935 q 251 890 214 935 l 226 864 q 139 901 194 901 q 91 888 110 901 q 72 851 72 874 q 95 817 72 828 q 150 799 118 807 q 189 787 169 793 q 224 770 208 781 q 251 744 240 760 q 261 703 261 728 z "
    },
    "\xe2\x84\x93": {
        ha: 681,
        x_min: 100,
        x_max: 638,
        o: "m 225 167 q 242 108 225 131 q 290 85 258 85 q 358 110 331 85 l 390 26 q 333 -7 367 3 q 260 -17 300 -17 q 144 21 189 -17 q 100 149 100 58 l 100 694 q 120 791 100 746 q 178 869 140 836 q 267 922 215 903 q 381 940 318 940 q 481 926 433 940 q 563 888 528 913 q 617 831 597 864 q 638 757 638 797 q 622 690 638 721 q 582 632 607 660 q 524 579 557 604 q 457 531 492 554 l 225 375 l 225 167 m 411 621 q 490 685 463 656 q 518 751 518 714 q 506 792 518 774 q 474 824 494 811 q 429 843 454 836 q 378 850 404 850 q 269 808 313 850 q 225 693 225 767 l 225 496 l 411 621 z "
    },
    "\xe2\x84\x96": {
        ha: 1554,
        x_min: 103,
        x_max: 1503,
        o: "m 103 0 m 1272 486 q 1177 504 1219 486 q 1105 553 1135 522 q 1059 626 1075 585 q 1043 715 1043 668 q 1059 804 1043 763 q 1105 877 1075 846 q 1177 926 1135 908 q 1272 944 1219 944 q 1369 926 1326 944 q 1441 877 1411 908 q 1487 804 1471 846 q 1503 715 1503 763 q 1487 626 1503 668 q 1441 553 1471 585 q 1369 504 1411 522 q 1272 486 1326 486 m 1272 564 q 1371 606 1336 564 q 1406 715 1406 649 q 1371 823 1406 781 q 1272 865 1336 865 q 1174 823 1208 865 q 1140 715 1140 781 q 1174 606 1140 649 q 1272 564 1208 564 m 754 0 l 242 700 l 242 0 l 103 0 l 103 926 l 246 926 l 750 243 l 750 926 l 889 926 l 889 0 l 754 0 z "
    },
    "\xe2\x84\xae": {
        ha: 1169,
        x_min: 43,
        x_max: 1126,
        o: "m 249 450 q 242 443 242 450 l 242 179 q 254 147 242 160 q 403 42 317 81 q 588 4 489 4 q 782 47 693 4 q 935 164 871 89 l 1014 164 q 828 26 939 76 q 585 -25 717 -25 q 374 13 472 -25 q 201 117 275 51 q 85 272 128 183 q 43 463 43 361 q 85 653 43 564 q 201 808 128 742 q 374 912 275 874 q 585 950 472 950 q 796 912 697 950 q 968 808 894 874 q 1084 653 1042 742 q 1126 463 1126 564 l 1126 450 l 249 450 m 928 750 q 914 783 928 769 q 767 884 851 847 q 588 921 683 921 q 403 883 489 921 q 256 779 318 844 q 242 746 242 765 l 242 485 q 249 476 242 476 l 922 476 q 928 485 928 476 l 928 750 z "
    },
    "/": {
        ha: 425,
        x_min: 0,
        x_max: 425,
        o: "m 0 -28 l 329 954 l 425 954 l 96 -28 l 0 -28 z "
    },
    "\\": {
        ha: 425,
        x_min: 0,
        x_max: 425,
        o: "m 0 954 l 96 954 l 425 -28 l 329 -28 l 0 954 z "
    },
    "^": {
        ha: 603,
        x_min: 26,
        x_max: 576,
        o: "m 479 463 l 301 838 l 125 463 l 26 463 l 256 926 l 349 926 l 576 463 l 479 463 z "
    },
    _: {
        ha: 783,
        x_min: -4,
        x_max: 788,
        o: "m -4 -144 l -4 -56 l 788 -56 l 788 -144 l -4 -144 z "
    },
    "~": {
        ha: 701,
        x_min: 36,
        x_max: 664,
        o: "m 664 915 q 647 793 658 853 q 614 687 636 733 q 557 612 592 640 q 468 583 522 583 q 405 598 431 583 q 362 635 379 613 q 333 685 344 657 q 313 740 322 713 q 298 779 306 761 q 281 811 290 797 q 261 833 272 825 q 233 842 250 842 q 192 822 210 842 q 161 766 174 801 q 140 683 149 731 q 128 582 132 636 l 36 593 q 53 715 42 656 q 88 822 65 775 q 145 897 110 868 q 233 925 181 925 q 296 910 271 925 q 338 874 321 896 q 367 823 356 851 q 389 768 379 794 q 420 696 404 726 q 468 665 436 665 q 510 685 492 665 q 540 740 528 706 q 561 823 553 775 q 574 926 569 871 l 664 915 z "
    },
    "|": {
        ha: 294,
        x_min: 103,
        x_max: 192,
        o: "m 103 -28 l 103 954 l 192 954 l 192 -28 l 103 -28 z "
    },
    "\xc2\xa6": {
        ha: 294,
        x_min: 103,
        x_max: 192,
        o: "m 103 -28 l 103 411 l 192 411 l 192 -28 l 103 -28 m 103 515 l 103 954 l 192 954 l 192 515 l 103 515 z "
    },
    "+": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 393 426 l 393 135 l 301 135 l 301 426 l 40 426 l 40 510 l 301 510 l 301 792 l 393 792 l 393 510 l 654 510 l 654 426 l 393 426 z "
    },
    "\xe2\x88\x92": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 426 l 40 510 l 654 510 l 654 426 l 40 426 z "
    },
    "\xc3\x97": {
        ha: 694,
        x_min: 85,
        x_max: 610,
        o: "m 347 404 l 144 201 l 85 260 l 289 464 l 85 667 l 144 726 l 347 522 l 550 726 l 610 667 l 407 464 l 610 260 l 550 201 l 347 404 z "
    },
    "\xc3\xb7": {
        ha: 710,
        x_min: 40,
        x_max: 669,
        o: "m 425 726 q 404 677 425 699 q 354 656 383 656 q 306 677 326 656 q 285 726 285 699 q 306 776 285 756 q 354 796 326 796 q 404 776 383 796 q 425 726 425 756 m 40 426 l 40 510 l 669 510 l 669 426 l 40 426 m 425 204 q 404 156 425 176 q 354 136 383 136 q 306 156 326 136 q 285 204 285 176 q 306 254 285 233 q 354 275 326 275 q 404 254 383 275 q 425 204 425 233 z "
    },
    "\xe2\x8b\x85": {
        ha: 331,
        x_min: 78,
        x_max: 251,
        o: "m 78 253 m 251 339 q 226 278 251 304 q 164 253 200 253 q 103 278 128 253 q 78 339 78 304 q 103 401 78 375 q 164 426 128 426 q 226 401 200 426 q 251 339 251 375 z "
    },
    "<": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 419 l 40 510 l 654 806 l 654 706 l 139 464 l 654 224 l 654 125 l 40 419 z "
    },
    ">": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 125 l 40 224 l 554 464 l 40 706 l 40 806 l 654 510 l 654 419 l 40 125 z "
    },
    "=": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 556 l 40 639 l 654 639 l 654 556 l 40 556 m 40 289 l 40 372 l 654 372 l 654 289 l 40 289 z "
    },
    "\xe2\x89\xa0": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 92 129 l 193 289 l 40 289 l 40 372 l 247 372 l 364 556 l 40 556 l 40 639 l 417 639 l 517 797 l 603 797 l 501 639 l 654 639 l 654 556 l 449 556 l 331 372 l 654 372 l 654 289 l 278 289 l 176 129 l 92 129 z "
    },
    "\xc2\xb1": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 393 450 l 393 158 l 301 158 l 301 450 l 40 450 l 40 533 l 301 533 l 301 817 l 393 817 l 393 533 l 654 533 l 654 450 l 393 450 m 40 0 l 40 83 l 654 83 l 654 0 l 40 0 z "
    },
    "\xe2\x89\xa4": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 436 l 40 526 l 654 822 l 654 722 l 139 481 l 654 240 l 654 142 l 40 436 m 40 0 l 40 83 l 654 83 l 654 0 l 40 0 z "
    },
    "\xe2\x89\xa5": {
        ha: 694,
        x_min: 39,
        x_max: 654,
        o: "m 39 142 l 39 240 l 554 481 l 39 722 l 39 822 l 654 526 l 654 436 l 39 142 m 39 0 l 39 83 l 653 83 l 653 0 l 39 0 z "
    },
    "\xc2\xac": {
        ha: 704,
        x_min: 40,
        x_max: 654,
        o: "m 654 289 l 568 289 l 568 556 l 40 556 l 40 639 l 654 639 l 654 289 z "
    },
    "\xe2\x89\x88": {
        ha: 694,
        x_min: 40,
        x_max: 654,
        o: "m 40 381 q 115 347 75 358 q 194 336 156 336 q 274 347 243 336 q 335 374 306 358 q 403 401 367 389 q 500 414 439 414 q 581 405 539 414 q 654 378 622 396 l 654 286 q 580 321 621 310 q 500 332 539 332 q 419 320 451 332 q 358 294 388 308 q 290 266 326 279 q 194 253 253 253 q 114 262 156 253 q 40 289 72 271 l 40 381 m 40 640 q 115 606 75 617 q 194 596 156 596 q 274 608 243 596 q 335 633 306 619 q 403 662 367 649 q 500 675 439 675 q 581 665 539 675 q 654 639 622 656 l 654 547 q 580 581 621 569 q 500 592 539 592 q 419 580 451 592 q 358 554 388 568 q 290 526 326 539 q 194 514 253 514 q 114 523 156 514 q 40 549 72 532 l 40 640 z "
    },
    "\xe2\x88\xab": {
        ha: 493,
        x_min: 24,
        x_max: 469,
        o: "m 24 -139 l 24 -50 l 108 -50 q 172 -20 146 -50 q 199 58 199 10 l 199 869 q 214 951 199 915 q 256 1013 229 988 q 315 1053 282 1039 q 385 1067 349 1067 l 469 1067 l 469 978 l 385 978 q 321 948 347 978 q 294 869 294 918 l 294 57 q 278 -25 294 11 q 237 -86 263 -61 q 177 -125 211 -111 q 108 -139 143 -139 l 24 -139 z "
    },
    "\xe2\x88\x9a": {
        ha: 989,
        x_min: 86,
        x_max: 947,
        o: "m 493 0 l 319 444 l 114 365 l 86 444 l 374 551 l 540 128 l 851 926 l 947 926 l 583 0 l 493 0 z "
    },
    "\xe2\x88\x9e": {
        ha: 924,
        x_min: 40,
        x_max: 883,
        o: "m 260 231 q 160 251 201 231 q 92 306 119 272 q 53 382 65 340 q 40 465 40 424 q 53 550 40 508 q 92 625 65 592 q 160 679 119 658 q 260 700 201 700 q 382 656 331 700 q 461 551 433 613 q 542 656 490 613 q 665 700 594 700 q 765 679 724 700 q 833 625 807 658 q 871 550 858 592 q 883 465 883 508 q 871 381 883 424 q 833 306 858 339 q 765 251 807 272 q 665 231 724 231 q 542 274 594 231 q 461 379 490 318 q 382 274 433 318 q 260 231 331 231 m 656 315 q 758 357 721 315 q 794 465 794 399 q 758 574 794 532 q 656 617 721 617 q 604 603 628 617 q 561 569 581 590 q 526 522 542 549 q 501 465 511 494 q 526 409 511 436 q 561 361 542 382 q 604 328 581 340 q 656 315 628 315 m 269 314 q 321 327 297 314 q 364 361 344 340 q 398 409 383 382 q 424 465 413 436 q 398 522 413 494 q 364 569 383 549 q 321 603 344 590 q 269 617 297 617 q 167 574 204 617 q 129 465 129 532 q 167 356 129 399 q 269 314 204 314 z "
    },
    "\xe2\x88\x82": {
        ha: 794,
        x_min: 58,
        x_max: 736,
        o: "m 397 -17 q 256 10 319 -17 q 149 83 193 38 q 82 190 106 129 q 58 321 58 251 q 81 451 58 390 q 144 558 103 513 q 240 631 185 604 q 363 657 296 657 q 483 632 429 657 q 576 544 536 607 q 453 723 536 636 q 243 872 369 810 l 339 946 q 483 847 413 907 q 610 711 554 788 q 701 543 667 635 q 736 349 736 451 q 713 202 736 269 q 645 86 689 135 q 539 10 601 38 q 397 -17 476 -17 m 397 94 q 486 113 447 94 q 551 162 525 131 q 592 234 578 193 q 606 321 606 275 q 592 408 606 367 q 551 480 578 449 q 486 529 525 511 q 397 547 447 547 q 308 529 347 547 q 243 480 269 511 q 203 408 217 449 q 189 321 189 367 q 203 234 189 275 q 243 162 217 193 q 308 113 269 131 q 397 94 347 94 z "
    },
    "\xe2\x88\x91": {
        ha: 803,
        x_min: 72,
        x_max: 732,
        o: "m 551 414 l 239 -3 l 732 -3 l 732 -125 l 72 -125 l 72 -3 l 382 413 l 74 804 l 74 926 l 732 926 l 732 804 l 244 804 l 551 414 z "
    },
    "\xe2\x88\x8f": {
        ha: 1014,
        x_min: 42,
        x_max: 972,
        o: "m 685 -125 l 685 804 l 329 804 l 329 -125 l 190 -125 l 190 804 l 42 804 l 42 926 l 972 926 l 972 804 l 824 804 l 824 -125 l 685 -125 z "
    },
    "\xe2\x97\x8a": {
        ha: 521,
        x_min: 26,
        x_max: 494,
        o: "m 246 0 l 26 464 l 246 926 l 275 926 l 494 464 l 275 0 l 246 0 m 444 464 l 260 869 l 76 464 l 261 57 l 444 464 z "
    },
    "\xc2\xb0": {
        ha: 411,
        x_min: 31,
        x_max: 379,
        o: "m 379 765 q 365 697 379 729 q 328 642 351 665 q 272 605 304 618 q 204 592 240 592 q 137 605 168 592 q 82 642 106 618 q 44 697 58 665 q 31 765 31 729 q 44 833 31 801 q 82 889 58 865 q 137 926 106 913 q 204 940 168 940 q 272 926 240 940 q 328 889 304 913 q 365 833 351 865 q 379 765 379 801 m 304 765 q 274 835 304 806 q 204 865 244 865 q 135 835 164 865 q 107 765 107 806 q 135 696 107 725 q 204 667 164 667 q 274 696 244 667 q 304 765 304 725 z "
    },
    "\xe2\x80\xb2": {
        ha: 299,
        x_min: 50,
        x_max: 275,
        o: "m 50 568 q 89 724 72 654 q 103 782 96 753 q 117 835 111 811 q 128 876 124 860 q 135 896 132 892 q 162 928 143 917 q 203 940 181 940 q 255 919 235 940 q 275 868 275 897 q 269 840 275 851 q 260 822 268 836 q 240 786 251 807 q 213 739 228 765 q 183 686 199 713 q 104 546 147 624 l 50 568 z "
    },
    "\xe2\x80\xb3": {
        ha: 529,
        x_min: 50,
        x_max: 506,
        o: "m 279 568 q 318 724 300 654 q 334 782 326 753 q 348 835 342 811 q 358 876 354 860 q 365 896 363 892 q 392 928 374 917 q 432 940 411 940 q 485 919 464 940 q 506 868 506 897 q 500 840 506 851 q 490 822 499 836 q 470 786 482 807 q 444 739 458 765 q 414 686 429 713 q 335 546 378 624 l 279 568 m 50 568 q 89 724 72 654 q 103 782 96 753 q 117 835 111 811 q 128 876 124 860 q 135 896 132 892 q 162 928 143 917 q 203 940 181 940 q 255 919 235 940 q 275 868 275 897 q 269 840 275 851 q 260 822 268 836 q 240 786 251 807 q 213 739 228 765 q 183 686 199 713 q 104 546 147 624 l 50 568 z "
    },
    "\xc2\xaa": {
        ha: 528,
        x_min: 53,
        x_max: 447,
        o: "m 354 453 l 354 500 q 295 458 331 475 q 207 442 260 442 q 151 451 179 442 q 101 478 124 460 q 66 524 79 497 q 53 586 53 550 q 66 649 53 622 q 101 694 79 676 q 151 720 124 711 q 207 729 179 729 q 295 713 260 729 q 354 671 331 696 l 354 742 q 324 805 354 782 q 249 828 293 828 q 177 813 213 828 q 114 765 142 797 l 75 826 q 161 882 114 864 q 263 900 208 900 q 332 892 299 900 q 391 865 365 883 q 432 815 417 846 q 447 740 447 785 l 447 453 l 354 453 m 244 503 q 306 515 276 503 q 354 551 336 528 l 354 621 q 306 657 336 644 q 244 669 276 669 q 174 647 203 669 q 146 586 146 624 q 174 525 146 547 q 244 503 203 503 z "
    },
    "\xef\x9b\xa9": {
        ha: 528,
        x_min: 53,
        x_max: 447,
        o: "m 53 442 m 354 453 l 354 500 q 295 458 331 475 q 207 442 260 442 q 151 451 179 442 q 101 478 124 460 q 66 524 79 497 q 53 586 53 550 q 66 649 53 622 q 101 694 79 676 q 151 720 124 711 q 207 729 179 729 q 295 713 260 729 q 354 671 331 696 l 354 742 q 324 805 354 782 q 249 828 293 828 q 177 813 213 828 q 114 765 142 797 l 75 826 q 161 882 114 864 q 263 900 208 900 q 332 892 299 900 q 391 865 365 883 q 432 815 417 846 q 447 740 447 785 l 447 453 l 354 453 m 244 503 q 306 515 276 503 q 354 551 336 528 l 354 621 q 306 657 336 644 q 244 669 276 669 q 174 647 203 669 q 146 586 146 624 q 174 525 146 547 q 244 503 203 503 z "
    },
    "\xef\x9b\xaa": {
        ha: 569,
        x_min: 79,
        x_max: 518,
        o: "m 293 517 q 388 559 353 517 q 422 671 422 601 q 388 782 422 739 q 293 825 353 825 q 224 808 257 825 q 174 768 190 792 l 174 572 q 224 533 190 549 q 293 517 257 517 m 79 453 l 79 1056 l 174 1056 l 174 828 q 319 900 229 900 q 463 839 407 900 q 518 671 518 778 q 503 574 518 617 q 461 502 488 532 q 399 457 435 472 q 319 442 363 442 q 237 461 275 442 q 174 513 199 481 l 174 453 l 79 453 z "
    },
    "\xef\x9b\xab": {
        ha: 571,
        x_min: 51,
        x_max: 490,
        o: "m 397 453 l 397 513 q 334 461 372 481 q 251 442 296 442 q 172 457 208 442 q 109 502 136 472 q 67 574 82 532 q 51 671 51 617 q 67 766 51 724 q 108 838 82 808 q 172 884 135 868 q 251 900 208 900 q 396 828 340 900 l 396 1056 l 490 1056 l 490 453 l 397 453 m 278 517 q 347 533 314 517 q 397 572 381 549 l 397 768 q 347 808 381 792 q 278 825 314 825 q 183 782 218 825 q 149 671 149 739 q 183 559 149 601 q 278 517 218 517 z "
    },
    "\xef\x9b\xac": {
        ha: 550,
        x_min: 51,
        x_max: 499,
        o: "m 286 442 q 193 458 236 442 q 119 505 150 475 q 69 577 88 535 q 51 671 51 619 q 68 760 51 718 q 115 833 85 801 q 188 882 146 864 q 279 900 229 900 q 369 882 329 900 q 439 833 410 864 q 483 757 468 801 q 499 661 499 713 l 499 639 l 150 639 q 193 549 156 586 q 294 513 231 513 q 365 525 329 513 q 425 561 400 538 l 467 506 q 386 458 433 474 q 286 442 339 442 m 410 707 q 400 750 408 728 q 376 790 392 772 q 335 820 360 808 q 278 832 311 832 q 223 820 246 832 q 184 790 200 808 q 159 750 168 772 q 149 707 150 728 l 410 707 z "
    },
    "\xca\xb0": {
        ha: 557,
        x_min: 79,
        x_max: 478,
        o: "m 383 453 l 383 728 q 358 801 383 782 q 292 821 333 821 q 222 803 254 821 q 172 763 190 785 l 172 453 l 79 453 l 79 1056 l 172 1056 l 172 829 q 238 877 196 854 q 332 900 279 900 q 478 753 478 900 l 478 453 l 383 453 z "
    },
    "\xef\x98\xb7": {
        ha: 557,
        x_min: 79,
        x_max: 478,
        o: "m 79 453 m 383 453 l 383 728 q 358 801 383 782 q 292 821 333 821 q 222 803 254 821 q 172 763 190 785 l 172 453 l 79 453 l 79 1056 l 172 1056 l 172 829 q 238 877 196 854 q 332 900 279 900 q 478 753 478 900 l 478 453 l 383 453 z "
    },
    "\xef\x9b\xad": {
        ha: 233,
        x_min: 58,
        x_max: 175,
        o: "m 117 946 q 76 963 93 946 q 58 1003 58 979 q 76 1044 58 1026 q 117 1061 93 1061 q 158 1044 140 1061 q 175 1003 175 1026 q 158 963 175 979 q 117 946 140 946 m 69 453 l 69 889 l 164 889 l 164 453 l 69 453 z "
    },
    "\xef\x9b\xae": {
        ha: 253,
        x_min: 79,
        x_max: 174,
        o: "m 79 453 l 79 1056 l 174 1056 l 174 453 l 79 453 z "
    },
    "\xef\x9b\xaf": {
        ha: 803,
        x_min: 79,
        x_max: 722,
        o: "m 629 453 l 629 738 q 612 798 629 775 q 554 821 594 821 q 493 802 522 821 q 449 763 464 783 l 449 453 l 356 453 l 356 738 q 338 798 356 775 q 278 821 319 821 q 217 802 246 821 q 174 763 189 783 l 174 453 l 79 453 l 79 889 l 174 889 l 174 829 q 194 851 181 839 q 227 874 208 864 q 269 892 246 885 q 319 900 293 900 q 399 877 368 900 q 442 819 431 854 q 501 874 461 849 q 594 900 542 900 q 689 866 656 900 q 722 761 722 832 l 722 453 l 629 453 z "
    },
    "\xe2\x81\xbf": {
        ha: 558,
        x_min: 79,
        x_max: 478,
        o: "m 385 453 l 385 725 q 360 800 385 779 q 292 821 335 821 q 222 803 254 821 q 174 763 190 785 l 174 453 l 79 453 l 79 889 l 174 889 l 174 829 q 238 877 197 854 q 332 900 279 900 q 447 860 415 900 q 478 753 478 819 l 478 453 l 385 453 z "
    },
    "\xc2\xba": {
        ha: 563,
        x_min: 51,
        x_max: 511,
        o: "m 281 442 q 185 460 228 442 q 113 509 143 478 q 67 582 83 540 q 51 671 51 624 q 67 760 51 718 q 113 833 83 801 q 185 882 143 864 q 281 900 228 900 q 377 882 335 900 q 449 833 419 864 q 495 760 479 801 q 511 671 511 718 q 495 582 511 624 q 449 509 479 540 q 377 460 419 478 q 281 442 335 442 m 281 519 q 379 562 344 519 q 414 671 414 604 q 379 778 414 736 q 281 821 344 821 q 183 778 217 821 q 149 671 149 736 q 183 562 149 604 q 281 519 217 519 z "
    },
    "\xef\x9b\xb0": {
        ha: 563,
        x_min: 51,
        x_max: 511,
        o: "m 51 442 m 281 442 q 185 460 228 442 q 113 509 143 478 q 67 582 83 540 q 51 671 51 624 q 67 760 51 718 q 113 833 83 801 q 185 882 143 864 q 281 900 228 900 q 377 882 335 900 q 449 833 419 864 q 495 760 479 801 q 511 671 511 718 q 495 582 511 624 q 449 509 479 540 q 377 460 419 478 q 281 442 335 442 m 281 519 q 379 562 344 519 q 414 671 414 604 q 379 778 414 736 q 281 821 344 821 q 183 778 217 821 q 149 671 149 736 q 183 562 149 604 q 281 519 217 519 z "
    },
    "\xef\x9b\xb1": {
        ha: 340,
        x_min: 79,
        x_max: 319,
        o: "m 79 453 l 79 889 l 174 889 l 174 825 q 238 878 200 856 q 319 900 275 900 l 319 814 l 289 815 q 223 798 258 815 q 174 757 188 781 l 174 453 l 79 453 z "
    },
    "\xef\x9b\xb2": {
        ha: 460,
        x_min: 35,
        x_max: 410,
        o: "m 224 442 q 115 462 161 442 q 35 515 68 482 l 76 574 q 140 528 100 547 q 225 508 181 508 q 295 526 271 508 q 319 572 319 544 q 286 618 319 606 q 208 642 253 631 q 151 656 179 647 q 99 678 122 664 q 60 714 75 692 q 46 772 46 736 q 91 861 46 822 q 221 900 136 900 q 328 881 286 900 q 393 836 369 863 l 354 781 q 300 819 335 804 q 224 833 265 833 q 160 817 183 833 q 136 772 136 800 q 167 733 136 744 q 240 714 199 722 q 299 701 269 708 q 353 678 329 693 q 394 640 378 664 q 410 579 410 617 q 363 481 410 521 q 224 442 315 442 z "
    },
    "\xef\x9b\xb3": {
        ha: 297,
        x_min: 11,
        x_max: 289,
        o: "m 200 442 q 114 471 143 442 q 85 554 85 500 l 85 821 l 11 821 l 11 889 l 85 889 l 85 1008 l 179 1008 l 179 889 l 269 889 l 269 821 l 179 821 l 179 569 q 190 531 179 546 q 222 517 201 517 q 249 522 238 517 q 267 533 260 526 l 289 471 q 254 450 276 458 q 200 442 232 442 z "
    },
    "\xe2\x81\xb0": {
        ha: 542,
        x_min: 43,
        x_max: 500,
        o: "m 43 575 m 500 863 q 487 758 500 810 q 446 667 474 707 q 375 601 418 626 q 272 575 332 575 q 168 601 211 575 q 97 667 125 626 q 56 758 69 707 q 43 863 43 810 q 56 967 43 915 q 97 1058 69 1018 q 168 1124 125 1099 q 272 1149 211 1149 q 375 1124 332 1149 q 446 1058 418 1099 q 487 967 474 1018 q 500 863 500 915 m 400 863 q 393 942 400 904 q 371 1008 386 979 q 331 1053 356 1036 q 272 1069 307 1069 q 211 1053 236 1069 q 171 1008 186 1036 q 149 942 156 979 q 142 863 142 904 q 149 783 142 821 q 171 716 156 744 q 211 671 186 688 q 272 654 236 654 q 331 671 307 654 q 371 716 356 688 q 393 783 386 744 q 400 863 400 821 z "
    },
    "\xc2\xb9": {
        ha: 347,
        x_min: 17,
        x_max: 264,
        o: "m 17 585 m 165 585 l 165 1014 l 74 918 l 17 978 l 178 1140 l 264 1140 l 264 585 l 165 585 z "
    },
    "\xc2\xb2": {
        ha: 542,
        x_min: 63,
        x_max: 482,
        o: "m 63 585 m 68 585 l 68 657 q 210 761 151 715 q 307 844 269 807 q 363 913 344 882 q 381 975 381 944 q 347 1047 381 1024 q 269 1069 314 1069 q 177 1047 218 1069 q 115 997 136 1025 l 63 1060 q 157 1126 100 1104 q 272 1149 214 1149 q 350 1138 313 1149 q 416 1107 388 1128 q 461 1055 444 1086 q 478 982 478 1024 q 406 827 478 903 q 211 664 333 751 l 482 664 l 482 585 l 68 585 z "
    },
    "\xc2\xb3": {
        ha: 542,
        x_min: 54,
        x_max: 483,
        o: "m 54 575 m 483 736 q 426 620 483 665 q 269 575 369 575 q 137 601 192 575 q 54 664 82 626 l 106 726 q 177 673 133 692 q 265 654 221 654 q 355 678 324 654 q 386 742 386 701 q 347 810 386 792 q 249 829 307 829 q 213 829 229 829 q 190 828 197 829 l 190 908 q 215 907 199 907 q 247 907 231 907 q 342 925 306 907 q 378 988 378 943 q 343 1049 378 1028 q 260 1069 308 1069 q 110 1004 172 1069 l 61 1063 q 146 1124 94 1099 q 269 1149 197 1149 q 418 1108 363 1149 q 474 1000 474 1068 q 463 949 474 971 q 433 910 451 926 q 394 885 415 894 q 350 871 372 875 q 394 860 371 869 q 437 835 417 851 q 470 794 457 818 q 483 736 483 769 z "
    },
    "\xe2\x81\xb4": {
        ha: 542,
        x_min: 50,
        x_max: 497,
        o: "m 50 585 m 419 718 l 419 585 l 322 585 l 322 718 l 50 718 l 50 788 l 283 1140 l 419 1140 l 419 797 l 497 797 l 497 718 l 419 718 m 322 1056 l 147 797 l 322 797 l 322 1056 z "
    },
    "\xe2\x81\xb5": {
        ha: 542,
        x_min: 57,
        x_max: 485,
        o: "m 57 575 m 485 761 q 469 685 485 719 q 424 626 453 651 q 356 588 396 601 q 268 575 315 575 q 142 599 194 575 q 57 664 89 622 l 113 729 q 268 654 171 654 q 356 685 324 654 q 389 760 389 715 q 356 836 389 807 q 271 865 324 865 q 143 811 196 865 l 74 835 l 74 1140 l 447 1140 l 447 1061 l 172 1061 l 172 889 q 226 924 193 910 q 303 938 260 938 q 372 926 339 938 q 429 894 404 915 q 469 839 454 872 q 485 761 485 806 z "
    },
    "\xe2\x81\xb6": {
        ha: 542,
        x_min: 49,
        x_max: 494,
        o: "m 49 575 m 494 761 q 479 688 494 722 q 437 629 464 654 q 371 590 410 604 q 285 575 332 575 q 177 598 222 575 q 103 660 132 621 q 62 751 75 699 q 49 861 49 803 q 65 974 49 921 q 113 1065 81 1026 q 191 1126 144 1104 q 300 1149 238 1149 q 393 1132 353 1149 q 464 1088 433 1115 l 419 1018 q 369 1056 396 1042 q 300 1069 342 1069 q 233 1053 261 1069 q 185 1012 204 1038 q 156 952 165 986 q 146 882 146 918 q 146 873 146 878 q 147 863 146 868 q 209 917 168 890 q 301 943 250 943 q 376 931 340 943 q 438 897 411 919 q 479 840 464 874 q 494 761 494 806 m 396 758 q 360 839 396 813 q 275 865 324 865 q 206 847 239 865 q 149 796 172 828 q 158 746 150 771 q 183 700 167 721 q 223 667 199 679 q 281 654 247 654 q 330 664 308 654 q 366 688 351 674 q 388 722 381 703 q 396 758 396 740 z "
    },
    "\xe2\x81\xb7": {
        ha: 507,
        x_min: 43,
        x_max: 456,
        o: "m 43 585 m 232 585 l 124 585 l 349 1061 l 43 1061 l 43 1140 l 456 1140 l 456 1072 l 232 585 z "
    },
    "\xe2\x81\xb8": {
        ha: 542,
        x_min: 51,
        x_max: 490,
        o: "m 51 575 m 490 726 q 472 659 490 688 q 424 612 454 631 q 353 584 393 593 q 271 575 314 575 q 188 584 228 575 q 118 612 149 593 q 69 659 88 631 q 51 726 51 688 q 92 819 51 781 q 190 871 133 857 q 99 916 138 883 q 61 1001 61 949 q 80 1069 61 1040 q 128 1115 99 1097 q 196 1140 158 1132 q 271 1149 233 1149 q 346 1140 308 1149 q 413 1115 383 1132 q 462 1069 443 1097 q 481 1001 481 1040 q 443 916 481 949 q 353 871 406 883 q 449 819 408 857 q 490 726 490 781 m 383 989 q 351 1050 383 1029 q 271 1071 319 1071 q 190 1050 222 1071 q 158 989 158 1029 q 172 950 158 965 q 205 925 186 935 q 242 910 224 915 q 271 903 261 904 q 300 910 281 904 q 338 925 319 915 q 369 950 356 935 q 383 989 383 965 m 393 736 q 378 781 393 763 q 342 810 363 799 q 302 828 322 822 q 271 835 282 833 q 240 828 260 833 q 199 810 219 822 q 164 781 179 799 q 149 736 149 763 q 185 674 149 696 q 271 651 221 651 q 357 674 321 651 q 393 736 393 696 z "
    },
    "\xe2\x81\xb9": {
        ha: 542,
        x_min: 49,
        x_max: 494,
        o: "m 49 575 m 49 963 q 63 1035 49 1001 q 106 1094 78 1069 q 172 1134 133 1119 q 258 1149 210 1149 q 366 1126 321 1149 q 440 1063 411 1103 q 481 972 468 1024 q 494 861 494 919 q 478 749 494 801 q 431 658 463 697 q 351 597 399 619 q 243 575 304 575 q 149 592 190 575 q 79 636 108 608 l 124 706 q 174 667 147 681 q 243 654 201 654 q 309 669 281 654 q 357 711 338 685 q 386 771 376 738 q 396 842 396 804 l 396 861 q 333 806 374 832 q 242 781 292 781 q 167 792 203 781 q 106 827 132 804 q 64 884 79 850 q 49 963 49 918 m 146 965 q 182 883 146 910 q 267 857 218 857 q 338 876 303 857 q 394 928 372 894 q 384 978 392 953 q 361 1024 376 1003 q 322 1057 346 1044 q 264 1069 297 1069 q 213 1060 235 1069 q 176 1035 192 1050 q 153 1002 161 1021 q 146 965 146 983 z "
    },
    "\xe2\x81\xbd": {
        ha: 236,
        x_min: 35,
        x_max: 222,
        o: "m 35 494 m 165 494 q 69 663 103 565 q 35 863 35 761 q 69 1060 35 963 q 165 1231 103 1158 l 222 1206 q 157 1044 179 1124 q 135 863 135 965 q 157 680 135 760 q 222 519 179 600 l 165 494 z "
    },
    "\xe2\x81\xbe": {
        ha: 236,
        x_min: 29,
        x_max: 215,
        o: "m 29 494 m 215 863 q 181 663 215 761 q 86 494 147 565 l 29 519 q 94 680 71 600 q 117 863 117 760 q 111 959 117 914 q 94 1045 106 1004 q 66 1126 82 1086 q 29 1206 50 1165 l 86 1231 q 181 1060 147 1158 q 215 863 215 963 z "
    },
    "\xef\x9b\xa0": {
        ha: 429,
        x_min: 36,
        x_max: 411,
        o: "m 36 578 m 217 654 q 143 677 176 660 q 86 722 110 694 q 49 785 63 749 q 36 863 36 821 q 86 1003 36 946 q 217 1071 136 1060 l 217 1132 l 282 1132 l 282 1071 q 360 1044 329 1064 q 411 999 392 1024 l 350 950 q 282 999 325 988 l 282 725 q 350 775 324 736 l 411 725 q 360 680 392 700 q 282 653 329 660 l 282 578 l 217 578 l 217 654 m 126 863 q 151 774 126 810 q 217 726 175 738 l 217 996 q 151 949 175 985 q 126 863 126 913 z "
    },
    "\xef\x9b\xa2": {
        ha: 200,
        x_min: 38,
        x_max: 156,
        o: "m 38 475 m 156 625 q 135 539 156 578 q 79 475 115 500 l 39 508 q 78 541 58 519 q 99 582 97 563 q 96 581 97 582 q 93 581 94 581 q 56 597 74 581 q 38 636 38 613 q 55 677 38 660 q 96 694 72 694 q 139 676 122 694 q 156 625 156 657 z "
    },
    "\xef\x9b\xa4": {
        ha: 518,
        x_min: 31,
        x_max: 488,
        o: "m 31 501 m 233 576 q 113 605 164 581 q 31 665 63 629 l 88 729 q 151 681 114 703 q 233 653 188 660 l 233 828 q 165 846 199 836 q 103 874 131 856 q 60 919 76 892 q 43 989 43 947 q 95 1097 43 1053 q 233 1147 147 1142 l 233 1225 l 300 1225 l 300 1146 q 401 1118 358 1139 q 469 1067 443 1097 l 414 1010 q 363 1049 392 1033 q 300 1071 333 1064 l 300 910 q 367 890 333 901 q 428 861 401 879 q 471 815 454 843 q 488 744 488 786 q 440 630 488 674 q 300 578 392 586 l 300 501 l 233 501 l 233 576 m 388 733 q 363 783 388 767 q 300 811 338 800 l 300 653 q 366 683 344 660 q 388 733 388 706 m 143 997 q 169 952 143 967 q 233 926 194 938 l 233 1074 q 168 1048 193 1068 q 143 997 143 1028 z "
    },
    "\xef\x9b\xa6": {
        ha: 254,
        x_min: 25,
        x_max: 229,
        o: "m 25 824 m 25 824 l 25 899 l 229 899 l 229 824 l 25 824 z "
    },
    "\xef\x9b\xa8": {
        ha: 204,
        x_min: 43,
        x_max: 160,
        o: "m 43 579 m 160 636 q 143 596 160 613 q 103 579 126 579 q 61 596 79 579 q 43 636 43 613 q 61 677 43 660 q 103 694 79 694 q 143 677 126 694 q 160 636 160 660 z "
    },
    "\xe2\x82\x80": {
        ha: 542,
        x_min: 43,
        x_max: 500,
        o: "m 43 0 m 500 76 q 487 -28 500 24 q 446 -119 474 -79 q 375 -185 418 -160 q 272 -211 332 -211 q 168 -185 211 -211 q 97 -119 125 -160 q 56 -28 69 -79 q 43 76 43 24 q 56 181 43 129 q 97 272 69 232 q 168 338 125 313 q 272 363 211 363 q 375 338 332 363 q 446 272 418 313 q 487 181 474 232 q 500 76 500 129 m 400 76 q 393 156 400 118 q 371 222 386 193 q 331 267 356 250 q 272 283 307 283 q 211 267 236 283 q 171 222 186 250 q 149 156 156 193 q 142 76 142 118 q 149 -3 142 35 q 171 -70 156 -42 q 211 -115 186 -99 q 272 -132 236 -132 q 331 -115 307 -132 q 371 -70 356 -99 q 393 -3 386 -42 q 400 76 400 35 z "
    },
    "\xe2\x82\x81": {
        ha: 347,
        x_min: 17,
        x_max: 264,
        o: "m 17 0 m 165 -201 l 165 228 l 74 132 l 17 192 l 178 354 l 264 354 l 264 -201 l 165 -201 z "
    },
    "\xe2\x82\x82": {
        ha: 542,
        x_min: 63,
        x_max: 482,
        o: "m 63 0 m 68 -201 l 68 -129 q 210 -25 151 -71 q 307 58 269 21 q 363 127 344 96 q 381 189 381 158 q 347 260 381 238 q 269 283 314 283 q 177 261 218 283 q 115 211 136 239 l 63 274 q 157 340 100 318 q 272 363 214 363 q 350 352 313 363 q 416 321 388 342 q 461 269 444 300 q 478 196 478 238 q 406 41 478 117 q 211 -122 333 -35 l 482 -122 l 482 -201 l 68 -201 z "
    },
    "\xe2\x82\x83": {
        ha: 542,
        x_min: 54,
        x_max: 483,
        o: "m 54 0 m 483 -50 q 426 -166 483 -121 q 269 -211 369 -211 q 137 -185 192 -211 q 54 -122 82 -160 l 106 -60 q 177 -113 133 -94 q 265 -132 221 -132 q 355 -108 324 -132 q 386 -44 386 -85 q 347 24 386 6 q 249 43 307 43 q 213 43 229 43 q 190 42 197 43 l 190 122 q 215 121 199 121 q 247 121 231 121 q 342 139 306 121 q 378 201 378 157 q 343 263 378 242 q 260 283 308 283 q 110 218 172 283 l 61 276 q 146 338 94 313 q 269 363 197 363 q 418 322 363 363 q 474 214 474 282 q 463 163 474 185 q 433 124 451 140 q 394 99 415 108 q 350 85 372 89 q 394 74 371 83 q 437 49 417 65 q 470 8 457 32 q 483 -50 483 -17 z "
    },
    "\xe2\x82\x84": {
        ha: 542,
        x_min: 50,
        x_max: 497,
        o: "m 50 0 m 419 -68 l 419 -201 l 322 -201 l 322 -68 l 50 -68 l 50 1 l 283 354 l 419 354 l 419 11 l 497 11 l 497 -68 l 419 -68 m 322 269 l 147 11 l 322 11 l 322 269 z "
    },
    "\xe2\x82\x85": {
        ha: 542,
        x_min: 57,
        x_max: 485,
        o: "m 57 0 m 485 -25 q 469 -101 485 -67 q 424 -160 453 -135 q 356 -198 396 -185 q 268 -211 315 -211 q 142 -187 194 -211 q 57 -122 89 -164 l 113 -57 q 268 -132 171 -132 q 356 -101 324 -132 q 389 -26 389 -71 q 356 50 389 21 q 271 79 324 79 q 143 25 196 79 l 74 49 l 74 354 l 447 354 l 447 275 l 172 275 l 172 103 q 226 138 193 124 q 303 151 260 151 q 372 140 339 151 q 429 108 404 129 q 469 53 454 86 q 485 -25 485 19 z "
    },
    "\xe2\x82\x86": {
        ha: 542,
        x_min: 49,
        x_max: 494,
        o: "m 49 0 m 494 -25 q 479 -98 494 -64 q 437 -157 464 -132 q 371 -197 410 -182 q 285 -211 332 -211 q 177 -188 222 -211 q 103 -126 132 -165 q 62 -35 75 -87 q 49 75 49 17 q 65 188 49 135 q 113 279 81 240 q 191 340 144 318 q 300 363 238 363 q 393 346 353 363 q 464 301 433 329 l 419 232 q 369 269 396 256 q 300 283 342 283 q 233 267 261 283 q 185 226 204 251 q 156 166 165 200 q 146 96 146 132 q 146 87 146 92 q 147 76 146 82 q 209 131 168 104 q 301 157 250 157 q 376 145 340 157 q 438 110 411 133 q 479 53 464 88 q 494 -25 494 19 m 396 -28 q 360 53 396 26 q 275 79 324 79 q 206 60 239 79 q 149 10 172 42 q 158 -40 150 -15 q 183 -86 167 -65 q 223 -119 199 -107 q 281 -132 247 -132 q 330 -122 308 -132 q 366 -98 351 -112 q 388 -65 381 -83 q 396 -28 396 -46 z "
    },
    "\xe2\x82\x87": {
        ha: 507,
        x_min: 43,
        x_max: 456,
        o: "m 43 0 m 232 -201 l 124 -201 l 349 275 l 43 275 l 43 354 l 456 354 l 456 286 l 232 -201 z "
    },
    "\xe2\x82\x88": {
        ha: 542,
        x_min: 51,
        x_max: 490,
        o: "m 51 0 m 490 -60 q 472 -127 490 -99 q 424 -174 454 -156 q 353 -202 393 -193 q 271 -211 314 -211 q 188 -202 228 -211 q 118 -174 149 -193 q 69 -127 88 -156 q 51 -60 51 -99 q 92 33 51 -6 q 190 85 133 71 q 99 130 138 97 q 61 215 61 163 q 80 283 61 254 q 128 328 99 311 q 196 354 158 346 q 271 363 233 363 q 346 354 308 363 q 413 328 383 346 q 462 283 443 311 q 481 215 481 254 q 443 130 481 163 q 353 85 406 97 q 449 33 408 71 q 490 -60 490 -6 m 383 203 q 351 264 383 243 q 271 285 319 285 q 190 264 222 285 q 158 203 158 243 q 172 164 158 179 q 205 139 186 149 q 242 124 224 129 q 271 117 261 118 q 300 124 281 118 q 338 139 319 129 q 369 164 356 149 q 383 203 383 179 m 393 -50 q 378 -6 393 -24 q 342 24 363 13 q 302 42 322 36 q 271 49 282 47 q 240 42 260 47 q 199 24 219 36 q 164 -6 179 13 q 149 -50 149 -24 q 185 -112 149 -90 q 271 -135 221 -135 q 357 -112 321 -135 q 393 -50 393 -90 z "
    },
    "\xe2\x82\x89": {
        ha: 542,
        x_min: 49,
        x_max: 494,
        o: "m 49 0 m 49 176 q 63 249 49 215 q 106 308 78 283 q 172 348 133 333 q 258 363 210 363 q 366 340 321 363 q 440 277 411 317 q 481 185 468 238 q 494 75 494 133 q 478 -37 494 15 q 431 -128 463 -89 q 351 -189 399 -167 q 243 -211 304 -211 q 149 -194 190 -211 q 79 -150 108 -178 l 124 -81 q 174 -119 147 -106 q 243 -132 201 -132 q 309 -117 281 -132 q 357 -75 338 -101 q 386 -15 376 -49 q 396 56 396 18 l 396 75 q 333 20 374 46 q 242 -6 292 -6 q 167 6 203 -6 q 106 41 132 18 q 64 98 79 64 q 49 176 49 132 m 146 179 q 182 97 146 124 q 267 71 218 71 q 338 90 303 71 q 394 142 372 108 q 384 192 392 167 q 361 238 376 217 q 322 271 346 258 q 264 283 297 283 q 213 274 235 283 q 176 249 192 264 q 153 216 161 235 q 146 179 146 197 z "
    },
    "\xe2\x82\x8d": {
        ha: 236,
        x_min: 35,
        x_max: 222,
        o: "m 165 -293 q 69 -124 103 -222 q 35 75 35 -26 q 69 273 35 175 q 165 443 103 371 l 222 418 q 157 257 179 336 q 135 75 135 178 q 157 -108 135 -28 q 222 -268 179 -187 l 165 -293 z "
    },
    "\xe2\x82\x8e": {
        ha: 236,
        x_min: 29,
        x_max: 215,
        o: "m 215 75 q 181 -124 215 -26 q 86 -293 147 -222 l 29 -268 q 94 -108 71 -187 q 117 75 117 -28 q 111 172 117 126 q 94 258 106 217 q 66 338 82 299 q 29 418 50 378 l 86 443 q 181 273 147 371 q 215 75 215 175 z "
    },
    "\xef\x9b\x9f": {
        ha: 429,
        x_min: 36,
        x_max: 411,
        o: "m 217 -133 q 143 -110 176 -128 q 86 -66 110 -93 q 49 -3 63 -39 q 36 75 36 33 q 86 215 36 158 q 217 283 136 272 l 217 344 l 282 344 l 282 283 q 360 256 329 276 q 411 211 392 236 l 350 163 q 282 211 325 200 l 282 -62 q 350 -12 324 -51 l 411 -62 q 360 -108 392 -87 q 282 -135 329 -128 l 282 -210 l 217 -210 l 217 -133 m 126 75 q 151 -14 126 22 q 217 -61 175 -50 l 217 208 q 151 161 175 197 q 126 75 126 125 z "
    },
    "\xef\x9b\xa1": {
        ha: 200,
        x_min: 38,
        x_max: 156,
        o: "m 156 -162 q 135 -249 156 -210 q 79 -312 115 -287 l 39 -279 q 78 -247 58 -268 q 99 -206 97 -225 q 96 -206 97 -206 q 93 -207 94 -207 q 56 -191 74 -207 q 38 -151 38 -175 q 55 -110 38 -128 q 96 -93 72 -93 q 139 -112 122 -93 q 156 -162 156 -131 z "
    },
    "\xef\x9b\xa3": {
        ha: 518,
        x_min: 31,
        x_max: 488,
        o: "m 233 -211 q 113 -183 164 -207 q 31 -122 63 -158 l 88 -58 q 151 -106 114 -85 q 233 -135 188 -128 l 233 40 q 165 58 199 49 q 103 86 131 68 q 60 132 76 104 q 43 201 43 160 q 95 310 43 265 q 233 360 147 354 l 233 438 l 300 438 l 300 358 q 401 331 358 351 q 469 279 443 310 l 414 222 q 363 261 392 246 q 300 283 333 276 l 300 122 q 367 103 333 114 q 428 74 401 92 q 471 27 454 56 q 488 -43 488 -1 q 440 -158 488 -114 q 300 -210 392 -201 l 300 -286 l 233 -286 l 233 -211 m 388 -54 q 363 -4 388 -21 q 300 24 338 13 l 300 -135 q 366 -105 344 -128 q 388 -54 388 -82 m 143 210 q 169 165 143 179 q 233 139 194 150 l 233 286 q 168 260 193 281 q 143 210 143 240 z "
    },
    "\xef\x9b\xa5": {
        ha: 254,
        x_min: 25,
        x_max: 229,
        o: "m 25 36 l 25 111 l 229 111 l 229 36 l 25 36 z "
    },
    "\xef\x9b\xa7": {
        ha: 204,
        x_min: 43,
        x_max: 160,
        o: "m 160 -151 q 143 -192 160 -175 q 103 -208 126 -208 q 61 -192 79 -208 q 43 -151 43 -175 q 61 -110 43 -128 q 103 -93 79 -93 q 143 -110 126 -93 q 160 -151 160 -128 z "
    },
    "\xe2\x81\x84": {
        ha: 200,
        x_min: -239,
        x_max: 439,
        o: "m -154 0 l -239 0 l 353 926 l 439 926 l -154 0 z "
    },
    "\xe2\x88\x95": {
        ha: 200,
        x_min: -239,
        x_max: 439,
        o: "m 0 0 m -154 0 l -239 0 l 353 926 l 439 926 l -154 0 z "
    },
    "\xc2\xbd": {
        ha: 1144,
        x_min: 17,
        x_max: 1083,
        o: "m 17 0 m 165 371 l 165 800 l 74 704 l 17 764 l 178 926 l 264 926 l 264 371 l 165 371 m 669 0 l 669 72 q 812 176 753 131 q 908 260 871 222 q 964 328 946 297 q 982 390 982 360 q 949 462 982 439 q 871 485 915 485 q 778 463 819 485 q 717 413 738 440 l 664 475 q 758 542 701 519 q 874 564 815 564 q 951 553 914 564 q 1017 522 989 543 q 1063 470 1046 501 q 1079 397 1079 439 q 1007 242 1079 318 q 813 79 935 167 l 1083 79 l 1083 0 l 669 0 m 246 0 l 161 0 l 753 926 l 839 926 l 246 0 z "
    },
    "\xc2\xbc": {
        ha: 1094,
        x_min: 17,
        x_max: 1049,
        o: "m 17 0 m 165 371 l 165 800 l 74 704 l 17 764 l 178 926 l 264 926 l 264 371 l 165 371 m 971 133 l 971 0 l 874 0 l 874 133 l 601 133 l 601 203 l 835 556 l 971 556 l 971 213 l 1049 213 l 1049 133 l 971 133 m 874 471 l 699 213 l 874 213 l 874 471 m 246 0 l 161 0 l 753 926 l 839 926 l 246 0 z "
    },
    "\xc2\xbe": {
        ha: 1236,
        x_min: 54,
        x_max: 1190,
        o: "m 54 0 m 1113 133 l 1113 0 l 1015 0 l 1015 133 l 743 133 l 743 203 l 976 556 l 1113 556 l 1113 213 l 1190 213 l 1190 133 l 1113 133 m 1015 471 l 840 213 l 1015 213 l 1015 471 m 388 0 l 303 0 l 894 926 l 981 926 l 388 0 m 483 522 q 426 406 483 451 q 269 361 369 361 q 137 387 192 361 q 54 450 82 413 l 106 513 q 177 459 133 478 q 265 440 221 440 q 355 464 324 440 q 386 528 386 488 q 347 597 386 578 q 249 615 307 615 q 213 615 229 615 q 190 614 197 615 l 190 694 q 215 693 199 693 q 247 693 231 693 q 342 711 306 693 q 378 774 378 729 q 343 835 378 814 q 260 856 308 856 q 110 790 172 856 l 61 849 q 146 910 94 885 q 269 935 197 935 q 418 894 363 935 q 474 786 474 854 q 463 735 474 757 q 433 697 451 713 q 394 671 415 681 q 350 657 372 661 q 394 647 371 656 q 437 621 417 638 q 470 580 457 604 q 483 522 483 556 z "
    },
    "\xe2\x85\x93": {
        ha: 1144,
        x_min: 17,
        x_max: 1085,
        o: "m 17 0 m 165 371 l 165 800 l 74 704 l 17 764 l 178 926 l 264 926 l 264 371 l 165 371 m 246 0 l 161 0 l 753 926 l 839 926 l 246 0 m 1085 151 q 1028 35 1085 81 q 871 -10 971 -10 q 738 16 793 -10 q 656 79 683 42 l 707 142 q 778 88 735 107 q 867 69 822 69 q 956 93 925 69 q 988 157 988 117 q 948 226 988 207 q 850 244 908 244 q 815 244 831 244 q 792 243 799 244 l 792 324 q 816 322 800 322 q 849 322 832 322 q 943 340 907 322 q 979 403 979 358 q 944 464 979 443 q 861 485 910 485 q 711 419 774 485 l 663 478 q 747 539 696 514 q 871 564 799 564 q 1019 524 964 564 q 1075 415 1075 483 q 1064 364 1075 386 q 1035 326 1053 342 q 995 300 1017 310 q 951 286 974 290 q 995 276 972 285 q 1038 250 1018 267 q 1072 209 1058 233 q 1085 151 1085 185 z "
    },
    "\xe2\x85\x94": {
        ha: 1286,
        x_min: 63,
        x_max: 1226,
        o: "m 63 0 m 68 371 l 68 443 q 210 547 151 501 q 307 631 269 593 q 363 699 344 668 q 381 761 381 731 q 347 833 381 810 q 269 856 314 856 q 177 833 218 856 q 115 783 136 811 l 63 846 q 157 913 100 890 q 272 935 214 935 q 350 924 313 935 q 416 893 388 914 q 461 841 444 872 q 478 768 478 810 q 406 613 478 689 q 211 450 333 538 l 482 450 l 482 371 l 68 371 m 388 0 l 303 0 l 894 926 l 981 926 l 388 0 m 1226 151 q 1169 35 1226 81 q 1013 -10 1113 -10 q 880 16 935 -10 q 797 79 825 42 l 849 142 q 920 88 876 107 q 1008 69 964 69 q 1098 93 1067 69 q 1129 157 1129 117 q 1090 226 1129 207 q 992 244 1050 244 q 956 244 972 244 q 933 243 940 244 l 933 324 q 958 322 942 322 q 990 322 974 322 q 1085 340 1049 322 q 1121 403 1121 358 q 1086 464 1121 443 q 1003 485 1051 485 q 853 419 915 485 l 804 478 q 889 539 838 514 q 1013 564 940 564 q 1161 524 1106 564 q 1217 415 1217 483 q 1206 364 1217 386 q 1176 326 1194 342 q 1137 300 1158 310 q 1093 286 1115 290 q 1137 276 1114 285 q 1180 250 1160 267 q 1213 209 1200 233 q 1226 151 1226 185 z "
    },
    "\xe2\x85\x9b": {
        ha: 1144,
        x_min: 17,
        x_max: 1092,
        o: "m 17 0 m 165 371 l 165 800 l 74 704 l 17 764 l 178 926 l 264 926 l 264 371 l 165 371 m 1092 142 q 1074 74 1092 103 q 1025 27 1056 46 q 955 -1 994 8 q 872 -10 915 -10 q 790 -1 829 -10 q 719 27 750 8 q 671 74 689 46 q 653 142 653 103 q 694 234 653 196 q 792 286 735 272 q 701 331 739 299 q 663 417 663 364 q 681 484 663 456 q 730 530 700 513 q 797 556 760 547 q 872 564 835 564 q 947 556 910 564 q 1015 530 985 547 q 1063 484 1044 513 q 1082 417 1082 456 q 1044 331 1082 364 q 954 286 1007 299 q 1051 234 1010 272 q 1092 142 1092 196 m 985 404 q 953 465 985 444 q 872 486 921 486 q 792 465 824 486 q 760 404 760 444 q 774 365 760 381 q 806 340 788 350 q 844 325 825 331 q 872 318 863 319 q 901 325 882 319 q 939 340 921 331 q 971 365 957 350 q 985 404 985 381 m 994 151 q 979 196 994 178 q 944 226 964 214 q 903 243 924 238 q 872 250 883 249 q 841 243 861 249 q 801 226 821 238 q 765 196 781 214 q 750 151 750 178 q 786 89 750 111 q 872 67 822 67 q 958 89 922 67 q 994 151 994 111 m 246 0 l 161 0 l 753 926 l 839 926 l 246 0 z "
    },
    "\xe2\x85\x9c": {
        ha: 1286,
        x_min: 54,
        x_max: 1233,
        o: "m 54 0 m 1233 142 q 1215 74 1233 103 q 1167 27 1197 46 q 1097 -1 1136 8 q 1014 -10 1057 -10 q 931 -1 971 -10 q 861 27 892 8 q 813 74 831 46 q 794 142 794 103 q 835 234 794 196 q 933 286 876 272 q 842 331 881 299 q 804 417 804 364 q 823 484 804 456 q 872 530 842 513 q 939 556 901 547 q 1014 564 976 564 q 1089 556 1051 564 q 1156 530 1126 547 q 1205 484 1186 513 q 1224 417 1224 456 q 1186 331 1224 364 q 1096 286 1149 299 q 1192 234 1151 272 q 1233 142 1233 196 m 1126 404 q 1094 465 1126 444 q 1014 486 1063 486 q 933 465 965 486 q 901 404 901 444 q 915 365 901 381 q 948 340 929 350 q 985 325 967 331 q 1014 318 1004 319 q 1043 325 1024 319 q 1081 340 1063 331 q 1113 365 1099 350 q 1126 404 1126 381 m 1136 151 q 1121 196 1136 178 q 1085 226 1106 214 q 1045 243 1065 238 q 1014 250 1025 249 q 983 243 1003 249 q 942 226 963 238 q 907 196 922 214 q 892 151 892 178 q 928 89 892 111 q 1014 67 964 67 q 1100 89 1064 67 q 1136 151 1136 111 m 388 0 l 303 0 l 894 926 l 981 926 l 388 0 m 483 522 q 426 406 483 451 q 269 361 369 361 q 137 387 192 361 q 54 450 82 413 l 106 513 q 177 459 133 478 q 265 440 221 440 q 355 464 324 440 q 386 528 386 488 q 347 597 386 578 q 249 615 307 615 q 213 615 229 615 q 190 614 197 615 l 190 694 q 215 693 199 693 q 247 693 231 693 q 342 711 306 693 q 378 774 378 729 q 343 835 378 814 q 260 856 308 856 q 110 790 172 856 l 61 849 q 146 910 94 885 q 269 935 197 935 q 418 894 363 935 q 474 786 474 854 q 463 735 474 757 q 433 697 451 713 q 394 671 415 681 q 350 657 372 661 q 394 647 371 656 q 437 621 417 638 q 470 580 457 604 q 483 522 483 556 z "
    },
    "\xe2\x85\x9d": {
        ha: 1281,
        x_min: 57,
        x_max: 1228,
        o: "m 57 0 m 1228 142 q 1210 74 1228 103 q 1161 27 1192 46 q 1091 -1 1131 8 q 1008 -10 1051 -10 q 926 -1 965 -10 q 856 27 886 8 q 807 74 825 46 q 789 142 789 103 q 830 234 789 196 q 928 286 871 272 q 837 331 875 299 q 799 417 799 364 q 817 484 799 456 q 866 530 836 513 q 933 556 896 547 q 1008 564 971 564 q 1083 556 1046 564 q 1151 530 1121 547 q 1199 484 1181 513 q 1218 417 1218 456 q 1181 331 1218 364 q 1090 286 1143 299 q 1187 234 1146 272 q 1228 142 1228 196 m 1121 404 q 1089 465 1121 444 q 1008 486 1057 486 q 928 465 960 486 q 896 404 896 444 q 910 365 896 381 q 942 340 924 350 q 980 325 961 331 q 1008 318 999 319 q 1038 325 1018 319 q 1075 340 1057 331 q 1107 365 1093 350 q 1121 404 1121 381 m 1131 151 q 1115 196 1131 178 q 1080 226 1100 214 q 1040 243 1060 238 q 1008 250 1019 249 q 977 243 997 249 q 937 226 957 238 q 901 196 917 214 q 886 151 886 178 q 922 89 886 111 q 1008 67 958 67 q 1094 89 1058 67 q 1131 151 1131 111 m 485 547 q 469 472 485 506 q 424 413 453 438 q 356 374 396 388 q 268 361 315 361 q 142 385 194 361 q 57 450 89 408 l 113 515 q 268 440 171 440 q 356 471 324 440 q 389 546 389 501 q 356 622 389 593 q 271 651 324 651 q 143 597 196 651 l 74 621 l 74 926 l 447 926 l 447 847 l 172 847 l 172 675 q 226 710 193 696 q 303 724 260 724 q 372 713 339 724 q 429 680 404 701 q 469 625 454 658 q 485 547 485 592 m 382 0 l 297 0 l 889 926 l 975 926 l 382 0 z "
    },
    "\xe2\x85\x9e": {
        ha: 1169,
        x_min: 43,
        x_max: 1117,
        o: "m 43 0 m 1117 142 q 1099 74 1117 103 q 1050 27 1081 46 q 980 -1 1019 8 q 897 -10 940 -10 q 815 -1 854 -10 q 744 27 775 8 q 696 74 714 46 q 678 142 678 103 q 719 234 678 196 q 817 286 760 272 q 726 331 764 299 q 688 417 688 364 q 706 484 688 456 q 755 530 725 513 q 822 556 785 547 q 897 564 860 564 q 972 556 935 564 q 1040 530 1010 547 q 1088 484 1069 513 q 1107 417 1107 456 q 1069 331 1107 364 q 979 286 1032 299 q 1076 234 1035 272 q 1117 142 1117 196 m 1010 404 q 978 465 1010 444 q 897 486 946 486 q 817 465 849 486 q 785 404 785 444 q 799 365 785 381 q 831 340 813 350 q 869 325 850 331 q 897 318 888 319 q 926 325 907 319 q 964 340 946 331 q 996 365 982 350 q 1010 404 1010 381 m 1019 151 q 1004 196 1019 178 q 969 226 989 214 q 928 243 949 238 q 897 250 908 249 q 866 243 886 249 q 826 226 846 238 q 790 196 806 214 q 775 151 775 178 q 811 89 775 111 q 897 67 847 67 q 983 89 947 67 q 1019 151 1019 111 m 232 371 l 124 371 l 349 847 l 43 847 l 43 926 l 456 926 l 456 858 l 232 371 m 271 0 l 186 0 l 778 926 l 864 926 l 271 0 z "
    },
    "\xe2\x86\x90": {
        ha: 808,
        x_min: 0,
        x_max: 747,
        o: "m 374 293 l 390 113 l 0 397 l 390 681 l 374 501 l 747 501 l 747 293 l 374 293 z "
    },
    "\xe2\x86\x91": {
        ha: 808,
        x_min: 119,
        x_max: 688,
        o: "m 300 397 l 119 381 l 404 771 l 688 381 l 508 397 l 508 24 l 300 24 l 300 397 z "
    },
    "\xe2\x86\x92": {
        ha: 808,
        x_min: 65,
        x_max: 811,
        o: "m 421 113 l 438 293 l 65 293 l 65 501 l 438 501 l 421 681 l 811 397 l 421 113 z "
    },
    "\xe2\x86\x93": {
        ha: 808,
        x_min: 121,
        x_max: 689,
        o: "m 508 397 l 689 414 l 404 24 l 121 414 l 300 397 l 300 771 l 508 771 l 508 397 z "
    },
    "\xe2\x8a\xb2": {
        ha: 815,
        x_min: 75,
        x_max: 818,
        o: "m 75 -32 l 75 826 l 818 397 l 75 -32 z "
    },
    "\xe2\x8a\xb3": {
        ha: 815,
        x_min: 0,
        x_max: 743,
        o: "m 743 -32 l 0 397 l 743 826 l 743 -32 z "
    },
    "\xe2\x96\xa0": {
        ha: 918,
        x_min: 65,
        x_max: 858,
        o: "m 65 0 l 65 794 l 858 794 l 858 0 l 65 0 z "
    },
    "\xe2\x96\xb2": {
        ha: 856,
        x_min: -3,
        x_max: 857,
        o: "m -3 42 l 426 785 l 857 40 l -3 42 z "
    },
    "\xe2\x96\xbc": {
        ha: 856,
        x_min: -3,
        x_max: 857,
        o: "m 426 -35 l -3 708 l 857 708 l 426 -35 z "
    },
    "\xe2\x97\x8f": {
        ha: 965,
        x_min: 69,
        x_max: 894,
        o: "m 894 396 q 862 235 894 310 q 774 104 829 160 q 642 16 718 49 q 482 -17 567 -17 q 321 16 396 -17 q 190 104 246 49 q 102 235 135 160 q 69 396 69 310 q 102 556 69 481 q 190 688 135 632 q 321 776 246 743 q 482 808 396 808 q 642 776 567 808 q 774 688 718 743 q 862 556 829 632 q 894 396 894 481 z "
    },
    "\xe2\x98\x85": {
        ha: 1054,
        x_min: 0,
        x_max: 1054,
        o: "m 728 347 l 853 -35 l 526 201 l 201 -35 l 325 347 l 0 585 l 403 585 l 526 968 l 651 585 l 1054 585 l 728 347 z "
    },
    "\xe2\x98\x90": {
        ha: 918,
        x_min: 63,
        x_max: 856,
        o: "m 63 0 l 63 794 l 856 794 l 856 0 l 63 0 m 764 711 l 153 711 l 153 83 l 764 83 l 764 711 z "
    },
    "\xe2\x98\x91": {
        ha: 918,
        x_min: 63,
        x_max: 946,
        o: "m 850 794 l 856 794 l 856 0 l 63 0 l 63 794 l 753 794 l 872 1015 l 946 969 l 850 794 m 764 633 l 489 126 l 208 468 l 274 529 l 476 282 l 708 711 l 153 711 l 153 83 l 764 83 l 764 633 z "
    },
    "\xe2\x99\xa6": {
        ha: 696,
        x_min: 0,
        x_max: 696,
        o: "m 347 49 l 0 396 l 347 744 l 696 396 l 347 49 z "
    },
    "\xe2\x9c\x93": {
        ha: 738,
        x_min: 0,
        x_max: 738,
        o: "m 281 126 l 0 468 l 65 529 l 268 282 l 664 1015 l 738 969 l 281 126 z "
    },
    "\xef\xa3\xbf": {
        ha: 926,
        x_min: 58,
        x_max: 868,
        o: "m 311 313 l 211 313 q 142 283 171 313 q 114 214 114 254 q 142 142 114 172 q 213 113 171 113 q 282 142 253 113 q 311 214 311 172 l 311 313 m 311 714 q 283 783 311 754 q 214 813 254 813 q 143 783 172 813 q 114 714 114 754 q 143 642 114 672 q 214 613 172 613 l 311 613 l 311 714 m 558 368 l 558 558 l 368 558 l 368 368 l 558 368 m 811 214 q 783 283 811 254 q 714 313 756 313 l 615 313 l 615 214 q 644 142 615 172 q 714 113 672 113 q 783 142 754 113 q 811 214 811 172 m 811 714 q 783 783 811 754 q 714 813 754 813 q 644 783 672 813 q 615 714 615 754 l 615 613 l 714 613 q 783 642 756 613 q 811 714 811 672 m 868 214 q 856 153 868 182 q 822 104 843 125 q 774 71 801 83 q 714 58 746 58 q 653 71 682 58 q 604 104 625 83 q 571 153 583 125 q 558 214 558 182 l 558 313 l 368 313 l 368 214 q 356 153 368 182 q 322 104 343 125 q 273 71 301 83 q 213 58 244 58 q 153 71 181 58 q 104 104 125 83 q 71 153 83 125 q 58 214 58 182 q 71 274 58 246 q 104 322 83 301 q 153 356 125 343 q 213 368 181 368 l 311 368 l 311 558 l 214 558 q 153 571 182 558 q 104 604 125 583 q 71 653 83 625 q 58 714 58 682 q 71 774 58 746 q 104 822 83 801 q 153 856 125 843 q 214 868 182 868 q 274 856 246 868 q 322 822 301 843 q 356 774 343 801 q 368 714 368 746 l 368 613 l 558 613 l 558 714 q 571 774 558 746 q 604 822 583 801 q 653 856 625 843 q 714 868 682 868 q 774 856 746 868 q 822 822 801 843 q 856 774 843 801 q 868 714 868 746 q 856 653 868 682 q 822 604 843 625 q 774 571 801 583 q 714 558 746 558 l 615 558 l 615 368 l 714 368 q 774 356 746 368 q 822 322 801 343 q 856 274 843 301 q 868 214 868 246 z "
    },
    "\xe2\x8c\x98": {
        ha: 926,
        x_min: 58,
        x_max: 868,
        o: "m 58 58 m 311 313 l 211 313 q 142 283 171 313 q 114 214 114 254 q 142 142 114 172 q 213 113 171 113 q 282 142 253 113 q 311 214 311 172 l 311 313 m 311 714 q 283 783 311 754 q 214 813 254 813 q 143 783 172 813 q 114 714 114 754 q 143 642 114 672 q 214 613 172 613 l 311 613 l 311 714 m 558 368 l 558 558 l 368 558 l 368 368 l 558 368 m 811 214 q 783 283 811 254 q 714 313 756 313 l 615 313 l 615 214 q 644 142 615 172 q 714 113 672 113 q 783 142 754 113 q 811 214 811 172 m 811 714 q 783 783 811 754 q 714 813 754 813 q 644 783 672 813 q 615 714 615 754 l 615 613 l 714 613 q 783 642 756 613 q 811 714 811 672 m 868 214 q 856 153 868 182 q 822 104 843 125 q 774 71 801 83 q 714 58 746 58 q 653 71 682 58 q 604 104 625 83 q 571 153 583 125 q 558 214 558 182 l 558 313 l 368 313 l 368 214 q 356 153 368 182 q 322 104 343 125 q 273 71 301 83 q 213 58 244 58 q 153 71 181 58 q 104 104 125 83 q 71 153 83 125 q 58 214 58 182 q 71 274 58 246 q 104 322 83 301 q 153 356 125 343 q 213 368 181 368 l 311 368 l 311 558 l 214 558 q 153 571 182 558 q 104 604 125 583 q 71 653 83 625 q 58 714 58 682 q 71 774 58 746 q 104 822 83 801 q 153 856 125 843 q 214 868 182 868 q 274 856 246 868 q 322 822 301 843 q 356 774 343 801 q 368 714 368 746 l 368 613 l 558 613 l 558 714 q 571 774 558 746 q 604 822 583 801 q 653 856 625 843 q 714 868 682 868 q 774 856 746 868 q 822 822 801 843 q 856 774 843 801 q 868 714 868 746 q 856 653 868 682 q 822 604 843 625 q 774 571 801 583 q 714 558 746 558 l 615 558 l 615 368 l 714 368 q 774 356 746 368 q 822 322 801 343 q 856 274 843 301 q 868 214 868 246 z "
    }
}, x = "Proxima Nova Medium", a = 1278, _ = -414, n = -123, o = 20, i = {
    yMin: -276,
    xMin: -172,
    yMax: 908,
    xMax: 1100
}, h = 1e3, z = {
    format: 0,
    copyright: "Copyright (c) Mark Simonson, 2005. All rights reserved.",
    fontFamily: "Proxima Nova Medium",
    fontSubfamily: "Regular",
    uniqueID: "2.008;mlss;ProximaNova-Medium",
    fullName: "Proxima Nova Medium",
    version: "Version 2.008; Proxima Nova Medium",
    postScriptName: "ProximaNova-Medium",
    trademark: "Proxima Nova is a trademark of Mark Simonson.",
    manufacturer: "Mark Simonson",
    designer: "Mark Simonson",
    manufacturerURL: "http://www.marksimonson.com",
    designerURL: "http://www.marksimonson.com",
    licenceURL: "http://www.marksimonson.com/info/licenses",
    preferredFamily: "Proxima Nova",
    preferredSubfamily: "Medium",
    unknown1: "Alternate Uppercase G",
    unknown2: "Alternate Lowercase l",
    unknown3: "Alternate Lowercase y",
    unknown4: "Straight Quotes to Primes",
    unknown5: "Tabular One with Serifs",
    unknown6: "Schoolbook Style",
    unknown7: "Geometric Sans Style",
    unknown8: "Alternate Roman Lowercase a"
}, e = "normal", r = "normal", t = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: n,
    underlineThickness: o,
    boundingBox: i,
    resolution: h,
    original_font_information: z,
    cssFontWeight: e,
    cssFontStyle: r
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lLnFO"], null, "parcelRequire79a8")

//# sourceMappingURL=ProximaNova-54WAWGUY.f3202f42.js.map
