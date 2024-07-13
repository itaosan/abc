import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const ranges: [number, number][] = [];
for (let i = 0; i < N; i++) {
  const [l, r] = readLine().split(" ").map(Number);
  ranges.push([l, r]);
}

const result = findCombination(N, ranges);

if (result) {
  console.log("Yes");
  console.log(result.join(" "));
} else {
  console.log("No");
}

function findCombination(N: number, ranges: Array<[number, number]>): number[] | null {
  const mid = Math.floor(N / 2);

  // 前半の組み合わせをすべて計算
  const leftCombinations = new Map<number, number[]>();
  function generateCombinations(index: number, sum: number, combination: number[]) {
      if (index === mid) {
          if (!leftCombinations.has(sum)) {
              leftCombinations.set(sum, combination.slice());
          }
          return;
      }
      const [L, R] = ranges[index];
      for (let x = L; x <= R; x++) {
          combination.push(x);
          generateCombinations(index + 1, sum + x, combination);
          combination.pop();
      }
  }
  generateCombinations(0, 0, []);

  // 後半の組み合わせを探索
  function findCombinationInRight(index: number, sum: number, combination: number[]): number[] | null {
      if (index === N) {
          if (leftCombinations.has(-sum)) {
              return [...leftCombinations.get(-sum)!, ...combination];
          }
          return null;
      }
      const [L, R] = ranges[index];
      for (let x = L; x <= R; x++) {
          combination.push(x);
          const result = findCombinationInRight(index + 1, sum + x, combination);
          if (result) return result;
          combination.pop();
      }
      return null;
  }
  return findCombinationInRight(mid, 0, []);
}

