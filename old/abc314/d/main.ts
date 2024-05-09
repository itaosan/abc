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
  let S: string[] = input[1].split("");
  const Q = parseInt(input[2]);

  const query: string[][] = [];
  for (let i = 0; i < Q; i++) {
    query.push(input[i + 3].split(" "));
  }
  let last: number = -1;

  for (let i = 0; i < query.length; i++) {
    const [t, _, _2] = query[i];
    if (t === "2" || t === "3") {
      last = i;
    }
  }

  for (let i = 0; i < Q; i++) {
    const val = input[i + 3].split(" ").map(String);
    const mode = parseInt(val[0]);
    if (mode === 1) {
      S[parseInt(val[1]) - 1] = val[2];
    }
    if (mode === 2 && i === last) {
      //全部小文字
      S = Array.from(S.join("").toLowerCase());
    }
    if (mode === 3 && i === last) {
      S = Array.from(S.join("").toUpperCase());
    }
  }
  console.log(S.join(""));
});
