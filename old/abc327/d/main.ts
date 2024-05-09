import * as fs from "fs";

const nmax = 200200;
let N: number, M: number;
const A: number[] = new Array(nmax);
const B: number[] = new Array(nmax);
const g: number[][] = new Array(nmax).fill(null).map(() => new Array<number>());
const X: number[] = new Array(nmax).fill(-1);
let bipartite: boolean = true;

function dfs(c: number, x: number) {
  X[c] = x;
  for (const d of g[c]) {
    if (X[d] === -1) {
      dfs(d, 1 - x);
    } else if (X[d] === X[c]) {
      bipartite = false;
    }
  }
}

function main(input: string) {
  const lines = input.split("\n");
  [N, M] = lines[0].split(" ").map(Number);
  lines[1].split(" ").forEach((value, index) => {
    A[index] = parseInt(value) - 1;
  });
  lines[2].split(" ").forEach((value, index) => {
    B[index] = parseInt(value) - 1;
  });

  for (let i = 0; i < M; i++) {
    g[A[i]].push(B[i]);
    g[B[i]].push(A[i]);
  }

  for (let i = 0; i < N; i++) {
    if (X[i] === -1) dfs(i, 0);
  }
  console.log(bipartite ? "Yes" : "No");
}

// Main call with Node.js FS for reading from stdin
const input = fs.readFileSync("/dev/stdin", "utf8");
main(input);
