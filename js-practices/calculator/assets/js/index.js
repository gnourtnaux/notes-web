// Console-button
let inputResult = document.getElementsByClassName("input-result");
let outputResult = document.getElementsByClassName("output-result");

let inputValueFirst = "";
let inputValueSecond = "";
let preValue = "";
let operator = "";
let instantResult = 0;
let handleClearArr = [];

const addNumber = (number) => {
  if (isNaN(inputValueFirst)) {
    inputValueSecond += number.toString();
    inputResult[0].value = preValue + ` ${operator} ` + inputValueSecond;
    console.log("hehe", inputValueSecond, preValue, operator);
  } else {
    inputValueFirst += number.toString();
    inputResult[0].value = inputValueFirst;
    console.log("haha", preValue, inputValueFirst);
  }
};

// const handleClear = () => {

// };

const handleChangeValue = (data) => {
  console.log("data", data);
  console.log("hoho", inputResult[0].value);
};

const handleAllClear = () => {
  inputValueFirst = "";
  inputValueSecond = "";
  preValue = "";
  operator = "";
  inputResult[0].value = "";
  outputResult[0].value = "";
};

const addOperator = (operatorValue) => {
  if (preValue !== "") {
    inputValueSecond = "";
    operator = operatorValue;
    inputResult[0].value = preValue + ` ${operatorValue} `;
    inputValueFirst = NaN;
  } else {
    if (operator !== "") {
      outputResult[0].value = "Add number!";
    } else {
      preValue = inputValueFirst;
      inputResult[0].value = preValue + ` ${operatorValue} `;
      inputValueFirst = NaN;
      operator = operatorValue;
    }
  }
};

const handleEqual = () => {
  if (isNaN(inputValueSecond) & (inputValueSecond === "")) {
    outputResult[0].value = "Error";
  } else {
    switch (operator) {
      case "+":
        outputResult[0].value = Number(preValue) + Number(inputValueSecond);
        break;
      case "-":
        outputResult[0].value = Number(preValue) - Number(inputValueSecond);
        break;
      case "x":
        outputResult[0].value = Number(preValue) * Number(inputValueSecond);
        break;
      case "÷":
        outputResult[0].value = Number(preValue) / Number(inputValueSecond);
        break;
      default:
        outputResult[0].value = Number(inputResult[0].value);
        break;
    }
    operator = "";
    preValue = outputResult[0].value;
  }
};
// const doMath = (operator) => {
//   switch (operator) {
//     case "+":
//       preValue += inputValueFirst;
//       break;
//     case "-":
//       preValue -= inputValueFirst;
//       break;
//     case "x":
//       preValue *= inputValueFirst;
//       break;
//     case "÷":
//       preValue /= inputValueFirst;
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
