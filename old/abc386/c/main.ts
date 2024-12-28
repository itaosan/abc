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

const K = Number.parseInt(readLine());
const S = readLine().split("");
const T = readLine().split("");

let ok = true;

if (Math.abs(S.length - T.length) > 1) {
  ok = false;
} else if (S.length === T.length) {
  let cnt = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i]) {
      cnt++;
    }
  }
  if (cnt > 1) {
    ok = false;
  }
} else {
  const [longStr, shortStr] = S.length > T.length ? [S, T] : [T, S];
  let i = 0;
  let j = 0;
  let cnt = 0;

  while (i < longStr.length && j < shortStr.length) {
    if (longStr[i] !== shortStr[j]) {
      cnt++;
      i++; 
    } else {
      i++;
      j++;
    }
  }
  if (cnt > 1) {
    ok = false;
  }
}
if (ok) {
  console.log("Yes");
}else{
  console.log("No");
}
