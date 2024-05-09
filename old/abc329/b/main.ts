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
const A = readLine().split(" ").map(Number);

let max = 0;
let max2 = 0;

for (let i = 0; i < N; i++) {
  if (max < A[i]) {
    max2 = max;
    max = A[i];
  } else if (max2 < A[i]) {
    if (max !== A[i]) max2 = A[i];
  }
}

console.log(max2);

//const h = [0, ...readLine().split(" ").map(Number)];

//Number.MIN_VALUE
//Number.MAX_VALUE
