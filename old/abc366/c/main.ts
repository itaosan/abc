import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()
const map = new Map<number, number>();

for (let i = 0; i < N; i++) {
  const [q, x] = readLine().split(" ").map(Number);
  if (q === 1) {
    //袋に追加
    if (map.has(x)) {
      map.set(x, (map.get(x) ?? 0) + 1);
    } else {
      map.set(x, 1);
    }
  } else if (q === 2) {
    //袋から取り出す
    if (map.has(x)) {
      if (map.get(x) === 1) {
        map.delete(x);
      } else {
        map.set(x, (map.get(x) ?? 0) - 1);
      }
    }
  } else if (q === 3) {
    //袋の中身を出力
    console.log(map.size);
  }
}
