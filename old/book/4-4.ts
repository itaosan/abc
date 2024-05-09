import * as readline from "readline";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [N, W] = input[0].split(" ").map(Number);
  const w: number[] = [];
  const v: number[] = [];

  w.push(0);
  v.push(0);
  for (let i = 1; i <= N; i++) {
    const [wt, vt] = input[i].split(" ").map(Number);
    w.push(wt);
    v.push(vt);
  }

  let dp: number[][] = Array.from({ length: 110 }, () => new Array(100100).fill(-(10 ** 10)));

  dp[0][0] = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= W; j++) {
      if (j < w[i]) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
    }
  }

  let ans = 0;
  for (let i = 0; i <= W; i++) {
    ans = Math.max(ans, dp[N][i]);
  }

  console.log(ans);
});
