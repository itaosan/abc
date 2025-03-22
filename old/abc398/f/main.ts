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

const n = S.length;
// S の逆順文字列を作成
const revS = S.split("").reverse().join("");
// 逆順文字列と S を区切り文字 '#' で連結した文字列 T を作成
// T = revS + "#" + S
// これにより、T の接頭部（revS）と S の末尾が一致する最大の長さが求まる
const T = revS + "#" + S;

// T の各位置について、先頭から一致する部分文字列の最大長を記録する配列 pi を作成
const pi: number[] = new Array(T.length).fill(0);

// KMP の prefix function（失敗関数）を計算
for (let i = 1; i < T.length; i++) {
  let j = pi[i - 1];
  while (j > 0 && T[i] !== T[j]) {
    j = pi[j - 1];
  }
  if (T[i] === T[j]) {
    j++;
  }
  pi[i] = j;
  console.error(pi);
}

// T の最後の値 pi[T.length - 1] は、S の末尾で回文となっている部分の長さを示す
const k = pi[T.length - 1];
// S の先頭部分で、回文にするために追加が必要な部分は S[0, n-k) であり、その逆順が追加すべき文字列となる
const toAppend = S.substring(0, n - k)
  .split("")
  .reverse()
  .join("");

console.log(S + toAppend);
