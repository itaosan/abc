import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let cnt = 0;
  const N = parseInt(input[0]);
  const A = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //平均値を求める
  const sum = A.reduce((acc, cur) => acc + cur, 0);
  //きりすて
  const ave = Math.floor(sum / A.length);
  //あまり
  const amari = sum % A.length;

  let B = new Array(A.length).fill(ave);

  for (let i = N-amari; i < N; i++) {
    B[i] += 1;
  }

  let avesum = 0;
  A.forEach((val, i) => {
    const sa = val - B[i];
    avesum += Math.abs(sa);
  });

  //差分の絶対値の合計を求める
  //const avesum = A.reduce((acc, cur) => acc + Math.abs(cur - ave), 0);
  //割る2して切り捨てた分が回答
  console.log(avesum / 2);
  // while (true) {
  //   //最大値と最小値を出して一気に埋める
  //   let min = Math.min(...A);
  //   let max = Math.max(...A);
  //   if (max - min <= 1) {
  //     break;
  //   }
  //   let sa = Math.floor((max - min) / 2);
  //   //maxいれかえ
  //   for (let i = 0; i < A.length; i++) {
  //     if (A[i]===max){
  //       A[i] = A[i] -sa
  //       break
  //     }
  //   }
  //   //minいえかえ
  //   for (let i = 0; i < A.length; i++) {
  //     if (A[i]===min){
  //       A[i] = A[i] +sa
  //       break
  //     }
  //   }
  //   cnt += sa;
  //   console.log(sa);
  //   console.log(A);
  // }
});
