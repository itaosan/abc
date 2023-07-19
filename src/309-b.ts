import { readFileSync } from "fs";
import { arrayBuffer } from "stream/consumers";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const cnt = parseInt(input[0]);

let val: number[][] = new Array();
for (let i = 0; i < cnt; i++) {
    val[i] = input[i + 1].split("").map(Number);
}

let ans: number[][] = new Array();

val.forEach((a, i) => {
    ans[i] = new Array();
    if (i === 0) {
        a.forEach((b, j) => {
            if (j === 0) {
                ans[0][0] = val[1][0];
            } else {
                ans[0][j] = val[0][j - 1];
            }
        });
    } else if (i === cnt - 1) {
        a.forEach((b, j) => {
            if (j === cnt - 1) {
                ans[i][j] = val[i - 1][j];
            } else {
                ans[i][j] = val[i][j + 1];
            }
        });
    } else {
        a.forEach((b, j) => {
            if (j === 0) {
                ans[i][j] = val[i + 1][j];
            } else if (j === cnt - 1) {
                ans[i][j] = val[i - 1][j];
            } else {
                ans[i][j] = val[i][j];
            }
        });
    }
});

ans.forEach((a, i) => {
    console.log(a.join(""));
});
