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
  //const S = input.slice(1);
  const ensyu = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"

  console.log(ensyu.substring(0,N+2))

});
