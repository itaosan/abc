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
const S1 = readLine()
const S2 = readLine()

//S1とS2の違う箇所のindexを表示
let ans = 0
for(let i = 0; i < Math.min(S1.length,S2.length) ; i++){
  if(S1[i] !== S2[i]){
    ans = i + 1
    break
  }
}

if (ans !== 0) {
  console.log(ans)
}else{
  if(S1.length !== S2.length){
    console.log(Math.min(S1.length,S2.length) + 1)
  }else{
    console.log("0")
  }
}