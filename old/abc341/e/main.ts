import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, Q] = readLine().split(" ").map(Number);
let S = BigInt(readLine());

for (let i = 0; i < Q; i++) {
  const [qes, L, R] = readLine().split(" ").map(Number);
  if (qes === 1) {
    S = flipBitsFromTopInRangeForNBits(S, L, R);
    //console.log(S);
  } else {
    const val = extractBitsFromTopAsStringN(S, L, R);
    console.log(isAlternatingBitsN(val, R - L + 1) ? "Yes" : "No");
  }
}

function flipBitsFromTopInRangeForNBits(num: bigint, L: number, R: number): bigint {
  // 上位ビットからの位置L, Rをもとにビットマスクを作成
  const mask = ((BigInt(1) << BigInt(N - L + 1)) - BigInt(1)) ^ ((BigInt(1) << BigInt(N - R)) - BigInt(1));
  // ビットマスクを使って指定範囲のビットを反転
  return num ^ mask;
}

function extractBitsFromTopAsStringN(num: bigint, L: number, R: number): bigint {
  // 文字列の長さをNとする
  // 上位ビットからの位置を下位ビットからの位置に変換
  const startFromBottom = N - R;
  const endFromBottom = N - L + 1;
  // 指定範囲のビットを抜き出す
  return (num >> BigInt(startFromBottom)) & BigInt((1 << (endFromBottom - startFromBottom)) - 1);
}

function isAlternatingBitsN(num: bigint, N: number): boolean {
  const binaryStr = num.toString(2).padStart(N, "0");
  // 文字列がN桁未満の場合は、上位ビットに0が存在するとみなし、falseを返す
  if (binaryStr.length < N - 1) {
    return false;
  }

  // 数値とその1ビット右シフトした値のXORを取る
  const xorResult = num ^ (num >> BigInt(1));

  // XORの結果に1を足して2の補数を取り、元のXORの結果とANDを取る
  const checkResult = xorResult & (xorResult + BigInt(1));

  // 結果が0なら全ビットが1であり、ビットが交互になっていると判断
  return checkResult === BigInt(0) && binaryStr.length === N;
}
