import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}
//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
//const h = [0, ...readLine().split(" ").map(Number)];

for (let i = 0; i < N; i++) {
  const A = readLine().split(" ").map(Number);
  const ans = [];
  for (let j = 0; j < A.length; j++) {
    if (A[j] === 1) {
      ans.push(j + 1);
    }
  }
  console.log(ans.join(" "));
}

//Number.MIN_VALUE
//Number.MAX_VALUE
