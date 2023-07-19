import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    let [H, W] = input[0].split(" ").map(Number);
    let A: number[][] = input.slice(1).map((line) => line.split(" ").map(Number));

    let yoko: number[] = A.map((row) => row.reduce((a, b) => a + b, 0));
    let tate: number[] = A[0].map((_, i) => A.reduce((a, b) => a + b[i], 0));

    for (let i = 0; i < H; i++) {
        console.log(
            Array(W)
                .fill(0)
                .map((_, j) => yoko[i] + tate[j] - A[i][j])
                .join(" ")
        );
    }
});
