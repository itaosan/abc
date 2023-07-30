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
  const uri = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const kai = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
});
