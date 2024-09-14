import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()

// 値の最後の出現位置を記録する配列を初期化
const prev = new Array(N + 1).fill(0);

// 答えを格納する変数
let S = 0;

// 各位置について処理を行う
for (let i = 1; i <= N; i++) {
  const v = A[i - 1];

  // 値 v の直前の出現位置
  const lastOccurrence = prev[v];

  // 値 v が新たに出現する部分配列の数を計算
  const newSubarrays = (i - lastOccurrence) * (N - i + 1);

  // 答えに加算
  S += newSubarrays;

  // 値 v の最後の出現位置を更新
  prev[v] = i;
  console.error("prev:", prev);
}

// 答えを出力
console.log(S);
