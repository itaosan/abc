import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const friends = Array.from({ length: N + 1 }, () => new Set<number>());

for (let i = 1; i <= M; i++) {
  const [A, B] = readLine().split(" ").map(Number);
  console.error(`A=${A}, B=${B}`);
  friends[A].add(B);
  friends[B].add(A);
}

console.error(friends);

let operations = 0;

//既に作った友達のMap
const done = new Map<string, boolean>();
// キーを生成するヘルパー関数
const createKey = (x: number, y: number) => `${x}:${y}`;

for (let x = 1; x <= N; x++) {
  // X の友達を取得
  for (const y of friends[x]) {
    for (const z of friends[y]) {
      if (z !== x && !friends[x].has(z)) {
        
        console.error(`x=${x}, y=${y}, z=${z}`);
        operations++;
        // キーの組を追加
        if (x > y) {
          done.set(createKey(x, y), true);
        }else{
          done.set(createKey(y, x), true);

        }
      }
    }
  }
}

console.log(operations);
