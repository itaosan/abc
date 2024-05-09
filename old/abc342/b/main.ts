import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const P = readLine().split(" ").map(Number);
const Q = parseInt(readLine());

for (let i = 0; i < Q; i++) {
  const [a, b] = readLine().split(" ").map(Number);
  P.indexOf(a) > P.indexOf(b) ? console.log(b) : console.log(a);
}

//Number.MIN_VALUE
//Number.MAX_VALUE
