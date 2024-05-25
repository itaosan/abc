import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [A, B] = readLine().split(" ").map(Number);
//const S = readLine()

//AとBを除いた3以下の数値が一意に一意に求められるかどうか
const set = new Set([1, 2, 3]);
set.delete(A);
set.delete(B);
if( set.size === 1){
    console.log(set.values().next().value)
}else{
    console.log(-1)
}
