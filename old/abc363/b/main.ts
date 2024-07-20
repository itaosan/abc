import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, T,P] = readLine().split(" ").map(Number);
const L = readLine().split(" ").map(Number);
//const S = readLine()

//Lを降順にソート
L.sort((a, b) => b - a);
//P番目の点数を取得
const target = L[P - 1];
console.error(target);
console.error(T);

//Tとの差分を出力、マイナスの場合は０を出力
console.log(Math.max(T-target, 0));