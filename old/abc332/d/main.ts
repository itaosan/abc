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
const [H, W] = readLine().split(" ").map(Number);

let A: number[][] = Array.from(Array(H), () => new Array(W).fill(0));
let B: number[][] = Array.from(Array(H), () => new Array(W).fill(0));

for (let i = 0; i < H; i++) {
  const line = readLine().split(" ").map(Number);
  A[i] = line;
}
for (let i = 0; i < H; i++) {
  const line = readLine().split(" ").map(Number);
  B[i] = line;
}

function swapRows(matrix: number[][], row1: number, row2: number): number[][] {
  const result = matrix.map(row => [...row]);
  [result[row1], result[row2]] = [result[row2], result[row1]];
  return result;
}

function swapColumns(matrix: number[][], col1: number, col2: number): number[][] {
  const result = matrix.map(row => [...row]);
  for (let i = 0; i < matrix.length; i++) {
      [result[i][col1], result[i][col2]] = [result[i][col2], result[i][col1]];
  }
  return result;
}

function toTuple(matrix: number[][]): string {
  return JSON.stringify(matrix);
}

function bfs(H: number, W: number, A: number[][], B: number[][]): number {
  const d: Record<string, number> = {};
  const q: number[][][] = [A];
  d[toTuple(A)] = 0;

  while (q.length > 0) {
      const a = q.shift()!;
      for (let i = 0; i < H - 1; i++) {
          const b = swapRows(a, i, i + 1);
          const bTuple = toTuple(b);
          if (!(bTuple in d)) {
              d[bTuple] = d[toTuple(a)] + 1;
              q.push(b);
          }
      }
      for (let j = 0; j < W - 1; j++) {
          for (let i = 0; i < H; i++) {
              const b = swapColumns(a, j, j + 1);
              const bTuple = toTuple(b);
              if (!(bTuple in d)) {
                  d[bTuple] = d[toTuple(a)] + 1;
                  q.push(b);
              }
          }
      }
  }
  return toTuple(B) in d ? d[toTuple(B)] : -1;
}

console.log(bfs(H, W, A, B));