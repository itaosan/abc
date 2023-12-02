import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, S, M, L] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

// 動的計画法を用いて問題を解く
const MAX_EGGS = 109; // 十分に大きな数値
let dp = new Array(MAX_EGGS + 1).fill(Infinity);
dp[0] = 0; // 0個の卵のコストは0円

// dp[i]は、i個の卵を購入するための最小コスト
for (let i = 1; i <= MAX_EGGS; i++) {
  if (i >= 6) dp[i] = Math.min(dp[i], dp[i - 6] + S); // 6個入りパックを追加
  if (i >= 8) dp[i] = Math.min(dp[i], dp[i - 8] + M); // 8個入りパックを追加
  if (i >= 12) dp[i] = Math.min(dp[i], dp[i - 12] + L); // 12個入りパックを追加
}

// N個以上の卵を最小コストで購入
let minCost = Infinity;
for (let i = N; i <= MAX_EGGS; i++) {
  minCost = Math.min(minCost, dp[i]);
}
console.log(minCost); // 最小コストを表示

//Number.MIN_VALUE
//Number.MAX_VALUE
