!function(){var t=document.querySelectorAll("button"),e=document.body.style;t[1].disabled=!0,t[0].addEventListener("click",(function(){t[0].disabled=!0,t[1].disabled=!1,setColor=setInterval((function(){e.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t[1].addEventListener("click",(function(){t[0].disabled=!1,t[1].disabled=!0,clearInterval(setColor)}))}();
//# sourceMappingURL=01-color-switcher.5ccf1af8.js.map
