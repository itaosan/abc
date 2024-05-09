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
    const s = input[0];

    if (
        s === "ACE" ||
        s === "BDF" ||
        s === "ACE" ||
        s === "CEG" ||
        s === "DFA" ||
        s === "EGB" ||
        s === "FAC" ||
        s === "GBD"
    ) {
        console.log("Yes");
    } else {
        console.log("No");
    }
});
