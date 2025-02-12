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
})({"lVFTV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "a66332673db3c93b";
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

},{}],"51GIV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>o);
parcelHelpers.export(exports, "cssFontStyle", ()=>r);
parcelHelpers.export(exports, "cssFontWeight", ()=>t);
parcelHelpers.export(exports, "default", ()=>s);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>e);
parcelHelpers.export(exports, "resolution", ()=>h);
parcelHelpers.export(exports, "underlinePosition", ()=>n);
parcelHelpers.export(exports, "underlineThickness", ()=>i);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 383 968 b 718 475 544 968 718 839 b 383 -18 718 113 544 -18 b 47 475 221 -18 47 113 b 383 968 47 839 221 968 m 383 32 b 667 475 561 32 667 199 b 383 919 667 753 561 919 b 99 475 204 919 99 753 b 383 32 99 199 204 32 "
    },
    1: {
        ha: 440,
        x_min: 0,
        x_max: 0,
        o: "m 268 0 l 217 0 l 217 819 l 75 819 l 75 861 b 224 964 163 864 217 892 l 268 964 "
    },
    2: {
        ha: 735,
        x_min: 0,
        x_max: 0,
        o: "m 74 650 b 386 968 74 819 182 968 b 681 710 589 968 681 839 b 381 367 681 556 588 479 b 108 51 210 274 118 197 b 681 51 157 51 681 51 l 681 0 l 56 0 l 56 26 b 357 413 56 233 192 324 b 629 710 557 521 629 582 b 386 918 629 806 565 918 b 125 650 226 918 126 808 l 74 650 "
    },
    3: {
        ha: 750,
        x_min: 0,
        x_max: 0,
        o: "m 694 264 b 368 -17 694 129 592 -17 b 44 281 165 -17 50 93 l 96 281 b 368 32 101 149 167 32 b 643 264 558 32 643 150 b 586 415 643 328 624 379 b 389 479 539 460 465 479 l 307 479 l 307 529 l 372 529 b 554 590 461 529 521 558 b 606 726 589 622 606 668 b 375 919 606 846 519 919 b 128 686 240 919 129 840 l 76 686 b 375 968 76 833 176 968 b 657 726 583 968 657 843 b 507 508 657 615 597 540 b 694 264 643 471 694 375 "
    },
    4: {
        ha: 743,
        x_min: 0,
        x_max: 0,
        o: "m 567 0 l 514 0 l 514 247 l 39 247 l 39 299 l 514 964 l 567 964 l 567 299 l 701 299 l 701 247 l 567 247 m 514 878 l 101 299 l 514 299 "
    },
    5: {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 676 301 b 358 -17 676 117 543 -17 b 43 251 178 -17 56 94 l 96 251 b 358 33 107 125 206 33 b 625 301 515 33 625 144 b 369 568 625 458 521 568 b 129 438 274 568 185 519 l 82 456 l 147 964 l 629 964 l 629 913 l 193 913 l 143 522 b 369 618 199 582 288 618 b 676 301 547 618 676 485 "
    },
    6: {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 696 301 b 388 -17 696 114 569 -17 b 54 424 221 -17 54 100 b 399 968 54 769 179 968 b 678 733 547 968 650 879 l 626 733 b 399 918 601 850 519 918 b 104 417 214 918 106 736 b 393 619 150 535 267 619 b 696 301 571 619 696 489 m 644 301 b 393 569 644 461 543 569 b 128 289 243 569 128 449 b 388 33 128 160 232 33 b 644 301 539 33 644 143 "
    },
    7: {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 688 907 b 265 0 453 706 297 371 l 213 0 b 371 575 231 207 285 404 b 624 913 435 703 531 835 l 43 913 l 43 964 l 688 964 "
    },
    8: {
        ha: 735,
        x_min: 0,
        x_max: 0,
        o: "m 692 263 b 369 -18 692 101 556 -18 b 46 263 182 -18 46 101 b 249 518 46 388 125 482 b 88 729 153 553 88 631 b 369 968 88 868 206 968 b 650 729 532 968 650 868 b 489 518 650 631 586 553 b 692 263 613 482 692 388 m 369 542 b 599 729 501 542 599 621 b 369 918 599 839 501 918 b 139 729 236 918 139 839 b 369 542 139 621 236 542 m 640 263 b 369 492 640 397 529 492 b 97 263 208 492 97 397 b 369 33 97 129 213 33 b 640 263 526 33 640 129 "
    },
    9: {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 685 506 b 351 -17 685 74 503 -17 b 63 214 199 -17 86 63 l 115 214 b 351 33 136 97 225 33 b 633 536 581 33 638 285 b 358 332 601 424 504 332 b 44 650 176 332 44 465 b 353 968 44 838 171 968 b 685 506 513 968 685 864 m 608 651 b 353 918 608 796 510 918 b 96 650 201 918 96 808 b 358 382 96 493 204 382 b 608 651 519 382 608 517 "
    },
    "\0": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xc3\xb0": {
        ha: 779,
        x_min: 0,
        x_max: 0,
        o: "m 736 339 b 388 -25 736 139 579 -25 b 39 339 196 -25 39 139 b 388 707 39 542 196 707 b 621 608 479 707 560 669 b 375 903 564 722 474 825 l 281 832 l 236 858 l 333 932 b 215 1000 294 960 254 983 l 261 1033 b 376 964 300 1015 339 992 l 472 1036 l 517 1008 l 417 933 b 574 774 475 886 529 832 b 736 339 679 636 736 486 m 685 339 b 388 660 685 515 551 660 b 89 339 224 660 89 515 b 388 22 89 164 224 22 b 685 339 551 22 685 164 "
    },
    "\xc5\x81": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 756 0 l 150 0 l 150 435 l 21 358 l 21 418 l 150 496 l 150 964 l 201 964 b 201 526 201 964 201 749 l 418 657 l 418 596 l 201 465 b 201 51 201 264 201 74 b 756 51 249 51 756 51 "
    },
    "\xc5\x82": {
        ha: 349,
        x_min: 0,
        x_max: 0,
        o: "m 201 467 l 201 0 l 150 0 l 150 435 l 21 358 l 21 418 l 150 496 l 150 964 l 201 964 l 201 526 l 329 604 l 329 543 "
    },
    "\xc5\xa0": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 449 1064 l 386 1064 l 274 1201 l 336 1201 l 418 1099 l 500 1201 l 561 1201 m 413 989 b 736 704 636 989 736 846 l 685 704 b 413 939 685 846 578 939 b 138 732 247 939 138 856 b 424 528 138 626 218 569 b 765 258 640 483 765 425 b 408 -18 765 90 625 -18 b 60 293 240 -18 60 81 l 111 293 b 408 35 111 115 261 35 b 714 258 597 35 714 119 b 414 478 714 378 639 432 b 86 732 243 511 86 567 b 413 989 86 886 217 989 "
    },
    "\xc5\xa1": {
        ha: 710,
        x_min: 0,
        x_max: 0,
        o: "m 400 811 l 338 811 l 225 949 l 288 949 l 369 846 l 451 949 l 513 949 m 664 203 b 614 67 665 153 649 103 b 378 -17 563 14 478 -17 b 46 208 197 -17 69 63 l 97 208 b 376 32 122 93 225 32 b 576 103 463 32 535 60 b 611 201 601 129 614 164 b 363 358 608 289 538 333 b 83 539 239 376 86 397 b 354 733 83 636 175 733 b 647 533 513 733 617 663 l 594 533 b 356 685 565 629 483 685 b 136 539 226 685 135 622 b 371 408 138 457 213 431 b 664 203 519 386 657 347 "
    },
    "\xc3\x9d": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 428 1038 l 369 1038 l 486 1181 l 553 1181 m 406 0 l 354 0 l 354 417 l 8 964 l 69 964 l 379 472 l 381 472 l 689 964 l 750 964 l 406 417 "
    },
    "\xc3\xbd": {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 351 824 l 294 824 l 410 965 l 476 965 m 299 -104 b 21 -268 247 -240 147 -292 l 21 -219 b 250 -86 132 -236 207 -201 l 283 1 l 14 715 l 69 715 l 310 74 l 553 715 l 607 715 "
    },
    "\xc3\x9e": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 789 517 b 507 250 789 360 672 250 l 168 250 l 168 0 l 117 0 l 117 964 l 168 964 l 168 785 l 503 785 b 789 517 679 785 789 682 m 736 517 b 503 733 736 654 651 733 l 168 733 l 168 301 l 507 301 b 736 517 621 301 736 368 "
    },
    "\xc3\xbe": {
        ha: 844,
        x_min: 0,
        x_max: 0,
        o: "m 808 356 b 451 -17 808 150 649 -17 b 146 172 318 -17 204 60 l 146 -318 l 94 -318 l 94 964 l 146 964 l 146 542 b 451 733 204 656 318 733 b 808 356 649 733 808 564 m 757 356 b 451 681 757 535 619 681 b 146 356 283 681 146 535 b 451 35 146 179 283 35 b 757 356 619 35 757 179 "
    },
    "\xc5\xbd": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 421 1061 l 358 1061 l 246 1199 l 308 1199 l 390 1096 l 472 1199 l 533 1199 m 747 0 l 18 0 l 18 51 l 682 913 l 35 913 l 35 964 l 747 964 l 747 911 l 83 51 l 747 51 "
    },
    "\xc5\xbe": {
        ha: 607,
        x_min: 0,
        x_max: 0,
        o: "m 338 813 l 275 813 l 163 950 l 225 950 l 307 847 l 389 950 l 450 950 m 599 0 l 14 0 l 14 51 l 517 664 l 29 664 l 29 715 l 583 715 l 583 664 l 81 51 l 599 51 "
    },
    "\xc2\xbd": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 64 858 l 64 900 b 156 964 118 903 151 919 l 207 964 l 207 358 l 156 358 l 156 858 m 139 -17 l 83 -17 l 650 964 l 706 964 m 919 49 l 919 0 l 522 0 l 522 26 b 576 174 522 86 540 133 b 714 272 611 215 664 246 b 876 449 843 343 876 379 b 736 572 876 519 828 572 b 585 411 643 572 585 504 l 533 411 b 736 618 533 540 624 618 b 879 567 796 618 844 601 b 929 449 911 536 929 494 b 738 229 929 347 869 301 b 575 49 638 175 582 129 "
    },
    "\xc2\xbc": {
        ha: 839,
        x_min: 0,
        x_max: 0,
        o: "m 64 858 l 64 900 b 156 964 117 903 151 919 l 207 964 l 207 358 l 156 358 l 156 858 m 138 -17 l 82 -17 l 649 964 l 704 964 m 735 146 l 735 0 l 683 0 l 683 146 l 388 146 l 388 193 l 683 606 l 735 606 l 735 193 l 797 193 l 797 146 m 683 526 l 447 193 l 683 193 "
    },
    "\xc2\xb9": {
        ha: 365,
        x_min: 0,
        x_max: 0,
        o: "m 207 358 l 154 358 l 154 858 l 64 858 l 64 900 b 154 964 118 903 151 919 l 207 964 "
    },
    "\xc2\xbe": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 254 346 b 44 540 108 346 44 438 l 96 540 b 254 392 96 461 144 392 b 415 528 365 392 415 463 b 253 654 415 597 375 654 l 215 654 l 215 706 l 253 706 b 392 817 342 706 392 750 b 258 931 392 885 343 931 b 115 792 175 931 115 876 l 63 792 b 258 976 63 896 139 976 b 397 931 317 976 364 961 b 444 817 428 901 444 863 b 354 683 444 767 421 711 b 467 529 425 661 467 611 b 254 346 467 442 400 346 m 340 -17 l 285 -17 l 850 964 l 906 964 m 938 146 l 938 0 l 886 0 l 886 146 l 590 146 l 590 193 l 885 606 l 938 606 l 938 193 l 1000 193 l 1000 146 m 886 526 l 649 193 l 886 193 "
    },
    "\xc2\xb3": {
        ha: 524,
        x_min: 0,
        x_max: 0,
        o: "m 468 529 b 256 346 468 442 401 346 b 44 540 111 346 44 438 l 97 540 b 256 392 97 461 146 392 b 417 528 367 392 417 463 b 253 654 417 597 378 654 l 217 654 l 217 706 l 253 706 b 393 817 343 706 393 750 b 260 931 393 885 344 931 b 117 792 176 931 117 876 l 65 792 b 260 976 65 896 140 976 b 399 931 318 976 365 961 b 444 817 429 901 444 863 b 356 683 444 767 422 711 b 468 529 426 661 468 611 "
    },
    "\xc2\xb2": {
        ha: 515,
        x_min: 0,
        x_max: 0,
        o: "m 453 407 l 453 358 l 56 358 l 56 383 b 110 532 56 443 72 490 b 246 631 144 572 196 603 b 410 806 376 701 410 738 b 269 931 410 878 361 931 b 118 769 175 931 118 861 l 67 769 b 269 976 67 899 157 976 b 413 925 328 976 378 958 b 461 806 444 894 461 853 b 271 588 461 706 403 660 b 108 407 169 533 115 486 "
    },
    "\xc3\x97": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 646 76 l 610 39 l 333 317 l 57 39 l 21 76 l 297 353 l 21 629 l 57 665 l 333 389 l 610 665 l 646 629 l 369 353 "
    },
    " ": {
        ha: 410,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "!": {
        ha: 286,
        x_min: 0,
        x_max: 0,
        o: "m 118 964 l 169 964 l 169 249 l 118 249 m 118 129 l 169 129 l 169 0 l 118 0 "
    },
    '"': {
        ha: 324,
        x_min: 0,
        x_max: 0,
        o: "m 253 715 l 201 715 l 201 964 l 253 964 m 124 715 l 72 715 l 72 964 l 124 964 "
    },
    "#": {
        ha: 718,
        x_min: 0,
        x_max: 0,
        o: "m 501 349 l 649 349 l 640 297 l 493 297 l 458 51 l 406 51 l 442 297 l 225 297 l 189 51 l 136 51 l 172 297 l 25 297 l 33 349 l 179 349 l 218 617 l 72 617 l 79 668 l 226 668 l 263 913 l 314 913 l 278 668 l 496 668 l 531 913 l 583 913 l 547 668 l 694 668 l 688 617 l 540 617 m 271 617 l 232 349 l 449 349 l 489 617 "
    },
    $: {
        ha: 676,
        x_min: 0,
        x_max: 0,
        o: "m 360 -40 l 311 -40 l 311 63 b 42 324 149 71 39 178 l 93 324 b 311 110 93 186 199 117 l 311 476 b 63 686 171 507 63 561 b 311 903 63 807 160 894 l 311 1011 l 360 1011 l 360 903 b 606 663 518 893 606 789 l 554 663 b 360 854 554 779 469 846 l 360 518 b 551 449 453 499 511 476 b 629 293 604 411 629 361 b 360 63 629 154 517 71 m 311 854 b 114 686 206 847 114 792 b 311 528 114 608 169 563 m 578 293 b 360 465 578 386 524 429 l 360 110 b 578 293 478 118 578 176 "
    },
    "%": {
        ha: 1065,
        x_min: 0,
        x_max: 0,
        o: "m 250 944 b 464 731 367 944 464 849 b 250 518 464 613 367 518 b 38 731 132 518 38 613 b 250 944 38 849 132 944 m 297 0 l 239 0 l 767 964 l 826 964 m 815 447 b 1029 233 933 447 1029 351 b 815 21 1029 115 933 21 b 603 233 699 21 603 115 b 815 447 603 351 699 447 m 250 568 b 411 731 339 568 411 640 b 250 894 411 821 339 894 b 89 731 161 894 89 821 b 250 568 89 640 161 568 m 815 71 b 978 233 906 71 978 143 b 815 396 978 324 906 396 b 654 233 726 396 654 324 b 815 71 654 143 726 71 "
    },
    "&": {
        ha: 861,
        x_min: 0,
        x_max: 0,
        o: "m 663 133 b 365 -18 600 39 494 -18 b 44 258 190 -18 44 106 b 293 576 44 406 147 494 l 249 629 b 175 794 200 685 175 742 b 379 989 175 906 264 989 b 576 796 490 989 576 907 b 368 563 576 706 500 636 l 651 224 b 679 374 669 268 679 319 l 679 453 l 731 453 l 731 374 b 689 179 731 300 715 235 l 839 0 l 775 0 m 336 600 b 522 796 478 678 522 733 b 379 942 522 878 463 942 b 228 794 292 942 228 878 b 285 661 228 754 249 704 m 324 539 b 100 261 154 444 100 365 b 365 31 100 136 218 31 b 628 175 488 31 576 88 "
    },
    "'": {
        ha: 193,
        x_min: 0,
        x_max: 0,
        o: "m 124 715 l 72 715 l 72 964 l 124 964 "
    },
    "(": {
        ha: 306,
        x_min: 0,
        x_max: 0,
        o: "m 326 1081 b 117 451 196 910 117 688 b 326 -178 117 214 196 -7 l 269 -178 b 60 451 138 -4 60 217 b 269 1081 60 686 138 907 l 326 1081 "
    },
    ")": {
        ha: 306,
        x_min: 0,
        x_max: 0,
        o: "m 36 1081 b 246 451 169 907 246 686 b 36 -178 246 217 169 -4 l -19 -178 b 190 451 111 -7 190 214 b -19 1081 190 688 111 910 "
    },
    "*": {
        ha: 463,
        x_min: 0,
        x_max: 0,
        o: "m 269 756 l 353 615 l 313 592 l 232 733 l 151 592 l 111 615 l 194 756 l 31 754 l 31 800 l 194 799 l 111 940 l 151 963 l 232 821 l 313 963 l 353 940 l 269 799 l 433 801 l 433 754 "
    },
    "+": {
        ha: 653,
        x_min: 0,
        x_max: 0,
        o: "m 353 358 l 353 104 l 301 104 l 301 358 l 49 358 l 49 408 l 301 408 l 301 661 l 353 661 l 353 408 l 606 408 l 606 358 "
    },
    ",": {
        ha: 217,
        x_min: 0,
        x_max: 0,
        o: "m 135 129 l 135 -24 b 25 -139 135 -100 79 -139 l 25 -92 b 85 -24 63 -90 85 -64 l 85 129 "
    },
    "-": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 358 358 l 60 358 l 60 410 l 358 410 "
    },
    ".": {
        ha: 217,
        x_min: 0,
        x_max: 0,
        o: "m 135 0 l 83 0 l 83 129 l 135 129 "
    },
    "/": {
        ha: 372,
        x_min: 0,
        x_max: 0,
        o: "m 307 1033 l 360 1033 l 68 0 l 14 0 "
    },
    ":": {
        ha: 218,
        x_min: 0,
        x_max: 0,
        o: "m 136 538 l 85 538 l 85 665 l 136 665 m 136 0 l 85 0 l 85 129 l 136 129 "
    },
    ";": {
        ha: 218,
        x_min: 0,
        x_max: 0,
        o: "m 136 538 l 85 538 l 85 665 l 136 665 m 135 129 l 135 -24 b 25 -139 135 -100 79 -139 l 25 -92 b 85 -24 63 -90 85 -64 l 85 129 "
    },
    "<": {
        ha: 653,
        x_min: 0,
        x_max: 0,
        o: "m 115 382 l 594 167 l 594 111 l 56 354 l 56 411 l 594 656 l 594 600 l 115 385 "
    },
    "=": {
        ha: 624,
        x_min: 0,
        x_max: 0,
        o: "m 565 471 l 61 471 l 61 521 l 565 521 m 565 246 l 61 246 l 61 296 l 565 296 "
    },
    ">": {
        ha: 653,
        x_min: 0,
        x_max: 0,
        o: "m 540 385 l 61 600 l 61 656 l 600 411 l 600 354 l 61 111 l 61 167 l 540 382 "
    },
    "?": {
        ha: 675,
        x_min: 0,
        x_max: 0,
        o: "m 35 715 b 339 988 46 882 160 988 b 633 728 518 988 633 885 b 483 494 633 599 557 549 b 343 260 411 440 343 382 l 343 249 l 292 249 l 292 260 b 453 529 292 408 376 472 b 581 729 521 581 581 626 b 339 940 581 857 489 940 b 88 715 190 940 96 853 l 35 715 m 292 129 l 343 129 l 343 0 l 292 0 "
    },
    "@": {
        ha: 1029,
        x_min: 0,
        x_max: 0,
        o: "m 965 208 b 539 -18 872 64 722 -18 b 50 483 268 -18 50 207 b 543 988 50 761 271 988 b 993 557 760 988 993 854 b 726 176 993 361 864 176 b 621 299 658 176 615 222 b 421 194 569 235 500 194 b 250 496 278 194 208 346 b 567 776 296 660 431 776 b 726 656 647 776 708 733 l 757 753 l 810 753 b 681 336 786 675 681 336 b 728 222 657 261 679 222 b 942 557 836 222 942 392 b 543 942 942 818 735 942 b 101 483 299 942 101 733 b 539 31 101 236 297 31 b 903 208 692 31 819 96 m 674 488 b 569 728 706 586 706 728 b 300 482 457 728 342 632 b 422 243 264 357 322 243 b 674 488 532 243 625 336 "
    },
    A: {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    B: {
        ha: 869,
        x_min: 0,
        x_max: 0,
        o: "m 814 267 b 535 0 814 110 700 0 l 117 0 l 117 964 l 526 964 b 786 722 688 964 786 872 b 650 508 786 621 733 544 b 814 267 754 472 814 389 m 168 531 l 531 531 b 735 722 632 531 735 590 b 526 913 735 843 658 913 l 168 913 m 763 267 b 531 481 763 401 678 481 l 168 481 l 168 51 l 535 51 b 763 267 649 51 763 118 "
    },
    C: {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 965 306 b 521 -17 896 117 722 -17 b 44 486 257 -17 44 208 b 521 988 44 763 257 988 b 967 667 728 988 900 856 l 911 667 b 521 936 847 826 699 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 910 306 694 35 843 146 l 965 306 "
    },
    D: {
        ha: 935,
        x_min: 0,
        x_max: 0,
        o: "m 893 483 b 464 0 893 186 729 0 l 117 0 l 117 964 l 464 964 b 893 483 733 964 893 785 m 842 483 b 464 913 842 757 704 913 l 168 913 l 168 51 l 464 51 b 842 483 700 51 842 214 "
    },
    E: {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    F: {
        ha: 782,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 671 531 l 671 481 l 168 481 l 168 0 l 117 0 l 117 964 l 731 964 l 731 913 l 168 913 "
    },
    G: {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 988 0 l 936 0 l 936 263 b 521 -17 867 90 715 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 b 968 667 735 988 900 867 l 913 667 b 521 936 849 835 706 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 935 443 749 35 914 201 l 531 443 l 531 494 l 988 494 "
    },
    H: {
        ha: 981,
        x_min: 0,
        x_max: 0,
        o: "m 867 0 l 815 0 l 815 479 l 168 479 l 168 0 l 117 0 l 117 964 l 168 964 l 168 532 l 815 532 l 815 964 l 867 964 "
    },
    I: {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    J: {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 607 285 b 317 -18 607 101 493 -18 b 28 272 154 -18 28 110 l 79 272 b 317 35 79 138 181 35 b 556 285 464 35 556 131 l 556 964 l 607 964 "
    },
    K: {
        ha: 814,
        x_min: 0,
        x_max: 0,
        o: "m 164 357 l 164 0 l 113 0 l 113 964 l 164 964 l 164 428 l 692 964 l 764 964 l 397 593 l 824 0 l 760 0 l 361 556 "
    },
    L: {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 168 51 l 722 51 l 722 0 l 117 0 l 117 964 l 168 964 "
    },
    M: {
        ha: 1131,
        x_min: 0,
        x_max: 0,
        o: "m 1018 0 l 965 0 l 965 843 l 596 0 l 539 0 l 168 843 l 168 0 l 117 0 l 117 964 l 171 964 l 567 63 l 963 964 l 1018 964 "
    },
    N: {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 871 0 l 813 0 l 168 886 l 168 0 l 117 0 l 117 964 l 175 964 l 819 78 l 819 964 l 871 964 "
    },
    O: {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    P: {
        ha: 821,
        x_min: 0,
        x_max: 0,
        o: "m 788 697 b 506 429 788 539 672 429 l 168 429 l 168 0 l 117 0 l 117 964 l 501 964 b 788 697 678 964 788 861 m 736 697 b 501 913 736 833 650 913 l 168 913 l 168 481 l 506 481 b 736 697 621 481 736 549 "
    },
    Q: {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 950 0 l 875 0 l 797 76 b 521 -17 719 18 624 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 b 997 486 789 988 997 768 b 836 110 997 338 935 201 m 946 486 b 521 936 946 739 760 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 760 113 610 35 692 64 l 644 224 l 719 224 l 799 146 b 946 486 889 229 946 351 "
    },
    R: {
        ha: 874,
        x_min: 0,
        x_max: 0,
        o: "m 781 117 b 801 0 781 81 790 28 l 749 0 b 729 104 736 26 729 60 l 729 244 b 525 431 729 397 618 431 l 168 431 l 168 0 l 117 0 l 117 964 l 522 964 b 810 697 700 964 810 861 b 649 456 810 582 747 494 b 781 244 733 424 781 351 l 781 117 m 528 481 b 757 697 642 481 757 549 b 522 913 757 833 672 913 l 168 913 l 168 481 l 528 481 "
    },
    S: {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 413 989 b 736 704 636 989 736 846 l 685 704 b 413 939 685 846 578 939 b 138 732 247 939 138 856 b 424 528 138 626 218 569 b 765 258 640 483 765 425 b 408 -18 765 90 625 -18 b 60 293 240 -18 60 81 l 111 293 b 408 35 111 115 261 35 b 714 258 597 35 714 119 b 414 478 714 378 639 432 b 86 732 243 511 86 567 b 413 989 86 886 217 989 "
    },
    T: {
        ha: 717,
        x_min: 0,
        x_max: 0,
        o: "m 385 913 l 385 0 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 "
    },
    U: {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 "
    },
    V: {
        ha: 774,
        x_min: 0,
        x_max: 0,
        o: "m 415 0 l 360 0 l 4 964 l 60 964 l 388 74 l 714 964 l 769 964 "
    },
    W: {
        ha: 1174,
        x_min: 0,
        x_max: 0,
        o: "m 890 0 l 836 0 l 589 874 l 342 0 l 288 0 l 13 964 l 67 964 l 314 92 l 561 964 l 617 964 l 864 92 l 1111 964 l 1164 964 "
    },
    X: {
        ha: 744,
        x_min: 0,
        x_max: 0,
        o: "m 374 444 l 72 0 l 10 0 l 342 490 l 21 964 l 83 964 l 374 536 l 664 964 l 726 964 l 404 490 l 738 0 l 675 0 "
    },
    Y: {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 406 0 l 354 0 l 354 417 l 8 964 l 69 964 l 379 472 l 689 964 l 750 964 l 406 417 "
    },
    Z: {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 747 0 l 18 0 l 18 51 l 682 913 l 35 913 l 35 964 l 747 964 l 747 911 l 83 51 l 747 51 "
    },
    "[": {
        ha: 365,
        x_min: 0,
        x_max: 0,
        o: "m 153 -17 l 331 -17 l 331 -67 l 101 -67 l 101 1031 l 331 1031 l 331 981 l 153 981 "
    },
    "\\": {
        ha: 374,
        x_min: 0,
        x_max: 0,
        o: "m 308 0 l 15 1033 l 69 1033 l 361 0 "
    },
    "]": {
        ha: 365,
        x_min: 0,
        x_max: 0,
        o: "m 39 981 l 39 1031 l 267 1031 l 267 -67 l 39 -67 l 39 -17 l 215 -17 l 215 981 "
    },
    "^": {
        ha: 754,
        x_min: 0,
        x_max: 0,
        o: "m 350 964 l 407 964 l 713 358 l 656 358 l 379 907 l 101 358 l 44 358 "
    },
    _: {
        ha: 1093,
        x_min: 0,
        x_max: 0,
        o: "m -15 -96 l 1111 -96 l 1111 -146 l -15 -146 "
    },
    "`": {
        ha: 549,
        x_min: 0,
        x_max: 0,
        o: "m 215 965 l 332 824 l 275 824 l 150 965 "
    },
    a: {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    b: {
        ha: 853,
        x_min: 0,
        x_max: 0,
        o: "m 817 356 b 458 -17 817 150 656 -17 b 153 172 326 -17 213 60 l 153 0 l 101 0 l 101 1033 l 153 1033 l 153 542 b 458 733 213 656 326 733 b 817 356 656 733 817 564 m 764 356 b 458 681 764 535 628 681 b 153 356 290 681 153 535 b 458 35 153 179 290 35 b 764 356 628 35 764 179 "
    },
    c: {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 726 222 b 396 -17 679 78 554 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 494 554 733 678 639 l 671 494 b 396 681 625 608 524 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 672 222 528 35 629 107 l 726 222 "
    },
    d: {
        ha: 851,
        x_min: 0,
        x_max: 0,
        o: "m 753 0 l 701 0 l 701 172 b 396 -17 643 60 529 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 701 542 529 733 643 656 l 701 1033 l 753 1033 m 701 356 b 396 681 701 535 564 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 701 356 564 35 701 179 "
    },
    e: {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    f: {
        ha: 360,
        x_min: 0,
        x_max: 0,
        o: "m 164 664 l 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 356 715 l 356 664 "
    },
    g: {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 758 19 b 406 -350 758 -201 617 -350 b 72 -115 238 -350 115 -262 l 126 -115 b 406 -299 167 -231 268 -299 b 707 19 589 -299 707 -174 l 707 167 b 403 -18 650 56 539 -18 b 46 356 206 -18 46 150 b 403 733 46 564 206 733 b 707 547 539 733 650 660 l 707 715 l 758 715 m 707 356 b 403 681 707 544 579 681 b 97 356 233 681 97 535 b 403 35 97 179 233 35 b 707 356 579 35 707 169 "
    },
    h: {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 1033 l 153 1033 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 "
    },
    i: {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 836 l 108 836 l 108 964 l 160 964 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    j: {
        ha: 253,
        x_min: 0,
        x_max: 0,
        o: "m 153 836 l 101 836 l 101 964 l 153 964 m 153 -137 b 103 -279 153 -201 136 -249 b -33 -317 71 -310 26 -324 l -33 -267 b 68 -242 14 -271 46 -261 b 101 -137 90 -221 101 -186 l 101 715 l 153 715 "
    },
    k: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 153 239 l 153 0 l 101 0 l 101 1033 l 153 1033 l 153 310 l 572 715 l 646 715 l 375 454 l 681 0 l 618 0 l 338 417 "
    },
    l: {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 0 l 108 0 l 108 1033 l 160 1033 "
    },
    m: {
        ha: 1229,
        x_min: 0,
        x_max: 0,
        o: "m 1136 0 l 1085 0 l 1085 461 b 864 681 1085 589 992 681 b 644 461 738 681 644 589 l 644 0 l 593 0 l 593 461 b 372 681 593 589 500 681 b 153 461 246 681 153 589 l 153 0 l 101 0 l 101 715 l 153 715 l 153 618 b 372 733 197 689 275 733 b 622 575 489 733 582 671 b 864 733 660 671 749 733 b 1136 461 1022 733 1136 618 "
    },
    n: {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 715 l 153 715 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 "
    },
    o: {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    p: {
        ha: 846,
        x_min: 0,
        x_max: 0,
        o: "m 810 356 b 451 -17 810 150 649 -17 b 146 172 319 -17 206 60 l 146 -318 l 94 -318 l 94 715 l 146 715 l 146 542 b 451 733 206 656 319 733 b 810 356 649 733 810 564 m 757 356 b 451 681 757 535 621 681 b 146 356 283 681 146 535 b 451 35 146 179 283 35 b 757 356 621 35 757 179 "
    },
    q: {
        ha: 844,
        x_min: 0,
        x_max: 0,
        o: "m 753 -318 l 701 -318 l 701 172 b 396 -17 643 60 529 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 701 542 529 733 643 656 l 701 715 l 753 715 m 701 356 b 396 681 701 535 564 681 b 92 356 228 681 92 535 b 396 35 92 179 228 35 b 701 356 564 35 701 179 "
    },
    r: {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 444 683 b 233 622 350 692 278 665 b 154 432 182 576 154 507 l 154 0 l 101 0 l 101 715 l 154 715 l 154 596 b 201 660 167 619 182 642 b 444 731 264 715 347 742 "
    },
    s: {
        ha: 710,
        x_min: 0,
        x_max: 0,
        o: "m 664 203 b 614 67 665 153 649 103 b 378 -17 563 14 478 -17 b 46 208 197 -17 69 63 l 97 208 b 376 32 122 93 225 32 b 576 103 463 32 535 60 b 611 201 601 129 614 164 b 363 358 608 289 538 333 b 83 539 239 376 86 397 b 354 733 83 636 175 733 b 647 533 513 733 617 663 l 594 533 b 356 685 565 629 483 685 b 136 539 226 685 135 622 b 371 408 138 457 213 431 b 664 203 519 386 657 347 "
    },
    t: {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 163 247 b 356 47 163 125 219 42 l 356 0 b 111 247 201 -14 111 88 l 111 664 l 14 664 l 14 715 l 111 715 l 111 868 l 163 868 l 163 715 l 356 715 l 356 664 l 163 664 "
    },
    u: {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 "
    },
    v: {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 339 0 l 283 0 l 8 715 l 64 715 l 311 71 l 558 715 l 614 715 "
    },
    w: {
        ha: 964,
        x_min: 0,
        x_max: 0,
        o: "m 731 0 l 675 0 l 483 631 l 292 0 l 236 0 l 18 715 l 72 715 l 264 85 l 456 715 l 511 715 l 703 85 l 894 715 l 949 715 "
    },
    x: {
        ha: 600,
        x_min: 0,
        x_max: 0,
        o: "m 301 326 l 65 0 l 1 0 l 269 369 l 18 715 l 82 715 l 301 414 l 521 715 l 585 715 l 333 369 l 601 0 l 538 0 "
    },
    y: {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 299 -104 b 21 -268 247 -240 147 -292 l 21 -219 b 250 -86 132 -236 207 -201 l 283 1 l 14 715 l 69 715 l 310 74 l 553 715 l 607 715 "
    },
    z: {
        ha: 607,
        x_min: 0,
        x_max: 0,
        o: "m 599 0 l 14 0 l 14 51 l 517 664 l 29 664 l 29 715 l 583 715 l 583 664 l 81 51 l 599 51 "
    },
    "{": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 311 -94 b 153 69 206 -100 153 -36 l 153 311 b 57 444 153 400 121 444 l 50 444 l 50 492 l 57 492 b 153 625 121 492 153 536 l 153 867 b 311 1029 153 972 206 1035 l 311 988 b 204 872 236 988 204 943 l 204 631 b 125 468 204 543 176 492 b 204 306 176 444 204 393 l 204 63 b 311 -51 204 -7 236 -51 "
    },
    "|": {
        ha: 275,
        x_min: 0,
        x_max: 0,
        o: "m 165 1033 l 165 0 l 114 0 l 114 1033 "
    },
    "}": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 306 444 l 299 444 b 203 311 235 444 203 400 l 203 69 b 44 -94 203 -36 150 -100 l 44 -51 b 151 63 121 -51 151 -7 l 151 306 b 229 468 151 393 181 444 b 151 631 181 492 151 543 l 151 872 b 44 988 151 943 121 988 l 44 1029 b 203 867 150 1035 203 972 l 203 625 b 299 492 203 536 235 492 l 306 492 "
    },
    "~": {
        ha: 558,
        x_min: 0,
        x_max: 0,
        o: "m 460 1174 b 360 1071 444 1101 403 1071 b 201 1129 289 1071 256 1132 b 146 1076 181 1129 158 1114 l 101 1076 b 201 1179 117 1149 160 1179 b 360 1119 275 1179 306 1119 b 415 1174 381 1119 403 1136 l 460 1174 "
    },
    "\xc3\x84": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 451 1079 l 451 1174 l 518 1174 l 518 1079 m 264 1079 l 264 1174 l 331 1174 l 331 1079 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x85": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 392 1279 b 506 1164 454 1279 506 1228 b 392 1050 506 1101 454 1050 b 276 1164 328 1050 276 1101 b 392 1279 276 1228 328 1279 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 392 1088 b 465 1164 432 1088 465 1122 b 392 1240 465 1207 432 1240 b 317 1164 350 1240 317 1207 b 392 1088 317 1122 350 1088 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x87": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 965 306 b 522 -17 896 117 724 -17 b 511 -17 518 -17 515 -17 l 475 -81 b 613 -162 526 -54 613 -83 b 504 -253 613 -218 568 -253 b 390 -203 468 -253 422 -236 l 406 -174 b 501 -214 433 -197 465 -214 b 568 -162 535 -214 568 -199 b 507 -108 568 -132 546 -108 b 450 -129 490 -108 467 -114 l 417 -106 l 467 -14 b 44 486 229 15 44 228 b 522 988 44 763 258 988 b 968 667 728 988 900 856 l 913 667 b 522 936 849 826 700 936 b 96 486 288 936 96 733 b 522 35 96 236 288 35 b 910 306 696 35 844 146 "
    },
    "\xc3\x89": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 451 1063 l 394 1063 l 511 1206 l 576 1206 m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xc3\x91": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 685 1174 b 585 1071 669 1101 628 1071 b 426 1129 514 1071 481 1132 b 371 1076 406 1129 383 1114 l 326 1076 b 426 1179 342 1149 385 1179 b 585 1119 500 1179 531 1119 b 640 1174 606 1119 628 1136 l 685 1174 m 871 0 l 813 0 l 168 886 l 168 0 l 117 0 l 117 964 l 175 964 l 819 78 l 819 964 l 871 964 "
    },
    "\xc3\x96": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 576 1079 l 576 1174 l 643 1174 l 643 1079 m 389 1079 l 389 1174 l 454 1174 l 454 1079 m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xc3\x9c": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 532 1079 l 532 1174 l 599 1174 l 599 1079 m 344 1079 l 344 1174 l 411 1174 l 411 1079 m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 "
    },
    "\xc3\xa1": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 404 824 l 347 824 l 463 965 l 529 965 m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc3\xa0": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 294 965 l 410 824 l 353 824 l 228 965 m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc3\xa2": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 347 956 l 410 956 l 522 818 l 460 818 l 379 921 l 297 818 l 236 818 m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc3\xa4": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 435 826 l 435 922 l 500 922 l 500 826 m 247 826 l 247 922 l 313 922 l 313 826 m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc3\xa3": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 556 935 b 456 831 540 861 499 831 b 297 890 385 831 351 892 b 242 836 276 889 254 874 l 199 836 b 297 939 213 908 256 939 b 456 881 371 939 401 879 b 511 935 476 881 500 896 l 556 935 m 631 1 b 611 107 618 28 611 63 l 611 119 b 303 -11 554 39 444 -11 b 43 190 178 -11 43 51 b 347 403 43 351 194 389 b 611 524 506 418 611 435 b 381 685 611 656 486 685 b 133 535 250 685 164 631 l 81 535 b 381 735 113 663 219 735 b 663 524 560 735 663 657 l 663 118 b 683 1 663 83 672 29 m 611 425 b 353 356 556 374 451 365 b 99 192 169 338 99 289 b 303 42 99 72 232 42 b 611 261 457 42 611 110 "
    },
    "\xc3\xa5": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 372 1039 b 488 924 436 1039 488 986 b 372 810 488 861 436 810 b 258 924 310 810 258 861 b 372 1039 258 986 310 1039 m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 372 847 b 447 924 414 847 447 882 b 372 1000 447 965 414 1000 b 299 924 332 1000 299 965 b 372 847 299 882 332 847 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc3\xa7": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 361 -81 b 499 -162 413 -54 499 -83 b 390 -253 499 -218 454 -253 b 276 -203 354 -253 310 -236 l 292 -174 b 388 -214 319 -197 351 -214 b 456 -162 422 -214 456 -199 b 393 -108 456 -132 432 -108 b 336 -129 376 -108 354 -114 l 304 -106 l 353 -14 b 39 356 176 8 39 165 b 396 733 39 564 199 733 b 725 494 553 733 678 639 l 671 494 b 396 681 625 608 524 681 b 90 356 226 681 90 535 b 396 35 90 179 226 35 b 672 222 526 35 628 107 l 726 222 b 397 -17 679 79 556 -17 "
    },
    "\xc3\xa9": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 435 824 l 376 824 l 493 965 l 560 965 m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xc3\xa8": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 303 965 l 418 824 l 361 824 l 236 965 m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xc3\xaa": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 361 956 l 424 956 l 536 818 l 474 818 l 393 921 l 313 818 l 250 818 m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xc3\xab": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 464 826 l 464 922 l 529 922 l 529 826 m 275 826 l 275 922 l 340 922 l 340 826 m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xc3\xad": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 158 822 l 101 822 l 218 965 l 285 965 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xc3\xac": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 38 965 l 153 822 l 97 822 l -29 965 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xc3\xae": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 101 944 l 164 944 l 276 807 l 214 807 l 132 910 l 51 807 l -11 807 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xc3\xaf": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 183 826 l 183 922 l 249 922 l 249 826 m 15 826 l 15 922 l 81 922 l 81 826 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xc3\xb1": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 583 935 b 483 831 568 861 526 831 b 325 890 413 831 379 892 b 269 836 304 889 282 874 l 226 836 b 325 939 240 908 283 939 b 483 881 399 939 429 879 b 539 935 504 881 528 896 l 583 935 m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 715 l 153 715 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 "
    },
    "\xc3\xb3": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 431 824 l 374 824 l 489 965 l 556 965 m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    "\xc3\xb2": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 301 965 l 417 824 l 360 824 l 235 965 m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    "\xc3\xb4": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 360 956 l 422 956 l 535 818 l 472 818 l 390 921 l 310 818 l 247 818 m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    "\xc3\xb6": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 456 826 l 456 922 l 521 922 l 521 826 m 268 826 l 268 922 l 333 922 l 333 826 m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    "\xc3\xb5": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 564 935 b 465 831 549 861 507 831 b 306 890 393 831 360 892 b 250 836 285 889 263 874 l 207 836 b 306 939 222 908 264 939 b 465 881 379 939 410 879 b 521 935 486 881 508 896 l 564 935 m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 "
    },
    "\xc3\xba": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 426 824 l 368 824 l 485 965 l 551 965 m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 "
    },
    "\xc3\xb9": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 318 965 l 435 824 l 378 824 l 251 965 m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 "
    },
    "\xc3\xbb": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 368 956 l 431 956 l 543 818 l 481 818 l 400 921 l 318 818 l 257 818 m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 "
    },
    "\xc3\xbc": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 456 826 l 456 922 l 521 922 l 521 826 m 267 826 l 267 922 l 332 922 l 332 826 m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 "
    },
    "\xe2\x80\xa0": {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 257 733 l 257 308 l 206 308 l 206 733 l 36 733 l 36 782 l 206 782 l 206 964 l 257 964 l 257 782 l 428 782 l 428 733 "
    },
    "\xc2\xb0": {
        ha: 489,
        x_min: 0,
        x_max: 0,
        o: "m 246 964 b 458 751 363 964 458 868 b 246 538 458 633 363 538 b 32 751 128 538 32 633 b 246 964 32 868 128 964 m 246 588 b 407 751 335 588 407 661 b 246 914 407 840 335 914 b 83 751 157 914 83 840 b 246 588 83 661 157 588 "
    },
    "\xc2\xa2": {
        ha: 700,
        x_min: 0,
        x_max: 0,
        o: "m 674 226 b 365 -15 631 81 514 -15 b 274 -3 333 -15 303 -11 l 222 -162 l 171 -162 l 228 15 b 33 353 111 71 33 199 b 365 722 33 563 176 722 b 453 710 396 722 425 718 l 504 868 l 556 868 l 499 693 b 671 490 579 656 640 583 l 617 490 b 483 646 590 560 544 615 l 289 44 b 365 33 313 38 339 33 b 619 226 486 33 581 110 l 674 226 m 438 664 b 365 674 415 671 390 674 b 85 353 206 674 85 533 b 243 63 85 222 149 114 "
    },
    "\xc2\xa3": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 704 50 b 397 33 592 -35 493 -8 b 78 -4 300 76 182 63 l 49 39 b 204 318 146 108 204 214 b 172 449 204 368 190 410 l 28 449 l 28 497 l 144 497 b 138 510 143 501 140 506 b 68 706 104 567 68 626 b 365 965 68 835 161 965 b 668 685 575 965 668 824 l 617 685 b 365 917 617 824 518 917 b 121 706 217 917 121 832 b 182 536 121 640 150 590 b 204 497 189 524 197 511 l 472 497 l 472 449 l 229 449 b 256 318 244 410 256 368 b 164 85 256 240 222 142 b 415 81 246 121 347 111 b 675 93 510 38 589 25 l 704 50 "
    },
    "\xc2\xa7": {
        ha: 699,
        x_min: 0,
        x_max: 0,
        o: "m 550 281 b 590 174 576 254 590 219 b 351 -18 590 58 497 -18 b 113 194 186 -18 113 89 l 164 194 b 351 32 164 97 238 32 b 539 174 469 32 539 86 b 322 321 539 250 483 290 b 50 524 190 346 50 381 b 154 689 50 597 90 657 b 113 797 128 715 113 750 b 353 988 113 911 208 988 b 590 776 518 988 590 882 l 539 776 b 353 940 539 874 465 940 b 164 797 238 940 164 882 b 382 650 164 711 240 678 b 651 447 518 624 651 589 b 550 281 651 372 613 313 m 600 447 b 372 601 600 532 544 569 b 197 657 308 614 246 629 b 101 524 139 636 101 583 b 331 369 101 442 161 400 b 508 314 393 358 458 343 b 600 447 564 333 600 386 "
    },
    "\xe2\x80\xa2": {
        ha: 435,
        x_min: 0,
        x_max: 0,
        o: "m 218 358 b 69 507 135 358 69 424 b 218 654 69 588 135 654 b 365 507 299 654 365 588 b 218 358 365 424 299 358 "
    },
    "\xc2\xb6": {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 622 0 l 571 0 l 571 913 l 417 913 l 417 0 l 365 0 l 365 429 l 329 429 b 47 697 163 429 47 539 b 333 964 47 861 157 964 l 622 964 "
    },
    "\xc3\x9f": {
        ha: 829,
        x_min: 0,
        x_max: 0,
        o: "m 546 558 b 782 278 690 525 782 422 b 438 -21 782 99 643 -21 b 306 -1 390 -21 346 -14 l 306 50 b 438 29 346 36 390 29 b 729 278 574 29 729 96 b 442 524 729 458 574 524 l 306 524 l 306 575 l 407 575 b 651 776 549 575 651 663 b 403 981 651 917 528 981 b 153 733 328 981 153 956 l 153 0 l 101 0 l 101 733 b 403 1031 101 917 217 1031 b 706 776 583 1031 706 929 b 546 558 706 676 642 597 "
    },
    "\xc2\xae": {
        ha: 1078,
        x_min: 0,
        x_max: 0,
        o: "m 1043 485 b 540 -18 1043 208 817 -18 b 39 485 264 -18 39 208 b 540 988 39 763 264 988 b 1043 485 817 988 1043 763 m 992 485 b 540 939 992 736 789 939 b 90 485 292 939 90 736 b 540 32 90 235 292 32 b 992 485 789 32 992 235 m 775 206 l 715 206 l 588 438 l 406 438 l 406 206 l 354 206 l 354 763 l 604 763 b 778 600 713 763 778 701 b 642 440 778 515 724 454 m 726 600 b 604 713 726 699 650 713 l 406 713 l 406 488 l 607 488 b 726 600 667 488 726 522 "
    },
    "\xc2\xa9": {
        ha: 1078,
        x_min: 0,
        x_max: 0,
        o: "m 540 988 b 1043 485 817 988 1043 763 b 540 -18 1043 208 817 -18 b 39 485 264 -18 39 208 b 540 988 39 763 264 988 m 540 32 b 992 485 789 32 992 235 b 540 939 992 736 789 939 b 90 485 292 939 90 736 b 540 32 90 235 292 32 m 797 386 b 540 199 758 276 658 199 b 267 486 389 199 267 326 b 540 774 267 644 389 774 b 799 585 661 774 761 696 l 744 585 b 542 724 710 667 633 724 b 318 486 418 724 318 617 b 542 247 318 354 418 247 b 743 386 631 247 708 304 l 797 386 "
    },
    "\xe2\x84\xa2": {
        ha: 1224,
        x_min: 0,
        x_max: 0,
        o: "m 1144 358 l 1093 358 l 1093 842 l 1090 842 l 878 358 l 819 358 l 608 842 l 607 842 l 607 358 l 554 358 l 554 964 l 611 964 l 849 422 l 850 422 l 1089 964 l 1144 964 m 465 964 l 465 914 l 271 914 l 271 358 l 219 358 l 219 914 l 25 914 l 25 964 "
    },
    "\xc2\xb4": {
        ha: 549,
        x_min: 0,
        x_max: 0,
        o: "m 296 824 l 238 824 l 354 965 l 421 965 "
    },
    "\xc2\xa8": {
        ha: 547,
        x_min: 0,
        x_max: 0,
        o: "m 336 826 l 336 922 l 403 922 l 403 826 m 149 826 l 149 922 l 214 922 l 214 826 "
    },
    "\xc3\x86": {
        ha: 1361,
        x_min: 0,
        x_max: 0,
        o: "m 700 532 l 1226 532 l 1226 479 l 700 479 l 700 51 l 1286 51 l 1286 0 l 647 0 l 647 332 l 208 332 l 64 0 l 7 0 l 428 964 l 1286 964 l 1286 913 b 700 913 1286 913 747 913 m 647 913 b 461 913 615 913 519 913 l 231 385 l 647 385 "
    },
    "\xc3\x98": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 997 486 b 521 -17 997 208 783 -17 b 199 115 396 -17 283 33 l 100 17 l 67 49 l 167 150 b 44 486 90 239 44 356 b 521 988 44 763 258 988 b 856 847 653 988 769 935 l 950 943 l 982 910 l 886 813 b 997 486 956 725 997 613 m 819 810 b 521 936 743 889 639 936 b 96 486 286 936 96 733 b 203 186 96 371 136 265 m 944 486 b 849 775 944 597 910 699 l 235 153 b 521 35 310 79 411 35 b 944 486 756 35 944 238 "
    },
    "\xc2\xa5": {
        ha: 686,
        x_min: 0,
        x_max: 0,
        o: "m 650 650 l 650 599 l 481 599 l 379 421 l 629 421 l 629 371 l 371 371 l 371 0 l 319 0 l 319 371 l 61 371 l 61 421 l 310 421 l 208 599 l 40 599 l 40 650 l 181 650 l 0 964 l 60 964 l 344 465 l 346 465 l 629 964 l 689 964 l 510 650 "
    },
    "\xc2\xaa": {
        ha: 525,
        x_min: 0,
        x_max: 0,
        o: "m 397 535 b 386 589 390 549 386 567 b 210 517 356 547 296 517 b 43 649 129 517 43 558 b 235 786 43 743 125 776 b 383 856 328 794 383 804 b 257 938 383 896 344 938 b 118 854 204 938 139 921 l 65 854 b 256 985 83 931 149 985 b 435 847 418 985 435 889 l 435 604 b 449 535 435 583 442 551 l 397 535 m 385 783 b 242 743 363 758 317 750 b 94 649 122 731 94 693 b 210 565 94 582 169 565 b 385 690 300 565 385 604 "
    },
    "\xc2\xba": {
        ha: 524,
        x_min: 0,
        x_max: 0,
        o: "m 263 985 b 488 749 386 985 488 879 b 263 514 488 619 386 514 b 39 749 139 514 39 619 b 263 985 39 879 139 985 m 263 563 b 435 749 358 563 435 646 b 263 938 435 853 358 938 b 90 749 168 938 90 853 b 263 563 90 646 168 563 "
    },
    "\xc3\xa6": {
        ha: 1363,
        x_min: 0,
        x_max: 0,
        o: "m 1310 222 b 976 -17 1260 68 1143 -17 b 650 196 828 -17 706 69 b 307 -12 622 67 504 -12 b 43 189 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 654 486 683 b 135 532 250 683 164 629 l 81 532 b 381 733 113 661 219 733 b 658 533 554 733 656 660 b 968 733 717 651 832 733 b 1324 386 1153 733 1310 581 l 1326 358 l 663 358 l 663 356 b 976 35 663 176 800 35 b 1254 222 1144 35 1221 128 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 308 40 99 71 229 40 b 611 268 500 40 611 117 m 1269 410 b 968 682 1244 564 1117 682 b 668 410 817 682 692 564 "
    },
    "\xc3\xb8": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 754 356 b 396 -17 754 150 593 -17 b 158 79 306 -17 221 19 l 85 4 l 51 36 l 126 113 b 39 356 72 178 39 263 b 396 733 39 564 200 733 b 639 632 490 733 576 694 l 710 703 l 743 671 l 671 597 b 754 356 722 532 754 449 m 604 596 b 396 685 550 651 476 685 b 90 356 228 685 90 538 b 163 149 90 278 118 204 m 701 356 b 635 561 701 433 676 506 l 193 114 b 396 32 247 63 318 32 b 701 356 565 32 701 178 "
    },
    "\xc2\xbf": {
        ha: 675,
        x_min: 0,
        x_max: 0,
        o: "m 386 831 l 333 831 l 333 960 l 386 960 m 642 243 b 338 -28 632 78 517 -28 b 43 232 160 -28 43 75 b 194 465 43 361 121 410 b 333 700 267 519 333 576 l 333 711 l 386 711 l 386 700 b 225 431 386 551 300 488 b 96 231 156 379 96 333 b 338 19 96 103 189 19 b 590 243 488 19 581 107 l 642 243 "
    },
    "\xc2\xa1": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 171 836 l 119 836 l 119 964 l 171 964 m 171 0 l 119 0 l 119 715 l 171 715 "
    },
    "\xc6\x92": {
        ha: 569,
        x_min: 0,
        x_max: 0,
        o: "m 558 824 b 443 833 518 847 475 850 b 360 694 404 815 375 767 l 346 632 l 472 632 l 472 582 l 336 582 l 264 251 b 153 81 247 167 208 108 b 4 81 110 58 58 56 l 4 132 b 129 126 51 111 96 108 b 214 263 171 146 199 194 l 282 582 l 157 582 l 157 632 l 293 632 l 308 704 b 421 881 328 793 367 854 b 558 876 461 900 514 900 "
    },
    "\xc2\xab": {
        ha: 468,
        x_min: 0,
        x_max: 0,
        o: "m 444 599 l 444 532 l 300 415 l 444 299 l 444 232 l 263 382 l 263 449 m 208 599 l 208 532 l 65 415 l 208 299 l 208 232 l 28 382 l 28 449 "
    },
    "\xc2\xbb": {
        ha: 468,
        x_min: 0,
        x_max: 0,
        o: "m 443 382 l 263 232 l 263 299 l 406 415 l 263 532 l 263 599 l 443 449 m 208 449 l 208 382 l 28 232 l 28 299 l 171 415 l 28 532 l 28 599 "
    },
    "\xe2\x80\xa6": {
        ha: 1010,
        x_min: 0,
        x_max: 0,
        o: "m 928 0 l 876 0 l 876 129 l 928 129 m 532 0 l 481 0 l 481 129 l 532 129 m 136 0 l 85 0 l 85 129 l 136 129 "
    },
    "\xc3\x80": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 335 1206 l 451 1063 l 393 1063 l 268 1206 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x83": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 576 1174 b 476 1071 561 1101 519 1071 b 318 1129 406 1071 372 1132 b 263 1076 297 1129 275 1114 l 219 1076 b 318 1179 233 1149 276 1179 b 476 1119 392 1179 422 1119 b 532 1174 497 1119 521 1136 l 576 1174 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x95": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 689 1174 b 590 1071 674 1101 632 1071 b 431 1129 518 1071 485 1132 b 375 1076 410 1129 388 1114 l 332 1076 b 431 1179 347 1149 389 1179 b 590 1119 504 1179 535 1119 b 646 1174 611 1119 633 1136 l 689 1174 m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xc5\x92": {
        ha: 1660,
        x_min: 0,
        x_max: 0,
        o: "m 997 532 l 1525 532 l 1525 479 l 997 479 l 997 51 l 1585 51 l 1585 0 l 946 0 l 946 268 b 522 -17 871 100 710 -17 b 44 486 258 -17 44 208 b 522 988 44 763 258 988 b 946 708 713 988 871 876 l 946 964 l 1585 964 l 1585 913 l 997 913 m 946 488 b 522 936 946 739 760 936 b 96 486 288 936 96 735 b 522 35 96 238 288 35 b 946 488 756 35 946 238 "
    },
    "\xc5\x93": {
        ha: 1453,
        x_min: 0,
        x_max: 0,
        o: "m 754 358 b 1067 35 754 172 893 35 b 1344 222 1233 35 1313 128 l 1400 222 b 1067 -17 1351 68 1233 -17 b 726 229 907 -17 775 85 b 396 -17 678 86 550 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 483 550 733 681 629 b 1060 733 775 629 904 733 b 1417 358 1272 733 1418 539 m 1358 410 b 1060 682 1335 564 1208 682 b 757 410 907 682 782 564 l 1358 410 m 701 356 b 396 682 701 536 564 682 b 90 356 229 682 90 536 b 396 35 90 179 229 35 b 701 356 564 35 701 179 "
    },
    "\xe2\x80\x93": {
        ha: 738,
        x_min: 0,
        x_max: 0,
        o: "m 679 358 l 61 358 l 61 410 l 679 410 "
    },
    "\xe2\x80\x94": {
        ha: 1354,
        x_min: 0,
        x_max: 0,
        o: "m 1296 358 l 61 358 l 61 410 l 1296 410 "
    },
    "\xe2\x80\x9c": {
        ha: 368,
        x_min: 0,
        x_max: 0,
        o: "m 215 700 l 215 853 b 325 968 215 929 271 968 l 325 921 b 265 853 288 919 265 893 l 265 700 m 54 700 l 54 853 b 164 968 54 929 110 968 l 164 921 b 104 853 126 919 104 893 l 104 700 "
    },
    "\xe2\x80\x9d": {
        ha: 367,
        x_min: 0,
        x_max: 0,
        o: "m 315 964 l 315 811 b 206 696 315 735 260 696 l 206 743 b 265 811 243 744 265 771 l 265 964 m 154 964 l 154 811 b 44 696 154 735 99 696 l 44 743 b 104 811 82 744 104 771 l 104 964 "
    },
    "\xe2\x80\x98": {
        ha: 207,
        x_min: 0,
        x_max: 0,
        o: "m 54 700 l 54 853 b 164 968 54 929 110 968 l 164 921 b 104 853 126 919 104 893 l 104 700 "
    },
    "\xe2\x80\x99": {
        ha: 206,
        x_min: 0,
        x_max: 0,
        o: "m 154 964 l 154 811 b 44 696 154 735 99 696 l 44 743 b 104 811 82 744 104 771 l 104 964 "
    },
    "\xc3\xbf": {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 379 826 l 379 922 l 444 922 l 444 826 m 192 826 l 192 922 l 257 922 l 257 826 m 299 -104 b 21 -268 247 -240 147 -292 l 21 -219 b 250 -86 132 -236 207 -201 l 283 1 l 14 715 l 69 715 l 310 74 l 553 715 l 607 715 "
    },
    "\xc5\xb8": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 443 1079 l 443 1174 l 508 1174 l 508 1079 m 256 1079 l 256 1174 l 321 1174 l 321 1079 m 406 0 l 354 0 l 354 417 l 8 964 l 69 964 l 379 472 l 381 472 l 689 964 l 750 964 l 406 417 "
    },
    "\xe2\x81\x84": {
        ha: 704,
        x_min: 0,
        x_max: 0,
        o: "m 97 -17 l 42 -17 l 607 964 l 663 964 "
    },
    "\xe2\x82\xac": {
        ha: 918,
        x_min: 0,
        x_max: 0,
        o: "m 896 199 b 546 0 821 79 692 0 b 138 331 351 0 186 140 l 21 331 l 21 379 l 128 379 b 122 446 125 401 122 424 b 125 494 122 463 124 478 l 21 494 l 21 544 l 133 544 b 546 892 176 743 344 892 b 890 703 692 892 817 818 l 865 651 b 546 844 801 768 683 844 b 186 544 374 844 226 715 l 813 544 l 789 494 l 178 494 b 174 446 175 478 174 463 b 179 379 174 424 176 401 l 733 379 l 708 331 l 190 331 b 546 47 236 167 379 47 b 836 199 664 47 768 107 l 896 199 "
    },
    "\xe2\x80\xb9": {
        ha: 233,
        x_min: 0,
        x_max: 0,
        o: "m 65 415 l 208 299 l 208 232 l 28 382 l 28 449 l 208 599 l 208 532 "
    },
    "\xe2\x80\xba": {
        ha: 233,
        x_min: 0,
        x_max: 0,
        o: "m 208 382 l 28 232 l 28 299 l 171 415 l 28 532 l 28 599 l 208 449 "
    },
    "\xef\xac\x81": {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 513 836 l 461 836 l 461 964 l 513 964 m 164 664 l 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 513 715 l 513 0 l 461 0 l 461 664 "
    },
    "\xef\xac\x82": {
        ha: 625,
        x_min: 0,
        x_max: 0,
        o: "m 519 0 l 468 0 l 468 1033 l 519 1033 m 164 664 l 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 356 715 l 356 664 "
    },
    "\xe2\x80\xa1": {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 257 542 l 428 542 l 428 493 l 257 493 l 257 311 l 206 311 l 206 493 l 36 493 l 36 542 l 206 542 l 206 733 l 36 733 l 36 782 l 206 782 l 206 964 l 257 964 l 257 782 l 428 782 l 428 733 l 257 733 "
    },
    "\xc2\xb7": {
        ha: 217,
        x_min: 0,
        x_max: 0,
        o: "m 135 371 l 83 371 l 83 500 l 135 500 "
    },
    "\xe2\x80\x9a": {
        ha: 206,
        x_min: 0,
        x_max: 0,
        o: "m 147 129 l 147 -24 b 38 -139 147 -100 92 -139 l 38 -92 b 97 -24 75 -90 97 -64 l 97 129 "
    },
    "\xe2\x80\x9e": {
        ha: 367,
        x_min: 0,
        x_max: 0,
        o: "m 308 129 l 308 -24 b 199 -139 308 -100 253 -139 l 199 -92 b 258 -24 236 -90 258 -64 l 258 129 m 147 129 l 147 -24 b 38 -139 147 -100 92 -139 l 38 -92 b 97 -24 75 -90 97 -64 l 97 129 "
    },
    "\xe2\x80\xb0": {
        ha: 1464,
        x_min: 0,
        x_max: 0,
        o: "m 250 944 b 464 731 368 944 464 849 b 250 518 464 613 368 518 b 38 731 133 518 38 613 b 250 944 38 849 133 944 m 733 964 l 789 964 l 224 -17 l 168 -17 m 1214 447 b 1428 233 1332 447 1428 351 b 1214 21 1428 115 1332 21 b 1001 233 1097 21 1001 115 b 1214 447 1001 351 1097 447 m 717 447 b 929 233 833 447 929 351 b 717 21 929 115 833 21 b 503 233 599 21 503 115 b 717 447 503 351 599 447 m 250 568 b 413 731 340 568 413 640 b 250 894 413 821 340 894 b 89 731 163 894 89 821 b 250 568 89 640 163 568 m 1214 71 b 1375 233 1303 71 1375 143 b 1214 396 1375 324 1303 396 b 1053 233 1125 396 1053 324 b 1214 71 1053 143 1125 71 m 717 71 b 878 233 806 71 878 143 b 717 396 878 324 806 396 b 554 233 628 396 554 324 b 717 71 554 143 628 71 "
    },
    "\xc3\x82": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 360 1196 l 422 1196 l 535 1060 l 472 1060 l 390 1161 l 310 1060 l 247 1060 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x8a": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 403 1196 l 465 1196 l 578 1060 l 515 1060 l 435 1161 l 354 1060 l 292 1060 m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xc3\x81": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 431 1063 l 372 1063 l 489 1206 l 556 1206 m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xc3\x8b": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 506 1079 l 506 1174 l 571 1174 l 571 1079 m 317 1079 l 317 1174 l 383 1174 l 383 1079 m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xc3\x88": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 350 1206 l 465 1063 l 408 1063 l 283 1206 m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xc3\x8d": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 174 1063 l 115 1063 l 232 1204 l 299 1204 m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xc3\x8e": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 114 1196 l 176 1196 l 289 1060 l 226 1060 l 146 1161 l 64 1060 l 1 1060 m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xc3\x8f": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 196 1078 l 196 1174 l 263 1174 l 263 1078 m 28 1078 l 28 1174 l 93 1174 l 93 1078 m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xc3\x8c": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 44 1206 l 161 1063 l 104 1063 l -22 1206 m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xc3\x93": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 553 1063 l 496 1063 l 613 1206 l 678 1206 m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xc3\x94": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 482 1196 l 544 1196 l 657 1060 l 594 1060 l 514 1161 l 432 1060 l 369 1060 m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xef\xa3\xbf": {
        ha: 1256,
        x_min: 0,
        x_max: 0,
        o: "m 1199 482 b 722 1 1199 190 957 8 l 706 0 l 706 965 l 722 964 b 1199 482 957 957 1199 775 m 665 964 l 665 790 l 538 790 b 240 482 356 790 240 650 b 538 174 240 314 356 174 l 665 174 l 665 0 l 538 0 b 57 482 246 0 57 224 b 538 964 57 740 246 964 m 978 467 b 949 281 976 399 965 338 b 1078 217 994 265 1038 243 b 1165 467 1129 283 1163 368 m 949 683 b 978 499 965 628 976 565 l 1165 499 b 1078 749 1163 597 1129 681 b 949 683 1038 722 994 700 m 739 319 b 917 290 803 317 863 307 b 946 467 933 343 944 403 l 739 467 l 739 319 m 946 499 b 917 674 944 563 933 621 b 739 646 863 658 803 649 l 739 499 m 739 678 b 907 706 799 682 856 690 b 739 922 867 810 803 886 l 739 678 m 739 43 b 907 260 803 78 867 156 b 739 286 856 275 799 283 l 739 43 m 796 922 b 938 715 851 878 903 806 b 1057 774 981 731 1019 750 b 796 922 988 851 894 903 m 1057 192 b 938 250 1019 215 981 235 b 796 43 903 160 851 88 b 1057 192 894 63 988 114 "
    },
    "\xc3\x92": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 424 1206 l 540 1063 l 483 1063 l 358 1206 m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xc3\x9a": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 493 1063 l 435 1063 l 551 1206 l 618 1206 m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 "
    },
    "\xc3\x9b": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 449 1196 l 511 1196 l 624 1060 l 561 1060 l 481 1161 l 400 1060 l 338 1060 m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 "
    },
    "\xc3\x99": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 392 1206 l 508 1063 l 451 1063 l 326 1206 m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 "
    },
    "\xc4\xb1": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xcb\x86": {
        ha: 549,
        x_min: 0,
        x_max: 0,
        o: "m 354 819 l 275 919 l 197 819 l 132 819 l 244 957 l 307 957 l 419 819 "
    },
    "\xcb\x9c": {
        ha: 549,
        x_min: 0,
        x_max: 0,
        o: "m 454 935 b 354 831 439 861 397 831 b 196 890 283 831 250 892 b 140 836 175 889 153 874 l 97 836 b 196 939 111 908 154 939 b 354 881 269 939 300 879 b 410 935 375 881 399 896 l 454 935 "
    },
    "\xc2\xaf": {
        ha: 575,
        x_min: 0,
        x_max: 0,
        o: "m 478 832 l 97 832 l 97 883 l 478 883 "
    },
    "\xcb\x98": {
        ha: 557,
        x_min: 0,
        x_max: 0,
        o: "m 460 964 b 279 819 439 875 371 819 b 97 964 186 819 118 875 l 146 964 b 279 868 167 901 211 868 b 411 964 346 868 392 901 l 460 964 "
    },
    "\xcb\x99": {
        ha: 260,
        x_min: 0,
        x_max: 0,
        o: "m 97 826 l 97 922 l 163 922 l 163 826 "
    },
    "\xcb\x9a": {
        ha: 424,
        x_min: 0,
        x_max: 0,
        o: "m 211 1039 b 326 924 275 1039 326 986 b 211 810 326 861 275 810 b 97 924 149 810 97 861 b 211 1039 97 986 149 1039 m 211 847 b 286 924 253 847 286 882 b 211 1000 286 965 253 1000 b 138 924 171 1000 138 965 b 211 847 138 882 171 847 "
    },
    "\xc2\xb8": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 319 -162 b 211 -253 319 -218 275 -253 b 97 -203 175 -253 131 -236 l 113 -174 b 208 -214 140 -197 172 -214 b 276 -162 243 -214 276 -199 b 214 -108 276 -132 253 -108 b 157 -129 197 -108 174 -114 l 125 -106 l 181 0 l 229 0 l 182 -81 b 319 -162 233 -54 319 -83 "
    },
    "\xcb\x9d": {
        ha: 485,
        x_min: 0,
        x_max: 0,
        o: "m 282 822 l 228 822 l 321 965 l 388 965 m 151 822 l 97 822 l 192 965 l 257 965 "
    },
    "\xcb\x9b": {
        ha: 385,
        x_min: 0,
        x_max: 0,
        o: "m 288 -214 b 107 -190 215 -254 133 -243 b 192 7 83 -140 97 -56 l 247 7 b 153 -169 165 -49 126 -121 b 288 -175 169 -201 231 -203 "
    },
    "\xcb\x87": {
        ha: 482,
        x_min: 0,
        x_max: 0,
        o: "m 272 819 l 210 819 l 97 957 l 160 957 l 242 854 l 324 957 l 385 957 "
    },
    "\xef\x80\x84": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 221 -71 b 319 -162 268 -71 319 -101 b 211 -253 319 -218 275 -253 b 97 -203 172 -253 128 -235 l 113 -174 b 208 -214 136 -197 172 -214 b 276 -162 243 -214 276 -199 b 210 -108 276 -131 251 -108 b 151 -121 190 -108 168 -112 l 151 -87 b 221 -71 171 -76 194 -71 "
    },
    "\xe2\x89\xa0": {
        ha: 719,
        x_min: 0,
        x_max: 0,
        o: "m 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 471 715 l 471 765 b 715 1011 471 924 561 1025 l 715 964 b 524 761 581 972 524 889 l 524 715 l 715 715 l 715 664 l 524 664 l 524 0 l 471 0 l 471 664 l 164 664 "
    },
    "\xc2\xb1": {
        ha: 985,
        x_min: 0,
        x_max: 0,
        o: "m 879 0 l 828 0 l 828 1033 l 879 1033 m 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 471 715 l 471 765 b 715 1011 471 924 561 1025 l 715 964 b 524 761 581 972 524 889 l 524 715 l 715 715 l 715 664 l 524 664 l 524 0 l 471 0 l 471 664 l 164 664 "
    },
    "\xe2\x88\x9e": {
        ha: 978,
        x_min: 0,
        x_max: 0,
        o: "m 872 836 l 821 836 l 821 964 l 872 964 m 164 0 l 111 0 l 111 664 l 14 664 l 14 715 l 111 715 l 111 765 b 356 1011 111 924 201 1025 l 356 964 b 164 761 221 972 164 889 l 164 715 l 471 715 l 471 765 b 715 1011 471 924 561 1025 l 715 964 b 524 761 581 972 524 889 l 524 715 l 872 715 l 872 0 l 821 0 l 821 664 l 524 664 l 524 0 l 471 0 l 471 664 l 164 664 "
    },
    "\xc4\x82": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 m 586 1206 b 406 1061 565 1117 497 1061 b 224 1206 313 1061 244 1117 l 272 1206 b 406 1110 293 1143 338 1110 b 538 1206 472 1110 518 1143 l 586 1206 "
    },
    "\xc4\x80": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 m 594 1060 l 214 1060 l 214 1111 l 594 1111 "
    },
    "\xc4\x84": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 843 -221 b 663 -197 771 -261 689 -250 b 747 0 639 -147 653 -62 l 619 332 l 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 b 708 -176 721 -56 682 -128 b 843 -182 725 -208 786 -210 m 404 893 l 210 383 l 600 383 "
    },
    "\xc4\x86": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 965 306 b 521 -17 896 117 722 -17 b 44 486 257 -17 44 208 b 521 988 44 763 257 988 b 967 667 728 988 900 856 l 911 667 b 521 936 847 826 699 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 910 306 694 35 843 146 l 965 306 m 549 1058 l 490 1058 l 607 1200 l 674 1200 "
    },
    "\xc4\x8c": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 965 306 b 521 -17 896 117 722 -17 b 44 486 257 -17 44 208 b 521 988 44 763 257 988 b 967 667 728 988 900 856 l 911 667 b 521 936 847 826 699 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 910 306 694 35 843 146 l 965 306 m 544 1061 l 482 1061 l 369 1199 l 432 1199 l 514 1096 l 596 1199 l 657 1199 "
    },
    "\xc4\x8e": {
        ha: 935,
        x_min: 0,
        x_max: 0,
        o: "m 893 483 b 464 0 893 186 729 0 l 117 0 l 117 964 l 464 964 b 893 483 733 964 893 785 m 842 483 b 464 913 842 757 704 913 l 168 913 l 168 51 l 464 51 b 842 483 700 51 842 214 m 415 1058 l 353 1058 l 240 1196 l 303 1196 l 385 1093 l 467 1196 l 528 1196 "
    },
    "\xc4\x90": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 885 483 b 454 0 885 186 719 0 l 107 0 l 107 504 l 21 504 l 21 556 l 107 556 l 107 964 l 454 964 b 885 483 724 964 885 785 m 832 483 b 454 913 832 757 694 913 l 158 913 l 158 556 l 485 556 l 485 504 l 158 504 l 158 51 l 454 51 b 832 483 692 51 832 214 "
    },
    "\xc4\x9a": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 m 467 1068 l 404 1068 l 292 1206 l 354 1206 l 436 1103 l 518 1206 l 579 1206 "
    },
    "\xc4\x96": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 m 411 1079 l 411 1175 l 476 1175 l 476 1079 "
    },
    "\xc4\x92": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 m 633 1081 l 253 1081 l 253 1132 l 633 1132 "
    },
    "\xc4\x98": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 517 -221 b 336 -197 444 -261 363 -250 b 421 0 313 -147 326 -62 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 l 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 476 0 b 382 -176 394 -56 356 -128 b 517 -182 399 -208 460 -210 "
    },
    "\xc4\x9e": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 988 0 l 936 0 l 936 263 b 521 -17 867 90 715 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 b 968 667 735 988 900 867 l 913 667 b 521 936 849 835 706 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 935 443 749 35 914 201 l 531 443 l 531 494 l 988 494 m 708 1206 b 528 1061 688 1117 619 1061 b 346 1206 435 1061 367 1117 l 394 1206 b 528 1110 415 1143 460 1110 b 660 1206 594 1110 640 1143 l 708 1206 "
    },
    "\xc4\xa2": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 611 -162 b 503 -253 611 -218 567 -253 b 389 -203 467 -253 422 -236 l 404 -174 b 500 -214 432 -197 464 -214 b 568 -162 535 -214 568 -199 b 506 -108 568 -132 544 -108 b 449 -129 489 -108 465 -114 l 417 -106 l 465 -12 b 44 486 228 15 44 228 b 521 988 44 763 258 988 b 968 667 735 988 900 867 l 913 667 b 521 936 849 835 706 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 935 443 749 35 914 201 l 531 443 l 531 494 l 988 494 l 988 0 l 936 0 l 936 263 b 521 -17 867 90 715 -17 l 511 -17 l 474 -81 b 611 -162 525 -54 611 -83 "
    },
    "\xc4\xb0": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 172 0 l 121 0 l 121 964 l 172 964 m 113 1078 l 113 1174 l 178 1174 l 178 1078 "
    },
    "\xc4\xaa": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 172 0 l 121 0 l 121 964 l 172 964 m 336 1057 l -44 1057 l -44 1108 l 336 1108 "
    },
    "\xc4\xae": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 215 -221 b 35 -197 143 -261 61 -250 b 119 0 11 -147 25 -62 l 121 0 l 121 964 l 172 964 l 172 0 l 175 0 b 81 -176 93 -56 54 -128 b 215 -182 97 -208 158 -210 "
    },
    "\xc4\xb6": {
        ha: 814,
        x_min: 0,
        x_max: 0,
        o: "m 164 357 l 164 0 l 113 0 l 113 964 l 164 964 l 164 428 l 692 964 l 764 964 l 397 593 l 824 0 l 760 0 l 361 556 m 419 -37 b 518 -129 467 -37 518 -68 b 410 -219 518 -185 474 -219 b 296 -169 371 -219 326 -201 l 311 -140 b 407 -181 335 -164 371 -181 b 475 -129 442 -181 475 -165 b 408 -75 475 -97 450 -75 b 350 -87 389 -75 367 -79 l 350 -54 b 419 -37 369 -43 393 -37 "
    },
    "\xc4\xb9": {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 168 51 l 722 51 l 722 0 l 117 0 l 117 964 l 168 964 m 178 1061 l 119 1061 l 236 1203 l 303 1203 "
    },
    "\xc4\xbd": {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 168 51 l 722 51 l 722 0 l 117 0 l 117 964 l 168 964 m 372 822 l 314 822 l 431 964 l 497 964 "
    },
    "\xc4\xbb": {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 531 -162 b 422 -253 531 -218 486 -253 b 308 -203 386 -253 342 -236 l 324 -174 b 419 -214 351 -197 383 -214 b 488 -162 454 -214 488 -199 b 425 -108 488 -132 464 -108 b 368 -129 408 -108 385 -114 l 336 -106 l 392 0 l 117 0 l 117 964 l 168 964 l 168 51 l 722 51 l 722 0 l 440 0 l 393 -81 b 531 -162 444 -54 531 -83 "
    },
    "\xc5\x83": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 871 0 l 813 0 l 168 886 l 168 0 l 117 0 l 117 964 l 175 964 l 819 78 l 819 964 l 871 964 m 514 1064 l 456 1064 l 572 1206 l 639 1206 "
    },
    "\xc5\x87": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 871 0 l 813 0 l 168 886 l 168 0 l 117 0 l 117 964 l 175 964 l 819 78 l 819 964 l 871 964 m 522 1057 l 460 1057 l 347 1194 l 410 1194 l 492 1092 l 574 1194 l 635 1194 "
    },
    "\xc5\x85": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 871 0 l 813 0 l 168 886 l 168 0 l 117 0 l 117 964 l 175 964 l 819 78 l 819 964 l 871 964 m 504 -36 b 603 -128 551 -36 603 -67 b 494 -218 603 -183 558 -218 b 381 -168 456 -218 411 -200 l 396 -139 b 492 -179 419 -162 456 -179 b 560 -128 526 -179 560 -164 b 493 -74 560 -96 535 -74 b 435 -86 474 -74 451 -78 l 435 -53 b 504 -36 454 -42 478 -36 "
    },
    "\xc5\x90": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 m 600 1057 l 546 1057 l 639 1200 l 706 1200 m 469 1057 l 415 1057 l 510 1200 l 575 1200 "
    },
    "\xc5\x8c": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 m 710 1060 l 329 1060 l 329 1111 l 710 1111 "
    },
    "\xc5\x94": {
        ha: 874,
        x_min: 0,
        x_max: 0,
        o: "m 781 117 b 801 0 781 81 790 28 l 749 0 b 729 104 736 26 729 60 l 729 244 b 525 431 729 397 618 431 l 168 431 l 168 0 l 117 0 l 117 964 l 522 964 b 810 697 700 964 810 861 b 649 456 810 582 747 494 b 781 244 733 424 781 351 l 781 117 m 528 481 b 757 697 642 481 757 549 b 522 913 757 833 672 913 l 168 913 l 168 481 l 528 481 m 431 1058 l 372 1058 l 489 1200 l 556 1200 "
    },
    "\xc5\x98": {
        ha: 874,
        x_min: 0,
        x_max: 0,
        o: "m 781 117 b 801 0 781 81 790 28 l 749 0 b 729 104 736 26 729 60 l 729 244 b 525 431 729 397 618 431 l 168 431 l 168 0 l 117 0 l 117 964 l 522 964 b 810 697 700 964 810 861 b 649 456 810 582 747 494 b 781 244 733 424 781 351 l 781 117 m 528 481 b 757 697 642 481 757 549 b 522 913 757 833 672 913 l 168 913 l 168 481 l 528 481 m 468 1061 l 406 1061 l 293 1199 l 356 1199 l 438 1096 l 519 1199 l 581 1199 "
    },
    "\xc5\x96": {
        ha: 874,
        x_min: 0,
        x_max: 0,
        o: "m 781 117 b 801 0 781 81 790 28 l 749 0 b 729 104 736 26 729 60 l 729 244 b 525 431 729 397 618 431 l 168 431 l 168 0 l 117 0 l 117 964 l 522 964 b 810 697 700 964 810 861 b 649 456 810 582 747 494 b 781 244 733 424 781 351 l 781 117 m 528 481 b 757 697 642 481 757 549 b 522 913 757 833 672 913 l 168 913 l 168 481 l 528 481 m 449 -36 b 547 -128 496 -36 547 -67 b 439 -218 547 -183 503 -218 b 325 -168 400 -218 356 -200 l 340 -139 b 436 -179 364 -162 400 -179 b 504 -128 471 -179 504 -164 b 438 -74 504 -96 479 -74 b 379 -86 418 -74 396 -78 l 379 -53 b 449 -36 399 -42 422 -36 "
    },
    "\xc5\x9a": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 413 989 b 736 704 636 989 736 846 l 685 704 b 413 939 685 846 578 939 b 138 732 247 939 138 856 b 424 528 138 626 218 569 b 765 258 640 483 765 425 b 408 -18 765 90 625 -18 b 60 293 240 -18 60 81 l 111 293 b 408 35 111 115 261 35 b 714 258 597 35 714 119 b 414 478 714 378 639 432 b 86 732 243 511 86 567 b 413 989 86 886 217 989 m 436 1060 l 378 1060 l 494 1201 l 561 1201 "
    },
    "\xc5\x9e": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 553 -162 b 444 -253 553 -218 508 -253 b 331 -203 408 -253 364 -236 l 346 -174 b 442 -214 374 -197 406 -214 b 510 -162 476 -214 510 -199 b 447 -108 510 -132 486 -108 b 390 -129 431 -108 407 -114 l 358 -106 l 404 -18 b 60 293 238 -17 60 82 l 111 293 b 408 35 111 115 261 35 b 714 258 597 35 714 119 b 414 478 714 378 639 432 b 86 732 243 511 86 567 b 413 989 86 886 217 989 b 736 704 636 989 736 846 l 685 704 b 413 939 685 846 578 939 b 138 732 247 939 138 856 b 424 528 138 626 218 569 b 765 258 640 483 765 425 b 453 -15 765 101 643 -1 l 415 -81 b 553 -162 467 -54 553 -83 "
    },
    "\xc5\xa4": {
        ha: 717,
        x_min: 0,
        x_max: 0,
        o: "m 385 913 l 385 0 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 m 389 1058 l 326 1058 l 214 1196 l 276 1196 l 358 1093 l 440 1196 l 501 1196 "
    },
    "\xc5\xa2": {
        ha: 717,
        x_min: 0,
        x_max: 0,
        o: "m 472 -162 b 364 -253 472 -218 428 -253 b 250 -203 328 -253 283 -236 l 265 -174 b 361 -214 293 -197 325 -214 b 429 -162 396 -214 429 -199 b 367 -108 429 -132 406 -108 b 310 -129 350 -108 326 -114 l 278 -106 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 l 385 913 l 385 0 l 382 0 l 335 -81 b 472 -162 386 -54 472 -83 "
    },
    "\xc5\xb0": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 m 564 1071 l 510 1071 l 603 1214 l 669 1214 m 433 1071 l 379 1071 l 474 1214 l 539 1214 "
    },
    "\xc5\xaa": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 m 660 1057 l 279 1057 l 279 1108 l 660 1108 "
    },
    "\xc5\xb2": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 626 -221 b 446 -197 554 -261 472 -250 b 508 -15 424 -151 433 -76 b 471 -18 496 -17 483 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 l 840 344 b 579 -4 840 169 738 36 b 492 -176 501 -60 465 -129 b 626 -182 508 -208 569 -210 "
    },
    "\xc5\xae": {
        ha: 939,
        x_min: 0,
        x_max: 0,
        o: "m 840 344 b 471 -18 840 132 689 -18 b 101 344 254 -18 101 132 l 101 964 l 153 964 l 153 344 b 471 35 153 160 282 35 b 789 344 661 35 789 160 l 789 964 l 840 964 m 468 1288 b 583 1172 532 1288 583 1235 b 468 1058 583 1110 532 1058 b 354 1172 406 1058 354 1110 b 468 1288 354 1235 406 1288 m 468 1096 b 543 1172 510 1096 543 1131 b 468 1249 543 1214 510 1249 b 394 1172 428 1249 394 1214 b 468 1096 394 1131 428 1096 "
    },
    "\xc5\xb9": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 747 0 l 18 0 l 18 51 l 682 913 l 35 913 l 35 964 l 747 964 l 747 911 l 83 51 l 747 51 m 415 1072 l 357 1072 l 474 1214 l 540 1214 "
    },
    "\xc5\xbb": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 747 0 l 18 0 l 18 51 l 682 913 l 35 913 l 35 964 l 747 964 l 747 911 l 83 51 l 747 51 m 346 1061 l 346 1157 l 411 1157 l 411 1061 "
    },
    "\xc4\x83": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 m 561 957 b 381 813 540 868 472 813 b 199 957 288 813 219 868 l 247 957 b 381 861 268 894 313 861 b 513 957 447 861 493 894 l 561 957 "
    },
    "\xc4\x81": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 m 569 813 l 189 813 l 189 864 l 569 864 "
    },
    "\xc4\x85": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 726 -221 b 546 -197 654 -261 572 -250 b 631 0 522 -147 536 -62 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 l 686 0 b 592 -176 604 -56 565 -128 b 726 -182 608 -208 669 -210 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xc4\x87": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 726 222 b 396 -17 679 78 554 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 494 554 733 678 639 l 671 494 b 396 681 625 608 524 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 672 222 528 35 629 107 l 726 222 m 431 824 l 372 824 l 489 965 l 556 965 "
    },
    "\xc4\x8d": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 726 222 b 396 -17 679 78 554 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 494 554 733 678 639 l 671 494 b 396 681 625 608 524 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 672 222 528 35 629 107 l 726 222 m 421 819 l 358 819 l 246 957 l 308 957 l 390 854 l 472 957 l 533 957 "
    },
    "\xc4\x8f": {
        ha: 851,
        x_min: 0,
        x_max: 0,
        o: "m 753 0 l 701 0 l 701 172 b 396 -17 643 60 529 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 701 542 529 733 643 656 l 701 1033 l 753 1033 m 701 356 b 396 681 701 535 564 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 701 356 564 35 701 179 m 864 893 l 806 893 l 922 1035 l 989 1035 "
    },
    "\xc4\x91": {
        ha: 851,
        x_min: 0,
        x_max: 0,
        o: "m 918 832 l 753 832 l 753 0 l 701 0 l 701 172 b 396 -17 643 60 529 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 701 542 529 733 643 656 l 701 832 l 538 832 l 538 883 l 701 883 l 701 1033 l 753 1033 l 753 883 l 918 883 m 701 356 b 396 681 701 535 564 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 701 356 564 35 701 179 "
    },
    "\xc4\x9b": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 m 425 819 l 363 819 l 250 957 l 313 957 l 394 854 l 476 957 l 538 957 "
    },
    "\xc4\x97": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 m 361 826 l 361 922 l 426 922 l 426 826 "
    },
    "\xc4\x93": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 m 585 813 l 204 813 l 204 864 l 585 864 "
    },
    "\xc4\x99": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 496 -221 b 315 -197 424 -261 342 -250 b 378 -15 293 -151 303 -76 b 39 356 186 -3 39 156 b 396 733 39 564 199 733 b 753 358 610 733 756 539 l 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 433 -15 690 76 586 -6 b 361 -176 367 -68 338 -132 b 496 -182 378 -208 439 -210 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xc4\x9f": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 758 19 b 406 -350 758 -201 617 -350 b 72 -115 238 -350 115 -262 l 126 -115 b 406 -299 167 -231 268 -299 b 707 19 589 -299 707 -174 l 707 167 b 403 -18 650 56 539 -18 b 46 356 206 -18 46 150 b 403 733 46 564 206 733 b 707 547 539 733 650 660 l 707 715 l 758 715 m 707 356 b 403 681 707 544 579 681 b 97 356 233 681 97 535 b 403 35 97 179 233 35 b 707 356 579 35 707 169 m 592 957 b 411 813 571 868 503 813 b 229 957 318 813 250 868 l 278 957 b 411 861 299 894 343 861 b 543 957 478 861 524 894 l 592 957 "
    },
    "\xc4\xa3": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 758 19 b 406 -350 758 -201 617 -350 b 72 -115 238 -350 115 -262 l 126 -115 b 406 -299 167 -231 268 -299 b 707 19 589 -299 707 -174 l 707 167 b 403 -18 650 56 539 -18 b 46 356 206 -18 46 150 b 403 733 46 564 206 733 b 707 547 539 733 650 660 l 707 715 l 758 715 m 707 356 b 403 681 707 544 579 681 b 97 356 233 681 97 535 b 403 35 97 179 233 35 b 707 356 579 35 707 169 m 419 992 b 518 900 467 992 518 961 b 410 810 518 844 474 810 b 296 860 371 810 326 828 l 311 889 b 407 849 335 865 371 849 b 475 900 442 849 475 864 b 408 954 475 932 450 954 b 350 942 389 954 367 950 l 350 975 b 419 992 369 986 393 992 "
    },
    "\xc4\xab": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 0 l 108 0 l 108 715 l 160 715 m 324 808 l -57 808 l -57 860 l 324 860 "
    },
    "\xc4\xaf": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 201 -221 b 21 -197 129 -261 47 -250 b 106 0 -3 -147 11 -62 l 108 0 l 108 715 l 160 715 l 160 0 l 161 0 b 67 -176 79 -56 40 -128 b 201 -182 83 -208 144 -210 m 160 836 l 108 836 l 108 964 l 160 964 "
    },
    "\xc4\xb7": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 153 239 l 153 0 l 101 0 l 101 1033 l 153 1033 l 153 310 l 572 715 l 646 715 l 375 454 l 681 0 l 618 0 l 338 417 m 360 -36 b 458 -128 407 -36 458 -67 b 350 -218 458 -183 414 -218 b 236 -168 311 -218 267 -200 l 251 -139 b 347 -179 275 -162 311 -179 b 415 -128 382 -179 415 -164 b 349 -74 415 -96 390 -74 b 290 -86 329 -74 307 -78 l 290 -53 b 360 -36 310 -42 333 -36 "
    },
    "\xc4\xba": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 0 l 108 0 l 108 1033 l 160 1033 m 163 1103 l 104 1103 l 221 1244 l 288 1244 "
    },
    "\xc4\xbe": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 0 l 108 0 l 108 1033 l 160 1033 m 281 893 l 222 893 l 339 1035 l 406 1035 "
    },
    "\xc4\xbc": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 247 -162 b 139 -253 247 -218 203 -253 b 25 -203 103 -253 58 -236 l 40 -174 b 136 -214 68 -197 100 -214 b 204 -162 171 -214 204 -199 b 142 -108 204 -132 181 -108 b 85 -129 125 -108 101 -114 l 53 -106 l 108 0 l 108 1033 l 160 1033 l 160 0 l 157 0 l 110 -81 b 247 -162 161 -54 247 -83 "
    },
    "\xc5\x84": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 715 l 153 715 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 m 433 814 l 375 814 l 492 956 l 558 956 "
    },
    "\xc5\x88": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 715 l 153 715 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 m 443 811 l 381 811 l 268 949 l 331 949 l 413 846 l 494 949 l 556 949 "
    },
    "\xc5\x86": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 715 l 153 715 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 m 410 -36 b 508 -128 457 -36 508 -67 b 400 -218 508 -183 464 -218 b 286 -168 361 -218 317 -200 l 301 -139 b 397 -179 325 -162 361 -179 b 465 -128 432 -179 465 -164 b 399 -74 465 -96 440 -74 b 340 -86 379 -74 357 -78 l 340 -53 b 410 -36 360 -42 383 -36 "
    },
    "\xc5\x91": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 m 483 811 l 429 811 l 522 954 l 589 954 m 353 811 l 299 811 l 393 954 l 458 954 "
    },
    "\xc5\x8d": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 396 733 b 754 356 593 733 754 564 b 396 -17 754 150 593 -17 b 39 356 200 -17 39 150 b 396 733 39 564 200 733 m 396 32 b 701 356 565 32 701 178 b 396 685 701 538 565 685 b 90 356 228 685 90 538 b 396 32 90 178 228 32 m 585 811 l 204 811 l 204 863 l 585 863 "
    },
    "\xc5\x95": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 444 683 b 233 622 350 692 278 665 b 154 432 182 576 154 507 l 154 0 l 101 0 l 101 715 l 154 715 l 154 596 b 201 660 167 619 182 642 b 444 731 264 715 347 742 m 167 813 l 108 813 l 225 954 l 292 954 "
    },
    "\xc5\x99": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 444 683 b 233 622 350 692 278 665 b 154 432 182 576 154 507 l 154 0 l 101 0 l 101 715 l 154 715 l 154 596 b 201 660 167 619 182 642 b 444 731 264 715 347 742 m 288 813 l 225 813 l 113 950 l 175 950 l 257 847 l 339 950 l 400 950 "
    },
    "\xc5\x97": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 240 -162 b 132 -253 240 -218 196 -253 b 18 -203 96 -253 51 -236 l 33 -174 b 129 -214 61 -197 93 -214 b 197 -162 164 -214 197 -199 b 135 -108 197 -132 174 -108 b 78 -129 118 -108 94 -114 l 46 -106 l 101 0 l 101 715 l 154 715 l 154 596 b 201 660 167 619 182 642 b 444 731 264 715 347 742 l 444 683 b 233 622 350 692 278 665 b 154 432 182 576 154 507 l 154 0 l 150 0 l 103 -81 b 240 -162 154 -54 240 -83 "
    },
    "\xc5\x9b": {
        ha: 710,
        x_min: 0,
        x_max: 0,
        o: "m 664 203 b 614 67 665 153 649 103 b 378 -17 563 14 478 -17 b 46 208 197 -17 69 63 l 97 208 b 376 32 122 93 225 32 b 576 103 463 32 535 60 b 611 201 601 129 614 164 b 363 358 608 289 538 333 b 83 539 239 376 86 397 b 354 733 83 636 175 733 b 647 533 513 733 617 663 l 594 533 b 356 685 565 629 483 685 b 136 539 226 685 135 622 b 371 408 138 457 213 431 b 664 203 519 386 657 347 m 383 810 l 325 810 l 442 951 l 508 951 "
    },
    "\xc5\x9f": {
        ha: 710,
        x_min: 0,
        x_max: 0,
        o: "m 493 -162 b 385 -253 493 -218 449 -253 b 271 -203 349 -253 304 -236 l 286 -174 b 382 -214 314 -197 346 -214 b 450 -162 417 -214 450 -199 b 388 -108 450 -132 426 -108 b 331 -129 371 -108 347 -114 l 299 -106 l 346 -15 b 46 208 182 -7 68 71 l 97 208 b 376 32 122 93 225 32 b 576 103 463 32 535 60 b 611 201 601 129 614 164 b 363 358 608 289 538 333 b 83 539 239 376 86 397 b 354 733 83 636 175 733 b 647 533 513 733 617 663 l 594 533 b 356 685 565 629 483 685 b 136 539 226 685 135 622 b 371 408 138 457 213 431 b 664 203 519 386 657 347 b 614 67 665 153 649 103 b 393 -17 565 17 486 -14 l 356 -81 b 493 -162 407 -54 493 -83 "
    },
    "\xc5\xa5": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 163 247 b 356 47 163 125 219 42 l 356 0 b 111 247 201 -14 111 88 l 111 664 l 14 664 l 14 715 l 111 715 l 111 868 l 163 868 l 163 715 l 356 715 l 356 664 l 163 664 m 286 782 l 228 782 l 344 924 l 411 924 "
    },
    "\xc5\xa3": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 446 -162 b 338 -253 446 -218 401 -253 b 224 -203 301 -253 257 -236 l 239 -174 b 335 -214 267 -197 299 -214 b 403 -162 369 -214 403 -199 b 340 -108 403 -132 379 -108 b 283 -129 324 -108 300 -114 l 251 -106 l 307 0 b 111 247 182 8 111 104 l 111 664 l 14 664 l 14 715 l 111 715 l 111 868 l 163 868 l 163 715 l 356 715 l 356 664 l 163 664 l 163 247 b 356 47 163 125 219 42 l 356 0 l 308 -81 b 446 -162 360 -54 446 -83 "
    },
    "\xc5\xb1": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 m 479 808 l 425 808 l 518 951 l 585 951 m 349 808 l 294 808 l 389 951 l 454 951 "
    },
    "\xc5\xab": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 m 588 807 l 207 807 l 207 858 l 588 858 "
    },
    "\xc5\xb3": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 738 -221 b 557 -197 665 -261 583 -250 b 642 0 533 -147 547 -62 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 l 697 0 b 603 -176 615 -56 576 -128 b 738 -182 619 -208 681 -210 "
    },
    "\xc5\xaf": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 697 0 l 646 0 l 646 118 b 396 -17 597 35 508 -17 b 96 283 222 -17 96 110 l 96 715 l 147 715 l 147 283 b 396 35 147 139 253 35 b 646 283 542 35 646 139 l 646 715 l 697 715 m 397 1039 b 513 924 461 1039 513 986 b 397 810 513 861 461 810 b 283 924 335 810 283 861 b 397 1039 283 986 335 1039 m 397 847 b 472 924 439 847 472 882 b 397 1000 472 965 439 1000 b 324 924 357 1000 324 965 b 397 847 324 882 357 847 "
    },
    "\xc5\xba": {
        ha: 607,
        x_min: 0,
        x_max: 0,
        o: "m 599 0 l 14 0 l 14 51 l 517 664 l 29 664 l 29 715 l 583 715 l 583 664 l 81 51 l 599 51 m 326 824 l 268 824 l 385 965 l 451 965 "
    },
    "\xc5\xbc": {
        ha: 607,
        x_min: 0,
        x_max: 0,
        o: "m 599 0 l 14 0 l 14 51 l 517 664 l 29 664 l 29 715 l 583 715 l 583 664 l 81 51 l 599 51 m 271 826 l 271 922 l 336 922 l 336 826 "
    },
    "\xd0\x81": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 506 1079 l 506 1174 l 571 1174 l 571 1079 m 317 1079 l 317 1174 l 383 1174 l 383 1079 m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xd0\x82": {
        ha: 1038,
        x_min: 0,
        x_max: 0,
        o: "m 385 0 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 l 385 913 l 385 532 l 713 532 b 992 267 878 532 992 422 b 713 0 992 110 878 0 l 575 0 l 575 51 l 713 51 b 940 267 826 51 940 113 b 713 481 940 421 826 481 l 385 481 "
    },
    "\xd0\x83": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 435 1063 l 378 1063 l 494 1206 l 560 1206 m 168 0 l 117 0 l 117 964 l 714 964 l 714 913 l 168 913 "
    },
    "\xd0\x84": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 597 513 l 597 463 l 96 463 b 525 35 108 217 296 35 b 910 306 697 35 843 146 l 965 306 b 525 -17 896 117 725 -17 b 44 486 260 -17 44 200 b 525 988 44 771 260 988 b 967 667 731 988 900 856 l 911 667 b 525 936 847 826 701 936 b 96 513 297 936 110 754 "
    },
    "\xd0\x85": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 413 989 b 736 704 636 989 736 846 l 685 704 b 413 939 685 846 578 939 b 138 732 247 939 138 856 b 424 528 138 626 218 569 b 765 258 640 483 765 425 b 408 -18 765 90 625 -18 b 60 293 240 -18 60 81 l 111 293 b 408 35 111 115 261 35 b 714 258 597 35 714 119 b 414 478 714 378 639 432 b 86 732 243 511 86 567 b 413 989 86 886 217 989 "
    },
    "\xd0\x86": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xd0\x87": {
        ha: 290,
        x_min: 0,
        x_max: 0,
        o: "m 196 1078 l 196 1174 l 263 1174 l 263 1078 m 28 1078 l 28 1174 l 93 1174 l 93 1078 m 172 0 l 121 0 l 121 964 l 172 964 "
    },
    "\xd0\x88": {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 607 285 b 317 -18 607 101 493 -18 b 28 272 154 -18 28 110 l 79 272 b 317 35 79 138 181 35 b 556 285 464 35 556 131 l 556 964 l 607 964 "
    },
    "\xd0\x89": {
        ha: 1375,
        x_min: 0,
        x_max: 0,
        o: "m 1047 532 b 1326 267 1213 532 1326 422 b 1047 0 1326 110 1213 0 l 692 0 l 692 913 l 343 913 l 67 0 l 14 0 l 306 964 l 743 964 l 743 532 m 1275 267 b 1047 481 1275 421 1161 481 l 743 481 l 743 51 l 1047 51 b 1275 267 1161 51 1275 113 "
    },
    "\xd0\x8a": {
        ha: 1386,
        x_min: 0,
        x_max: 0,
        o: "m 168 481 l 168 0 l 117 0 l 117 964 l 168 964 l 168 532 l 703 532 l 703 964 l 754 964 l 754 532 l 1058 532 b 1338 267 1224 532 1338 422 b 1058 0 1338 110 1224 0 l 703 0 l 703 481 m 1286 267 b 1058 481 1286 421 1172 481 l 754 481 l 754 51 l 1058 51 b 1286 267 1172 51 1286 113 "
    },
    "\xd0\x8b": {
        ha: 1061,
        x_min: 0,
        x_max: 0,
        o: "m 385 0 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 l 385 913 l 385 532 l 689 532 b 968 267 854 532 968 422 l 968 0 l 917 0 l 917 267 b 689 481 917 421 803 481 l 385 481 "
    },
    "\xd0\x8c": {
        ha: 818,
        x_min: 0,
        x_max: 0,
        o: "m 450 1063 l 393 1063 l 510 1206 l 575 1206 m 168 357 l 168 0 l 117 0 l 117 964 l 168 964 l 168 428 l 696 964 l 768 964 l 401 593 l 828 0 l 764 0 l 365 556 "
    },
    "\xd0\x8e": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 558 1215 b 378 1071 538 1126 469 1071 b 196 1215 285 1071 217 1126 l 247 1215 b 378 1119 265 1153 310 1119 b 507 1215 444 1119 489 1153 l 558 1215 m 682 964 l 739 964 l 385 207 b 101 0 318 65 244 0 l 71 0 l 71 50 l 101 50 b 342 225 222 50 288 107 l 350 244 l 8 964 l 65 964 l 378 303 "
    },
    "\xd0\x8f": {
        ha: 929,
        x_min: 0,
        x_max: 0,
        o: "m 117 0 l 117 964 l 168 964 l 168 51 l 761 51 l 761 964 l 813 964 l 813 0 l 490 0 l 490 -153 l 439 -153 l 439 0 "
    },
    "\xd0\x90": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 190 332 l 63 0 l 7 0 l 376 964 l 433 964 l 803 0 l 747 0 l 619 332 m 404 893 l 210 383 l 600 383 "
    },
    "\xd0\x91": {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 814 267 b 535 0 814 110 700 0 l 117 0 l 117 964 l 718 964 l 718 913 l 168 913 l 168 532 l 535 532 b 814 267 700 532 814 422 m 763 267 b 535 481 763 421 649 481 l 168 481 l 168 51 l 535 51 b 763 267 649 51 763 113 "
    },
    "\xd0\x92": {
        ha: 869,
        x_min: 0,
        x_max: 0,
        o: "m 814 267 b 535 0 814 110 700 0 l 117 0 l 117 964 l 526 964 b 786 722 688 964 786 872 b 650 508 786 621 733 544 b 814 267 754 472 814 389 m 168 531 l 531 531 b 735 722 632 531 735 590 b 526 913 735 843 658 913 l 168 913 m 763 267 b 531 481 763 401 678 481 l 168 481 l 168 51 l 535 51 b 763 267 649 51 763 118 "
    },
    "\xd0\x93": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 168 0 l 117 0 l 117 964 l 714 964 l 714 913 l 168 913 "
    },
    "\xd0\x94": {
        ha: 1010,
        x_min: 0,
        x_max: 0,
        o: "m 985 51 l 985 -153 l 933 -153 l 933 0 l 76 0 l 76 -153 l 25 -153 l 25 51 l 96 51 l 338 964 l 667 964 l 908 51 m 856 51 l 628 913 l 376 913 l 149 51 "
    },
    "\xd0\x95": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 168 531 l 694 531 l 694 481 l 168 481 l 168 51 l 756 51 l 756 0 l 117 0 l 117 964 l 756 964 l 756 913 l 168 913 "
    },
    "\xd0\x96": {
        ha: 1107,
        x_min: 0,
        x_max: 0,
        o: "m 1013 964 l 1078 964 l 715 507 l 1096 0 l 1038 0 l 672 481 b 579 481 672 481 629 481 l 579 0 l 528 0 l 528 481 b 436 481 478 481 436 481 l 68 0 l 11 0 l 390 507 b 29 964 392 507 29 964 l 96 964 l 433 531 l 528 531 l 528 964 l 579 964 l 579 531 l 672 531 "
    },
    "\xd0\x97": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 717 256 b 379 -17 717 106 608 -17 b 29 274 169 -17 36 92 l 81 274 b 379 32 85 136 171 32 b 665 256 574 32 665 125 b 421 481 665 408 576 481 l 315 481 l 315 531 l 414 531 b 638 731 558 531 638 601 b 382 939 638 858 540 939 b 119 731 244 939 124 876 l 68 731 b 382 988 71 865 176 988 b 689 731 599 988 689 853 b 549 510 689 610 635 544 b 717 256 665 478 717 378 "
    },
    "\xd0\x98": {
        ha: 985,
        x_min: 0,
        x_max: 0,
        o: "m 167 964 l 167 71 l 811 964 l 869 964 l 869 0 l 818 0 l 818 893 l 174 0 l 115 0 l 115 964 "
    },
    "\xd0\x99": {
        ha: 985,
        x_min: 0,
        x_max: 0,
        o: "m 683 1215 b 503 1071 663 1126 594 1071 b 321 1215 410 1071 342 1126 l 372 1215 b 503 1119 390 1153 435 1119 b 632 1215 569 1119 614 1153 l 683 1215 m 167 964 l 167 71 l 811 964 l 869 964 l 869 0 l 818 0 l 818 893 l 174 0 l 115 0 l 115 964 "
    },
    "\xd0\x9a": {
        ha: 818,
        x_min: 0,
        x_max: 0,
        o: "m 168 357 l 168 0 l 117 0 l 117 964 l 168 964 l 168 428 l 696 964 l 768 964 l 401 593 l 828 0 l 764 0 l 365 556 "
    },
    "\xd0\x9b": {
        ha: 868,
        x_min: 0,
        x_max: 0,
        o: "m 64 0 l 11 0 l 276 964 l 592 964 l 857 0 l 804 0 l 553 913 l 315 913 "
    },
    "\xd0\x9c": {
        ha: 1135,
        x_min: 0,
        x_max: 0,
        o: "m 1018 0 l 965 0 l 965 843 l 596 0 l 539 0 l 168 843 l 168 0 l 117 0 l 117 964 l 171 964 l 567 63 l 963 964 l 1018 964 "
    },
    "\xd0\x9d": {
        ha: 983,
        x_min: 0,
        x_max: 0,
        o: "m 867 0 l 815 0 l 815 479 l 168 479 l 168 0 l 117 0 l 117 964 l 168 964 l 168 532 l 815 532 l 815 964 l 867 964 "
    },
    "\xd0\x9e": {
        ha: 1039,
        x_min: 0,
        x_max: 0,
        o: "m 521 988 b 997 486 789 988 997 768 b 521 -17 997 208 783 -17 b 44 486 258 -17 44 208 b 521 988 44 763 258 988 m 521 35 b 944 486 756 35 944 238 b 521 936 944 739 758 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 "
    },
    "\xd0\x9f": {
        ha: 956,
        x_min: 0,
        x_max: 0,
        o: "m 839 0 l 788 0 l 788 913 l 168 913 l 168 0 l 117 0 l 117 964 l 839 964 "
    },
    "\xd0\xa0": {
        ha: 821,
        x_min: 0,
        x_max: 0,
        o: "m 788 697 b 506 429 788 539 672 429 l 168 429 l 168 0 l 117 0 l 117 964 l 501 964 b 788 697 678 964 788 861 m 736 697 b 501 913 736 833 650 913 l 168 913 l 168 481 l 506 481 b 736 697 621 481 736 549 "
    },
    "\xd0\xa1": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 965 306 b 521 -17 896 117 722 -17 b 44 486 257 -17 44 208 b 521 988 44 763 257 988 b 967 667 728 988 900 856 l 911 667 b 521 936 847 826 699 936 b 96 486 286 936 96 733 b 521 35 96 236 286 35 b 910 306 694 35 843 146 l 965 306 "
    },
    "\xd0\xa2": {
        ha: 717,
        x_min: 0,
        x_max: 0,
        o: "m 385 913 l 385 0 l 333 0 l 333 913 l 10 913 l 10 964 l 710 964 l 710 913 "
    },
    "\xd0\xa3": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 682 964 l 739 964 l 385 207 b 101 0 318 65 244 0 l 71 0 l 71 50 l 101 50 b 342 225 222 50 288 107 l 350 244 l 8 964 l 65 964 l 378 303 "
    },
    "\xd0\xa4": {
        ha: 967,
        x_min: 0,
        x_max: 0,
        o: "m 517 875 b 926 486 765 875 926 701 b 517 97 926 272 761 97 l 508 97 l 508 0 l 457 0 l 457 97 l 449 97 b 40 486 204 97 40 271 b 449 875 40 699 204 875 l 457 875 l 457 964 l 508 964 l 508 875 m 508 149 l 517 149 b 875 486 739 149 875 300 b 517 824 875 674 740 824 l 508 824 m 457 824 l 449 824 b 92 486 226 824 92 671 b 449 149 92 299 226 149 l 457 149 "
    },
    "\xd0\xa5": {
        ha: 744,
        x_min: 0,
        x_max: 0,
        o: "m 374 444 l 72 0 l 10 0 l 342 490 l 21 964 l 83 964 l 374 536 l 664 964 l 726 964 l 404 490 l 738 0 l 675 0 "
    },
    "\xd0\xa6": {
        ha: 936,
        x_min: 0,
        x_max: 0,
        o: "m 761 964 l 813 964 l 813 51 l 886 51 l 886 -153 l 835 -153 l 835 0 l 117 0 l 117 964 l 168 964 l 168 51 l 761 51 "
    },
    "\xd0\xa7": {
        ha: 821,
        x_min: 0,
        x_max: 0,
        o: "m 653 964 l 704 964 l 704 0 l 653 0 l 653 376 l 372 376 b 85 693 200 376 85 476 l 85 964 l 136 964 l 136 693 b 372 428 136 492 235 428 l 653 428 "
    },
    "\xd0\xa8": {
        ha: 1246,
        x_min: 0,
        x_max: 0,
        o: "m 597 964 l 649 964 l 649 51 l 1078 51 l 1078 964 l 1129 964 l 1129 0 l 117 0 l 117 964 l 168 964 l 168 51 l 597 51 "
    },
    "\xd0\xa9": {
        ha: 1253,
        x_min: 0,
        x_max: 0,
        o: "m 1078 964 l 1129 964 l 1129 51 l 1203 51 l 1203 -153 l 1151 -153 l 1151 0 l 117 0 l 117 964 l 168 964 l 168 51 l 597 51 l 597 964 l 649 964 l 649 51 l 1078 51 "
    },
    "\xd0\xaa": {
        ha: 1014,
        x_min: 0,
        x_max: 0,
        o: "m 965 267 b 686 0 965 110 851 0 l 303 0 l 303 913 l 10 913 l 10 964 l 354 964 l 354 532 l 686 532 b 965 267 851 532 965 422 m 914 267 b 686 481 914 421 800 481 l 354 481 l 354 51 l 686 51 b 914 267 800 51 914 113 "
    },
    "\xd0\xab": {
        ha: 1032,
        x_min: 0,
        x_max: 0,
        o: "m 864 0 l 864 964 l 915 964 l 915 0 m 751 267 b 472 0 751 110 638 0 l 117 0 l 117 964 l 168 964 l 168 532 l 472 532 b 751 267 638 532 751 422 m 700 267 b 472 481 700 421 586 481 l 168 481 l 168 51 l 472 51 b 700 267 586 51 700 113 "
    },
    "\xd0\xac": {
        ha: 846,
        x_min: 0,
        x_max: 0,
        o: "m 800 267 b 521 0 800 110 686 0 l 117 0 l 117 964 l 168 964 l 168 532 l 521 532 b 800 267 686 532 800 422 m 749 267 b 521 481 749 421 635 481 l 168 481 l 168 51 l 521 51 b 749 267 635 51 749 113 "
    },
    "\xd0\xad": {
        ha: 1013,
        x_min: 0,
        x_max: 0,
        o: "m 415 463 l 415 513 l 917 513 b 497 936 904 754 724 936 b 101 667 319 936 165 826 l 46 667 b 497 988 113 856 290 988 b 968 486 761 988 968 771 b 497 -17 968 200 761 -17 b 47 306 296 -17 117 117 l 103 306 b 497 35 169 146 324 35 b 917 463 725 35 906 217 "
    },
    "\xd0\xae": {
        ha: 1333,
        x_min: 0,
        x_max: 0,
        o: "m 168 469 l 168 0 l 117 0 l 117 964 l 168 964 l 168 521 l 393 521 b 840 988 408 786 599 988 b 1289 486 1097 988 1289 774 b 840 -17 1289 203 1093 -17 b 392 469 593 -17 400 194 m 840 35 b 1236 486 1072 35 1236 238 b 840 936 1236 739 1075 936 b 443 486 608 936 443 733 b 840 35 443 236 608 35 "
    },
    "\xd0\xaf": {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 101 244 b 233 456 101 351 149 424 b 72 697 135 494 72 582 b 360 964 72 861 182 964 l 765 964 l 765 0 l 714 0 l 714 431 l 357 431 b 153 244 264 431 153 397 l 153 104 b 133 0 153 60 146 26 l 81 0 b 101 117 92 28 101 81 m 714 481 l 714 913 l 360 913 b 125 697 210 913 125 833 b 354 481 125 549 240 481 "
    },
    "\xd0\xb0": {
        ha: 760,
        x_min: 0,
        x_max: 0,
        o: "m 631 0 b 611 104 618 26 611 60 l 611 118 b 303 -12 554 38 444 -12 b 43 188 178 -12 43 50 b 347 401 43 350 194 388 b 611 521 506 417 611 433 b 381 683 611 653 486 683 b 133 532 250 683 164 629 l 81 532 b 381 733 113 660 219 733 b 663 521 560 733 663 656 l 663 117 b 683 0 663 81 672 28 m 611 424 b 353 354 556 372 451 363 b 99 189 169 336 99 288 b 303 39 99 71 232 39 b 611 260 457 39 611 108 "
    },
    "\xd0\xb1": {
        ha: 821,
        x_min: 0,
        x_max: 0,
        o: "m 71 664 b 408 1033 71 899 210 1033 l 535 1033 b 664 1057 593 1033 635 1044 l 664 1004 b 542 982 636 990 601 982 l 408 982 b 122 663 236 982 122 872 l 122 539 b 428 733 182 653 296 733 b 785 356 625 733 785 564 b 428 -17 785 150 625 -17 b 71 357 231 -17 71 150 l 71 664 m 733 356 b 428 683 733 535 596 683 b 122 356 260 683 122 535 b 428 33 122 176 260 33 b 733 356 596 33 733 179 "
    },
    "\xd0\xb2": {
        ha: 701,
        x_min: 0,
        x_max: 0,
        o: "m 515 386 b 643 207 600 358 643 292 b 414 0 643 64 547 0 l 101 0 l 101 715 l 406 715 b 611 532 526 715 611 654 b 515 386 611 457 578 410 m 406 411 b 560 532 513 411 560 446 b 406 665 560 624 497 665 l 153 665 l 153 411 m 153 50 l 414 50 b 592 207 517 50 592 94 b 414 363 592 296 538 363 l 153 363 "
    },
    "\xd0\xb3": {
        ha: 611,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 581 715 l 581 665 l 153 665 "
    },
    "\xd0\xb4": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 260 715 l 501 715 l 688 50 l 744 50 l 744 -133 l 693 -133 l 693 0 l 68 0 l 68 -133 l 17 -133 l 17 50 l 74 50 m 464 665 l 297 665 l 125 50 l 636 50 "
    },
    "\xd0\xb5": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xd0\xb6": {
        ha: 885,
        x_min: 0,
        x_max: 0,
        o: "m 299 378 b 22 715 299 379 22 715 l 88 715 l 340 400 b 415 400 357 400 385 400 l 415 715 l 467 715 l 467 400 b 542 400 497 400 525 400 l 792 715 l 858 715 b 583 378 858 715 583 379 l 883 0 l 821 0 l 543 351 l 467 351 l 467 0 l 415 0 l 415 351 l 340 351 l 64 0 l 1 0 l 299 378 "
    },
    "\xd0\xb7": {
        ha: 650,
        x_min: 0,
        x_max: 0,
        o: "m 465 383 b 597 197 553 358 597 289 b 328 -17 597 61 493 -17 b 25 218 124 -17 38 106 l 79 218 b 328 32 97 103 176 32 b 546 197 469 32 546 92 b 365 358 546 300 489 358 l 256 358 l 256 407 l 357 407 b 514 536 464 407 514 446 b 328 685 514 622 447 685 b 122 526 222 685 144 632 l 68 526 b 328 733 94 660 192 733 b 565 536 468 733 565 653 b 465 383 565 456 529 406 "
    },
    "\xd0\xb8": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 101 715 l 153 715 l 153 69 l 610 715 l 667 715 l 667 0 l 615 0 l 615 646 l 158 0 l 101 0 "
    },
    "\xd0\xb9": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 565 986 b 385 842 544 897 476 842 b 203 986 292 842 224 897 l 254 986 b 385 890 272 924 317 890 b 514 986 451 890 496 924 l 565 986 m 101 715 l 153 715 l 153 69 l 610 715 l 667 715 l 667 0 l 615 0 l 615 646 l 158 0 l 101 0 "
    },
    "\xd0\xba": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 153 715 l 153 272 l 576 715 l 646 715 l 375 436 l 681 0 l 619 0 l 339 397 b 153 206 339 399 200 254 "
    },
    "\xd0\xbb": {
        ha: 682,
        x_min: 0,
        x_max: 0,
        o: "m 64 0 l 13 0 l 208 715 l 474 715 l 669 0 l 618 0 l 436 665 l 246 665 "
    },
    "\xd0\xbc": {
        ha: 917,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 161 715 l 460 57 l 760 715 l 815 715 l 815 0 l 764 0 l 764 615 l 485 0 l 433 0 l 153 618 "
    },
    "\xd0\xbd": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 153 715 l 153 410 l 633 410 l 633 715 l 685 715 l 685 0 l 633 0 l 633 360 l 153 360 "
    },
    "\xd0\xbe": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 394 733 b 753 356 592 733 753 564 b 394 -17 753 150 592 -17 b 38 356 199 -17 38 150 b 394 733 38 564 199 733 m 394 32 b 700 356 564 32 700 178 b 394 685 700 538 564 685 b 89 356 226 685 89 538 b 394 32 89 178 226 32 "
    },
    "\xd0\xbf": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 667 715 l 667 0 l 615 0 l 615 665 l 153 665 "
    },
    "\xd1\x80": {
        ha: 846,
        x_min: 0,
        x_max: 0,
        o: "m 810 356 b 451 -17 810 150 649 -17 b 146 172 319 -17 206 60 l 146 -318 l 94 -318 l 94 715 l 146 715 l 146 542 b 451 733 206 656 319 733 b 810 356 649 733 810 564 m 757 356 b 451 681 757 535 621 681 b 146 356 283 681 146 535 b 451 35 146 179 283 35 b 757 356 621 35 757 179 "
    },
    "\xd1\x81": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 726 222 b 396 -17 679 78 554 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 494 554 733 678 639 l 671 494 b 396 681 625 608 524 681 b 90 356 228 681 90 535 b 396 35 90 179 228 35 b 672 222 528 35 629 107 l 726 222 "
    },
    "\xd1\x82": {
        ha: 607,
        x_min: 0,
        x_max: 0,
        o: "m 328 0 l 276 0 l 276 665 l 13 665 l 13 715 l 594 715 l 594 665 l 328 665 "
    },
    "\xd1\x83": {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 299 -104 b 21 -268 247 -240 147 -292 l 21 -219 b 250 -86 132 -236 207 -201 l 283 1 l 14 715 l 69 715 l 310 74 l 553 715 l 607 715 "
    },
    "\xd1\x84": {
        ha: 804,
        x_min: 0,
        x_max: 0,
        o: "m 428 732 b 765 356 614 718 765 554 b 428 -15 765 160 614 -1 l 428 -318 l 376 -318 l 376 -15 b 39 356 192 -3 39 158 b 376 732 39 556 192 719 l 376 1033 l 428 1033 l 428 732 m 428 33 b 713 356 585 47 713 188 b 428 683 713 528 585 669 m 376 683 b 90 356 219 669 90 528 b 376 33 90 186 219 47 "
    },
    "\xd1\x85": {
        ha: 600,
        x_min: 0,
        x_max: 0,
        o: "m 301 326 l 65 0 l 1 0 l 269 369 l 18 715 l 82 715 l 301 414 l 521 715 l 585 715 l 333 369 l 601 0 l 538 0 "
    },
    "\xd1\x86": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 597 715 l 649 715 l 649 50 l 722 50 l 722 -133 l 671 -133 l 671 0 l 101 0 l 101 715 l 153 715 l 153 50 l 597 50 "
    },
    "\xd1\x87": {
        ha: 682,
        x_min: 0,
        x_max: 0,
        o: "m 325 258 b 69 503 165 258 69 356 l 69 715 l 121 715 l 121 503 b 325 307 121 383 189 307 l 529 307 l 529 715 l 581 715 l 581 0 l 529 0 l 529 258 "
    },
    "\xd1\x88": {
        ha: 1024,
        x_min: 0,
        x_max: 0,
        o: "m 485 715 l 536 715 l 536 50 l 871 50 l 871 715 l 922 715 l 922 0 l 101 0 l 101 715 l 153 715 l 153 50 l 485 50 "
    },
    "\xd1\x89": {
        ha: 1032,
        x_min: 0,
        x_max: 0,
        o: "m 871 715 l 922 715 l 922 50 l 996 50 l 996 -133 l 944 -133 l 944 0 l 101 0 l 101 715 l 153 715 l 153 50 l 485 50 l 485 715 l 536 715 l 536 50 l 871 50 "
    },
    "\xd1\x8a": {
        ha: 778,
        x_min: 0,
        x_max: 0,
        o: "m 504 413 b 733 207 638 413 733 344 b 504 0 733 69 638 0 l 225 0 l 225 665 l 13 665 l 13 715 l 276 715 l 276 413 m 276 50 l 504 50 b 682 207 607 50 682 94 b 504 363 682 321 607 363 l 276 363 "
    },
    "\xd1\x8b": {
        ha: 831,
        x_min: 0,
        x_max: 0,
        o: "m 678 715 l 729 715 l 729 0 l 678 0 m 350 413 b 579 207 483 413 579 344 b 350 0 579 69 483 0 l 101 0 l 101 715 l 153 715 l 153 413 m 153 50 l 350 50 b 528 207 453 50 528 94 b 350 363 528 321 453 363 l 153 363 "
    },
    "\xd1\x8c": {
        ha: 688,
        x_min: 0,
        x_max: 0,
        o: "m 414 413 b 643 207 547 413 643 344 b 414 0 643 69 547 0 l 101 0 l 101 715 l 153 715 l 153 413 m 153 50 l 414 50 b 592 207 517 50 592 94 b 414 363 592 321 517 363 l 153 363 "
    },
    "\xd1\x8d": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 288 338 l 288 388 l 676 388 b 381 681 663 551 538 681 b 97 494 251 681 143 608 l 42 494 b 381 733 90 639 221 733 b 729 356 576 733 729 564 b 381 -17 729 150 576 -17 b 42 222 221 -17 89 78 l 96 222 b 381 35 139 107 247 35 b 678 338 542 35 668 169 "
    },
    "\xd1\x8e": {
        ha: 1036,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 153 715 l 153 396 l 319 396 b 654 733 338 585 482 733 b 992 356 840 733 992 564 b 654 -17 992 150 840 -17 b 318 346 472 -17 324 144 l 153 346 m 654 32 b 939 356 815 32 939 178 b 654 685 939 538 815 685 b 369 356 494 685 369 538 b 654 32 369 178 494 32 "
    },
    "\xd1\x8f": {
        ha: 725,
        x_min: 0,
        x_max: 0,
        o: "m 179 340 b 71 514 106 371 71 436 b 300 715 71 657 172 715 l 624 715 l 624 0 l 572 0 l 572 314 l 292 314 b 131 167 169 314 131 268 l 131 111 b 110 0 131 63 124 29 l 57 0 b 79 117 69 28 79 79 l 79 167 b 179 340 79 265 113 319 m 572 665 l 300 665 b 122 514 197 665 122 626 b 300 364 122 401 197 364 l 572 364 "
    },
    "\xd1\x91": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 464 826 l 464 922 l 529 922 l 529 826 m 275 826 l 275 922 l 340 922 l 340 826 m 90 358 b 404 35 92 172 231 35 b 683 222 572 35 649 128 l 738 222 b 404 -17 688 68 572 -17 b 39 356 200 -17 39 147 b 396 733 39 564 199 733 b 753 358 610 733 756 539 m 697 410 b 396 681 672 564 546 681 b 96 410 244 681 119 564 "
    },
    "\xd1\x92": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 14 860 l 14 911 l 101 911 l 101 1033 l 153 1033 l 153 911 l 425 911 l 425 860 l 153 860 l 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 l 703 -111 b 513 -318 703 -260 618 -318 l 449 -318 l 449 -268 l 513 -268 b 651 -111 610 -268 651 -211 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 860 "
    },
    "\xd1\x93": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 360 824 l 301 824 l 418 965 l 485 965 m 153 0 l 101 0 l 101 715 l 564 715 l 564 665 l 153 665 "
    },
    "\xd1\x94": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 90 338 b 396 35 100 169 233 35 b 672 222 528 35 629 107 l 726 222 b 396 -17 679 78 554 -17 b 39 356 199 -17 39 150 b 396 733 39 564 199 733 b 726 494 554 733 678 639 l 671 494 b 396 681 625 608 524 681 b 92 388 238 681 107 551 l 481 388 l 481 338 l 90 338 "
    },
    "\xd1\x95": {
        ha: 710,
        x_min: 0,
        x_max: 0,
        o: "m 664 203 b 614 67 665 153 649 103 b 378 -17 563 14 478 -17 b 46 208 197 -17 69 63 l 97 208 b 376 32 122 93 225 32 b 576 103 463 32 535 60 b 611 201 601 129 614 164 b 363 358 608 289 538 333 b 83 539 239 376 86 397 b 354 733 83 636 175 733 b 647 533 513 733 617 663 l 594 533 b 356 685 565 629 483 685 b 136 539 226 685 135 622 b 371 408 138 457 213 431 b 664 203 519 386 657 347 "
    },
    "\xd1\x96": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 160 836 l 108 836 l 108 964 l 160 964 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xd1\x97": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 183 826 l 183 922 l 249 922 l 249 826 m 15 826 l 15 922 l 81 922 l 81 826 m 160 0 l 108 0 l 108 715 l 160 715 "
    },
    "\xd1\x98": {
        ha: 253,
        x_min: 0,
        x_max: 0,
        o: "m 153 836 l 101 836 l 101 964 l 153 964 m 153 -137 b 103 -279 153 -201 136 -249 b -33 -317 71 -310 26 -324 l -33 -267 b 68 -242 14 -271 46 -261 b 101 -137 90 -221 101 -186 l 101 715 l 153 715 "
    },
    "\xd1\x99": {
        ha: 1090,
        x_min: 0,
        x_max: 0,
        o: "m 817 413 b 1046 207 950 413 1046 344 b 817 0 1046 69 950 0 l 539 0 l 539 665 l 246 665 l 64 0 l 13 0 l 208 715 l 590 715 l 590 413 m 590 50 l 817 50 b 994 207 919 50 994 94 b 817 363 994 321 919 363 l 590 363 "
    },
    "\xd1\x9a": {
        ha: 1111,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 153 715 l 153 413 l 560 413 l 560 715 l 611 715 l 611 413 l 838 413 b 1067 207 971 413 1067 344 b 838 0 1067 69 971 0 l 560 0 l 560 363 l 153 363 m 611 50 l 838 50 b 1015 207 940 50 1015 94 b 838 363 1015 321 940 363 l 611 363 "
    },
    "\xd1\x9b": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 153 594 b 411 733 204 679 297 733 b 703 432 594 733 703 618 l 703 0 l 651 0 l 651 432 b 410 683 651 589 567 683 b 153 432 265 683 153 576 l 153 0 l 101 0 l 101 860 l 14 860 l 14 911 l 101 911 l 101 1033 l 153 1033 l 153 911 l 425 911 l 425 860 l 153 860 "
    },
    "\xd1\x9c": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 101 0 l 101 715 l 153 715 l 153 272 l 576 715 l 646 715 l 375 436 l 681 0 l 619 0 l 339 397 b 153 206 339 399 200 254 m 383 824 l 325 824 l 442 965 l 508 965 "
    },
    "\xd1\x9e": {
        ha: 618,
        x_min: 0,
        x_max: 0,
        o: "m 494 986 b 314 842 474 897 406 842 b 132 986 221 842 153 897 l 183 986 b 314 890 201 924 246 890 b 443 986 381 890 425 924 l 494 986 m 299 -104 b 21 -268 247 -240 147 -292 l 21 -219 b 250 -86 132 -236 207 -201 l 283 1 l 14 715 l 69 715 l 310 74 l 553 715 l 607 715 "
    },
    "\xd1\x9f": {
        ha: 754,
        x_min: 0,
        x_max: 0,
        o: "m 403 -133 l 351 -133 l 351 0 l 101 0 l 101 715 l 153 715 l 153 50 l 601 50 l 601 715 l 653 715 l 653 0 l 403 0 "
    },
    "\xd2\x90": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 663 1115 l 714 1115 l 714 913 l 168 913 l 168 0 l 117 0 l 117 964 l 663 964 "
    },
    "\xd2\x91": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 535 715 l 535 849 l 586 849 l 586 665 l 153 665 l 153 0 l 101 0 l 101 715 "
    },
    "\xe2\x84\x96": {
        ha: 1547,
        x_min: 0,
        x_max: 0,
        o: "m 1222 419 b 950 701 1072 419 950 546 b 1222 985 950 857 1072 985 b 1492 701 1372 985 1492 857 b 1222 419 1492 546 1372 419 m 829 0 l 771 0 l 168 881 l 168 0 l 117 0 l 117 964 l 175 964 l 778 83 l 778 964 l 829 964 m 993 222 l 993 274 l 1438 274 l 1438 222 m 993 0 l 993 51 l 1438 51 l 1438 0 m 1222 935 b 1001 701 1097 935 1001 829 b 1222 469 1001 574 1097 469 b 1440 701 1347 469 1440 574 b 1222 935 1440 829 1347 935 "
    },
    "\xc3\x90": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 885 483 b 454 0 885 186 719 0 l 107 0 l 107 504 l 21 504 l 21 556 l 107 556 l 107 964 l 454 964 b 885 483 724 964 885 785 m 832 483 b 454 913 832 757 694 913 l 158 913 l 158 556 l 485 556 l 485 504 l 158 504 l 158 51 l 454 51 b 832 483 692 51 832 214 "
    }
}, x = "Chalet-ParisNineteenSixty", a = 1042, _ = -236, n = -75, i = 50, o = {
    yMin: -252,
    xMin: -41,
    yMax: 927,
    xMax: 1141
}, h = 1e3, e = {
    format: 0,
    copyright: "Copyright (C) 2000-2005, House Industries/Brand Design Co. Inc. All rights reserved.",
    fontFamily: "Chalet-ParisNineteenSixty",
    fontSubfamily: "Regular",
    uniqueID: "2.001;HOUS;Chalet-ParisNineteenSixty",
    fullName: "Chalet-ParisNineteenSixty",
    version: "Version 2.001;PS 002.000;hotconv 1.0.38",
    postScriptName: "Chalet-ParisNineteenSixty",
    trademark: "Chalet-ParisNineteenSixty is a trademark of House Industries.",
    manufacturer: "House Industries",
    designer: "House Industries",
    description: "Part of the Chalet collection from House Industries.",
    manufacturerURL: "http://www.houseind.com/",
    designerURL: "http://www.houseind.com/",
    licence: "House Industries Font Software License Agreement\n\nHOUSE INDUSTRIES PRODUCTS MAY NOT BE RETURNED OR EXCHANGED AFTER THE FONTS HAVE BEEN INSTALLED. \n\nPlease read this agreement carefully! By installing House Industries font software, you are agreeing to the",
    licenceURL: "http://www.houseind.com/license",
    preferredFamily: "Chalet",
    preferredSubfamily: "ParisNineteenSixty"
}, t = "normal", r = "normal", s = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: n,
    underlineThickness: i,
    boundingBox: o,
    resolution: h,
    original_font_information: e,
    cssFontWeight: t,
    cssFontStyle: r
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lVFTV"], null, "parcelRequire79a8")

//# sourceMappingURL=Chalet-ZU2FPU2K.3db3c93b.js.map
