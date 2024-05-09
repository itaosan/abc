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
let v : number[][] = []

v.push([0,0,0])
for (let i = 0; i < N; i++) {
  const val = readLine().split(" ").map(Number)
  v.push(val)
}
let dp : number[][] = Array.from({length :10 **5 +9} ,() => new Array(3).fill(0))

for (let i = 1; i <= N; i++) {
  for (let j = 0; j < 3; j++) {
    for (let k = 0; k <3 ; k++) {
      if (j === k) continue
      dp[i][k] = Math.max(dp[i][k],dp[i-1][j] + v[i][k])
      
    }
    
  }
  
}

console.log(Math.max(...dp[N]))

