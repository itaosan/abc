import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

// N と X を読み込む
const [N, X] = readLine().split(" ").map(Number);

// 各工程のデータを格納する配列
const processes = [];

for (let i = 0; i < N; i++) {
  const [Ai, Pi, Bi, Qi] = readLine().split(" ").map(Number);
  processes.push({ Ai, Pi, Bi, Qi });
}

// 二分探索の初期値設定
let left = 0;
let right = 1_000_000_000_00;
let ans = 0;

while (left <= right) {
  const mid = Math.ceil((left + right) / 2);
  console.error(`left: ${left}, right: ${right}, mid: ${mid}`);
  let totalCost = 0;
  let isPossible = true;

  for (const process of processes) {
    const { Ai, Pi, Bi, Qi } = process;

    // 必要な機械の台数を計算
    const machinesSi = Math.ceil(mid / Ai);
    const machinesTi = Math.ceil(mid / Bi);

    // 各機械の導入コストを計算
    const costSi = Pi * machinesSi;
    const costTi = Qi * machinesTi;

    // 最小の導入コストを選択
    const minCost = costSi < costTi ? costSi : costTi;

    totalCost += minCost;

    // 予算を超えた場合、探索を打ち切る
    if (totalCost > X) {
      isPossible = false;
      break;
    }
  }

  if (isPossible) {
    ans = mid; // 現在の mid が達成可能なので ans を更新
    left = mid + 1; // より大きな W を探索
  } else {
    right = mid - 1; // W を小さくして再探索
  }
}

// 結果を出力
console.log(ans.toString());
