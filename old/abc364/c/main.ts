import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, AMASA,SYOPPASA] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
const S = readLine().split(" ").map(Number);
//const S = readLine()
//Aを降順にソート
A.sort((a,b) => b - a);
//Sも降順にソート
S.sort((a,b) => b - a);

let aSum = 0
let aCnt = 0
for (let i = 0; i < N; i++) {
  aSum += A[i];
  aCnt++;
  if(aSum > AMASA){
    break;
  }
}

let sSum = 0
let sCnt = 0
for (let i = 0; i < N; i++) {
  sSum += S[i];
  sCnt++;
  if(sSum > SYOPPASA){
    break;
  }
}

console.log(Math.min(aCnt,sCnt));