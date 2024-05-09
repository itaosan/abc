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
const w : number[]= Array(1).fill(0)
const v : number[]= Array(1).fill(0)
for (let i = 0; i < N; i++) {
  const [ww,vv] = readLine().split(" ").map(Number)
  w.push(ww)
  v.push(vv)
}

const MAX = 10 ** 3 * 100
let dp : number[][] = Array.from({length : 109}, () => new Array(MAX + 9).fill(Number.MAX_VALUE))
dp[0][0] = 0
for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= MAX; j++) {
    if( j < v[i] ) dp[i][j] = dp[i-1][j]
    else{
      dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-v[i]] + w[i])
    }
    
  }
}

let ans = 0
//console.log(dp[N])
for (let i = MAX; i > 0; i--) {
  if (dp[N][i] <= M){
    ans = i
    break
  }
}

console.log(ans)



//Number.MIN_VALUE
//Number.MAX_VALUE
