/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./components/00-base/colors/colors.js ***!
  \*********************************************/
Drupal.behaviors.displayColorDefinitions={attach:function attach(){function a(a){return a.replace(/(^['"])|(['"]$)/g,"")}var b=document.getElementsByClassName("cl-colors__definition");b&&Array.prototype.forEach.call(b,function(b){var c=window.getComputedStyle(b,"::before"),d=window.getComputedStyle(b,"::after"),e=c.getPropertyValue("content"),f=d.getPropertyValue("content"),g=document.createElement("span"),h=document.createElement("span");g.classList.add("cl-colors__definition_item"),h.classList.add("cl-colors__definition_item"),g.innerHTML=a(e),h.innerHTML=a(f),b.appendChild(g),b.appendChild(h)})}};
/******/ })()
;
//# sourceMappingURL=colors.js.map