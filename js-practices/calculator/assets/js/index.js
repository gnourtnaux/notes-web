// Console-button
let inputResult = document.getElementsByClassName("input-result");
let outputResult = document.getElementsByClassName("output-result");
let historyFirst = document.getElementsByClassName("historyFirst");
let historySecond = document.getElementsByClassName("historySecond");
let historyThird = document.getElementsByClassName("historyThird");

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
  }
};

const handleClear = () => {
  if (isNaN(inputValueFirst)) {
    if (Boolean(inputValueSecond)) {
      handleClearArr = inputValueSecond.split("");
      handleClearArr.pop();
      inputValueSecond = handleClearArr.join("");
      inputResult[0].value = preValue + ` ${operator} ` + inputValueSecond;
      console.log(
        "Khi có in2 : ope = ",
        operator,
        "; Preval = ",
        preValue,
        "; input1 =",
        inputValueFirst,
        "; input2 = ",
        inputValueSecond
      );
    } else {
      handleClearArr = inputResult[0].value.split("");
      handleClearArr.pop();
      handleClearArr.pop();
      handleClearArr.pop();
      operator = "";
      inputResult[0].value = handleClearArr.join("");
      preValue = inputResult[0].value;
      inputValueFirst = preValue;
      // console.log(
      //   "Khi không có in2 mà chỉ có ope : ope = ",
      //   operator,
      //   "; Preval = ",
      //   preValue,
      //   "; input1 =",
      //   inputValueFirst,
      //   "; input2 = ",
      //   inputValueSecond
      // );
    }
  } else {
    handleClearArr = inputResult[0].value.split("");
    handleClearArr.pop();
    inputResult[0].value = handleClearArr.join("");
    preValue = inputResult[0].value;
    inputValueFirst = preValue;
  }
};

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
  if (isNaN(inputValueFirst) & (inputValueSecond === "")) {
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
    if (Boolean(historyFirst[0].value)) {
      historySecond[0].value = historyFirst[0].value;
      historyFirst[0].value =
        inputResult[0].value + " = " + outputResult[0].value.toString();
    } else {
      historyFirst[0].value =
        inputResult[0].value + " = " + outputResult[0].value.toString();
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
