import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [H, W, D] = readLine().split(" ").map(Number);
//const S = readLine()
const map = [];

for (let i = 0; i < H; i++) {
  map.push(readLine().split("").map(String));
}

let max = 0;
//点を2か所置いた時のDの範囲にある.の数を求める
for (let iX = 0; iX < H; iX++) {
  for (let jX = 0; jX < W; jX++) {
    for (let iY = 0; iY < H; iY++) {
      for (let jY = 0; jY < W; jY++) {
        //置けないときは何もしない
        if (map[iX][jX] === "." && map[iY][jY] === ".") {
          //置いたかどうかのチェック用マス
          const checkMap = new Array(H).fill(0).map(() => new Array(W).fill(false));
          //(iX,iY)からマンハッタン距離でDの範囲にある.の数を求める
          let count = 0;
          for (let i = 0; i < H; i++) {
            for (let j = 0; j < W; j++) {
              if(Math.abs(i-iX)+Math.abs(j-jX) <= D && !checkMap[i][j] && map[i][j] === "."){
                count++;
                checkMap[i][j] = true;
              }
            }
          }

          for (let i = 0; i < H; i++) {
            for (let j = 0; j < W; j++) {
              if(Math.abs(i-iY)+Math.abs(j-jY) <= D && !checkMap[i][j] && map[i][j] === "."){
                count++;
                checkMap[i][j] = true;
              }
            }
          }
          max = Math.max(max, count);
        }
      }
    }
  }
}

console.log(max);
