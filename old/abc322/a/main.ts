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
  //const [N, M] = input[0].split(" ").map(Number);
  const S = input[1].split("").map(String);
  for (let i = 0; i < N-2; i++) {
    if(S[i]+S[i+1]+S[i+2]==="ABC"){
      console.log(i+1)
      return
    }
    
  }
  console.log(-1)
});
