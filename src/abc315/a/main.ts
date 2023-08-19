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
  //const [N, M] = input[0].split(" ").map(Number);
  const S = input[0];
  const regex = /[aeiou]/;
  let ans = "";
  for (let i = 0; i < S.length; i++) {
    if (regex.test(S[i])) {
    } else {
      ans += S[i];
    }
  }
  console.log(ans);
});
