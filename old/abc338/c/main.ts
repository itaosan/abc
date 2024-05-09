import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const Q = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
const B = readLine().split(" ").map(Number);

//AをX個作った場合に作れる合計の料理数を求める関数
const calc = (x: number) => {
  let sum = 0;
  let maxB = 1000000000
  for (let i = 0; i < N; i++) {
    if (B[i] === 0) {
      continue;
    }
    maxB = Math.min(maxB, Math.floor((Q[i] - x * A[i]) / B[i]));
  }
  
  return x + maxB;
};

//Aだけで作れる料理の数
let maxA = 1000000000
for (let i = 0; i < N; i++) {
  if (A[i] === 0) {
    continue;
  }
  maxA = Math.min(maxA, Math.floor(Q[i] / A[i]));
}
let sum = calc(maxA);

for (let i = maxA-1; i >= 0; i--) {
  sum  = Math.max(sum, calc(i));
  
}

console.log(sum);
