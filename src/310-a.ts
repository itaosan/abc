import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, P, Q] = readLine().split(" ").map(Number);

const p: number[] = readLine().split(" ").map(Number);

let best = P;

for (let i = 0; i < N; i++) {
    if (Q + p[i] < best) {
        best = Q + p[i];
    }
}

console.log(best);
