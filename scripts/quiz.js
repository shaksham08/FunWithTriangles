const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
];

submitBtn.addEventListener("click", () => {
  const formResults = new FormData(quizform);
  console.log(formResults);
  for (let values of formResults.values()) {
    console.log(values);
  }
  let score = 0;
  let index = 0;
  for (let value of formResults.values()) {
    console.log(value);
    console.log(score);
    console.log(value === correctAnswers[index]);
    console.log("index", index);
    if (value == correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  if (index == 10) outputEl.innerText = "The score is " + score;
  else outputEl.innerText = "Please answer all questions";
});
