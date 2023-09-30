import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  //const N = parseInt(input[0]);
  const [N, K, P] = input[0].split(" ").map(Number);
  const plans = input.slice(1).map((line) => line.split(" ").map(Number));

  const INF = 1e18;

  const minCost = (N: number, K: number, P: number, plans: number[][]): number => {
    let dp: number[][] = Array.from({ length: N + 1 }, () => Array(K * P + 1).fill(INF));
    dp[0][0] = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j <= K * P; j++) {
        dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]); // 開発案を採用しない場合
        let sum = 0;
        for (let l = 1; l <= K; l++) {
          sum += Math.min(plans[i][l], P); // 各パラメータがP以上になる場合には加算しない
          const nj = Math.min(K * P, j + sum);
          dp[i + 1][nj] = Math.min(dp[i + 1][nj], dp[i][j] + plans[i][0]); // 開発案を採用する場合
        }
      }
    }

    let result = INF;
    for (let i = P * K; i <= K * P; i++) {
      result = Math.min(result, dp[N][i]);
    }

    return result === INF ? -1 : result;
  };

  console.log(minCost(N, K, P, plans));
});
