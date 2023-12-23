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

//const N = parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let diff = 0
//Aの配列の各数字の差分を求める
if (A.length <= 1) diff =0;

let differences = [];
let maxDiff = 0;
let maxdiffcnt = 0;
for (let i = 0; i < A.length - 1; i+=2) {
  if(maxDiff < A[i + 1] - A[i]){
    maxDiff = A[i + 1] - A[i];
    maxdiffcnt = i;
  } 
  differences.push(A[i + 1] - A[i]);
}

if (A.length % 2 !== 0) {
  differences.sort((a, b) => a - b);
  differences.pop(); // 最大の差分を除外
}

diff =  differences.reduce((acc, val) => acc + val, 0);

//Number.MIN_VALUE
//Number.MAX_VALUE
