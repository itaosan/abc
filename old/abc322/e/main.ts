import * as readline from "readline";
const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line: string) => {
  input.push(line);
});

rl.on("close", () => {
  main(input);
});

function main(input: string[]) {
  const [[N, K, P], ...CA]: number[][] = input.map((line) => line.split(" ").map(Number));
  let max = (P + 1) ** K;
  let dp: number[] = new Array(max).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    const [C, ...A] = CA[i];
    for (let bit = max - 1; bit >= 0; bit--) {
      let flag: number[] = bit
        .toString(P + 1)
        .padStart(K, "0")
        .split("")
        .map(Number);
      for (let j = 0; j < K; j++) {
        flag[j] = Math.min(P, flag[j] + A[j]);
      }
      let trans = parseInt(flag.join(""), P + 1);
      dp[trans] = Math.min(dp[bit] + C, dp[trans]);
      if (dp[trans] !== Infinity) {
        debug(
          `bit = ${bit
            .toString(P + 1)
            .padStart(K, "0")
            .split("")} : trans= ${trans
            .toString(P + 1)
            .padStart(K, "0")
            .split("")} :dp[trans]= ${dp[trans]}`
        );
      }
    }
    debug(`dp[max - 1] = ${dp[max - 1]}`);
  }

  console.log(dp[max - 1] === Infinity ? -1 : dp[max - 1]);
}
