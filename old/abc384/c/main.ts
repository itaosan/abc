import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [A, B, C, D, E] = readLine().split(" ").map(Number);
//const S = readLine()

//点数と問題の組み合わせにする
const arr: [number, string][] = [
  [A, "A"],
  [B, "B"],
  [C, "C"],
  [D, "D"],
  [E, "E"],
];
//すべての組み合わせを計算して配列に格納
const ans: [number, string][] = [];
//ビット全探索
for (let bit = 1; bit < 1 << 5; bit++) {
  let val = 0;
  let val2 = "";
  for (let i = 0; i < 5; i++) {
    if (bit & (1 << i)) {
      val += arr[i][0];
      val2 += arr[i][1];
    }
  }
  ans.push([val, val2]);
}
//降順にソート、点数が同じ場合は問題の辞書順
ans.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] < b[1] ? -1 : 1;
  }
  return b[0] - a[0];
});

for (let i = 0; i < ans.length; i++) {
  console.log(ans[i][1]);
}