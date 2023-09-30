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
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);

  let cnt = 0;
  for (let i = 1; i <= N; i++) {
    let hanabi = A[cnt];
    if (i <= hanabi) {
      console.log(hanabi - i);
    } else {
      cnt++;
      hanabi = A[cnt];
      console.log(hanabi - i);
    }
  }
});
