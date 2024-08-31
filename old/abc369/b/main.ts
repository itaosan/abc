import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

let cnt =0
let Lpos = 0;
let Rpos = 0;
for(let i = 0; i < N; i++){
  const [A, S] = readLine().split(" ").map(String);
  const a = Number.parseInt(A);
  if(S === "R"){
    if(Rpos !== 0){
      //差の絶対値を足す
      cnt += Math.abs(a - Rpos);
    }
    Rpos = a;
  }else{
    if(Lpos !== 0){
      //差の絶対値を足す
      cnt += Math.abs(a - Lpos);
    }
    Lpos = a;
  }

}
console.log(cnt);