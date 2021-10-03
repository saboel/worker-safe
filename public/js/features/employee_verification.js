import { addClass, _id, _el } from "../utilities/helper.js";
import { buttonLoader } from "../UX/loader.js";
import { displayAlert } from "../utilities/display_alert.js";
import { questionnaire } from "./render_questions.js";
const employees = [
  { employee_id: "1", department: "logistic" },
  { employee_id: "2", department: "research" },
];

const questions = [
  {
    id: 1,
    question: "Have you had your breakfast?",
    requirement: "true",
    department: "logistic",
  },
  {
    id: 2,
    question: "type your current Blood Alcohol Concentration",
    requirement: "0.05",
    department: "logistic",
  },
  {
    id: 3,
    question: "How many hours did you sleep last night",
    requirement: "6",
    department: "logistic",
  },
  {
    id: 4,
    question: "Have you put on your protective eye-glass",
    requirement: "yes",
    department: "research",
  },
];

const title = _el("titles");
const verificationForm = _el("verification__card");
export const employeeVerificationHandler = (employeeID) => {
  //fetch API to find employee department that match employee ID
  const employee_found = employees.find((em) => {
    return em.employee_id === employeeID;
  });

  if (employee_found !== undefined) {
    addClass(title, "titles--scaled");
    addClass(verificationForm, "verification__card--hide");
    setTimeout(() => {
      verificationForm.remove();
    }, 1100);
    const question = questions.filter(
      (ques) => ques.department === employee_found.department
    );
    displayAlert("Successfully Employee Found", "success", 3);
    questionnaire(question);
    return;
  } else {
    displayAlert("Employee with this ID does NOT exist", "error", 3);
  }
};
