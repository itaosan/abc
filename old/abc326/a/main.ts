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
  
  if ((N -M > -3) && (N -M < 4)){
    console.log("Yes")
  } else{
    console.log("No")
  }

});
