import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, T,A] = readLine().split(" ").map(Number);
//const S = readLine()

//TかAはNの過半数かどうか

//Tの過半数
const kahansuT = Math.ceil(N / 2);
if (T >= kahansuT || A >= kahansuT) {
  console.log("Yes");
}else{
  console.log("No");
}
