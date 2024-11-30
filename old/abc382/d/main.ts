import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const ans: number[][] = [];

function dfs(pos: number, arr: number[]) {
  if (pos > N) {
    ans.push([...arr]);
    return;
  }

  // 現在の位置で最小値と最大値
  let min = 1;
  if (pos > 1) {
    min = arr[pos - 2] + 10;
  }
  const max = M - 10 * (N - pos);
  if (min > max) {
    return;
  }

  // 現在の位置で可能な整数をすべて試す
  for (let i = min; i <= max; i++) {
    arr[pos - 1] = i;
    dfs(pos + 1, arr);
  }
}

dfs(1, new Array(N));

console.log(ans.length);
for (const seq of ans) {
  console.log(seq.join(" "));
}
