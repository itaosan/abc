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
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

let ans =""
//Nが奇数か偶数かで場合分け
if (N % 2 === 0) {
  for (let i = 1; i <= N; i++) {
    if(i === N/2  || i === N/2+1){
      ans += "="
    }else{
      ans += "-"
    }
  }
}else{
  //奇数の場合
  for (let i = 1; i <= N; i++) {
    if( i === Math.ceil( N/2)){
      ans += "="
    }else{
      ans += "-"
    }
  }
}
console.log(ans)
