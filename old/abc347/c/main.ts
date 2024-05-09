import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, A,B] = readLine().split(" ").map(BigInt);
const D = readLine().split(" ").map(BigInt);

const youbi = new Set<bigint>
for (let i = 0; i < N; i++) {
  youbi.add(D[i] % (A+B));
}

//Setをソート
const sortedArray: bigint[] = Array.from(youbi).sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

let max = 0n
let min = 0n
let flg = true
const tgt = sortedArray[0]
for (const y of sortedArray) {
  console.error(`tgt:${tgt} y:${y} `);
  const plus = y-tgt
  const minus = y - (A+B+tgt)

  if (plus> -minus){
    min = minus
  }else{
    max = plus
  }

  console.error(`max:${max} min:${min} max-min:${max-min}`);
  if (max-min >= A) {
    flg = false;
    break;
  }
}

console.log(flg ? "Yes" : "No");


