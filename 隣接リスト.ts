import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()
// 頂点数 N を前提として、隣接リスト G を作成
const G: number[][] = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [A, B] = readLine().split(" ").map(Number);
  G[A].push(B);
  G[B].push(A);
}

//出力
for (let i = 1; i <= N; i++) {
  let output = "";
  output += i.toString();
  output += ": {";
  output += G[i].map(String).join(", "); // G[i]の要素を文字列に変換し、", "で結合
  output += "}";
  console.log(output);
}

