import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const K = readLine().split(" ").map(Number);
//const S = readLine()

//Kの値をg1とg2になるべく均等に分ける
const [g1, g2] = partition(K);
//各グループの合計値を比較して大きい方を出力
console.log(Math.max(g1.reduce((acc, num) => acc + num, 0), g2.reduce((acc, num) => acc + num, 0)));

function partition(nums: number[]): [number[], number[]] {
  const n = nums.length;
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let minDiff = Number.POSITIVE_INFINITY;
  let bestPartition: [number[], number[]] = [[], []];

  function backtrack(index: number, groupA: number[], groupB: number[], sumA: number, sumB: number): void {
    if (index === n) {
      const currentDiff = Math.abs(sumA - sumB);
      if (currentDiff < minDiff) {
        minDiff = currentDiff;
        bestPartition = [groupA.slice(), groupB.slice()];
      }
      return;
    }

    // Try adding the current element to group A
    groupA.push(nums[index]);
    backtrack(index + 1, groupA, groupB, sumA + nums[index], sumB);
    groupA.pop();

    // Try adding the current element to group B
    groupB.push(nums[index]);
    backtrack(index + 1, groupA, groupB, sumA, sumB + nums[index]);
    groupB.pop();
  }

  backtrack(0, [], [], 0, 0);
  return bestPartition;
}

