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
//美食度
const A = readLine().split(" ").map(Number);
//美味しさ
const B = readLine().split(" ").map(Number);

//美食度が前の人より高い場合食べられないので、indexを記録して圧縮
const bisyoku = []
let min = 2* 10**5 + 1;
for (let i = 0; i < N; i++) {
  if (A[i] < min) {
    bisyoku.push([A[i], i]);
    min = A[i];
  }

}

console.error(bisyoku);

for (let i = 0; i < M; i++) {
  const sushi = B[i];
  //minより小さい場合は-1
  if (sushi < min) {
    console.log(-1);
    continue;
  }

  //二分探索
  let left = 0;
  let right = bisyoku.length-1;
  let mid = 0
  while (right - left > 1) {
    mid = Math.floor((left + right) / 2);
    if (bisyoku[mid][0] === sushi) {
      break;
    }
    if (bisyoku[mid][0] < sushi) {
      right = mid;
    } else {
      left = mid;
    }
  }
  console.error(`left: ${left}, right: ${right}`);

  if(right - left <= 1){
    if(bisyoku[left][0] <= sushi){
      mid = left;
    }else{
      mid = right;
    }
  }
  console.log(bisyoku[mid][1] + 1);

}