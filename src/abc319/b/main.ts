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
  let S = "1";
  //const [N, M] = input[0].split(" ").map(Number);
  //const S = input.slice(1);
  //1-9までで割った数を求める
  const syo: number[] = Array(10).fill(0);
  for (let i = 1; i <= 9; i++) {
    if (N % i === 0) {
      syo[i] = N / i;
    }
  }

  for (let i = 1; i <= N; i++) {
    let ans = 0;
    for (let j = 1; j <= 10; j++) {
      if (i % syo[j] === 0) {
        ans = j;
        break
      }
    }
    if (ans === 0) {
      S += "-";
    } else {
      S += ans;
    }
  }
  console.log(S);
});
