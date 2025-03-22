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
const A = readLine().split(" ").map(Number);
//const S = readLine()

const cnt = new Array(14).fill(0);

for (let i = 0; i < A.length; i++) {
  //数の出現回数をカウント
  cnt[A[i]]++;
}

let use3 =false
let use2 = false

for (let i = 1; i <= 13; i++) {
  if (cnt[i] >= 3 && use3 === false) {
    use3 = true
  }else if (cnt[i] >= 2) {
    use2 = true
  }
}

if(use3 && use2){
  console.log("Yes")
}else{
  console.log("No")
}