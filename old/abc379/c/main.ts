import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, M] = readLine().split(" ").map(Number);
const X = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(BigInt);

const xa: { pos: number; ishi: bigint }[] = [];

for (let i = 0; i < M; ++i) {
  xa.push({ pos: X[i], ishi: A[i] });
}

// Sort xa
xa.sort((a, b) => a.pos - b.pos);

let sum = BigInt(0);
let sum_idx = BigInt(0);

let flg = true;

for (let i = 0; i < M; ++i) {
  if (sum < BigInt(xa[i].pos - 1)) {
    flg = false;
  }
  sum += xa[i].ishi;
  sum_idx += xa[i].ishi * BigInt(xa[i].pos);
}

if (sum !== BigInt(N)) {
  flg = false;
}

const result = (BigInt(N) * (BigInt(N) + BigInt(1))) / BigInt(2) - sum_idx;
if (flg) {
  console.log(result.toString());
} else {
  console.log(-1);
}
