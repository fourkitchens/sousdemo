/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ./components/03-organisms/site/site-header/site-header.js ***!
  \*****************************************************************/
Drupal.behaviors.siteHeader={attach:function attach(){var a=document.querySelector(".site-header");if(a){var b=document.querySelector(".site-header__main"),c=b.getBoundingClientRect(),d=function(){var d=function(){a.classList.toggle("stuck",window.scrollY>=c.top)};if("IntersectionObserver"in window){var e=new window.IntersectionObserver(d,{root:null,trackVisibility:!0,delay:100,threshold:[1]});e.observe(b)}};window.addEventListener("scroll",function(){d()},{passive:!0})}}};
/******/ })()
;
//# sourceMappingURL=site-header.js.map