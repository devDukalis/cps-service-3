/* INITIALIZE SWIPER ONLY ON MOBILE DEVICES */
let swiper;

function isMobile() {
  let screenWidth = window.innerWidth;
  return screenWidth < 768;
}

function initSwiperMobile() {
  if (isMobile()) {
    // Initialize swiper only if it wasn't initialized yet
    if (!swiper) {
      swiper = new Swiper(".swiper", {
        // optional parameters
        direction: "horizontal",
        loop: false,

        // sliding
        slidesPerView: "auto",
        spaceBetween: 16, // Set default space between slides

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
      });
    }
  } else {
    // Destroy swiper if it exists
    if (swiper) {
      swiper.destroy();
      swiper = null; // Reset swiper
    }
  }
}

// Init swiper on page load
initSwiperMobile();

// Add event listener for window resize
window.addEventListener("resize", initSwiperMobile);
