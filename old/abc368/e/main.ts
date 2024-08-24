import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, M, X] = readLine().split(" ").map(Number);
const A: number[] = [];
const B: number[] = [];
const S: number[] = [];
const T: number[] = [];

// M本の電車データを処理
for (let i = 0; i < M; i++) {
  const [a, b, s, t] = readLine().split(" ").map(Number);
  A.push(a);
  B.push(b);
  S.push(s);
  T.push(t);
}

// イベントを生成してソート
const event: Array<[number, number, number]> = [];
for (let i = 0; i < M; i++) {
  event.push([S[i], 1, i]); // 出発イベント
  event.push([T[i], 0, i]); // 到着イベント
}
event.sort((a, b) => a[0] - b[0]);

const ans: number[] = new Array(M).fill(0);
ans[0] = X; // 最初の電車の出発時刻をXで初期化

const station: number[] = new Array(N + 1).fill(0); // 駅の到着時刻を保持する配列

for (const [t, f, i] of event) {
  if (f === 1) {
    // 出発イベント
    if (i !== 0) {
      // 最初の電車以外
      ans[i] = Math.max(0, station[A[i]] - t);
    }
  } else {
    // 到着イベント
    station[B[i]] = Math.max(station[B[i]], t + ans[i]);
  }
}

// 1番目以降の電車の出発時刻を出力
console.log(ans.slice(1).join(" "));
