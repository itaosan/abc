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
  let N = BigInt(parseInt(input[0]));

  //2と3で割り続け1が残るかどうか
  while (N % BigInt(2) === BigInt(0)) {
    N /= BigInt(2);
  }
  while (N % BigInt(3) === BigInt(0)) {
    N /= BigInt(3);
  }

  if (N === BigInt(1)) console.log("Yes");
  else console.log("No");
});
