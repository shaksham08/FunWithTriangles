const lengthInput = document.querySelectorAll(".lengthinput");
const isTriangleBtn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");

isTriangleBtn.addEventListener("click", () => {
  const hypotenuse = Math.sqrt(
    parseInt(lengthInput[0].value) * parseInt(lengthInput[0].value) +
      parseInt(lengthInput[1].value) * parseInt(lengthInput[1].value)
  );
  if (isNaN(hypotenuse)) {
    outputEl.innerText = "Please Enter Valid Length";
  } else outputEl.innerText = "The Length of the hypotenuse is " + hypotenuse;
});
