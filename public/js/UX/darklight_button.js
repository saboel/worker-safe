"use strict";
import { _id, _el, addClass, removeClass, containsClass } from '../utilities/helper.js';

const darklightButton = _id('darklight__button');
const pageWrapper = _el('wrapper');


//add dark-light mode switching button use the following tag, class, and id
/* 

<button class="darklight__button" id="darklight__button" aria-label="Switch to dark mode">
</button>

*/
// dark-light mode switching button contents

const insertButton = () => {

    const markup = `
    <div class="darklight__buttonCircle">
    <img src="https://i.ibb.co/r6kF3DJ/sun.png" class="sun">
    <span>
        <img src="https://i.ibb.co/CMxLMQS/cloud.png" class="cloud cloud--1">
        <img src="https://i.ibb.co/CMxLMQS/cloud.png" class="cloud cloud--2">
        <img src="https://i.ibb.co/CMxLMQS/cloud.png" class="cloud cloud--3">
    </span>
    <img src="https://i.ibb.co/VMMz2pv/half-moon.png" class="moon">
    <span>
        <img src="https://i.ibb.co/mBDjZgx/stars.png" class="stars stars--1">
        <img src="https://i.ibb.co/rssykn3/stars-2.png" class="stars stars--2">
        <img src="https://i.ibb.co/7NKRCCF/stars-3.png" class="stars stars--3">
    </span>
</div>`;
    darklightButton.insertAdjacentHTML('beforeend', markup);
}
// switch dark/ light mode functions
const switchToLightMode = () => {
    removeClass(darklightButton, 'darklight__button--active');
    removeClass(pageWrapper, 'wrapper--dark');
    addClass(pageWrapper, 'wrapper--light');
    darklightButton.setAttribute("aria-label", "Switch to dark mode");
    localStorage.setItem('themePreference', 'light');
};
const switchToDarkMode = () => {
    addClass(darklightButton, 'darklight__button--active');
    removeClass(pageWrapper, 'wrapper--light');
    addClass(pageWrapper, 'wrapper--dark');
    darklightButton.setAttribute("aria-label", "Switch to light mode");
    localStorage.setItem('themePreference', 'dark');

}
const setInitialTheme = () => {
    let initialTheme = localStorage.getItem('themePreference');
    if (initialTheme === null || initialTheme === undefined) {
        localStorage.setItem('themePreference', 'light');
    } else if (initialTheme === 'dark') {
        switchToDarkMode();
    } else if (initialTheme === 'light') {
        switchToLightMode();
    }
};
export const darklightButtonHandler = () => {
    darklightButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (containsClass(darklightButton, 'darklight__button--active')) {
            switchToLightMode();
        } else {
            switchToDarkMode();
        }
    });
};

if (darklightButton) {
    setInitialTheme();
    insertButton();
    darklightButtonHandler();
}