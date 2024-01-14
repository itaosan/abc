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

const str = N.toString(2)

let cnt = 0

for (let i = 0; i < str.length; i++) {
  if (str[str.length - i -1] === "0") {
    cnt++
  }else{
    break
  }
}

console.log(cnt)
//Number.MIN_VALUE
//Number.MAX_VALUE
