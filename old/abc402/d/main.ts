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
const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

// --- 平行になる直線を数えるためのハッシュマップ ---
// key = (Ai + Bi) mod N, value = そのキーを持つ直線の本数
const freq = new Map<number, number>();

// 各直線を (Ai + Bi) mod N でグループ分け
for (let i = 0; i < M; i++) {
  const [a,b] = readLine().split(" ").map(Number);
  const key = (a + b) % N;
  freq.set(key, (freq.get(key) ?? 0) + 1);
}

// --- 全組数 M*(M-1)/2 を BigInt で計算 ---
const totalPairs = BigInt(M) * BigInt(M - 1) / 2n;

// --- 平行(交わらない)組数を各グループ f*(f-1)/2 で合計 ---
let nonIntersecting = 0n;
for (const f of freq.values()) {
  const fb = BigInt(f);
  nonIntersecting += fb * (fb - 1n) / 2n;
}

// --- 交わる組数 = 全組数 − 平行組数 ---
const result = totalPairs - nonIntersecting;

// --- 出力 ---
console.log(result.toString());
