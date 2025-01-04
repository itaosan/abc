import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    if (this.front >= this.data.length) return undefined;
    const item = this.data[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.front >= this.data.length;
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [H, W] = readLine().split(" ").map(Number);
//const S = readLine()

const grid: string[] = [];
for (let i = 0; i < H; i++) {
  grid.push(readLine());
}

let startY = -1;
let startX = -1;
let goalY = -1;
let goalX = -1;

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    const c = grid[i][j];
    if (c === "S") {
      startY = i;
      startX = j;
    } else if (c === "G") {
      goalY = i;
      goalX = j;
    }
  }
}

// [y, x, dir, dist]
// dir = 0 次は縦 1 次は横
const queue: Array<[number, number, number, number]> = [];

const visited = new Array(H);
for (let i = 0; i < H; i++) {
  visited[i] = new Array(W);
  for (let j = 0; j < W; j++) {
    visited[i][j] = [false, false];
  }
}

// 縦の場合と横の場合
queue.push([startY, startX, 0, 0]);
queue.push([startY, startX, 1, 0]);
visited[startY][startX][0] = true;
visited[startY][startX][1] = true;

let answer = -1;

//BFS
while (queue.length > 0) {
  const [cy, cx, dir, dist] = queue.shift()!;

  if (cy === goalY && cx === goalX) {
    answer = dist;
    break;
  }

  if (dir === 0) {
    // 次は縦
    // 上
    const nyUp = cy - 1;
    if (nyUp >= 0) {
      if (!visited[nyUp][cx][1] && grid[nyUp][cx] !== "#") {
        visited[nyUp][cx][1] = true;
        queue.push([nyUp, cx, 1, dist + 1]);
      }
    }
    // 下
    const nyDown = cy + 1;
    if (nyDown < H) {
      if (!visited[nyDown][cx][1] && grid[nyDown][cx] !== "#") {
        visited[nyDown][cx][1] = true;
        queue.push([nyDown, cx, 1, dist + 1]);
      }
    }
  } else {
    // 次は横
    // 左
    const nxLeft = cx - 1;
    if (nxLeft >= 0) {
      if (!visited[cy][nxLeft][0] && grid[cy][nxLeft] !== "#") {
        visited[cy][nxLeft][0] = true;
        queue.push([cy, nxLeft, 0, dist + 1]);
      }
    }
    // 右
    const nxRight = cx + 1;
    if (nxRight < W) {
      if (!visited[cy][nxRight][0] && grid[cy][nxRight] !== "#") {
        visited[cy][nxRight][0] = true;
        queue.push([cy, nxRight, 0, dist + 1]);
      }
    }
  }
}

console.log(answer);
