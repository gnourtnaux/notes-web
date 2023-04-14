// Console-button
let inputResult = document.getElementsByClassName("input-result");
let outputResult = document.getElementsByClassName("output-result");

let result = "";
let memoryNum = "";
let tempoMemory = 0;
let handleClearArr = [];
let handleClearArrPop = [];
const addNumber = (number) => {
  result += number.toString();
  inputResult[0].value = result;
};
const addOperator = (operator) => {
  result += ` ${operator} `;
  // switch (operator) {
  //   case "+":
  //     tempoMemory +=
  //     break;
  //   case "-":
  //     memory -=
  //     break;
  //   case "x":
  //     memory *= memory;
  //     break;
  //   case "÷":
  //     memory /= memory;
  //     break;
  // }
  inputResult[0].value = result;
};
const handleEqual = () => {
  let memoryNum = inputResult[0].value;
  let lastWord = memoryNum[memoryNum.length - 1];
  console.log(lastWord);
  let numberCheck = isNaN(lastWord);
  console.log(numberCheck);
  if (numberCheck === false) {
    return (outputResult[0].value = Number(inputResult[0].value));
  } else {
    return (outputResult[0].value = 0);
  }
};
const handleAllClear = () => {
  // let theLastWord = memory[memory.lenght - 1];
  result = "";
  inputResult[0].value = result;
};
const handleClear = () => {
  handleClearArr = result.split("");
  handleClearArrPop = handleClearArr.pop();
  result = handleClearArr.join("");
  inputResult[0].value = result;
};

// const addOperator = (operator) => {
//     result += operator.toString('');
//     inputResult[0].value =
// };

// const addOperator = (operator) => {
//   result += operator.toString();
//   inputResult[0].value = result;
// };
// const addOperator = (operator[0]) =>{
//    result += operator[0].toString();
//    inputResult[0].value = result;
// }

// Tao ra mot bien
// Lay value tren input => gan vao bien do

// lay cai so nguoi ta bam + bien do
// day lai bien do len value cua input

// nhan input: currentValue, preValue = 0, operator
// result: currentValue + operator + currentValue

// viet mot ham: thuc thi operator => excute => '='
// historyArr
