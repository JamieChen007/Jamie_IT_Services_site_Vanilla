const stepNumber = document.getElementsByName("step_number");
const stepLine = document.getElementsByName("step_line");
const surveyQuestion = document.querySelectorAll(".surveyQuestion");

const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let stepNum = 0;

const preStep = () => {
  if (stepNum === 0) {
    return;
  }
  if (stepNum === 1) {
    preBtn.className = "step_button";
  }
  if (stepNum === stepNumber.length - 1) {
    nextBtn.innerHTML = "Next";
  }
  stepNumber[stepNum].className = "step";
  surveyQuestion[stepNum].classList.add("hide");
  stepNum--;
  surveyQuestion[stepNum].classList.remove("hide");
  stepLine[stepNum].className = "line";
  nextBtn.className = "step_button_active";
};

const nextStep = () => {
  if (stepNum >= stepNumber.length - 1) {
    return;
  }
  surveyQuestion[stepNum].classList.add("hide");
  stepNum++;
  if (stepNum === stepNumber.length - 1) {
    nextBtn.innerHTML = "Submit";
  }
  surveyQuestion[stepNum].classList.remove("hide");
  stepNumber[stepNum].className = "stepCurrent";
  stepLine[stepNum - 1].className = "lineLink";
  preBtn.className = "step_button_active";
};

preBtn.addEventListener("click", preStep);
nextBtn.addEventListener("click", nextStep);
