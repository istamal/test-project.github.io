!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var o=document.getElementsByClassName("text-block__button--raed-more"),r=document.getElementsByClassName("content_hidden"),c=document.querySelector(".search-form__input"),i=document.querySelector(".popup__input"),s=document.querySelector(".search-form__button"),a=document.querySelector(".popup__search-button"),u=document.querySelector(".side-bar__madal-close-button"),l=document.querySelector(".side-bar__modal--call"),d=document.querySelector(".contacts__phone"),m=document.querySelector(".contacts__message"),f=document.querySelector(".side-bar__modal--feedback"),p=document.querySelector(".side-bar__madal-feedback-close"),_=document.querySelector(".side-bar__burger-menu"),b=document.querySelector(".popup"),y=document.querySelector(".popup__close-icon");if(window.matchMedia("(max-width: 480px)").matches){for(var v=0;v<r.length;v++)r[v].classList.remove("brands__grid","technics__grid","price__menu");new Swiper(".swiper-container",{speed:400,spaceBetween:32,slidesPerView:4,dynamicMainBullets:1,breakpoints:{320:{slidesPerView:1.2,spaceBetween:16},420:{slidesPerView:1.5}},pagination:{el:".swiper-pagination"}})}_.addEventListener("click",function(){b.classList.add("show-modal")}),y.addEventListener("click",function(){b.classList.remove("show-modal")}),u.addEventListener("click",function(){l.classList.remove("show-modal")}),d.addEventListener("click",function(){l.classList.add("show-modal")}),m.addEventListener("click",function(){f.classList.add("show-modal")}),p.addEventListener("click",function(){f.classList.remove("show-modal")}),s.addEventListener("click",function(){c.classList.toggle("show")}),a.addEventListener("click",function(){i.classList.toggle("show")});for(var g=function(e){o[e].addEventListener("click",function(){r[e].classList.toggle("overflow")})},w=0;w<o.length;w++)g(w)},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map