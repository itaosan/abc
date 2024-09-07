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
const A = [];

for (let i = 0; i < N; i++) {
  A.push(readLine().split(" ").map(Number));
}

let next = 0;
for (let i = 0; i < N; i++) {
  if (i === 0) {
    next = A[i][0];
  } else {
    if (next >= i+1) {
      next = A[next - 1][i];
    } else {
      next = A[i][next - 1];
    }
  }
  //console.error(next);
}
console.log(next);
