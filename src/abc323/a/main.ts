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
  const S = input[0].split("").map(Number);

  for (let i = 0; i < 16; i++) {
    const val = S[i];
    if (i % 2 === 1) {
      if (val === 1) {
        console.log("No");
        return;
      }
    }
  }
  console.log("Yes");
});
