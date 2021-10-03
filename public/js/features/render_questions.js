import { addClass, removeClass, _allEl, _el } from "../utilities/helper.js";
const modal = _el("modal");
const modalHeader = _el("modal__header");
const questionBodies = _el("modal__bodies");

let correctAnswer = 0;
let questionAnswered = 0;

const progressBarHandler = () => {
  const progressBars = _allEl("progress");

  const fillProgressBar = (progressBar, progressValue, targetValue) => {
    let width = 0;
    let speed = 40;
    targetValue >= 50 ? (speed = 10) : speed;
    const increaseProgress = () => {
      if (width >= targetValue) {
        clearInterval(increaseProgressInterval);
      } else {
        width++;
        progressBar.style.width = `${width}%`;
        progressValue.innerHTML = `${width}%`;
        if (width === 100) {
          progressBar.style.borderBottomRightRadius = `2.5rem`;
          progressBar.style.borderTopRightRadius = `2.5rem`;
        }
      }
    };
    const increaseProgressInterval = setInterval(increaseProgress, speed);
  };

  const progressHandler = () => {
    progressBars.forEach((bar) => {
      const progressBar = bar.childNodes[1];
      const progressValue = bar.childNodes[1].childNodes[1];
      const targetValue = progressBar.getAttribute("aria-valuenow") * 1;
      fillProgressBar(progressBar, progressValue, targetValue);
    });
  };

  if (progressBars) {
    progressHandler();
  }
};

const nextQuestion = (numQuestions, body) => {
  const modalIndicator = _allEl("modal__header__indicator");
  const target =
    parseInt(body[questionAnswered].classList[1].split("--")[1]) - 1;
  if (questionAnswered < numQuestions - 1) {
    removeClass(modalIndicator[target], "modal__header__indicator--active");
    addClass(body[target], "animate-out");

    addClass(modalIndicator[target + 1], "modal__header__indicator--active");
    //First Time out
    setTimeout(() => {
      addClass(body[target + 1], "animate-in");
      removeClass(body[target], "animate-out");
      removeClass(body[target], "modal__body--is--showing");
    }, 600);
    //second Time out
    setTimeout(() => {
      addClass(body[target + 1], "modal__body--is--showing");
      removeClass(body[target + 1], "animate-in");
    }, 1200);
  }
  questionAnswered++;

  return;
};
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
    let buttonName = ``;
    index === 0
      ? (classes = `modal__body modal__body__step--${
          index + 1
        } modal__body--is--showing`)
      : (classes = `modal__body modal__body__step--${index + 1}`);
    index === numQuestions - 1
      ? (buttonName = `Submit`)
      : (buttonName = `Next Question`);
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
      <button class="btn submit__answer">${buttonName}</button>
    </form>
  </div>
    `;
  });
  modalHeader.insertAdjacentHTML("beforeend", headerMarkup);
  questionBodies.insertAdjacentHTML("beforeend", markup);
  setTimeout(() => {
    addClass(modal, "modal--shown");
  }, 1500);
  ///////// answering questions
  modal.addEventListener("click", (event) => {
    event.preventDefault();
    const targetBtn = event.target.closest("button");
    const body = _allEl("modal__body");
    let target = undefined;
    if (targetBtn) {
      target = targetBtn.classList[1];
    } else {
      return;
    }
    const answer = _allEl("answer");
    if (answer[questionAnswered].value.trim() !== "") {
      correctAnswer++;
    }
    if (target === "submit__answer" && questionAnswered < numQuestions - 1) {
      nextQuestion(numQuestions, body);
    } else if (
      target === "submit__answer" &&
      questionAnswered <= numQuestions - 1
    ) {
      addClass(modal, "modal--hide");
      setTimeout(() => {
        removeClass(modal, "modal--shown");
        removeClass(modal, "modal--hide");
      }, 1000);
      const safenessMeasurement = _el("safeness__result");
      let progressMarkup = `
      ${
        (correctAnswer / numQuestions) * 100 >= 80
          ? `<h1>Your health is in good condition to take on this task</h1>`
          : `<h1>You're in bad health condition! We are deploying another employee for this task!</h1>`
      }
      <div class="progress progress--${
        (correctAnswer / numQuestions) * 100 >= 80 ? "green" : "red"
      }">
      <span class='progress__bar' role='progressbar' aria-valuenow="${
        (correctAnswer / numQuestions) * 100
      }" aria-valuemin="0" aria-valuemax=100>
          <p class="progress__value">
          </p>
      </span>
  </div>`;
      safenessMeasurement.insertAdjacentHTML("beforeend", progressMarkup);
    }
    progressBarHandler();
  });
};
