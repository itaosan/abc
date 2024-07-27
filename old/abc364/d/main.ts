import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, Q] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);

// Aを昇順にソート
A.sort((a, b) => a - b);

// 前処理：各要素に対して近傍の最大 y_max 個の要素を計算
const y_max = 100001; // 最大 y の値（適宜調整してください）
const closestValuesMap = new Map<number, number[]>();

for (let i = 0; i < N; i++) {
    const distances = A.map((value) => ({
        distance: Math.abs(value - A[i]),
        value: value,
    })).sort((a, b) => a.distance - b.distance);

    const sortedValues = distances.slice(1, y_max + 1).map((d) => d.value);

    closestValuesMap.set(A[i], sortedValues);
}

function findDifference(x: number, y: number): number {
    // xに最も近い位置を二分探索で見つける
    const closestIndex = binarySearchClosest(x);

    // xに最も近い要素の近傍の y 個の要素を取得
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
        const closestValueList = closestValuesMap.get(A[closestIndex])!;

    // y番目に近い値を取得
    const closestValue = closestValueList[Math.min(y - 1, closestValueList.length - 1)];

    // xとの差を計算
    return Math.abs(x - closestValue);
}

function binarySearchClosest(x: number): number {
    let low = 0;
    let high = A.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (A[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (low === 0) return 0;
    if (low === A.length) return A.length - 1;

    return Math.abs(A[low] - x) < Math.abs(A[low - 1] - x) ? low : low - 1;
}

// クエリの処理
for (let i = 0; i < Q; i++) {
    const [x, y] = readLine().split(" ").map(Number);
    const result = findDifference(x, y);
    console.log(result);
}
