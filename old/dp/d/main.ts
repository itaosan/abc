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
const [N, M] = readLine().split(" ").map(Number);

const w = [];
const v = [];

w.push(0);
v.push(0);
for (let i = 0; i < N; i++) {
  const [ww, vv] = readLine().split(" ").map(Number);
  w.push(ww);
  v.push(vv);
}

let dp: number[][] = Array.from({ length: 109 }, () => new Array(10 ** 5 + 9).fill(Number.MIN_VALUE));

dp[0][0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= M; j++) {
    if (j < w[i]) dp[i][j] = dp[i - 1][j];
    else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
    }
  }
}
console.log(Math.max(...dp[N]));

//Number.MIN_VALUE
//Number.MAX_VALUE
