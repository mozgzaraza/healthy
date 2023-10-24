const modelsItems = document.querySelectorAll(".models__item");

function handleTabClick() {
  const modelsItem = this.closest(".models__item");

  const tabs = modelsItem.querySelectorAll(".models__item-tab");
  const images = modelsItem.querySelectorAll(".models__item-img");

  const tabIndex = Array.from(tabs).indexOf(this);

  tabs.forEach(function (tab) {
    tab.classList.remove("models__item-tab--active");
  });

  images.forEach(function (img) {
    img.classList.remove("models__item-img--active");
  });

  images[tabIndex].classList.add("models__item-img--active");

  this.classList.add("models__item-tab--active");
}

modelsItems.forEach(function (modelsItem) {
  const tabs = modelsItem.querySelectorAll(".models__item-tab");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", handleTabClick);
  });
});

const mainHeight = document.querySelector(".main").offsetHeight;
const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  let topScroll = window.scrollY;
  if (topScroll > 50) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
});

document.querySelectorAll(".why__item").forEach(function (el) {
  el.addEventListener("click", function () {
    let answer = el.children[1];

    if (answer.style.maxHeight) {
      document.querySelectorAll(".why__answer-list").forEach(function (answer) {
        answer.style.maxHeight = null;
      });
      document.querySelectorAll(".why__item").forEach(function (item) {
        item.classList.remove("why__item--open");
      });
    } else {
      document.querySelectorAll(".why__answer-list").forEach(function (el) {
        el.style.maxHeight = null;
      });
      document.querySelectorAll(".why__item").forEach(function (item) {
        item.classList.remove("why__item--open");
      });
      el.classList.add("why__item--open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

let video = document.querySelector(".video__inner");

video.addEventListener("click", function () {
  if (video.classList.contains("video__inner--play")) {
    return;
  }
  video.classList.add("video__inner--play");
  video.insertAdjacentHTML(
    "afterbegin",
    '<iframe src="https://www.youtube.com/embed/eb_0VP-4YDo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
});

function barScrollProgress() {
  let bar = document.querySelector(".steps__bar-progress");
  let stepsBar = document.querySelector(".steps__bar");
  let winScroll = window.pageYOffset || document.documentElement.scrollTop;
  let barTop = stepsBar.getBoundingClientRect().top + winScroll;
  let barHeight = stepsBar.offsetHeight;
  let barProgress = winScroll - barTop + barHeight - 100;
  bar.style.height = barProgress + "px";
  let stepCheck = document.querySelectorAll(".steps__check");

  stepCheck.forEach((step) => {
    if (barProgress > step.offsetTop) {
      step.classList.add("steps__check--active");
    } else {
      step.classList.remove("steps__check--active");
    }
  });

  if (
    stepCheck[stepCheck.length - 1].classList.contains("steps__check--active")
  ) {
    document
      .querySelector(".steps__result")
      .classList.add("steps__result--active");
  } else {
    document
      .querySelector(".steps__result")
      .classList.remove("steps__result--active");
  }
}

window.addEventListener("scroll", barScrollProgress);

const slider = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 30,

  initialSlide: 4,
  speed: 500,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1201: {
      slidesPerView: 5,
    },
  },
});

const newsSlider = new Swiper(".news-container", {
  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    993: {
      slidesPerView: 3,
    },
  },
});

let lastScrollTop = 0;

function sliderScroll() {
  let winScroll = window.pageYOffset || document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let bottomOfPage = winScroll + windowHeight;
  let sliderWrapper = document.querySelector(".swiper");
  let sliderTop = sliderWrapper.getBoundingClientRect().top + winScroll;

  let scrollDirection = winScroll > lastScrollTop ? "down" : "up";

  if (sliderTop < bottomOfPage) {
    if (scrollDirection === "down") {
      slider.slideNext();
    } else {
      slider.slidePrev();
    }
  }

  lastScrollTop = winScroll;
}

window.addEventListener("scroll", sliderScroll);

lightGallery(document.querySelector(".swiper-wrapper"), {
  licenseKey: "0000 0000 0000 0000",
  speed: 500,
});

// document.querySelectorAll("a.menu__link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     let href = this.getAttribute("href").substring(1);

//     const scrollTarget = document.getElementById(href);

//     const header = document.querySelector(".header");
//     const topOffset = header.offsetHeight - 50;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   });
// });

// document.querySelectorAll("a.footer-bottom__nav-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();

//     let href = this.getAttribute("href").substring(1);

//     const scrollTarget = document.getElementById(href);

//     const header = document.querySelector(".header");
//     const topOffset = header.offsetHeight - 50;
//     const elementPosition = scrollTarget.getBoundingClientRect().top;
//     const offsetPosition = elementPosition - topOffset;

//     window.scrollBy({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   });
// });

function smoothScrollToTarget(targetId) {
  const scrollTarget = document.getElementById(targetId);

  if (!scrollTarget) {
    return; // Проверка на существование элемента
  }

  const header = document.querySelector(".header");
  const topOffset = header.offsetHeight - 50;
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

document.querySelectorAll("a.menu__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href").substring(1);
    smoothScrollToTarget(href);
  });
});

document.querySelectorAll("a.footer-bottom__nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href").substring(1);
    smoothScrollToTarget(href);
  });
});

const burger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu__list");
const item = document.querySelectorAll(".menu__item");
let menuOpen = false;

burger.addEventListener("click", function () {
  if (!menuOpen) {
    burger.classList.add("menu__burger--active");
    menu.classList.add("menu__list--active");
    item.forEach((link) => {
      link.classList.add("menu__item--active");
    });
    menuOpen = true;
  } else {
    burger.classList.remove("menu__burger--active");
    menu.classList.remove("menu__list--active");
    item.forEach((link) => {
      link.classList.remove("menu__item--active");
    });
    menuOpen = false;
  }
});
item.forEach((link) => {
  link.addEventListener("click", function () {
    if (menuOpen) {
      burger.classList.remove("menu__burger--active");
      menu.classList.remove("menu__list--active");
      item.forEach((link) => {
        link.classList.remove("menu__item--active");
      });
      menuOpen = false;
    }
  });
});
