import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const S = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

const charCount = new Map<string, number>();
// 文字の出現回数を数える
for (const char of S) {
  charCount.set(char, (charCount.get(char) || 0) + 1);
}

const N = S.length;
// 全ての可能な文字の交換の組み合わせの数
let totalCombinations = (N * (N - 1)) / 2;

// 同じ文字の交換は同じ文字列を生成するので、それらを引く
let first = true;
charCount.forEach((count) => {
  totalCombinations -= (count * (count - 1)) / 2;
  if (first && count > 1) {
    totalCombinations++;
    first = false;
  }
});

console.log(totalCombinations);
