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

const N = parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

//Aの中身をループ
let min = 0
let cnt = 0
for (let i = 0; i < N; i++) {
  cnt += A[i]
  if(cnt<0){
    min += cnt * -1
    cnt = 0
  }
}
console.log(cnt)
//Number.MIN_VALUE
//Number.MAX_VALUE
