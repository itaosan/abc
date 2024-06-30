import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()
const B = new Array(N+1).fill(0);
let cnt = 0
for (let i = 0; i < A.length; i++) {
  console.error(`A[i] = ${A[i]}`)
  if (B[A[i]] === 0) {
    B[A[i]] = i+1;
  }else{
    console.error(`B[A[i]] = ${B[A[i]]}`)
    if(B[A[i]] === i-1){
      cnt++
    }
  }
}
console.log(cnt)