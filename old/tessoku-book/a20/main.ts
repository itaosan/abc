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
const S = readLine();
const T = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

let dp : number[][] = Array.from({length:2009},() => Array(2009).fill(0)) 

for (let i = 0; i < S.length; i++) {
  for (let j = 0; j < T.length; j++) {
    if(S[i]===T[j]){
      dp[i+1][j+1] = Math.max(dp[i][j]+1,dp[i][j+1],dp[i+1][j])
    }else{
      dp[i+1][j+1] = Math.max(dp[i][j+1],dp[i+1][j])
    }
  }
  
}

console.log(dp[S.length][T.length])

//Number.MIN_VALUE
//Number.MAX_VALUE
