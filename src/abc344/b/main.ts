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

const ans = []
while (true) {
  const val = parseInt(readLine())
  ans.push(val)
  if (val === 0) {
    break
  }
  
}
//ansを後ろから出力
for (let i = ans.length - 1; i >= 0; i--) {
  console.log(ans[i])
}

//Number.MIN_VALUE
//Number.MAX_VALUE
