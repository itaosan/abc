import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  //const N = parseInt(input[0]);
  const [N, M] = input[0].split(" ").map(Number);
  const L = input[1].split(" ").map(Number);

  function minimumWindowWidth(N: number, M: number, L: number[]): number {
    let minW = Math.max(...L);
    let maxW = L.reduce((a, b) => a + b) + N - 1;

    while (minW < maxW) {
      const midW = Math.floor((minW + maxW) / 2);
      if (isWidthEnough(midW, M, L)) {
        maxW = midW;
      } else {
        minW = midW + 1;
      }
    }

    return minW;
  }

  function isWidthEnough(W: number, M: number, L: number[]): boolean {
    let lines = 1;
    let currentLineWidth = L[0];

    for (let i = 1; i < L.length; i++) {
      if (currentLineWidth + 1 + L[i] <= W) {
        currentLineWidth += 1 + L[i];
      } else {
        lines++;
        currentLineWidth = L[i];
      }
    }

    return lines <= M;
  }

  console.log(minimumWindowWidth(N, M, L)); // 26

  // const N1 = 13;
  // const M1 = 3;
  // const L1 = [9, 5, 2, 7, 1, 8, 8, 2, 1, 5, 2, 3, 6];
  // console.log(minimumWindowWidth(N1, M1, L1)); // 26

  // const N2 = 10;
  // const M2 = 1;
  // const L2 = [
  //   1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000, 1000000000,
  //   1000000000,
  // ];
  // console.log(minimumWindowWidth(N2, M2, L2)); // 10000000009

  // const N3 = 30;
  // const M3 = 8;
  // const L3 = [
  //   8, 55, 26, 97, 48, 37, 47, 35, 55, 5, 17, 62, 2, 60, 23, 99, 73, 34, 75, 7, 46, 82, 84, 29, 41, 32, 31, 52, 32, 60,
  // ];
  // console.log(minimumWindowWidth(N3, M3, L3)); // 189
});
