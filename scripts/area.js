const sides = document.querySelectorAll(".sideInput");
const calculate = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateArea() {
  console.log("Called");
  console.log(sides);
  const firstSideValue = Number(sides[0].value);
  const secondSideValue = Number(sides[1].value);
  const thirdSideValue = Number(sides[2].value);

  if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    );

    output.innerText = `Area of a triangle using heron's formula is ${result.toPrecision(
      4
    )} units`;
  } else {
    output.innerText = "Enter valid side lengths such that each side lengths";
  }
}

calculate.addEventListener("click", calculateArea);
