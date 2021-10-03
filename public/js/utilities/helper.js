"use strict";

// select element by Id
export const _id = (element) => {
  return document.getElementById(element);
};
// select one element
export const _el = (element) => {
  return document.querySelector(`.${element}`);
};
// Select all elements
export const _allEl = (element) => {
  return document.querySelectorAll(`.${element}`);
};
// Add class
export const addClass = (element, className) => {
  return element.classList.add(className);
};
// remove class
export const removeClass = (element, className) => {
  return element.classList.remove(className);
};
// remove class for all elements
export const removeClassAllEl = (el, className) => {
  el.forEach((element) => {
    if (containsClass(element, className)) {
      removeClass(element, className);
    }
  });
};

// contains class
export const containsClass = (element, className) => {
  return element.classList.contains(className);
};

// add animation
export const addAnimation = (element, animationSpec) => {
  return (element.style.animation = animationSpec);
};
// remove animation
export const removeAnimation = (element) => {
  return (element.style.animation = "");
};

// local storage
export const localStorage = () => {
  return window.localStorage;
};

//Capitalize First Letter of a string
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//Remove all child nodes

export const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

//Check if an element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
