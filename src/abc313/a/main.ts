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
  const hito1 = P[0];
  const max = Math.max(...P.slice(1));
  let val = max - hito1 + 1
  if (val < 0) val =0
  console.log(val);
});
