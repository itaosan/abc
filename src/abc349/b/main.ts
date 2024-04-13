import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine();

const moji = new Map();

for (let i = 0; i < S.length; i++) {
  //文字が出現するたびにカウントを増やす
  if (moji.has(S[i])) {
    moji.set(S[i], moji.get(S[i]) + 1);
  } else {
    moji.set(S[i], 1);
  }
}

console.error(moji);

//文字数のカウント別の個数を集計
const cnt = new Map();
for (const value of moji.values()) {
  if (cnt.has(value)) {
    cnt.set(value, cnt.get(value) + 1);
  } else {
    cnt.set(value, 1);
  }
}

let flg = true;
//cntに含まれる個数が2種類かどうかを判定
for (const value of cnt.values()) {
  if (value !== 2) {
    flg = false;
    break;
  }
}

if (flg) {
  console.log("Yes");
} else {
  console.log("No");
}
