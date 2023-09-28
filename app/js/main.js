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
