"use strict";

import { _id, addClass, removeClass, containsClass } from "../utilities/helper.js";

/*
add hamburger button by using this div below
    <div class="hamburger" id="hamburger">
        </div>
*/

const hamburgerButton = _id('hamburger');

const insertMeat = () => {
    const markup = `
    <span></span>
    <span></span>
    <span></span>
    `;
    hamburgerButton.insertAdjacentHTML('beforeend', markup);
}

export const hamburgerButtonHandler = () => {
    hamburgerButton.addEventListener('click', () => {
        if (containsClass(hamburgerButton, 'hamburger--active')) {
            addClass(hamburgerButton, 'hamburger--collapsed');
            setTimeout(() => {
                removeClass(hamburgerButton, 'hamburger--active');
                removeClass(hamburgerButton, 'hamburger--collapsed');
            }, 400);

        } else {
            addClass(hamburgerButton, 'hamburger--active');
        }
    });
};
if (hamburgerButton) {
    insertMeat();
    hamburgerButtonHandler();
}