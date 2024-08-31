import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
function maxExperience(N: number, A: number[]): number {
  // 初期化: DP 配列
  const dp = Array.from({ length: N + 1 }, () => [0, Number.NEGATIVE_INFINITY]);

  for (let i = 1; i <= N; i++) {
      // モンスターを倒さない場合
      dp[i][0] = dp[i-1][0];
      dp[i][1] = dp[i-1][1];

      // モンスターを倒す場合
      dp[i][0] = Math.max(dp[i][0], dp[i-1][1] + 2 * A[i-1]); // 偶数回目
      dp[i][1] = Math.max(dp[i][1], dp[i-1][0] + A[i-1]);     // 奇数回目
  }

  // 最後のモンスターを見た後の最大経験値
  return Math.max(dp[N][0], dp[N][1]);
}

// 入力例に従ってテスト
console.log(maxExperience(N, A)); // 出力: 28

