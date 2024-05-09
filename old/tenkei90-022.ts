import * as readline from "readline";

//ユーグリッドの互除法
function gcd(a: bigint, b: bigint): bigint {
    if (b === 0n) {
        return a;
    }
    return gcd(b, a % b);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    const [A, B, C] = input[0].split(" ").map(BigInt);

    //let gcd_val : bigint = BigInt(0);
    let gcd_val = 0n;
    //ABの最大公約数
    gcd_val = gcd(A, B);
    //それとCの最大公約数
    gcd_val = gcd(gcd_val, C);

    //切る回数は各項目/最大公約数-1の合計
    const sum = A / gcd_val - 1n + (B / gcd_val - 1n) + (C / gcd_val - 1n);
    console.log(sum.toString());
});
