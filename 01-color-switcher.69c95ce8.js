!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyPage:document.querySelector("body")},e=null;function n(){t.bodyPage.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.stopBtn.setAttribute("disabled","true"),t.startBtn.addEventListener("click",(function(){e=setInterval(n,500),t.startBtn.setAttribute("disabled","true"),t.stopBtn.removeAttribute("disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","true")}))}();
//# sourceMappingURL=01-color-switcher.69c95ce8.js.map