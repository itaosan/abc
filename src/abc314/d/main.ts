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
  let S: string = input[1];
  const Q = parseInt(input[2]);
  const sousaSumi = new Array<number>(S.length).fill(0);
  let ans = S.split('')

  //逆順
  let finalMode = 0;
  for (let i = 0; i < Q; i++) {
    const val = input[i + 3].split(" ").map(String);
    const mode = parseInt(val[0]);
    if (mode === 1) {
      const inx = parseInt(val[1]) - 1;
      let v = val[2];
      ans[inx] = v
      // const chars = S.split("");
      // chars[inx] = val[2];
      // S = chars.join("");
      // sousaSumi[inx] = 1;
    }
    if (mode === 2) {
      //全部小文字
      S = S.toLowerCase();
    }
    if (mode === 3) {
      S = S.toUpperCase();
    }
  }
  console.log(S);
});
