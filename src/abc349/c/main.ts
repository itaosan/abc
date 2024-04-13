import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);

//大文字にしてＳに格納
const S = readLine().toUpperCase();
const T = readLine();

//TはSの部分文字列かどうかを判定
let cnt = 0;
let start =0
let hakkenn = false;
while (true) {
  let flg = false;
  for (let i = start; i < S.length; i++) {
    if (S[i] === T[cnt]) {
      cnt++;
      start = i + 1;
      flg = true;
    }
  }
  if (!flg) {
    break;
  }
  if (cnt === 3) {
    hakkenn = true;
    break;
  }
}
console.error(`cnt: ${cnt} T[2]: ${T[2]}`);
if (cnt === 2 && T[2] === "X") {
  hakkenn = true;
}

hakkenn ? console.log("Yes") : console.log("No");
