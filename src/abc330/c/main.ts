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

const N = parseInt(readLine());

console.log(findMinimumDifference(N))

function findMinimumDifference(D: number): number {
  let minDiff = Infinity;
  let x = 0, y = Math.floor(Math.sqrt(D));

  while (x <= y) {
      const currentSum = x * x + y * y;
      const currentDiff = Math.abs(currentSum - D);
      minDiff = Math.min(minDiff, currentDiff);

      // x^2 + y^2 が D より大きい場合、y を減らします
      if (currentSum > D) {
          y--;
      } else if (currentSum < D) {
          // x^2 + y^2 が D より小さい場合、x を増やします
          x++;
      } else {
          // x^2 + y^2 が D と等しい場合、最小値は0です
          return 0;
      }
  }

  return minDiff;
}

//Number.MIN_VALUE
//Number.MAX_VALUE
