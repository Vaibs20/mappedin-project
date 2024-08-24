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
})({"bFg0k":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "eedd0da0440a0719";
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

},{}],"9pIfe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFExporter", ()=>q);
var _chunk4XLXKB34Js = require("./chunk-4XLXKB34.js");
var _chunkA5C75TI6Js = require("./chunk-A5C75TI6.js");
var _chunkZRT45YCMJs = require("./chunk-ZRT45YCM.js");
var B, J, U, K;
function j(e, t = 1 / 0, s = null) {
    J || (J = new (0, _chunk4XLXKB34Js.ha)(2, 2, 1, 1)), U || (U = new (0, _chunk4XLXKB34Js.da)({
        uniforms: {
            blitTexture: new (0, _chunk4XLXKB34Js.Na)(e)
        },
        vertexShader: "\n			varying vec2 vUv;\n			void main(){\n				vUv = uv;\n				gl_Position = vec4(position.xy * 1.0,0.,.999999);\n			}",
        fragmentShader: "\n			uniform sampler2D blitTexture; \n			varying vec2 vUv;\n\n			void main(){ \n				gl_FragColor = vec4(vUv.xy, 0, 1);\n				\n				#ifdef IS_SRGB\n				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );\n				#else\n				gl_FragColor = texture2D( blitTexture, vUv);\n				#endif\n			}"
    })), U.uniforms.blitTexture.value = e, U.defines.IS_SRGB = e.colorSpace == (0, _chunk4XLXKB34Js.E), U.needsUpdate = !0, K || ((K = new (0, _chunk4XLXKB34Js.ba)(J, U)).frustrumCulled = !1);
    let r = new (0, _chunk4XLXKB34Js.fa), n = new (0, _chunk4XLXKB34Js.oa);
    n.add(K), null === s && (s = B = new (0, _chunk4XLXKB34Js.ma)({
        antialias: !1
    }));
    let i = Math.min(e.image.width, t), a = Math.min(e.image.height, t);
    s.setSize(i, a), s.clear(), s.render(n, r);
    let o = document.createElement("canvas"), l = o.getContext("2d");
    o.width = i, o.height = a, l.drawImage(s.domElement, 0, 0, i, a);
    let c = new (0, _chunk4XLXKB34Js.ua)(o);
    return c.minFilter = e.minFilter, c.magFilter = e.magFilter, c.wrapS = e.wrapS, c.wrapT = e.wrapT, c.name = e.name, B && (B.forceContextLoss(), B.dispose(), B = null), c;
}
(0, _chunkA5C75TI6Js.a)(), (0, _chunkA5C75TI6Js.a)(), (0, _chunkZRT45YCMJs.a)(j, "decompress");
var $e = {
    POSITION: [
        "byte",
        "byte normalized",
        "unsigned byte",
        "unsigned byte normalized",
        "short",
        "short normalized",
        "unsigned short",
        "unsigned short normalized"
    ],
    NORMAL: [
        "byte normalized",
        "short normalized"
    ],
    TANGENT: [
        "byte normalized",
        "short normalized"
    ],
    TEXCOORD: [
        "byte",
        "byte normalized",
        "unsigned byte",
        "short",
        "short normalized",
        "unsigned short"
    ]
}, pe = class {
    constructor(){
        this.pluginCallbacks = [], this.register(function(e) {
            return new ee(e);
        }), this.register(function(e) {
            return new se(e);
        }), this.register(function(e) {
            return new re(e);
        }), this.register(function(e) {
            return new ie(e);
        }), this.register(function(e) {
            return new oe(e);
        }), this.register(function(e) {
            return new ae(e);
        }), this.register(function(e) {
            return new te(e);
        }), this.register(function(e) {
            return new ne(e);
        }), this.register(function(e) {
            return new ce(e);
        }), this.register(function(e) {
            return new ue(e);
        }), this.register(function(e) {
            return new le(e);
        }), this.register(function(e) {
            return new fe(e);
        }), this.register(function(e) {
            return new he(e);
        });
    }
    register(e) {
        return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this;
    }
    unregister(e) {
        return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
    }
    parse(e, t, s, r) {
        let n = new $, i = [];
        for(let e = 0, t = this.pluginCallbacks.length; e < t; e++)i.push(this.pluginCallbacks[e](n));
        n.setPlugins(i), n.write(e, t, r).catch(s);
    }
    parseAsync(e, t) {
        let s = this;
        return new Promise(function(r, n) {
            s.parse(e, r, n, t);
        });
    }
};
(0, _chunkZRT45YCMJs.a)(pe, "GLTFExporter");
var q = pe, x = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    BYTE: 5120,
    UNSIGNED_BYTE: 5121,
    SHORT: 5122,
    UNSIGNED_SHORT: 5123,
    INT: 5124,
    UNSIGNED_INT: 5125,
    FLOAT: 5126,
    ARRAY_BUFFER: 34962,
    ELEMENT_ARRAY_BUFFER: 34963,
    NEAREST: 9728,
    LINEAR: 9729,
    NEAREST_MIPMAP_NEAREST: 9984,
    LINEAR_MIPMAP_NEAREST: 9985,
    NEAREST_MIPMAP_LINEAR: 9986,
    LINEAR_MIPMAP_LINEAR: 9987,
    CLAMP_TO_EDGE: 33071,
    MIRRORED_REPEAT: 33648,
    REPEAT: 10497
}, Q = "KHR_mesh_quantization", b = {};
b[0, _chunk4XLXKB34Js.l] = x.NEAREST, b[0, _chunk4XLXKB34Js.m] = x.NEAREST_MIPMAP_NEAREST, b[0, _chunk4XLXKB34Js.n] = x.NEAREST_MIPMAP_LINEAR, b[0, _chunk4XLXKB34Js.o] = x.LINEAR, b[0, _chunk4XLXKB34Js.p] = x.LINEAR_MIPMAP_NEAREST, b[0, _chunk4XLXKB34Js.q] = x.LINEAR_MIPMAP_LINEAR, b[0, _chunk4XLXKB34Js.j] = x.CLAMP_TO_EDGE, b[0, _chunk4XLXKB34Js.i] = x.REPEAT, b[0, _chunk4XLXKB34Js.k] = x.MIRRORED_REPEAT;
var es = {
    scale: "scale",
    position: "translation",
    quaternion: "rotation",
    morphTargetInfluences: "weights"
}, cs = new (0, _chunk4XLXKB34Js.Y), ss = 12, us = 1179937895, ls = 2, ts = 8, fs = 1313821514, hs = 5130562;
function F(e, t) {
    return e.length === t.length && e.every(function(e, s) {
        return e === t[s];
    });
}
function ps(e) {
    return (new TextEncoder).encode(e).buffer;
}
function ds(e) {
    return F(e.elements, [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ]);
}
function gs(e, t, s) {
    let r = {
        min: new Array(e.itemSize).fill(Number.POSITIVE_INFINITY),
        max: new Array(e.itemSize).fill(Number.NEGATIVE_INFINITY)
    };
    for(let n = t; n < t + s; n++)for(let t = 0; t < e.itemSize; t++){
        let s;
        e.itemSize > 4 ? s = e.array[n * e.itemSize + t] : (0 === t ? s = e.getX(n) : 1 === t ? s = e.getY(n) : 2 === t ? s = e.getZ(n) : 3 === t && (s = e.getW(n)), !0 === e.normalized && (s = (0, _chunk4XLXKB34Js.L).normalize(s, e.array))), r.min[t] = Math.min(r.min[t], s), r.max[t] = Math.max(r.max[t], s);
    }
    return r;
}
function is(e) {
    return 4 * Math.ceil(e / 4);
}
function Z(e, t = 0) {
    let s = is(e.byteLength);
    if (s !== e.byteLength) {
        let r = new Uint8Array(s);
        if (r.set(new Uint8Array(e)), 0 !== t) for(let n = e.byteLength; n < s; n++)r[n] = t;
        return r.buffer;
    }
    return e;
}
function ns() {
    return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
function rs(e, t) {
    if (void 0 !== e.toBlob) return new Promise((s)=>e.toBlob(s, t));
    let s;
    return "image/jpeg" === t ? s = .92 : "image/webp" === t && (s = .8), e.convertToBlob({
        type: t,
        quality: s
    });
}
(0, _chunkZRT45YCMJs.a)(F, "equalArray"), (0, _chunkZRT45YCMJs.a)(ps, "stringToArrayBuffer"), (0, _chunkZRT45YCMJs.a)(ds, "isIdentityMatrix"), (0, _chunkZRT45YCMJs.a)(gs, "getMinMax"), (0, _chunkZRT45YCMJs.a)(is, "getPaddedBufferSize"), (0, _chunkZRT45YCMJs.a)(Z, "getPaddedArrayBuffer"), (0, _chunkZRT45YCMJs.a)(ns, "getCanvas"), (0, _chunkZRT45YCMJs.a)(rs, "getToBlobPromise");
var de = class {
    constructor(){
        this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = new Map, this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = new Map, this.uid = 0, this.json = {
            asset: {
                version: "2.0",
                generator: "THREE.GLTFExporter"
            }
        }, this.cache = {
            meshes: new Map,
            attributes: new Map,
            attributesNormalized: new Map,
            materials: new Map,
            textures: new Map,
            images: new Map
        };
    }
    setPlugins(e) {
        this.plugins = e;
    }
    async write(e, t, s = {}) {
        this.options = Object.assign({
            binary: !1,
            trs: !1,
            onlyVisible: !0,
            maxTextureSize: 1 / 0,
            animations: [],
            includeCustomExtensions: !1
        }, s), this.options.animations.length > 0 && (this.options.trs = !0), this.processInput(e), await Promise.all(this.pending);
        let r = this, n = r.buffers, i = r.json;
        s = r.options;
        let a = r.extensionsUsed, o = r.extensionsRequired, l = new Blob(n, {
            type: "application/octet-stream"
        }), c = Object.keys(a), u = Object.keys(o);
        if (c.length > 0 && (i.extensionsUsed = c), u.length > 0 && (i.extensionsRequired = u), i.buffers && i.buffers.length > 0 && (i.buffers[0].byteLength = l.size), !0 === s.binary) {
            let e = new FileReader;
            e.readAsArrayBuffer(l), e.onloadend = function() {
                let s = Z(e.result), r = new DataView(new ArrayBuffer(ts));
                r.setUint32(0, s.byteLength, !0), r.setUint32(4, hs, !0);
                let n = Z(ps(JSON.stringify(i)), 32), a = new DataView(new ArrayBuffer(ts));
                a.setUint32(0, n.byteLength, !0), a.setUint32(4, fs, !0);
                let o = new ArrayBuffer(ss), l = new DataView(o);
                l.setUint32(0, us, !0), l.setUint32(4, ls, !0);
                let c = ss + a.byteLength + n.byteLength + r.byteLength + s.byteLength;
                l.setUint32(8, c, !0);
                let u = new Blob([
                    o,
                    a,
                    n,
                    r,
                    s
                ], {
                    type: "application/octet-stream"
                }), h = new FileReader;
                h.readAsArrayBuffer(u), h.onloadend = function() {
                    t(h.result);
                };
            };
        } else if (i.buffers && i.buffers.length > 0) {
            let e = new FileReader;
            e.readAsDataURL(l), e.onloadend = function() {
                let s = e.result;
                i.buffers[0].uri = s, t(i);
            };
        } else t(i);
    }
    serializeUserData(e, t) {
        if (0 === Object.keys(e.userData).length) return;
        let s = this.options, r = this.extensionsUsed;
        try {
            let n = JSON.parse(JSON.stringify(e.userData));
            if (s.includeCustomExtensions && n.gltfExtensions) {
                void 0 === t.extensions && (t.extensions = {});
                for(let e in n.gltfExtensions)t.extensions[e] = n.gltfExtensions[e], r[e] = !0;
                delete n.gltfExtensions;
            }
            Object.keys(n).length > 0 && (t.extras = n);
        } catch (t) {
            console.warn("THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + t.message);
        }
    }
    getUID(e, t = !1) {
        if (!1 === this.uids.has(e)) {
            let t = new Map;
            t.set(!0, this.uid++), t.set(!1, this.uid++), this.uids.set(e, t);
        }
        return this.uids.get(e).get(t);
    }
    isNormalizedNormalAttribute(e) {
        if (this.cache.attributesNormalized.has(e)) return !1;
        let t = new (0, _chunk4XLXKB34Js.S);
        for(let s = 0, r = e.count; s < r; s++)if (Math.abs(t.fromBufferAttribute(e, s).length() - 1) > 5e-4) return !1;
        return !0;
    }
    createNormalizedNormalAttribute(e) {
        let t = this.cache;
        if (t.attributesNormalized.has(e)) return t.attributesNormalized.get(e);
        let s = e.clone(), r = new (0, _chunk4XLXKB34Js.S);
        for(let e = 0, t = s.count; e < t; e++)r.fromBufferAttribute(s, e), 0 === r.x && 0 === r.y && 0 === r.z ? r.setX(1) : r.normalize(), s.setXYZ(e, r.x, r.y, r.z);
        return t.attributesNormalized.set(e, s), s;
    }
    applyTextureTransform(e, t) {
        let s = !1, r = {};
        (0 !== t.offset.x || 0 !== t.offset.y) && (r.offset = t.offset.toArray(), s = !0), 0 !== t.rotation && (r.rotation = t.rotation, s = !0), (1 !== t.repeat.x || 1 !== t.repeat.y) && (r.scale = t.repeat.toArray(), s = !0), s && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = r, this.extensionsUsed.KHR_texture_transform = !0);
    }
    buildMetalRoughTexture(e, t) {
        if (e === t) return e;
        function s(e) {
            return e.colorSpace === (0, _chunk4XLXKB34Js.E) ? (0, _chunkZRT45YCMJs.a)(function(e) {
                return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4);
            }, "SRGBToLinear") : (0, _chunkZRT45YCMJs.a)(function(e) {
                return e;
            }, "LinearToLinear");
        }
        (0, _chunkZRT45YCMJs.a)(s, "getEncodingConversion"), console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof (0, _chunk4XLXKB34Js.ta) && (e = j(e)), t instanceof (0, _chunk4XLXKB34Js.ta) && (t = j(t));
        let r = e ? e.image : null, n = t ? t.image : null, i = Math.max(r ? r.width : 0, n ? n.width : 0), a = Math.max(r ? r.height : 0, n ? n.height : 0), o = ns();
        o.width = i, o.height = a;
        let l = o.getContext("2d");
        l.fillStyle = "#00ffff", l.fillRect(0, 0, i, a);
        let c = l.getImageData(0, 0, i, a);
        if (r) {
            l.drawImage(r, 0, 0, i, a);
            let t = s(e), n = l.getImageData(0, 0, i, a).data;
            for(let e = 2; e < n.length; e += 4)c.data[e] = 256 * t(n[e] / 256);
        }
        if (n) {
            l.drawImage(n, 0, 0, i, a);
            let e = s(t), r = l.getImageData(0, 0, i, a).data;
            for(let t = 1; t < r.length; t += 4)c.data[t] = 256 * e(r[t] / 256);
        }
        l.putImageData(c, 0, 0);
        let u = (e || t).clone();
        return u.source = new (0, _chunk4XLXKB34Js.N)(o), u.colorSpace = (0, _chunk4XLXKB34Js.D), u.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), u;
    }
    processBuffer(e) {
        let t = this.json, s = this.buffers;
        return t.buffers || (t.buffers = [
            {
                byteLength: 0
            }
        ]), s.push(e), 0;
    }
    processBufferView(e, t, s, r, n) {
        let i, a = this.json;
        switch(a.bufferViews || (a.bufferViews = []), t){
            case x.BYTE:
            case x.UNSIGNED_BYTE:
                i = 1;
                break;
            case x.SHORT:
            case x.UNSIGNED_SHORT:
                i = 2;
                break;
            default:
                i = 4;
        }
        let o = is(r * e.itemSize * i), l = new DataView(new ArrayBuffer(o)), c = 0;
        for(let n = s; n < s + r; n++)for(let s = 0; s < e.itemSize; s++){
            let r;
            e.itemSize > 4 ? r = e.array[n * e.itemSize + s] : (0 === s ? r = e.getX(n) : 1 === s ? r = e.getY(n) : 2 === s ? r = e.getZ(n) : 3 === s && (r = e.getW(n)), !0 === e.normalized && (r = (0, _chunk4XLXKB34Js.L).normalize(r, e.array))), t === x.FLOAT ? l.setFloat32(c, r, !0) : t === x.INT ? l.setInt32(c, r, !0) : t === x.UNSIGNED_INT ? l.setUint32(c, r, !0) : t === x.SHORT ? l.setInt16(c, r, !0) : t === x.UNSIGNED_SHORT ? l.setUint16(c, r, !0) : t === x.BYTE ? l.setInt8(c, r) : t === x.UNSIGNED_BYTE && l.setUint8(c, r), c += i;
        }
        let u = {
            buffer: this.processBuffer(l.buffer),
            byteOffset: this.byteOffset,
            byteLength: o
        };
        return void 0 !== n && (u.target = n), n === x.ARRAY_BUFFER && (u.byteStride = e.itemSize * i), this.byteOffset += o, a.bufferViews.push(u), {
            id: a.bufferViews.length - 1,
            byteLength: 0
        };
    }
    processBufferViewImage(e) {
        let t = this, s = t.json;
        return s.bufferViews || (s.bufferViews = []), new Promise(function(r) {
            let n = new FileReader;
            n.readAsArrayBuffer(e), n.onloadend = function() {
                let e = Z(n.result), i = {
                    buffer: t.processBuffer(e),
                    byteOffset: t.byteOffset,
                    byteLength: e.byteLength
                };
                t.byteOffset += e.byteLength, r(s.bufferViews.push(i) - 1);
            };
        });
    }
    processAccessor(e, t, s, r) {
        let n, i = this.json;
        if (e.array.constructor === Float32Array) n = x.FLOAT;
        else if (e.array.constructor === Int32Array) n = x.INT;
        else if (e.array.constructor === Uint32Array) n = x.UNSIGNED_INT;
        else if (e.array.constructor === Int16Array) n = x.SHORT;
        else if (e.array.constructor === Uint16Array) n = x.UNSIGNED_SHORT;
        else if (e.array.constructor === Int8Array) n = x.BYTE;
        else {
            if (e.array.constructor !== Uint8Array) throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name);
            n = x.UNSIGNED_BYTE;
        }
        if (void 0 === s && (s = 0), (void 0 === r || r === 1 / 0) && (r = e.count), 0 === r) return null;
        let a, o = gs(e, s, r);
        void 0 !== t && (a = e === t.index ? x.ELEMENT_ARRAY_BUFFER : x.ARRAY_BUFFER);
        let l = this.processBufferView(e, n, s, r, a), c = {
            bufferView: l.id,
            byteOffset: l.byteOffset,
            componentType: n,
            count: r,
            max: o.max,
            min: o.min,
            type: {
                1: "SCALAR",
                2: "VEC2",
                3: "VEC3",
                4: "VEC4",
                9: "MAT3",
                16: "MAT4"
            }[e.itemSize]
        };
        return !0 === e.normalized && (c.normalized = !0), i.accessors || (i.accessors = []), i.accessors.push(c) - 1;
    }
    processImage(e, t, s, r = "image/png") {
        if (null !== e) {
            let n = this, i = n.cache, a = n.json, o = n.options, l = n.pending;
            i.images.has(e) || i.images.set(e, {});
            let c = i.images.get(e), u = r + ":flipY/" + s.toString();
            if (void 0 !== c[u]) return c[u];
            a.images || (a.images = []);
            let h = {
                mimeType: r
            }, p = ns();
            p.width = Math.min(e.width, o.maxTextureSize), p.height = Math.min(e.height, o.maxTextureSize);
            let m = p.getContext("2d");
            if (!0 === s && (m.translate(0, p.height), m.scale(1, -1)), void 0 !== e.data) {
                t !== (0, _chunk4XLXKB34Js.w) && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > o.maxTextureSize || e.height > o.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
                let s = new Uint8ClampedArray(e.height * e.width * 4);
                for(let t = 0; t < s.length; t += 4)s[t + 0] = e.data[t + 0], s[t + 1] = e.data[t + 1], s[t + 2] = e.data[t + 2], s[t + 3] = e.data[t + 3];
                m.putImageData(new ImageData(s, e.width, e.height), 0, 0);
            } else {
                if (!(typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap)) throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement or ImageBitmap.");
                m.drawImage(e, 0, 0, p.width, p.height);
            }
            !0 === o.binary ? l.push(rs(p, r).then((e)=>n.processBufferViewImage(e)).then((e)=>{
                h.bufferView = e;
            })) : void 0 !== p.toDataURL ? h.uri = p.toDataURL(r) : l.push(rs(p, r).then((e)=>(new FileReader).readAsDataURL(e)).then((e)=>{
                h.uri = e;
            }));
            let f = a.images.push(h) - 1;
            return c[u] = f, f;
        }
        throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
    }
    processSampler(e) {
        let t = this.json;
        t.samplers || (t.samplers = []);
        let s = {
            magFilter: b[e.magFilter],
            minFilter: b[e.minFilter],
            wrapS: b[e.wrapS],
            wrapT: b[e.wrapT]
        };
        return t.samplers.push(s) - 1;
    }
    processTexture(e) {
        let t = this.options, s = this.cache, r = this.json;
        if (s.textures.has(e)) return s.textures.get(e);
        r.textures || (r.textures = []), e instanceof (0, _chunk4XLXKB34Js.ta) && (e = j(e, t.maxTextureSize));
        let n = e.userData.mimeType;
        "image/webp" === n && (n = "image/png");
        let i = {
            sampler: this.processSampler(e),
            source: this.processImage(e.image, e.format, e.flipY, n)
        };
        e.name && (i.name = e.name), this._invokeAll(function(t) {
            t.writeTexture && t.writeTexture(e, i);
        });
        let a = r.textures.push(i) - 1;
        return s.textures.set(e, a), a;
    }
    processMaterial(e) {
        let t = this.cache, s = this.json;
        if (t.materials.has(e)) return t.materials.get(e);
        if (e.isShaderMaterial) return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
        s.materials || (s.materials = []);
        let r = {
            pbrMetallicRoughness: {}
        };
        !0 !== e.isMeshStandardMaterial && !0 !== e.isMeshBasicMaterial && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
        let n = e.color.toArray().concat([
            e.opacity
        ]);
        if (F(n, [
            1,
            1,
            1,
            1
        ]) || (r.pbrMetallicRoughness.baseColorFactor = n), e.isMeshStandardMaterial ? (r.pbrMetallicRoughness.metallicFactor = e.metalness, r.pbrMetallicRoughness.roughnessFactor = e.roughness) : (r.pbrMetallicRoughness.metallicFactor = .5, r.pbrMetallicRoughness.roughnessFactor = .5), e.metalnessMap || e.roughnessMap) {
            let t = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), s = {
                index: this.processTexture(t),
                channel: t.channel
            };
            this.applyTextureTransform(s, t), r.pbrMetallicRoughness.metallicRoughnessTexture = s;
        }
        if (e.map) {
            let t = {
                index: this.processTexture(e.map),
                texCoord: e.map.channel
            };
            this.applyTextureTransform(t, e.map), r.pbrMetallicRoughness.baseColorTexture = t;
        }
        if (e.emissive) {
            let t = e.emissive;
            if (Math.max(t.r, t.g, t.b) > 0 && (r.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
                let t = {
                    index: this.processTexture(e.emissiveMap),
                    texCoord: e.emissiveMap.channel
                };
                this.applyTextureTransform(t, e.emissiveMap), r.emissiveTexture = t;
            }
        }
        if (e.normalMap) {
            let t = {
                index: this.processTexture(e.normalMap),
                texCoord: e.normalMap.channel
            };
            e.normalScale && 1 !== e.normalScale.x && (t.scale = e.normalScale.x), this.applyTextureTransform(t, e.normalMap), r.normalTexture = t;
        }
        if (e.aoMap) {
            let t = {
                index: this.processTexture(e.aoMap),
                texCoord: e.aoMap.channel
            };
            1 !== e.aoMapIntensity && (t.strength = e.aoMapIntensity), this.applyTextureTransform(t, e.aoMap), r.occlusionTexture = t;
        }
        e.transparent ? r.alphaMode = "BLEND" : e.alphaTest > 0 && (r.alphaMode = "MASK", r.alphaCutoff = e.alphaTest), e.side === (0, _chunk4XLXKB34Js.e) && (r.doubleSided = !0), "" !== e.name && (r.name = e.name), this.serializeUserData(e, r), this._invokeAll(function(t) {
            t.writeMaterial && t.writeMaterial(e, r);
        });
        let i = s.materials.push(r) - 1;
        return t.materials.set(e, i), i;
    }
    processMesh(e) {
        let t = this.cache, s = this.json, r = [
            e.geometry.uuid
        ];
        if (Array.isArray(e.material)) for(let t = 0, s = e.material.length; t < s; t++)r.push(e.material[t].uuid);
        else r.push(e.material.uuid);
        let n = r.join(":");
        if (t.meshes.has(n)) return t.meshes.get(n);
        let i, a = e.geometry;
        i = e.isLineSegments ? x.LINES : e.isLineLoop ? x.LINE_LOOP : e.isLine ? x.LINE_STRIP : e.isPoints ? x.POINTS : e.material.wireframe ? x.LINES : x.TRIANGLES;
        let o = {}, l = {}, c = [], u = [], h = {
            uv: "TEXCOORD_0",
            uv1: "TEXCOORD_1",
            uv2: "TEXCOORD_2",
            uv3: "TEXCOORD_3",
            color: "COLOR_0",
            skinWeight: "WEIGHTS_0",
            skinIndex: "JOINTS_0"
        }, p = a.getAttribute("normal");
        void 0 !== p && !this.isNormalizedNormalAttribute(p) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), a.setAttribute("normal", this.createNormalizedNormalAttribute(p)));
        let m = null;
        for(let e in a.attributes){
            if ("morph" === e.slice(0, 5)) continue;
            let s = a.attributes[e];
            if (e = h[e] || e.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(e) || (e = "_" + e), t.attributes.has(this.getUID(s))) {
                l[e] = t.attributes.get(this.getUID(s));
                continue;
            }
            m = null;
            let r = s.array;
            "JOINTS_0" === e && !(r instanceof Uint16Array) && !(r instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), m = new (0, _chunk4XLXKB34Js.$)(new Uint16Array(r), s.itemSize, s.normalized));
            let n = this.processAccessor(m || s, a);
            null !== n && (e.startsWith("_") || this.detectMeshQuantization(e, s), l[e] = n, t.attributes.set(this.getUID(s), n));
        }
        if (void 0 !== p && a.setAttribute("normal", p), 0 === Object.keys(l).length) return null;
        if (void 0 !== e.morphTargetInfluences && e.morphTargetInfluences.length > 0) {
            let s = [], r = [], n = {};
            if (void 0 !== e.morphTargetDictionary) for(let t in e.morphTargetDictionary)n[e.morphTargetDictionary[t]] = t;
            for(let i = 0; i < e.morphTargetInfluences.length; ++i){
                let o = {}, l = !1;
                for(let e in a.morphAttributes){
                    if ("position" !== e && "normal" !== e) {
                        l || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), l = !0);
                        continue;
                    }
                    let s = a.morphAttributes[e][i], r = e.toUpperCase(), n = a.attributes[e];
                    if (t.attributes.has(this.getUID(s, !0))) {
                        o[r] = t.attributes.get(this.getUID(s, !0));
                        continue;
                    }
                    let c = s.clone();
                    if (!a.morphTargetsRelative) for(let e = 0, t = s.count; e < t; e++)for(let t = 0; t < s.itemSize; t++)0 === t && c.setX(e, s.getX(e) - n.getX(e)), 1 === t && c.setY(e, s.getY(e) - n.getY(e)), 2 === t && c.setZ(e, s.getZ(e) - n.getZ(e)), 3 === t && c.setW(e, s.getW(e) - n.getW(e));
                    o[r] = this.processAccessor(c, a), t.attributes.set(this.getUID(n, !0), o[r]);
                }
                u.push(o), s.push(e.morphTargetInfluences[i]), void 0 !== e.morphTargetDictionary && r.push(n[i]);
            }
            o.weights = s, r.length > 0 && (o.extras = {}, o.extras.targetNames = r);
        }
        let f = Array.isArray(e.material);
        if (f && 0 === a.groups.length) return null;
        let g = !1;
        if (f && null === a.index) {
            let e = [];
            for(let t = 0, s = a.attributes.position.count; t < s; t++)e[t] = t;
            a.setIndex(e), g = !0;
        }
        let d = f ? e.material : [
            e.material
        ], T = f ? a.groups : [
            {
                materialIndex: 0,
                start: void 0,
                count: void 0
            }
        ];
        for(let e = 0, s = T.length; e < s; e++){
            let s = {
                mode: i,
                attributes: l
            };
            if (this.serializeUserData(a, s), u.length > 0 && (s.targets = u), null !== a.index) {
                let r = this.getUID(a.index);
                (void 0 !== T[e].start || void 0 !== T[e].count) && (r += ":" + T[e].start + ":" + T[e].count), t.attributes.has(r) ? s.indices = t.attributes.get(r) : (s.indices = this.processAccessor(a.index, a, T[e].start, T[e].count), t.attributes.set(r, s.indices)), null === s.indices && delete s.indices;
            }
            let r = this.processMaterial(d[T[e].materialIndex]);
            null !== r && (s.material = r), c.push(s);
        }
        !0 === g && a.setIndex(null), o.primitives = c, s.meshes || (s.meshes = []), this._invokeAll(function(t) {
            t.writeMesh && t.writeMesh(e, o);
        });
        let y = s.meshes.push(o) - 1;
        return t.meshes.set(n, y), y;
    }
    detectMeshQuantization(e, t) {
        if (this.extensionsUsed[Q]) return;
        let s;
        switch(t.array.constructor){
            case Int8Array:
                s = "byte";
                break;
            case Uint8Array:
                s = "unsigned byte";
                break;
            case Int16Array:
                s = "short";
                break;
            case Uint16Array:
                s = "unsigned short";
                break;
            default:
                return;
        }
        t.normalized && (s += " normalized");
        let r = e.split("_", 1)[0];
        $e[r] && $e[r].includes(s) && (this.extensionsUsed[Q] = !0, this.extensionsRequired[Q] = !0);
    }
    processCamera(e) {
        let t = this.json;
        t.cameras || (t.cameras = []);
        let s = e.isOrthographicCamera, r = {
            type: s ? "orthographic" : "perspective"
        };
        return s ? r.orthographic = {
            xmag: 2 * e.right,
            ymag: 2 * e.top,
            zfar: e.far <= 0 ? .001 : e.far,
            znear: e.near < 0 ? 0 : e.near
        } : r.perspective = {
            aspectRatio: e.aspect,
            yfov: (0, _chunk4XLXKB34Js.L).degToRad(e.fov),
            zfar: e.far <= 0 ? .001 : e.far,
            znear: e.near < 0 ? 0 : e.near
        }, "" !== e.name && (r.name = e.type), t.cameras.push(r) - 1;
    }
    processAnimation(e, t) {
        let s = this.json, r = this.nodeMap;
        s.animations || (s.animations = []);
        let n = (e = q.Utils.mergeMorphTargetTracks(e.clone(), t)).tracks, i = [], a = [];
        for(let e = 0; e < n.length; ++e){
            let s = n[e], o = (0, _chunk4XLXKB34Js.Ma).parseTrackName(s.name), l = (0, _chunk4XLXKB34Js.Ma).findNode(t, o.nodeName), c = es[o.propertyName];
            if ("bones" === o.objectName && (l = !0 === l.isSkinnedMesh ? l.skeleton.getBoneByName(o.objectIndex) : void 0), !l || !c) return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', s.name), null;
            let u, h = 1, p = s.values.length / s.times.length;
            c === es.morphTargetInfluences && (p /= l.morphTargetInfluences.length), !0 === s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline ? (u = "CUBICSPLINE", p /= 3) : u = s.getInterpolation() === (0, _chunk4XLXKB34Js.z) ? "STEP" : "LINEAR", a.push({
                input: this.processAccessor(new (0, _chunk4XLXKB34Js.$)(s.times, h)),
                output: this.processAccessor(new (0, _chunk4XLXKB34Js.$)(s.values, p)),
                interpolation: u
            }), i.push({
                sampler: a.length - 1,
                target: {
                    node: r.get(l),
                    path: c
                }
            });
        }
        return s.animations.push({
            name: e.name || "clip_" + s.animations.length,
            samplers: a,
            channels: i
        }), s.animations.length - 1;
    }
    processSkin(e) {
        let t = this.json, s = this.nodeMap, r = t.nodes[s.get(e)], n = e.skeleton;
        if (void 0 === n) return null;
        let i = e.skeleton.bones[0];
        if (void 0 === i) return null;
        let a = [], o = new Float32Array(16 * n.bones.length), l = new (0, _chunk4XLXKB34Js.V);
        for(let t = 0; t < n.bones.length; ++t)a.push(s.get(n.bones[t])), l.copy(n.boneInverses[t]), l.multiply(e.bindMatrix).toArray(o, 16 * t);
        return void 0 === t.skins && (t.skins = []), t.skins.push({
            inverseBindMatrices: this.processAccessor(new (0, _chunk4XLXKB34Js.$)(o, 16)),
            joints: a,
            skeleton: s.get(i)
        }), r.skin = t.skins.length - 1;
    }
    processNode(e) {
        let t = this.json, s = this.options, r = this.nodeMap;
        t.nodes || (t.nodes = []);
        let n = {};
        if (s.trs) {
            let t = e.quaternion.toArray(), s = e.position.toArray(), r = e.scale.toArray();
            F(t, [
                0,
                0,
                0,
                1
            ]) || (n.rotation = t), F(s, [
                0,
                0,
                0
            ]) || (n.translation = s), F(r, [
                1,
                1,
                1
            ]) || (n.scale = r);
        } else e.matrixAutoUpdate && e.updateMatrix(), !1 === ds(e.matrix) && (n.matrix = e.matrix.elements);
        if ("" !== e.name && (n.name = String(e.name)), this.serializeUserData(e, n), e.isMesh || e.isLine || e.isPoints) {
            let t = this.processMesh(e);
            null !== t && (n.mesh = t);
        } else e.isCamera && (n.camera = this.processCamera(e));
        if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
            let t = [];
            for(let r = 0, n = e.children.length; r < n; r++){
                let n = e.children[r];
                if (n.visible || !1 === s.onlyVisible) {
                    let e = this.processNode(n);
                    null !== e && t.push(e);
                }
            }
            t.length > 0 && (n.children = t);
        }
        this._invokeAll(function(t) {
            t.writeNode && t.writeNode(e, n);
        });
        let i = t.nodes.push(n) - 1;
        return r.set(e, i), i;
    }
    processScene(e) {
        let t = this.json, s = this.options;
        t.scenes || (t.scenes = [], t.scene = 0);
        let r = {};
        "" !== e.name && (r.name = e.name), t.scenes.push(r);
        let n = [];
        for(let t = 0, r = e.children.length; t < r; t++){
            let r = e.children[t];
            if (r.visible || !1 === s.onlyVisible) {
                let e = this.processNode(r);
                null !== e && n.push(e);
            }
        }
        n.length > 0 && (r.nodes = n), this.serializeUserData(e, r);
    }
    processObjects(e) {
        let t = new (0, _chunk4XLXKB34Js.oa);
        t.name = "AuxScene";
        for(let s = 0; s < e.length; s++)t.children.push(e[s]);
        this.processScene(t);
    }
    processInput(e) {
        let t = this.options;
        e = e instanceof Array ? e : [
            e
        ], this._invokeAll(function(t) {
            t.beforeParse && t.beforeParse(e);
        });
        let s = [];
        for(let t = 0; t < e.length; t++)e[t] instanceof (0, _chunk4XLXKB34Js.oa) ? this.processScene(e[t]) : s.push(e[t]);
        s.length > 0 && this.processObjects(s);
        for(let e = 0; e < this.skins.length; ++e)this.processSkin(this.skins[e]);
        for(let s = 0; s < t.animations.length; ++s)this.processAnimation(t.animations[s], e[0]);
        this._invokeAll(function(t) {
            t.afterParse && t.afterParse(e);
        });
    }
    _invokeAll(e) {
        for(let t = 0, s = this.plugins.length; t < s; t++)e(this.plugins[t]);
    }
};
(0, _chunkZRT45YCMJs.a)(de, "GLTFWriter");
var $ = de, ge = class {
    constructor(e){
        this.writer = e, this.name = "KHR_lights_punctual";
    }
    writeNode(e, t) {
        if (!e.isLight) return;
        if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) return void console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
        let s = this.writer, r = s.json, n = s.extensionsUsed, i = {};
        e.name && (i.name = e.name), i.color = e.color.toArray(), i.intensity = e.intensity, e.isDirectionalLight ? i.type = "directional" : e.isPointLight ? (i.type = "point", e.distance > 0 && (i.range = e.distance)) : e.isSpotLight && (i.type = "spot", e.distance > 0 && (i.range = e.distance), i.spot = {}, i.spot.innerConeAngle = (1 - e.penumbra) * e.angle, i.spot.outerConeAngle = e.angle), void 0 !== e.decay && 2 !== e.decay && console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."), e.target && (e.target.parent !== e || 0 !== e.target.position.x || 0 !== e.target.position.y || -1 !== e.target.position.z) && console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."), n[this.name] || (r.extensions = r.extensions || {}, r.extensions[this.name] = {
            lights: []
        }, n[this.name] = !0);
        let a = r.extensions[this.name].lights;
        a.push(i), t.extensions = t.extensions || {}, t.extensions[this.name] = {
            light: a.length - 1
        };
    }
};
(0, _chunkZRT45YCMJs.a)(ge, "GLTFLightExtension");
var ee = ge, xe = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_unlit";
    }
    writeMaterial(e, t) {
        if (!e.isMeshBasicMaterial) return;
        let s = this.writer.extensionsUsed;
        t.extensions = t.extensions || {}, t.extensions[this.name] = {}, s[this.name] = !0, t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = .9;
    }
};
(0, _chunkZRT45YCMJs.a)(xe, "GLTFMaterialsUnlitExtension");
var se = xe, me = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_clearcoat";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 === e.clearcoat) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (n.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
            let t = {
                index: s.processTexture(e.clearcoatMap),
                texCoord: e.clearcoatMap.channel
            };
            s.applyTextureTransform(t, e.clearcoatMap), n.clearcoatTexture = t;
        }
        if (n.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
            let t = {
                index: s.processTexture(e.clearcoatRoughnessMap),
                texCoord: e.clearcoatRoughnessMap.channel
            };
            s.applyTextureTransform(t, e.clearcoatRoughnessMap), n.clearcoatRoughnessTexture = t;
        }
        if (e.clearcoatNormalMap) {
            let t = {
                index: s.processTexture(e.clearcoatNormalMap),
                texCoord: e.clearcoatNormalMap.channel
            };
            s.applyTextureTransform(t, e.clearcoatNormalMap), n.clearcoatNormalTexture = t;
        }
        t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(me, "GLTFMaterialsClearcoatExtension");
