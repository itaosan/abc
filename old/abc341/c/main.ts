import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}
//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [H, W, N] = readLine().split(" ").map(Number);
const T = readLine();

const S = [];
for (let i = 0; i < H; i++) {
  S.push(readLine());
}

// 高橋君が到達可能なマスを記録するためのセット
const possiblePositions = new Set<string>();

// 全ての陸マスについて、それが開始地点であるかのようにシミュレーションする
for (let i = 1; i < H - 1; i++) {
  for (let j = 1; j < W - 1; j++) {
    if (S[i][j] === ".") {
      let x = j,
        y = i;
      let isValid = true;
      for (const move of T) {
        if (move === "U") {
          x += dx[0];
          y += dy[0];
        } else if (move === "D") {
          x += dx[2];
          y += dy[2];
        } else if (move === "L") {
          x += dx[3];
          y += dy[3];
        } else if (move === "R") {
          x += dx[1];
          y += dy[1];
        }

        if (y < 0 || y >= H || x < 0 || x >= W || S[y][x] === "#") {
          isValid = false;
          break;
        }
      }
      if (isValid) possiblePositions.add(`${y},${x}`);
    }
  }
}
console.log(possiblePositions.size); // 出力: 高橋君が現在いる可能性のあるマスの数
