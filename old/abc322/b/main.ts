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
  const S = input[1];
  const T = input[2].split("").map(String);
  let atama = false;
  let osiri = false;
  for (let i = 0; i < M - N + 1; i++) {
    let moji = "";
    for (let j = i; j < N + i; j++) {
      moji += T[j];
    }
    //console.log(moji)
    if (moji === S) {
      if (i === 0) {
        atama = true;
      }
      if (i === M - N) {
        osiri = true;
      }
    }
  }
  if (atama && osiri) console.log(0);
  else if (atama) console.log(1);
  else if (osiri) console.log(2);
  else console.log(3);
});
