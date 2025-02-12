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
})({"lEQhz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bac964e01df2e5a6";
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

},{}],"gxA5t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>o);
parcelHelpers.export(exports, "cssFontStyle", ()=>r);
parcelHelpers.export(exports, "cssFontWeight", ()=>e);
parcelHelpers.export(exports, "default", ()=>t);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>z);
parcelHelpers.export(exports, "resolution", ()=>h);
parcelHelpers.export(exports, "underlinePosition", ()=>i);
parcelHelpers.export(exports, "underlineThickness", ()=>n);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 833,
        x_min: 83,
        x_max: 750,
        o: "m 750 450 q 728 239 750 326 q 665 95 707 151 q 561 13 624 39 q 417 -14 499 -14 q 272 13 335 -14 q 168 95 210 39 q 105 239 126 151 q 83 450 83 326 q 167 799 83 682 q 417 917 250 917 q 667 799 583 917 q 750 450 750 682 m 569 450 q 528 714 569 629 q 417 799 486 799 q 306 714 347 799 q 264 450 264 629 q 305 187 264 269 q 417 104 346 104 q 528 187 488 104 q 569 450 569 269 z "
    },
    1: {
        ha: 579,
        x_min: 63,
        x_max: 454,
        o: "m 289 739 l 93 686 l 63 832 l 454 918 l 454 0 l 278 0 q 283 129 281 67 q 288 240 286 182 q 289 333 289 297 l 289 739 z "
    },
    2: {
        ha: 767,
        x_min: 83,
        x_max: 711,
        o: "m 700 0 l 88 0 q 83 51 83 25 q 115 212 83 146 q 194 325 146 278 q 297 408 242 372 q 399 477 351 443 q 478 551 447 511 q 510 646 510 590 q 469 751 510 721 q 357 782 428 782 q 255 758 308 782 q 164 704 201 735 l 104 819 q 163 861 129 843 q 235 892 197 879 q 310 910 272 904 q 382 917 349 917 q 499 903 444 917 q 595 860 554 890 q 659 783 636 831 q 682 665 682 735 q 652 524 682 585 q 576 417 622 464 q 477 335 531 371 q 378 266 424 299 q 300 201 332 233 q 265 128 268 168 l 711 136 l 700 0 z "
    },
    3: {
        ha: 776,
        x_min: 69,
        x_max: 693,
        o: "m 693 274 q 666 141 693 196 q 592 52 639 86 q 482 2 544 18 q 350 -14 419 -14 q 282 -10 319 -14 q 206 1 244 -6 q 133 20 168 8 q 69 46 97 32 l 100 171 q 214 128 150 146 q 333 111 278 111 q 464 149 415 111 q 513 274 513 186 q 468 378 513 344 q 357 413 424 413 l 244 413 l 250 539 l 357 539 q 440 572 410 539 q 469 658 469 606 q 430 759 469 729 q 324 789 390 789 q 228 775 279 789 q 138 739 178 761 l 104 858 q 218 900 154 883 q 338 917 282 917 q 452 905 396 917 q 552 865 508 893 q 623 792 596 838 q 650 676 650 746 q 626 572 650 618 q 550 497 603 525 q 659 410 625 471 q 693 274 693 349 z "
    },
    4: {
        ha: 819,
        x_min: 69,
        x_max: 736,
        o: "m 731 201 l 629 201 l 632 0 l 460 0 l 463 201 l 75 201 l 69 322 l 443 903 l 629 903 l 629 324 l 736 324 l 731 201 m 463 714 l 206 324 l 463 324 l 463 714 z "
    },
    5: {
        ha: 792,
        x_min: 83,
        x_max: 708,
        o: "m 708 267 q 681 138 708 192 q 608 51 654 85 q 502 1 563 17 q 374 -14 442 -14 q 227 -3 301 -14 q 83 28 153 7 l 117 158 q 235 124 169 139 q 356 108 300 108 q 423 119 392 108 q 478 151 454 131 q 515 202 501 172 q 528 269 528 232 q 477 401 528 360 q 340 442 426 442 q 246 438 293 442 q 151 426 199 433 l 188 901 l 681 901 l 669 772 l 336 778 l 317 543 q 373 550 344 547 q 429 553 401 553 q 638 478 568 553 q 708 267 708 404 z "
    },
    6: {
        ha: 792,
        x_min: 83,
        x_max: 708,
        o: "m 708 276 q 675 128 708 185 q 594 40 642 71 q 496 -3 547 8 q 407 -14 444 -14 q 291 -1 349 -14 q 187 57 233 13 q 112 187 140 101 q 83 418 83 272 q 106 603 83 514 q 178 763 129 693 q 303 874 226 832 q 485 917 379 917 q 599 907 556 917 q 656 894 643 897 l 636 772 q 599 783 619 778 q 556 790 581 788 q 501 793 531 793 q 397 767 438 793 q 331 699 356 742 q 295 600 306 656 q 282 485 285 544 q 313 508 299 496 q 346 531 328 521 q 388 547 364 540 q 446 553 411 553 q 544 539 496 553 q 628 493 592 525 q 686 408 664 461 q 708 276 708 354 m 528 275 q 501 406 528 367 q 414 446 474 446 q 362 436 386 446 q 319 415 338 426 q 282 385 299 401 q 290 267 282 321 q 313 175 297 214 q 353 115 328 136 q 413 94 378 94 q 457 103 436 94 q 494 132 478 111 q 519 188 510 153 q 528 275 528 222 z "
    },
    7: {
        ha: 697,
        x_min: 69,
        x_max: 656,
        o: "m 656 806 q 551 633 604 735 q 453 418 499 531 q 372 196 407 306 q 322 0 338 86 l 133 0 q 188 192 153 86 q 267 406 222 299 q 365 610 313 513 q 472 776 418 708 l 81 771 l 69 903 l 656 903 l 656 806 l 656 806 z "
    },
    8: {
        ha: 808,
        x_min: 83,
        x_max: 725,
        o: "m 518 650 q 485 772 518 739 q 404 806 453 806 q 323 772 356 806 q 290 650 290 739 q 323 545 290 575 q 404 515 356 515 q 485 545 453 515 q 518 650 518 575 m 547 254 q 538 331 547 300 q 510 378 528 361 q 465 403 492 396 q 404 410 438 410 q 344 403 371 410 q 299 378 317 396 q 271 331 281 361 q 261 254 261 300 q 299 135 261 172 q 404 97 338 97 q 509 135 471 97 q 547 254 547 172 m 725 250 q 694 119 725 171 q 615 39 663 68 q 511 -2 568 10 q 404 -14 454 -14 q 297 -2 354 -14 q 193 39 240 10 q 115 119 146 68 q 83 250 83 171 q 106 358 83 317 q 154 426 128 400 q 224 474 185 457 q 171 514 194 489 q 135 570 151 536 q 118 654 118 604 q 139 776 118 726 q 197 858 160 826 q 288 903 235 889 q 404 918 340 918 q 521 903 468 918 q 611 858 574 889 q 669 776 649 826 q 690 654 690 726 q 674 570 690 604 q 638 514 657 536 q 585 474 614 489 q 656 426 625 457 q 703 358 682 400 q 725 250 725 317 z "
    },
    9: {
        ha: 792,
        x_min: 83,
        x_max: 708,
        o: "m 708 485 q 694 299 708 389 q 636 140 679 210 q 514 28 593 71 q 304 -14 435 -14 q 234 -10 268 -14 q 172 -1 200 -7 q 110 13 139 4 l 129 135 q 179 122 153 128 q 231 113 203 117 q 288 110 258 110 q 428 142 379 110 q 499 221 476 175 q 524 317 521 267 q 526 401 526 367 q 472 368 501 383 q 414 344 447 356 q 343 333 381 333 q 240 347 288 333 q 158 394 193 361 q 103 481 124 426 q 83 618 83 536 q 116 768 83 710 q 196 860 149 826 q 294 905 243 893 q 382 917 344 917 q 499 901 440 917 q 603 840 557 886 q 679 708 650 793 q 708 485 708 624 m 521 499 q 516 608 521 553 q 497 708 511 664 q 453 781 482 753 q 376 808 425 808 q 335 800 356 808 q 299 771 315 792 q 274 713 283 750 q 264 619 264 676 q 295 488 264 536 q 375 440 326 440 q 435 449 408 440 q 481 469 461 458 q 521 499 503 483 z "
    },
    " ": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "(": {
        ha: 536,
        x_min: 208,
        x_max: 439,
        o: "m 350 -132 q 295 -28 321 -93 q 250 115 269 36 q 219 281 231 194 q 208 449 208 368 q 219 617 208 531 q 250 782 231 703 q 295 926 269 861 q 350 1029 321 990 l 439 1011 q 389 854 411 942 q 354 676 369 779 q 339 447 339 574 q 354 219 339 321 q 389 42 369 117 q 439 -114 411 -44 l 350 -132 z "
    },
    ")": {
        ha: 536,
        x_min: 97,
        x_max: 328,
        o: "m 328 449 q 317 281 328 368 q 286 115 306 194 q 241 -28 267 36 q 186 -132 215 -93 l 97 -114 q 147 43 125 -43 q 182 220 167 118 q 197 449 197 322 q 182 678 197 575 q 147 856 167 781 q 97 1011 125 942 l 186 1029 q 241 926 215 990 q 286 782 267 861 q 317 617 306 703 q 328 449 328 531 z "
    },
    "*": {
        ha: 578,
        x_min: 56,
        x_max: 522,
        o: "m 378 700 l 497 576 l 408 488 l 296 649 l 185 488 l 96 576 l 211 697 l 56 746 l 104 861 l 242 792 l 228 961 l 354 961 l 340 793 l 474 863 l 522 747 l 378 700 z "
    },
    "+": {
        ha: 858,
        x_min: 97,
        x_max: 761,
        o: "m 488 406 l 488 131 l 369 131 l 369 406 l 97 406 l 97 524 l 369 524 l 369 793 l 488 793 l 488 524 l 761 524 l 761 406 l 488 406 z "
    },
    ",": {
        ha: 351,
        x_min: 54,
        x_max: 281,
        o: "m 281 8 q 258 -124 281 -64 q 208 -229 236 -185 q 136 -324 176 -282 l 54 -296 q 89 -226 74 -262 q 112 -157 101 -194 q 122 -79 122 -119 q 113 -14 122 -44 q 90 42 103 17 q 68 90 78 68 q 58 128 58 111 q 69 153 58 143 q 104 168 79 163 l 247 197 q 264 140 257 171 q 276 80 271 114 q 281 8 281 46 z "
    },
    "-": {
        ha: 588,
        x_min: 97,
        x_max: 490,
        o: "m 97 315 l 97 442 l 490 442 l 490 315 l 97 315 z "
    },
    ".": {
        ha: 383,
        x_min: 79,
        x_max: 282,
        o: "m 282 78 q 179 -17 282 -17 q 79 78 79 -17 q 179 172 79 172 q 258 149 235 172 q 282 78 282 125 z "
    },
    "/": {
        ha: 617,
        x_min: 111,
        x_max: 506,
        o: "m 224 -229 l 111 -199 l 390 986 l 506 969 l 224 -229 z "
    },
    ":": {
        ha: 408,
        x_min: 90,
        x_max: 318,
        o: "m 318 585 q 201 475 318 475 q 117 501 144 475 q 90 585 90 526 q 117 669 90 643 q 201 694 143 694 q 291 667 264 694 q 318 585 318 639 m 318 138 q 201 28 318 28 q 117 53 144 28 q 90 138 90 79 q 117 222 90 196 q 201 247 143 247 q 291 219 264 247 q 318 138 318 192 z "
    },
    ";": {
        ha: 415,
        x_min: 90,
        x_max: 331,
        o: "m 322 585 q 204 474 322 474 q 90 585 90 474 q 117 669 90 643 q 204 694 144 694 q 295 667 268 694 q 322 585 322 639 m 331 11 q 308 -122 331 -61 q 258 -226 286 -182 q 186 -321 226 -279 l 104 -293 q 139 -224 124 -260 q 162 -154 151 -192 q 172 -76 172 -117 q 163 -11 172 -42 q 140 45 153 19 q 118 92 128 71 q 108 131 108 114 q 119 156 108 146 q 154 171 129 165 l 297 200 q 314 143 307 174 q 326 83 321 117 q 331 11 331 49 z "
    },
    "<": {
        ha: 778,
        x_min: 125,
        x_max: 653,
        o: "m 568 -121 l 125 353 l 567 825 l 653 735 l 306 353 l 653 -31 l 568 -121 z "
    },
    "=": {
        ha: 944,
        x_min: 139,
        x_max: 806,
        o: "m 139 269 l 139 394 l 806 394 l 806 269 l 139 269 m 139 533 l 139 658 l 806 658 l 806 533 l 139 533 z "
    },
    ">": {
        ha: 779,
        x_min: 125,
        x_max: 654,
        o: "m 211 -121 l 125 -31 l 472 353 l 125 735 l 211 825 l 654 353 l 211 -121 z "
    },
    "?": {
        ha: 653,
        x_min: 69,
        x_max: 597,
        o: "m 342 290 q 346 238 342 263 l 203 231 q 192 278 196 254 q 189 326 189 303 q 206 406 189 375 q 249 460 224 438 q 306 501 275 483 q 362 539 336 518 q 405 587 388 560 q 422 656 422 614 q 408 713 422 689 q 372 753 394 738 q 322 777 350 769 q 264 785 293 785 q 188 775 228 785 q 115 747 147 765 l 69 875 q 173 907 114 897 q 281 917 232 917 q 396 905 339 917 q 497 866 453 893 q 569 793 542 839 q 597 678 597 747 q 578 570 597 611 q 531 503 560 529 q 469 459 503 476 q 408 421 436 442 q 360 371 379 400 q 342 290 342 342 m 382 74 q 351 4 382 25 q 275 -17 319 -17 q 199 3 229 -17 q 169 74 169 24 q 199 144 169 125 q 275 164 229 164 q 352 144 322 164 q 382 74 382 125 z "
    },
    "@": {
        ha: 1240,
        x_min: 76,
        x_max: 1164,
        o: "m 1164 492 q 1145 326 1164 411 q 1085 169 1126 240 q 978 53 1044 99 q 815 8 911 8 q 718 53 753 8 q 683 167 683 97 q 592 59 650 103 q 460 15 533 15 q 394 33 421 15 q 351 80 368 51 q 328 142 335 108 q 321 208 321 176 q 341 373 321 293 q 403 514 361 453 q 513 613 446 575 q 676 650 581 650 q 785 642 731 650 q 893 624 840 635 l 836 211 q 832 184 835 201 q 830 149 829 167 q 837 119 831 132 q 860 107 843 107 q 922 128 894 107 q 969 184 949 150 q 1002 262 989 218 q 1024 349 1015 306 q 1037 433 1033 393 q 1040 501 1040 474 q 1016 631 1040 576 q 949 722 992 686 q 847 776 906 758 q 717 793 788 793 q 513 751 608 793 q 349 638 418 710 q 239 472 279 567 q 199 268 199 376 q 218 107 199 181 q 281 -20 238 33 q 390 -104 324 -74 q 550 -135 457 -135 q 650 -123 599 -135 q 749 -96 701 -111 l 767 -171 q 717 -187 744 -179 q 660 -202 689 -196 q 603 -212 631 -208 q 550 -217 575 -217 q 76 269 76 -217 q 126 519 76 404 q 263 719 176 635 q 467 853 350 804 q 717 901 583 901 q 896 876 814 901 q 1038 799 978 850 q 1131 672 1097 749 q 1164 492 1164 594 m 665 539 q 580 509 614 539 q 526 435 546 479 q 497 342 506 392 q 489 251 489 292 q 490 221 489 239 q 497 187 492 203 q 514 160 503 171 q 543 149 525 149 q 594 167 571 149 q 636 213 618 186 q 666 271 654 240 q 681 325 678 301 q 694 432 688 378 q 708 539 701 486 l 665 539 z "
    },
    A: {
        ha: 893,
        x_min: 14,
        x_max: 879,
        o: "m 690 0 l 607 232 l 288 232 l 199 0 l 14 0 l 388 903 l 551 903 l 879 0 l 690 0 m 449 700 l 326 357 l 568 357 l 449 700 z "
    },
    B: {
        ha: 829,
        x_min: 125,
        x_max: 760,
        o: "m 760 272 q 731 145 760 197 q 658 61 703 93 q 558 15 614 29 q 444 0 501 0 l 125 0 q 128 128 126 65 q 130 238 129 181 q 131 333 131 294 l 131 569 q 130 664 131 607 q 128 774 129 721 q 125 903 126 836 l 426 903 q 528 894 476 903 q 622 860 579 885 q 690 793 664 836 q 717 683 717 750 q 707 622 717 653 q 679 565 697 590 q 635 519 661 539 q 575 489 608 499 q 647 461 613 482 q 706 411 681 440 q 745 346 731 382 q 760 272 760 310 m 546 654 q 509 744 546 721 q 422 768 472 768 l 299 768 l 299 553 l 439 553 q 515 581 483 553 q 546 654 546 608 m 585 288 q 551 383 585 346 q 444 419 517 419 l 299 419 l 299 135 l 436 135 q 543 172 501 135 q 585 288 585 208 z "
    },
    C: {
        ha: 814,
        x_min: 69,
        x_max: 765,
        o: "m 765 44 q 699 15 738 29 q 617 -5 665 4 q 501 -14 568 -14 q 329 17 408 -14 q 192 108 250 49 q 102 252 135 167 q 69 447 69 338 q 100 644 69 557 q 186 792 131 732 q 319 885 242 853 q 489 917 396 917 q 612 910 563 917 q 692 893 661 903 q 747 868 728 882 l 714 736 q 660 758 689 749 q 600 774 635 767 q 524 781 565 781 q 417 760 467 781 q 330 699 367 740 q 272 594 293 657 q 250 447 250 532 q 271 304 250 367 q 328 199 292 242 q 416 134 365 156 q 525 113 467 113 q 594 120 558 113 q 657 138 629 128 q 721 163 690 149 l 765 44 l 765 44 z "
    },
    D: {
        ha: 933,
        x_min: 125,
        x_max: 864,
        o: "m 864 447 q 830 235 864 321 q 739 98 796 150 q 607 23 682 46 q 449 0 532 0 l 125 0 q 128 125 126 64 q 129 235 129 178 q 129 333 129 292 l 129 569 q 129 666 129 610 q 128 775 129 722 q 125 903 126 838 l 447 903 q 618 878 542 903 q 749 800 694 854 q 834 659 804 746 q 864 447 864 572 m 683 447 q 665 593 683 532 q 615 694 647 654 q 538 753 583 733 q 435 772 492 772 l 296 772 l 296 132 l 436 132 q 533 151 488 132 q 611 208 578 169 q 664 306 644 246 q 683 447 683 365 z "
    },
    E: {
        ha: 750,
        x_min: 125,
        x_max: 681,
        o: "m 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 669 129 613 q 128 778 129 725 q 125 903 126 839 l 669 903 l 661 768 l 296 774 l 296 546 l 613 546 l 604 410 l 296 415 l 296 131 l 681 136 l 681 0 l 125 0 z "
    },
    F: {
        ha: 738,
        x_min: 125,
        x_max: 668,
        o: "m 663 768 l 296 774 l 296 532 l 603 532 l 597 397 l 296 403 l 296 286 q 297 217 296 264 q 299 121 297 169 q 300 0 300 65 l 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 667 129 610 q 128 776 129 724 q 125 903 126 838 l 668 903 l 663 768 z "
    },
    G: {
        ha: 899,
        x_min: 69,
        x_max: 794,
        o: "m 794 63 q 664 5 732 24 q 511 -14 596 -14 q 333 17 414 -14 q 193 108 251 49 q 102 252 135 167 q 69 447 69 338 q 102 656 69 568 q 192 803 135 744 q 329 889 250 861 q 501 917 408 917 q 614 908 563 917 q 703 889 665 900 q 783 861 747 876 l 747 722 q 688 751 722 738 q 618 772 658 763 q 529 781 578 781 q 326 696 401 781 q 250 447 250 611 q 271 310 250 372 q 327 205 292 249 q 410 137 363 161 q 511 113 457 113 q 567 115 544 113 q 603 119 589 117 q 629 125 618 122 l 629 342 l 454 342 l 454 472 l 794 472 l 794 63 l 794 63 z "
    },
    H: {
        ha: 960,
        x_min: 125,
        x_max: 835,
        o: "m 657 0 q 660 129 658 67 q 662 240 661 182 q 663 333 663 297 l 663 421 l 297 421 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 l 297 551 l 663 551 l 657 903 l 835 903 q 832 778 833 839 q 830 668 831 725 q 829 569 829 611 l 829 333 q 830 239 829 296 q 832 129 831 182 q 835 0 833 67 l 657 0 z "
    },
    I: {
        ha: 428,
        x_min: 125,
        x_max: 303,
        o: "m 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 q 300 778 301 839 q 298 668 299 725 q 297 569 297 611 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 z "
    },
    J: {
        ha: 583,
        x_min: 28,
        x_max: 458,
        o: "m 458 901 q 456 776 457 838 q 453 667 454 724 q 453 569 453 610 l 453 222 q 391 43 453 100 q 213 -14 329 -14 q 94 -4 140 -14 q 28 19 47 6 l 61 144 q 97 131 79 136 q 133 120 113 125 q 172 115 153 115 q 229 126 207 115 q 264 158 251 138 q 281 206 276 178 q 286 268 286 235 l 286 569 q 285 666 286 610 q 283 775 285 722 q 281 901 282 836 l 458 901 l 458 901 z "
    },
    K: {
        ha: 821,
        x_min: 125,
        x_max: 849,
        o: "m 618 0 l 297 425 l 297 333 q 298 238 297 294 q 300 128 299 181 q 303 0 301 65 l 125 0 q 128 129 126 67 q 130 239 129 182 q 131 333 131 296 l 131 569 q 130 663 131 606 q 128 772 129 719 q 125 903 126 835 l 303 903 q 302 849 303 889 q 300 758 301 808 q 298 657 299 708 q 297 569 297 606 l 297 497 l 588 903 l 804 903 l 453 464 l 849 0 l 618 0 z "
    },
    L: {
        ha: 701,
        x_min: 125,
        x_max: 667,
        o: "m 660 0 l 125 0 q 128 126 126 65 q 130 236 129 179 q 131 333 131 293 l 131 569 q 130 663 131 606 q 128 772 129 719 q 125 903 126 835 l 303 903 q 300 772 301 835 q 298 663 299 719 q 297 569 297 606 l 297 131 q 332 131 310 131 q 383 131 354 131 q 443 133 411 132 q 507 133 475 133 q 667 136 582 135 l 660 0 z "
    },
    M: {
        ha: 1178,
        x_min: 125,
        x_max: 1053,
        o: "m 875 0 l 857 669 l 632 89 l 518 89 l 293 665 l 271 0 l 125 0 l 139 335 l 168 903 l 368 903 l 593 351 l 808 903 l 1014 903 l 1040 335 l 1053 0 l 875 0 z "
    },
    N: {
        ha: 1014,
        x_min: 125,
        x_max: 889,
        o: "m 694 0 l 290 628 l 290 333 q 291 235 290 293 q 293 125 292 178 q 296 0 294 64 l 125 0 q 128 125 126 64 q 130 235 129 178 q 131 333 131 293 l 131 903 l 321 903 l 724 272 l 724 569 q 724 600 724 581 q 724 645 724 619 q 723 699 724 671 q 722 757 722 728 q 719 903 721 824 l 889 903 q 886 774 888 836 q 884 664 885 721 q 883 569 883 607 l 883 0 l 694 0 z "
    },
    O: {
        ha: 992,
        x_min: 69,
        x_max: 922,
        o: "m 922 449 q 885 228 922 318 q 789 84 849 139 q 652 6 729 29 q 496 -18 575 -18 q 340 6 417 -18 q 203 84 263 29 q 106 228 143 139 q 69 449 69 318 q 106 669 69 579 q 203 813 143 758 q 340 892 263 868 q 496 915 417 915 q 652 892 575 915 q 789 813 729 868 q 885 669 849 758 q 922 449 922 579 m 742 449 q 678 697 742 611 q 496 782 614 782 q 314 697 378 782 q 250 449 250 611 q 314 201 250 286 q 496 115 378 115 q 678 201 614 115 q 742 449 742 286 z "
    },
    P: {
        ha: 801,
        x_min: 125,
        x_max: 732,
        o: "m 732 635 q 708 517 732 568 q 641 433 683 467 q 540 383 599 400 q 415 367 482 367 l 297 367 l 301 0 l 125 0 q 128 128 126 65 q 130 238 129 181 q 131 333 131 294 l 131 569 q 130 663 131 611 q 128 762 129 714 q 126 849 128 810 q 125 903 125 888 l 415 903 q 535 892 478 903 q 635 851 592 881 q 706 769 679 821 q 732 635 732 717 m 563 635 q 551 701 563 675 q 519 743 539 728 q 472 765 499 758 q 414 771 444 771 l 299 771 l 299 499 l 414 499 q 526 531 489 499 q 563 635 563 564 z "
    },
    Q: {
        ha: 992,
        x_min: 69,
        x_max: 956,
        o: "m 892 -221 q 751 -168 821 -199 q 624 -108 682 -137 q 526 -52 567 -78 q 472 -12 486 -26 q 322 17 394 -8 q 194 97 250 43 q 103 238 138 151 q 69 450 69 325 q 106 669 69 581 q 202 813 142 758 q 340 892 263 868 q 500 915 418 915 q 656 891 579 915 q 791 812 732 867 q 886 668 850 757 q 922 449 922 579 q 903 283 922 356 q 849 158 883 211 q 769 69 815 104 q 671 14 724 33 l 956 -92 l 892 -221 m 742 449 q 680 694 742 607 q 500 782 618 782 q 314 697 378 782 q 250 450 250 613 q 315 201 250 286 q 501 115 379 115 q 607 140 563 115 q 682 208 651 164 q 727 313 713 251 q 742 449 742 375 z "
    },
    R: {
        ha: 846,
        x_min: 125,
        x_max: 847,
        o: "m 632 0 l 381 367 l 297 367 l 301 0 l 125 0 q 128 124 126 63 q 130 233 129 176 q 131 333 131 290 l 131 903 l 408 903 q 529 892 471 903 q 633 851 588 881 q 705 770 678 822 q 732 636 732 718 q 703 514 732 563 q 639 438 675 465 q 546 388 597 404 l 847 0 l 632 0 m 563 629 q 520 740 563 710 q 407 771 478 771 l 297 771 l 297 500 l 407 500 q 524 529 485 500 q 563 629 563 558 z "
    },
    S: {
        ha: 776,
        x_min: 92,
        x_max: 707,
        o: "m 707 251 q 678 131 707 181 q 603 48 650 81 q 498 1 557 15 q 378 -14 439 -14 q 233 0 307 -14 q 92 38 158 14 l 125 189 q 178 164 149 176 q 238 142 207 151 q 300 127 269 133 q 357 121 331 121 q 413 126 383 121 q 466 143 442 131 q 506 178 490 156 q 522 233 522 200 q 503 292 522 269 q 439 333 483 314 q 331 376 390 354 q 219 433 271 397 q 133 526 168 469 q 99 672 99 582 q 125 785 99 739 q 195 861 151 832 q 294 903 239 890 q 407 917 349 917 q 479 914 447 917 q 540 906 511 911 q 600 895 569 901 q 668 882 631 889 l 640 740 q 532 770 590 760 q 421 781 474 781 q 372 776 396 781 q 328 761 347 772 q 296 731 308 750 q 283 681 283 711 q 313 608 283 635 q 393 561 342 582 q 497 521 442 542 q 599 467 551 500 q 676 384 646 435 q 707 251 707 333 z "
    },
    T: {
        ha: 783,
        x_min: 51,
        x_max: 742,
        o: "m 735 761 l 474 767 l 474 333 q 474 236 474 293 q 476 126 475 179 q 479 0 478 65 l 301 0 q 304 126 303 65 q 306 236 306 179 q 307 333 307 293 l 307 767 l 51 761 l 51 903 l 742 903 l 735 761 z "
    },
    U: {
        ha: 958,
        x_min: 125,
        x_max: 833,
        o: "m 833 903 q 831 776 832 839 q 828 667 829 724 q 828 569 828 610 l 828 350 q 810 209 828 275 q 751 93 792 143 q 643 15 710 43 q 479 -14 576 -14 q 315 15 382 -14 q 208 93 249 43 q 149 209 167 143 q 131 350 131 275 l 131 569 q 130 667 131 610 q 128 776 129 724 q 125 903 126 839 l 303 903 q 300 775 301 838 q 298 666 299 722 q 297 569 297 610 l 297 329 q 303 257 297 293 q 329 192 310 221 q 384 144 349 163 q 479 126 419 126 q 574 144 539 126 q 629 192 610 163 q 655 257 649 221 q 661 329 661 293 l 661 569 q 660 666 661 610 q 658 775 660 722 q 656 903 657 838 l 833 903 l 833 903 z "
    },
    V: {
        ha: 931,
        x_min: 28,
        x_max: 903,
        o: "m 536 0 l 354 0 l 28 903 l 217 903 l 456 192 l 722 903 l 903 903 l 536 0 z "
    },
    W: {
        ha: 1332,
        x_min: 28,
        x_max: 1304,
        o: "m 1006 0 l 847 0 l 661 647 l 461 0 l 288 0 l 28 903 l 226 903 l 397 264 l 590 903 l 772 903 l 950 265 l 1142 903 l 1304 903 l 1006 0 z "
    },
    X: {
        ha: 879,
        x_min: 28,
        x_max: 851,
        o: "m 646 0 l 432 328 l 217 0 l 28 0 l 332 463 l 46 903 l 261 903 l 453 613 l 647 903 l 821 903 l 544 476 l 851 0 l 646 0 z "
    },
    Y: {
        ha: 860,
        x_min: 28,
        x_max: 832,
        o: "m 504 329 l 508 0 l 333 0 l 338 332 l 28 903 l 233 903 l 433 494 l 647 903 l 832 903 l 504 329 z "
    },
    Z: {
        ha: 846,
        x_min: 69,
        x_max: 776,
        o: "m 769 0 l 76 0 l 69 157 l 543 761 l 83 756 l 83 903 l 760 903 l 760 746 l 282 140 l 776 146 l 769 0 z "
    },
    "[": {
        ha: 606,
        x_min: 208,
        x_max: 536,
        o: "m 531 -203 q 498 -200 521 -201 q 449 -197 475 -199 q 400 -194 422 -196 q 371 -193 378 -193 q 328 -192 356 -193 q 274 -192 301 -192 l 208 -192 q 210 -89 208 -140 q 211 4 211 -44 q 211 92 211 53 l 211 772 q 211 859 211 811 q 210 951 211 907 q 208 1056 208 1003 l 274 1056 q 328 1056 301 1056 q 371 1057 356 1057 q 400 1058 378 1057 q 449 1061 422 1060 q 498 1064 475 1063 q 531 1067 521 1065 l 536 971 l 322 969 l 322 -106 l 536 -107 l 531 -203 z "
    },
    "\\": {
        ha: 617,
        x_min: 111,
        x_max: 506,
        o: "m 392 -229 l 111 969 l 226 986 l 506 -199 l 392 -229 z "
    },
    "]": {
        ha: 606,
        x_min: 69,
        x_max: 397,
        o: "m 332 -192 q 277 -192 304 -192 q 235 -193 250 -193 q 206 -194 228 -193 q 157 -197 183 -196 q 108 -200 131 -199 q 75 -203 85 -201 l 69 -107 l 283 -106 l 283 969 l 69 971 l 75 1067 q 108 1064 85 1065 q 157 1061 131 1063 q 206 1058 183 1060 q 235 1057 228 1057 q 277 1056 250 1057 q 332 1056 304 1056 l 397 1056 q 396 951 397 1003 q 394 859 394 907 q 394 772 394 811 l 394 92 q 394 4 394 53 q 396 -89 394 -44 q 397 -192 397 -140 l 332 -192 z "
    },
    "^": {
        ha: 629,
        x_min: 56,
        x_max: 574,
        o: "m 503 700 l 315 928 l 126 700 l 56 771 l 283 1047 l 347 1047 l 574 771 l 503 700 z "
    },
    _: {
        ha: 792,
        x_min: 0,
        x_max: 792,
        o: "m 0 -161 l 0 -83 l 792 -83 l 792 -161 l 0 -161 z "
    },
    "\xe2\x80\x98": {
        ha: 350,
        x_min: 118,
        x_max: 322,
        o: "m 322 615 q 312 590 322 600 q 275 575 301 581 l 150 550 q 135 607 142 576 q 123 667 128 633 q 118 739 118 701 q 136 847 118 797 q 176 936 154 897 q 235 1019 201 982 l 303 989 q 282 946 292 971 q 267 894 274 925 q 261 824 261 864 q 271 758 261 789 q 292 701 281 728 q 313 653 303 675 q 322 615 322 632 z "
    },
    a: {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 z "
    },
    b: {
        ha: 821,
        x_min: 118,
        x_max: 758,
        o: "m 758 343 q 737 199 758 264 q 678 86 715 133 q 588 13 640 39 q 475 -14 536 -14 q 398 -3 432 -14 q 340 21 364 7 q 292 56 313 36 l 293 0 l 118 -4 q 121 125 119 63 q 123 236 122 178 q 124 333 124 294 l 124 675 q 123 766 124 711 q 121 874 122 821 q 118 1000 119 935 l 297 1014 l 290 636 q 344 672 315 657 q 404 697 369 686 q 481 708 439 708 q 694 613 631 708 q 758 343 758 517 m 589 343 q 544 519 589 463 q 411 576 500 576 q 366 570 388 576 q 328 557 344 564 q 292 536 308 549 l 292 156 q 331 136 310 144 q 372 123 349 129 q 419 117 394 117 q 481 128 451 117 q 535 167 511 140 q 574 236 560 193 q 589 343 589 279 z "
    },
    c: {
        ha: 669,
        x_min: 63,
        x_max: 607,
        o: "m 607 25 q 558 6 586 14 q 501 -8 535 -1 q 422 -14 467 -14 q 283 8 349 -14 q 169 76 218 31 q 91 188 119 121 q 63 344 63 256 q 90 513 63 444 q 165 626 118 582 q 272 689 211 669 q 396 708 332 708 q 488 702 449 708 q 551 689 526 696 q 601 668 581 681 l 575 550 q 535 569 557 561 q 491 583 515 576 q 436 589 467 589 q 286 526 340 589 q 232 344 232 463 q 248 246 232 290 q 292 169 264 201 q 358 120 319 138 q 440 103 396 103 q 498 108 472 103 q 543 121 524 114 q 583 138 565 128 l 607 25 l 607 25 z "
    },
    d: {
        ha: 814,
        x_min: 63,
        x_max: 696,
        o: "m 522 0 l 525 85 q 499 56 517 72 q 457 24 482 39 q 399 -3 432 8 q 326 -14 367 -14 q 223 10 271 -14 q 140 81 175 35 q 83 195 104 128 q 63 347 63 263 q 79 499 63 432 q 133 612 96 565 q 231 683 171 658 q 376 708 290 708 q 429 705 403 708 q 476 696 456 701 q 524 683 501 690 l 517 1000 l 696 1014 q 694 963 696 1003 q 692 873 693 924 q 690 770 690 822 q 689 682 689 718 l 689 333 q 690 233 689 290 q 693 124 692 176 q 696 0 694 63 l 522 0 m 522 568 q 481 581 515 571 q 404 590 447 590 q 272 531 313 590 q 231 347 231 472 q 245 244 231 286 q 283 174 260 201 q 337 135 307 147 q 396 124 367 124 q 463 142 426 124 q 522 185 499 160 l 522 568 z "
    },
    e: {
        ha: 738,
        x_min: 63,
        x_max: 675,
        o: "m 675 447 q 669 374 675 411 q 653 301 664 336 l 243 301 q 260 219 243 256 q 308 157 278 183 q 376 117 338 131 q 458 103 415 103 q 542 115 497 103 q 624 144 588 126 l 649 33 q 592 12 624 21 q 528 -3 561 3 q 463 -11 496 -8 q 404 -14 431 -14 q 259 13 322 -14 q 152 86 196 39 q 85 199 108 133 q 63 344 63 265 q 81 495 63 428 q 140 610 100 563 q 244 683 181 657 q 394 708 307 708 q 507 691 456 708 q 596 640 558 674 q 654 558 633 607 q 675 447 675 510 m 510 424 q 514 472 514 447 q 485 564 514 531 q 394 597 457 597 q 279 548 314 597 q 244 424 244 499 l 510 424 l 510 424 z "
    },
    f: {
        ha: 529,
        x_min: 83,
        x_max: 529,
        o: "m 511 883 q 488 890 501 888 q 462 894 476 893 q 431 896 447 896 q 349 864 374 896 q 324 765 324 832 l 324 694 l 492 699 l 485 572 l 324 576 l 324 333 q 324 236 324 293 q 326 126 325 179 q 329 0 328 65 l 153 0 q 156 126 154 65 q 157 236 157 179 q 157 333 157 293 l 157 576 l 83 576 l 83 694 l 158 694 l 158 788 q 223 964 158 913 q 404 1015 288 1015 q 449 1013 428 1015 q 489 1007 471 1010 q 529 997 510 1003 l 511 883 z "
    },
    g: {
        ha: 829,
        x_min: 63,
        x_max: 711,
        o: "m 711 708 q 708 585 710 646 q 706 475 707 532 q 706 374 706 418 l 706 -4 q 675 -149 706 -89 q 594 -247 644 -208 q 477 -302 543 -285 q 340 -319 411 -319 q 189 -299 263 -319 q 63 -260 115 -279 l 101 -114 q 181 -147 139 -132 q 263 -169 217 -160 q 357 -179 308 -179 q 427 -169 394 -179 q 485 -137 460 -158 q 524 -83 510 -117 q 540 -4 539 -50 l 543 82 q 518 55 535 71 q 477 24 501 39 q 421 -3 453 8 q 349 -14 389 -14 q 239 9 290 -14 q 149 76 188 32 q 90 188 111 121 q 68 343 68 254 q 83 484 68 418 q 133 600 99 550 q 224 679 168 650 q 360 708 279 708 q 458 691 411 708 q 542 633 506 674 l 542 694 l 711 708 l 711 708 m 540 536 q 506 558 526 549 q 463 573 488 567 q 403 579 438 579 q 275 515 313 579 q 238 343 238 451 q 247 263 238 301 q 275 193 256 224 q 327 144 294 163 q 406 125 360 125 q 477 140 442 125 q 540 182 513 154 l 540 536 z "
    },
    h: {
        ha: 849,
        x_min: 118,
        x_max: 738,
        o: "m 565 0 l 565 424 q 537 538 565 504 q 456 571 508 571 q 401 563 428 571 q 352 547 375 556 q 313 528 329 538 q 290 515 297 519 l 290 333 q 291 235 290 292 q 293 125 292 178 q 294 0 294 64 l 118 0 q 121 125 119 64 q 123 235 122 178 q 124 333 124 292 l 124 676 q 123 772 124 717 q 121 878 122 826 q 118 1000 119 938 l 289 1014 l 286 614 q 394 678 332 647 q 543 708 457 708 q 681 656 629 708 q 732 489 732 604 l 732 333 q 733 235 732 293 q 735 125 733 178 q 738 0 736 64 l 565 0 z "
    },
    i: {
        ha: 449,
        x_min: 118,
        x_max: 331,
        o: "m 331 893 q 302 817 331 836 q 224 797 274 797 q 147 815 175 797 q 118 893 118 833 q 147 968 118 950 q 224 986 175 986 q 303 967 276 986 q 331 893 331 947 m 133 0 q 136 129 135 67 q 138 239 138 182 q 139 333 139 296 l 139 367 q 138 461 139 407 q 136 565 138 515 q 133 685 135 624 l 311 699 q 308 571 310 633 q 306 462 307 518 q 306 367 306 406 l 306 333 q 306 240 306 297 q 308 129 307 182 q 311 0 310 67 l 133 0 z "
    },
    j: {
        ha: 403,
        x_min: -140,
        x_max: 310,
        o: "m 310 893 q 281 817 310 836 q 200 797 253 797 q 121 815 150 797 q 92 893 92 833 q 120 968 92 950 q 200 986 149 986 q 283 967 256 986 q 310 893 310 947 m 290 704 q 290 655 290 694 q 288 565 289 615 q 285 460 286 514 q 285 368 285 407 l 285 -71 q 224 -251 285 -193 q 44 -308 163 -308 q -74 -299 -28 -308 q -140 -275 -121 -289 l -107 -150 q -72 -165 -90 -160 q -38 -175 -57 -171 q 0 -179 -19 -179 q 91 -144 64 -179 q 118 -37 118 -108 l 118 368 q 117 462 118 407 q 115 568 117 517 q 113 690 114 628 l 290 704 l 290 704 z "
    },
    k: {
        ha: 761,
        x_min: 118,
        x_max: 750,
        o: "m 526 0 l 290 344 l 290 0 l 118 0 q 121 124 119 63 q 123 233 122 176 q 124 333 124 290 l 124 672 q 123 763 124 708 q 121 871 122 818 q 118 997 119 932 l 294 1011 q 293 878 294 942 q 291 766 292 824 q 290 672 290 708 l 290 407 l 529 694 l 724 694 l 440 382 l 750 0 l 526 0 z "
    },
    l: {
        ha: 414,
        x_min: 118,
        x_max: 296,
        o: "m 118 0 q 121 124 119 63 q 123 233 122 176 q 124 333 124 290 l 124 676 q 123 770 124 715 q 121 876 122 825 q 118 1000 119 936 l 296 1014 q 293 885 294 947 q 291 774 292 832 q 290 676 290 717 l 290 333 q 291 233 290 289 q 293 124 292 176 q 296 0 294 63 l 118 0 z "
    },
    m: {
        ha: 1247,
        x_min: 118,
        x_max: 1136,
        o: "m 965 0 l 965 422 q 940 535 965 503 q 867 567 915 567 q 819 560 843 567 q 774 545 796 554 q 735 527 753 536 q 708 511 718 518 q 712 479 711 500 q 713 443 713 458 l 713 333 q 713 238 713 294 q 715 128 714 181 q 718 0 717 65 l 543 0 l 543 422 q 518 535 543 503 q 444 567 493 567 q 394 560 419 567 q 348 543 369 553 q 310 525 326 533 q 289 513 294 517 l 289 333 q 290 233 289 290 q 292 124 290 176 q 294 0 293 63 l 118 0 q 121 124 119 63 q 122 233 122 176 q 122 333 122 290 l 122 367 q 122 457 122 403 q 121 563 122 511 q 118 688 119 622 l 292 701 l 286 613 q 392 677 331 646 q 533 708 454 708 q 630 684 588 708 q 693 603 672 660 q 747 641 718 622 q 808 674 775 660 q 878 699 842 689 q 956 708 915 708 q 1084 656 1036 708 q 1132 488 1132 604 l 1132 333 q 1133 238 1132 294 q 1135 128 1133 181 q 1136 0 1136 65 l 965 0 z "
    },
    n: {
        ha: 846,
        x_min: 118,
        x_max: 735,
        o: "m 565 0 l 565 422 q 537 534 565 501 q 456 567 508 567 q 401 560 428 567 q 352 543 375 553 q 313 525 329 533 q 290 513 297 517 l 290 333 q 291 233 290 290 q 293 124 292 176 q 294 0 294 63 l 118 0 q 121 124 119 63 q 123 233 122 176 q 124 333 124 290 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 292 701 l 288 611 q 338 645 311 628 q 396 676 364 663 q 465 699 428 690 q 544 708 501 708 q 683 656 636 708 q 731 488 731 604 l 731 333 q 731 235 731 292 q 733 125 732 178 q 735 0 735 64 l 565 0 z "
    },
    o: {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 z "
    },
    p: {
        ha: 819,
        x_min: 118,
        x_max: 757,
        o: "m 757 343 q 735 199 757 264 q 676 86 714 133 q 587 13 639 39 q 474 -14 535 -14 q 397 -7 431 -14 q 339 8 363 0 q 289 29 311 18 l 293 -328 l 118 -333 q 121 -211 119 -271 q 123 -104 122 -160 q 124 -7 124 -49 l 124 368 q 123 463 124 408 q 121 567 122 517 q 118 688 119 625 l 292 701 l 289 636 q 343 672 314 657 q 403 697 368 686 q 479 708 438 708 q 693 613 629 708 q 757 343 757 517 m 588 343 q 543 519 588 463 q 410 576 499 576 q 365 570 386 576 q 326 557 343 564 q 290 536 307 549 l 290 138 q 329 128 308 133 q 370 120 347 124 q 418 117 393 117 q 480 128 450 117 q 534 167 510 140 q 573 236 558 193 q 588 343 588 279 z "
    },
    q: {
        ha: 846,
        x_min: 63,
        x_max: 707,
        o: "m 531 -333 l 538 81 q 488 33 517 54 q 426 1 463 15 q 340 -14 389 -14 q 231 9 282 -14 q 143 77 181 32 q 84 189 106 122 q 63 344 63 256 q 78 492 63 425 q 131 608 94 560 q 226 682 167 656 q 369 708 285 708 q 440 697 410 708 q 492 672 471 686 q 535 635 517 657 l 535 696 l 707 710 q 706 579 707 643 q 703 468 704 525 q 703 372 703 411 l 703 -8 q 703 -102 703 -47 q 706 -207 704 -157 q 707 -328 707 -265 l 531 -333 m 540 531 q 506 556 526 544 q 463 572 488 565 q 403 579 438 579 q 272 519 311 579 q 232 343 232 460 q 242 260 232 300 q 272 191 251 221 q 326 143 293 161 q 406 125 360 125 q 481 143 450 125 q 540 189 513 161 l 540 531 z "
    },
    r: {
        ha: 574,
        x_min: 118,
        x_max: 532,
        o: "m 515 549 q 496 551 507 550 q 473 553 486 553 q 443 553 460 553 q 365 531 404 553 q 290 478 326 508 l 290 333 q 291 233 290 290 q 293 124 292 176 q 294 0 294 63 l 118 0 q 121 125 119 64 q 123 235 122 178 q 124 333 124 292 l 124 371 q 123 461 124 407 q 121 567 122 515 q 118 692 119 626 l 290 706 l 288 589 q 326 627 304 607 q 374 665 347 647 q 430 693 400 682 q 494 704 460 704 q 532 701 518 704 l 515 549 z "
    },
    s: {
        ha: 667,
        x_min: 83,
        x_max: 604,
        o: "m 604 207 q 590 121 604 161 q 542 51 575 81 q 457 3 510 21 q 326 -14 404 -14 q 269 -12 301 -14 q 203 -5 236 -10 q 138 8 169 0 q 83 28 107 17 l 111 156 q 163 133 133 142 q 223 117 192 124 q 285 108 254 111 q 340 106 315 106 q 372 108 354 106 q 403 117 389 110 q 428 137 418 124 q 438 171 438 150 q 413 228 438 206 q 351 267 389 250 q 272 302 314 285 q 192 347 229 319 q 130 415 154 374 q 106 518 106 456 q 127 604 106 568 q 183 663 149 640 q 263 697 218 686 q 354 708 308 708 q 469 701 407 708 q 582 676 532 693 l 557 549 q 467 576 519 567 q 374 585 414 585 q 297 567 319 585 q 275 521 275 549 q 299 474 275 493 q 360 436 324 454 q 440 399 397 418 q 519 355 482 381 q 580 294 556 329 q 604 207 604 258 z "
    },
    t: {
        ha: 611,
        x_min: 69,
        x_max: 542,
        o: "m 542 21 q 526 14 540 19 q 490 2 513 8 q 435 -9 467 -4 q 365 -14 403 -14 q 205 47 256 -14 q 154 215 154 108 l 154 572 l 69 572 l 69 694 l 128 694 q 156 704 149 694 q 164 736 164 714 l 164 861 l 321 882 l 321 694 l 517 699 l 507 568 l 321 572 l 321 261 q 342 145 321 182 q 411 108 364 108 q 447 112 428 108 q 481 121 465 115 q 515 133 499 126 l 542 21 l 542 21 z "
    },
    u: {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 175 41 226 -14 q 124 208 124 96 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 z "
    },
    v: {
        ha: 758,
        x_min: 42,
        x_max: 717,
        o: "m 456 0 l 276 0 l 42 694 l 232 694 l 369 156 l 546 694 l 717 694 l 456 0 z "
    },
    w: {
        ha: 1118,
        x_min: 42,
        x_max: 1076,
        o: "m 861 0 l 681 0 l 556 467 l 417 0 l 236 0 l 42 694 l 218 694 l 346 172 l 489 694 l 654 694 l 786 172 l 901 694 l 1076 694 l 861 0 z "
    },
    x: {
        ha: 703,
        x_min: 14,
        x_max: 689,
        o: "m 479 0 l 349 229 l 207 0 l 14 0 l 271 350 l 57 694 l 261 694 l 365 492 l 493 694 l 683 694 l 442 353 l 689 0 l 479 0 z "
    },
    y: {
        ha: 800,
        x_min: -7,
        x_max: 758,
        o: "m 421 -118 q 369 -209 399 -172 q 306 -267 339 -246 q 238 -298 274 -289 q 167 -307 203 -307 q 65 -297 114 -307 q -7 -276 17 -287 l 24 -139 q 60 -153 42 -147 q 96 -162 75 -158 q 136 -167 117 -167 q 200 -151 174 -167 q 247 -112 226 -136 q 281 -58 267 -87 q 306 1 294 -28 l 47 694 l 251 694 l 397 182 l 574 694 l 758 694 l 421 -118 z "
    },
    z: {
        ha: 658,
        x_min: 50,
        x_max: 604,
        o: "m 597 0 l 56 0 l 50 122 l 386 564 l 69 560 l 69 694 l 589 694 l 589 569 l 251 128 l 604 132 l 597 0 z "
    },
    "{": {
        ha: 624,
        x_min: 111,
        x_max: 526,
        o: "m 524 -201 l 433 -194 q 351 -176 382 -190 q 303 -144 319 -162 q 281 -102 286 -125 q 275 -56 275 -79 l 275 176 q 262 241 275 206 q 226 307 249 276 q 174 358 204 338 q 111 379 144 379 l 111 485 q 174 506 144 485 q 226 557 204 526 q 262 623 249 588 q 275 688 275 658 l 275 919 q 281 966 275 943 q 303 1008 286 989 q 351 1040 319 1026 q 433 1058 382 1054 l 524 1065 l 526 971 l 435 964 q 395 938 410 961 q 381 874 381 914 l 381 674 q 360 574 381 618 q 312 499 339 529 q 258 452 285 468 q 217 436 231 436 l 217 428 q 258 412 231 428 q 312 365 285 396 q 360 290 339 335 q 381 190 381 246 l 381 -10 q 395 -74 381 -50 q 435 -100 410 -97 l 526 -107 l 524 -201 z "
    },
    "|": {
        ha: 778,
        x_min: 338,
        x_max: 440,
        o: "m 338 -332 l 338 1054 l 440 1054 l 440 -332 l 338 -332 z "
    },
    "}": {
        ha: 624,
        x_min: 97,
        x_max: 513,
        o: "m 513 379 q 449 358 479 379 q 397 307 419 338 q 362 241 375 276 q 349 176 349 206 l 349 -56 q 344 -102 349 -79 q 322 -144 339 -125 q 274 -176 306 -162 q 190 -194 243 -190 l 100 -201 l 97 -107 l 189 -100 q 228 -74 214 -97 q 243 -10 243 -50 l 243 190 q 264 290 243 246 q 312 365 285 335 q 366 412 339 396 q 407 428 393 428 l 407 436 q 366 452 393 436 q 312 499 339 468 q 264 574 285 529 q 243 674 243 618 l 243 874 q 228 938 243 914 q 189 964 214 961 l 97 971 l 100 1065 l 190 1058 q 274 1040 243 1054 q 322 1008 306 1026 q 344 966 339 989 q 349 919 349 943 l 349 688 q 362 623 349 658 q 397 557 375 588 q 449 506 419 526 q 513 485 479 485 l 513 379 l 513 379 z "
    },
    "~": {
        ha: 731,
        x_min: 56,
        x_max: 675,
        o: "m 675 533 q 668 459 675 496 q 643 392 661 422 q 596 344 625 363 q 521 325 567 325 q 430 338 475 325 q 344 365 385 350 q 267 393 303 381 q 207 406 232 406 q 178 383 183 406 q 172 328 172 360 l 56 328 q 61 402 56 365 q 83 468 67 439 q 130 515 100 497 q 207 533 160 533 q 290 519 246 533 q 378 490 335 506 q 458 460 421 474 q 521 446 496 446 q 567 533 567 446 l 675 533 l 675 533 z "
    },
    "\xc2\xa1": {
        ha: 413,
        x_min: 100,
        x_max: 313,
        o: "m 313 546 q 285 476 313 497 q 208 456 258 456 q 100 546 100 456 q 128 614 100 590 q 208 638 157 638 q 285 616 257 638 q 313 546 313 594 m 115 -282 l 140 388 l 272 388 l 296 -282 l 115 -282 z "
    },
    "\xc2\xa2": {
        ha: 669,
        x_min: 63,
        x_max: 607,
        o: "m 607 25 q 564 7 589 15 q 511 -6 542 0 q 440 -14 481 -12 l 440 -132 l 322 -140 l 322 -3 q 219 38 267 10 q 136 110 171 67 q 82 212 101 153 q 63 344 63 271 q 83 492 63 429 q 140 598 104 554 q 222 667 175 642 q 322 701 269 692 l 322 826 l 440 835 l 440 707 q 513 698 482 704 q 563 685 543 692 q 601 668 586 678 l 575 550 q 535 569 557 561 q 491 583 515 576 q 436 589 467 589 q 286 526 340 589 q 232 344 232 463 q 248 246 232 290 q 292 169 264 201 q 358 120 319 138 q 440 103 396 103 q 498 108 472 103 q 543 121 524 114 q 583 138 565 128 l 607 25 l 607 25 z "
    },
    "\xc2\xa3": {
        ha: 817,
        x_min: 76,
        x_max: 740,
        o: "m 732 -10 l 256 -1 q 211 -6 233 -1 q 170 -17 189 -11 q 138 -30 151 -24 q 122 -37 125 -36 l 76 75 q 105 88 89 81 q 136 108 121 96 q 163 137 151 119 q 176 179 175 154 l 193 361 l 117 361 l 117 501 l 206 501 l 219 638 q 256 778 228 724 q 324 864 283 833 q 415 906 365 894 q 519 917 465 917 q 591 913 560 917 q 643 906 622 910 q 686 893 668 900 l 661 756 q 619 768 642 763 q 577 777 600 774 q 529 781 554 781 q 480 774 504 781 q 436 751 456 768 q 403 705 417 735 q 385 628 389 675 l 372 501 l 626 506 l 617 357 l 360 361 l 338 129 l 740 129 l 732 -10 z "
    },
    "\xe2\x81\x84": {
        ha: 947,
        x_min: 99,
        x_max: 858,
        o: "m 160 71 l 99 124 l 800 875 l 858 826 l 160 71 z "
    },
    "\xc2\xa5": {
        ha: 832,
        x_min: 56,
        x_max: 776,
        o: "m 501 424 l 696 424 l 686 328 l 490 328 l 490 256 l 681 256 l 671 160 l 490 160 l 490 0 l 321 0 l 321 160 l 135 160 l 135 256 l 321 256 l 321 328 l 135 328 l 135 424 l 314 424 l 56 903 l 247 903 l 419 522 l 606 903 l 776 903 l 501 424 z "
    },
    "\xc6\x92": {
        ha: 701,
        x_min: 38,
        x_max: 669,
        o: "m 642 779 q 619 786 632 783 q 594 790 608 789 q 563 792 579 792 q 478 760 506 792 q 444 661 451 728 l 438 590 l 606 594 l 588 468 l 428 472 l 400 125 q 339 -46 390 7 q 175 -99 288 -99 q 122 -97 147 -99 q 78 -93 97 -96 q 38 -86 56 -90 l 60 46 q 83 42 69 44 q 144 38 107 38 q 188 47 171 38 q 214 74 204 57 q 228 117 224 92 q 235 175 232 143 l 261 472 l 188 472 l 197 590 l 272 590 l 281 683 q 360 860 292 808 q 546 911 429 911 q 591 908 569 911 q 631 903 613 906 q 669 893 651 899 l 642 779 z "
    },
    "\xc2\xa7": {
        ha: 738,
        x_min: 90,
        x_max: 647,
        o: "m 647 428 q 608 313 647 363 q 511 239 569 263 q 572 175 546 211 q 599 92 599 139 q 572 -7 599 33 q 501 -72 544 -47 q 407 -108 458 -97 q 306 -119 356 -119 q 197 -110 253 -119 q 90 -85 142 -100 l 110 15 q 207 -6 157 1 q 306 -14 257 -14 q 351 -10 328 -14 q 392 5 374 -6 q 421 33 410 15 q 432 78 432 51 q 407 123 432 104 q 345 159 382 142 q 265 197 308 176 q 185 248 222 217 q 124 325 149 279 q 99 438 99 371 q 131 549 99 500 q 218 626 163 599 q 170 690 190 656 q 150 767 150 724 q 174 856 150 819 q 235 916 197 893 q 318 950 272 939 q 408 961 364 961 q 513 953 463 961 q 615 933 563 944 l 596 829 q 511 850 553 840 q 425 860 469 860 q 349 843 381 860 q 318 774 318 826 q 342 722 318 743 q 403 681 367 700 q 483 642 440 663 q 562 594 525 622 q 623 526 599 565 q 647 428 647 486 m 536 403 q 503 451 536 425 q 428 500 471 476 q 344 544 386 524 q 285 574 303 564 q 231 527 249 561 q 214 457 214 493 q 240 400 214 426 q 303 352 267 374 q 378 313 340 331 q 439 285 417 296 q 508 327 481 296 q 536 403 536 358 z "
    },
    "'": {
        ha: 319,
        x_min: 83,
        x_max: 236,
        o: "m 211 651 l 107 651 l 83 1007 l 236 1007 l 211 651 z "
    },
    "\xe2\x80\x9c": {
        ha: 614,
        x_min: 118,
        x_max: 586,
        o: "m 586 614 q 576 589 586 599 q 540 574 567 579 l 415 549 q 400 606 407 575 q 388 666 393 632 q 383 738 383 700 q 401 846 383 796 q 442 935 419 896 q 500 1018 467 981 l 568 988 q 547 944 557 969 q 533 893 539 924 q 526 822 526 863 q 535 757 526 788 q 556 700 544 726 q 577 652 568 674 q 586 614 586 631 m 322 614 q 312 589 322 599 q 275 574 301 579 l 150 549 q 135 606 142 575 q 123 666 128 632 q 118 738 118 700 q 136 846 118 796 q 176 935 154 896 q 235 1018 201 981 l 303 988 q 282 944 292 969 q 267 893 274 924 q 261 822 261 863 q 271 757 261 788 q 292 700 281 726 q 313 652 303 674 q 322 614 322 631 z "
    },
    "\xc2\xab": {
        ha: 918,
        x_min: 153,
        x_max: 821,
        o: "m 740 25 l 440 353 l 742 682 l 821 631 l 629 353 l 821 76 l 740 25 m 453 25 l 153 353 l 454 682 l 533 631 l 340 353 l 533 76 l 453 25 z "
    },
    "\xe2\x80\xb9": {
        ha: 631,
        x_min: 153,
        x_max: 533,
        o: "m 453 25 l 153 353 l 454 682 l 533 631 l 340 353 l 533 76 l 453 25 z "
    },
    "\xe2\x80\xba": {
        ha: 632,
        x_min: 97,
        x_max: 479,
        o: "m 178 25 l 99 76 l 290 353 l 97 631 l 178 682 l 479 353 l 178 25 z "
    },
    "\xef\xac\x81": {
        ha: 889,
        x_min: 83,
        x_max: 771,
        o: "m 771 694 q 768 569 769 631 q 766 461 767 517 q 765 367 765 406 l 765 333 q 766 240 765 297 q 768 129 767 182 q 771 0 769 67 l 593 0 q 596 129 594 67 q 598 239 597 182 q 599 333 599 296 l 599 582 l 324 576 l 324 333 q 324 236 324 293 q 326 126 325 179 q 329 0 328 65 l 153 0 q 156 126 154 65 q 157 236 157 179 q 157 333 157 293 l 157 576 l 83 576 l 83 694 l 158 694 q 170 808 158 751 q 218 910 182 864 q 322 984 254 956 q 500 1013 389 1013 q 577 1008 544 1013 q 632 997 610 1004 q 675 981 657 990 l 656 864 q 619 878 640 872 q 578 888 601 883 q 526 892 554 892 q 431 879 469 892 q 369 842 393 867 q 336 780 346 817 q 326 694 326 743 l 771 694 l 771 694 z "
    },
    "\xef\xac\x82": {
        ha: 944,
        x_min: 83,
        x_max: 824,
        o: "m 646 0 q 649 124 647 63 q 651 233 650 176 q 651 333 651 290 l 651 676 q 651 770 651 715 q 649 876 650 825 q 646 1000 647 936 l 824 1014 q 821 885 822 947 q 819 774 819 832 q 818 676 818 717 l 818 333 q 819 233 818 289 q 821 124 819 176 q 824 0 822 63 l 646 0 m 511 883 q 488 890 501 888 q 462 894 476 893 q 431 896 447 896 q 349 864 374 896 q 324 765 324 832 l 324 694 l 492 699 l 485 572 l 324 576 l 324 333 q 324 236 324 293 q 326 126 325 179 q 329 0 328 65 l 153 0 q 156 126 154 65 q 157 236 157 179 q 157 333 157 293 l 157 576 l 83 576 l 83 694 l 158 694 l 158 788 q 223 964 158 913 q 404 1015 288 1015 q 449 1013 428 1015 q 489 1007 471 1010 q 529 997 510 1003 l 511 883 z "
    },
    "\xe2\x80\x93": {
        ha: 722,
        x_min: 28,
        x_max: 694,
        o: "m 28 350 l 28 475 l 694 475 l 694 350 l 28 350 z "
    },
    "\xe2\x80\xa0": {
        ha: 583,
        x_min: 83,
        x_max: 500,
        o: "m 490 556 l 360 561 l 365 -117 l 224 -117 l 229 561 l 83 556 l 83 688 l 229 682 q 229 700 229 686 q 228 733 229 714 q 227 774 228 751 q 226 818 226 796 q 224 935 225 871 l 365 949 l 360 682 l 500 688 l 490 556 z "
    },
    "\xe2\x80\xa1": {
        ha: 583,
        x_min: 83,
        x_max: 500,
        o: "m 490 235 l 360 240 l 365 -117 l 224 -117 l 229 240 l 83 235 l 83 367 l 229 361 l 229 561 l 83 556 l 83 688 l 229 682 l 224 935 l 365 949 l 360 682 l 500 688 l 490 556 l 360 561 l 360 361 l 500 367 l 490 235 z "
    },
    "\xc2\xb7": {
        ha: 510,
        x_min: 125,
        x_max: 385,
        o: "m 385 469 q 355 379 385 410 q 256 349 325 349 q 158 377 190 349 q 125 469 125 406 q 157 562 125 533 q 256 590 189 590 q 356 560 328 590 q 385 469 385 529 z "
    },
    "\xc2\xb6": {
        ha: 831,
        x_min: 83,
        x_max: 726,
        o: "m 721 818 l 618 824 q 618 763 618 796 q 617 695 618 729 q 617 628 617 661 q 617 569 617 596 l 618 125 q 618 29 618 86 q 619 -81 618 -28 q 621 -208 621 -143 l 538 -208 l 538 824 l 469 824 l 471 -208 l 388 -208 q 389 -81 388 -143 q 390 29 390 -28 q 390 125 390 86 l 390 401 l 335 401 q 251 416 296 401 q 169 462 207 431 q 108 540 132 493 q 83 651 83 588 q 103 750 83 704 q 158 830 124 796 q 238 883 192 864 q 338 903 285 903 l 726 907 l 721 818 z "
    },
    "\xe2\x80\xa2": {
        ha: 611,
        x_min: 125,
        x_max: 486,
        o: "m 486 469 q 479 390 486 422 q 453 339 472 358 q 398 310 433 319 q 306 301 363 301 q 213 310 249 301 q 158 339 178 319 q 132 390 139 358 q 125 469 125 422 q 132 549 125 517 q 158 601 139 581 q 213 629 178 621 q 306 638 249 638 q 398 629 363 638 q 453 601 433 621 q 479 549 472 581 q 486 469 486 517 z "
    },
    "\xe2\x80\x9a": {
        ha: 386,
        x_min: 49,
        x_max: 275,
        o: "m 49 -294 q 97 -190 76 -250 q 118 -78 118 -131 q 108 -15 118 -44 q 88 42 99 15 q 67 91 76 68 q 57 131 57 114 q 72 159 57 150 q 104 171 88 168 l 243 199 q 267 106 258 156 q 275 10 275 56 q 264 -80 275 -35 q 233 -169 253 -125 q 188 -252 214 -212 q 131 -322 161 -292 l 49 -294 z "
    },
    "\xe2\x80\x9e": {
        ha: 650,
        x_min: 49,
        x_max: 539,
        o: "m 313 -294 q 361 -190 340 -250 q 382 -78 382 -131 q 372 -15 382 -44 q 351 42 363 15 q 331 91 340 68 q 321 131 321 114 q 336 159 321 150 q 368 171 351 168 l 507 199 q 531 106 522 156 q 539 10 539 56 q 528 -80 539 -35 q 497 -169 517 -125 q 451 -252 478 -212 q 394 -322 425 -292 l 313 -294 m 49 -294 q 97 -190 76 -250 q 118 -78 118 -131 q 108 -15 118 -44 q 88 42 99 15 q 67 91 76 68 q 57 131 57 114 q 72 159 57 150 q 104 171 88 168 l 243 199 q 267 106 258 156 q 275 10 275 56 q 264 -80 275 -35 q 233 -169 253 -125 q 188 -252 214 -212 q 131 -322 161 -292 l 49 -294 z "
    },
    "\xe2\x80\x9d": {
        ha: 669,
        x_min: 83,
        x_max: 551,
        o: "m 551 829 q 533 722 551 772 q 493 632 515 671 q 435 549 468 586 l 367 579 q 388 622 378 597 q 402 674 396 643 q 408 744 408 706 q 399 810 408 779 q 378 867 390 840 q 358 915 367 893 q 349 953 349 936 q 358 978 349 968 q 394 993 368 988 l 519 1018 q 536 961 529 992 q 547 901 543 935 q 551 829 551 867 m 288 829 q 269 722 288 772 q 229 632 251 671 q 169 549 204 586 l 101 579 q 122 622 113 597 q 137 674 131 643 q 143 744 143 706 q 134 810 143 779 q 113 867 125 840 q 92 915 101 893 q 83 953 83 936 q 94 978 83 968 q 129 993 104 988 l 254 1018 q 271 961 264 992 q 283 901 278 935 q 288 829 288 867 z "
    },
    "\xc2\xbb": {
        ha: 913,
        x_min: 97,
        x_max: 760,
        o: "m 460 25 l 379 76 l 572 353 l 379 631 l 458 682 l 760 353 l 460 25 m 178 25 l 97 76 l 290 353 l 97 631 l 176 682 l 478 353 l 178 25 z "
    },
    "\xe2\x80\xa6": {
        ha: 1051,
        x_min: 90,
        x_max: 961,
        o: "m 961 79 q 858 -15 961 -15 q 758 79 758 -15 q 858 174 758 174 q 938 150 914 174 q 961 79 961 126 m 629 79 q 525 -15 629 -15 q 426 79 426 -15 q 525 174 426 174 q 605 150 581 174 q 629 79 629 126 m 293 79 q 190 -15 293 -15 q 90 79 90 -15 q 115 150 90 128 q 190 172 139 172 q 269 149 246 172 q 293 79 293 126 z "
    },
    "\xe2\x80\xb0": {
        ha: 1589,
        x_min: 83,
        x_max: 1506,
        o: "m 1506 246 q 1454 58 1506 117 q 1303 0 1403 0 q 1153 58 1203 0 q 1103 246 1103 117 q 1153 433 1103 375 q 1304 490 1203 490 q 1456 433 1406 490 q 1506 246 1506 375 m 1390 246 q 1370 367 1390 332 q 1304 403 1350 403 q 1237 367 1257 403 q 1217 246 1217 332 q 1237 124 1217 160 q 1303 88 1257 88 q 1371 124 1351 88 q 1390 246 1390 160 m 1040 246 q 989 58 1040 117 q 838 0 938 0 q 687 58 738 0 q 636 246 636 117 q 686 433 636 375 q 838 490 736 490 q 990 433 939 490 q 1040 246 1040 375 m 926 246 q 905 367 926 332 q 838 403 883 403 q 771 367 790 403 q 751 246 751 332 q 772 124 751 160 q 838 88 792 88 q 906 124 886 88 q 926 246 926 160 m 336 -14 l 254 36 l 793 925 l 872 879 l 336 -14 m 486 657 q 435 470 486 528 q 283 413 383 413 q 133 470 183 413 q 83 657 83 528 q 133 844 83 786 q 285 903 183 903 q 436 844 386 903 q 486 657 486 786 m 372 657 q 351 779 372 743 q 285 815 331 815 q 217 779 238 815 q 197 657 197 743 q 217 535 197 571 q 283 500 238 500 q 352 535 332 500 q 372 657 372 571 z "
    },
    "\xc2\xbf": {
        ha: 653,
        x_min: 56,
        x_max: 583,
        o: "m 483 546 q 453 475 483 494 q 378 456 424 456 q 301 475 331 456 q 271 546 271 494 q 302 615 271 594 q 378 636 333 636 q 453 616 424 636 q 483 546 483 596 m 583 -256 q 480 -287 539 -278 q 372 -297 421 -297 q 257 -285 314 -297 q 156 -247 200 -274 q 83 -174 111 -219 q 56 -58 56 -128 q 74 49 56 8 q 122 117 93 90 q 183 160 150 143 q 245 199 217 178 q 292 249 274 219 q 311 329 311 279 q 307 382 311 357 l 450 389 q 460 341 457 365 q 464 293 464 317 q 447 213 464 244 q 403 159 429 182 q 347 119 378 136 q 291 81 317 101 q 248 33 265 60 q 231 -36 231 6 q 244 -94 231 -69 q 281 -134 258 -118 q 331 -158 303 -150 q 389 -165 360 -165 q 465 -156 425 -165 q 538 -128 506 -146 l 583 -256 l 583 -256 z "
    },
    "`": {
        ha: 469,
        x_min: 63,
        x_max: 407,
        o: "m 336 731 l 63 985 l 226 1046 l 407 765 l 336 731 z "
    },
    "\xc2\xb4": {
        ha: 469,
        x_min: 63,
        x_max: 407,
        o: "m 133 731 l 63 765 l 243 1046 l 407 985 l 133 731 z "
    },
    "\xcb\x86": {
        ha: 636,
        x_min: 63,
        x_max: 574,
        o: "m 494 749 l 315 910 l 142 749 l 63 775 l 275 1056 l 361 1056 l 574 775 l 494 749 z "
    },
    "\xcb\x9c": {
        ha: 703,
        x_min: 63,
        x_max: 640,
        o: "m 640 990 q 633 916 640 953 q 608 849 626 879 q 561 801 590 819 q 486 782 532 782 q 402 794 440 782 q 331 822 364 807 q 268 850 297 838 q 214 863 239 863 q 185 840 190 863 q 179 785 179 817 l 63 785 q 68 859 63 822 q 90 925 74 896 q 137 972 107 954 q 214 990 167 990 q 291 976 253 990 q 365 947 329 963 q 431 917 400 931 q 486 903 461 903 q 532 990 532 903 l 640 990 l 640 990 z "
    },
    "\xc2\xa8": {
        ha: 574,
        x_min: 63,
        x_max: 511,
        o: "m 511 899 q 426 819 511 819 q 366 838 386 819 q 346 899 346 857 q 365 959 346 940 q 426 978 385 978 q 492 958 472 978 q 511 899 511 939 m 228 899 q 143 819 228 819 q 83 838 103 819 q 63 899 63 857 q 82 959 63 940 q 143 978 101 978 q 208 958 189 978 q 228 899 228 939 z "
    },
    "\xcb\x9a": {
        ha: 457,
        x_min: 63,
        x_max: 394,
        o: "m 394 904 q 378 829 394 858 q 338 783 363 800 q 285 760 314 767 q 231 754 257 754 q 176 762 206 754 q 122 788 147 769 q 79 834 96 806 q 63 906 63 863 q 79 982 63 953 q 121 1028 96 1011 q 175 1051 146 1044 q 229 1057 204 1057 q 282 1051 253 1057 q 336 1029 311 1046 q 378 983 361 1013 q 394 904 394 953 m 308 903 q 287 970 308 951 q 229 989 265 989 q 170 971 194 989 q 146 906 146 953 q 154 870 146 885 q 175 846 163 856 q 203 831 188 836 q 232 826 218 826 q 286 844 264 826 q 308 903 308 863 z "
    },
    "\xc2\xb8": {
        ha: 389,
        x_min: 63,
        x_max: 326,
        o: "m 326 -153 q 301 -232 326 -200 q 239 -283 276 -264 q 158 -311 201 -303 q 76 -319 114 -319 l 63 -237 q 121 -228 96 -236 q 161 -207 143 -221 q 179 -169 179 -193 q 171 -141 179 -153 q 149 -122 163 -129 q 121 -113 136 -115 q 92 -114 106 -111 l 111 35 l 185 35 l 188 -14 q 247 -29 221 -15 q 290 -63 272 -43 q 317 -108 308 -83 q 326 -153 326 -132 z "
    },
    "\xcb\x87": {
        ha: 636,
        x_min: 63,
        x_max: 574,
        o: "m 361 749 l 275 749 l 63 1029 l 142 1056 l 315 894 l 494 1056 l 574 1029 l 361 749 z "
    },
    "\xe2\x80\x94": {
        ha: 1389,
        x_min: 0,
        x_max: 1389,
        o: "m 0 350 l 0 475 l 1389 475 l 1389 350 l 0 350 z "
    },
    "\xc3\x86": {
        ha: 1200,
        x_min: 28,
        x_max: 1131,
        o: "m 589 0 q 590 75 589 36 q 592 150 592 108 q 593 232 593 192 l 344 232 l 225 0 l 28 0 l 540 903 l 1119 903 l 1111 768 l 760 774 l 760 546 l 1063 546 l 1054 410 l 760 415 l 760 131 l 1131 136 l 1131 0 l 589 0 m 593 357 q 594 548 593 446 q 593 739 594 650 l 399 357 l 593 357 l 593 357 z "
    },
    "\xc2\xaa": {
        ha: 575,
        x_min: 56,
        x_max: 519,
        o: "m 519 408 q 480 402 501 406 q 438 399 458 399 q 392 409 410 399 q 365 432 375 419 q 349 465 354 447 q 317 432 335 447 q 277 408 301 419 q 221 397 253 397 q 101 442 146 397 q 56 557 56 486 q 83 647 56 614 q 153 695 111 679 q 244 715 194 711 q 338 719 294 719 l 338 743 q 311 809 338 789 q 239 829 285 829 q 197 824 219 829 q 156 811 175 818 q 113 793 133 803 l 92 881 q 143 899 114 890 q 202 911 168 906 q 281 917 236 917 q 351 910 318 917 q 411 883 385 903 q 453 831 438 864 q 468 746 468 799 l 468 526 q 471 497 468 508 q 486 486 474 486 q 499 488 493 486 q 513 490 506 489 l 519 408 l 519 408 m 338 649 l 328 649 q 276 644 301 649 q 232 628 251 639 q 200 599 213 617 q 188 557 188 582 q 206 510 188 529 q 256 490 224 490 q 301 501 279 490 q 338 525 322 513 l 338 649 z "
    },
    "\xc3\x98": {
        ha: 996,
        x_min: 69,
        x_max: 926,
        o: "m 926 449 q 891 230 926 318 q 797 88 856 142 q 661 10 738 33 q 501 -12 585 -12 q 390 -2 444 -12 q 285 33 335 8 l 228 -47 l 132 19 l 190 101 q 103 241 136 156 q 69 450 69 326 q 106 669 69 581 q 202 813 142 758 q 340 892 263 868 q 500 915 418 915 q 615 902 558 915 q 724 861 672 889 l 774 932 l 869 865 l 817 789 q 897 650 867 733 q 926 449 926 567 m 639 740 q 500 782 583 782 q 314 697 378 782 q 250 450 250 613 q 289 243 250 321 l 639 740 l 639 740 m 746 449 q 713 642 746 565 l 368 151 q 501 115 424 115 q 685 201 624 115 q 746 449 746 288 z "
    },
    "\xc5\x92": {
        ha: 1225,
        x_min: 83,
        x_max: 1156,
        o: "m 569 0 q 529 -4 558 0 q 468 -6 500 -8 q 325 25 394 -1 q 202 106 256 51 q 116 244 149 160 q 83 450 83 329 q 120 669 83 581 q 217 811 157 757 q 353 888 276 865 q 510 911 429 911 q 533 910 517 911 q 567 908 550 910 q 601 906 585 907 q 625 903 618 904 l 1144 903 l 1139 768 l 771 774 l 771 551 l 1088 551 l 1083 415 l 771 421 l 771 131 l 1156 136 l 1156 0 l 569 0 m 601 781 q 572 783 588 782 q 547 785 560 785 q 522 785 533 785 q 328 698 400 785 q 257 450 257 611 q 330 200 257 288 q 524 113 403 113 q 547 113 533 113 q 572 114 560 113 q 601 115 588 115 l 601 781 z "
    },
    "\xc2\xba": {
        ha: 593,
        x_min: 56,
        x_max: 538,
        o: "m 538 656 q 519 536 538 585 q 467 456 500 488 q 391 411 435 425 q 297 397 347 397 q 203 411 247 397 q 127 456 160 425 q 75 537 94 488 q 56 657 56 586 q 75 777 56 728 q 128 858 94 826 q 205 903 161 889 q 297 917 249 917 q 390 902 346 917 q 466 856 433 888 q 518 776 499 825 q 538 656 538 726 m 404 656 q 377 788 404 746 q 297 829 350 829 q 215 788 240 829 q 189 657 189 747 q 215 525 189 567 q 297 483 240 483 q 380 524 356 483 q 404 656 404 565 z "
    },
    "\xc3\xa6": {
        ha: 1142,
        x_min: 63,
        x_max: 1079,
        o: "m 1079 444 q 1074 385 1079 415 q 1057 328 1068 356 l 647 328 q 664 244 647 285 q 710 172 681 203 q 778 122 739 140 q 863 103 818 103 q 947 115 903 103 q 1028 144 992 126 l 1053 33 q 997 12 1028 21 q 933 -3 967 3 q 868 -11 900 -8 q 808 -14 836 -14 q 738 -6 775 -14 q 665 16 700 1 q 600 54 629 31 q 553 108 571 78 q 502 55 533 78 q 435 17 471 32 q 362 -6 400 1 q 289 -14 324 -14 q 199 1 240 -14 q 127 45 157 17 q 80 114 97 74 q 63 204 63 154 q 103 329 63 285 q 206 395 144 374 q 338 422 267 417 q 467 426 408 426 l 467 469 q 453 524 467 501 q 419 562 440 547 q 370 583 397 576 q 315 590 343 590 q 227 575 276 590 q 142 543 178 560 l 115 661 q 174 683 142 674 q 242 697 207 692 q 312 706 278 703 q 375 708 346 708 q 488 687 435 708 q 578 617 542 665 q 799 708 669 708 q 911 691 860 708 q 1000 640 963 674 q 1058 556 1038 606 q 1079 444 1079 507 m 914 424 q 917 443 917 433 q 917 464 917 453 q 888 559 917 521 q 799 597 860 597 q 733 583 760 597 q 688 545 706 569 q 660 490 669 521 q 649 424 651 458 l 914 424 l 914 424 m 478 326 q 403 324 446 326 q 323 310 361 322 q 258 274 285 299 q 232 204 232 250 q 265 140 232 160 q 339 121 299 121 q 413 138 375 121 q 478 179 451 156 l 478 326 z "
    },
    "\xc4\xb1": {
        ha: 429,
        x_min: 124,
        x_max: 301,
        o: "m 124 0 q 126 129 125 67 q 128 239 128 182 q 129 333 129 296 l 129 367 q 128 461 129 407 q 126 565 128 515 q 124 685 125 624 l 301 699 q 299 571 300 633 q 297 462 297 518 q 296 367 296 406 l 296 333 q 297 240 296 297 q 299 129 297 182 q 301 0 300 67 l 124 0 z "
    },
    "\xc3\xb8": {
        ha: 833,
        x_min: 63,
        x_max: 771,
        o: "m 771 346 q 745 180 771 249 q 672 68 719 111 q 560 6 625 25 q 417 -14 496 -14 q 253 13 324 -14 l 199 -64 l 103 3 l 154 76 q 86 187 110 121 q 63 347 63 253 q 88 514 63 446 q 161 626 114 582 q 273 689 208 669 q 417 708 338 708 q 579 682 510 708 l 636 763 l 732 696 l 678 619 q 747 508 722 575 q 771 346 771 442 m 501 571 q 417 592 464 592 q 344 578 378 592 q 286 535 311 564 q 247 459 261 506 q 233 347 233 413 q 239 276 233 308 q 254 218 244 244 l 501 571 l 501 571 m 600 346 q 579 478 600 426 l 329 124 q 417 101 368 101 q 489 115 456 101 q 547 158 522 129 q 586 234 572 188 q 600 346 600 281 z "
    },
    "\xc5\x93": {
        ha: 1263,
        x_min: 63,
        x_max: 1200,
        o: "m 1200 444 q 1194 385 1200 415 q 1178 328 1189 356 l 768 328 q 785 244 768 285 q 831 172 801 203 q 899 122 860 140 q 983 103 938 103 q 1067 115 1022 103 q 1149 144 1113 126 l 1174 33 q 1122 10 1153 19 q 1059 -4 1092 1 q 995 -12 1026 -10 q 940 -14 964 -14 q 799 15 867 -14 q 683 100 732 44 q 563 13 632 40 q 417 -14 494 -14 q 151 78 239 -14 q 63 347 63 169 q 151 617 63 525 q 417 708 239 708 q 567 686 493 708 q 692 603 640 664 q 919 708 781 708 q 1032 691 981 708 q 1121 640 1083 674 q 1179 558 1158 607 q 1200 444 1200 508 m 1035 424 q 1038 443 1038 433 q 1038 464 1038 453 q 1009 559 1038 521 q 919 597 981 597 q 853 583 881 597 q 808 545 826 569 q 781 490 790 521 q 769 424 772 458 l 1035 424 l 1035 424 m 600 346 q 591 435 600 390 q 560 514 582 479 q 504 570 539 549 q 417 592 469 592 q 328 570 364 592 q 272 515 293 549 q 242 437 251 481 q 233 347 233 393 q 242 258 233 303 q 272 179 251 214 q 328 123 293 144 q 417 101 364 101 q 505 123 469 101 q 561 178 540 144 q 591 256 582 213 q 600 346 600 300 z "
    },
    "\xc3\x9f": {
        ha: 946,
        x_min: 118,
        x_max: 869,
        o: "m 869 197 q 847 100 869 140 q 786 35 824 60 q 700 -2 749 10 q 601 -14 651 -14 q 477 -3 543 -14 q 356 28 411 7 l 385 151 q 478 116 425 132 q 575 100 531 100 q 615 101 593 100 q 655 110 636 103 q 686 131 674 117 q 699 169 699 144 q 674 212 699 193 q 614 249 650 231 q 535 287 578 267 q 456 335 492 307 q 395 403 419 364 q 371 496 371 442 q 392 608 371 565 q 446 675 414 650 q 516 713 478 700 q 586 736 554 725 q 640 761 618 747 q 661 803 661 775 q 646 853 661 833 q 607 883 631 872 q 556 899 583 894 q 503 903 528 903 q 406 884 447 903 q 339 832 365 865 q 300 753 313 799 q 288 656 288 708 l 288 353 q 288 176 288 264 q 290 0 289 89 l 118 0 q 120 176 119 89 q 121 353 121 264 l 121 656 q 221 925 121 836 q 497 1014 321 1014 q 601 1005 546 1014 q 702 973 656 996 q 779 911 749 950 q 810 811 810 872 q 789 715 810 746 q 738 671 768 685 q 671 653 707 657 q 604 641 635 650 q 553 608 574 632 q 532 532 532 585 q 557 478 532 500 q 619 435 582 456 q 701 396 657 415 q 782 349 744 376 q 844 286 819 322 q 869 197 869 250 z "
    },
    "\xe2\x84\xa2": {
        ha: 1076,
        x_min: 56,
        x_max: 1007,
        o: "m 444 818 l 300 818 l 300 585 q 300 531 300 563 q 301 469 300 499 q 303 399 303 435 l 194 399 q 196 469 194 435 q 197 531 197 499 q 197 585 197 563 l 197 818 l 56 818 l 56 903 l 449 903 l 444 818 m 897 767 l 771 447 l 708 447 l 582 763 l 569 397 l 488 397 q 492 471 490 435 q 494 533 493 501 q 496 585 496 565 l 510 903 l 624 903 l 750 594 l 871 903 l 983 903 l 1000 585 q 1002 533 1001 565 q 1004 471 1003 501 q 1007 397 1006 435 l 908 397 l 897 767 z "
    },
    "\xc3\xb7": {
        ha: 913,
        x_min: 97,
        x_max: 815,
        o: "m 549 717 q 456 629 549 629 q 390 650 411 629 q 368 717 368 671 q 389 783 368 763 q 456 803 410 803 q 526 781 504 803 q 549 717 549 760 m 97 415 l 97 514 l 815 514 l 815 415 l 97 415 m 549 215 q 456 128 549 128 q 390 149 411 128 q 368 215 368 169 q 389 281 368 261 q 456 301 410 301 q 526 280 504 301 q 549 215 549 258 z "
    },
    "\xc2\xb0": {
        ha: 446,
        x_min: 42,
        x_max: 404,
        o: "m 404 849 q 386 762 404 796 q 341 708 368 728 q 283 680 314 688 q 225 672 251 672 q 167 681 199 672 q 107 711 135 690 q 60 766 79 732 q 42 850 42 800 q 60 939 42 904 q 107 994 79 974 q 167 1021 135 1014 q 224 1028 199 1028 q 280 1021 249 1028 q 339 994 311 1014 q 385 940 367 975 q 404 849 404 906 m 339 850 q 328 910 339 886 q 300 949 317 935 q 263 970 283 964 q 224 976 243 976 q 183 969 204 976 q 146 948 163 963 q 118 910 129 933 q 107 851 107 886 q 141 756 107 789 q 225 724 175 724 q 307 753 275 724 q 339 850 339 783 z "
    },
    "\xc2\xae": {
        ha: 756,
        x_min: 56,
        x_max: 700,
        o: "m 700 686 q 670 530 700 592 q 593 432 640 468 q 489 382 546 396 q 378 368 432 368 q 268 382 325 368 q 164 432 211 396 q 86 529 117 468 q 56 686 56 590 q 85 842 56 781 q 162 941 115 904 q 265 992 208 978 q 376 1007 322 1007 q 486 992 429 1007 q 591 942 543 978 q 669 843 639 906 q 700 686 700 781 m 629 688 q 606 812 629 763 q 547 890 583 861 q 466 931 511 919 q 376 943 421 943 q 285 931 331 943 q 203 890 239 919 q 146 812 168 861 q 124 688 124 763 q 146 564 124 613 q 205 486 168 515 q 287 446 242 457 q 378 435 332 435 q 470 446 425 435 q 551 486 515 457 q 608 564 586 515 q 629 688 629 613 m 463 508 l 364 658 l 331 658 l 331 510 l 257 510 l 257 882 l 375 882 q 424 877 400 882 q 465 860 447 872 q 494 826 483 847 q 506 771 506 804 q 488 706 506 732 q 439 669 469 681 l 554 511 l 463 508 m 433 768 q 416 809 433 799 q 375 819 399 819 l 332 819 l 332 714 l 375 714 q 418 728 403 714 q 433 768 433 742 z "
    },
    "\xc2\xa9": {
        ha: 1104,
        x_min: 83,
        x_max: 1021,
        o: "m 1021 449 q 977 221 1021 310 q 865 80 933 132 q 713 8 796 28 q 551 -12 631 -12 q 392 8 475 -12 q 240 79 308 28 q 128 220 172 131 q 83 449 83 310 q 127 676 83 586 q 238 820 171 767 q 389 895 306 874 q 551 917 472 917 q 711 895 628 917 q 863 821 794 874 q 976 677 932 768 q 1021 449 1021 586 m 939 449 q 902 638 939 563 q 808 756 865 713 q 683 817 751 800 q 551 835 614 835 q 418 817 486 835 q 294 755 350 799 q 201 637 238 711 q 165 449 165 563 q 201 260 165 335 q 294 143 238 186 q 419 83 350 100 q 551 67 488 67 q 685 83 617 67 q 810 143 754 100 q 903 260 867 186 q 939 449 939 335 m 706 213 q 692 205 703 210 q 664 194 682 200 q 620 185 646 189 q 563 181 594 181 q 458 197 507 181 q 374 248 410 214 q 316 333 338 282 q 294 451 294 383 q 315 578 294 526 q 371 663 336 631 q 451 711 406 696 q 544 726 496 726 q 613 722 585 726 q 661 710 642 717 q 690 699 681 704 q 701 693 700 693 l 678 610 q 644 626 661 619 q 610 638 629 633 q 572 643 592 643 q 506 633 538 643 q 449 601 474 624 q 408 542 424 579 q 393 451 393 506 q 410 364 393 400 q 453 305 426 328 q 512 272 479 282 q 576 263 544 263 q 618 267 599 263 q 653 278 638 271 q 685 293 669 285 l 706 213 l 706 213 z "
    },
    "\xc3\x81": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 482 944 l 411 979 l 592 1260 l 756 1199 l 482 944 z "
    },
    "\xc3\x82": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 681 961 l 501 1122 l 328 961 l 249 988 l 461 1268 l 547 1268 l 760 988 l 681 961 z "
    },
    "\xc3\x84": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 739 1051 q 654 972 739 972 q 594 991 614 972 q 574 1051 574 1010 q 593 1112 574 1093 q 654 1131 613 1131 q 719 1111 700 1131 q 739 1051 739 1092 m 456 1051 q 371 972 456 972 q 310 991 331 972 q 290 1051 290 1010 q 310 1112 290 1093 q 371 1131 329 1131 q 436 1111 417 1131 q 456 1051 456 1092 z "
    },
    "\xc3\x80": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 472 943 l 199 1197 l 363 1258 l 543 978 l 472 943 z "
    },
    "\xc3\x85": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 668 1111 q 652 1036 668 1065 q 612 990 636 1007 q 559 967 588 974 q 504 961 531 961 q 450 969 479 961 q 395 994 421 976 q 353 1041 369 1013 q 336 1113 336 1069 q 353 1189 336 1160 q 394 1235 369 1218 q 449 1258 419 1251 q 503 1264 478 1264 q 556 1258 526 1264 q 610 1236 585 1253 q 651 1190 635 1219 q 668 1111 668 1160 m 582 1110 q 560 1177 582 1158 q 503 1196 539 1196 q 444 1178 468 1196 q 419 1113 419 1160 q 428 1077 419 1092 q 449 1053 436 1063 q 476 1038 461 1043 q 506 1033 492 1033 q 560 1051 538 1033 q 582 1110 582 1069 z "
    },
    "\xc3\x83": {
        ha: 976,
        x_min: 56,
        x_max: 921,
        o: "m 732 0 l 649 232 l 329 232 l 240 0 l 56 0 l 429 903 l 593 903 l 921 0 l 732 0 m 490 700 l 368 357 l 610 357 l 490 700 m 788 1179 q 781 1105 788 1142 q 756 1038 774 1068 q 708 990 738 1008 q 633 971 679 971 q 549 983 588 971 q 478 1011 511 996 q 415 1039 444 1026 q 361 1051 386 1051 q 332 1028 338 1051 q 326 974 326 1006 l 210 974 q 215 1048 210 1011 q 238 1114 221 1085 q 284 1161 254 1143 q 361 1179 314 1179 q 438 1165 400 1179 q 512 1135 476 1151 q 578 1106 547 1119 q 633 1092 608 1092 q 679 1179 679 1092 l 788 1179 l 788 1179 z "
    },
    "\xc3\x87": {
        ha: 814,
        x_min: 69,
        x_max: 765,
        o: "m 765 44 q 700 15 738 28 q 619 -5 668 4 q 506 -14 571 -14 l 507 -28 q 566 -43 540 -29 q 610 -77 592 -57 q 637 -122 628 -97 q 646 -167 646 -146 q 621 -246 646 -214 q 558 -297 596 -278 q 477 -325 521 -317 q 396 -333 433 -333 l 382 -251 q 440 -242 415 -250 q 481 -221 463 -235 q 499 -183 499 -207 q 490 -155 499 -167 q 469 -136 482 -143 q 440 -127 456 -129 q 411 -128 425 -125 l 426 -8 q 282 39 347 3 q 169 133 217 75 q 96 271 122 192 q 69 447 69 350 q 100 644 69 557 q 186 792 131 732 q 319 885 242 853 q 489 917 396 917 q 612 910 563 917 q 692 893 661 903 q 747 868 728 882 l 714 736 q 660 758 689 749 q 600 774 635 767 q 524 781 565 781 q 417 760 467 781 q 330 699 367 740 q 272 594 293 657 q 250 447 250 532 q 271 304 250 367 q 328 199 292 242 q 416 134 365 156 q 525 113 467 113 q 594 120 558 113 q 657 138 629 128 q 721 163 690 149 l 765 44 l 765 44 z "
    },
    "\xc3\x89": {
        ha: 750,
        x_min: 125,
        x_max: 681,
        o: "m 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 669 129 613 q 128 778 129 725 q 125 903 126 839 l 669 903 l 661 768 l 296 774 l 296 546 l 613 546 l 604 410 l 296 415 l 296 131 l 681 136 l 681 0 l 125 0 m 407 943 l 336 978 l 517 1258 l 681 1197 l 407 943 z "
    },
    "\xc3\x8a": {
        ha: 750,
        x_min: 125,
        x_max: 681,
        o: "m 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 669 129 613 q 128 778 129 725 q 125 903 126 839 l 669 903 l 661 768 l 296 774 l 296 546 l 613 546 l 604 410 l 296 415 l 296 131 l 681 136 l 681 0 l 125 0 m 574 961 l 394 1122 l 221 961 l 142 988 l 354 1268 l 440 1268 l 653 988 l 574 961 z "
    },
    "\xc3\x8b": {
        ha: 750,
        x_min: 125,
        x_max: 681,
        o: "m 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 669 129 613 q 128 778 129 725 q 125 903 126 839 l 669 903 l 661 768 l 296 774 l 296 546 l 613 546 l 604 410 l 296 415 l 296 131 l 681 136 l 681 0 l 125 0 m 629 1054 q 544 975 629 975 q 484 994 504 975 q 464 1054 464 1013 q 483 1115 464 1096 q 544 1133 503 1133 q 610 1114 590 1133 q 629 1054 629 1094 m 346 1054 q 261 975 346 975 q 201 994 221 975 q 181 1054 181 1013 q 200 1115 181 1096 q 261 1133 219 1133 q 326 1114 307 1133 q 346 1054 346 1094 z "
    },
    "\xc3\x88": {
        ha: 750,
        x_min: 125,
        x_max: 681,
        o: "m 125 0 q 128 124 126 63 q 129 233 129 176 q 129 333 129 290 l 129 569 q 129 669 129 613 q 128 778 129 725 q 125 903 126 839 l 669 903 l 661 768 l 296 774 l 296 546 l 613 546 l 604 410 l 296 415 l 296 131 l 681 136 l 681 0 l 125 0 m 415 961 l 142 1215 l 306 1276 l 486 996 l 415 961 z "
    },
    "\xc3\x8d": {
        ha: 428,
        x_min: 125,
        x_max: 492,
        o: "m 218 961 l 147 996 l 328 1276 l 492 1215 l 218 961 m 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 q 300 778 301 839 q 298 668 299 725 q 297 569 297 611 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 z "
    },
    "\xc3\x8e": {
        ha: 428,
        x_min: -47,
        x_max: 464,
        o: "m 385 961 l 206 1122 l 32 961 l -47 988 l 165 1268 l 251 1268 l 464 988 l 385 961 m 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 q 300 778 301 839 q 298 668 299 725 q 297 569 297 611 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 z "
    },
    "\xc3\x8f": {
        ha: 428,
        x_min: -3,
        x_max: 446,
        o: "m 446 1040 q 361 961 446 961 q 300 980 319 961 q 281 1040 281 999 q 299 1101 281 1082 q 361 1119 318 1119 q 426 1100 406 1119 q 446 1040 446 1081 m 163 1040 q 78 961 163 961 q 17 980 36 961 q -3 1040 -3 999 q 16 1101 -3 1082 q 78 1119 35 1119 q 142 1100 122 1119 q 163 1040 163 1081 m 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 q 300 778 301 839 q 298 668 299 725 q 297 569 297 611 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 z "
    },
    "\xc3\x8c": {
        ha: 428,
        x_min: -61,
        x_max: 303,
        o: "m 213 961 l -61 1215 l 103 1276 l 283 996 l 213 961 m 125 0 q 128 129 126 67 q 130 240 129 182 q 131 333 131 297 l 131 569 q 130 668 131 611 q 128 778 129 725 q 125 903 126 839 l 303 903 q 300 778 301 839 q 298 668 299 725 q 297 569 297 611 l 297 333 q 298 239 297 296 q 300 129 299 182 q 303 0 301 67 l 125 0 z "
    },
    "\xc3\x91": {
        ha: 1014,
        x_min: 139,
        x_max: 903,
        o: "m 824 1181 q 818 1106 824 1143 q 797 1040 813 1069 q 751 993 781 1011 q 672 975 721 975 q 594 988 631 975 q 526 1017 557 1001 q 468 1047 494 1033 q 419 1060 442 1060 q 386 1042 396 1060 q 376 975 376 1025 l 246 975 q 251 1049 246 1013 q 274 1115 257 1086 q 320 1163 290 1144 q 397 1181 350 1181 q 472 1167 436 1181 q 541 1137 508 1153 q 602 1107 574 1121 q 656 1093 631 1093 q 701 1181 701 1093 l 824 1181 l 824 1181 m 722 0 l 304 614 l 304 333 q 305 235 304 293 q 307 125 306 178 q 310 0 308 64 l 139 0 q 142 125 140 64 q 144 235 143 178 q 144 333 144 293 l 144 569 q 144 664 144 607 q 142 774 143 721 q 139 903 140 836 l 321 903 l 738 286 l 738 569 q 738 600 738 581 q 738 645 738 619 q 737 699 738 671 q 736 757 736 728 q 733 903 735 824 l 903 903 q 900 774 901 836 q 898 664 899 721 q 897 569 897 607 l 897 333 q 898 235 897 292 q 900 125 899 178 q 903 0 901 64 l 722 0 z "
    },
    "\xc3\x93": {
        ha: 992,
        x_min: 69,
        x_max: 922,
        o: "m 496 961 l 425 996 l 606 1276 l 769 1215 l 496 961 m 922 449 q 885 228 922 318 q 789 84 849 139 q 652 6 729 29 q 496 -18 575 -18 q 340 6 417 -18 q 203 84 263 29 q 106 228 143 139 q 69 449 69 318 q 106 669 69 579 q 203 813 143 758 q 340 892 263 868 q 496 915 417 915 q 652 892 575 915 q 789 813 729 868 q 885 669 849 758 q 922 449 922 579 m 742 449 q 678 697 742 611 q 496 782 614 782 q 314 697 378 782 q 250 449 250 611 q 314 201 250 286 q 496 115 378 115 q 678 201 614 115 q 742 449 742 286 z "
    },
    "\xc3\x94": {
        ha: 992,
        x_min: 69,
        x_max: 922,
        o: "m 681 961 l 501 1122 l 328 961 l 249 988 l 461 1268 l 547 1268 l 760 988 l 681 961 m 922 449 q 885 228 922 318 q 789 84 849 139 q 652 6 729 29 q 496 -18 575 -18 q 340 6 417 -18 q 203 84 263 29 q 106 228 143 139 q 69 449 69 318 q 106 669 69 579 q 203 813 143 758 q 340 892 263 868 q 496 915 417 915 q 652 892 575 915 q 789 813 729 868 q 885 669 849 758 q 922 449 922 579 m 742 449 q 678 697 742 611 q 496 782 614 782 q 314 697 378 782 q 250 449 250 611 q 314 201 250 286 q 496 115 378 115 q 678 201 614 115 q 742 449 742 286 z "
    },
    "\xc3\x96": {
        ha: 1024,
        x_min: 97,
        x_max: 950,
        o: "m 742 1053 q 657 974 742 974 q 596 992 615 974 q 576 1053 576 1011 q 595 1113 576 1094 q 657 1132 614 1132 q 722 1113 701 1132 q 742 1053 742 1093 m 458 1053 q 374 974 458 974 q 313 992 332 974 q 293 1053 293 1011 q 312 1113 293 1094 q 374 1132 331 1132 q 438 1113 418 1132 q 458 1053 458 1093 m 950 449 q 913 228 950 318 q 817 84 876 139 q 680 6 757 29 q 524 -18 603 -18 q 367 6 444 -18 q 231 84 290 29 q 134 228 171 139 q 97 449 97 318 q 134 669 97 579 q 231 813 171 758 q 367 892 290 868 q 524 915 444 915 q 680 892 603 915 q 817 813 757 868 q 913 669 876 758 q 950 449 950 579 m 769 449 q 706 697 769 611 q 524 782 642 782 q 342 697 406 782 q 278 449 278 611 q 342 201 278 286 q 524 115 406 115 q 706 201 642 115 q 769 449 769 286 z "
    },
    "\xc3\x92": {
        ha: 992,
        x_min: 69,
        x_max: 922,
        o: "m 499 960 l 225 1214 l 389 1275 l 569 994 l 499 960 m 922 449 q 885 228 922 318 q 789 84 849 139 q 652 6 729 29 q 496 -18 575 -18 q 340 6 417 -18 q 203 84 263 29 q 106 228 143 139 q 69 449 69 318 q 106 669 69 579 q 203 813 143 758 q 340 892 263 868 q 496 915 417 915 q 652 892 575 915 q 789 813 729 868 q 885 669 849 758 q 922 449 922 579 m 742 449 q 678 697 742 611 q 496 782 614 782 q 314 697 378 782 q 250 449 250 611 q 314 201 250 286 q 496 115 378 115 q 678 201 614 115 q 742 449 742 286 z "
    },
    "\xc3\x95": {
        ha: 1024,
        x_min: 97,
        x_max: 950,
        o: "m 818 1181 q 813 1106 818 1143 q 791 1040 807 1069 q 745 993 775 1011 q 667 975 715 975 q 588 988 625 975 q 520 1017 551 1001 q 463 1047 489 1033 q 414 1060 436 1060 q 381 1042 390 1060 q 371 975 371 1024 l 240 975 q 246 1049 240 1013 q 268 1115 251 1086 q 315 1163 285 1144 q 392 1181 344 1181 q 467 1167 431 1181 q 535 1137 503 1153 q 597 1107 568 1121 q 650 1093 625 1093 q 685 1114 674 1093 q 696 1181 696 1135 l 818 1181 l 818 1181 m 950 449 q 913 228 950 318 q 817 84 876 139 q 680 6 757 29 q 524 -18 603 -18 q 367 6 444 -18 q 231 84 290 29 q 134 228 171 139 q 97 449 97 318 q 134 669 97 579 q 231 813 171 758 q 367 892 290 868 q 524 915 444 915 q 680 892 603 915 q 817 813 757 868 q 913 669 876 758 q 950 449 950 579 m 769 449 q 706 697 769 611 q 524 782 642 782 q 342 697 406 782 q 278 449 278 611 q 342 201 278 286 q 524 115 406 115 q 706 201 642 115 q 769 449 769 286 z "
    },
    "\xc3\x9a": {
        ha: 968,
        x_min: 125,
        x_max: 843,
        o: "m 482 960 l 411 994 l 592 1275 l 756 1214 l 482 960 m 843 903 q 840 776 842 839 q 838 667 839 724 q 838 569 838 610 l 838 350 q 819 209 838 275 q 760 93 801 143 q 653 15 719 43 q 489 -14 586 -14 q 317 15 386 -14 q 207 92 249 43 q 148 208 165 142 q 131 349 131 274 l 131 569 q 130 665 131 608 q 128 774 129 721 q 125 901 126 836 l 301 901 q 300 774 301 836 q 298 665 299 721 q 297 569 297 608 l 297 328 q 304 256 297 292 q 331 191 311 219 q 389 144 351 163 q 489 126 426 126 q 584 144 549 126 q 639 192 619 163 q 665 257 658 221 q 671 329 671 293 l 671 569 q 670 666 671 610 q 668 775 669 722 q 665 903 667 838 l 843 903 l 843 903 z "
    },
    "\xc3\x9b": {
        ha: 968,
        x_min: 125,
        x_max: 843,
        o: "m 657 961 l 478 1122 l 304 961 l 225 988 l 438 1268 l 524 1268 l 736 988 l 657 961 m 843 903 q 840 776 842 839 q 838 667 839 724 q 838 569 838 610 l 838 350 q 819 209 838 275 q 760 93 801 143 q 653 15 719 43 q 489 -14 586 -14 q 317 15 386 -14 q 207 92 249 43 q 148 208 165 142 q 131 349 131 274 l 131 569 q 130 665 131 608 q 128 774 129 721 q 125 901 126 836 l 301 901 q 300 774 301 836 q 298 665 299 721 q 297 569 297 608 l 297 328 q 304 256 297 292 q 331 191 311 219 q 389 144 351 163 q 489 126 426 126 q 584 144 549 126 q 639 192 619 163 q 665 257 658 221 q 671 329 671 293 l 671 569 q 670 666 671 610 q 668 775 669 722 q 665 903 667 838 l 843 903 l 843 903 z "
    },
    "\xc3\x9c": {
        ha: 968,
        x_min: 125,
        x_max: 843,
        o: "m 711 1054 q 626 975 711 975 q 565 994 585 975 q 546 1054 546 1013 q 565 1115 546 1096 q 626 1133 583 1133 q 691 1114 671 1133 q 711 1054 711 1094 m 428 1054 q 343 975 428 975 q 282 994 301 975 q 263 1054 263 1013 q 281 1115 263 1096 q 343 1133 300 1133 q 408 1114 388 1133 q 428 1054 428 1094 m 843 903 q 840 776 842 839 q 838 667 839 724 q 838 569 838 610 l 838 350 q 819 209 838 275 q 760 93 801 143 q 653 15 719 43 q 489 -14 586 -14 q 317 15 386 -14 q 207 92 249 43 q 148 208 165 142 q 131 349 131 274 l 131 569 q 130 665 131 608 q 128 774 129 721 q 125 901 126 836 l 301 901 q 300 774 301 836 q 298 665 299 721 q 297 569 297 608 l 297 328 q 304 256 297 292 q 331 191 311 219 q 389 144 351 163 q 489 126 426 126 q 584 144 549 126 q 639 192 619 163 q 665 257 658 221 q 671 329 671 293 l 671 569 q 670 666 671 610 q 668 775 669 722 q 665 903 667 838 l 843 903 l 843 903 z "
    },
    "\xc3\x99": {
        ha: 968,
        x_min: 125,
        x_max: 843,
        o: "m 476 960 l 203 1214 l 367 1275 l 547 994 l 476 960 m 843 903 q 840 776 842 839 q 838 667 839 724 q 838 569 838 610 l 838 350 q 819 209 838 275 q 760 93 801 143 q 653 15 719 43 q 489 -14 586 -14 q 317 15 386 -14 q 207 92 249 43 q 148 208 165 142 q 131 349 131 274 l 131 569 q 130 665 131 608 q 128 774 129 721 q 125 901 126 836 l 301 901 q 300 774 301 836 q 298 665 299 721 q 297 569 297 608 l 297 328 q 304 256 297 292 q 331 191 311 219 q 389 144 351 163 q 489 126 426 126 q 584 144 549 126 q 639 192 619 163 q 665 257 658 221 q 671 329 671 293 l 671 569 q 670 666 671 610 q 668 775 669 722 q 665 903 667 838 l 843 903 l 843 903 z "
    },
    "\xc5\xb8": {
        ha: 860,
        x_min: 28,
        x_max: 832,
        o: "m 504 329 l 508 0 l 333 0 l 338 332 l 28 903 l 233 903 l 433 494 l 647 903 l 832 903 l 504 329 m 671 1038 q 586 958 671 958 q 526 977 546 958 q 506 1038 506 996 q 525 1098 506 1079 q 586 1117 544 1117 q 651 1097 632 1117 q 671 1038 671 1078 m 388 1038 q 303 958 388 958 q 242 977 263 958 q 222 1038 222 996 q 242 1098 222 1079 q 303 1117 261 1117 q 368 1097 349 1117 q 388 1038 388 1078 z "
    },
    "\xc3\xa1": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 371 731 l 300 765 l 481 1046 l 644 985 l 371 731 z "
    },
    "\xc3\xa2": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 549 735 l 369 896 l 196 735 l 117 761 l 329 1042 l 415 1042 l 628 761 l 549 735 z "
    },
    "\xc3\xa4": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 601 857 q 517 778 601 778 q 456 797 476 778 q 436 857 436 815 q 456 917 436 899 q 517 936 475 936 q 582 917 563 936 q 601 857 601 897 m 318 857 q 233 778 318 778 q 173 797 193 778 q 153 857 153 815 q 172 917 153 899 q 233 936 192 936 q 299 917 279 936 q 318 857 318 897 z "
    },
    "\xc3\xa0": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 365 731 l 92 985 l 256 1046 l 436 765 l 365 731 z "
    },
    "\xc3\xa5": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 531 904 q 515 829 531 858 q 474 783 499 800 q 422 760 450 767 q 367 754 393 754 q 313 762 342 754 q 258 788 283 769 q 215 834 232 806 q 199 906 199 863 q 215 982 199 953 q 257 1028 232 1011 q 311 1051 282 1044 q 365 1057 340 1057 q 418 1051 389 1057 q 472 1029 447 1046 q 514 983 497 1013 q 531 904 531 953 m 444 903 q 423 970 444 951 q 365 989 401 989 q 306 971 331 989 q 282 906 282 953 q 290 870 282 885 q 311 846 299 856 q 339 831 324 836 q 368 826 354 826 q 422 844 400 826 q 444 903 444 863 z "
    },
    "\xc3\xa3": {
        ha: 775,
        x_min: 63,
        x_max: 706,
        o: "m 706 1 q 657 -6 686 -1 q 599 -11 628 -11 q 517 10 549 -11 q 476 75 485 31 q 397 10 443 35 q 289 -14 351 -14 q 196 2 238 -14 q 124 47 154 18 q 78 117 94 76 q 63 204 63 157 q 101 326 63 282 q 200 393 140 371 q 331 421 260 415 q 467 426 403 426 l 467 469 q 455 529 467 506 q 422 566 443 553 q 374 585 401 579 q 315 590 346 590 q 258 583 288 590 q 201 567 228 576 q 142 543 171 556 l 115 661 q 183 685 144 674 q 265 701 217 694 q 375 708 313 708 q 474 699 428 708 q 556 663 521 689 q 613 590 592 636 q 633 474 633 544 l 633 171 q 640 122 633 139 q 668 104 647 104 q 688 107 676 104 q 699 108 693 108 l 706 1 l 706 1 m 467 326 l 442 326 q 368 324 406 326 q 301 309 331 321 q 251 273 271 297 q 232 204 232 249 q 242 161 232 178 q 267 135 251 144 q 301 124 282 126 q 339 121 319 121 q 411 138 378 121 q 467 175 444 156 l 467 326 m 672 990 q 665 916 672 953 q 640 849 658 879 q 593 801 622 819 q 518 782 564 782 q 434 794 472 782 q 363 822 396 807 q 300 850 329 838 q 246 863 271 863 q 217 840 222 863 q 211 785 211 817 l 94 785 q 100 859 94 822 q 122 925 106 896 q 169 972 139 954 q 246 990 199 990 q 323 976 285 990 q 397 947 361 963 q 463 917 432 931 q 518 903 493 903 q 564 990 564 903 l 672 990 l 672 990 z "
    },
    "\xc3\xa7": {
        ha: 711,
        x_min: 90,
        x_max: 635,
        o: "m 635 25 q 586 6 614 14 q 528 -8 563 -1 q 450 -14 494 -14 q 436 -13 443 -14 q 422 -12 429 -12 l 424 -28 q 483 -43 457 -29 q 526 -77 508 -57 q 553 -122 544 -97 q 563 -167 563 -146 q 538 -246 563 -214 q 475 -297 513 -278 q 394 -325 438 -317 q 313 -333 350 -333 l 299 -251 q 357 -242 332 -250 q 397 -221 379 -235 q 415 -183 415 -207 q 407 -155 415 -167 q 385 -136 399 -143 q 357 -127 372 -129 q 328 -128 342 -125 l 344 -1 q 244 41 290 13 q 163 113 197 69 q 110 214 129 156 q 90 344 90 272 q 118 513 90 444 q 192 626 146 582 q 299 689 239 669 q 424 708 360 708 q 515 702 476 708 q 579 689 554 696 q 629 668 608 681 l 603 550 q 563 569 585 561 q 519 583 543 576 q 464 589 494 589 q 314 526 368 589 q 260 344 260 463 q 276 246 260 290 q 319 169 292 201 q 385 120 347 138 q 468 103 424 103 q 526 108 500 103 q 571 121 551 114 q 611 138 593 128 l 635 25 l 635 25 z "
    },
    "\xc3\xa9": {
        ha: 738,
        x_min: 63,
        x_max: 675,
        o: "m 675 447 q 673 413 675 432 q 668 373 671 393 q 661 334 665 353 q 653 301 657 315 l 243 301 q 260 220 243 257 q 307 158 278 183 q 375 117 336 132 q 458 103 414 103 q 519 109 490 103 q 572 124 549 115 q 624 144 599 133 l 649 33 q 585 10 621 21 q 508 -7 553 0 q 404 -14 463 -14 q 268 9 331 -14 q 160 77 206 32 q 88 190 114 122 q 63 344 63 257 q 147 618 63 528 q 394 708 231 708 q 516 688 464 708 q 603 633 568 668 q 657 550 639 597 q 675 447 675 503 m 510 424 q 514 485 515 454 q 500 542 513 517 q 463 582 488 567 q 394 597 438 597 q 340 590 367 597 q 292 562 313 582 q 258 508 271 542 q 244 424 244 475 l 510 424 l 510 424 m 399 731 l 328 765 l 508 1046 l 672 985 l 399 731 z "
    },
    "\xc3\xaa": {
        ha: 738,
        x_min: 63,
        x_max: 675,
        o: "m 675 447 q 673 413 675 432 q 668 373 671 393 q 661 334 665 353 q 653 301 657 315 l 243 301 q 260 220 243 257 q 307 158 278 183 q 375 117 336 132 q 458 103 414 103 q 519 109 490 103 q 572 124 549 115 q 624 144 599 133 l 649 33 q 585 10 621 21 q 508 -7 553 0 q 404 -14 463 -14 q 268 9 331 -14 q 160 77 206 32 q 88 190 114 122 q 63 344 63 257 q 147 618 63 528 q 394 708 231 708 q 516 688 464 708 q 603 633 568 668 q 657 550 639 597 q 675 447 675 503 m 510 424 q 514 485 515 454 q 500 542 513 517 q 463 582 488 567 q 394 597 438 597 q 340 590 367 597 q 292 562 313 582 q 258 508 271 542 q 244 424 244 475 l 510 424 l 510 424 m 578 735 l 399 896 l 225 735 l 146 761 l 358 1042 l 444 1042 l 657 761 l 578 735 z "
    },
    "\xc3\xab": {
        ha: 738,
        x_min: 63,
        x_max: 675,
        o: "m 675 447 q 673 413 675 432 q 668 373 671 393 q 661 334 665 353 q 653 301 657 315 l 243 301 q 260 220 243 257 q 307 158 278 183 q 375 117 336 132 q 458 103 414 103 q 519 109 490 103 q 572 124 549 115 q 624 144 599 133 l 649 33 q 585 10 621 21 q 508 -7 553 0 q 404 -14 463 -14 q 268 9 331 -14 q 160 77 206 32 q 88 190 114 122 q 63 344 63 257 q 147 618 63 528 q 394 708 231 708 q 516 688 464 708 q 603 633 568 668 q 657 550 639 597 q 675 447 675 503 m 510 424 q 514 485 515 454 q 500 542 513 517 q 463 582 488 567 q 394 597 438 597 q 340 590 367 597 q 292 562 313 582 q 258 508 271 542 q 244 424 244 475 l 510 424 l 510 424 m 601 857 q 517 778 601 778 q 456 797 476 778 q 436 857 436 815 q 456 917 436 899 q 517 936 475 936 q 582 917 563 936 q 601 857 601 897 m 318 857 q 233 778 318 778 q 173 797 193 778 q 153 857 153 815 q 172 917 153 899 q 233 936 192 936 q 299 917 279 936 q 318 857 318 897 z "
    },
    "\xc3\xa8": {
        ha: 738,
        x_min: 63,
        x_max: 675,
        o: "m 675 447 q 673 413 675 432 q 668 373 671 393 q 661 334 665 353 q 653 301 657 315 l 243 301 q 260 220 243 257 q 307 158 278 183 q 375 117 336 132 q 458 103 414 103 q 519 109 490 103 q 572 124 549 115 q 624 144 599 133 l 649 33 q 585 10 621 21 q 508 -7 553 0 q 404 -14 463 -14 q 268 9 331 -14 q 160 77 206 32 q 88 190 114 122 q 63 344 63 257 q 147 618 63 528 q 394 708 231 708 q 516 688 464 708 q 603 633 568 668 q 657 550 639 597 q 675 447 675 503 m 510 424 q 514 485 515 454 q 500 542 513 517 q 463 582 488 567 q 394 597 438 597 q 340 590 367 597 q 292 562 313 582 q 258 508 271 542 q 244 424 244 475 l 510 424 l 510 424 m 393 731 l 119 985 l 283 1046 l 464 765 l 393 731 z "
    },
    "\xc3\xad": {
        ha: 368,
        x_min: 96,
        x_max: 471,
        o: "m 197 731 l 126 765 l 307 1046 l 471 985 l 197 731 m 96 0 q 99 129 97 67 q 101 239 100 182 q 101 333 101 296 l 101 367 q 101 461 101 407 q 99 565 100 515 q 96 685 97 624 l 274 699 q 271 571 272 633 q 269 462 269 518 q 268 367 268 406 l 268 333 q 269 240 268 297 q 271 129 269 182 q 274 0 272 67 l 96 0 z "
    },
    "\xc3\xae": {
        ha: 368,
        x_min: -64,
        x_max: 447,
        o: "m 368 735 l 189 896 l 15 735 l -64 761 l 149 1042 l 235 1042 l 447 761 l 368 735 m 96 0 q 99 129 97 67 q 101 239 100 182 q 101 333 101 296 l 101 367 q 101 461 101 407 q 99 565 100 515 q 96 685 97 624 l 274 699 q 271 571 272 633 q 269 462 269 518 q 268 367 268 406 l 268 333 q 269 240 268 297 q 271 129 269 182 q 274 0 272 67 l 96 0 z "
    },
    "\xc3\xaf": {
        ha: 368,
        x_min: -24,
        x_max: 425,
        o: "m 425 857 q 340 778 425 778 q 280 797 300 778 q 260 857 260 815 q 279 917 260 899 q 340 936 299 936 q 406 917 386 936 q 425 857 425 897 m 142 857 q 57 778 142 778 q -3 797 17 778 q -24 857 -24 815 q -4 917 -24 899 q 57 936 15 936 q 122 917 103 936 q 142 857 142 897 m 96 0 q 99 129 97 67 q 101 239 100 182 q 101 333 101 296 l 101 367 q 101 461 101 407 q 99 565 100 515 q 96 685 97 624 l 274 699 q 271 571 272 633 q 269 462 269 518 q 268 367 268 406 l 268 333 q 269 240 268 297 q 271 129 269 182 q 274 0 272 67 l 96 0 z "
    },
    "\xc3\xac": {
        ha: 368,
        x_min: -75,
        x_max: 274,
        o: "m 199 731 l -75 985 l 89 1046 l 269 765 l 199 731 m 96 0 q 99 129 97 67 q 101 239 100 182 q 101 333 101 296 l 101 367 q 101 461 101 407 q 99 565 100 515 q 96 685 97 624 l 274 699 q 271 571 272 633 q 269 462 269 518 q 268 367 268 406 l 268 333 q 269 240 268 297 q 271 129 269 182 q 274 0 272 67 l 96 0 z "
    },
    "\xc3\xb1": {
        ha: 846,
        x_min: 118,
        x_max: 735,
        o: "m 565 0 l 565 422 q 537 534 565 501 q 456 567 508 567 q 401 560 428 567 q 352 543 375 553 q 313 525 329 533 q 290 513 297 517 l 290 333 q 291 233 290 290 q 293 124 292 176 q 294 0 294 63 l 118 0 q 121 124 119 63 q 123 233 122 176 q 124 333 124 290 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 292 701 l 288 611 q 338 645 311 628 q 396 676 364 663 q 465 699 428 690 q 544 708 501 708 q 683 656 636 708 q 731 488 731 604 l 731 333 q 731 235 731 292 q 733 125 732 178 q 735 0 735 64 l 565 0 m 715 990 q 708 916 715 953 q 683 849 701 879 q 636 801 665 819 q 561 782 607 782 q 477 794 515 782 q 406 822 439 807 q 343 850 372 838 q 289 863 314 863 q 260 840 265 863 q 254 785 254 817 l 138 785 q 143 859 138 822 q 165 925 149 896 q 212 972 182 954 q 289 990 242 990 q 366 976 328 990 q 440 947 404 963 q 506 917 475 931 q 561 903 536 903 q 607 990 607 903 l 715 990 l 715 990 z "
    },
    "\xc3\xb3": {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 m 413 731 l 342 765 l 522 1046 l 686 985 l 413 731 z "
    },
    "\xc3\xb4": {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 m 581 749 l 401 910 l 228 749 l 149 775 l 361 1056 l 447 1056 l 660 775 l 581 749 z "
    },
    "\xc3\xb6": {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 m 617 857 q 532 778 617 778 q 472 797 492 778 q 451 857 451 815 q 471 917 451 899 q 532 936 490 936 q 597 917 578 936 q 617 857 617 897 m 333 857 q 249 778 333 778 q 188 797 208 778 q 168 857 168 815 q 188 917 168 899 q 249 936 207 936 q 314 917 294 936 q 333 857 333 897 z "
    },
    "\xc3\xb2": {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 m 401 731 l 128 985 l 292 1046 l 472 765 l 401 731 z "
    },
    "\xc3\xb5": {
        ha: 806,
        x_min: 63,
        x_max: 743,
        o: "m 743 347 q 719 181 743 250 q 651 69 696 113 q 544 6 607 25 q 403 -14 481 -14 q 262 6 325 -14 q 154 69 199 25 q 86 181 110 113 q 63 347 63 250 q 86 514 63 446 q 154 626 110 582 q 261 689 199 669 q 403 708 324 708 q 544 689 482 708 q 651 626 607 669 q 719 514 696 582 q 743 347 743 446 m 572 347 q 560 464 572 417 q 526 540 549 511 q 473 580 504 568 q 403 592 442 592 q 333 580 364 592 q 279 540 301 568 q 245 464 257 511 q 233 347 233 417 q 246 229 233 276 q 281 153 258 182 q 334 113 303 125 q 403 101 365 101 q 472 113 440 101 q 525 153 503 125 q 560 229 547 182 q 572 347 572 276 m 693 990 q 686 916 693 953 q 661 849 679 879 q 614 801 643 819 q 539 782 585 782 q 455 794 493 782 q 383 822 417 807 q 321 850 350 838 q 267 863 292 863 q 238 840 243 863 q 232 785 232 817 l 115 785 q 121 859 115 822 q 143 925 126 896 q 190 972 160 954 q 267 990 219 990 q 344 976 306 990 q 417 947 382 963 q 483 917 453 931 q 539 903 514 903 q 585 990 585 903 l 693 990 l 693 990 z "
    },
    "\xc3\xba": {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 175 41 226 -14 q 124 208 124 96 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 m 428 731 l 357 765 l 538 1046 l 701 985 l 428 731 z "
    },
    "\xc3\xbb": {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 175 41 226 -14 q 124 208 124 96 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 m 603 749 l 424 910 l 250 749 l 171 775 l 383 1056 l 469 1056 l 682 775 l 603 749 z "
    },
    "\xc3\xbc": {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 175 41 226 -14 q 124 208 124 96 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 m 636 857 q 551 778 636 778 q 491 797 511 778 q 471 857 471 815 q 490 917 471 899 q 551 936 510 936 q 617 917 597 936 q 636 857 636 897 m 353 857 q 268 778 353 778 q 208 797 228 778 q 188 857 188 815 q 207 917 188 899 q 268 936 226 936 q 333 917 314 936 q 353 857 353 897 z "
    },
    "\xc3\xb9": {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 175 41 226 -14 q 124 208 124 96 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 m 419 731 l 146 985 l 310 1046 l 490 765 l 419 731 z "
    },
    "\xc3\xbf": {
        ha: 800,
        x_min: -7,
        x_max: 758,
        o: "m 421 -118 q 369 -209 399 -172 q 306 -267 339 -246 q 238 -298 274 -289 q 167 -307 203 -307 q 65 -297 114 -307 q -7 -276 17 -287 l 24 -139 q 60 -153 42 -147 q 96 -162 75 -158 q 136 -167 117 -167 q 200 -151 174 -167 q 247 -112 226 -136 q 281 -58 267 -87 q 306 1 294 -28 l 47 694 l 251 694 l 397 182 l 574 694 l 758 694 l 421 -118 m 635 857 q 550 778 635 778 q 490 797 510 778 q 469 857 469 815 q 489 917 469 899 q 550 936 508 936 q 615 917 596 936 q 635 857 635 897 m 351 857 q 267 778 351 778 q 206 797 226 778 q 186 857 186 815 q 206 917 186 899 q 267 936 225 936 q 332 917 313 936 q 351 857 351 897 z "
    },
    "\xe2\x89\xa4": {
        ha: 1228,
        x_min: 69,
        x_max: 1019,
        o: "m 1019 -87 l 69 440 l 1019 968 l 1019 -87 z "
    },
    "\xc2\xa0": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xe2\x82\xac": {
        ha: 825,
        x_min: 69,
        x_max: 756,
        o: "m 710 761 q 668 774 690 768 q 626 783 649 779 q 579 786 603 786 q 417 735 483 786 q 325 585 350 685 l 631 585 l 621 489 l 69 489 l 69 585 l 153 585 q 287 831 185 744 q 544 917 389 917 q 628 913 593 917 q 688 904 664 910 q 735 892 715 899 l 710 761 m 756 21 q 704 4 732 11 q 647 -8 681 -3 q 571 -14 613 -14 q 419 8 489 -14 q 294 73 349 31 q 204 178 240 115 q 151 319 168 240 l 69 319 l 69 415 l 615 415 l 606 319 l 331 319 q 428 166 358 219 q 594 113 499 113 q 647 117 622 113 q 689 129 671 122 q 728 144 710 136 l 756 21 l 756 21 z "
    },
    "\xc2\xaf": {
        ha: 694,
        x_min: 58,
        x_max: 639,
        o: "m 58 946 q 150 943 104 944 q 233 941 189 942 q 315 940 278 940 l 404 940 q 485 941 444 940 q 561 943 526 942 q 639 946 601 944 l 639 822 q 560 826 600 825 q 484 828 525 828 q 404 829 443 829 l 315 829 q 234 828 279 829 q 150 826 189 828 q 58 824 104 825 l 58 946 z "
    },
    "\xc2\xbc": {
        ha: 1375,
        x_min: 83,
        x_max: 1264,
        o: "m 1258 158 l 1157 158 l 1160 -1 l 1015 -1 l 1018 158 l 704 158 l 699 279 l 1013 692 l 1157 692 l 1157 267 l 1264 267 l 1258 158 m 1018 522 l 838 267 l 1018 267 l 1018 522 m 481 -97 l 382 -67 l 744 1118 l 843 1092 l 481 -97 m 253 856 l 114 811 l 83 944 l 390 1022 l 390 297 l 242 297 l 253 631 l 253 856 z "
    },
    "\xc2\xbe": {
        ha: 1417,
        x_min: 69,
        x_max: 1306,
        o: "m 550 528 q 529 426 550 468 q 472 358 508 385 q 388 319 436 332 q 286 307 340 307 q 233 310 263 307 q 175 319 204 313 q 118 333 146 325 q 69 353 90 342 l 92 456 q 181 423 132 436 q 272 410 229 410 q 314 416 292 410 q 355 435 336 422 q 385 472 374 449 q 397 528 397 494 q 370 608 397 583 q 290 633 343 633 l 206 633 l 208 736 l 290 736 q 348 760 332 736 q 364 825 364 785 q 339 892 364 864 q 267 919 314 919 q 192 909 232 919 q 121 881 153 899 l 97 979 q 184 1012 135 999 q 276 1025 233 1025 q 365 1016 322 1025 q 442 985 408 1007 q 497 928 476 964 q 518 839 518 893 q 499 758 518 794 q 440 701 481 722 q 524 633 499 681 q 550 528 550 586 m 1300 158 l 1199 158 l 1201 -1 l 1057 -1 l 1060 158 l 746 158 l 740 279 l 1054 692 l 1199 692 l 1199 267 l 1306 267 l 1300 158 m 1060 522 l 879 267 l 1060 267 l 1060 522 m 556 -97 l 457 -67 l 819 1118 l 918 1092 l 556 -97 z "
    },
    "\xc2\xbd": {
        ha: 1347,
        x_min: 69,
        x_max: 1236,
        o: "m 1228 0 l 756 0 q 753 19 754 10 q 753 40 753 29 q 776 161 753 113 q 835 243 800 210 q 910 300 869 276 q 986 347 951 324 q 1044 399 1021 371 q 1068 469 1068 426 q 944 585 1068 585 q 869 565 903 585 q 815 529 836 546 l 769 632 q 815 664 789 650 q 869 687 840 678 q 928 701 899 696 q 983 706 957 706 q 1074 691 1032 706 q 1147 649 1115 676 q 1196 580 1178 621 q 1214 485 1214 539 q 1193 380 1214 422 q 1141 308 1172 338 q 1074 258 1110 279 q 1006 218 1038 238 q 951 178 974 199 q 928 126 929 157 l 1236 133 l 1228 0 m 239 856 l 100 811 l 69 944 l 376 1022 l 376 297 l 228 297 l 239 631 l 239 856 m 468 -97 l 369 -67 l 732 1118 l 831 1092 l 468 -97 z "
    },
    "\xe2\x88\x92": {
        ha: 831,
        x_min: 83,
        x_max: 747,
        o: "m 747 524 l 747 406 l 83 406 l 83 524 l 747 524 z "
    },
    "\xc3\x97": {
        ha: 861,
        x_min: 104,
        x_max: 757,
        o: "m 432 376 l 188 132 l 104 217 l 349 460 l 117 692 l 200 775 l 432 543 l 671 783 l 754 699 l 515 460 l 757 217 l 674 133 l 432 376 z "
    },
    "\xc2\xb5": {
        ha: 856,
        x_min: 118,
        x_max: 738,
        o: "m 563 0 l 568 83 q 458 18 524 50 q 310 -14 393 -14 q 269 -10 289 -14 l 281 -335 l 118 -335 q 121 -208 119 -271 q 123 -97 122 -156 q 124 6 124 -39 l 124 367 q 123 457 124 403 q 121 563 122 511 q 118 688 119 622 l 294 701 q 293 569 294 633 q 291 459 292 515 q 290 367 290 403 l 290 274 q 317 162 290 193 q 396 131 344 131 q 449 138 422 131 q 500 155 476 146 q 541 173 524 164 q 565 186 558 182 l 565 361 q 565 460 565 404 q 564 567 565 515 q 561 688 563 626 l 738 701 q 735 575 736 638 q 733 464 733 522 q 732 361 732 406 l 732 328 q 733 231 732 288 q 735 124 733 175 q 738 0 736 64 l 563 0 z "
    },
    "\xe2\x88\x82": {
        ha: 792,
        x_min: 63,
        x_max: 688,
        o: "m 688 399 q 610 94 688 201 q 375 -14 532 -14 q 238 6 297 -14 q 140 69 179 25 q 82 181 101 113 q 63 347 63 250 q 80 491 63 425 q 133 606 97 557 q 226 681 169 654 q 360 708 282 708 q 430 701 400 708 q 479 682 460 693 q 518 656 503 669 l 518 719 q 504 826 518 785 q 466 891 490 868 q 409 922 442 914 q 339 931 376 931 q 263 926 296 931 q 206 914 229 921 q 158 896 179 907 l 121 1033 q 183 1053 150 1044 q 247 1065 211 1060 q 322 1071 283 1071 q 458 1059 392 1071 q 574 1009 524 1047 q 656 900 625 971 q 688 711 688 829 l 688 399 m 518 347 q 510 463 518 417 q 483 538 501 510 q 439 579 465 567 q 375 592 413 592 q 322 581 347 592 q 276 544 296 571 q 245 469 257 517 q 233 347 233 421 q 246 226 233 274 q 278 150 258 178 q 324 112 299 122 q 375 101 349 101 q 440 113 413 101 q 484 153 467 125 q 510 229 501 182 q 518 347 518 276 z "
    },
    "\xc3\xb0": {
        ha: 810,
        x_min: 63,
        x_max: 706,
        o: "m 250 846 l 381 928 q 360 930 369 929 q 339 931 350 931 q 263 926 296 931 q 206 914 229 921 q 158 896 179 907 l 121 1033 q 183 1053 150 1044 q 247 1065 211 1060 q 322 1071 283 1071 q 437 1063 381 1071 q 540 1029 493 1054 l 686 1121 l 706 976 l 638 936 q 674 841 661 896 q 688 711 688 786 l 688 399 q 610 94 688 201 q 375 -14 532 -14 q 238 6 297 -14 q 140 69 179 25 q 82 181 101 113 q 63 347 63 250 q 80 491 63 425 q 133 606 97 557 q 226 681 169 654 q 360 708 282 708 q 430 701 400 708 q 479 682 460 693 q 518 656 503 669 l 518 719 q 511 796 518 764 q 493 851 504 828 l 268 718 l 250 846 m 518 347 q 510 463 518 417 q 483 538 501 510 q 439 579 465 567 q 375 592 413 592 q 322 581 347 592 q 276 544 296 571 q 245 469 257 517 q 233 347 233 421 q 246 226 233 274 q 278 150 258 178 q 324 112 299 122 q 375 101 349 101 q 440 113 413 101 q 484 153 467 125 q 510 229 501 182 q 518 347 518 276 z "
    },
    "\xc3\x90": {
        ha: 936,
        x_min: 19,
        x_max: 867,
        o: "m 19 379 l 132 450 l 132 569 q 132 666 132 610 q 131 775 132 722 q 128 903 129 838 l 450 903 q 621 878 544 903 q 752 800 697 854 q 837 659 807 746 q 867 447 867 572 q 833 235 867 321 q 742 98 799 150 q 610 23 685 46 q 451 0 535 0 l 128 0 q 129 103 128 51 q 131 198 131 147 q 132 293 132 249 l 38 238 l 19 379 m 686 447 q 668 593 686 532 q 618 694 650 654 q 540 753 586 733 q 438 772 494 772 l 299 772 l 299 554 l 456 654 l 475 496 l 299 392 l 299 132 l 439 132 q 535 151 490 132 q 614 208 581 169 q 667 306 647 246 q 686 447 686 365 z "
    },
    "\xc5\x81": {
        ha: 704,
        x_min: 19,
        x_max: 669,
        o: "m 19 379 l 133 450 l 133 569 q 133 663 133 606 q 131 772 132 719 q 128 903 129 835 l 306 903 l 300 556 l 456 654 l 475 496 l 300 392 l 300 131 q 335 131 313 131 q 385 131 357 131 q 446 133 414 132 q 510 133 478 133 q 669 136 585 135 l 663 0 l 128 0 q 131 104 129 51 q 133 199 132 149 q 133 293 133 250 l 38 238 l 19 379 z "
    },
    "\xc5\x82": {
        ha: 424,
        x_min: 19,
        x_max: 475,
        o: "m 19 379 l 133 450 l 133 676 q 133 770 133 715 q 131 876 132 825 q 128 1000 129 936 l 306 1014 q 303 885 304 947 q 301 774 301 832 q 300 676 300 717 l 300 556 l 456 654 l 475 496 l 300 392 l 300 333 q 301 233 300 289 q 303 124 301 176 q 306 0 304 63 l 128 0 q 131 101 129 50 q 133 197 132 146 q 133 293 133 249 l 38 238 l 19 379 z "
    },
    "\xc5\xa0": {
        ha: 776,
        x_min: 92,
        x_max: 707,
        o: "m 707 251 q 678 131 707 181 q 603 48 650 81 q 498 1 557 15 q 378 -14 439 -14 q 233 0 307 -14 q 92 38 158 14 l 125 189 q 178 164 149 176 q 238 142 207 151 q 300 127 269 133 q 357 121 331 121 q 413 126 383 121 q 466 143 442 131 q 506 178 490 156 q 522 233 522 200 q 503 292 522 269 q 439 333 483 314 q 331 376 390 354 q 219 433 271 397 q 133 526 168 469 q 99 672 99 582 q 125 785 99 739 q 195 861 151 832 q 294 903 239 890 q 407 917 349 917 q 479 914 447 917 q 540 906 511 911 q 600 895 569 901 q 668 882 631 889 l 640 740 q 532 770 590 760 q 421 781 474 781 q 372 776 396 781 q 328 761 347 772 q 296 731 308 750 q 283 681 283 711 q 313 608 283 635 q 393 561 342 582 q 497 521 442 542 q 599 467 551 500 q 676 384 646 435 q 707 251 707 333 m 450 969 l 364 969 l 151 1250 l 231 1276 l 404 1115 l 583 1276 l 663 1250 l 450 969 z "
    },
    "\xc5\xa1": {
        ha: 668,
        x_min: 83,
        x_max: 606,
        o: "m 604 207 q 590 121 604 161 q 542 51 575 81 q 457 3 510 21 q 326 -14 404 -14 q 269 -12 301 -14 q 203 -5 236 -10 q 138 8 169 0 q 83 28 107 17 l 111 156 q 163 133 133 142 q 223 117 192 124 q 285 108 254 111 q 340 106 315 106 q 372 108 354 106 q 403 117 389 110 q 428 137 418 124 q 438 171 438 150 q 413 228 438 206 q 351 267 389 250 q 272 302 314 285 q 192 347 229 319 q 130 415 154 374 q 106 518 106 456 q 127 604 106 568 q 183 663 149 640 q 263 697 218 686 q 354 708 308 708 q 469 701 407 708 q 582 676 532 693 l 557 549 q 467 576 519 567 q 374 585 414 585 q 297 567 319 585 q 275 521 275 549 q 299 474 275 493 q 360 436 324 454 q 440 399 397 418 q 519 355 482 381 q 580 294 556 329 q 604 207 604 258 m 393 749 l 307 749 l 94 1029 l 174 1056 l 347 894 l 526 1056 l 606 1029 l 393 749 z "
    },
    "\xc3\x9d": {
        ha: 860,
        x_min: 28,
        x_max: 832,
        o: "m 504 329 l 508 0 l 333 0 l 338 332 l 28 903 l 233 903 l 433 494 l 647 903 l 832 903 l 504 329 m 424 961 l 353 996 l 533 1276 l 697 1215 l 424 961 z "
    },
    "\xc3\xbd": {
        ha: 800,
        x_min: -7,
        x_max: 758,
        o: "m 421 -118 q 369 -209 399 -172 q 306 -267 339 -246 q 238 -298 274 -289 q 167 -307 203 -307 q 65 -297 114 -307 q -7 -276 17 -287 l 24 -139 q 60 -153 42 -147 q 96 -162 75 -158 q 136 -167 117 -167 q 200 -151 174 -167 q 247 -112 226 -136 q 281 -58 267 -87 q 306 1 294 -28 l 47 694 l 251 694 l 397 182 l 574 694 l 758 694 l 421 -118 m 413 731 l 342 765 l 522 1046 l 686 985 l 413 731 z "
    },
    "\xc5\xbd": {
        ha: 846,
        x_min: 69,
        x_max: 776,
        o: "m 769 0 l 76 0 l 69 157 l 543 761 l 83 756 l 83 903 l 760 903 l 760 746 l 282 140 l 776 146 l 769 0 m 467 969 l 381 969 l 168 1250 l 247 1276 l 421 1115 l 600 1276 l 679 1250 l 467 969 z "
    },
    "\xc5\xbe": {
        ha: 658,
        x_min: 50,
        x_max: 604,
        o: "m 597 0 l 56 0 l 50 122 l 386 564 l 69 560 l 69 694 l 589 694 l 589 569 l 251 128 l 604 132 l 597 0 m 375 749 l 289 749 l 76 1029 l 156 1056 l 329 894 l 508 1056 l 588 1029 l 375 749 z "
    },
    "\xc3\x9e": {
        ha: 801,
        x_min: 125,
        x_max: 732,
        o: "m 301 904 l 301 818 q 301 760 301 786 q 299 735 300 733 l 415 735 q 535 724 478 735 q 635 683 592 713 q 706 601 679 653 q 732 467 732 549 q 708 349 732 400 q 641 265 683 299 q 540 215 599 232 q 415 199 482 199 l 297 199 l 301 0 l 125 0 q 128 128 126 65 q 130 238 129 181 q 131 333 131 294 l 131 569 l 125 903 l 301 904 m 299 331 l 414 331 q 526 363 489 331 q 563 467 563 396 q 551 533 563 507 q 519 575 539 560 q 472 597 499 590 q 414 603 444 603 l 299 603 l 299 331 z "
    },
    "\xc3\xbe": {
        ha: 819,
        x_min: 118,
        x_max: 757,
        o: "m 757 343 q 735 199 757 264 q 676 86 714 133 q 587 13 639 39 q 474 -14 535 -14 q 397 -7 431 -14 q 339 8 363 0 q 289 29 311 18 l 293 -328 l 118 -333 q 121 -211 119 -271 q 123 -104 122 -160 q 124 -7 124 -49 l 124 681 q 123 775 124 721 q 121 879 122 829 q 118 1000 119 938 l 292 1014 l 289 636 q 343 672 314 657 q 403 697 368 686 q 479 708 438 708 q 693 613 629 708 q 757 343 757 517 m 588 343 q 543 519 588 463 q 410 576 499 576 q 365 570 386 576 q 326 557 343 564 q 290 536 307 549 l 290 138 q 329 128 308 133 q 370 120 347 124 q 418 117 393 117 q 480 128 450 117 q 534 167 510 140 q 573 236 558 193 q 588 343 588 279 z "
    },
    "\xe2\x89\xa5": {
        ha: 1228,
        x_min: 208,
        x_max: 1158,
        o: "m 208 968 l 1158 440 l 208 -87 l 208 968 z "
    },
    "\xcb\x9d": {
        ha: 761,
        x_min: 63,
        x_max: 699,
        o: "m 133 731 l 63 765 l 243 1046 l 407 985 l 133 731 m 425 731 l 354 765 l 535 1046 l 699 985 l 425 731 z "
    },
    "\xcb\x99": {
        ha: 385,
        x_min: 63,
        x_max: 322,
        o: "m 322 906 q 292 815 322 846 q 193 785 263 785 q 95 813 128 785 q 63 906 63 842 q 94 998 63 969 q 193 1026 126 1026 q 294 996 265 1026 q 322 906 322 965 z "
    },
    "\xef\xa3\xbf": {
        ha: 4150,
        x_min: 0,
        x_max: 4150,
        o: "m 4150 904 l 4150 0 l 0 0 l 0 904 l 4150 904 m 640 542 l 640 390 q 661 337 640 353 q 707 321 682 321 q 742 326 726 321 q 769 340 757 332 q 792 355 782 347 q 807 367 801 363 l 807 321 q 786 272 807 288 q 740 251 765 257 q 672 250 711 246 l 672 210 q 764 210 724 201 q 826 241 799 217 q 854 321 854 265 l 854 531 q 844 576 854 561 q 807 592 833 592 q 760 585 781 592 q 738 576 749 581 l 738 547 l 807 542 l 807 411 q 778 392 793 400 q 752 378 765 385 q 728 371 739 371 q 688 418 688 371 l 688 531 q 638 592 688 592 q 617 591 625 592 q 603 589 608 590 q 592 586 597 588 l 592 547 l 640 542 m 1113 453 q 1103 406 1113 422 q 1080 381 1093 389 q 1051 372 1067 374 q 1022 371 1035 371 l 983 371 l 983 503 q 1015 522 1000 514 q 1045 535 1029 529 q 1074 542 1061 542 q 1108 516 1103 542 q 1113 453 1113 490 m 983 254 l 983 326 l 1022 326 q 1071 331 1046 326 q 1116 350 1096 336 q 1149 390 1136 364 q 1163 458 1163 417 q 1156 529 1163 503 q 1140 569 1150 556 q 1117 588 1131 583 q 1089 592 1104 592 q 1047 585 1065 592 q 1014 569 1029 578 q 983 547 997 560 q 968 581 983 569 q 932 592 953 592 q 911 591 919 592 q 897 589 903 590 q 888 586 892 588 l 888 547 l 938 542 l 938 254 l 888 250 l 888 210 l 1022 210 l 1022 250 l 983 254 m 1651 683 q 1686 649 1651 649 q 1708 658 1697 649 q 1719 683 1719 667 q 1713 704 1719 696 q 1686 713 1707 713 q 1661 704 1671 713 q 1651 683 1651 696 m 1321 550 q 1367 533 1350 550 q 1385 479 1385 515 l 1254 479 q 1272 530 1254 510 q 1321 550 1290 550 m 1321 596 q 1275 590 1297 596 q 1235 567 1253 583 q 1208 526 1218 551 q 1197 464 1197 501 q 1208 396 1197 424 q 1238 351 1219 368 q 1282 328 1257 335 q 1335 321 1307 321 q 1368 323 1350 321 q 1401 328 1386 325 q 1438 333 1419 331 l 1432 378 q 1399 374 1415 376 q 1368 370 1383 371 q 1340 369 1353 369 q 1315 371 1329 369 q 1288 379 1300 372 q 1265 400 1275 386 q 1254 440 1256 414 l 1436 440 q 1431 518 1440 483 q 1398 572 1422 547 q 1321 596 1374 596 m 1868 372 l 1868 506 q 1907 528 1882 514 q 1951 542 1932 542 q 1974 535 1961 542 q 1986 503 1986 528 l 1986 326 l 2076 326 l 2076 367 l 2033 372 l 2033 526 q 2013 574 2033 557 q 1969 592 1993 592 q 1931 585 1949 592 q 1899 569 1913 578 q 1868 547 1883 560 q 1853 581 1868 569 q 1817 592 1839 592 q 1782 589 1796 592 q 1772 586 1776 588 l 1772 547 l 1822 542 l 1822 372 l 1772 367 l 1772 326 l 1907 326 l 1907 367 l 1868 372 m 2146 683 q 2156 658 2146 667 q 2178 649 2167 649 q 2213 683 2213 649 q 2206 704 2213 696 q 2178 713 2200 713 q 2156 704 2167 713 q 2146 683 2146 696 m 2197 372 l 2197 542 q 2183 581 2197 571 q 2146 592 2169 592 q 2131 591 2139 592 q 2117 589 2124 590 q 2100 586 2108 588 l 2106 542 l 2150 547 l 2150 372 l 2100 367 l 2100 326 l 2243 326 l 2243 367 l 2197 372 m 2275 390 q 2294 339 2275 357 q 2343 321 2313 321 q 2373 322 2358 321 q 2400 326 2388 324 q 2428 332 2415 329 l 2424 374 q 2401 372 2413 374 q 2381 370 2392 371 q 2361 369 2371 369 q 2353 370 2360 369 q 2340 374 2346 371 q 2328 382 2333 376 q 2322 399 2322 388 l 2322 542 l 2422 547 l 2422 586 l 2328 586 l 2328 656 l 2282 656 l 2269 586 l 2236 576 l 2236 547 l 2275 542 l 2275 390 m 2494 683 q 2529 649 2494 649 q 2551 658 2540 649 q 2563 683 2563 667 q 2555 704 2563 696 q 2529 713 2547 713 q 2505 704 2515 713 q 2494 683 2494 696 m 2699 367 q 2674 374 2686 367 q 2663 401 2663 382 q 2681 429 2663 419 q 2721 444 2699 439 q 2778 453 2746 450 l 2778 396 q 2744 377 2765 388 q 2699 367 2724 367 m 2831 321 q 2854 324 2840 321 q 2865 326 2860 325 l 2861 371 l 2825 367 l 2825 485 q 2823 525 2825 506 q 2811 559 2821 544 q 2781 583 2801 574 q 2722 592 2760 592 q 2691 591 2707 592 q 2660 588 2675 590 q 2626 583 2643 585 l 2629 539 q 2660 543 2644 540 q 2689 547 2674 546 q 2717 547 2704 547 q 2766 534 2754 547 q 2778 492 2778 521 q 2736 489 2764 492 q 2680 477 2708 486 q 2631 449 2651 468 q 2610 396 2610 429 q 2633 340 2610 358 q 2694 321 2656 321 q 2729 326 2714 321 q 2756 339 2744 332 q 2778 357 2769 347 q 2785 339 2779 347 q 2801 326 2790 332 q 2831 321 2811 321 m 3115 683 q 3150 649 3115 649 q 3174 658 3163 649 q 3185 683 3185 667 q 3176 704 3185 696 q 3150 713 3167 713 q 3126 704 3138 713 q 3115 683 3115 696 m 3326 326 l 3383 326 l 3493 536 q 3490 577 3507 563 q 3447 592 3474 592 q 3431 590 3440 592 q 3413 586 3421 589 q 3392 581 3403 583 l 3392 547 l 3439 547 l 3360 386 l 3313 544 q 3293 583 3304 574 q 3257 592 3282 592 q 3238 590 3249 592 q 3218 586 3228 589 q 3194 581 3207 583 l 3200 542 l 3257 547 l 3326 326 m 2546 372 l 2546 542 q 2532 581 2546 571 q 2494 592 2518 592 q 2480 591 2488 592 q 2465 589 2472 590 q 2449 586 2457 588 l 2454 542 l 2499 547 l 2499 372 l 2449 367 l 2449 326 l 2592 326 l 2592 367 l 2546 372 m 1704 372 l 1704 542 q 1690 581 1704 571 q 1653 592 1676 592 q 1638 591 1646 592 q 1624 589 1631 590 q 1607 586 1615 588 l 1613 542 l 1657 547 l 1657 372 l 1607 367 l 1607 326 l 1750 326 l 1750 367 l 1704 372 m 2890 390 q 2909 339 2890 357 q 2958 321 2928 321 q 2988 322 2974 321 q 3015 326 3003 324 q 3043 332 3031 329 l 3039 374 q 3017 372 3028 374 q 2997 370 3007 371 q 2976 369 2986 369 q 2968 370 2975 369 q 2955 374 2961 371 q 2943 382 2949 376 q 2938 399 2938 388 l 2938 542 l 3038 547 l 3038 586 l 2943 586 l 2943 656 l 2897 656 l 2885 586 l 2851 576 l 2851 547 l 2890 542 l 2890 390 m 3168 372 l 3168 542 q 3154 581 3168 571 q 3117 592 3140 592 q 3102 591 3110 592 q 3088 589 3094 590 q 3071 586 3079 588 l 3076 542 l 3121 547 l 3121 372 l 3071 367 l 3071 326 l 3214 326 l 3214 367 l 3168 372 m 422 390 q 441 339 422 357 q 490 321 460 321 q 520 322 506 321 q 547 326 535 324 q 575 332 563 329 l 571 374 q 549 372 560 374 q 528 370 539 371 q 508 369 518 369 q 500 370 507 369 q 487 374 493 371 q 475 382 481 376 q 469 399 469 388 l 469 542 l 569 547 l 569 586 l 475 586 l 475 656 l 429 656 l 417 586 l 383 576 l 383 547 l 422 542 l 422 390 m 3629 550 q 3676 533 3658 550 q 3693 479 3693 515 l 3563 479 q 3581 530 3563 510 q 3629 550 3599 550 m 3629 596 q 3583 590 3606 596 q 3544 567 3561 583 q 3516 526 3526 551 q 3506 464 3506 501 q 3517 396 3506 424 q 3547 351 3528 368 q 3590 328 3565 335 q 3643 321 3615 321 q 3676 323 3658 321 q 3710 328 3694 325 q 3746 333 3728 331 l 3740 378 q 3707 374 3724 376 q 3676 370 3692 371 q 3649 369 3661 369 q 3623 371 3638 369 q 3596 379 3608 372 q 3574 400 3583 386 q 3563 440 3564 414 l 3744 440 q 3739 518 3749 483 q 3706 572 3731 547 q 3629 596 3682 596 z "
    },
    "\xc2\xb2": {
        ha: 671,
        x_min: 63,
        x_max: 546,
        o: "m 538 360 l 65 360 q 63 379 64 369 q 63 400 63 389 q 86 522 63 474 q 144 603 110 569 q 220 660 179 636 q 296 707 261 683 q 354 758 331 731 q 378 829 378 786 q 254 944 378 944 q 179 925 213 944 q 125 889 146 906 l 79 992 q 124 1024 99 1010 q 179 1047 150 1038 q 238 1060 208 1056 q 293 1065 267 1065 q 383 1051 342 1065 q 456 1008 425 1036 q 506 940 488 981 q 524 844 524 899 q 503 740 524 782 q 451 668 482 697 q 383 618 419 639 q 315 578 347 597 q 261 538 283 558 q 238 486 239 517 l 546 493 l 538 360 z "
    },
    "\xe2\x88\xab": {
        ha: 1372,
        x_min: 208,
        x_max: 1164,
        o: "m 208 904 l 1164 904 l 1164 0 l 208 0 l 208 904 z "
    },
    "\xe2\x97\x8a": {
        ha: 1267,
        x_min: 125,
        x_max: 1142,
        o: "m 125 435 l 633 953 l 1142 435 l 633 -82 l 125 435 z "
    },
    "\xe2\x88\x86": {
        ha: 1194,
        x_min: 69,
        x_max: 1125,
        o: "m 69 0 l 597 950 l 1125 0 l 69 0 z "
    },
    "\xcf\x80": {
        ha: 958,
        x_min: 101,
        x_max: 874,
        o: "m 419 242 q 403 104 419 163 q 365 7 386 46 q 311 -69 340 -39 l 175 13 q 213 69 196 38 q 239 137 228 97 q 250 226 250 176 l 250 543 l 101 544 l 101 694 l 874 694 l 864 540 l 733 540 l 733 194 q 738 153 733 168 q 750 131 742 138 q 772 122 758 124 q 806 119 786 119 q 818 120 811 119 q 832 122 825 121 q 850 124 840 124 l 857 3 q 801 -10 838 0 q 699 -21 764 -21 q 606 16 635 -21 q 576 99 576 53 l 578 543 l 419 543 l 419 242 z "
    },
    "\xe2\x88\x8f": {
        ha: 1664,
        x_min: 139,
        x_max: 1525,
        o: "m 139 361 q 194 631 139 504 q 342 851 249 757 q 563 999 436 944 q 832 1054 689 1054 q 1101 999 975 1054 q 1322 851 1228 944 q 1470 631 1415 757 q 1525 361 1525 504 q 1470 92 1525 218 q 1322 -128 1415 -35 q 1101 -277 1228 -222 q 832 -332 975 -332 q 563 -277 689 -332 q 342 -128 436 -222 q 194 92 249 -35 q 139 361 139 218 z "
    },
    "\xce\xa9": {
        ha: 1803,
        x_min: 208,
        x_max: 1594,
        o: "m 901 -332 q 592 -277 722 -332 q 376 -128 461 -222 q 249 92 290 -35 q 208 361 208 218 q 249 631 208 504 q 376 851 290 757 q 592 999 461 944 q 901 1054 722 1054 q 1211 999 1081 1054 q 1427 851 1342 944 q 1553 631 1513 757 q 1594 361 1594 504 q 1553 92 1594 218 q 1427 -128 1513 -35 q 1211 -277 1342 -222 q 901 -332 1081 -332 z "
    },
    "\xe2\x88\x91": {
        ha: 1213,
        x_min: 139,
        x_max: 1074,
        o: "m 139 450 q 176 633 139 547 q 276 781 213 718 q 424 881 339 844 q 606 918 508 918 q 788 881 703 918 q 937 781 874 844 q 1037 633 1000 718 q 1074 450 1074 547 q 1037 268 1074 353 q 937 120 1000 183 q 788 20 874 57 q 606 -17 703 -17 q 424 20 508 -17 q 276 120 339 57 q 176 268 213 183 q 139 450 139 353 z "
    },
    "\xcb\x98": {
        ha: 636,
        x_min: 79,
        x_max: 554,
        o: "m 317 768 q 141 828 203 768 q 79 990 79 889 l 161 1001 q 217 898 174 935 q 317 861 260 861 q 417 898 374 861 q 472 1001 460 935 l 554 990 q 492 828 554 889 q 317 768 431 768 z "
    },
    "\xcb\x9b": {
        ha: 396,
        x_min: 63,
        x_max: 333,
        o: "m 315 44 q 324 26 319 35 q 330 13 326 19 q 332 7 333 7 q 258 -74 282 -24 q 235 -176 235 -125 q 253 -260 235 -225 l 85 -301 q 63 -194 63 -244 q 81 -109 63 -147 q 134 -42 100 -71 q 215 9 168 -12 q 315 44 261 31 z "
    },
    "\xe2\x89\x88": {
        ha: 944,
        x_min: 139,
        x_max: 806,
        o: "m 806 532 q 765 510 789 519 q 717 494 746 501 q 650 486 688 486 q 551 501 604 486 q 449 535 499 517 q 356 568 399 553 q 288 583 313 583 q 223 576 250 583 q 176 558 196 568 q 139 532 154 547 l 139 661 q 176 686 154 675 q 223 703 196 696 q 288 711 250 711 q 378 695 326 711 q 483 659 431 679 q 580 623 535 639 q 650 607 625 607 q 717 615 688 607 q 765 633 746 624 q 806 658 789 644 l 806 532 m 806 267 q 765 244 789 254 q 717 228 746 236 q 650 221 688 221 q 551 236 604 221 q 449 269 499 251 q 356 303 399 288 q 288 318 313 318 q 223 310 250 318 q 176 293 196 303 q 139 267 154 282 l 139 396 q 176 421 154 410 q 223 438 196 431 q 288 446 250 446 q 378 430 326 446 q 483 394 431 414 q 580 358 535 374 q 650 342 625 342 q 718 350 689 342 q 767 368 747 358 q 806 393 790 379 l 806 267 z "
    },
    "\xc2\xa6": {
        ha: 778,
        x_min: 338,
        x_max: 440,
        o: "m 338 -332 l 338 329 l 440 329 l 440 -332 l 338 -332 m 338 428 l 338 1054 l 440 1054 l 440 428 l 338 428 z "
    },
    "\xc2\xac": {
        ha: 1194,
        x_min: 69,
        x_max: 1125,
        o: "m 1125 904 l 597 -46 l 69 904 l 1125 904 z "
    },
    "\xe2\x88\x9a": {
        ha: 1807,
        x_min: 208,
        x_max: 1599,
        o: "m 208 904 l 1599 904 l 1599 0 l 208 0 l 208 904 z "
    },
    "#": {
        ha: 944,
        x_min: 139,
        x_max: 806,
        o: "m 692 561 l 646 367 l 806 367 l 806 242 l 615 242 l 569 44 l 457 75 l 496 242 l 342 242 l 296 44 l 183 75 l 222 242 l 139 242 l 139 367 l 253 367 l 299 561 l 139 561 l 139 686 l 328 686 l 371 865 l 486 849 l 447 686 l 601 686 l 644 865 l 760 849 l 721 686 l 806 686 l 806 561 l 692 561 m 372 367 l 526 367 l 572 561 l 418 561 l 372 367 z "
    },
    "\xe2\x88\x9e": {
        ha: 1063,
        x_min: 69,
        x_max: 993,
        o: "m 883 767 l 757 447 l 694 447 l 568 763 l 556 397 l 474 397 q 478 471 476 435 q 481 533 479 501 q 482 585 482 565 l 496 903 l 610 903 l 736 594 l 857 903 l 969 903 l 986 585 q 988 533 988 565 q 990 471 989 501 q 993 397 992 435 l 894 397 l 883 767 m 414 544 q 398 477 414 506 q 356 431 382 449 q 297 404 331 413 q 229 396 264 396 q 148 403 189 396 q 69 425 107 411 l 89 510 q 151 483 115 494 q 218 471 188 471 q 249 474 233 471 q 278 483 265 476 q 301 503 292 490 q 310 535 310 515 q 263 589 310 569 q 203 613 236 600 q 141 645 169 625 q 93 697 113 665 q 74 778 74 728 q 88 841 74 815 q 127 883 103 867 q 182 908 151 900 q 244 915 213 915 q 285 914 268 915 q 319 910 303 913 q 353 903 336 907 q 392 896 369 900 l 375 817 q 253 840 317 840 q 201 829 225 840 q 176 783 176 818 q 193 744 176 758 q 238 717 210 729 q 296 694 265 706 q 353 665 326 683 q 397 617 379 646 q 414 544 414 589 z "
    },
    "\xc2\xb9": {
        ha: 488,
        x_min: 56,
        x_max: 363,
        o: "m 225 917 l 86 872 l 56 1006 l 363 1083 l 363 358 l 214 358 l 225 692 l 225 917 z "
    },
    "\xc2\xb3": {
        ha: 668,
        x_min: 63,
        x_max: 543,
        o: "m 543 568 q 522 467 543 508 q 465 399 501 425 q 381 360 429 372 q 279 347 333 347 q 226 350 256 347 q 168 359 197 353 q 111 374 139 365 q 63 393 83 382 l 85 496 q 174 463 125 476 q 265 450 222 450 q 307 456 285 450 q 348 476 329 463 q 378 512 367 489 q 390 568 390 535 q 363 649 390 624 q 283 674 336 674 l 199 674 l 201 776 l 283 776 q 341 801 325 776 q 357 865 357 825 q 332 932 357 904 q 260 960 307 960 q 185 949 225 960 q 114 921 146 939 l 90 1019 q 177 1052 128 1039 q 269 1065 226 1065 q 358 1056 315 1065 q 435 1026 401 1047 q 490 969 469 1004 q 511 879 511 933 q 492 799 511 835 q 433 742 474 763 q 517 674 492 721 q 543 568 543 626 z "
    },
    "\xe2\x89\xa0": {
        ha: 944,
        x_min: 139,
        x_max: 806,
        o: "m 576 533 l 511 394 l 806 394 l 806 269 l 451 269 l 363 83 l 267 131 l 332 269 l 139 269 l 139 394 l 392 394 l 457 533 l 139 533 l 139 658 l 517 658 l 593 818 l 692 775 l 636 658 l 806 658 l 806 533 l 576 533 z "
    },
    "\xc2\xb1": {
        ha: 858,
        x_min: 96,
        x_max: 761,
        o: "m 488 451 l 488 176 l 369 176 l 369 451 l 97 451 l 97 569 l 369 569 l 369 839 l 488 839 l 488 569 l 761 569 l 761 451 l 488 451 m 760 118 l 760 0 l 96 0 l 96 118 l 760 118 z "
    },
    $: {
        ha: 776,
        x_min: 92,
        x_max: 707,
        o: "m 707 251 q 639 76 707 139 q 447 -7 571 13 l 447 -178 l 329 -178 l 329 -14 q 192 6 251 -11 q 92 38 132 22 l 125 189 q 204 156 164 171 q 279 132 239 143 q 357 121 319 121 q 419 126 389 121 q 472 146 449 132 q 508 181 494 160 q 522 233 522 203 q 491 296 522 272 q 413 339 460 319 q 310 381 365 358 q 208 438 256 403 q 130 529 161 474 q 99 672 99 585 q 117 768 99 726 q 166 839 135 810 q 240 885 197 868 q 329 911 282 903 l 329 1065 l 447 1074 l 447 915 q 580 900 526 913 q 668 882 633 888 l 640 740 q 574 761 610 753 q 504 774 543 768 q 421 781 465 781 q 370 776 394 781 q 326 760 346 772 q 295 729 307 749 q 283 681 283 710 q 315 610 283 636 q 393 565 346 585 q 495 524 440 544 q 597 471 550 504 q 676 386 644 438 q 707 251 707 335 z "
    },
    "!": {
        ha: 413,
        x_min: 100,
        x_max: 313,
        o: "m 272 233 l 142 233 l 117 903 l 297 903 l 272 233 m 313 74 q 285 6 313 29 q 206 -17 257 -17 q 128 4 157 -17 q 100 74 100 25 q 128 143 100 122 q 206 164 156 164 q 313 74 313 164 z "
    },
    '"': {
        ha: 531,
        x_min: 83,
        x_max: 447,
        o: "m 422 651 l 318 651 l 293 1007 l 447 1007 l 422 651 m 211 651 l 107 651 l 83 1007 l 236 1007 l 211 651 z "
    },
    "\xe2\x80\x99": {
        ha: 419,
        x_min: 97,
        x_max: 301,
        o: "m 301 829 q 283 722 301 772 q 243 632 265 671 q 183 549 218 586 l 115 579 q 136 622 126 597 q 151 674 144 643 q 157 744 157 706 q 148 810 157 779 q 127 867 139 840 q 106 915 115 893 q 97 953 97 936 q 108 978 97 968 q 143 993 118 988 l 268 1018 q 285 961 278 992 q 297 901 292 935 q 301 829 301 867 z "
    },
    "%": {
        ha: 1124,
        x_min: 83,
        x_max: 1040,
        o: "m 1040 246 q 989 58 1040 117 q 838 0 938 0 q 687 58 738 0 q 636 246 636 117 q 686 433 636 375 q 838 490 736 490 q 990 433 939 490 q 1040 246 1040 375 m 926 246 q 905 367 926 332 q 838 403 883 403 q 771 367 790 403 q 751 246 751 332 q 772 124 751 160 q 838 88 792 88 q 906 124 886 88 q 926 246 926 160 m 336 -14 l 254 36 l 793 925 l 872 879 l 336 -14 m 486 657 q 435 470 486 528 q 283 413 383 413 q 133 470 183 413 q 83 657 83 528 q 133 844 83 786 q 285 903 183 903 q 436 844 386 903 q 486 657 486 786 m 372 657 q 351 779 372 743 q 285 815 331 815 q 217 779 238 815 q 197 657 197 743 q 217 535 197 571 q 283 500 238 500 q 352 535 332 500 q 372 657 372 571 z "
    },
    "&": {
        ha: 899,
        x_min: 49,
        x_max: 913,
        o: "m 704 -10 l 629 83 q 494 8 567 29 q 350 -14 422 -14 q 213 4 271 -14 q 119 54 156 22 q 66 131 83 86 q 49 229 49 175 q 65 317 49 278 q 108 388 81 357 q 170 441 135 418 q 244 481 206 464 q 172 586 196 532 q 149 693 149 640 q 165 780 149 739 q 214 851 182 821 q 292 899 246 881 q 396 917 338 917 q 484 910 447 917 q 546 893 521 903 q 594 868 575 882 l 549 750 q 499 772 524 763 q 449 788 476 781 q 394 794 422 794 q 324 773 353 794 q 296 707 296 751 q 318 634 296 671 q 365 571 340 597 l 633 293 q 655 424 649 349 q 661 614 661 499 l 818 622 q 810 485 818 547 q 790 372 803 424 q 759 278 776 321 q 722 200 742 236 l 913 0 l 704 -10 m 304 419 q 276 394 292 410 q 249 357 261 378 q 227 309 236 336 q 218 250 218 282 q 232 188 218 215 q 269 141 246 160 q 324 113 293 122 q 390 103 356 103 q 474 117 432 103 q 553 163 517 132 l 304 419 z "
    }
}, x = "Arrival", a = 1056, _ = -333, i = -123, n = 20, o = {
    yMin: -241,
    xMin: -101,
    yMax: 919,
    xMax: 2988
}, h = 1e3, z = {
    format: 0,
    copyright: "Copyright (c) Keith Tam Design, 2005. All rights reserved.",
    fontFamily: "Arrival",
    fontSubfamily: "Medium",
    uniqueID: "KeithTamDesign: Arrival Medium: 2005",
    fullName: "Arrival Medium",
    version: "Version 1.000;PS 001.000;hotconv 1.0.38",
    postScriptName: "Arrival-Medium",
    manufacturer: "Keith Tam Design",
    designer: "Keith Chi-hang Tam (Type Initiative)",
    manufacturerURL: "http://vllg.com",
    designerURL: "http://keithtam.net",
    preferredFamily: "Arrival",
    preferredSubfamily: "Medium",
    compatibleFullName: "Arrival Medium"
}, e = "normal", r = "normal", t = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: i,
    underlineThickness: n,
    boundingBox: o,
    resolution: h,
    original_font_information: z,
    cssFontWeight: e,
    cssFontStyle: r
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lEQhz"], null, "parcelRequire79a8")

//# sourceMappingURL=Arrival-KLIH5LTH.1df2e5a6.js.map
