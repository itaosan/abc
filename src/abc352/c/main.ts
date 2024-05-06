import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

let ans = 0;
let [maxA, maxB] = [0, 0];
for (let i = 0; i < N; i++) {
  const [A, B] = readLine().split(" ").map(Number);
  if ((maxB-maxA)<(B-A)) {
    maxA = A;
    maxB = B;
  }
  ans += A
}
ans += maxB-maxA
console.log(ans);