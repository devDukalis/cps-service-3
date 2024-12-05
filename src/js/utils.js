/* TOGGLE SWIPER PAGINATION VISIBILITY */
function toggleSwiperPagination() {
  const pagination = document.getElementById("swiper-pagination-block");

  if (window.innerWidth >= 768) {
    pagination.style.display = "none"; // Hide pagination
  } else {
    pagination.style.display = ""; // Show pagination
  }
}

// Initial check
toggleSwiperPagination();

// Add event listener for window resize
window.addEventListener("resize", toggleSwiperPagination);

/* DISPLAY SWIPER SLIDES TOGGLE BUTTON */
function toggleSwiperSlidesBtn() {
  const toggleSwiperSlidesBtnBlock = document.getElementById(
    "toggle-slides-btn-block"
  );

  if (window.innerWidth >= 768) {
    toggleSwiperSlidesBtnBlock.classList.remove("visually-hidden");
  } else {
    toggleSwiperSlidesBtnBlock.classList.add("visually-hidden");
  }
}

// Initial check
toggleSwiperSlidesBtn();

// Add event listener for window resize
window.addEventListener("resize", toggleSwiperSlidesBtn);
