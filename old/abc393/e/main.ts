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
const A = readLine().split(" ").map(Number);

const maxA = A.reduce((max, value) => Math.max(max, value), 0);

// 1. 各数値の出現頻度を記録する
const freq = new Array(maxA + 1).fill(0);
for (let i = 0; i < N; i++){
    freq[A[i]]++;
}

// 2. 各 d (1 ≤ d ≤ maxA) について，A の中で d で割り切れる要素の個数 count[d] を計算する
const count = new Array(maxA + 1).fill(0);
for (let d = 1; d <= maxA; d++){
    // d の倍数 m (m = d, 2d, 3d, ... ≤ maxA) について足し合わせる
    for (let m = d; m <= maxA; m += d){
        count[d] += freq[m];
    }
}

// 3. 各 m (1 ≤ m ≤ maxA) に対して，m の約数のうち「A 全体で d で割り切れる要素が K 個以上ある」
//    という条件を満たす最大の d を best[m] として記録する。
//    ※ m が A の要素であれば、答えは best[m] になる。
const best = new Uint32Array(maxA + 1);
// d を1から順に見ていく．（小さい d から更新していくので、最終的により大きい d で上書きされる）
for (let d = 1; d <= maxA; d++){
    // d が条件を満たすなら
    if(count[d] >= K){
        // d の倍数全体に対して更新する
        for (let m = d; m <= maxA; m += d){
            best[m] = d;  // 最終的に m に対して最大の d が入る
        }
    }
}

// 4. 各 A_i に対して best[A_i] を答えとして出力する
for (let i = 0; i < N; i++){
    console.log(best[A[i]].toString());
}
