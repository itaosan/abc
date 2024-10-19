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

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);
const B = readLine().split(" ").map(Number);
//const S = readLine()

//AとBを降順にソート
A.sort((a,b) => b - a);
B.sort((a,b) => b - a);
B.push(0)
let out = 0
let hako = 0
for (let i = 0; i < N ; i++) {
  //console.error(A[i],B[i-out])
  if (A[i] > B[i-out]){
    if (out === 0){
      out++
      hako = A[i]
    }else{
      hako = -1
      break
    }
    
  }
}

console.log(hako)