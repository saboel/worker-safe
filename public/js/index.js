"use strict";
import { hamburgerButtonHandler } from "./UX/hamburger.js";
import { darklightButtonHandler } from "./UX/darklight_button.js";
import { progressHandler } from "./UX/progress_bar.js";
import { employeeVerificationHandler } from "./features/employee_verification.js";
import { _el, _id, _allEl, addClass } from "./utilities/helper.js";
import { displayLoader, removeLoader } from "./UX/loader.js";
import { displayAlert } from "./utilities/display_alert.js";

window.addEventListener("load", (e) => {
  removeLoader();
});

// Employee provides ID
const findEmployeeIDBtn = _id("find__employee__btn");
findEmployeeIDBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const employeeID = _id("employee__input").value;
  if (employeeID.trim().length === 0) {
    displayAlert(
      "Please Enter Your Employee ID to Start Safety Check Process",
      "error",
      3
    );
  }
  employeeVerificationHandler(employeeID);
});
