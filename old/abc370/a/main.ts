import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [L, R] = readLine().split(" ").map(Number);
//const S = readLine()

if(L === 1 && R ===0){
    console.log("Yes");
}else if(L === 0 && R ===1){
    console.log("No");
}else{
    console.log("Invalid");
}