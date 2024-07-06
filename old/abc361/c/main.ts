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

//Aを昇順にソート
A.sort((a, b) => a - b);
let ans = 10 ** 9 + 1;
const toru = N - K-1;
for (let i = 0; i < N - toru ; i++) {
  const sa = A[i + toru] - A[i];
  ans = Math.min(ans, sa);
}
console.log(ans);
