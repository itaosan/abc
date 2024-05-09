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
  const N = input[0].split("").map(Number);
  let num = 10;
  let b = "Yes";
  for (let i = 0; i < N.length; i++) {
    if (num <= N[i]) {
      b = "No";
    }
    num = N[i];
  }
  console.log(b);
});
