import * as fs from "fs";
import { getSystemErrorMap } from "util";

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
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

let useA = false;
let useB = false;
let useC = false;
let flg = true;
for (let i = 0; i < S.length; i++) {
  if (S[i] === "A") {
    if (useB || useC) {
      flg = false;
      break;
    }
    useA = true;
  } else if (S[i] === "B") {
    if (useC) {
      flg = false;
      break;
    }
    useA = true;
    useB = true;
  } else if (S[i] === "C") {
    useA = true;
    useB = true;
    useC = true;
  }
}

console.log(flg ? "Yes" : "No");
