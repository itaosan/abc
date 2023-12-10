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
const [N, S, K] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let sum = 0;
for (let i = 0; i < N; i++) {
  const [P, Q] = readLine().split(" ").map(Number);
  sum += P * Q;
}
if (sum < S) {
  sum += K;
}
console.log(sum);

//Number.MIN_VALUE
//Number.MAX_VALUE
