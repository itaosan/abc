import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()

//合計の列
const sum: number[] = [];

for (let i = 0; i < N; i++) {
  //列に追加
  sum.push(A[i]);
  while (true) {
    //列の数が２つ以上の場合
    if (sum.length < 2) break;
    //列の後ろ２つの数が同じかどうか
    if (sum[sum.length - 1] === sum[sum.length - 2]) {
      //同じ場合、列の後ろ２つを足して、列の最後を削除
      sum[sum.length - 2]++;
      sum.pop();
    } else {
      break;
    }
  }
}

console.log(sum.length);
