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
const [N, L, R] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let ans = [];

for (let i = 0; i < N; i++) {
  if (A[i] <= L) {
    ans.push(L);
  } else if (A[i] <= R) {
    ans.push(A[i]);
  } else {
    ans.push(R);
  }
}
console.log(ans.join(" "));

//Number.MIN_VALUE
//Number.MAX_VALUE
