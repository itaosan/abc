import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, M] = readLine().split(" ").map(Number);

const p: number[] = new Array(N);

let tmpP = readLine().split(" ").map(Number);
for (let i = 1; i < N; i++) {
    p[i] = tmpP[i - 1] - 1;
}

const dp: number[] = new Array(N).fill(-1);

for (let i = 0; i < M; i++) {
    const [x, y] = readLine().split(" ").map(Number);
    dp[x - 1] = Math.max(dp[x - 1], y);
}

for (let i = 1; i < N; i++) {
    dp[i] = Math.max(dp[i], dp[p[i]] - 1);
}

let ans = 0;
for (let i = 0; i < N; i++) {
    if (dp[i] >= 0) ans++;
}

console.log(ans);
