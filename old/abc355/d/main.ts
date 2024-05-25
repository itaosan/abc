import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

const intervals: [number, number][] = [];
for (let i = 0; i < N; i++) {
  const [l, r] = readLine().split(" ").map(Number);
  intervals.push([l, r]);
}


function countNonOverlappingIntervals(N: number, intervals: [number, number][]): number {
  const l: number[] = new Array(N);
  const r: number[] = new Array(N);
  
  for (let i = 0; i < N; i++) {
      l[i] = intervals[i][0];
      r[i] = intervals[i][1];
  }

  l.sort((a, b) => a - b);
  r.sort((a, b) => a - b);

  let ans = N * (N - 1) / 2;
  let j = 0;

  for (let i = 0; i < N; i++) {
      while (j < N && r[j] < l[i]) {
          j++;
      }
      ans -= j;
  }

  return ans;
}

console.log(countNonOverlappingIntervals(N, intervals)); // 出力: 3
