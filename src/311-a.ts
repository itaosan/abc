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
    const S = input[1].split("").map(String);

    let [a, b, c] = [false, false, false];
    let ans = 0;
    S.forEach((str, i) => {
        if (a && b && c) {
        } else {
            if (str === "A") {
                a = true;
            } else if (str === "B") {
                b = true;
            } else {
                c = true;
            }
            if (a && b && c) {
                ans = i + 1;
            }
        }
    });

    console.log(ans);
});
