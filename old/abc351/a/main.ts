import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number).reduce((acc, cur) => acc + cur, 0);
const B = readLine().split(" ").map(Number).reduce((acc, cur) => acc + cur, 0);
//const S = readLine()

console.log(A-B >= 0 ?  A-B+1 : 0);
