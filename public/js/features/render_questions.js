import { addClass, removeClass, _allEl, _el } from "../utilities/helper.js";

const modal = _el("modal");
const modalHeader = _el("modal__header");
const questionBodies = _el("modal__bodies");

let correctAnswer = 0;
let questionAnswered = 0;
export const questionnaire = (questions) => {
  const numQuestions = questions.length;
  let headerMarkup = ``;
  let classes = `modal__header__indicator`;
  for (let i = 0; i < numQuestions; i++) {
    if (i === 0) {
      headerMarkup += `<span class='${classes} modal__header__indicator--active'></span>`;
    } else {
      headerMarkup += `<span class='${classes}'></span>`;
    }
  }
  let markup = ``;
  questions.map((question, index) => {
    let classes = ``;
    index === 0
      ? (classes = `modal__body modal__body__step--${
          index + 1
        } modal__body--is--showing`)
      : (classes = `modal__body modal__body__step--${index + 1}`);
    markup += `
    <div class="${classes}">
    <div class="modal__body__number">
      <p>Question ${index + 1}</p>
    </div>
    <div class="modal__body__question">
      <p>
        ${question.question}
      </p>
    </div>
    <form class="modal__body__form">
      <input type="text" class="answer" />
      <button class="btn submit__answer">Next Question</button>
    </form>
  </div>
    `;
  });
  modalHeader.insertAdjacentHTML("beforeend", headerMarkup);
  questionBodies.insertAdjacentHTML("beforeend", markup);
  setTimeout(() => {
    addClass(modal, "modal--shown");
  }, 1500);
};

modal.addEventListener("click", (event) => {
  event.preventDefault();
  let targetBtn = event.target.closest("button");
  let target = undefined;
  if (targetBtn) target = targetBtn.classList[1];
//   if (target.classList === "submit__answer" && target.classList !== undefined) {
//     const modalIndicator = _allEl("modal__header__indicator");
//     removeClass(
//       modalIndicator[questionAnswered],
//       "modal__header__indicator--active"
//     );
//     addClass(
//       modalIndicator[questionAnswered + 1],
//       "modal__header__indicator--active"
//     );
//   }
});
