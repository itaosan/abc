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
  const [N, H, X] = input[0].split(" ").map(Number);
  const P = input[1].split(" ").map(Number);

  for (let i = 0; i < P.length; i++) {
    if (H + P[i] >= X) {
      console.log(i + 1);
      break;
    }
  }
});
