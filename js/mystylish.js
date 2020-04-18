/*
 *  2020 Slava Kittel
 */

'use strict';

var logoAnimation = (function() {
    var logoEl = document.querySelector(".logo-animation");
    var pathEls = document.querySelectorAll(
      ".logo-animation path:not(.icon-curve)"
    );
    var innerWidth = window.innerWidth;
    var maxWidth = 740;
    var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
    var logoTimeline = anime.timeline({
      autoplay: false,
      direction: "alternate",
      loop: false
    });

    logoEl.style.transform = "translateY(50px) scale(" + logoScale + ")";

    for (var i = 0; i < pathEls.length; i++) {
      var el = pathEls[i];
      el.setAttribute("stroke-dashoffset", anime.setDashoffset(el));
    }

    logoTimeline
      .add(
        {
          targets: ".fill.on",
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 5000,
            delay: function(el, i, t) {
              return 100;
            },
            easing: "linear"
          },
          opacity: {
            value: 0,
            duration: 1,
            delay: function(el, i, t) {
              return 5000;
            }
          }
        },
        0
      )
      .add(  // DELETE
        {
          targets: ".fill.in",
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 1000,
            delay: function(el, i, t) {
              return 100 + i * 200;
            },
            easing: "linear"
          },
          opacity: {
            value: 0,
            duration: 1,
            delay: function(el, i, t) {
              return 3500 + i * 80;
            }
          }
        },
        0
      )
      .add( // DELETE
        {
          targets: ".fill.in.speed",
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 500,
            delay: function(el, i, t) {
              return 100 + i * 250;
            },
            easing: "linear"
          },
          opacity: {
            value: 0,
            duration: 1,
            delay: function(el, i, t) {
              return 3400 + i * 80;
            }
          }
        },
        0
      )
      .add( // DELETE
        {
          targets: ".fill.in.slow",
          strokeDashoffset: {
            value: [anime.setDashoffset, 0],
            duration: 2100,
            delay: 1000,
            easing: "linear"
          },
        },
        0
      )
      .add( // DELETE
        {
          targets: ".fill.out",
          strokeDashoffset: [
            {
              value: [anime.setDashoffset, anime.setDashoffset],
              duration: 3400,
            },
            {
              value: [0, anime.setDashoffset],
              duration: 2100,
              delay: function(el, i) {
                return 500 + i * 100;
              },
              easing: "easeInQuart"
            }
          ]
        },
        0
      )
      .add( // DELETE
        {
          targets: ".fill.out.slow",
          strokeDashoffset: [
            {
              value: [anime.setDashoffset, anime.setDashoffset],
              duration: 3900,
            },
            {
              value: [0, anime.setDashoffset],
              duration: 2900,
              delay: 0,
              easing: "easeInSine"
            }
          ]
        },
        0
      )
      .add( // DELETE
        {
          targets: ".line.out",
          strokeDashoffset: {
            value: [0, anime.setDashoffset],
            duration: 1900,
            delay: function(el, i, t) {
              return 7000 + i * 100;
            },
            easing: "easeInSine"
          },
          strokeWidth: {
            value: [0, 0.5],
            delay: function(el, i, t) {
              return 3000 + i * 100;
            },
            duration: 200,
            easing: "linear"
          }
        },
        0
      )

    function init() {
      document.body.classList.add("ready");
      logoTimeline.play();
    }

    return {
      init: init
    };
  })();

  window.onload = function() {
    logoAnimation.init();
  };