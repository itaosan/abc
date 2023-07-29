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
    // Parse the number of rows and columns
    let [N, M] = input[0].split(" ").map(Number);
});
