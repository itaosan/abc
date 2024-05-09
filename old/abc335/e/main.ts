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

//const N = parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

const edges = [];

for (let i = 0; i < M; i++) {
  const [u, v] = readLine().split(" ").map(Number);
  edges.push([u, v]);
}

