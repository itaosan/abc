import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, X] = readLine().split(" ").map(Number);
const P = readLine().split(" ").map(Number);

//パックはN枚
//X枚レアが欲しい

