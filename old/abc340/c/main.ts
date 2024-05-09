import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}
//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const n = BigInt(readLine());
//const h = [0, ...readLine().split(" ").map(Number)];

//払った金額の総和
let ans = 0;

const numberMap: Map<bigint, bigint> = new Map<bigint, bigint>();

// Nを2で割って２つの変数に入れる
const waru = (N: bigint) => {
  let cost = 0n;
  let a = 0n;
  let b = 0n;
  if (N < 2) {
    return 0n;
  }

  if (numberMap.has(N)) {
    return numberMap.get(N)!;
  }

  if (N % 2n === 0n) {
    a = N / 2n;
    b = N / 2n;
  } else {
    a = N / 2n;
    b = N / 2n +1n;
  }
  cost = waru(a);
  numberMap.set(a, cost);
  let cost2 = 0n;
  cost2 = waru(b);
  numberMap.set(b, cost2);
  return cost + cost2+N;
};


console.log(waru(n).toString());
//Number.MIN_VALUE
//Number.MAX_VALUE
