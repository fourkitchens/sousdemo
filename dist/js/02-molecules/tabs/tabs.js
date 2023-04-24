/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./components/02-molecules/tabs/tabs.js ***!
  \**********************************************/
Drupal.behaviors.tabs={attach:function attach(a){function b(a){a!==g&&0<=a&&a<=e.length&&(e[+g].classList.remove("is-active"),e[+a].classList.add("is-active"),f[+g].classList.remove("is-active"),f[+a].classList.add("is-active"),g=a)}function c(a,c){a.addEventListener("click",function(a){a.preventDefault(),b(c)})}var d=a.querySelectorAll(".tabs-sous"),e=a.querySelectorAll(".tab-sous__link"),f=a.querySelectorAll(".tabs-sous__tab"),g=0;d.forEach(function(a){a.classList.remove("no-js")}),e.forEach(function(a,b){c(a,b)})}};
/******/ })()
;
//# sourceMappingURL=tabs.js.map