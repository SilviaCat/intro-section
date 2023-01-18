const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body");
const menu = document.querySelector(".menu-start");


const features = document.getElementById("features");
const company = document.getElementById("company");


/* const featuresList = document.querySelector(".dropdown-features");
const companyList = document.querySelector(".dropdown-company"); */

hamburger.addEventListener('click', () => {
  body.classList.toggle("overlay");
  hamburger.classList.toggle("close");
  menu.classList.toggle("open");

  if (body.classList.contains('FadeIn')) {
    body.classList.remove("FadeIn");
   /*  body.classList.add("FadeOut"); */
    menu.classList.add("FadeOut");
  } else {
    body.classList.add("FadeIn");
  /*   body.classList.remove("FadeOut"); */
    menu.classList.remove("FadeOut");
  }

})



jQuery(document).ready(function ($) {
  var alterClass = function () {
    var ww = document.body.clientWidth;
    if (ww >= 992) {
      if (hamburger.classList.contains('close')) {
        hamburger.classList.remove("close");
        menu.classList.remove("open");
        body.classList.remove("overlay");
        features.classList.remove("openMenu");
        company.classList.remove("openMenu");
      }
    } else {
      features.addEventListener('click', () => {
        features.classList.toggle("openMenu");
      })
      company.addEventListener('click', () => {
        company.classList.toggle("openMenu");
        console.log("ok")
      })
    }
  };
  $(window).resize(function () {
    alterClass();
  });
  alterClass();
});




/* var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton"); */
hamburger.addEventListener("click", function () {
  if (div.classList.contains('FadeIn')) {
    div.classList.remove("FadeIn");
    div.classList.add("FadeOut");
  } else {
    div.classList.add("FadeIn");
    div.classList.remove("FadeOut");
  }
});