var te = me, Te = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_iridescence";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 === e.iridescence) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (n.iridescenceFactor = e.iridescence, e.iridescenceMap) {
            let t = {
                index: s.processTexture(e.iridescenceMap),
                texCoord: e.iridescenceMap.channel
            };
            s.applyTextureTransform(t, e.iridescenceMap), n.iridescenceTexture = t;
        }
        if (n.iridescenceIor = e.iridescenceIOR, n.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], n.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
            let t = {
                index: s.processTexture(e.iridescenceThicknessMap),
                texCoord: e.iridescenceThicknessMap.channel
            };
            s.applyTextureTransform(t, e.iridescenceThicknessMap), n.iridescenceThicknessTexture = t;
        }
        t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Te, "GLTFMaterialsIridescenceExtension");
var ne = Te, ye = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_transmission";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (n.transmissionFactor = e.transmission, e.transmissionMap) {
            let t = {
                index: s.processTexture(e.transmissionMap),
                texCoord: e.transmissionMap.channel
            };
            s.applyTextureTransform(t, e.transmissionMap), n.transmissionTexture = t;
        }
        t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(ye, "GLTFMaterialsTransmissionExtension");
var re = ye, we = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_volume";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (n.thicknessFactor = e.thickness, e.thicknessMap) {
            let t = {
                index: s.processTexture(e.thicknessMap),
                texCoord: e.thicknessMap.channel
            };
            s.applyTextureTransform(t, e.thicknessMap), n.thicknessTexture = t;
        }
        n.attenuationDistance = e.attenuationDistance, n.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(we, "GLTFMaterialsVolumeExtension");
