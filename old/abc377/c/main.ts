import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    if (this.front >= this.data.length) return undefined;
    const item = this.data[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.front >= this.data.length;
  }
}

type Zahyo = { x: number, y: number }

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

//マス数はN＊N

//駒の位置＋(i+2,j+1) (i+1,j+2)  (i−1,j+2)  (i−2,j+1) (i−2,j−1)  (i−1,j−2)  (i+1,j−2) (i+2,j−1) をSetに入れていく
//座標が範囲外の場合は入れない
const set = new Set();
for (let i = 0; i < M; i++) {
  const [X,Y] = readLine().split(" ").map(Number);
  set.add(`x:${X}, y:${Y}`);
  if (X+2 <= N && Y+1 <= N) set.add(`x:${X+2}, y:${Y+1}`);
  if (X+1 <= N && Y+2 <= N) set.add(`x:${X+1}, y:${Y+2}`);
  if (X-1 >= 1 && Y+2 <= N) set.add(`x:${X-1}, y:${Y+2}`);
  if (X-2 >= 1 && Y+1 <= N) set.add(`x:${X-2}, y:${Y+1}`);
  if (X-2 >= 1 && Y-1 >= 1) set.add(`x:${X-2}, y:${Y-1}`);
  if (X-1 >= 1 && Y-2 >= 1) set.add(`x:${X-1}, y:${Y-2}`);
  if (X+1 <= N && Y-2 >= 1) set.add(`x:${X+1}, y:${Y-2}`);
  if (X+2 <= N && Y-1 >= 1) set.add(`x:${X+2}, y:${Y-1}`);
}

//N*Nからsetを引いた数が答え
const masu = BigInt(N)*BigInt(N);
const ans = masu - BigInt(set.size);
console.log(ans.toString());
