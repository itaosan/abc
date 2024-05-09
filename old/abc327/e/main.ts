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
  const N = parseInt(input[0]);
  const P = input[1].split(" ").map(Number);

  const A =  [1000,1200];

  console.log(calculateR(A,2))


});

function calculateR(Q: number[], k: number): number {
  // 分子の計算
  let numerator = 0;
  for (let i = 1; i <= k; i++) {
    numerator += Math.pow(0.9, k - i) * Q[i - 1]; // 配列のインデックスは0から始まるため i - 1 としています
  }

  // 分母の計算
  let denominator = 0;
  for (let i = 1; i <= k; i++) {
    denominator += Math.pow(0.9, k - i);
  }

  // Rの計算
  let R = (numerator / denominator) - (1200 / Math.sqrt(k));

  return R;
}

