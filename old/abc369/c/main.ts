import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()

const sa = [];
for (let i = 0; i < N - 1; i++) {
  sa.push(A[i] - A[i + 1]);
}

let cnt = 0;
//N
cnt = N;
for (let i = 0; i < N - 1; i++) {
  let tousaCnt = 1;
  while (i < sa.length - 1 && sa[i] === sa[i + 1]) {
    tousaCnt++;
    i++;
  }
  cnt += (tousaCnt * (tousaCnt + 1)) / 2;
}

console.log(cnt);
