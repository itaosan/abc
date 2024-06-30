import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
const W = readLine().split(" ").map(Number);
//const S = readLine()

const box = Array(N+1).fill(0);

let cost = 0;

for (let i = 0; i < N; i++) {
  if (box[A[i]] === 0) {
    box[A[i]] = W[i];
  } else {
    const min = Math.min(box[A[i]], W[i]);
    cost += min;
    box[A[i]] = Math.max(box[A[i]], W[i]);
  }
}
console.log(cost);
