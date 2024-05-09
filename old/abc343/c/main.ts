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

const N = BigInt(readLine());
//const h = [0, ...readLine().split(" ").map(Number)];

let target = 1000000;

for (let i = target; i > 0; i--) {
  const ans = BigInt(Math.pow(i, 3));
  if (ans <= N) {
    //ansを文字列にし、その文字列が回文かどうか調べる
    const str = ans.toString();
    const len = str.length;
    let isPalindrome = true;
    for (let j = 0; j < len; j++) {
      if (str[j] !== str[len - j - 1]) {
        isPalindrome = false;
        break;
      }
    }
    if (isPalindrome) {
      console.log(ans.toString());
      break;
    }
  }
}

//Number.MIN_VALUE
//Number.MAX_VALUE
