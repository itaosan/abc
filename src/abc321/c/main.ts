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
  const K = parseInt(input[0]);
  //const N = input[0].split("").map(Number);
  let cnt = 0;

  for (let X = 1; X < 999999999999999; X++) {
    const N = X.toString().split("").map(Number);
    let num = 10;
    let b = true;
    for (let i = 0; i < N.length; i++) {
      if (num <= N[i]) {
        b = false;
        X = X +  Math.pow(10,N.length -i-1)
        X--
        break;
      }
      num = N[i];
    }
    if (b) {
      cnt++;
      if (cnt === K) {
        console.log(X);
        break;
      }
    }
  }
});
