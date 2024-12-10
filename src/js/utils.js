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

/* TOGGLE SWIPER SLIDES */
document.addEventListener("DOMContentLoaded", function () {
  const slidesBtn = document.getElementById("toggle-btn-slides");
  const slides = document.querySelectorAll(".brands-section__list-item");
  let slidesVisible = false;

  function updateSlidesVisibility() {
    const screenWidth = window.innerWidth;
    let slidesToShow = 0;

    // number of slides to display depends on screen width
    if (screenWidth >= 768 && screenWidth < 1120) {
      slidesToShow = 6;
    } else if (screenWidth >= 1120) {
      slidesToShow = 8;
    }

    slides.forEach((slide, i) => {
      // if screen width less than 768 then display all slides
      if (screenWidth < 768) {
        slide.style.display = "flex";
      } else if (i < slidesToShow || slidesVisible) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });

    // Toggle button text
    slidesBtn.textContent = slidesVisible ? "Скрыть" : "Показать все";
  }

  function toggleSwiperSlides() {
    slidesVisible = !slidesVisible;
    updateSlidesVisibility();
  }

  slidesBtn.addEventListener("click", toggleSwiperSlides);
  window.addEventListener("resize", updateSlidesVisibility);

  // Initialize slides visibility on page load
  updateSlidesVisibility();
});

/* TOGGLE IMAGE ROTATION */
function toggleImageRotation() {
  const image = document.getElementById("toggle-list-image");
  // Проверяем текущее состояние кнопки и меняем стиль изображения
  if (image.style.transform === "rotate(180deg)") {
    image.style.transform = "rotate(0deg)"; // Возвращаем в исходное состояние
  } else {
    image.style.transform = "rotate(180deg)"; // Поворачиваем на 180 градусов
  }
}

document
  .getElementById("toggle-btn-slides")
  .addEventListener("click", toggleImageRotation);
