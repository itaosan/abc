import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
//const S = readLine()
const A = readLine().split(" ").map(Number);

//1からKまでの総和を求める
let sum = BigInt(K) * (BigInt(1) + BigInt(K)) / BigInt(2);

const set = new Set();
for (let i = 0; i < N; i++) {
  if (!set.has(A[i]) && A[i] <= K) {
    set.add(A[i]);
    sum -= BigInt(A[i]);
  }
}

console.log(sum.toString());