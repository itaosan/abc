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
  const N = parseInt(input[0]);
  const A = [0, 0, ...input[1].split(" ").map(Number)];
  const B = [0, 0, 0, ...input[2].split(" ").map(Number)];

  let dp = Array(10009).fill(0);

  dp[2] = A[2];
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.min(dp[i - 1] + A[i], dp[i - 2] + B[i]);
  }
  console.log(dp[N]);
});
