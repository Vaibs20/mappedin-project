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
})({"l6mco":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "43da6eaa4d7092b3";
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

},{}],"ldHR2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>i);
parcelHelpers.export(exports, "cssFontStyle", ()=>t);
parcelHelpers.export(exports, "cssFontWeight", ()=>r);
parcelHelpers.export(exports, "default", ()=>u);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>e);
parcelHelpers.export(exports, "resolution", ()=>h);
parcelHelpers.export(exports, "underlinePosition", ()=>o);
parcelHelpers.export(exports, "underlineThickness", ()=>n);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 79 492 b 167 849 79 628 101 754 b 464 1006 231 944 326 1006 b 761 849 600 1006 697 944 b 849 492 824 754 849 628 b 761 135 849 356 824 231 b 464 -21 697 39 600 -21 b 167 135 326 -21 231 39 b 79 492 101 231 79 356 m 213 492 b 306 160 213 332 243 222 b 464 99 346 122 393 99 b 621 160 532 99 582 122 b 714 492 683 222 714 332 b 621 824 714 651 683 761 b 464 885 582 861 532 885 b 306 824 393 885 346 861 b 213 492 243 761 213 651 "
    },
    1: {
        ha: 521,
        x_min: 0,
        x_max: 0,
        o: "m 274 0 l 274 703 l 36 703 l 36 800 b 286 985 171 804 264 878 l 407 985 l 407 0 "
    },
    2: {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 65 656 l 65 690 b 400 1006 65 857 188 1006 b 728 707 608 1006 728 868 b 544 403 728 578 653 474 l 349 276 b 222 129 289 238 236 194 l 733 129 l 733 0 l 54 0 b 288 385 57 158 122 276 l 451 493 b 590 706 544 553 590 628 b 397 886 590 799 526 886 b 203 676 264 886 203 793 b 204 635 203 664 203 650 "
    },
    3: {
        ha: 839,
        x_min: 0,
        x_max: 0,
        o: "m 275 581 l 571 857 l 93 857 l 93 985 l 754 985 l 754 858 l 468 589 b 775 290 613 590 775 497 b 424 -21 775 126 651 -21 b 61 286 197 -21 71 126 l 196 318 b 422 99 201 182 300 99 b 638 286 563 99 638 185 b 429 476 638 421 531 476 b 343 463 400 476 371 472 "
    },
    4: {
        ha: 863,
        x_min: 0,
        x_max: 0,
        o: "m 54 385 l 476 985 l 669 985 l 669 351 l 839 351 l 839 224 l 669 224 l 669 0 l 539 0 l 539 224 l 54 224 m 539 858 l 181 351 l 539 351 "
    },
    5: {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 188 308 b 417 99 196 182 289 99 b 635 304 538 99 635 179 b 415 515 635 444 533 515 b 231 443 346 515 276 490 b 94 499 174 465 150 479 l 225 985 l 735 985 l 735 857 l 314 857 l 236 560 b 440 636 281 611 361 636 b 772 311 632 636 772 514 b 417 -21 772 126 631 -21 b 54 268 208 -21 69 114 "
    },
    6: {
        ha: 876,
        x_min: 0,
        x_max: 0,
        o: "m 749 838 b 569 882 713 858 647 882 b 221 517 360 882 229 722 b 483 646 261 583 350 646 b 819 311 676 646 819 528 b 460 -21 819 99 647 -21 b 81 433 278 -21 81 103 b 578 1006 81 800 300 1006 b 790 949 667 1006 744 981 m 242 313 b 461 97 242 178 351 97 b 682 313 581 97 682 176 b 461 528 682 450 579 528 b 242 313 344 528 242 450 "
    },
    7: {
        ha: 724,
        x_min: 0,
        x_max: 0,
        o: "m 717 850 b 297 0 624 775 346 524 l 158 0 b 569 857 203 579 569 857 l 7 857 l 7 985 l 717 985 "
    },
    8: {
        ha: 844,
        x_min: 0,
        x_max: 0,
        o: "m 422 -21 b 69 258 197 -21 69 104 b 258 503 69 382 154 468 b 97 733 172 535 97 621 b 422 1006 97 894 239 1006 b 749 733 607 1006 749 894 b 586 503 749 624 676 535 b 775 258 690 469 775 382 b 422 -21 775 104 649 -21 m 422 561 b 613 728 529 564 613 628 b 422 892 613 821 538 892 b 233 728 308 892 233 821 b 422 561 233 628 315 564 m 422 99 b 636 269 558 99 636 174 b 422 443 636 368 557 443 b 208 269 288 443 208 368 b 422 99 208 174 285 99 "
    },
    9: {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 644 669 b 422 885 644 803 535 885 b 203 669 311 885 203 804 b 422 453 203 529 306 453 b 644 669 536 453 644 532 m 136 150 b 315 103 181 124 253 103 b 661 465 565 103 657 271 b 401 336 628 399 542 336 b 63 668 235 336 63 449 b 421 1006 63 871 235 1006 b 801 557 610 1006 801 869 b 315 -21 801 194 643 -21 b 88 38 240 -21 136 3 "
    },
    "\xc3\x90": {
        ha: 1006,
        x_min: 0,
        x_max: 0,
        o: "m 131 0 l 131 451 l 25 451 l 25 565 l 131 565 l 131 985 l 475 985 b 943 490 725 985 943 814 b 472 0 943 168 722 0 m 468 121 b 803 490 650 121 803 243 b 471 864 803 739 653 864 l 267 864 l 267 565 l 436 565 l 436 451 l 267 451 l 267 121 "
    },
    "\xc3\xb0": {
        ha: 792,
        x_min: 0,
        x_max: 0,
        o: "m 547 832 b 738 363 651 735 738 583 b 396 -19 738 146 610 -19 b 56 315 196 -19 56 124 b 376 644 56 521 215 644 b 571 575 460 644 531 621 b 431 774 539 660 489 724 l 249 683 l 208 771 l 339 836 b 183 900 288 865 235 885 l 224 1006 b 465 899 278 993 374 961 l 617 975 l 660 888 m 396 97 b 603 315 507 97 603 174 b 396 533 603 458 507 533 b 188 315 285 533 188 456 b 396 97 188 174 285 97 "
    },
    "\xc5\x81": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 140 0 l 140 401 l 7 343 l 7 464 l 140 522 l 140 985 l 276 985 l 276 583 l 494 679 l 494 558 l 276 461 l 276 128 l 742 128 l 742 0 "
    },
    "\xc5\x82": {
        ha: 400,
        x_min: 0,
        x_max: 0,
        o: "m 131 0 l 131 378 l 7 324 l 7 444 l 131 499 l 131 1006 l 261 1006 l 261 557 l 393 615 l 393 494 l 261 436 l 261 0 "
    },
    "\xc5\xa0": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 311 1219 l 424 1131 l 542 1219 l 669 1219 l 507 1054 l 340 1054 l 185 1219 m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 814 b 358 579 232 651 275 597 l 506 547 b 761 271 669 511 761 408 b 421 -21 761 118 631 -21 b 53 272 183 -21 71 132 l 183 314 b 419 103 193 204 271 103 b 622 260 556 103 622 174 b 475 413 622 331 574 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 "
    },
    "\xc5\xa1": {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 217 954 l 314 842 l 411 954 l 533 954 l 392 757 l 238 757 l 96 954 m 167 215 b 322 90 175 146 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 132 313 69 383 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 221 419 l 381 385 b 565 186 501 358 565 285 b 321 -21 565 92 486 -21 b 49 174 138 -21 60 97 "
    },
    "\xc3\x9d": {
        ha: 858,
        x_min: 0,
        x_max: 0,
        o: "m 458 1054 l 328 1054 l 468 1219 l 649 1219 m 14 985 l 178 985 l 433 546 l 689 985 l 844 985 l 497 421 l 497 0 l 361 0 l 361 421 "
    },
    "\xc3\xbd": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 393 754 l 283 754 l 404 957 l 568 957 m 135 -279 l 301 74 l 14 668 l 164 668 l 372 207 l 572 668 l 713 668 l 278 -279 "
    },
    "\xc3\x9e": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 261 218 l 261 0 l 125 0 l 125 985 l 261 985 l 261 794 l 476 794 b 788 506 658 794 788 671 b 478 218 788 339 660 218 m 461 339 b 649 504 579 339 649 403 b 461 674 649 608 579 674 l 261 674 l 261 339 "
    },
    "\xc3\xbe": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 635 335 b 438 568 635 468 560 568 b 239 335 318 568 239 468 b 438 99 239 197 318 99 b 635 335 558 99 635 197 m 111 -264 l 111 1006 l 242 1006 l 242 571 b 461 683 279 633 357 683 b 768 335 661 683 768 529 b 457 -18 768 136 653 -18 b 240 90 354 -18 276 31 l 240 -264 "
    },
    "\r": {
        ha: 347,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xc5\xbd": {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 333 1219 l 446 1131 l 564 1219 l 692 1219 l 529 1054 l 363 1054 l 207 1219 m 63 0 l 63 136 l 650 858 l 76 858 l 76 985 l 815 985 l 815 853 l 225 128 l 822 128 l 822 0 "
    },
    "\xc5\xbe": {
        ha: 647,
        x_min: 0,
        x_max: 0,
        o: "m 229 954 l 326 842 l 424 954 l 546 954 l 404 757 l 250 757 l 108 954 m 56 0 l 56 114 l 422 550 l 61 550 l 61 668 l 585 668 l 585 554 l 218 118 l 592 118 l 592 0 "
    },
    "\xc2\xbd": {
        ha: 1107,
        x_min: 0,
        x_max: 0,
        o: "m 119 0 l 826 985 l 951 985 l 247 0 m 204 478 l 204 818 l 85 818 l 85 890 b 213 985 153 892 203 933 l 311 985 l 311 478 m 660 311 b 656 354 657 325 656 343 b 839 517 656 442 725 517 b 1021 357 953 517 1021 442 b 924 204 1021 292 983 242 l 824 142 b 781 90 803 128 785 110 l 1024 90 l 1024 0 l 651 0 l 651 18 b 769 219 651 100 688 169 l 853 271 b 913 358 892 294 913 325 b 838 428 913 394 886 428 b 758 347 790 428 758 396 b 763 311 758 342 760 324 "
    },
    "\xc2\xbc": {
        ha: 1090,
        x_min: 0,
        x_max: 0,
        o: "m 189 478 l 189 818 l 69 818 l 69 890 b 197 985 138 892 188 933 l 296 985 l 296 478 m 106 0 l 813 985 l 938 985 l 233 0 m 554 201 l 800 507 l 918 507 l 918 190 l 1007 190 l 1007 100 l 918 100 l 918 0 l 811 0 l 811 100 l 554 100 m 811 383 l 657 190 l 811 190 "
    },
    "\xc2\xb9": {
        ha: 407,
        x_min: 0,
        x_max: 0,
        o: "m 189 478 l 189 818 l 69 818 l 69 890 b 197 985 138 892 188 933 l 296 985 l 296 478 "
    },
    "\xc2\xbe": {
        ha: 1201,
        x_min: 0,
        x_max: 0,
        o: "m 217 0 l 924 985 l 1049 985 l 344 0 m 207 785 l 339 894 l 101 894 l 101 985 l 478 985 l 478 897 l 339 786 b 489 635 418 779 489 729 b 288 467 489 543 408 467 b 83 610 167 467 100 538 l 176 647 b 286 558 185 594 229 558 b 381 635 343 558 381 592 b 286 713 381 693 332 713 b 247 707 272 713 257 710 m 665 201 l 911 507 l 1029 507 l 1029 190 l 1118 190 l 1118 100 l 1029 100 l 1029 0 l 922 0 l 922 100 l 665 100 m 922 383 l 768 190 l 922 190 "
    },
    "\xc2\xb3": {
        ha: 572,
        x_min: 0,
        x_max: 0,
        o: "m 207 785 l 339 894 l 101 894 l 101 985 l 478 985 l 478 897 l 339 786 b 489 635 418 779 489 729 b 288 467 489 543 408 467 b 83 610 167 467 100 538 l 176 647 b 286 558 185 594 229 558 b 381 635 343 558 381 592 b 286 713 381 693 332 713 b 247 707 272 713 257 710 "
    },
    "\xc2\xb2": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 93 789 b 89 832 90 803 89 821 b 272 994 89 919 158 994 b 454 835 386 994 454 919 b 357 682 454 769 417 719 l 257 619 b 214 568 236 606 218 588 l 457 568 l 457 478 l 85 478 l 85 496 b 203 697 85 578 121 647 l 286 749 b 346 836 325 772 346 803 b 271 906 346 872 319 906 b 192 825 224 906 192 874 b 196 789 192 819 193 801 "
    },
    "\xc2\xa6": {
        ha: 364,
        x_min: 0,
        x_max: 0,
        o: "m 239 1090 l 239 536 l 125 536 l 125 1090 m 239 349 l 239 -206 l 125 -206 l 125 349 "
    },
    "\xe2\x88\x92": {
        ha: 740,
        x_min: 0,
        x_max: 0,
        o: "m 76 400 l 76 510 l 664 510 l 664 400 "
    },
    "\xc3\x97": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 367 375 l 133 133 l 56 211 l 290 456 l 57 697 l 136 776 l 368 535 l 600 776 l 679 699 l 444 456 l 681 211 l 603 132 "
    },
    " ": {
        ha: 347,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "!": {
        ha: 432,
        x_min: 0,
        x_max: 0,
        o: "m 263 282 l 169 282 l 133 985 l 297 985 m 125 83 b 215 175 125 133 165 175 b 307 83 265 175 307 133 b 215 -7 307 33 265 -7 b 125 83 165 -7 125 33 "
    },
    '"': {
        ha: 519,
        x_min: 0,
        x_max: 0,
        o: "m 296 832 b 381 917 296 882 331 917 b 464 832 429 917 464 882 b 461 807 464 824 463 814 l 403 546 l 356 546 l 299 806 b 296 832 297 813 296 825 m 56 832 b 140 917 56 882 90 917 b 224 832 189 917 224 882 b 221 807 224 824 222 814 l 163 546 l 115 546 l 58 806 b 56 832 57 813 56 825 "
    },
    "#": {
        ha: 1115,
        x_min: 0,
        x_max: 0,
        o: "m 417 367 l 635 367 l 688 619 l 468 619 m 153 729 l 371 729 l 425 985 l 547 985 l 490 729 l 710 729 l 764 985 l 886 985 l 831 729 l 1038 729 l 1038 619 l 807 619 l 754 367 l 964 367 l 964 258 l 731 258 l 676 0 l 554 0 l 610 258 l 390 258 l 336 0 l 215 0 l 271 258 l 79 258 l 79 367 l 294 367 l 347 619 l 153 619 "
    },
    $: {
        ha: 901,
        x_min: 0,
        x_max: 0,
        o: "m 258 722 b 404 576 258 654 297 601 l 406 576 l 406 882 b 258 722 314 865 258 799 m 678 257 b 526 411 678 324 629 389 l 526 103 b 678 257 638 124 678 186 m 406 -144 l 406 -19 b 78 278 199 0 94 143 l 213 322 b 406 103 222 225 281 126 l 406 436 l 368 443 b 119 717 215 474 119 569 b 406 1000 119 857 238 981 l 406 1124 l 526 1124 l 526 999 b 806 756 710 975 781 853 l 679 707 b 526 878 669 765 621 850 l 526 549 l 546 544 b 814 265 707 510 814 401 b 526 -19 814 131 714 0 l 526 -144 "
    },
    "%": {
        ha: 1243,
        x_min: 0,
        x_max: 0,
        o: "m 86 761 b 326 996 86 893 199 996 b 569 761 456 996 569 893 b 326 524 569 628 456 524 b 86 761 199 524 86 626 m 201 0 l 910 985 l 1038 985 l 333 0 m 207 761 b 326 639 207 690 260 639 b 447 761 394 639 447 690 b 326 882 447 831 394 882 b 207 761 260 882 207 831 m 674 225 b 914 461 674 358 786 461 b 1157 225 1043 461 1157 358 b 914 -11 1157 93 1043 -11 b 674 225 786 -11 674 92 m 794 225 b 914 104 794 156 847 104 b 1035 225 982 104 1035 154 b 914 347 1035 296 982 347 b 794 225 847 347 794 296 "
    },
    "&": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 283 768 b 358 631 283 713 326 664 l 389 597 l 456 647 b 529 769 514 690 529 728 b 404 889 529 835 476 889 b 283 768 347 889 283 846 m 383 108 b 567 217 458 108 513 157 l 571 222 l 371 432 l 321 394 b 238 246 274 358 238 314 b 383 108 238 179 293 108 m 658 131 b 382 -17 578 40 492 -17 b 97 235 196 -17 97 108 b 271 510 97 363 167 432 l 285 521 l 267 540 b 149 760 221 589 149 664 b 403 1006 149 919 281 1006 b 664 765 551 1006 664 913 b 525 547 664 668 594 599 l 475 510 l 658 319 l 878 564 l 878 385 l 744 231 l 968 0 l 783 0 "
    },
    "'": {
        ha: 279,
        x_min: 0,
        x_max: 0,
        o: "m 56 832 b 140 917 56 882 90 917 b 224 832 189 917 224 882 b 221 807 224 824 222 814 l 163 546 l 115 546 l 58 806 b 56 832 57 813 56 825 "
    },
    "(": {
        ha: 419,
        x_min: 0,
        x_max: 0,
        o: "m 76 440 b 340 1103 76 743 192 951 l 419 1033 b 189 440 278 875 189 685 b 419 -153 189 196 278 6 l 340 -222 b 76 440 192 -71 76 138 "
    },
    ")": {
        ha: 419,
        x_min: 0,
        x_max: 0,
        o: "m 343 440 b 79 -222 343 138 228 -71 l 0 -153 b 231 440 142 6 231 196 b 0 1033 231 685 142 875 l 79 1103 b 343 440 228 951 343 743 "
    },
    "*": {
        ha: 611,
        x_min: 0,
        x_max: 0,
        o: "m 360 799 l 531 857 l 563 757 l 390 700 l 504 554 l 419 490 l 304 642 l 196 492 l 111 556 l 221 700 l 49 757 l 81 857 l 250 797 l 250 985 l 360 985 "
    },
    "+": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 336 510 l 336 781 l 450 781 l 450 510 l 711 510 l 711 400 l 450 400 l 450 126 l 336 126 l 336 400 l 76 400 l 76 510 "
    },
    ",": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 97 89 b 199 182 97 139 140 182 b 311 50 258 182 311 138 b 106 -221 311 -133 192 -210 l 106 -149 b 221 1 174 -133 219 -65 b 190 -6 217 -1 206 -6 b 97 89 139 -6 97 29 "
    },
    "-": {
        ha: 501,
        x_min: 0,
        x_max: 0,
        o: "m 63 342 l 63 456 l 439 456 l 439 342 "
    },
    ".": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 97 89 b 193 186 97 143 139 186 b 290 89 247 186 290 143 b 193 -7 290 35 247 -7 b 97 89 139 -7 97 35 "
    },
    "/": {
        ha: 603,
        x_min: 0,
        x_max: 0,
        o: "m 126 0 l 0 0 l 476 985 l 603 985 "
    },
    ":": {
        ha: 403,
        x_min: 0,
        x_max: 0,
        o: "m 104 578 b 200 675 104 632 146 675 b 297 578 254 675 297 632 b 200 482 297 524 254 482 b 104 578 146 482 104 524 m 106 89 b 201 186 106 143 147 186 b 299 89 256 186 299 143 b 201 -7 299 35 256 -7 b 106 89 147 -7 106 35 "
    },
    ";": {
        ha: 413,
        x_min: 0,
        x_max: 0,
        o: "m 106 578 b 201 675 106 632 147 675 b 299 578 256 675 299 632 b 201 482 299 524 256 482 b 106 578 147 482 106 524 m 104 86 b 201 174 104 133 146 174 b 308 49 258 174 308 132 b 113 -208 308 -125 194 -197 l 113 -140 b 222 3 178 -125 221 -61 b 193 -4 218 0 208 -4 b 104 86 144 -4 104 29 "
    },
    "<": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 49 513 l 621 799 l 621 667 l 190 454 l 621 242 l 621 110 l 49 394 "
    },
    "=": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 90 536 l 90 643 l 733 643 l 733 536 m 90 265 l 90 375 l 733 375 l 733 265 "
    },
    ">": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 621 394 l 49 110 l 49 242 l 482 454 l 49 667 l 49 799 l 621 513 "
    },
    "?": {
        ha: 708,
        x_min: 0,
        x_max: 0,
        o: "m 272 282 b 271 331 271 299 271 313 b 386 547 271 422 304 492 l 447 589 b 521 725 494 621 521 671 b 356 883 521 807 467 883 b 182 706 235 883 182 793 b 192 638 182 682 186 653 l 57 654 b 49 721 51 674 49 696 b 356 1006 49 849 142 1006 b 660 726 550 1006 660 868 b 518 485 660 615 599 539 l 454 442 b 393 308 411 413 393 363 b 394 282 393 301 393 296 m 242 83 b 332 175 242 133 282 175 b 424 83 382 175 424 133 b 332 -7 424 33 382 -7 b 242 83 282 -7 242 33 "
    },
    "@": {
        ha: 1147,
        x_min: 0,
        x_max: 0,
        o: "m 835 190 b 697 279 769 190 713 218 b 532 188 656 219 592 188 b 319 425 407 188 319 282 b 597 749 319 611 447 749 b 746 657 656 749 725 719 l 758 731 l 868 731 l 793 382 b 789 343 790 368 789 356 b 842 286 789 311 803 286 b 992 550 919 286 992 411 b 603 904 992 753 838 904 b 176 461 358 904 176 726 b 618 36 176 218 340 36 b 903 133 719 36 819 67 l 960 58 b 618 -65 879 -18 738 -65 b 63 463 293 -65 63 147 b 601 1006 63 785 308 1006 b 1099 551 883 1006 1099 811 b 835 190 1099 344 979 190 m 715 514 b 599 644 715 596 674 644 b 433 440 499 644 433 543 b 551 289 433 356 461 289 b 715 514 646 289 711 383 "
    },
    A: {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    B: {
        ha: 836,
        x_min: 0,
        x_max: 0,
        o: "m 446 985 b 743 718 633 985 743 874 b 596 506 743 613 682 538 b 774 268 708 478 774 378 b 469 0 774 113 650 0 l 125 0 l 125 985 m 431 554 b 606 711 540 554 606 619 b 425 865 606 804 538 865 l 261 865 l 261 554 m 450 119 b 635 276 560 119 635 181 b 456 438 635 371 575 438 l 261 438 l 261 119 "
    },
    C: {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 551 -21 b 63 493 297 -21 63 164 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 719 104 825 206 l 986 296 b 551 -21 933 111 778 -21 "
    },
    D: {
        ha: 1e3,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 469 985 b 938 490 719 985 938 814 b 467 0 938 168 717 0 m 463 121 b 797 490 644 121 797 243 b 465 864 797 739 647 864 l 261 864 l 261 121 "
    },
    E: {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    F: {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 542 l 681 542 l 681 414 l 261 414 l 261 0 "
    },
    G: {
        ha: 1063,
        x_min: 0,
        x_max: 0,
        o: "m 868 0 l 856 139 b 540 -21 813 61 706 -21 b 63 493 293 -21 63 160 b 550 1006 63 826 307 1006 b 986 708 764 1006 929 886 l 863 656 b 550 881 818 797 703 881 b 201 493 374 881 201 754 b 544 103 201 232 368 103 b 849 360 764 103 843 258 l 507 360 l 507 482 l 978 482 l 978 0 "
    },
    H: {
        ha: 1025,
        x_min: 0,
        x_max: 0,
        o: "m 764 0 l 764 438 l 261 438 l 261 0 l 125 0 l 125 985 l 261 985 l 261 564 l 764 564 l 764 985 l 900 985 l 900 0 "
    },
    I: {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    J: {
        ha: 742,
        x_min: 0,
        x_max: 0,
        o: "m 28 357 l 164 388 l 164 294 b 333 106 164 164 235 106 b 494 285 433 106 494 171 l 494 985 l 631 985 l 631 294 b 335 -21 631 122 518 -21 b 28 293 142 -21 28 104 "
    },
    K: {
        ha: 928,
        x_min: 0,
        x_max: 0,
        o: "m 401 447 l 261 297 l 261 0 l 125 0 l 125 985 l 261 985 l 261 478 l 722 985 l 901 985 l 492 546 l 907 0 l 735 0 "
    },
    L: {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 261 985 l 261 128 l 726 128 l 726 0 "
    },
    M: {
        ha: 1314,
        x_min: 0,
        x_max: 0,
        o: "m 1054 0 l 1054 767 l 718 0 l 593 0 l 260 767 l 260 0 l 125 0 l 125 985 l 310 985 l 657 183 l 1007 985 l 1189 985 l 1189 0 "
    },
    N: {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 793 0 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 0 "
    },
    O: {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    P: {
        ha: 829,
        x_min: 0,
        x_max: 0,
        o: "m 261 403 l 261 0 l 125 0 l 125 985 l 483 985 b 788 693 665 985 788 858 b 483 403 788 526 665 403 m 458 525 b 649 692 576 525 649 590 b 458 863 649 796 576 863 l 261 863 l 261 525 "
    },
    Q: {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 913 129 1051 338 996 215 l 1028 0 l 935 -82 l 815 50 b 557 -21 738 3 647 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 729 147 618 104 676 118 l 558 339 l 653 421 l 825 226 b 913 493 878 290 913 379 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    R: {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 471 525 b 657 692 582 525 657 590 b 471 863 657 796 582 863 l 263 863 l 263 525 m 410 403 l 263 403 l 263 0 l 125 0 l 125 985 l 496 985 b 797 692 682 985 797 854 b 558 413 797 550 707 440 l 793 0 l 635 0 "
    },
    S: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 814 b 358 579 232 651 275 597 l 506 547 b 761 271 669 511 761 408 b 421 -21 761 118 631 -21 b 53 272 183 -21 71 132 l 183 314 b 419 103 193 204 271 103 b 622 260 556 103 622 174 b 475 413 622 331 574 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 "
    },
    T: {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 479 858 l 479 0 l 343 0 l 343 858 l 14 858 l 14 985 l 808 985 l 808 858 "
    },
    U: {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    V: {
        ha: 913,
        x_min: 0,
        x_max: 0,
        o: "m 756 985 l 899 985 l 519 0 l 385 0 l 14 985 l 158 985 l 456 175 "
    },
    W: {
        ha: 1394,
        x_min: 0,
        x_max: 0,
        o: "m 1233 985 l 1374 985 l 1093 0 l 953 0 l 696 799 l 442 0 l 306 0 l 21 985 l 161 985 l 378 214 l 625 985 l 768 985 l 1021 206 "
    },
    X: {
        ha: 857,
        x_min: 0,
        x_max: 0,
        o: "m 508 493 l 839 0 l 676 0 l 428 385 l 174 0 l 14 0 l 350 493 l 17 985 l 181 985 l 429 599 l 682 985 l 843 985 "
    },
    Y: {
        ha: 858,
        x_min: 0,
        x_max: 0,
        o: "m 14 985 l 178 985 l 433 546 l 689 985 l 844 985 l 497 421 l 497 0 l 361 0 l 361 421 "
    },
    Z: {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 63 0 l 63 136 l 650 858 l 76 858 l 76 985 l 815 985 l 815 853 l 225 128 l 822 128 l 822 0 "
    },
    "[": {
        ha: 400,
        x_min: 0,
        x_max: 0,
        o: "m 125 -206 l 125 1090 l 393 1090 l 393 985 l 239 985 l 239 -101 l 393 -101 l 393 -206 "
    },
    "\\": {
        ha: 603,
        x_min: 0,
        x_max: 0,
        o: "m 0 985 l 129 985 l 603 0 l 474 0 "
    },
    "]": {
        ha: 400,
        x_min: 0,
        x_max: 0,
        o: "m 7 -206 l 7 -101 l 161 -101 l 161 985 l 7 985 l 7 1090 l 275 1090 l 275 -206 "
    },
    "^": {
        ha: 724,
        x_min: 0,
        x_max: 0,
        o: "m 551 492 l 363 850 l 172 492 l 35 492 l 304 986 l 419 986 l 689 492 "
    },
    _: {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 21 -110 l 21 0 l 732 0 l 732 -110 "
    },
    "`": {
        ha: 378,
        x_min: 0,
        x_max: 0,
        o: "m 47 957 l 211 957 l 331 754 l 222 754 "
    },
    a: {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    b: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 1006 l 240 1006 l 240 574 b 461 688 272 633 350 688 b 768 338 664 688 768 532 b 457 -18 768 139 656 -18 b 240 97 358 -18 282 25 l 240 0 m 635 338 b 438 572 635 482 558 572 b 239 338 322 572 239 482 b 438 99 239 193 322 99 b 635 338 557 99 635 193 "
    },
    c: {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 392 568 b 189 335 286 568 189 490 b 393 100 189 182 285 100 b 579 238 518 100 564 185 l 694 188 b 393 -21 663 92 567 -21 b 56 335 199 -21 56 132 b 392 689 56 543 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 "
    },
    d: {
        ha: 817,
        x_min: 0,
        x_max: 0,
        o: "m 189 336 b 385 97 189 199 260 97 b 578 339 504 97 578 201 b 386 571 578 476 506 571 b 189 336 267 571 189 474 m 579 101 b 372 -18 547 38 476 -18 b 56 336 176 -18 56 138 b 372 686 56 525 183 686 b 576 574 490 686 554 628 l 576 1006 l 706 1006 l 706 124 b 713 0 706 60 711 11 l 586 0 b 579 90 583 15 579 50 "
    },
    e: {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    f: {
        ha: 476,
        x_min: 0,
        x_max: 0,
        o: "m 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 l 151 781 b 371 1010 151 929 250 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 b 286 774 346 888 286 865 l 286 668 l 447 668 l 447 550 "
    },
    g: {
        ha: 803,
        x_min: 0,
        x_max: 0,
        o: "m 390 142 b 581 356 503 142 581 226 b 390 569 581 485 503 569 b 197 356 275 569 197 485 b 390 142 197 225 272 142 m 189 -7 b 371 -171 199 -100 269 -171 b 575 46 511 -171 575 -99 l 575 142 b 371 32 543 81 471 32 b 64 356 193 32 64 167 b 371 681 64 536 188 681 b 576 575 474 681 543 642 l 576 668 l 706 668 l 706 50 b 371 -285 706 -119 622 -285 b 63 -36 204 -285 79 -179 "
    },
    h: {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 242 0 l 111 0 l 111 1006 l 242 1006 l 242 590 b 444 688 290 661 368 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 393 297 569 244 492 "
    },
    i: {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 82 921 b 175 1015 82 974 124 1015 b 269 921 228 1015 269 974 b 175 828 269 869 228 828 b 82 921 124 828 82 869 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    j: {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 82 924 b 175 1018 82 976 124 1018 b 269 924 228 1018 269 976 b 175 831 269 872 228 831 b 82 924 124 831 82 872 m 111 668 l 242 668 l 242 -78 b 57 -285 242 -199 172 -285 b -21 -275 7 -285 -12 -278 l -21 -165 b 21 -169 -14 -167 1 -169 b 111 -72 89 -169 111 -133 "
    },
    k: {
        ha: 729,
        x_min: 0,
        x_max: 0,
        o: "m 425 386 l 715 0 l 551 0 l 333 294 l 240 201 l 240 0 l 111 0 l 111 1006 l 240 1006 l 240 372 l 529 668 l 710 668 "
    },
    l: {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 1006 l 242 1006 l 242 0 "
    },
    m: {
        ha: 1190,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 668 l 236 668 l 236 579 b 439 688 278 653 361 688 b 639 561 522 688 603 647 b 863 688 692 657 778 688 b 1093 433 979 688 1093 608 l 1093 0 l 964 0 l 964 419 b 822 572 964 507 921 572 b 668 404 731 572 668 500 l 668 0 l 538 0 l 538 419 b 396 572 538 506 496 572 b 240 403 303 572 240 503 l 240 0 "
    },
    n: {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    o: {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    p: {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 635 335 b 438 568 635 468 560 568 b 239 335 318 568 239 468 b 438 99 239 197 318 99 b 635 335 558 99 635 197 m 111 -264 l 111 668 l 238 668 l 238 564 b 461 683 274 631 353 683 b 768 335 661 683 768 529 b 457 -18 768 136 653 -18 b 240 90 354 -18 276 31 l 240 -264 "
    },
    q: {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 581 -264 l 581 94 b 372 -18 546 26 471 -18 b 56 336 181 -18 56 142 b 369 685 56 525 174 685 b 583 565 485 685 556 625 l 583 668 l 710 668 l 710 -264 m 189 336 b 385 97 189 199 265 97 b 582 336 503 97 582 199 b 385 569 582 474 503 569 b 189 336 264 569 189 474 "
    },
    r: {
        ha: 510,
        x_min: 0,
        x_max: 0,
        o: "m 482 536 b 425 540 463 539 443 540 b 242 335 315 540 242 482 l 242 0 l 111 0 l 111 668 l 239 668 l 239 551 b 439 679 288 654 371 679 b 482 675 457 679 475 676 "
    },
    s: {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 167 215 b 322 90 175 146 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 132 313 69 383 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 221 419 l 381 385 b 565 186 501 358 565 285 b 321 -21 565 92 486 -21 b 49 174 138 -21 60 97 "
    },
    t: {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 286 668 l 431 668 l 431 550 l 286 550 l 286 203 b 379 111 286 142 311 111 b 431 117 396 111 419 114 l 431 6 b 342 -7 419 1 386 -7 b 156 183 228 -7 156 63 l 156 550 l 28 550 l 28 668 l 64 668 b 167 771 136 668 167 713 l 167 879 l 286 879 "
    },
    u: {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    v: {
        ha: 697,
        x_min: 0,
        x_max: 0,
        o: "m 417 0 l 285 0 l 14 668 l 161 668 l 351 153 l 543 668 l 683 668 "
    },
    w: {
        ha: 1101,
        x_min: 0,
        x_max: 0,
        o: "m 622 668 l 796 165 l 943 668 l 1081 668 l 864 0 l 729 0 l 551 508 l 378 0 l 240 0 l 21 668 l 164 668 l 314 165 l 488 668 "
    },
    x: {
        ha: 682,
        x_min: 0,
        x_max: 0,
        o: "m 263 340 l 22 668 l 181 668 l 344 433 l 506 668 l 660 668 l 422 340 b 668 0 463 286 628 54 l 511 0 l 339 246 l 169 0 l 14 0 "
    },
    y: {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 135 -279 l 301 74 l 14 668 l 164 668 l 372 207 l 572 668 l 713 668 l 278 -279 "
    },
    z: {
        ha: 647,
        x_min: 0,
        x_max: 0,
        o: "m 56 0 l 56 114 l 422 550 l 61 550 l 61 668 l 585 668 l 585 554 l 218 118 l 592 118 l 592 0 "
    },
    "{": {
        ha: 490,
        x_min: 0,
        x_max: 0,
        o: "m 63 501 b 215 642 143 501 215 539 l 215 832 b 465 1090 215 1004 303 1090 l 483 1090 l 483 986 l 465 986 b 329 840 363 986 329 942 l 329 613 b 185 442 329 519 274 458 b 329 271 274 425 329 364 l 329 44 b 465 -101 329 -57 363 -101 l 483 -101 l 483 -206 l 465 -206 b 215 53 303 -206 215 -119 l 215 242 b 63 382 215 344 143 382 "
    },
    "|": {
        ha: 364,
        x_min: 0,
        x_max: 0,
        o: "m 125 -206 l 125 1090 l 239 1090 l 239 -206 "
    },
    "}": {
        ha: 490,
        x_min: 0,
        x_max: 0,
        o: "m 428 382 b 275 242 347 382 275 344 l 275 53 b 25 -206 275 -119 188 -206 l 7 -206 l 7 -101 l 25 -101 b 161 44 128 -101 161 -57 l 161 271 b 306 442 161 364 217 425 b 161 613 217 458 161 519 l 161 840 b 25 986 161 942 128 986 l 7 986 l 7 1090 l 25 1090 b 275 832 188 1090 275 1004 l 275 642 b 428 501 275 539 347 501 "
    },
    "~": {
        ha: 792,
        x_min: 0,
        x_max: 0,
        o: "m 336 422 b 261 443 310 436 285 443 b 128 364 210 443 164 413 l 49 428 b 260 560 100 513 175 560 b 392 524 301 560 347 549 l 456 489 b 535 467 482 474 510 467 b 664 543 586 467 633 494 l 743 479 b 535 350 692 394 618 350 b 400 388 492 350 446 363 "
    },
    "\xc3\x84": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 601 1138 b 683 1219 601 1183 638 1219 b 765 1138 729 1219 765 1183 b 683 1056 765 1092 729 1056 b 601 1138 638 1056 601 1092 m 197 1138 b 279 1219 197 1183 233 1219 b 361 1138 325 1219 361 1183 b 279 1056 361 1092 325 1056 b 197 1138 233 1056 197 1092 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc3\x85": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 551 1056 b 478 1128 551 1094 519 1128 b 408 1056 439 1128 408 1094 b 478 985 408 1015 439 985 b 551 1056 519 985 551 1015 m 313 401 l 651 401 l 481 843 m 651 1056 b 586 925 651 1001 625 956 l 954 0 l 807 0 l 700 275 l 264 275 l 160 0 l 14 0 l 381 922 b 311 1056 339 953 311 1000 b 481 1224 311 1150 390 1224 b 651 1056 574 1224 651 1150 "
    },
    "\xc3\x87": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 469 -86 l 511 -19 b 63 493 274 -1 63 181 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 715 104 825 206 l 986 296 b 610 -18 938 128 800 3 l 581 -64 b 715 -178 658 -64 715 -108 b 553 -303 715 -243 665 -303 b 400 -239 483 -303 428 -272 l 451 -176 b 551 -224 468 -194 504 -224 b 617 -178 585 -224 617 -210 b 556 -133 617 -153 594 -133 b 515 -140 542 -133 526 -136 "
    },
    "\xc3\x89": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 456 1054 l 325 1054 l 465 1219 l 646 1219 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc3\x91": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 754 1201 b 621 1047 754 1099 697 1047 b 522 1079 581 1047 550 1060 l 501 1093 b 450 1113 483 1104 468 1113 b 401 1051 421 1113 401 1094 l 307 1051 l 307 1074 b 442 1228 307 1176 365 1228 b 543 1196 481 1228 515 1213 l 564 1183 b 617 1164 583 1172 599 1164 b 661 1213 640 1164 661 1176 l 661 1224 l 754 1224 m 793 0 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 0 "
    },
    "\xc3\x96": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 692 1138 b 774 1219 692 1183 728 1219 b 856 1138 819 1219 856 1183 b 774 1056 856 1092 819 1056 b 692 1138 728 1056 692 1092 m 260 1138 b 342 1219 260 1183 296 1219 b 424 1138 388 1219 424 1183 b 342 1056 424 1092 388 1056 b 260 1138 296 1056 260 1092 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc3\x9c": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 538 1138 b 619 1219 538 1183 574 1219 b 701 1138 665 1219 701 1183 b 619 1056 701 1092 665 1056 b 538 1138 574 1056 538 1092 m 231 1138 b 313 1219 231 1183 267 1219 b 394 1138 358 1219 394 1183 b 313 1056 394 1092 358 1056 b 231 1138 267 1056 231 1092 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc3\xa1": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 415 754 l 306 754 l 426 957 l 590 957 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa0": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 151 957 l 315 957 l 435 754 l 326 754 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa2": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 150 757 l 294 950 l 443 950 l 588 757 l 465 757 l 368 869 l 271 757 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa4": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 413 863 b 493 943 413 907 447 943 b 574 863 538 943 574 907 b 493 782 574 817 538 782 b 413 863 447 782 413 817 m 153 863 b 232 943 153 907 188 943 b 314 863 278 943 314 907 b 232 782 314 817 278 782 b 153 863 188 782 153 817 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa3": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 586 919 b 451 768 586 817 528 768 b 360 799 415 768 386 782 l 340 811 b 289 831 322 822 307 831 b 249 771 263 831 249 817 l 149 771 l 149 792 b 285 943 149 894 208 943 b 378 913 322 943 351 929 l 397 900 b 447 881 415 889 429 881 b 488 940 475 881 488 896 l 586 940 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa5": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 518 890 b 363 739 518 806 447 739 b 208 890 281 739 208 806 b 363 1043 208 976 281 1043 b 518 890 447 1043 518 976 m 429 890 b 361 958 429 928 400 958 b 296 890 324 958 296 928 b 361 824 296 853 324 824 b 429 890 400 824 429 853 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc3\xa7": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 306 -87 l 350 -18 b 56 335 178 3 56 150 b 392 689 56 540 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 b 189 335 286 568 189 486 b 393 100 189 183 285 100 b 579 238 514 100 564 185 l 694 188 b 449 -17 665 101 589 4 l 417 -65 b 551 -179 494 -65 551 -110 b 389 -301 551 -244 501 -301 b 236 -240 319 -301 264 -274 l 288 -178 b 388 -225 304 -196 340 -225 b 453 -179 421 -225 453 -211 b 392 -135 453 -154 431 -135 b 351 -142 378 -135 363 -137 "
    },
    "\xc3\xa9": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 429 754 l 319 754 l 440 957 l 604 957 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc3\xa8": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 172 957 l 336 957 l 456 754 l 347 754 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc3\xaa": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 169 757 l 314 950 l 463 950 l 607 757 l 485 757 l 388 869 l 290 757 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc3\xab": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 435 863 b 515 943 435 907 469 943 b 596 863 560 943 596 907 b 515 782 596 817 560 782 b 435 863 469 782 435 817 m 175 863 b 254 943 175 907 210 943 b 336 863 300 943 336 907 b 254 782 336 817 300 782 b 175 863 210 782 175 817 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc3\xad": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 228 754 l 118 754 l 239 957 l 403 957 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc3\xac": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m -46 957 l 118 957 l 238 754 l 129 754 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc3\xae": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m -42 757 l 103 950 l 251 950 l 396 757 l 274 757 l 176 869 l 79 757 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc3\xaf": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 200 863 b 274 938 200 904 232 938 b 349 863 315 938 349 904 b 274 789 349 821 315 789 b 200 863 232 789 200 821 m 4 863 b 78 938 4 904 36 938 b 153 863 119 938 153 904 b 78 789 153 821 119 789 b 4 863 36 789 4 821 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc3\xb1": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 628 919 b 493 768 628 817 569 768 b 401 799 457 768 428 782 l 382 811 b 331 831 364 822 349 831 b 290 771 304 831 290 817 l 190 771 l 190 792 b 326 943 190 894 250 943 b 419 913 364 943 393 929 l 439 900 b 489 881 457 889 471 881 b 529 940 517 881 529 896 l 628 940 m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    "\xc3\xb3": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 429 754 l 319 754 l 440 957 l 604 957 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc3\xb2": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 174 957 l 338 957 l 457 754 l 349 754 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc3\xb4": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 179 757 l 324 950 l 472 950 l 617 757 l 494 757 l 397 869 l 300 757 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc3\xb6": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 446 863 b 526 943 446 907 481 943 b 607 863 571 943 607 907 b 526 782 607 817 571 782 b 446 863 481 782 446 817 m 186 863 b 265 943 186 907 221 943 b 347 863 311 943 347 907 b 265 782 347 817 311 782 b 186 863 221 782 186 817 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc3\xb5": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 618 919 b 483 768 618 817 560 768 b 392 799 447 768 418 782 l 372 811 b 321 831 354 822 339 831 b 281 771 294 831 281 817 l 181 771 l 181 792 b 317 943 181 894 240 943 b 410 913 354 943 383 929 l 429 900 b 479 881 447 889 461 881 b 519 940 507 881 519 896 l 618 940 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc3\xba": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 413 754 l 303 754 l 424 957 l 588 957 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc3\xb9": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 181 957 l 344 957 l 464 754 l 356 754 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc3\xbb": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 171 757 l 315 950 l 464 950 l 608 757 l 486 757 l 389 869 l 292 757 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc3\xbc": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 438 863 b 518 943 438 907 472 943 b 599 863 563 943 599 907 b 518 782 599 817 563 782 b 438 863 472 782 438 817 m 178 863 b 257 943 178 907 213 943 b 339 863 303 943 339 907 b 257 782 339 817 303 782 b 178 863 213 782 178 817 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xe2\x80\xa0": {
        ha: 536,
        x_min: 0,
        x_max: 0,
        o: "m 211 225 l 211 665 l 35 665 l 35 778 l 211 778 l 211 985 l 325 985 l 325 778 l 501 778 l 501 665 l 325 665 l 325 225 "
    },
    "\xc2\xb0": {
        ha: 515,
        x_min: 0,
        x_max: 0,
        o: "m 35 781 b 257 999 35 903 138 999 b 481 781 376 999 481 903 b 257 561 481 657 376 561 b 35 781 138 561 35 657 m 150 781 b 257 671 150 717 197 671 b 364 781 318 671 364 717 b 257 889 364 843 318 889 b 150 781 197 889 150 843 "
    },
    "\xc2\xa2": {
        ha: 818,
        x_min: 0,
        x_max: 0,
        o: "m 739 347 b 481 143 708 261 628 161 l 481 0 l 360 0 l 360 144 b 79 499 190 176 79 319 b 360 847 79 683 197 821 l 360 985 l 481 985 l 481 853 b 733 644 631 835 706 736 l 621 594 b 481 738 606 650 564 717 l 481 257 b 628 396 574 278 615 350 l 739 347 m 208 499 b 360 260 208 375 271 290 l 360 733 b 208 499 271 701 208 622 "
    },
    "\xc2\xa3": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 219 538 b 169 726 194 592 169 653 b 465 1006 169 890 303 1006 b 775 739 697 1006 768 860 l 635 713 b 468 883 632 831 561 883 b 308 726 385 883 308 828 b 363 538 308 661 333 600 l 658 538 l 658 414 l 399 414 b 401 371 400 400 401 385 b 251 124 401 260 346 171 l 574 124 b 725 289 682 124 725 204 l 858 267 b 611 0 858 113 768 0 l 100 0 l 100 140 b 268 354 204 182 268 271 b 261 414 268 374 267 394 l 110 414 l 110 538 "
    },
    "\xc2\xa7": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 317 508 b 250 397 285 494 250 449 b 339 275 250 346 275 308 l 478 200 b 544 311 508 214 544 258 b 456 433 544 363 519 400 m 672 332 b 556 158 672 247 607 181 b 678 -43 632 110 678 33 b 393 -299 678 -199 544 -299 b 119 -40 215 -299 122 -193 l 243 -15 b 396 -189 243 -117 293 -189 b 543 -57 482 -189 543 -142 b 461 64 543 -6 511 38 l 317 139 b 124 376 214 192 124 251 b 242 549 124 463 190 529 b 118 751 163 597 118 674 b 403 1006 118 907 251 1006 b 676 749 581 1006 676 892 l 551 724 b 400 896 551 826 501 896 b 251 764 313 896 251 843 b 335 644 251 714 281 672 l 478 569 b 672 332 581 515 672 456 "
    },
    "\xe2\x80\xa2": {
        ha: 769,
        x_min: 0,
        x_max: 0,
        o: "m 97 401 b 385 690 97 561 226 690 b 672 401 543 690 672 561 b 385 114 672 244 543 114 b 97 401 226 114 97 244 "
    },
    "\xc2\xb6": {
        ha: 869,
        x_min: 0,
        x_max: 0,
        o: "m 456 -279 l 340 -279 l 340 446 l 318 446 b 49 710 172 446 49 561 b 363 985 49 888 192 985 l 835 985 l 835 872 l 700 872 l 700 -279 l 585 -279 l 585 872 l 456 872 "
    },
    "\xc3\x9f": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 496 476 b 560 410 496 440 521 428 l 608 386 b 753 181 686 349 753 278 b 526 -21 753 88 682 -21 b 299 175 360 -21 299 94 l 414 206 b 526 88 414 160 440 88 b 624 169 593 88 624 135 b 551 271 624 217 600 247 l 504 293 b 358 469 440 322 358 365 b 446 619 358 536 393 585 l 490 649 b 569 767 536 678 569 715 b 417 890 569 833 514 890 b 242 678 322 890 242 819 l 242 0 l 111 0 l 111 685 b 417 1006 111 889 247 1006 b 701 771 586 1006 701 903 b 579 565 701 663 642 604 l 539 540 b 496 476 514 525 496 507 "
    },
    "\xc2\xae": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 576 518 b 674 600 639 518 674 549 b 576 685 674 654 639 685 l 504 685 l 504 518 m 504 218 l 399 218 l 399 776 l 592 776 b 781 601 700 776 781 700 b 658 436 781 524 731 460 l 783 218 l 663 218 l 546 426 l 504 426 "
    },
    "\xc2\xa9": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 571 686 b 406 496 485 686 406 622 b 572 304 406 371 483 304 b 724 417 674 304 711 374 l 818 375 b 572 206 792 297 714 206 b 297 496 414 206 297 331 b 571 785 297 665 415 785 b 814 611 717 785 792 693 l 717 571 b 571 686 704 624 664 686 "
    },
    "\xe2\x84\xa2": {
        ha: 1193,
        x_min: 0,
        x_max: 0,
        o: "m 303 890 l 303 478 l 197 478 l 197 890 l 42 890 l 42 985 l 458 985 l 458 890 m 1010 478 l 1010 801 l 869 478 l 788 478 l 651 797 l 651 478 l 546 478 l 546 985 l 683 985 l 832 632 l 981 985 l 1110 985 l 1110 478 "
    },
    "\xc2\xb4": {
        ha: 381,
        x_min: 0,
        x_max: 0,
        o: "m 158 754 l 49 754 l 169 957 l 333 957 "
    },
    "\xc2\xa8": {
        ha: 526,
        x_min: 0,
        x_max: 0,
        o: "m 313 863 b 393 943 313 907 347 943 b 474 863 438 943 474 907 b 393 782 474 817 438 782 b 313 863 347 782 313 817 m 53 863 b 132 943 53 907 88 943 b 214 863 178 943 214 907 b 132 782 214 817 178 782 b 53 863 88 782 53 817 "
    },
    "\xe2\x89\xa0": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 342 265 l 239 126 l 106 126 l 208 265 l 90 265 l 90 375 l 289 375 l 407 536 l 90 536 l 90 643 l 486 643 l 588 781 l 721 781 l 619 643 l 733 643 l 733 536 l 540 536 l 422 375 l 733 375 l 733 265 "
    },
    "\xc3\x86": {
        ha: 1425,
        x_min: 0,
        x_max: 0,
        o: "m 743 394 l 743 872 l 435 394 m 743 0 l 743 272 l 357 272 l 182 0 l 7 0 l 663 985 l 1342 985 l 1342 858 l 879 858 l 879 556 l 1299 556 l 1299 428 l 879 428 l 879 126 l 1342 126 l 1342 0 "
    },
    "\xc3\x98": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 201 493 b 283 232 201 383 232 296 l 744 828 b 557 881 689 863 624 881 b 201 493 374 881 201 750 m 913 493 b 833 749 913 600 882 685 l 372 153 b 557 104 428 119 492 104 b 913 493 740 104 913 236 m 63 493 b 557 1006 63 822 310 1006 b 822 929 650 1006 743 979 l 922 1057 l 1017 985 l 915 854 b 1051 493 997 768 1051 646 b 557 -21 1051 164 804 -21 b 294 53 465 -21 374 4 l 200 -71 l 103 0 l 201 128 b 63 493 118 214 63 338 "
    },
    "\xe2\x88\x9e": {
        ha: 1113,
        x_min: 0,
        x_max: 0,
        o: "m 554 372 b 304 225 469 278 396 225 b 63 458 164 225 63 325 b 304 693 63 592 164 693 b 558 544 396 693 481 642 b 808 693 640 642 717 693 b 1050 458 949 693 1050 592 b 808 225 1050 325 949 225 b 554 372 717 225 632 274 m 307 582 b 178 457 228 582 178 528 b 307 333 178 386 228 333 b 486 454 375 333 429 385 b 307 582 426 526 378 582 m 806 333 b 935 457 885 333 935 386 b 806 582 935 528 885 582 b 626 458 735 582 688 529 b 806 333 685 388 736 333 "
    },
    "\xc2\xb1": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 336 592 l 336 781 l 450 781 l 450 592 l 697 592 l 697 485 l 450 485 l 450 299 l 336 299 l 336 485 l 90 485 l 90 592 m 697 236 l 697 126 l 90 126 l 90 236 "
    },
    "\xe2\x89\xa4": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 90 596 l 663 799 l 663 682 l 236 538 l 663 393 l 663 276 l 90 478 m 663 236 l 663 126 l 90 126 l 90 236 "
    },
    "\xe2\x89\xa5": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 663 478 l 90 276 l 90 393 l 517 538 l 90 682 l 90 799 l 663 596 m 663 236 l 663 126 l 90 126 l 90 236 "
    },
    "\xc2\xa5": {
        ha: 871,
        x_min: 0,
        x_max: 0,
        o: "m 514 242 l 514 0 l 376 0 l 376 242 l 122 242 l 122 342 l 376 342 l 376 468 l 122 468 l 122 568 l 303 568 l 39 983 l 200 983 l 444 581 l 674 983 l 832 983 l 582 568 l 765 568 l 765 468 l 514 468 l 514 342 l 765 342 l 765 242 "
    },
    "\xc2\xb5": {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 564 0 b 558 81 561 15 558 53 b 361 -21 522 11 439 -21 b 242 7 311 -21 275 -10 l 242 -264 l 111 -264 l 111 668 l 242 668 l 242 267 b 393 94 242 175 283 94 b 551 265 499 94 551 164 l 551 668 l 682 668 l 682 124 b 689 0 682 71 686 18 l 564 0 "
    },
    "\xe2\x88\x82": {
        ha: 849,
        x_min: 0,
        x_max: 0,
        o: "m 343 886 b 149 843 299 886 221 878 l 104 946 b 354 1006 181 990 278 1006 b 781 483 521 1006 781 915 b 399 -21 781 174 649 -21 b 64 307 229 -21 64 88 b 406 628 64 506 221 628 b 643 549 517 628 601 592 b 343 886 624 788 508 886 m 425 513 b 197 299 274 513 197 415 b 406 100 197 171 299 100 b 644 411 579 100 644 267 b 425 513 596 478 511 513 "
    },
    "\xe2\x88\x91": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 63 119 l 442 496 l 63 865 l 63 985 l 753 985 l 753 860 l 246 860 l 619 496 l 233 125 l 753 125 l 753 0 l 63 0 "
    },
    "\xe2\x88\x8f": {
        ha: 954,
        x_min: 0,
        x_max: 0,
        o: "m 697 0 l 697 864 l 261 864 l 261 0 l 125 0 l 125 985 l 829 985 l 829 0 "
    },
    "\xcf\x80": {
        ha: 854,
        x_min: 0,
        x_max: 0,
        o: "m 785 7 b 700 -10 768 0 742 -10 b 536 156 586 -10 536 71 l 536 554 l 307 554 l 307 0 l 176 0 l 176 554 l 63 554 l 63 668 l 782 668 l 782 554 l 667 554 l 667 169 b 742 101 667 119 700 101 b 785 107 756 101 771 103 l 785 7 "
    },
    "\xe2\x88\xab": {
        ha: 431,
        x_min: 0,
        x_max: 0,
        o: "m 151 765 b 372 985 151 901 235 985 l 424 985 l 424 865 l 382 865 b 282 756 321 865 282 829 l 282 -57 b 67 -278 282 -193 203 -278 l 7 -278 l 7 -158 l 50 -158 b 151 -46 108 -158 151 -119 "
    },
    "\xc2\xaa": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 268 582 b 393 711 336 582 393 614 l 393 732 l 261 711 b 196 646 225 706 196 686 b 268 582 196 613 222 582 m 92 640 b 235 783 92 724 156 772 l 357 800 b 393 835 385 804 393 818 b 299 913 393 876 365 913 b 197 822 238 913 203 874 l 101 844 b 297 999 110 929 186 999 b 496 824 442 999 496 917 l 496 589 b 501 513 496 558 500 518 l 403 513 b 397 574 400 524 397 544 b 251 499 376 539 329 499 b 92 640 153 499 92 565 "
    },
    "\xc2\xba": {
        ha: 672,
        x_min: 0,
        x_max: 0,
        o: "m 336 999 b 579 749 476 999 579 893 b 336 499 579 604 476 499 b 93 749 194 499 93 604 b 336 999 93 893 194 999 m 336 592 b 474 749 408 592 474 646 b 336 904 474 851 408 904 b 197 749 263 904 197 851 b 336 592 197 646 263 592 "
    },
    "\xe2\x84\xa6": {
        ha: 1106,
        x_min: 0,
        x_max: 0,
        o: "m 553 883 b 201 539 382 883 201 764 b 493 183 201 338 356 213 l 493 0 l 69 0 l 69 122 l 350 122 b 63 538 208 174 63 324 b 553 1006 63 832 297 1006 b 1043 538 808 1006 1043 832 b 754 122 1043 324 897 174 l 1036 122 l 1036 0 l 613 0 l 613 183 b 904 539 750 213 904 338 b 553 883 904 764 724 883 "
    },
    "\xc3\xa6": {
        ha: 1214,
        x_min: 0,
        x_max: 0,
        o: "m 1154 190 b 854 -21 1117 72 1001 -21 b 576 124 742 -21 639 29 b 308 -21 538 53 460 -21 b 69 179 156 -21 69 74 b 272 382 69 299 157 365 l 465 408 b 518 458 510 415 518 439 b 365 579 518 522 467 579 b 206 449 271 579 214 519 l 83 472 b 365 689 96 607 238 689 b 603 578 479 689 560 644 b 838 689 663 647 747 689 b 1158 339 1043 689 1158 547 b 1156 297 1158 326 1157 304 l 653 297 b 854 94 656 179 743 94 b 1040 229 963 94 1015 154 m 1022 403 b 839 574 1019 499 956 574 b 657 403 729 574 663 489 m 318 89 b 518 285 411 89 518 139 l 518 317 l 300 286 b 203 183 242 278 203 244 b 318 89 203 135 244 89 "
    },
    "\xc3\xb8": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 189 335 b 224 194 189 274 203 232 l 496 547 b 397 572 465 564 432 572 b 189 335 286 572 189 489 m 397 96 b 606 335 508 96 606 179 b 572 472 606 389 593 436 l 300 119 b 397 96 329 103 363 96 m 397 689 b 571 644 463 689 521 672 l 640 735 l 724 668 l 653 576 b 739 335 707 514 739 431 b 397 -21 739 131 597 -21 b 225 22 332 -21 274 -4 l 157 -65 l 74 1 l 142 90 b 56 335 88 153 56 238 b 397 689 56 538 197 689 "
    },
    "\xc2\xbf": {
        ha: 708,
        x_min: 0,
        x_max: 0,
        o: "m 444 599 b 354 507 444 549 404 507 b 263 599 304 507 263 549 b 354 689 263 649 304 689 b 444 599 404 689 444 649 m 415 401 b 417 353 417 385 417 371 b 301 136 417 261 383 192 l 240 94 b 167 -42 193 63 167 13 b 332 -200 167 -124 221 -200 b 506 -22 453 -200 506 -110 b 496 46 506 1 501 31 l 631 29 b 639 -37 636 10 639 -12 b 332 -322 639 -165 546 -322 b 28 -43 138 -322 28 -185 b 169 199 28 68 89 144 l 233 242 b 294 375 276 271 294 321 b 293 401 294 383 294 392 "
    },
    "\xc2\xa1": {
        ha: 385,
        x_min: 0,
        x_max: 0,
        o: "m 101 597 b 192 689 101 647 142 689 b 283 597 242 689 283 647 b 192 507 283 547 242 507 b 101 597 142 507 101 547 m 274 -301 l 110 -301 l 146 400 l 239 400 "
    },
    "\xc2\xac": {
        ha: 796,
        x_min: 0,
        x_max: 0,
        o: "m 589 263 l 589 533 l 63 533 l 63 647 l 706 647 l 706 263 "
    },
    "\xe2\x88\x9a": {
        ha: 924,
        x_min: 0,
        x_max: 0,
        o: "m 807 1083 l 438 0 l 311 0 l 49 735 l 199 735 l 375 215 l 701 1206 l 972 1206 l 972 1083 "
    },
    "\xc6\x92": {
        ha: 668,
        x_min: 0,
        x_max: 0,
        o: "m 274 553 l 121 553 l 121 668 l 297 668 l 329 825 b 558 1026 357 967 457 1026 b 661 1013 611 1026 635 1021 l 661 897 b 588 907 642 903 617 907 b 454 779 539 907 478 894 l 432 668 l 611 668 l 611 553 l 408 553 l 294 -18 b 65 -219 267 -160 167 -219 b -42 -206 8 -219 -15 -214 l -42 -90 b 36 -100 -22 -96 3 -100 b 169 28 85 -100 147 -86 "
    },
    "\xe2\x89\x88": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 742 589 b 539 474 690 515 619 474 b 400 515 493 474 449 488 l 335 551 b 249 575 306 567 276 575 b 122 513 203 575 158 554 l 49 578 b 247 696 101 654 169 696 b 390 653 294 696 339 681 l 454 618 b 551 590 486 600 519 590 b 671 651 596 590 636 610 m 742 319 b 539 204 690 246 619 204 b 400 246 493 204 449 218 l 335 282 b 249 306 306 297 276 306 b 122 243 203 306 158 285 l 49 308 b 247 426 101 385 169 426 b 390 383 294 426 339 411 l 454 349 b 551 321 486 331 519 321 b 671 382 596 321 636 340 "
    },
    "\xe2\x88\x86": {
        ha: 919,
        x_min: 0,
        x_max: 0,
        o: "m 386 985 l 532 985 l 919 0 l 0 0 m 193 125 l 725 125 l 457 829 "
    },
    "\xc2\xab": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 497 138 l 313 403 l 497 668 l 626 668 l 444 403 l 626 138 m 226 138 l 42 403 l 226 668 l 356 668 l 174 403 l 356 138 "
    },
    "\xc2\xbb": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 28 138 l 210 403 l 28 668 l 157 668 l 342 403 l 157 138 m 299 138 l 481 403 l 299 668 l 428 668 l 613 403 l 428 138 "
    },
    "\xe2\x80\xa6": {
        ha: 1294,
        x_min: 0,
        x_max: 0,
        o: "m 304 82 b 215 -7 304 32 265 -7 b 125 82 165 -7 125 32 b 215 172 125 132 165 172 b 304 82 265 172 304 132 m 736 82 b 647 -7 736 32 697 -7 b 557 82 597 -7 557 32 b 647 172 557 132 597 172 b 736 82 697 172 736 132 m 1169 82 b 1081 -7 1169 32 1131 -7 b 990 82 1031 -7 990 32 b 1081 172 990 132 1031 172 b 1169 82 1131 172 1169 132 "
    },
    "\xc3\x80": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 226 1219 l 406 1219 l 547 1054 l 418 1054 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc3\x83": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 703 1201 b 569 1047 703 1099 646 1047 b 471 1079 529 1047 499 1060 l 450 1093 b 399 1113 432 1104 417 1113 b 350 1051 369 1113 350 1094 l 256 1051 l 256 1074 b 390 1228 256 1176 314 1228 b 492 1196 429 1228 464 1213 l 513 1183 b 565 1164 532 1172 547 1164 b 610 1213 589 1164 610 1176 l 610 1224 l 703 1224 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc3\x95": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 786 1203 b 653 1049 786 1100 729 1049 b 554 1081 613 1049 582 1061 l 533 1094 b 482 1114 515 1106 500 1114 b 433 1053 453 1114 433 1096 l 339 1053 l 339 1075 b 474 1229 339 1178 397 1229 b 575 1197 513 1229 547 1214 l 596 1185 b 649 1165 615 1174 631 1165 b 693 1214 672 1165 693 1178 l 693 1225 l 786 1225 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc5\x92": {
        ha: 1594,
        x_min: 0,
        x_max: 0,
        o: "m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 m 913 0 l 913 129 b 557 -21 818 29 688 -21 b 63 493 310 -21 63 164 b 557 1006 63 822 310 1006 b 913 856 688 1006 818 956 l 913 985 l 1511 985 l 1511 858 l 1049 858 l 1049 556 l 1468 556 l 1468 428 l 1049 428 l 1049 126 l 1511 126 l 1511 0 "
    },
    "\xc5\x93": {
        ha: 1301,
        x_min: 0,
        x_max: 0,
        o: "m 1242 190 b 942 -21 1204 72 1097 -21 b 671 114 833 -21 733 26 b 397 -21 611 31 514 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 b 671 553 514 689 611 636 b 925 689 731 638 825 689 b 1246 339 1131 689 1246 547 b 1243 297 1246 325 1244 306 l 740 297 b 942 94 743 179 831 94 b 1129 229 1050 94 1104 154 m 1110 403 b 926 574 1107 499 1043 574 b 744 403 817 574 750 489 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xe2\x80\x93": {
        ha: 892,
        x_min: 0,
        x_max: 0,
        o: "m 90 342 l 90 456 l 801 456 l 801 342 "
    },
    "\xe2\x80\x94": {
        ha: 1532,
        x_min: 0,
        x_max: 0,
        o: "m 104 342 l 104 456 l 1428 456 l 1428 342 "
    },
    "\xe2\x80\x9c": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 247 722 b 157 639 247 676 208 639 b 56 757 103 639 56 678 b 240 1000 56 921 163 992 l 240 935 b 136 800 179 921 138 857 b 164 807 140 803 150 807 b 247 722 210 807 247 775 m 485 722 b 394 639 485 676 446 639 b 293 757 340 639 293 678 b 478 1000 293 921 400 992 l 478 935 b 374 800 417 921 375 857 b 401 807 378 803 388 807 b 485 722 447 807 485 775 "
    },
    "\xe2\x80\x9d": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 293 910 b 383 993 293 956 332 993 b 485 875 438 993 485 954 b 300 632 485 711 378 643 l 300 697 b 404 832 361 711 403 772 b 376 825 400 829 390 825 b 293 910 331 825 293 857 m 56 910 b 146 993 56 956 94 993 b 247 875 200 993 247 954 b 63 632 247 711 140 643 l 63 697 b 167 832 124 711 165 772 b 139 825 163 829 153 825 b 56 910 93 825 56 857 "
    },
    "\xe2\x80\x98": {
        ha: 303,
        x_min: 0,
        x_max: 0,
        o: "m 247 715 b 157 632 247 669 208 632 b 56 750 103 632 56 671 b 240 993 56 914 163 985 l 240 928 b 136 793 179 914 138 850 b 164 800 140 796 150 800 b 247 715 210 800 247 768 "
    },
    "\xe2\x80\x99": {
        ha: 311,
        x_min: 0,
        x_max: 0,
        o: "m 56 911 b 150 997 56 957 96 997 b 256 875 206 997 256 956 b 64 622 256 703 144 632 l 64 689 b 171 829 126 703 169 767 b 143 822 167 826 157 822 b 56 911 94 822 56 856 "
    },
    "\xc3\xb7": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 303 701 b 393 790 303 750 344 790 b 482 701 442 790 482 750 b 393 611 482 653 442 611 b 303 701 344 611 303 653 m 76 513 l 711 513 l 711 397 l 76 397 m 303 208 b 393 297 303 257 344 297 b 482 208 442 297 482 257 b 393 118 482 160 442 118 b 303 208 344 118 303 160 "
    },
    "\xe2\x97\x8a": {
        ha: 772,
        x_min: 0,
        x_max: 0,
        o: "m 329 985 l 443 985 l 724 492 l 443 0 l 329 0 l 49 492 m 386 156 l 581 492 l 386 829 l 190 492 "
    },
    "\xc3\xbf": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 413 863 b 493 943 413 907 447 943 b 574 863 538 943 574 907 b 493 782 574 817 538 782 b 413 863 447 782 413 817 m 153 863 b 232 943 153 907 188 943 b 314 863 278 943 314 907 b 232 782 314 817 278 782 b 153 863 188 782 153 817 m 135 -279 l 301 74 l 14 668 l 164 668 l 372 207 l 572 668 l 713 668 l 278 -279 "
    },
    "\xc5\xb8": {
        ha: 858,
        x_min: 0,
        x_max: 0,
        o: "m 508 1138 b 590 1219 508 1183 544 1219 b 672 1138 636 1219 672 1183 b 590 1056 672 1092 636 1056 b 508 1138 544 1056 508 1092 m 188 1138 b 269 1219 188 1183 224 1219 b 351 1138 315 1219 351 1183 b 269 1056 351 1092 315 1056 b 188 1138 224 1056 188 1092 m 14 985 l 178 985 l 433 546 l 689 985 l 844 985 l 497 421 l 497 0 l 361 0 l 361 421 "
    },
    "\xe2\x81\x84": {
        ha: 832,
        x_min: 0,
        x_max: 0,
        o: "m 0 0 l 707 985 l 832 985 l 128 0 "
    },
    "\xc2\xa4": {
        ha: 879,
        x_min: 0,
        x_max: 0,
        o: "m 125 444 b 185 631 125 514 149 578 l 69 747 l 153 832 l 267 713 b 447 768 319 747 382 768 b 618 719 508 768 567 750 l 726 832 l 810 747 l 704 638 b 769 444 743 583 769 517 b 706 251 769 371 746 303 l 810 144 l 728 63 l 622 171 b 447 118 572 138 510 118 b 263 179 379 118 315 142 l 151 63 l 69 144 l 181 261 b 125 444 146 314 125 376 m 243 444 b 447 236 243 319 333 236 b 647 444 558 236 647 319 b 447 650 647 564 558 650 b 243 444 333 650 243 564 "
    },
    "\xe2\x80\xb9": {
        ha: 383,
        x_min: 0,
        x_max: 0,
        o: "m 226 138 l 42 403 l 226 668 l 356 668 l 174 403 l 356 138 "
    },
    "\xe2\x80\xba": {
        ha: 383,
        x_min: 0,
        x_max: 0,
        o: "m 28 138 l 210 403 l 28 668 l 157 668 l 342 403 l 157 138 "
    },
    "\xef\xac\x81": {
        ha: 839,
        x_min: 0,
        x_max: 0,
        o: "m 569 924 b 663 1018 569 976 611 1018 b 757 924 715 1018 757 976 b 663 831 757 872 715 831 b 569 924 611 831 569 872 m 371 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 b 286 775 346 888 286 867 l 286 668 l 728 668 l 728 0 l 599 0 l 599 550 l 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 l 151 781 b 371 1010 151 929 250 1010 "
    },
    "\xef\xac\x82": {
        ha: 836,
        x_min: 0,
        x_max: 0,
        o: "m 392 888 b 286 774 346 888 286 865 l 286 668 l 594 668 l 594 1006 l 725 1006 l 725 0 l 594 0 l 594 550 l 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 l 151 781 b 371 1010 151 929 250 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 "
    },
    "\xe2\x80\xa1": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 239 319 l 239 665 l 63 665 l 63 778 l 239 778 l 239 985 l 353 985 l 353 778 l 529 778 l 529 665 l 353 665 l 353 319 l 529 319 l 529 207 l 353 207 l 353 0 l 239 0 l 239 207 l 63 207 l 63 319 "
    },
    "\xc2\xb7": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 97 394 b 193 492 97 449 139 492 b 290 394 247 492 290 449 b 193 299 290 340 247 299 b 97 394 139 299 97 340 "
    },
    "\xe2\x80\x9a": {
        ha: 311,
        x_min: 0,
        x_max: 0,
        o: "m 56 85 b 150 171 56 131 96 171 b 256 49 206 171 256 129 b 64 -204 256 -124 144 -194 l 64 -137 b 171 3 126 -124 169 -60 b 143 -4 167 0 157 -4 b 56 85 94 -4 56 29 "
    },
    "\xe2\x80\x9e": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 293 81 b 383 164 293 126 332 164 b 485 46 438 164 485 125 b 300 -197 485 -118 378 -186 l 300 -132 b 404 3 361 -118 403 -57 b 376 -4 400 0 390 -4 b 293 81 331 -4 293 28 m 56 81 b 146 164 56 126 94 164 b 247 46 200 164 247 125 b 63 -197 247 -118 140 -186 l 63 -132 b 167 3 124 -118 165 -57 b 139 -4 163 0 153 -4 b 56 81 93 -4 56 28 "
    },
    "\xe2\x80\xb0": {
        ha: 1582,
        x_min: 0,
        x_max: 0,
        o: "m 86 761 b 326 996 86 893 199 996 b 569 761 456 996 569 893 b 326 524 569 628 456 524 b 86 761 199 524 86 626 m 201 0 l 910 985 l 1038 985 l 333 0 m 207 761 b 326 639 207 690 260 639 b 447 761 394 639 447 690 b 326 882 447 831 394 882 b 207 761 260 882 207 831 m 675 228 b 914 463 675 358 785 463 b 1093 371 988 463 1053 428 b 1272 463 1133 428 1197 463 b 1514 228 1401 463 1514 358 b 1272 -11 1514 93 1401 -11 b 1093 79 1197 -11 1133 24 b 914 -11 1053 24 988 -11 b 675 228 785 -11 675 92 m 794 228 b 914 104 794 156 847 104 b 1033 228 982 104 1033 154 b 914 349 1033 297 982 349 b 794 228 847 349 794 297 m 1153 228 b 1272 104 1153 156 1206 104 b 1392 228 1340 104 1392 154 b 1272 349 1392 297 1340 349 b 1153 228 1206 349 1153 297 "
    },
    "\xc3\x82": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 239 1054 l 394 1219 l 561 1219 l 724 1054 l 596 1054 l 478 1143 l 365 1054 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc3\x8a": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 182 1054 l 338 1219 l 504 1219 l 667 1054 l 539 1054 l 421 1143 l 308 1054 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc3\x81": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 547 1054 l 417 1054 l 557 1219 l 738 1219 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc3\x8b": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 506 1138 b 588 1219 506 1183 542 1219 b 669 1138 633 1219 669 1183 b 588 1056 669 1092 633 1056 b 506 1138 542 1056 506 1092 m 185 1138 b 267 1219 185 1183 221 1219 b 349 1138 313 1219 349 1183 b 267 1056 349 1092 313 1056 b 185 1138 221 1056 185 1092 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc3\x88": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 207 1219 l 386 1219 l 528 1054 l 399 1054 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc3\x8d": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 261 1054 l 131 1054 l 271 1219 l 451 1219 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc3\x8e": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m -39 1054 l 117 1219 l 283 1219 l 446 1054 l 318 1054 l 200 1143 l 88 1054 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc3\x8f": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 228 1138 b 303 1211 228 1179 261 1211 b 376 1138 344 1211 376 1179 b 303 1063 376 1096 344 1063 b 228 1138 261 1063 228 1096 m 15 1138 b 89 1211 15 1179 47 1211 b 164 1138 131 1211 164 1179 b 89 1063 164 1096 131 1063 b 15 1138 47 1063 15 1096 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc3\x8c": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m -62 1219 l 117 1219 l 258 1054 l 129 1054 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc3\x93": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 611 1054 l 481 1054 l 621 1219 l 801 1219 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc3\x94": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 315 1054 l 471 1219 l 638 1219 l 800 1054 l 672 1054 l 554 1143 l 442 1054 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc3\x92": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 310 1219 l 489 1219 l 631 1054 l 501 1054 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc3\x9a": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 496 1054 l 365 1054 l 506 1219 l 686 1219 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc3\x9b": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 224 1054 l 379 1219 l 546 1219 l 708 1054 l 581 1054 l 463 1143 l 350 1054 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc3\x99": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 240 1219 l 419 1219 l 561 1054 l 432 1054 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc4\xb1": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xcb\x86": {
        ha: 535,
        x_min: 0,
        x_max: 0,
        o: "m 49 757 l 193 950 l 342 950 l 486 757 l 364 757 l 267 869 l 169 757 "
    },
    "\xcb\x9c": {
        ha: 524,
        x_min: 0,
        x_max: 0,
        o: "m 481 919 b 346 768 481 817 422 768 b 254 799 310 768 281 782 l 235 811 b 183 831 217 822 201 831 b 143 771 157 831 143 817 l 43 771 l 43 792 b 179 943 43 894 103 943 b 272 913 217 943 246 929 l 292 900 b 342 881 310 889 324 881 b 382 940 369 881 382 896 l 481 940 "
    },
    "\xc2\xaf": {
        ha: 476,
        x_min: 0,
        x_max: 0,
        o: "m 49 801 l 49 914 l 428 914 l 428 801 "
    },
    "\xcb\x98": {
        ha: 503,
        x_min: 0,
        x_max: 0,
        o: "m 251 757 b 49 954 121 757 50 856 l 150 954 b 251 864 153 911 181 864 b 353 954 322 864 350 913 l 454 954 b 251 757 453 856 386 757 "
    },
    "\xcb\x99": {
        ha: 242,
        x_min: 0,
        x_max: 0,
        o: "m 35 856 b 121 942 35 903 74 942 b 207 856 168 942 207 903 b 121 769 207 808 168 769 b 35 856 74 769 35 808 "
    },
    "\xcb\x9a": {
        ha: 407,
        x_min: 0,
        x_max: 0,
        o: "m 358 890 b 203 739 358 806 288 739 b 49 890 121 739 49 806 b 203 1043 49 976 121 1043 b 358 890 288 1043 358 976 m 269 890 b 201 958 269 928 240 958 b 136 890 164 958 136 928 b 201 824 136 853 164 824 b 269 890 240 824 269 853 "
    },
    "\xc2\xb8": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 114 -86 l 181 19 l 279 19 l 225 -64 b 360 -178 303 -64 360 -108 b 197 -303 360 -243 310 -303 b 44 -239 128 -303 72 -272 l 96 -176 b 196 -224 113 -194 149 -224 b 261 -178 229 -224 261 -210 b 200 -133 261 -153 239 -133 b 160 -140 186 -133 171 -136 "
    },
    "\xcb\x9d": {
        ha: 510,
        x_min: 0,
        x_max: 0,
        o: "m 322 754 l 231 754 l 315 957 l 461 957 m 140 754 l 49 754 l 119 957 l 265 957 "
    },
    "\xcb\x9b": {
        ha: 324,
        x_min: 0,
        x_max: 0,
        o: "m 46 -160 b 188 22 46 -58 125 -6 l 275 0 b 157 -135 222 -25 157 -67 b 231 -200 157 -182 193 -200 b 275 -194 253 -200 264 -197 l 275 -289 b 206 -300 257 -296 240 -300 b 46 -160 119 -300 46 -249 "
    },
    "\xcb\x87": {
        ha: 535,
        x_min: 0,
        x_max: 0,
        o: "m 169 954 l 267 842 l 364 954 l 486 954 l 344 757 l 190 757 l 49 954 "
    },
    "\xc7\xbc": {
        ha: 1425,
        x_min: 0,
        x_max: 0,
        o: "m 832 1054 l 701 1054 l 842 1219 l 1022 1219 m 743 394 l 743 872 l 435 394 m 743 0 l 743 272 l 357 272 l 182 0 l 7 0 l 663 985 l 1342 985 l 1342 858 l 879 858 l 879 556 l 1299 556 l 1299 428 l 879 428 l 879 126 l 1342 126 l 1342 0 "
    },
    "\xc4\x82": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 482 1047 b 264 1226 342 1047 269 1138 l 376 1226 b 482 1149 379 1194 407 1149 b 586 1226 557 1149 583 1194 l 699 1226 b 482 1047 693 1138 622 1047 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc4\x80": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 276 1082 l 276 1197 l 683 1197 l 683 1082 m 313 401 l 651 401 l 481 843 m 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 l 807 0 "
    },
    "\xc4\x84": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 725 -160 b 825 0 725 -81 774 -31 l 807 0 l 700 275 l 264 275 l 160 0 l 14 0 l 406 985 l 563 985 l 954 0 b 836 -135 901 -25 836 -67 b 910 -200 836 -182 872 -200 b 954 -194 932 -200 943 -197 l 954 -289 b 885 -300 936 -296 919 -300 b 725 -160 799 -300 725 -249 m 313 401 l 651 401 l 481 843 "
    },
    "\xc7\xba": {
        ha: 968,
        x_min: 0,
        x_max: 0,
        o: "m 547 1253 l 417 1253 l 557 1418 l 738 1418 m 546 1049 b 479 1114 546 1085 517 1114 b 415 1049 443 1114 415 1085 b 479 985 415 1013 443 985 b 546 1049 517 985 546 1013 m 313 401 l 651 401 l 481 843 m 636 1049 b 582 933 636 1003 615 961 l 954 0 l 807 0 l 700 275 l 264 275 l 160 0 l 14 0 l 385 932 b 326 1049 350 960 326 1000 b 481 1201 326 1135 399 1201 b 636 1049 565 1201 636 1135 "
    },
    "\xc4\x86": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 606 1054 l 475 1054 l 615 1219 l 796 1219 m 551 -21 b 63 493 297 -21 63 164 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 719 104 825 206 l 986 296 b 551 -21 933 111 778 -21 "
    },
    "\xc4\x8c": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 435 1219 l 547 1131 l 665 1219 l 793 1219 l 631 1054 l 464 1054 l 308 1219 m 551 -21 b 63 493 297 -21 63 164 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 719 104 825 206 l 986 296 b 551 -21 933 111 778 -21 "
    },
    "\xc4\x88": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 315 1054 l 471 1219 l 638 1219 l 800 1054 l 672 1054 l 554 1143 l 442 1054 m 551 -21 b 63 493 297 -21 63 164 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 719 104 825 206 l 986 296 b 551 -21 933 111 778 -21 "
    },
    "\xc4\x8a": {
        ha: 1042,
        x_min: 0,
        x_max: 0,
        o: "m 463 1136 b 550 1225 463 1185 503 1225 b 639 1136 599 1225 639 1185 b 550 1049 639 1089 599 1049 b 463 1136 503 1049 463 1089 m 551 -21 b 63 493 297 -21 63 164 b 551 1006 63 822 307 1006 b 985 693 776 1006 935 883 l 858 649 b 551 881 821 797 713 881 b 201 493 372 881 201 750 b 551 104 201 236 372 104 b 865 340 719 104 825 206 l 986 296 b 551 -21 933 111 778 -21 "
    },
    "\xc4\x94": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 426 1047 b 208 1226 286 1047 214 1138 l 321 1226 b 426 1149 324 1194 351 1149 b 531 1226 501 1149 528 1194 l 643 1226 b 426 1047 638 1138 567 1047 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc4\x9a": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 319 1219 l 432 1131 l 550 1219 l 678 1219 l 515 1054 l 349 1054 l 193 1219 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc4\x96": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 338 1136 b 425 1225 338 1185 378 1225 b 514 1136 474 1225 514 1185 b 425 1049 514 1089 474 1049 b 338 1136 378 1049 338 1089 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc4\x92": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 217 1082 l 217 1197 l 624 1197 l 624 1082 m 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 "
    },
    "\xc4\x98": {
        ha: 807,
        x_min: 0,
        x_max: 0,
        o: "m 494 -160 b 594 0 494 -81 543 -31 l 125 0 l 125 985 l 724 985 l 724 858 l 261 858 l 261 556 l 681 556 l 681 428 l 261 428 l 261 126 l 724 126 l 724 0 b 606 -135 671 -25 606 -67 b 679 -200 606 -182 642 -200 b 724 -194 701 -200 713 -197 l 724 -289 b 654 -300 706 -296 689 -300 b 494 -160 568 -300 494 -249 "
    },
    "\xc4\x8e": {
        ha: 1e3,
        x_min: 0,
        x_max: 0,
        o: "m 376 1219 l 489 1131 l 607 1219 l 735 1219 l 572 1054 l 406 1054 l 250 1219 m 125 0 l 125 985 l 469 985 b 938 490 719 985 938 814 b 467 0 938 168 717 0 m 463 121 b 797 490 644 121 797 243 b 465 864 797 739 647 864 l 261 864 l 261 121 "
    },
    "\xc4\x90": {
        ha: 1006,
        x_min: 0,
        x_max: 0,
        o: "m 131 0 l 131 451 l 25 451 l 25 565 l 131 565 l 131 985 l 475 985 b 943 490 725 985 943 814 b 472 0 943 168 722 0 m 468 121 b 803 490 650 121 803 243 b 471 864 803 739 653 864 l 267 864 l 267 565 l 436 565 l 436 451 l 267 451 l 267 121 "
    },
    "\xc4\x9e": {
        ha: 1063,
        x_min: 0,
        x_max: 0,
        o: "m 542 1047 b 324 1226 401 1047 329 1138 l 436 1226 b 542 1149 439 1194 467 1149 b 646 1226 617 1149 643 1194 l 758 1226 b 542 1047 753 1138 682 1047 m 868 0 l 856 139 b 540 -21 813 61 706 -21 b 63 493 293 -21 63 160 b 550 1006 63 826 307 1006 b 986 708 764 1006 929 886 l 863 656 b 550 881 818 797 703 881 b 201 493 374 881 201 754 b 544 103 201 232 368 103 b 849 360 764 103 843 258 l 507 360 l 507 482 l 978 482 l 978 0 "
    },
    "\xc4\x9c": {
        ha: 1063,
        x_min: 0,
        x_max: 0,
        o: "m 308 1054 l 464 1219 l 631 1219 l 793 1054 l 665 1054 l 547 1143 l 435 1054 m 868 0 l 856 139 b 540 -21 813 61 706 -21 b 63 493 293 -21 63 160 b 550 1006 63 826 307 1006 b 986 708 764 1006 929 886 l 863 656 b 550 881 818 797 703 881 b 201 493 374 881 201 754 b 544 103 201 232 368 103 b 849 360 764 103 843 258 l 507 360 l 507 482 l 978 482 l 978 0 "
    },
    "\xc4\xa2": {
        ha: 1063,
        x_min: 0,
        x_max: 0,
        o: "m 868 0 l 856 139 b 540 -21 813 61 706 -21 b 63 493 293 -21 63 160 b 550 1006 63 826 307 1006 b 986 708 764 1006 929 886 l 863 656 b 550 881 818 797 703 881 b 201 493 374 881 201 754 b 544 103 201 232 368 103 b 849 360 764 103 843 258 l 507 360 l 507 482 l 978 482 l 978 0 m 458 -122 b 540 -50 458 -81 497 -50 b 631 -151 581 -50 631 -76 b 472 -307 631 -258 547 -307 l 472 -251 b 563 -185 519 -251 560 -218 b 533 -193 558 -187 546 -193 b 458 -122 490 -193 458 -169 "
    },
    "\xc4\xa0": {
        ha: 1063,
        x_min: 0,
        x_max: 0,
        o: "m 460 1136 b 547 1225 460 1185 500 1225 b 636 1136 596 1225 636 1185 b 547 1049 636 1089 596 1049 b 460 1136 500 1049 460 1089 m 868 0 l 856 139 b 540 -21 813 61 706 -21 b 63 493 293 -21 63 160 b 550 1006 63 826 307 1006 b 986 708 764 1006 929 886 l 863 656 b 550 881 818 797 703 881 b 201 493 374 881 201 754 b 544 103 201 232 368 103 b 849 360 764 103 843 258 l 507 360 l 507 482 l 978 482 l 978 0 "
    },
    "\xc4\xa6": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 782 564 l 782 713 l 279 713 l 279 564 m 782 0 l 782 438 l 279 438 l 279 0 l 143 0 l 143 713 l 42 713 l 42 817 l 143 817 l 143 985 l 279 985 l 279 817 l 782 817 l 782 985 l 918 985 l 918 817 l 1018 817 l 1018 713 l 918 713 l 918 0 "
    },
    "\xc4\xa4": {
        ha: 1025,
        x_min: 0,
        x_max: 0,
        o: "m 271 1054 l 426 1219 l 593 1219 l 756 1054 l 628 1054 l 510 1143 l 397 1054 m 764 0 l 764 438 l 261 438 l 261 0 l 125 0 l 125 985 l 261 985 l 261 564 l 764 564 l 764 985 l 900 985 l 900 0 "
    },
    "\xc4\xb0": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 106 1136 b 193 1225 106 1185 146 1225 b 282 1136 242 1225 282 1185 b 193 1049 282 1089 242 1049 b 106 1136 146 1049 106 1089 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc4\xac": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 196 1047 b -22 1226 56 1047 -17 1138 l 90 1226 b 196 1149 93 1194 121 1149 b 300 1226 271 1149 297 1194 l 413 1226 b 196 1047 407 1138 336 1047 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc4\xaa": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m -8 1082 l -8 1197 l 399 1197 l 399 1082 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc4\xae": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 35 -160 b 135 0 35 -81 83 -31 l 125 0 l 125 985 l 264 985 l 264 0 b 146 -135 211 -25 146 -67 b 219 -200 146 -182 182 -200 b 264 -194 242 -200 253 -197 l 264 -289 b 194 -300 246 -296 229 -300 b 35 -160 108 -300 35 -249 "
    },
    "\xc4\xa8": {
        ha: 389,
        x_min: 0,
        x_max: 0,
        o: "m 421 1201 b 288 1047 421 1099 364 1047 b 189 1079 247 1047 217 1060 l 168 1093 b 117 1113 150 1104 135 1113 b 68 1051 88 1113 68 1094 l -26 1051 l -26 1074 b 108 1228 -26 1176 32 1228 b 210 1196 147 1228 182 1213 l 231 1183 b 283 1164 250 1172 265 1164 b 328 1213 307 1164 328 1176 l 328 1224 l 421 1224 m 125 0 l 125 985 l 264 985 l 264 0 "
    },
    "\xc4\xb2": {
        ha: 825,
        x_min: 0,
        x_max: 0,
        o: "m 111 417 l 111 985 l 250 985 l 250 417 m 250 319 l 250 294 b 417 106 250 164 318 106 b 578 285 517 106 578 171 l 578 985 l 714 985 l 714 294 b 418 -21 714 122 601 -21 b 111 293 225 -21 111 104 "
    },
    "\xc4\xb4": {
        ha: 742,
        x_min: 0,
        x_max: 0,
        o: "m 322 1054 l 478 1219 l 644 1219 l 807 1054 l 679 1054 l 561 1143 l 449 1054 m 28 357 l 164 388 l 164 294 b 333 106 164 164 235 106 b 494 285 433 106 494 171 l 494 985 l 631 985 l 631 294 b 335 -21 631 122 518 -21 b 28 293 142 -21 28 104 "
    },
    "\xc4\xb6": {
        ha: 928,
        x_min: 0,
        x_max: 0,
        o: "m 401 447 l 261 297 l 261 0 l 125 0 l 125 985 l 261 985 l 261 478 l 722 985 l 901 985 l 492 546 l 907 0 l 735 0 m 410 -122 b 492 -50 410 -81 449 -50 b 582 -151 532 -50 582 -76 b 424 -307 582 -258 499 -307 l 424 -251 b 514 -185 471 -251 511 -218 b 485 -193 510 -187 497 -193 b 410 -122 442 -193 410 -169 "
    },
    "\xc4\xb9": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 261 1054 l 131 1054 l 271 1219 l 451 1219 m 125 0 l 125 985 l 261 985 l 261 128 l 726 128 l 726 0 "
    },
    "\xc4\xbd": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 501 790 l 400 790 l 442 1054 l 596 1054 m 125 0 l 125 985 l 261 985 l 261 128 l 726 128 l 726 0 "
    },
    "\xc4\xbb": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 261 985 l 261 128 l 726 128 l 726 0 m 356 -122 b 438 -50 356 -81 394 -50 b 528 -151 478 -50 528 -76 b 369 -307 528 -258 444 -307 l 369 -251 b 460 -185 417 -251 457 -218 b 431 -193 456 -187 443 -193 b 356 -122 388 -193 356 -169 "
    },
    "\xc4\xbf": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 125 0 l 125 985 l 261 985 l 261 128 l 726 128 l 726 0 m 403 517 b 490 606 403 565 443 606 b 579 517 539 606 579 565 b 490 429 579 469 539 429 b 403 517 443 429 403 469 "
    },
    "\xc5\x83": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 556 1054 l 425 1054 l 565 1219 l 746 1219 m 793 0 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 0 "
    },
    "\xc5\x87": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 418 1219 l 531 1131 l 649 1219 l 776 1219 l 614 1054 l 447 1054 l 292 1219 m 793 0 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 0 "
    },
    "\xc5\x85": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 793 0 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 0 m 463 -122 b 544 -50 463 -81 501 -50 b 635 -151 585 -50 635 -76 b 476 -307 635 -258 551 -307 l 476 -251 b 567 -185 524 -251 564 -218 b 538 -193 563 -187 550 -193 b 463 -122 494 -193 463 -169 "
    },
    "\xc5\x8a": {
        ha: 1060,
        x_min: 0,
        x_max: 0,
        o: "m 713 -156 b 799 -62 781 -156 799 -124 l 799 -8 l 261 803 l 261 0 l 125 0 l 125 985 l 307 985 l 799 229 l 799 985 l 935 985 l 935 -65 b 749 -272 935 -186 864 -272 b 671 -262 699 -272 676 -265 l 671 -153 b 713 -156 679 -154 697 -156 "
    },
    "\xc5\x8e": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 568 1047 b 350 1226 428 1047 356 1138 l 463 1226 b 568 1149 465 1194 493 1149 b 672 1226 643 1149 669 1194 l 785 1226 b 568 1047 779 1138 708 1047 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc5\x90": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 689 1054 l 592 1054 l 690 1219 l 836 1219 m 493 1054 l 396 1054 l 481 1219 l 626 1219 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc5\x8c": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 354 1082 l 354 1197 l 761 1197 l 761 1082 m 63 493 b 557 1006 63 822 310 1006 b 1051 493 804 1006 1051 822 b 557 -21 1051 164 804 -21 b 63 493 310 -21 63 164 m 201 493 b 557 104 201 236 374 104 b 913 493 740 104 913 236 b 557 881 913 750 740 881 b 201 493 374 881 201 750 "
    },
    "\xc7\xbe": {
        ha: 1114,
        x_min: 0,
        x_max: 0,
        o: "m 618 1054 l 488 1054 l 628 1219 l 808 1219 m 201 493 b 283 232 201 383 232 296 l 744 828 b 557 881 689 863 624 881 b 201 493 374 881 201 750 m 913 493 b 833 749 913 600 882 685 l 372 153 b 557 104 428 119 492 104 b 913 493 740 104 913 236 m 63 493 b 557 1006 63 822 310 1006 b 822 929 650 1006 743 979 l 922 1057 l 1017 985 l 915 854 b 1051 493 997 768 1051 646 b 557 -21 1051 164 804 -21 b 294 53 465 -21 374 4 l 200 -71 l 103 0 l 201 128 b 63 493 118 214 63 338 "
    },
    "\xc5\x94": {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 465 1054 l 335 1054 l 475 1219 l 656 1219 m 471 525 b 657 692 582 525 657 590 b 471 863 657 796 582 863 l 263 863 l 263 525 m 410 403 l 263 403 l 263 0 l 125 0 l 125 985 l 496 985 b 797 692 682 985 797 854 b 558 413 797 550 707 440 l 793 0 l 635 0 "
    },
    "\xc5\x98": {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 310 1219 l 422 1131 l 540 1219 l 668 1219 l 506 1054 l 339 1054 l 183 1219 m 471 525 b 657 692 582 525 657 590 b 471 863 657 796 582 863 l 263 863 l 263 525 m 410 403 l 263 403 l 263 0 l 125 0 l 125 985 l 496 985 b 797 692 682 985 797 854 b 558 413 797 550 707 440 l 793 0 l 635 0 "
    },
    "\xc5\x96": {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 471 525 b 657 692 582 525 657 590 b 471 863 657 796 582 863 l 263 863 l 263 525 m 410 403 l 263 403 l 263 0 l 125 0 l 125 985 l 496 985 b 797 692 682 985 797 854 b 558 413 797 550 707 440 l 793 0 l 635 0 m 378 -122 b 460 -50 378 -81 417 -50 b 550 -151 500 -50 550 -76 b 392 -307 550 -258 467 -307 l 392 -251 b 482 -185 439 -251 479 -218 b 453 -193 478 -187 465 -193 b 378 -122 410 -193 378 -169 "
    },
    "\xc5\x9a": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 474 1054 l 343 1054 l 483 1219 l 664 1219 m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 814 b 358 579 232 651 275 597 l 506 547 b 761 271 669 511 761 408 b 421 -21 761 118 631 -21 b 53 272 183 -21 71 132 l 183 314 b 419 103 193 204 271 103 b 622 260 556 103 622 174 b 475 413 622 331 574 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 "
    },
    "\xc5\x9e": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 811 b 358 579 232 653 276 597 l 506 547 b 761 271 669 511 761 408 b 481 -17 761 131 654 6 l 450 -64 b 585 -178 528 -64 585 -108 b 422 -300 585 -243 535 -300 b 269 -239 353 -300 297 -272 l 321 -176 b 421 -224 338 -194 374 -224 b 486 -178 454 -224 486 -210 b 425 -133 486 -153 464 -133 b 385 -140 411 -133 396 -136 l 339 -86 l 382 -19 b 53 275 172 -4 69 139 l 183 317 b 419 103 193 207 274 103 b 622 260 556 103 622 174 b 475 413 622 331 571 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 "
    },
    "\xc5\x9c": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 200 1054 l 356 1219 l 522 1219 l 685 1054 l 557 1054 l 439 1143 l 326 1054 m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 814 b 358 579 232 651 275 597 l 506 547 b 761 271 669 511 761 408 b 421 -21 761 118 631 -21 b 53 272 183 -21 71 132 l 183 314 b 419 103 193 204 271 103 b 622 260 556 103 622 174 b 475 413 622 331 574 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 "
    },
    "\xc8\x98": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 631 718 b 422 886 619 789 560 886 b 232 722 311 886 232 814 b 358 579 232 651 275 597 l 506 547 b 761 271 669 511 761 408 b 421 -21 761 118 631 -21 b 53 272 183 -21 71 132 l 183 314 b 419 103 193 204 271 103 b 622 260 556 103 622 174 b 475 413 622 331 574 392 l 335 443 b 94 713 194 474 94 565 b 419 1006 94 867 238 1006 b 753 761 642 1006 731 868 m 344 -122 b 426 -50 344 -81 383 -50 b 517 -151 467 -50 517 -76 b 358 -307 517 -258 433 -307 l 358 -251 b 449 -185 406 -251 446 -218 b 419 -193 444 -187 432 -193 b 344 -122 376 -193 344 -169 "
    },
    "\xc5\xa4": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 296 1219 l 408 1131 l 526 1219 l 654 1219 l 492 1054 l 325 1054 l 169 1219 m 479 858 l 479 0 l 343 0 l 343 858 l 14 858 l 14 985 l 808 985 l 808 858 "
    },
    "\xc5\xa2": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 308 -86 l 363 0 l 343 0 l 343 858 l 14 858 l 14 985 l 808 985 l 808 858 l 479 858 l 479 0 l 461 0 l 419 -64 b 554 -178 497 -64 554 -108 b 392 -303 554 -243 504 -303 b 239 -239 322 -303 267 -272 l 290 -176 b 390 -224 307 -194 343 -224 b 456 -178 424 -224 456 -210 b 394 -133 456 -153 433 -133 b 354 -140 381 -133 365 -136 "
    },
    "\xc5\xa6": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 479 858 l 479 517 l 632 517 l 632 404 l 479 404 l 479 0 l 343 0 l 343 404 l 193 404 l 193 517 l 343 517 l 343 858 l 14 858 l 14 985 l 808 985 l 808 858 "
    },
    "\xc5\xac": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 467 1047 b 249 1226 326 1047 254 1138 l 361 1226 b 467 1149 364 1194 392 1149 b 571 1226 542 1149 568 1194 l 683 1226 b 467 1047 678 1138 607 1047 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc5\xb0": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 592 1054 l 494 1054 l 593 1219 l 739 1219 m 396 1054 l 299 1054 l 383 1219 l 529 1219 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc5\xaa": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 263 1082 l 263 1197 l 669 1197 l 669 1082 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc5\xb2": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 369 -160 b 440 -19 369 -96 401 -51 b 111 336 254 -11 111 114 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 599 0 819 158 729 44 b 481 -135 546 -25 481 -67 b 554 -200 481 -182 517 -200 b 599 -194 576 -200 588 -197 l 599 -289 b 529 -300 581 -296 564 -300 b 369 -160 443 -300 369 -249 "
    },
    "\xc5\xae": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 621 1178 b 465 1026 621 1093 550 1026 b 311 1178 383 1026 311 1093 b 465 1331 311 1264 383 1331 b 621 1178 550 1331 621 1264 m 531 1178 b 464 1243 531 1214 501 1243 b 400 1178 428 1243 400 1214 b 464 1114 400 1142 428 1114 b 531 1178 501 1114 531 1142 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xc5\xa8": {
        ha: 931,
        x_min: 0,
        x_max: 0,
        o: "m 688 1201 b 554 1047 688 1099 631 1047 b 456 1079 514 1047 483 1060 l 435 1093 b 383 1113 417 1104 401 1113 b 335 1051 354 1113 335 1094 l 240 1051 l 240 1074 b 375 1228 240 1176 299 1228 b 476 1196 414 1228 449 1213 l 497 1183 b 550 1164 517 1172 532 1164 b 594 1213 574 1164 594 1176 l 594 1224 l 688 1224 m 465 -21 b 111 336 265 -21 111 104 l 111 985 l 246 985 l 246 340 b 465 106 246 190 328 106 b 683 340 604 106 683 190 l 683 985 l 819 985 l 819 336 b 465 -21 819 104 665 -21 "
    },
    "\xe1\xba\x82": {
        ha: 1394,
        x_min: 0,
        x_max: 0,
        o: "m 763 1054 l 632 1054 l 772 1219 l 953 1219 m 1233 985 l 1374 985 l 1093 0 l 953 0 l 696 799 l 442 0 l 306 0 l 21 985 l 161 985 l 378 214 l 625 985 l 768 985 l 1021 206 "
    },
    "\xc5\xb4": {
        ha: 1394,
        x_min: 0,
        x_max: 0,
        o: "m 456 1054 l 611 1219 l 778 1219 l 940 1054 l 813 1054 l 694 1143 l 582 1054 m 1233 985 l 1374 985 l 1093 0 l 953 0 l 696 799 l 442 0 l 306 0 l 21 985 l 161 985 l 378 214 l 625 985 l 768 985 l 1021 206 "
    },
    "\xe1\xba\x84": {
        ha: 1394,
        x_min: 0,
        x_max: 0,
        o: "m 818 1138 b 900 1219 818 1183 854 1219 b 982 1138 946 1219 982 1183 b 900 1056 982 1092 946 1056 b 818 1138 854 1056 818 1092 m 414 1138 b 496 1219 414 1183 450 1219 b 578 1138 542 1219 578 1183 b 496 1056 578 1092 542 1056 b 414 1138 450 1056 414 1092 m 1233 985 l 1374 985 l 1093 0 l 953 0 l 696 799 l 442 0 l 306 0 l 21 985 l 161 985 l 378 214 l 625 985 l 768 985 l 1021 206 "
    },
    "\xe1\xba\x80": {
        ha: 1394,
        x_min: 0,
        x_max: 0,
        o: "m 444 1219 l 624 1219 l 765 1054 l 636 1054 m 1233 985 l 1374 985 l 1093 0 l 953 0 l 696 799 l 442 0 l 306 0 l 21 985 l 161 985 l 378 214 l 625 985 l 768 985 l 1021 206 "
    },
    "\xe1\xba\x8a": {
        ha: 857,
        x_min: 0,
        x_max: 0,
        o: "m 342 1136 b 429 1225 342 1185 382 1225 b 518 1136 478 1225 518 1185 b 429 1049 518 1089 478 1049 b 342 1136 382 1049 342 1089 m 508 493 l 839 0 l 676 0 l 428 385 l 174 0 l 14 0 l 350 493 l 17 985 l 181 985 l 429 599 l 682 985 l 843 985 "
    },
    "\xc5\xb6": {
        ha: 858,
        x_min: 0,
        x_max: 0,
        o: "m 188 1054 l 343 1219 l 510 1219 l 672 1054 l 544 1054 l 426 1143 l 314 1054 m 14 985 l 178 985 l 433 546 l 689 985 l 844 985 l 497 421 l 497 0 l 361 0 l 361 421 "
    },
    "\xe1\xbb\xb2": {
        ha: 858,
        x_min: 0,
        x_max: 0,
        o: "m 190 1219 l 369 1219 l 511 1054 l 382 1054 m 14 985 l 178 985 l 433 546 l 689 985 l 844 985 l 497 421 l 497 0 l 361 0 l 361 421 "
    },
    "\xc5\xb9": {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 471 1054 l 340 1054 l 481 1219 l 661 1219 m 63 0 l 63 136 l 650 858 l 76 858 l 76 985 l 815 985 l 815 853 l 225 128 l 822 128 l 822 0 "
    },
    "\xc5\xbb": {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 356 1136 b 443 1225 356 1185 396 1225 b 532 1136 492 1225 532 1185 b 443 1049 532 1089 492 1049 b 356 1136 396 1049 356 1089 m 63 0 l 63 136 l 650 858 l 76 858 l 76 985 l 815 985 l 815 853 l 225 128 l 822 128 l 822 0 "
    },
    "\xc6\xb5": {
        ha: 878,
        x_min: 0,
        x_max: 0,
        o: "m 63 0 l 63 136 l 322 456 l 121 456 l 121 574 l 418 574 l 650 858 l 76 858 l 76 985 l 815 985 l 815 853 l 588 574 l 754 574 l 754 456 l 492 456 l 225 128 l 822 128 l 822 0 "
    },
    "\xc6\x8f": {
        ha: 1103,
        x_min: 0,
        x_max: 0,
        o: "m 539 1006 b 1040 492 813 1006 1040 828 b 551 -21 1040 156 799 -21 b 63 488 307 -21 63 147 b 64 521 63 494 63 506 l 900 521 b 539 881 888 763 722 881 b 199 644 375 881 238 774 l 76 689 b 539 1006 129 864 317 1006 m 857 286 b 893 396 872 318 885 354 l 204 396 b 229 303 208 361 217 331 b 551 104 285 169 415 104 b 857 286 678 104 796 164 "
    },
    "\xc4\x83": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 360 757 b 157 954 229 757 158 856 l 258 954 b 360 864 261 911 289 864 b 461 954 431 864 458 913 l 563 954 b 360 757 561 856 494 757 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc4\x81": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 174 801 l 174 914 l 553 914 l 553 801 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc4\x85": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 414 -160 b 515 0 414 -79 464 -31 b 508 90 514 7 508 38 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 50 640 17 b 525 -135 590 -25 525 -67 b 599 -200 525 -182 561 -200 b 643 -194 621 -200 632 -197 l 643 -289 b 574 -300 625 -296 608 -300 b 414 -160 488 -300 414 -249 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 246 278 203 246 b 311 89 203 136 244 89 "
    },
    "\xc7\xbb": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 413 1082 l 303 1082 l 424 1285 l 588 1285 m 518 883 b 363 732 518 799 447 732 b 208 883 281 732 208 799 b 363 1036 208 969 281 1036 b 518 883 447 1036 518 969 m 429 883 b 361 951 429 921 400 951 b 296 883 324 951 296 921 b 361 817 296 846 324 817 b 429 883 400 817 429 846 m 311 89 b 504 286 418 89 504 140 l 504 317 l 300 286 b 203 186 244 278 203 246 b 311 89 203 136 244 89 m 69 179 b 272 382 69 299 157 365 l 453 408 b 504 458 493 414 504 435 b 360 578 504 524 461 578 b 208 443 268 578 217 521 l 83 472 b 357 689 97 600 213 689 b 635 444 557 689 635 575 l 635 110 b 643 0 635 51 640 17 l 515 0 b 508 90 513 17 508 42 b 293 -21 479 43 413 -21 b 69 179 157 -21 69 74 "
    },
    "\xc7\xbd": {
        ha: 1214,
        x_min: 0,
        x_max: 0,
        o: "m 656 754 l 546 754 l 667 957 l 831 957 m 1154 190 b 854 -21 1117 72 1001 -21 b 576 124 742 -21 639 29 b 308 -21 538 53 460 -21 b 69 179 156 -21 69 74 b 272 382 69 299 157 365 l 465 408 b 518 458 510 415 518 439 b 365 579 518 522 467 579 b 206 449 271 579 214 519 l 83 472 b 365 689 96 607 238 689 b 603 578 479 689 560 644 b 838 689 663 647 747 689 b 1158 339 1043 689 1158 547 b 1156 297 1158 326 1157 304 l 653 297 b 854 94 656 179 743 94 b 1040 229 963 94 1015 154 m 1022 403 b 839 574 1019 499 956 574 b 657 403 729 574 663 489 m 318 89 b 518 285 411 89 518 139 l 518 317 l 300 286 b 203 183 242 278 203 244 b 318 89 203 135 244 89 "
    },
    "\xc4\x87": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 432 754 l 322 754 l 443 957 l 607 957 m 392 568 b 189 335 286 568 189 490 b 393 100 189 182 285 100 b 579 238 518 100 564 185 l 694 188 b 393 -21 663 92 567 -21 b 56 335 199 -21 56 132 b 392 689 56 543 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 "
    },
    "\xc4\x8d": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 283 954 l 381 842 l 478 954 l 600 954 l 458 757 l 304 757 l 163 954 m 392 568 b 189 335 286 568 189 490 b 393 100 189 182 285 100 b 579 238 518 100 564 185 l 694 188 b 393 -21 663 92 567 -21 b 56 335 199 -21 56 132 b 392 689 56 543 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 "
    },
    "\xc4\x89": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 172 757 l 317 950 l 465 950 l 610 757 l 488 757 l 390 869 l 293 757 m 392 568 b 189 335 286 568 189 490 b 393 100 189 182 285 100 b 579 238 518 100 564 185 l 694 188 b 393 -21 663 92 567 -21 b 56 335 199 -21 56 132 b 392 689 56 543 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 "
    },
    "\xc4\x8b": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 306 856 b 392 942 306 903 344 942 b 478 856 439 942 478 903 b 392 769 478 808 439 769 b 306 856 344 769 306 808 m 392 568 b 189 335 286 568 189 490 b 393 100 189 182 285 100 b 579 238 518 100 564 185 l 694 188 b 393 -21 663 92 567 -21 b 56 335 199 -21 56 132 b 392 689 56 543 201 689 b 689 476 569 689 661 578 l 571 426 b 392 568 554 492 506 568 "
    },
    "\xc4\x8f": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 858 757 l 763 757 l 801 1006 l 947 1006 m 189 336 b 385 97 189 199 260 97 b 578 339 504 97 578 201 b 386 571 578 476 506 571 b 189 336 267 571 189 474 m 579 101 b 372 -18 547 38 476 -18 b 56 336 176 -18 56 138 b 372 686 56 525 183 686 b 576 574 490 686 554 628 l 576 1006 l 706 1006 l 706 124 b 713 0 706 60 711 11 l 586 0 b 579 90 583 15 579 50 "
    },
    "\xc4\x91": {
        ha: 824,
        x_min: 0,
        x_max: 0,
        o: "m 189 336 b 385 97 189 199 260 97 b 578 339 504 97 578 201 b 386 571 578 476 506 571 b 189 336 267 571 189 474 m 706 876 l 813 876 l 813 771 l 706 771 l 706 124 b 713 0 706 60 711 11 l 586 0 b 579 90 583 15 579 50 l 579 101 b 372 -18 547 38 476 -18 b 56 336 176 -18 56 138 b 372 686 56 525 183 686 b 576 574 490 686 554 628 l 576 771 l 394 771 l 394 876 l 576 876 l 576 1006 l 706 1006 "
    },
    "\xc4\x95": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 386 757 b 183 954 256 757 185 856 l 285 954 b 386 864 288 911 315 864 b 488 954 457 864 485 913 l 589 954 b 386 757 588 856 521 757 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc4\x9b": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 289 954 l 386 842 l 483 954 l 606 954 l 464 757 l 310 757 l 168 954 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc4\x97": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 301 856 b 388 942 301 903 340 942 b 474 856 435 942 474 903 b 388 769 474 808 435 769 b 301 856 340 769 301 808 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc4\x93": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 197 801 l 197 914 l 576 914 l 576 801 m 693 190 b 393 -21 656 72 549 -21 b 57 336 214 -21 57 110 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 322 696 306 l 192 297 b 393 94 194 178 281 94 b 581 229 501 94 556 154 m 561 403 b 378 574 558 499 496 574 b 196 403 268 574 201 489 "
    },
    "\xc4\x99": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 443 -299 b 283 -158 357 -299 283 -247 b 354 -19 283 -94 315 -50 b 57 336 193 -1 57 126 b 376 689 57 546 208 689 b 697 339 582 689 697 547 b 694 297 697 332 697 318 l 192 297 b 393 94 194 179 282 94 b 581 229 501 94 556 154 l 693 190 b 499 -4 665 101 596 26 b 394 -126 440 -24 394 -67 b 468 -199 394 -181 432 -199 b 513 -193 482 -199 497 -197 l 513 -287 b 443 -299 494 -294 478 -299 m 561 403 b 378 574 558 499 494 574 b 196 403 268 574 201 489 "
    },
    "\xc4\x9f": {
        ha: 803,
        x_min: 0,
        x_max: 0,
        o: "m 385 757 b 182 954 254 757 183 856 l 283 954 b 385 864 286 911 314 864 b 486 954 456 864 483 913 l 588 954 b 385 757 586 856 519 757 m 390 142 b 581 356 503 142 581 226 b 390 569 581 485 503 569 b 197 356 275 569 197 485 b 390 142 197 225 272 142 m 189 -7 b 371 -171 199 -100 269 -171 b 575 46 511 -171 575 -99 l 575 142 b 371 32 543 81 471 32 b 64 356 193 32 64 167 b 371 681 64 536 188 681 b 576 575 474 681 543 642 l 576 668 l 706 668 l 706 50 b 371 -285 706 -119 622 -285 b 63 -36 204 -285 79 -179 "
    },
    "\xc4\x9d": {
        ha: 803,
        x_min: 0,
        x_max: 0,
        o: "m 175 757 l 319 950 l 468 950 l 613 757 l 490 757 l 393 869 l 296 757 m 390 142 b 581 356 503 142 581 226 b 390 569 581 485 503 569 b 197 356 275 569 197 485 b 390 142 197 225 272 142 m 189 -7 b 371 -171 199 -100 269 -171 b 575 46 511 -171 575 -99 l 575 142 b 371 32 543 81 471 32 b 64 356 193 32 64 167 b 371 681 64 536 188 681 b 576 575 474 681 543 642 l 576 668 l 706 668 l 706 50 b 371 -285 706 -119 622 -285 b 63 -36 204 -285 79 -179 "
    },
    "\xc4\xa3": {
        ha: 803,
        x_min: 0,
        x_max: 0,
        o: "m 461 814 b 379 742 461 769 425 742 b 289 843 340 742 289 769 b 447 999 289 943 372 999 l 447 943 b 357 876 400 943 360 910 b 386 885 358 878 369 885 b 461 814 431 885 461 858 m 390 142 b 581 356 503 142 581 226 b 390 569 581 485 503 569 b 197 356 275 569 197 485 b 390 142 197 225 272 142 m 189 -7 b 371 -171 199 -100 269 -171 b 575 46 511 -171 575 -99 l 575 142 b 371 32 543 81 471 32 b 64 356 193 32 64 167 b 371 681 64 536 188 681 b 576 575 474 681 543 642 l 576 668 l 706 668 l 706 50 b 371 -285 706 -119 622 -285 b 63 -36 204 -285 79 -179 "
    },
    "\xc4\xa1": {
        ha: 803,
        x_min: 0,
        x_max: 0,
        o: "m 300 856 b 386 942 300 903 339 942 b 472 856 433 942 472 903 b 386 769 472 808 433 769 b 300 856 339 769 300 808 m 390 142 b 581 356 503 142 581 226 b 390 569 581 485 503 569 b 197 356 275 569 197 485 b 390 142 197 225 272 142 m 189 -7 b 371 -171 199 -100 269 -171 b 575 46 511 -171 575 -99 l 575 142 b 371 32 543 81 471 32 b 64 356 193 32 64 167 b 371 681 64 536 188 681 b 576 575 474 681 543 642 l 576 668 l 706 668 l 706 50 b 371 -285 706 -119 622 -285 b 63 -36 204 -285 79 -179 "
    },
    "\xc4\xa7": {
        ha: 788,
        x_min: 0,
        x_max: 0,
        o: "m 249 0 l 118 0 l 118 774 l -1 774 l -1 879 l 118 879 l 118 1006 l 249 1006 l 249 879 l 417 879 l 417 774 l 249 774 l 249 590 b 451 688 297 661 375 688 b 690 424 611 688 690 572 l 690 0 l 560 0 l 560 401 b 404 569 560 494 521 569 b 249 393 304 569 251 492 "
    },
    "\xc4\xa5": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 160 1068 l 315 1233 l 482 1233 l 644 1068 l 517 1068 l 399 1157 l 286 1068 m 242 0 l 111 0 l 111 1006 l 242 1006 l 242 590 b 444 688 290 661 368 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 393 297 569 244 492 "
    },
    "\xc4\xad": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 176 757 b -26 954 46 757 -25 856 l 75 954 b 176 864 78 911 106 864 b 278 954 247 864 275 913 l 379 954 b 176 757 378 856 311 757 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc4\xab": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m -12 801 l -12 914 l 367 914 l 367 801 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc4\xaf": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 82 921 b 175 1015 82 974 124 1015 b 269 921 228 1015 269 974 b 175 828 269 869 228 828 b 82 921 124 828 82 869 m 122 -135 b 196 -200 122 -182 158 -200 b 240 -194 218 -200 229 -197 l 240 -289 b 171 -300 222 -296 206 -300 b 11 -160 85 -300 11 -249 b 111 0 11 -79 60 -31 l 111 668 l 240 668 l 240 0 b 122 -135 188 -25 122 -67 "
    },
    "\xc4\xa9": {
        ha: 351,
        x_min: 0,
        x_max: 0,
        o: "m 394 919 b 260 768 394 817 336 768 b 168 799 224 768 194 782 l 149 811 b 97 831 131 822 115 831 b 57 771 71 831 57 817 l -43 771 l -43 792 b 93 943 -43 894 17 943 b 186 913 131 943 160 929 l 206 900 b 256 881 224 889 238 881 b 296 940 283 881 296 896 l 394 940 m 111 0 l 111 668 l 240 668 l 240 0 "
    },
    "\xc4\xb3": {
        ha: 718,
        x_min: 0,
        x_max: 0,
        o: "m 447 924 b 540 1018 447 976 489 1018 b 635 924 593 1018 635 976 b 540 831 635 872 593 831 b 447 924 489 831 447 872 m 82 921 b 175 1015 82 974 124 1015 b 269 921 228 1015 269 974 b 175 828 269 869 228 828 b 82 921 124 828 82 869 m 111 0 l 111 668 l 240 668 l 240 0 m 476 668 l 607 668 l 607 -78 b 422 -285 607 -199 538 -285 b 344 -275 372 -285 353 -278 l 344 -165 b 386 -169 351 -167 367 -169 b 476 -72 454 -169 476 -133 "
    },
    "\xc4\xb5": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m -42 757 l 103 950 l 251 950 l 396 757 l 274 757 l 176 869 l 79 757 m 111 668 l 242 668 l 242 -78 b 57 -285 242 -199 172 -285 b -21 -275 7 -285 -12 -278 l -21 -167 b 21 -169 -14 -168 7 -169 b 111 -72 89 -169 111 -133 "
    },
    "\xc8\xb7": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 111 668 l 242 668 l 242 -78 b 57 -285 242 -199 172 -285 b -21 -275 7 -285 -12 -278 l -21 -167 b 21 -169 -14 -168 7 -169 b 111 -72 89 -169 111 -133 "
    },
    "\xc4\xb7": {
        ha: 729,
        x_min: 0,
        x_max: 0,
        o: "m 425 386 l 715 0 l 551 0 l 333 294 l 240 201 l 240 0 l 111 0 l 111 1006 l 240 1006 l 240 372 l 529 668 l 710 668 m 319 -122 b 401 -50 319 -81 358 -50 b 492 -151 442 -50 492 -76 b 333 -307 492 -258 408 -307 l 333 -251 b 424 -185 381 -251 421 -218 b 394 -193 419 -187 407 -193 b 319 -122 351 -193 319 -169 "
    },
    "\xc4\xba": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 243 1068 l 113 1068 l 253 1233 l 433 1233 m 111 0 l 111 1006 l 242 1006 l 242 0 "
    },
    "\xc4\xbe": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 383 757 l 288 757 l 326 1006 l 472 1006 m 111 0 l 111 1006 l 242 1006 l 242 0 "
    },
    "\xc4\xbc": {
        ha: 353,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 1006 l 242 1006 l 242 0 m 90 -122 b 172 -50 90 -81 129 -50 b 263 -151 213 -50 263 -76 b 104 -307 263 -258 179 -307 l 104 -251 b 194 -185 151 -251 192 -218 b 165 -193 190 -187 178 -193 b 90 -122 122 -193 90 -169 "
    },
    "\xc5\x80": {
        ha: 517,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 1006 l 242 1006 l 242 0 m 324 433 b 410 519 324 481 363 519 b 496 433 457 519 496 481 b 410 347 496 386 457 347 b 324 433 363 347 324 386 "
    },
    "\xc5\x84": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 417 754 l 307 754 l 428 957 l 592 957 m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    "\xc5\x89": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 96 915 b 178 988 96 960 135 988 b 268 886 219 988 268 961 b 110 731 268 779 185 731 l 110 786 b 200 853 157 786 197 819 b 171 844 199 851 189 844 b 96 915 128 844 96 868 m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    "\xc5\x88": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 276 954 l 374 842 l 471 954 l 593 954 l 451 757 l 297 757 l 156 954 m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    "\xc5\x86": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 0 l 553 0 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 m 319 -122 b 401 -50 319 -81 358 -50 b 492 -151 442 -50 492 -76 b 333 -307 492 -258 408 -307 l 333 -251 b 424 -185 381 -251 421 -218 b 394 -193 419 -187 407 -193 b 319 -122 351 -193 319 -169 "
    },
    "\xc5\x8b": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 242 0 l 111 0 l 111 668 l 239 668 l 239 572 b 444 688 288 656 367 688 b 683 424 604 688 683 572 l 683 -78 b 499 -285 683 -199 614 -285 b 421 -275 449 -285 426 -278 l 421 -167 b 463 -169 429 -168 447 -169 b 553 -72 531 -169 553 -133 l 553 401 b 397 569 553 494 514 569 b 242 386 294 569 242 488 "
    },
    "\xc5\x8f": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 397 757 b 194 954 267 757 196 856 l 296 954 b 397 864 299 911 326 864 b 499 954 468 864 496 913 l 600 954 b 397 757 599 856 532 757 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc5\x91": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 526 754 l 435 754 l 519 957 l 665 957 m 344 754 l 253 754 l 324 957 l 469 957 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc5\x8d": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 208 801 l 208 914 l 588 914 l 588 801 m 397 689 b 739 335 597 689 739 538 b 397 -21 739 131 597 -21 b 56 335 197 -21 56 131 b 397 689 56 538 197 689 m 397 96 b 606 335 508 96 606 179 b 397 572 606 489 508 572 b 189 335 286 572 189 489 b 397 96 189 179 286 96 "
    },
    "\xc7\xbf": {
        ha: 794,
        x_min: 0,
        x_max: 0,
        o: "m 453 754 l 343 754 l 464 957 l 628 957 m 189 335 b 224 194 189 274 203 232 l 496 547 b 397 572 465 564 432 572 b 189 335 286 572 189 489 m 397 96 b 606 335 508 96 606 179 b 572 472 606 389 593 436 l 300 119 b 397 96 329 103 363 96 m 397 689 b 571 644 463 689 521 672 l 640 735 l 724 668 l 653 576 b 739 335 707 514 739 431 b 397 -21 739 131 597 -21 b 225 22 332 -21 274 -4 l 157 -65 l 74 1 l 142 90 b 56 335 88 153 56 238 b 397 689 56 538 197 689 "
    },
    "\xc5\x95": {
        ha: 510,
        x_min: 0,
        x_max: 0,
        o: "m 307 754 l 197 754 l 318 957 l 482 957 m 482 536 b 425 540 463 539 443 540 b 242 335 315 540 242 482 l 242 0 l 111 0 l 111 668 l 239 668 l 239 551 b 439 679 288 654 371 679 b 482 675 457 679 475 676 "
    },
    "\xc5\x99": {
        ha: 510,
        x_min: 0,
        x_max: 0,
        o: "m 194 954 l 292 842 l 389 954 l 511 954 l 369 757 l 215 757 l 74 954 m 482 536 b 425 540 463 539 443 540 b 242 335 315 540 242 482 l 242 0 l 111 0 l 111 668 l 239 668 l 239 551 b 439 679 288 654 371 679 b 482 675 457 679 475 676 "
    },
    "\xc5\x97": {
        ha: 510,
        x_min: 0,
        x_max: 0,
        o: "m 482 536 b 425 540 463 539 443 540 b 242 335 315 540 242 482 l 242 0 l 111 0 l 111 668 l 239 668 l 239 551 b 439 679 288 654 371 679 b 482 675 457 679 475 676 m 92 -122 b 174 -50 92 -81 131 -50 b 264 -151 214 -50 264 -76 b 106 -307 264 -258 181 -307 l 106 -251 b 196 -185 153 -251 193 -218 b 167 -193 192 -187 179 -193 b 92 -122 124 -193 92 -169 "
    },
    "\xc5\x9b": {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 357 754 l 247 754 l 368 957 l 532 957 m 167 215 b 322 90 175 146 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 132 313 69 383 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 221 419 l 381 385 b 565 186 501 358 565 285 b 321 -21 565 92 486 -21 b 49 174 138 -21 60 97 "
    },
    "\xc5\x9f": {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 167 218 b 322 90 175 149 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 135 313 69 386 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 224 419 l 381 385 b 565 186 501 358 565 285 b 364 -18 565 100 500 0 l 335 -64 b 469 -178 413 -64 469 -108 b 307 -300 469 -243 419 -300 b 154 -239 238 -300 182 -272 l 206 -176 b 306 -224 222 -194 258 -224 b 371 -178 339 -224 371 -210 b 310 -133 371 -153 349 -133 b 269 -140 296 -133 281 -136 l 224 -86 l 268 -17 b 49 176 125 1 58 107 "
    },
    "\xc5\x9d": {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 106 757 l 250 950 l 399 950 l 543 757 l 421 757 l 324 869 l 226 757 m 167 215 b 322 90 175 146 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 132 313 69 383 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 221 419 l 381 385 b 565 186 501 358 565 285 b 321 -21 565 92 486 -21 b 49 174 138 -21 60 97 "
    },
    "\xc8\x99": {
        ha: 628,
        x_min: 0,
        x_max: 0,
        o: "m 167 215 b 322 90 175 146 228 90 b 436 179 396 90 436 132 b 350 265 436 221 406 253 l 236 290 b 69 478 132 313 69 383 b 307 689 69 592 176 689 b 561 510 490 689 547 569 l 446 467 b 307 578 440 501 413 578 b 196 489 240 578 196 535 b 272 408 196 449 221 419 l 381 385 b 565 186 501 358 565 285 b 321 -21 565 92 486 -21 b 49 174 138 -21 60 97 m 235 -122 b 317 -50 235 -81 274 -50 b 407 -151 357 -50 407 -76 b 249 -307 407 -258 324 -307 l 249 -251 b 339 -185 296 -251 336 -218 b 310 -193 335 -187 322 -193 b 235 -122 267 -193 235 -169 "
    },
    "\xc5\xa7": {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 379 111 b 431 117 396 111 419 114 l 431 6 b 342 -7 419 1 386 -7 b 156 183 228 -7 156 63 l 156 288 l 28 288 l 28 393 l 156 393 l 156 550 l 28 550 l 28 668 l 64 668 b 167 771 136 668 167 713 l 167 879 l 286 879 l 286 668 l 431 668 l 431 550 l 286 550 l 286 393 l 431 393 l 431 288 l 286 288 l 286 203 b 379 111 286 142 311 111 "
    },
    "\xc5\xa5": {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 471 786 l 375 786 l 414 1035 l 560 1035 m 286 668 l 431 668 l 431 550 l 286 550 l 286 203 b 379 111 286 142 311 111 b 431 117 396 111 419 114 l 431 6 b 342 -7 419 1 386 -7 b 156 183 228 -7 156 63 l 156 550 l 28 550 l 28 668 l 64 668 b 167 771 136 668 167 713 l 167 879 l 286 879 "
    },
    "\xc5\xa3": {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 197 -86 l 257 8 b 156 183 193 35 156 96 l 156 550 l 28 550 l 28 668 l 64 668 b 167 771 136 668 167 713 l 167 879 l 286 879 l 286 668 l 431 668 l 431 550 l 286 550 l 286 203 b 379 111 286 142 311 111 b 431 117 396 111 419 114 l 431 6 b 344 -7 419 1 388 -6 l 308 -64 b 443 -178 386 -64 443 -108 b 281 -303 443 -243 393 -303 b 128 -239 211 -303 156 -272 l 179 -176 b 279 -224 196 -194 232 -224 b 344 -178 313 -224 344 -210 b 283 -133 344 -153 322 -133 b 243 -140 269 -133 254 -136 "
    },
    "\xc5\xad": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 392 757 b 189 954 261 757 190 856 l 290 954 b 392 864 293 911 321 864 b 493 954 463 864 490 913 l 594 954 b 392 757 593 856 526 757 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc5\xb1": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 504 754 l 413 754 l 497 957 l 643 957 m 322 754 l 231 754 l 301 957 l 447 957 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc5\xab": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 200 801 l 200 914 l 579 914 l 579 801 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc5\xb3": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 453 -160 b 557 3 453 -78 504 -28 b 551 81 554 19 551 54 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 67 679 24 b 564 -135 629 -25 564 -67 b 638 -200 564 -182 600 -200 b 682 -194 660 -200 671 -197 l 682 -289 b 613 -300 664 -296 647 -300 b 453 -160 526 -300 453 -249 "
    },
    "\xc5\xaf": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 544 890 b 389 739 544 806 474 739 b 235 890 307 739 235 806 b 389 1043 235 976 307 1043 b 544 890 474 1043 544 976 m 456 890 b 388 958 456 928 426 958 b 322 890 350 958 322 928 b 388 824 322 853 350 824 b 456 890 426 824 456 853 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xc5\xa9": {
        ha: 786,
        x_min: 0,
        x_max: 0,
        o: "m 607 919 b 472 768 607 817 549 768 b 381 799 436 768 407 782 l 361 811 b 310 831 343 822 328 831 b 269 771 283 831 269 817 l 169 771 l 169 792 b 306 943 169 894 229 943 b 399 913 343 943 372 929 l 418 900 b 468 881 436 889 450 881 b 508 940 496 881 508 896 l 607 940 m 551 81 b 354 -21 515 11 432 -21 b 104 247 199 -21 104 96 l 104 668 l 235 668 l 235 267 b 386 94 235 175 276 94 b 544 265 492 94 544 164 l 544 668 l 675 668 l 675 124 b 682 0 675 71 679 24 l 557 0 b 551 81 554 15 551 53 "
    },
    "\xe1\xba\x83": {
        ha: 1101,
        x_min: 0,
        x_max: 0,
        o: "m 607 754 l 497 754 l 618 957 l 782 957 m 622 668 l 796 165 l 943 668 l 1081 668 l 864 0 l 729 0 l 551 508 l 378 0 l 240 0 l 21 668 l 164 668 l 314 165 l 488 668 "
    },
    "\xc5\xb5": {
        ha: 1101,
        x_min: 0,
        x_max: 0,
        o: "m 333 757 l 478 950 l 626 950 l 771 757 l 649 757 l 551 869 l 454 757 m 622 668 l 796 165 l 943 668 l 1081 668 l 864 0 l 729 0 l 551 508 l 378 0 l 240 0 l 21 668 l 164 668 l 314 165 l 488 668 "
    },
    "\xe1\xba\x85": {
        ha: 1101,
        x_min: 0,
        x_max: 0,
        o: "m 628 863 b 708 943 628 907 663 943 b 789 863 753 943 789 907 b 708 782 789 817 753 782 b 628 863 663 782 628 817 m 313 863 b 392 943 313 907 347 943 b 474 863 438 943 474 907 b 392 782 474 817 438 782 b 313 863 347 782 313 817 m 622 668 l 796 165 l 943 668 l 1081 668 l 864 0 l 729 0 l 551 508 l 378 0 l 240 0 l 21 668 l 164 668 l 314 165 l 488 668 "
    },
    "\xe1\xba\x81": {
        ha: 1101,
        x_min: 0,
        x_max: 0,
        o: "m 325 957 l 489 957 l 608 754 l 500 754 m 622 668 l 796 165 l 943 668 l 1081 668 l 864 0 l 729 0 l 551 508 l 378 0 l 240 0 l 21 668 l 164 668 l 314 165 l 488 668 "
    },
    "\xe1\xba\x8b": {
        ha: 682,
        x_min: 0,
        x_max: 0,
        o: "m 256 856 b 342 942 256 903 294 942 b 428 856 389 942 428 903 b 342 769 428 808 389 769 b 256 856 294 769 256 808 m 263 340 l 22 668 l 181 668 l 344 433 l 506 668 l 660 668 l 422 340 b 668 0 463 286 628 54 l 511 0 l 339 246 l 169 0 l 14 0 "
    },
    "\xc5\xb7": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 143 757 l 288 950 l 436 950 l 581 757 l 458 757 l 361 869 l 264 757 m 135 -279 l 301 74 l 14 668 l 164 668 l 372 207 l 572 668 l 713 668 l 278 -279 "
    },
    "\xe1\xbb\xb3": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 161 957 l 325 957 l 444 754 l 336 754 m 135 -279 l 301 74 l 14 668 l 164 668 l 372 207 l 572 668 l 713 668 l 278 -279 "
    },
    "\xc5\xba": {
        ha: 647,
        x_min: 0,
        x_max: 0,
        o: "m 346 754 l 236 754 l 357 957 l 521 957 m 56 0 l 56 114 l 422 550 l 61 550 l 61 668 l 585 668 l 585 554 l 218 118 l 592 118 l 592 0 "
    },
    "\xc5\xbc": {
        ha: 647,
        x_min: 0,
        x_max: 0,
        o: "m 238 856 b 324 942 238 903 276 942 b 410 856 371 942 410 903 b 324 769 410 808 371 769 b 238 856 276 769 238 808 m 56 0 l 56 114 l 422 550 l 61 550 l 61 668 l 585 668 l 585 554 l 218 118 l 592 118 l 592 0 "
    },
    "\xc4\xb8": {
        ha: 729,
        x_min: 0,
        x_max: 0,
        o: "m 425 386 l 715 0 l 551 0 l 333 294 l 240 201 l 240 0 l 111 0 l 111 668 l 240 668 l 240 372 l 529 668 l 710 668 "
    },
    "\xc6\xb6": {
        ha: 647,
        x_min: 0,
        x_max: 0,
        o: "m 56 0 l 56 114 l 206 293 l 68 293 l 68 399 l 294 399 l 422 550 l 61 550 l 61 668 l 585 668 l 585 554 l 454 399 l 575 399 l 575 293 l 365 293 l 218 118 l 592 118 l 592 0 "
    },
    "\xc9\x99": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 63 479 b 371 689 101 594 217 689 b 703 332 578 689 703 544 b 383 -21 703 122 558 -21 b 56 325 182 -21 56 117 b 58 367 56 332 56 344 l 568 367 b 371 574 565 485 489 574 b 172 440 267 574 197 511 m 194 261 b 382 94 197 165 268 94 b 564 261 492 94 558 175 "
    },
    "\xe2\x82\xac": {
        ha: 1046,
        x_min: 0,
        x_max: 0,
        o: "m 1006 88 b 704 -21 929 22 825 -21 b 244 308 517 -21 318 89 l 100 308 l 100 425 l 221 425 b 218 493 219 442 218 474 b 221 557 218 514 219 540 l 100 557 l 100 671 l 242 671 b 710 1006 314 894 519 1006 b 969 933 810 1006 901 982 l 911 826 b 710 883 856 867 788 883 b 382 671 568 883 440 813 l 838 671 l 779 557 l 357 557 b 353 493 354 539 353 517 b 357 425 353 465 354 440 l 722 425 l 664 308 l 386 308 b 704 99 442 168 565 99 b 935 185 794 99 879 128 "
    },
    "\xc2\xa0": {
        ha: 347,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xef\xac\x80": {
        ha: 915,
        x_min: 0,
        x_max: 0,
        o: "m 831 888 b 725 774 785 888 725 865 l 725 668 l 886 668 l 886 550 l 725 550 l 725 0 l 590 0 l 590 550 l 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 l 151 781 b 371 1010 151 929 250 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 b 286 774 346 888 286 865 l 286 668 l 590 668 l 590 781 b 810 1010 590 929 689 1010 b 888 996 854 1010 882 1000 l 888 879 b 831 888 881 882 864 888 "
    },
    "\xef\xac\x83": {
        ha: 1278,
        x_min: 0,
        x_max: 0,
        o: "m 1008 924 b 1101 1018 1008 976 1050 1018 b 1196 924 1154 1018 1196 976 b 1101 831 1196 872 1154 831 b 1008 924 1050 831 1008 872 m 151 781 b 371 1010 151 929 250 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 b 286 774 346 888 286 865 l 286 668 l 590 668 l 590 781 b 810 1010 590 929 689 1010 b 888 996 854 1010 882 1000 l 888 879 b 831 888 881 882 864 888 b 725 774 785 888 725 865 l 725 668 l 1167 668 l 1167 0 l 1038 0 l 1038 550 l 725 550 l 725 0 l 590 0 l 590 550 l 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 "
    },
    "\xef\xac\x84": {
        ha: 1278,
        x_min: 0,
        x_max: 0,
        o: "m 151 781 b 371 1010 151 929 250 1010 b 449 996 415 1010 443 1000 l 449 879 b 392 888 442 882 425 888 b 286 774 346 888 286 865 l 286 668 l 590 668 l 590 781 b 810 1010 590 929 689 1010 b 888 996 854 1010 882 1000 l 888 879 b 831 888 881 882 864 888 b 725 774 785 888 725 865 l 725 668 l 1038 668 l 1038 1006 l 1167 1006 l 1167 0 l 1038 0 l 1038 550 l 725 550 l 725 0 l 590 0 l 590 550 l 286 550 l 286 0 l 151 0 l 151 550 l 28 550 l 28 668 l 151 668 "
    },
    "\xef\x9b\x83": {
        ha: 269,
        x_min: 0,
        x_max: 0,
        o: "m 49 915 b 131 988 49 960 88 988 b 221 886 172 988 221 961 b 63 731 221 779 138 731 l 63 786 b 153 853 110 786 150 819 b 124 844 151 851 142 844 b 49 915 81 844 49 868 "
    },
    "\xe2\x81\xb0": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 83 731 b 132 914 83 797 96 864 b 296 994 163 957 211 994 b 460 914 381 994 429 957 b 508 731 496 864 508 797 b 460 549 508 664 496 599 b 296 468 429 506 381 468 b 132 549 211 468 163 506 b 83 731 96 599 83 664 m 192 731 b 296 560 192 656 204 560 b 400 731 388 560 400 656 b 296 903 400 806 388 903 b 192 731 204 903 192 807 "
    },
    "\xe2\x81\xb4": {
        ha: 619,
        x_min: 0,
        x_max: 0,
        o: "m 83 679 l 329 985 l 447 985 l 447 668 l 536 668 l 536 578 l 447 578 l 447 478 l 340 478 l 340 578 l 83 578 m 340 861 l 186 668 l 340 668 "
    },
    "\xe2\x81\xb5": {
        ha: 561,
        x_min: 0,
        x_max: 0,
        o: "m 175 638 b 276 558 188 589 226 558 b 369 643 331 558 369 589 b 276 729 369 700 329 729 b 188 692 239 729 210 714 l 99 725 l 167 985 l 450 985 l 450 893 l 236 893 l 204 774 b 306 813 229 801 268 813 b 478 647 408 813 478 749 b 276 468 478 549 406 468 b 83 596 176 468 101 531 "
    },
    "\xe2\x81\xb6": {
        ha: 581,
        x_min: 0,
        x_max: 0,
        o: "m 447 890 b 361 908 419 903 390 908 b 190 763 272 908 206 858 b 317 822 214 797 265 822 b 497 647 424 822 497 758 b 293 468 497 540 408 468 b 83 700 190 468 83 540 b 353 996 83 881 199 996 b 472 969 399 996 444 986 m 199 646 b 294 558 199 589 247 558 b 389 646 342 558 389 589 b 294 733 389 703 342 733 b 199 646 247 733 199 703 "
    },
    "\xe2\x81\xb7": {
        ha: 579,
        x_min: 0,
        x_max: 0,
        o: "m 496 889 b 282 478 447 856 307 740 l 168 478 b 357 893 193 753 357 893 l 83 893 l 83 985 l 496 985 "
    },
    "\xe2\x81\xb8": {
        ha: 569,
        x_min: 0,
        x_max: 0,
        o: "m 285 468 b 83 618 156 468 83 533 b 178 738 83 668 118 715 b 100 849 128 758 100 803 b 285 994 100 935 178 994 b 469 849 392 994 469 935 b 392 738 469 803 442 758 b 486 618 451 715 486 668 b 285 468 486 533 414 468 m 285 779 b 364 846 333 779 364 806 b 285 908 364 882 335 908 b 206 846 235 908 206 882 b 285 779 206 806 236 779 m 285 557 b 378 626 346 557 378 585 b 285 696 378 667 344 696 b 192 626 225 696 192 667 b 285 557 192 585 224 557 "
    },
    "\xe2\x81\xb9": {
        ha: 578,
        x_min: 0,
        x_max: 0,
        o: "m 379 817 b 283 906 379 874 333 906 b 189 817 233 906 189 874 b 283 728 189 760 233 728 b 379 817 333 728 379 760 m 133 576 b 219 558 161 564 190 558 b 390 701 308 558 379 601 b 264 642 367 667 315 642 b 83 817 160 642 83 708 b 288 996 83 922 172 996 b 494 764 390 996 494 924 b 228 468 494 572 382 468 b 108 494 182 468 136 478 "
    },
    "\xe2\x82\x80": {
        ha: 592,
        x_min: 0,
        x_max: 0,
        o: "m 83 153 b 132 336 83 219 96 286 b 296 417 163 379 211 417 b 460 336 381 417 429 379 b 508 153 496 286 508 219 b 460 -29 508 86 496 21 b 296 -110 429 -72 381 -110 b 132 -29 211 -110 163 -72 b 83 153 96 21 83 86 m 192 153 b 296 -18 192 78 204 -18 b 400 153 388 -18 400 78 b 296 325 400 228 388 325 b 192 153 204 325 192 229 "
    },
    "\xe2\x82\x81": {
        ha: 421,
        x_min: 0,
        x_max: 0,
        o: "m 189 -100 l 189 240 l 69 240 l 69 313 b 197 407 138 314 188 356 l 296 407 l 296 -100 "
    },
    "\xe2\x82\x82": {
        ha: 540,
        x_min: 0,
        x_max: 0,
        o: "m 93 211 b 89 254 90 225 89 243 b 272 417 89 342 158 417 b 454 257 386 417 454 342 b 357 104 454 192 417 142 l 257 42 b 214 -10 236 28 218 10 l 457 -10 l 457 -100 l 85 -100 l 85 -82 b 203 119 85 0 121 69 l 286 171 b 346 258 325 194 346 225 b 271 328 346 294 319 328 b 192 247 224 328 192 296 b 196 211 192 242 193 224 "
    },
    "\xe2\x82\x83": {
        ha: 572,
        x_min: 0,
        x_max: 0,
        o: "m 207 208 l 339 318 l 101 318 l 101 408 l 478 408 l 478 321 l 339 210 b 489 58 418 203 489 153 b 288 -110 489 -33 408 -110 b 83 33 167 -110 100 -39 l 176 71 b 286 -18 185 18 229 -18 b 381 58 343 -18 381 15 b 286 136 381 117 332 136 b 247 131 272 136 257 133 "
    },
    "\xe2\x82\x84": {
        ha: 619,
        x_min: 0,
        x_max: 0,
        o: "m 83 101 l 329 407 l 447 407 l 447 90 l 536 90 l 536 0 l 447 0 l 447 -100 l 340 -100 l 340 0 l 83 0 m 340 283 l 186 90 l 340 90 "
    },
    "\xe2\x82\x85": {
        ha: 561,
        x_min: 0,
        x_max: 0,
        o: "m 175 60 b 276 -19 188 11 226 -19 b 369 65 331 -19 369 11 b 276 151 369 122 329 151 b 188 114 239 151 210 136 l 99 147 l 167 407 l 450 407 l 450 315 l 236 315 l 204 196 b 306 235 229 224 268 235 b 478 69 408 235 478 171 b 276 -110 478 -29 406 -110 b 83 18 176 -110 101 -47 "
    },
    "\xe2\x82\x86": {
        ha: 581,
        x_min: 0,
        x_max: 0,
        o: "m 447 313 b 361 331 419 325 390 331 b 190 185 272 331 206 281 b 317 244 214 219 265 244 b 497 69 424 244 497 181 b 293 -110 497 -37 408 -110 b 83 122 190 -110 83 -37 b 353 418 83 303 199 418 b 472 392 399 418 444 408 m 199 68 b 294 -19 199 11 247 -19 b 389 68 342 -19 389 11 b 294 156 389 125 342 156 b 199 68 247 156 199 125 "
    },
    "\xe2\x82\x87": {
        ha: 579,
        x_min: 0,
        x_max: 0,
        o: "m 496 311 b 282 -100 447 278 307 163 l 168 -100 b 357 315 193 175 357 315 l 83 315 l 83 407 l 496 407 "
    },
    "\xe2\x82\x88": {
        ha: 569,
        x_min: 0,
        x_max: 0,
        o: "m 285 -110 b 83 40 156 -110 83 -44 b 178 160 83 90 118 138 b 100 271 128 181 100 225 b 285 417 100 357 178 417 b 469 271 392 417 469 357 b 392 160 469 225 442 181 b 486 40 451 138 486 90 b 285 -110 486 -44 414 -110 m 285 201 b 364 268 333 201 364 228 b 285 331 364 304 335 331 b 206 268 235 331 206 304 b 285 201 206 228 236 201 m 285 -21 b 378 49 346 -21 378 7 b 285 118 378 89 344 118 b 192 49 225 118 192 89 b 285 -21 192 7 224 -21 "
    },
    "\xe2\x82\x89": {
        ha: 578,
        x_min: 0,
        x_max: 0,
        o: "m 379 239 b 283 328 379 296 333 328 b 189 239 233 328 189 296 b 283 150 189 182 233 150 b 379 239 333 150 379 182 m 133 -1 b 219 -19 161 -14 190 -19 b 390 124 308 -19 379 24 b 264 64 367 89 315 64 b 83 239 160 64 83 131 b 288 418 83 344 172 418 b 494 186 390 418 494 346 b 228 -110 494 -6 382 -110 b 108 -83 182 -110 136 -100 "
    },
    "\xe2\x8b\x85": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 97 394 b 193 492 97 449 139 492 b 290 394 247 492 290 449 b 193 299 290 340 247 299 b 97 394 139 299 97 340 "
    },
    "\xe2\x86\x90": {
        ha: 1425,
        x_min: 0,
        x_max: 0,
        o: "m 0 399 l 307 657 l 307 457 l 1328 457 l 1328 342 l 307 342 l 307 142 "
    },
    "\xe2\x86\x91": {
        ha: 624,
        x_min: 0,
        x_max: 0,
        o: "m 610 771 l 390 771 l 390 -206 l 275 -206 l 275 771 l 56 771 l 333 1111 "
    },
    "\xe2\x86\x92": {
        ha: 1425,
        x_min: 0,
        x_max: 0,
        o: "m 1014 106 l 1014 340 l 47 340 l 47 456 l 1014 456 l 1014 693 l 1364 399 "
    },
    "\xe2\x86\x93": {
        ha: 624,
        x_min: 0,
        x_max: 0,
        o: "m 292 -225 l -1 125 l 233 125 l 233 1092 l 349 1092 l 349 125 l 586 125 "
    },
    "\xe2\x86\x96": {
        ha: 1214,
        x_min: 0,
        x_max: 0,
        o: "m 482 985 l 321 822 l 1075 69 l 993 -11 l 239 740 l 76 576 l 76 985 "
    },
    "\xe2\x86\x97": {
        ha: 1074,
        x_min: 0,
        x_max: 0,
        o: "m 935 985 l 935 576 l 771 740 l 18 -11 l -64 69 l 690 822 l 529 985 "
    },
    "\xe2\x86\x98": {
        ha: 1214,
        x_min: 0,
        x_max: 0,
        o: "m 669 0 l 831 163 l 76 915 l 158 996 l 911 243 l 1075 408 l 1075 0 "
    },
    "\xe2\x86\x99": {
        ha: 1061,
        x_min: 0,
        x_max: 0,
        o: "m 63 0 l 63 408 l 225 243 l 979 996 l 1061 915 l 307 163 l 468 0 "
    },
    "\xe2\x86\xa9": {
        ha: 1157,
        x_min: 0,
        x_max: 0,
        o: "m 553 922 l 819 922 b 1121 632 985 922 1121 796 b 814 342 1121 458 975 342 l 304 342 l 304 142 l -3 399 l 304 657 l 304 457 l 807 457 b 1007 632 911 457 1007 519 b 803 807 1007 743 915 807 l 553 807 "
    },
    "\xe2\x86\xb0": {
        ha: 1076,
        x_min: 0,
        x_max: 0,
        o: "m 69 747 l 376 1006 l 376 806 l 951 806 l 951 0 l 836 0 l 836 690 l 376 690 l 376 490 "
    },
    "\xe2\x86\xb1": {
        ha: 1e3,
        x_min: 0,
        x_max: 0,
        o: "m 49 0 l 49 806 l 693 806 l 693 1006 l 1000 747 l 693 490 l 693 690 l 164 690 l 164 0 "
    },
    "\xe2\x86\xb2": {
        ha: 1056,
        x_min: 0,
        x_max: 0,
        o: "m 938 985 l 938 179 l 293 179 l 293 -21 l -14 238 l 293 494 l 293 294 l 822 294 l 822 985 "
    },
    "\xe2\x86\xb3": {
        ha: 1167,
        x_min: 0,
        x_max: 0,
        o: "m 1069 238 l 763 -21 l 763 179 l 118 179 l 118 985 l 233 985 l 233 294 l 763 294 l 763 494 "
    },
    "\xe2\x86\xb4": {
        ha: 1131,
        x_min: 0,
        x_max: 0,
        o: "m 76 985 l 882 985 l 882 285 l 1082 285 l 824 -22 l 567 285 l 767 285 l 767 869 l 76 869 "
    },
    "\xe2\x86\xb5": {
        ha: 1500,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 l 244 493 b 757 1006 246 776 475 1006 b 1010 940 849 1006 935 982 l 958 838 b 758 890 899 871 831 890 b 361 493 536 890 361 714 l 560 493 l 311 201 m 1269 492 b 757 -21 1268 207 1039 -21 b 504 44 665 -21 579 3 l 556 147 b 756 94 615 114 683 94 b 1153 492 978 94 1153 271 l 961 492 l 1210 783 l 1458 492 l 1269 492 "
    },
    "\xe2\x87\x86": {
        ha: 1536,
        x_min: 0,
        x_max: 0,
        o: "m 76 750 l 383 1008 l 383 808 l 1432 808 l 1432 693 l 383 693 l 383 493 m 1153 -21 l 1153 179 l 104 179 l 104 294 l 1153 294 l 1153 494 l 1460 236 "
    },
    "\xe2\x85\xa0": {
        ha: 703,
        x_min: 0,
        x_max: 0,
        o: "m 626 778 l 418 778 l 418 122 l 626 122 l 626 0 l 76 0 l 76 122 l 285 122 l 285 778 l 76 778 l 76 900 l 626 900 "
    },
    "\xe2\x85\xa1": {
        ha: 1069,
        x_min: 0,
        x_max: 0,
        o: "m 993 0 l 76 0 l 76 122 l 271 122 l 271 778 l 76 778 l 76 900 l 993 900 l 993 778 l 799 778 l 799 122 l 993 122 m 665 778 l 404 778 l 404 122 l 665 122 "
    },
    "\xe2\x85\xa2": {
        ha: 1450,
        x_min: 0,
        x_max: 0,
        o: "m 1374 0 l 76 0 l 76 122 l 271 122 l 271 778 l 76 778 l 76 900 l 1374 900 l 1374 778 l 1179 778 l 1179 122 l 1374 122 m 404 122 l 658 122 l 658 778 l 404 778 m 1046 778 l 792 778 l 792 122 l 1046 122 "
    },
    "\xe2\x85\xa3": {
        ha: 1397,
        x_min: 0,
        x_max: 0,
        o: "m 1321 0 l 76 0 l 76 122 l 257 122 l 257 778 l 76 778 l 76 900 l 1319 900 l 1319 778 l 1160 778 l 933 122 l 1321 122 m 1022 778 l 643 778 l 832 196 m 390 122 l 724 122 l 501 778 l 390 778 "
    },
    "\xe2\x85\xa4": {
        ha: 1115,
        x_min: 0,
        x_max: 0,
        o: "m 1039 778 l 886 778 l 660 122 l 1033 122 l 1033 0 l 83 0 l 83 122 l 450 122 l 228 778 l 76 778 l 76 900 l 1039 900 m 749 778 l 369 778 l 558 196 "
    },
    "\xe2\x85\xa5": {
        ha: 1397,
        x_min: 0,
        x_max: 0,
        o: "m 1321 0 l 76 0 l 76 122 l 457 122 l 235 778 l 76 778 l 76 900 l 1319 900 l 1319 778 l 1140 778 l 1140 122 l 1321 122 m 756 778 l 376 778 l 565 196 m 667 122 l 1007 122 l 1007 778 l 893 778 "
    },
    "\xe2\x85\xa6": {
        ha: 1796,
        x_min: 0,
        x_max: 0,
        o: "m 1719 0 l 76 0 l 76 122 l 456 122 l 235 778 l 76 778 l 76 900 l 1719 900 l 1719 778 l 1525 778 l 1525 122 l 1719 122 m 754 778 l 376 778 l 564 196 m 665 122 l 1006 122 l 1006 778 l 892 778 m 1392 778 l 1139 778 l 1139 122 l 1392 122 "
    },
    "\xe2\x85\xa7": {
        ha: 2142,
        x_min: 0,
        x_max: 0,
        o: "m 2065 0 l 76 0 l 76 122 l 451 122 l 235 778 l 76 778 l 76 900 l 2065 900 l 2065 778 l 1878 778 l 1878 122 l 2065 122 m 742 778 l 376 778 l 558 196 m 658 122 l 997 122 l 997 778 l 881 778 m 1504 122 l 1744 122 l 1744 778 l 1504 778 m 1131 122 l 1371 122 l 1371 778 l 1131 778 "
    },
    "\xe2\x85\xa8": {
        ha: 1356,
        x_min: 0,
        x_max: 0,
        o: "m 1279 0 l 76 0 l 76 122 l 257 122 l 257 778 l 76 778 l 76 900 l 1278 900 l 1278 778 l 1132 778 l 896 440 l 1119 122 l 1279 122 m 821 544 l 981 778 l 663 778 m 510 778 l 390 778 l 390 122 l 518 122 l 747 440 m 668 122 l 967 122 l 819 338 "
    },
    "\xe2\x85\xa9": {
        ha: 1065,
        x_min: 0,
        x_max: 0,
        o: "m 988 778 l 842 778 l 606 440 l 829 122 l 989 122 l 989 0 l 76 0 l 76 122 l 228 122 l 457 440 l 219 778 l 76 778 l 76 900 l 988 900 m 531 544 l 690 778 l 372 778 m 378 122 l 676 122 l 529 338 "
    },
    "\xe2\x85\xac": {
        ha: 908,
        x_min: 0,
        x_max: 0,
        o: "m 832 0 l 76 0 l 76 122 l 257 122 l 257 778 l 76 778 l 76 900 l 585 900 l 585 778 l 390 778 l 390 122 l 699 122 l 699 390 l 832 390 "
    },
    "\xe2\x85\xad": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 926 0 l 793 0 l 793 93 b 526 -19 736 22 653 -19 b 76 451 300 -19 76 150 b 526 922 76 754 301 922 b 790 815 650 922 733 883 l 790 903 l 924 903 l 924 589 l 790 589 b 526 800 776 717 685 800 b 211 451 357 800 211 689 b 526 103 211 214 357 103 b 793 321 708 103 786 221 l 926 321 "
    },
    "\xe2\x85\xae": {
        ha: 1021,
        x_min: 0,
        x_max: 0,
        o: "m 522 900 b 944 449 742 900 944 747 b 514 0 944 154 743 0 l 76 0 l 76 122 l 264 122 l 264 778 l 76 778 l 76 900 m 517 122 b 808 449 664 122 808 224 b 514 778 808 667 675 778 l 397 778 l 397 122 "
    },
    "\xe2\x85\xaf": {
        ha: 1485,
        x_min: 0,
        x_max: 0,
        o: "m 738 185 l 1032 900 l 1408 900 l 1408 778 l 1225 778 l 1225 122 l 1408 122 l 1408 0 l 957 0 l 957 122 l 1094 122 l 1094 717 l 790 0 l 685 0 l 383 717 l 383 122 l 528 122 l 528 0 l 76 0 l 76 122 l 253 122 l 253 778 l 76 778 l 76 900 l 446 900 "
    },
    "\xe2\x9e\x80": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 535 240 l 535 581 l 415 581 l 415 653 b 543 747 483 654 533 696 l 642 747 l 642 240 "
    },
    "\xe2\x9e\x81": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 383 558 b 379 601 381 572 379 590 b 563 764 379 689 449 764 b 744 604 676 764 744 689 b 647 451 744 539 707 489 l 547 389 b 504 338 526 375 508 357 l 747 338 l 747 247 l 375 247 l 375 265 b 493 467 375 347 411 417 l 576 518 b 636 606 615 542 636 572 b 561 675 636 642 610 675 b 482 594 514 675 482 643 b 486 558 482 589 483 571 "
    },
    "\xe2\x9e\x82": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 479 546 l 611 656 l 374 656 l 374 746 l 750 746 l 750 658 l 611 547 b 761 396 690 540 761 490 b 560 228 761 304 681 228 b 356 371 439 228 372 299 l 449 408 b 558 319 457 356 501 319 b 653 396 615 319 653 353 b 558 474 653 454 604 474 b 519 468 544 474 529 471 "
    },
    "\xe2\x9e\x83": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 326 449 l 572 754 l 690 754 l 690 438 l 779 438 l 779 347 l 690 347 l 690 247 l 583 247 l 583 347 l 326 347 m 583 631 l 429 438 l 583 438 "
    },
    "\xe2\x9e\x84": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 449 396 b 550 317 461 347 500 317 b 643 401 604 317 643 347 b 550 488 643 458 603 488 b 461 450 513 488 483 472 l 372 483 l 440 743 l 724 743 l 724 651 l 510 651 l 478 532 b 579 571 503 560 542 571 b 751 406 682 571 751 507 b 550 226 751 307 679 226 b 357 354 450 226 375 289 "
    },
    "\xe2\x9e\x85": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 708 653 b 622 671 681 665 651 671 b 451 525 533 671 467 621 b 578 585 475 560 526 585 b 758 410 685 585 758 521 b 554 231 758 303 669 231 b 344 463 451 231 344 303 b 614 758 344 643 460 758 b 733 732 660 758 706 749 m 460 408 b 556 321 460 351 508 321 b 650 408 603 321 650 351 b 556 496 650 465 603 496 b 460 408 508 496 460 465 "
    },
    "\xe2\x9e\x86": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 776 644 b 563 233 728 611 588 496 l 449 233 b 638 649 474 508 638 649 l 364 649 l 364 740 l 776 740 "
    },
    "\xe2\x9e\x87": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 567 231 b 365 381 438 231 365 296 b 460 500 365 431 400 478 b 382 611 410 521 382 565 b 567 757 382 697 460 757 b 751 611 674 757 751 697 b 674 500 751 565 724 521 b 768 381 733 478 768 431 b 567 231 768 296 696 231 m 567 542 b 646 608 615 542 646 568 b 567 671 646 644 617 671 b 488 608 517 671 488 644 b 567 542 488 568 518 542 m 567 319 b 660 389 628 319 660 347 b 567 458 660 429 626 458 b 474 389 507 458 474 429 b 567 319 474 347 506 319 "
    },
    "\xe2\x9e\x88": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 661 576 b 565 665 661 633 615 665 b 471 576 515 665 471 633 b 565 488 471 519 515 488 b 661 576 615 488 661 519 m 415 336 b 501 318 443 324 472 318 b 672 461 590 318 661 361 b 546 401 649 426 597 401 b 365 576 442 401 365 468 b 569 756 365 682 454 756 b 776 524 672 756 776 683 b 510 228 776 332 664 228 b 390 254 464 228 418 238 "
    },
    "\xe2\x81\x91": {
        ha: 588,
        x_min: 0,
        x_max: 0,
        o: "m 343 817 l 497 869 l 525 779 l 371 729 l 474 597 l 397 540 l 293 676 l 196 542 l 119 599 l 218 729 l 63 779 l 92 869 l 244 817 l 244 985 l 343 985 m 343 265 l 497 318 l 525 228 l 371 178 l 474 46 l 397 -11 l 293 125 l 196 -10 l 119 47 l 218 178 l 63 228 l 92 318 l 244 265 l 244 433 l 343 433 "
    },
    "\xe2\x81\x82": {
        ha: 1160,
        x_min: 0,
        x_max: 0,
        o: "m 629 817 l 783 869 l 811 779 l 657 729 l 760 597 l 683 540 l 579 676 l 482 542 l 406 599 l 504 729 l 349 779 l 378 869 l 531 817 l 531 985 l 629 985 m 929 265 l 1083 318 l 1111 228 l 957 178 l 1060 46 l 983 -11 l 879 125 l 782 -10 l 706 47 l 804 178 l 649 228 l 678 318 l 831 265 l 831 433 l 929 433 m 329 265 l 483 318 l 511 228 l 357 178 l 460 46 l 383 -11 l 279 125 l 182 -10 l 106 47 l 204 178 l 49 228 l 78 318 l 231 265 l 231 433 l 329 433 "
    },
    "\xe2\x98\xae": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 1078 493 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 m 171 493 b 225 282 171 415 190 343 l 510 567 l 510 900 b 171 493 315 872 171 706 m 965 493 b 624 900 965 706 818 872 l 624 567 l 910 279 b 965 493 944 342 965 414 m 294 190 b 510 85 351 133 426 96 l 510 406 l 294 190 m 624 85 b 839 189 707 96 781 133 l 624 406 l 624 85 "
    },
    "\xe2\x9c\x95": {
        ha: 1050,
        x_min: 0,
        x_max: 0,
        o: "m 525 410 l 117 -7 l 35 75 l 443 493 l 36 910 l 119 992 l 525 576 l 931 992 l 1014 910 l 606 493 l 1015 75 l 933 -7 "
    },
    "\xe2\x9c\x93": {
        ha: 1347,
        x_min: 0,
        x_max: 0,
        o: "m 426 -24 l 35 414 l 118 493 l 432 150 l 1229 1013 l 1313 931 "
    },
    "\xe2\x96\xb3": {
        ha: 1163,
        x_min: 0,
        x_max: 0,
        o: "m 1163 0 l 0 0 l 583 1006 m 582 779 l 194 104 l 967 104 "
    },
    "\xe2\x84\x93": {
        ha: 565,
        x_min: 0,
        x_max: 0,
        o: "m 49 360 b 143 394 60 363 101 375 l 143 703 b 329 922 143 839 218 922 b 517 714 447 922 517 846 b 274 321 517 571 429 417 l 274 222 b 367 114 274 147 314 115 b 492 154 418 114 463 129 l 492 36 b 361 -7 483 24 444 -7 b 143 215 211 -7 143 88 l 143 261 b 49 238 113 251 82 243 l 49 360 m 386 714 b 332 803 386 774 372 803 b 274 704 300 803 274 778 l 274 476 b 386 714 335 532 386 608 "
    },
    "\xef\xbb\xbf": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xe2\x96\xaf": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 111 985 l 669 985 l 669 0 l 111 0 m 560 110 l 560 875 l 221 875 l 221 110 "
    },
    "\xe2\x96\xb2": {
        ha: 1163,
        x_min: 0,
        x_max: 0,
        o: "m 1163 0 l 0 0 l 583 1006 "
    },
    "\xee\x80\x82": {
        ha: 1318,
        x_min: 0,
        x_max: 0,
        o: "m 1028 783 l 1276 492 l 1096 492 b 582 -21 1096 208 867 -21 b 69 492 299 -21 69 208 b 582 1006 69 776 299 1006 b 835 940 674 1006 760 982 l 783 838 b 583 890 724 871 656 890 b 186 492 361 890 186 714 b 583 92 186 269 361 92 b 979 492 806 92 979 269 l 779 492 "
    },
    "\xee\x80\x80": {
        ha: 1131,
        x_min: 0,
        x_max: 0,
        o: "m 49 285 l 249 285 l 249 985 l 1054 985 l 1054 869 l 364 869 l 364 285 l 564 285 l 307 -22 "
    },
    "\xe2\x96\xa1": {
        ha: 1279,
        x_min: 0,
        x_max: 0,
        o: "m 153 0 l 153 985 l 1126 985 l 1126 0 m 267 104 l 1013 104 l 1013 879 l 267 879 "
    },
    "\xe2\x93\x85": {
        ha: 1140,
        x_min: 0,
        x_max: 0,
        o: "m 63 493 b 568 1006 63 775 288 1006 b 1078 493 850 1006 1078 775 b 568 -21 1078 211 850 -21 b 63 493 288 -21 63 211 m 171 493 b 568 81 171 260 346 81 b 965 493 790 81 965 260 b 568 904 965 726 790 904 b 171 493 346 904 171 726 m 504 418 l 504 218 l 399 218 l 399 776 l 619 776 b 808 597 728 776 808 696 b 619 418 808 497 728 418 m 601 510 b 701 596 664 510 701 544 b 601 685 701 650 664 685 l 504 685 l 504 510 "
    },
    "\0": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xce\xbc": {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 564 0 b 558 81 561 15 558 53 b 361 -21 522 11 439 -21 b 242 7 311 -21 275 -10 l 242 -264 l 111 -264 l 111 668 l 242 668 l 242 267 b 393 94 242 175 283 94 b 551 265 499 94 551 164 l 551 668 l 682 668 l 682 124 b 689 0 682 71 686 18 l 564 0 "
    },
    "\xe2\x88\x95": {
        ha: 561,
        x_min: 0,
        x_max: 0,
        o: "m 126 0 l 0 0 l 435 900 l 561 900 "
    },
    "\xe2\x88\x99": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: "m 97 394 b 193 492 97 449 139 492 b 290 394 247 492 290 449 b 193 299 290 340 247 299 b 97 394 139 299 97 340 "
    },
    "\xe2\x96\xa0": {
        ha: 1279,
        x_min: 0,
        x_max: 0,
        o: "m 153 985 l 1126 985 l 1126 0 l 153 0 "
    },
    "\xe2\x97\x8b": {
        ha: 1154,
        x_min: 0,
        x_max: 0,
        o: "m 63 492 b 576 1007 63 776 292 1007 b 1092 492 861 1007 1092 776 b 576 -22 1092 207 861 -22 b 63 492 292 -22 63 207 m 179 492 b 576 88 179 267 354 88 b 974 492 799 88 974 267 b 576 896 974 717 799 896 b 179 492 354 896 179 717 "
    },
    "\xce\xa9": {
        ha: 1106,
        x_min: 0,
        x_max: 0,
        o: "m 553 883 b 201 539 382 883 201 764 b 493 183 201 338 356 213 l 493 0 l 69 0 l 69 122 l 350 122 b 63 538 208 174 63 324 b 553 1006 63 832 297 1006 b 1043 538 808 1006 1043 832 b 754 122 1043 324 897 174 l 1036 122 l 1036 0 l 613 0 l 613 183 b 904 539 750 213 904 338 b 553 883 904 764 724 883 "
    },
    "\xc2\xad": {
        ha: 501,
        x_min: 0,
        x_max: 0,
        o: "m 63 342 l 63 456 l 439 456 l 439 342 "
    },
    "\xce\x94": {
        ha: 919,
        x_min: 0,
        x_max: 0,
        o: "m 386 985 l 532 985 l 919 0 l 0 0 m 193 125 l 725 125 l 457 829 "
    },
    "\xe2\x80\x87": {
        ha: 853,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xe2\x80\x88": {
        ha: 388,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xe2\x80\x8b": {
        ha: 0,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xcb\x89": {
        ha: 476,
        x_min: 0,
        x_max: 0,
        o: "m 49 801 l 49 914 l 428 914 l 428 801 "
    },
    "\xc8\x9a": {
        ha: 822,
        x_min: 0,
        x_max: 0,
        o: "m 479 858 l 479 0 l 343 0 l 343 858 l 14 858 l 14 985 l 808 985 l 808 858 m 324 -122 b 406 -50 324 -81 363 -50 b 496 -151 446 -50 496 -76 b 338 -307 496 -258 413 -307 l 338 -251 b 428 -185 385 -251 425 -218 b 399 -193 424 -187 411 -193 b 324 -122 356 -193 324 -169 "
    },
    "\xc8\x9b": {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 286 668 l 431 668 l 431 550 l 286 550 l 286 203 b 379 111 286 142 311 111 b 431 117 396 111 419 114 l 431 6 b 342 -7 419 1 386 -7 b 156 183 228 -7 156 63 l 156 550 l 28 550 l 28 668 l 64 668 b 167 771 136 668 167 713 l 167 879 l 286 879 m 203 -122 b 285 -50 203 -81 242 -50 b 375 -151 325 -50 375 -76 b 217 -307 375 -258 292 -307 l 217 -251 b 307 -185 264 -251 304 -218 b 278 -193 303 -187 290 -193 b 203 -122 235 -193 203 -169 "
    },
    "\xe2\x97\x8f": {
        ha: 1154,
        x_min: 0,
        x_max: 0,
        o: "m 63 492 b 576 1007 63 776 292 1007 b 1092 492 861 1007 1092 776 b 576 -22 1092 207 861 -22 b 63 492 292 -22 63 207 "
    }
}, x = "Simon Circular Book", a = 1385, _ = -372, o = -155, n = 80, i = {
    yMin: -232,
    xMin: -46,
    yMax: 1021,
    xMax: 1487
}, h = 1e3, e = {
    format: 0,
    fontFamily: "Simon Circular Book",
    fontSubfamily: "Regular",
    uniqueID: "1.001;LNTO;SimonCircular-Book",
    fullName: "Simon Circular Book",
    version: "Version 1.001;PS 1.1;hotconv 1.0.70;makeotf.lib2.5.58329 DEVELOPMENT",
    postScriptName: "SimonCircular-Book",
    trademark: "Circular is a trademark of Lineto",
    manufacturer: "Lineto",
    designer: "Laurenz Brunner",
    manufacturerURL: "http://www.lineto.com",
    designerURL: "http://www.lineto.com/The+Designers",
    licenceURL: "http://www.lineto.com/Lineto.com/Font+Licensing",
    preferredFamily: "Simon Circular",
    preferredSubfamily: "Book"
}, r = "normal", t = "normal", u = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: o,
    underlineThickness: n,
    boundingBox: i,
    resolution: h,
    original_font_information: e,
    cssFontWeight: r,
    cssFontStyle: t
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l6mco"], null, "parcelRequire79a8")

//# sourceMappingURL=SimonCircular-ETZIFPSM.4d7092b3.js.map
