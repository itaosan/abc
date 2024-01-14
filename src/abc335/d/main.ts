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

const N = parseInt(readLine());
//const h = [0, ...readLine().split(" ").map(Number)];

const spiralMatrix = createSpiralMatrix(N);
printMatrix(spiralMatrix);


function createSpiralMatrix(N: number): (number | string)[][] {
  const matrix: (number | string)[][] = Array.from({ length: N }, () => Array(N).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;
  let boundary = N;
  let direction = 0; // 0: right, 1: down, 2: left, 3: up

  while (num < N * N) {
      matrix[row][col] = num++;

      if (direction === 0 && (col === boundary - 1 || matrix[row][col + 1] !== 0)) {
          direction++;
      } else if (direction === 1 && (row === boundary - 1 || matrix[row + 1][col] !== 0)) {
          direction++;
      } else if (direction === 2 && (col === N - boundary || matrix[row][col - 1] !== 0)) {
          direction++;
      } else if (direction === 3 && (row === N - boundary + 1 || matrix[row - 1][col] !== 0)) {
          direction++;
          boundary--;
      }

      if (direction === 4) direction = 0;

      if (direction === 0) col++;
      else if (direction === 1) row++;
      else if (direction === 2) col--;
      else if (direction === 3) row--;
  }

  // 中央に「T」を配置
  matrix[Math.floor(N / 2)][Math.floor(N / 2)] = 'T';

  return matrix;
}

function printMatrix(matrix: (number | string)[][]): void {
  matrix.forEach(row => console.log(row.join(' ')));
}



//Number.MIN_VALUE
//Number.MAX_VALUE
