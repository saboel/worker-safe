"use strict";
import { _id, _allEl } from "../utilities/helper.js";
/* insert the following HTML to create a progress bar.
    -replace aria-valuenow with percentage you want to fill 
    -there are 4 colors to choose: blue, orange, red, and green
        <div class="progress progress--blue">
            <span class='progress__bar' role='progressbar' aria-valuenow="25" aria-valuemin="0" aria-valuemax=100>
                <p class="progress__value">

                </p>
            </span>
        </div>

*/
const progressBars = _allEl("progress");

const fillProgressBar = (progressBar, progressValue, targetValue) => {
  console.log(progressBar, progressValue, targetValue);
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

export const progressHandler = () => {
  progressBars.forEach((bar) => {
    const progressBar = bar.childNodes[1];
    const progressValue = bar.childNodes[1].childNodes[1];
    const targetValue = progressBar.getAttribute("aria-valuenow") * 1;
    fillProgressBar(progressBar, progressValue, targetValue);
    console.log(targetValue);
  });
};

if (progressBars) {
  progressHandler();
}
