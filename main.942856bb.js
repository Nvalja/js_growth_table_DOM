parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,a=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){c=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw l}}}}function n(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var t=document.querySelector(".container"),o=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),c=document.querySelector(".remove-column"),i=document.querySelector("tbody");t.addEventListener("click",function(n){if("append-row button"===n.target.className){var r=i.children[0].cloneNode(!0);i.children.length<10&&i.append(r),i.children.length>2&&(l.disabled=!1),i.children.length>=10&&(o.disabled=!0)}if("remove-row button"===n.target.className&&(i.children[0].remove(),i.children.length<10&&(o.disabled=!1),i.children.length<=2&&(l.disabled=!0)),"append-column button"===n.target.className){var t,d=e(i.children);try{for(d.s();!(t=d.n()).done;){var u=t.value,h=u.children[0].cloneNode(!0);u.children.length<10&&u.append(h),u.children.length>2&&(c.disabled=!1),u.children.length>=10&&(a.disabled=!0)}}catch(y){d.e(y)}finally{d.f()}}if("remove-column button"===n.target.className){var f,s=e(i.children);try{for(s.s();!(f=s.n()).done;){var m=f.value;m.children[0].remove(),m.children.length<10&&(a.disabled=!1),m.children.length<=2&&(c.disabled=!0)}}catch(y){s.e(y)}finally{s.f()}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.942856bb.js.map