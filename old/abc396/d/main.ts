import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

// グラフの隣接リスト（頂点番号は 1-indexed）
const graph: { to: number; weight: bigint }[][] = Array.from({ length: N + 1 }, () => []);

// 辺の入力を読み込み
for (let i = 1; i <= M; i++) {
  const [U, V, weight] = readLine().split(" ").map(BigInt);
  const uInt = Number(U);
  const vInt = Number(V);
  graph[uInt].push({ to: vInt, weight });
  graph[vInt].push({ to: uInt, weight });
}

let min = 1n << 60n;

const visited = Array(N + 1).fill(false);


// DFS 関数
function dfs(v: number, weight: bigint, visited: boolean[]) {
  visited[v] = true;
  for (const edge of graph[v]) {
    if (edge.to === N) {
      const val = weight ^ edge.weight;
      if (min > val) {
        //console.error(`min: ${min}`);
        min = val;
      }
      // console.error(`v: ${v}, edge.to: ${edge.to}, weight: ${weight}, edge.weight: ${edge.weight}`);
      // console.error(`min: ${min}`);
    } else {
      if (!visited[edge.to]) {
        // console.error(`v: ${v}, edge.to: ${edge.to}, weight: ${weight}, edge.weight: ${edge.weight}`);
        // console.error(`Xor: ${weight^ edge.weight}`);
        dfs(edge.to, weight^ edge.weight, visited);
      }
    }
  }
  visited[v] = false;
}
dfs(1, 0n, visited);

// 答えを出力
console.log(min.toString());
