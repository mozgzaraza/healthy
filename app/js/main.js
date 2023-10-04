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
  let barProgress = ((winScroll - barTop + barHeight - 100) / barHeight) * 100;
  bar.style.height = barProgress + "%";
  let stepCheck = document.querySelectorAll(".steps__check");

  if (barProgress > 3) {
    stepCheck[0].classList.add("steps__check--active");
  } else {
    stepCheck[0].classList.remove("steps__check--active");
  }

  if (barProgress > 23) {
    stepCheck[1].classList.add("steps__check--active");
  } else {
    stepCheck[1].classList.remove("steps__check--active");
  }

  if (barProgress > 42) {
    stepCheck[2].classList.add("steps__check--active");
  } else {
    stepCheck[2].classList.remove("steps__check--active");
  }

  if (barProgress > 62) {
    stepCheck[3].classList.add("steps__check--active");
  } else {
    stepCheck[3].classList.remove("steps__check--active");
  }

  if (barProgress > 82) {
    stepCheck[4].classList.add("steps__check--active");
  } else {
    stepCheck[4].classList.remove("steps__check--active");
  }

  if (barProgress > 99) {
    stepCheck[5].classList.add("steps__check--active");
    document
      .querySelector(".steps__result")
      .classList.add("steps__result--active");
  } else {
    stepCheck[5].classList.remove("steps__check--active");
    document
      .querySelector(".steps__result")
      .classList.remove("steps__result--active");
  }
}

window.addEventListener("scroll", barScrollProgress);
