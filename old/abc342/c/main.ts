import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const S = readLine().split("");
const Q = parseInt(readLine());
//aからzまでの文字列を生成
const from = "abcdefghijklmnopqrstuvwxyz";
let to = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < Q; i++) {
  const [a, b] = readLine().split(" ");
  const regex = new RegExp(a, "g");
  to = to.replace(regex, b);
}

for (let i = 0; i < S.length; i++) {
  S[i] = to[from.indexOf(S[i])];
}

console.log(S.join(""));
