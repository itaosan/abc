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

const ryori: number[][] = Array.from({ length: N + 1 }, () => []);
const dameCnt: number[] = Array(M).fill(0);

for (let i = 0; i < M; i++) {
  const [K, ...ing] = readLine().split(" ").map(Number);
  //嫌いな数
  dameCnt[i] = K; 
  for (let j = 0; j < K; j++) {
    //この食材が入っている料理リストに追加
    ryori[ing[j]].push(i);
  }
}

const B = readLine().split(" ").map(Number);

// 現在食べられる料理数
let cnt = 0;

for (let i = 0; i < N; i++) {
  const b = B[i];
  // この食材を含む全料理のカウントを減らす
  for (const dish of ryori[b]) {
    dameCnt[dish]--;
    if (dameCnt[dish] === 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
