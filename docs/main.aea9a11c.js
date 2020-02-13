parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"nUeE":[function(require,module,exports) {
module.exports="kyiv-1.4209b6fd.jpg";
},{}],"lgr5":[function(require,module,exports) {
module.exports="kyiv-2.8c24a9af.jpg";
},{}],"tguL":[function(require,module,exports) {
module.exports="gg-1.085b6fa0.jpg";
},{}],"BQPg":[function(require,module,exports) {
module.exports="gg-2.afe2d6bc.jpg";
},{}],"quf4":[function(require,module,exports) {
module.exports="gg-3.1b32ee79.jpg";
},{}],"iThO":[function(require,module,exports) {
module.exports="kpl-1.8681511d.jpg";
},{}],"fJCV":[function(require,module,exports) {
module.exports="p-1.ae78aba4.jpg";
},{}],"BHIv":[function(require,module,exports) {
module.exports="p-2.434d0cd5.jpg";
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=u(require("./static/kyiv-1.jpg")),t=u(require("./static/kyiv-2.jpg")),a=u(require("./static/gg-1.jpg")),n=u(require("./static/gg-2.jpg")),c=u(require("./static/gg-3.jpg")),r=u(require("./static/kpl-1.jpg")),i=u(require("./static/p-1.jpg")),d=u(require("./static/p-2.jpg"));function u(e){return e&&e.__esModule?e:{default:e}}var l=[e.default,r.default,a.default,n.default,c.default,i.default,d.default,t.default],p=document.createElement("div");p.id="container",p.className="container";var o=document.createElement("div");o.id="slide-wrapper",o.className="slide-wrapper";var s=document.createElement("div");s.id="navbutton-wrapper",s.className="navbutton-wrapper";var v=document.createElement("div");v.id="button-prev",v.className="navbutton navbutton-prev";var m=document.createElement("div");m.id="button-next",m.className="navbutton navbutton-next",s.appendChild(v),s.appendChild(m);var g=l.map(function(e,t){var a=document.createElement("span");return a.id="slide-".concat(t),a.className="slide slide-".concat(t),a.style="background-image: url(".concat(e,")"),a});g.forEach(function(e){return o.appendChild(e)}),p.appendChild(o),p.appendChild(s),document.body.appendChild(p);var f=0,b=function(){var e="width: ".concat(100*g.length,"vw;"),t="left: -".concat(100*f,"vw;"),a="".concat(e," ").concat(t);o.style=a};m.addEventListener("click",function(){f<g.length-1&&(f+=1,b())}),v.addEventListener("click",function(){f>0&&(f-=1,b())}),b();
},{"./static/kyiv-1.jpg":"nUeE","./static/kyiv-2.jpg":"lgr5","./static/gg-1.jpg":"tguL","./static/gg-2.jpg":"BQPg","./static/gg-3.jpg":"quf4","./static/kpl-1.jpg":"iThO","./static/p-1.jpg":"fJCV","./static/p-2.jpg":"BHIv"}]},{},["epB2"], null)
//# sourceMappingURL=main.aea9a11c.js.map