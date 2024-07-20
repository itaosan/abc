import * as fs from "node:fs";

// 移動方向の定義
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

// 入力の読み込み
const [h, w, n] = readLine().split(' ').map(Number);
let ans = h * w;

// 定数の設定
const MAX_H = 1000;
const MAX_W = 1000;
const MAX_Y = 100000;

// 2次元配列やキューなどを用意
const queue: number[][] = Array.from({ length: MAX_Y + 1 }, () => []);
const a: number[][] = [];
const inland: boolean[][] = [];


// グリッドの初期化
for (let i = 0; i < h; i++) {
  a[i] = readLine().split(' ').map(Number);
  inland[i] = Array(w).fill(true);
  for (let j = 0; j < w; j++) {
    if (i === 0 || i === h - 1 || j === 0 || j === w - 1) {
      queue[a[i][j]].push(w * i + j);
      inland[i][j] = false;
    }
  }
}


// 幅優先探索の実行
for (let i = 1; i <= n; i++) {
  while (queue[i].length > 0) {
    ans--;
    const z = queue[i].shift()!;
    const x = Math.floor(z / w);
    const y = z % w;

    for (let j = 0; j < 4; j++) {
      const nx = x + dx[j];
      const ny = y + dy[j];

      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        if (inland[nx][ny]) {
          queue[Math.max(a[nx][ny], i)].push(w * nx + ny);
          inland[nx][ny] = false;
        }
      }
    }
  }
  console.log(ans);
}
