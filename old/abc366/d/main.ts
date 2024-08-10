import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());

// 3次元配列を初期化
const array: number[][][] = new Array(N);
for (let i = 0; i < N; i++) {
  array[i] = new Array(N);
  for (let j = 0; j < N; j++) {
    array[i][j] = new Array(N);
    const val = readLine().split(" ").map(Number);
    for (let k = 0; k < N; k++) {
      array[i][j][k] = val[k];
    }
  }
}

// 3次元累積和を計算
const prefixSum: number[][][] = new Array(N + 1);
for (let i = 0; i <= N; i++) {
  prefixSum[i] = new Array(N + 1);
  for (let j = 0; j <= N; j++) {
    prefixSum[i][j] = new Array(N + 1).fill(0);
  }
}

// 累積和を求める
for (let x = 1; x <= N; x++) {
  for (let y = 1; y <= N; y++) {
    for (let z = 1; z <= N; z++) {
      prefixSum[x][y][z] =
        array[x - 1][y - 1][z - 1] +
        prefixSum[x - 1][y][z] +
        prefixSum[x][y - 1][z] +
        prefixSum[x][y][z - 1] -
        prefixSum[x - 1][y - 1][z] -
        prefixSum[x - 1][y][z - 1] -
        prefixSum[x][y - 1][z - 1] +
        prefixSum[x - 1][y - 1][z - 1];
    }
  }
}

// クエリで指定された範囲の合計を求める関数
function rangeSum(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number {
  return (
    prefixSum[x2 + 1][y2 + 1][z2 + 1] -
    prefixSum[x1][y2 + 1][z2 + 1] -
    prefixSum[x2 + 1][y1][z2 + 1] -
    prefixSum[x2 + 1][y2 + 1][z1] +
    prefixSum[x1][y1][z2 + 1] +
    prefixSum[x1][y2 + 1][z1] +
    prefixSum[x2 + 1][y1][z1] -
    prefixSum[x1][y1][z1]
  );
}
// クエリを処理
const Q = Number.parseInt(readLine());
for (let i = 0; i < Q; i++) {
  const [x1, x2,y1, y2,z1,   z2] = readLine().split(" ").map(Number);
  console.log(rangeSum(x1-1, x2-1, y1-1, y2-1, z1-1, z2-1));
}
