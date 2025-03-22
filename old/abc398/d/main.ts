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

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, R, C] = readLine().split(" ").map(Number);
const S = readLine();

// 移動先
const nswe: { [key: string]: { dr: number; dc: number } } = {
  N: { dr: -1, dc: 0 },
  S: { dr: 1, dc: 0 },
  W: { dr: 0, dc: -1 },
  E: { dr: 0, dc: 1 },
};

//移動量
const idou: { r: number; c: number }[] = new Array(N + 1);
idou[0] = { r: 0, c: 0 };

//煙の位置
const kemuri = new Map<string, number>();
kemuri.set("0,0", 0);

for (let t = 1; t <= N; t++) {
  const move = nswe[S[t - 1]]; 
  const prev = idou[t - 1];
  const cur = { r: prev.r + move.dr, c: prev.c + move.dc };
  idou[t] = cur;

  // 煙登録
  const key = `${cur.r},${cur.c}`;
  if (!kemuri.has(key)) {
    kemuri.set(key, t);
  }
}

let ans = "";
for (let t = 1; t <= N; t++) {
  const cur = idou[t];
  const neededR = cur.r - R;
  const neededC = cur.c - C;
  const neededKey = `${neededR},${neededC}`;

  if (kemuri.has(neededKey) && kemuri.get(neededKey)! < t) {
    ans += "1";
  } else {
    ans += "0";
  }
}

console.log(ans);
