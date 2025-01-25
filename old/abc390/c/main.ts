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
const [H, W] = readLine().split(" ").map(Number);
//const S = readLine()
const map =[]
for (let i = 0; i < H; i++) {
  map.push(readLine().split(""));
}
let ue = 1001;
let hidari = 1001;
let sita = 0;
let migi = 0;
//一番端の#を探す
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === "#") {
      ue = Math.min(i, ue);
      hidari = Math.min(j, hidari);
      sita = Math.max(i, sita);
      migi = Math.max(j, migi);
    }
  }
}

console.error(`ue:${ue} hidari:${hidari} sita:${sita} migi:${migi}`);
let isOK = true;
//左上から右下の座標で.があればNG
for (let i = ue; i <= sita; i++) {
  for (let j = hidari; j <= migi; j++) {
    if (map[i][j] === ".") {
      isOK = false;
    }
  }
}

isOK ? console.log("Yes") : console.log("No");
