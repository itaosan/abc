import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, X,Y,Z] = readLine().split(" ").map(Number);
//const S = readLine()

//ZがXとYの間にあるかどうか
//Yの方が小さい場合もある
console.log((X<Z && Z<Y) || (Y<Z && Z<X) ? "Yes" : "No")
