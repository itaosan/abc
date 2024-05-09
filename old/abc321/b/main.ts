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
  let [N, M] = input[0].split(" ").map(Number);
  let A = input[1].split(" ").map(Number);
  A.sort((a, b) => a - b);
  const min = A[0];
  const max = A[A.length - 1];
  for (let i = 0; i < A.length; i++) {
    M = M - A[i];
  }
  M += max;
  if (M <= 0) {
    console.log("0");
  } else {
    M += min;
    if (M > max) {
      console.log("-1");
    } else {
      console.log(M);
    }
  }


});
