import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const S = readLine()


//各要素をMで割った余りを求め、総合計を求める