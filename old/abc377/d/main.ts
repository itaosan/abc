import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, M] = readLine().split(" ").map(Number);

// Lを含む最少のRを管理する配列、初期値はinf
const minR = Array(M + 1).fill(Number.POSITIVE_INFINITY);

for (let i = 0; i < N; i++) {
  const [Li, Ri] = readLine().split(" ").map(Number);
  minR[Li] = Math.min(minR[Li], Ri);
}

//最少のRを更新
let min = Number.POSITIVE_INFINITY
for (let i = M; i > 0; i--) {
  min = Math.min(min, minR[i]);
  minR[i] = min;
}

//console.error(minR);
let totalIntervals = 0;
for (let i = 1; i <= M; i++) {
  if (minR[i] === Number.POSITIVE_INFINITY) continue;
  totalIntervals += M  - minR[i] + 1;
}
//組み合わせ総数
const total = (M * (M + 1)) / 2;

const answer = total - totalIntervals;
console.log(answer);
