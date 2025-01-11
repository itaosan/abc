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
//const S = readLine()

let cnt  = 0
for(let i = 0; i < N; i++){
  const moti = A[i]
  //moti×2以上の数字が何個あるか二分探索で求める
  let left = 0
  let right = N
  while(left < right){
    const mid = Math.floor((left + right) / 2)
    if(A[mid] < moti * 2){
      left = mid + 1
    }else{
      right = mid
    }
  }
  cnt += N - right
}
console.log(cnt)