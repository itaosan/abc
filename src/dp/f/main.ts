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
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine().split("").map(String);
const T = readLine().split("").map(String);
//const h = [0, ...readLine().split(" ").map(Number)];

let dp: number[][] = Array.from({ length: S.length + 9 }, () => new Array(T.length + 9).fill(0));

for (let i = 1; i <= S.length; i++) {
  for (let j = 1; j <= T.length; j++) {
    if (S[i - 1] === T[j - 1]) {
      if (dp[i - 1][j] > dp[i][j - 1]) {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + 1);
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j - 1] + 1);
      }
    } else {
      if (dp[i - 1][j] >= dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
}

let ans = "";
let i = S.length;
let j = T.length;

while (i > 0 && j > 0) {
  // (i-1, j) -> (i, j) と更新されていた場合
  if (dp[i][j] == dp[i - 1][j]) {
    --i; // DP の遷移を遡る
  }

  // (i, j-1) -> (i, j) と更新されていた場合
  else if (dp[i][j] == dp[i][j - 1]) {
    --j; // DP の遷移を遡る
  }

  // (i-1, j-1) -> (i, j) と更新されていた場合
  else {
    ans = S[i - 1] + ans; // このとき s[i-1] == t[j-1] なので、t[j-1] + res でも OK
    --i, --j; // DP の遷移を遡る
  }
}

console.log(ans);

//Number.MIN_VALUE
//Number.MAX_VALUE
