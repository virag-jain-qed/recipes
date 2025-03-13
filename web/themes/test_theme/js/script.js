// // document.addEventListener("DOMContentLoaded", function () {
// //     const slider = document.getElementById("recipe-slider");
// //     const prevButton = document.getElementById("slider-prev");
// //     const nextButton = document.getElementById("slider-next");
  
// //     let scrollAmount = 0;
// //     const scrollStep = slider.clientWidth / 2;
  
// //     nextButton.addEventListener("click", function () {
// //       slider.scrollBy({ left: scrollStep, behavior: "smooth" });
// //     });
  
// //     prevButton.addEventListener("click", function () {
// //       slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
// //     });
// //   });
  
// document.addEventListener('DOMContentLoaded', function () {
//   console.log('recipe carousel js loaded');
  
//   // Initialize carousel when the DOM is ready
//   var carousel = document.querySelector('.recipe-card-carousel');
//   var items = carousel.querySelectorAll('.recipe-card-carousel-item');
//   var prevButton = carousel.parentElement.querySelector('.carousel-prev');
//   var nextButton = carousel.parentElement.querySelector('.carousel-next');

//   // Check if buttons exist
//   if (!prevButton || !nextButton) {
//     console.error('Carousel navigation buttons not found!');
//     return;
//   }

//   var currentIndex = 0;

//   // Function to update the visible items in the carousel
//   function updateCarousel() {
//     // Hide all items
//     items.forEach(function (item) {
//       item.style.display = 'none';
//     });

//     // Show the current item
//     items[currentIndex].style.display = 'block';
//   }

//   // Show the first item on load
//   updateCarousel();

//   // Handle the next button click
//   nextButton.addEventListener('click', function () {
//     currentIndex = (currentIndex + 1) % items.length;
//     updateCarousel();
//   });

//   // Handle the previous button click
//   prevButton.addEventListener('click', function () {
//     currentIndex = (currentIndex - 1 + items.length) % items.length;
//     updateCarousel();
//   });
// });
