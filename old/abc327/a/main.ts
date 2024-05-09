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
  const N = input[0].split(" ").map(Number);
  const S = input[1]
  if (S.includes("ab") || S.includes("ba")) {
    console.log("Yes")
  }else{
    console.log("No")
  }


});
