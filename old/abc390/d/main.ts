import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const A = readLine().split(" ").map(BigInt);
//const S = readLine()

// N個の袋に入っている石の個数を bitmask で表現したときの「部分集合の総和」を前計算する
// subSum[S] = S で選んだ Ai の総和 (bitmask の i ビット目が立っていれば A[i] を含む)
const subSum: bigint[] = new Array(1 << N).fill(0n);

for (let mask = 1; mask < 1 << N; mask++) {
  // 最も下位に立っているビットを取り出す
  // 例: mask = 10100(2) のとき、t = 00100(2)
  // i = (そのビット番号)
  const t = mask & -mask; // mask の最下位ビット
  const i = Math.log2(t); // 何番目のビットか

  // subSum[mask ^ t] は「mask の最下位ビットを落とした集合」の総和
  // よって mask の総和はそこに A[i] を足したもの
  subSum[mask] = subSum[mask ^ t] + A[i];
}

// dp[S] = { S をいくつかのブロックに分割したときに得られる「ブロックの総和の XOR」 の全集合 }
// ただしブロックは「要素が空でない部分集合」の集合分割であり、各要素はちょうど1つのブロックに属す
const dp: Set<bigint>[] = Array.from({ length: 1 << N }, () => new Set<bigint>());

// 空集合に対しては「ブロックがない」→ XOR は 0 とみなせる
dp[0].add(0n);

// すべての部分集合 S について dp[S] を求める
// 2^N 通りの S に対し、S の部分集合 T を2^|S| - 1通り巡回する
for (let S = 1; S < 1 << N; S++) {
  // S の非空部分集合 T を列挙
  // T を (T - 1) & S と繰り返すことで「S の部分集合 T」をすべて走査できる
  let T = S;
  while (T > 0) {
    const rest = S ^ T; // S\T に対応するビットマスク

    for (const x of dp[rest]) {
      // T の総和 subSum[T] を新たなブロックとして加えた時、XOR 値は subSum[T] ^ x
      dp[S].add(subSum[T] ^ x);
    }

    T = (T - 1) & S; // 次の T (S の部分集合を順次生成)
  }
}

// 答えは「全要素を含む集合 (1<<N) - 1」に対して得られる XOR の個数
console.log(dp[(1 << N) - 1].size);
