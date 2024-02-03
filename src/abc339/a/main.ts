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
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine()
//const h = [0, ...readLine().split(" ").map(Number)];

//文字列Sから一番最後の.以降の文字列を取得
const index = S.lastIndexOf(".");
//index移行の文字列を取得
console.log(S.slice(index + 1));


//Number.MIN_VALUE
//Number.MAX_VALUE
