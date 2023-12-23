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

let [A, M, L, R] = readLine().split(" ").map(Number);
let cnt = 0;

let smallestValue;
if(A === L) {
  smallestValue = A;
}else if (L > A) {
  //LがAより大きい場合の開始位置を求める
  //console.log((L - A) / M);
  smallestValue = A + Math.ceil((L - A) / M) * M;
} else {
  //LがA以下の場合の開始位置を求める
  //console.log("b");
  smallestValue = A - Math.ceil((A - L) / M) * M;
}
//console.log(smallestValue);
if (smallestValue > R) {
  console.log(0);
} else if (smallestValue === R) {
  console.log(1);
} else {
  const numberOfTrees = Math.floor((R - smallestValue) / M) + 1;

  console.log(numberOfTrees);
}
