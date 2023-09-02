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
  const [N, M,P] = input[0].split(" ").map(Number);
  let cnt =0
  for (let i = N-M; i >= 0; ) {

    i-= P
    cnt++
    
  }
  console.log(cnt)
});
