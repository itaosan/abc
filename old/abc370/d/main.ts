import * as fs from "node:fs";

// Union-Find 構造体 (行・列の左右や上下の範囲も保持する)
class UnionFind {
  parents: number[];
  L: number[];
  R: number[];

  constructor(n: number) {
    this.parents = Array(n).fill(-1);
    this.L = Array(n)
      .fill(0)
      .map((_, i) => i);
    this.R = Array(n)
      .fill(0)
      .map((_, i) => i);
  }

  // find (経路圧縮)
  find(x: number): number {
    if (this.parents[x] < 0) {
      return x;
    }
    this.parents[x] = this.find(this.parents[x]);
    return this.parents[x];
  }

  // union (ランクで結合)
  merge(onx: number, ony: number) {
    let x = this.find(onx);
    let y = this.find(ony);

    if (x === y) return;

    if (this.parents[x] > this.parents[y]) {
      [x, y] = [y, x]; // サイズに基づいて統合
    }

    this.parents[x] += this.parents[y];
    this.L[x] = Math.min(this.L[x], this.L[y]);
    this.R[x] = Math.max(this.R[x], this.R[y]);
    this.parents[y] = x;
  }

  // 範囲取得
  get_LR(onx: number): [number, number] {
    const x = this.find(onx);
    return [this.L[x], this.R[x]];
  }
}

// 入力の処理
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [H, W, Q] = input[0].split(" ").map(Number);

// 行・列ごとの Union-Find 構造体を作成
const uf_row = Array.from({ length: H + 2 }, () => new UnionFind(W + 2));
const uf_col = Array.from({ length: W + 2 }, () => new UnionFind(H + 2));

// 壁の状態を管理する配列 (壊されたかどうか)
const erased = Array.from({ length: H + 2 }, () => Array(W + 2).fill(0));

// 残りの壁の数
let remainingWalls = H * W;

// 壁を破壊する関数
function erase(x: number, y: number) {
  if (x >= 1 && x <= H && y >= 1 && y <= W && erased[x][y] === 0) {
    erased[x][y] = 1; // 壁を壊す
    remainingWalls--;

    // 左のマスが壊されていれば統合
    if (erased[x][y - 1]) uf_row[x].merge(y - 1, y);
    // 右のマスが壊されていれば統合
    if (erased[x][y + 1]) uf_row[x].merge(y, y + 1);
    // 上のマスが壊されていれば統合
    if (erased[x - 1][y]) uf_col[y].merge(x - 1, x);
    // 下のマスが壊されていれば統合
    if (erased[x + 1][y]) uf_col[y].merge(x, x + 1);
  }
}

// クエリ処理
for (let i = 1; i <= Q; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  if (erased[x][y] === 0) {
    // 壁がまだ壊されていないならそのまま壊す
    erase(x, y);
  } else {
    // すでに壊されている場合、上下左右の次の壁を探索して壊す
    const [Lx, Rx] = uf_col[y].get_LR(x);
    const [Ly, Ry] = uf_row[x].get_LR(y);

    // 上下左右の隣接する壁を壊す
    erase(Lx - 1, y); // 上方向
    erase(Rx + 1, y); // 下方向
    erase(x, Ly - 1); // 左方向
    erase(x, Ry + 1); // 右方向
  }
}

// 結果を出力
console.log(remainingWalls);
