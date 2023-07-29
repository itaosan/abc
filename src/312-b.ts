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
  const [N, M] = input[0].split(" ").map(Number);
  const S = input.slice(1);

  for (let i = 0; i < N - 8; i++) {
    for (let j = 0; j < M - 8; j++) {
      if (check(S, i, j)) console.log(`${i + 1} ${j + 1}`);
    }
  }
});

function check(S: string[], x: number, y: number) {
  //縦3×3が# 左上
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      if (S[i][j] !== "#") return false;
    }
  }

  //縦3×3が# 右下
  for (let i = x + 6; i < x + 9; i++) {
    for (let j = y + 6; j < y + 9; j++) {
      if (S[i][j] !== "#") return false;
    }
  }

  //周り空白左上
  if (S[x][y + 3] !== ".") return false;
  if (S[x + 1][y + 3] !== ".") return false;
  if (S[x + 2][y + 3] !== ".") return false;
  for (let j = y; j < y + 4; j++) {
    if (S[x + 3][j] !== ".") return false;
  }

  //周り空白左上
  for (let j = y + 5; j < y + 5 + 4; j++) {
    if (S[x + 5][j] !== ".") return false;
  }
  if (S[x + 6][y + 5] !== ".") return false;
  if (S[x + 7][y + 5] !== ".") return false;
  if (S[x + 8][y + 5] !== ".") return false;

  return true;
}
