// Console-button
let inputResult = document.getElementsByClassName("input-result");

let result = "";
let handleClearArr = [];
let handleClearArrPop = [];

const addNumber = (number) => {
  result += number.toString();
  inputResult[0].value = result;
};
const addOperator = (operator) => {
  result += ` ${operator} `;

  inputResult[0].value = result;
};
const allClear = () => {
  result = "";
  inputResult[0].value = result;
};
const handleClear = () => {
  handleClearArr = result.split();
  console.log(handleClearArr)
  handelClearArrPop = handleClearArr.pop();
  console.log(handelClearArrPop)
  result = handleClearArr.join();
  console.log(result)
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
