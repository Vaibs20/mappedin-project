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
})({"ckpbz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "981e0a05d8729308";
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

},{}],"IyOjn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>o);
parcelHelpers.export(exports, "cssFontStyle", ()=>t);
parcelHelpers.export(exports, "cssFontWeight", ()=>e);
parcelHelpers.export(exports, "default", ()=>s);
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
        ha: 806,
        x_min: 42,
        x_max: 764,
        o: "m 764 497 q 736 271 764 367 q 659 113 708 176 q 544 20 610 51 q 402 -10 478 -10 q 260 20 326 -10 q 146 113 194 51 q 69 271 97 176 q 42 497 42 367 q 69 724 42 628 q 146 882 97 819 q 260 976 194 945 q 402 1006 326 1006 q 544 976 478 1006 q 659 882 610 945 q 736 724 708 819 q 764 497 764 628 m 635 497 q 616 689 635 611 q 565 813 597 766 q 490 881 533 860 q 402 901 448 901 q 314 881 356 901 q 240 813 272 860 q 189 689 208 766 q 169 497 169 611 q 189 306 169 383 q 240 182 208 229 q 314 114 272 135 q 402 94 356 94 q 490 114 448 94 q 565 182 533 135 q 616 306 597 229 q 635 497 635 383 z "
    },
    1: {
        ha: 806,
        x_min: 140,
        x_max: 733,
        o: "m 199 94 l 413 94 l 413 773 q 415 835 413 803 l 238 683 q 224 675 231 677 q 210 672 217 672 q 192 677 200 672 q 179 688 183 681 l 140 741 l 436 997 l 537 997 l 537 94 l 733 94 l 733 0 l 199 0 l 199 94 z "
    },
    2: {
        ha: 806,
        x_min: 72,
        x_max: 736,
        o: "m 417 1006 q 535 988 481 1006 q 630 933 590 969 q 693 846 670 897 q 716 729 716 794 q 699 626 716 674 q 654 536 683 579 q 589 452 626 492 q 510 369 551 411 l 248 101 q 304 113 276 108 q 359 117 333 117 l 692 117 q 724 106 713 117 q 736 75 736 94 l 736 0 l 72 0 l 72 42 q 77 69 72 56 q 94 95 83 83 l 413 415 q 485 493 453 456 q 541 567 518 530 q 577 643 565 605 q 590 726 590 682 q 576 802 590 769 q 538 857 562 835 q 481 889 513 878 q 410 900 448 900 q 341 889 373 900 q 284 858 309 878 q 243 811 260 838 q 219 751 226 784 q 202 722 213 731 q 173 713 191 713 q 166 714 169 713 q 157 715 162 714 l 92 726 q 130 846 102 794 q 200 934 158 899 q 298 988 243 969 q 417 1006 353 1006 z "
    },
    3: {
        ha: 806,
        x_min: 75,
        x_max: 743,
        o: "m 431 1006 q 547 988 494 1006 q 639 937 601 970 q 699 856 678 903 q 721 751 721 809 q 709 667 721 704 q 674 602 697 630 q 619 554 651 574 q 548 523 588 535 q 694 437 645 497 q 743 285 743 376 q 717 162 743 217 q 646 68 691 107 q 541 9 601 30 q 412 -11 481 -11 q 276 9 333 -11 q 181 63 220 28 q 117 145 142 98 q 75 249 92 193 l 128 271 q 157 277 142 277 q 182 271 171 277 q 198 253 192 265 q 201 247 199 250 q 203 240 202 244 q 227 195 213 220 q 265 147 241 169 q 323 110 288 125 q 410 94 358 94 q 502 111 463 94 q 567 156 541 128 q 606 216 593 183 q 619 282 619 249 q 609 356 619 322 q 570 413 598 389 q 492 451 542 438 q 365 465 442 465 l 365 555 q 473 569 428 556 q 546 605 517 582 q 587 660 574 628 q 600 731 600 692 q 586 806 600 774 q 549 858 573 838 q 493 890 526 879 q 424 900 461 900 q 354 889 386 900 q 298 858 322 878 q 256 811 273 838 q 231 751 240 783 q 215 722 226 731 q 186 713 203 713 q 179 714 183 713 q 170 715 175 714 l 106 726 q 143 846 115 794 q 214 934 171 899 q 311 988 256 969 q 431 1006 367 1006 z "
    },
    4: {
        ha: 806,
        x_min: 28,
        x_max: 778,
        o: "m 627 359 l 778 359 l 778 288 q 771 269 778 277 q 751 262 765 262 l 627 262 l 627 0 l 518 0 l 518 262 l 77 262 q 53 270 63 262 q 40 290 43 278 l 28 353 l 512 995 l 627 995 l 627 359 m 518 769 q 519 808 518 788 q 524 851 520 829 l 162 359 l 518 359 l 518 769 z "
    },
    5: {
        ha: 806,
        x_min: 75,
        x_max: 710,
        o: "m 679 941 q 663 898 679 915 q 606 881 646 881 l 294 881 l 248 619 q 392 636 326 636 q 529 613 469 636 q 628 550 588 590 q 689 455 669 510 q 710 335 710 400 q 682 192 710 256 q 606 83 654 128 q 492 13 558 38 q 351 -11 427 -11 q 267 -2 308 -11 q 192 21 227 6 q 128 54 158 35 q 75 94 98 73 l 113 147 q 146 165 125 165 q 177 154 159 165 q 219 130 194 143 q 278 106 244 117 q 358 95 312 95 q 452 112 410 95 q 523 159 494 128 q 569 233 553 190 q 585 330 585 276 q 571 414 585 376 q 530 478 558 451 q 462 519 503 504 q 366 533 421 533 q 288 527 328 533 q 205 507 248 521 l 127 530 l 208 995 l 679 995 l 679 941 z "
    },
    6: {
        ha: 806,
        x_min: 75,
        x_max: 746,
        o: "m 451 610 q 565 590 511 610 q 658 532 618 570 q 722 439 699 494 q 746 313 746 384 q 721 185 746 244 q 651 83 696 126 q 543 14 606 39 q 404 -11 480 -11 q 268 13 329 -11 q 165 81 208 37 q 98 188 122 125 q 75 328 75 251 q 104 467 75 394 q 197 626 133 541 l 449 965 q 476 986 458 978 q 515 995 493 995 l 625 995 l 280 558 q 358 596 315 583 q 451 610 401 610 m 194 307 q 208 219 194 259 q 249 151 222 180 q 314 107 276 123 q 402 92 353 92 q 492 108 452 92 q 561 152 533 124 q 606 219 590 181 q 622 304 622 258 q 606 392 622 353 q 563 459 591 431 q 497 501 535 486 q 411 515 458 515 q 321 498 361 515 q 252 452 281 481 q 209 386 224 424 q 194 307 194 348 z "
    },
    7: {
        ha: 806,
        x_min: 76,
        x_max: 753,
        o: "m 753 995 l 753 940 q 748 901 753 916 q 737 875 742 885 l 325 44 q 300 13 316 26 q 257 0 284 0 l 169 0 l 587 821 q 605 853 596 838 q 626 881 615 867 l 107 881 q 86 890 95 881 q 76 911 76 899 l 76 995 l 753 995 z "
    },
    8: {
        ha: 806,
        x_min: 67,
        x_max: 738,
        o: "m 402 -11 q 266 9 328 -11 q 160 65 204 28 q 91 155 115 102 q 67 272 67 207 q 117 430 67 368 q 260 519 167 492 q 141 606 181 548 q 101 744 101 664 q 123 847 101 799 q 184 931 144 895 q 279 986 224 966 q 402 1006 334 1006 q 525 986 469 1006 q 620 931 581 966 q 681 847 660 895 q 703 744 703 799 q 663 606 703 664 q 544 519 622 548 q 688 430 638 492 q 738 272 738 368 q 713 155 738 207 q 644 65 688 102 q 538 9 600 28 q 402 -11 476 -11 m 402 88 q 489 101 451 88 q 555 139 528 115 q 595 198 581 164 q 610 274 610 233 q 593 362 610 326 q 547 422 576 399 q 481 455 518 444 q 402 466 443 466 q 324 455 361 466 q 257 422 286 444 q 211 362 228 399 q 194 274 194 326 q 209 198 194 233 q 250 139 223 164 q 315 101 276 115 q 402 88 353 88 m 402 565 q 485 580 451 565 q 541 620 519 595 q 572 676 563 644 q 582 742 582 708 q 570 808 582 777 q 536 861 559 838 q 480 897 514 884 q 402 910 447 910 q 324 897 358 910 q 268 861 290 884 q 234 808 245 838 q 222 742 222 777 q 232 676 222 708 q 263 620 242 644 q 319 580 285 595 q 402 565 353 565 z "
    },
    9: {
        ha: 806,
        x_min: 103,
        x_max: 749,
        o: "m 381 408 q 275 427 325 408 q 186 482 224 446 q 125 572 148 519 q 103 694 103 625 q 127 816 103 759 q 195 915 151 873 q 299 982 239 958 q 432 1006 360 1006 q 562 983 503 1006 q 662 917 620 959 q 726 815 703 874 q 749 685 749 756 q 741 603 749 642 q 717 528 733 565 q 681 455 702 491 q 633 379 660 418 l 390 29 q 365 8 381 16 q 326 0 348 0 l 213 0 l 515 397 q 544 435 531 417 q 569 471 557 453 q 483 424 531 440 q 381 408 435 408 m 630 699 q 615 784 630 746 q 574 848 600 822 q 511 889 547 874 q 431 903 474 903 q 347 888 385 903 q 282 847 309 873 q 241 783 256 820 q 226 703 226 747 q 240 618 226 656 q 279 556 253 581 q 341 517 304 530 q 422 503 377 503 q 511 520 472 503 q 576 563 549 536 q 616 626 602 590 q 630 699 630 661 z "
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
        ha: 268,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "!": {
        ha: 476,
        x_min: 151,
        x_max: 324,
        o: "m 299 995 l 299 598 q 298 537 299 567 q 294 477 297 507 q 289 415 292 447 q 282 347 286 383 l 198 347 q 191 415 194 383 q 185 477 188 447 q 182 537 183 507 q 181 598 181 567 l 181 995 l 299 995 m 151 76 q 158 110 151 94 q 176 138 165 126 q 203 157 188 150 q 238 164 219 164 q 272 157 256 164 q 299 138 288 150 q 318 110 311 126 q 324 76 324 94 q 318 42 324 58 q 299 15 311 26 q 272 -4 288 3 q 238 -10 256 -10 q 203 -4 219 -10 q 176 15 188 3 q 158 42 165 26 q 151 76 151 58 z "
    },
    '"': {
        ha: 551,
        x_min: 106,
        x_max: 444,
        o: "m 213 995 l 213 794 l 202 686 q 190 652 200 664 q 159 640 181 640 q 131 652 141 640 q 117 686 121 664 l 106 794 l 106 995 l 213 995 m 444 995 l 444 794 l 433 686 q 422 652 431 664 q 390 640 412 640 q 362 652 372 640 q 348 686 352 664 l 337 794 l 337 995 l 444 995 z "
    },
    "#": {
        ha: 806,
        x_min: 38,
        x_max: 767,
        o: "m 549 294 l 490 0 l 434 0 q 407 12 418 0 q 396 42 396 24 q 396 48 396 45 q 397 53 397 50 l 447 294 l 275 294 l 226 47 q 205 11 220 22 q 169 0 189 0 l 114 0 l 173 294 l 72 294 q 47 302 56 294 q 38 329 38 310 q 38 337 38 333 q 39 345 38 341 l 44 385 l 186 385 l 231 611 l 70 611 l 79 663 q 95 692 83 683 q 135 702 108 702 l 244 702 l 294 951 q 314 983 299 972 q 349 995 328 995 l 405 995 l 347 702 l 518 702 l 576 995 l 631 995 q 660 985 649 995 q 672 958 672 974 q 671 949 672 952 l 620 702 l 767 702 l 758 650 q 742 620 755 630 q 703 611 729 611 l 607 611 l 562 385 l 686 385 q 712 377 703 385 q 721 349 721 369 q 720 341 721 345 q 719 333 720 338 l 713 294 l 549 294 m 288 385 l 460 385 l 505 611 l 333 611 l 288 385 z "
    },
    $: {
        ha: 806,
        x_min: 74,
        x_max: 736,
        o: "m 346 -8 q 193 33 262 -1 q 74 119 124 67 l 110 176 q 124 188 115 183 q 143 193 133 193 q 173 180 156 193 q 214 150 190 167 q 272 117 238 133 q 353 95 306 101 l 378 464 q 283 497 330 478 q 199 545 236 515 q 139 619 162 574 q 117 731 117 664 q 136 830 117 782 q 194 916 156 878 q 288 977 232 953 q 415 1004 343 1001 l 422 1104 q 433 1128 424 1117 q 457 1138 442 1138 l 503 1138 l 493 1001 q 619 963 566 992 q 713 894 672 935 l 683 849 q 651 828 669 828 q 627 836 642 828 q 593 857 613 845 q 547 880 573 868 q 486 896 520 891 l 463 560 q 562 526 513 544 q 649 480 610 508 q 712 409 688 451 q 736 302 736 366 q 715 185 736 240 q 655 88 694 130 q 557 20 615 47 q 424 -10 499 -6 l 416 -132 q 405 -155 415 -145 q 381 -165 396 -165 l 335 -165 l 346 -8 m 619 283 q 606 342 619 317 q 571 385 593 367 q 519 417 549 403 q 455 441 489 430 l 431 95 q 511 115 476 99 q 570 155 547 131 q 607 211 594 179 q 619 283 619 244 m 233 744 q 245 686 233 710 q 278 642 257 661 q 326 610 299 624 q 387 585 354 596 l 408 898 q 330 880 363 894 q 275 845 297 866 q 244 798 254 824 q 233 744 233 772 z "
    },
    "%": {
        ha: 1092,
        x_min: 50,
        x_max: 1041,
        o: "m 491 755 q 473 650 491 697 q 425 573 455 604 q 354 524 394 541 q 270 508 314 508 q 183 524 223 508 q 113 573 143 541 q 67 650 83 604 q 50 755 50 697 q 67 861 50 815 q 113 940 83 908 q 183 988 143 972 q 270 1005 223 1005 q 357 988 317 1005 q 427 940 398 972 q 474 861 457 908 q 491 755 491 815 m 394 755 q 385 833 394 801 q 358 885 375 865 q 318 915 341 906 q 270 924 296 924 q 222 915 244 924 q 183 885 199 906 q 157 833 166 865 q 147 755 147 801 q 157 678 147 710 q 183 627 166 647 q 222 598 199 607 q 270 590 244 590 q 318 598 296 590 q 358 627 341 607 q 385 678 375 647 q 394 755 394 710 m 839 970 q 858 989 848 982 q 885 995 868 995 l 974 995 l 247 20 q 230 6 240 11 q 207 0 220 0 l 115 0 l 839 970 m 1041 235 q 1023 131 1041 176 q 975 53 1005 85 q 905 5 944 22 q 821 -12 865 -12 q 734 5 774 -12 q 664 53 694 22 q 617 131 634 85 q 601 235 601 176 q 617 341 601 294 q 664 420 634 388 q 734 469 694 452 q 821 485 774 485 q 908 469 867 485 q 978 420 948 452 q 1024 341 1008 388 q 1041 235 1041 294 m 945 235 q 935 313 945 281 q 909 365 926 345 q 869 394 892 385 q 821 403 847 403 q 773 394 795 403 q 733 365 750 385 q 707 313 717 345 q 698 235 698 281 q 707 158 698 190 q 733 107 717 127 q 773 79 750 88 q 821 70 795 70 q 869 79 847 70 q 909 107 892 88 q 935 158 926 127 q 945 235 945 190 z "
    },
    "&": {
        ha: 976,
        x_min: 57,
        x_max: 972,
        o: "m 458 1006 q 558 989 513 1006 q 636 942 603 971 q 689 874 669 913 q 710 794 708 835 l 633 778 q 627 778 630 778 q 610 783 618 778 q 599 800 602 788 q 583 838 594 818 q 555 873 572 857 q 514 899 538 889 q 458 910 490 910 q 396 899 424 910 q 348 868 368 888 q 318 821 328 848 q 307 763 307 794 q 313 717 307 739 q 331 672 319 694 q 361 625 342 649 q 406 575 380 601 l 692 284 q 734 382 719 331 q 756 484 750 433 q 764 505 757 497 q 783 513 771 513 l 860 513 q 834 356 858 433 q 764 211 810 278 l 972 0 l 853 0 q 820 5 833 0 q 792 25 808 10 l 692 126 q 542 26 627 63 q 355 -11 457 -11 q 246 8 299 -11 q 150 62 192 26 q 83 149 108 98 q 57 265 57 201 q 73 357 57 314 q 118 438 90 401 q 187 503 147 474 q 274 553 226 533 q 211 658 231 607 q 191 763 191 708 q 209 858 191 813 q 263 935 228 902 q 347 987 297 968 q 458 1006 397 1006 m 183 275 q 199 195 183 230 q 243 138 216 161 q 305 102 270 114 q 376 90 340 90 q 515 118 453 90 q 624 194 577 147 l 331 490 q 220 395 257 451 q 183 275 183 340 z "
    },
    "'": {
        ha: 319,
        x_min: 106,
        x_max: 213,
        o: "m 213 995 l 213 794 l 202 686 q 190 652 200 664 q 159 640 181 640 q 131 652 141 640 q 117 686 121 664 l 106 794 l 106 995 l 213 995 z "
    },
    "(": {
        ha: 417,
        x_min: 93,
        x_max: 356,
        o: "m 201 437 q 239 148 201 288 q 349 -119 277 8 q 355 -132 353 -126 q 356 -143 356 -137 q 351 -159 356 -153 q 339 -170 347 -165 l 284 -203 q 195 -45 232 -124 q 136 113 159 33 q 103 272 114 192 q 93 437 93 352 q 103 601 93 521 q 136 761 114 682 q 195 918 159 840 q 284 1077 232 997 l 339 1043 q 351 1032 347 1038 q 356 1016 356 1026 q 349 992 356 1006 q 239 726 276 866 q 201 437 201 585 z "
    },
    ")": {
        ha: 417,
        x_min: 51,
        x_max: 315,
        o: "m 207 437 q 169 726 207 585 q 58 992 131 866 q 51 1016 51 1006 q 56 1032 51 1026 q 69 1043 61 1038 l 124 1077 q 212 918 176 997 q 271 761 249 840 q 304 601 294 682 q 315 437 315 521 q 304 272 315 352 q 271 113 294 192 q 212 -45 249 33 q 124 -203 176 -124 l 69 -170 q 56 -159 61 -165 q 51 -143 51 -153 q 53 -132 51 -137 q 58 -119 54 -126 q 169 148 131 8 q 207 437 207 288 z "
    },
    "*": {
        ha: 556,
        x_min: 67,
        x_max: 486,
        o: "m 246 599 l 246 736 q 248 761 246 749 q 254 784 249 773 q 217 753 240 767 l 98 684 l 67 736 l 187 806 q 238 822 212 820 q 211 827 224 824 q 187 840 199 831 l 67 910 l 97 962 l 217 892 q 257 856 242 878 q 248 882 251 869 q 246 908 246 894 l 246 1046 l 307 1046 l 307 909 q 297 859 307 881 q 314 877 305 869 q 335 892 324 885 l 455 961 l 485 909 l 366 840 q 343 828 354 832 q 319 822 331 824 q 343 817 331 821 q 366 806 354 813 l 486 735 l 456 683 l 335 753 q 313 768 323 760 q 296 787 303 776 q 307 737 307 764 l 307 599 l 246 599 z "
    },
    "+": {
        ha: 806,
        x_min: 69,
        x_max: 735,
        o: "m 452 810 l 452 513 l 735 513 l 735 419 l 452 419 l 452 121 l 351 121 l 351 419 l 69 419 l 69 513 l 351 513 l 351 810 l 452 810 z "
    },
    ",": {
        ha: 294,
        x_min: 65,
        x_max: 233,
        o: "m 65 85 q 71 116 65 101 q 88 141 77 130 q 114 158 99 151 q 147 164 129 164 q 184 156 168 164 q 211 135 201 149 q 228 104 222 122 q 233 65 233 86 q 224 0 233 34 q 199 -66 215 -33 q 157 -131 182 -99 q 101 -188 133 -162 l 81 -168 q 72 -149 72 -160 q 81 -130 72 -140 q 99 -109 88 -122 q 121 -80 110 -97 q 141 -43 132 -63 q 155 0 151 -23 l 146 0 q 113 6 128 0 q 88 24 99 13 q 71 51 77 35 q 65 85 65 67 z "
    },
    "-": {
        ha: 482,
        x_min: 69,
        x_max: 413,
        o: "m 69 469 l 413 469 l 413 364 l 69 364 l 69 469 z "
    },
    ".": {
        ha: 294,
        x_min: 61,
        x_max: 234,
        o: "m 61 76 q 68 110 61 94 q 86 138 74 126 q 113 157 97 150 q 147 164 129 164 q 181 157 165 164 q 209 138 197 150 q 227 110 221 126 q 234 76 234 94 q 227 42 234 58 q 209 15 221 26 q 181 -4 197 3 q 147 -10 165 -10 q 113 -4 129 -10 q 86 15 97 3 q 68 42 74 26 q 61 76 61 58 z "
    },
    "/": {
        ha: 518,
        x_min: -8,
        x_max: 526,
        o: "m 112 -15 q 83 -51 102 -39 q 44 -62 64 -62 l -8 -62 l 409 977 q 435 1011 418 999 q 474 1023 451 1023 l 526 1023 l 112 -15 z "
    },
    ":": {
        ha: 350,
        x_min: 89,
        x_max: 262,
        o: "m 89 76 q 95 110 89 94 q 114 138 102 126 q 141 157 125 150 q 175 164 157 164 q 209 157 193 164 q 237 138 225 150 q 255 110 249 126 q 262 76 262 94 q 255 42 262 58 q 237 15 249 26 q 209 -4 225 3 q 175 -10 193 -10 q 141 -4 157 -10 q 114 15 125 3 q 95 42 102 26 q 89 76 89 58 m 89 597 q 95 631 89 615 q 114 659 102 647 q 141 678 125 671 q 175 685 157 685 q 209 678 193 685 q 237 659 225 671 q 255 631 249 647 q 262 597 262 615 q 255 563 262 578 q 237 535 249 547 q 209 517 225 524 q 175 510 193 510 q 141 517 157 510 q 114 535 125 524 q 95 563 102 547 q 89 597 89 578 z "
    },
    ";": {
        ha: 350,
        x_min: 89,
        x_max: 262,
        o: "m 93 85 q 99 116 93 101 q 116 141 105 130 q 142 158 126 151 q 175 164 157 164 q 212 156 196 164 q 239 135 228 149 q 256 104 250 122 q 261 65 261 86 q 252 0 261 34 q 226 -66 243 -33 q 185 -131 210 -99 q 129 -188 160 -162 l 108 -168 q 99 -149 99 -160 q 109 -130 99 -140 q 127 -109 116 -122 q 149 -80 138 -97 q 169 -43 160 -63 q 183 0 178 -23 l 174 0 q 141 6 156 0 q 116 24 126 13 q 99 51 105 35 q 93 85 93 67 m 89 597 q 95 631 89 615 q 114 659 102 647 q 141 678 125 671 q 175 685 157 685 q 209 678 193 685 q 237 659 225 671 q 255 631 249 647 q 262 597 262 615 q 255 563 262 578 q 237 535 249 547 q 209 517 225 524 q 175 510 193 510 q 141 517 157 510 q 114 535 125 524 q 95 563 102 547 q 89 597 89 578 z "
    },
    "<": {
        ha: 806,
        x_min: 103,
        x_max: 640,
        o: "m 103 493 l 640 772 l 640 683 q 635 663 640 672 q 615 647 629 654 l 303 489 q 274 476 290 481 q 241 467 258 471 q 274 458 258 463 q 303 445 290 452 l 615 288 q 635 272 629 281 q 640 251 640 263 l 640 163 l 103 442 l 103 493 z "
    },
    "=": {
        ha: 806,
        x_min: 104,
        x_max: 701,
        o: "m 104 399 l 701 399 l 701 305 l 104 305 l 104 399 m 104 631 l 701 631 l 701 538 l 104 538 l 104 631 z "
    },
    ">": {
        ha: 806,
        x_min: 165,
        x_max: 702,
        o: "m 165 163 l 165 251 q 171 272 165 263 q 190 288 176 281 l 502 445 q 531 458 516 452 q 563 467 546 463 q 531 476 546 471 q 502 489 516 481 l 190 647 q 171 663 176 654 q 165 683 165 672 l 165 772 l 702 493 l 702 442 l 165 163 z "
    },
    "?": {
        ha: 553,
        x_min: 24,
        x_max: 528,
        o: "m 24 906 q 71 944 45 926 q 128 976 97 963 q 195 998 159 990 q 272 1006 231 1006 q 374 990 327 1006 q 455 945 421 974 q 508 874 489 916 q 528 781 528 833 q 512 690 528 728 q 473 623 497 651 q 420 573 449 594 q 367 533 392 551 q 325 495 342 514 q 304 453 307 476 l 292 347 l 207 347 l 199 463 l 199 470 q 214 522 199 499 q 254 564 230 544 q 305 604 278 584 q 357 648 333 624 q 396 702 381 672 q 412 774 412 733 q 400 828 412 804 q 368 870 388 853 q 320 896 348 887 q 262 905 293 905 q 189 894 219 905 q 138 872 159 884 q 105 849 117 859 q 83 838 92 838 q 56 854 66 838 l 24 906 m 160 76 q 166 110 160 94 q 184 138 173 126 q 212 157 196 150 q 246 164 228 164 q 280 157 264 164 q 308 138 296 150 q 326 110 319 126 q 333 76 333 94 q 326 42 333 58 q 308 15 319 26 q 280 -4 296 3 q 246 -10 264 -10 q 212 -4 228 -10 q 184 15 196 3 q 166 42 173 26 q 160 76 160 58 z "
    },
    "@": {
        ha: 1142,
        x_min: 60,
        x_max: 1086,
        o: "m 810 129 q 722 155 756 129 q 679 235 688 181 q 592 155 639 179 q 490 131 544 131 q 418 145 449 131 q 367 184 388 159 q 336 244 347 210 q 326 319 326 279 q 349 439 326 378 q 416 547 372 499 q 527 626 460 595 q 680 656 593 656 q 761 649 726 656 q 828 628 797 642 l 763 377 q 750 291 750 325 q 756 250 750 266 q 773 224 763 233 q 798 211 784 215 q 828 208 813 208 q 893 227 863 208 q 947 282 924 247 q 984 367 970 317 q 997 477 997 417 q 966 645 997 573 q 882 766 935 717 q 755 838 828 814 q 597 862 681 862 q 422 826 503 862 q 281 728 341 791 q 185 581 220 666 q 151 394 151 495 q 188 187 151 276 q 289 38 225 98 q 440 -53 353 -23 q 626 -84 526 -84 q 812 -61 731 -84 q 952 -3 893 -38 q 971 3 963 3 q 992 -13 985 3 l 1010 -59 q 841 -137 935 -109 q 626 -166 746 -166 q 402 -128 506 -166 q 223 -18 299 -90 q 103 158 147 54 q 60 394 60 263 q 79 540 60 470 q 133 671 98 610 q 216 782 167 732 q 324 868 265 833 q 453 924 384 904 q 597 944 522 944 q 722 930 660 944 q 837 889 783 916 q 938 822 892 862 q 1016 730 983 782 q 1068 615 1049 678 q 1086 477 1086 551 q 1065 339 1086 402 q 1007 228 1044 275 q 919 156 969 182 q 810 129 869 129 m 515 213 q 558 219 536 213 q 600 244 580 226 q 638 291 621 261 q 667 366 655 321 l 719 571 q 660 577 692 577 q 565 555 608 577 q 490 498 522 533 q 441 417 459 463 q 424 323 424 371 q 447 243 424 273 q 515 213 469 213 z "
    },
    A: {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 z "
    },
    B: {
        ha: 899,
        x_min: 121,
        x_max: 822,
        o: "m 121 0 l 121 995 l 438 995 q 596 977 530 995 q 705 926 663 959 q 768 844 748 892 q 789 735 789 796 q 777 665 789 699 q 743 601 766 631 q 684 549 719 572 q 602 512 649 526 q 767 433 711 490 q 822 283 822 376 q 799 168 822 220 q 731 78 776 116 q 621 20 686 41 q 473 0 556 0 l 121 0 m 256 453 l 256 107 l 471 107 q 570 120 528 107 q 638 157 611 133 q 677 214 665 181 q 690 287 690 247 q 635 409 690 364 q 470 453 581 453 l 256 453 m 256 549 l 433 549 q 532 562 490 549 q 601 597 574 574 q 642 650 628 619 q 655 719 655 682 q 602 848 655 807 q 438 889 549 889 l 256 889 l 256 549 z "
    },
    C: {
        ha: 951,
        x_min: 63,
        x_max: 895,
        o: "m 822 206 q 842 197 833 206 l 895 139 q 747 28 834 68 q 537 -11 660 -11 q 342 26 429 -11 q 192 130 254 63 q 97 291 131 197 q 63 497 63 385 q 99 703 63 610 q 201 865 135 797 q 359 969 267 932 q 563 1006 451 1006 q 752 972 672 1006 q 893 880 831 938 l 849 818 q 838 807 844 811 q 820 802 832 802 q 801 809 811 802 q 777 825 791 815 q 744 846 763 835 q 700 867 726 857 q 640 883 674 876 q 562 890 606 890 q 416 862 482 890 q 301 784 349 835 q 227 660 253 733 q 200 497 200 588 q 227 331 200 404 q 300 208 253 258 q 409 131 346 158 q 545 105 472 105 q 625 110 590 105 q 691 126 660 115 q 747 155 721 138 q 799 195 773 172 q 822 206 811 206 z "
    },
    D: {
        ha: 1046,
        x_min: 121,
        x_max: 983,
        o: "m 983 497 q 948 294 983 385 q 848 137 913 202 q 693 36 783 72 q 493 0 603 0 l 121 0 l 121 995 l 493 995 q 693 959 603 995 q 848 858 783 924 q 948 701 913 792 q 983 497 983 609 m 845 497 q 820 661 845 589 q 749 783 795 733 q 638 860 703 833 q 493 886 573 886 l 256 886 l 256 109 l 493 109 q 638 135 573 109 q 749 211 703 162 q 820 333 795 261 q 845 497 845 406 z "
    },
    E: {
        ha: 807,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 555 l 643 555 l 643 449 l 256 449 l 256 110 l 734 110 l 734 0 l 121 0 l 121 995 l 734 995 z "
    },
    F: {
        ha: 786,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 538 l 665 538 l 665 428 l 256 428 l 256 0 l 121 0 l 121 995 l 734 995 z "
    },
    G: {
        ha: 1019,
        x_min: 63,
        x_max: 933,
        o: "m 565 98 q 639 102 605 98 q 702 113 672 106 q 758 132 732 121 q 811 156 785 142 l 811 376 l 657 376 q 636 383 644 376 q 628 402 628 391 l 628 478 l 933 478 l 933 97 q 855 49 896 69 q 768 16 815 29 q 669 -5 722 2 q 555 -11 617 -11 q 356 26 447 -11 q 201 130 266 63 q 99 291 135 197 q 63 497 63 385 q 98 705 63 611 q 200 866 134 799 q 361 969 267 933 q 572 1006 455 1006 q 681 998 631 1006 q 775 973 732 989 q 856 933 819 956 q 924 881 892 910 l 886 819 q 856 801 874 801 q 831 808 844 801 q 792 832 814 818 q 740 859 771 846 q 667 881 709 872 q 567 890 625 890 q 415 862 483 890 q 299 784 347 835 q 226 660 251 733 q 200 497 200 588 q 227 329 200 403 q 302 203 253 255 q 417 125 351 152 q 565 98 484 98 z "
    },
    H: {
        ha: 1050,
        x_min: 121,
        x_max: 928,
        o: "m 928 0 l 792 0 l 792 453 l 256 453 l 256 0 l 121 0 l 121 995 l 256 995 l 256 551 l 792 551 l 792 995 l 928 995 l 928 0 z "
    },
    I: {
        ha: 426,
        x_min: 146,
        x_max: 281,
        o: "m 281 0 l 146 0 l 146 995 l 281 995 l 281 0 z "
    },
    J: {
        ha: 617,
        x_min: 42,
        x_max: 495,
        o: "m 495 344 q 475 194 495 260 q 414 83 454 128 q 316 13 374 38 q 182 -11 258 -11 q 42 8 115 -11 q 45 48 43 28 q 49 88 47 68 q 58 107 51 99 q 80 114 65 114 q 113 108 92 114 q 169 101 134 101 q 250 115 215 101 q 311 158 286 129 q 348 233 335 188 q 361 341 361 278 l 361 995 l 495 995 l 495 344 z "
    },
    K: {
        ha: 946,
        x_min: 135,
        x_max: 929,
        o: "m 269 559 l 319 559 q 361 566 346 559 q 391 588 377 572 l 722 963 q 752 988 738 981 q 788 995 766 995 l 903 995 l 524 567 q 496 540 509 551 q 469 522 483 528 q 503 503 488 515 q 533 472 517 490 l 929 0 l 813 0 q 790 2 799 0 q 775 8 781 4 q 763 17 768 11 q 751 28 757 22 l 408 424 q 393 438 400 432 q 378 448 387 444 q 358 454 369 452 q 330 456 347 456 l 269 456 l 269 0 l 135 0 l 135 995 l 269 995 l 269 559 z "
    },
    L: {
        ha: 714,
        x_min: 121,
        x_max: 686,
        o: "m 256 113 l 686 113 l 686 0 l 121 0 l 121 995 l 256 995 l 256 113 z "
    },
    M: {
        ha: 1278,
        x_min: 121,
        x_max: 1156,
        o: "m 610 360 q 627 325 620 343 q 642 288 635 306 q 656 325 649 307 q 674 360 664 342 l 1010 972 q 1029 992 1019 988 q 1057 995 1039 995 l 1156 995 l 1156 0 l 1038 0 l 1038 731 q 1039 763 1038 746 q 1041 797 1040 779 l 700 174 q 651 143 683 143 l 632 143 q 583 174 601 143 l 235 799 q 238 763 237 781 q 239 731 239 746 l 239 0 l 121 0 l 121 995 l 220 995 q 248 992 238 995 q 267 972 258 988 l 610 360 l 610 360 z "
    },
    N: {
        ha: 1050,
        x_min: 121,
        x_max: 928,
        o: "m 190 995 q 217 991 208 995 q 237 972 226 986 l 813 222 q 810 257 811 240 q 810 290 810 274 l 810 995 l 928 995 l 928 0 l 860 0 q 833 6 844 0 q 812 24 822 11 l 236 774 q 238 740 238 756 q 239 709 239 723 l 239 0 l 121 0 l 121 995 l 190 995 l 190 995 z "
    },
    O: {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 z "
    },
    P: {
        ha: 849,
        x_min: 135,
        x_max: 799,
        o: "m 269 372 l 269 0 l 135 0 l 135 995 l 428 995 q 593 973 523 995 q 708 911 663 951 q 777 814 754 871 q 799 687 799 757 q 775 560 799 617 q 704 460 751 502 q 588 395 657 419 q 428 372 518 372 l 269 372 m 269 479 l 428 479 q 530 494 486 479 q 604 537 574 510 q 649 603 634 565 q 665 687 665 641 q 606 835 665 782 q 428 889 547 889 l 269 889 l 269 479 z "
    },
    Q: {
        ha: 1108,
        x_min: 64,
        x_max: 1092,
        o: "m 1045 497 q 1031 364 1045 427 q 990 246 1017 301 q 924 147 963 192 q 836 70 885 103 l 1092 -206 l 981 -206 q 936 -199 956 -206 q 901 -174 917 -192 l 726 16 q 643 -3 686 3 q 554 -10 601 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 z "
    },
    R: {
        ha: 894,
        x_min: 135,
        x_max: 870,
        o: "m 269 415 l 269 0 l 135 0 l 135 995 l 416 995 q 579 976 510 995 q 693 921 648 957 q 759 834 738 885 q 781 719 781 783 q 764 621 781 667 q 716 539 747 575 q 639 476 684 502 q 535 438 593 451 q 580 395 560 423 l 870 0 l 751 0 q 697 28 714 0 l 438 384 q 413 408 426 401 q 371 415 399 415 l 269 415 m 269 513 l 410 513 q 514 527 469 513 q 589 568 558 542 q 634 630 619 594 q 649 710 649 666 q 591 844 649 799 q 416 889 532 889 l 269 889 l 269 513 z "
    },
    S: {
        ha: 736,
        x_min: 40,
        x_max: 685,
        o: "m 631 840 q 617 824 624 829 q 599 819 610 819 q 572 831 588 819 q 532 857 556 842 q 475 883 508 871 q 393 894 441 894 q 313 882 348 894 q 255 849 278 870 q 220 800 232 828 q 208 740 208 772 q 229 670 208 698 q 283 624 249 643 q 359 590 317 604 q 447 560 402 576 q 534 526 492 545 q 611 478 577 507 q 665 406 644 449 q 685 302 685 364 q 663 180 685 237 q 598 80 641 122 q 493 13 556 38 q 352 -11 431 -11 q 176 24 256 -11 q 40 119 97 59 l 79 183 q 93 195 85 190 q 110 201 101 201 q 144 185 125 201 q 191 151 163 169 q 259 116 219 132 q 356 101 299 101 q 442 114 404 101 q 505 151 479 127 q 545 208 531 175 q 559 283 559 242 q 539 357 559 328 q 485 405 518 385 q 409 438 451 424 q 321 466 366 451 q 234 499 276 480 q 158 547 191 517 q 104 622 124 577 q 83 733 83 667 q 104 835 83 785 q 163 922 124 884 q 259 983 202 960 q 391 1006 317 1006 q 543 980 474 1006 q 663 903 612 953 l 631 840 z "
    },
    T: {
        ha: 819,
        x_min: 19,
        x_max: 799,
        o: "m 799 995 l 799 882 l 477 882 l 477 0 l 342 0 l 342 882 l 19 882 l 19 995 l 799 995 z "
    },
    U: {
        ha: 1014,
        x_min: 111,
        x_max: 903,
        o: "m 508 107 q 618 128 569 107 q 700 186 667 149 q 752 276 734 224 q 769 390 769 328 l 769 995 l 903 995 l 903 390 q 876 231 903 304 q 798 103 849 157 q 673 19 747 49 q 508 -12 599 -12 q 342 19 416 -12 q 217 103 269 49 q 139 231 166 157 q 111 390 111 304 l 111 995 l 245 995 l 245 391 q 263 276 245 328 q 314 187 281 224 q 397 128 348 149 q 508 107 446 107 z "
    },
    V: {
        ha: 944,
        x_min: 6,
        x_max: 938,
        o: "m 6 995 l 113 995 q 142 986 131 995 q 159 963 153 977 l 440 261 q 458 210 450 238 q 474 152 466 182 q 487 210 480 182 q 504 261 494 238 l 784 963 q 801 985 789 975 q 830 995 813 995 l 938 995 l 533 0 l 411 0 l 6 995 z "
    },
    W: {
        ha: 1415,
        x_min: 10,
        x_max: 1405,
        o: "m 10 995 l 122 995 q 151 986 140 995 q 167 963 163 977 l 373 272 q 383 231 378 253 q 392 186 388 210 q 401 232 397 210 q 413 272 406 253 l 647 963 q 663 985 651 975 q 692 995 675 995 l 731 995 q 761 986 749 995 q 777 963 772 977 l 1010 272 q 1032 189 1022 235 q 1040 233 1036 212 q 1049 272 1043 253 l 1255 963 q 1270 985 1258 976 q 1300 995 1283 995 l 1405 995 l 1094 0 l 974 0 l 722 759 q 708 809 714 781 q 701 782 704 795 q 694 759 698 769 l 441 0 l 320 0 l 10 995 z "
    },
    X: {
        ha: 893,
        x_min: 10,
        x_max: 882,
        o: "m 352 511 l 24 995 l 158 995 q 179 990 172 995 q 192 976 186 985 l 451 578 q 466 610 456 592 l 711 974 q 725 989 717 983 q 742 995 732 995 l 871 995 l 541 517 l 882 0 l 749 0 q 725 8 733 0 q 710 26 716 16 l 444 443 q 431 415 439 428 l 172 26 q 157 8 165 16 q 135 0 149 0 l 10 0 l 352 511 z "
    },
    Y: {
        ha: 874,
        x_min: 6,
        x_max: 869,
        o: "m 504 396 l 504 0 l 370 0 l 370 396 l 6 995 l 124 995 q 152 986 142 995 q 170 964 163 977 l 398 577 q 421 531 412 553 q 438 489 431 510 q 455 532 446 510 q 478 577 464 553 l 705 964 q 722 985 711 975 q 750 995 733 995 l 869 995 l 504 396 z "
    },
    Z: {
        ha: 867,
        x_min: 60,
        x_max: 814,
        o: "m 814 995 l 814 945 q 799 901 814 922 l 236 110 l 804 110 l 804 0 l 60 0 l 60 53 q 73 92 60 74 l 637 885 l 86 885 l 86 995 l 814 995 z "
    },
    "[": {
        ha: 417,
        x_min: 99,
        x_max: 354,
        o: "m 99 -201 l 99 1065 l 354 1065 l 354 1016 q 345 992 354 1001 q 320 983 335 983 l 203 983 l 203 -119 l 320 -119 q 345 -127 335 -119 q 354 -152 354 -136 l 354 -201 l 99 -201 z "
    },
    "\\": {
        ha: 521,
        x_min: -14,
        x_max: 522,
        o: "m -14 1023 l 39 1023 q 78 1011 62 1023 q 104 977 95 999 l 522 -62 l 469 -62 q 430 -51 449 -62 q 401 -15 410 -39 l -14 1023 z "
    },
    "]": {
        ha: 417,
        x_min: 63,
        x_max: 318,
        o: "m 63 -152 q 72 -128 63 -138 q 97 -119 81 -119 l 214 -119 l 214 983 l 97 983 q 72 993 81 983 q 63 1016 63 1002 l 63 1065 l 318 1065 l 318 -201 l 63 -201 l 63 -152 z "
    },
    "^": {
        ha: 806,
        x_min: 110,
        x_max: 687,
        o: "m 358 995 l 438 995 l 687 547 l 597 547 q 577 553 585 547 q 563 570 569 560 l 427 815 q 411 845 418 831 q 400 875 405 860 q 374 815 390 844 l 240 570 q 226 553 234 560 q 204 547 218 547 l 110 547 l 358 995 z "
    },
    _: {
        ha: 547,
        x_min: 0,
        x_max: 547,
        o: "m 547 -115 l 547 -198 l 0 -198 l 0 -115 l 547 -115 z "
    },
    "`": {
        ha: 426,
        x_min: 26,
        x_max: 302,
        o: "m 144 1006 q 178 999 167 1006 q 199 976 189 992 l 302 808 l 231 808 q 208 812 217 808 q 189 827 199 817 l 26 1006 l 144 1006 z "
    },
    a: {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 z "
    },
    b: {
        ha: 776,
        x_min: 106,
        x_max: 726,
        o: "m 106 0 l 106 1023 l 230 1023 l 230 602 q 330 684 274 653 q 460 715 387 715 q 570 692 521 715 q 654 623 619 669 q 708 511 689 578 q 726 356 726 444 q 706 211 726 278 q 645 95 685 144 q 550 18 606 47 q 422 -10 493 -10 q 307 17 354 -10 q 224 90 259 43 l 217 26 q 185 0 212 0 l 106 0 m 419 616 q 314 588 359 616 q 230 510 268 560 l 230 169 q 304 105 263 124 q 394 86 344 86 q 546 156 493 86 q 599 356 599 226 q 586 474 599 425 q 551 555 574 524 q 495 601 528 587 q 419 616 462 616 z "
    },
    c: {
        ha: 649,
        x_min: 51,
        x_max: 622,
        o: "m 581 578 q 570 567 576 571 q 554 563 565 563 q 532 571 544 563 q 501 590 519 580 q 455 609 482 601 q 390 618 428 618 q 299 600 338 618 q 232 547 259 581 q 192 463 206 512 q 178 352 178 413 q 193 239 178 288 q 234 155 208 189 q 298 104 260 122 q 383 86 336 86 q 458 97 428 86 q 506 121 487 108 q 538 145 526 134 q 563 156 551 156 q 587 144 579 156 l 622 99 q 507 16 576 42 q 362 -10 438 -10 q 239 15 296 -10 q 141 85 183 39 q 75 199 99 131 q 51 352 51 266 q 73 497 51 431 q 137 612 95 564 q 241 688 179 660 q 383 715 303 715 q 513 691 456 715 q 614 623 570 667 l 581 578 z "
    },
    d: {
        ha: 776,
        x_min: 50,
        x_max: 670,
        o: "m 597 0 q 563 26 570 0 l 552 111 q 449 23 507 56 q 316 -10 391 -10 q 206 14 256 -10 q 122 82 157 37 q 69 194 88 127 q 50 349 50 262 q 71 494 50 427 q 131 610 92 561 q 226 688 170 660 q 354 716 283 716 q 465 694 419 716 q 547 633 510 672 l 547 1023 l 670 1023 l 670 0 l 597 0 m 357 90 q 463 118 417 90 q 547 197 508 146 l 547 537 q 472 601 513 583 q 382 619 431 619 q 231 549 283 619 q 178 349 178 479 q 190 232 178 281 q 224 151 201 183 q 281 105 247 119 q 357 90 314 90 z "
    },
    e: {
        ha: 728,
        x_min: 51,
        x_max: 672,
        o: "m 380 715 q 497 693 443 715 q 589 632 550 672 q 650 534 628 592 q 672 400 672 475 q 665 361 672 371 q 642 351 659 351 l 174 351 q 192 235 175 285 q 238 153 208 186 q 307 104 267 120 q 397 88 347 88 q 477 98 444 88 q 535 122 511 109 q 576 145 560 134 q 604 156 592 156 q 628 144 619 156 l 663 99 q 608 50 640 71 q 539 17 576 30 q 464 -3 503 3 q 387 -10 425 -10 q 252 15 314 -10 q 146 87 191 40 q 76 205 101 135 q 51 366 51 275 q 74 503 51 440 q 139 614 97 567 q 242 688 181 661 q 380 715 303 715 m 383 624 q 242 572 293 624 q 178 428 190 520 l 560 428 q 549 507 560 472 q 514 569 537 543 q 458 609 491 595 q 383 624 425 624 z "
    },
    f: {
        ha: 468,
        x_min: 18,
        x_max: 458,
        o: "m 129 0 l 129 598 l 51 607 q 27 618 37 610 q 18 639 18 625 l 18 690 l 129 690 l 129 758 q 146 865 129 818 q 195 944 163 912 q 271 993 226 976 q 371 1010 315 1010 q 458 996 418 1010 l 456 934 q 444 917 455 920 q 413 915 433 915 l 391 915 q 333 906 359 915 q 288 879 307 898 q 259 830 269 860 q 249 754 249 799 l 249 690 l 453 690 l 453 600 l 253 600 l 253 0 l 129 0 z "
    },
    g: {
        ha: 710,
        x_min: 35,
        x_max: 688,
        o: "m 338 715 q 424 705 384 715 q 497 676 464 695 l 688 676 l 688 630 q 658 601 688 607 l 578 590 q 602 489 602 544 q 582 395 602 438 q 527 324 563 353 q 444 278 492 294 q 338 262 396 262 q 245 274 289 262 q 211 244 223 260 q 200 213 200 228 q 220 175 200 188 q 274 156 240 162 q 349 149 307 151 q 436 145 392 148 q 522 134 480 142 q 598 109 565 126 q 651 61 631 92 q 672 -18 672 31 q 649 -106 672 -63 q 584 -181 626 -148 q 481 -234 542 -214 q 342 -253 419 -253 q 207 -238 265 -253 q 111 -197 149 -223 q 54 -138 73 -172 q 35 -67 35 -104 q 68 21 35 -15 q 158 79 101 58 q 111 116 128 93 q 93 178 93 140 q 99 210 93 194 q 116 242 104 226 q 144 273 127 258 q 183 299 160 288 q 101 376 131 328 q 72 489 72 424 q 91 582 72 540 q 147 654 111 624 q 231 699 182 683 q 338 715 280 715 m 558 -38 q 543 4 558 -12 q 503 29 528 20 q 446 42 478 38 q 377 48 413 46 q 303 51 341 49 q 232 59 266 53 q 168 13 192 40 q 143 -51 143 -14 q 155 -95 143 -75 q 192 -131 167 -116 q 255 -155 217 -146 q 344 -163 293 -163 q 434 -154 394 -163 q 501 -128 474 -145 q 543 -89 528 -112 q 558 -38 558 -66 m 338 344 q 405 354 376 344 q 453 383 433 365 q 482 428 472 402 q 492 485 492 454 q 452 588 492 550 q 338 626 413 626 q 225 588 264 626 q 185 485 185 550 q 195 428 185 454 q 225 383 206 402 q 273 354 244 365 q 338 344 301 344 z "
    },
    h: {
        ha: 772,
        x_min: 101,
        x_max: 687,
        o: "m 101 0 l 101 1023 l 225 1023 l 225 609 q 325 686 270 657 q 451 715 380 715 q 553 695 509 715 q 627 641 597 676 q 672 557 656 606 q 687 448 687 508 l 687 0 l 563 0 l 563 448 q 527 572 563 528 q 415 616 490 616 q 313 590 360 616 q 225 518 265 563 l 225 0 l 101 0 z "
    },
    i: {
        ha: 356,
        x_min: 90,
        x_max: 267,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 m 267 924 q 259 891 267 906 q 240 863 252 875 q 212 844 228 851 q 178 837 196 837 q 144 844 160 837 q 116 863 128 851 q 97 891 104 875 q 90 924 90 906 q 97 959 90 942 q 116 987 104 975 q 144 1006 128 999 q 178 1013 160 1013 q 212 1006 196 1013 q 240 987 228 999 q 259 959 252 975 q 267 924 267 942 z "
    },
    j: {
        ha: 353,
        x_min: -39,
        x_max: 267,
        o: "m 239 703 l 239 -52 q 228 -131 239 -94 q 193 -194 217 -167 q 131 -237 169 -222 q 40 -253 93 -253 q -1 -249 17 -253 q -39 -239 -20 -246 l -33 -172 q -27 -161 -32 -163 q -12 -158 -22 -158 q 0 -159 -6 -158 q 15 -159 6 -159 q 92 -134 69 -159 q 115 -52 115 -108 l 115 703 l 239 703 m 267 924 q 259 891 267 906 q 240 863 252 875 q 212 844 228 851 q 178 837 196 837 q 144 844 160 837 q 116 863 128 851 q 97 891 104 875 q 90 924 90 906 q 97 959 90 942 q 116 987 104 975 q 144 1006 128 999 q 178 1013 160 1013 q 212 1006 196 1013 q 240 987 228 999 q 259 959 252 975 q 267 924 267 942 z "
    },
    k: {
        ha: 728,
        x_min: 106,
        x_max: 706,
        o: "m 230 1023 l 230 421 l 262 421 q 285 425 276 421 q 305 440 294 428 l 527 678 q 548 697 538 690 q 576 703 558 703 l 688 703 l 429 428 q 410 407 419 416 q 389 391 401 398 q 411 372 401 383 q 431 347 422 361 l 706 0 l 594 0 q 568 6 579 0 q 548 24 558 12 l 317 313 q 296 332 306 327 q 265 336 285 336 l 230 336 l 230 0 l 106 0 l 106 1023 l 230 1023 z "
    },
    l: {
        ha: 356,
        x_min: 115,
        x_max: 239,
        o: "m 239 1023 l 239 0 l 115 0 l 115 1023 l 239 1023 z "
    },
    m: {
        ha: 1140,
        x_min: 101,
        x_max: 1055,
        o: "m 101 0 l 101 703 l 175 703 q 208 678 201 703 l 217 606 q 305 684 256 653 q 417 715 353 715 q 532 675 488 715 q 596 568 576 635 q 634 634 610 606 q 688 680 658 662 q 752 706 718 698 q 820 715 785 715 q 919 697 876 715 q 993 645 963 679 q 1039 561 1023 611 q 1055 448 1055 512 l 1055 0 l 931 0 l 931 448 q 895 573 931 531 q 790 616 859 616 q 732 605 760 616 q 684 574 705 594 q 651 521 663 553 q 639 448 639 490 l 639 0 l 515 0 l 515 448 q 481 574 515 533 q 382 616 447 616 q 297 591 336 616 q 225 524 258 567 l 225 0 l 101 0 z "
    },
    n: {
        ha: 772,
        x_min: 101,
        x_max: 687,
        o: "m 101 0 l 101 703 l 175 703 q 208 678 201 703 l 218 601 q 320 683 264 652 q 451 715 377 715 q 553 695 509 715 q 627 641 597 676 q 672 557 656 606 q 687 448 687 508 l 687 0 l 563 0 l 563 448 q 527 572 563 528 q 415 616 490 616 q 313 590 360 616 q 225 518 265 563 l 225 0 l 101 0 z "
    },
    o: {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 z "
    },
    p: {
        ha: 767,
        x_min: 101,
        x_max: 722,
        o: "m 101 -238 l 101 703 l 175 703 q 208 678 201 703 l 219 594 q 322 683 264 649 q 456 716 380 716 q 565 693 516 716 q 649 624 615 669 q 703 511 684 578 q 722 356 722 444 q 701 211 722 278 q 641 95 680 144 q 545 18 602 47 q 418 -10 489 -10 q 307 12 353 -10 q 225 73 260 33 l 225 -238 l 101 -238 m 415 616 q 309 588 354 616 q 225 510 263 560 l 225 169 q 300 105 259 124 q 390 86 340 86 q 541 156 488 86 q 594 356 594 226 q 582 474 594 425 q 547 555 569 524 q 490 601 524 587 q 415 616 457 616 z "
    },
    q: {
        ha: 776,
        x_min: 50,
        x_max: 670,
        o: "m 670 703 l 670 -238 l 547 -238 l 547 104 q 445 22 502 53 q 316 -10 389 -10 q 206 14 256 -10 q 122 82 157 37 q 69 194 88 127 q 50 349 50 262 q 71 494 50 427 q 131 610 92 561 q 226 688 170 660 q 354 716 283 716 q 470 692 422 716 q 555 623 517 667 l 563 678 q 597 703 570 703 l 670 703 m 357 90 q 463 118 417 90 q 547 197 508 146 l 547 537 q 472 600 513 581 q 382 619 431 619 q 231 549 283 619 q 178 349 178 479 q 190 232 178 281 q 224 151 201 183 q 281 105 247 119 q 357 90 314 90 z "
    },
    r: {
        ha: 560,
        x_min: 101,
        x_max: 529,
        o: "m 101 0 l 101 703 l 172 703 q 200 696 192 703 q 210 669 208 688 l 219 560 q 308 675 255 633 q 433 716 361 716 q 485 709 462 716 q 529 691 509 703 l 513 599 q 492 581 508 581 q 462 588 482 581 q 406 594 442 594 q 298 557 341 594 q 225 448 254 519 l 225 0 l 101 0 z "
    },
    s: {
        ha: 603,
        x_min: 43,
        x_max: 544,
        o: "m 504 588 q 478 572 496 572 q 455 580 468 572 q 423 597 442 588 q 377 614 403 606 q 315 622 351 622 q 258 614 283 622 q 216 592 233 606 q 189 560 198 578 q 179 520 179 542 q 195 475 179 493 q 236 444 210 457 q 294 420 262 431 q 361 399 327 410 q 428 374 396 388 q 487 339 461 360 q 528 288 513 318 q 544 215 544 258 q 526 125 544 167 q 475 54 509 84 q 392 6 441 24 q 278 -11 342 -11 q 144 13 204 -11 q 43 74 85 37 l 72 122 q 85 135 78 131 q 106 140 93 140 q 132 131 118 140 q 166 109 146 121 q 214 88 185 97 q 284 78 242 78 q 347 87 320 78 q 392 113 374 97 q 419 149 410 128 q 428 194 428 170 q 412 242 428 223 q 371 275 397 261 q 312 298 345 288 q 245 319 279 308 q 177 345 210 331 q 119 381 144 359 q 77 434 93 402 q 62 510 62 465 q 78 588 62 551 q 127 653 95 625 q 206 698 159 681 q 312 715 252 715 q 436 693 381 715 q 532 633 492 671 l 504 588 z "
    },
    t: {
        ha: 518,
        x_min: 31,
        x_max: 485,
        o: "m 315 -11 q 186 35 231 -11 q 142 169 142 82 l 142 600 l 57 600 q 38 607 46 600 q 31 627 31 613 l 31 676 l 146 691 l 174 908 q 183 925 176 919 q 203 932 191 932 l 265 932 l 265 690 l 467 690 l 467 600 l 265 600 l 265 178 q 287 112 265 133 q 342 90 308 90 q 376 95 362 90 q 401 107 390 101 q 418 118 411 113 q 431 124 426 124 q 449 112 441 124 l 485 53 q 408 6 453 23 q 315 -11 363 -11 z "
    },
    u: {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 255 q 245 131 208 175 q 356 88 282 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 451 20 508 51 q 320 -11 394 -11 q 218 8 263 -11 q 144 62 174 27 q 100 146 115 97 q 85 255 85 195 l 85 703 l 208 703 z "
    },
    v: {
        ha: 711,
        x_min: 13,
        x_max: 698,
        o: "m 13 703 l 114 703 q 138 696 128 703 q 152 678 148 688 l 331 225 q 346 175 340 200 q 356 126 351 150 q 368 175 362 150 q 384 225 374 200 l 565 678 q 578 696 569 689 q 601 703 588 703 l 698 703 l 411 0 l 299 0 l 13 703 z "
    },
    w: {
        ha: 1064,
        x_min: 10,
        x_max: 1055,
        o: "m 10 703 l 107 703 q 132 696 122 703 q 145 678 142 688 l 280 225 q 290 177 285 200 q 299 130 295 153 q 311 177 304 153 q 326 225 318 200 l 474 681 q 486 698 478 691 q 508 705 495 705 l 562 705 q 585 698 576 705 q 597 681 594 691 l 742 225 q 756 177 750 201 q 767 131 762 153 q 776 178 771 153 q 788 225 782 203 l 926 678 q 939 696 929 689 q 962 703 949 703 l 1055 703 l 827 0 l 729 0 q 704 24 711 0 l 549 501 q 540 533 543 517 q 533 565 536 549 q 526 533 529 549 q 517 500 522 516 l 359 24 q 331 0 351 0 l 238 0 l 10 703 z "
    },
    x: {
        ha: 700,
        x_min: 19,
        x_max: 679,
        o: "m 266 360 l 29 703 l 148 703 q 170 699 163 703 q 183 685 177 694 l 355 421 q 373 460 361 440 l 524 682 q 538 698 531 692 q 556 703 545 703 l 669 703 l 433 367 l 679 0 l 560 0 q 536 8 545 0 q 522 26 528 16 l 345 301 q 331 265 340 281 l 167 26 q 152 8 160 16 q 130 0 144 0 l 19 0 l 266 360 z "
    },
    y: {
        ha: 711,
        x_min: 10,
        x_max: 700,
        o: "m 308 -208 q 292 -230 301 -222 q 263 -238 283 -238 l 172 -238 l 300 41 l 10 703 l 117 703 q 142 695 133 703 q 155 678 151 688 l 343 235 q 354 204 349 219 q 362 173 358 189 q 372 204 367 189 q 383 235 376 219 l 565 678 q 580 696 569 689 q 601 703 590 703 l 700 703 l 308 -208 z "
    },
    z: {
        ha: 642,
        x_min: 49,
        x_max: 592,
        o: "m 592 651 q 588 625 592 638 q 575 603 583 613 l 194 97 l 578 97 l 578 0 l 49 0 l 49 51 q 53 73 49 60 q 66 96 58 85 l 449 606 l 70 606 l 70 703 l 592 703 l 592 651 z "
    },
    "{": {
        ha: 417,
        x_min: 31,
        x_max: 356,
        o: "m 126 295 q 101 367 126 339 q 31 395 77 395 l 31 469 q 101 497 77 469 q 126 569 126 525 q 120 638 126 604 q 108 706 115 672 q 96 775 101 740 q 90 846 90 810 q 105 934 90 894 q 148 1003 119 974 q 219 1049 176 1033 q 319 1065 262 1065 l 356 1065 l 356 1010 q 346 990 356 996 q 328 983 336 983 l 314 983 q 230 948 260 983 q 199 853 199 913 q 203 778 199 815 q 215 708 208 742 q 226 640 221 674 q 231 571 231 606 q 223 522 231 544 q 201 482 215 499 q 168 451 187 464 q 126 432 149 438 q 168 413 149 426 q 201 382 187 400 q 223 342 215 364 q 231 294 231 319 q 226 225 231 259 q 215 157 221 191 q 203 86 208 122 q 199 11 199 50 q 230 -84 199 -49 q 314 -119 260 -119 l 328 -119 q 346 -125 336 -119 q 356 -145 356 -131 l 356 -201 l 319 -201 q 219 -184 262 -201 q 148 -139 176 -168 q 105 -69 119 -110 q 90 19 90 -29 q 96 89 90 55 q 108 158 101 124 q 120 226 115 192 q 126 295 126 260 z "
    },
    "|": {
        ha: 417,
        x_min: 160,
        x_max: 256,
        o: "m 160 1065 l 256 1065 l 256 -238 l 160 -238 l 160 1065 z "
    },
    "}": {
        ha: 417,
        x_min: 61,
        x_max: 386,
        o: "m 291 295 q 297 226 291 260 q 309 158 302 192 q 321 89 315 124 q 326 19 326 55 q 312 -69 326 -29 q 269 -139 297 -110 q 198 -184 240 -168 q 98 -201 155 -201 l 61 -201 l 61 -145 q 71 -125 61 -131 q 89 -119 81 -119 l 103 -119 q 187 -84 156 -119 q 218 11 218 -49 q 213 86 218 50 q 202 157 208 122 q 191 225 196 191 q 186 294 186 259 q 194 342 186 319 q 216 382 201 364 q 249 413 230 400 q 291 432 268 426 q 249 451 268 438 q 216 482 230 464 q 194 522 201 499 q 186 571 186 544 q 191 640 186 606 q 202 708 196 674 q 213 778 208 742 q 218 853 218 815 q 187 948 218 913 q 103 983 156 983 l 89 983 q 71 990 81 983 q 61 1010 61 996 l 61 1065 l 98 1065 q 198 1049 155 1065 q 269 1003 240 1033 q 312 934 297 974 q 326 846 326 894 q 321 775 326 810 q 309 706 315 740 q 297 638 302 672 q 291 569 291 604 q 315 497 291 525 q 386 469 340 469 l 386 395 q 315 367 340 395 q 291 295 291 339 z "
    },
    "~": {
        ha: 806,
        x_min: 81,
        x_max: 724,
        o: "m 527 426 q 598 455 572 426 q 624 533 623 485 l 724 533 q 711 448 724 487 q 674 381 698 409 q 615 338 650 353 q 535 323 579 323 q 463 334 499 323 q 395 359 428 345 q 332 384 362 372 q 277 395 302 395 q 207 366 232 395 q 181 288 181 337 l 81 288 q 93 373 81 334 q 130 440 106 412 q 189 483 154 467 q 269 499 224 499 q 341 487 306 499 q 409 462 376 476 q 472 437 442 449 q 527 426 502 426 z "
    },
    "\xc2\xa0": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xc2\xa1": {
        ha: 476,
        x_min: 151,
        x_max: 325,
        o: "m 182 -238 l 182 138 q 183 198 182 169 q 186 258 184 228 q 191 320 188 288 q 199 388 194 352 l 283 388 q 290 320 287 352 q 295 258 293 288 q 298 198 297 228 q 299 138 299 169 l 299 -238 l 182 -238 m 151 628 q 158 662 151 647 q 176 690 165 678 q 204 708 188 701 q 238 715 219 715 q 272 708 256 715 q 299 690 288 701 q 318 662 311 678 q 325 628 325 647 q 318 594 325 610 q 299 566 311 578 q 272 547 288 554 q 238 540 256 540 q 204 547 219 540 q 176 566 188 554 q 158 594 165 578 q 151 628 151 610 z "
    },
    "\xc2\xa2": {
        ha: 806,
        x_min: 96,
        x_max: 713,
        o: "m 390 -8 q 272 27 326 -1 q 179 100 218 54 q 118 209 140 146 q 96 351 96 272 q 119 493 96 428 q 185 606 142 558 q 293 682 229 654 q 440 713 357 710 l 448 837 q 459 861 449 851 q 483 871 468 871 l 528 871 l 517 709 q 620 679 574 701 q 703 623 666 657 l 672 580 q 661 568 666 572 q 646 565 656 565 q 626 570 638 565 q 599 585 615 576 q 561 601 583 593 q 510 615 540 610 l 474 85 q 548 99 518 88 q 598 122 577 110 q 631 143 618 133 q 656 153 644 153 q 669 150 663 153 q 679 142 676 147 l 713 98 q 607 22 671 48 q 468 -8 542 -3 l 460 -130 q 449 -153 458 -143 q 425 -163 440 -163 l 379 -163 l 390 -8 m 219 351 q 266 172 219 239 q 397 90 313 106 l 433 617 q 340 593 380 613 q 273 539 300 574 q 232 458 246 505 q 219 351 219 410 z "
    },
    "\xc2\xa3": {
        ha: 806,
        x_min: 36,
        x_max: 774,
        o: "m 36 467 q 47 497 36 485 q 78 510 58 510 l 172 510 l 172 691 q 190 814 172 756 q 247 914 209 871 q 342 981 285 956 q 476 1006 399 1006 q 572 992 530 1006 q 647 955 614 978 q 703 900 679 931 q 744 833 727 869 l 694 801 q 680 795 687 797 q 665 793 672 793 q 647 797 656 793 q 631 810 638 801 q 602 844 617 828 q 570 873 588 860 q 530 892 553 885 q 476 899 507 899 q 399 885 432 899 q 343 843 365 870 q 310 778 321 816 q 299 692 299 740 l 299 510 l 605 510 l 605 460 q 594 437 605 447 q 569 426 584 426 l 299 426 l 299 258 q 279 168 299 206 q 224 99 259 130 q 264 105 244 102 q 305 107 284 107 l 774 107 l 774 54 q 770 35 774 44 q 760 18 767 26 q 743 5 753 10 q 721 0 733 0 l 51 0 l 51 80 q 97 99 75 87 q 135 128 118 110 q 161 170 151 146 q 172 226 172 194 l 172 426 l 36 426 l 36 467 z "
    },
    "\xc2\xa4": {
        ha: 806,
        x_min: 92,
        x_max: 714,
        o: "m 155 467 q 166 541 155 506 q 198 607 178 576 l 92 713 l 155 776 l 260 670 q 326 703 290 692 q 403 715 363 715 q 478 704 442 715 q 543 672 513 692 l 649 778 l 711 715 l 606 609 q 640 543 628 578 q 651 467 651 507 q 640 392 651 427 q 608 326 628 356 l 714 222 l 651 158 l 545 263 q 478 231 515 242 q 403 219 442 219 q 328 230 363 219 q 263 262 293 242 l 156 156 l 94 219 l 199 324 q 167 391 178 355 q 155 467 155 426 m 247 467 q 259 407 247 435 q 292 357 271 378 q 342 324 314 336 q 403 311 370 311 q 464 324 435 311 q 514 357 493 336 q 548 407 535 378 q 560 467 560 435 q 548 528 560 499 q 514 578 535 556 q 464 611 493 599 q 403 624 435 624 q 342 611 370 624 q 292 578 314 599 q 259 528 271 556 q 247 467 247 499 z "
    },
    "\xc2\xa5": {
        ha: 806,
        x_min: 31,
        x_max: 769,
        o: "m 101 434 l 314 434 l 31 995 l 134 995 q 163 986 152 995 q 181 964 174 978 l 372 571 q 389 526 382 547 q 401 486 396 506 q 412 527 406 506 q 428 571 418 547 l 619 964 q 636 985 624 976 q 665 995 647 995 l 769 995 l 485 434 l 698 434 l 698 363 l 462 363 l 462 290 l 698 290 l 698 219 l 462 219 l 462 0 l 338 0 l 338 219 l 101 219 l 101 290 l 338 290 l 338 363 l 101 363 l 101 434 z "
    },
    "\xc2\xa6": {
        ha: 417,
        x_min: 160,
        x_max: 256,
        o: "m 160 1065 l 256 1065 l 256 513 l 160 513 l 160 1065 m 160 314 l 256 314 l 256 -238 l 160 -238 l 160 314 z "
    },
    "\xc2\xa7": {
        ha: 699,
        x_min: 79,
        x_max: 627,
        o: "m 567 878 q 542 863 559 863 q 518 871 531 863 q 486 888 505 878 q 440 905 467 897 q 378 913 414 913 q 318 905 344 913 q 273 881 291 896 q 244 847 254 867 q 235 806 235 828 q 252 760 235 780 q 296 724 269 740 q 359 693 324 708 q 431 662 394 678 q 503 627 467 646 q 566 583 538 608 q 610 526 593 558 q 627 452 627 494 q 600 352 627 396 q 515 281 573 308 q 570 222 549 256 q 592 140 592 188 q 574 50 592 91 q 523 -22 557 8 q 440 -69 490 -52 q 326 -87 390 -87 q 193 -63 253 -87 q 92 -1 133 -39 l 120 46 q 134 60 126 55 q 153 65 142 65 q 180 55 166 65 q 214 33 194 45 q 264 11 234 21 q 337 1 293 1 q 399 10 372 1 q 445 34 426 19 q 474 72 464 50 q 483 119 483 93 q 466 174 483 151 q 420 214 449 197 q 356 247 392 232 q 281 276 319 261 q 207 309 243 292 q 142 351 171 327 q 97 408 114 376 q 79 485 79 440 q 109 582 79 539 q 203 650 139 626 q 147 713 169 676 q 125 801 125 749 q 142 879 125 842 q 190 944 158 916 q 269 988 222 972 q 375 1005 315 1005 q 500 983 444 1005 q 595 924 555 962 l 567 878 m 189 504 q 213 444 189 469 q 275 400 238 419 q 359 361 313 380 q 448 322 405 343 q 502 366 485 340 q 519 424 519 392 q 508 469 519 449 q 480 504 498 488 q 438 533 462 520 q 386 559 413 547 q 329 583 358 571 q 272 609 300 595 q 208 563 226 588 q 189 504 189 538 z "
    },
    "\xc2\xa8": {
        ha: 426,
        x_min: 10,
        x_max: 415,
        o: "m 166 895 q 160 865 166 879 q 142 841 153 851 q 117 824 131 831 q 87 818 103 818 q 58 824 72 818 q 33 841 44 831 q 16 865 22 851 q 10 895 10 879 q 16 926 10 911 q 33 951 22 940 q 58 968 44 962 q 87 974 72 974 q 117 968 103 974 q 142 951 131 962 q 160 926 153 940 q 166 895 166 911 m 415 895 q 409 865 415 879 q 392 841 403 851 q 367 824 381 831 q 337 818 353 818 q 307 824 321 818 q 282 841 292 831 q 265 865 272 851 q 259 895 259 879 q 265 926 259 911 q 282 951 272 940 q 307 968 292 962 q 337 974 321 974 q 367 968 353 974 q 392 951 381 962 q 409 926 403 940 q 415 895 415 911 z "
    },
    "\xc2\xa9": {
        ha: 1108,
        x_min: 47,
        x_max: 1062,
        o: "m 715 322 q 725 327 721 325 q 733 330 728 330 q 743 328 740 330 q 750 322 746 326 l 792 277 q 695 206 753 231 q 557 181 638 181 q 433 204 489 181 q 337 270 377 228 q 275 371 297 313 q 253 499 253 429 q 277 627 253 569 q 344 728 301 686 q 444 793 386 770 q 570 817 502 817 q 698 793 645 817 q 790 731 751 769 l 758 686 q 749 678 755 682 q 735 674 744 674 q 715 681 726 674 q 687 698 704 689 q 643 716 669 708 q 576 724 617 724 q 488 708 527 724 q 421 663 449 692 q 379 592 394 634 q 364 499 364 551 q 379 403 364 445 q 420 333 394 361 q 483 289 447 304 q 563 274 520 274 q 619 278 597 274 q 659 290 642 283 q 689 305 676 297 q 715 322 701 313 m 47 497 q 65 632 47 567 q 116 754 83 697 q 196 857 149 810 q 299 936 242 903 q 419 988 355 969 q 554 1006 484 1006 q 689 988 624 1006 q 810 936 754 969 q 913 857 867 903 q 993 754 960 810 q 1044 632 1026 697 q 1062 497 1062 567 q 1044 363 1062 428 q 993 242 1026 298 q 913 139 960 185 q 810 60 867 93 q 689 8 754 26 q 554 -10 624 -10 q 419 8 484 -10 q 299 60 355 26 q 196 139 242 93 q 116 242 149 185 q 65 363 83 298 q 47 497 47 427 m 117 497 q 132 378 117 435 q 176 272 147 322 q 244 182 204 222 q 332 113 283 142 q 437 68 381 84 q 554 53 493 53 q 726 88 646 53 q 866 182 806 122 q 959 323 925 242 q 994 497 994 404 q 978 617 994 559 q 934 724 963 674 q 866 815 906 774 q 777 884 826 856 q 672 929 728 913 q 554 945 615 945 q 383 910 463 945 q 244 814 303 875 q 151 672 185 753 q 117 497 117 590 z "
    },
    "\xc2\xaa": {
        ha: 475,
        x_min: 64,
        x_max: 414,
        o: "m 414 583 l 372 583 q 353 587 360 583 q 342 603 347 591 l 333 638 q 301 612 317 623 q 267 593 285 601 q 231 581 250 585 q 188 577 211 577 q 139 584 161 577 q 99 605 116 591 q 73 640 83 619 q 64 690 64 661 q 77 736 64 713 q 121 778 90 760 q 202 809 151 797 q 326 822 252 821 l 326 848 q 306 913 326 892 q 247 933 286 933 q 203 927 220 933 q 173 914 185 921 q 150 900 160 906 q 128 894 140 894 q 112 900 119 894 q 101 912 105 905 l 86 941 q 164 991 122 975 q 257 1007 206 1007 q 324 995 294 1007 q 373 963 353 983 q 403 913 393 942 q 414 848 414 883 l 414 583 m 215 641 q 276 654 250 641 q 326 692 301 667 l 326 765 q 244 757 278 763 q 190 742 210 751 q 160 720 169 733 q 151 694 151 708 q 169 653 151 665 q 215 641 187 641 z "
    },
    "\xc2\xab": {
        ha: 643,
        x_min: 96,
        x_max: 534,
        o: "m 96 360 l 96 376 l 269 646 l 309 626 q 324 614 319 622 q 328 597 328 606 q 322 574 328 585 l 211 393 q 192 367 201 376 q 211 342 202 358 l 322 161 q 327 149 325 156 q 328 138 328 143 q 309 109 328 118 l 269 90 l 96 360 m 301 360 l 301 376 l 474 646 l 515 626 q 529 614 524 622 q 534 597 534 606 q 527 574 534 585 l 417 393 q 397 367 407 376 q 417 342 408 358 l 527 161 q 532 149 531 156 q 534 138 534 143 q 515 109 534 118 l 474 90 l 301 360 z "
    },
    "\xc2\xac": {
        ha: 806,
        x_min: 103,
        x_max: 700,
        o: "m 103 513 l 700 513 l 700 219 l 595 219 l 595 419 l 103 419 l 103 513 z "
    },
    "\xc2\xad": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xc2\xae": {
        ha: 1108,
        x_min: 47,
        x_max: 1062,
        o: "m 47 497 q 65 632 47 567 q 116 754 83 697 q 196 857 149 810 q 299 936 242 903 q 419 988 355 969 q 554 1006 484 1006 q 689 988 624 1006 q 810 936 754 969 q 913 857 867 903 q 993 754 960 810 q 1044 632 1026 697 q 1062 497 1062 567 q 1044 363 1062 428 q 993 242 1026 298 q 913 139 960 185 q 810 60 867 93 q 689 8 754 26 q 554 -10 624 -10 q 419 8 484 -10 q 299 60 355 26 q 196 139 242 93 q 116 242 149 185 q 65 363 83 298 q 47 497 47 427 m 117 497 q 132 378 117 435 q 176 272 147 322 q 244 182 204 222 q 332 113 283 142 q 437 68 381 84 q 554 53 493 53 q 726 88 646 53 q 866 182 806 122 q 959 323 925 242 q 994 497 994 404 q 978 617 994 559 q 934 724 963 674 q 866 815 906 774 q 777 884 826 856 q 672 929 728 913 q 554 945 615 945 q 383 910 463 945 q 244 814 303 875 q 151 672 185 753 q 117 497 117 590 m 454 435 l 454 189 l 346 189 l 346 808 l 546 808 q 723 765 665 808 q 781 637 781 722 q 743 526 781 572 q 633 463 706 480 q 653 445 644 456 q 669 421 662 435 l 828 189 l 725 189 q 691 206 702 189 l 551 416 q 536 430 545 425 q 510 435 528 435 l 454 435 m 454 514 l 535 514 q 600 521 573 514 q 643 542 626 528 q 666 576 659 556 q 674 623 674 597 q 667 668 674 649 q 645 700 660 688 q 606 719 631 713 q 546 725 582 725 l 454 725 l 454 514 z "
    },
    "\xc2\xaf": {
        ha: 426,
        x_min: 14,
        x_max: 413,
        o: "m 14 936 l 413 936 l 413 855 l 14 855 l 14 936 z "
    },
    "\xc2\xb0": {
        ha: 551,
        x_min: 49,
        x_max: 501,
        o: "m 49 783 q 66 871 49 830 q 114 942 83 912 q 186 990 144 972 q 275 1007 227 1007 q 364 990 323 1007 q 436 942 406 972 q 484 871 467 912 q 501 783 501 830 q 484 697 501 738 q 436 626 467 656 q 364 578 406 596 q 275 560 323 560 q 186 578 227 560 q 114 626 144 596 q 66 697 83 656 q 49 783 49 738 m 137 783 q 147 728 137 753 q 176 684 158 703 q 220 655 195 665 q 275 644 246 644 q 329 655 304 644 q 373 684 354 665 q 402 728 392 703 q 413 783 413 753 q 402 838 413 812 q 373 882 392 863 q 329 912 354 901 q 275 923 304 923 q 220 912 246 923 q 176 882 195 901 q 147 838 158 863 q 137 783 137 812 z "
    },
    "\xc2\xb1": {
        ha: 806,
        x_min: 69,
        x_max: 735,
        o: "m 452 835 l 452 574 l 735 574 l 735 479 l 452 479 l 452 224 l 351 224 l 351 479 l 69 479 l 69 574 l 351 574 l 351 835 l 452 835 m 69 149 l 735 149 l 735 56 l 69 56 l 69 149 z "
    },
    "\xc2\xb2": {
        ha: 461,
        x_min: 57,
        x_max: 412,
        o: "m 240 1137 q 306 1126 276 1137 q 356 1097 335 1116 q 389 1052 377 1078 q 400 992 400 1025 q 391 941 400 965 q 368 895 383 917 q 335 853 353 874 q 295 813 316 833 l 183 698 q 215 705 199 702 q 246 708 231 708 l 381 708 q 404 700 396 708 q 412 678 412 692 l 412 625 l 57 625 l 57 655 q 60 674 57 664 q 72 692 64 683 l 226 844 q 258 879 243 861 q 285 916 274 897 q 302 952 296 934 q 309 990 309 971 q 288 1044 309 1025 q 236 1063 267 1063 q 184 1047 204 1063 q 155 1001 165 1030 q 143 985 149 991 q 124 980 136 980 q 118 980 122 980 q 112 981 115 981 l 63 990 q 121 1100 73 1063 q 240 1137 169 1137 z "
    },
    "\xc2\xb3": {
        ha: 461,
        x_min: 58,
        x_max: 413,
        o: "m 246 1137 q 310 1127 281 1137 q 359 1099 338 1117 q 390 1058 379 1081 q 401 1006 401 1034 q 319 886 401 917 q 389 846 365 873 q 413 776 413 819 q 398 708 413 738 q 359 659 383 679 q 304 630 335 640 q 239 619 272 619 q 170 628 199 619 q 120 654 141 637 q 84 696 99 671 q 58 753 69 721 l 97 770 q 117 774 107 774 q 144 758 137 774 q 155 738 149 749 q 172 717 161 727 q 197 701 182 708 q 234 694 212 694 q 272 701 256 694 q 299 719 288 708 q 316 744 310 730 q 322 772 322 758 q 316 808 322 793 q 296 833 310 823 q 260 847 283 842 q 205 852 238 852 l 205 913 q 290 934 265 913 q 315 991 315 955 q 294 1044 315 1026 q 241 1062 274 1062 q 188 1045 208 1062 q 160 1001 168 1029 q 148 985 154 990 q 132 980 142 980 q 126 980 129 980 q 119 981 123 981 l 73 990 q 93 1054 78 1026 q 131 1100 108 1081 q 183 1127 153 1118 q 246 1137 212 1137 z "
    },
    "\xc2\xb4": {
        ha: 426,
        x_min: 136,
        x_max: 415,
        o: "m 415 1006 l 253 827 q 234 812 243 817 q 210 808 224 808 l 136 808 l 239 976 q 260 999 249 992 q 294 1006 272 1006 l 415 1006 z "
    },
    "\xc2\xb5": {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 247 q 246 129 208 171 q 356 88 283 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 458 28 507 51 q 349 4 409 4 q 258 22 297 4 q 192 72 219 40 q 199 12 197 42 q 201 -44 201 -18 l 201 -238 l 140 -238 q 99 -224 113 -238 q 85 -185 85 -210 l 85 703 l 208 703 z "
    },
    "\xc2\xb6": {
        ha: 929,
        x_min: 29,
        x_max: 904,
        o: "m 904 995 l 904 889 l 752 889 l 752 -140 l 643 -140 l 643 889 l 451 889 l 451 -140 l 342 -140 l 342 458 q 212 480 269 458 q 114 537 154 501 q 51 623 73 574 q 29 728 29 672 q 51 837 29 788 q 114 921 73 886 q 212 976 154 956 q 342 995 269 995 l 904 995 z "
    },
    "\xc2\xb7": {
        ha: 379,
        x_min: 86,
        x_max: 294,
        o: "m 86 412 q 94 453 86 433 q 116 486 102 472 q 149 508 131 500 q 189 517 168 517 q 230 508 210 517 q 263 486 249 500 q 285 453 277 472 q 294 412 294 433 q 285 372 294 391 q 263 339 277 353 q 230 317 249 325 q 189 309 210 309 q 149 317 168 309 q 116 339 131 325 q 94 372 102 353 q 86 412 86 391 z "
    },
    "\xc2\xb8": {
        ha: 426,
        x_min: 92,
        x_max: 344,
        o: "m 119 -172 q 129 -174 124 -172 q 142 -180 135 -176 q 161 -185 150 -183 q 187 -187 172 -187 q 231 -176 216 -187 q 246 -147 246 -165 q 238 -124 246 -133 q 216 -109 231 -115 q 181 -99 202 -103 q 134 -91 160 -94 l 164 7 l 242 7 l 225 -49 q 316 -86 288 -62 q 344 -148 344 -110 q 333 -188 344 -170 q 302 -218 322 -206 q 254 -237 282 -231 q 193 -244 226 -244 q 139 -238 165 -244 q 92 -222 113 -232 l 103 -184 q 119 -172 108 -172 z "
    },
    "\xc2\xb9": {
        ha: 461,
        x_min: 83,
        x_max: 403,
        o: "m 120 684 l 222 684 l 222 990 l 225 1019 l 151 958 q 133 952 142 952 q 110 962 117 952 l 83 1001 l 238 1133 l 313 1133 l 313 684 l 403 684 l 403 625 l 120 625 l 120 684 z "
    },
    "\xc2\xba": {
        ha: 529,
        x_min: 50,
        x_max: 478,
        o: "m 265 1006 q 353 991 314 1006 q 420 949 392 976 q 463 881 448 921 q 478 792 478 841 q 463 701 478 742 q 420 633 448 661 q 353 590 392 605 q 265 575 314 575 q 176 590 216 575 q 109 633 137 605 q 65 701 81 661 q 50 792 50 742 q 65 881 50 841 q 109 949 81 921 q 176 991 137 976 q 265 1006 216 1006 m 265 649 q 352 685 324 649 q 381 791 381 722 q 352 897 381 860 q 265 933 324 933 q 176 897 205 933 q 147 791 147 860 q 176 685 147 722 q 265 649 205 649 z "
    },
    "\xc2\xbb": {
        ha: 643,
        x_min: 104,
        x_max: 542,
        o: "m 164 90 l 124 109 q 104 138 104 118 q 111 161 104 149 l 222 342 q 240 367 231 359 q 222 393 232 375 l 111 574 q 104 598 104 586 q 124 626 104 617 l 164 646 l 337 376 l 337 360 l 164 90 m 542 376 l 542 360 l 369 90 l 329 109 q 310 138 310 118 q 317 161 310 149 l 427 342 q 446 367 436 359 q 427 393 438 375 l 317 574 q 310 598 310 586 q 329 626 310 617 l 369 646 l 542 376 z "
    },
    "\xc2\xbc": {
        ha: 989,
        x_min: 71,
        x_max: 975,
        o: "m 899 185 l 975 185 l 975 140 q 970 127 975 133 q 956 122 965 122 l 899 122 l 899 0 l 824 0 l 824 122 l 611 122 q 591 128 599 122 q 583 142 584 133 l 576 181 l 813 506 l 899 506 l 899 185 m 108 547 l 210 547 l 210 853 l 213 883 l 138 822 q 120 815 130 815 q 98 825 104 815 l 71 864 l 225 996 l 300 996 l 300 547 l 390 547 l 390 488 l 108 488 l 108 547 m 824 353 q 824 381 824 366 q 827 413 825 397 l 660 185 l 824 185 l 824 353 m 301 37 q 273 8 288 15 q 238 0 258 0 l 185 0 l 753 953 q 781 984 765 973 q 819 995 797 995 l 873 995 l 301 37 z "
    },
    "\xc2\xbd": {
        ha: 989,
        x_min: 71,
        x_max: 953,
        o: "m 782 512 q 848 501 818 512 q 898 472 877 491 q 930 427 919 453 q 942 367 942 400 q 933 316 942 340 q 910 270 924 292 q 876 228 895 249 q 837 188 858 208 l 724 73 q 757 80 740 77 q 788 83 773 83 l 923 83 q 945 75 938 83 q 953 53 953 67 l 953 0 l 599 0 l 599 30 q 602 49 599 39 q 614 67 606 58 l 767 219 q 800 254 785 236 q 826 291 815 272 q 844 327 838 309 q 851 365 851 346 q 830 419 851 400 q 778 438 809 438 q 726 422 746 438 q 697 376 706 405 q 684 360 691 366 q 666 355 678 355 q 660 355 663 355 q 653 356 657 356 l 604 365 q 663 475 615 438 q 782 512 710 512 m 108 547 l 210 547 l 210 853 l 213 883 l 138 822 q 120 815 130 815 q 98 825 104 815 l 71 864 l 225 996 l 300 996 l 300 547 l 390 547 l 390 488 l 108 488 l 108 547 m 271 37 q 242 8 258 15 q 207 0 227 0 l 154 0 l 722 953 q 751 984 735 973 q 789 995 767 995 l 842 995 l 271 37 z "
    },
    "\xc2\xbe": {
        ha: 990,
        x_min: 47,
        x_max: 976,
        o: "m 900 185 l 976 185 l 976 140 q 971 127 976 133 q 957 122 966 122 l 900 122 l 900 0 l 824 0 l 824 122 l 612 122 q 592 128 599 122 q 583 142 585 133 l 576 181 l 814 506 l 900 506 l 900 185 m 235 1000 q 299 990 270 1000 q 348 962 327 980 q 379 921 368 944 q 390 869 390 897 q 308 749 390 781 q 377 709 353 736 q 401 639 401 682 q 387 572 401 601 q 348 523 372 542 q 293 493 324 503 q 228 483 261 483 q 159 491 188 483 q 109 517 130 500 q 73 559 88 534 q 47 617 58 584 l 85 633 q 106 638 96 638 q 133 622 126 638 q 144 601 138 613 q 160 581 150 590 q 186 564 171 571 q 223 558 201 558 q 261 565 244 558 q 288 582 277 572 q 305 607 299 593 q 310 635 310 621 q 305 671 310 656 q 285 696 299 686 q 249 710 272 706 q 194 715 226 715 l 194 776 q 279 797 254 776 q 303 854 303 818 q 283 907 303 889 q 230 925 263 925 q 177 909 197 925 q 149 865 157 892 q 137 848 143 853 q 121 843 131 843 q 115 843 118 843 q 108 844 112 844 l 62 853 q 82 917 67 890 q 120 963 97 944 q 172 991 142 981 q 235 1000 201 1000 m 824 353 q 825 381 824 366 q 828 413 826 397 l 660 185 l 824 185 l 824 353 m 305 37 q 276 8 292 15 q 241 0 261 0 l 188 0 l 756 953 q 785 984 769 973 q 823 995 801 995 l 876 995 l 305 37 z "
    },
    "\xc2\xbf": {
        ha: 553,
        x_min: 31,
        x_max: 535,
        o: "m 535 -147 q 487 -185 513 -167 q 431 -217 461 -203 q 364 -239 400 -231 q 286 -247 328 -247 q 184 -232 231 -247 q 103 -188 138 -217 q 50 -119 69 -160 q 31 -26 31 -78 q 46 64 31 27 q 86 127 62 101 q 138 172 110 153 q 191 208 167 191 q 234 241 216 224 q 254 281 251 258 l 267 388 l 351 388 l 360 272 l 360 264 q 344 212 360 233 q 305 173 328 190 q 253 139 281 156 q 202 102 226 123 q 162 53 178 81 q 147 -15 147 26 q 158 -70 147 -46 q 190 -111 170 -94 q 238 -137 210 -128 q 297 -146 265 -146 q 369 -135 339 -146 q 420 -112 399 -125 q 454 -90 441 -100 q 476 -79 467 -79 q 491 -83 485 -79 q 502 -95 497 -87 l 535 -147 m 225 627 q 232 661 225 645 q 250 689 238 677 q 277 708 261 701 q 311 715 293 715 q 345 708 329 715 q 373 689 361 701 q 391 661 385 677 q 398 627 398 645 q 391 593 398 608 q 373 565 385 577 q 345 547 361 553 q 311 540 329 540 q 277 547 293 540 q 250 565 261 553 q 232 593 238 577 q 225 627 225 608 z "
    },
    "\xc3\x80": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 361 1238 q 380 1236 372 1238 q 395 1233 388 1235 q 407 1226 401 1231 q 419 1215 413 1222 l 566 1074 l 469 1074 q 447 1076 455 1074 q 426 1087 438 1078 l 222 1238 l 361 1238 z "
    },
    "\xc3\x81": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 709 1238 l 505 1088 q 484 1076 493 1079 q 460 1074 475 1074 l 365 1074 l 511 1215 q 524 1226 518 1222 q 535 1233 529 1231 q 550 1236 542 1235 q 569 1238 558 1238 l 709 1238 z "
    },
    "\xc3\x82": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 699 1074 l 605 1074 q 587 1076 597 1074 q 571 1083 577 1078 l 481 1149 q 472 1154 475 1151 q 464 1149 467 1150 l 374 1083 q 358 1076 367 1078 q 340 1074 348 1074 l 246 1074 l 411 1219 l 533 1219 l 699 1074 z "
    },
    "\xc3\x83": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 556 1155 q 593 1169 581 1155 q 607 1209 606 1183 l 675 1209 q 667 1154 675 1179 q 645 1111 660 1129 q 609 1082 631 1092 q 560 1072 588 1072 q 513 1081 535 1072 q 470 1101 491 1090 q 432 1121 450 1112 q 397 1130 414 1130 q 361 1115 374 1130 q 347 1075 348 1100 l 278 1075 q 286 1130 278 1105 q 309 1174 294 1156 q 345 1202 324 1192 q 394 1213 367 1213 q 441 1203 419 1213 q 483 1184 463 1194 q 522 1164 503 1173 q 556 1155 540 1155 z "
    },
    "\xc3\x84": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 401 1157 q 395 1128 401 1142 q 378 1104 389 1115 q 354 1088 368 1094 q 324 1082 340 1082 q 295 1088 309 1082 q 272 1104 282 1094 q 255 1128 261 1115 q 249 1157 249 1142 q 255 1187 249 1173 q 272 1212 261 1201 q 295 1228 282 1222 q 324 1235 309 1235 q 354 1228 340 1235 q 378 1212 368 1222 q 395 1187 389 1201 q 401 1157 401 1173 m 697 1157 q 691 1128 697 1142 q 674 1104 685 1115 q 650 1088 664 1094 q 621 1082 636 1082 q 591 1088 605 1082 q 567 1104 577 1094 q 550 1128 556 1115 q 544 1157 544 1142 q 550 1187 544 1173 q 567 1212 556 1201 q 591 1228 577 1222 q 621 1235 605 1235 q 650 1228 636 1235 q 674 1212 664 1222 q 691 1187 685 1201 q 697 1157 697 1173 z "
    },
    "\xc3\x85": {
        ha: 944,
        x_min: 7,
        x_max: 940,
        o: "m 940 0 l 835 0 q 806 9 817 0 q 790 32 795 18 l 697 272 l 250 272 l 157 32 q 140 10 152 19 q 111 0 128 0 l 7 0 l 405 995 l 542 995 l 940 0 m 288 369 l 659 369 l 503 774 q 473 868 488 812 q 458 816 465 840 q 444 774 451 792 l 288 369 m 340 1152 q 350 1202 340 1179 q 379 1241 361 1225 q 420 1267 397 1258 q 470 1276 444 1276 q 521 1267 497 1276 q 564 1241 545 1258 q 592 1202 582 1225 q 603 1152 603 1179 q 592 1103 603 1126 q 564 1065 582 1081 q 521 1040 545 1049 q 470 1031 497 1031 q 420 1040 444 1031 q 379 1065 397 1049 q 350 1103 361 1081 q 340 1152 340 1126 m 401 1152 q 420 1102 401 1122 q 472 1083 439 1083 q 522 1102 503 1083 q 541 1152 541 1122 q 522 1203 541 1183 q 472 1222 503 1222 q 420 1203 439 1222 q 401 1152 401 1183 z "
    },
    "\xc3\x86": {
        ha: 1290,
        x_min: -17,
        x_max: 1218,
        o: "m 509 995 l 1218 995 l 1218 885 l 698 885 l 740 555 l 1128 555 l 1128 449 l 753 449 l 795 110 l 1218 110 l 1218 0 l 682 0 l 648 272 l 262 272 l 138 31 q 117 9 130 17 q 86 0 104 0 l -17 0 l 509 995 m 313 369 l 635 369 l 570 892 q 552 840 562 864 q 532 794 542 816 l 313 369 z "
    },
    "\xc3\x87": {
        ha: 951,
        x_min: 63,
        x_max: 895,
        o: "m 447 -172 q 456 -174 451 -172 q 469 -180 462 -176 q 488 -185 477 -183 q 514 -187 499 -187 q 558 -176 543 -187 q 573 -147 573 -165 q 565 -124 573 -133 q 543 -109 558 -115 q 508 -99 529 -103 q 461 -91 488 -94 l 486 -9 q 311 40 390 -1 q 177 147 233 81 q 92 302 122 213 q 63 497 63 391 q 99 703 63 610 q 201 865 135 797 q 359 969 267 932 q 563 1006 451 1006 q 752 972 672 1006 q 893 880 831 938 l 849 818 q 838 807 844 811 q 820 802 832 802 q 801 809 811 802 q 777 825 791 815 q 744 846 763 835 q 700 867 726 857 q 640 883 674 876 q 562 890 606 890 q 416 862 482 890 q 301 784 349 835 q 227 660 253 733 q 200 497 200 588 q 227 331 200 404 q 300 208 253 258 q 409 131 346 158 q 545 105 472 105 q 625 110 590 105 q 691 126 660 115 q 747 155 721 138 q 799 195 773 172 q 822 206 811 206 q 842 197 833 206 l 895 139 q 757 33 838 72 q 563 -10 676 -6 l 552 -49 q 643 -86 615 -62 q 671 -148 671 -110 q 660 -188 671 -170 q 629 -218 649 -206 q 581 -237 609 -231 q 520 -244 553 -244 q 466 -238 492 -244 q 419 -222 440 -232 l 431 -184 q 447 -172 435 -172 z "
    },
    "\xc3\x88": {
        ha: 807,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 555 l 643 555 l 643 449 l 256 449 l 256 110 l 734 110 l 734 0 l 121 0 l 121 995 l 734 995 m 325 1238 q 344 1236 336 1238 q 359 1233 352 1235 q 371 1226 365 1231 q 383 1215 376 1222 l 530 1074 l 433 1074 q 410 1076 419 1074 q 390 1087 402 1078 l 185 1238 l 325 1238 z "
    },
    "\xc3\x89": {
        ha: 807,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 555 l 643 555 l 643 449 l 256 449 l 256 110 l 734 110 l 734 0 l 121 0 l 121 995 l 734 995 m 673 1238 l 469 1088 q 448 1076 457 1079 q 424 1074 439 1074 l 328 1074 l 475 1215 q 488 1226 482 1222 q 499 1233 493 1231 q 514 1236 506 1235 q 533 1238 522 1238 l 673 1238 z "
    },
    "\xc3\x8a": {
        ha: 807,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 555 l 643 555 l 643 449 l 256 449 l 256 110 l 734 110 l 734 0 l 121 0 l 121 995 l 734 995 m 663 1074 l 569 1074 q 551 1076 560 1074 q 535 1083 541 1078 l 444 1149 q 436 1154 439 1151 q 428 1149 431 1150 l 338 1083 q 322 1076 331 1078 q 303 1074 312 1074 l 210 1074 l 375 1219 l 497 1219 l 663 1074 z "
    },
    "\xc3\x8b": {
        ha: 807,
        x_min: 121,
        x_max: 734,
        o: "m 734 995 l 734 885 l 256 885 l 256 555 l 643 555 l 643 449 l 256 449 l 256 110 l 734 110 l 734 0 l 121 0 l 121 995 l 734 995 m 365 1157 q 359 1128 365 1142 q 342 1104 353 1115 q 318 1088 332 1094 q 288 1082 303 1082 q 259 1088 273 1082 q 235 1104 246 1094 q 219 1128 225 1115 q 213 1157 213 1142 q 219 1187 213 1173 q 235 1212 225 1201 q 259 1228 246 1222 q 288 1235 273 1235 q 318 1228 303 1235 q 342 1212 332 1222 q 359 1187 353 1201 q 365 1157 365 1173 m 661 1157 q 655 1128 661 1142 q 638 1104 649 1115 q 614 1088 628 1094 q 585 1082 600 1082 q 555 1088 569 1082 q 531 1104 541 1094 q 514 1128 520 1115 q 508 1157 508 1142 q 514 1187 508 1173 q 531 1212 520 1201 q 555 1228 541 1222 q 585 1235 569 1235 q 614 1228 600 1235 q 638 1212 628 1222 q 655 1187 649 1201 q 661 1157 661 1173 z "
    },
    "\xc3\x8c": {
        ha: 426,
        x_min: -36,
        x_max: 308,
        o: "m 281 0 l 146 0 l 146 995 l 281 995 l 281 0 m 103 1238 q 123 1236 115 1238 q 137 1233 131 1235 q 149 1226 144 1231 q 162 1215 155 1222 l 308 1074 l 212 1074 q 189 1076 197 1074 q 169 1087 181 1078 l -36 1238 l 103 1238 z "
    },
    "\xc3\x8d": {
        ha: 426,
        x_min: 107,
        x_max: 451,
        o: "m 281 0 l 146 0 l 146 995 l 281 995 l 281 0 m 451 1238 l 247 1088 q 226 1076 235 1079 q 203 1074 217 1074 l 107 1074 l 253 1215 q 266 1226 260 1222 q 278 1233 272 1231 q 292 1236 284 1235 q 312 1238 300 1238 l 451 1238 z "
    },
    "\xc3\x8e": {
        ha: 426,
        x_min: -12,
        x_max: 441,
        o: "m 281 0 l 146 0 l 146 995 l 281 995 l 281 0 m 441 1074 l 347 1074 q 329 1076 339 1074 q 313 1083 319 1078 l 223 1149 q 215 1154 217 1151 q 206 1149 209 1150 l 116 1083 q 100 1076 110 1078 q 82 1074 90 1074 l -12 1074 l 153 1219 l 276 1219 l 441 1074 z "
    },
    "\xc3\x8f": {
        ha: 426,
        x_min: -10,
        x_max: 439,
        o: "m 281 0 l 146 0 l 146 995 l 281 995 l 281 0 m 143 1157 q 137 1128 143 1142 q 120 1104 131 1115 q 95 1088 110 1094 q 65 1082 81 1082 q 37 1088 51 1082 q 13 1104 24 1094 q -3 1128 3 1115 q -10 1157 -10 1142 q -3 1187 -10 1173 q 13 1212 3 1201 q 37 1228 24 1222 q 65 1235 51 1235 q 95 1228 81 1235 q 120 1212 110 1222 q 137 1187 131 1201 q 143 1157 143 1173 m 439 1157 q 433 1128 439 1142 q 416 1104 426 1115 q 392 1088 406 1094 q 363 1082 378 1082 q 333 1088 347 1082 q 308 1104 319 1094 q 292 1128 298 1115 q 286 1157 286 1142 q 292 1187 286 1173 q 308 1212 298 1201 q 333 1228 319 1222 q 363 1235 347 1235 q 392 1228 378 1235 q 416 1212 406 1222 q 433 1187 426 1201 q 439 1157 439 1173 z "
    },
    "\xc3\x90": {
        ha: 1096,
        x_min: 35,
        x_max: 1034,
        o: "m 35 542 l 172 542 l 172 995 l 543 995 q 743 959 653 995 q 899 858 834 924 q 999 701 963 792 q 1034 497 1034 609 q 999 294 1034 385 q 899 137 963 202 q 743 36 834 72 q 543 0 653 0 l 172 0 l 172 463 l 35 463 l 35 542 m 896 497 q 871 661 896 589 q 800 783 846 733 q 689 860 754 833 q 543 886 624 886 l 306 886 l 306 542 l 571 542 l 571 463 l 306 463 l 306 109 l 543 109 q 689 135 624 109 q 800 211 754 162 q 871 333 846 261 q 896 497 896 406 z "
    },
    "\xc3\x91": {
        ha: 1050,
        x_min: 121,
        x_max: 928,
        o: "m 190 995 q 217 991 208 995 q 237 972 226 986 l 813 222 q 810 257 811 240 q 810 290 810 274 l 810 995 l 928 995 l 928 0 l 860 0 q 833 6 844 0 q 812 24 822 11 l 236 774 q 238 740 238 756 q 239 709 239 723 l 239 0 l 121 0 l 121 995 l 190 995 l 190 995 m 626 1155 q 663 1169 650 1155 q 676 1209 676 1183 l 744 1209 q 737 1154 744 1179 q 715 1111 729 1129 q 678 1082 700 1092 q 629 1072 657 1072 q 583 1081 605 1072 q 540 1101 560 1090 q 501 1121 519 1112 q 467 1130 483 1130 q 430 1115 443 1130 q 417 1075 417 1100 l 347 1075 q 355 1130 347 1105 q 378 1174 363 1156 q 415 1202 393 1192 q 464 1213 437 1213 q 510 1203 488 1213 q 553 1184 533 1194 q 591 1164 573 1173 q 626 1155 609 1155 z "
    },
    "\xc3\x92": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 m 444 1238 q 464 1236 456 1238 q 478 1233 472 1235 q 490 1226 485 1231 q 503 1215 496 1222 l 649 1074 l 553 1074 q 530 1076 538 1074 q 510 1087 522 1078 l 305 1238 l 444 1238 z "
    },
    "\xc3\x93": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 m 792 1238 l 588 1088 q 567 1076 576 1079 q 544 1074 558 1074 l 448 1074 l 594 1215 q 607 1226 601 1222 q 619 1233 613 1231 q 633 1236 625 1235 q 653 1238 641 1238 l 792 1238 z "
    },
    "\xc3\x94": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 m 782 1074 l 688 1074 q 670 1076 680 1074 q 654 1083 660 1078 l 564 1149 q 556 1154 558 1151 q 547 1149 550 1150 l 457 1083 q 441 1076 451 1078 q 423 1074 431 1074 l 329 1074 l 494 1219 l 617 1219 l 782 1074 z "
    },
    "\xc3\x95": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 m 640 1155 q 677 1169 664 1155 q 690 1209 690 1183 l 758 1209 q 751 1154 758 1179 q 728 1111 743 1129 q 692 1082 714 1092 q 643 1072 671 1072 q 597 1081 619 1072 q 554 1101 574 1090 q 515 1121 533 1112 q 481 1130 497 1130 q 444 1115 457 1130 q 431 1075 431 1100 l 361 1075 q 369 1130 361 1105 q 392 1174 377 1156 q 429 1202 407 1192 q 478 1213 451 1213 q 524 1203 502 1213 q 567 1184 547 1194 q 605 1164 587 1173 q 640 1155 623 1155 z "
    },
    "\xc3\x96": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 354 27 444 -10 q 199 131 264 64 q 99 292 135 199 q 64 497 64 385 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 755 969 664 1006 q 910 864 845 931 q 1010 702 974 796 q 1045 497 1045 609 m 907 497 q 882 662 907 589 q 811 785 857 735 q 700 863 765 835 q 554 890 635 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 q 226 333 201 406 q 298 210 251 260 q 409 133 344 160 q 554 106 474 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 m 485 1157 q 478 1128 485 1142 q 462 1104 472 1115 q 437 1088 451 1094 q 407 1082 423 1082 q 379 1088 392 1082 q 355 1104 365 1094 q 338 1128 344 1115 q 332 1157 332 1142 q 338 1187 332 1173 q 355 1212 344 1201 q 379 1228 365 1222 q 407 1235 392 1235 q 437 1228 423 1235 q 462 1212 451 1222 q 478 1187 472 1201 q 485 1157 485 1173 m 781 1157 q 774 1128 781 1142 q 758 1104 768 1115 q 733 1088 747 1094 q 704 1082 719 1082 q 674 1088 688 1082 q 650 1104 660 1094 q 634 1128 640 1115 q 628 1157 628 1142 q 634 1187 628 1173 q 650 1212 640 1201 q 674 1228 660 1222 q 704 1235 688 1235 q 733 1228 719 1235 q 758 1212 747 1222 q 774 1187 768 1201 q 781 1157 781 1173 z "
    },
    "\xc3\x97": {
        ha: 806,
        x_min: 88,
        x_max: 713,
        o: "m 706 704 l 467 465 l 713 220 l 647 153 l 401 399 l 153 152 l 88 219 l 335 466 l 95 706 l 161 772 l 401 532 l 640 771 l 706 704 z "
    },
    "\xc3\x98": {
        ha: 1108,
        x_min: 64,
        x_max: 1045,
        o: "m 1045 497 q 1010 292 1045 385 q 910 131 974 199 q 755 27 845 64 q 554 -10 664 -10 q 414 7 479 -10 q 294 57 349 24 l 224 -37 q 189 -67 209 -58 q 149 -76 169 -76 l 94 -76 l 227 105 q 107 273 149 173 q 64 497 64 373 q 99 702 64 609 q 199 864 135 796 q 354 969 264 931 q 554 1006 444 1006 q 703 986 634 1006 q 831 928 773 966 l 888 1006 q 913 1032 901 1024 q 946 1040 924 1040 l 1015 1040 l 896 877 q 1006 713 967 809 q 1045 497 1045 616 m 201 497 q 227 330 201 403 q 301 206 253 257 l 759 831 q 666 875 717 860 q 554 890 615 890 q 409 863 474 890 q 298 785 344 835 q 226 662 251 735 q 201 497 201 589 m 907 497 q 884 655 907 585 q 820 774 862 724 l 365 155 q 554 106 446 106 q 700 133 635 106 q 811 210 765 160 q 882 333 857 260 q 907 497 907 406 z "
    },
    "\xc3\x99": {
        ha: 1014,
        x_min: 111,
        x_max: 903,
        o: "m 508 107 q 618 128 569 107 q 700 186 667 149 q 752 276 734 224 q 769 390 769 328 l 769 995 l 903 995 l 903 390 q 876 231 903 304 q 798 103 849 157 q 673 19 747 49 q 508 -12 599 -12 q 342 19 416 -12 q 217 103 269 49 q 139 231 166 157 q 111 390 111 304 l 111 995 l 245 995 l 245 391 q 263 276 245 328 q 314 187 281 224 q 397 128 348 149 q 508 107 446 107 m 396 1238 q 415 1236 407 1238 q 430 1233 423 1235 q 442 1226 436 1231 q 454 1215 447 1222 l 601 1074 l 504 1074 q 481 1076 490 1074 q 461 1087 473 1078 l 256 1238 l 396 1238 z "
    },
    "\xc3\x9a": {
        ha: 1014,
        x_min: 111,
        x_max: 903,
        o: "m 508 107 q 618 128 569 107 q 700 186 667 149 q 752 276 734 224 q 769 390 769 328 l 769 995 l 903 995 l 903 390 q 876 231 903 304 q 798 103 849 157 q 673 19 747 49 q 508 -12 599 -12 q 342 19 416 -12 q 217 103 269 49 q 139 231 166 157 q 111 390 111 304 l 111 995 l 245 995 l 245 391 q 263 276 245 328 q 314 187 281 224 q 397 128 348 149 q 508 107 446 107 m 744 1238 l 540 1088 q 519 1076 528 1079 q 495 1074 510 1074 l 399 1074 l 546 1215 q 558 1226 553 1222 q 570 1233 564 1231 q 584 1236 576 1235 q 604 1238 592 1238 l 744 1238 z "
    },
    "\xc3\x9b": {
        ha: 1014,
        x_min: 111,
        x_max: 903,
        o: "m 508 107 q 618 128 569 107 q 700 186 667 149 q 752 276 734 224 q 769 390 769 328 l 769 995 l 903 995 l 903 390 q 876 231 903 304 q 798 103 849 157 q 673 19 747 49 q 508 -12 599 -12 q 342 19 416 -12 q 217 103 269 49 q 139 231 166 157 q 111 390 111 304 l 111 995 l 245 995 l 245 391 q 263 276 245 328 q 314 187 281 224 q 397 128 348 149 q 508 107 446 107 m 733 1074 l 640 1074 q 622 1076 631 1074 q 606 1083 612 1078 l 515 1149 q 507 1154 510 1151 q 499 1149 501 1150 l 408 1083 q 392 1076 402 1078 q 374 1074 383 1074 l 281 1074 l 446 1219 l 568 1219 l 733 1074 z "
    },
    "\xc3\x9c": {
        ha: 1014,
        x_min: 111,
        x_max: 903,
        o: "m 508 107 q 618 128 569 107 q 700 186 667 149 q 752 276 734 224 q 769 390 769 328 l 769 995 l 903 995 l 903 390 q 876 231 903 304 q 798 103 849 157 q 673 19 747 49 q 508 -12 599 -12 q 342 19 416 -12 q 217 103 269 49 q 139 231 166 157 q 111 390 111 304 l 111 995 l 245 995 l 245 391 q 263 276 245 328 q 314 187 281 224 q 397 128 348 149 q 508 107 446 107 m 436 1157 q 430 1128 436 1142 q 413 1104 424 1115 q 389 1088 403 1094 q 358 1082 374 1082 q 330 1088 344 1082 q 306 1104 317 1094 q 290 1128 296 1115 q 283 1157 283 1142 q 290 1187 283 1173 q 306 1212 296 1201 q 330 1228 317 1222 q 358 1235 344 1235 q 389 1228 374 1235 q 413 1212 403 1222 q 430 1187 424 1201 q 436 1157 436 1173 m 732 1157 q 726 1128 732 1142 q 709 1104 719 1115 q 685 1088 699 1094 q 656 1082 671 1082 q 626 1088 640 1082 q 601 1104 612 1094 q 585 1128 591 1115 q 579 1157 579 1142 q 585 1187 579 1173 q 601 1212 591 1201 q 626 1228 612 1222 q 656 1235 640 1235 q 685 1228 671 1235 q 709 1212 699 1222 q 726 1187 719 1201 q 732 1157 732 1173 z "
    },
    "\xc3\x9d": {
        ha: 874,
        x_min: 6,
        x_max: 869,
        o: "m 504 396 l 504 0 l 370 0 l 370 396 l 6 995 l 124 995 q 152 986 142 995 q 170 964 163 977 l 398 577 q 421 531 412 553 q 438 489 431 510 q 455 532 446 510 q 478 577 464 553 l 705 964 q 722 985 711 975 q 750 995 733 995 l 869 995 l 504 396 m 674 1238 l 470 1088 q 449 1076 458 1079 q 426 1074 440 1074 l 330 1074 l 476 1215 q 489 1226 483 1222 q 501 1233 494 1231 q 515 1236 507 1235 q 535 1238 523 1238 l 674 1238 z "
    },
    "\xc3\x9e": {
        ha: 849,
        x_min: 135,
        x_max: 799,
        o: "m 269 189 l 269 0 l 135 0 l 135 995 l 269 995 l 269 812 l 428 812 q 593 790 523 812 q 708 728 663 768 q 777 631 754 688 q 799 503 799 574 q 775 376 799 434 q 704 277 751 319 q 588 212 657 235 q 428 189 518 189 l 269 189 m 269 296 l 428 296 q 530 311 486 296 q 604 354 574 326 q 649 419 634 381 q 665 503 665 458 q 606 652 665 599 q 428 706 547 706 l 269 706 l 269 296 z "
    },
    "\xc3\x9f": {
        ha: 846,
        x_min: 129,
        x_max: 793,
        o: "m 467 1010 q 591 989 539 1010 q 678 936 644 968 q 728 865 712 903 q 744 792 744 827 q 730 720 744 750 q 692 667 715 690 q 644 627 670 644 q 596 593 618 610 q 559 559 574 576 q 544 519 544 541 q 562 474 544 492 q 608 440 581 456 q 668 408 636 424 q 728 367 701 392 q 775 308 756 343 q 793 218 793 272 q 773 122 793 164 q 719 50 753 79 q 637 5 684 20 q 535 -11 590 -11 q 413 13 468 -11 q 317 74 358 37 l 345 122 q 359 135 351 131 q 378 140 367 140 q 405 131 391 140 q 438 109 419 121 q 483 88 457 97 q 546 78 509 78 q 601 87 576 78 q 642 113 625 97 q 668 151 659 128 q 677 199 677 173 q 658 262 677 238 q 609 304 638 286 q 546 336 580 322 q 483 371 512 351 q 434 420 453 391 q 415 494 415 449 q 430 559 415 531 q 469 608 446 586 q 519 649 492 630 q 570 688 547 667 q 609 734 593 709 q 624 792 624 758 q 616 836 624 814 q 588 877 607 859 q 537 907 568 895 q 463 918 506 918 q 377 903 415 918 q 311 860 338 889 q 268 787 283 831 q 253 685 253 743 l 253 0 l 129 0 l 129 689 q 153 820 129 761 q 222 922 177 879 q 328 987 266 964 q 467 1010 391 1010 z "
    },
    "\xc3\xa0": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 297 1006 q 331 999 320 1006 q 352 976 342 992 l 456 808 l 385 808 q 361 812 370 808 q 342 827 352 817 l 180 1006 l 297 1006 z "
    },
    "\xc3\xa1": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 568 1006 l 406 827 q 387 812 397 817 q 363 808 378 808 l 290 808 l 392 976 q 414 999 402 992 q 447 1006 425 1006 l 568 1006 z "
    },
    "\xc3\xa2": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 578 812 l 496 812 q 468 822 481 812 l 379 909 l 367 921 l 356 909 l 267 822 q 255 815 263 818 q 239 812 247 812 l 153 812 l 308 995 l 424 995 l 578 812 z "
    },
    "\xc3\xa3": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 443 920 q 482 935 468 920 q 496 980 495 949 l 571 980 q 562 920 571 947 q 537 873 553 892 q 498 843 521 853 q 448 832 476 832 q 402 842 424 832 q 363 864 381 852 q 327 886 344 876 q 294 896 310 896 q 243 835 244 896 l 166 835 q 175 895 166 868 q 201 943 184 923 q 240 973 217 963 q 290 984 263 984 q 336 974 315 984 q 376 952 357 964 q 411 930 394 940 q 443 920 427 920 z "
    },
    "\xc3\xa4": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 319 895 q 313 865 319 879 q 296 841 307 851 q 270 824 285 831 q 240 818 256 818 q 211 824 225 818 q 186 841 197 831 q 169 865 176 851 q 163 895 163 879 q 169 926 163 911 q 186 951 176 940 q 211 968 197 962 q 240 974 225 974 q 270 968 256 974 q 296 951 285 962 q 313 926 307 940 q 319 895 319 911 m 569 895 q 563 865 569 879 q 545 841 556 851 q 520 824 535 831 q 490 818 506 818 q 460 824 474 818 q 435 841 446 831 q 419 865 425 851 q 413 895 413 879 q 419 926 413 911 q 435 951 425 940 q 460 968 446 962 q 490 974 474 974 q 520 968 506 974 q 545 951 535 962 q 563 926 556 940 q 569 895 569 911 z "
    },
    "\xc3\xa5": {
        ha: 704,
        x_min: 64,
        x_max: 618,
        o: "m 618 0 l 563 0 q 534 6 545 0 q 519 29 523 11 l 506 94 q 451 50 478 69 q 396 16 425 30 q 334 -4 367 3 q 260 -11 301 -11 q 184 0 219 -11 q 122 35 148 12 q 80 93 95 58 q 64 176 64 128 q 87 256 64 217 q 161 324 110 294 q 294 373 212 354 q 497 395 377 392 l 497 450 q 461 574 497 532 q 358 616 426 616 q 282 605 313 616 q 228 579 251 593 q 189 553 206 565 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 224 688 156 660 q 373 716 291 716 q 478 697 432 716 q 555 642 524 677 q 602 558 586 608 q 618 450 618 509 l 618 0 m 297 76 q 357 82 330 76 q 408 101 384 89 q 454 131 432 113 q 497 170 476 148 l 497 317 q 351 303 411 314 q 254 275 292 292 q 200 234 217 258 q 183 181 183 210 q 192 133 183 153 q 216 100 201 113 q 252 82 231 88 q 297 76 273 76 m 228 913 q 239 966 228 942 q 269 1007 250 990 q 313 1034 288 1024 q 366 1043 338 1043 q 420 1034 394 1043 q 465 1007 445 1024 q 495 966 484 990 q 506 913 506 942 q 495 861 506 885 q 465 821 484 838 q 420 795 445 804 q 366 785 394 785 q 313 795 338 785 q 269 821 288 804 q 239 861 250 838 q 228 913 228 885 m 297 913 q 316 863 297 883 q 367 844 335 844 q 418 863 399 844 q 437 913 437 883 q 418 964 437 944 q 367 983 399 983 q 316 964 335 983 q 297 913 297 944 z "
    },
    "\xc3\xa6": {
        ha: 1133,
        x_min: 64,
        x_max: 1077,
        o: "m 810 715 q 916 692 867 715 q 1000 628 965 670 q 1057 525 1036 585 q 1077 386 1077 464 q 1072 348 1077 358 q 1049 338 1066 338 l 613 338 q 632 227 616 274 q 675 149 648 181 q 738 103 701 118 q 819 88 774 88 q 899 98 867 88 q 952 120 931 108 q 987 143 974 133 q 1011 153 1000 153 q 1027 150 1021 153 q 1038 141 1033 147 l 1070 99 q 1017 50 1047 71 q 952 17 987 30 q 881 -3 918 3 q 808 -10 844 -10 q 661 30 727 -10 q 556 149 594 69 q 507 76 538 106 q 440 26 477 45 q 362 -2 403 6 q 280 -11 321 -11 q 192 1 232 -11 q 124 38 153 13 q 80 99 95 62 q 64 185 64 135 q 87 267 64 227 q 161 340 110 308 q 294 392 212 372 q 497 415 377 413 l 497 450 q 461 576 497 532 q 358 619 426 619 q 282 607 313 619 q 228 581 251 595 q 189 554 206 566 q 157 542 173 542 q 135 548 144 542 q 120 565 126 555 l 98 604 q 219 688 156 660 q 360 716 282 716 q 494 681 444 716 q 568 582 545 645 q 666 679 606 643 q 810 715 726 715 m 497 338 q 351 322 411 334 q 254 290 292 310 q 200 246 217 271 q 183 192 183 221 q 217 103 183 131 q 308 76 252 76 q 382 88 348 76 q 442 126 417 101 q 482 190 467 152 q 497 280 497 228 l 497 338 m 805 624 q 729 609 763 624 q 672 568 696 595 q 634 502 648 541 q 615 415 619 463 l 967 415 q 957 498 967 460 q 925 565 946 537 q 874 608 904 592 q 805 624 844 624 z "
    },
    "\xc3\xa7": {
        ha: 649,
        x_min: 51,
        x_max: 622,
        o: "m 278 -172 q 288 -174 282 -172 q 301 -180 293 -176 q 319 -185 308 -183 q 345 -187 331 -187 q 389 -176 374 -187 q 404 -147 404 -165 q 397 -124 404 -133 q 375 -109 389 -115 q 340 -99 360 -103 q 292 -91 319 -94 l 318 -7 q 211 28 260 1 q 127 101 163 56 q 72 210 92 147 q 51 352 51 274 q 73 497 51 431 q 137 612 95 564 q 241 688 179 660 q 383 715 303 715 q 513 691 456 715 q 614 623 570 667 l 581 578 q 570 567 576 571 q 554 563 565 563 q 532 571 544 563 q 501 590 519 580 q 455 609 482 601 q 390 618 428 618 q 299 600 338 618 q 232 547 259 581 q 192 463 206 512 q 178 352 178 413 q 193 239 178 288 q 234 155 208 189 q 298 104 260 122 q 383 86 336 86 q 458 97 428 86 q 506 121 487 108 q 538 145 526 134 q 563 156 551 156 q 577 152 571 156 q 587 144 583 149 l 622 99 q 522 23 581 49 q 395 -8 463 -3 l 383 -49 q 474 -86 446 -62 q 502 -148 502 -110 q 491 -188 502 -170 q 460 -218 480 -206 q 413 -237 440 -231 q 351 -244 385 -244 q 297 -238 323 -244 q 250 -222 272 -232 l 262 -184 q 278 -172 266 -172 z "
    },
    "\xc3\xa8": {
        ha: 728,
        x_min: 51,
        x_max: 672,
        o: "m 380 715 q 497 693 443 715 q 589 632 550 672 q 650 534 628 592 q 672 400 672 475 q 665 361 672 371 q 642 351 659 351 l 174 351 q 192 235 175 285 q 238 153 208 186 q 307 104 267 120 q 397 88 347 88 q 477 98 444 88 q 535 122 511 109 q 576 145 560 134 q 604 156 592 156 q 628 144 619 156 l 663 99 q 608 50 640 71 q 539 17 576 30 q 464 -3 503 3 q 387 -10 425 -10 q 252 15 314 -10 q 146 87 191 40 q 76 205 101 135 q 51 366 51 275 q 74 503 51 440 q 139 614 97 567 q 242 688 181 661 q 380 715 303 715 m 383 624 q 242 572 293 624 q 178 428 190 520 l 560 428 q 549 507 560 472 q 514 569 537 543 q 458 609 491 595 q 383 624 425 624 m 313 1006 q 347 999 336 1006 q 368 976 358 992 l 472 808 l 401 808 q 377 812 386 808 q 358 827 368 817 l 196 1006 l 313 1006 z "
    },
    "\xc3\xa9": {
        ha: 728,
        x_min: 51,
        x_max: 672,
        o: "m 380 715 q 497 693 443 715 q 589 632 550 672 q 650 534 628 592 q 672 400 672 475 q 665 361 672 371 q 642 351 659 351 l 174 351 q 192 235 175 285 q 238 153 208 186 q 307 104 267 120 q 397 88 347 88 q 477 98 444 88 q 535 122 511 109 q 576 145 560 134 q 604 156 592 156 q 628 144 619 156 l 663 99 q 608 50 640 71 q 539 17 576 30 q 464 -3 503 3 q 387 -10 425 -10 q 252 15 314 -10 q 146 87 191 40 q 76 205 101 135 q 51 366 51 275 q 74 503 51 440 q 139 614 97 567 q 242 688 181 661 q 380 715 303 715 m 383 624 q 242 572 293 624 q 178 428 190 520 l 560 428 q 549 507 560 472 q 514 569 537 543 q 458 609 491 595 q 383 624 425 624 m 584 1006 l 422 827 q 403 812 413 817 q 379 808 394 808 l 306 808 l 408 976 q 430 999 418 992 q 463 1006 441 1006 l 584 1006 z "
    },
    "\xc3\xaa": {
        ha: 728,
        x_min: 51,
        x_max: 672,
        o: "m 380 715 q 497 693 443 715 q 589 632 550 672 q 650 534 628 592 q 672 400 672 475 q 665 361 672 371 q 642 351 659 351 l 174 351 q 192 235 175 285 q 238 153 208 186 q 307 104 267 120 q 397 88 347 88 q 477 98 444 88 q 535 122 511 109 q 576 145 560 134 q 604 156 592 156 q 628 144 619 156 l 663 99 q 608 50 640 71 q 539 17 576 30 q 464 -3 503 3 q 387 -10 425 -10 q 252 15 314 -10 q 146 87 191 40 q 76 205 101 135 q 51 366 51 275 q 74 503 51 440 q 139 614 97 567 q 242 688 181 661 q 380 715 303 715 m 383 624 q 242 572 293 624 q 178 428 190 520 l 560 428 q 549 507 560 472 q 514 569 537 543 q 458 609 491 595 q 383 624 425 624 m 594 812 l 512 812 q 484 822 497 812 l 395 909 l 383 921 l 372 909 l 283 822 q 271 815 278 818 q 255 812 263 812 l 169 812 l 324 995 l 440 995 l 594 812 z "
    },
    "\xc3\xab": {
        ha: 728,
        x_min: 51,
        x_max: 672,
        o: "m 380 715 q 497 693 443 715 q 589 632 550 672 q 650 534 628 592 q 672 400 672 475 q 665 361 672 371 q 642 351 659 351 l 174 351 q 192 235 175 285 q 238 153 208 186 q 307 104 267 120 q 397 88 347 88 q 477 98 444 88 q 535 122 511 109 q 576 145 560 134 q 604 156 592 156 q 628 144 619 156 l 663 99 q 608 50 640 71 q 539 17 576 30 q 464 -3 503 3 q 387 -10 425 -10 q 252 15 314 -10 q 146 87 191 40 q 76 205 101 135 q 51 366 51 275 q 74 503 51 440 q 139 614 97 567 q 242 688 181 661 q 380 715 303 715 m 383 624 q 242 572 293 624 q 178 428 190 520 l 560 428 q 549 507 560 472 q 514 569 537 543 q 458 609 491 595 q 383 624 425 624 m 335 895 q 329 865 335 879 q 312 841 323 851 q 286 824 301 831 q 256 818 272 818 q 227 824 241 818 q 202 841 213 831 q 185 865 192 851 q 179 895 179 879 q 185 926 179 911 q 202 951 192 940 q 227 968 213 962 q 256 974 241 974 q 286 968 272 974 q 312 951 301 962 q 329 926 323 940 q 335 895 335 911 m 585 895 q 578 865 585 879 q 561 841 572 851 q 536 824 551 831 q 506 818 522 818 q 476 824 490 818 q 451 841 462 831 q 435 865 441 851 q 428 895 428 879 q 435 926 428 911 q 451 951 441 940 q 476 968 462 962 q 506 974 490 974 q 536 968 522 974 q 561 951 551 962 q 578 926 572 940 q 585 895 585 911 z "
    },
    "\xc3\xac": {
        ha: 356,
        x_min: -5,
        x_max: 271,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 m 113 1006 q 147 999 135 1006 q 167 976 158 992 l 271 808 l 200 808 q 176 812 185 808 q 158 827 167 817 l -5 1006 l 113 1006 z "
    },
    "\xc3\xad": {
        ha: 356,
        x_min: 105,
        x_max: 383,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 m 383 1006 l 222 827 q 202 812 212 817 q 178 808 193 808 l 105 808 l 208 976 q 229 999 217 992 q 263 1006 240 1006 l 383 1006 z "
    },
    "\xc3\xae": {
        ha: 356,
        x_min: -32,
        x_max: 393,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 m 393 812 l 310 812 q 283 822 296 812 l 194 909 l 182 921 l 171 909 l 81 822 q 69 815 77 818 q 53 812 62 812 l -32 812 l 123 995 l 238 995 l 393 812 z "
    },
    "\xc3\xaf": {
        ha: 356,
        x_min: -22,
        x_max: 384,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 m 135 895 q 128 865 135 879 q 111 841 122 851 q 86 824 100 831 q 56 818 72 818 q 26 824 40 818 q 2 841 13 831 q -15 865 -9 851 q -22 895 -22 879 q -15 926 -22 911 q 2 951 -9 940 q 26 968 13 962 q 56 974 40 974 q 86 968 72 974 q 111 951 100 962 q 128 926 122 940 q 135 895 135 911 m 384 895 q 378 865 384 879 q 361 841 372 851 q 336 824 350 831 q 306 818 322 818 q 275 824 290 818 q 251 841 261 831 q 234 865 240 851 q 228 895 228 879 q 234 926 228 911 q 251 951 240 940 q 275 968 261 962 q 306 974 290 974 q 336 968 322 974 q 361 951 350 962 q 378 926 372 940 q 384 895 384 911 z "
    },
    "\xc3\xb0": {
        ha: 768,
        x_min: 53,
        x_max: 715,
        o: "m 290 740 q 285 749 287 744 q 283 758 283 753 q 299 783 283 773 l 371 833 q 305 859 340 847 q 230 881 269 871 q 209 893 217 884 q 200 919 200 903 q 203 939 200 929 l 217 982 q 347 950 284 971 q 465 896 409 929 l 581 981 l 606 941 q 611 924 611 932 q 596 899 611 910 l 528 852 q 605 775 570 818 q 663 678 639 732 q 701 560 688 624 q 715 419 715 496 q 693 241 715 320 q 629 106 672 162 q 523 21 586 51 q 376 -9 459 -9 q 249 14 308 -9 q 146 80 190 37 q 78 184 103 122 q 53 324 53 246 q 74 447 53 389 q 136 549 96 505 q 234 618 176 592 q 363 644 291 644 q 494 614 433 644 q 601 524 556 584 q 546 684 587 618 q 440 794 506 750 l 313 701 l 290 740 m 378 87 q 468 106 428 87 q 536 162 508 124 q 580 257 564 200 q 598 392 596 315 q 569 450 587 422 q 525 500 551 478 q 464 534 499 522 q 387 547 430 547 q 295 530 335 547 q 230 482 256 513 q 190 411 203 452 q 176 322 176 369 q 192 222 176 266 q 236 148 208 178 q 300 102 264 118 q 378 87 337 87 z "
    },
    "\xc3\xb1": {
        ha: 772,
        x_min: 101,
        x_max: 687,
        o: "m 101 0 l 101 703 l 175 703 q 208 678 201 703 l 218 601 q 320 683 264 652 q 451 715 377 715 q 553 695 509 715 q 627 641 597 676 q 672 557 656 606 q 687 448 687 508 l 687 0 l 563 0 l 563 448 q 527 572 563 528 q 415 616 490 616 q 313 590 360 616 q 225 518 265 563 l 225 0 l 101 0 m 469 920 q 507 935 494 920 q 522 980 521 949 l 597 980 q 588 920 597 947 q 563 873 579 892 q 524 843 547 853 q 474 832 501 832 q 428 842 449 832 q 388 864 407 852 q 353 886 369 876 q 320 896 336 896 q 269 835 270 896 l 192 835 q 201 895 192 868 q 226 943 210 923 q 266 973 243 963 q 316 984 289 984 q 361 974 340 984 q 401 952 383 964 q 436 930 420 940 q 469 920 453 920 z "
    },
    "\xc3\xb2": {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 m 318 1006 q 352 999 341 1006 q 373 976 363 992 l 476 808 l 406 808 q 382 812 391 808 q 363 827 373 817 l 201 1006 l 318 1006 z "
    },
    "\xc3\xb3": {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 m 589 1006 l 427 827 q 408 812 417 817 q 384 808 399 808 l 310 808 l 413 976 q 434 999 423 992 q 468 1006 446 1006 l 589 1006 z "
    },
    "\xc3\xb4": {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 m 599 812 l 517 812 q 489 822 502 812 l 400 909 l 388 921 l 377 909 l 288 822 q 276 815 283 818 q 260 812 268 812 l 174 812 l 329 995 l 444 995 l 599 812 z "
    },
    "\xc3\xb5": {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 m 464 920 q 502 935 489 920 q 517 980 516 949 l 592 980 q 583 920 592 947 q 558 873 574 892 q 519 843 542 853 q 469 832 497 832 q 423 842 444 832 q 383 864 402 852 q 348 886 365 876 q 315 896 331 896 q 264 835 265 896 l 187 835 q 196 895 187 868 q 222 943 205 923 q 261 973 238 963 q 311 984 284 984 q 357 974 335 984 q 397 952 378 964 q 432 930 415 940 q 464 920 448 920 z "
    },
    "\xc3\xb6": {
        ha: 772,
        x_min: 50,
        x_max: 721,
        o: "m 386 715 q 525 689 463 715 q 631 616 588 663 q 698 502 674 569 q 721 352 721 435 q 698 202 721 269 q 631 88 674 135 q 525 16 588 41 q 386 -10 463 -10 q 247 16 309 -10 q 141 88 185 41 q 74 202 97 135 q 50 352 50 269 q 74 502 50 435 q 141 616 97 569 q 247 689 185 663 q 386 715 309 715 m 386 87 q 542 157 490 87 q 593 351 593 226 q 542 547 593 477 q 386 617 490 617 q 294 599 333 617 q 230 547 256 581 q 191 464 203 513 q 178 351 178 414 q 191 240 178 289 q 230 157 203 190 q 294 105 256 123 q 386 87 333 87 m 340 895 q 334 865 340 879 q 317 841 328 851 q 291 824 306 831 q 261 818 277 818 q 232 824 246 818 q 207 841 218 831 q 190 865 197 851 q 184 895 184 879 q 190 926 184 911 q 207 951 197 940 q 232 968 218 962 q 261 974 246 974 q 291 968 277 974 q 317 951 306 962 q 334 926 328 940 q 340 895 340 911 m 590 895 q 583 865 590 879 q 566 841 577 851 q 541 824 556 831 q 511 818 527 818 q 481 824 495 818 q 456 841 467 831 q 440 865 446 851 q 433 895 433 879 q 440 926 433 911 q 456 951 446 940 q 481 968 467 962 q 511 974 495 974 q 541 968 527 974 q 566 951 556 962 q 583 926 577 940 q 590 895 590 911 z "
    },
    "\xc3\xb7": {
        ha: 806,
        x_min: 69,
        x_max: 735,
        o: "m 69 513 l 735 513 l 735 419 l 69 419 l 69 513 m 315 713 q 322 747 315 731 q 340 774 328 763 q 367 793 351 786 q 401 800 383 800 q 435 793 419 800 q 463 774 451 786 q 481 747 474 763 q 488 713 488 731 q 481 678 488 694 q 463 651 474 663 q 435 632 451 639 q 401 626 419 626 q 367 632 383 626 q 340 651 351 639 q 322 678 328 663 q 315 713 315 694 m 315 218 q 322 252 315 236 q 340 280 328 268 q 367 299 351 292 q 401 306 383 306 q 435 299 419 306 q 463 280 451 292 q 481 252 474 268 q 488 218 488 236 q 481 184 488 199 q 463 156 474 168 q 435 138 451 144 q 401 131 419 131 q 367 138 383 131 q 340 156 351 144 q 322 184 328 168 q 315 218 315 199 z "
    },
    "\xc3\xb8": {
        ha: 772,
        x_min: 44,
        x_max: 742,
        o: "m 633 614 q 699 500 676 567 q 722 352 722 434 q 698 202 722 269 q 632 88 675 135 q 526 16 588 41 q 387 -10 464 -10 q 289 2 334 -10 q 206 36 243 14 l 167 -15 q 132 -44 152 -35 q 91 -53 111 -53 l 44 -53 l 145 83 q 75 199 99 131 q 51 352 51 266 q 74 502 51 435 q 142 616 98 569 q 248 689 185 663 q 387 715 310 715 q 489 701 442 715 q 574 664 535 688 l 622 727 q 647 754 635 746 q 680 762 658 762 l 742 762 l 633 614 m 171 351 q 212 173 171 240 l 515 583 q 387 622 464 622 q 294 603 334 622 q 226 549 253 584 q 185 464 199 515 q 171 351 171 414 m 387 83 q 479 102 439 83 q 546 155 519 120 q 588 239 574 190 q 601 351 601 289 q 565 523 601 456 l 265 117 q 387 83 313 83 z "
    },
    "\xc3\xb9": {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 255 q 245 131 208 175 q 356 88 282 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 451 20 508 51 q 320 -11 394 -11 q 218 8 263 -11 q 144 62 174 27 q 100 146 115 97 q 85 255 85 195 l 85 703 l 208 703 m 314 1006 q 348 999 337 1006 q 369 976 359 992 l 472 808 l 401 808 q 378 812 387 808 q 359 827 369 817 l 197 1006 l 314 1006 z "
    },
    "\xc3\xba": {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 255 q 245 131 208 175 q 356 88 282 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 451 20 508 51 q 320 -11 394 -11 q 218 8 263 -11 q 144 62 174 27 q 100 146 115 97 q 85 255 85 195 l 85 703 l 208 703 m 585 1006 l 423 827 q 404 812 413 817 q 380 808 394 808 l 306 808 l 409 976 q 430 999 419 992 q 464 1006 442 1006 l 585 1006 z "
    },
    "\xc3\xbb": {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 255 q 245 131 208 175 q 356 88 282 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 451 20 508 51 q 320 -11 394 -11 q 218 8 263 -11 q 144 62 174 27 q 100 146 115 97 q 85 255 85 195 l 85 703 l 208 703 m 595 812 l 513 812 q 485 822 498 812 l 396 909 l 384 921 l 373 909 l 283 822 q 272 815 279 818 q 256 812 264 812 l 170 812 l 325 995 l 440 995 l 595 812 z "
    },
    "\xc3\xbc": {
        ha: 772,
        x_min: 85,
        x_max: 670,
        o: "m 208 703 l 208 255 q 245 131 208 175 q 356 88 282 88 q 458 113 410 88 q 547 185 506 139 l 547 703 l 670 703 l 670 0 l 597 0 q 563 26 570 0 l 553 101 q 451 20 508 51 q 320 -11 394 -11 q 218 8 263 -11 q 144 62 174 27 q 100 146 115 97 q 85 255 85 195 l 85 703 l 208 703 m 336 895 q 330 865 336 879 q 313 841 324 851 q 287 824 301 831 q 257 818 273 818 q 228 824 242 818 q 203 841 214 831 q 186 865 192 851 q 180 895 180 879 q 186 926 180 911 q 203 951 192 940 q 228 968 214 962 q 257 974 242 974 q 287 968 273 974 q 313 951 301 962 q 330 926 324 940 q 336 895 336 911 m 585 895 q 579 865 585 879 q 562 841 573 851 q 537 824 551 831 q 507 818 523 818 q 477 824 491 818 q 452 841 463 831 q 435 865 442 851 q 429 895 429 879 q 435 926 429 911 q 452 951 442 940 q 477 968 463 962 q 507 974 491 974 q 537 968 523 974 q 562 951 551 962 q 579 926 573 940 q 585 895 585 911 z "
    },
    "\xc3\xbd": {
        ha: 711,
        x_min: 10,
        x_max: 700,
        o: "m 308 -208 q 292 -230 301 -222 q 263 -238 283 -238 l 172 -238 l 300 41 l 10 703 l 117 703 q 142 695 133 703 q 155 678 151 688 l 343 235 q 354 204 349 219 q 362 173 358 189 q 372 204 367 189 q 383 235 376 219 l 565 678 q 580 696 569 689 q 601 703 590 703 l 700 703 l 308 -208 m 573 1006 l 411 827 q 392 812 401 817 q 368 808 383 808 l 294 808 l 397 976 q 418 999 407 992 q 452 1006 430 1006 l 573 1006 z "
    },
    "\xc3\xbe": {
        ha: 767,
        x_min: 101,
        x_max: 722,
        o: "m 101 -238 l 101 1023 l 225 1023 l 225 601 q 326 684 269 653 q 456 715 383 715 q 565 692 516 715 q 649 623 615 669 q 703 511 684 578 q 722 356 722 444 q 701 211 722 278 q 641 95 680 144 q 545 18 602 47 q 418 -10 489 -10 q 306 14 352 -10 q 225 82 260 38 l 225 -238 l 101 -238 m 415 616 q 309 588 354 616 q 225 510 263 560 l 225 169 q 300 105 259 124 q 390 86 340 86 q 541 156 488 86 q 594 356 594 226 q 582 474 594 425 q 547 555 569 524 q 490 601 524 587 q 415 616 457 616 z "
    },
    "\xc3\xbf": {
        ha: 711,
        x_min: 10,
        x_max: 700,
        o: "m 308 -208 q 292 -230 301 -222 q 263 -238 283 -238 l 172 -238 l 300 41 l 10 703 l 117 703 q 142 695 133 703 q 155 678 151 688 l 343 235 q 354 204 349 219 q 362 173 358 189 q 372 204 367 189 q 383 235 376 219 l 565 678 q 580 696 569 689 q 601 703 590 703 l 700 703 l 308 -208 m 324 895 q 318 865 324 879 q 301 841 312 851 q 275 824 290 831 q 245 818 261 818 q 216 824 230 818 q 191 841 202 831 q 174 865 181 851 q 168 895 168 879 q 174 926 168 911 q 191 951 181 940 q 216 968 202 962 q 245 974 230 974 q 275 968 261 974 q 301 951 290 962 q 318 926 312 940 q 324 895 324 911 m 574 895 q 567 865 574 879 q 550 841 561 851 q 525 824 540 831 q 495 818 511 818 q 465 824 479 818 q 440 841 451 831 q 424 865 430 851 q 417 895 417 879 q 424 926 417 911 q 440 951 430 940 q 465 968 451 962 q 495 974 479 974 q 525 968 511 974 q 550 951 540 962 q 567 926 561 940 q 574 895 574 911 z "
    },
    "\xc4\xb1": {
        ha: 356,
        x_min: 115,
        x_max: 239,
        o: "m 239 703 l 239 0 l 115 0 l 115 703 l 239 703 z "
    },
    "\xc5\x81": {
        ha: 754,
        x_min: 31,
        x_max: 726,
        o: "m 295 559 l 562 695 l 562 606 q 543 576 562 585 l 295 445 l 295 113 l 726 113 l 726 0 l 160 0 l 160 385 l 31 319 l 31 411 q 48 438 31 429 l 160 498 l 160 995 l 295 995 l 295 559 z "
    },
    "\xc5\x82": {
        ha: 446,
        x_min: 38,
        x_max: 408,
        o: "m 284 1023 l 284 624 l 408 678 l 408 607 q 403 589 408 596 q 389 576 399 581 l 284 530 l 284 0 l 160 0 l 160 484 l 38 431 l 38 504 q 55 532 38 524 l 160 579 l 160 1023 l 284 1023 z "
    },
    "\xc5\x92": {
        ha: 1522,
        x_min: 64,
        x_max: 1449,
        o: "m 1449 995 l 1449 885 l 972 885 l 972 555 l 1358 555 l 1358 449 l 972 449 l 972 110 l 1449 110 l 1449 0 l 852 0 l 852 167 q 706 37 794 83 q 506 -10 617 -10 q 326 27 407 -10 q 186 132 244 65 q 96 292 128 199 q 64 497 64 385 q 96 702 64 609 q 186 864 128 796 q 326 969 244 931 q 506 1006 407 1006 q 706 959 617 1006 q 852 828 794 913 l 852 995 l 1449 995 m 836 497 q 814 662 836 589 q 750 787 792 735 q 650 866 709 838 q 519 893 592 893 q 389 866 447 893 q 288 787 330 838 q 224 662 247 735 q 201 497 201 589 q 224 332 201 406 q 288 208 247 259 q 389 130 330 157 q 519 103 447 103 q 650 130 592 103 q 750 208 709 157 q 814 332 792 259 q 836 497 836 406 z "
    },
    "\xc5\x93": {
        ha: 1204,
        x_min: 50,
        x_max: 1148,
        o: "m 881 715 q 986 692 938 715 q 1071 628 1035 670 q 1127 525 1107 585 q 1148 386 1148 464 q 1142 348 1148 358 q 1119 338 1137 338 l 684 338 q 703 227 687 274 q 745 149 719 181 q 809 103 772 118 q 890 88 845 88 q 964 98 933 88 q 1017 122 994 109 q 1055 145 1039 134 q 1083 156 1070 156 q 1106 144 1097 156 l 1141 99 q 1088 50 1118 71 q 1023 17 1058 30 q 952 -3 989 3 q 879 -10 915 -10 q 730 30 797 -10 q 626 153 664 70 q 521 33 588 75 q 359 -10 454 -10 q 233 16 290 -10 q 135 88 176 41 q 72 202 94 135 q 50 352 50 269 q 72 502 50 435 q 136 616 94 569 q 235 689 177 663 q 364 715 293 715 q 521 673 455 715 q 624 554 587 631 q 723 671 658 627 q 881 715 788 715 m 371 87 q 515 157 467 87 q 562 351 562 226 q 550 464 562 414 q 515 547 538 513 q 455 599 491 581 q 371 617 419 617 q 285 599 322 617 q 225 547 249 581 q 190 464 201 513 q 178 351 178 414 q 225 157 178 226 q 371 87 273 87 m 876 624 q 801 609 834 624 q 743 568 767 595 q 705 502 719 541 q 685 415 690 463 l 1038 415 q 1027 498 1038 460 q 996 565 1017 537 q 945 608 975 592 q 876 624 915 624 z "
    },
    "\xc5\xa0": {
        ha: 736,
        x_min: 40,
        x_max: 685,
        o: "m 631 840 q 617 824 624 829 q 599 819 610 819 q 572 831 588 819 q 532 857 556 842 q 475 883 508 871 q 393 894 441 894 q 313 882 348 894 q 255 849 278 870 q 220 800 232 828 q 208 740 208 772 q 229 670 208 698 q 283 624 249 643 q 359 590 317 604 q 447 560 402 576 q 534 526 492 545 q 611 478 577 507 q 665 406 644 449 q 685 302 685 364 q 663 180 685 237 q 598 80 641 122 q 493 13 556 38 q 352 -11 431 -11 q 176 24 256 -11 q 40 119 97 59 l 79 183 q 93 195 85 190 q 110 201 101 201 q 144 185 125 201 q 191 151 163 169 q 259 116 219 132 q 356 101 299 101 q 442 114 404 101 q 505 151 479 127 q 545 208 531 175 q 559 283 559 242 q 539 357 559 328 q 485 405 518 385 q 409 438 451 424 q 321 466 366 451 q 234 499 276 480 q 158 547 191 517 q 104 622 124 577 q 83 733 83 667 q 104 835 83 785 q 163 922 124 884 q 259 983 202 960 q 391 1006 317 1006 q 543 980 474 1006 q 663 903 612 953 l 631 840 m 463 1074 l 340 1074 l 175 1219 l 269 1219 q 287 1217 277 1219 q 303 1210 297 1215 l 393 1144 l 401 1139 q 405 1142 403 1140 q 410 1144 408 1143 l 500 1210 q 516 1217 506 1215 q 534 1219 526 1219 l 628 1219 l 463 1074 z "
    },
    "\xc5\xa1": {
        ha: 603,
        x_min: 43,
        x_max: 544,
        o: "m 504 588 q 478 572 496 572 q 455 580 468 572 q 423 597 442 588 q 377 614 403 606 q 315 622 351 622 q 258 614 283 622 q 216 592 233 606 q 189 560 198 578 q 179 520 179 542 q 195 475 179 493 q 236 444 210 457 q 294 420 262 431 q 361 399 327 410 q 428 374 396 388 q 487 339 461 360 q 528 288 513 318 q 544 215 544 258 q 526 125 544 167 q 475 54 509 84 q 392 6 441 24 q 278 -11 342 -11 q 144 13 204 -11 q 43 74 85 37 l 72 122 q 85 135 78 131 q 106 140 93 140 q 132 131 118 140 q 166 109 146 121 q 214 88 185 97 q 284 78 242 78 q 347 87 320 78 q 392 113 374 97 q 419 149 410 128 q 428 194 428 170 q 412 242 428 223 q 371 275 397 261 q 312 298 345 288 q 245 319 279 308 q 177 345 210 331 q 119 381 144 359 q 77 434 93 402 q 62 510 62 465 q 78 588 62 551 q 127 653 95 625 q 206 698 159 681 q 312 715 252 715 q 436 693 381 715 q 532 633 492 671 l 504 588 m 105 995 l 190 995 q 206 992 199 995 q 218 985 214 988 l 307 898 q 319 885 315 892 q 325 892 322 888 q 331 898 327 895 l 419 985 q 432 992 424 989 q 447 995 440 995 l 530 995 l 375 812 l 260 812 l 105 995 z "
    },
    "\xc5\xb8": {
        ha: 874,
        x_min: 6,
        x_max: 869,
        o: "m 504 396 l 504 0 l 370 0 l 370 396 l 6 995 l 124 995 q 152 986 142 995 q 170 964 163 977 l 398 577 q 421 531 412 553 q 438 489 431 510 q 455 532 446 510 q 478 577 464 553 l 705 964 q 722 985 711 975 q 750 995 733 995 l 869 995 l 504 396 m 367 1157 q 360 1128 367 1142 q 344 1104 354 1115 q 319 1088 333 1094 q 289 1082 305 1082 q 261 1088 274 1082 q 237 1104 247 1094 q 220 1128 226 1115 q 214 1157 214 1142 q 220 1187 214 1173 q 237 1212 226 1201 q 261 1228 247 1222 q 289 1235 274 1235 q 319 1228 305 1235 q 344 1212 333 1222 q 360 1187 354 1201 q 367 1157 367 1173 m 663 1157 q 656 1128 663 1142 q 640 1104 650 1115 q 615 1088 629 1094 q 586 1082 601 1082 q 556 1088 570 1082 q 532 1104 542 1094 q 516 1128 522 1115 q 510 1157 510 1142 q 516 1187 510 1173 q 532 1212 522 1201 q 556 1228 542 1222 q 586 1235 570 1235 q 615 1228 601 1235 q 640 1212 629 1222 q 656 1187 650 1201 q 663 1157 663 1173 z "
    },
    "\xc5\xbd": {
        ha: 867,
        x_min: 60,
        x_max: 814,
        o: "m 814 995 l 814 945 q 799 901 814 922 l 236 110 l 804 110 l 804 0 l 60 0 l 60 53 q 73 92 60 74 l 637 885 l 86 885 l 86 995 l 814 995 m 513 1074 l 390 1074 l 225 1219 l 319 1219 q 337 1217 327 1219 q 353 1210 347 1215 l 443 1144 l 451 1139 q 455 1142 453 1140 q 460 1144 458 1143 l 550 1210 q 566 1217 556 1215 q 584 1219 576 1219 l 678 1219 l 513 1074 z "
    },
    "\xc5\xbe": {
        ha: 642,
        x_min: 49,
        x_max: 592,
        o: "m 592 651 q 588 625 592 638 q 575 603 583 613 l 194 97 l 578 97 l 578 0 l 49 0 l 49 51 q 53 73 49 60 q 66 96 58 85 l 449 606 l 70 606 l 70 703 l 592 703 l 592 651 m 125 995 l 210 995 q 226 992 219 995 q 238 985 234 988 l 327 898 q 339 885 335 892 q 345 892 342 888 q 351 898 347 895 l 440 985 q 452 992 444 989 q 467 995 460 995 l 550 995 l 395 812 l 280 812 l 125 995 z "
    },
    "\xc6\x92": {
        ha: 806,
        x_min: 74,
        x_max: 701,
        o: "m 467 533 l 406 26 q 305 -180 388 -116 q 74 -244 222 -244 l 74 -179 q 115 -140 74 -140 q 175 -131 147 -140 q 225 -101 203 -122 q 262 -49 247 -81 q 283 30 277 -17 l 344 530 l 237 540 q 215 550 222 542 q 208 572 208 559 l 208 623 l 356 623 l 370 740 q 468 943 387 877 q 701 1010 550 1010 l 701 942 q 692 914 701 922 q 660 906 682 906 q 600 897 628 906 q 550 867 572 888 q 512 815 528 847 q 490 735 497 783 l 475 623 l 699 623 l 699 533 l 467 533 z "
    },
    "\xcb\x86": {
        ha: 426,
        x_min: 0,
        x_max: 425,
        o: "m 425 812 l 342 812 q 315 822 328 812 l 226 909 l 214 921 l 203 909 l 113 822 q 101 815 109 818 q 85 812 94 812 l 0 812 l 155 995 l 270 995 l 425 812 z "
    },
    "\xcb\x87": {
        ha: 426,
        x_min: 0,
        x_max: 425,
        o: "m 0 995 l 85 995 q 101 992 94 995 q 113 985 109 988 l 202 898 q 214 885 210 892 q 220 892 217 888 q 226 898 222 895 l 315 985 q 327 992 319 989 q 342 995 335 995 l 425 995 l 270 812 l 155 812 l 0 995 z "
    },
    "\xcb\x89": {
        ha: 426,
        x_min: 14,
        x_max: 413,
        o: "m 14 936 l 413 936 l 413 855 l 14 855 l 14 936 z "
    },
    "\xcb\x98": {
        ha: 426,
        x_min: 22,
        x_max: 403,
        o: "m 213 808 q 123 823 159 808 q 64 864 87 838 q 32 923 42 889 q 22 995 22 957 l 110 995 q 115 952 110 972 q 131 919 119 933 q 163 897 143 905 q 213 889 183 889 q 262 897 242 889 q 294 919 282 905 q 310 952 306 933 q 315 995 315 972 l 403 995 q 393 923 403 957 q 361 864 383 889 q 302 823 338 838 q 213 808 265 808 z "
    },
    "\xcb\x99": {
        ha: 426,
        x_min: 125,
        x_max: 301,
        o: "m 301 929 q 293 895 301 911 q 274 868 286 880 q 246 849 262 856 q 212 842 230 842 q 178 849 194 842 q 151 868 163 856 q 132 895 139 880 q 125 929 125 911 q 132 964 125 947 q 151 992 139 980 q 178 1011 163 1004 q 212 1018 194 1018 q 246 1011 230 1018 q 274 992 262 1004 q 293 964 286 980 q 301 929 301 947 z "
    },
    "\xcb\x9a": {
        ha: 426,
        x_min: 74,
        x_max: 352,
        o: "m 74 913 q 85 966 74 942 q 115 1007 96 990 q 159 1034 134 1024 q 212 1043 184 1043 q 266 1034 240 1043 q 310 1007 291 1024 q 341 966 330 990 q 352 913 352 942 q 341 861 352 885 q 310 821 330 838 q 266 795 291 804 q 212 785 240 785 q 159 795 184 785 q 115 821 134 804 q 85 861 96 838 q 74 913 74 885 m 143 913 q 162 863 143 883 q 213 844 181 844 q 264 863 244 844 q 283 913 283 883 q 264 964 283 944 q 213 983 244 983 q 162 964 181 983 q 143 913 143 944 z "
    },
    "\xcb\x9b": {
        ha: 426,
        x_min: 93,
        x_max: 345,
        o: "m 313 -147 q 321 -149 318 -147 q 326 -156 324 -152 l 345 -201 q 292 -227 324 -217 q 224 -237 260 -237 q 128 -210 163 -237 q 93 -137 93 -183 q 102 -95 93 -115 q 125 -56 110 -74 q 161 -20 140 -37 q 205 9 181 -4 l 269 0 q 240 -18 255 -8 q 214 -43 226 -29 q 194 -73 202 -56 q 187 -107 187 -89 q 204 -148 187 -133 q 250 -163 221 -163 q 276 -161 266 -163 q 294 -155 287 -158 q 305 -149 301 -152 q 313 -147 310 -147 z "
    },
    "\xcb\x9c": {
        ha: 426,
        x_min: 13,
        x_max: 417,
        o: "m 290 920 q 328 935 315 920 q 342 980 342 949 l 417 980 q 409 920 417 947 q 384 873 400 892 q 345 843 367 853 q 294 832 322 832 q 249 842 270 832 q 209 864 228 852 q 174 886 190 876 q 141 896 157 896 q 90 835 91 896 l 13 835 q 22 895 13 868 q 47 943 31 923 q 87 973 64 963 q 137 984 110 984 q 182 974 161 984 q 222 952 203 964 q 257 930 241 940 q 290 920 274 920 z "
    },
    "\xcb\x9d": {
        ha: 426,
        x_min: 65,
        x_max: 516,
        o: "m 298 1006 l 160 827 q 141 812 151 816 q 117 808 131 808 l 65 808 l 161 976 q 182 999 170 992 q 216 1006 193 1006 l 298 1006 m 516 1006 l 347 827 q 328 812 338 817 q 305 808 319 808 l 245 808 l 370 976 q 392 999 381 991 q 425 1006 402 1006 l 516 1006 z "
    },
    "\xcf\x80": {
        ha: 858,
        x_min: 33,
        x_max: 833,
        o: "m 833 703 l 833 653 q 822 625 833 638 q 792 613 812 613 l 697 613 l 697 0 l 574 0 l 574 613 l 298 613 l 298 169 q 256 39 298 87 q 124 -8 214 -8 q 78 -4 101 -8 q 33 12 55 0 l 38 64 q 42 74 40 70 q 51 80 45 78 q 65 82 56 81 q 88 82 74 82 q 154 103 134 82 q 174 171 174 125 l 174 613 l 42 613 l 42 657 q 45 673 42 665 q 55 688 49 681 q 69 699 60 694 q 90 703 78 703 l 833 703 z "
    },
    "\xe2\x80\x93": {
        ha: 772,
        x_min: 108,
        x_max: 664,
        o: "m 108 455 l 664 455 l 664 365 l 108 365 l 108 455 z "
    },
    "\xe2\x80\x94": {
        ha: 1140,
        x_min: 108,
        x_max: 1032,
        o: "m 108 455 l 1032 455 l 1032 365 l 108 365 l 108 455 z "
    },
    "\xe2\x80\x98": {
        ha: 294,
        x_min: 40,
        x_max: 205,
        o: "m 79 703 q 50 770 59 736 q 40 837 40 803 q 71 957 40 899 q 158 1062 102 1014 l 196 1038 q 203 1031 201 1035 q 205 1022 205 1026 q 198 1006 205 1013 q 176 976 187 992 q 158 944 166 961 q 144 908 149 927 q 140 869 140 890 q 146 823 140 847 q 169 773 153 799 q 174 757 174 765 q 155 733 174 740 l 79 703 z "
    },
    "\xe2\x80\x99": {
        ha: 294,
        x_min: 63,
        x_max: 226,
        o: "m 188 1047 q 217 981 208 1014 q 226 914 226 947 q 195 793 226 851 q 110 688 165 736 l 72 712 q 64 719 66 715 q 63 728 63 724 q 69 744 63 738 q 91 773 81 758 q 110 806 101 789 q 123 842 118 823 q 128 881 128 860 q 121 927 128 903 q 99 977 115 951 q 94 992 94 985 q 113 1017 94 1009 l 188 1047 z "
    },
    "\xe2\x80\x9a": {
        ha: 294,
        x_min: 63,
        x_max: 226,
        o: "m 188 167 q 217 101 208 134 q 226 34 226 67 q 195 -86 226 -29 q 110 -192 165 -144 l 72 -168 q 64 -160 66 -165 q 63 -152 63 -156 q 69 -135 63 -142 q 91 -107 81 -122 q 110 -74 101 -91 q 123 -38 118 -57 q 128 1 128 -19 q 121 47 128 24 q 99 97 115 71 q 94 113 94 105 q 113 137 94 129 l 188 167 z "
    },
    "\xe2\x80\x9c": {
        ha: 506,
        x_min: 40,
        x_max: 416,
        o: "m 79 703 q 50 770 59 736 q 40 837 40 803 q 71 957 40 899 q 158 1062 102 1014 l 196 1038 q 203 1031 201 1035 q 205 1022 205 1026 q 198 1006 205 1013 q 176 976 187 992 q 158 944 166 961 q 144 908 149 927 q 140 869 140 890 q 146 823 140 847 q 169 773 153 799 q 174 757 174 765 q 155 733 174 740 l 79 703 m 290 703 q 261 770 270 736 q 251 837 251 803 q 282 957 251 899 q 369 1062 313 1014 l 407 1038 q 414 1031 413 1035 q 416 1022 416 1026 q 409 1006 416 1013 q 388 976 398 992 q 369 944 377 961 q 356 908 360 927 q 351 869 351 890 q 357 823 351 847 q 380 773 364 799 q 385 757 385 765 q 366 733 385 740 l 290 703 z "
    },
    "\xe2\x80\x9d": {
        ha: 506,
        x_min: 63,
        x_max: 438,
        o: "m 188 1047 q 217 981 208 1014 q 226 914 226 947 q 195 793 226 851 q 110 688 165 736 l 72 712 q 64 719 66 715 q 63 728 63 724 q 69 744 63 738 q 91 773 81 758 q 110 806 101 789 q 123 842 118 823 q 128 881 128 860 q 121 927 128 903 q 99 977 115 951 q 94 992 94 985 q 113 1017 94 1009 l 188 1047 m 399 1047 q 428 981 419 1014 q 438 914 438 947 q 407 793 438 851 q 321 688 376 736 l 283 712 q 275 719 277 715 q 274 728 274 724 q 281 744 274 738 q 302 773 292 758 q 321 806 313 789 q 334 842 329 823 q 339 881 339 860 q 332 927 339 903 q 310 977 326 951 q 305 992 305 985 q 324 1017 305 1009 l 399 1047 z "
    },
    "\xe2\x80\x9e": {
        ha: 506,
        x_min: 63,
        x_max: 438,
        o: "m 188 167 q 217 101 208 134 q 226 34 226 67 q 195 -86 226 -29 q 110 -192 165 -144 l 72 -168 q 64 -160 66 -165 q 63 -152 63 -156 q 69 -135 63 -142 q 91 -107 81 -122 q 110 -74 101 -91 q 123 -38 118 -57 q 128 1 128 -19 q 121 47 128 24 q 99 97 115 71 q 94 113 94 105 q 113 137 94 129 l 188 167 m 399 167 q 428 101 419 134 q 438 34 438 67 q 407 -86 438 -29 q 321 -192 376 -144 l 283 -168 q 275 -160 277 -165 q 274 -152 274 -156 q 281 -135 274 -142 q 302 -107 292 -122 q 321 -74 313 -91 q 334 -38 329 -57 q 339 1 339 -19 q 332 47 339 24 q 310 97 326 71 q 305 113 305 105 q 324 137 305 129 l 399 167 z "
    },
    "\xe2\x80\xa0": {
        ha: 806,
        x_min: 82,
        x_max: 724,
        o: "m 82 638 q 96 676 82 659 q 140 692 110 692 q 190 689 164 692 q 244 683 217 686 q 300 675 272 679 q 355 669 328 671 l 338 1008 q 403 1024 366 1024 q 467 1008 441 1024 l 451 669 q 561 683 506 674 q 665 692 617 692 q 710 676 696 692 q 724 638 724 659 l 724 596 l 451 596 l 451 307 l 467 -233 q 403 -249 441 -249 q 338 -233 366 -249 l 355 307 l 355 596 l 82 596 l 82 638 z "
    },
    "\xe2\x80\xa1": {
        ha: 806,
        x_min: 82,
        x_max: 724,
        o: "m 82 638 q 96 676 82 659 q 140 692 110 692 q 190 689 164 692 q 244 683 217 686 q 300 675 272 679 q 355 669 328 671 l 338 1008 q 403 1024 366 1024 q 467 1008 441 1024 l 451 669 q 561 683 506 674 q 665 692 617 692 q 710 676 696 692 q 724 638 724 659 l 724 596 l 451 596 l 451 179 l 724 179 l 724 138 q 710 99 724 116 q 665 83 696 83 q 561 92 617 83 q 451 106 506 101 l 467 -233 q 403 -249 441 -249 q 338 -233 366 -249 l 355 106 q 244 92 301 101 q 140 83 188 83 q 96 99 110 83 q 82 138 82 116 l 82 179 l 355 179 l 355 596 l 82 596 l 82 638 z "
    },
    "\xe2\x80\xa2": {
        ha: 806,
        x_min: 144,
        x_max: 660,
        o: "m 144 413 q 165 514 144 467 q 220 596 185 561 q 302 652 255 631 q 401 672 349 672 q 502 652 455 672 q 584 596 549 631 q 640 514 619 561 q 660 413 660 467 q 640 313 660 360 q 584 231 619 266 q 502 176 549 197 q 401 156 455 156 q 302 176 349 156 q 220 231 255 197 q 165 313 185 266 q 144 413 144 360 z "
    },
    "\xe2\x80\xa6": {
        ha: 1010,
        x_min: 61,
        x_max: 949,
        o: "m 61 76 q 68 110 61 94 q 86 138 74 126 q 113 157 97 150 q 147 164 129 164 q 181 157 165 164 q 209 138 197 150 q 227 110 221 126 q 234 76 234 94 q 227 42 234 58 q 209 15 221 26 q 181 -4 197 3 q 147 -10 165 -10 q 113 -4 129 -10 q 86 15 97 3 q 68 42 74 26 q 61 76 61 58 m 776 76 q 782 110 776 94 q 800 138 789 126 q 828 157 812 150 q 862 164 844 164 q 896 157 880 164 q 924 138 912 150 q 942 110 935 126 q 949 76 949 94 q 942 42 949 58 q 924 15 935 26 q 896 -4 912 3 q 862 -10 880 -10 q 828 -4 844 -10 q 800 15 812 3 q 782 42 789 26 q 776 76 776 58 m 418 76 q 425 110 418 94 q 443 138 431 126 q 470 157 454 150 q 504 164 486 164 q 538 157 522 164 q 566 138 554 150 q 584 110 578 126 q 591 76 591 94 q 584 42 591 58 q 566 15 578 26 q 538 -4 554 3 q 504 -10 522 -10 q 470 -4 486 -10 q 443 15 454 3 q 425 42 431 26 q 418 76 418 58 z "
    },
    "\xe2\x80\xb0": {
        ha: 1601,
        x_min: 50,
        x_max: 1551,
        o: "m 491 755 q 473 650 491 697 q 425 573 455 604 q 354 524 394 541 q 270 508 314 508 q 183 524 223 508 q 113 573 143 541 q 67 650 83 604 q 50 755 50 697 q 67 861 50 815 q 113 940 83 908 q 183 988 143 972 q 270 1005 223 1005 q 357 988 317 1005 q 427 940 398 972 q 474 861 457 908 q 491 755 491 815 m 394 755 q 385 833 394 801 q 358 885 375 865 q 318 915 341 906 q 270 924 296 924 q 222 915 244 924 q 183 885 199 906 q 157 833 166 865 q 147 755 147 801 q 157 678 147 710 q 183 627 166 647 q 222 598 199 607 q 270 590 244 590 q 318 598 296 590 q 358 627 341 607 q 385 678 375 647 q 394 755 394 710 m 842 974 q 858 989 849 983 q 885 995 868 995 l 974 995 l 247 20 q 230 6 240 11 q 207 0 220 0 l 115 0 l 842 974 m 1041 235 q 1023 131 1041 176 q 975 53 1005 85 q 905 5 944 22 q 821 -12 865 -12 q 734 5 774 -12 q 664 53 694 22 q 617 131 634 85 q 601 235 601 176 q 617 341 601 294 q 664 420 634 388 q 734 469 694 452 q 821 485 774 485 q 908 469 867 485 q 978 420 948 452 q 1024 341 1008 388 q 1041 235 1041 294 m 945 235 q 935 313 945 281 q 909 365 926 345 q 869 394 892 385 q 821 403 847 403 q 773 394 795 403 q 733 365 750 385 q 707 313 717 345 q 698 235 698 281 q 707 158 698 190 q 733 107 717 127 q 773 79 750 88 q 821 70 795 70 q 869 79 847 70 q 909 107 892 88 q 935 158 926 127 q 945 235 945 190 m 1551 235 q 1533 131 1551 176 q 1484 53 1515 85 q 1414 5 1454 22 q 1330 -12 1374 -12 q 1243 5 1283 -12 q 1173 53 1203 22 q 1126 131 1143 85 q 1110 235 1110 176 q 1126 341 1110 294 q 1173 420 1143 388 q 1243 469 1203 452 q 1330 485 1283 485 q 1417 469 1376 485 q 1487 420 1458 452 q 1534 341 1517 388 q 1551 235 1551 294 m 1454 235 q 1444 313 1454 281 q 1418 365 1435 345 q 1378 394 1401 385 q 1330 403 1356 403 q 1282 394 1304 403 q 1242 365 1259 385 q 1216 313 1226 345 q 1207 235 1207 281 q 1216 158 1207 190 q 1242 107 1226 127 q 1282 79 1259 88 q 1330 70 1304 70 q 1378 79 1356 70 q 1418 107 1401 88 q 1444 158 1435 127 q 1454 235 1454 190 z "
    },
    "\xe2\x80\xb9": {
        ha: 439,
        x_min: 96,
        x_max: 328,
        o: "m 96 360 l 96 376 l 269 646 l 309 626 q 324 614 319 622 q 328 597 328 606 q 322 574 328 585 l 211 393 q 192 367 201 376 q 211 342 202 358 l 322 161 q 327 149 325 156 q 328 138 328 143 q 309 109 328 118 l 269 90 l 96 360 z "
    },
    "\xe2\x80\xba": {
        ha: 439,
        x_min: 104,
        x_max: 337,
        o: "m 337 376 l 337 360 l 164 90 l 124 109 q 104 138 104 118 q 111 161 104 149 l 222 342 q 240 367 231 359 q 222 393 232 375 l 111 574 q 104 598 104 586 q 124 626 104 617 l 164 646 l 337 376 z "
    },
    "\xe2\x81\x84": {
        ha: 426,
        x_min: -131,
        x_max: 558,
        o: "m -14 37 q -42 8 -27 15 q -78 0 -58 0 l -131 0 l 438 953 q 466 984 450 973 q 504 995 482 995 l 558 995 l -14 37 z "
    },
    "\xe2\x82\xac": {
        ha: 806,
        x_min: 24,
        x_max: 790,
        o: "m 24 624 l 126 624 q 173 782 140 712 q 255 902 206 853 q 367 978 303 952 q 506 1005 431 1005 q 665 970 599 1005 q 780 874 731 935 l 738 827 q 726 816 732 821 q 711 812 721 812 q 686 825 699 812 q 652 854 674 838 q 597 883 631 870 q 511 897 563 897 q 343 827 410 897 q 253 624 276 758 l 633 624 l 633 586 q 624 564 633 574 q 598 553 615 553 l 245 553 q 244 526 244 540 q 244 497 244 512 q 244 476 244 486 q 244 455 244 465 l 569 455 l 569 416 q 559 394 569 404 q 533 384 549 384 l 251 384 q 337 169 270 241 q 505 98 403 98 q 571 105 542 98 q 620 124 599 113 q 656 148 641 135 q 682 172 671 160 q 702 190 693 183 q 719 197 710 197 q 728 195 724 197 q 738 188 733 192 l 790 139 q 669 29 742 68 q 498 -10 597 -10 q 353 17 417 -10 q 241 95 288 44 q 164 220 194 147 q 122 384 133 293 l 24 384 l 24 455 l 117 455 q 116 476 116 465 q 116 497 116 486 q 116 525 116 511 q 117 553 117 540 l 24 553 l 24 624 z "
    },
    "\xe2\x84\xa2": {
        ha: 1e3,
        x_min: 44,
        x_max: 917,
        o: "m 669 770 q 677 752 673 760 q 683 733 681 743 q 690 752 687 743 q 698 770 692 760 l 815 981 q 827 992 822 990 q 844 995 833 995 l 917 995 l 917 584 l 841 584 l 841 838 l 847 890 l 720 656 q 690 637 711 637 l 677 637 q 647 656 656 637 l 519 888 l 525 838 l 525 584 l 449 584 l 449 995 l 522 995 q 539 992 534 995 q 551 981 544 990 l 669 770 m 382 995 l 382 922 l 257 922 l 257 584 l 169 584 l 169 922 l 44 922 l 44 995 l 382 995 z "
    },
    "\xe2\x84\xa6": {
        ha: 1038,
        x_min: 60,
        x_max: 976,
        o: "m 581 0 l 581 304 q 684 337 637 315 q 766 395 731 360 q 819 481 800 431 q 838 595 838 531 q 814 726 838 669 q 748 820 790 783 q 646 878 705 858 q 518 897 588 897 q 390 878 449 897 q 289 820 331 858 q 222 726 246 783 q 198 595 198 669 q 217 481 198 531 q 270 395 236 431 q 352 337 304 360 q 456 304 399 315 l 456 0 l 106 0 q 72 12 85 0 q 60 44 60 24 l 60 113 l 351 113 l 351 234 q 230 283 284 250 q 139 364 176 317 q 81 472 101 411 q 60 602 60 532 q 95 765 60 691 q 190 893 129 840 q 335 976 251 947 q 518 1006 419 1006 q 701 976 617 1006 q 846 893 785 947 q 941 765 907 840 q 976 602 976 691 q 955 472 976 532 q 897 364 935 411 q 805 283 859 317 q 685 234 751 250 l 685 113 l 976 113 l 976 44 q 964 12 976 24 q 931 0 951 0 l 581 0 z "
    },
    "\xe2\x88\x82": {
        ha: 806,
        x_min: 64,
        x_max: 746,
        o: "m 242 928 q 294 962 269 947 q 347 986 319 976 q 403 1001 374 996 q 469 1006 433 1006 q 583 980 531 1006 q 670 906 634 954 q 726 787 706 857 q 746 628 746 717 q 720 370 746 488 q 644 169 695 253 q 516 38 593 85 q 337 -9 440 -9 q 227 11 277 -9 q 140 68 176 31 q 84 158 104 105 q 64 276 64 210 q 90 426 64 356 q 164 548 117 497 q 276 629 211 599 q 419 659 342 659 q 545 628 492 659 q 632 538 599 597 q 634 586 633 563 q 634 628 634 610 q 586 836 634 765 q 452 906 538 906 q 398 899 423 906 q 354 884 374 892 q 320 868 335 875 q 297 861 306 861 q 282 865 289 861 q 268 882 276 869 l 242 928 m 351 88 q 439 107 397 88 q 513 165 480 126 q 571 263 547 204 q 610 402 596 322 q 590 461 603 433 q 555 513 576 490 q 503 548 533 535 q 433 561 473 561 q 329 540 374 561 q 253 480 284 518 q 207 391 223 442 q 192 278 192 339 q 203 198 192 233 q 235 138 214 163 q 285 101 256 114 q 351 88 315 88 z "
    },
    "\xe2\x88\x86": {
        ha: 967,
        x_min: 10,
        x_max: 957,
        o: "m 422 995 l 544 995 l 957 0 l 10 0 l 422 995 m 190 108 l 776 108 l 510 774 q 497 810 503 790 q 483 854 490 831 q 470 810 477 831 q 458 774 464 790 l 190 108 z "
    },
    "\xe2\x88\x8f": {
        ha: 950,
        x_min: 43,
        x_max: 906,
        o: "m 906 995 l 906 889 l 776 889 l 776 -238 l 649 -238 l 649 889 l 301 889 l 301 -238 l 173 -238 l 173 889 l 43 889 l 43 995 l 906 995 z "
    },
    "\xe2\x88\x91": {
        ha: 950,
        x_min: 58,
        x_max: 891,
        o: "m 58 995 l 891 995 l 891 889 l 250 889 l 648 397 l 648 360 l 250 -132 l 891 -132 l 891 -238 l 58 -238 l 58 -193 q 61 -173 58 -183 q 72 -155 65 -163 l 508 380 l 72 911 q 61 930 64 920 q 58 950 58 940 l 58 995 z "
    },
    "\xe2\x88\x92": {
        ha: 806,
        x_min: 103,
        x_max: 700,
        o: "m 103 513 l 700 513 l 700 419 l 103 419 l 103 513 z "
    },
    "\xe2\x88\x9a": {
        ha: 796,
        x_min: 32,
        x_max: 860,
        o: "m 199 460 l 80 460 q 46 472 60 460 q 32 512 32 483 l 32 551 l 265 551 q 290 544 280 551 q 303 526 299 536 l 407 240 q 419 194 415 218 q 426 147 424 171 q 434 185 430 166 q 444 225 438 205 l 744 1163 q 757 1182 747 1174 q 781 1189 767 1189 l 860 1189 l 476 0 l 372 0 l 199 460 z "
    },
    "\xe2\x88\x9e": {
        ha: 950,
        x_min: 40,
        x_max: 911,
        o: "m 696 176 q 625 188 657 176 q 567 220 594 200 q 518 267 540 241 q 476 323 495 294 q 433 267 456 294 q 384 220 410 241 q 326 188 358 200 q 256 176 294 176 q 173 193 213 176 q 105 241 134 210 q 58 315 75 272 q 40 410 40 358 q 58 506 40 463 q 105 580 75 549 q 173 627 134 610 q 256 644 213 644 q 326 633 294 644 q 384 600 358 621 q 433 553 410 580 q 476 498 456 527 q 518 553 495 527 q 567 600 540 580 q 625 633 594 621 q 696 644 657 644 q 778 627 739 644 q 847 580 817 610 q 894 506 876 549 q 911 410 911 463 q 894 315 911 358 q 847 241 876 272 q 778 193 817 210 q 696 176 739 176 m 260 278 q 307 288 285 278 q 348 317 328 299 q 384 359 367 335 q 419 410 401 383 q 384 461 401 438 q 348 503 367 485 q 307 532 328 522 q 260 543 285 543 q 214 535 235 543 q 175 510 192 526 q 149 469 158 494 q 139 410 139 444 q 149 352 139 377 q 175 311 158 327 q 214 286 192 294 q 260 278 235 278 m 691 278 q 738 286 716 278 q 776 311 760 294 q 802 352 792 327 q 812 410 812 377 q 802 469 812 444 q 776 510 792 494 q 738 535 760 526 q 691 543 716 543 q 644 532 666 543 q 603 503 623 522 q 567 461 584 485 q 532 410 549 438 q 567 359 549 383 q 603 317 584 335 q 644 288 623 299 q 691 278 666 278 z "
    },
    "\xe2\x88\xab": {
        ha: 556,
        x_min: -74,
        x_max: 597,
        o: "m 260 758 q 337 942 274 878 q 501 1006 399 1006 q 551 1001 527 1006 q 597 985 575 997 l 592 926 q 588 915 590 919 q 578 906 585 910 q 562 901 572 903 q 535 899 551 899 q 427 861 465 899 q 378 742 388 824 l 288 26 q 256 -95 278 -44 q 199 -179 233 -146 q 120 -227 165 -212 q 23 -243 75 -243 q -27 -239 -1 -243 q -74 -223 -53 -234 l -67 -170 q -61 -157 -65 -162 q -51 -151 -58 -153 q -33 -148 -44 -149 q -5 -148 -22 -148 q 66 -139 35 -148 q 117 -109 96 -129 q 151 -56 138 -88 q 169 22 164 -24 l 260 758 z "
    },
    "\xe2\x89\x88": {
        ha: 806,
        x_min: 122,
        x_max: 683,
        o: "m 547 596 q 585 601 567 596 q 620 613 604 606 q 648 628 636 620 q 666 644 660 637 l 683 565 q 620 517 659 533 q 539 501 581 501 q 467 512 503 501 q 396 538 431 524 q 328 563 361 551 q 264 574 295 574 q 224 570 243 574 q 188 558 204 565 q 160 542 172 551 q 142 525 149 533 l 122 601 q 186 653 147 636 q 271 670 225 670 q 344 659 308 670 q 415 633 380 647 q 482 607 449 619 q 547 596 515 596 m 547 361 q 585 366 567 361 q 620 377 604 370 q 648 393 636 385 q 666 409 660 401 l 683 331 q 620 281 659 297 q 539 265 581 265 q 467 277 503 265 q 396 302 431 288 q 328 328 361 317 q 264 340 295 340 q 224 335 243 340 q 188 323 204 330 q 160 307 172 315 q 142 290 149 298 l 122 365 q 186 418 147 401 q 271 435 225 435 q 344 423 308 435 q 415 398 380 412 q 482 373 449 384 q 547 361 515 361 z "
    },
    "\xe2\x89\xa0": {
        ha: 806,
        x_min: 104,
        x_max: 701,
        o: "m 104 631 l 444 631 l 523 799 l 613 799 l 533 631 l 701 631 l 701 538 l 490 538 l 424 399 l 701 399 l 701 305 l 380 305 l 297 130 l 208 130 l 290 305 l 104 305 l 104 399 l 334 399 l 400 538 l 104 538 l 104 631 z "
    },
    "\xe2\x89\xa4": {
        ha: 806,
        x_min: 103,
        x_max: 640,
        o: "m 103 549 l 640 811 l 640 726 q 634 706 640 715 q 610 688 628 697 l 303 544 q 236 524 272 532 q 272 515 254 520 q 303 503 289 510 l 610 358 q 634 340 627 349 q 640 319 640 331 l 640 235 l 103 498 l 103 549 m 103 149 l 640 149 l 640 56 l 103 56 l 103 149 z "
    },
    "\xe2\x89\xa5": {
        ha: 806,
        x_min: 165,
        x_max: 703,
        o: "m 703 549 l 703 498 l 165 235 l 165 319 q 172 340 165 331 q 196 358 178 349 l 502 503 q 569 524 531 516 q 534 533 551 528 q 502 544 517 538 l 196 688 q 172 706 178 696 q 165 726 165 715 l 165 811 l 703 549 m 703 56 l 165 56 l 165 149 l 703 149 l 703 56 z "
    },
    "\xe2\x97\x8a": {
        ha: 806,
        x_min: 89,
        x_max: 717,
        o: "m 89 487 l 360 1057 l 446 1057 l 717 487 l 446 -83 l 360 -83 l 89 487 m 192 487 l 383 83 q 394 54 389 67 q 403 28 399 41 q 411 54 406 41 q 422 83 416 67 l 617 487 l 422 891 q 403 945 410 921 q 394 919 399 933 q 383 891 389 906 l 192 487 z "
    },
    "\xef\xac\x81": {
        ha: 792,
        x_min: 18,
        x_max: 674,
        o: "m 129 0 l 129 598 l 51 607 q 27 618 37 610 q 18 639 18 625 l 18 690 l 129 690 l 129 728 q 149 847 129 793 q 210 940 169 901 q 310 1000 250 978 q 450 1022 370 1022 q 504 1018 476 1022 q 551 1008 531 1015 l 547 943 q 539 932 546 934 q 519 929 532 929 q 503 930 511 929 q 484 930 494 930 q 305 879 361 930 q 249 725 249 828 l 249 690 l 674 690 l 674 0 l 551 0 l 551 600 l 253 600 l 253 0 l 129 0 z "
    },
    "\xef\xac\x82": {
        ha: 825,
        x_min: 18,
        x_max: 701,
        o: "m 129 0 l 129 598 l 51 607 q 27 618 37 610 q 18 639 18 625 l 18 690 l 129 690 l 129 727 q 147 838 129 785 q 201 929 165 890 q 292 991 238 968 q 418 1014 346 1014 q 529 1009 476 1014 q 632 1005 582 1005 l 701 1005 l 701 0 l 578 0 l 578 918 q 502 922 540 919 q 437 924 465 924 q 298 872 347 924 q 249 727 249 820 l 249 690 l 433 690 l 433 600 l 253 600 l 253 0 l 129 0 z "
    },
    "\xef\x9b\x83": {
        ha: 426,
        x_min: 142,
        x_max: 274,
        o: "m 250 -56 q 270 -63 266 -56 q 274 -78 274 -70 q 272 -96 274 -85 q 265 -124 270 -106 q 251 -166 260 -141 q 229 -227 242 -191 q 212 -247 222 -242 q 185 -252 202 -252 l 142 -252 l 176 -56 l 250 -56 z "
    },
    "\xe2\x99\xa9": {
        ha: 0,
        x_min: -1,
        x_max: 1,
        o: "m -1 1023 l 1 1023 l 1 -238 l -1 -238 l -1 1023 z "
    }
}, x = "Lato", a = 1371, _ = -296, i = -140, n = 120, o = {
    yMin: -365,
    xMin: -188,
    yMax: 1837,
    xMax: 2233
}, h = 1e3, z = {
    format: 0,
    copyright: 'Copyright (c) 2010 by tyPoland Lukasz Dziedzic with Reserved Font Name "Lato". Licensed under the SIL Open Font License, Version 1.1. ',
    fontFamily: "Lato",
    fontSubfamily: "Regular",
    uniqueID: "tyPoland LukaszDziedzic: Lato Regular: 2010",
    fullName: "Lato Regular",
    version: "Version 1.010; Western character set",
    postScriptName: "Lato-Regular",
    trademark: "Lato is a trademark of tyPoland Lukasz Dziedzic.",
    manufacturer: "tyPoland Lukasz Dziedzic",
    designer: "Lukasz Dziedzic",
    description: 'Lato is a sanserif typeface family designed in the Summer 2010 by Warsaw-based designer Lukasz Dziedzic ("Lato" means "Summer" in Polish). It tries to carefully balance some potentially conflicting priorities: it should seem quite "transparent" when used in body text but would display some original traits when used in larger sizes. The classical proportions, particularly visible in the uppercase, give the letterforms familiar harmony and elegance. At the same time, its sleek sanserif look makes evident the fact that Lato was designed in 2010, even though it does not follow any current trend. The semi-rounded details of the letters give Lato a feeling of warmth, while the strong structure provides stability and seriousness. ',
    manufacturerURL: "http://www.typoland.com/",
    designerURL: "http://www.typoland.com/designers/Lukasz_Dziedzic/",
    licence: 'Copyright (c) 2010 by tyPoland Lukasz Dziedzic (http://www.typoland.com/) with Reserved Font Name "Lato". Licensed under the SIL Open Font License, Version 1.1 (http://scripts.sil.org/OFL). ',
    licenceURL: "http://scripts.sil.org/OFL"
}, e = "normal", t = "normal", s = {
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
    cssFontStyle: t
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ckpbz"], null, "parcelRequire79a8")

//# sourceMappingURL=Lato-BX5JVWZI.d8729308.js.map
