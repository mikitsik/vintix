function slider() {
  let slider = document.querySelector(".slider"),
    last = slider.lastElementChild,
    first = slider.firstElementChild,
    btn = document.querySelectorAll(".btn");

  slider.insertBefore(last, first);

  btn.forEach(btn => {
    btn.addEventListener("click", movement);
  });
  setInterval(function()
  {
      movement({target:{id:"next"}});
  }, 4000);
  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  }
}
slider();

function sliderGl() {
  let slider = document.querySelector(".slider_gl"),
    last = slider.lastElementChild,
    first = slider.firstElementChild,
    btn = document.querySelectorAll(".btn_gl");

  slider.insertBefore(last, first);

  btn.forEach(btn => {
    btn.addEventListener("click", movement);
  });
  setInterval(function()
  {
      movement({target:{id:"next_gl"}});
  }, 4000);
  function movement(e) {
    slider = document.querySelector(".slider_gl");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active_gl");

    if (e.target.id === "next_gl") {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove("active_gl");
      activeSlide.nextElementSibling.classList.add("active_gl");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active_gl");
      activeSlide.previousElementSibling.classList.add("active_gl");
    }
  }
}
sliderGl();





