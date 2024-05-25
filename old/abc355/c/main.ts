import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, T] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const S = readLine()

//各列のtrueの数
const colVal = Array.from({ length: N }, () => 0);
//各行のtrueの数
const rowVal = Array.from({ length: N }, () => 0);

//斜めの数1
let naname1 = 0;
//斜めの数2
let naname2 = 0;

let flg = false;
for (let i = 0; i < T; i++) {
  const val = A[i] - 1;
  //何列目か
  const row = Math.floor(val / N);
  const col = val % N;
  colVal[col]++;
  //ビンゴかどうか
  if (colVal[col] === N) {
    console.log(i + 1);
    flg = true;
    break;
  }

  rowVal[row]++;
  if (rowVal[row] === N) {
    console.log(i + 1);
    flg = true;
    break;
  }

  //斜めの数1
  if (row === col) {
    naname1++;
    if (naname1 === N) {
      console.log(i + 1);
      flg = true;
      break;
    }
  }

  //斜めの数2
  if (row + col === N - 1) {
    naname2++;
    if (naname2 === N) {
      console.log(i + 1);
      flg = true;
      break;
    }
  }
}

if (!flg) {
  console.log(-1);
}
