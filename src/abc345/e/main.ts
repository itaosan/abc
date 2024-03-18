import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
type Ball = { color: number, value: number };

const balls: Ball[] = [];

for (let i = 0; i < N; i++) {
    const [a, b] = readLine().split(" ").map(Number);
    balls.push({ color: a, value: b });
}

// 各色ごとにボールを分類し、価値が高い順にソート
const ballsByColor: Ball[][] = [];
balls.forEach(ball => {
    if (!ballsByColor[ball.color]) ballsByColor[ball.color] = [];
    ballsByColor[ball.color].push(ball);
});
ballsByColor.forEach(balls => balls.sort((a, b) => b.value - a.value));

// DPテーブルの初期化
const dp: number[][] = Array.from(new Array(ballsByColor.length + 1), () => new Array(K + 1).fill(0));

// DPで解を求める
for (let i = 1; i <= ballsByColor.length; i++) {
    for (let j = 0; j <= K; j++) {
        dp[i][j] = dp[i - 1][j]; // この色のボールを一つも選ばない場合
        let sum = 0;
        for (let k = 1; k <= ballsByColor[i].length && k <= j; k++) {
            sum += ballsByColor[i][k - 1].value;
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - k] + sum); // k個選ぶ場合
        }
    }
}

const answer = dp[ballsByColor.length][K];
console.log(answer > 0 ? answer : -1);

