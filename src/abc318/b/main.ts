import { validateHeaderName } from "http";
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
  const map: number[][] = Array(100)
    .fill(0)
    .map(() => Array(100).fill(0));

  const N = parseInt(input[0]);
  for (let i = 0; i < N; i++) {
    const [A, B, C, D] = input[i + 1].split(" ").map(Number);
    for (let x = A; x < B; x++) {
      for (let y = C; y < D; y++) {
        map[x][y] = 1;
      }
    }
  }

  let cnt = 0;
  for (let x = 0; x < 100; x++) {
    for (let y = 0; y < 100; y++) {
      if (map[x][y] === 1) cnt++;
    }
  }

  console.log(cnt);
});
