import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let o = ""

for (let i = 0; i < N; i++) {
  o += "o"
}

console.log(`L${o}ng`)

//Number.MIN_VALUE
//Number.MAX_VALUE
