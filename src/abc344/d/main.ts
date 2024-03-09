import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const T = readLine();
const N = parseInt(readLine());
const bags = [];

for (let i = 0; i < N; i++) {
  bags.push(readLine().split(" "));
}

function minCostToMatch(T: string, N: number, bags: string[][]): number {
  let dp: number[] = new Array(T.length + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < N; i++) {
    let newDp = [...dp];
    for (let str of bags[i]) {
      for (let j = 0; j <= T.length; j++) {
        if (j + str.length <= T.length && T.slice(j, j + str.length) === str) {
          newDp[j + str.length] = Math.min(newDp[j + str.length], dp[j] + 1);
        }
      }
    }
    dp = newDp;
  }

  return dp[T.length] === Infinity ? -1 : dp[T.length];
}

console.log(minCostToMatch(T, N, bags)); 