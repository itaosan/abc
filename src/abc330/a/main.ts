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

//const N = parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
let ans = 0

for (let i = 0; i < N; i++) {
  if (A[i] >= M ) {
    ans++
  }

  
}

console.log(ans)

//const h = [0, ...readLine().split(" ").map(Number)];

//Number.MIN_VALUE
//Number.MAX_VALUE
