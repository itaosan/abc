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
    const [N, D] = input[0].split(" ").map(Number);
    let ok = new Array(D).fill(true);
    for (let i = 0; i < N; i++) {
        const str = input[i + 1].split("").map(String);
        str.forEach((val, i) => {
            if (val === "x") {
                ok[i] = false;
            }
        });
    }

    let cnt = 0;
    let mxcnt = 0;
    ok.forEach((val, i) => {
        if (val === true) {
            cnt++;
        } else {
            cnt = 0;
        }
        if (mxcnt < cnt) mxcnt = cnt;
    });

    console.log(mxcnt);
});
