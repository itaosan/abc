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

//const N = parseInt(readLine());
const [A, B, D] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

// 数列を格納するための配列を初期化
const sequence: number[] = [];

// 初項から末項までループし、公差Dを使って数列を生成
for (let n = A; D > 0 ? n <= B : n >= B; n += D) {
  sequence.push(n);
}

// 生成した等差数列を返す
console.log(sequence.join(" "));
//Number.MIN_VALUE
//Number.MAX_VALUE
