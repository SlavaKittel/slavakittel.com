/*
 *  2020 Slava Kittel
 */

"use strict";

let logoAnimation = (function Logo() {
      // var logoEl = document.querySelector(".logo-animation");
      // var pathEls = document.querySelectorAll(
      //   ".logo-animation path:not(.icon-curve)"
      // );
      // var innerWidth = window.innerWidth;
      // var maxWidth = 740;
      // var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
      var logoTimeline = anime.timeline({
        autoplay: false,
        direction: "alternate",
        loop: false,
      });

      // logoEl.style.transform = "translateY(400px) scale(" + logoScale + ")";

      // for (var i = 0; i < pathEls.length; i++) {
      //   var el = pathEls[i];
      //   el.setAttribute("stroke-dashoffset", anime.setDashoffset(el));
      // }

      logoTimeline
        .add(
          {
            targets: ".fill.on",
            strokeDashoffset: {
              value: [anime.setDashoffset, 0],
              duration: 5000,
              delay: function (el, i, t) {
                return 100;
              },
              easing: "linear",
            },
            opacity: {
              value: 0,
              duration: 1,
              delay: function (el, i, t) {
                return 10000;
              },
            },
          },
          0
        )

        .add(
          {
            targets: ".fill.onText",
            strokeDashoffset: {
              value: [anime.setDashoffset, 0],
              duration: 300,
              delay: function (el, i, t) {
                return 100 + i * 300;
              },
              easing: "linear",
            },
            opacity: {
              value: 0,
              duration: 1,
              delay: function (el, i, t) {
                return 10000;
              },
            },
          },
          0
        );

      function init() {
        // document.body.classList.add("ready");
        logoTimeline.play();
      }

      return {
        init: init,
      };
})();

window.onload = function () {
  logoAnimation.init();
};

// setTimeout(function(){logoAnimation.onload()}, 3000);

// document.getElementById("button").onclick = function() {
//     return logoAnimation.init();;
// };
