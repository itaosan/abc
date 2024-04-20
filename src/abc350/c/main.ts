import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(Number);

const ans: string[] = [];
let cnt = 0;

// Map を使用して各値のインデックスを記録
const indexMap = new Map<number, number>();
for (let i = 0; i < N; i++) {
  indexMap.set(A[i], i);
}

// Aの配列を1からNまでの数値で正しい順番に整列させる
for (let i = 1; i <= N; i++) {
  const correctIndex = i - 1;
  const currentIndex = indexMap.get(i)!;

  // 正しい位置にない場合、交換
  if (currentIndex !== correctIndex) {
    // 現在の位置にある値（A[currentIndex]）も更新
    const valueAtCorrectIndex = A[correctIndex];
    
    // 値をスワップ
    A[correctIndex] = i;
    A[currentIndex] = valueAtCorrectIndex;
    
    // Mapも更新
    indexMap.set(i, correctIndex);
    indexMap.set(valueAtCorrectIndex, currentIndex);
    
    cnt++;
    ans.push(`${correctIndex + 1} ${currentIndex + 1}`);
  }
}

console.log(cnt);
if (cnt > 0) {
  console.log(ans.join("\n"));
}
