import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(BigInt);
//const S = readLine()
let isOK = true;

if (A.length > 2) {
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] * A[i] !== A[i - 1] * A[i + 1]) {
      isOK =  false;
    }
  }
}

isOK ? console.log("Yes") : console.log("No");
