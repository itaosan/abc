import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

//グリッドを入れる配列を2つ定義
const grid1 = new Array(N);
const grid2 = new Array(N);

for (let i = 0; i < N; i++) {
  grid1[i] = readLine().split("");
}
for (let i = 0; i < N; i++) {
  grid2[i] = readLine().split("");
}

let x = 0;
let y = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid1[i][j] !== grid2[i][j]) {
      x = i+1;
      y = j+1;
    }
  }
}

console.log(x, y);