import * as fs from 'fs';

// 最大値を更新する関数
function chmax<T>(a: T, b: T): T {
    return a < b ? b : a;
}

// 入力の読み込み
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const G : number[][] = Array.from({ length: N +1}, () => []);
const dp = new Array(N+1).fill(-1);

for (let i = 1; i <= M; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    G[x].push(y); // 0-indexed に変換
}

// メモ化再帰関数
function rec(v: number): number {
    if (dp[v] !== -1) return dp[v];

    let res = 0;
    for (const nv of G[v]) {
        res = chmax(res, rec(nv) + 1);
    }
    //console.log(`v=${v} dp[v]=${dp[v]} res=${res}`);
    return dp[v] = res;
}

// 答えを計算
let res = 0;
for (let v = 1; v <= N; ++v) {
    res = chmax(res, rec(v));
}
//console.log(G);
//console.log(dp);
console.log(res);
