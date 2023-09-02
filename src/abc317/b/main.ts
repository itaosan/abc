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
  let A = input[1].split(" ").map(Number);
  A = A.sort((a,b) => a-b)
  let chk = A[0]
  for (let i = 1; i < A.length; i++) {
    if (A[i] != A[0] + i){
      chk =  A[0] + i
      break
    } 
  }
  console.log(chk)
});
