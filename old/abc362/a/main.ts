import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [R, G,B] = readLine().split(" ").map(Number);
const S = readLine()

let ans = 0
if (S==="Red"){
  ans = Math.min(G,B)
}else if(S==="Green"){
  ans = Math.min(R,B)
}else{
  ans = Math.min(R,G)
}
console.log(ans)