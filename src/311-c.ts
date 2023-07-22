import * as readline from "readline";
import { WritableStreamDefaultController } from "stream/web";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    //const [N, M] = input[0].split(" ").map(Number);
    const N = parseInt(input[0]);
    const A = input[1].split(" ").map(Number);
    A.unshift(0);
    const chk = new Array(N + 1).fill(0);
    let loop: Array<number> = [];
    let val = 1;
    while (chk[val] === 0) {
        chk[val] = 1;
        loop.push(val);
        val = A[val];
    }
    const cnt = loop.indexOf(val);
    console.log(loop.slice(cnt).length);
    console.log(loop.slice(cnt).join(" "));
});
