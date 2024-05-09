import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, K] = readLine().split(" ").map(Number);
const h = [0, ...readLine().split(" ").map(Number)];

let dp: number[] = Array(10 ** 5 + 9).fill(Number.MAX_VALUE);

dp[1] = 0;

for (let i = 1; i < N; i++) {
  for (let j = 1; j <= K; j++) {
    if (i + j > N) break;
    dp[i + j] = Math.min(dp[i + j], dp[i] + Math.abs(h[i] - h[i+j]));
  }
}

console.log(dp[N]);
