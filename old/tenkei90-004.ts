import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [H, W] = readLine().split(" ").map(Number);
let val: number[][] = [];
let result: number[][] = new Array(H);

//横方向result
let row_result: number[] = new Array(H);
//縦方向result
let col_result: number[] = new Array(W);

for (let i = 0; i < H; i++) {
    val.push(readLine().split(" ").map(Number));
    //val[i] = readLine().split(" ").map(Number);
}

//縦横それぞれの合計を出す
for (let i = 0; i < H; i++) {
    row_result[i] = val[i].reduce((sum, now) => {
        return sum + now;
    }, 0);
}
for (let i = 0; i < W; i++) {
    let sum = 0;
    for (let row = 0; row < H; row++) {
        sum += val[row][i];
    }
    col_result[i] = sum;
}

//結果に格納
for (let i = 0; i < H; i++) {
    result[i] = new Array(W);
    for (let j = 0; j < W; j++) {
        result[i][j] = row_result[i] + col_result[j] - val[i][j];
    }
}

for (let i = 0; i < H; i++) {
    console.log(result[i].join(" "));
}
