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
//const [N, M] = readLine().split(" ").map(Number);
let A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];
let B = [];
let result = new Array(N).fill(0);

//総和の列
let sum = new Array((10 ** 6)+9).fill(0);

//降順ソート
B = [...A].sort((a, b) => b - a);
//console.log(B)
let cnt = (10 ** 6)+8;
for (let i = 0; i < N; i++) {
  while (cnt > B[i]) {
    sum[cnt - 1] = sum[cnt];
    cnt--;
  }
  sum[cnt] += B[i];
}
//console.log(sum)
for (let i = 0; i < N; i++) {
  result[i] = sum[A[i]+1];
}

console.log(result.join(" "));

//Number.MIN_VALUE
//Number.MAX_VALUE
