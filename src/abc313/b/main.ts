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
  const [N, M] = input[0].split(" ").map(Number);
  let tuyosa = new Array(N + 1).fill(0);

  for (let i = 0; i < M; i++) {
    const [tuyo, yowa] = input[i + 1].split(" ").map(Number);
    if (tuyosa[tuyo] >= 0) {
      tuyosa[tuyo] = 1;
    }
    tuyosa[yowa] = -1;
  }
  const maxNumber = Math.max(...tuyosa);
  const maxNumberIndexes: number[] = [];
  //sort
  tuyosa.forEach((val, index) => {
    if (val === maxNumber) {
      maxNumberIndexes.push(index);
    }
  });
  if (maxNumberIndexes.length > 1) {
    console.log(-1);
  } else {
    console.log(maxNumberIndexes[0]);
  }
});
