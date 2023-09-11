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
