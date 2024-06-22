import { X509Certificate } from "node:crypto";
import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [Sx, Sy] = readLine().split(" ").map(BigInt);
const [Tx, Ty] = readLine().split(" ").map(BigInt);
//const S = readLine()

// BigInt型の数値aとbの引き算の結果の絶対値を計算する関数
function absBG(a: bigint, b: bigint): bigint {
  // 結果が負の場合は符号を反転させる
  const difference = a - b;
  return difference < 0n ? -difference : difference;
}

// BigInt型の割り算の結果を切り上げる関数
function ceilDiv(a: bigint, b: bigint): bigint {
  // 商を計算し、余りがある場合は1を加えて切り上げ
  const quotient = a / b;
  const remainder = a % b;
  return remainder === 0n ? quotient : quotient + 1n;
}

//スタート地点を基準に考える（絶対値にする）
const Dx = absBG(Tx, Sx);
const Dy = absBG(Ty, Sy);

let ans = 0n;
let tate = 0n;
let yoko = 0n;

//Y軸の移動分がコスト
tate = absBG(Ty, Sy);
//X軸の移動分/2(切り上げ)がコスト
yoko = ceilDiv(Dx, 2n);

if (Sx === Tx) {
  //うごかない
} else if (Sx < Tx) {
  //右に動く
  if (yoko > 0n) {
    if (Sy % 2n === 0n && Sx % 2n === 0n) {
      //SyとSxが偶数の場合は-1
      yoko--;
    } else if (Sy % 2n === 1n && Sx % 2n === 1n) {
      //SyとSxが奇数の場合は-1
      yoko--;
    }
  }
} else {
  //左に動く
  if (yoko > 0n) {
    if (Sy % 2n === 0n && Sx % 2n === 1n) {
      //SyとSxが偶数の場合は-1
      yoko--;
    } else if (Sy % 2n === 1n && Sx % 2n === 0n) {
      //SyとSxが奇数の場合は-1
      yoko--;
    }
  }
}

let sa = 0n;
if (tate % 2n === 0n) {
  sa = yoko - tate / 2n;
} else {
  sa = yoko - tate / 2n + 1n;
}
if (sa < 0n) {
  //縦移動分がコスト
  ans = tate;
} else {
  ans = tate + sa;
}

console.error(`Dx: ${Dx}, Dy: ${Dy}`);
console.log(ans.toString());
