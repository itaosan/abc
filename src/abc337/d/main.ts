import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [H, W, K] = readLine().split(" ").map(Number);

const grid = [];
for (let i = 0; i < H; i++) {
  grid.push(readLine());
}

const result = minOperations(H, W, K, grid);
console.log(result); // 結果を出力

// 最小の操作回数を計算する関数
function minOperations(H: number, W: number, K: number, grid: string[]): number {
  // KがHまたはWより大きい場合、条件を満たすことは不可能
  if (K > H && K > W) return -1;

  // 行と列のDPテーブルを初期化
  let rowDP =
    W >= K
      ? Array(H)
          .fill(0)
          .map(() => Array(Math.max(W - K + 1, 0)).fill(Infinity))
      : [];
  let colDP =
    H >= K
      ? Array(Math.max(H - K + 1, 0))
          .fill(0)
          .map(() => Array(W).fill(Infinity))
      : [];

  // 行のDPテーブルを埋める
  for (let i = 0; i < H; i++) {
    if (W < K) break;
    let countDot = 0,
      containsX = 0;
    for (let j = 0; j < K; j++) {
      if (grid[i][j] === ".") countDot++;
      if (grid[i][j] === "x") containsX++;
    }
    if (containsX === 0) rowDP[i][0] = countDot;

    for (let j = 1; j <= W - K; j++) {
      if (grid[i][j + K - 1] === ".") countDot++;
      if (grid[i][j - 1] === ".") countDot--;
      if (grid[i][j + K - 1] === "x") containsX++;
      if (grid[i][j - 1] === "x") containsX--;

      if (containsX === 0) rowDP[i][j] = countDot;
    }
  }

  // 列のDPテーブルを埋める
  for (let j = 0; j < W; j++) {
    if (H < K) break;
    let countDot = 0,
      containsX = 0;
    for (let i = 0; i < K; i++) {
      if (grid[i][j] === ".") countDot++;
      if (grid[i][j] === "x") containsX++;
    }
    if (containsX === 0) colDP[0][j] = countDot;

    for (let i = 1; i <= H - K; i++) {
      if (grid[i + K - 1][j] === ".") countDot++;
      if (grid[i - 1][j] === ".") countDot--;
      if (grid[i + K - 1][j] === "x") containsX++;
      if (grid[i - 1][j] === "x") containsX--;

      if (containsX === 0) colDP[i][j] = countDot;
    }
  }

  // 最小操作回数を見つける
  let minOps = Math.min(Math.min(...rowDP.flat()), Math.min(...colDP.flat()));

  // 最小操作回数が見つからない場合は -1 を返す
  return minOps === Infinity ? -1 : minOps;
}
