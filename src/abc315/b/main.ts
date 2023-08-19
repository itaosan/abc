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
  const D = input[1].split(" ").map(Number);
  //const [N, M] = input[0].split(" ").map(Number);
  //const S = input.slice(1);

  let day = 0;

  for (let i = 0; i < N; i++) {
    day += D[i];
  }
  day++
  const mannaka = day / 2;

  let now = 0;
  let tuki = 0;
  let hi = 0;
  for (let i = 0; i < N; i++) {
    now += D[i];
    if (now >= mannaka) {
      tuki = i+1;
      hi = D[i] - (now - mannaka);
      break;
    }
  }
  console.log(tuki + " " + hi);
});
