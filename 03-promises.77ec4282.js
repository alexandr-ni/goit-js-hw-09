var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=i);var n=i("iQIUW");n.Notify.init({useIcon:!1});const r=document.querySelectorAll("input"),l=document.querySelector(".form"),u=r[2],d=r[0],s=r[1];let a=0;function f(e,o){return new Promise(((t,i)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault();let o=Number(d.value);const t=Number(s.value);for(let e=1;e<=u.value;e+=1){if(t<0||o<0||u.value<=0)return a=1,void n.Notify.failure("❌ Rejected promise");f(e,o).then((({position:e,delay:o})=>{n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),o+=t,a+=1}}));
//# sourceMappingURL=03-promises.77ec4282.js.map
