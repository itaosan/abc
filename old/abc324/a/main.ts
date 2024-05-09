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
  const A = input[1].split(" ").map(Number);
  let chk = true
  A.forEach(val => {
    if(A[0] !== val){
      chk = false
    }
  });
  if (chk)   console.log("Yes")
  else   console.log("No")

});
