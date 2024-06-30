import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine()

//Rの位置を取得
const rIndex = S.indexOf("R");
//Mの位置を取得
const mIndex = S.indexOf("M");
//どちらが大きいか
console.log(rIndex > mIndex ? "No" : "Yes");
