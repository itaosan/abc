import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [h, w] = readLine().split(" ").map(Number);

const s = [];
for (let i = 0; i < h; i++) {
  s.push(readLine());
}

// グラフの隣接リストと使用済みの配列
const e: number[][] = Array.from({ length: 1000000 }, () => []);
const used: number[] = Array(1000000).fill(-1);
let cnt = 0;

// DFS関数
function dfs(s: number, v: number): void {
  if (used[v] === s) return;
  used[v] = s;
  cnt++;
  const sz = e[v].length;
  for (let i = 0; i < sz; i++) {
    dfs(s, e[v][i]);
  }
}

// dxとdyの定義
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

// グラフの構築
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (s[i][j] === "#") continue;

    let can = true;

    for (let k = 0; k < 4; k++) {
      const ni = i + dx[k];
      const nj = j + dy[k];

      if (ni >= 0 && ni < h && nj >= 0 && nj < w) {
        e[i * w + j].push(ni * w + nj);
        if (s[ni][j + dy[k]] === "#") {
          can = false;
        }
      }
    }

    if (!can) {
      e[i * w + j] = [];
    }
  }
}

let ans = 0;

// DFSで各ノードを訪問して最大連結成分の大きさを計算
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (s[i][j] === "." && used[i * w + j] < 0) {
      cnt = 0;
      dfs(i * w + j, i * w + j);
      ans = Math.max(ans, cnt);
    }
  }
}

// 結果を出力
console.log(ans);
