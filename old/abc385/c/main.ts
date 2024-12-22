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
const H = readLine().split(" ").map(Number);
//const S = readLine()

let max =0

for(let i = 0; i < N; i++){
  const chk = H[i]
  for(let j = 1; j+i <= N; j++){
    let cnt =1
    let next = i+ j 
    while(next < N && chk === H[next]){
      cnt++
      next+= j 
    }
    max = Math.max(max, cnt)
  }
}
console.log(max)