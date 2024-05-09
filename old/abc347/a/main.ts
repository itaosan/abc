import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const S = readLine()

const ans = [];

for (let i = 0; i < N; i++) {
  if (A[i] % K === 0) {
    ans.push(A[i] / K);
  }
}

console.log(ans.join(" "));
