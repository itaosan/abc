import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
//const S = readLine()

const c = new Array<number>(N).fill(0);
const d = new Array<number>(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  if (i !== 0) {
    c[i] = c[i - 1] + d[i];
    A[i] += c[i];
  }

  const cnt = Math.min(N - i - 1, A[i]);

  A[i] -= cnt;

  if (i + 1 <= N) {
    d[i + 1]++;
  }
  const idx = Math.min(N, i + cnt + 1);
  if (idx <= N) {
    d[idx]--;
  }
}

console.log(A.join(" "));