var ie = we, Me = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_ior";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 1.5 === e.ior) return;
        let s = this.writer.extensionsUsed, r = {};
        r.ior = e.ior, t.extensions = t.extensions || {}, t.extensions[this.name] = r, s[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Me, "GLTFMaterialsIorExtension");
var oe = Me, Ie = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_specular";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 1 === e.specularIntensity && e.specularColor.equals(cs) && !e.specularIntensityMap && !e.specularColorMap) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (e.specularIntensityMap) {
            let t = {
                index: s.processTexture(e.specularIntensityMap),
                texCoord: e.specularIntensityMap.channel
            };
            s.applyTextureTransform(t, e.specularIntensityMap), n.specularTexture = t;
        }
        if (e.specularColorMap) {
            let t = {
                index: s.processTexture(e.specularColorMap),
                texCoord: e.specularColorMap.channel
            };
            s.applyTextureTransform(t, e.specularColorMap), n.specularColorTexture = t;
        }
        n.specularFactor = e.specularIntensity, n.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Ie, "GLTFMaterialsSpecularExtension");
var ae = Ie, Ae = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_sheen";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 == e.sheen) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (e.sheenRoughnessMap) {
            let t = {
                index: s.processTexture(e.sheenRoughnessMap),
                texCoord: e.sheenRoughnessMap.channel
            };
            s.applyTextureTransform(t, e.sheenRoughnessMap), n.sheenRoughnessTexture = t;
        }
        if (e.sheenColorMap) {
            let t = {
                index: s.processTexture(e.sheenColorMap),
                texCoord: e.sheenColorMap.channel
            };
            s.applyTextureTransform(t, e.sheenColorMap), n.sheenColorTexture = t;
        }
        n.sheenRoughnessFactor = e.sheenRoughness, n.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Ae, "GLTFMaterialsSheenExtension");
