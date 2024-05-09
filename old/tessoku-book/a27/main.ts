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
const [A, B] = readLine().split(" ").map(Number);

//ユーグリッドの互除法を用いて最大公約数を求める
const gcd = (a: number, b: number): number => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

console.log(gcd(A, B));

//Number.MIN_VALUE
//Number.MAX_VALUE
