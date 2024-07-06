import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, K, X] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);

A.splice(K, 0, X);

console.log(A.join(" "));
