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

if(A === B){
  console.log(1);
}else{
//差が偶数かどうか
const diff = Math.abs(A - B);
console.log( diff % 2 === 0 ? 3 : 2);

}

