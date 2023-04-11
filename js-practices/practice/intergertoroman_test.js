// 3997/3999 cases passed
let numOut = 0;
let numK = "";
const a = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
};
const b = {
  0: "",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
};
const c = {
  0: "",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
};
const d = "M";

let numIn = num;
for (let i = 0; i < numIn / 1000; i++) {
  numK += d;
}

if (numIn < 10) {
  numOut = a[numIn];
  return numOut;
} else {
  if (numIn < 100) {
    numOut = b[numIn - (numIn % 10)] + a[numIn % 10];
    console.log(numOut);
    return numOut;
  } else {
    if (numIn < 1000) {
      numOut =
        c[numIn - (numIn % 100)] +
        b[(numIn % 100) - (numIn % 10)] +
        a[numIn % 10];
      return numOut;
    } else {
      if (numIn == 1000) {
        numOut = "M";
      } else {
        numOut =
          numK +
          c[(numIn % 1000) - (numIn % 100)] +
          b[(numIn % 100) - (numIn % 10)] +
          a[numIn % 10];
      }
      return numOut;
    }
  }
}


