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
const S = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

let ans = "";
let lcnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === '|') {
    lcnt ++;
  } else {
    if (lcnt != 1) {
      ans += S[i];
    }
  }
}
console.log(ans);

//Number.MIN_VALUE
//Number.MAX_VALUE
