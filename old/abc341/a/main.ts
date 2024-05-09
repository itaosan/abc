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

const N = parseInt(readLine());
let str = ""
//N個の0とN+1個の1を交互に出力
for (let i = 1; i <= N*2+1; i++) {
  if (i % 2 === 0) {
    str += "0";
  } else {
    str += "1";
  }
}
console.log(str);


//Number.MIN_VALUE
//Number.MAX_VALUE
