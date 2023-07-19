import { readFileSync } from "fs";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

//参加人数
const num = parseInt(input[0]);

let coin: number[][] = new Array();

for (let i = 0; i < num; i++) {
    coin[i] = input[i + 1].split(" ").map(Number);
}

let seikou: { id: number; val1: bigint; val2: bigint }[] = new Array();

coin.forEach((a, i) => {
    const omote = BigInt(coin[i][0]);
    const ura = BigInt(coin[i][1]);
    seikou[i] = { id: i + 1, val1: omote, val2: omote + ura };
});

seikou.sort((a, b) => {
    const diff = b.val1 * a.val2 - a.val1 * b.val2;
    if (diff === BigInt(0)) {
        return a.id - b.id;
    }
    return diff > BigInt(0) ? 1 : -1;
});

let rtn = "";
seikou.forEach((i) => {
    if (rtn.length > 0) {
        rtn = rtn + " ";
    }
    rtn = rtn + i.id;
});
console.log(rtn);
