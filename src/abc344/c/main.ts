import * as fs from "fs";


const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());
const A = readLine().split(" ").map(Number);
const M = parseInt(readLine());
const B = readLine().split(" ").map(Number);
const L = parseInt(readLine());
const C = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

//A,B,Cの組み合わせて足し算した結果をMapに格納
const sum = new Set();
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < L; k++) {
      sum.add(A[i] + B[j] + C[k]);
    }
  }
}

const Q = parseInt(readLine());
const X = readLine().split(" ").map(Number);

//Xの各項目がsumに含まれているかを判定
for (let i = 0; i < Q; i++) {
  if (sum.has(X[i])) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}


//Number.MIN_VALUE
//Number.MAX_VALUE
