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

const N = parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
let P : number[] = Array(2009).fill(0);
let A : number[]= Array(2009).fill(0);
let dp : number[][] = Array(2009).fill(0).map(() => Array(2009).fill(0));
for (let i = 1; i < N; i++) {
  const [p, a] = readLine().split(" ").map(Number);
  P[i] = p;
  A[i] = a;
}
//console.log(P, A);

for (let len = N - 2; len >= 0; len--) {
  for (let l = 1; l <= N - len; l++) {
    let r = l + len;
    let score1 = 0;
    if (l <= P[l - 1] && P[l - 1] <= r) score1 = A[l - 1];

    let score2 = 0;
    if (l <= P[r + 1] && P[r + 1] <= r) score2 = A[r + 1];

    if (l == 1) {
      dp[l][r] = dp[l][r + 1] + score2;
    } else if (r == N) {
      dp[l][r] = dp[l - 1][r] + score1;
    } else {
      dp[l][r] = Math.max(dp[l - 1][r] + score1, dp[l][r + 1] + score2);
    }
    //console.log(l, r, dp[l][r]);
  }
}

let Anser = 0;
for (let i = 0; i <= N; i++) {
  Anser = Math.max(Anser, dp[i][i]);
}
console.log(Anser);

const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

//Number.MIN_VALUE
//Number.MAX_VALUE
