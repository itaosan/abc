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
  const [N, M] = input[0].split(" ").map(Number);
  const uri = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const kai = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a -b);
    let L = 0;
    let R = 2 * Math.pow(10, 9);
    
    while (R - L > 1) {
        const mid = Math.floor((L + R) / 2);
        let num = 0;

        for (const i of uri) {
            num += (i <= mid) ? 1 : 0;
        }

        for (const i of kai) {
            num -= (i >= mid) ? 1 : 0;
        }

        if (num >= 0) {
            R = mid;
        } else {
            L = mid;
        }
    }
    
    console.log(R);
});
