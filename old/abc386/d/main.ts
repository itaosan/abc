import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const xyc: { x: number; y: number; c: string }[] = [];

// データをパースして配列に追加
for (let i = 1; i <= M; i++) {
  const [x, y, c] = readLine().split(" ").map(String);
  xyc.push({ x: Number(x), y: Number(y), c });
}

// xでソートし、xが同じ場合はyでソート
xyc.sort((a, b) => {
  if (a.x !== b.x) return a.x - b.x; // xが異なる場合はxで比較
  return a.y - b.y; // xが同じ場合はyで比較
});

let minY = 1 << 30; // 十分大きな値
let ans = "Yes";

// 条件を確認
for (const { x, y, c } of xyc) {
  if (c === "W") {
    minY = Math.min(minY, y); // minYを更新
    console.error(`minY: ${minY}`);
  } else {
    console.error(`x: ${x}, y: ${y}, minY: ${minY}`);
    if (y >= minY) {
      ans = "No";
      break;
    }
  }
}

console.log(ans); // 結果を出力
