import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [L, R] = readLine().split(" ").map(BigInt);
//const S = readLine()

let current = L;
const result: Array<[bigint, bigint]> = [];
while (current < R) {
  //Rは2の何乗か
  const maxPower = findMaxPowerOfTwoBigInt(R);
  // currentが2のn乗の倍数で表せるかどうか maxPowerから逆順に調べる
  for (let power = maxPower; power >= 0; power--) {
    const base = 1n << BigInt(power);
    if (current % base === 0n && base * (current / base + 1n) <= R) {
      //いい配列に入れる
      result.push([current, base * (current / base + 1n) ]);
      current = base * (current / base + 1n);
      break;
    }
  }
}

// 結果の出力
console.log(result.length);
for (const [l, r] of result) {
  console.log(`${l} ${r}`);
}

function findMaxPowerOfTwoBigInt(n: bigint): number {
  let power = 0;
  let current = 1n;

  // currentがnを超えない間、currentを2倍にしていきます
  while (current <= n) {
    current *= 2n;
    power++;
  }

  // nがcurrentを超えた瞬間のpower-1が答えです（ループで1回多くカウントされるため）
  return power - 1;
}
