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

//const N = parseInt(readLine());
const [N, Q] = readLine().split(" ").map(Number);
//const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

//グリッドのBの数
const cell: number[][] = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

for (let i = 0; i < N; i++) {
  const val = readLine().split("");
  for (let j = 0; j < val.length; j++) {
    cell[i + 1][j + 1] = cell[i][j + 1] + cell[i + 1][j] - cell[i][j];

    if (val[j] === "B") {
      cell[i + 1][j + 1]++;
    }
  }
}

console.log(cell);

for (let i = 0; i < Q; i++) {
  const [A, B, C, D] = readLine().split(" ").map(Number);
  const y_nagasa = C - A + 1;
  const x_nagasa = D - B + 1;
  let sum = 0;
  //左上の角
  const mody = A % N;
  const modx = B % N;
  //const mody_end

  //上の辺
  //右上の角
  //左の辺
  //右の辺
  //左下の角
  //下の辺
  //右下の角
  //真ん中
}
//Number.MIN_VALUE
//Number.MAX_VALUE
