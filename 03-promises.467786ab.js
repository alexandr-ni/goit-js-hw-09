var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i);var r=i("iQIUW");r.Notify.init({useIcon:!1});const o=document.querySelectorAll("input"),l=document.querySelector("button");let u=1;const c=o[2],d=o[0],s=o[1];l.addEventListener("click",(function e(t){t.preventDefault(),l.removeEventListener("click",e);let n=Number(d.value),i=Number(s.value);setTimeout((function t(){if(Math.random()>.3?(r.Notify.success(`✅ Fulfilled promise ${u} in ${n}ms`),u+=1,n+=i):(r.Notify.failure(`❌ Rejected promise ${u} in ${n}ms`),u+=1,n+=i),u<=Number(c.value)&&setTimeout(t,n),u>Number(c.value))return u=1,l.addEventListener("click",e)}),n)}));
//# sourceMappingURL=03-promises.467786ab.js.map
