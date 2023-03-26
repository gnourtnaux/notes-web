// Tim cac so nguyen duong trong mang sau chia het cho 3 va return 1 mang chua cac phan tu do + tinh tong cac so con lai
//  1,33,42,52,6,71,23,43,54,65,76,-123,-989,-213,-326,1266;
const numbers = [
  1, 33, 42, 52, 6, 71, 23, 43, 54, 65, 76, -123, -989, -213, -326, 1266,
];
const evenThree = [];
const notEvenThree = [];
let sumRemain = 0;

numbers.forEach((number) => {
  if (number % 3 === 0) {
    evenThree.push(number);
  } else {
    notEvenThree.push(number);
  }
});

notEvenThree.forEach((nETnumber) => {
  sumRemain += Number(nETnumber);
});

console.log(sumRemain);

// Tạo một function tính tổng các số nhập vào array không  chia hết cho 3
let sumResult = 0;
const sumEvenThree = (evenThree) => {
  evenThree.forEach((numbers) => {
    if (typeof numbers == "number" && numbers % 3 != 0) {
      sumResult += numbers;
    }
  });
  return sumResult;
};

const a=sumEvenThree([1,33,42,52,6,71,23,43,54,65,76,-123,-989,-213,-326,1266]);
console.log(a);

