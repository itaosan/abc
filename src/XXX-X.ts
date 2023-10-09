import * as readline from "readline";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

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
  const S = input.slice(1);

});
