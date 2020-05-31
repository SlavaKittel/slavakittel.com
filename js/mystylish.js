 // 2020 Slava Kittel

"use strict";

var logoAnimation = (function () {

  var innerWidth = window.innerWidth;
  var maxWidth = 740;
  var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
  var logoTimeline = anime.timeline({
    autoplay: false,
    direction: "alternate",
    loop: false,
  });

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
    logoTimeline.play();
  }
  return {
    init: init,
  };
})();

window.onload = function () {
  logoAnimation.init();
};



//* ----- Stard Cards ----- */

//40%

const roundLogEl40 = document.querySelectorAll("#anime40");

function mouseEnterHandler40(e) {
  anime({
    targets: roundLogEl40,
    duration: 600,
    innerHTML: [0, 40],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl40) {
    item.style.opacity = 1;
    item.style.paddingLeft = 50 + "px";
  }
}

function mouseLeaveHandler40(e) {
  anime({
    targets: roundLogEl40,
    duration: 600,
    innerHTML: [0, 40],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl40) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard40 = document.querySelectorAll(".movePercent40");

for (const item of eventMouseCard40) {
  item.addEventListener("mouseenter", mouseEnterHandler40);
  item.addEventListener("mouseleave", mouseLeaveHandler40);
}

//50%

const roundLogEl50 = document.querySelectorAll("#anime50");

function mouseEnterHandler50(e) {
  anime({
    targets: roundLogEl50,
    duration: 600,
    innerHTML: [0, 50],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl50) {
    item.style.opacity = 1;
    item.style.paddingLeft = 67 + "px";
  }
}

function mouseLeaveHandler50(e) {
  anime({
    targets: roundLogEl50,
    duration: 600,
    innerHTML: [0, 50],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl50) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard50 = document.querySelectorAll(".movePercent50");

for (const item of eventMouseCard50) {
  item.addEventListener("mouseenter", mouseEnterHandler50);
  item.addEventListener("mouseleave", mouseLeaveHandler50);
}

//60%

const roundLogEl60 = document.querySelectorAll("#anime60");

function mouseEnterHandler60(e) {
  anime({
    targets: roundLogEl60,
    duration: 600,
    innerHTML: [0, 60],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl60) {
    item.style.opacity = 1;
    item.style.paddingLeft = 82 + "px";
  }
}

function mouseLeaveHandler60(e) {
  anime({
    targets: roundLogEl60,
    duration: 600,
    innerHTML: [0, 60],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl60) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard60 = document.querySelectorAll(".movePercent60");

for (const item of eventMouseCard60) {
  item.addEventListener("mouseenter", mouseEnterHandler60);
  item.addEventListener("mouseleave", mouseLeaveHandler60);
}

//70%

const roundLogEl70 = document.querySelectorAll("#anime70");

function mouseEnterHandler70(e) {
  anime({
    targets: roundLogEl70,
    duration: 600,
    innerHTML: [0, 70],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl70) {
    item.style.opacity = 1;
    item.style.paddingLeft = 96 + "px";
  }
}

function mouseLeaveHandler70(e) {
  anime({
    targets: roundLogEl70,
    duration: 600,
    innerHTML: [0, 70],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl70) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard70 = document.querySelectorAll(".movePercent70");

for (const item of eventMouseCard70) {
  item.addEventListener("mouseenter", mouseEnterHandler70);
  item.addEventListener("mouseleave", mouseLeaveHandler70);
}

//90%

const roundLogEl90 = document.querySelectorAll("#anime90");

function mouseEnterHandler90(e) {
  anime({
    targets: roundLogEl90,
    duration: 600,
    innerHTML: [0, 90],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl90) {
    item.style.opacity = 1;
    item.style.paddingLeft = 119 + "px";
  }
}

function mouseLeaveHandler90(e) {
  anime({
    targets: roundLogEl90,
    duration: 600,
    innerHTML: [0, 90],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl90) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard90 = document.querySelectorAll(".movePercent90");

for (const item of eventMouseCard90) {
  item.addEventListener("mouseenter", mouseEnterHandler90);
  item.addEventListener("mouseleave", mouseLeaveHandler90);
}

//100%

const roundLogEl100 = document.querySelectorAll("#anime100");

function mouseEnterHandler100(e) {
  anime({
    targets: roundLogEl100,
    duration: 600,
    innerHTML: [0, 100],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl100) {
    item.style.opacity = 1;
    item.style.paddingLeft = 110 + "px";
  }
}

function mouseLeaveHandler100(e) {
  anime({
    targets: roundLogEl100,
    duration: 600,
    innerHTML: [0, 100],
    easing: "linear",
    round: 1,
  });
  for (const item of roundLogEl100) {
    item.style.paddingLeft = 0 + "px";
    item.style.opacity = 0;
  }
}

const eventMouseCard100 = document.querySelectorAll(".movePercent100");

for (const item of eventMouseCard100) {
  item.addEventListener("mouseenter", mouseEnterHandler100);
  item.addEventListener("mouseleave", mouseLeaveHandler100);
}

// <!-- /* ----- Start Servises Card CLONE ----- */ -->

// Vanilla JS

let divClone1 = document.getElementById("cardCloneGet1"),
  clone1 = divClone1.cloneNode(true); // true means clone all childNodes and all event handlers
clone1.id = "cardClone1";
document.getElementById("cardClone1").appendChild(clone1);

let divClone2 = document.getElementById("cardCloneGet2"),
  clone2 = divClone2.cloneNode(true);
clone2.id = "cardClone2";
document.getElementById("cardClone2").appendChild(clone2);

let divClone3 = document.getElementById("cardCloneGet3"),
  clone3 = divClone3.cloneNode(true);
clone3.id = "cardClone3";
document.getElementById("cardClone3").appendChild(clone3);

let divClone4 = document.getElementById("cardCloneGet4"),
  clone4 = divClone4.cloneNode(true);
clone4.id = "cardClone4";
document.getElementById("cardClone4").appendChild(clone4);

// JQeury

// $('#cardCloneGet40').clone(true).appendTo('#cardClone40')

// <!-- /* ----- End Servises Card CLONE ----- */ -->

//* ----- End Cards ----- */ -->



//* ----- Start Gooey Effect ----- */ -->

// Start requestAnimationFrame

function animate(options) {
  var start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    var timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    var progress = options.timing(timeFraction);

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

// End requestAnimationFrame

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function bounce(timeFraction) {
  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return (
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      );
    }
  }
}

let bounceEaseOut = makeEaseOut(bounce);

contactbutton.onclick = function () {
  animate({
    duration: 1500,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldownone.style.top = progress * 120 + "px";
    },
  });
  animate({
    duration: 1700,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldowntwo.style.top = progress * 120 + "px";
    },
  });
  animate({
    duration: 1550,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldownthree.style.top = progress * 120 + "px";
    },
  });
  animate({
    duration: 1600,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldownfour.style.top = progress * 120 + "px";
    },
  });
};

contactmail.onmouseenter = function () {
  falldownfive.style.marginTop = 0 + "px"; // if you want don't save value 80px on next steps
  animate({
    delay: 9000,
    duration: 1500,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldownfive.style.top = progress * 80 + "px";
    },
  });
  falldownfive.style.opacity = 1;
};

contactmail.onmouseleave = function () {
  falldownfive.style.marginTop = 80 + "px";
  animate({
    duration: 1500,
    timing: bounceEaseOut,
    draw: function (progress) {
      falldownfive.style.top = progress * -80 + "px";
    },
  });
  falldownfive.style.opacity = 0;
};

contactmail.onclick = function () {
  // document.getElementById("falldownfive").innerHTML =
  //   "Yeah! You saved email to clipboard";
  let x = document.getElementById("CopedEmailText").innerText;
  document.getElementById("falldownfive").innerHTML = x;
  falldownfive.style.backgroundColor = "rgb(56, 185, 185)";
};

contactmail.onmousedown = function () {
  falldownfive.style.transform = "scale(0.95)";
};

contactmail.onmouseup = function () {
  falldownfive.style.transform = "scale(1)";
};

// Disable default action (opening your email client. yuk.)
$("a[href^=mailto]").click(function () {
  return false;
});

// On click, get href and remove 'mailto:'
// Store email address in a variable.
let mailto = $("#mailto");

mailto.click(function () {
  let href = $(this).attr("href");
  let email = href.replace("mailto:", "");
  copyToClipboard(email);
  console.log("copy email");
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
  let dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("value", text);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

//* ----- End Gooey Effect ----- */ -->
