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
})({"dwsUm":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "50b5be20c9cda5ab";
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

},{}],"3zfjD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ascender", ()=>a);
parcelHelpers.export(exports, "boundingBox", ()=>n);
parcelHelpers.export(exports, "cssFontStyle", ()=>t);
parcelHelpers.export(exports, "cssFontWeight", ()=>r);
parcelHelpers.export(exports, "default", ()=>d);
parcelHelpers.export(exports, "descender", ()=>_);
parcelHelpers.export(exports, "familyName", ()=>x);
parcelHelpers.export(exports, "glyphs", ()=>m);
parcelHelpers.export(exports, "original_font_information", ()=>e);
parcelHelpers.export(exports, "resolution", ()=>h);
parcelHelpers.export(exports, "underlinePosition", ()=>o);
parcelHelpers.export(exports, "underlineThickness", ()=>i);
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var m = {
    0: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 364 918 b 663 461 554 918 663 749 b 349 -15 663 154 549 -15 b 50 449 172 -15 53 150 b 364 918 50 751 181 918 m 357 824 b 172 447 250 824 172 693 b 356 79 172 213 244 79 b 540 456 481 79 540 225 b 357 824 540 678 483 824 "
    },
    1: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 328 789 l 325 789 l 168 704 l 144 797 l 342 903 l 446 903 l 446 0 l 328 0 "
    },
    2: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 63 0 l 63 75 l 158 168 b 494 640 389 388 493 504 b 315 817 494 732 450 817 b 124 740 233 817 165 775 l 85 826 b 340 918 147 879 236 918 b 617 656 535 918 617 785 b 306 171 617 489 496 354 l 233 104 l 233 101 l 639 101 l 639 0 "
    },
    3: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 92 140 b 292 83 126 118 207 83 b 496 258 449 83 497 183 b 263 439 494 385 381 439 l 194 439 l 194 531 l 263 531 b 464 683 351 531 464 576 b 306 819 464 756 418 819 b 125 760 233 819 164 788 l 93 849 b 329 918 140 883 232 918 b 588 703 507 918 588 813 b 421 490 588 610 532 531 l 421 488 b 622 256 532 465 622 382 b 293 -15 622 111 510 -15 b 58 46 192 -15 103 17 "
    },
    4: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 440 0 l 440 246 l 21 246 l 21 326 l 424 903 l 556 903 l 556 342 l 682 342 l 682 246 l 556 246 l 556 0 m 440 342 l 440 643 b 444 785 440 690 442 738 l 440 785 b 365 651 413 732 390 693 l 144 344 l 144 342 "
    },
    5: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 601 800 l 257 800 l 222 568 b 296 574 243 571 263 574 b 490 525 365 574 435 558 b 619 293 561 485 619 407 b 283 -15 619 117 479 -15 b 58 40 185 -15 101 13 l 89 133 b 282 83 126 111 200 83 b 496 279 397 83 496 158 b 236 479 494 396 417 479 b 111 469 185 479 144 474 l 169 903 l 601 903 "
    },
    6: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 578 817 b 486 811 553 818 521 817 b 172 490 294 779 193 639 l 176 490 b 394 594 219 547 294 594 b 667 303 554 594 667 479 b 367 -15 667 138 554 -15 b 47 369 174 -15 47 135 b 200 776 47 547 111 688 b 489 910 275 850 375 896 b 578 917 525 915 556 917 m 367 79 b 543 296 472 79 543 167 b 357 503 543 425 469 503 b 182 392 283 503 215 457 b 168 338 174 378 168 360 b 367 79 171 189 239 79 "
    },
    7: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 649 903 l 649 822 l 256 0 l 129 0 l 521 799 l 521 801 l 79 801 l 79 903 "
    },
    8: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 354 -15 b 51 229 165 -15 51 97 b 231 471 51 343 119 424 l 229 475 b 86 678 129 522 86 600 b 365 918 86 821 207 918 b 628 696 540 918 628 808 b 479 485 628 619 590 538 l 479 481 b 661 247 592 436 661 357 b 354 -15 661 90 526 -15 m 357 74 b 538 235 467 74 538 142 b 339 432 538 344 461 397 b 176 246 233 401 176 332 b 357 74 172 154 242 74 m 358 831 b 201 686 257 831 201 764 b 374 519 201 596 269 547 b 511 683 451 546 511 601 b 358 831 511 756 468 831 "
    },
    9: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 133 86 b 232 90 160 83 190 86 b 421 178 303 100 369 129 b 540 418 481 232 524 311 l 536 418 b 324 321 486 357 414 321 b 57 597 161 321 57 443 b 365 918 57 768 181 918 b 664 538 550 918 664 768 b 508 114 664 339 597 200 b 246 -7 439 46 343 4 b 133 -14 201 -14 163 -15 m 356 825 b 178 606 251 825 178 733 b 351 414 178 493 246 414 b 529 508 433 414 497 454 b 540 553 536 519 540 533 b 356 825 540 707 483 825 "
    },
    " ": {
        ha: 294,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "!": {
        ha: 319,
        x_min: 0,
        x_max: 0,
        o: "m 113 269 l 93 936 l 226 936 l 207 269 m 160 -15 b 78 71 111 -15 78 22 b 160 157 78 121 113 157 b 242 71 210 157 242 121 b 160 -15 242 22 210 -15 "
    },
    '"': {
        ha: 468,
        x_min: 0,
        x_max: 0,
        o: "m 192 951 l 168 618 l 93 618 l 71 951 m 399 951 l 375 618 l 301 618 l 278 951 "
    },
    "#": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 406 354 l 432 556 l 288 556 l 261 354 m 129 0 l 165 272 l 51 272 l 51 354 l 178 354 l 204 556 l 85 556 l 85 638 l 217 638 l 253 903 l 333 903 l 299 638 l 443 638 l 479 903 l 561 903 l 526 638 l 640 638 l 640 556 l 514 556 l 489 354 l 608 354 l 608 272 l 476 272 l 440 0 l 357 0 l 393 272 l 249 272 l 213 0 "
    },
    $: {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 303 -119 l 303 21 b 90 82 222 22 139 47 l 124 175 b 324 115 174 142 246 115 b 489 251 422 115 489 172 b 332 417 489 328 435 375 b 103 657 190 472 103 536 b 313 881 103 772 185 860 l 313 1021 l 399 1021 l 399 886 b 579 838 482 883 539 861 l 544 746 b 369 793 515 763 458 793 b 222 674 263 793 222 729 b 394 515 222 601 274 565 b 610 261 538 457 610 385 b 390 25 610 151 533 49 l 390 -119 "
    },
    "%": {
        ha: 1100,
        x_min: 0,
        x_max: 0,
        o: "m 260 918 b 469 649 386 918 469 821 b 253 364 469 458 369 364 b 42 636 140 364 43 454 b 260 918 42 817 140 918 m 256 844 b 139 640 179 844 139 754 b 256 438 136 525 179 438 b 372 643 336 438 372 524 b 256 844 372 753 340 844 m 244 -15 l 775 918 l 853 918 l 322 -15 m 849 544 b 1057 275 975 544 1057 447 b 842 -10 1057 85 957 -10 b 631 261 729 -10 632 81 b 849 544 631 443 729 544 m 844 471 b 726 267 768 471 726 381 b 844 64 725 151 769 64 b 961 269 925 64 961 150 b 844 471 961 379 929 471 "
    },
    "&": {
        ha: 840,
        x_min: 0,
        x_max: 0,
        o: "m 692 0 b 604 92 665 26 640 53 b 331 -15 524 17 433 -15 b 43 247 149 -15 43 107 b 226 521 43 375 119 463 l 226 525 b 149 721 178 586 149 654 b 386 951 149 835 231 951 b 593 753 503 951 593 874 b 388 503 593 654 536 576 l 388 499 b 615 238 467 407 556 304 b 706 511 658 303 688 393 l 817 511 b 682 165 792 364 751 247 b 836 0 732 113 781 60 m 351 76 b 544 161 432 76 500 113 b 281 456 489 222 385 336 b 160 265 231 424 160 364 b 351 76 160 158 239 76 m 378 868 b 260 732 300 868 260 804 b 331 564 260 665 290 614 b 486 747 425 618 486 668 b 378 868 486 804 454 868 "
    },
    "\xe2\x80\x99": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 256 951 b 125 622 224 835 164 686 l 47 613 b 129 939 78 694 114 839 "
    },
    "(": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 367 964 b 192 396 265 828 192 647 b 367 -168 192 149 268 -29 l 271 -168 b 89 396 183 -53 89 125 b 271 964 90 669 183 847 "
    },
    ")": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 28 -168 b 203 400 126 -31 203 150 b 28 964 203 649 128 826 l 122 964 b 304 399 211 850 304 672 b 122 -168 304 126 211 -50 "
    },
    "*": {
        ha: 576,
        x_min: 0,
        x_max: 0,
        o: "m 457 904 l 325 731 l 325 728 l 535 756 l 535 661 l 325 686 l 325 683 l 458 517 l 371 467 l 288 661 l 285 661 l 194 465 l 115 515 l 247 685 l 247 688 l 42 661 l 42 756 l 246 729 l 246 732 l 115 901 l 200 950 l 286 757 l 289 757 l 374 951 "
    },
    "+": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 458 739 l 458 413 l 772 413 l 772 329 l 458 329 l 458 0 l 369 0 l 369 329 l 56 329 l 56 413 l 369 413 l 369 739 "
    },
    ",": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 22 -171 b 106 161 53 -89 90 60 l 242 175 b 110 -162 210 57 149 -97 "
    },
    "-": {
        ha: 426,
        x_min: 0,
        x_max: 0,
        o: "m 385 421 l 385 331 l 42 331 l 42 421 "
    },
    ".": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 154 -15 b 72 72 106 -15 72 22 b 156 160 72 124 107 160 b 238 72 204 160 238 124 b 154 -15 238 22 206 -15 "
    },
    "/": {
        ha: 476,
        x_min: 0,
        x_max: 0,
        o: "m -1 -56 l 386 951 l 481 951 l 92 -56 "
    },
    ":": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 154 475 b 72 561 106 475 72 513 b 156 649 72 613 107 649 b 238 561 204 649 236 613 b 154 475 238 513 206 475 m 154 -15 b 72 71 106 -15 72 22 b 156 158 72 122 107 158 b 238 71 204 158 236 122 b 154 -15 238 22 206 -15 "
    },
    ";": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 24 -171 b 107 161 54 -89 92 60 l 242 175 b 108 -162 208 57 147 -97 m 165 475 b 83 561 117 475 83 513 b 165 649 83 613 118 649 b 247 561 215 649 247 613 b 165 475 247 513 215 475 "
    },
    "<": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 92 407 l 736 739 l 736 643 l 193 371 l 193 368 l 736 96 l 736 0 l 92 332 "
    },
    "=": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 56 468 l 56 551 l 772 551 l 772 468 m 56 196 l 56 279 l 772 279 l 772 196 "
    },
    ">": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 736 331 l 92 0 l 92 96 l 639 368 l 639 371 l 92 643 l 92 739 l 736 408 "
    },
    "?": {
        ha: 564,
        x_min: 0,
        x_max: 0,
        o: "m 196 265 l 193 301 b 279 542 185 376 210 458 b 376 732 342 615 376 669 b 244 851 376 803 332 850 b 104 808 194 851 139 835 l 71 896 b 269 951 117 929 196 951 b 501 747 429 951 501 853 b 382 506 501 653 449 585 b 303 301 321 433 299 372 l 304 265 m 247 -15 b 165 71 199 -15 165 22 b 249 158 165 122 200 158 b 331 71 297 158 331 122 b 247 -15 331 22 299 -15 "
    },
    "@": {
        ha: 1024,
        x_min: 0,
        x_max: 0,
        o: "m 651 511 b 582 521 638 515 614 521 b 361 271 460 521 361 406 b 453 165 361 210 392 165 b 622 354 533 165 607 268 m 728 -89 b 481 -144 651 -129 574 -144 b 60 289 253 -144 60 22 b 567 822 60 575 258 822 b 971 421 808 822 971 653 b 724 90 971 213 854 90 b 621 213 668 90 617 128 l 615 213 b 419 90 567 131 503 90 b 269 265 339 90 269 156 b 599 594 269 438 406 594 b 747 565 658 594 711 582 l 700 314 b 742 158 679 208 696 160 b 892 413 813 157 892 251 b 556 758 892 614 771 758 b 139 297 329 758 139 579 b 496 -78 139 65 290 -78 b 706 -29 575 -78 649 -61 "
    },
    A: {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 "
    },
    B: {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 326 943 158 935 242 943 b 583 875 447 943 525 922 b 661 710 632 839 661 783 b 503 504 661 619 601 540 l 503 501 b 696 267 592 479 696 406 b 617 79 696 186 664 125 b 293 -8 551 19 446 -8 b 106 3 210 -8 146 -3 m 226 540 l 336 540 b 539 697 464 540 539 607 b 333 850 539 807 456 850 b 226 842 278 850 246 846 m 226 92 b 328 86 250 88 285 86 b 568 268 453 86 568 132 b 326 449 568 396 458 449 l 226 449 "
    },
    C: {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 "
    },
    D: {
        ha: 925,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 363 943 179 935 267 943 b 742 826 536 943 660 903 b 874 490 825 750 874 642 b 739 126 874 338 826 213 b 325 -8 651 39 507 -8 b 106 3 239 -8 167 -4 m 226 96 b 349 89 257 90 301 89 b 747 486 607 89 747 233 b 368 847 749 707 624 847 b 226 835 306 847 258 842 "
    },
    E: {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 "
    },
    F: {
        ha: 676,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 610 936 l 610 835 l 226 835 l 226 524 l 581 524 l 581 424 l 226 424 l 226 0 l 106 0 "
    },
    G: {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 "
    },
    H: {
        ha: 906,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 544 l 679 544 l 679 936 l 801 936 l 801 0 l 679 0 l 679 439 l 226 439 l 226 0 l 106 0 l 106 936 "
    },
    I: {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 "
    },
    J: {
        ha: 514,
        x_min: 0,
        x_max: 0,
        o: "m 297 936 l 418 936 l 418 310 b 135 -15 418 61 296 -15 b 6 7 90 -15 36 -6 l 24 106 b 125 88 49 96 85 88 b 297 319 233 88 297 136 "
    },
    K: {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 485 l 231 485 b 304 585 256 521 281 554 l 590 936 l 740 936 l 401 539 l 767 0 l 624 0 l 315 460 l 226 357 l 226 0 l 106 0 "
    },
    L: {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 101 l 626 101 l 626 0 l 106 0 "
    },
    M: {
        ha: 1117,
        x_min: 0,
        x_max: 0,
        o: "m 894 411 b 881 815 888 542 879 699 l 876 815 b 758 460 844 706 806 589 l 593 6 l 501 6 l 350 451 b 242 815 306 583 268 704 l 239 815 b 221 401 236 699 229 542 l 196 0 l 81 0 l 146 936 l 300 936 l 460 483 b 554 168 499 368 531 265 l 558 168 b 657 483 582 263 615 365 l 824 936 l 978 936 l 1036 0 l 918 0 "
    },
    N: {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 "
    },
    O: {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 "
    },
    P: {
        ha: 739,
        x_min: 0,
        x_max: 0,
        o: "m 106 925 b 338 943 164 935 240 943 b 600 865 457 943 544 915 b 682 669 651 821 682 753 b 610 469 682 585 657 518 b 324 367 546 401 442 367 b 226 375 288 367 254 368 l 226 0 l 106 0 m 226 474 b 326 464 253 467 286 464 b 561 664 472 464 561 535 b 340 847 561 788 474 847 b 226 838 288 847 247 843 "
    },
    Q: {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 878 -137 b 519 -29 751 -104 628 -67 b 463 -15 500 -22 481 -15 b 50 458 240 -7 50 157 b 486 951 50 758 233 951 b 906 478 740 951 906 754 b 639 29 906 238 794 83 l 639 24 b 913 -36 732 0 833 -22 m 476 83 b 778 472 669 83 778 258 b 482 853 778 660 681 853 b 179 461 278 853 178 664 b 476 83 178 263 288 83 "
    },
    R: {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 338 943 167 936 254 943 b 608 867 467 943 550 919 b 682 689 656 825 682 761 b 506 450 682 565 604 483 l 506 446 b 643 257 578 421 621 354 b 715 0 674 126 696 36 l 590 0 b 528 224 575 26 554 107 b 340 406 500 353 450 401 l 226 406 l 226 0 l 106 0 m 226 497 l 350 497 b 561 675 479 497 561 568 b 346 850 561 796 474 849 b 226 839 288 850 246 844 "
    },
    S: {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 "
    },
    T: {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 l 283 0 "
    },
    U: {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 "
    },
    V: {
        ha: 775,
        x_min: 0,
        x_max: 0,
        o: "m 311 0 l 6 936 l 136 936 l 282 475 b 382 125 322 349 357 235 l 385 125 b 492 474 411 233 450 351 l 650 936 l 779 936 l 444 0 "
    },
    W: {
        ha: 1175,
        x_min: 0,
        x_max: 0,
        o: "m 258 0 l 21 936 l 149 936 l 260 463 b 329 139 288 346 313 229 l 332 139 b 408 464 347 232 376 343 l 533 936 l 660 936 l 774 461 b 839 140 800 350 825 239 l 842 140 b 917 464 861 243 888 347 l 1040 936 l 1164 936 l 899 0 l 772 0 l 654 488 b 593 793 625 607 606 699 l 590 793 b 518 488 574 700 553 608 l 385 0 "
    },
    X: {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 618 0 l 499 207 b 390 392 450 286 419 338 l 388 392 b 286 206 361 338 335 288 l 174 0 l 35 0 l 321 474 l 46 936 l 186 936 l 310 717 b 396 558 344 656 371 608 l 400 558 b 485 717 426 614 450 657 l 613 936 l 751 936 l 467 481 l 758 0 "
    },
    Y: {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 "
    },
    Z: {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 42 71 l 561 831 l 561 835 l 86 835 l 86 936 l 718 936 l 718 863 l 201 106 l 201 101 l 725 101 l 725 0 l 42 0 "
    },
    "[": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 114 -156 l 114 951 l 368 951 l 368 875 l 208 875 l 208 -79 l 368 -79 l 368 -156 "
    },
    "\\": {
        ha: 474,
        x_min: 0,
        x_max: 0,
        o: "m 381 -56 l 3 951 l 97 951 l 475 -56 "
    },
    "]": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 281 953 l 281 -156 l 26 -156 l 26 -79 l 186 -79 l 186 876 l 26 876 l 26 953 "
    },
    "^": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 647 263 l 415 801 l 413 801 l 181 263 l 83 263 l 371 903 l 457 903 l 744 263 "
    },
    _: {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 694 -104 l 694 -174 l 0 -174 l 0 -104 "
    },
    "\xe2\x80\x98": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 49 613 b 178 943 81 729 140 879 l 256 951 b 174 626 226 869 189 726 "
    },
    a: {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 "
    },
    b: {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 96 0 b 101 174 99 46 101 114 l 101 986 l 222 986 l 222 564 l 225 564 b 454 688 268 639 346 688 b 738 344 621 688 739 549 b 436 -15 738 104 586 -15 b 211 111 339 -15 261 22 l 207 111 l 201 0 m 222 269 b 228 225 222 254 225 239 b 411 82 251 140 322 82 b 615 340 539 82 615 186 b 415 590 615 475 546 590 b 229 440 332 590 254 533 b 222 390 226 426 222 410 "
    },
    c: {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 "
    },
    d: {
        ha: 783,
        x_min: 0,
        x_max: 0,
        o: "m 682 986 l 682 174 b 688 0 682 114 683 46 l 578 0 l 572 117 l 569 117 b 340 -15 532 42 450 -15 b 53 326 178 -15 53 122 b 354 688 51 550 190 688 b 557 585 457 688 526 639 l 560 585 l 560 986 m 560 399 b 554 450 560 414 558 435 b 378 592 536 528 469 592 b 176 332 251 592 176 481 b 375 83 176 196 243 83 b 554 229 457 83 532 138 b 560 282 558 246 560 263 "
    },
    e: {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 "
    },
    f: {
        ha: 406,
        x_min: 0,
        x_max: 0,
        o: "m 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 704 b 192 939 114 799 135 885 b 356 1001 238 983 299 1001 b 460 982 399 1001 436 992 l 443 888 b 365 903 425 896 400 903 b 235 708 261 903 235 811 l 235 672 l 397 672 l 397 579 l 235 579 l 235 0 "
    },
    g: {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 681 672 b 675 488 678 624 675 569 l 675 97 b 579 -210 675 -57 644 -151 b 335 -290 514 -271 419 -290 b 111 -235 254 -290 165 -271 l 142 -142 b 339 -194 186 -169 256 -194 b 556 40 464 -194 556 -129 l 556 115 l 553 115 b 339 3 515 53 443 3 b 53 331 172 3 53 144 b 356 688 53 558 201 688 b 565 571 472 688 536 626 l 568 571 l 574 672 m 554 407 b 547 463 554 428 553 446 b 376 592 525 533 465 592 b 176 338 260 592 176 493 b 375 96 176 206 243 96 b 544 221 450 96 518 143 b 554 286 551 242 554 265 "
    },
    h: {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 986 l 224 986 l 224 567 l 226 567 b 314 653 246 601 276 632 b 439 688 350 674 393 688 b 674 400 529 688 674 632 l 674 0 l 551 0 l 551 386 b 396 586 551 494 511 586 b 232 464 317 586 254 531 b 224 406 225 447 224 429 l 224 0 l 101 0 "
    },
    i: {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 163 938 b 238 861 208 938 238 904 b 160 786 239 819 208 786 b 86 861 117 786 86 819 b 163 938 86 904 118 938 "
    },
    j: {
        ha: 338,
        x_min: 0,
        x_max: 0,
        o: "m -62 -194 b 71 -143 -7 -190 42 -175 b 117 110 104 -104 117 -51 l 117 672 l 239 672 l 239 63 b 158 -214 239 -68 218 -153 b -50 -290 104 -268 15 -290 m 179 938 b 253 861 224 938 253 904 b 176 786 254 821 225 786 b 101 861 131 786 101 821 b 179 938 101 904 133 938 "
    },
    k: {
        ha: 651,
        x_min: 0,
        x_max: 0,
        o: "m 222 364 l 225 364 b 285 440 242 388 265 417 l 482 672 l 629 672 l 369 396 l 665 0 l 517 0 l 285 322 l 222 253 l 222 0 l 101 0 l 101 986 l 222 986 "
    },
    l: {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 101 986 l 224 986 l 224 0 l 101 0 "
    },
    m: {
        ha: 1158,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 203 672 l 208 564 l 213 564 b 424 688 250 628 313 688 b 614 553 515 688 585 632 l 617 553 b 692 640 638 590 664 619 b 840 688 732 671 776 688 b 1061 396 929 688 1061 629 l 1061 0 l 942 0 l 942 381 b 796 588 942 510 894 588 b 651 476 726 588 672 536 b 642 415 646 460 642 438 l 642 0 l 522 0 l 522 403 b 382 588 522 510 475 588 b 231 465 306 588 250 526 b 221 406 224 447 221 426 l 221 0 l 101 0 "
    },
    n: {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 "
    },
    o: {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 "
    },
    p: {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 101 453 b 96 672 101 539 99 608 l 206 672 l 211 557 l 214 557 b 453 688 264 639 343 688 b 738 346 615 688 738 550 b 432 -15 738 104 590 -15 b 225 90 343 -15 265 24 l 222 90 l 222 -275 l 101 -275 m 222 274 b 228 224 222 256 225 239 b 411 81 250 139 324 81 b 615 340 540 81 615 186 b 415 590 615 475 544 590 b 231 439 332 590 254 531 b 222 389 226 424 222 406 "
    },
    q: {
        ha: 782,
        x_min: 0,
        x_max: 0,
        o: "m 560 104 l 557 104 b 338 -15 521 38 446 -15 b 53 325 181 -15 53 121 b 357 688 53 576 215 688 b 564 571 461 688 531 636 l 567 571 l 571 672 l 686 672 b 682 488 683 615 682 557 l 682 -275 l 560 -275 m 560 400 b 554 451 560 417 558 436 b 379 590 536 526 471 590 b 176 332 253 590 176 483 b 375 82 176 199 240 82 b 550 215 454 82 522 131 b 560 274 556 232 560 256 "
    },
    r: {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 101 463 b 96 672 101 542 100 610 l 203 672 l 207 540 l 213 540 b 399 688 243 631 317 688 b 433 683 413 688 422 686 l 433 568 b 392 572 421 571 408 572 b 228 415 306 572 244 507 b 222 358 225 399 222 379 l 222 0 l 101 0 "
    },
    s: {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 "
    },
    t: {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 249 865 l 249 672 l 424 672 l 424 579 l 249 579 l 249 217 b 340 86 249 133 272 86 b 411 94 372 86 396 90 l 417 3 b 308 -14 393 -7 356 -14 b 176 38 251 -14 206 4 b 129 213 142 74 129 133 l 129 579 l 25 579 l 25 672 l 129 672 l 129 833 "
    },
    u: {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 "
    },
    v: {
        ha: 668,
        x_min: 0,
        x_max: 0,
        o: "m 149 672 l 281 294 b 335 122 303 233 321 178 l 339 122 b 396 294 354 178 374 233 l 526 672 l 654 672 l 390 0 l 274 0 l 18 672 "
    },
    w: {
        ha: 1022,
        x_min: 0,
        x_max: 0,
        o: "m 150 672 l 239 331 b 289 117 258 256 276 186 l 293 117 b 353 329 308 185 331 257 l 463 672 l 565 672 l 669 336 b 729 117 694 256 714 185 l 733 117 b 785 335 744 185 763 256 l 881 672 l 1001 672 l 785 0 l 674 0 l 571 321 b 511 542 547 396 528 463 l 508 542 b 447 319 492 461 471 392 l 339 0 l 228 0 l 25 672 "
    },
    x: {
        ha: 643,
        x_min: 0,
        x_max: 0,
        o: "m 158 672 l 254 528 b 322 418 279 490 300 456 l 326 418 b 393 529 349 458 371 493 l 488 672 l 619 672 l 390 347 l 626 0 l 488 0 l 389 151 b 317 268 363 190 340 228 l 314 268 b 243 151 292 228 268 192 l 146 0 l 11 0 l 250 343 l 22 672 "
    },
    y: {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 "
    },
    z: {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 25 71 l 329 467 b 417 571 358 503 386 535 l 417 574 l 53 574 l 53 672 l 565 672 l 564 596 l 264 206 b 178 100 236 168 208 135 l 178 97 l 571 97 l 571 0 l 25 0 "
    },
    "{": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 39 435 b 151 538 138 435 151 489 b 140 654 151 576 146 615 b 129 769 135 693 129 731 b 331 951 129 897 213 951 l 360 951 l 360 875 l 335 875 b 225 756 253 875 225 831 b 235 657 225 724 229 690 b 244 551 240 622 244 589 b 144 401 246 463 207 418 l 144 399 b 244 247 207 383 246 336 b 235 142 244 210 240 175 b 225 42 229 107 225 75 b 335 -79 225 -36 257 -79 l 360 -79 l 360 -156 l 331 -156 b 129 35 215 -156 129 -106 b 140 149 129 72 135 111 b 151 261 146 186 151 224 b 39 364 151 304 138 364 "
    },
    "|": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 213 1042 l 213 -347 l 119 -347 l 119 1042 "
    },
    "}": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 356 364 b 243 261 257 364 243 304 b 254 149 243 224 249 186 b 265 35 260 111 265 72 b 64 -156 265 -106 178 -156 l 35 -156 l 35 -79 l 58 -79 b 169 42 136 -78 169 -36 b 160 142 169 75 164 107 b 149 247 154 175 149 210 b 249 399 149 336 188 383 l 249 401 b 149 551 188 418 149 463 b 160 657 149 589 154 622 b 169 756 164 690 169 724 b 60 875 169 831 140 874 l 35 875 l 35 951 l 63 951 b 265 769 181 951 265 897 b 254 654 265 731 260 693 b 243 538 249 615 243 576 b 356 435 243 489 257 435 "
    },
    "~": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 68 292 b 233 501 63 431 138 501 b 429 439 292 501 336 483 b 603 381 500 406 551 381 b 678 497 653 381 676 421 l 761 497 b 601 288 768 342 688 288 b 400 349 546 288 496 304 b 233 410 335 381 283 410 b 150 292 183 410 153 375 "
    },
    "\xc2\xa1": {
        ha: 319,
        x_min: 0,
        x_max: 0,
        o: "m 93 -275 l 113 388 l 207 388 l 228 -275 m 161 678 b 242 592 210 678 242 642 b 160 506 242 543 210 506 b 78 592 111 506 78 543 b 161 678 78 642 113 678 "
    },
    "\xc2\xa2": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 372 -19 l 372 121 b 171 218 283 132 221 164 b 93 453 124 271 93 351 b 372 796 93 632 203 768 l 372 935 l 458 935 l 458 799 b 610 764 521 799 578 781 l 582 671 b 438 706 554 688 507 706 b 215 458 300 706 215 594 b 432 214 215 304 310 214 b 590 249 508 214 557 233 l 613 161 b 458 121 585 146 526 124 l 458 -19 "
    },
    "\xc2\xa3": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 78 0 l 78 69 b 236 313 171 117 236 208 b 229 410 236 346 235 374 l 86 410 l 86 497 l 215 497 b 200 647 208 539 200 593 b 467 918 200 811 313 918 b 618 883 539 918 589 901 l 590 792 b 467 819 565 806 525 819 b 314 646 358 819 314 744 b 331 497 314 586 322 542 l 531 497 l 531 410 l 342 410 b 336 254 346 357 349 304 b 240 104 321 194 288 144 l 240 101 l 654 101 l 654 0 "
    },
    "\xe2\x81\x84": {
        ha: 168,
        x_min: 0,
        x_max: 0,
        o: "m -218 -15 l 308 918 l 388 918 l -140 -15 "
    },
    "\xc2\xa5": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 290 0 l 290 243 l 75 243 l 75 313 l 290 313 l 290 413 l 75 413 l 75 482 l 256 482 l 22 903 l 153 903 l 297 617 b 353 490 319 569 336 532 l 357 490 b 413 619 371 529 389 572 l 563 903 l 690 903 l 442 482 l 622 482 l 622 413 l 406 413 l 406 313 l 622 313 l 622 243 l 406 243 l 406 0 "
    },
    "\xc6\x92": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 154 557 l 292 557 l 300 621 b 565 918 317 758 378 918 b 660 897 607 917 640 908 l 638 808 b 565 822 617 817 593 822 b 418 629 471 822 429 732 l 410 557 l 576 557 l 576 469 l 399 469 l 365 185 b 124 -117 343 6 286 -117 b 15 -94 78 -117 39 -107 l 38 -7 b 115 -22 61 -18 86 -22 b 250 196 201 -22 233 54 l 282 469 l 154 469 "
    },
    "\xc2\xa7": {
        ha: 721,
        x_min: 0,
        x_max: 0,
        o: "m 181 488 b 328 356 181 438 218 396 b 486 289 399 331 454 310 b 539 396 521 314 539 353 b 415 525 539 449 506 493 b 244 596 360 546 289 569 b 181 488 200 564 181 529 m 551 824 b 385 868 515 846 460 868 b 240 765 303 868 240 828 b 414 632 240 693 310 667 b 640 413 542 590 640 538 b 550 244 640 340 606 288 b 603 122 574 225 603 179 b 339 -86 603 -24 468 -86 b 121 -28 254 -86 174 -67 l 154 51 b 338 -6 188 28 256 -6 b 493 108 426 -6 493 35 b 324 253 493 174 453 208 b 82 472 181 301 82 353 b 183 635 82 525 110 588 b 132 751 156 657 133 704 b 389 949 132 874 246 949 b 581 903 467 949 533 929 "
    },
    "\xc2\xa4": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 356 742 b 517 686 421 742 478 719 l 615 790 l 676 726 l 568 628 b 617 465 594 590 617 532 b 568 294 617 389 593 329 l 672 192 l 610 131 l 515 238 b 353 178 474 197 408 178 b 194 233 296 178 232 199 l 101 131 l 42 192 l 142 290 b 90 457 114 326 90 389 b 144 628 90 529 115 589 l 40 726 l 101 790 l 197 685 b 356 742 236 719 294 742 m 354 654 b 189 458 251 654 189 567 b 353 265 189 324 282 265 b 518 464 431 265 518 321 b 354 654 518 560 461 654 "
    },
    "'": {
        ha: 261,
        x_min: 0,
        x_max: 0,
        o: "m 192 951 l 168 618 l 93 618 l 71 951 "
    },
    "\xe2\x80\x9c": {
        ha: 492,
        x_min: 0,
        x_max: 0,
        o: "m 47 613 b 178 943 79 729 139 879 l 256 951 b 174 626 225 869 189 726 m 254 613 b 383 943 285 729 346 879 l 461 951 b 379 626 431 869 394 726 "
    },
    "\xc2\xab": {
        ha: 582,
        x_min: 0,
        x_max: 0,
        o: "m 136 350 l 322 94 l 224 94 l 40 350 l 224 606 l 322 606 m 364 350 l 550 94 l 451 94 l 268 350 l 451 606 l 550 606 "
    },
    "\xe2\x80\xb9": {
        ha: 354,
        x_min: 0,
        x_max: 0,
        o: "m 136 350 l 322 94 l 224 94 l 40 350 l 224 606 l 322 606 "
    },
    "\xe2\x80\xba": {
        ha: 354,
        x_min: 0,
        x_max: 0,
        o: "m 32 606 l 129 606 l 315 350 l 131 94 l 32 94 l 218 350 "
    },
    "\xef\xac\x81": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 708 b 407 1001 114 886 218 1001 b 578 957 469 1001 543 982 l 543 864 b 401 903 514 885 461 903 b 235 706 272 903 235 813 l 235 672 l 625 672 l 625 0 l 504 0 l 504 579 l 235 579 l 235 0 "
    },
    "\xef\xac\x82": {
        ha: 726,
        x_min: 0,
        x_max: 0,
        o: "m 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 701 b 208 933 114 794 146 878 b 424 1001 261 978 331 1001 b 625 957 501 1001 575 985 l 625 0 l 504 0 l 504 889 b 404 907 483 900 451 907 b 235 706 276 907 235 814 l 235 672 l 392 672 l 392 579 l 235 579 l 235 0 "
    },
    "\xe2\x80\x93": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 653 394 l 653 311 l 42 311 l 42 394 "
    },
    "\xe2\x80\xa0": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 404 936 l 393 643 l 635 653 l 635 553 l 393 564 l 404 -69 l 290 -69 l 301 564 l 60 553 l 60 653 l 301 643 l 290 936 "
    },
    "\xe2\x80\xa1": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 404 936 l 394 657 l 635 668 l 635 568 l 394 578 l 394 294 l 635 306 l 635 206 l 394 215 l 404 -69 l 292 -69 l 299 215 l 60 206 l 60 306 l 300 294 l 300 578 l 60 568 l 60 668 l 300 657 l 292 936 "
    },
    "\xc2\xb7": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 143 278 b 61 365 94 278 60 315 b 144 453 61 415 96 453 b 226 365 193 453 225 417 b 143 278 226 315 193 278 "
    },
    "\xc2\xb6": {
        ha: 711,
        x_min: 0,
        x_max: 0,
        o: "m 319 -68 l 319 367 l 310 367 b 47 633 200 367 47 456 b 429 939 47 776 125 939 b 592 926 503 939 557 935 l 592 -68 l 506 -68 l 506 854 l 407 854 l 407 -68 "
    },
    "\xe2\x80\xa2": {
        ha: 392,
        x_min: 0,
        x_max: 0,
        o: "m 196 218 b 50 363 115 218 50 281 b 196 508 49 444 115 508 b 342 364 276 508 342 444 b 196 218 342 282 278 218 "
    },
    "\xe2\x80\x9a": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 29 -164 b 110 161 58 -82 96 63 l 236 175 b 106 -154 204 58 144 -90 "
    },
    "\xe2\x80\x9e": {
        ha: 494,
        x_min: 0,
        x_max: 0,
        o: "m 28 -164 b 110 161 58 -82 94 63 l 235 175 b 106 -154 204 58 143 -90 m 233 -164 b 315 161 264 -82 300 63 l 442 175 b 311 -154 410 58 350 -90 "
    },
    "\xe2\x80\x9d": {
        ha: 492,
        x_min: 0,
        x_max: 0,
        o: "m 254 951 b 125 622 222 835 163 686 l 47 613 b 129 939 76 694 114 839 m 460 951 b 331 622 428 835 368 686 l 253 613 b 335 939 283 694 319 839 "
    },
    "\xc2\xbb": {
        ha: 582,
        x_min: 0,
        x_max: 0,
        o: "m 32 606 l 131 606 l 315 350 l 131 94 l 33 94 l 218 350 m 258 606 l 357 606 l 542 350 l 357 94 l 260 94 l 444 350 "
    },
    "\xe2\x80\xa6": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 232 -15 b 150 72 183 -15 149 22 b 232 160 150 124 183 160 b 314 72 282 160 314 124 b 232 -15 314 22 282 -15 m 694 -15 b 613 72 646 -15 611 22 b 696 160 613 124 647 160 b 778 72 744 160 776 124 b 694 -15 778 22 744 -15 m 1157 -15 b 1075 72 1108 -15 1075 22 b 1158 160 1075 124 1110 160 b 1240 72 1207 160 1240 124 b 1157 -15 1240 22 1208 -15 "
    },
    "\xe2\x80\xb0": {
        ha: 1606,
        x_min: 0,
        x_max: 0,
        o: "m 849 544 b 1057 275 975 544 1057 447 b 842 -10 1057 85 957 -10 b 631 261 729 -10 632 81 b 849 544 631 443 729 544 m 844 471 b 726 267 768 471 726 381 b 844 64 725 151 768 64 b 961 269 925 64 961 150 b 844 471 961 379 929 471 m 1354 544 b 1564 275 1481 544 1564 447 b 1347 -10 1564 85 1464 -10 b 1136 261 1235 -10 1138 81 b 1354 544 1136 443 1235 544 m 1351 471 b 1233 267 1275 471 1233 381 b 1350 64 1231 151 1274 64 b 1467 269 1432 64 1467 150 b 1351 471 1467 379 1436 471 m 260 918 b 469 649 386 918 469 821 b 253 364 469 458 369 364 b 42 636 140 364 43 454 b 260 918 42 817 140 918 m 256 844 b 139 640 179 844 139 754 b 256 438 136 525 179 438 b 372 643 336 438 372 524 b 256 844 372 753 340 844 m 244 -15 l 775 918 l 853 918 l 322 -15 "
    },
    "\xc2\xbf": {
        ha: 564,
        x_min: 0,
        x_max: 0,
        o: "m 329 679 b 411 593 379 679 411 643 b 329 506 411 544 379 506 b 247 593 279 506 247 544 b 329 679 247 643 281 679 m 382 396 l 386 360 b 299 122 394 285 368 206 b 203 -67 236 47 203 -4 b 335 -185 203 -137 246 -185 b 475 -142 383 -185 439 -169 l 508 -231 b 308 -286 461 -262 382 -286 b 76 -82 150 -286 76 -187 b 197 157 76 13 129 79 b 275 360 257 231 279 289 l 274 396 "
    },
    "`": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 165 963 l 286 764 l 200 764 l 31 963 "
    },
    "\xc2\xb4": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 397 963 l 228 764 l 140 764 l 263 963 "
    },
    "\xcb\x86": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 250 963 l 383 764 l 289 764 l 208 896 l 206 896 l 125 764 l 35 764 l 165 963 "
    },
    "\xcb\x9c": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 38 788 b 132 932 35 878 72 932 b 218 901 163 932 186 919 b 276 878 240 889 260 878 b 315 938 299 878 313 890 l 381 938 b 285 797 382 844 350 797 b 200 825 256 797 229 810 b 140 850 172 842 157 850 b 104 788 118 850 107 826 "
    },
    "\xc2\xaf": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 365 893 l 365 814 l 53 814 l 53 893 "
    },
    "\xcb\x98": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 108 947 b 208 851 117 893 151 851 b 308 947 274 851 304 901 l 381 947 b 208 775 381 844 313 775 b 36 947 86 775 36 861 "
    },
    "\xcb\x99": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 194 792 b 124 863 153 792 124 825 b 194 935 124 903 154 935 b 263 863 233 935 263 903 b 194 792 263 825 235 792 "
    },
    "\xc2\xa8": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 81 792 b 10 863 39 792 10 825 b 81 933 10 901 42 933 b 149 863 119 933 149 903 b 81 792 149 825 121 792 m 338 792 b 268 863 296 792 268 825 b 338 933 268 901 299 933 b 406 863 376 933 406 903 b 338 792 406 825 378 792 "
    },
    "\xcb\x9a": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 197 746 b 57 872 114 746 57 801 b 199 1004 57 946 111 1004 b 336 874 282 1004 336 947 b 197 746 336 800 276 746 m 196 797 b 268 875 240 797 268 833 b 196 951 268 917 240 951 b 128 872 153 951 128 915 b 196 797 128 836 156 797 "
    },
    "\xc2\xb8": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 264 3 l 218 -69 b 315 -165 269 -76 315 -112 b 171 -278 315 -247 247 -278 b 76 -254 136 -278 100 -268 l 97 -194 b 172 -215 119 -208 147 -215 b 232 -171 203 -215 232 -204 b 124 -112 231 -135 189 -118 l 189 3 "
    },
    "\xcb\x9d": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 290 963 l 138 772 l 61 772 l 171 963 m 490 963 l 338 772 l 261 772 l 371 963 "
    },
    "\xcb\x9b": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 250 6 b 176 -133 229 -21 176 -81 b 246 -203 176 -178 206 -203 b 310 -190 271 -203 293 -197 l 329 -253 b 218 -285 301 -275 253 -285 b 88 -165 140 -285 88 -243 b 171 6 88 -97 138 -31 "
    },
    "\xcb\x87": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 165 764 l 32 963 l 126 963 l 208 831 l 211 831 l 293 963 l 385 963 l 254 764 "
    },
    "\xe2\x80\x94": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 1347 394 l 1347 311 l 42 311 l 42 394 "
    },
    "\xc3\x86": {
        ha: 1094,
        x_min: 0,
        x_max: 0,
        o: "m -1 0 l 426 936 l 1013 936 l 1013 835 l 614 835 l 650 536 l 999 536 l 999 436 l 665 436 l 707 101 l 1050 101 l 1050 0 l 603 0 l 561 331 l 274 331 l 124 0 m 547 428 l 517 697 b 500 849 511 742 503 801 l 494 849 b 435 701 478 804 456 751 l 314 428 "
    },
    "\xc2\xaa": {
        ha: 481,
        x_min: 0,
        x_max: 0,
        o: "m 340 369 l 332 428 l 329 428 b 189 363 303 394 254 363 b 46 494 97 363 46 422 b 325 653 46 594 147 657 l 325 667 b 222 753 325 689 311 753 b 103 715 178 753 135 740 l 81 775 b 239 821 121 804 179 821 b 415 626 378 821 415 726 l 415 478 b 424 369 415 440 418 403 m 326 593 b 138 500 239 594 138 579 b 218 429 138 454 175 429 b 313 479 260 429 294 453 b 326 517 321 493 326 507 "
    },
    "\xc5\x81": {
        ha: 661,
        x_min: 0,
        x_max: 0,
        o: "m 111 0 l 111 375 l -6 289 l -6 383 l 111 468 l 111 936 l 232 936 l 232 551 l 418 686 l 418 590 l 232 457 l 232 101 l 632 101 l 632 0 "
    },
    "\xc3\x98": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 88 -6 l 174 117 b 50 463 96 200 50 324 b 482 951 50 758 238 951 b 715 878 568 951 649 926 l 797 990 l 871 940 l 785 821 b 906 476 863 736 906 614 b 481 -15 906 150 704 -15 b 243 60 392 -15 310 11 l 156 -60 m 656 789 b 481 854 608 829 550 854 b 174 469 276 854 174 665 b 243 218 174 365 201 290 l 244 219 m 303 149 b 478 82 349 106 403 82 b 782 472 674 82 782 261 b 717 715 782 551 765 636 l 713 715 "
    },
    "\xc5\x92": {
        ha: 1242,
        x_min: 0,
        x_max: 0,
        o: "m 1190 0 l 711 0 b 619 -8 683 0 653 -4 b 504 -15 585 -11 549 -15 b 50 461 214 -15 50 193 b 511 951 50 769 242 951 b 633 944 560 951 599 947 b 722 936 668 940 697 936 l 1169 936 l 1169 835 l 785 835 l 785 539 l 1147 539 l 1147 438 l 785 438 l 785 101 l 1190 101 m 663 832 b 515 853 626 844 582 853 b 179 467 306 853 178 696 b 526 83 178 239 307 83 b 663 101 578 83 632 90 "
    },
    "\xc2\xba": {
        ha: 493,
        x_min: 0,
        x_max: 0,
        o: "m 249 821 b 468 594 383 821 468 725 b 246 363 467 435 353 363 b 25 588 122 363 25 451 b 249 821 25 732 129 821 m 246 751 b 118 590 157 751 118 665 b 247 432 118 499 178 432 b 375 592 321 432 375 496 b 246 751 375 661 338 751 "
    },
    "\xc3\xa6": {
        ha: 1074,
        x_min: 0,
        x_max: 0,
        o: "m 569 324 b 783 79 565 164 657 79 b 967 118 876 79 929 100 l 989 32 b 768 -15 935 3 857 -15 b 513 133 654 -15 551 39 l 510 133 b 260 -15 467 40 375 -15 b 50 176 119 -15 50 79 b 456 419 50 332 194 422 l 456 447 b 299 597 456 481 435 597 b 126 546 235 597 167 574 l 97 626 b 307 688 157 664 240 688 b 524 544 428 688 496 631 l 526 544 b 761 688 572 633 656 688 b 1024 378 967 688 1024 489 b 1019 324 1024 357 1022 336 m 457 338 b 171 186 328 340 171 318 b 288 75 171 115 224 75 b 450 190 375 75 431 129 b 457 239 456 206 457 222 m 906 411 b 749 600 910 479 872 600 b 568 411 628 600 572 488 "
    },
    "\xc4\xb1": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 "
    },
    "\xc5\x82": {
        ha: 336,
        x_min: 0,
        x_max: 0,
        o: "m 107 0 l 107 400 l 13 319 l 13 415 l 107 497 l 107 986 l 229 986 l 229 590 l 328 675 l 328 578 l 229 493 l 229 0 "
    },
    "\xc3\xb8": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 383 688 b 554 639 444 688 504 671 l 613 722 l 667 685 l 608 599 b 710 342 674 536 710 446 b 382 -15 710 94 539 -15 b 210 32 319 -15 258 0 l 150 -53 l 99 -11 l 157 72 b 53 332 92 133 53 222 b 383 688 53 556 200 688 m 499 556 b 381 596 468 581 429 596 b 171 335 231 596 171 457 b 221 167 171 276 186 215 l 224 165 m 265 115 b 378 76 297 88 336 76 b 590 338 506 76 590 186 b 543 501 590 383 579 449 l 540 501 "
    },
    "\xc5\x93": {
        ha: 1199,
        x_min: 0,
        x_max: 0,
        o: "m 688 315 b 911 81 689 163 783 81 b 1092 118 994 81 1046 99 l 1114 31 b 896 -15 1060 0 969 -15 b 631 143 779 -15 683 33 l 626 143 b 367 -15 576 35 471 -15 b 53 332 189 -15 53 119 b 375 688 53 550 194 688 b 629 526 489 688 588 629 l 632 526 b 876 688 682 633 772 688 b 1149 372 1092 688 1149 492 b 1144 315 1149 349 1147 328 m 376 596 b 176 335 229 596 176 450 b 376 76 176 189 260 76 b 574 336 494 76 574 182 b 376 596 574 464 515 596 m 1031 403 b 867 599 1032 478 1000 599 b 688 403 746 599 694 488 "
    },
    "\xc3\x9f": {
        ha: 761,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 628 b 200 931 101 786 139 875 b 404 1001 253 978 319 1001 b 651 767 536 1001 651 918 b 619 653 651 718 635 675 b 519 540 557 626 519 588 b 590 419 519 493 547 464 b 703 206 646 364 703 306 b 454 -15 703 75 608 -15 b 307 14 403 -15 347 -7 l 329 107 b 446 79 365 89 404 79 b 582 196 535 79 582 132 b 507 339 582 254 557 293 b 399 524 449 394 399 446 b 522 694 399 594 443 656 b 535 754 529 711 535 731 b 390 906 535 850 476 906 b 224 633 283 906 224 831 l 224 0 "
    },
    "\xc2\xb9": {
        ha: 339,
        x_min: 0,
        x_max: 0,
        o: "m 149 615 l 149 1071 l 146 1071 l 46 1024 l 31 1096 l 161 1157 l 246 1157 l 246 615 "
    },
    "\xc2\xac": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 772 554 l 772 168 l 683 168 l 683 471 l 56 471 l 56 554 "
    },
    "\xc2\xb5": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 556 104 b 363 -12 528 51 463 -12 b 215 61 301 -12 244 10 l 215 -22 b 231 -275 215 -96 217 -219 l 121 -275 b 101 -28 107 -233 101 -135 l 101 672 l 222 672 l 222 275 b 374 85 222 171 267 85 b 535 197 454 85 513 143 b 546 260 542 215 546 238 l 546 672 l 667 672 l 667 185 b 731 79 667 111 682 82 l 721 -10 b 679 -15 707 -14 699 -15 b 560 104 619 -15 571 18 "
    },
    "\xe2\x84\xa2": {
        ha: 860,
        x_min: 0,
        x_max: 0,
        o: "m 358 936 l 358 874 l 238 874 l 238 558 l 163 558 l 163 874 l 42 874 l 42 936 m 767 558 l 753 781 b 750 886 751 810 751 846 l 746 886 b 714 774 736 853 725 808 l 646 564 l 568 564 l 500 779 b 474 886 493 808 482 853 l 469 886 b 467 781 469 851 468 815 l 453 558 l 381 558 l 408 936 l 521 936 l 586 751 b 611 656 594 722 601 694 l 613 656 b 639 750 622 690 631 722 l 704 936 l 813 936 l 842 558 "
    },
    "\xc3\x90": {
        ha: 932,
        x_min: 0,
        x_max: 0,
        o: "m -3 524 l 113 524 l 113 926 b 369 947 186 939 274 947 b 749 831 542 947 667 907 b 881 490 832 754 881 644 b 746 125 881 336 833 213 b 332 -10 658 38 513 -10 b 113 0 244 -10 174 -7 l 113 426 l -3 426 m 483 426 l 233 426 l 233 93 b 354 88 264 89 308 88 b 754 489 615 88 754 231 b 375 850 756 713 631 850 b 233 838 313 850 265 844 l 233 524 l 483 524 "
    },
    "\xc2\xbd": {
        ha: 1054,
        x_min: 0,
        x_max: 0,
        o: "m 158 369 l 158 826 l 156 826 l 56 778 l 40 850 l 169 911 l 256 911 l 256 369 m 165 -15 l 692 918 l 769 918 l 243 -15 m 611 51 l 699 133 b 874 374 814 238 874 303 b 768 471 874 426 840 471 b 651 428 719 471 678 446 l 622 490 b 792 549 660 522 722 549 b 976 392 924 549 976 467 b 792 118 976 288 896 213 l 749 79 l 749 76 l 986 76 l 986 0 l 611 0 "
    },
    "\xc2\xb1": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 458 794 l 458 524 l 772 524 l 772 440 l 458 440 l 458 163 l 369 163 l 369 440 l 56 440 l 56 524 l 369 524 l 369 794 m 772 83 l 772 0 l 56 0 l 56 83 "
    },
    "\xc3\x9e": {
        ha: 738,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 225 936 l 225 753 b 358 764 263 760 308 764 b 606 688 468 764 549 738 b 682 506 654 642 682 578 b 331 210 682 308 533 210 b 225 217 292 210 254 213 l 225 0 l 106 0 m 225 315 b 329 307 257 308 293 307 b 561 493 479 307 561 379 b 347 668 561 614 475 668 b 225 657 292 668 247 663 "
    },
    "\xc2\xbc": {
        ha: 1054,
        x_min: 0,
        x_max: 0,
        o: "m 178 369 l 178 826 l 175 826 l 75 778 l 60 850 l 190 911 l 275 911 l 275 369 m 192 -15 l 719 918 l 797 918 l 271 -15 m 829 0 l 829 143 l 551 143 l 551 197 l 819 549 l 922 549 l 922 211 l 1006 211 l 1006 143 l 922 143 l 922 0 m 829 375 b 833 463 829 407 832 436 l 831 463 b 785 386 813 433 800 408 l 651 213 l 651 211 l 829 211 "
    },
    "\xc3\xb7": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 414 538 b 340 614 369 538 340 571 b 415 692 340 660 371 692 b 488 614 458 692 488 660 b 414 538 488 571 460 538 m 56 329 l 56 413 l 772 413 l 772 329 m 414 50 b 340 126 369 50 340 83 b 415 204 340 172 371 204 b 488 126 458 204 488 172 b 414 50 488 83 460 50 "
    },
    "\xc2\xa6": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 213 242 l 213 -244 l 119 -244 l 119 242 m 213 936 l 213 450 l 119 450 l 119 936 "
    },
    "\xc2\xb0": {
        ha: 442,
        x_min: 0,
        x_max: 0,
        o: "m 225 951 b 408 771 339 951 408 865 b 222 585 408 658 318 585 b 40 764 114 585 40 667 b 225 951 39 871 122 951 m 224 886 b 115 764 151 886 115 824 b 224 650 115 700 163 650 b 333 769 286 650 333 701 b 224 886 333 821 303 886 "
    },
    "\xc3\xbe": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 222 986 l 222 565 l 225 565 b 454 688 271 639 344 688 b 738 344 613 689 738 553 b 432 -15 738 99 585 -15 b 225 90 343 -15 268 24 l 222 90 l 222 -275 l 101 -275 l 101 986 m 222 265 b 236 204 222 246 228 222 b 414 81 263 128 333 81 b 615 343 535 81 615 182 b 417 590 615 476 542 590 b 236 457 339 590 265 539 b 222 389 229 438 222 411 "
    },
    "\xc2\xbe": {
        ha: 1054,
        x_min: 0,
        x_max: 0,
        o: "m 68 874 b 226 918 100 896 158 918 b 397 788 347 918 397 854 b 292 663 397 732 357 685 l 292 660 b 419 525 367 649 419 596 b 201 363 419 439 343 363 b 42 401 133 363 74 381 l 67 471 b 196 435 89 456 143 435 b 318 528 282 435 318 485 b 171 625 317 597 243 625 l 132 625 l 132 689 l 171 689 b 297 778 222 690 297 713 b 208 846 297 811 272 846 b 92 810 158 846 114 824 m 243 -15 l 771 918 l 849 918 l 322 -15 m 844 0 l 844 143 l 567 143 l 567 197 l 835 549 l 936 549 l 936 211 l 1021 211 l 1021 143 l 936 143 l 936 0 m 844 375 b 849 463 844 407 847 436 l 846 463 b 800 386 828 432 815 408 l 665 213 l 667 211 l 844 211 "
    },
    "\xc2\xb2": {
        ha: 432,
        x_min: 0,
        x_max: 0,
        o: "m 17 667 l 104 747 b 279 989 219 853 279 918 b 174 1085 279 1042 246 1085 b 57 1042 125 1085 83 1061 l 28 1106 b 197 1164 65 1136 128 1164 b 382 1007 328 1164 382 1081 b 197 733 382 901 303 825 l 154 694 l 154 692 l 392 692 l 392 615 l 17 615 "
    },
    "\xc2\xae": {
        ha: 582,
        x_min: 0,
        x_max: 0,
        o: "m 256 604 l 203 604 l 203 832 b 290 839 224 836 253 839 b 369 822 333 839 353 832 b 392 772 382 813 392 794 b 344 719 392 747 372 728 l 344 717 b 386 661 367 708 379 692 b 403 604 393 626 397 613 l 346 604 b 328 660 339 613 335 633 b 281 696 324 685 310 696 l 256 696 m 257 733 l 282 733 b 335 767 311 733 335 743 b 286 801 335 788 319 801 b 257 799 272 801 263 800 m 292 951 b 525 724 424 951 525 850 b 292 493 525 594 424 493 b 57 724 161 493 57 594 b 292 951 57 850 161 951 m 292 906 b 115 724 190 906 115 824 b 293 542 115 622 190 542 b 467 722 393 542 467 622 b 292 906 467 824 393 906 "
    },
    "\xe2\x88\x92": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 772 413 l 772 329 l 56 329 l 56 413 "
    },
    "\xc3\xb0": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 371 76 b 571 338 493 76 571 185 b 524 524 571 425 558 481 b 376 589 493 558 447 589 b 176 329 232 589 176 440 b 371 76 176 188 258 76 m 135 764 l 296 840 b 151 924 254 871 203 899 l 204 1000 b 400 888 271 969 340 931 l 578 972 l 607 911 l 460 842 b 638 621 536 779 597 704 b 696 351 675 543 696 454 b 371 -15 697 93 532 -15 b 53 328 189 -15 53 118 b 365 672 53 546 206 672 b 519 613 417 672 467 663 l 522 617 b 358 796 482 683 429 743 l 161 704 "
    },
    "\xc3\x97": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 117 731 l 414 426 l 711 731 l 772 669 l 474 365 l 772 61 l 711 0 l 414 304 l 117 0 l 56 61 l 353 365 l 56 669 "
    },
    "\xc2\xb3": {
        ha: 424,
        x_min: 0,
        x_max: 0,
        o: "m 39 1119 b 199 1164 71 1140 131 1164 b 368 1032 318 1164 368 1100 b 261 907 368 976 328 931 l 261 904 b 390 771 338 894 390 840 b 171 608 390 685 313 608 b 13 646 104 608 43 625 l 38 715 b 167 679 60 701 114 679 b 288 772 251 679 289 729 b 140 871 288 843 214 871 l 103 871 l 103 935 l 142 935 b 268 1022 193 935 267 958 b 181 1092 268 1057 243 1092 b 63 1054 131 1092 85 1069 "
    },
    "\xc2\xa9": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 472 900 b 890 472 707 900 890 708 b 472 42 890 233 707 42 b 50 472 236 42 50 233 b 472 900 50 708 236 900 m 472 843 b 119 468 272 843 119 679 b 472 99 119 261 272 99 b 821 472 668 99 821 261 b 472 843 821 679 668 843 m 642 631 b 507 663 624 640 572 663 b 313 468 376 663 313 579 b 508 272 313 360 381 272 b 649 308 564 272 617 288 l 665 256 b 494 213 617 224 553 213 b 240 464 333 213 240 324 b 506 722 240 622 365 722 b 658 685 578 722 640 701 "
    },
    "\xc3\x81": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 631 1149 l 454 986 l 354 986 l 483 1149 "
    },
    "\xc3\x82": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 476 1144 l 622 986 l 521 986 l 432 1082 l 429 1082 l 340 986 l 242 986 l 383 1144 "
    },
    "\xc3\x84": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 301 999 b 233 1069 261 999 233 1031 b 303 1139 233 1108 264 1139 b 369 1069 342 1139 369 1108 b 301 999 369 1031 343 999 m 560 999 b 492 1069 518 999 492 1031 b 560 1139 492 1108 521 1139 b 626 1069 599 1139 626 1108 b 560 999 626 1031 600 999 "
    },
    "\xc3\x80": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 371 1149 l 499 988 l 400 988 l 224 1149 "
    },
    "\xc3\x85": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 428 1219 b 565 1094 514 1219 565 1164 b 428 971 565 1025 508 971 b 289 1093 344 971 289 1026 b 428 1219 289 1163 342 1219 m 426 1169 b 360 1093 385 1169 360 1133 b 426 1022 360 1058 386 1022 b 493 1096 467 1022 493 1056 b 426 1169 493 1136 467 1169 "
    },
    "\xc3\x83": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 257 993 b 351 1135 256 1078 292 1135 b 435 1107 383 1135 406 1122 b 501 1082 457 1094 479 1082 b 539 1136 522 1082 535 1092 l 603 1136 b 510 1001 604 1049 574 1001 b 425 1028 479 1001 454 1013 b 358 1054 399 1042 379 1054 b 322 993 338 1054 326 1031 "
    },
    "\xc3\x87": {
        ha: 813,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 515 -14 717 8 632 -12 l 482 -69 b 579 -174 533 -79 579 -117 b 436 -286 579 -254 508 -286 b 338 -262 400 -286 361 -276 l 357 -200 b 433 -218 378 -211 406 -218 b 493 -175 465 -218 493 -206 b 385 -117 493 -139 450 -124 l 443 -10 b 50 460 215 17 50 178 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 "
    },
    "\xc3\x89": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 567 1149 l 390 986 l 290 986 l 419 1149 "
    },
    "\xc3\x8a": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 403 1144 l 549 986 l 446 986 l 358 1082 l 356 1082 l 267 986 l 167 986 l 310 1144 "
    },
    "\xc3\x8b": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 226 1001 b 158 1072 185 1001 158 1033 b 226 1142 158 1110 188 1142 b 293 1072 265 1142 293 1111 b 226 1001 293 1033 267 1001 m 483 1001 b 415 1072 443 1001 415 1033 b 485 1142 415 1110 444 1142 b 551 1072 524 1142 551 1111 b 483 1001 551 1033 525 1001 "
    },
    "\xc3\x88": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 313 1149 l 442 988 l 342 988 l 165 1149 "
    },
    "\xc3\x8d": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 369 1149 l 192 986 l 93 986 l 221 1149 "
    },
    "\xc3\x8e": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 211 1144 l 357 986 l 256 986 l 167 1082 l 164 1082 l 75 986 l -24 986 l 118 1144 "
    },
    "\xc3\x8f": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 39 1001 b -31 1072 -3 1001 -31 1033 b 39 1142 -31 1110 0 1142 b 106 1072 78 1142 106 1111 b 39 1001 106 1033 79 1001 m 296 1001 b 228 1072 256 1001 228 1033 b 297 1142 228 1110 257 1142 b 364 1072 336 1142 364 1111 b 296 1001 364 1033 338 1001 "
    },
    "\xc3\x8c": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 113 1149 l 242 988 l 142 988 l -35 1149 "
    },
    "\xc3\x91": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 m 292 993 b 386 1135 289 1078 325 1135 b 468 1107 417 1135 439 1122 b 535 1082 490 1094 513 1082 b 572 1136 556 1082 568 1092 l 636 1136 b 543 1001 638 1049 607 1001 b 458 1028 514 1001 489 1013 b 393 1054 432 1042 413 1054 b 357 993 371 1054 360 1031 "
    },
    "\xc3\x93": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 681 1151 l 504 990 l 404 990 l 533 1151 "
    },
    "\xc3\x94": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 524 1149 l 669 990 l 567 990 l 478 1086 l 475 1086 l 388 990 l 288 990 l 431 1149 "
    },
    "\xc3\x96": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 350 1001 b 282 1072 308 1001 282 1033 b 350 1142 282 1110 311 1142 b 417 1072 389 1142 417 1111 b 350 1001 417 1033 390 1001 m 607 1001 b 539 1072 567 1001 539 1033 b 608 1142 539 1110 568 1142 b 675 1072 647 1142 675 1111 b 607 1001 675 1033 649 1001 "
    },
    "\xc3\x92": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 425 1151 l 553 990 l 454 990 l 276 1151 "
    },
    "\xc3\x95": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 306 996 b 400 1138 303 1081 339 1138 b 482 1110 431 1138 453 1126 b 549 1085 504 1097 526 1085 b 586 1139 569 1085 582 1094 l 650 1139 b 557 1004 651 1051 621 1004 b 472 1031 528 1004 503 1015 b 407 1057 446 1044 426 1057 b 371 996 385 1057 374 1033 "
    },
    "\xc5\xa0": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 m 313 990 l 167 1149 l 269 1149 l 358 1051 l 361 1051 l 449 1149 l 547 1149 l 406 990 "
    },
    "\xc3\x9a": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 657 1149 l 479 986 l 381 986 l 508 1149 "
    },
    "\xc3\x9b": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 503 1144 l 649 986 l 546 986 l 458 1082 l 456 1082 l 367 986 l 268 986 l 410 1144 "
    },
    "\xc3\x9c": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 324 1001 b 256 1072 283 1001 256 1033 b 325 1142 256 1110 286 1142 b 392 1072 363 1142 392 1111 b 324 1001 392 1033 364 1001 m 582 1001 b 514 1072 540 1001 514 1033 b 582 1142 514 1110 543 1142 b 649 1072 621 1142 649 1111 b 582 1001 649 1033 622 1001 "
    },
    "\xc3\x99": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 401 1149 l 531 988 l 431 988 l 254 1149 "
    },
    "\xc3\x9d": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 592 1140 l 415 979 l 315 979 l 444 1140 "
    },
    "\xc5\xb8": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 260 992 b 192 1063 219 992 192 1024 b 261 1132 192 1100 221 1132 b 326 1063 299 1132 326 1101 b 260 992 326 1024 300 992 m 517 992 b 450 1063 476 992 450 1024 b 518 1132 450 1100 479 1132 b 585 1063 557 1132 585 1101 b 517 992 585 1024 558 992 "
    },
    "\xc5\xbd": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 42 71 l 561 831 l 561 835 l 86 835 l 86 936 l 718 936 l 718 863 l 201 106 l 201 101 l 725 101 l 725 0 l 42 0 m 351 986 l 207 1144 l 308 1144 l 397 1049 l 400 1049 l 489 1144 l 588 1144 l 444 986 "
    },
    "\xc3\xa1": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 517 963 l 347 764 l 260 764 l 382 963 "
    },
    "\xc3\xa2": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 369 963 l 503 764 l 410 764 l 329 896 l 326 896 l 246 764 l 154 764 l 285 963 "
    },
    "\xc3\xa4": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 207 792 b 136 863 165 792 136 825 b 207 933 136 901 168 933 b 275 863 246 933 275 903 b 207 792 275 825 247 792 m 464 792 b 394 863 422 792 394 825 b 464 933 394 901 425 933 b 532 863 503 933 532 903 b 464 792 532 825 504 792 "
    },
    "\xc3\xa0": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 267 963 l 388 764 l 301 764 l 132 963 "
    },
    "\xc3\xa5": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 333 746 b 193 872 250 746 193 801 b 335 1004 193 946 247 1004 b 472 874 418 1004 472 947 b 333 746 472 800 413 746 m 332 797 b 404 875 376 797 404 833 b 332 951 404 917 376 951 b 264 872 289 951 264 915 b 332 797 264 836 292 797 "
    },
    "\xc3\xa3": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 160 788 b 254 932 157 878 194 932 b 340 901 285 932 308 919 b 399 878 363 889 382 878 b 438 938 421 878 433 890 l 501 938 b 407 797 504 844 472 797 b 322 825 378 797 351 810 b 263 850 294 842 279 850 b 226 788 240 850 229 826 "
    },
    "\xc3\xa7": {
        ha: 621,
        x_min: 0,
        x_max: 0,
        o: "m 582 25 b 406 -14 553 10 489 -12 l 371 -69 b 468 -171 421 -79 468 -114 b 324 -286 468 -254 399 -286 b 226 -262 292 -286 253 -278 l 247 -200 b 324 -218 268 -212 296 -218 b 383 -175 356 -218 383 -208 b 275 -117 382 -137 340 -124 l 333 -10 b 53 329 163 11 53 143 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 526 101 "
    },
    "\xc3\xa9": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 557 963 l 388 764 l 300 764 l 422 963 "
    },
    "\xc3\xaa": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 406 963 l 539 764 l 446 764 l 365 896 l 363 896 l 282 764 l 190 764 l 322 963 "
    },
    "\xc3\xab": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 244 792 b 174 863 203 792 174 825 b 244 933 174 901 206 933 b 313 863 283 933 313 903 b 244 792 313 825 285 792 m 501 792 b 432 863 460 792 432 825 b 501 933 432 901 463 933 b 569 863 540 933 569 903 b 501 792 569 825 542 792 "
    },
    "\xc3\xa8": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 322 963 l 444 764 l 357 764 l 188 963 "
    },
    "\xc3\xad": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 350 963 l 181 764 l 93 764 l 215 963 "
    },
    "\xc3\xae": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 204 963 l 338 764 l 243 764 l 163 896 l 160 896 l 79 764 l -11 764 l 119 963 "
    },
    "\xc3\xaf": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 35 792 b -36 863 -7 792 -36 825 b 35 933 -36 901 -4 933 b 103 863 74 933 103 903 b 35 792 103 825 75 792 m 292 792 b 222 863 250 792 222 825 b 292 933 222 901 253 933 b 360 863 331 933 360 903 b 292 792 360 825 332 792 "
    },
    "\xc3\xac": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 96 963 l 218 764 l 132 764 l -37 963 "
    },
    "\xc3\xb1": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 m 215 788 b 310 932 213 878 250 932 b 396 901 340 932 364 919 b 454 878 418 889 438 878 b 493 938 476 878 490 890 l 558 938 b 463 797 560 844 528 797 b 378 825 433 797 407 810 b 318 850 350 842 335 850 b 282 788 296 850 285 826 "
    },
    "\xc3\xb3": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 564 963 l 394 764 l 307 764 l 429 963 "
    },
    "\xc3\xb4": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 422 963 l 556 764 l 461 764 l 381 896 l 378 896 l 297 764 l 207 764 l 338 963 "
    },
    "\xc3\xb6": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 253 792 b 182 863 211 792 182 825 b 253 933 182 901 214 933 b 321 863 292 933 321 903 b 253 792 321 825 293 792 m 510 792 b 440 863 468 792 440 825 b 510 933 440 901 471 933 b 578 863 549 933 578 903 b 510 792 578 825 550 792 "
    },
    "\xc3\xb2": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 336 963 l 457 764 l 371 764 l 201 963 "
    },
    "\xc3\xb5": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 210 788 b 304 932 207 878 244 932 b 390 901 335 932 358 919 b 449 878 413 889 432 878 b 488 938 471 878 485 890 l 553 938 b 457 797 554 844 522 797 b 372 825 428 797 401 810 b 313 850 344 842 329 850 b 276 788 290 850 279 826 "
    },
    "\xc5\xa1": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 m 238 764 l 104 963 l 199 963 l 281 831 l 283 831 l 365 963 l 457 963 l 326 764 "
    },
    "\xc3\xba": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 581 963 l 411 764 l 324 764 l 446 963 "
    },
    "\xc3\xbb": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 424 963 l 557 764 l 464 764 l 383 896 l 381 896 l 300 764 l 208 764 l 339 963 "
    },
    "\xc3\xbc": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 258 792 b 188 863 217 792 188 825 b 258 933 188 901 219 933 b 326 863 297 933 326 903 b 258 792 326 825 299 792 m 515 792 b 446 863 474 792 446 825 b 515 933 446 901 476 933 b 583 863 554 933 583 903 b 515 792 583 825 556 792 "
    },
    "\xc3\xb9": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 329 963 l 451 764 l 364 764 l 194 963 "
    },
    "\xc3\xbd": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 531 963 l 361 764 l 274 764 l 396 963 "
    },
    "\xc3\xbf": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 215 792 b 144 863 174 792 144 825 b 215 933 144 901 176 933 b 283 863 254 933 283 903 b 215 792 283 825 256 792 m 472 792 b 403 863 431 792 403 825 b 474 933 403 901 433 933 b 540 863 511 933 540 903 b 472 792 540 825 514 792 "
    },
    "\xc5\xbe": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 25 71 l 329 467 b 417 571 358 503 386 535 l 417 574 l 53 574 l 53 672 l 565 672 l 564 596 l 264 206 b 178 100 236 168 208 135 l 178 97 l 571 97 l 571 0 l 25 0 m 271 764 l 138 963 l 232 963 l 314 831 l 317 831 l 399 963 l 490 963 l 360 764 "
    },
    "\xc4\x90": {
        ha: 932,
        x_min: 0,
        x_max: 0,
        o: "m -3 524 l 113 524 l 113 926 b 369 947 186 939 274 947 b 749 831 542 947 667 907 b 881 490 832 754 881 644 b 746 125 881 336 833 213 b 332 -10 658 38 513 -10 b 113 0 244 -10 174 -7 l 113 426 l -3 426 m 483 426 l 233 426 l 233 93 b 354 88 264 89 308 88 b 754 489 615 88 754 231 b 375 850 756 713 631 850 b 233 838 313 850 265 844 l 233 524 l 483 524 "
    },
    "\xc5\x8a": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 53 b 540 -276 808 -146 718 -250 l 515 -182 b 692 -8 626 -160 682 -107 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 "
    },
    "\xc4\xa6": {
        ha: 913,
        x_min: 0,
        x_max: 0,
        o: "m 804 665 l 804 0 l 682 0 l 682 419 l 229 419 l 229 0 l 108 0 l 108 665 l 29 665 l 29 746 l 108 746 l 108 936 l 229 936 l 229 746 l 682 746 l 682 936 l 804 936 l 804 746 l 883 746 l 883 665 m 682 665 l 229 665 l 229 524 l 682 524 "
    },
    "\xc5\xa6": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 406 833 l 406 525 l 578 525 l 578 444 l 406 444 l 406 0 l 283 0 l 283 444 l 111 444 l 111 525 l 283 525 l 283 833 l -1 833 l -1 936 l 692 936 l 692 833 "
    },
    "\xc8\x9c": {
        ha: 667,
        x_min: 0,
        x_max: 0,
        o: "m 72 -64 b 485 253 294 -31 485 89 b 281 436 485 356 411 438 b 150 411 251 436 197 426 l 133 497 b 413 728 290 533 413 618 b 258 854 413 804 349 854 b 68 804 183 854 103 822 l 43 886 b 281 951 88 914 186 951 b 535 747 432 951 535 868 b 364 519 535 643 458 563 l 364 515 b 613 261 504 501 613 410 b 88 -160 613 47 407 -122 "
    },
    "\xc4\x91": {
        ha: 783,
        x_min: 0,
        x_max: 0,
        o: "m 682 767 l 682 174 b 688 0 682 114 683 46 l 578 0 l 572 117 l 569 117 b 340 -15 532 42 450 -15 b 53 326 178 -15 53 122 b 354 688 51 550 190 688 b 557 585 457 688 526 639 l 560 585 l 560 767 l 286 767 l 286 843 l 560 843 l 560 986 l 682 986 l 682 843 l 789 843 l 789 767 m 560 399 b 554 450 560 414 558 435 b 378 592 536 528 469 592 b 176 332 251 592 176 481 b 375 83 176 196 243 83 b 554 229 457 83 532 138 b 560 282 558 246 560 263 "
    },
    "\xc5\x8b": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 82 b 410 -249 674 -132 558 -228 l 386 -151 b 551 71 496 -129 551 -58 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 "
    },
    "\xc4\xa7": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 551 0 l 551 386 b 396 586 551 494 511 586 b 232 464 317 586 254 531 b 224 406 225 447 224 429 l 224 0 l 101 0 l 101 767 l -6 767 l -6 843 l 101 843 l 101 986 l 224 986 l 224 843 l 492 843 l 492 767 l 224 767 l 224 567 l 226 567 b 314 653 246 601 276 632 b 439 688 350 674 393 688 b 674 400 529 688 674 632 l 674 0 "
    },
    "\xc4\xb8": {
        ha: 651,
        x_min: 0,
        x_max: 0,
        o: "m 222 364 l 225 364 b 285 440 242 388 265 417 l 482 672 l 629 672 l 369 396 l 665 0 l 517 0 l 285 322 l 222 253 l 222 0 l 101 0 l 101 672 l 222 672 "
    },
    "\xc5\x89": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 25 785 b 76 899 49 811 76 846 b 33 981 76 931 57 961 l 122 1004 b 171 904 146 990 171 953 b 78 744 171 811 100 761 m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 "
    },
    "\xc5\xa7": {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 249 579 l 249 419 l 385 419 l 385 344 l 249 344 l 249 217 b 340 86 249 133 272 86 b 411 94 372 86 396 90 l 417 3 b 308 -14 393 -7 356 -14 b 176 38 251 -14 206 4 b 129 213 142 74 129 133 l 129 344 l 36 344 l 36 419 l 129 419 l 129 579 l 25 579 l 25 672 l 129 672 l 129 833 l 249 865 l 249 672 l 424 672 l 424 579 "
    },
    "\xc8\x9d": {
        ha: 593,
        x_min: 0,
        x_max: 0,
        o: "m 49 -196 b 431 65 101 -192 431 -150 b 253 217 431 147 376 217 b 131 196 214 217 168 207 l 113 283 b 369 475 261 318 369 374 b 225 592 369 547 314 592 b 53 539 154 592 86 557 l 28 619 b 254 688 79 653 164 688 b 488 496 394 688 488 613 b 340 301 488 404 428 336 l 340 297 b 556 79 468 283 556 201 b 61 -290 556 -101 385 -264 "
    },
    "\xc4\xb2": {
        ha: 846,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 629 936 l 750 936 l 750 310 b 468 -15 750 61 629 -15 b 338 7 422 -15 368 -6 l 356 106 b 458 88 381 96 417 88 b 629 319 565 88 629 136 "
    },
    "\xef\xac\x80": {
        ha: 810,
        x_min: 0,
        x_max: 0,
        o: "m 517 0 l 517 579 l 235 579 l 235 0 l 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 694 b 189 924 114 789 136 871 b 358 986 228 963 283 986 b 454 963 397 986 433 974 l 429 872 b 357 889 411 881 385 889 b 235 701 261 889 235 807 l 235 672 l 517 672 l 517 704 b 596 939 517 799 539 885 b 758 1001 642 983 703 1001 b 863 982 803 1001 839 992 l 847 888 b 768 903 828 896 804 903 b 638 708 665 903 638 811 l 638 672 l 800 672 l 800 579 l 639 579 l 639 0 "
    },
    "\xef\xac\x83": {
        ha: 1132,
        x_min: 0,
        x_max: 0,
        o: "m 943 867 b 807 903 913 886 863 903 b 639 706 678 903 639 813 l 639 672 l 1031 672 l 1031 0 l 908 0 l 908 579 l 640 579 l 640 0 l 518 0 l 518 579 l 235 579 l 235 0 l 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 697 b 194 921 114 782 136 864 b 367 986 233 961 292 986 b 485 957 413 986 460 969 l 451 867 b 367 890 431 878 399 890 b 279 854 328 890 300 876 b 235 699 246 818 235 757 l 235 672 l 518 672 l 518 708 b 813 1001 518 886 624 1001 b 979 958 874 1001 943 983 "
    },
    "\xee\x80\x83": {
        ha: 1124,
        x_min: 0,
        x_max: 0,
        o: "m 943 867 b 807 903 913 886 863 903 b 639 706 678 903 639 813 l 639 672 l 1031 672 l 1031 63 b 950 -214 1031 -68 1010 -153 b 742 -290 896 -268 807 -290 l 729 -194 b 863 -143 785 -190 833 -175 b 908 110 896 -104 908 -51 l 908 579 l 640 579 l 640 0 l 518 0 l 518 579 l 235 579 l 235 0 l 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 697 b 194 921 114 782 136 864 b 367 986 233 961 292 986 b 485 957 413 986 460 969 l 451 867 b 367 890 431 878 399 890 b 279 854 328 890 300 876 b 235 699 246 818 235 757 l 235 672 l 518 672 l 518 708 b 813 1001 518 886 624 1001 b 979 958 874 1001 943 983 "
    },
    "\xef\xac\x84": {
        ha: 1132,
        x_min: 0,
        x_max: 0,
        o: "m 453 869 b 369 890 428 882 399 890 b 279 854 329 890 300 876 b 235 700 246 818 235 761 l 235 672 l 518 672 l 518 701 b 614 933 518 794 551 878 b 829 1001 665 978 735 1001 b 1031 957 907 1001 979 985 l 1031 0 l 910 0 l 910 889 b 808 907 888 900 857 907 b 639 706 682 907 639 814 l 639 672 l 797 672 l 797 579 l 640 579 l 640 0 l 518 0 l 518 579 l 235 579 l 235 0 l 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 689 b 192 919 114 776 133 863 b 374 986 235 961 297 986 b 485 961 418 986 464 971 "
    },
    "\xee\x80\x84": {
        ha: 725,
        x_min: 0,
        x_max: 0,
        o: "m 114 0 l 114 579 l 19 579 l 19 672 l 114 672 l 114 708 b 407 1001 114 886 218 1001 b 578 957 469 1001 543 982 l 543 864 b 401 903 514 885 461 903 b 235 706 272 903 235 813 l 235 672 l 625 672 l 625 63 b 544 -214 625 -68 604 -153 b 336 -290 492 -268 401 -290 l 324 -194 b 457 -143 381 -190 428 -175 b 504 110 490 -104 504 -51 l 504 579 l 235 579 l 235 0 "
    },
    "\xc4\xb3": {
        ha: 663,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 163 938 b 238 861 208 938 238 904 b 160 786 239 819 208 786 b 86 861 117 786 86 819 b 163 938 86 904 118 938 m 261 -194 b 394 -143 318 -190 365 -175 b 442 110 428 -104 442 -51 l 442 672 l 564 672 l 564 63 b 483 -214 564 -68 543 -153 b 275 -290 429 -268 340 -290 m 504 938 b 578 861 549 938 578 904 b 501 786 578 821 550 786 b 426 861 456 786 426 821 b 504 938 426 904 458 938 "
    },
    "\xef\x98\xb8": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 482 753 b 357 824 454 797 413 824 b 168 456 243 824 169 678 b 203 233 168 368 179 293 m 235 147 b 354 79 265 103 306 79 b 544 456 481 79 544 225 b 515 668 544 536 535 608 m 364 918 b 663 461 554 918 663 749 b 349 -15 663 154 549 -15 b 50 449 172 -15 53 150 b 364 918 50 751 181 918 "
    },
    "\xe2\x82\xac": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 689 43 b 482 -15 646 14 574 -15 b 200 108 369 -15 269 28 b 100 347 147 167 113 247 l 14 347 l 14 415 l 93 415 b 93 436 93 422 93 429 b 96 499 93 458 94 479 l 14 499 l 14 568 l 106 568 b 219 803 122 665 164 746 b 494 918 290 876 381 918 b 679 874 576 918 640 894 l 651 782 b 496 821 617 803 558 821 b 313 744 421 821 360 794 b 229 568 271 704 243 642 l 617 568 l 617 499 l 217 499 b 214 440 215 481 214 460 b 214 415 214 432 214 425 l 617 415 l 617 347 l 224 347 b 300 165 235 267 263 207 b 496 85 351 111 421 85 b 665 131 569 85 633 113 "
    },
    "\xc7\xba": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 433 961 b 307 1068 356 961 307 1008 b 435 1178 307 1128 354 1178 b 558 1068 513 1178 558 1129 b 433 961 558 1007 508 961 m 432 1013 b 493 1069 469 1013 493 1035 b 431 1128 493 1101 469 1128 b 372 1068 393 1128 372 1100 b 432 1013 372 1038 396 1013 m 667 1322 l 468 1203 l 361 1203 l 508 1322 m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 "
    },
    "\xe2\x84\xae": {
        ha: 1135,
        x_min: 0,
        x_max: 0,
        o: "m 246 439 b 239 433 242 439 239 438 l 239 179 b 251 150 239 168 244 158 b 569 13 331 65 444 13 b 903 167 703 13 822 72 l 979 167 b 568 -15 885 57 735 -15 b 49 451 282 -15 49 193 b 568 918 49 710 282 918 b 1086 451 854 918 1086 710 b 1086 439 1086 447 1086 443 m 897 728 b 883 758 897 740 892 750 b 569 890 803 839 692 890 b 253 754 444 890 333 838 b 239 722 244 746 239 735 l 239 472 b 246 465 239 468 242 465 l 890 465 b 897 472 894 465 897 468 "
    },
    "\xef\x9c\xb0": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 368 -15 b 56 336 196 -15 56 113 b 368 688 56 554 196 688 b 681 336 540 688 681 558 b 368 -15 681 117 542 -15 m 368 78 b 563 336 492 78 563 188 b 368 594 563 485 490 594 b 174 336 246 594 174 485 b 368 78 174 188 246 78 "
    },
    "\xef\x9c\xb1": {
        ha: 503,
        x_min: 0,
        x_max: 0,
        o: "m 249 0 l 249 568 l 246 568 l 58 481 l 36 571 l 264 675 l 365 675 l 365 0 "
    },
    "\xef\x9c\xb2": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 33 0 l 33 67 l 100 114 b 413 456 310 251 413 344 b 263 589 413 546 349 589 b 74 522 190 589 122 557 l 42 601 b 293 688 90 639 182 688 b 535 472 435 688 535 608 b 289 147 535 344 435 250 l 218 96 l 218 92 b 331 97 251 96 296 97 l 583 97 l 583 0 "
    },
    "\xef\x9c\xb3": {
        ha: 601,
        x_min: 0,
        x_max: 0,
        o: "m 39 -43 b 190 -65 74 -56 132 -65 b 425 103 328 -65 425 1 b 214 244 425 190 342 244 b 138 242 182 244 154 243 l 135 331 l 161 333 b 388 479 290 343 388 393 b 242 592 388 554 332 592 b 71 543 171 592 104 561 l 46 625 b 268 688 89 654 176 688 b 510 500 410 688 510 617 b 346 308 510 406 440 336 l 346 304 b 550 104 456 289 550 222 b 200 -161 550 -56 388 -161 b 24 -133 128 -161 56 -147 "
    },
    "\xef\x9c\xb4": {
        ha: 697,
        x_min: 0,
        x_max: 0,
        o: "m 544 69 l 544 -160 l 431 -160 l 431 69 l 25 69 l 25 149 l 413 682 l 544 682 l 544 163 l 671 163 l 671 69 m 431 440 b 435 571 431 486 431 528 l 429 572 b 354 442 407 528 381 482 l 146 167 l 149 163 l 431 163 "
    },
    "\xef\x9c\xb5": {
        ha: 613,
        x_min: 0,
        x_max: 0,
        o: "m 65 -49 b 207 -67 97 -58 154 -67 b 435 113 325 -67 435 -4 b 392 214 435 153 418 188 b 75 274 338 268 228 285 l 147 672 l 546 672 l 531 572 l 229 572 l 188 364 b 494 279 303 367 421 350 b 558 122 536 239 558 182 b 208 -161 558 -49 415 -161 b 50 -136 147 -161 85 -150 "
    },
    "\xef\x9c\xb6": {
        ha: 722,
        x_min: 0,
        x_max: 0,
        o: "m 608 751 b 196 446 358 736 228 604 l 200 446 b 403 547 235 496 307 547 b 663 281 544 547 663 446 b 374 -15 663 94 518 -15 b 65 326 189 -15 65 122 b 600 842 65 614 267 824 m 374 78 b 542 275 456 78 542 143 b 372 460 542 389 474 460 b 233 400 310 460 258 428 b 188 286 199 365 188 332 b 374 78 188 174 261 78 "
    },
    "\xef\x9c\xb7": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 563 594 b 169 -160 476 368 310 57 l 56 -139 b 438 568 169 26 364 374 l 438 571 l 24 571 l 24 672 l 563 672 "
    },
    "\xef\x9c\xb8": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 476 440 b 656 231 582 403 656 329 b 353 -15 656 81 519 -15 b 57 215 178 -15 57 81 b 231 435 57 317 128 389 l 231 439 b 90 618 151 472 90 531 b 364 843 90 751 210 843 b 624 633 521 843 624 750 b 476 444 624 553 575 492 m 363 760 b 208 628 278 760 208 708 b 375 478 208 553 271 506 b 510 628 450 500 510 550 b 363 760 510 715 438 760 m 354 72 b 531 219 453 72 531 132 b 333 399 531 307 460 365 b 179 228 242 368 179 304 b 354 72 179 138 246 72 "
    },
    "\xef\x9c\xb9": {
        ha: 722,
        x_min: 0,
        x_max: 0,
        o: "m 106 -71 b 521 219 343 -61 483 56 l 518 219 b 319 126 490 174 414 126 b 60 392 179 126 60 225 b 361 688 60 560 192 688 b 656 354 525 688 656 567 b 114 -161 656 51 449 -149 m 350 213 b 514 303 421 213 488 254 b 535 386 526 321 535 351 b 356 593 535 511 453 593 b 182 400 271 593 182 531 b 350 213 182 272 260 213 "
    },
    "\xef\x99\x82": {
        ha: 1136,
        x_min: 0,
        x_max: 0,
        o: "m 256 838 b 465 568 382 838 465 740 b 249 283 465 378 365 283 b 38 556 136 283 39 374 b 256 838 38 736 136 838 m 253 764 b 135 560 176 764 135 674 b 251 357 133 446 176 357 b 368 563 333 357 368 443 b 253 764 368 672 338 764 m 285 -17 l 774 844 l 850 844 l 363 -17 m 889 544 b 1097 275 1015 544 1097 447 b 882 -10 1097 85 997 -10 b 671 261 769 -10 671 81 b 889 544 669 443 769 544 m 885 471 b 767 267 808 471 768 381 b 885 64 765 151 810 64 b 1001 269 965 64 1001 150 b 885 471 1001 379 969 471 "
    },
    "\xef\x98\xb9": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 364 918 b 663 461 554 918 663 749 b 349 -15 663 154 549 -15 b 50 449 172 -15 53 150 b 364 918 50 751 181 918 m 357 824 b 172 447 250 824 172 693 b 356 79 172 213 244 79 b 540 456 481 79 540 225 b 357 824 540 678 483 824 "
    },
    "\xef\x9b\x9c": {
        ha: 453,
        x_min: 0,
        x_max: 0,
        o: "m 210 789 l 207 789 l 50 704 l 26 797 l 224 903 l 328 903 l 328 0 l 210 0 "
    },
    "\xef\x98\xba": {
        ha: 621,
        x_min: 0,
        x_max: 0,
        o: "m 4 0 l 4 75 l 100 168 b 436 640 331 388 436 504 b 258 817 436 732 393 817 b 67 740 175 817 108 775 l 28 826 b 282 918 89 879 178 918 b 558 656 476 918 558 785 b 247 171 558 489 438 354 l 176 104 l 176 101 l 581 101 l 581 0 "
    },
    "\xef\x98\xbb": {
        ha: 625,
        x_min: 0,
        x_max: 0,
        o: "m 43 140 b 243 83 76 118 157 83 b 447 258 399 83 449 183 b 214 439 446 385 332 439 l 146 439 l 146 531 l 214 531 b 415 683 303 531 415 576 b 257 819 415 756 369 819 b 76 760 185 819 115 788 l 43 849 b 279 918 90 883 183 918 b 539 703 458 918 539 813 b 372 490 539 610 482 531 l 372 488 b 574 256 483 465 574 382 b 244 -15 574 111 460 -15 b 10 46 143 -15 54 17 "
    },
    "\xef\x98\xbc": {
        ha: 699,
        x_min: 0,
        x_max: 0,
        o: "m 435 0 l 435 246 l 15 246 l 15 326 l 418 903 l 550 903 l 550 342 l 676 342 l 676 246 l 550 246 l 550 0 m 435 342 l 435 643 b 439 785 435 690 436 738 l 435 785 b 360 651 406 732 385 693 l 139 344 l 139 342 "
    },
    "\xef\x98\xbd": {
        ha: 639,
        x_min: 0,
        x_max: 0,
        o: "m 564 800 l 219 800 l 185 568 b 258 574 206 571 225 574 b 453 525 328 574 397 558 b 582 293 522 485 582 407 b 246 -15 582 117 442 -15 b 21 40 147 -15 64 13 l 51 133 b 244 83 89 111 163 83 b 458 279 360 83 458 158 b 199 479 457 396 379 479 b 74 469 147 479 107 474 l 132 903 l 564 903 "
    },
    "\xef\x98\xbe": {
        ha: 715,
        x_min: 0,
        x_max: 0,
        o: "m 581 817 b 489 811 556 818 524 817 b 175 490 297 779 196 639 l 179 490 b 397 594 222 547 297 594 b 669 303 557 594 669 479 b 369 -15 669 138 557 -15 b 50 369 176 -15 50 135 b 203 776 50 547 114 688 b 492 910 278 850 378 896 b 581 917 528 915 558 917 m 369 79 b 546 296 475 79 546 167 b 360 503 546 425 472 503 b 185 392 286 503 218 457 b 171 338 176 378 171 360 b 369 79 174 189 242 79 "
    },
    "\xef\x98\xbf": {
        ha: 572,
        x_min: 0,
        x_max: 0,
        o: "m 571 903 l 571 822 l 178 0 l 53 0 l 443 799 l 443 801 l 1 801 l 1 903 "
    },
    "\xef\x99\x80": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 354 -15 b 51 229 165 -15 51 97 b 231 471 51 343 119 424 l 229 475 b 86 678 129 522 86 600 b 365 918 86 821 207 918 b 628 696 540 918 628 808 b 479 485 628 619 590 538 l 479 481 b 661 247 592 436 661 357 b 354 -15 661 90 526 -15 m 357 74 b 538 235 467 74 538 142 b 339 432 538 344 461 397 b 176 246 233 401 176 332 b 357 74 172 154 242 74 m 358 831 b 201 686 257 831 201 764 b 374 519 201 596 269 547 b 511 683 451 546 511 601 b 358 831 511 756 468 831 "
    },
    "\xef\x99\x81": {
        ha: 718,
        x_min: 0,
        x_max: 0,
        o: "m 133 86 b 232 90 160 83 190 86 b 421 178 303 100 369 129 b 540 418 481 232 524 311 l 536 418 b 324 321 486 357 414 321 b 57 597 161 321 57 443 b 365 918 57 768 181 918 b 664 538 550 918 664 768 b 508 114 664 339 597 200 b 246 -7 439 46 343 4 b 133 -14 201 -14 163 -15 m 356 825 b 178 606 251 825 178 733 b 351 414 178 493 246 414 b 529 508 433 414 497 454 b 540 553 536 519 540 533 b 356 825 540 707 483 825 "
    },
    "\xee\x80\x88": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 482 753 b 357 824 454 797 413 824 b 168 456 243 824 169 678 b 203 233 168 368 179 293 m 235 147 b 354 79 265 103 306 79 b 544 456 481 79 544 225 b 515 668 544 536 535 608 m 364 918 b 663 461 554 918 663 749 b 349 -15 663 154 549 -15 b 50 449 172 -15 53 150 b 364 918 50 751 181 918 "
    },
    "\xef\x99\x83": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 368 -15 b 56 336 196 -15 56 113 b 368 688 56 554 196 688 b 681 336 540 688 681 558 b 368 -15 681 117 542 -15 m 368 78 b 563 336 492 78 563 188 b 368 594 563 485 490 594 b 174 336 246 594 174 485 b 368 78 174 188 246 78 "
    },
    "\xef\x99\x84": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 390 0 l 390 572 l 388 572 l 129 456 l 108 546 l 407 675 l 508 675 l 508 0 "
    },
    "\xef\x99\x85": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 92 0 l 92 67 l 160 114 b 471 456 368 251 471 344 b 321 589 471 546 408 589 b 133 522 250 589 181 557 l 100 601 b 353 688 150 639 240 688 b 593 472 493 688 593 608 b 347 147 593 344 493 250 l 276 96 l 276 92 b 390 97 311 96 354 97 l 642 97 l 642 0 "
    },
    "\xef\x99\x86": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 100 -43 b 251 -65 135 -56 193 -65 b 486 103 389 -65 486 1 b 275 244 486 190 403 244 b 199 242 244 244 217 243 l 196 331 l 222 333 b 450 479 353 343 450 393 b 304 592 450 554 393 592 b 132 543 233 592 165 561 l 107 625 b 331 688 150 654 239 688 b 571 500 471 688 571 617 b 407 308 571 406 501 336 l 407 304 b 611 104 517 289 611 222 b 263 -161 611 -56 450 -161 b 86 -133 190 -161 117 -147 "
    },
    "\xef\x99\x87": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 564 69 l 564 -160 l 450 -160 l 450 69 l 44 69 l 44 149 l 432 682 l 564 682 l 564 163 l 690 163 l 690 69 m 450 440 b 454 571 450 486 450 528 l 449 572 b 374 442 426 528 400 482 l 165 167 l 168 163 l 450 163 "
    },
    "\xef\x99\x88": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 124 -49 b 265 -67 156 -58 213 -67 b 493 113 383 -67 493 -4 b 450 214 493 153 478 188 b 135 274 396 268 286 285 l 206 672 l 604 672 l 589 572 l 288 572 l 247 364 b 553 279 361 367 479 350 b 617 122 594 239 617 182 b 267 -161 617 -49 474 -161 b 108 -136 206 -161 143 -150 "
    },
    "\xef\x99\x89": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 621 751 b 208 446 371 736 240 604 l 213 446 b 417 547 249 496 319 547 b 675 281 557 547 675 446 b 386 -15 675 94 531 -15 b 78 326 201 -15 78 122 b 613 842 78 614 281 824 m 386 78 b 554 275 469 78 554 143 b 386 460 554 389 486 460 b 246 400 322 460 272 428 b 201 286 211 365 201 332 b 386 78 201 174 274 78 "
    },
    "\xef\x99\x8a": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 631 594 b 238 -160 544 368 378 57 l 124 -139 b 506 568 238 26 432 374 l 506 571 l 93 571 l 93 672 l 631 672 "
    },
    "\xef\x99\x8b": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 486 440 b 665 231 592 403 665 329 b 363 -15 665 81 529 -15 b 67 215 186 -15 67 81 b 240 435 67 317 138 389 l 240 439 b 100 618 161 472 100 531 b 374 843 100 751 219 843 b 633 633 529 843 633 750 b 486 444 633 553 585 492 m 372 760 b 218 628 288 760 218 708 b 385 478 218 553 281 506 b 518 628 458 500 518 550 b 372 760 518 715 447 760 m 364 72 b 540 219 463 72 540 132 b 343 399 540 307 469 365 b 189 228 251 368 189 304 b 364 72 189 138 256 72 "
    },
    "\xef\x99\x8c": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 115 -71 b 531 219 353 -61 492 56 l 528 219 b 329 126 500 174 424 126 b 69 392 189 126 69 225 b 369 688 69 560 201 688 b 665 354 535 688 665 567 b 124 -161 665 51 457 -149 m 360 213 b 522 303 431 213 496 254 b 544 386 536 321 544 351 b 365 593 544 511 463 593 b 190 400 281 593 190 531 b 360 213 190 272 269 213 "
    },
    "\xef\x99\x93": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 331 -112 l 331 -1 b 125 53 256 0 172 22 l 158 138 b 344 88 199 110 278 88 b 492 186 425 88 492 125 b 353 303 492 242 451 269 b 140 494 210 351 140 400 b 339 669 140 586 221 656 l 339 789 l 418 789 l 418 674 b 590 629 493 671 556 649 l 557 546 b 396 588 525 565 463 588 b 263 503 321 588 263 554 b 414 388 263 453 294 428 b 617 193 553 343 617 283 b 410 1 617 106 543 21 l 410 -112 "
    },
    "\xef\x99\x94": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 579 97 b 440 64 556 85 501 67 l 440 -36 l 364 -36 l 364 65 b 113 339 214 82 113 181 b 364 624 113 489 214 601 l 364 718 l 440 718 l 440 626 b 576 599 496 626 549 611 l 554 515 b 424 540 526 531 481 540 b 229 344 307 540 229 461 b 418 151 229 218 314 151 b 560 179 483 151 531 167 "
    },
    "\xef\x99\x8e": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 664 31 b 474 -15 632 10 558 -15 b 225 82 382 -15 292 15 b 140 247 183 124 153 182 l 53 247 l 53 315 l 131 315 b 128 349 129 331 128 340 b 132 397 128 363 129 379 l 53 397 l 53 464 l 142 464 b 229 626 157 528 188 585 b 492 731 300 697 396 731 b 663 692 574 731 626 710 l 635 606 b 490 639 603 622 557 639 b 319 572 429 639 368 619 b 263 464 292 544 269 507 l 608 464 l 608 397 l 249 397 b 246 357 247 382 246 367 b 247 315 246 344 246 332 l 608 315 l 608 247 l 261 247 b 315 147 271 207 290 172 b 490 79 365 99 421 79 b 647 115 558 79 615 99 "
    },
    "\xef\x99\x8f": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 178 472 l 315 472 l 324 546 b 589 843 340 683 403 844 b 685 822 631 843 665 832 l 661 733 b 589 747 640 740 618 747 b 442 554 494 747 453 657 l 432 472 l 600 472 l 600 392 l 422 392 l 392 139 b 150 -162 371 -40 314 -164 b 43 -140 104 -162 65 -153 l 65 -53 b 143 -69 89 -64 114 -68 b 278 150 228 -68 261 7 l 306 392 l 178 392 "
    },
    "\xef\x99\x91": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 88 0 l 88 69 b 236 246 179 108 236 172 b 231 308 236 267 235 288 l 96 308 l 96 385 l 215 385 b 204 471 210 414 204 443 b 471 740 204 631 311 740 b 622 706 540 740 592 724 l 596 615 b 471 644 571 631 526 644 b 319 469 369 644 319 576 b 329 385 319 440 324 411 l 536 385 l 536 308 l 344 308 b 347 263 346 293 347 276 b 260 101 346 190 310 135 l 260 99 l 665 99 l 665 0 "
    },
    "\xef\x99\x92": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 308 0 l 308 160 l 96 160 l 96 228 l 308 228 l 308 311 l 96 311 l 96 379 l 274 379 l 65 715 l 196 715 l 314 501 b 368 393 336 460 354 426 l 372 393 b 431 504 388 428 408 465 l 556 715 l 682 715 l 460 379 l 636 379 l 636 311 l 422 311 l 422 228 l 636 228 l 636 160 l 422 160 l 422 0 "
    },
    "\xef\x99\x90": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 429 314 l 454 515 l 311 515 l 285 314 m 158 -4 l 189 232 l 75 232 l 75 314 l 201 314 l 228 515 l 108 515 l 108 597 l 240 597 l 271 826 l 353 826 l 322 597 l 467 597 l 497 826 l 579 826 l 550 597 l 664 597 l 664 515 l 538 515 l 513 314 l 632 314 l 632 232 l 500 232 l 468 -4 l 385 -4 l 417 232 l 272 232 l 242 -4 "
    },
    "\xe2\x81\xb0": {
        ha: 467,
        x_min: 0,
        x_max: 0,
        o: "m 231 608 b 32 885 108 608 32 711 b 236 1164 32 1057 111 1164 b 435 889 364 1164 435 1058 b 231 608 435 719 367 608 m 232 678 b 338 888 301 678 338 756 b 233 1093 338 1017 303 1093 b 129 888 171 1093 129 1017 b 232 678 129 754 169 678 "
    },
    "\xe2\x81\xb4": {
        ha: 482,
        x_min: 0,
        x_max: 0,
        o: "m 285 615 l 285 757 l 22 757 l 22 814 l 268 1160 l 378 1160 l 378 826 l 456 826 l 456 757 l 378 757 l 378 615 m 285 989 b 289 1076 285 1019 288 1050 l 286 1078 b 239 996 269 1044 256 1021 l 118 828 l 119 826 l 285 826 "
    },
    "\xe2\x81\xb5": {
        ha: 428,
        x_min: 0,
        x_max: 0,
        o: "m 372 1079 l 157 1079 l 139 963 b 182 964 150 964 164 964 b 310 933 228 964 274 956 b 388 794 353 910 388 863 b 171 608 388 688 300 608 b 26 640 111 608 54 625 l 46 710 b 169 681 69 697 117 681 b 292 786 232 681 292 719 b 135 896 292 850 247 896 b 56 890 103 896 76 893 l 92 1157 l 372 1157 "
    },
    "\xe2\x81\xb6": {
        ha: 461,
        x_min: 0,
        x_max: 0,
        o: "m 371 1089 b 315 1088 356 1089 335 1090 b 128 917 204 1072 142 1000 l 129 917 b 260 975 156 947 201 975 b 429 800 360 975 429 906 b 238 608 429 694 349 608 b 32 840 108 608 32 704 b 126 1079 32 943 69 1026 b 315 1160 174 1126 238 1151 b 371 1163 338 1161 357 1163 m 236 678 b 335 794 294 678 335 728 b 229 908 335 863 294 908 b 131 846 186 908 149 881 b 124 815 126 838 124 828 b 236 678 124 740 163 678 "
    },
    "\xe2\x81\xb7": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 392 1157 l 392 1097 l 154 615 l 56 615 l 293 1079 l 293 1081 l 26 1081 l 26 1157 "
    },
    "\xe2\x81\xb8": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 232 1164 b 401 1029 346 1164 401 1097 b 314 906 401 982 376 933 l 314 903 b 422 767 376 879 422 833 b 225 608 422 672 340 608 b 33 754 100 608 33 679 b 139 894 33 821 74 867 l 139 897 b 53 1017 81 924 53 969 b 232 1164 53 1104 131 1164 m 228 674 b 328 760 289 674 328 711 b 218 865 328 821 283 849 b 126 765 160 850 126 813 b 228 674 126 717 164 674 m 229 1099 b 140 1022 171 1099 140 1063 b 238 931 140 974 178 946 b 314 1019 281 944 314 974 b 229 1099 314 1058 289 1099 "
    },
    "\xe2\x81\xb9": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 81 682 b 139 683 96 681 117 681 b 256 729 182 688 224 703 b 326 857 292 760 317 801 l 325 858 b 200 804 296 825 254 804 b 32 971 101 804 32 874 b 228 1164 32 1075 113 1164 b 422 933 353 1164 422 1067 b 326 683 422 818 382 735 b 144 611 281 640 215 617 b 81 608 121 607 96 607 m 224 1093 b 125 975 167 1093 125 1043 b 224 871 125 917 163 871 b 322 922 269 871 304 893 b 328 950 326 929 328 938 b 224 1093 328 1029 297 1093 "
    },
    "\xef\x9b\xa8": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 90 608 b 29 671 54 608 29 635 b 92 733 29 707 56 733 b 151 671 128 733 151 707 b 90 608 151 635 128 608 "
    },
    "\xef\x9b\xa2": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 0 515 b 54 731 22 576 44 663 l 157 739 b 67 522 135 661 97 572 "
    },
    "\xef\x9b\xa4": {
        ha: 440,
        x_min: 0,
        x_max: 0,
        o: "m 186 544 l 186 625 b 49 663 133 626 81 642 l 72 733 b 201 696 106 711 151 696 b 297 767 260 696 297 725 b 203 854 297 807 268 831 b 57 1001 111 889 57 926 b 190 1140 57 1072 107 1128 l 190 1222 l 253 1222 l 253 1144 b 368 1115 304 1143 343 1129 l 346 1047 b 232 1076 328 1057 289 1076 b 147 1013 168 1076 147 1043 b 253 928 147 975 175 957 b 389 774 346 893 389 850 b 249 629 389 707 340 644 l 249 544 "
    },
    "\xef\x9b\xa0": {
        ha: 438,
        x_min: 0,
        x_max: 0,
        o: "m 222 604 l 222 686 b 97 747 167 694 128 714 b 50 886 68 781 50 828 b 222 1093 50 992 114 1075 l 222 1174 l 286 1174 l 286 1094 b 375 1075 321 1094 353 1085 l 357 1006 b 271 1025 339 1015 313 1025 b 143 890 193 1025 143 968 b 269 757 143 804 200 757 b 363 775 313 757 342 767 l 378 710 b 286 686 360 700 325 688 l 286 604 "
    },
    "\xef\x9b\xa6": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 240 903 l 240 836 l 25 836 l 25 903 "
    },
    "\xe2\x81\xbd": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 233 1206 b 133 868 178 1126 133 1017 b 233 533 133 721 179 615 l 163 533 b 56 868 113 601 56 707 b 163 1206 56 1029 113 1138 "
    },
    "\xe2\x81\xbe": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 18 533 b 118 869 72 615 118 722 b 18 1206 118 1017 72 1125 l 89 1206 b 196 869 139 1139 196 1032 b 89 533 196 710 139 603 "
    },
    "\xe2\x82\x80": {
        ha: 467,
        x_min: 0,
        x_max: 0,
        o: "m 231 -211 b 32 65 108 -211 32 -107 b 236 344 32 238 111 344 b 435 71 364 344 435 239 b 231 -211 435 -99 367 -211 m 232 -140 b 338 69 301 -140 338 -62 b 233 274 338 199 303 274 b 129 69 171 274 129 199 b 232 -140 129 -65 169 -140 "
    },
    "\xe2\x82\x81": {
        ha: 339,
        x_min: 0,
        x_max: 0,
        o: "m 149 -204 l 149 253 l 146 253 l 46 204 l 31 276 l 161 338 l 246 338 l 246 -204 "
    },
    "\xe2\x82\x82": {
        ha: 432,
        x_min: 0,
        x_max: 0,
        o: "m 17 -153 l 104 -71 b 279 169 219 33 279 99 b 174 267 279 222 246 267 b 57 224 125 267 83 242 l 28 286 b 197 344 65 318 128 344 b 382 188 328 344 382 263 b 197 -86 382 83 303 7 l 154 -125 l 154 -128 l 392 -128 l 392 -204 l 17 -204 "
    },
    "\xe2\x82\x83": {
        ha: 424,
        x_min: 0,
        x_max: 0,
        o: "m 39 301 b 199 344 71 322 131 344 b 368 214 318 344 368 281 b 261 89 368 158 328 111 l 261 86 b 390 -49 338 75 390 22 b 171 -211 390 -135 313 -211 b 13 -172 104 -211 43 -193 l 38 -103 b 167 -139 60 -118 114 -139 b 288 -46 251 -139 289 -89 b 140 51 288 24 214 51 l 103 51 l 103 115 l 142 115 b 268 204 193 115 267 139 b 181 272 268 238 243 272 b 63 236 131 272 85 251 "
    },
    "\xe2\x82\x84": {
        ha: 482,
        x_min: 0,
        x_max: 0,
        o: "m 285 -204 l 285 -61 l 22 -61 l 22 -6 l 268 340 l 378 340 l 378 7 l 456 7 l 456 -61 l 378 -61 l 378 -204 m 285 171 b 289 258 285 201 288 231 l 286 258 b 239 176 269 226 256 201 l 118 10 l 119 7 l 285 7 "
    },
    "\xe2\x82\x85": {
        ha: 428,
        x_min: 0,
        x_max: 0,
        o: "m 372 261 l 157 261 l 139 143 b 182 146 150 144 164 146 b 310 115 228 146 274 138 b 388 -25 353 92 388 43 b 171 -211 388 -132 300 -211 b 26 -178 111 -211 54 -194 l 46 -108 b 169 -139 69 -122 117 -139 b 292 -33 232 -139 292 -99 b 135 78 292 32 247 78 b 56 72 103 78 76 74 l 92 338 l 372 338 "
    },
    "\xe2\x82\x86": {
        ha: 461,
        x_min: 0,
        x_max: 0,
        o: "m 371 271 b 315 268 356 271 335 271 b 128 99 204 253 142 182 l 129 99 b 260 156 156 129 201 156 b 429 -18 360 156 429 86 b 238 -211 429 -125 349 -211 b 32 21 108 -211 32 -114 b 126 261 32 124 69 208 b 315 340 174 307 238 333 b 371 343 338 343 357 344 m 236 -140 b 335 -24 294 -140 335 -90 b 229 89 335 44 294 89 b 131 26 186 89 149 63 b 124 -3 126 18 124 10 b 236 -140 124 -78 163 -140 "
    },
    "\xe2\x82\x87": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 392 338 l 392 278 l 154 -204 l 56 -204 l 293 260 l 293 261 l 26 261 l 26 338 "
    },
    "\xe2\x82\x88": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 232 344 b 401 210 346 344 401 278 b 314 88 401 164 376 115 l 314 85 b 422 -51 376 61 422 15 b 225 -211 422 -147 340 -211 b 33 -64 100 -211 33 -140 b 139 75 33 3 74 47 l 139 78 b 53 199 81 106 53 150 b 232 344 53 285 131 344 m 228 -146 b 328 -58 289 -146 328 -108 b 218 47 328 1 283 29 b 126 -53 160 31 126 -7 b 228 -146 126 -101 164 -146 m 229 281 b 140 203 171 281 140 244 b 238 113 140 154 178 128 b 314 200 281 125 314 156 b 229 281 314 239 289 281 "
    },
    "\xe2\x82\x89": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 81 -137 b 139 -136 96 -139 117 -137 b 256 -89 182 -131 224 -115 b 326 39 292 -60 317 -17 l 325 39 b 200 -14 296 6 254 -14 b 32 153 101 -14 32 56 b 228 344 32 256 113 344 b 422 115 353 344 422 249 b 326 -135 422 0 382 -83 b 144 -208 281 -178 215 -201 b 81 -210 121 -211 96 -211 m 224 275 b 125 157 167 275 125 224 b 224 53 125 99 163 53 b 322 103 269 53 304 75 b 328 131 326 110 328 119 b 224 275 328 210 297 275 "
    },
    "\xef\x9b\xa7": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 90 -211 b 29 -149 54 -211 29 -183 b 92 -86 29 -111 56 -86 b 151 -149 128 -86 151 -111 b 90 -211 151 -183 128 -211 "
    },
    "\xef\x9b\xa1": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 0 -303 b 54 -87 22 -243 44 -156 l 157 -81 b 67 -297 135 -157 97 -247 "
    },
    "\xef\x9b\xa3": {
        ha: 440,
        x_min: 0,
        x_max: 0,
        o: "m 186 -275 l 186 -193 b 49 -157 133 -193 81 -176 l 72 -86 b 201 -124 106 -107 151 -124 b 297 -53 260 -124 297 -94 b 203 36 297 -11 268 11 b 57 183 111 69 57 107 b 190 322 57 254 107 308 l 190 404 l 253 404 l 253 326 b 368 296 304 325 343 310 l 346 228 b 232 258 328 239 289 258 b 147 194 168 258 147 225 b 253 108 147 157 175 138 b 389 -44 346 75 389 31 b 249 -190 389 -112 340 -175 l 249 -275 "
    },
    "\xef\x9b\x9f": {
        ha: 438,
        x_min: 0,
        x_max: 0,
        o: "m 222 -215 l 222 -132 b 97 -71 167 -125 128 -104 b 50 67 68 -39 50 10 b 222 274 50 172 114 257 l 222 356 l 286 356 l 286 276 b 375 256 321 276 353 267 l 357 188 b 271 207 339 196 313 207 b 143 72 193 207 143 149 b 269 -62 143 -15 200 -62 b 363 -44 313 -62 342 -53 l 378 -110 b 286 -133 360 -119 325 -131 l 286 -215 "
    },
    "\xef\x9b\xa5": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 240 85 l 240 18 l 25 18 l 25 85 "
    },
    "\xe2\x82\x8d": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 233 386 b 133 49 178 307 133 199 b 233 -285 133 -99 179 -204 l 163 -285 b 56 49 113 -218 56 -111 b 163 386 56 211 113 319 "
    },
    "\xe2\x82\x8e": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 18 -285 b 118 51 72 -204 118 -97 b 18 386 118 199 72 306 l 89 386 b 196 51 139 319 196 213 b 89 -285 196 -110 139 -217 "
    },
    "\xef\x99\xa1": {
        ha: 467,
        x_min: 0,
        x_max: 0,
        o: "m 231 363 b 32 639 108 363 32 467 b 236 918 32 811 111 918 b 435 644 364 918 435 813 b 231 363 435 475 367 363 m 232 433 b 338 643 301 433 338 511 b 233 847 338 772 303 847 b 129 643 171 847 129 772 b 232 433 129 508 169 433 "
    },
    "\xef\x99\xa2": {
        ha: 339,
        x_min: 0,
        x_max: 0,
        o: "m 149 369 l 149 826 l 146 826 l 46 778 l 31 850 l 161 911 l 246 911 l 246 369 "
    },
    "\xef\x99\xa3": {
        ha: 432,
        x_min: 0,
        x_max: 0,
        o: "m 17 421 l 104 503 b 279 743 219 607 279 672 b 174 840 279 796 246 840 b 57 797 125 840 83 815 l 28 860 b 197 918 65 892 128 918 b 382 761 328 918 382 836 b 197 488 382 657 303 581 l 154 449 l 154 446 l 392 446 l 392 369 l 17 369 "
    },
    "\xef\x99\xa4": {
        ha: 424,
        x_min: 0,
        x_max: 0,
        o: "m 39 875 b 199 918 71 896 131 918 b 368 788 318 918 368 854 b 261 663 368 732 328 685 l 261 660 b 390 525 338 649 390 596 b 171 363 390 439 313 363 b 13 401 104 363 43 381 l 38 471 b 167 435 60 456 114 435 b 288 528 251 435 289 485 b 140 625 288 597 214 625 l 103 625 l 103 689 l 142 689 b 268 778 193 689 267 713 b 181 846 268 811 243 846 b 63 810 131 846 85 825 "
    },
    "\xef\x99\xa5": {
        ha: 482,
        x_min: 0,
        x_max: 0,
        o: "m 285 369 l 285 513 l 22 513 l 22 568 l 268 914 l 378 914 l 378 581 l 456 581 l 456 513 l 378 513 l 378 369 m 285 744 b 289 832 285 775 288 804 l 286 832 b 239 750 269 800 256 775 l 118 583 l 119 581 l 285 581 "
    },
    "\xef\x99\xa6": {
        ha: 428,
        x_min: 0,
        x_max: 0,
        o: "m 372 835 l 157 835 l 139 717 b 182 719 150 718 164 719 b 310 689 228 719 274 711 b 388 549 353 665 388 617 b 171 363 388 442 300 363 b 26 396 111 363 54 379 l 46 465 b 169 435 69 451 117 435 b 292 540 232 435 292 475 b 135 651 292 606 247 651 b 56 646 103 651 76 647 l 92 911 l 372 911 "
    },
    "\xef\x99\xa7": {
        ha: 461,
        x_min: 0,
        x_max: 0,
        o: "m 371 844 b 315 842 356 844 335 844 b 128 672 204 826 142 756 l 129 672 b 260 729 156 703 201 729 b 429 556 360 729 429 660 b 238 363 429 449 349 363 b 32 594 108 363 32 460 b 126 835 32 697 69 782 b 315 914 174 881 238 907 b 371 917 338 917 357 918 m 236 433 b 335 550 294 433 335 483 b 229 663 335 618 294 663 b 131 600 186 663 149 636 b 124 571 126 592 124 583 b 236 433 124 496 163 433 "
    },
    "\xef\x99\xa8": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 392 911 l 392 851 l 154 369 l 56 369 l 293 833 l 293 835 l 26 835 l 26 911 "
    },
    "\xef\x99\xa9": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 232 918 b 401 783 346 918 401 851 b 314 661 401 738 376 689 l 314 658 b 422 522 376 635 422 589 b 225 363 422 426 340 363 b 33 510 100 363 33 433 b 139 649 33 576 74 621 l 139 651 b 53 772 81 679 53 724 b 232 918 53 858 131 918 m 228 428 b 328 515 289 428 328 465 b 218 621 328 575 283 603 b 126 521 160 604 126 567 b 228 428 126 472 164 428 m 229 854 b 140 776 171 854 140 818 b 238 686 140 728 178 701 b 314 774 281 699 314 729 b 229 854 314 813 289 854 "
    },
    "\xef\x99\xaa": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 81 436 b 139 438 96 435 117 436 b 256 485 182 443 224 458 b 326 613 292 514 317 557 l 325 613 b 200 560 296 579 254 560 b 32 726 101 560 32 629 b 228 918 32 829 113 918 b 422 689 353 918 422 822 b 326 439 422 574 382 490 b 144 365 281 396 215 372 b 81 364 121 363 96 363 m 224 849 b 125 731 167 849 125 797 b 224 626 125 672 163 626 b 322 676 269 626 304 649 b 328 704 326 683 328 693 b 224 849 328 783 297 849 "
    },
    "\xef\x99\xac": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 90 363 b 29 425 54 363 29 390 b 92 488 29 463 56 488 b 151 425 128 488 151 463 b 90 363 151 390 128 363 "
    },
    "\xef\x99\xab": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 0 271 b 54 486 22 331 44 418 l 157 493 b 67 276 135 417 97 326 "
    },
    "\xef\x98\xaf": {
        ha: 440,
        x_min: 0,
        x_max: 0,
        o: "m 186 299 l 186 381 b 49 417 133 381 81 397 l 72 488 b 201 450 106 467 151 450 b 297 521 260 450 297 479 b 203 610 297 563 268 585 b 57 757 111 643 57 681 b 190 896 57 828 107 882 l 190 978 l 253 978 l 253 900 b 368 869 304 899 343 883 l 346 801 b 232 832 328 813 289 832 b 147 768 168 832 147 799 b 253 682 147 731 175 711 b 389 529 346 649 389 604 b 249 383 389 461 340 399 l 249 299 "
    },
    "\xef\x98\xae": {
        ha: 438,
        x_min: 0,
        x_max: 0,
        o: "m 222 358 l 222 442 b 97 503 167 449 128 469 b 50 640 68 535 50 583 b 222 847 50 746 114 831 l 222 929 l 286 929 l 286 850 b 375 829 321 850 353 840 l 357 761 b 271 781 339 769 313 781 b 143 646 193 781 143 722 b 269 511 143 558 200 511 b 363 529 313 511 342 521 l 378 464 b 286 440 360 454 325 443 l 286 358 "
    },
    "\xef\x98\xb0": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 240 658 l 240 592 l 25 592 l 25 658 "
    },
    "\xef\x98\xb1": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 233 960 b 133 622 178 881 133 772 b 233 289 133 475 179 369 l 163 289 b 56 622 113 356 56 463 b 163 960 56 785 113 893 "
    },
    "\xef\x98\xb2": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 18 289 b 118 625 72 369 118 476 b 18 960 118 772 72 879 l 89 960 b 196 625 139 893 196 786 b 89 289 196 464 139 357 "
    },
    "\xef\x99\x95": {
        ha: 467,
        x_min: 0,
        x_max: 0,
        o: "m 231 -7 b 32 269 108 -7 32 97 b 236 549 32 442 111 549 b 435 275 364 549 435 443 b 231 -7 435 106 367 -7 m 232 64 b 338 274 301 64 338 142 b 233 478 338 403 303 478 b 129 274 171 478 129 403 b 232 64 129 139 169 64 "
    },
    "\xef\x99\x96": {
        ha: 339,
        x_min: 0,
        x_max: 0,
        o: "m 149 0 l 149 457 l 146 457 l 46 408 l 31 481 l 161 542 l 246 542 l 246 0 "
    },
    "\xef\x99\x97": {
        ha: 432,
        x_min: 0,
        x_max: 0,
        o: "m 17 51 l 104 133 b 279 374 219 238 279 303 b 174 471 279 426 246 471 b 57 428 125 471 83 446 l 28 490 b 197 549 65 522 128 549 b 382 392 328 549 382 467 b 197 118 382 288 303 211 l 154 79 l 154 76 l 392 76 l 392 0 l 17 0 "
    },
    "\xef\x99\x98": {
        ha: 424,
        x_min: 0,
        x_max: 0,
        o: "m 39 506 b 199 549 71 526 131 549 b 368 418 318 549 368 485 b 261 293 368 363 328 315 l 261 290 b 390 156 338 279 390 226 b 171 -7 390 69 313 -7 b 13 32 104 -7 43 11 l 38 101 b 167 65 60 86 114 65 b 288 158 251 65 289 115 b 140 256 288 228 214 256 l 103 256 l 103 319 l 142 319 b 268 408 193 319 267 343 b 181 476 268 442 243 476 b 63 440 131 476 85 456 "
    },
    "\xef\x99\x99": {
        ha: 482,
        x_min: 0,
        x_max: 0,
        o: "m 285 0 l 285 143 l 22 143 l 22 199 l 268 544 l 378 544 l 378 211 l 456 211 l 456 143 l 378 143 l 378 0 m 285 375 b 289 463 285 406 288 435 l 286 463 b 239 381 269 431 256 406 l 118 214 l 119 211 l 285 211 "
    },
    "\xef\x99\x9a": {
        ha: 428,
        x_min: 0,
        x_max: 0,
        o: "m 372 465 l 157 465 l 139 347 b 182 350 150 349 164 350 b 310 319 228 350 274 342 b 388 179 353 296 388 247 b 171 -7 388 72 300 -7 b 26 26 111 -7 54 10 l 46 96 b 169 65 69 82 117 65 b 292 171 232 65 292 106 b 135 282 292 236 247 282 b 56 276 103 282 76 278 l 92 542 l 372 542 "
    },
    "\xef\x99\x9b": {
        ha: 461,
        x_min: 0,
        x_max: 0,
        o: "m 371 475 b 315 472 356 475 335 475 b 128 303 204 457 142 386 l 129 303 b 260 360 156 333 201 360 b 429 186 360 360 429 290 b 238 -7 429 79 349 -7 b 32 225 108 -7 32 90 b 126 465 32 328 69 413 b 315 544 174 511 238 538 b 371 547 338 547 357 549 m 236 64 b 335 181 294 64 335 114 b 229 293 335 249 294 293 b 131 231 186 293 149 267 b 124 201 126 222 124 214 b 236 64 124 126 163 64 "
    },
    "\xef\x99\x9c": {
        ha: 408,
        x_min: 0,
        x_max: 0,
        o: "m 392 542 l 392 482 l 154 0 l 56 0 l 293 464 l 293 465 l 26 465 l 26 542 "
    },
    "\xef\x99\x9d": {
        ha: 456,
        x_min: 0,
        x_max: 0,
        o: "m 232 549 b 401 414 346 549 401 482 b 314 292 401 368 376 319 l 314 289 b 422 153 376 265 422 219 b 225 -7 422 57 340 -7 b 33 140 100 -7 33 64 b 139 279 33 207 74 251 l 139 282 b 53 403 81 310 53 354 b 232 549 53 489 131 549 m 228 58 b 328 146 289 58 328 96 b 218 251 328 206 283 233 b 126 151 160 235 126 197 b 228 58 126 103 164 58 m 229 485 b 140 407 171 485 140 449 b 238 317 140 358 178 332 b 314 404 281 329 314 360 b 229 485 314 443 289 485 "
    },
    "\xef\x99\x9e": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 81 67 b 139 68 96 65 117 67 b 256 115 182 74 224 89 b 326 243 292 144 317 188 l 325 243 b 200 190 296 210 254 190 b 32 357 101 190 32 260 b 228 549 32 460 113 549 b 422 319 353 549 422 453 b 326 69 422 204 382 121 b 144 -4 281 26 215 3 b 81 -6 121 -7 96 -7 m 224 479 b 125 361 167 479 125 428 b 224 257 125 303 163 257 b 322 307 269 257 304 279 b 328 335 326 314 328 324 b 224 479 328 414 297 479 "
    },
    "\xef\x99\xa0": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 90 -7 b 29 56 54 -7 29 21 b 92 118 29 93 56 118 b 151 56 128 118 151 93 b 90 -7 151 21 128 -7 "
    },
    "\xef\x99\x9f": {
        ha: 182,
        x_min: 0,
        x_max: 0,
        o: "m 0 -99 b 54 117 22 -39 44 49 l 157 124 b 67 -93 135 47 97 -43 "
    },
    "\xef\x98\xaa": {
        ha: 440,
        x_min: 0,
        x_max: 0,
        o: "m 186 -71 l 186 11 b 49 47 133 11 81 28 l 72 118 b 201 81 106 97 151 81 b 297 151 260 81 297 110 b 203 240 297 193 268 215 b 57 388 111 274 57 311 b 190 526 57 458 107 513 l 190 608 l 253 608 l 253 531 b 368 500 304 529 343 514 l 346 432 b 232 463 328 443 289 463 b 147 399 168 463 147 429 b 253 313 147 361 175 342 b 389 160 346 279 389 235 b 249 14 389 92 340 29 l 249 -71 "
    },
    "\xef\x98\xa9": {
        ha: 438,
        x_min: 0,
        x_max: 0,
        o: "m 222 -11 l 222 72 b 97 133 167 79 128 100 b 50 271 68 165 50 214 b 222 478 50 376 114 461 l 222 560 l 286 560 l 286 481 b 375 460 321 481 353 471 l 357 392 b 271 411 339 400 313 411 b 143 276 193 411 143 353 b 269 142 143 189 200 142 b 363 160 313 142 342 151 l 378 94 b 286 71 360 85 325 74 l 286 -11 "
    },
    "\xef\x98\xab": {
        ha: 265,
        x_min: 0,
        x_max: 0,
        o: "m 240 289 l 240 222 l 25 222 l 25 289 "
    },
    "\xef\x98\xac": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 233 590 b 133 253 178 511 133 403 b 233 -81 133 106 179 0 l 163 -81 b 56 253 113 -14 56 93 b 163 590 56 415 113 524 "
    },
    "\xef\x98\xad": {
        ha: 250,
        x_min: 0,
        x_max: 0,
        o: "m 18 -81 b 118 256 72 0 118 107 b 18 590 118 403 72 510 l 89 590 b 196 256 139 524 196 417 b 89 -81 196 94 139 -12 "
    },
    "\xef\x98\xb3": {
        ha: 1024,
        x_min: 0,
        x_max: 0,
        o: "m 651 640 b 582 650 638 644 614 650 b 361 400 460 650 361 535 b 453 294 361 339 392 294 b 622 483 533 294 607 397 m 728 40 b 481 -15 651 0 574 -15 b 60 418 253 -15 60 151 b 567 951 60 704 258 951 b 971 550 808 951 971 782 b 724 219 971 342 854 219 b 621 342 668 219 617 257 l 615 342 b 419 219 567 260 503 219 b 269 394 339 219 269 285 b 599 724 269 567 406 724 b 747 694 658 724 711 711 l 700 443 b 742 288 679 338 696 289 b 892 542 813 286 892 381 b 556 888 892 743 771 888 b 139 426 329 888 139 708 b 496 51 139 194 290 51 b 706 100 575 51 649 68 "
    },
    "\xef\x9a\xbc": {
        ha: 1389,
        x_min: 0,
        x_max: 0,
        o: "m 1347 499 l 1347 415 l 42 415 l 42 499 "
    },
    "\xef\x9a\xbb": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 653 499 l 653 415 l 42 415 l 42 499 "
    },
    "\xef\x9a\xb4": {
        ha: 319,
        x_min: 0,
        x_max: 0,
        o: "m 93 -4 l 113 658 l 207 658 l 228 -4 m 161 949 b 242 861 210 949 242 913 b 160 776 242 814 210 776 b 78 861 111 776 78 814 b 161 949 78 913 113 949 "
    },
    "\xef\x9a\xb6": {
        ha: 582,
        x_min: 0,
        x_max: 0,
        o: "m 136 454 l 322 199 l 224 199 l 40 454 l 224 710 l 322 710 m 364 454 l 550 199 l 451 199 l 268 454 l 451 710 l 550 710 "
    },
    "\xef\x9a\xb7": {
        ha: 582,
        x_min: 0,
        x_max: 0,
        o: "m 32 710 l 131 710 l 315 454 l 131 199 l 33 199 l 218 454 m 258 710 l 357 710 l 542 454 l 357 199 l 260 199 l 444 454 "
    },
    "\xef\x9a\xb8": {
        ha: 354,
        x_min: 0,
        x_max: 0,
        o: "m 136 454 l 322 199 l 224 199 l 40 454 l 224 710 l 322 710 "
    },
    "\xef\x9a\xb9": {
        ha: 354,
        x_min: 0,
        x_max: 0,
        o: "m 32 710 l 129 710 l 315 454 l 131 199 l 32 199 l 218 454 "
    },
    "\xef\x9a\xba": {
        ha: 426,
        x_min: 0,
        x_max: 0,
        o: "m 385 525 l 385 435 l 42 435 l 42 525 "
    },
    "\xef\x9a\xb5": {
        ha: 564,
        x_min: 0,
        x_max: 0,
        o: "m 329 951 b 411 864 379 951 411 915 b 329 778 411 815 379 778 b 247 864 279 778 247 815 b 329 951 247 915 281 951 m 382 667 l 386 631 b 299 393 394 557 368 476 b 203 206 236 319 203 268 b 335 86 203 135 246 88 b 475 131 383 86 439 103 l 508 42 b 308 -14 461 10 382 -14 b 76 190 150 -14 76 85 b 197 429 76 283 129 350 b 275 632 257 501 279 561 l 274 667 "
    },
    "\xef\x9a\xb2": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 39 489 b 151 593 138 490 151 543 b 140 708 151 631 146 669 b 129 824 135 747 129 786 b 331 1007 129 951 213 1007 l 360 1007 l 360 931 l 335 931 b 225 810 253 931 225 886 b 235 711 225 778 229 744 b 244 606 240 678 244 643 b 144 457 246 517 207 472 l 144 454 b 244 301 207 438 246 390 b 235 196 244 265 240 231 b 225 97 229 163 225 129 b 335 -25 225 18 257 -25 l 360 -25 l 360 -101 l 331 -101 b 129 89 215 -101 129 -50 b 140 203 129 126 135 165 b 151 315 146 240 151 279 b 39 419 151 360 138 419 "
    },
    "\xef\x9a\xb3": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 356 419 b 243 315 257 419 243 360 b 254 203 243 279 249 240 b 265 89 260 165 265 126 b 64 -101 265 -50 178 -101 l 35 -101 l 35 -25 l 58 -25 b 169 97 136 -22 169 18 b 160 196 169 129 164 163 b 149 301 154 231 149 265 b 249 454 149 390 188 438 l 249 457 b 149 606 188 472 149 517 b 160 711 149 643 154 678 b 169 810 164 744 169 778 b 60 931 169 886 140 928 l 35 931 l 35 1007 l 63 1007 b 265 824 181 1007 265 951 b 254 708 265 786 260 747 b 243 593 249 669 243 631 b 356 489 243 543 257 490 "
    },
    "\xef\x9a\xb0": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 114 -101 l 114 1006 l 368 1006 l 368 931 l 208 931 l 208 -25 l 368 -25 l 368 -101 "
    },
    "\xef\x9a\xb1": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 281 1007 l 281 -101 l 26 -101 l 26 -25 l 186 -25 l 186 932 l 26 932 l 26 1007 "
    },
    "\xef\x9a\xae": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 367 1019 b 192 450 265 882 192 703 b 367 -112 192 203 268 26 l 271 -112 b 89 451 183 3 89 181 b 271 1019 90 724 183 903 "
    },
    "\xef\x9a\xaf": {
        ha: 394,
        x_min: 0,
        x_max: 0,
        o: "m 28 -112 b 203 454 126 25 203 204 b 28 1019 203 704 128 881 l 122 1019 b 304 454 211 906 304 726 b 122 -112 304 182 211 4 "
    },
    "\xef\x9a\xbd": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 143 382 b 61 469 94 382 60 419 b 144 557 61 519 96 557 b 226 469 193 557 225 521 b 143 382 226 419 193 382 "
    },
    "\xe2\x89\xa4": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 92 406 l 92 488 l 736 754 l 736 663 l 206 447 l 206 444 l 736 231 l 736 138 m 94 0 l 94 81 l 736 81 l 736 0 "
    },
    "\xe2\x89\xa5": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 92 138 l 92 231 l 622 444 l 622 447 l 92 663 l 92 754 l 736 488 l 736 406 m 92 0 l 92 81 l 733 81 l 733 0 "
    },
    "\xe2\x89\x88": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 792 521 b 581 413 747 465 667 413 b 403 464 500 413 447 444 b 244 511 361 481 314 511 b 81 429 181 511 118 468 l 32 488 b 244 594 76 540 157 594 b 422 544 326 594 376 563 b 579 497 464 526 510 497 b 740 578 643 497 706 542 m 797 247 b 585 138 753 190 671 138 b 408 188 506 138 454 169 b 249 235 367 204 319 235 b 86 153 188 235 124 193 l 39 213 b 250 318 82 265 164 318 b 428 268 332 318 382 288 b 585 221 469 251 517 221 b 747 303 650 221 713 263 "
    },
    "\xe2\x89\xa0": {
        ha: 828,
        x_min: 0,
        x_max: 0,
        o: "m 342 194 l 236 25 l 146 25 l 256 194 l 56 194 l 56 278 l 308 278 l 432 469 l 56 469 l 56 553 l 485 553 l 590 722 l 681 722 l 571 553 l 772 553 l 772 469 l 518 469 l 396 278 l 772 278 l 772 194 "
    },
    "\xe2\x88\x9e": {
        ha: 1011,
        x_min: 0,
        x_max: 0,
        o: "m 751 161 b 506 310 649 161 572 243 b 249 161 435 239 361 161 b 49 367 132 161 49 247 b 260 572 49 476 138 572 b 506 424 363 572 439 490 b 763 572 576 494 650 572 b 963 367 881 572 963 486 b 751 161 963 257 874 161 m 753 244 b 875 367 822 244 875 301 b 757 489 875 438 825 489 b 561 367 678 489 614 421 b 753 244 615 317 672 244 m 254 244 b 450 367 333 244 397 313 b 258 489 396 417 339 489 b 136 367 189 489 136 432 b 254 244 136 296 186 244 "
    },
    "\xe2\x97\x8a": {
        ha: 725,
        x_min: 0,
        x_max: 0,
        o: "m 410 -43 l 314 -43 l 63 451 l 314 944 l 410 944 l 663 451 m 376 819 b 361 851 371 828 365 840 l 358 851 b 344 819 356 840 350 828 l 167 453 l 349 83 b 363 51 353 74 360 61 l 365 51 b 379 83 369 61 375 74 l 557 449 "
    },
    "\xe2\x88\xab": {
        ha: 439,
        x_min: 0,
        x_max: 0,
        o: "m 410 1017 b 368 1022 397 1019 382 1022 b 304 992 343 1022 319 1013 b 263 772 276 957 263 896 b 279 119 263 571 279 329 b 221 -142 279 -17 254 -97 b 89 -208 190 -186 142 -208 b 14 -196 57 -208 26 -203 l 31 -115 b 79 -124 42 -119 60 -124 b 140 -94 101 -124 124 -115 b 183 119 164 -65 183 -14 b 167 781 183 329 167 576 b 239 1053 167 921 189 999 b 363 1104 272 1089 315 1104 b 425 1094 389 1104 411 1100 "
    },
    "\xe2\x88\x82": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 81 935 b 321 1008 126 968 203 1008 b 686 517 513 1008 686 836 b 313 -15 686 164 508 -15 b 36 276 125 -15 36 129 b 340 615 36 465 169 615 b 567 494 456 615 538 549 l 568 494 b 569 540 569 508 569 525 b 310 908 569 785 440 908 b 119 853 219 908 157 879 m 322 85 b 556 385 447 85 536 226 b 360 518 529 453 456 518 b 158 279 249 518 158 415 b 322 85 158 157 225 85 "
    },
    "\xe2\x88\x8f": {
        ha: 854,
        x_min: 0,
        x_max: 0,
        o: "m 711 801 l 711 -125 l 596 -125 l 596 801 l 257 801 l 257 -125 l 142 -125 l 142 801 l 13 801 l 13 903 l 840 903 l 840 801 "
    },
    "\xe2\x88\x9a": {
        ha: 781,
        x_min: 0,
        x_max: 0,
        o: "m 485 -132 l 396 -132 l 175 463 l 71 418 l 44 483 l 236 564 l 407 83 b 433 -6 418 54 428 21 l 436 -6 b 454 85 440 18 447 54 l 713 1149 l 804 1149 "
    },
    "\xe2\x88\x91": {
        ha: 704,
        x_min: 0,
        x_max: 0,
        o: "m 13 -125 l 13 -53 l 361 386 l 31 821 l 31 903 l 671 903 l 671 803 l 186 803 l 186 797 l 494 390 l 169 -19 l 169 -24 l 714 -24 l 714 -125 "
    },
    "\xe2\x88\x86": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 36 0 l 36 68 l 329 911 l 465 911 l 756 69 l 756 0 m 461 582 b 393 801 439 650 410 742 l 389 801 b 329 601 376 753 351 667 l 158 100 l 626 100 "
    },
    "\xce\xa9": {
        ha: 979,
        x_min: 0,
        x_max: 0,
        o: "m 42 0 l 42 96 l 243 96 l 243 101 b 60 497 150 178 60 317 b 496 951 60 764 247 951 b 918 508 756 951 918 756 b 733 101 918 317 826 179 l 733 96 l 938 96 l 938 0 l 586 0 l 586 76 b 793 489 697 153 793 301 b 493 853 793 660 692 853 b 186 488 296 853 186 671 b 394 76 186 313 283 146 l 394 0 "
    },
    "\xcf\x80": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 629 576 l 629 200 b 649 0 629 90 639 35 l 531 0 b 510 188 519 21 510 81 l 510 576 l 289 576 b 194 0 283 400 243 111 l 78 0 b 172 576 128 132 167 399 b 35 564 118 576 69 574 l 18 636 b 211 672 49 657 104 672 l 736 672 l 722 576 "
    },
    "\xc7\xbb": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 549 1158 l 350 1011 l 264 1011 l 413 1158 m 335 722 b 194 849 251 722 194 778 b 336 979 194 921 249 979 b 474 849 419 979 474 924 b 335 722 474 776 414 722 m 333 774 b 406 850 378 774 406 808 b 333 928 406 893 378 928 b 265 849 290 928 265 890 b 333 774 265 811 293 774 m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 "
    },
    "\xc4\x82": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 324 1135 b 424 1067 332 1103 356 1067 b 525 1135 492 1067 518 1099 l 596 1135 b 422 988 594 1053 542 988 b 251 1135 304 988 254 1053 "
    },
    "\xc4\x80": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 589 1094 l 589 1018 l 257 1018 l 257 1094 "
    },
    "\xc4\x84": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 818 0 l 771 0 b 694 -132 749 -22 694 -82 b 765 -204 694 -178 724 -204 b 828 -190 789 -204 811 -199 l 847 -253 b 735 -285 818 -275 769 -285 b 606 -165 657 -285 606 -243 b 688 6 606 -97 654 -32 l 589 294 l 257 294 l 160 0 l 35 0 l 353 936 l 499 936 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 "
    },
    "\xc4\x86": {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 m 703 1151 l 526 989 l 428 989 l 556 1151 "
    },
    "\xc4\x8c": {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 m 443 990 l 299 1149 l 400 1149 l 489 1051 l 492 1051 l 579 1149 l 679 1149 l 536 990 "
    },
    "\xc4\x88": {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 m 529 1150 l 675 992 l 572 992 l 485 1088 l 482 1088 l 393 992 l 293 992 l 436 1150 "
    },
    "\xc4\x8a": {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 m 483 1000 b 414 1069 444 1000 414 1033 b 485 1139 414 1106 444 1139 b 551 1069 522 1139 551 1106 b 483 1000 551 1033 522 1000 "
    },
    "\xc4\x8e": {
        ha: 925,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 363 943 179 935 267 943 b 742 826 536 943 660 903 b 874 490 825 750 874 642 b 739 126 874 338 826 213 b 325 -8 651 39 507 -8 b 106 3 239 -8 167 -4 m 226 96 b 349 89 257 90 301 89 b 747 486 607 89 747 233 b 368 847 749 707 624 847 b 226 835 306 847 258 842 m 382 989 l 236 1147 l 339 1147 l 428 1051 l 431 1051 l 518 1147 l 618 1147 l 475 989 "
    },
    "\xc4\x94": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 253 1146 b 353 1078 261 1114 285 1078 b 454 1146 421 1078 447 1110 l 525 1146 b 351 999 524 1064 471 999 b 181 1146 233 999 183 1064 "
    },
    "\xc4\x9a": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 311 986 l 165 1144 l 268 1144 l 357 1049 l 360 1049 l 447 1144 l 546 1144 l 404 986 "
    },
    "\xc4\x96": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 349 1001 b 279 1072 308 1001 279 1036 b 349 1142 279 1108 310 1142 b 415 1072 386 1142 415 1108 b 349 1001 415 1036 386 1001 "
    },
    "\xc4\x92": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 526 1094 l 526 1018 l 193 1018 l 193 1094 "
    },
    "\xc4\x98": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 639 -257 b 528 -286 607 -276 569 -286 b 400 -174 449 -286 400 -246 b 511 0 400 -99 461 -33 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 l 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 611 0 b 496 -147 553 -37 496 -96 b 560 -203 496 -183 522 -203 b 621 -192 581 -203 600 -200 "
    },
    "\xc4\x9e": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 m 393 1149 b 493 1081 400 1117 425 1081 b 593 1149 560 1081 586 1113 l 664 1149 b 490 1001 663 1067 610 1001 b 321 1149 372 1001 322 1065 "
    },
    "\xc4\x9c": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 m 546 1149 l 692 990 l 589 990 l 500 1086 l 497 1086 l 410 990 l 310 990 l 453 1149 "
    },
    "\xc4\xa2": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 m 390 -251 b 494 -160 443 -242 494 -215 b 447 -76 494 -128 471 -96 l 538 -57 b 592 -158 565 -75 592 -112 b 414 -308 592 -261 499 -303 "
    },
    "\xc4\xa0": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 m 503 1000 b 433 1069 463 1000 433 1033 b 503 1139 433 1106 464 1139 b 569 1069 542 1139 569 1106 b 503 1000 569 1033 542 1000 "
    },
    "\xee\x80\x80": {
        ha: 897,
        x_min: 0,
        x_max: 0,
        o: "m 818 42 b 531 -10 764 22 657 -10 b 181 114 389 -10 272 26 b 50 463 100 192 50 317 b 557 946 51 742 243 946 b 790 903 665 946 750 922 l 761 804 b 554 844 711 826 649 844 b 178 468 326 844 178 703 b 539 90 178 231 321 90 b 700 115 618 90 672 101 l 700 394 l 510 394 l 510 492 l 818 492 m 339 993 b 433 1135 338 1078 374 1135 b 517 1107 464 1135 488 1122 b 582 1082 539 1094 561 1082 b 619 1136 604 1082 617 1092 l 685 1136 b 590 1001 686 1049 656 1001 b 506 1028 561 1001 536 1013 b 440 1054 479 1042 461 1054 b 404 993 418 1054 408 1031 "
    },
    "\xc4\xa4": {
        ha: 906,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 544 l 679 544 l 679 936 l 801 936 l 801 0 l 679 0 l 679 439 l 226 439 l 226 0 l 106 0 l 106 936 m 499 1144 l 644 986 l 542 986 l 454 1082 l 451 1082 l 363 986 l 264 986 l 406 1144 "
    },
    "\xc4\xac": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 67 1143 b 167 1075 74 1111 99 1075 b 267 1143 233 1075 260 1107 l 338 1143 b 165 996 336 1061 285 996 b -6 1143 46 996 -4 1060 "
    },
    "\xc4\xb0": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 168 1001 b 99 1072 128 1001 99 1036 b 168 1142 99 1108 129 1142 b 235 1072 206 1142 235 1108 b 168 1001 235 1036 206 1001 "
    },
    "\xc4\xaa": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 333 1094 l 333 1018 l 1 1018 l 1 1094 "
    },
    "\xc4\xae": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 0 l 185 0 b 128 -136 164 -29 128 -86 b 199 -208 128 -183 158 -208 b 261 -196 225 -208 246 -203 l 281 -258 b 168 -290 251 -281 203 -290 b 39 -171 92 -290 39 -249 b 106 0 39 -103 81 -37 l 106 936 l 226 936 "
    },
    "\xc4\xa8": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m -6 993 b 89 1135 -8 1078 28 1135 b 171 1107 119 1135 142 1122 b 238 1082 193 1094 215 1082 b 275 1136 258 1082 271 1092 l 339 1136 b 246 1001 340 1049 310 1001 b 161 1028 217 1001 192 1013 b 96 1054 135 1042 115 1054 b 60 993 74 1054 63 1031 "
    },
    "\xc4\xb4": {
        ha: 514,
        x_min: 0,
        x_max: 0,
        o: "m 297 936 l 418 936 l 418 310 b 135 -15 418 61 296 -15 b 6 7 90 -15 36 -6 l 24 106 b 125 88 49 96 85 88 b 297 319 233 88 297 136 m 397 1144 l 543 986 l 440 986 l 353 1082 l 350 1082 l 261 986 l 163 986 l 304 1144 "
    },
    "\xc4\xb6": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 485 l 231 485 b 304 585 256 521 281 554 l 590 936 l 740 936 l 401 539 l 767 0 l 624 0 l 315 460 l 226 357 l 226 0 l 106 0 m 275 -249 b 379 -158 329 -240 379 -212 b 332 -74 379 -125 357 -93 l 422 -54 b 478 -157 450 -72 478 -111 b 299 -306 478 -258 385 -300 "
    },
    "\xc4\xb9": {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 101 l 626 101 l 626 0 l 106 0 m 396 1149 l 219 986 l 119 986 l 249 1149 "
    },
    "\xc4\xbd": {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 101 l 626 101 l 626 0 l 106 0 m 338 757 b 442 847 390 765 442 793 b 394 932 442 881 418 911 l 485 951 b 540 849 513 933 540 894 b 361 700 540 747 446 706 "
    },
    "\xc4\xbb": {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 101 l 626 101 l 626 0 l 106 0 m 236 -251 b 340 -160 290 -242 340 -215 b 293 -76 340 -128 318 -96 l 383 -57 b 439 -158 411 -75 439 -112 b 260 -308 439 -261 346 -303 "
    },
    "\xc4\xbf": {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 101 l 626 101 l 626 0 l 106 0 m 474 446 b 404 515 433 446 404 479 b 474 585 404 553 435 585 b 540 515 511 585 540 553 b 474 446 540 479 511 446 "
    },
    "\xee\x80\x81": {
        ha: 1117,
        x_min: 0,
        x_max: 0,
        o: "m 894 411 b 881 815 888 542 879 699 l 876 815 b 758 460 844 706 806 589 l 593 6 l 501 6 l 350 451 b 242 815 306 583 268 704 l 239 815 b 221 401 236 699 229 542 l 196 0 l 81 0 l 146 936 l 300 936 l 460 483 b 554 168 499 368 531 265 l 558 168 b 657 483 582 263 615 365 l 824 936 l 978 936 l 1036 0 l 918 0 m 603 1144 l 749 986 l 646 986 l 558 1082 l 556 1082 l 467 986 l 367 986 l 510 1144 "
    },
    "\xc5\x83": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 m 663 1149 l 485 986 l 386 986 l 514 1149 "
    },
    "\xc5\x87": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 m 413 979 l 268 1138 l 369 1138 l 460 1040 l 463 1040 l 550 1138 l 649 1138 l 506 979 "
    },
    "\xee\x80\x82": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 m 503 1144 l 647 986 l 546 986 l 457 1082 l 454 1082 l 365 986 l 267 986 l 410 1144 "
    },
    "\xc5\x85": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 m 351 -250 b 456 -160 404 -242 456 -214 b 408 -75 456 -126 432 -94 l 499 -56 b 553 -158 526 -74 553 -112 b 375 -307 553 -260 460 -301 "
    },
    "\xc5\x8e": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 378 1153 b 478 1085 385 1121 410 1085 b 578 1153 544 1085 571 1117 l 649 1153 b 476 1006 647 1071 596 1006 b 306 1153 357 1006 307 1071 "
    },
    "\xc5\x90": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 575 1153 l 419 997 l 331 997 l 442 1153 m 779 1153 l 625 997 l 536 997 l 647 1153 "
    },
    "\xc5\x8c": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 646 1103 l 646 1026 l 313 1026 l 313 1103 "
    },
    "\xc7\xbe": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 88 -6 l 174 117 b 50 463 96 200 50 324 b 482 951 50 758 238 951 b 715 878 568 951 649 926 l 797 990 l 871 940 l 785 821 b 906 476 863 736 906 614 b 481 -15 906 150 704 -15 b 243 60 392 -15 310 11 l 156 -60 m 656 789 b 481 854 608 829 550 854 b 174 469 276 854 174 665 b 243 218 174 365 201 290 l 244 219 m 303 149 b 478 82 349 106 403 82 b 782 472 674 82 782 261 b 717 715 782 551 765 636 l 713 715 m 692 1160 l 515 997 l 415 997 l 544 1160 "
    },
    "\xc5\x94": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 338 943 167 936 254 943 b 608 867 467 943 550 919 b 682 689 656 825 682 761 b 506 450 682 565 604 483 l 506 446 b 643 257 578 421 621 354 b 715 0 674 126 696 36 l 590 0 b 528 224 575 26 554 107 b 340 406 500 353 450 401 l 226 406 l 226 0 l 106 0 m 226 497 l 350 497 b 561 675 479 497 561 568 b 346 850 561 796 474 849 b 226 839 288 850 246 844 m 567 1151 l 389 990 l 290 990 l 419 1151 "
    },
    "\xc5\x98": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 338 943 167 936 254 943 b 608 867 467 943 550 919 b 682 689 656 825 682 761 b 506 450 682 565 604 483 l 506 446 b 643 257 578 421 621 354 b 715 0 674 126 696 36 l 590 0 b 528 224 575 26 554 107 b 340 406 500 353 450 401 l 226 406 l 226 0 l 106 0 m 226 497 l 350 497 b 561 675 479 497 561 568 b 346 850 561 796 474 849 b 226 839 288 850 246 844 m 319 990 l 175 1149 l 276 1149 l 365 1051 l 368 1051 l 457 1149 l 556 1149 l 413 990 "
    },
    "\xc5\x96": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 338 943 167 936 254 943 b 608 867 467 943 550 919 b 682 689 656 825 682 761 b 506 450 682 565 604 483 l 506 446 b 643 257 578 421 621 354 b 715 0 674 126 696 36 l 590 0 b 528 224 575 26 554 107 b 340 406 500 353 450 401 l 226 406 l 226 0 l 106 0 m 226 497 l 350 497 b 561 675 479 497 561 568 b 346 850 561 796 474 849 b 226 839 288 850 246 844 m 271 -242 b 375 -150 324 -232 375 -206 b 328 -67 375 -118 351 -86 l 418 -47 b 472 -149 446 -65 472 -103 b 294 -299 472 -251 379 -293 "
    },
    "\xc5\x9a": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 m 563 1151 l 385 990 l 286 990 l 414 1151 "
    },
    "\xc5\x9e": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 382 -7 625 132 546 22 l 343 -69 b 440 -167 396 -76 440 -115 b 297 -278 440 -246 372 -278 b 200 -254 260 -278 224 -268 l 221 -194 b 297 -215 243 -207 268 -215 b 356 -171 328 -215 356 -201 b 247 -112 356 -136 313 -119 l 303 -14 b 293 -14 300 -14 296 -14 b 58 46 213 -14 111 11 "
    },
    "\xc5\x9c": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 m 390 1149 l 535 990 l 433 990 l 344 1086 l 342 1086 l 254 990 l 154 990 l 297 1149 "
    },
    "\xc8\x98": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 m 235 -251 b 339 -160 288 -242 339 -215 b 290 -76 339 -128 315 -96 l 382 -57 b 436 -158 410 -75 436 -112 b 257 -308 436 -261 343 -303 "
    },
    "\xc5\xa4": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 l 283 0 m 299 986 l 154 1144 l 256 1144 l 344 1049 l 347 1049 l 435 1144 l 535 1144 l 392 986 "
    },
    "\xc8\x9a": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 l 283 0 m 226 -251 b 331 -160 281 -242 331 -215 b 283 -76 331 -128 308 -96 l 374 -57 b 429 -158 401 -75 429 -112 b 250 -308 429 -261 336 -303 "
    },
    "\xc5\xac": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 349 1149 b 449 1081 356 1117 381 1081 b 550 1149 517 1081 543 1113 l 621 1149 b 447 1001 619 1068 567 1001 b 276 1149 329 1001 279 1067 "
    },
    "\xc5\xb0": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 525 1149 l 371 993 l 282 993 l 392 1149 m 729 1149 l 575 993 l 486 993 l 597 1149 "
    },
    "\xc5\xaa": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 615 1094 l 615 1018 l 283 1018 l 283 1094 "
    },
    "\xc5\xb2": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 596 -250 b 482 -283 567 -271 519 -283 b 357 -172 404 -283 357 -242 b 436 -14 357 -111 399 -54 b 428 -15 433 -14 431 -15 b 104 385 243 -8 104 100 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 536 -1 794 151 688 29 b 451 -142 499 -36 451 -92 b 514 -201 451 -181 479 -201 b 578 -187 536 -201 558 -196 "
    },
    "\xc5\xae": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 450 1211 b 588 1086 536 1211 588 1156 b 450 963 588 1017 531 963 b 311 1085 367 963 311 1018 b 450 1211 311 1154 364 1211 m 449 1161 b 382 1085 407 1161 382 1125 b 449 1014 382 1050 408 1014 b 517 1088 489 1014 517 1047 b 449 1161 517 1128 489 1161 "
    },
    "\xc5\xa8": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 276 993 b 371 1135 275 1078 311 1135 b 453 1107 401 1135 424 1122 b 519 1082 476 1094 499 1082 b 557 1136 542 1082 554 1092 l 622 1136 b 528 1001 624 1049 593 1001 b 443 1028 499 1001 474 1013 b 378 1054 417 1042 399 1054 b 342 993 356 1054 346 1031 "
    },
    "\xe1\xba\x82": {
        ha: 1175,
        x_min: 0,
        x_max: 0,
        o: "m 258 0 l 21 936 l 149 936 l 260 463 b 329 139 288 346 313 229 l 332 139 b 408 464 347 232 376 343 l 533 936 l 660 936 l 774 461 b 839 140 800 350 825 239 l 842 140 b 917 464 861 243 888 347 l 1040 936 l 1164 936 l 899 0 l 772 0 l 654 488 b 593 793 625 607 606 699 l 590 793 b 518 488 574 700 553 608 l 385 0 m 810 1149 l 632 986 l 533 986 l 661 1149 "
    },
    "\xc5\xb4": {
        ha: 1175,
        x_min: 0,
        x_max: 0,
        o: "m 258 0 l 21 936 l 149 936 l 260 463 b 329 139 288 346 313 229 l 332 139 b 408 464 347 232 376 343 l 533 936 l 660 936 l 774 461 b 839 140 800 350 825 239 l 842 140 b 917 464 861 243 888 347 l 1040 936 l 1164 936 l 899 0 l 772 0 l 654 488 b 593 793 625 607 606 699 l 590 793 b 518 488 574 700 553 608 l 385 0 m 635 1144 l 781 986 l 679 986 l 590 1082 l 588 1082 l 499 986 l 400 986 l 542 1144 "
    },
    "\xe1\xba\x84": {
        ha: 1175,
        x_min: 0,
        x_max: 0,
        o: "m 258 0 l 21 936 l 149 936 l 260 463 b 329 139 288 346 313 229 l 332 139 b 408 464 347 232 376 343 l 533 936 l 660 936 l 774 461 b 839 140 800 350 825 239 l 842 140 b 917 464 861 243 888 347 l 1040 936 l 1164 936 l 899 0 l 772 0 l 654 488 b 593 793 625 607 606 699 l 590 793 b 518 488 574 700 553 608 l 385 0 m 464 1001 b 396 1072 424 1001 396 1033 b 465 1142 396 1110 425 1142 b 531 1072 503 1142 531 1111 b 464 1001 531 1033 504 1001 m 721 1001 b 654 1072 681 1001 654 1033 b 722 1142 654 1110 683 1142 b 789 1072 761 1142 789 1111 b 721 1001 789 1033 763 1001 "
    },
    "\xe1\xba\x80": {
        ha: 1175,
        x_min: 0,
        x_max: 0,
        o: "m 258 0 l 21 936 l 149 936 l 260 463 b 329 139 288 346 313 229 l 332 139 b 408 464 347 232 376 343 l 533 936 l 660 936 l 774 461 b 839 140 800 350 825 239 l 842 140 b 917 464 861 243 888 347 l 1040 936 l 1164 936 l 899 0 l 772 0 l 654 488 b 593 793 625 607 606 699 l 590 793 b 518 488 574 700 553 608 l 385 0 m 526 1149 l 656 988 l 556 988 l 379 1149 "
    },
    "\xc5\xb6": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 422 1144 l 567 986 l 465 986 l 376 1082 l 374 1082 l 286 986 l 186 986 l 329 1144 "
    },
    "\xe1\xbb\xb2": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 331 1139 l 458 978 l 360 978 l 182 1139 "
    },
    "\xc8\xb2": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 542 1094 l 542 1018 l 210 1018 l 210 1094 "
    },
    "\xc5\xb9": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 42 71 l 561 831 l 561 835 l 86 835 l 86 936 l 718 936 l 718 863 l 201 106 l 201 101 l 725 101 l 725 0 l 42 0 m 599 1149 l 422 986 l 324 986 l 451 1149 "
    },
    "\xc5\xbb": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 42 71 l 561 831 l 561 835 l 86 835 l 86 936 l 718 936 l 718 863 l 201 106 l 201 101 l 725 101 l 725 0 l 42 0 m 390 1000 b 321 1069 350 1000 321 1033 b 390 1139 321 1107 351 1139 b 457 1069 429 1139 457 1107 b 390 1000 457 1033 429 1000 "
    },
    "\xc7\xbc": {
        ha: 1094,
        x_min: 0,
        x_max: 0,
        o: "m -1 0 l 426 936 l 1013 936 l 1013 835 l 614 835 l 650 536 l 999 536 l 999 436 l 665 436 l 707 101 l 1050 101 l 1050 0 l 603 0 l 561 331 l 274 331 l 124 0 m 547 428 l 517 697 b 500 849 511 742 503 801 l 494 849 b 435 701 478 804 456 751 l 314 428 m 825 1149 l 649 986 l 550 986 l 678 1149 "
    },
    "\xc4\x83": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 235 947 b 335 851 243 893 278 851 b 435 947 400 851 431 901 l 507 947 b 335 775 507 844 439 775 b 163 947 213 775 163 861 "
    },
    "\xc4\x81": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 492 893 l 492 814 l 179 814 l 179 893 "
    },
    "\xc4\x85": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 99 576 44 l 550 0 b 496 -133 529 -28 496 -85 b 563 -203 496 -181 524 -203 b 626 -189 589 -203 608 -197 l 646 -253 b 531 -286 614 -276 568 -286 b 407 -168 460 -286 407 -244 b 474 4 407 -99 449 -35 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 "
    },
    "\xc4\x87": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 m 554 963 l 385 764 l 297 764 l 419 963 "
    },
    "\xc4\x8d": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 m 319 764 l 188 963 l 281 963 l 363 831 l 365 831 l 447 963 l 539 963 l 408 764 "
    },
    "\xc4\x89": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 m 403 963 l 536 764 l 442 764 l 361 896 l 358 896 l 278 764 l 188 764 l 318 963 "
    },
    "\xc4\x8b": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 m 368 792 b 297 863 326 792 297 825 b 368 935 297 903 329 935 b 436 863 407 935 436 903 b 368 792 436 825 408 792 "
    },
    "\xc4\x8f": {
        ha: 797,
        x_min: 0,
        x_max: 0,
        o: "m 682 986 l 682 174 b 688 0 682 114 683 46 l 578 0 l 572 117 l 569 117 b 340 -15 532 42 450 -15 b 53 326 178 -15 53 122 b 354 688 51 550 190 688 b 557 585 457 688 526 639 l 560 585 l 560 986 m 560 399 b 554 450 560 414 558 435 b 378 592 536 528 469 592 b 176 332 251 592 176 481 b 375 83 176 196 243 83 b 554 229 457 83 532 138 b 560 282 558 246 560 263 m 743 765 b 793 889 765 792 793 832 b 750 979 793 924 774 958 l 838 999 b 888 897 863 983 888 943 b 794 725 888 793 815 742 "
    },
    "\xc4\x95": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 251 947 b 351 851 260 893 294 851 b 451 947 417 851 447 901 l 524 947 b 351 775 524 844 456 775 b 179 947 229 775 179 861 "
    },
    "\xc4\x9b": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 308 764 l 175 963 l 268 963 l 350 831 l 353 831 l 436 963 l 526 963 l 396 764 "
    },
    "\xc4\x97": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 354 792 b 283 863 313 792 283 825 b 354 935 283 903 314 935 b 422 863 393 935 422 903 b 354 792 422 825 394 792 "
    },
    "\xc4\x93": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 508 893 l 508 814 l 196 814 l 196 893 "
    },
    "\xc4\x99": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 554 -251 b 442 -285 524 -274 483 -285 b 317 -175 367 -285 317 -244 b 418 -14 317 -107 374 -46 l 418 -12 b 381 -14 406 -14 394 -14 b 53 325 176 -14 53 124 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 l 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 543 4 586 18 556 8 b 413 -144 489 -19 413 -87 b 469 -203 413 -185 440 -203 b 535 -189 489 -203 515 -197 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 "
    },
    "\xc4\x9f": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 681 672 b 675 488 678 624 675 569 l 675 97 b 579 -210 675 -57 644 -151 b 335 -290 514 -271 419 -290 b 111 -235 254 -290 165 -271 l 142 -142 b 339 -194 186 -169 256 -194 b 556 40 464 -194 556 -129 l 556 115 l 553 115 b 339 3 515 53 443 3 b 53 331 172 3 53 144 b 356 688 53 558 201 688 b 565 571 472 688 536 626 l 568 571 l 574 672 m 554 407 b 547 463 554 428 553 446 b 376 592 525 533 465 592 b 176 338 260 592 176 493 b 375 96 176 206 243 96 b 544 221 450 96 518 143 b 554 286 551 242 554 265 m 278 947 b 378 851 286 893 321 851 b 478 947 443 851 474 901 l 550 947 b 378 775 550 844 482 775 b 206 947 256 775 206 861 "
    },
    "\xc4\x9d": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 681 672 b 675 488 678 624 675 569 l 675 97 b 579 -210 675 -57 644 -151 b 335 -290 514 -271 419 -290 b 111 -235 254 -290 165 -271 l 142 -142 b 339 -194 186 -169 256 -194 b 556 40 464 -194 556 -129 l 556 115 l 553 115 b 339 3 515 53 443 3 b 53 331 172 3 53 144 b 356 688 53 558 201 688 b 565 571 472 688 536 626 l 568 571 l 574 672 m 554 407 b 547 463 554 428 553 446 b 376 592 525 533 465 592 b 176 338 260 592 176 493 b 375 96 176 206 243 96 b 544 221 450 96 518 143 b 554 286 551 242 554 265 m 429 968 l 563 768 l 468 768 l 388 900 l 385 900 l 304 768 l 214 768 l 344 968 "
    },
    "\xc4\xa3": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 493 933 b 385 843 436 925 385 899 b 433 761 385 811 408 782 l 346 743 b 290 842 318 761 290 799 b 469 985 290 940 385 981 m 681 672 b 675 488 678 624 675 569 l 675 97 b 579 -210 675 -57 644 -151 b 335 -290 514 -271 419 -290 b 111 -235 254 -290 165 -271 l 142 -142 b 339 -194 186 -169 256 -194 b 556 40 464 -194 556 -129 l 556 115 l 553 115 b 339 3 515 53 443 3 b 53 331 172 3 53 144 b 356 688 53 558 201 688 b 565 571 472 688 536 626 l 568 571 l 574 672 m 554 407 b 547 463 554 428 553 446 b 376 592 525 533 465 592 b 176 338 260 592 176 493 b 375 96 176 206 243 96 b 544 221 450 96 518 143 b 554 286 551 242 554 265 "
    },
    "\xc4\xa1": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 681 672 b 675 488 678 624 675 569 l 675 97 b 579 -210 675 -57 644 -151 b 335 -290 514 -271 419 -290 b 111 -235 254 -290 165 -271 l 142 -142 b 339 -194 186 -169 256 -194 b 556 40 464 -194 556 -129 l 556 115 l 553 115 b 339 3 515 53 443 3 b 53 331 172 3 53 144 b 356 688 53 558 201 688 b 565 571 472 688 536 626 l 568 571 l 574 672 m 554 407 b 547 463 554 428 553 446 b 376 592 525 533 465 592 b 176 338 260 592 176 493 b 375 96 176 206 243 96 b 544 221 450 96 518 143 b 554 286 551 242 554 265 m 388 796 b 317 867 346 796 317 829 b 388 939 317 907 347 939 b 456 867 426 939 456 907 b 388 796 456 829 428 796 "
    },
    "\xee\x80\x85": {
        ha: 776,
        x_min: 0,
        x_max: 0,
        o: "m 665 672 b 660 488 661 624 660 569 l 660 97 b 564 -210 660 -57 628 -151 b 318 -290 497 -271 403 -290 b 94 -235 238 -290 149 -271 l 125 -142 b 322 -194 169 -169 239 -194 b 539 40 447 -194 539 -129 l 539 115 l 536 115 b 322 3 500 53 426 3 b 36 331 156 3 36 144 b 340 688 36 558 185 688 b 550 571 457 688 519 626 l 553 571 l 557 672 m 538 407 b 531 463 538 428 536 446 b 360 592 508 533 450 592 b 160 338 243 592 160 493 b 358 96 160 206 228 96 b 528 221 435 96 503 143 b 538 286 535 242 538 265 m 218 788 b 313 932 215 878 253 932 b 399 901 342 932 367 919 b 457 878 421 889 440 878 b 494 938 479 878 492 890 l 560 938 b 465 797 561 844 531 797 b 381 825 435 797 408 810 b 321 850 353 842 338 850 b 285 788 299 850 288 826 "
    },
    "\xc4\xa5": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 986 l 224 986 l 224 567 l 226 567 b 314 653 246 601 276 632 b 439 688 350 674 393 688 b 674 400 529 688 674 632 l 674 0 l 551 0 l 551 386 b 396 586 551 494 511 586 b 232 464 317 586 254 531 b 224 406 225 447 224 429 l 224 0 l 101 0 m 214 1171 l 360 1013 l 257 1013 l 168 1108 l 165 1108 l 78 1013 l -22 1013 l 121 1171 "
    },
    "\xc4\xad": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 67 947 b 167 851 75 893 110 851 b 267 947 232 851 263 901 l 339 947 b 167 775 339 844 271 775 b -6 947 44 775 -6 861 "
    },
    "\xc4\xab": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 319 893 l 319 814 l 7 814 l 7 893 "
    },
    "\xc4\xaf": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 161 792 b 85 869 115 792 85 828 b 163 947 85 913 117 947 b 240 869 210 947 240 913 b 161 792 240 828 210 792 m 224 0 l 182 0 b 124 -136 161 -29 124 -86 b 194 -208 124 -183 154 -208 b 258 -196 222 -208 242 -203 l 276 -258 b 164 -290 247 -281 200 -290 b 36 -171 88 -290 36 -249 b 101 0 36 -103 76 -37 l 101 672 l 224 672 "
    },
    "\xc4\xa9": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m -8 788 b 86 932 -11 878 26 932 b 172 901 117 932 140 919 b 231 878 194 889 214 878 b 269 938 253 878 267 890 l 335 938 b 239 797 336 844 304 797 b 154 825 210 797 183 810 b 94 850 126 842 111 850 b 58 788 72 850 61 826 "
    },
    "\xc4\xb5": {
        ha: 338,
        x_min: 0,
        x_max: 0,
        o: "m -62 -194 b 71 -143 -7 -190 42 -175 b 117 110 104 -104 117 -51 l 117 672 l 239 672 l 239 63 b 158 -214 239 -68 218 -153 b -50 -290 104 -268 15 -290 m 211 953 l 343 754 l 250 754 l 169 886 l 167 886 l 86 754 l -4 754 l 126 953 "
    },
    "\xc4\xb7": {
        ha: 651,
        x_min: 0,
        x_max: 0,
        o: "m 222 364 l 225 364 b 285 440 242 388 265 417 l 482 672 l 629 672 l 369 396 l 665 0 l 517 0 l 285 322 l 222 253 l 222 0 l 101 0 l 101 986 l 222 986 m 222 -251 b 326 -160 276 -243 326 -215 b 279 -76 326 -128 304 -96 l 371 -57 b 425 -158 399 -75 425 -114 b 246 -308 425 -261 332 -303 "
    },
    "\xc4\xba": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 101 986 l 224 986 l 224 0 l 101 0 m 361 1189 l 185 1026 l 85 1026 l 214 1189 "
    },
    "\xc4\xbe": {
        ha: 339,
        x_min: 0,
        x_max: 0,
        o: "m 279 765 b 329 889 301 793 329 832 b 286 979 329 924 310 958 l 374 999 b 422 894 397 983 422 943 b 333 725 422 793 354 743 m 101 986 l 224 986 l 224 0 l 101 0 "
    },
    "\xc4\xbc": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 101 986 l 224 986 l 224 0 l 101 0 m 49 -251 b 154 -160 103 -243 154 -215 b 106 -76 154 -128 131 -96 l 197 -57 b 251 -158 225 -75 251 -114 b 72 -308 251 -261 158 -303 "
    },
    "\xc5\x80": {
        ha: 378,
        x_min: 0,
        x_max: 0,
        o: "m 351 474 b 285 543 313 474 285 507 b 351 613 285 582 314 613 b 415 543 388 613 415 583 b 351 474 415 507 389 474 m 101 986 l 224 986 l 224 0 l 101 0 "
    },
    "\xee\x80\x86": {
        ha: 1158,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 203 672 l 208 564 l 213 564 b 424 688 250 628 313 688 b 614 553 515 688 585 632 l 617 553 b 692 640 638 590 664 619 b 840 688 732 671 776 688 b 1061 396 929 688 1061 629 l 1061 0 l 942 0 l 942 381 b 796 588 942 510 894 588 b 651 476 726 588 672 536 b 642 415 646 460 642 438 l 642 0 l 522 0 l 522 403 b 382 588 522 510 475 588 b 231 465 306 588 250 526 b 221 406 224 447 221 426 l 221 0 l 101 0 m 621 963 l 754 764 l 660 764 l 579 896 l 576 896 l 496 764 l 406 764 l 536 963 "
    },
    "\xc5\x84": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 m 576 963 l 407 764 l 319 764 l 442 963 "
    },
    "\xc5\x88": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 m 343 764 l 210 963 l 303 963 l 385 831 l 388 831 l 469 963 l 561 963 l 431 764 "
    },
    "\xee\x80\x87": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 426 963 l 560 764 l 465 764 l 385 896 l 382 896 l 303 764 l 211 764 l 342 963 m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 "
    },
    "\xc5\x86": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 490 b 96 672 101 560 100 617 l 204 672 l 211 561 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 0 l 551 0 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 l 101 0 m 283 -249 b 388 -158 338 -240 388 -214 b 340 -74 388 -125 365 -94 l 431 -54 b 486 -157 458 -72 486 -111 b 307 -306 486 -258 393 -301 "
    },
    "\xc5\x8f": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 281 947 b 381 851 289 893 324 851 b 481 947 446 851 476 901 l 553 947 b 381 775 553 844 485 775 b 208 947 258 775 208 861 "
    },
    "\xc5\x91": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 450 963 l 297 772 l 221 772 l 331 963 m 651 963 l 497 772 l 421 772 l 531 963 "
    },
    "\xc5\x8d": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 538 893 l 538 814 l 225 814 l 225 893 "
    },
    "\xc7\xbf": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 383 688 b 554 639 444 688 504 671 l 613 722 l 667 685 l 608 599 b 710 342 674 536 710 446 b 382 -15 710 94 539 -15 b 210 32 319 -15 258 0 l 150 -53 l 99 -11 l 157 72 b 53 332 92 133 53 222 b 383 688 53 556 200 688 m 499 556 b 381 596 468 581 429 596 b 171 335 231 596 171 457 b 221 167 171 276 186 215 l 224 165 m 265 115 b 378 76 297 88 336 76 b 590 338 506 76 590 186 b 543 501 590 383 579 449 l 540 501 m 572 963 l 403 764 l 315 764 l 438 963 "
    },
    "\xc5\x95": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 101 463 b 96 672 101 542 100 610 l 203 672 l 207 540 l 213 540 b 399 688 243 631 317 688 b 433 683 413 688 422 686 l 433 568 b 392 572 421 571 408 572 b 228 415 306 572 244 507 b 222 358 225 399 222 379 l 222 0 l 101 0 m 435 963 l 265 764 l 179 764 l 300 963 "
    },
    "\xc5\x99": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 101 463 b 96 672 101 542 100 610 l 203 672 l 207 540 l 213 540 b 399 688 243 631 317 688 b 433 683 413 688 422 686 l 433 568 b 392 572 421 571 408 572 b 228 415 306 572 244 507 b 222 358 225 399 222 379 l 222 0 l 101 0 m 208 764 l 75 963 l 169 963 l 251 831 l 254 831 l 336 963 l 428 963 l 297 764 "
    },
    "\xc5\x97": {
        ha: 454,
        x_min: 0,
        x_max: 0,
        o: "m 101 463 b 96 672 101 542 100 610 l 203 672 l 207 540 l 213 540 b 399 688 243 631 317 688 b 433 683 413 688 422 686 l 433 568 b 392 572 421 571 408 572 b 228 415 306 572 244 507 b 222 358 225 399 222 379 l 222 0 l 101 0 m 60 -251 b 164 -160 114 -243 164 -215 b 117 -76 164 -128 142 -96 l 208 -57 b 263 -158 236 -75 263 -114 b 83 -308 263 -261 169 -303 "
    },
    "\xc5\x9b": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 m 474 963 l 304 764 l 217 764 l 339 963 "
    },
    "\xc5\x9f": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 315 -8 494 89 431 14 l 276 -69 b 374 -165 328 -76 374 -112 b 229 -278 374 -247 307 -278 b 135 -254 196 -278 158 -268 l 156 -194 b 231 -215 178 -208 206 -215 b 290 -171 261 -215 290 -204 b 182 -112 289 -135 247 -118 l 238 -14 l 232 -14 b 54 32 178 -14 108 1 "
    },
    "\xc5\x9d": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 m 319 963 l 453 764 l 358 764 l 278 896 l 275 896 l 194 764 l 104 764 l 235 963 "
    },
    "\xc8\x99": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 m 165 -251 b 269 -160 219 -243 269 -215 b 222 -76 269 -128 247 -96 l 314 -57 b 368 -158 342 -75 368 -114 b 189 -308 368 -261 275 -303 "
    },
    "\xc5\xa5": {
        ha: 471,
        x_min: 0,
        x_max: 0,
        o: "m 349 800 b 401 903 372 818 401 853 b 360 985 401 935 382 965 l 447 1003 b 496 907 471 988 496 951 b 385 751 496 813 418 765 m 249 865 l 249 672 l 424 672 l 424 579 l 249 579 l 249 217 b 340 86 249 133 272 86 b 411 94 372 86 396 90 l 417 3 b 308 -14 393 -7 356 -14 b 176 38 251 -14 206 4 b 129 213 142 74 129 133 l 129 579 l 25 579 l 25 672 l 129 672 l 129 833 "
    },
    "\xc8\x9b": {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 249 865 l 249 672 l 424 672 l 424 579 l 249 579 l 249 217 b 340 86 249 133 272 86 b 411 94 372 86 396 90 l 417 3 b 308 -14 393 -7 356 -14 b 176 38 251 -14 206 4 b 129 213 142 74 129 133 l 129 579 l 25 579 l 25 672 l 129 672 l 129 833 m 146 -258 b 250 -168 200 -250 250 -222 b 203 -83 250 -135 228 -103 l 293 -64 b 349 -167 321 -82 349 -121 b 169 -315 349 -268 256 -310 "
    },
    "\xc5\xad": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 282 947 b 382 851 290 893 325 851 b 482 947 447 851 478 901 l 554 947 b 382 775 554 844 486 775 b 210 947 260 775 210 861 "
    },
    "\xc5\xb1": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 461 963 l 308 772 l 232 772 l 342 963 m 661 963 l 508 772 l 432 772 l 542 963 "
    },
    "\xc5\xab": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 539 893 l 539 814 l 226 814 l 226 893 "
    },
    "\xc5\xb3": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 51 l 639 0 b 583 -132 618 -29 583 -82 b 654 -204 583 -178 614 -204 b 717 -192 681 -204 701 -199 l 736 -254 b 624 -286 707 -276 660 -286 b 494 -167 547 -286 494 -244 b 561 4 494 -99 536 -33 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 "
    },
    "\xc5\xaf": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 383 746 b 243 872 300 746 243 801 b 385 1004 243 946 297 1004 b 522 874 467 1004 522 947 b 383 746 522 800 461 746 m 382 797 b 454 875 426 797 454 833 b 381 951 454 917 426 951 b 313 872 339 951 313 915 b 382 797 313 836 342 797 "
    },
    "\xc5\xa9": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 211 788 b 306 932 208 878 246 932 b 392 901 336 932 360 919 b 450 878 414 889 433 878 b 489 938 472 878 486 890 l 554 938 b 458 797 556 844 524 797 b 374 825 429 797 403 810 b 314 850 346 842 331 850 b 278 788 292 850 281 826 "
    },
    "\xe1\xba\x83": {
        ha: 1022,
        x_min: 0,
        x_max: 0,
        o: "m 150 672 l 239 331 b 289 117 258 256 276 186 l 293 117 b 353 329 308 185 331 257 l 463 672 l 565 672 l 669 336 b 729 117 694 256 714 185 l 733 117 b 785 335 744 185 763 256 l 881 672 l 1001 672 l 785 0 l 674 0 l 571 321 b 511 542 547 396 528 463 l 508 542 b 447 319 492 461 471 392 l 339 0 l 228 0 l 25 672 m 706 963 l 536 764 l 449 764 l 571 963 "
    },
    "\xc5\xb5": {
        ha: 1022,
        x_min: 0,
        x_max: 0,
        o: "m 150 672 l 239 331 b 289 117 258 256 276 186 l 293 117 b 353 329 308 185 331 257 l 463 672 l 565 672 l 669 336 b 729 117 694 256 714 185 l 733 117 b 785 335 744 185 763 256 l 881 672 l 1001 672 l 785 0 l 674 0 l 571 321 b 511 542 547 396 528 463 l 508 542 b 447 319 492 461 471 392 l 339 0 l 228 0 l 25 672 m 553 963 l 685 764 l 592 764 l 511 896 l 508 896 l 428 764 l 338 764 l 468 963 "
    },
    "\xe1\xba\x85": {
        ha: 1022,
        x_min: 0,
        x_max: 0,
        o: "m 150 672 l 239 331 b 289 117 258 256 276 186 l 293 117 b 353 329 308 185 331 257 l 463 672 l 565 672 l 669 336 b 729 117 694 256 714 185 l 733 117 b 785 335 744 185 763 256 l 881 672 l 1001 672 l 785 0 l 674 0 l 571 321 b 511 542 547 396 528 463 l 508 542 b 447 319 492 461 471 392 l 339 0 l 228 0 l 25 672 m 383 792 b 313 863 342 792 313 825 b 383 933 313 901 344 933 b 451 863 422 933 451 903 b 383 792 451 825 424 792 m 640 792 b 571 863 599 792 571 825 b 640 933 571 901 601 933 b 708 863 679 933 708 903 b 640 792 708 825 681 792 "
    },
    "\xe1\xba\x81": {
        ha: 1022,
        x_min: 0,
        x_max: 0,
        o: "m 150 672 l 239 331 b 289 117 258 256 276 186 l 293 117 b 353 329 308 185 331 257 l 463 672 l 565 672 l 669 336 b 729 117 694 256 714 185 l 733 117 b 785 335 744 185 763 256 l 881 672 l 1001 672 l 785 0 l 674 0 l 571 321 b 511 542 547 396 528 463 l 508 542 b 447 319 492 461 471 392 l 339 0 l 228 0 l 25 672 m 464 963 l 585 764 l 499 764 l 329 963 "
    },
    "\xc5\xb7": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 372 963 l 506 764 l 411 764 l 331 896 l 328 896 l 247 764 l 157 764 l 288 963 "
    },
    "\xe1\xbb\xb3": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 283 963 l 406 764 l 319 764 l 150 963 "
    },
    "\xc8\xb3": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 485 893 l 485 814 l 172 814 l 172 893 "
    },
    "\xc5\xba": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 25 71 l 329 467 b 417 571 358 503 386 535 l 417 574 l 53 574 l 53 672 l 565 672 l 564 596 l 264 206 b 178 100 236 168 208 135 l 178 97 l 571 97 l 571 0 l 25 0 m 496 963 l 326 764 l 239 764 l 361 963 "
    },
    "\xc5\xbc": {
        ha: 594,
        x_min: 0,
        x_max: 0,
        o: "m 25 71 l 329 467 b 417 571 358 503 386 535 l 417 574 l 53 574 l 53 672 l 565 672 l 564 596 l 264 206 b 178 100 236 168 208 135 l 178 97 l 571 97 l 571 0 l 25 0 m 301 792 b 231 863 260 792 231 825 b 301 935 231 903 261 935 b 369 863 340 935 369 903 b 301 792 369 825 342 792 "
    },
    "\xc7\xbd": {
        ha: 1074,
        x_min: 0,
        x_max: 0,
        o: "m 569 324 b 783 79 565 164 657 79 b 967 118 876 79 929 100 l 989 32 b 768 -15 935 3 857 -15 b 513 133 654 -15 551 39 l 510 133 b 260 -15 467 40 375 -15 b 50 176 119 -15 50 79 b 456 419 50 332 194 422 l 456 447 b 299 597 456 481 435 597 b 126 546 235 597 167 574 l 97 626 b 307 688 157 664 240 688 b 524 544 428 688 496 631 l 526 544 b 761 688 572 633 656 688 b 1024 378 967 688 1024 489 b 1019 324 1024 357 1022 336 m 457 338 b 171 186 328 340 171 318 b 288 75 171 115 224 75 b 450 190 375 75 431 129 b 457 239 456 206 457 222 m 906 411 b 749 600 910 479 872 600 b 568 411 628 600 572 488 m 729 963 l 560 764 l 474 764 l 596 963 "
    },
    "\xef\x9b\x83": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 106 -251 b 210 -160 160 -243 210 -215 b 163 -76 210 -128 188 -96 l 253 -57 b 308 -158 281 -75 308 -114 b 129 -308 308 -261 215 -303 "
    },
    "\xef\x9b\x89": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 422 1149 l 246 986 l 146 986 l 275 1149 "
    },
    "\xee\xbf\xae": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 108 1156 b 208 1088 115 1124 140 1088 b 310 1156 276 1088 303 1119 l 381 1156 b 207 1008 378 1074 326 1008 b 36 1156 89 1008 39 1072 "
    },
    "\xef\x9b\x8a": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 163 986 l 17 1144 l 119 1144 l 208 1049 l 211 1049 l 299 1144 l 399 1144 l 256 986 "
    },
    "\xee\xbf\xb2": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 265 3 l 221 -69 b 319 -174 274 -79 319 -117 b 176 -286 319 -254 249 -286 b 78 -262 140 -286 101 -276 l 97 -200 b 175 -218 118 -211 144 -218 b 233 -176 207 -218 233 -206 b 125 -117 233 -139 190 -124 l 189 3 "
    },
    "\xee\xbf\xb7": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 254 1144 l 399 986 l 297 986 l 208 1082 l 206 1082 l 117 986 l 18 986 l 161 1144 "
    },
    "\xef\x98\xb4": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 106 -251 b 210 -160 160 -242 210 -215 b 163 -76 210 -128 188 -96 l 253 -57 b 308 -158 281 -75 308 -112 b 129 -308 308 -261 215 -303 "
    },
    "\xef\x9b\x8b": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 81 1001 b 13 1072 39 1001 13 1033 b 81 1142 13 1110 42 1142 b 147 1072 119 1142 147 1111 b 81 1001 147 1033 121 1001 m 338 1001 b 269 1072 297 1001 269 1033 b 339 1142 269 1110 299 1142 b 406 1072 378 1142 406 1111 b 338 1001 406 1033 379 1001 "
    },
    "\xee\xbf\xad": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 210 1001 b 140 1072 171 1001 140 1036 b 211 1142 140 1108 171 1142 b 278 1072 249 1142 278 1108 b 210 1001 278 1036 249 1001 "
    },
    "\xef\x9b\x8e": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 144 1149 l 274 988 l 174 988 l -3 1149 "
    },
    "\xef\x9b\x8f": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 294 1149 l 140 993 l 51 993 l 163 1149 m 500 1149 l 344 993 l 256 993 l 367 1149 "
    },
    "\xef\x9b\x90": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 375 1094 l 375 1018 l 43 1018 l 43 1094 "
    },
    "\xee\xbf\xb1": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 250 6 b 176 -133 229 -21 176 -81 b 246 -203 176 -178 206 -203 b 310 -190 271 -203 293 -197 l 329 -253 b 218 -285 301 -275 253 -285 b 88 -165 140 -285 88 -243 b 171 6 88 -97 138 -31 "
    },
    "\xee\xbf\xb3": {
        ha: 556,
        x_min: 0,
        x_max: 0,
        o: "m 281 1218 b 418 1092 365 1218 418 1163 b 281 969 418 1022 361 969 b 140 1092 196 969 140 1024 b 281 1218 140 1161 194 1218 m 278 1167 b 213 1092 236 1167 213 1132 b 278 1021 213 1056 239 1021 b 346 1093 319 1021 346 1053 b 278 1167 346 1133 319 1167 "
    },
    "\xee\xbf\xb5": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 36 993 b 131 1135 33 1078 69 1135 b 213 1107 161 1135 183 1122 b 279 1082 235 1094 257 1082 b 317 1136 300 1082 313 1092 l 381 1136 b 288 1001 382 1049 351 1001 b 203 1028 258 1001 233 1013 b 138 1054 176 1042 157 1054 b 101 993 115 1054 104 1031 "
    },
    "\xce\x91": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 "
    },
    "\xce\x92": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 326 943 158 935 242 943 b 583 875 447 943 525 922 b 661 710 632 839 661 783 b 503 504 661 619 601 540 l 503 501 b 696 267 592 479 696 406 b 617 79 696 186 664 125 b 293 -8 551 19 446 -8 b 106 3 210 -8 146 -3 m 226 540 l 336 540 b 539 697 464 540 539 607 b 333 850 539 807 456 850 b 226 842 278 850 246 846 m 226 92 b 328 86 250 88 285 86 b 568 268 453 86 568 132 b 326 449 568 396 458 449 l 226 449 "
    },
    "\xce\x93": {
        ha: 626,
        x_min: 0,
        x_max: 0,
        o: "m 607 936 l 607 835 l 226 835 l 226 0 l 106 0 l 106 936 "
    },
    "\xce\x94": {
        ha: 861,
        x_min: 0,
        x_max: 0,
        o: "m 35 68 l 361 936 l 499 936 l 821 69 l 821 0 l 35 0 m 686 101 l 496 617 b 426 825 472 682 443 765 l 422 825 b 360 635 408 778 383 700 l 164 101 "
    },
    "\xce\x95": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 "
    },
    "\xce\x96": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 42 71 l 561 831 l 561 835 l 86 835 l 86 936 l 718 936 l 718 863 l 201 106 l 201 101 l 725 101 l 725 0 l 42 0 "
    },
    "\xce\x97": {
        ha: 906,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 544 l 679 544 l 679 936 l 801 936 l 801 0 l 679 0 l 679 439 l 226 439 l 226 0 l 106 0 l 106 936 "
    },
    "\xce\x98": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 474 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 907 478 740 951 907 756 b 474 -15 907 156 711 -15 m 478 83 b 779 472 671 83 779 260 b 481 853 779 658 682 853 b 178 463 278 853 178 665 b 478 83 178 265 286 83 m 667 532 l 667 432 l 290 432 l 290 532 "
    },
    "\xce\x99": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 "
    },
    "\xce\x9a": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 936 l 226 936 l 226 485 l 231 485 b 304 585 256 521 281 554 l 590 936 l 740 936 l 401 539 l 767 0 l 624 0 l 315 460 l 226 357 l 226 0 l 106 0 "
    },
    "\xce\x9b": {
        ha: 846,
        x_min: 0,
        x_max: 0,
        o: "m 689 0 l 472 644 b 424 822 451 710 438 765 l 419 822 b 374 646 406 764 392 707 l 161 0 l 35 0 l 353 936 l 497 936 l 819 0 "
    },
    "\xce\x9c": {
        ha: 1117,
        x_min: 0,
        x_max: 0,
        o: "m 894 411 b 881 815 888 542 879 699 l 876 815 b 758 460 844 706 806 589 l 593 6 l 501 6 l 350 451 b 242 815 306 583 268 704 l 239 815 b 221 401 236 699 229 542 l 196 0 l 81 0 l 146 936 l 300 936 l 460 483 b 554 168 499 368 531 265 l 558 168 b 657 483 582 263 615 365 l 824 936 l 978 936 l 1036 0 l 918 0 "
    },
    "\xce\x9d": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 106 0 l 106 936 l 238 936 l 538 463 b 706 158 607 353 661 254 l 708 160 b 694 544 697 285 694 399 l 694 936 l 808 936 l 808 0 l 686 0 l 389 475 b 214 788 324 579 261 686 l 210 786 b 219 400 217 668 219 556 l 219 0 "
    },
    "\xce\x9e": {
        ha: 750,
        x_min: 0,
        x_max: 0,
        o: "m 688 936 l 688 836 l 75 836 l 75 936 m 640 535 l 640 435 l 121 435 l 121 535 m 701 101 l 701 0 l 60 0 l 60 101 "
    },
    "\xce\x9f": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 "
    },
    "\xce\xa0": {
        ha: 881,
        x_min: 0,
        x_max: 0,
        o: "m 775 0 l 653 0 l 653 833 l 226 833 l 226 0 l 106 0 l 106 936 l 775 936 "
    },
    "\xce\xa1": {
        ha: 739,
        x_min: 0,
        x_max: 0,
        o: "m 106 925 b 338 943 164 935 240 943 b 600 865 457 943 544 915 b 682 669 651 821 682 753 b 610 469 682 585 657 518 b 324 367 546 401 442 367 b 226 375 288 367 254 368 l 226 0 l 106 0 m 226 474 b 326 464 253 467 286 464 b 561 664 472 464 561 535 b 340 847 561 788 474 847 b 226 838 288 847 247 843 "
    },
    "\xce\xa3": {
        ha: 767,
        x_min: 0,
        x_max: 0,
        o: "m 194 101 l 728 101 l 728 0 l 36 0 l 36 72 l 361 465 l 54 854 l 54 936 l 683 936 l 683 836 l 210 836 l 210 831 l 496 469 l 194 106 "
    },
    "\xce\xa4": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 l 283 0 "
    },
    "\xce\xa5": {
        ha: 817,
        x_min: 0,
        x_max: 0,
        o: "m 36 944 b 264 818 101 940 200 893 b 408 475 335 739 392 622 l 414 475 b 576 815 438 625 510 742 b 790 944 642 885 728 935 l 811 846 b 490 432 708 807 554 674 b 464 240 476 376 464 313 l 464 0 l 343 0 l 343 242 b 324 431 343 311 336 374 b 14 846 268 682 138 818 "
    },
    "\xce\xa6": {
        ha: 997,
        x_min: 0,
        x_max: 0,
        o: "m 556 -36 l 439 -36 l 439 36 b 50 463 249 53 50 183 b 442 903 50 750 264 889 l 442 972 l 558 972 l 558 903 b 947 469 753 888 947 746 b 556 36 947 192 753 53 m 440 815 b 175 465 319 807 175 690 b 440 124 175 260 304 140 m 557 124 b 822 467 690 136 822 253 b 557 815 822 689 689 803 "
    },
    "\xce\xa7": {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 618 0 l 499 207 b 390 392 450 286 419 338 l 388 392 b 286 206 361 338 335 288 l 174 0 l 35 0 l 321 474 l 46 936 l 186 936 l 310 717 b 396 558 344 656 371 608 l 400 558 b 485 717 426 614 450 657 l 613 936 l 751 936 l 467 481 l 758 0 "
    },
    "\xce\xa8": {
        ha: 951,
        x_min: 0,
        x_max: 0,
        o: "m 888 665 b 533 286 888 422 740 297 l 533 0 l 418 0 l 418 286 b 65 631 238 293 65 386 l 65 936 l 183 936 l 183 651 b 419 382 183 461 281 389 l 419 936 l 533 936 l 533 381 b 768 678 657 388 768 464 l 768 936 l 888 936 "
    },
    "\xce\x86": {
        ha: 854,
        x_min: 0,
        x_max: 0,
        o: "m 207 936 l 158 721 l 86 721 l 97 936 m 261 294 l 164 0 l 39 0 l 357 936 l 503 936 l 822 0 l 693 0 l 593 294 m 568 389 l 476 658 b 428 829 456 719 442 775 l 425 829 b 378 660 411 774 396 717 l 286 389 "
    },
    "\xce\x88": {
        ha: 779,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 686 439 l 324 439 l 324 101 l 729 101 l 729 0 l 201 0 l 201 936 l 708 936 l 708 835 l 324 835 l 324 539 l 686 539 "
    },
    "\xce\x89": {
        ha: 1003,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 324 936 l 324 544 l 775 544 l 775 936 l 897 936 l 897 0 l 775 0 l 775 439 l 324 439 l 324 0 l 201 0 l 201 936 "
    },
    "\xce\x8a": {
        ha: 429,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 324 936 l 324 0 l 201 0 l 201 936 "
    },
    "\xce\xaa": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 39 988 b -31 1057 -3 988 -31 1021 b 39 1128 -31 1096 0 1128 b 106 1057 76 1128 106 1097 b 39 988 106 1021 78 988 m 293 988 b 225 1057 253 988 225 1021 b 294 1128 225 1096 254 1128 b 361 1057 332 1128 361 1097 b 293 988 361 1021 333 988 m 226 936 l 226 0 l 106 0 l 106 936 "
    },
    "\xce\x8c": {
        ha: 1011,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 539 951 b 961 478 794 951 961 756 b 526 -15 961 156 765 -15 b 106 460 278 -15 106 176 b 539 951 106 757 289 951 m 535 853 b 233 463 333 853 233 668 b 533 83 233 263 342 83 b 833 472 725 83 833 260 b 535 853 833 658 736 853 "
    },
    "\xce\x8e": {
        ha: 982,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 200 944 b 428 818 265 940 364 893 b 572 475 499 739 554 622 l 578 475 b 740 815 601 625 674 742 b 953 944 806 885 892 935 l 975 846 b 653 432 871 807 717 674 b 628 240 639 376 628 313 l 628 0 l 507 0 l 507 242 b 488 431 507 311 499 374 b 178 846 431 682 300 818 "
    },
    "\xce\xab": {
        ha: 817,
        x_min: 0,
        x_max: 0,
        o: "m 286 968 b 218 1038 246 968 218 1000 b 288 1107 218 1076 249 1107 b 353 1038 325 1107 353 1076 b 286 968 353 1000 326 968 m 542 968 b 474 1038 501 968 474 1000 b 542 1107 474 1076 503 1107 b 608 1038 581 1107 608 1076 b 542 968 608 1000 582 968 m 36 944 b 264 818 101 940 200 893 b 408 475 335 739 392 622 l 414 475 b 576 815 438 625 510 742 b 790 944 642 885 728 935 l 811 846 b 490 432 708 807 554 674 b 464 240 476 376 464 313 l 464 0 l 343 0 l 343 242 b 324 431 343 311 336 374 b 14 846 268 682 138 818 "
    },
    "\xce\x8f": {
        ha: 1031,
        x_min: 0,
        x_max: 0,
        o: "m 121 936 l 72 721 l 0 721 l 10 936 m 92 0 l 92 96 l 294 96 l 294 101 b 111 497 201 178 111 317 b 547 951 111 764 299 951 b 969 508 806 951 969 756 b 785 101 969 317 878 179 l 785 96 l 988 96 l 988 0 l 636 0 l 636 76 b 844 489 747 153 844 301 b 544 853 843 660 743 853 b 238 488 347 853 238 671 b 444 76 238 313 335 146 l 444 0 "
    },
    "\xce\xb1": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 679 672 b 661 192 672 601 661 371 b 728 78 661 113 681 79 l 718 -10 b 676 -15 710 -14 690 -15 b 561 126 617 -15 568 24 l 557 126 b 328 -15 513 46 435 -15 b 53 322 168 -15 53 118 b 353 688 53 542 197 688 b 560 553 450 688 524 638 l 565 553 b 578 672 568 606 572 639 m 176 326 b 358 82 176 199 242 82 b 538 253 443 82 517 164 b 546 347 544 283 546 310 b 540 419 546 374 546 396 b 368 592 524 510 457 592 b 176 326 254 592 176 479 "
    },
    "\xce\xb2": {
        ha: 778,
        x_min: 0,
        x_max: 0,
        o: "m 218 69 l 218 -24 b 233 -275 218 -103 219 -218 l 119 -275 b 99 -39 103 -231 99 -136 l 99 601 b 203 928 99 793 150 878 b 400 1001 250 972 311 1001 b 643 760 538 1001 643 904 b 519 543 643 654 583 575 l 519 538 b 725 272 625 515 725 426 b 435 -15 725 86 583 -15 b 221 69 342 -15 272 15 m 217 190 b 413 79 249 139 317 79 b 603 272 524 79 603 161 b 386 478 603 406 508 474 b 349 478 374 479 361 478 l 349 561 b 372 564 357 561 364 563 b 531 742 478 571 531 653 b 389 904 531 840 471 904 b 217 615 276 904 217 807 "
    },
    "\xce\xb3": {
        ha: 644,
        x_min: 0,
        x_max: 0,
        o: "m 254 -275 b 229 119 258 -147 261 -14 b -8 672 179 342 60 568 l 129 672 b 333 149 190 581 292 356 l 339 149 b 497 625 400 261 497 460 b 496 672 497 646 496 660 l 611 672 b 615 626 614 660 615 643 b 378 36 615 454 507 232 b 369 3 369 25 369 15 b 374 -275 374 -76 374 -181 "
    },
    "\xce\xb4": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 611 854 b 428 910 582 875 504 910 b 314 847 351 910 314 881 b 414 735 314 811 351 785 l 528 643 b 706 328 639 558 706 461 b 379 -15 706 119 560 -15 b 53 322 206 -15 53 107 b 308 674 53 494 171 608 l 308 681 l 276 706 b 192 844 244 732 192 781 b 425 1001 192 919 268 1001 b 647 935 522 1001 607 967 m 379 617 b 176 324 274 561 176 471 b 386 76 176 167 281 76 b 583 319 493 76 583 167 b 453 558 583 414 539 492 "
    },
    "\xce\xb5": {
        ha: 611,
        x_min: 0,
        x_max: 0,
        o: "m 583 46 b 338 -15 532 11 432 -15 b 54 189 203 -15 54 38 b 221 357 54 272 122 342 l 221 364 b 88 506 132 383 88 439 b 356 688 88 594 176 688 b 560 636 443 688 511 669 l 533 556 b 365 597 506 574 433 597 b 210 497 272 597 210 558 b 397 401 210 431 292 401 l 478 401 l 478 314 l 393 314 b 182 200 272 314 182 281 b 364 78 182 121 265 78 b 561 129 438 78 521 106 "
    },
    "\xce\xb6": {
        ha: 568,
        x_min: 0,
        x_max: 0,
        o: "m 393 -175 b 439 -22 413 -143 436 -58 b 275 15 390 -15 331 -3 b 54 325 153 56 54 147 b 393 890 54 518 179 744 l 393 896 l 294 896 b 133 910 232 896 175 899 l 146 992 b 315 986 190 986 253 986 l 547 986 l 565 901 b 178 347 343 789 178 551 b 350 101 178 199 249 138 b 544 61 414 78 479 68 b 557 44 551 60 557 53 b 474 -199 557 -36 511 -150 "
    },
    "\xce\xb7": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 490 b 82 672 101 558 97 626 l 192 672 b 211 561 204 646 211 604 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 -25 b 688 -275 674 -103 674 -219 l 572 -275 b 551 -29 556 -233 551 -118 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 "
    },
    "\xce\xb8": {
        ha: 742,
        x_min: 0,
        x_max: 0,
        o: "m 374 -15 b 53 501 175 -15 53 158 b 378 1001 53 785 168 1001 b 690 501 592 1001 690 800 b 374 -15 690 189 589 -15 m 569 554 b 371 911 568 751 506 911 b 174 554 247 911 174 743 m 174 463 b 376 75 174 215 257 75 b 569 463 507 75 569 236 "
    },
    "\xce\xb9": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 224 163 b 289 81 224 103 236 78 l 282 -8 b 226 -15 268 -12 247 -15 b 101 150 156 -15 101 17 l 101 672 l 224 672 "
    },
    "\xce\xba": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 526 b 86 672 101 581 97 647 l 204 672 b 224 558 215 657 224 614 l 224 374 l 229 374 b 524 672 350 488 444 592 l 667 672 l 667 667 b 347 364 572 579 465 475 l 347 360 b 554 168 414 344 486 258 l 676 0 l 535 0 l 429 143 b 235 299 361 232 299 297 l 224 299 l 224 0 "
    },
    "\xce\xbb": {
        ha: 656,
        x_min: 0,
        x_max: 0,
        o: "m 369 385 b 325 531 354 431 339 476 l 318 531 b 275 389 308 486 290 435 l 138 0 l 10 0 l 253 622 b 261 654 258 638 261 647 b 251 692 261 663 258 675 b 76 903 208 810 158 903 b 53 901 69 903 61 903 l 64 996 b 111 1001 75 1000 94 1001 b 378 683 243 1001 306 875 l 635 0 l 506 0 "
    },
    "\xce\xbc": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 556 104 b 363 -12 528 51 463 -12 b 215 61 301 -12 244 10 l 215 -22 b 231 -275 215 -96 217 -219 l 121 -275 b 101 -28 107 -233 101 -135 l 101 672 l 222 672 l 222 275 b 374 85 222 171 267 85 b 535 197 454 85 513 143 b 546 260 542 215 546 238 l 546 672 l 667 672 l 667 185 b 731 79 667 111 682 82 l 721 -10 b 679 -15 707 -14 699 -15 b 560 104 619 -15 571 18 "
    },
    "\xce\xbd": {
        ha: 651,
        x_min: 0,
        x_max: 0,
        o: "m 135 672 l 264 294 b 322 119 286 235 303 178 l 326 119 b 500 610 382 228 500 454 b 499 672 500 632 500 653 l 614 672 b 618 622 615 658 618 640 b 367 0 618 432 489 204 l 251 0 l 6 672 "
    },
    "\xce\xbe": {
        ha: 601,
        x_min: 0,
        x_max: 0,
        o: "m 501 515 l 464 515 b 181 306 271 515 181 421 b 394 94 181 193 257 131 b 579 60 460 76 524 68 b 592 44 588 60 592 53 b 510 -199 592 -28 549 -150 l 429 -175 b 474 -22 447 -143 472 -57 b 53 294 289 4 53 60 b 271 565 53 429 150 532 l 271 572 b 117 768 168 604 117 676 b 407 1001 117 883 213 1001 b 576 964 481 1001 539 986 l 551 879 b 414 911 524 894 472 911 b 239 760 297 911 239 838 b 435 604 239 663 325 608 b 501 604 454 604 478 604 "
    },
    "\xce\xbf": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 "
    },
    "\xcf\x81": {
        ha: 782,
        x_min: 0,
        x_max: 0,
        o: "m 110 -275 b 94 -31 97 -233 94 -135 l 94 281 b 192 588 94 454 139 532 b 422 688 243 643 321 688 b 729 346 610 688 729 547 b 422 -15 729 108 581 -15 b 219 83 335 -15 258 21 l 215 83 l 215 -25 b 226 -275 215 -103 217 -219 m 215 264 b 221 215 215 247 217 231 b 403 81 243 139 317 81 b 607 343 532 81 607 192 b 413 586 607 475 538 586 b 215 321 317 586 215 507 "
    },
    "\xcf\x83": {
        ha: 769,
        x_min: 0,
        x_max: 0,
        o: "m 749 594 b 572 600 715 594 671 596 l 572 594 b 697 340 651 540 697 442 b 375 -15 697 93 528 -15 b 53 329 193 -15 53 117 b 399 688 53 554 196 686 l 753 688 m 378 76 b 576 340 489 76 576 188 b 379 596 576 454 518 596 b 176 335 239 596 176 463 b 378 76 176 188 261 76 "
    },
    "\xcf\x84": {
        ha: 574,
        x_min: 0,
        x_max: 0,
        o: "m 440 -4 b 374 -15 426 -11 399 -15 b 218 193 265 -15 218 51 l 218 576 l 144 576 b 8 565 74 576 38 571 l -8 636 b 175 672 15 653 65 672 l 563 672 l 547 576 l 339 576 l 339 196 b 417 82 339 104 375 82 b 446 83 428 82 438 82 "
    },
    "\xcf\x85": {
        ha: 728,
        x_min: 0,
        x_max: 0,
        o: "m 614 672 b 664 410 638 628 664 521 b 357 -15 664 213 600 -15 b 93 256 210 -15 93 72 l 93 446 b 78 672 93 563 90 635 l 194 672 b 214 546 207 657 214 619 l 214 272 b 367 86 214 138 293 86 b 544 399 483 86 544 206 b 500 672 544 524 515 638 "
    },
    "\xcf\x86": {
        ha: 892,
        x_min: 0,
        x_max: 0,
        o: "m 331 619 b 174 342 260 575 174 486 b 392 75 174 208 246 97 l 392 483 b 563 686 392 628 471 686 b 838 354 694 686 838 560 b 504 -14 838 124 674 3 l 504 -275 l 392 -275 l 392 -14 b 53 339 225 -1 53 103 b 283 688 53 532 192 649 m 504 75 b 721 351 636 93 721 196 b 563 597 721 489 640 597 b 504 503 528 597 504 567 "
    },
    "\xcf\x87": {
        ha: 635,
        x_min: 0,
        x_max: 0,
        o: "m 156 672 l 326 310 l 332 310 b 403 458 351 353 374 400 l 503 672 l 622 672 l 385 218 l 629 -265 l 515 -296 l 315 115 l 310 115 b 246 -28 292 75 271 26 l 119 -296 l 15 -264 l 256 217 l 25 672 "
    },
    "\xcf\x88": {
        ha: 910,
        x_min: 0,
        x_max: 0,
        o: "m 410 -15 b 93 333 239 -4 93 74 l 93 515 b 82 672 93 578 92 638 l 194 672 b 211 546 206 657 211 615 l 211 344 b 411 74 211 147 306 81 l 411 849 l 522 849 l 522 74 b 729 397 643 79 729 204 b 679 672 729 536 697 643 l 792 672 b 846 407 819 628 846 532 b 522 -15 846 207 761 -3 l 522 -275 l 410 -275 "
    },
    "\xcf\x89": {
        ha: 964,
        x_min: 0,
        x_max: 0,
        o: "m 536 239 b 651 86 536 153 585 86 b 792 353 721 86 792 172 b 681 668 792 485 744 606 l 681 672 l 796 672 b 911 350 856 621 911 504 b 657 -15 911 100 785 -15 b 482 104 575 -15 510 31 l 476 104 b 299 -15 444 31 381 -15 b 53 339 182 -15 53 83 b 171 672 53 490 111 614 l 283 672 l 283 668 b 172 342 221 601 172 485 b 315 86 172 154 251 86 b 426 238 378 86 426 154 l 424 494 l 539 494 "
    },
    "\xcf\x82": {
        ha: 579,
        x_min: 0,
        x_max: 0,
        o: "m 539 568 b 415 593 506 582 468 593 b 176 336 271 593 176 474 b 367 97 176 204 246 133 b 546 61 433 79 482 71 b 560 40 556 58 560 54 b 479 -200 560 -36 515 -154 l 397 -175 b 443 -24 417 -143 440 -57 b 306 6 397 -15 347 -6 b 53 325 165 46 53 144 b 415 688 53 506 182 688 b 567 657 475 688 532 676 "
    },
    "\xce\xac": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 519 953 l 404 754 l 322 754 l 397 953 m 679 672 b 661 192 672 601 661 371 b 728 78 661 113 681 79 l 718 -10 b 676 -15 710 -14 690 -15 b 561 126 617 -15 568 24 l 557 126 b 328 -15 513 46 435 -15 b 53 322 168 -15 53 118 b 353 688 53 542 197 688 b 560 553 450 688 524 638 l 565 553 b 578 672 568 606 572 639 m 176 326 b 358 82 176 199 242 82 b 538 253 443 82 517 164 b 546 347 544 283 546 310 b 540 419 546 374 546 396 b 368 592 524 510 457 592 b 176 326 254 592 176 479 "
    },
    "\xce\xad": {
        ha: 611,
        x_min: 0,
        x_max: 0,
        o: "m 479 953 l 363 754 l 282 754 l 356 953 m 583 46 b 338 -15 532 11 432 -15 b 54 189 203 -15 54 38 b 221 357 54 272 122 342 l 221 364 b 88 506 132 383 88 439 b 356 688 88 594 176 688 b 560 636 443 688 511 669 l 533 556 b 365 597 506 574 433 597 b 210 497 272 597 210 558 b 397 401 210 431 292 401 l 478 401 l 478 314 l 393 314 b 182 200 272 314 182 281 b 364 78 182 121 265 78 b 561 129 438 78 521 106 "
    },
    "\xce\xae": {
        ha: 771,
        x_min: 0,
        x_max: 0,
        o: "m 542 953 l 425 754 l 344 754 l 418 953 m 101 0 l 101 490 b 82 672 101 558 97 626 l 192 672 b 211 561 204 646 211 604 l 214 561 b 436 688 247 625 325 688 b 674 401 529 688 674 632 l 674 -25 b 688 -275 674 -103 674 -219 l 572 -275 b 551 -29 556 -233 551 -118 l 551 388 b 396 586 551 496 511 586 b 232 461 315 586 253 529 b 224 404 226 446 224 425 l 224 0 "
    },
    "\xce\xaf": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 308 954 l 193 756 l 111 756 l 185 954 m 224 163 b 289 81 224 103 236 78 l 282 -8 b 226 -15 268 -12 247 -15 b 101 150 156 -15 101 17 l 101 672 l 224 672 "
    },
    "\xcf\x8a": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 39 774 b -29 843 -1 774 -29 806 b 40 914 -29 882 0 914 b 107 843 78 914 107 883 b 39 774 107 806 79 774 m 294 774 b 226 843 253 774 226 806 b 294 914 226 882 256 914 b 363 843 333 914 363 883 b 294 774 363 806 335 774 m 224 163 b 289 81 224 103 236 78 l 282 -8 b 226 -15 268 -12 247 -15 b 101 150 156 -15 101 17 l 101 672 l 224 672 "
    },
    "\xcf\x8c": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 525 953 l 408 754 l 328 754 l 401 953 m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 "
    },
    "\xcf\x8d": {
        ha: 728,
        x_min: 0,
        x_max: 0,
        o: "m 501 954 l 386 756 l 304 756 l 378 954 m 614 672 b 664 410 638 628 664 521 b 357 -15 664 213 600 -15 b 93 256 210 -15 93 72 l 93 446 b 78 672 93 563 90 635 l 194 672 b 214 546 207 657 214 619 l 214 272 b 367 86 214 138 293 86 b 544 399 483 86 544 206 b 500 672 544 524 515 638 "
    },
    "\xcf\x8b": {
        ha: 728,
        x_min: 0,
        x_max: 0,
        o: "m 229 774 b 161 843 189 774 161 806 b 231 914 161 882 190 914 b 296 843 268 914 296 883 b 229 774 296 806 269 774 m 485 774 b 417 843 443 774 417 806 b 485 914 417 882 446 914 b 553 843 524 914 553 883 b 485 774 553 806 525 774 m 614 672 b 664 410 638 628 664 521 b 357 -15 664 213 600 -15 b 93 256 210 -15 93 72 l 93 446 b 78 672 93 563 90 635 l 194 672 b 214 546 207 657 214 619 l 214 272 b 367 86 214 138 293 86 b 544 399 483 86 544 206 b 500 672 544 524 515 638 "
    },
    "\xcf\x8e": {
        ha: 964,
        x_min: 0,
        x_max: 0,
        o: "m 624 953 l 508 754 l 426 754 l 500 953 m 536 239 b 651 86 536 153 585 86 b 792 353 721 86 792 172 b 681 668 792 485 744 606 l 681 672 l 796 672 b 911 350 856 621 911 504 b 657 -15 911 100 785 -15 b 482 104 575 -15 510 31 l 476 104 b 299 -15 444 31 381 -15 b 53 339 182 -15 53 83 b 171 672 53 490 111 614 l 283 672 l 283 668 b 172 342 221 601 172 485 b 315 86 172 154 251 86 b 426 238 378 86 426 154 l 424 494 l 539 494 "
    },
    "\xce\x90": {
        ha: 328,
        x_min: 0,
        x_max: 0,
        o: "m 253 967 l 183 750 l 118 750 l 149 967 m 7 779 b -57 843 -31 779 -57 808 b 8 907 -57 879 -28 907 b 69 843 43 907 69 879 b 7 779 69 808 44 779 m 343 779 b 279 843 306 779 279 808 b 343 907 279 879 307 907 b 406 843 379 907 406 879 b 343 779 406 808 381 779 m 224 163 b 289 81 224 103 236 78 l 282 -8 b 226 -15 268 -12 247 -15 b 101 150 156 -15 101 17 l 101 672 l 224 672 "
    },
    "\xce\xb0": {
        ha: 728,
        x_min: 0,
        x_max: 0,
        o: "m 440 967 l 372 749 l 307 749 l 336 967 m 196 778 b 131 843 157 778 131 808 b 196 907 131 878 160 907 b 257 843 231 907 257 879 b 196 778 257 808 232 778 m 531 778 b 468 843 494 778 468 808 b 532 907 468 878 496 907 b 594 843 568 907 594 879 b 531 778 594 808 569 778 m 614 672 b 664 410 638 628 664 521 b 357 -15 664 213 600 -15 b 93 256 210 -15 93 72 l 93 446 b 78 672 93 563 90 635 l 194 672 b 214 546 207 657 214 619 l 214 272 b 367 86 214 138 293 86 b 544 399 483 86 544 206 b 500 672 544 524 515 638 "
    },
    "\xce\x84": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 314 964 l 197 765 l 117 765 l 190 964 "
    },
    "\xce\x85": {
        ha: 481,
        x_min: 0,
        x_max: 0,
        o: "m 317 986 l 249 768 l 182 768 l 213 986 m 71 796 b 6 863 32 796 6 826 b 72 928 6 899 35 928 b 135 863 107 928 135 900 b 71 796 135 826 108 796 m 407 796 b 342 863 368 796 342 826 b 407 928 342 899 371 928 b 471 863 444 928 471 900 b 407 796 471 826 446 796 "
    },
    "\xef\x9b\x97": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 33 796 b -33 864 -6 796 -33 828 b 35 933 -33 901 -4 933 b 100 864 72 933 100 903 b 33 796 100 825 72 796 m 376 796 b 310 864 338 796 310 828 b 378 933 310 901 339 933 b 443 864 415 933 443 903 b 376 796 443 825 415 796 m 338 974 l 183 775 l 103 775 l 210 974 "
    },
    "\xef\x9b\x98": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 39 796 b -28 864 0 796 -28 828 b 40 933 -28 901 3 933 b 106 864 78 933 106 903 b 39 796 106 825 78 796 m 374 796 b 308 864 335 796 308 828 b 375 933 308 901 338 933 b 442 864 414 933 442 903 b 374 796 442 825 414 796 m 206 974 l 313 775 l 233 775 l 78 974 "
    },
    "\xef\x9b\x96": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 124 951 l 236 756 l 158 756 l -3 951 m 333 951 l 444 756 l 368 756 l 207 951 "
    },
    "\xef\x9b\x8c": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 18 1001 b -46 1069 -19 1001 -46 1032 b 21 1138 -46 1107 -17 1138 b 85 1069 58 1138 85 1108 b 18 1001 85 1031 58 1001 m 399 1001 b 335 1069 361 1001 335 1032 b 401 1138 335 1107 363 1138 b 467 1069 439 1138 467 1108 b 399 1001 467 1031 439 1001 m 339 1150 l 178 988 l 85 988 l 197 1150 "
    },
    "\xef\x9b\x8d": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 18 1001 b -46 1069 -19 1001 -46 1032 b 21 1138 -46 1107 -18 1138 b 85 1069 58 1138 85 1108 b 18 1001 85 1031 58 1001 m 399 1001 b 335 1069 361 1001 335 1032 b 401 1138 335 1107 363 1138 b 465 1069 439 1138 465 1108 b 399 1001 465 1031 439 1001 m 221 1150 l 333 988 l 240 988 l 79 1150 "
    },
    "\xef\x9b\x93": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 81 1150 l 208 988 l 115 988 l -62 1150 m 322 1150 l 449 988 l 356 988 l 179 1150 "
    },
    "\xd0\x81": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 226 1001 b 158 1072 185 1001 158 1033 b 226 1142 158 1110 188 1142 b 293 1072 265 1142 293 1111 b 226 1001 293 1033 267 1001 m 483 1001 b 415 1072 443 1001 415 1033 b 485 1142 415 1110 444 1142 b 551 1072 524 1142 551 1111 b 483 1001 551 1033 525 1001 "
    },
    "\xd0\x82": {
        ha: 924,
        x_min: 0,
        x_max: 0,
        o: "m 718 936 l 718 835 l 379 835 l 379 568 l 383 568 b 571 625 428 596 499 625 b 797 508 674 625 746 581 b 868 247 849 436 868 342 b 739 -87 868 104 821 -18 b 546 -193 681 -153 607 -183 l 524 -99 b 676 -1 578 -85 636 -56 b 742 236 717 51 742 132 b 694 439 742 319 726 389 b 538 524 658 493 608 524 b 379 469 476 524 421 500 l 379 0 l 258 0 l 258 835 l -1 835 l -1 936 "
    },
    "\xd0\x83": {
        ha: 601,
        x_min: 0,
        x_max: 0,
        o: "m 603 936 l 603 835 l 226 835 l 226 0 l 106 0 l 106 936 m 540 1149 l 364 986 l 264 986 l 393 1149 "
    },
    "\xd0\x84": {
        ha: 800,
        x_min: 0,
        x_max: 0,
        o: "m 726 813 b 542 851 681 835 614 851 b 181 526 329 851 200 707 l 661 526 l 661 429 l 182 429 b 538 86 188 240 324 86 b 732 124 610 86 678 100 l 754 31 b 515 -15 708 8 626 -15 b 50 467 250 -15 50 164 b 538 951 50 731 233 951 b 756 907 656 951 722 924 "
    },
    "\xd0\x85": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 297 -14 625 111 518 -14 b 58 46 207 -14 108 13 "
    },
    "\xd0\x86": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 "
    },
    "\xd0\x87": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 39 1001 b -31 1072 -3 1001 -31 1033 b 39 1142 -31 1110 0 1142 b 106 1072 78 1142 106 1111 b 39 1001 106 1033 79 1001 m 296 1001 b 228 1072 256 1001 228 1033 b 297 1142 228 1110 257 1142 b 364 1072 336 1142 364 1111 b 296 1001 364 1033 338 1001 "
    },
    "\xd0\x88": {
        ha: 514,
        x_min: 0,
        x_max: 0,
        o: "m 297 936 l 418 936 l 418 310 b 135 -15 418 61 296 -15 b 6 7 90 -15 36 -6 l 24 106 b 125 88 49 96 85 88 b 297 319 233 88 297 136 "
    },
    "\xd0\x89": {
        ha: 1224,
        x_min: 0,
        x_max: 0,
        o: "m 696 936 l 696 583 b 810 590 725 588 779 590 b 1169 299 997 590 1169 506 b 1092 96 1169 211 1139 144 b 763 -8 1014 21 892 -8 b 575 3 678 -8 615 -3 l 575 835 l 290 835 l 290 551 b 150 33 290 349 281 124 b 10 -11 117 11 60 -11 l -8 86 b 92 138 31 93 69 115 b 174 542 167 210 174 392 l 174 936 m 696 92 b 793 86 725 88 754 86 b 1043 296 928 86 1043 154 b 793 496 1043 442 924 496 b 696 490 764 496 726 493 "
    },
    "\xd0\x8a": {
        ha: 1246,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 563 l 597 563 l 597 936 l 718 936 l 718 571 b 846 578 747 575 797 578 b 1192 297 1029 578 1192 494 b 1113 94 1192 207 1161 142 b 786 -8 1036 18 919 -8 b 597 3 700 -8 638 -3 l 597 460 l 226 460 l 226 0 l 106 0 l 106 936 m 718 93 b 817 86 746 88 776 86 b 1065 293 949 86 1065 149 b 821 483 1065 431 950 483 b 718 478 778 483 744 481 "
    },
    "\xd0\x8b": {
        ha: 938,
        x_min: 0,
        x_max: 0,
        o: "m 703 936 l 703 835 l 376 835 l 376 567 l 379 567 b 592 631 432 599 513 631 b 765 567 669 631 725 607 b 839 349 815 515 839 442 l 839 0 l 717 0 l 717 332 b 672 485 717 401 704 450 b 553 532 643 515 606 532 b 376 472 493 532 421 504 l 376 0 l 254 0 l 254 835 l -1 835 l -1 936 "
    },
    "\xd0\x8c": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 225 936 l 225 521 l 263 521 l 583 936 l 729 936 l 375 507 b 638 265 529 486 589 392 b 740 0 672 169 699 83 l 610 0 b 525 221 576 64 550 147 b 264 429 482 344 422 429 l 225 429 l 225 0 l 106 0 l 106 936 m 590 1142 l 413 979 l 314 979 l 442 1142 "
    },
    "\xd0\x8e": {
        ha: 724,
        x_min: 0,
        x_max: 0,
        o: "m 140 936 l 326 538 b 394 372 350 482 372 428 l 397 372 b 456 542 414 421 432 475 l 601 936 l 729 936 l 533 456 b 358 100 482 331 424 188 b 146 -15 297 24 229 -15 b 78 -7 115 -15 93 -12 l 90 92 b 135 88 100 89 114 88 b 318 249 232 89 289 182 b 314 306 328 269 325 283 l 3 936 m 278 1135 b 363 1049 283 1092 297 1049 b 447 1135 426 1049 442 1089 l 540 1135 b 360 985 533 1042 478 985 b 185 1135 246 985 192 1043 "
    },
    "\xd0\x8f": {
        ha: 882,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 101 l 658 101 l 658 936 l 779 936 l 779 0 l 503 0 l 492 -242 l 392 -242 l 382 0 l 106 0 l 106 936 "
    },
    "\xd0\x90": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 "
    },
    "\xd0\x91": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 631 936 l 631 835 l 226 835 l 226 583 b 342 590 256 588 311 590 b 583 528 431 590 518 571 b 703 299 654 482 703 408 b 625 96 703 211 674 144 b 294 -8 549 21 422 -8 b 106 3 210 -8 146 -3 l 106 936 m 226 93 b 328 86 254 88 286 86 b 525 158 403 86 479 110 b 576 296 557 192 576 238 b 500 449 576 368 546 417 b 322 496 451 482 389 496 b 226 490 294 496 257 493 "
    },
    "\xd0\x92": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 106 924 b 326 943 158 935 242 943 b 583 875 447 943 525 922 b 661 710 632 839 661 783 b 503 504 661 619 601 540 l 503 501 b 696 267 592 479 696 406 b 617 79 696 186 664 125 b 293 -8 551 19 446 -8 b 106 3 210 -8 146 -3 m 226 540 l 336 540 b 539 697 464 540 539 607 b 333 850 539 807 456 850 b 226 842 278 850 246 846 m 226 92 b 328 86 250 88 285 86 b 568 268 453 86 568 132 b 326 449 568 396 458 449 l 226 449 "
    },
    "\xd0\x93": {
        ha: 601,
        x_min: 0,
        x_max: 0,
        o: "m 603 936 l 603 835 l 226 835 l 226 0 l 106 0 l 106 936 "
    },
    "\xd0\x94": {
        ha: 875,
        x_min: 0,
        x_max: 0,
        o: "m 746 936 l 746 99 l 828 96 l 819 -225 l 725 -225 l 717 0 l 126 0 l 118 -225 l 24 -225 l 15 96 l 86 99 b 178 304 121 163 156 231 b 222 699 210 413 222 538 l 222 936 m 335 660 b 288 278 335 510 321 383 b 211 100 268 213 239 150 l 625 100 l 625 836 l 335 836 "
    },
    "\xd0\x95": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 "
    },
    "\xd0\x96": {
        ha: 1113,
        x_min: 0,
        x_max: 0,
        o: "m 171 936 l 461 521 l 497 521 l 497 936 l 615 936 l 615 521 l 653 521 l 942 936 l 1083 936 l 751 506 b 1004 265 899 490 958 399 b 1097 0 1036 176 1058 86 l 974 0 b 896 219 942 63 919 153 b 656 429 853 347 806 429 l 615 429 l 615 0 l 497 0 l 497 429 l 456 429 b 214 219 306 429 258 347 b 139 0 192 153 169 63 l 15 0 b 108 264 56 86 78 176 b 361 506 156 396 215 488 l 29 936 "
    },
    "\xd0\x97": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 69 881 b 317 951 133 922 215 951 b 592 722 479 951 592 867 b 399 494 592 607 508 519 l 399 492 b 626 257 531 478 626 392 b 288 -15 626 63 458 -15 b 43 46 203 -15 114 3 l 75 140 b 285 83 125 111 208 83 b 500 261 424 83 500 158 b 246 442 500 401 365 442 l 190 442 l 190 533 l 246 533 b 465 706 369 533 465 610 b 297 853 465 800 399 853 b 103 792 226 853 153 824 "
    },
    "\xd0\x98": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 219 936 l 219 542 b 208 146 219 393 217 271 l 211 144 b 385 454 258 242 317 343 l 688 936 l 808 936 l 808 0 l 694 0 l 694 399 b 706 779 694 550 696 661 l 701 781 b 528 465 656 678 592 569 l 235 0 l 106 0 l 106 936 "
    },
    "\xd0\x99": {
        ha: 914,
        x_min: 0,
        x_max: 0,
        o: "m 219 936 l 219 542 b 208 146 219 393 217 271 l 211 144 b 385 454 258 242 317 343 l 688 936 l 808 936 l 808 0 l 694 0 l 694 399 b 706 779 694 550 696 661 l 701 781 b 528 465 656 678 592 569 l 235 0 l 106 0 l 106 936 m 372 1132 b 457 1046 378 1089 392 1046 b 542 1132 521 1046 536 1086 l 635 1132 b 454 983 628 1040 572 983 b 279 1132 340 983 286 1040 "
    },
    "\xd0\x9a": {
        ha: 753,
        x_min: 0,
        x_max: 0,
        o: "m 225 936 l 225 521 l 263 521 l 583 936 l 729 936 l 375 507 b 638 265 529 486 589 392 b 740 0 672 169 699 83 l 610 0 b 525 221 576 64 550 147 b 264 429 482 344 422 429 l 225 429 l 225 0 l 106 0 l 106 936 "
    },
    "\xd0\x9b": {
        ha: 825,
        x_min: 0,
        x_max: 0,
        o: "m 721 936 l 721 0 l 599 0 l 599 835 l 289 835 l 289 551 b 149 33 289 349 281 122 b 6 -11 114 11 60 -11 l -10 86 b 89 136 28 93 67 115 b 171 542 164 210 171 392 l 171 936 "
    },
    "\xd0\x9c": {
        ha: 1117,
        x_min: 0,
        x_max: 0,
        o: "m 894 411 b 881 815 888 542 879 699 l 876 815 b 758 460 844 706 806 589 l 593 6 l 501 6 l 350 451 b 242 815 306 583 268 704 l 239 815 b 221 401 236 699 229 542 l 196 0 l 81 0 l 146 936 l 300 936 l 460 483 b 554 168 499 368 531 265 l 558 168 b 657 483 582 263 615 365 l 824 936 l 978 936 l 1036 0 l 918 0 "
    },
    "\xd0\x9d": {
        ha: 906,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 544 l 679 544 l 679 936 l 801 936 l 801 0 l 679 0 l 679 439 l 226 439 l 226 0 l 106 0 l 106 936 "
    },
    "\xd0\x9e": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 "
    },
    "\xd0\x9f": {
        ha: 888,
        x_min: 0,
        x_max: 0,
        o: "m 782 936 l 782 0 l 661 0 l 661 835 l 226 835 l 226 0 l 106 0 l 106 936 "
    },
    "\xd0\xa0": {
        ha: 739,
        x_min: 0,
        x_max: 0,
        o: "m 106 925 b 338 943 164 935 240 943 b 600 865 457 943 544 915 b 682 669 651 821 682 753 b 610 469 682 585 657 518 b 324 367 546 401 442 367 b 226 375 288 367 254 368 l 226 0 l 106 0 m 226 474 b 326 464 253 467 286 464 b 561 664 472 464 561 535 b 340 847 561 788 474 847 b 226 838 288 847 247 843 "
    },
    "\xd0\xa1": {
        ha: 806,
        x_min: 0,
        x_max: 0,
        o: "m 760 31 b 513 -14 715 8 626 -14 b 50 460 249 -14 50 153 b 539 951 50 753 249 951 b 761 910 656 951 729 926 l 732 811 b 543 850 686 833 621 850 b 178 464 324 850 178 710 b 538 88 178 235 310 88 b 735 126 611 88 686 103 "
    },
    "\xd0\xa2": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 l 283 0 "
    },
    "\xd0\xa3": {
        ha: 724,
        x_min: 0,
        x_max: 0,
        o: "m 140 936 l 326 538 b 394 372 350 482 372 428 l 397 372 b 456 542 414 421 432 475 l 601 936 l 729 936 l 533 456 b 358 100 482 331 424 188 b 146 -15 297 24 229 -15 b 78 -7 115 -15 93 -12 l 90 92 b 135 88 100 89 114 88 b 318 249 232 89 289 182 b 314 306 328 269 325 283 l 3 936 "
    },
    "\xd0\xa4": {
        ha: 1007,
        x_min: 0,
        x_max: 0,
        o: "m 563 974 l 563 890 b 957 468 760 882 957 763 b 561 50 957 174 760 61 l 561 -37 l 444 -37 l 444 50 b 50 463 249 63 50 167 b 447 890 50 769 267 879 l 447 974 m 446 803 b 175 468 324 796 175 711 b 446 136 175 244 308 150 m 561 136 b 832 469 696 147 832 238 b 561 803 832 710 696 796 "
    },
    "\xd0\xa5": {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 618 0 l 499 207 b 390 392 450 286 419 338 l 388 392 b 286 206 361 338 335 288 l 174 0 l 35 0 l 321 474 l 46 936 l 186 936 l 310 717 b 396 558 344 656 371 608 l 400 558 b 485 717 426 614 450 657 l 613 936 l 751 936 l 467 481 l 758 0 "
    },
    "\xd0\xa6": {
        ha: 906,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 101 l 656 101 l 656 936 l 778 936 l 778 99 l 860 96 l 851 -225 l 756 -225 l 747 0 l 106 0 l 106 936 "
    },
    "\xd0\xa7": {
        ha: 829,
        x_min: 0,
        x_max: 0,
        o: "m 219 936 l 219 639 b 418 439 219 511 286 439 b 603 492 483 439 554 461 l 603 936 l 725 936 l 725 0 l 603 0 l 603 397 l 600 397 b 375 339 535 360 457 339 b 99 621 251 339 99 392 l 99 936 "
    },
    "\xd0\xa8": {
        ha: 1176,
        x_min: 0,
        x_max: 0,
        o: "m 225 936 l 225 101 l 529 101 l 529 936 l 649 936 l 649 101 l 951 101 l 951 936 l 1072 936 l 1072 0 l 106 0 l 106 936 "
    },
    "\xd0\xa9": {
        ha: 1200,
        x_min: 0,
        x_max: 0,
        o: "m 225 936 l 225 101 l 529 101 l 529 936 l 649 936 l 649 101 l 951 101 l 951 936 l 1072 936 l 1072 99 l 1154 96 l 1146 -225 l 1050 -225 l 1043 0 l 106 0 l 106 936 "
    },
    "\xd0\xaa": {
        ha: 876,
        x_min: 0,
        x_max: 0,
        o: "m 358 936 l 358 586 b 471 593 386 590 435 593 b 822 301 651 593 822 506 b 750 101 822 214 794 149 b 424 -8 672 19 549 -8 b 238 3 342 -8 278 -3 l 238 836 l -3 836 l -3 936 m 358 93 b 454 86 385 88 415 86 b 694 296 589 86 694 154 b 456 497 694 442 578 497 b 358 490 424 497 388 494 "
    },
    "\xd0\xab": {
        ha: 1036,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 586 b 338 593 254 590 307 593 b 699 300 531 593 699 508 b 626 101 699 214 671 150 b 293 -8 550 21 419 -8 b 106 3 210 -8 146 -3 l 106 936 m 226 93 b 324 86 251 88 282 86 b 572 296 457 86 572 154 b 322 497 572 442 447 497 b 226 490 278 497 242 493 m 925 936 l 925 0 l 803 0 l 803 936 "
    },
    "\xd0\xac": {
        ha: 757,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 586 b 342 593 254 590 310 593 b 703 301 533 593 703 508 b 631 101 703 214 675 150 b 294 -8 554 21 424 -8 b 106 3 210 -8 146 -3 l 106 936 m 226 93 b 326 86 254 88 285 86 b 576 294 461 86 576 151 b 325 497 576 442 458 497 b 226 490 294 497 257 494 "
    },
    "\xd0\xad": {
        ha: 789,
        x_min: 0,
        x_max: 0,
        o: "m 171 528 l 607 528 b 286 851 592 708 479 851 b 86 804 211 851 146 831 l 57 897 b 293 951 124 926 204 951 b 738 467 588 951 738 739 b 286 -15 738 160 535 -15 b 42 33 193 -15 108 3 l 68 129 b 269 86 122 104 200 86 b 608 431 476 86 600 236 l 171 431 "
    },
    "\xd0\xae": {
        ha: 1204,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 532 l 365 532 b 764 951 390 793 543 951 b 1154 478 1007 951 1154 756 b 751 -15 1154 153 974 -15 b 363 431 525 -15 372 157 l 226 431 l 226 0 l 106 0 l 106 936 m 756 82 b 1031 472 933 82 1031 260 b 758 854 1031 658 943 854 b 482 463 572 854 482 665 b 756 82 482 265 581 82 "
    },
    "\xd0\xaf": {
        ha: 754,
        x_min: 0,
        x_max: 0,
        o: "m 21 0 b 58 85 35 25 47 54 b 200 399 99 192 124 322 b 278 446 222 421 250 438 l 278 450 b 71 681 163 469 71 553 b 157 871 71 763 104 828 b 425 943 215 918 307 943 b 649 924 504 943 588 936 l 649 0 l 528 0 l 528 406 l 439 406 b 304 360 381 406 338 393 b 181 68 240 294 214 157 b 150 0 171 44 164 25 m 528 839 b 414 850 507 843 468 850 b 193 675 294 850 193 804 b 425 497 193 563 293 497 b 528 499 465 497 504 497 "
    },
    "\xd0\xb0": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 "
    },
    "\xd0\xb1": {
        ha: 733,
        x_min: 0,
        x_max: 0,
        o: "m 610 900 b 469 869 575 888 514 876 b 231 743 361 853 282 817 b 157 521 188 682 163 592 l 161 521 b 394 672 204 618 299 672 b 681 340 560 672 681 554 b 369 -15 681 121 567 -15 b 56 435 133 -15 56 211 b 160 807 56 588 88 713 b 449 965 225 900 318 943 b 615 1001 503 974 569 985 m 557 331 b 369 582 557 440 514 582 b 218 490 297 582 246 544 b 185 347 196 450 185 401 b 372 76 185 236 239 76 b 557 331 507 76 557 207 "
    },
    "\xd0\xb2": {
        ha: 694,
        x_min: 0,
        x_max: 0,
        o: "m 99 664 b 313 679 146 672 233 679 b 611 511 425 679 611 661 b 471 360 611 428 547 376 l 471 357 b 642 190 569 343 642 288 b 288 -8 642 14 419 -8 b 99 0 213 -8 135 -3 m 215 390 l 307 390 b 490 496 397 390 490 417 b 310 594 490 563 432 594 b 215 589 269 594 244 592 m 214 81 b 313 75 249 76 274 75 b 517 192 394 75 517 94 b 303 310 517 289 419 310 l 214 310 "
    },
    "\xd0\xb3": {
        ha: 535,
        x_min: 0,
        x_max: 0,
        o: "m 511 672 l 511 574 l 219 574 l 219 0 l 99 0 l 99 672 "
    },
    "\xd0\xb4": {
        ha: 736,
        x_min: 0,
        x_max: 0,
        o: "m 622 672 l 622 92 l 692 90 l 685 -214 l 589 -214 l 583 0 l 118 0 l 113 -214 l 17 -214 l 11 90 l 68 92 b 135 229 97 135 119 181 b 174 497 161 313 174 403 l 174 672 m 282 468 b 247 218 282 379 269 293 b 193 93 233 172 214 131 l 503 93 l 503 579 l 282 579 "
    },
    "\xd0\xb5": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 "
    },
    "\xd0\xb6": {
        ha: 926,
        x_min: 0,
        x_max: 0,
        o: "m 158 672 l 381 379 l 406 379 l 406 672 l 522 672 l 522 379 l 546 379 l 768 672 l 908 672 l 643 367 b 844 189 744 356 804 296 b 918 0 868 124 890 53 l 796 0 b 735 154 774 40 754 96 b 543 297 693 264 631 297 l 522 297 l 522 0 l 406 0 l 406 297 l 383 297 b 190 153 289 297 232 263 b 126 0 168 94 150 42 l 8 0 b 82 188 36 54 58 125 b 285 367 124 296 183 356 l 18 672 "
    },
    "\xd0\xb7": {
        ha: 599,
        x_min: 0,
        x_max: 0,
        o: "m 157 390 l 215 390 b 388 500 318 390 388 438 b 257 597 388 560 333 597 b 94 550 203 597 142 579 l 64 625 b 288 686 132 667 210 686 b 515 510 390 686 515 640 b 364 357 515 426 439 372 l 364 354 b 547 186 464 346 547 285 b 257 -14 547 40 399 -14 b 39 40 178 -14 99 7 l 71 122 b 249 76 119 96 185 76 b 414 192 350 76 414 125 b 218 307 414 282 319 307 l 157 307 "
    },
    "\xd0\xb8": {
        ha: 769,
        x_min: 0,
        x_max: 0,
        o: "m 214 672 l 214 389 b 207 119 214 282 213 215 l 211 118 b 319 325 251 200 275 247 l 529 672 l 672 672 l 672 0 l 556 0 l 556 285 b 564 560 556 394 558 451 l 560 560 b 449 351 517 474 488 419 b 239 0 385 247 311 118 l 99 0 l 99 672 "
    },
    "\xd0\xb9": {
        ha: 769,
        x_min: 0,
        x_max: 0,
        o: "m 214 672 l 214 389 b 207 119 214 282 213 215 l 211 118 b 319 325 251 200 275 247 l 529 672 l 672 672 l 672 0 l 556 0 l 556 285 b 564 560 556 394 558 451 l 560 560 b 449 351 517 474 488 419 b 239 0 385 247 311 118 l 99 0 l 99 672 m 293 946 b 382 840 297 886 326 840 b 476 946 442 840 469 885 l 564 946 b 379 774 558 832 486 774 b 204 946 257 774 210 850 "
    },
    "\xd0\xba": {
        ha: 665,
        x_min: 0,
        x_max: 0,
        o: "m 222 672 l 222 381 l 251 381 l 504 672 l 653 672 l 360 368 b 586 164 468 357 533 285 b 658 0 604 119 628 54 l 531 0 b 468 138 513 29 489 82 b 246 296 422 246 360 296 l 222 296 l 222 0 l 101 0 l 101 672 "
    },
    "\xd0\xbb": {
        ha: 704,
        x_min: 0,
        x_max: 0,
        o: "m 606 672 l 606 0 l 485 0 l 485 576 l 254 576 l 254 401 b 149 29 254 213 236 86 b 15 -12 115 3 78 -12 l 3 83 b 69 111 26 88 53 97 b 139 401 132 157 139 251 l 139 672 "
    },
    "\xd0\xbc": {
        ha: 888,
        x_min: 0,
        x_max: 0,
        o: "m 108 672 l 258 672 l 381 333 b 442 149 397 283 426 201 l 444 149 b 524 379 460 199 497 306 l 632 672 l 783 672 l 831 0 l 714 0 l 699 321 b 686 561 694 393 689 479 l 682 561 b 608 343 664 500 646 446 l 479 4 l 390 4 l 271 336 b 204 560 250 400 221 497 l 199 560 b 188 318 196 481 192 392 l 171 0 l 58 0 "
    },
    "\xd0\xbd": {
        ha: 758,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 401 l 539 401 l 539 672 l 660 672 l 660 0 l 539 0 l 539 304 l 219 304 l 219 0 l 99 0 l 99 672 "
    },
    "\xd0\xbe": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 "
    },
    "\xd0\xbf": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 654 672 l 654 0 l 532 0 l 532 575 l 219 575 l 219 0 l 99 0 l 99 672 "
    },
    "\xd1\x80": {
        ha: 790,
        x_min: 0,
        x_max: 0,
        o: "m 101 453 b 96 672 101 539 99 608 l 206 672 l 211 557 l 214 557 b 453 688 264 639 343 688 b 738 346 615 688 738 550 b 432 -15 738 104 590 -15 b 225 90 343 -15 265 24 l 222 90 l 222 -275 l 101 -275 m 222 274 b 228 224 222 256 225 239 b 411 81 250 139 324 81 b 615 340 540 81 615 186 b 415 590 615 475 544 590 b 231 439 332 590 254 531 b 222 389 226 424 222 406 "
    },
    "\xd1\x81": {
        ha: 622,
        x_min: 0,
        x_max: 0,
        o: "m 581 25 b 388 -14 549 8 478 -14 b 53 329 185 -14 53 124 b 414 686 53 536 194 686 b 583 651 486 686 550 668 l 556 557 b 414 589 526 574 481 589 b 176 335 260 589 176 475 b 410 83 176 179 276 83 b 560 117 479 83 525 101 "
    },
    "\xd1\x82": {
        ha: 571,
        x_min: 0,
        x_max: 0,
        o: "m 556 672 l 556 575 l 346 575 l 346 0 l 225 0 l 225 575 l 15 575 l 15 672 "
    },
    "\xd1\x83": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 "
    },
    "\xd1\x84": {
        ha: 890,
        x_min: 0,
        x_max: 0,
        o: "m 501 986 l 501 685 b 839 338 697 671 839 547 b 501 -12 839 117 689 0 l 501 -275 l 390 -275 l 390 -14 b 53 331 196 -1 53 121 b 390 685 53 553 201 669 l 390 986 m 390 601 b 174 335 254 583 174 472 b 390 71 174 196 257 88 m 501 71 b 718 338 636 89 718 200 b 501 601 718 476 636 582 "
    },
    "\xd1\x85": {
        ha: 643,
        x_min: 0,
        x_max: 0,
        o: "m 158 672 l 254 528 b 322 418 279 490 300 456 l 326 418 b 393 529 349 458 371 493 l 488 672 l 619 672 l 390 347 l 626 0 l 488 0 l 389 151 b 317 268 363 190 340 228 l 314 268 b 243 151 292 228 268 192 l 146 0 l 11 0 l 250 343 l 22 672 "
    },
    "\xd1\x86": {
        ha: 764,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 96 l 529 96 l 529 672 l 650 672 l 650 92 l 719 90 l 713 -214 l 618 -214 l 613 0 l 99 0 l 99 672 "
    },
    "\xd1\x87": {
        ha: 715,
        x_min: 0,
        x_max: 0,
        o: "m 213 672 l 213 451 b 351 308 213 367 244 308 b 496 356 404 308 458 328 l 496 672 l 617 672 l 617 0 l 496 0 l 496 269 l 493 269 b 311 218 447 239 375 218 b 90 438 183 218 90 283 l 90 672 "
    },
    "\xd1\x88": {
        ha: 1025,
        x_min: 0,
        x_max: 0,
        o: "m 218 672 l 218 96 l 453 96 l 453 672 l 572 672 l 572 96 l 807 96 l 807 672 l 928 672 l 928 0 l 99 0 l 99 672 "
    },
    "\xd1\x89": {
        ha: 1040,
        x_min: 0,
        x_max: 0,
        o: "m 218 672 l 218 96 l 453 96 l 453 672 l 572 672 l 572 96 l 807 96 l 807 672 l 928 672 l 928 92 l 996 90 l 989 -214 l 894 -214 l 889 0 l 99 0 l 99 672 "
    },
    "\xd1\x8a": {
        ha: 804,
        x_min: 0,
        x_max: 0,
        o: "m 340 672 l 340 446 b 456 451 372 450 414 451 b 754 225 594 451 754 399 b 683 69 754 154 726 106 b 399 -7 610 7 497 -7 b 218 3 332 -7 269 -3 l 218 576 l 19 576 l 19 672 m 339 86 b 431 79 364 82 390 79 b 632 221 532 79 632 114 b 425 364 632 336 522 364 b 339 357 394 364 368 361 "
    },
    "\xd1\x8b": {
        ha: 924,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 443 b 329 451 246 449 285 451 b 619 226 474 451 619 392 b 550 71 619 156 593 107 b 279 -7 476 8 368 -7 b 99 3 211 -7 149 -3 l 99 672 m 219 85 b 304 79 243 82 269 79 b 499 222 397 79 499 118 b 310 364 499 331 401 364 b 219 357 275 364 244 361 m 825 672 l 825 0 l 704 0 l 704 672 "
    },
    "\xd1\x8c": {
        ha: 692,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 444 b 331 451 247 450 294 451 b 642 225 482 451 642 404 b 571 71 642 156 614 107 b 279 -7 497 8 378 -7 b 99 3 211 -7 149 -3 l 99 672 m 219 85 b 310 79 243 82 269 79 b 519 222 401 79 519 110 b 307 364 519 339 397 364 b 219 357 275 364 247 361 "
    },
    "\xd1\x8d": {
        ha: 644,
        x_min: 0,
        x_max: 0,
        o: "m 129 383 l 468 383 b 236 593 457 499 386 593 b 75 556 165 593 111 572 l 49 635 b 256 688 107 668 185 688 b 500 592 353 688 440 654 b 592 333 557 532 592 443 b 235 -15 592 138 463 -15 b 39 31 163 -15 93 3 l 63 118 b 231 82 94 104 151 82 b 467 300 365 82 456 167 l 129 300 "
    },
    "\xd1\x8e": {
        ha: 979,
        x_min: 0,
        x_max: 0,
        o: "m 218 672 l 218 389 l 333 389 b 632 688 354 567 471 688 b 926 342 807 688 926 549 b 624 -15 926 124 793 -15 b 331 296 463 -15 344 104 l 218 296 l 218 0 l 99 0 l 99 672 m 625 75 b 804 339 749 75 804 211 b 628 596 804 465 747 596 b 447 332 510 596 447 468 b 625 75 447 201 507 75 "
    },
    "\xd1\x8f": {
        ha: 689,
        x_min: 0,
        x_max: 0,
        o: "m 592 0 l 471 0 l 471 282 l 381 282 b 268 244 329 282 294 268 b 174 56 218 204 200 121 b 146 0 165 35 156 17 l 15 0 b 57 76 31 22 44 47 b 163 279 86 142 103 229 b 239 318 183 297 208 313 l 239 322 b 61 489 151 332 61 386 b 150 635 61 558 99 606 b 375 681 206 667 288 681 b 592 667 456 681 533 674 m 471 592 b 369 599 440 596 413 599 b 188 482 286 599 188 575 b 367 365 188 396 294 365 b 471 365 417 365 443 365 "
    },
    "\xd1\x91": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 244 792 b 174 863 203 792 174 825 b 244 933 174 901 206 933 b 313 863 283 933 313 903 b 244 792 313 825 285 792 m 501 792 b 432 863 460 792 432 825 b 501 933 432 901 463 933 b 569 863 540 933 569 903 b 501 792 569 825 542 792 "
    },
    "\xd1\x92": {
        ha: 774,
        x_min: 0,
        x_max: 0,
        o: "m 124 868 l 124 986 l 246 986 l 246 868 l 560 868 l 560 781 l 246 781 l 246 583 l 249 583 b 453 679 297 638 371 679 b 644 571 536 679 601 639 b 718 276 699 493 718 388 b 581 -122 718 89 667 -50 b 407 -200 532 -164 471 -193 l 383 -104 b 514 -35 436 -93 476 -76 b 596 269 563 21 596 124 b 543 506 596 353 585 436 b 415 581 515 550 471 581 b 267 500 361 581 306 547 b 246 424 253 481 246 457 l 246 0 l 124 0 l 124 781 l 10 781 l 10 868 "
    },
    "\xd1\x93": {
        ha: 535,
        x_min: 0,
        x_max: 0,
        o: "m 511 672 l 511 574 l 219 574 l 219 0 l 99 0 l 99 672 m 482 963 l 311 764 l 225 764 l 347 963 "
    },
    "\xd1\x94": {
        ha: 639,
        x_min: 0,
        x_max: 0,
        o: "m 571 556 b 418 593 539 571 489 593 b 178 383 271 593 192 499 l 518 383 l 518 300 l 179 300 b 415 81 189 167 282 81 b 575 115 488 81 543 101 l 600 29 b 396 -15 567 11 492 -15 b 53 329 179 -15 53 135 b 419 688 53 544 206 688 b 600 643 500 688 568 661 "
    },
    "\xd1\x95": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 243 -14 494 69 403 -14 b 54 32 169 -14 101 4 "
    },
    "\xd1\x96": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 163 938 b 238 861 208 938 238 904 b 160 786 239 819 208 786 b 86 861 117 786 86 819 b 163 938 86 904 118 938 "
    },
    "\xd1\x97": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 35 792 b -36 863 -7 792 -36 825 b 35 933 -36 901 -4 933 b 103 863 74 933 103 903 b 35 792 103 825 75 792 m 292 792 b 222 863 250 792 222 825 b 293 933 222 901 253 933 b 360 863 331 933 360 903 b 292 792 360 825 333 792 "
    },
    "\xd1\x98": {
        ha: 338,
        x_min: 0,
        x_max: 0,
        o: "m -62 -194 b 71 -143 -7 -190 42 -175 b 117 110 104 -104 117 -51 l 117 672 l 239 672 l 239 63 b 158 -214 239 -68 218 -153 b -50 -290 104 -268 15 -290 m 179 938 b 253 861 224 938 253 904 b 176 786 254 821 225 786 b 101 861 131 786 101 821 b 179 938 101 904 133 938 "
    },
    "\xd1\x99": {
        ha: 1076,
        x_min: 0,
        x_max: 0,
        o: "m 607 672 l 607 443 b 717 450 635 447 682 450 b 1026 224 867 450 1026 399 b 958 71 1026 156 1000 107 b 667 -7 886 8 764 -7 b 485 3 601 -7 536 -3 l 485 576 l 260 576 l 260 401 b 147 31 260 213 235 88 b 15 -11 115 4 78 -11 l 3 85 b 69 111 26 89 54 99 b 146 401 133 156 146 254 l 146 672 m 606 85 b 696 79 631 82 657 79 b 904 221 786 79 904 110 b 703 364 904 336 789 364 b 606 356 664 364 635 360 "
    },
    "\xd1\x9a": {
        ha: 1086,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 422 l 503 422 l 503 672 l 625 672 l 625 438 b 739 444 653 443 700 444 b 1036 222 876 444 1036 390 b 968 68 1036 153 1010 104 b 685 -7 896 6 782 -7 b 503 1 618 -7 553 -3 l 503 328 l 219 328 l 219 0 l 99 0 l 99 672 m 624 85 b 715 79 647 82 674 79 b 915 218 803 79 915 110 b 715 358 915 331 807 358 b 624 351 681 358 651 356 "
    },
    "\xd1\x9b": {
        ha: 793,
        x_min: 0,
        x_max: 0,
        o: "m 124 868 l 124 986 l 246 986 l 246 868 l 526 868 l 526 781 l 246 781 l 246 564 l 249 564 b 332 646 271 597 300 625 b 461 679 369 668 413 679 b 696 393 601 679 696 581 l 696 0 l 574 0 l 574 379 b 418 579 574 488 533 579 b 254 457 336 579 276 519 b 246 393 249 440 246 417 l 246 0 l 124 0 l 124 781 l 10 781 l 10 868 "
    },
    "\xd1\x9c": {
        ha: 665,
        x_min: 0,
        x_max: 0,
        o: "m 222 672 l 222 381 l 251 381 l 504 672 l 653 672 l 360 368 b 586 164 468 357 533 285 b 658 0 604 119 628 54 l 531 0 b 468 138 513 29 489 82 b 246 296 422 246 360 296 l 222 296 l 222 0 l 101 0 l 101 672 m 524 963 l 354 764 l 267 764 l 389 963 "
    },
    "\xd1\x9e": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 236 946 b 325 840 239 886 268 840 b 419 946 385 840 413 885 l 507 946 b 322 774 500 832 429 774 b 147 946 200 774 153 850 m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 "
    },
    "\xd1\x9f": {
        ha: 747,
        x_min: 0,
        x_max: 0,
        o: "m 219 672 l 219 96 l 528 96 l 528 672 l 650 672 l 650 0 l 432 0 l 424 -218 l 326 -218 l 317 0 l 99 0 l 99 672 "
    },
    "\xd2\x90": {
        ha: 621,
        x_min: 0,
        x_max: 0,
        o: "m 511 936 l 533 1106 l 622 1106 l 607 835 l 226 835 l 226 0 l 106 0 l 106 936 "
    },
    "\xd2\x91": {
        ha: 544,
        x_min: 0,
        x_max: 0,
        o: "m 417 672 l 433 824 l 521 824 l 513 575 l 219 575 l 219 0 l 99 0 l 99 672 "
    },
    "\xef\x9b\x91": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 124 1158 b 208 1071 129 1114 143 1071 b 293 1158 272 1071 288 1113 l 386 1158 b 206 1008 379 1065 324 1008 b 31 1158 92 1008 38 1067 "
    },
    "\xef\x9b\x92": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 293 1007 b 208 1090 288 1046 274 1090 b 124 1007 144 1090 129 1049 l 31 1008 b 211 1154 38 1096 94 1154 b 386 1008 325 1154 381 1094 "
    },
    "\xef\x9b\x94": {
        ha: 418,
        x_min: 0,
        x_max: 0,
        o: "m 118 946 b 207 840 121 886 150 840 b 300 946 267 840 294 885 l 389 946 b 204 774 382 832 311 774 b 29 946 82 774 35 850 "
    },
    "\xef\x9b\x95": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 26 782 b 211 954 33 896 104 954 b 386 782 333 954 381 878 l 297 782 b 208 888 293 842 264 888 b 114 782 149 888 121 842 "
    },
    "\xc6\xa0": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 "
    },
    "\xc6\xaf": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 "
    },
    "\xc6\xa1": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 "
    },
    "\xc6\xb0": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 "
    },
    "\xe2\x82\xab": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 592 136 l 592 54 l 124 54 l 124 136 m 586 922 l 586 828 l 672 828 l 672 760 l 586 760 l 586 347 b 590 224 586 304 588 256 l 494 224 l 490 303 l 488 303 b 314 213 457 250 397 213 b 94 454 189 213 94 310 b 328 711 93 614 199 711 b 478 640 400 711 451 679 l 481 640 l 481 760 l 304 760 l 304 828 l 481 828 l 481 922 m 481 497 b 476 533 481 508 479 524 b 347 629 463 585 413 629 b 204 460 257 629 204 558 b 342 296 204 368 253 296 b 475 394 403 296 460 333 b 481 432 478 406 481 419 "
    },
    "\xee\x86\x84": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 586 922 l 586 828 l 672 828 l 672 760 l 586 760 l 586 347 b 590 224 586 304 588 256 l 494 224 l 490 303 l 488 303 b 314 213 457 250 397 213 b 94 454 189 213 94 310 b 328 711 93 614 199 711 b 478 640 400 711 451 679 l 481 640 l 481 760 l 304 760 l 304 828 l 481 828 l 481 922 m 481 497 b 476 533 481 508 479 524 b 347 629 463 585 413 629 b 204 460 257 629 204 558 b 342 296 204 368 253 296 b 475 394 403 296 460 333 b 481 432 478 406 481 419 "
    },
    "\xe1\xba\xa0": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 421 -111 b 489 -182 460 -111 489 -143 b 419 -254 489 -221 461 -254 b 350 -182 379 -254 350 -221 b 421 -111 350 -143 381 -111 "
    },
    "\xe1\xba\xa2": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 394 1003 b 467 1119 417 1063 467 1074 b 421 1163 467 1146 447 1163 b 351 1114 392 1163 368 1138 l 306 1142 b 443 1235 331 1192 372 1235 b 558 1135 507 1235 558 1192 b 458 985 558 1064 496 1049 "
    },
    "\xe1\xba\xa4": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 476 1144 l 608 986 l 511 986 l 435 1083 l 432 1083 l 354 986 l 261 986 l 389 1144 m 782 1250 l 614 1104 l 542 1104 l 658 1250 "
    },
    "\xe1\xba\xa6": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 593 1224 l 694 1078 l 619 1078 l 467 1224 m 468 1144 l 600 986 l 503 986 l 425 1083 l 422 1083 l 346 986 l 251 986 l 381 1144 "
    },
    "\xe1\xba\xa8": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 472 1144 l 603 986 l 506 986 l 429 1083 l 426 1083 l 350 986 l 256 986 l 385 1144 m 579 1064 b 651 1179 601 1121 651 1135 b 604 1225 651 1206 631 1225 b 536 1174 574 1225 551 1197 l 490 1200 b 624 1289 515 1249 556 1289 b 733 1192 686 1289 733 1247 b 638 1047 733 1125 674 1111 "
    },
    "\xe1\xba\xaa": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 472 1144 l 618 986 l 515 986 l 428 1082 l 425 1082 l 336 986 l 238 986 l 379 1144 m 260 1163 b 354 1294 258 1242 294 1294 b 440 1264 385 1294 408 1282 b 499 1242 463 1253 482 1242 b 538 1299 521 1242 533 1254 l 601 1299 b 507 1165 604 1213 572 1165 b 424 1194 478 1165 451 1179 b 363 1218 396 1210 379 1218 b 326 1163 340 1218 329 1196 "
    },
    "\xe1\xba\xac": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 475 1144 l 619 986 l 518 986 l 429 1082 l 426 1082 l 339 986 l 239 986 l 382 1144 m 419 -251 b 351 -181 381 -251 351 -217 b 421 -111 351 -144 382 -111 b 488 -181 458 -111 488 -144 b 419 -251 488 -217 458 -251 "
    },
    "\xe1\xba\xae": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 324 1114 b 431 1046 333 1081 361 1046 b 539 1114 501 1046 528 1076 l 604 1114 b 429 971 594 1040 538 971 b 257 1114 321 971 267 1038 m 611 1244 l 456 1099 l 379 1099 l 482 1244 "
    },
    "\xe1\xba\xb0": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 385 1244 l 488 1099 l 413 1099 l 257 1244 m 325 1114 b 431 1046 333 1081 363 1046 b 540 1114 503 1046 529 1076 l 604 1114 b 429 971 596 1040 539 971 b 258 1114 321 971 268 1038 "
    },
    "\xe1\xba\xb2": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 390 1097 b 461 1211 413 1154 461 1168 b 415 1256 461 1238 442 1256 b 349 1207 386 1256 364 1231 l 304 1233 b 436 1322 328 1282 368 1322 b 546 1225 499 1322 546 1279 b 450 1081 546 1157 488 1143 m 325 1114 b 432 1046 333 1081 363 1046 b 540 1114 503 1046 529 1076 l 606 1114 b 429 971 596 1040 539 971 b 258 1114 322 971 268 1038 "
    },
    "\xe1\xba\xb4": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 254 1161 b 349 1281 257 1229 289 1281 b 435 1251 379 1281 403 1268 b 493 1229 457 1239 476 1229 b 532 1285 515 1229 528 1240 l 596 1285 b 501 1151 599 1199 567 1151 b 418 1181 472 1151 446 1165 b 357 1204 390 1196 374 1204 b 322 1161 335 1204 326 1182 m 315 1114 b 422 1046 325 1081 354 1046 b 531 1114 493 1046 519 1076 l 596 1114 b 421 971 588 1040 531 971 b 250 1114 313 971 260 1038 "
    },
    "\xe1\xba\xb6": {
        ha: 850,
        x_min: 0,
        x_max: 0,
        o: "m 257 294 l 160 0 l 35 0 l 353 936 l 499 936 l 818 0 l 689 0 l 589 294 m 564 389 l 472 658 b 424 829 451 719 438 775 l 421 829 b 374 660 407 774 392 717 l 282 389 m 325 1156 b 425 1088 332 1124 357 1088 b 526 1156 492 1088 518 1119 l 596 1156 b 424 1008 594 1074 543 1008 b 253 1156 304 1008 254 1072 m 424 -251 b 354 -181 383 -251 354 -217 b 424 -111 354 -144 385 -111 b 490 -181 463 -111 490 -144 b 424 -251 490 -217 463 -251 "
    },
    "\xe1\xba\xb8": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 342 -251 b 272 -181 303 -251 272 -217 b 343 -111 272 -144 303 -111 b 410 -181 381 -111 410 -144 b 342 -251 410 -217 381 -251 "
    },
    "\xe1\xba\xba": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 339 1003 b 411 1119 361 1063 411 1074 b 365 1163 411 1146 392 1163 b 296 1114 336 1163 313 1138 l 250 1142 b 388 1235 275 1192 317 1235 b 503 1135 451 1235 503 1192 b 403 985 503 1064 440 1049 "
    },
    "\xe1\xba\xbc": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 197 993 b 292 1135 194 1078 231 1135 b 374 1107 322 1135 344 1122 b 440 1082 396 1094 418 1082 b 478 1136 461 1082 474 1092 l 542 1136 b 449 1001 543 1049 513 1001 b 364 1028 419 1001 394 1013 b 299 1054 338 1042 318 1054 b 263 993 276 1054 265 1031 "
    },
    "\xe1\xba\xbe": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 407 1144 l 539 986 l 442 986 l 365 1083 l 363 1083 l 285 986 l 192 986 l 319 1144 m 713 1250 l 544 1104 l 472 1104 l 589 1250 "
    },
    "\xe1\xbb\x80": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 528 1224 l 628 1078 l 553 1078 l 401 1224 m 403 1144 l 533 986 l 436 986 l 360 1083 l 357 1083 l 281 986 l 186 986 l 315 1144 "
    },
    "\xe1\xbb\x82": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 401 1144 l 533 986 l 436 986 l 360 1083 l 357 1083 l 281 986 l 186 986 l 314 1144 m 508 1064 b 581 1179 531 1121 581 1135 b 533 1225 581 1206 561 1225 b 465 1174 504 1225 482 1197 l 421 1200 b 553 1289 446 1249 486 1289 b 663 1192 615 1289 663 1247 b 567 1047 663 1125 604 1111 "
    },
    "\xe1\xbb\x84": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 419 1144 l 565 986 l 463 986 l 374 1082 l 371 1082 l 283 986 l 183 986 l 326 1144 m 207 1163 b 301 1294 206 1242 242 1294 b 388 1264 331 1294 354 1282 b 446 1242 410 1253 428 1242 b 483 1299 468 1242 481 1254 l 549 1299 b 454 1165 550 1213 519 1165 b 369 1194 424 1165 399 1179 b 310 1218 342 1210 326 1218 b 274 1163 288 1218 276 1196 "
    },
    "\xe1\xbb\x86": {
        ha: 683,
        x_min: 0,
        x_max: 0,
        o: "m 590 439 l 226 439 l 226 101 l 632 101 l 632 0 l 106 0 l 106 936 l 611 936 l 611 835 l 226 835 l 226 539 l 590 539 m 410 1144 l 554 986 l 453 986 l 364 1082 l 361 1082 l 272 986 l 174 986 l 315 1144 m 363 -251 b 293 -181 322 -251 293 -217 b 363 -111 293 -144 324 -111 b 429 -181 400 -111 429 -144 b 363 -251 429 -217 400 -251 "
    },
    "\xe1\xbb\x88": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 135 1003 b 208 1119 157 1063 208 1074 b 161 1163 208 1146 189 1163 b 93 1114 132 1163 108 1138 l 46 1142 b 183 1235 72 1192 113 1235 b 299 1135 247 1235 299 1192 b 200 985 299 1064 238 1049 "
    },
    "\xe1\xbb\x8a": {
        ha: 332,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 0 l 106 0 l 106 936 m 167 -251 b 97 -181 128 -251 97 -217 b 168 -111 97 -144 128 -111 b 235 -181 206 -111 235 -144 b 167 -251 235 -217 206 -251 "
    },
    "\xe1\xbb\x8c": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 479 -251 b 410 -181 439 -251 410 -217 b 479 -111 410 -144 440 -111 b 546 -181 518 -111 546 -144 b 479 -251 546 -217 518 -251 "
    },
    "\xe1\xbb\x8e": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 446 1003 b 519 1119 469 1063 519 1074 b 472 1163 519 1146 500 1163 b 404 1114 444 1163 419 1138 l 357 1142 b 494 1235 383 1192 425 1235 b 610 1135 560 1235 610 1192 b 511 985 610 1064 549 1049 "
    },
    "\xe1\xbb\x90": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 533 1144 l 665 986 l 568 986 l 490 1083 l 488 1083 l 411 986 l 318 986 l 446 1144 m 839 1250 l 671 1104 l 599 1104 l 715 1250 "
    },
    "\xe1\xbb\x92": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 653 1224 l 753 1078 l 679 1078 l 526 1224 m 528 1144 l 658 986 l 563 986 l 485 1083 l 482 1083 l 406 986 l 311 986 l 440 1144 "
    },
    "\xe1\xbb\x94": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 529 1144 l 660 986 l 563 986 l 486 1083 l 483 1083 l 407 986 l 313 986 l 442 1144 m 636 1064 b 708 1179 658 1121 708 1135 b 661 1225 708 1206 688 1225 b 593 1174 632 1225 608 1197 l 549 1200 b 681 1289 572 1249 613 1289 b 790 1192 743 1289 790 1247 b 694 1047 790 1125 731 1111 "
    },
    "\xe1\xbb\x96": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 525 1144 l 669 986 l 568 986 l 479 1082 l 476 1082 l 388 986 l 289 986 l 432 1144 m 311 1163 b 406 1294 310 1242 347 1294 b 492 1264 436 1294 460 1282 b 551 1242 514 1253 533 1242 b 589 1299 572 1242 586 1254 l 654 1299 b 560 1165 656 1213 625 1165 b 475 1194 529 1165 504 1179 b 414 1218 447 1210 432 1218 b 379 1163 393 1218 381 1196 "
    },
    "\xe1\xbb\x98": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 485 951 b 906 478 740 951 906 756 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 m 479 853 b 179 463 279 853 179 668 b 478 83 179 263 288 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 m 524 1144 l 668 986 l 567 986 l 478 1082 l 475 1082 l 386 986 l 288 986 l 431 1144 m 479 -251 b 410 -181 439 -251 410 -217 b 479 -111 410 -144 440 -111 b 546 -181 518 -111 546 -144 b 479 -251 546 -217 518 -251 "
    },
    "\xe1\xbb\x9a": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 m 693 1149 l 515 986 l 417 986 l 544 1149 "
    },
    "\xe1\xbb\x9c": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 m 435 1149 l 563 988 l 464 988 l 286 1149 "
    },
    "\xe1\xbb\x9e": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 m 446 1003 b 519 1119 469 1063 519 1074 b 472 1163 519 1146 500 1163 b 404 1114 444 1163 419 1138 l 357 1142 b 494 1235 383 1192 425 1235 b 610 1135 560 1235 610 1192 b 511 985 610 1064 549 1049 "
    },
    "\xe1\xbb\xa0": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 m 315 993 b 410 1135 313 1078 350 1135 b 492 1107 440 1135 463 1122 b 558 1082 514 1094 538 1082 b 596 1136 581 1082 593 1092 l 661 1136 b 567 1001 663 1049 631 1001 b 482 1028 538 1001 513 1013 b 417 1054 456 1042 438 1054 b 381 993 394 1054 385 1031 "
    },
    "\xe1\xbb\xa2": {
        ha: 957,
        x_min: 0,
        x_max: 0,
        o: "m 478 83 b 778 472 669 83 778 260 b 479 853 778 658 681 853 b 179 463 278 853 178 665 b 478 83 178 265 286 83 m 918 1046 b 943 932 932 1015 943 979 b 797 808 943 856 897 799 b 906 478 860 736 906 624 b 471 -15 906 156 710 -15 b 50 460 224 -15 50 176 b 485 951 50 757 235 951 b 629 928 540 951 593 940 b 783 878 672 914 739 878 b 846 939 829 878 846 899 b 824 1028 846 972 836 1003 m 479 -251 b 410 -181 439 -251 410 -217 b 479 -111 410 -144 440 -111 b 546 -181 518 -111 546 -144 b 479 -251 546 -217 518 -251 "
    },
    "\xe1\xbb\xa4": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 450 -251 b 381 -181 411 -251 381 -217 b 451 -111 381 -144 411 -111 b 518 -181 489 -111 518 -144 b 450 -251 518 -217 489 -251 "
    },
    "\xe1\xbb\xa6": {
        ha: 899,
        x_min: 0,
        x_max: 0,
        o: "m 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 794 936 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 m 418 1003 b 490 1119 440 1063 490 1074 b 444 1163 490 1146 472 1163 b 375 1114 415 1163 392 1138 l 329 1142 b 467 1235 354 1192 396 1235 b 582 1135 531 1235 582 1192 b 482 985 582 1064 519 1049 "
    },
    "\xe1\xbb\xa8": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 m 657 1149 l 481 986 l 381 986 l 510 1149 "
    },
    "\xe1\xbb\xaa": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 m 403 1149 l 531 988 l 432 988 l 254 1149 "
    },
    "\xe1\xbb\xac": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 m 439 1003 b 511 1119 461 1063 511 1074 b 465 1163 511 1146 493 1163 b 397 1114 436 1163 413 1138 l 350 1142 b 488 1235 375 1192 417 1235 b 603 1135 551 1235 603 1192 b 504 985 603 1064 542 1049 "
    },
    "\xe1\xbb\xae": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 m 297 993 b 392 1135 296 1078 332 1135 b 474 1107 422 1135 444 1122 b 540 1082 497 1094 519 1082 b 578 1136 563 1082 575 1092 l 643 1136 b 549 1001 644 1049 614 1001 b 464 1028 519 1001 494 1013 b 399 1054 438 1042 419 1054 b 363 993 376 1054 367 1031 "
    },
    "\xe1\xbb\xb0": {
        ha: 940,
        x_min: 0,
        x_max: 0,
        o: "m 917 1086 b 940 982 931 1056 940 1021 b 815 864 940 914 899 867 l 794 863 l 794 390 b 440 -15 794 103 643 -15 b 104 385 249 -15 104 94 l 104 936 l 226 936 l 226 382 b 444 83 226 172 319 83 b 672 382 583 83 672 175 l 672 936 l 782 936 b 846 989 829 936 846 953 b 824 1069 846 1015 838 1044 m 471 -111 b 539 -182 508 -111 539 -143 b 468 -254 539 -221 510 -254 b 399 -182 429 -254 399 -221 b 471 -111 399 -143 431 -111 "
    },
    "\xe1\xbb\xb4": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 376 -251 b 307 -181 338 -251 307 -217 b 378 -111 307 -144 338 -111 b 444 -181 415 -111 444 -144 b 376 -251 444 -217 415 -251 "
    },
    "\xe1\xbb\xb6": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 344 1003 b 417 1119 367 1063 417 1074 b 371 1163 417 1146 399 1163 b 301 1114 342 1163 318 1138 l 256 1142 b 393 1235 281 1192 322 1235 b 508 1135 457 1235 508 1192 b 408 985 508 1064 446 1049 "
    },
    "\xe1\xbb\xb8": {
        ha: 751,
        x_min: 0,
        x_max: 0,
        o: "m 314 0 l 314 397 l 18 936 l 156 936 l 288 678 b 381 485 324 607 351 550 l 383 485 b 478 678 410 546 442 607 l 613 936 l 750 936 l 436 399 l 436 0 m 203 993 b 297 1135 201 1078 238 1135 b 381 1107 329 1135 351 1122 b 447 1082 403 1094 425 1082 b 485 1136 468 1082 481 1092 l 549 1136 b 456 1001 550 1049 519 1001 b 371 1028 425 1001 400 1013 b 304 1054 344 1042 325 1054 b 268 993 283 1054 272 1031 "
    },
    "\xe1\xba\xa1": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 335 -111 b 403 -182 374 -111 403 -143 b 333 -254 403 -221 375 -254 b 264 -182 293 -254 264 -221 b 335 -111 264 -143 294 -111 "
    },
    "\xe1\xba\xa3": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 289 753 b 368 883 306 814 368 832 b 321 931 368 913 347 931 b 254 882 292 931 269 907 l 207 910 b 342 1003 231 960 274 1003 b 460 899 408 1003 460 960 b 354 736 460 821 386 799 "
    },
    "\xe1\xba\xa5": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 369 963 l 489 764 l 396 764 l 326 894 l 322 894 l 251 764 l 163 764 l 279 963 m 660 1076 l 521 893 l 450 893 l 546 1076 "
    },
    "\xe1\xba\xa7": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 489 1076 l 578 893 l 507 893 l 378 1076 m 368 963 l 488 764 l 394 764 l 324 894 l 321 894 l 250 764 l 161 764 l 278 963 "
    },
    "\xe1\xba\xa9": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 365 963 l 485 764 l 392 764 l 321 894 l 318 894 l 247 764 l 158 764 l 275 963 m 464 897 b 535 1011 486 956 535 968 b 489 1057 535 1038 515 1057 b 422 1007 460 1057 438 1031 l 378 1035 b 510 1124 401 1082 442 1124 b 621 1025 572 1124 621 1079 b 525 882 621 957 561 944 "
    },
    "\xe1\xba\xab": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 378 928 l 506 764 l 410 764 l 335 865 l 332 865 l 258 764 l 165 764 l 289 928 m 167 944 b 261 1076 165 1024 203 1076 b 347 1046 292 1076 315 1063 b 407 1024 369 1033 389 1024 b 444 1079 428 1024 442 1035 l 510 1079 b 415 946 511 993 481 946 b 331 975 385 946 360 960 b 271 999 303 990 288 999 b 235 944 249 999 236 976 "
    },
    "\xe1\xba\xad": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 376 963 l 508 764 l 415 764 l 335 896 l 332 896 l 251 764 l 161 764 l 292 963 m 335 -111 b 403 -182 374 -111 403 -143 b 333 -254 403 -221 375 -254 b 264 -182 293 -254 264 -221 b 335 -111 264 -143 294 -111 "
    },
    "\xe1\xba\xaf": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 506 1074 l 351 892 l 278 892 l 389 1074 m 219 913 b 329 817 228 858 268 817 b 440 913 400 817 436 865 l 508 913 b 329 740 507 808 435 740 b 150 913 207 740 151 825 "
    },
    "\xe1\xba\xb1": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 274 1074 l 385 892 l 310 892 l 157 1074 m 219 913 b 329 817 228 858 268 817 b 440 913 400 817 436 865 l 510 913 b 329 740 507 808 435 740 b 150 913 207 740 151 825 "
    },
    "\xe1\xba\xb3": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 285 896 b 356 1010 307 954 356 967 b 308 1056 356 1036 335 1056 b 243 1006 281 1056 258 1029 l 197 1033 b 331 1122 222 1081 263 1122 b 442 1024 393 1122 442 1078 b 346 881 442 956 382 943 m 217 913 b 326 817 225 858 267 817 b 438 913 399 817 433 865 l 507 913 b 326 740 504 808 432 740 b 147 913 204 740 149 825 "
    },
    "\xe1\xba\xb5": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 164 969 b 258 1089 167 1038 200 1089 b 344 1058 289 1089 313 1075 b 404 1036 367 1047 386 1036 b 442 1093 425 1036 439 1049 l 507 1093 b 413 960 508 1006 478 960 b 328 989 382 960 357 972 b 267 1011 300 1003 285 1011 b 233 969 246 1011 236 989 m 226 913 b 333 815 235 858 274 815 b 442 913 403 815 438 865 l 510 913 b 333 740 508 808 439 740 b 157 913 211 740 158 825 "
    },
    "\xe1\xba\xb7": {
        ha: 669,
        x_min: 0,
        x_max: 0,
        o: "m 474 0 l 464 85 l 460 85 b 254 -15 422 32 350 -15 b 49 178 118 -15 49 81 b 453 428 49 340 193 429 l 453 442 b 300 597 453 497 438 597 b 125 547 238 597 172 578 l 97 628 b 318 688 153 664 233 688 b 574 413 524 688 574 547 l 574 161 b 585 0 574 103 576 46 m 456 343 b 171 192 322 346 171 322 b 286 75 171 113 224 75 b 449 188 374 75 429 131 b 456 226 453 200 456 214 m 235 947 b 335 851 243 893 278 851 b 435 947 401 851 431 901 l 507 947 b 335 775 507 844 439 775 b 163 947 213 775 163 861 m 335 -111 b 403 -182 374 -111 403 -143 b 333 -254 403 -221 375 -254 b 264 -182 293 -254 264 -221 b 335 -111 264 -143 294 -111 "
    },
    "\xe1\xba\xb9": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 349 -111 b 417 -182 386 -111 417 -143 b 346 -254 417 -221 389 -254 b 276 -182 307 -254 276 -221 b 349 -111 276 -143 308 -111 "
    },
    "\xe1\xba\xbb": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 301 753 b 381 883 318 814 381 832 b 333 931 381 913 360 931 b 267 882 304 931 282 907 l 219 910 b 354 1003 243 960 286 1003 b 472 899 421 1003 472 960 b 367 736 472 821 399 799 "
    },
    "\xe1\xba\xbd": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 176 788 b 271 932 174 878 211 932 b 357 901 301 932 325 919 b 415 878 379 889 399 878 b 454 938 438 878 451 890 l 519 938 b 424 797 521 844 489 797 b 339 825 394 797 368 810 b 279 850 311 842 296 850 b 243 788 257 850 246 826 "
    },
    "\xe1\xba\xbf": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 414 963 l 535 764 l 442 764 l 371 894 l 368 894 l 297 764 l 208 764 l 325 963 m 704 1076 l 567 893 l 496 893 l 590 1076 "
    },
    "\xe1\xbb\x81": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 532 1076 l 619 893 l 549 893 l 421 1076 m 410 963 l 529 764 l 438 764 l 367 894 l 364 894 l 293 764 l 204 764 l 321 963 "
    },
    "\xe1\xbb\x83": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 403 963 l 522 764 l 431 764 l 360 894 l 357 894 l 286 764 l 197 764 l 314 963 m 503 897 b 574 1011 525 956 574 968 b 526 1057 574 1038 553 1057 b 461 1007 499 1057 476 1031 l 415 1035 b 549 1124 440 1082 481 1124 b 658 1025 611 1124 658 1079 b 564 882 658 957 600 944 "
    },
    "\xe1\xbb\x85": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 406 928 l 532 764 l 436 764 l 363 865 l 360 865 l 285 764 l 192 764 l 317 928 m 194 944 b 289 1076 193 1024 229 1076 b 375 1046 319 1076 343 1063 b 433 1024 397 1033 417 1024 b 472 1079 456 1024 468 1035 l 536 1079 b 442 946 539 993 507 946 b 358 975 413 946 386 960 b 297 999 331 990 314 999 b 261 944 275 999 264 976 "
    },
    "\xe1\xbb\x87": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 169 314 b 400 81 172 149 278 81 b 586 115 488 81 540 96 l 607 28 b 383 -14 564 8 490 -14 b 53 325 176 -14 53 122 b 368 688 53 528 172 688 b 646 371 588 688 646 494 b 642 314 646 346 643 326 m 528 401 b 358 600 529 479 496 600 b 171 401 235 600 181 486 m 389 963 l 522 764 l 428 764 l 347 896 l 344 896 l 264 764 l 174 764 l 304 963 m 349 -111 b 417 -182 386 -111 417 -143 b 346 -254 417 -221 389 -254 b 276 -182 307 -254 276 -221 b 349 -111 276 -143 308 -111 "
    },
    "\xe1\xbb\x89": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 117 753 b 196 883 133 814 196 832 b 149 931 196 913 175 931 b 82 882 119 931 97 907 l 35 910 b 169 1003 58 960 101 1003 b 288 899 236 1003 288 960 b 182 736 288 821 214 799 "
    },
    "\xe1\xbb\x8b": {
        ha: 325,
        x_min: 0,
        x_max: 0,
        o: "m 101 0 l 101 672 l 224 672 l 224 0 m 163 938 b 238 861 208 938 238 904 b 160 786 239 819 208 786 b 86 861 117 786 86 819 b 163 938 86 904 118 938 m 163 -111 b 231 -182 201 -111 231 -143 b 161 -254 231 -221 203 -254 b 92 -182 121 -254 92 -221 b 163 -111 92 -143 122 -111 "
    },
    "\xe1\xbb\x8d": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 382 -111 b 450 -182 419 -111 450 -143 b 379 -254 450 -221 421 -254 b 310 -182 340 -254 310 -221 b 382 -111 310 -143 342 -111 "
    },
    "\xe1\xbb\x8f": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 335 753 b 414 883 351 814 414 832 b 367 931 414 913 393 931 b 300 882 338 931 315 907 l 253 910 b 388 1003 276 960 318 1003 b 506 899 454 1003 506 960 b 400 736 506 821 432 799 "
    },
    "\xe1\xbb\x91": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 432 963 l 551 764 l 458 764 l 388 894 l 385 894 l 314 764 l 225 764 l 342 963 m 721 1076 l 583 893 l 513 893 l 607 1076 "
    },
    "\xe1\xbb\x93": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 553 1076 l 642 893 l 571 893 l 442 1076 m 432 963 l 551 764 l 458 764 l 389 894 l 385 894 l 315 764 l 225 764 l 343 963 "
    },
    "\xe1\xbb\x95": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 425 963 l 544 764 l 451 764 l 381 894 l 378 894 l 307 764 l 218 764 l 335 963 m 524 897 b 594 1011 546 956 594 968 b 547 1057 594 1038 574 1057 b 482 1007 519 1057 497 1031 l 438 1035 b 569 1124 461 1082 501 1124 b 681 1025 632 1124 681 1079 b 585 882 681 957 621 944 "
    },
    "\xe1\xbb\x97": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 424 928 l 551 764 l 456 764 l 381 865 l 378 865 l 304 764 l 211 764 l 335 928 m 213 944 b 307 1076 211 1024 249 1076 b 393 1046 338 1076 361 1063 b 453 1024 415 1033 435 1024 b 490 1079 474 1024 488 1035 l 556 1079 b 461 946 557 993 526 946 b 376 975 431 946 406 960 b 315 999 349 990 333 999 b 281 944 294 999 282 976 "
    },
    "\xe1\xbb\x99": {
        ha: 763,
        x_min: 0,
        x_max: 0,
        o: "m 386 688 b 710 342 579 688 710 547 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 422 963 l 554 764 l 461 764 l 381 896 l 378 896 l 297 764 l 207 764 l 338 963 m 382 -111 b 450 -182 419 -111 450 -143 b 379 -254 450 -221 421 -254 b 310 -182 340 -254 310 -221 b 382 -111 310 -143 342 -111 "
    },
    "\xe1\xbb\x9b": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 m 578 963 l 407 764 l 321 764 l 443 963 "
    },
    "\xe1\xbb\x9d": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 m 338 963 l 460 764 l 374 764 l 204 963 "
    },
    "\xe1\xbb\x9f": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 m 335 753 b 414 883 351 814 414 832 b 367 931 414 913 393 931 b 300 882 336 931 315 907 l 253 910 b 388 1003 276 960 318 1003 b 506 899 454 1003 506 960 b 400 736 506 821 432 799 "
    },
    "\xe1\xbb\xa1": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 m 210 788 b 304 932 207 878 244 932 b 390 901 335 932 358 919 b 449 878 413 889 432 878 b 488 938 471 878 483 890 l 551 938 b 457 797 554 844 522 797 b 372 825 428 797 401 810 b 313 850 344 842 329 850 b 276 788 290 850 279 826 "
    },
    "\xe1\xbb\xa3": {
        ha: 768,
        x_min: 0,
        x_max: 0,
        o: "m 383 596 b 176 335 239 596 176 463 b 381 76 176 188 261 76 b 585 338 497 76 585 186 b 383 596 585 451 528 596 m 746 786 b 769 685 760 757 769 724 b 640 564 769 610 725 560 b 710 342 685 508 710 432 b 375 -15 710 93 538 -15 b 53 331 193 -15 53 118 b 386 688 53 556 200 688 b 501 668 428 688 464 681 b 619 632 535 658 576 632 b 675 688 656 632 675 651 b 653 769 675 718 665 746 m 383 -111 b 451 -182 421 -111 451 -143 b 381 -254 451 -221 424 -254 b 311 -182 342 -254 311 -221 b 383 -111 311 -143 343 -111 "
    },
    "\xe1\xbb\xa5": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 382 -111 b 450 -182 421 -111 450 -143 b 381 -254 450 -221 422 -254 b 311 -182 340 -254 311 -221 b 382 -111 311 -143 343 -111 "
    },
    "\xe1\xbb\xa7": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 664 672 m 336 753 b 415 883 353 814 415 832 b 368 931 415 913 394 931 b 301 882 339 931 317 907 l 254 910 b 390 1003 278 960 321 1003 b 507 899 456 1003 507 960 b 401 736 507 821 433 799 "
    },
    "\xe1\xbb\xa9": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 m 594 963 l 425 764 l 338 764 l 460 963 "
    },
    "\xe1\xbb\xab": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 m 336 963 l 458 764 l 372 764 l 203 963 "
    },
    "\xe1\xbb\xad": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 m 347 753 b 426 883 364 814 426 832 b 379 931 426 913 406 931 b 313 882 350 931 328 907 l 265 910 b 401 1003 289 960 332 1003 b 518 899 467 1003 518 960 b 413 736 518 821 444 799 "
    },
    "\xe1\xbb\xaf": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 m 213 788 b 307 932 210 878 249 932 b 394 901 338 932 361 919 b 453 878 417 889 435 878 b 490 938 474 878 488 890 l 556 938 b 461 797 557 844 526 797 b 375 825 431 797 404 810 b 315 850 347 842 333 850 b 279 788 294 850 282 826 "
    },
    "\xe1\xbb\xb1": {
        ha: 765,
        x_min: 0,
        x_max: 0,
        o: "m 772 822 b 797 722 788 794 797 760 b 679 606 797 653 747 608 l 664 604 l 664 183 b 669 0 664 114 665 53 l 561 0 l 554 110 l 551 110 b 329 -15 519 56 449 -15 b 97 279 224 -15 97 43 l 97 672 l 219 672 l 219 300 b 369 86 219 172 258 86 b 531 197 451 86 508 143 b 542 260 538 215 542 238 l 542 672 l 638 672 b 703 726 686 672 703 692 b 679 807 703 753 693 782 m 379 -111 b 447 -182 418 -111 447 -143 b 378 -254 447 -221 419 -254 b 308 -182 338 -254 308 -221 b 379 -111 308 -143 339 -111 "
    },
    "\xe1\xbb\xb5": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 453 -111 b 521 -182 492 -111 521 -143 b 451 -254 521 -221 493 -254 b 382 -182 411 -254 382 -221 b 453 -111 382 -143 414 -111 "
    },
    "\xe1\xbb\xb7": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 293 753 b 372 883 310 814 372 832 b 326 931 372 913 351 931 b 258 882 296 931 274 907 l 211 910 b 347 1003 236 960 278 1003 b 464 899 413 1003 464 960 b 360 736 464 821 392 799 "
    },
    "\xe1\xbb\xb9": {
        ha: 654,
        x_min: 0,
        x_max: 0,
        o: "m 146 672 l 293 275 b 336 138 308 231 325 178 l 339 138 b 382 278 351 178 365 229 l 515 672 l 644 672 l 461 193 b 231 -228 374 -37 314 -156 b 81 -307 171 -281 111 -301 l 50 -204 b 157 -144 81 -194 121 -175 b 260 -8 190 -118 232 -71 b 269 21 265 4 269 14 b 261 53 269 28 267 38 l 13 672 m 164 788 b 258 932 161 878 199 932 b 344 901 289 932 313 919 b 403 878 367 889 386 878 b 442 938 425 878 439 890 l 507 938 b 411 797 508 844 476 797 b 326 825 382 797 356 810 b 267 850 299 842 283 850 b 231 788 244 850 233 826 "
    },
    "\xee\x8c\x80": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 385 1074 l 231 892 l 157 892 l 267 1074 m 99 913 b 208 817 107 858 147 817 b 318 913 279 817 314 865 l 388 913 b 208 740 386 808 313 740 b 29 913 86 740 31 825 "
    },
    "\xee\x8c\x81": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 147 1074 l 258 892 l 183 892 l 31 1074 m 93 913 b 203 817 101 858 142 817 b 314 913 274 817 310 865 l 382 913 b 203 740 381 808 308 740 b 24 913 81 740 25 825 "
    },
    "\xee\x8c\x82": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 165 896 b 236 1010 188 954 236 967 b 189 1056 236 1036 217 1056 b 124 1006 161 1056 139 1029 l 79 1033 b 211 1122 103 1081 143 1122 b 322 1024 274 1122 322 1078 b 226 881 322 956 263 943 m 99 913 b 208 817 107 858 147 817 b 318 913 279 817 314 865 l 388 913 b 208 740 386 808 313 740 b 29 913 86 740 31 825 "
    },
    "\xee\x8c\x83": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 39 969 b 133 1089 42 1038 74 1089 b 219 1058 164 1089 188 1075 b 278 1036 242 1047 261 1036 b 317 1093 300 1036 314 1049 l 382 1093 b 286 960 383 1006 351 960 b 203 989 257 960 231 972 b 142 1011 175 1003 158 1011 b 108 969 121 1011 111 989 m 100 913 b 208 815 108 858 149 815 b 317 913 278 815 313 865 l 385 913 b 208 740 383 808 313 740 b 32 913 86 740 33 825 "
    },
    "\xee\x8c\x84": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 253 963 l 372 764 l 279 764 l 208 894 l 206 894 l 135 764 l 46 764 l 163 963 m 542 1076 l 404 893 l 333 893 l 429 1076 "
    },
    "\xee\x8c\x85": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 374 1076 l 463 893 l 392 893 l 263 1076 m 253 963 l 372 764 l 279 764 l 208 894 l 206 894 l 135 764 l 46 764 l 163 963 "
    },
    "\xee\x8c\x86": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 253 963 l 372 764 l 279 764 l 208 894 l 206 894 l 135 764 l 46 764 l 163 963 m 351 897 b 422 1011 374 956 422 968 b 376 1057 422 1038 403 1057 b 310 1007 347 1057 325 1031 l 265 1035 b 397 1124 289 1082 329 1124 b 508 1025 460 1124 508 1079 b 413 882 508 957 449 944 "
    },
    "\xee\x8c\x87": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 251 928 l 379 764 l 283 764 l 208 865 l 206 865 l 132 764 l 39 764 l 163 928 m 40 944 b 135 1076 39 1024 76 1076 b 221 1046 165 1076 189 1063 b 281 1024 243 1033 263 1024 b 318 1079 301 1024 315 1035 l 383 1079 b 289 946 385 993 354 946 b 204 975 258 946 233 960 b 143 999 176 990 161 999 b 108 944 122 999 110 976 "
    },
    "\xee\x8c\x88": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 210 -111 b 278 -182 247 -111 278 -143 b 207 -254 278 -221 249 -254 b 138 -182 168 -254 138 -221 b 210 -111 138 -143 169 -111 "
    },
    "\xee\x8c\x89": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 158 753 b 236 883 175 814 236 832 b 190 931 236 913 215 931 b 122 882 160 931 139 907 l 75 910 b 211 1003 100 960 142 1003 b 328 899 276 1003 328 960 b 224 736 328 821 256 799 "
    },
    "\xee\x8c\x90": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 240 672 l 261 672 b 326 726 310 672 326 692 b 303 807 326 753 318 782 l 396 822 b 421 722 411 794 421 760 b 283 601 421 653 369 601 l 240 601 "
    },
    "\xee\x8c\x91": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 107 1114 b 213 1046 115 1081 144 1046 b 322 1114 285 1046 311 1076 l 386 1114 b 211 971 378 1040 321 971 b 40 1114 103 971 50 1038 m 393 1244 l 238 1099 l 163 1099 l 265 1244 "
    },
    "\xee\x8c\x92": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 168 1244 l 271 1099 l 196 1099 l 40 1244 m 108 1114 b 214 1046 117 1081 146 1046 b 324 1114 285 1046 313 1076 l 388 1114 b 213 971 379 1040 322 971 b 42 1114 104 971 51 1038 "
    },
    "\xee\x8c\x93": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 174 1097 b 244 1211 196 1154 244 1168 b 199 1256 244 1238 225 1256 b 132 1207 169 1256 147 1231 l 88 1233 b 219 1322 111 1282 151 1322 b 329 1225 282 1322 329 1279 b 233 1081 329 1157 271 1143 m 108 1114 b 215 1046 117 1081 146 1046 b 324 1114 286 1046 313 1076 l 389 1114 b 213 971 379 1040 322 971 b 42 1114 106 971 51 1038 "
    },
    "\xee\x8c\x94": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 40 1161 b 135 1281 43 1229 75 1281 b 221 1251 165 1281 188 1268 b 279 1229 243 1239 263 1229 b 318 1285 301 1229 314 1240 l 382 1285 b 288 1151 383 1199 353 1151 b 203 1181 258 1151 232 1165 b 143 1204 175 1196 160 1204 b 108 1161 121 1204 113 1182 m 101 1114 b 208 1046 111 1081 140 1046 b 317 1114 279 1046 306 1076 l 382 1114 b 207 971 374 1040 317 971 b 36 1114 99 971 44 1038 "
    },
    "\xee\x8c\x95": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 256 1144 l 388 986 l 290 986 l 214 1083 l 211 1083 l 133 986 l 40 986 l 168 1144 m 561 1250 l 393 1104 l 321 1104 l 438 1250 "
    },
    "\xee\x8c\x96": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 376 1224 l 476 1078 l 401 1078 l 250 1224 m 251 1144 l 382 986 l 285 986 l 208 1083 l 206 1083 l 129 986 l 35 986 l 163 1144 "
    },
    "\xee\x8c\x97": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 254 1144 l 386 986 l 289 986 l 211 1083 l 208 1083 l 132 986 l 38 986 l 167 1144 m 361 1064 b 433 1179 383 1121 433 1135 b 386 1225 433 1206 413 1225 b 318 1174 357 1225 333 1197 l 274 1200 b 406 1289 297 1249 338 1289 b 515 1192 468 1289 515 1247 b 419 1047 515 1125 456 1111 "
    },
    "\xee\x8c\x98": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 256 1144 l 400 986 l 299 986 l 210 1082 l 207 1082 l 119 986 l 19 986 l 163 1144 m 42 1163 b 136 1294 40 1242 78 1294 b 222 1264 167 1294 190 1282 b 282 1242 244 1253 264 1242 b 319 1299 303 1242 317 1254 l 385 1299 b 290 1165 386 1213 356 1165 b 206 1194 260 1165 235 1179 b 144 1218 178 1210 163 1218 b 110 1163 124 1218 111 1196 "
    },
    "\xee\x8c\x99": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 210 -251 b 140 -181 171 -251 140 -217 b 211 -111 140 -144 171 -111 b 278 -181 249 -111 278 -144 b 210 -251 278 -217 249 -251 "
    },
    "\xee\x8c\xa0": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 169 1003 b 242 1119 192 1063 242 1074 b 196 1163 242 1146 224 1163 b 128 1114 167 1163 143 1138 l 81 1142 b 218 1235 106 1192 147 1235 b 333 1135 282 1235 333 1192 b 235 985 333 1064 271 1049 "
    },
    "\xee\x8c\xa1": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 240 936 l 261 936 b 326 989 310 936 326 953 b 303 1069 326 1015 318 1044 l 397 1086 b 421 982 411 1056 421 1022 b 282 863 421 911 375 863 l 240 863 "
    },
    "\xef\x9b\x81": {
        ha: 685,
        x_min: 0,
        x_max: 0,
        o: "m 89 147 b 306 86 143 114 222 86 b 501 246 429 86 501 151 b 325 432 501 333 451 383 b 78 697 172 486 78 565 b 381 951 78 843 199 951 b 588 906 476 951 546 929 l 554 807 b 376 851 524 824 461 851 b 200 711 249 851 200 775 b 386 531 200 624 257 581 b 625 256 544 469 625 393 b 382 -7 625 132 546 22 l 343 -69 b 440 -167 396 -76 440 -115 b 297 -278 440 -246 372 -278 b 200 -254 260 -278 224 -268 l 221 -194 b 297 -215 243 -207 268 -215 b 356 -171 328 -215 356 -201 b 247 -112 356 -136 313 -119 l 303 -14 b 293 -14 300 -14 296 -14 b 58 46 213 -14 111 11 "
    },
    "\xef\x9b\x82": {
        ha: 550,
        x_min: 0,
        x_max: 0,
        o: "m 85 125 b 246 76 121 101 185 76 b 376 176 335 76 376 121 b 251 300 376 235 342 267 b 74 490 131 343 74 410 b 306 688 74 599 161 688 b 471 646 374 688 433 668 l 440 557 b 303 596 414 574 365 596 b 190 504 231 596 190 554 b 318 390 190 449 231 424 b 494 188 435 346 494 288 b 315 -8 494 89 431 14 l 276 -69 b 374 -165 328 -76 374 -112 b 229 -278 374 -247 307 -278 b 135 -254 196 -278 158 -268 l 156 -194 b 231 -215 178 -208 206 -215 b 290 -171 261 -215 290 -204 b 182 -112 289 -135 247 -118 l 238 -14 l 232 -14 b 54 32 178 -14 108 1 "
    },
    "\xc5\xa2": {
        ha: 690,
        x_min: 0,
        x_max: 0,
        o: "m 383 0 l 342 -69 b 439 -174 394 -79 439 -117 b 296 -286 439 -254 368 -286 b 197 -262 261 -286 222 -276 l 218 -200 b 294 -218 239 -211 264 -218 b 353 -176 326 -218 353 -206 b 244 -117 353 -139 310 -124 l 308 0 l 283 0 l 283 833 l -1 833 l -1 936 l 692 936 l 692 833 l 406 833 l 406 0 "
    },
    "\xc5\xa3": {
        ha: 460,
        x_min: 0,
        x_max: 0,
        o: "m 249 579 l 249 217 b 340 86 249 133 272 86 b 411 94 372 86 396 90 l 417 3 b 308 -14 393 -7 356 -14 b 307 -14 308 -14 308 -14 l 272 -69 b 369 -165 324 -76 369 -112 b 225 -278 369 -247 301 -278 b 131 -254 190 -278 154 -268 l 151 -194 b 226 -215 174 -208 201 -215 b 286 -171 257 -215 286 -204 b 178 -112 285 -135 243 -118 l 239 -3 b 176 38 214 6 193 19 b 129 213 142 74 129 133 l 129 579 l 25 579 l 25 672 l 129 672 l 129 833 l 249 865 l 249 672 l 424 672 l 424 579 "
    },
    "\xc2\xad": {
        ha: 404,
        x_min: 0,
        x_max: 0,
        o: "m 385 421 l 385 331 l 42 331 l 42 421 "
    },
    "\xc2\xa0": {
        ha: 294,
        x_min: 0,
        x_max: 0,
        o: ""
    },
    "\xcb\x89": {
        ha: 417,
        x_min: 0,
        x_max: 0,
        o: "m 365 893 l 365 814 l 53 814 l 53 893 "
    },
    "\xe2\x88\x95": {
        ha: 168,
        x_min: 0,
        x_max: 0,
        o: "m -218 -15 l 308 918 l 388 918 l -140 -15 "
    },
    "\xe2\x88\x99": {
        ha: 288,
        x_min: 0,
        x_max: 0,
        o: "m 143 278 b 61 365 94 278 60 315 b 144 453 61 415 96 453 b 226 365 193 453 225 417 b 143 278 226 315 193 278 "
    },
    "\xd3\x99": {
        ha: 696,
        x_min: 0,
        x_max: 0,
        o: "m 88 642 b 313 688 131 663 206 688 b 642 347 518 688 642 549 b 326 -14 642 144 522 -14 b 50 300 107 -14 50 176 b 54 357 50 325 51 344 l 525 357 b 297 592 522 524 422 592 b 108 556 210 592 157 576 m 167 269 b 336 74 165 193 200 74 b 524 269 463 74 514 185 "
    },
    "\xe2\x80\x90": {
        ha: 426,
        x_min: 0,
        x_max: 0,
        o: "m 385 421 l 385 331 l 42 331 l 42 421 "
    },
    "\xe2\x84\x93": {
        ha: 700,
        x_min: 0,
        x_max: 0,
        o: "m 269 411 b 451 779 383 528 451 653 b 367 914 451 875 415 914 b 269 715 315 914 269 854 m 660 154 b 382 -14 594 39 501 -14 b 156 211 239 -14 169 82 b 156 222 156 215 156 219 b 79 171 129 204 104 188 l 43 239 b 153 321 81 265 118 292 l 153 692 b 372 1001 153 911 249 1001 b 553 782 482 1001 553 914 b 269 294 553 610 453 457 l 269 275 b 411 88 272 136 329 88 b 600 210 501 88 565 158 "
    },
    "\xe2\x84\x96": {
        ha: 1272,
        x_min: 0,
        x_max: 0,
        o: "m 1011 882 b 1229 644 1146 882 1229 789 b 1010 401 1229 472 1121 401 b 790 639 886 401 790 488 b 1011 882 790 794 892 882 m 1010 813 b 890 639 928 813 890 722 b 1010 471 890 542 944 471 b 1129 642 1083 471 1129 542 b 1010 813 1129 722 1096 813 m 828 269 l 828 342 l 1193 342 l 1193 269 m 103 0 l 103 903 l 236 903 l 472 457 b 614 156 526 350 575 250 l 615 157 b 603 532 606 283 603 389 l 603 903 l 711 903 l 711 0 l 588 0 l 350 449 b 207 756 297 550 249 653 l 203 754 b 211 374 208 638 211 533 l 211 0 "
    },
    "\xe2\x82\xb9": {
        ha: 713,
        x_min: 0,
        x_max: 0,
        o: "m 517 635 b 213 397 503 493 390 403 b 556 0 321 285 439 143 l 422 0 b 82 390 314 131 213 251 l 82 476 l 158 476 b 399 635 308 476 389 539 l 82 635 l 82 704 l 394 704 b 181 825 375 785 301 825 l 82 825 l 82 915 l 665 915 l 665 846 l 438 846 b 515 704 478 814 507 768 l 667 704 l 667 635 "
    }
}, x = "Myriad Pro", a = 1042, _ = -347, o = -75, i = 50, n = {
    yMin: -250,
    xMin: -157,
    yMax: 952,
    xMax: 1126
}, h = 1e3, e = {
    format: 0,
    copyright: "\xc2\xa9 1992, 1994, 1997, 2000, 2004 Adobe Systems Incorporated. All rights reserved.",
    fontFamily: "Myriad Pro",
    fontSubfamily: "Regular",
    uniqueID: "2.102;ADBE;MyriadPro-Regular;ADOBE",
    fullName: "MyriadPro-Regular",
    version: "Version 2.102;PS 2.000;hotconv 1.0.67;makeotf.lib2.5.33168",
    postScriptName: "MyriadPro-Regular",
    trademark: "Myriad is either a registered trademark or a trademark of Adobe Systems Incorporated in the United States and/or other countries.",
    manufacturer: "Adobe Systems Incorporated",
    designer: "Robert Slimbach and Carol Twombly",
    manufacturerURL: "http://www.adobe.com/type",
    licenceURL: "http://www.adobe.com/type/legal.html"
}, r = "normal", t = "normal", d = {
    glyphs: m,
    familyName: x,
    ascender: a,
    descender: _,
    underlinePosition: o,
    underlineThickness: i,
    boundingBox: n,
    resolution: h,
    original_font_information: e,
    cssFontWeight: r,
    cssFontStyle: t
};

},{"./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["dwsUm"], null, "parcelRequire79a8")

//# sourceMappingURL=MyriadPro-3UATSCWU.c9cda5ab.js.map
