!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequire7bc7=i);var r=i("iU1Pc"),l={formEl:document.querySelector(".form"),delay:document.querySelector("input")};function u(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}l.formEl.addEventListener("submit",(function(){!function(){event.preventDefault();for(var n=+l.formEl.delay.value,o=+l.formEl.step.value,t=+l.formEl.amount.value,i=1;i<=t;i+=1)u(i,n).then((function(n){var o=n.position,t=n.delay;e(r).Notify.failure("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(r).Notify.success("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),n+=o}()}))}();
//# sourceMappingURL=03-promises.b90e1534.js.map