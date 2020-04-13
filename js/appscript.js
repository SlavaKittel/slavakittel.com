const toggleables = document.querySelectorAll(".toggleable");
// Ко всем html строкам с классам '.toggleable' буду присвоены
// дальнейшие действия

const toggleFinder = (el) => {
    //console.log(el);
    return el.classList ? el.classList.contains("toggleable") : false;
};

const toggleFinder2 = function (el) {
    //console.log(this);
    return el.classList.contains("toggleable");
};

const toggleIcon = function (e) {
//   const icon = e.composedPath().find(function (el) {
//     return el.classList.contains("toggleable");
//   });

  const icon = e.composedPath().find(toggleFinder);

  if (icon.classList.contains("toggled")) {
    icon.classList.remove("toggled");
  } else {
    icon.classList.add("toggled");
  }
};

toggleables.forEach(function (toggleable) {
  return toggleable.addEventListener("click", toggleIcon);
});

function onSidebarItemClick(e) {
    $('.toggleable').removeClass("toggled");
    // var x = document.getElementsByClassName("toggleable");
    // x.classList.remove("toggled");
}