// Console-button
let inputResult = document.getElementsByClassName("input-result");
let outputResult = document.getElementsByClassName("output-result");

let inputValue = "";
let preValue = "";
let operator = "";
let result = 0;

const addNumber = (number) => {
  if (isNaN(inputValue)) {
    inputResult[0].value += number.toString();
  } else {
    inputValue += number.toString();
    inputResult[0].value = inputValue;
  }
};

const handleClear = () => {
  let handleClearArr = [];
  handleClearArr = inputValue.split("");
  handleClearArr.pop();
  inputValue = handleClearArr.join("");
  inputResult[0].value = inputValue;
};

const addOperator = (operatorValue) => {
  preValue = inputValue;
  inputValue += ` ${operatorValue} `;
  inputResult[0].value = inputValue;
  inputValue = NaN;
  operator = operatorValue;
};

const handleEqual = () => {
  if (isNaN(inputValue)) {
    outputResult[0].value = "Error";
  } else {
    switch (operator) {
      case "+":
        outputResult[0].value = Number(preValue) + Number(inputValue);
        break;
      case "-":
        outputResult[0].value = Number(preValue) - Number(inputValue);
        break;
      case "x":
        outputResult[0].value = Number(preValue) * Number(inputValue);
        break;
      case "÷":
        outputResult[0].value = Number(preValue) / Number(inputValue);
        break;
      default:
        outputResult[0].value = preValue;
        break;
    }
    operator = "";
  }
};
// const doMath = (operator) => {
//   switch (operator) {
//     case "+":
//       preValue += inputValue;
//       break;
//     case "-":
//       preValue -= inputValue;
//       break;
//     case "x":
//       preValue *= inputValue;
//       break;
//     case "÷":
//       preValue /= inputValue;
//       break;
//   }
// };

// Tao ra mot bien
// Lay value tren input => gan vao bien do

// lay cai so nguoi ta bam + bien do
// day lai bien do len value cua input

// nhan input: currentValue, preValue = 0, operator
// result: currentValue + operator + currentValue

// viet mot ham: thuc thi operator => excute => '='
// historyArr
