import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const A = readLine().split(" ").map(Number);

const M = 2e5 + 1;
let s = Array.from({ length: M }, (_, index) => index);
for (let d = 1000; d >= 2; d--) {
  for (let k = d * d; k < M; k += d * d) {
    if (s[k] % (d * d) === 0) s[k] /= d * d;
  }
}

const cnt: number[] = Array(M).fill(0);
A.forEach((value) => cnt[s[value]]++);
//console.log(cnt);
let ans = 0;
for (let i = 0; i < M; i++) {
  ans += cnt[i] * cnt[i];
}
console.log((ans - N) / 2 + cnt[0] * (N - cnt[0]));

// for (let i = 1; i < M; i++) {
//   ans += cnt[i] * (cnt[i]-1) / 2;
// }
// ans += cnt[0] * (N - cnt[0])
//console.log(ans);
