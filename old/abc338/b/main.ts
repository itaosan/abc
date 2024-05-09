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
const S = readLine().split("").map(String);
//const h = [0, ...readLine().split(" ").map(Number)];

//Sのアルファベット別の出現回数をカウントする
const countMap = new Map<string, number>();
for (const s of S) {
  const count = countMap.get(s) || 0;
  countMap.set(s, count + 1);
}

//出現回数が一番大きいものをアルファベット順にソートする
const maxCount = Math.max(...countMap.values());
const maxCountAlphabets = [...countMap.entries()]
  .filter(([_, count]) => count === maxCount)
  .map(([alphabet, _]) => alphabet)
  .sort();

//Sをアルファベット順にソートする
console.log(maxCountAlphabets[0]);


//Number.MIN_VALUE
//Number.MAX_VALUE
