import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, S] = readLine().split(" ").map(BigInt);
const A = readLine().split(" ").map(BigInt);

let sum = 0n;
let min = 1000000000n;

for (let i = 0; i < N; i++) {
  sum += A[i];
  min = A[i] < min ? A[i] : min;
}

// Aを2回分の配列から累積和
const A2 = A.concat(A);
const P = new Set<bigint>();
P.add(0n);
let val = 0n;
for (let i = 0; i < 2n * N; i++) {
  val += A2[i];
  P.add(val);
}

//console.error(P);

if (S < min) {
  console.log("No");
} else {
  //あまりのなかで部分和にあてはまるかどうか
  const T = S % sum;
  //console.error(T);
  let find = false;
  for (const p of P) {
    if (P.has(p + T)) {
      console.log("Yes");
      find = true;
      break;
    }
  }
  if (!find) {
    console.log("No");
  }
}
