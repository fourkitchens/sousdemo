/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ./components/03-organisms/navigation/main/main.js ***!
  \*********************************************************/
Drupal.behaviors.mainNav={attach:function attach(a){var b=a.querySelector("body"),c=a.querySelector("#main-nav"),d=a.querySelector("#main-nav > .main-nav__menu-list-wrapper > .main-nav__menu-list"),e=a.querySelector(".utility_nav__menu-list"),f=a.querySelector(".site-header"),g=a.querySelector("#main-nav > button");if(g){if(e){var h=e.cloneNode(!0);d.after(h)}g.addEventListener("click",function(){f.classList.contains("stuck")||a.querySelector(".site-header + div").scrollIntoView(!0,{behavior:"smooth",block:"end",inline:"nearest"}),b.toggleAttribute("data-body-frozen")})}document.addEventListener("keyup",function(a){"Escape"===a.key&&g&&c.matches("[aria-expanded=\"true\"]")&&g.click()}),window.addEventListener("click",function(a){c&&!c.contains(a.target)&&(Array.from(document.getElementsByClassName("".concat(c.id,"__item"))).forEach(function(a){return a.classList.remove("sub--open")}),Array.prototype.forEach.call(c.querySelectorAll("button, [href], [tabindex]"),function(a){a.setAttribute("aria-expanded","false")}))})}};
/******/ })()
;
//# sourceMappingURL=main.js.map