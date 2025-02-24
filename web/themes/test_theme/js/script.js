document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("recipe-slider");
    const prevButton = document.getElementById("slider-prev");
    const nextButton = document.getElementById("slider-next");
  
    let scrollAmount = 0;
    const scrollStep = slider.clientWidth / 2;
  
    nextButton.addEventListener("click", function () {
      slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    });
  
    prevButton.addEventListener("click", function () {
      slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
  });
  