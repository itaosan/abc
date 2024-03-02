import * as fs from "fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, T] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

//N個の配列を作成
const arr = new Array(N + 1).fill(0);
const scoreCounts = new Map<number, number>(); // 得点の種類ごとの選手数を管理
//最初はみんな0点
scoreCounts.set(0, N);
let cnt = 1;
for (let i = 0; i < T; i++) {
  const [A, B] = readLine().split(" ").map(Number);
  const prevScore = arr[A];
  const val = arr[A] + B;
  arr[A] = val;
  const prevCount = scoreCounts.get(prevScore)!;
  //console.log(`prevScore = ${prevScore}`);
  if (prevCount === 1) {
    scoreCounts.delete(prevScore);
    cnt--; // 得点の種類を減らす
  } else {
    scoreCounts.set(prevScore, prevCount - 1);
  }
  // 新しい得点の選手数を更新
  const newCount = (scoreCounts.get(val) || 0) + 1;
  scoreCounts.set(val, newCount);
  if (newCount === 1) cnt++; // 新しい得点の種類が追加された
  //console.log(scoreCounts);
  console.log(cnt); // その時点での得点の種類の数を出力
}

//Number.MIN_VALUE
//Number.MAX_VALUE
