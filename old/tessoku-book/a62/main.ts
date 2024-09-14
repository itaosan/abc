import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

// 頂点数 N を前提として、隣接リスト G を作成
const G: number[][] = Array.from({ length: N + 1 }, () => []);
const visited: boolean[] = Array.from({ length: N + 1 }, () => false);

for (let i = 0; i < M; i++) {
  const [A, B] = readLine().split(" ").map(Number);
  G[A].push(B);
  G[B].push(A);
}

function dfs(v: number, visited: boolean[]) {
  visited[v] = true;
  for (const next of G[v]) {
    if (!visited[next]) {
      dfs(next, visited);
    }
  }
}

dfs(1, visited);

let output = "The graph is connected.";
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    output = "The graph is not connected.";
    break;
  }
}
console.log(output);
