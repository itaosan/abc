//DFSのサンプル

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [N, M] = input[0].split(" ").map(Number);
  //2次元配列、各頂点のコストを入れる
  const E: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

  for (let i = 1; i <= M; i++) {
    const [a, b, c] = input[i].split(" ").map(Number);
    E[a][b] = c;
    E[b][a] = c;
  }

  let ans = 0;  //最大値
  //各頂点が訪れたかどうかのリスト
  const used: boolean[] = Array(N + 1).fill(false);

  function dfs(v: number, s: number): void {
    console.log(`v:${v} s:${s}`);
    used[v] = true;
    if (s > ans) ans = s;

    for (let i = 1; i <= N; i++) {
      if (!used[i] && E[v][i]) {
        dfs(i, s + E[v][i]);
      }
    }
    used[v] = false;
  }

  for (let i = 1; i <= N; i++) {
    console.log(`i:${i}`);
    dfs(i, 0);
    console.log(`------next------`);
  }

  console.log(E);
  console.log(ans);
});
