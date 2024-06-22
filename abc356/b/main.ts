import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//目標栄養素
const A = readLine().split(" ").map(Number);
//取得した栄養素はM個の配列、初期値は0
const Eiyo = Array.from({ length: M }, () => 0);

//食べる
for (let i = 0; i < N; i++) {
  const X = readLine().split(" ").map(Number);
  for (let j = 0; j < M; j++) {
    Eiyo[j] += X[j];
  }
}

let mokuhyo = true
for (let i = 0; i < M; i++) {
  if (Eiyo[i] < A[i]) {
    mokuhyo = false
    break
  }
}
console.log(mokuhyo ? "Yes" : "No")
//const S = readLine()
