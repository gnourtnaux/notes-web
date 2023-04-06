// Tim cac so nguyen duong trong mang sau chia het cho 3 va return 1 mang chua cac phan tu do + tinh tong cac so con lai
//  1,33,42,52,6,71,23,43,54,65,76,-123,-989,-213,-326,1266;
// const numbers = [
//   1, 33, 42, 52, 6, 71, 23, 43, 54, 65, 76, -123, -989, -213, -326, 1266,
// ];
// const evenThree = [];
// const notEvenThree = [];
// let sumRemain = 0;

// numbers.forEach((number) => {
//   if (number % 3 === 0) {
//     evenThree.push(number);
//   } else {
//     notEvenThree.push(number);
//   }
// });

// notEvenThree.forEach((nETnumber) => {
//   sumRemain += Number(nETnumber);
// });

// console.log(sumRemain);

// Tạo một function tính tổng các số nhập vào array không  chia hết cho 3
// let sumResult = 0;
// const sumEvenThree = (evenThree) => {
//   evenThree.forEach((numbers) => {
//     if (typeof numbers == "number" && numbers % 3 != 0) {
//       sumResult += numbers;
//     }
//   });
//   return sumResult;
// };

// const a=sumEvenThree([1,33,42,52,6,71,23,43,54,65,76,-123,-989,-213,-326,1266]);
// console.log(a);

// ĐỔI SỐ THƯỜNG THÀNH SỐ LA MÃ
// let numOut = 0;
// let numK = "";
// const a = {
//   0: "",
//   1: "I",
//   2: "II",
//   3: "III",
//   4: "IV",
//   5: "V",
//   6: "VI",
//   7: "VII",
//   8: "VIII",
//   9: "IX",
// };
// const b = {
//   0: "",
//   10: "X",
//   20: "XX",
//   30: "XXX",
//   40: "XL",
//   50: "L",
//   60: "LX",
//   70: "LXX",
//   80: "LXXX",
//   90: "XC",
// };
// const c = {
//   0: "",
//   100: "C",
//   200: "CC",
//   300: "CCC",
//   400: "CD",
//   500: "D",
//   600: "DC",
//   700: "DCC",
//   800: "DCCC",
//   900: "CM",
// };
// const d = "M";

// let numIn = 1994;

// for (let i = 1; i < (numIn / 1000)+1; i++) {
//   numK += d;
// }

// if (numIn < 10) {
//   numOut = a[numIn];
// } else {
//   if (numIn < 100) {
//     numOut = b[numIn - (numIn % 10)] + a[numIn % 10];
//     console.log(numOut);
//   } else {
//     if (numIn < 1000) {
//       numOut =
//         c[numIn - (numIn % 100)] +
//         b[(numIn % 100) - (numIn % 10)] +
//         a[numIn % 10];
//     } else {
//       if(numIn==1000){numOut="M"}else{numOut =
//         numK +
//         c[(numIn % 1000) - (numIn % 100)] +
//         b[(numIn % 100) - (numIn % 10)] +
//         a[numIn % 10]}
//       ;
//     }
//   }
// }

// console.log(`Số ${numIn} tương ứng với ${numOut}`);

// ĐỔI SÓ THƯỜNG THÀNH SỐ LA MÃ 2
// let numOut = 0;
// const d = "M";
// let numK = "";
// let numIn = 500;
// if (numIn % 1000 == 0) {
//   for (let i = 1; i < numIn / 1000 + 1; i++) {
//     numOut = numK += d;
//   }
// } else {
//   for (let i = 0; i < numIn / 1000; i++) {
//     numK += d;
//   }

//   if (numIn < 10) {
//     numOut = a[numIn];
//     return numOut;
//   } else {
//     if (numIn < 100) {
//       numOut = b[numIn - (numIn % 10)] + a[numIn % 10];
//       console.log(numOut);
//       return numOut;
//     } else {
//       if (numIn < 1000) {
//         numOut =
//           c[numIn - (numIn % 100)] +
//           b[(numIn % 100) - (numIn % 10)] +
//           a[numIn % 10];
//         return numOut;
//       } else {
//         if (numIn == 1000) {
//           numOut = "M";
//         } else {
//           numOut =
//             numK +
//             c[(numIn % 1000) - (numIn % 100)] +
//             b[(numIn % 100) - (numIn % 10)] +
//             a[numIn % 10];
//         }
//         return numOut;
//       }
//     }
//   }
// }
// console.log(numOut);
// some day you have to cheat lmao

// TWO SUM
// let mangIn = [];
// let target = 0;
// const mangIn = [2, 7, 11, 15];
// const target = 9;
// let mangOut = [,];
// let Output = [];
// let twoSum = 0;
// for (let i = 0; i < mangIn.length; i++) {
//   if (mangIn[i] === target) {
//     mangOut[0] = mangIn[i];
//     Output.push(i);
//   } else {
//     twoSum = mangIn[i];
//     for (let y = i+1; y < mangIn.length; y++) {
//       if (twoSum + mangIn[y] === target) {
//         mangOut[0] = mangIn[i];
//         mangOut[1] = mangIn[y];
//         Output.push(i);
//         Output.push(y);
//       }
//     }
//   }
// }
// Xuất ra 2 số có tổng theo target
// console.log(mangOut);
// console.log(Output);
// Xuất ra index của 2 số trong mảng có tổng theo target

// PASSED TWO SUM:
// /**
//   let Output = [];
//   let twoSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       Output.push(i);
//       for (let z=i+1;z<nums.length;z++){if (nums[z]=== target){Output.push(z)}}
//       return(Output)
//     } else {
//       twoSum = nums[i];
//       for (let y = i+1; y < nums.length; y++) {
//         if (twoSum + nums[y] === target) {
//           Output.push(i);
//           Output.push(y);
//           return(Output)

//         }
//       }
//     }
//   }
//   };

// PALINDROME
// const x = 121;
// const output = Number(x.toString().split("").reverse().join(""));
// console.log(Boolean(output % x == 0 && output / x == 1 || x==0));

// LONGEST COMMON PREFIXES - 110/124 cases
// const inA = ["", ""];
// console.log(inA)
// let output = [];
// let y = 0;
// for (let i = 0; i < inA.length - 1; i++) {
//   let y = i + 1;
//   if (inA[i][0] == inA[y][0]) {
//     output = inA[i][0];
//     for (let z = 1; z < inA[i].length; z++) {
//       if (inA[i][z] == inA[y][z]) {
//         output += inA[i][z];
//       }
//     }
//   } else{
//     output = "";
//   }
// }
// console.log(output);

// VALID PARENTHESES
const openB = ["(", "[", "{"];
const closeB = [")", "]", "}"];
let p = "[";
let pA = p.split("");
let output = true;
console.log(pA);
if ((pA.length)%2==1) {
  output = false;
} else {
  for (let i = 0; i < pA.length; i++) {
    for (let y = 0; y < openS.length; y++) {
      if (pA[i] == openB[y]) {
        if (pA[i + 1] == closeB[y]) {
          output = true;
        } else {
          output = false;
        }
        if (pA[i] == closeB[y]) {
          if (pA[i - 1] == openB[y]) {
            output = true;
          } else {
            output = false;
          }
        }
      }
    }
  }
}

console.log(Boolean(output));

// for (let i=0; i<s.length;i++){
//   if(s)
// }
// const aloha = (hehe) => {
//   return hehe+1;
//   };

//   aloha(3);

//   console.log(aloha(3));
