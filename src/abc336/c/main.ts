import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

let N: number = parseInt(readLine());
N--;
let a: number[] = [];

while (N) {
    a.push(N % 5);
    N = Math.floor(N / 5);
}

if (a.length === 0) {
    a.push(0);
}

a.reverse();

// 各要素を2倍して出力
let result = '';
a.forEach((x) => result += (x * 2).toString());
console.log(result);
