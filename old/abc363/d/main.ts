import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = BigInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const findNthPalindrome = (N: bigint): bigint => {
  if (N === 1n) return 0n; // Nが1の場合、0を返す

  // 現在の桁数とカウンターの初期化
  let length = 1n;
  let count = 0n;

  // N 番目の回文数を見つけるまでループ
  while (true) {
    const halfLength = (length + 1n) / 2n;
    const start = 10n ** (halfLength - 1n);
    const end = 10n ** halfLength;
    const numPalindromes = end - start;

    if (count + numPalindromes >= N - 1n) {
      const index = N - count - 2n; 
      const half = start + index;
      return generatePalindrome(half, length % 2n !== 0n);
    }

    count += numPalindromes;
    length++;
  }
};

const generatePalindrome = (half: bigint, odd: boolean): bigint => {
  const leftPart = half.toString();
  const rightPart = leftPart.split('').reverse().join('');
  return BigInt(leftPart + (odd ? rightPart.slice(1) : rightPart));
};
console.log(findNthPalindrome(N).toString()); 
