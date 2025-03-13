document.addEventListener('DOMContentLoaded', function () {
  console.log("al;dkfj;lakdjf;")
  var carousel = document.querySelector('.recipe-card-carousel');
  var items = carousel.querySelectorAll('.recipe-card-carousel-item');
  var prevButton = carousel.parentElement.querySelector('.carousel-prev');
  var nextButton = carousel.parentElement.querySelector('.carousel-next');

  var currentIndex = 0;

  // Function to update the carousel visibility
  function updateCarousel() {
    items.forEach(function(item, index) {
      if (index === currentIndex) {
        item.style.display = 'block';  // Show the current item
      } else {
        item.style.display = 'none';  // Hide other items
      }
    });
  }

  // Show the first item on load
  updateCarousel();

  // Handle the next button click
  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  // Handle the previous button click
  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });
});
