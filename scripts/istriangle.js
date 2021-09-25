const angleInputs = document.querySelectorAll(".angleInput");
const isTriangleBtn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");

isTriangleBtn.addEventListener("click", () => {
  const sum =
    parseInt(angleInputs[0].value) +
    parseInt(angleInputs[1].value) +
    parseInt(angleInputs[2].value);
  if (sum === 180) {
    outputEl.innerText = "Yes this is a triangle";
  } else {
    outputEl.innerText = "This is not a triangle";
  }
});
