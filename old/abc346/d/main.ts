import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const S = readLine();
const C = readLine().split(" ").map(Number);

const solve = (N: number, S: string, C: number[]): number => {
  // DPテーブルの初期化
  // dp[i][j] は i 文字目まで見たときに、良い文字列の条件を満たす隣接文字がちょうど j 箇所である最小コスト
  const dp: number[][] = Array.from({ length: N + 1 }, () => Array(2).fill(Number.POSITIVE_INFINITY));
  dp[0][0] = 0; // 初期状態：何も操作していないのでコストは0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < 2; j++) {
      // i 文字目を反転させない場合
      const costNotFlip = dp[i][j];
      if (j < 1 || S[i] !== S[i - 1]) {
        // 隣接文字が異なる場合、またはまだ良い条件を満たしていない場合
        dp[i + 1][j] = Math.min(dp[i + 1][j], costNotFlip);
      }

      // i 文字目を反転させる場合
      const costFlip = dp[i][j] + C[i];
      if (i > 0 && S[i] === S[i - 1]) {
        // 隣接文字が同じ場合のみ反転させて良い条件を満たす
        dp[i + 1][j + 1] = Math.min(dp[i + 1][j + 1], costFlip);
      }
    }
  }

  // 最後の位置での最小コストを返す
  return dp[N][1];
};

// 入力例
console.error(solve(5, "00011", [3, 9, 2, 6, 4])); // 出力例1: 7
console.error(solve(4, "1001", [1, 2, 3, 4])); // 出力例2: 0
console.error(
  solve(
    11,
    "11111100111",
    [
      512298012, 821282085, 543342199, 868532399, 690830957, 973970164, 928915367, 954764623, 923012648, 540375785,
      925723427,
    ]
  )
); // 出力例3: 2286846953

console.log(solve(N, S, C)); // 出力例1: 7
