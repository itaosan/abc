import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const X = readLine().split(" ").map(Number); 
const P = readLine().split(" ").map(BigInt); 

const S: bigint[] = new Array(N + 1).fill(0n);
for (let i = 0; i < N; i++) {
  S[i + 1] = S[i] + P[i];
}

const Q = Number.parseInt(readLine());
console.error("X:", X);
console.error("S:", S);
const results: bigint[] = [];
for (let q = 0; q < Q; q++) {
  const [Li, Ri] = readLine().split(" ").map(Number);

  const LeftIndex = lower_bound(X, Li);
  const RightIndex = upper_bound(X, Ri) - 1;

  console.error("LeftIndex:", LeftIndex, "RightIndex:", RightIndex);
  if (LeftIndex > RightIndex) {
    results.push(0n);
  } else {
    const total = S[RightIndex + 1] - S[LeftIndex];
    console.error("total:", total);
    results.push(total);
  }
}

for (const res of results) {
  console.log(res.toString());
}

function lower_bound(arr: number[], x: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] >= x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function upper_bound(arr: number[], x: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = (left + right) >> 1;
    if (arr[mid] > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

