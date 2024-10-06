let correctcount = 0;
function checkAnswer(selectedOption, answer) {
  let allOptions = selectedOption.parentNode.querySelectorAll(".btn");
  allOptions.forEach((option) => (option.style.pointerEvents = "none"));
  if (answer === "correct") {
    correctcount++;
    selectedOption.classList.add("correct");
  } else {
    selectedOption.classList.add("incorrect");
  }
  if (answer === "incorrect") {
    allOptions.forEach((option) => {
      if (option.classList.contains("correct")) {
        option.classList.add("correct");
      }
    });
  }
}
function showscore() {
  let res = document.getElementById("result");
  res.innerHTML = `YOUR SCORE IS ${correctcount}`;
}
