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
    const [n, m] = input[0].split(" ").map(Number);
    const s = input.slice(1, n + 1);

    const dx4 = [1, -1, 0, 0];
    const dy4 = [0, 0, 1, -1];

    const fl: number[] = Array(5 * n * m).fill(0);
    const q: number[] = [];

    fl[5 * (m + 1) + 4] = 1;
    q.push(5 * (m + 1) + 4);

    while (q.length !== 0) {
        const od = q.shift();
        if (od === undefined) {
            throw new Error("Queue is empty");
        }
        const x = Math.floor(od / 5 / m);
        const y = Math.floor((od / 5) % m);
        const d = od % 5;

        if (d === 4) {
            for (let i = 0; i < 4; i++) {
                const nx = x + dx4[i];
                const ny = y + dy4[i];
                const nd = i;
                if (s[nx][ny] === ".") {
                    const nid = 5 * (nx * m + ny) + nd;
                    if (fl[nid] === 0) {
                        fl[nid] = 1;
                        q.push(nid);
                    }
                }
            }
        } else {
            const nx = x + dx4[d];
            const ny = y + dy4[d];
            const nd = d;
            if (s[nx][ny] === ".") {
                const nid = 5 * (nx * m + ny) + nd;
                if (fl[nid] === 0) {
                    fl[nid] = 1;
                    q.push(nid);
                }
            } else {
                const nid = 5 * (x * m + y) + 4;
                if (fl[nid] === 0) {
                    fl[nid] = 1;
                    q.push(nid);
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < n * m; i++) {
        res += Math.max(fl[5 * i], fl[5 * i + 1], fl[5 * i + 2], fl[5 * i + 3], fl[5 * i + 4]);
    }

    console.log(res);
});
