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
  const C = input[2].split(" ").map(Number);
  let colorS = new Array<string>(M).fill("");
  //色ごとに分ける
  for (let i = 0; i < N; i++) {
    colorS[C[i] - 1] = colorS[C[i] - 1] + S[i];
  }
  //  console.log(colorS)
  //1桁ずつ右にろーてーと
  for (let i = 0; i < colorS.length; i++) {
    let str = colorS[i];
    colorS[i] = str[str.length - 1] + str.substring(0, str.length - 1);
  }
  //回答
  let ans = "";
  for (let i = 0; i < N; i++) {
    ans = ans + colorS[C[i] - 1][0];
    colorS[C[i] - 1] = colorS[C[i] - 1].substring(1);
  }

  console.log(ans);
});
