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

//100*100のマス目
const grid  = []

const grid2: string[][] = Array.from({ length: 100 }, () =>
  Array(100).fill("")
);

for (let i = 0; i < N; i++) {
  grid.push(readLine())
}


//gridを90度回転させる
let maxrow = 0
let col = N-1
for (let i =0; i < N; i++) {
  const val = grid[i]
  let row = 0
  for (let j = 0; j < val.length; j++) {
    grid2[row][col] = val[j]
    row++
  }
  if (row<maxrow) {
    for (let j = row; j < maxrow; j++) {
      grid2[j][col] = "*"
    }
  }
  maxrow = Math.max(maxrow, row)
  col--
  
}

//grid2を出力
for (let i = 0; i < 100; i++) {
  let row = ""
  for (let j = 0; j < 100; j++) {
    if (grid2[i][j] === "") {
      break
    }
    row += grid2[i][j]
  }
  if (row === "") {
    break
  }
  console.log(row)
}