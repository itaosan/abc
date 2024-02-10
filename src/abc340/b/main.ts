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

const Q = parseInt(readLine());
// const [N, M] = readLine().split(" ").map(Number);
// const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

const ans = [];
for (let i = 0; i < Q; i++) {
  const [Q1, Q2] = readLine().split(" ").map(Number);
  if (Q1 === 1) {
    ans.push(Q2);
  } else {
    const index = ans.length - Q2;

    console.log(ans[index]);
  }
}

//Number.MIN_VALUE
//Number.MAX_VALUE
