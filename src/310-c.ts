import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
let ans = 0;
let T: Set<string> = new Set();
for (let i = 1; i <= N; i++) {
    let s = readLine();
    if (!T.has(s)) ans++;
    T.add(s);
    s = s.split("").reverse().join("");
    T.add(s);
}
console.log(ans);
