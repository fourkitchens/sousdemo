/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************************************!*\
  !*** ./components/03-organisms/navigation/pager/pager.js ***!
  \***********************************************************/
Drupal.behaviors.pager={attach:function attach(a){var b=a.querySelectorAll(".pager-nav");b.forEach(function(a){var b=a.querySelectorAll(".pager-nav__item");b.forEach(function(a){var b=a.firstElementChild,c="Page ".concat(b.textContent);b.getAttribute("aria-label")||b.setAttribute("aria-label",c),"..."===b.textContent&&b.setAttribute("aria-label","More Pages")})})}};
/******/ })()
;
//# sourceMappingURL=pager.js.map