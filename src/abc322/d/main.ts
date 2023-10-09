import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Grid = string[];

// 結果を出力してプログラムを終了する関数
function printAndExit(s: string): never {
  console.log(s);
  process.exit(0);
}

// グリッドを右に90度回転させる関数
const rotate = (grid: Grid): Grid => {
  const newGrid = grid[0].split("").map(() => "");
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[3 - j] += grid[i][j];
    }
  }
  return newGrid;
};

// 指定された座標がグリッド内にあるかを判定する関数
function isInGrid(i: number, j: number): boolean {
  return 0 <= i && i < 4 && 0 <= j && j < 4;
}

// ピースを指定された位置に配置できるかを判定する関数
function canPut(exist: number[][], piece: Grid, di: number, dj: number): boolean {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (piece[i][j] === "#") {
        const ni = i + di;
        const nj = j + dj;
        if (!isInGrid(ni, nj)) return false;
        if (exist[ni][nj] === 1) return false;
        exist[ni][nj] = 1;
      }
    }
  }
  return true;
}

// ピースを再帰的に配置して探索する関数
function dfs(i: number, exist: number[][], pieces: Grid[]): void {
  if (i === 3) {
    const ok = exist.flat().every((v) => v === 1);
    if (ok) printAndExit("Yes");
    return;
  }

  for (let di = -3; di <= 3; di++) {
    for (let dj = -3; dj <= 3; dj++) {
      const newExist = exist.map((row) => row.slice());
      if (canPut(newExist, pieces[i], di, dj)) {
        dfs(i + 1, newExist, pieces);
      }
    }
  }
}

let pieces: Grid[] = [];
let inputCount = 0;

// 行ごとに入力を処理する
rl.on("line", (input: string) => {
  if (inputCount % 4 === 0) pieces.push([]);
  pieces[Math.floor(inputCount / 4)].push(input);

  inputCount++;
  if (inputCount === 12) rl.close(); // すべての入力を受け取ったらストリームを閉じる
});

// すべての入力を受け取った後に実行する関数
rl.on("close", () => {
  // 各ピースとグリッドの回転に対して探索を実行
  for (let t = 0; t < 4; t++) {
    for (let u = 0; u < 4; u++) {
      dfs(
        0,
        [...Array(4)].map(() => Array(4).fill(0)),
        pieces
      );
      pieces[2] = rotate(pieces[2]); //3番目
    }
    pieces[1] = rotate(pieces[1]); //2番目
  }
  printAndExit("No");
});
