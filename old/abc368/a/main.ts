import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const S = readLine()
//Aの後ろからM個を取り出し初めにつける
const B = A.slice(N - M).concat(A.slice(0, N - M));
console.log(B.join(" "));

