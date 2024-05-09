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
  const N = BigInt(input[0]);
  let ans = -1;
  for (let A: bigint = BigInt(1); A ** A <= N; A++) {
    if (A ** A === N) {
      ans = Number(A); // 条件を満たす A が見つかった
      break;
    }
  }

  console.log(ans);
});
