import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
// Gの読み込み
const MG = Number.parseInt(readLine());
const adjG: boolean[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
for (let i = 0; i < MG; i++) {
    const [u, v] = readLine().split(" ").map(Number);
    adjG[u][v] = adjG[v][u] = true;
}

// Hの読み込み
const MH = Number.parseInt(readLine());
const adjH: boolean[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false));
for (let i = 0; i < MH; i++) {
    const [a, b] = readLine().split(" ").map(Number);
    adjH[a][b] = adjH[b][a] = true;
}

// コスト行列の読み込み
const cost: number[][] = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
for (let i = 1; i <= N - 1; i++) {
    const Ai = readLine().split(" ").map(Number);;
    for (let j = i + 1; j <= N; j++) {
        cost[i][j] = Ai[j - i - 1];
    }
}

// 最小コストの初期化
let minTotalCost = Number.POSITIVE_INFINITY;

// 順列を生成する関数
function permute(arr: number[], l: number, r: number) {
    if (l === r) {
        calculateCost(arr);
    } else {
        for (let i = l; i <= r; i++) {
            [arr[l], arr[i]] = [arr[i], arr[l]]; // スワップ
            permute(arr, l + 1, r);
            [arr[l], arr[i]] = [arr[i], arr[l]]; // 元に戻す
        }
    }
}

// コストを計算する関数
function calculateCost(P: number[]) {
    let totalCost = 0;
    for (let i = 1; i <= N; i++) {
        for (let j = i + 1; j <= N; j++) {
            const adjGij = adjG[i][j];
            const adjHPiPj = adjH[P[i - 1]][P[j - 1]];
            if (adjGij !== adjHPiPj) {
                const u = Math.min(P[i - 1], P[j - 1]);
                const v = Math.max(P[i - 1], P[j - 1]);
                totalCost += cost[u][v];
                if (totalCost >= minTotalCost) {
                    return; // 現在の最小コストを超えたら計算を打ち切る
                }
            }
        }
    }
    if (totalCost < minTotalCost) {
        minTotalCost = totalCost;
    }
}

// 順列の初期配列を生成
const initialPermutation = [];
for (let i = 1; i <= N; i++) {
    initialPermutation.push(i);
}

// 順列生成と最小コストの計算を開始
permute(initialPermutation, 0, N - 1);

// 最小コストを出力
console.log(minTotalCost);
