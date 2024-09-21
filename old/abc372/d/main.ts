import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const H = readLine().split(" ").map(Number);

// ansを全て0で初期化
const ans: number[] = Array(N).fill(0);

// スタックの初期化
const stc: number[] = [];

// 逆順にループ処理を行う
for (let i = N - 2; i >= 0; i--) {
  // スタックのトップと比較して、H[i + 1]より小さい値を取り除く
  while (stc.length > 0 && H[stc[stc.length - 1]] < H[i + 1]) {
    stc.pop();
  }

  // 現在のインデックス i + 1 をスタックに追加
  stc.push(i + 1);

  // 現在の ans[i] にスタックの長さを格納
  ans[i] = stc.length;
}

// 結果を出力
console.log(ans.join(" "));
