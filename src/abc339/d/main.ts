import * as fs from "fs";

const DEBUG = true;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

// グローバル変数を定義します。
const inf = 1000000010;
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

// 必要な型定義をします
interface Position {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  step: number;
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const n = parseInt(readLine());

const map: boolean[][] = new Array(n);
let px1 = -1;
let py1 = -1;
let px2 = -1;
let py2 = -1;
for (let i = 0; i < n; i++) {
  map[i] = new Array(n);
  for (let j = 0; j < n; j++) {
    map[i][j] = input[i + 1][j] === "#";
    if (input[i + 1][j] === "P") {
      if (px1 < 0) {
        px1 = i;
        py1 = j;
      } else {
        px2 = i;
        py2 = j;
      }
    }
  }
}

const queue: Position[] = [];
let idx = 0;
const visited = new Set<number>();

queue.push({ x1: px1, y1: py1, x2: px2, y2: py2, step: 0 });
visited.add(px1 + py1 * n + px2 * n * n + py2 * n * n * n);

while (idx < queue.length) {
  const current = queue[idx];
  for (let dir = 0; dir < 4; dir++) {
    let nx1 = current.x1 + ((dir + 1) % 2) * Math.sign(dir - 1);
    let ny1 = current.y1 + (dir % 2) * Math.sign(2 - dir);
    let nx2 = current.x2 + ((dir + 1) % 2) * Math.sign(dir - 1);
    let ny2 = current.y2 + (dir % 2) * Math.sign(2 - dir);
    if (nx1 < 0 || nx1 >= n || ny1 < 0 || ny1 >= n || map[nx1][ny1]) {
      nx1 = current.x1;
      ny1 = current.y1;
    }
    if (nx2 < 0 || nx2 >= n || ny2 < 0 || ny2 >= n || map[nx2][ny2]) {
      nx2 = current.x2;
      ny2 = current.y2;
    }
    if (nx1 === nx2 && ny1 === ny2) {
      console.log(current.step + 1);
      process.exit(0);
    }
    const d = nx1 + ny1 * n + nx2 * n * n + ny2 * n * n * n;
    if (!visited.has(d)) {
      visited.add(d);
      queue.push({ x1: nx1, y1: ny1, x2: nx2, y2: ny2, step: current.step + 1 });
    }
  }
  idx++;
}

console.log(-1);
