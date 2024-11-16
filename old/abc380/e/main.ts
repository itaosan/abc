import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, Q] = readLine().split(" ").map(Number);
//const S = readLine()

// 頂点数 N を前提として、隣接リスト G を作成
const G: number[][] = Array.from({ length: N + 1 }, () => []);
//色のリスト
const color = Array(N + 1).fill(-1);
for (let i = 1; i <= N; i++) {
  // 前の箱がある場合は隣接リストに追加
  if (i > 1) {
    G[i].push(i - 1);
  }
  // 次の箱がある場合は隣接リストに追加
  if (i < N) {
    G[i].push(i + 1);
  }
  //色の初期化
  color[i] = i;
}

console.error(G);
for (let i = 0; i < Q; i++) {
  const [Q, X, C] = readLine().split(" ").map(Number);
  if (Q === 1) {
    //色を塗る
    // 開始する箱の現在の色を取得
    const oldColor = color[X];
    if (oldColor !== color[C]) {
      // BFSを使用して隣接する同色の箱を塗り替える
      const queue: number[] = [X];
      color[X] = color[C];

      while (queue.length > 0) {
        const box = queue.shift()!;

        for (const next of G[box]) {
          // 隣接する箱が元の色と同じなら、新しい色に塗り替えてキューに追加
          if (color[next] === oldColor) {
            color[next] = color[C];
            queue.push(next);
          }
        }
      }
    }
  } else {
    // BFSで隣接する箱を探索、同じ色が続く限りカウント
    let count = 1;
    const queue: number[] = [X];
    console.error(color);
    console.error(`X: ${X}, C: ${C}`);
    const visited = Array(N + 1).fill(false);
    visited[X] = true;
    while (queue.length > 0) {
      const box = queue.shift()!;
      for (const next of G[box]) {
        if (!visited[next] && color[next] === color[X]) {
          count++;
          visited[next] = true;
          queue.push(next);
        }
      }
    }
    console.log(count);
  }
}
