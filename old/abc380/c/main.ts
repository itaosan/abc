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
const [N, K] = readLine().split(" ").map(Number);
const S = readLine().split("");

const ans = [];
let now = -1;
let val = "";
let cnt = 0;
let mae = 0;
let ato = 0;
for (let i = 0; i < S.length; i++) {
  if (now === -1) {
    now = Number.parseInt(S[i]);
    val = S[i];
    if (Number.parseInt(S[i]) === 1) {
      mae =0 
      cnt++;
    }
  } else if (now === Number.parseInt(S[i])) {
    val += S[i];
  } else {
    if (Number.parseInt(S[i]) === 1) {
      cnt++;
      if (cnt === K - 1) {
        mae = ans.length+1;
      } else if (cnt === K) {
        ato = ans.length+1;
      }
    }
    ans.push(val);
    now = Number.parseInt(S[i]);
    val = S[i];
  }
  if(i === S.length-1){
    ans.push(val);
  }
}
//console.error(ans);
//console.error(`mae: ${mae}, ato: ${ato}`);
const ansS = [];
for (let j = 0; j < ans.length; j++) {
  if (j !== ato) {
    ansS.push(ans[j]);
    if (j === mae) {
      ansS.push(ans[ato]);
    }
  }
}
console.log(ansS.join(""));
