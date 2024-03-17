import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, H, W] = readLine().split(" ").map(Number);

// type Tile = { width: number; height: number; width2: number; height2: number };

// // マス目の初期化
// const grid: boolean[][] = Array(H)
//   .fill(0)
//   .map(() => Array(W).fill(false));

// DFSを用いてマス目にタイルを配置する関数
type Tile = { width: number; height: number };

const tiles: Tile[] = [];
for (let i = 0; i < N; i++) {
  const [width, height] = readLine().split(" ").map(Number);
  tiles.push({ width, height });
}

function canCoverAll(gridWidth: number, gridHeight: number, tiles: Tile[]): boolean {
  const grid: boolean[][] = Array.from({ length: gridHeight }, () => Array(gridWidth).fill(false));

  // タイルを配置する関数
  function placeTile(x: number, y: number, tile: Tile, doPlace: boolean): boolean {
    if (x + tile.width > gridWidth || y + tile.height > gridHeight) return false;
    for (let i = y; i < y + tile.height; i++) {
      for (let j = x; j < x + tile.width; j++) {
        if (grid[i][j] && doPlace) return false; // 既に配置されている
        grid[i][j] = doPlace;
      }
    }
    return true;
  }

  // DFSを使用して全てのマスをカバーできるかどうかをチェック
  function dfs(index: number): boolean {
    if (grid.every((row) => row.every((cell) => cell))) {
      return true; // 全てのマスをカバーできた
    }

    const { width, height } = tiles[index];
    for (let y = 0; y < gridHeight; y++) {
      for (let x = 0; x < gridWidth; x++) {
        // タイルをそのまま、または90度回転させて配置
        for (const tile of [
          { width, height },
          { width: height, height: width },
        ]) {
          if (placeTile(x, y, tile, true) && dfs(index + 1)) return true;
          placeTile(x, y, tile, false); // 戻す
        }
      }
    }
    if (index === tiles.length) return false; // 全てのタイルを試した
    return dfs(index + 1); // このタイルを使わない
  }

  return dfs(0);
}

console.log(canCoverAll(W, H, tiles) ? "Yes" : "No");
