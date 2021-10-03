import { _el, addClass, removeClass, _allEl } from './helper.js';

const insertMessageBox = (message, type) => {
    const body = document.querySelector('body');
    const markup = `
    <div class="message message--${type}">
        <p>
            <strong>
                ${type}!
            </strong>
            <span>
                ${message}
            </span>
        </p>
    </div>
    `;
    body.insertAdjacentHTML('afterbegin', markup);
}

export const displayAlert = (message, type, timeout = 2) => {
    insertMessageBox(message, type);
    const messageBox = _el('message');
    addClass(messageBox, 'message--shown');
    setTimeout(() => {
        addClass(messageBox, 'message--disappear');
    }, timeout * 1000);
    setTimeout(() => {
        messageBox.remove();
    }, timeout * 1000 * 1.2);

};
