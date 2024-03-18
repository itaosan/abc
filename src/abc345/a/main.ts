import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const S = readLine()
//const h = [0, ...readLine().split(" ").map(Number)];

//最初の文字が<で途中が=で最後が>であるかどうか調べる
const chk = "<" + "=".repeat(S.length - 2) + ">";
S === chk ? console.log("Yes") : console.log("No");
