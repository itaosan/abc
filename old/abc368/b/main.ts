import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
let A = readLine().split(" ").map(Number);
//const S = readLine()

let cnt = 0

while(true){
  //Aの要素中に正の数が１つ以下なら終了
  if(A.filter(a => a > 0).length <= 1){
    break;
  }
  //Aを降順にソート
  A = A.slice().sort((a, b) => b - a);  
  //Aの前から2つを-1する
  if (A[0] >0 ) A[0] -= 1;
  if (A[1] >0 ) A[1] -= 1;
  cnt++;
}
console.log(cnt);
