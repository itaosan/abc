import { readFileSync } from "fs";
import { arrayBuffer } from "stream/consumers";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const n = input[0].split(" ").map(Number);
const cnt = n[0];
const lim = n[1];

let kusuri: number[][] = new Array();

for (let i = 0; i < cnt; i++) {
    kusuri[i] = input[i + 1].split(" ").map(Number);
}

let nomu = 0;

kusuri.forEach((a, i) => {
    nomu += a[1];
});

if (nomu <= lim) {
    console.log(1);
} else {
    kusuri.sort((a, b) => {
        return a[0] - b[0];
    });

    for (let a of kusuri) {
        nomu -= a[1];
        if (nomu <= lim) {
            console.log(a[0] + 1);
            break;
        }
    }
}
