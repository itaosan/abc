import { readFileSync } from "fs";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");
//数字配列に突っ込む
const num: number[] = input[0].split(" ").map(Number);

let old = 0;
let flg = true;
num.forEach((a) => {
    if (old > a) {
        flg = false;
        return;
    }
    if (a < 100 || a > 675) {
        flg = false;
        return;
    }
    if (a % 25 !== 0) {
        flg = false;
        return;
    }
    old = a;
});

if (flg) {
    console.log("Yes");
} else {
    console.log("No");
}
