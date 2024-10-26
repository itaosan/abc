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
//const S = readLine()

//8*8の盤面
const board = Array(8);
for (let i = 0; i < 8; i++) {
  board[i] = readLine().split("");
}

let cnt = 0

//各マスについて、その上下左右のマスに#があるかどうかを調べる
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (board[i][j] === ".") {
      let flag = true;
      //上下に#があるかどうかを調べる
      for (let k = 0; k < 8; k++) {
        if (board[k][j] === "#") {
          flag = false;
          break;
        }
      }
      //左右に#があるかどうかを調べる
      for (let k = 0; k < 8; k++) {
        if (board[i][k] === "#") {
          flag = false;
          break;
        }
      }
      if (flag) cnt++;
    }
  }
}

console.log(cnt);