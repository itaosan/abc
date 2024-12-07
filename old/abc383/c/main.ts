import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [H, W, D] = readLine().split(" ").map(Number);
//const S = readLine()
const map: string[][] = [];

for (let i = 0; i < H; i++) {
  map.push(readLine().split("").map(String));
}

//console.error(map);
const visited = new Array(H).fill(0).map(() => new Array(W).fill(false));

const queue: [number, number, number][] = [];

let count = 0;

//HのマスからDの距離以内で.のマスの数を数える
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "H") {
      queue.push([i, j, 0]);
    }
  }
}

//BFS
let pos =0
while (pos < queue.length ) {
  const [i, j, ho] = queue[pos];
  pos++;
  visited[i][j] = true;

  const nextHo = ho + 1;
  if (nextHo > D) {
    continue;
  }
  for (let k = 0; k < 4; k++) {
    const nx = i + dx[k];
    const ny = j + dy[k];
    if (0 <= nx && nx < H && 0 <= ny && ny < W && !visited[nx][ny] && map[nx][ny] !== "#") {
      queue.push([nx, ny, nextHo]);
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (visited[i][j] && (map[i][j] === "." || map[i][j] === "H")) {
      count++;
    }
  }
}
console.log(count);
