import { _id, _el, addClass, removeClass } from "../utilities/helper.js";

const body = document.querySelector("body");
// Page loader
const renderLoader = () => {
  const markup = `
    <div class="loader" id="loader">
        <div class="loader__container">
            <div class="loader--outter"></div>
            <div class="loader--inner"></div>
        </div>
    </div>
    `;
  body.insertAdjacentHTML("beforeend", markup);
};

export const displayLoader = () => {
  renderLoader();
};

export const removeLoader = () => {
  const loader = _id("loader");
  loader.style.animation = "fading 300ms linear forwards";
  setTimeout(() => {
    loader.remove();
  }, 300);
};

// Button loader pass in a specific button to start
export const buttonLoader = (button) => {
  addClass(button, "button--loading");
};
// When ever done loading => call buttonLoaderRemove method to remove loader
export const buttonLoaderRemove = (status = "success") => {
  const buttonLoading = _el("button--loading");
  if (status === "success") {
    addClass(buttonLoading, "button--loading--success");
  } else if (status === "failed" || status === "fail" || status === "error") {
    addClass(buttonLoading, "button--loading--error");
    setTimeout(() => {
      removeClass(buttonLoading, "button--loading--error");
      removeClass(buttonLoading, "button--loading");
    }, 3000);
  }
};
