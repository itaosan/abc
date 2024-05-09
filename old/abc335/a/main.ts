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
const S = readLine()
//const h = [0, ...readLine().split(" ").map(Number)];

//さいごの1文字を4にする

const s = S.slice(0, S.length - 1) + "4";

console.log(s);

//Number.MIN_VALUE
//Number.MAX_VALUE
