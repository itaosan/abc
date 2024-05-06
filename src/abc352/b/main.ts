import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const S = readLine();
const T = readLine();
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()
const ans = [];
let sCnt = 0;
for (let i = 0; i < T.length; i++) {
  if (S[sCnt] === T[i]) {
    sCnt++;
    ans.push(i+1);
  }
}
console.log(ans.join(" "));
