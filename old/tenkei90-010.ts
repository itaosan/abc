import { type } from "os";
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
    const N = parseInt(input[0]);

    let class1: number[] = [];
    let class2: number[] = [];
    class1.push(0);
    class2.push(0);
    //累積和を作っておく
    for (let i = 0; i < N; i++) {
        const lines = input[i + 1].split(" ").map(Number);
        const cls = lines[0];
        const score = lines[1];
        if (cls === 1) {
            class1.push(class1[i] + score);
            class2.push(class2[i] + 0);
        } else {
            class1.push(class1[i] + 0);
            class2.push(class2[i] + score);
        }
    }

    // console.log(class1);
    // console.log(class2);

    const Q = parseInt(input[N + 1]);
    let question: number[][] = [];
    for (let i = 0; i < Q; i++) {
        const lines = input[i + N + 2].split(" ").map(Number);
        const from = lines[0];
        const to = lines[1];
        question.push([from, to]);
    }
    // console.log(question);

    question.forEach((hani) => {
        // const class1score = class1.slice(hani[0], hani[1]).reduce((a, b) => a + b, 0) - class1[hani[0] - 1];
        // const class2score = class2.slice(hani[0], hani[1]).reduce((a, b) => a + b, 0) - class2[hani[0] - 1];
        const class1score = class1[hani[1]] - class1[hani[0] - 1];
        const class2score = class2[hani[1]] - class2[hani[0] - 1];
        console.log(class1score + " " + class2score);
    });
});
