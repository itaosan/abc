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
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine();

const stack: string[] = [];

let flg = true;
for (let i = 0; i < S.length; i++) {
  const moji = S[i];
  // はじまり
  if (moji === "(" || moji === "[" || moji === "<") {
    stack.push(moji);
  } else {
    // とじる
    if (stack.length === 0) {
      flg = false;
      break;
    }
    const top = stack.pop();
    // 対応するのででなければだめ
    if ((moji === ")" && top !== "(") || (moji === "]" && top !== "[") || (moji === ">" && top !== "<")) {
      flg = false;
      break;
    }
  }
}

// すべての文字を処理後、スタックが空ならばおｋ
if (flg && stack.length === 0) {
  console.log("Yes");
} else {
  console.log("No");
}
