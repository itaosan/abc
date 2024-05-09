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

const N = parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let grid: string[] = [];

for (let i = 0; i < N; i++) {
  grid.push(readLine());
}

let count = 0;

// 各行と各列における 'o' の位置を記録するための配列
const rows: number[] = new Array(N).fill(0);
const cols: number[] = new Array(N).fill(0);

// 'o' の位置をカウントアップ
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === "o") {
      rows[i]++;
      cols[j]++;
    }
  }
}

// 条件を満たす三つ組を探してカウントする
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === "o") {
      count += (rows[i] - 1) * (cols[j] - 1);
    }
  }
}

console.log(count);

//Number.MIN_VALUE
//Number.MAX_VALUE
