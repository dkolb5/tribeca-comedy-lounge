!function(e){function t(t){for(var a,l,r=t[0],s=t[1],c=t[2],u=0,m=[];u<r.length;u++)l=r[u],o[l]&&m.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);m.length;)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={2:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var r=window.shopifySlateJsonp=window.shopifySlateJsonp||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;i.push([59,0]),n()}({144:function(e,t){},59:function(e,t,n){"use strict";n(60),n(61),n(62),n(63),n(4),n(64),n(66),n(144);var a=n(22),o=n(67);n(69),(0,a.focusHash)(),(0,a.bindInPageLinks)(),(0,o.cookiesEnabled)()&&(document.documentElement.className=document.documentElement.className.replace("supports-no-cookies","supports-cookies"))},66:function(e,t,n){},69:function(e,t,n){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(n(70)),o=document.getElementById("bws-header");window.addEventListener("scroll",function(){var e=window.pageYOffset;e>100?o.classList.add("sticky"):e<=99&&o.classList.remove("sticky")});var i=document.querySelectorAll(".schedule-list [class^=col-");function l(e){var t=event.target.id;Array.from(event.target.parentElement.childNodes).filter(function(e){return e.id!==t&&void 0!=e.classList}).forEach(function(e){e.classList.add("non-active")})}function r(e){i.forEach(function(e){e.classList.contains("non-active")&&e.classList.remove("non-active")})}i.forEach(function(e){e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",r)});for(var s=new Array,c=!1,d={},u={},m=null,p=document.querySelectorAll(".subway-list a"),f=document.getElementById("subway-station-copy"),g=function(e){p[e].addEventListener("click",function(t){if(t.preventDefault(),!t.target.classList.contains("active")){var n=t.target.dataset.text;f.classList.add("change-text"),p.forEach(function(e){e.classList.remove("active")}),t.target.classList.add("active"),setTimeout(function(){f.textContent=n,f.classList.remove("change-text")},400),s.forEach(function(e){e.classList.add("hide-marker"),e.parentElement.style.opacity+=0}),s[e].style.transition="400ms all cubic-bezier(0.255, 0.195, 0.135, 0.99)",s[e].parentElement.style.opacity+=1,s[e].classList.remove("hide-marker"),document.getElementById("subway-map").querySelectorAll("button.gm-ui-hover-effect").forEach(function(e){e.click()})}})},v=0;v<p.length;v++)g(v);function y(e){e.preventDefault();var t=e.target.nextElementSibling.querySelector(".inner-faq-content").clientHeight,n=e.target.nextElementSibling,a=e.target.parentElement.querySelector(".line");e.target.classList.contains("active")?(e.target.parentElement.classList.remove("active"),e.target.classList.remove("active"),gsap.to(n,{duration:.7,ease:"Quint.easeInOut",height:0}),gsap.to(a,{duration:.5,ease:"Quint.easeInOut",scaleY:0,onComplete:function(){n.setAttribute("style","")}})):(e.target.parentElement.classList.add("active"),e.target.classList.add("active"),gsap.to(n,{duration:.7,ease:"Quint.easeInOut",height:t,onComplete:function(){n.style.height="auto"}}),gsap.to(a,{duration:.4,delay:.2,ease:"Quint.easeInOut",scaleY:1}))}function h(e){e.preventDefault();var t=document.getElementById("bws-header"),n=e.target.getAttribute("href"),a=document.getElementById(n);a=parseInt(a.offsetTop)-parseInt(t.clientHeight),gsap.to(window,{duration:1,ease:"Quint.easeInOut",delay:.2,scrollTo:a})}function b(e){for(var t=null,n=0;n<e.length;n++)e[n].classList.contains("active")&&(t=n);return t}function w(e,t,n){var a,o=document.querySelectorAll(e+" .lSPager li");a=b(o),t.goToSlide(a+1),a<=o.length-2&&(t.goToSlide(a+1),event.target.classList.remove("disabled"),n.classList.remove("disabled")),a==o.length-2&&event.target.classList.add("disabled")}function S(e,t,n){var a;(a=b(document.querySelectorAll(e+" .lSPager li")))>=1&&(t.goToSlide(a-1),event.target.classList.remove("disabled"),n.classList.remove("disabled")),1==a&&event.target.classList.add("disabled")}function L(e,t,n){var a=document.querySelectorAll(e+" .lSPager li"),o=b(a);0==o?n.classList.add("disabled"):n.classList.remove("disabled"),o==a.length-1?t.classList.add("disabled"):t.classList.remove("disabled")}function T(e,t){setTimeout(function(){for(var n=Array.from(e[0].children),a=0;a<n.length;a++)n[a]=n[a].clientHeight;var o=n.sort();t[0].style.minHeight=o[o.length-1]+"px"},400)}if((document.body.classList.contains("template-index")||document.body.classList.contains("template-page")&&void 0!=document.getElementById("contact"))&&setTimeout(function(){new Promise(function(e,t){!function(e,t,n,o){var i,l=new google.maps.Map(document.getElementById("subway-map"),(i={zoom:15,center:{lat:40.7143614,lng:-74.00774990000001},zoomControl:!1,mapTypeControl:!1},(0,a.default)(i,"mapTypeControl",!1),(0,a.default)(i,"scaleControl",!1),(0,a.default)(i,"streetViewControl",!1),(0,a.default)(i,"rotateControl",!1),(0,a.default)(i,"fullscreenControl",!1),(0,a.default)(i,"mapTypeControl",!1),(0,a.default)(i,"styles",[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#535353"},{saturation:-10},{lightness:-20}]},{featureType:"landscape.man_made",elementType:"labels.text",stylers:[{color:"#8a8a8a"},{lightness:20}]},{featureType:"landscape.man_made",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:25}]},{featureType:"landscape.natural",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:15}]},{featureType:"landscape.natural.landcover",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:30}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:25}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:15}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#494949"},{lightness:-20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"},{lightness:-5}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"},{lightness:-35}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"},{lightness:25}]}]),i));d=l,l.__gm.Ma.style.transition="none",l.__gm.Ma.style.opacity=0;var r={tcl:{icon:"https://cdn.shopify.com/s/files/1/0307/9746/3685/files/icon-map-pin-small.svg?2336"},regular:{icon:"https://cdn.shopify.com/s/files/1/0307/9746/3685/files/currrent-map-pin.svg?641"},path:{icon:"https://cdn.shopify.com/s/files/1/0307/9746/3685/files/currrent-map-pin.svg?641"}},s=[{title:"Tribeca Comedy Lounge",position:new google.maps.LatLng(40.7143151,-74.0077659),type:"tcl",infoWindow:'<div class="map_window">\n          <p>Tribeca Comedy Lounge</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/Tribeca+Comedy+Lounge/@40.7143191,-74.0099546,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a1f4b16e1f7:0x21506053bef0645a!8m2!3d40.7143151!4d-74.0077659" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"World Trade Center E",position:new google.maps.LatLng(40.7126452,-74.009898),type:"regular",infoWindow:'<div class="map_window">\n          <p>World Trade - E</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/World+Trade+Center+Station/@40.7127692,-74.0098616,17.71z/data=!4m12!1m6!3m5!1s0x0:0x7f33d7e5a45131b9!2sWorld+Trade+Center+Station!8m2!3d40.7126452!4d-74.009898!3m4!1s0x0:0x7f33d7e5a45131b9!8m2!3d40.7126452!4d-74.009898" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"Chambers Street Station A C",position:new google.maps.LatLng(40.714305,-74.0084412),type:"regular",infoWindow:'<div class="map_window">\n          <p>Chambers St - A,C</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/Chambers+Street+Station/@40.7155174,-74.0114114,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25a1f204ccf73:0x1ab2757eb7b2e169!8m2!3d40.7155134!4d-74.0092227" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"Fulton Street Station 2 3",position:new google.maps.LatLng(40.7095648,-74.0063833),type:"regular",infoWindow:'<div class="map_window">\n          <p>Fulton Station - 2,3</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/Fulton+Street+Station/@40.7091998,-74.0079743,17.47z/data=!4m12!1m6!3m5!1s0x0:0xd3127d75ae72e8fc!2sFulton+Center!8m2!3d40.709373!4d-74.0083258!3m4!1s0x89c25a1807690bc1:0x4222d970a6f11740!8m2!3d40.7095648!4d-74.0063833" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"Brooklyn Bridge 4 5 6",position:new google.maps.LatLng(40.7128214,-74.0042831),type:"regular",infoWindow:'<div class="map_window">\n          <p>Brooklyn Bridge - 4,5,6</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/Brooklyn+Bridge+-+City+Hall+Subway+Station/@40.7122151,-74.0052509,16.96z/data=!4m5!3m4!1s0x89c25a222fcb050d:0x8300747c6c6fec23!8m2!3d40.7128214!4d-74.0042831" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"Chambers Street J Z",position:new google.maps.LatLng(40.7131116,-74.0040464),type:"regular",infoWindow:'<div class="map_window">\n          <p>Chambers St - J,Z</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/Chambers+St/@40.7129431,-74.0088383,17.16z/data=!4m8!1m2!2m1!1schamber+j+z!3m4!1s0x0:0x4e8cb404e99345c2!8m2!3d40.7131116!4d-74.0040464" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"City Hall R",position:new google.maps.LatLng(40.7135245,-74.0067101),type:"regular",infoWindow:'<div class="map_window">\n          <p>City Hall - R</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/City+Hall+Station/@40.7135285,-74.0088988,17z/data=!4m12!1m6!3m5!1s0x89c25a18a8f1e8a7:0x354a2435f5095fd1!2sCity+Hall+Station!8m2!3d40.7135245!4d-74.0067101!3m4!1s0x89c25a18a8f1e8a7:0x354a2435f5095fd1!8m2!3d40.7135245!4d-74.0067101" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'},{title:"World Trade Center Path",position:new google.maps.LatLng(40.7115741,-74.0114486),type:"path",infoWindow:'<div class="map_window">\n          <p>World Trade - Path</p>\n          <div class="bws-button-wrapper">\n            <a href="https://www.google.com/maps/place/World+Trade+Center/@40.7126492,-74.0120867,17z/data=!4m12!1m6!3m5!1s0x89c25a191cac2c15:0x7f33d7e5a45131b9!2sWorld+Trade+Center+Station!8m2!3d40.7126452!4d-74.009898!3m4!1s0x89c25a197b9fec67:0xdf170c5ccb9d0b00!8m2!3d40.7115741!4d-74.0114486" class="red" target="_blank">Get Directions</a>\n          </div>\n        </div>'}];u=s;for(var p=0;p<s.length;p++){m=new google.maps.Marker({position:s[p].position,icon:r[s[p].type].icon,map:l});var f=s[p].infoWindow,g=new google.maps.InfoWindow;google.maps.event.addListener(m,"click",function(e,t,n){return function(){n.setOptions({content:t,maxWidth:300}),n.open(l,e)}}(m,f,g)),c=!0}}(),c&&e()}).then(function(){window.outerWidth>=769&&setTimeout(function(){var e=Array.from(document.querySelectorAll('#subway-map img[src*="currrent-map-pin.svg?641"]'));e.forEach(function(e,t){e.setAttribute("id",t),e.classList.add("hide-marker"),e.setAttribute("data-window",u[t]),s.push(e)}),e.filter(function(e){return 0==e.id})[0].classList.remove("hide-marker"),document.querySelectorAll('#subway-map img[src*="tcl_pin_2.svg?641"]')[1].setAttribute("data-window",u[0].infoWindow)},800)}).then(function(){setTimeout(function(){d.__gm.Ma.style.transition="400ms all cubic-bezier(0.255, 0.195, 0.135, 0.99)",d.__gm.Ma.style.opacity=1},600)})},800),document.querySelectorAll(".faq-list a").forEach(function(e){e.addEventListener("click",y)}),document.querySelectorAll(".anchor-scroll").forEach(function(e){e.addEventListener("click",h)}),$(document).ready(function(){if(document.body.classList.contains("template-index")){var e=document.querySelector("#home-section-eight .next"),t=document.querySelector("#home-section-eight .prev"),n=null;n=$("#home-slider-one").lightSlider({item:3,autoWidth:!1,slideMove:3,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1e3,auto:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[{breakpoint:768,settings:{item:2,slideMove:1}},{breakpoint:576,settings:{item:1,slideMove:1}}],onBeforeStart:function(e){},onSliderLoad:function(e){T(e,n)},onBeforeSlide:function(e){},onAfterSlide:function(n){L("#home-section-eight",e,t)},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}}),e.addEventListener("click",function(e){w("#home-section-eight",n,t)}),t.addEventListener("click",function(t){S("#home-section-eight",n,e)});var a=document.querySelector("#home-section-two .next"),o=document.querySelector("#home-section-two .prev"),i=$("#home-events-section-two-mobile").lightSlider({item:1,autoWidth:!1,slideMove:1,slideMargin:50,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1e3,auto:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){T(e,i)},onBeforeSlide:function(e){},onAfterSlide:function(e){L("#home-section-two",a,o)},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}});a.addEventListener("click",function(e){w("#home-section-two",i,o)}),o.addEventListener("click",function(e){S("#home-section-two",i,a)});var l=$("#home-comedians-mobile-slider").lightSlider({item:1,autoWidth:!1,slideMove:1,slideMargin:12,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1e3,auto:!1,loop:!0,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,vThumbWidth:100,thumbItem:10,pager:!1,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){T(e,l)},onBeforeSlide:function(e){},onAfterSlide:function(e){L("#home-section-six")},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}})}if(document.body.classList.contains("template-product")){var r=document.querySelector("#product-collection .next"),s=document.querySelector("#product-collection .prev"),c=null;c=$("#mobile-related-events").lightSlider({item:1,autoWidth:!1,slideMove:1,slideMargin:50,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1e3,auto:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){T(e,c)},onBeforeSlide:function(e){},onAfterSlide:function(e){L("#product-collection",r,s)},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}}),r.addEventListener("click",function(e){w("#product-collection",c,s)}),s.addEventListener("click",function(e){S("#product-collection",c,r)})}if(document.body.classList.contains("template-article"))var d=$("#mobile-related-comedians").lightSlider({item:1,autoWidth:!1,slideMove:1,slideMargin:12,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1e3,auto:!1,loop:!0,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,vThumbWidth:100,thumbItem:10,pager:!1,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){T(e,d)},onBeforeSlide:function(e){},onAfterSlide:function(e){L("#comedians-related")},onBeforeNextSlide:function(e){},onBeforePrevSlide:function(e){}})}),void 0!=document.getElementById("contact")||document.getElementById("reservations")){var x=function(e){e.target.value.length>0?(e.target.classList.add("teeee"),e.target.parentElement.childNodes[5].classList.add("input-filled")):e.target.parentElement.childNodes[5].classList.remove("input-filled")},E=document.querySelectorAll(".form-wrapper input"),k=document.querySelectorAll(".form-wrapper textarea"),C=document.querySelectorAll(".form-wrapper select");E.forEach(function(e){e.addEventListener("input",function(e){console.log(e.target,e.target.type,e.target.value,e.target.value.length),"checkbox"==e.target.type?e.target.attributes.length<=2?(e.target.setAttribute("checked","checked"),e.target.parentElement.classList.add("input-filled")):(e.target.removeAttribute("checked"),e.target.parentElement.classList.remove("input-filled")):"date"==e.target.type?e.target.value.length>0&&"checkbox"!=e.target.type?(e.target.nextElementSibling.classList.add("input-filled"),e.target.classList.add("input-filled")):(e.target.nextElementSibling.classList.remove("input-filled"),e.target.classList.remove("input-filled")):e.target.value.length>0&&"checkbox"!=e.target.type?e.target.nextElementSibling.classList.add("input-filled"):e.target.nextElementSibling.classList.remove("input-filled")}),e.addEventListener("focusin",function(e){e.target.parentElement.classList.add("active-input")}),e.addEventListener("focusout",function(e){e.target.parentElement.classList.remove("active-input")})}),k.forEach(function(e){e.addEventListener("focusin",function(e){var t=e.target.parentElement.querySelector(".right-corner"),n=e.target.parentElement.querySelector(".left-corner");t.classList.add("active"),n.classList.add("active"),e.target.parentElement.childNodes[5].classList.add("input-filled")})}),k.forEach(function(e){e.addEventListener("focusout",function(e){var t=e.target.parentElement.querySelector(".right-corner"),n=e.target.parentElement.querySelector(".left-corner");t.classList.remove("active"),n.classList.remove("active"),x(e)})}),k.forEach(function(e){e.addEventListener("input",x)}),C.forEach(function(e){e.addEventListener("click",function(e){e.target.nextElementSibling.classList.add("input-filled")})})}var A=document.querySelector(".js-hamburger"),_=document.querySelector(".js-nav-dropdown"),M=document.querySelector("html"),q=document.querySelector(".js-m-nav-close"),B=_.querySelectorAll(".m-nav-item"),P=null;A.addEventListener("click",function(e){e.preventDefault(),document.body.classList.add("oh"),M.classList.add("oh"),_.classList.add("active"),A.classList.add("active"),setTimeout(function(){var e=.08;B.forEach(function(t){gsap.to(t,{duration:.08,opacity:1,delay:e,ease:"Quint.easeInOut",x:0}),e+=.08})},200),P=function(e){for(var t=new Array,n=e.length-1;n>=0;n--)t.push(e[n]);return t}(B)}),q.addEventListener("click",function(e){e.preventDefault();var t=.04,n=(P.length-1)*t*1e3;n+=200,P.forEach(function(e){gsap.to(e,{duration:.04,opacity:0,delay:t,ease:"Quint.easeInOut",x:-20}),t+=.04}),setTimeout(function(){M.classList.remove("oh"),document.body.classList.remove("oh"),_.classList.remove("active"),A.classList.remove("active")},n)}),document.body.classList.contains("template-cart")&&(document.querySelectorAll(".product li .control .plus"),document.querySelectorAll(".product li .control .minus"),document.querySelectorAll(".product li .control").forEach(function(e){e.addEventListener("click",function(t){if(t.preventDefault(),t.target.classList.contains("control-plus"))if(Number(e.textContent)>=0){var n=Number(e.textContent);n+=1,e.childNodes[3].innerText=n,e.childNodes[7].childNodes[1].value=n}else e.childNodes[3].innerText=0,e.childNodes[7].childNodes[1].value=0;if(t.target.classList.contains("control-minus"))if(0!=Number(e.textContent)){var a=Number(e.textContent);a-=1,e.childNodes[3].innerText=a,e.childNodes[7].childNodes[1].value=a}else e.childNodes[3].innerText=0,e.childNodes[7].childNodes[1].value=0})})),(navigator.userAgent.includes("iPad")||navigator.userAgent.includes("iPhone"))&&document.getElementById("cart-dd").querySelector(".flex2 .button-wrapper").classList.add("adjust-form-ios")}});