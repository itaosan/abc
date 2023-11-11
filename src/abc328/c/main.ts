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
const [N, Q] = readLine().split(" ").map(Number);
const S = readLine();
let l: number[] = [];
let r: number[] = [];
//一個前と同じかどうかの配列
let onazi = Array(S.length + 1).fill(0);
let chk = "";
for (let i = 0; i < S.length; i++) {
  if (chk === S[i]) {
    onazi[i] = onazi[i - 1] + 1;
  } else {
    if (i > 0) onazi[i] = onazi[i - 1];
  }
  chk = S[i];
}

for (let i = 0; i < Q; i++) {
  const [ll, rr] = readLine().split(" ").map(Number);
  console.log(onazi[rr - 1] - onazi[ll - 1]);
}

//const h = [0, ...readLine().split(" ").map(Number)];

//Number.MIN_VALUE
//Number.MAX_VALUE
