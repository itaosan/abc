import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, Q] = readLine().split(" ").map(Number);
const T = readLine().split(" ").map(Number);
//const S = readLine()

//1からNまでの数値を持つ配列を作成
const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 0; i < Q; i++) {
  //Tの値が配列内にあれば、その値を削除
  if (arr.includes(T[i])) {
    arr.splice(arr.indexOf(T[i]), 1);
  }else{
    //Tの値が配列内になければ、配列に追加
    arr.push(T[i]);
  }
}

console.log(arr.length);