const swiper = new Swiper(".swiper", {
  // optional parameters
  direction: "horizontal",
  loop: false,

  // sliding
  slidesPerView: "auto",
  spaceBetween: 16,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // breakpoints
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1120: {
      slidesPerView: 4,
    },
  },
});
