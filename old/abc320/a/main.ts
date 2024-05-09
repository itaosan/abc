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
  const [A, B] = input[0].split(" ").map(Number);
  console.log(Math.pow(A,B)+Math.pow(B,A) )

});
