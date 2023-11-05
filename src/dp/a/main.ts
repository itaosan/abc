import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const h = [0, ...readLine().split(" ").map(Number)];

let dp: number[] = new Array(10 ** 5 + 9).fill(Number.MAX_VALUE);

dp[1] = 0;

for (let i = 2; i <= N; i++) {
  dp[i] = Math.min(dp[i - 2] + Math.abs((h[i - 2] - h[i])), dp[i - 1] + Math.abs(h[i - 1] - h[i]));
}

console.log(dp[N]);
