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
  let kosu: number[] = [];
  let bet: number[][] = [];
  for (let i = 0; i < N; i++) {
    kosu.push(parseInt(input[i * 2 + 1]));
    bet.push(input[i * 2 + 2].split(" ").map(Number));
  }
  const atari = parseInt(input[N * 2 + 1]);

  let atariCnt = 999;
  let atariMan = [];
  let atariMancnt = 0;
  for (let i = 0; i < N; i++) {
    if (bet[i].includes(atari)) {
      if (kosu[i] < atariCnt) {
        atariMan = [];
        atariMancnt = 1;
        atariCnt = kosu[i];
        atariMan.push(i + 1);
      } else if (kosu[i] === atariCnt) {
        atariMan.push(i + 1);
        atariMancnt += 1;
      }
    }
  }
  if (atariCnt === 999) {
    console.log(0);
    console.log("");
  } else {
    console.log(atariMancnt);
    console.log(atariMan.join(" "));
  }
});
