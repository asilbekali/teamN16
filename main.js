let images = [
  "images/image-1.jpg",
  "images/image-2.png",
  "images/image-3.jpg",
  "images/image-4.jpg",
  "images/image-5.jpg",
];

let currentIndex = 0;

let sliderImage = document.getElementById("slider-image");
let right_button = document.getElementById("arrow-left");
let left_button = document.getElementById("arrow-right");

function updateSlides() {
  sliderImage.src = images[currentIndex];
}

left_button.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlides();
});

right_button.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlides();
});
