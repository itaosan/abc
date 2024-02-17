import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}
//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
//通貨の所持数
const A = readLine().split(" ").map(Number);


for (let i = 0; i < N-1; i++) {
  const [s, t] = readLine().split(" ").map(Number);
  //A[i]がs以上ある時 A[i]からs減らし、A[i+1]にt増やす
  //A[i]がs未満になるまで繰り返す
  A[i+1] += Math.floor( A[i] / s) * t
}
console.log(A[N-1]);