var ce = Ae, Re = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_anisotropy";
    }
    writeMaterial(e, t) {
        if (!e.isMeshPhysicalMaterial || 0 == e.anisotropy) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (e.anisotropyMap) {
            let t = {
                index: s.processTexture(e.anisotropyMap)
            };
            s.applyTextureTransform(t, e.anisotropyMap), n.anisotropyTexture = t;
        }
        n.anisotropyStrength = e.anisotropy, n.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Re, "GLTFMaterialsAnisotropyExtension");
var ue = Re, Ee = class {
    constructor(e){
        this.writer = e, this.name = "KHR_materials_emissive_strength";
    }
    writeMaterial(e, t) {
        if (!e.isMeshStandardMaterial || 1 === e.emissiveIntensity) return;
        let s = this.writer.extensionsUsed, r = {};
        r.emissiveStrength = e.emissiveIntensity, t.extensions = t.extensions || {}, t.extensions[this.name] = r, s[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Ee, "GLTFMaterialsEmissiveStrengthExtension");
var le = Ee, be = class {
    constructor(e){
        this.writer = e, this.name = "EXT_materials_bump";
    }
    writeMaterial(e, t) {
        if (!e.isMeshStandardMaterial || 1 === e.bumpScale && !e.bumpMap) return;
        let s = this.writer, r = s.extensionsUsed, n = {};
        if (e.bumpMap) {
            let t = {
                index: s.processTexture(e.bumpMap),
                texCoord: e.bumpMap.channel
            };
            s.applyTextureTransform(t, e.bumpMap), n.bumpTexture = t;
        }
        n.bumpFactor = e.bumpScale, t.extensions = t.extensions || {}, t.extensions[this.name] = n, r[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(be, "GLTFMaterialsBumpExtension");
var fe = be, Ne = class {
    constructor(e){
        this.writer = e, this.name = "EXT_mesh_gpu_instancing";
    }
    writeNode(e, t) {
        if (!e.isInstancedMesh) return;
        let s = this.writer, r = e, n = new Float32Array(3 * r.count), i = new Float32Array(4 * r.count), a = new Float32Array(3 * r.count), o = new (0, _chunk4XLXKB34Js.V), l = new (0, _chunk4XLXKB34Js.S), c = new (0, _chunk4XLXKB34Js.R), u = new (0, _chunk4XLXKB34Js.S);
        for(let e = 0; e < r.count; e++)r.getMatrixAt(e, o), o.decompose(l, c, u), l.toArray(n, 3 * e), c.toArray(i, 4 * e), u.toArray(a, 3 * e);
        let h = {
            TRANSLATION: s.processAccessor(new (0, _chunk4XLXKB34Js.$)(n, 3)),
            ROTATION: s.processAccessor(new (0, _chunk4XLXKB34Js.$)(i, 4)),
            SCALE: s.processAccessor(new (0, _chunk4XLXKB34Js.$)(a, 3))
        };
        r.instanceColor && (h._COLOR_0 = s.processAccessor(r.instanceColor)), t.extensions = t.extensions || {}, t.extensions[this.name] = {
            attributes: h
        }, s.extensionsUsed[this.name] = !0, s.extensionsRequired[this.name] = !0;
    }
};
(0, _chunkZRT45YCMJs.a)(Ne, "GLTFMeshGpuInstancing");
var he = Ne;
q.Utils = {
    insertKeyframe: function(e, t) {
        let s, r = e.getValueSize(), n = new e.TimeBufferType(e.times.length + 1), i = new e.ValueBufferType(e.values.length + r), a = e.createInterpolant(new e.ValueBufferType(r));
        if (0 === e.times.length) {
            n[0] = t;
            for(let e = 0; e < r; e++)i[e] = 0;
            s = 0;
        } else if (t < e.times[0]) {
            if (Math.abs(e.times[0] - t) < .001) return 0;
            n[0] = t, n.set(e.times, 1), i.set(a.evaluate(t), 0), i.set(e.values, r), s = 0;
        } else if (t > e.times[e.times.length - 1]) {
            if (Math.abs(e.times[e.times.length - 1] - t) < .001) return e.times.length - 1;
            n[n.length - 1] = t, n.set(e.times, 0), i.set(e.values, 0), i.set(a.evaluate(t), e.values.length), s = n.length - 1;
        } else for(let o = 0; o < e.times.length; o++){
            if (Math.abs(e.times[o] - t) < .001) return o;
            if (e.times[o] < t && e.times[o + 1] > t) {
                n.set(e.times.slice(0, o + 1), 0), n[o + 1] = t, n.set(e.times.slice(o + 1), o + 2), i.set(e.values.slice(0, (o + 1) * r), 0), i.set(a.evaluate(t), (o + 1) * r), i.set(e.values.slice((o + 1) * r), (o + 2) * r), s = o + 1;
                break;
            }
        }
        return e.times = n, e.values = i, s;
    },
    mergeMorphTargetTracks: function(e, t) {
        let s = [], r = {}, n = e.tracks;
        for(let e = 0; e < n.length; ++e){
            let i = n[e], a = (0, _chunk4XLXKB34Js.Ma).parseTrackName(i.name), o = (0, _chunk4XLXKB34Js.Ma).findNode(t, a.nodeName);
            if ("morphTargetInfluences" !== a.propertyName || void 0 === a.propertyIndex) {
                s.push(i);
                continue;
            }
            if (i.createInterpolant !== i.InterpolantFactoryMethodDiscrete && i.createInterpolant !== i.InterpolantFactoryMethodLinear) {
                if (i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline) throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
                console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), i = i.clone(), i.setInterpolation((0, _chunk4XLXKB34Js.A));
            }
            let l, c = o.morphTargetInfluences.length, u = o.morphTargetDictionary[a.propertyIndex];
            if (void 0 === u) throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
            if (void 0 === r[o.uuid]) {
                l = i.clone();
                let e = new l.ValueBufferType(c * l.times.length);
                for(let t = 0; t < l.times.length; t++)e[t * c + u] = l.values[t];
                l.name = (a.nodeName || "") + ".morphTargetInfluences", l.values = e, r[o.uuid] = l, s.push(l);
                continue;
            }
            let h = i.createInterpolant(new i.ValueBufferType(1));
            l = r[o.uuid];
            for(let e = 0; e < l.times.length; e++)l.values[e * c + u] = h.evaluate(l.times[e]);
            for(let e = 0; e < i.times.length; e++){
                let t = this.insertKeyframe(l, i.times[e]);
                l.values[t * c + u] = i.values[e];
            }
        }
        return e.tracks = s, e;
    }
};

},{"./chunk-4XLXKB34.js":"aezwX","./chunk-A5C75TI6.js":"1qWho","./chunk-ZRT45YCM.js":"cpJAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bFg0k"], null, "parcelRequire79a8")

//# sourceMappingURL=GLTFExporter-BWOZSB34.440a0719.js.map
