import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const Q = Number.parseInt(readLine(), 10);

let nowDay = 0n;
const uekibachi: bigint[] = [];
// 刈り取り済み
let GetedIndex = 0;

for (let i = 0; i < Q; i++) {
  const [Type, V] = readLine().split(" ").map(BigInt);

  if (Type === 1n) {
    // 植える
    uekibachi.push(nowDay);
  } else if (Type === 2n) {
    // 日付経過
    nowDay += V;
  } else if (Type === 3n) {
    // 刈り取る
    const targetDay = nowDay - V;

    // 二分探索
    let left = GetedIndex;
    let right = uekibachi.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (uekibachi[mid] <= targetDay) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    const GetIndex = left;
    // 既に刈り取り済みのものは除く
    const cnt = GetIndex - GetedIndex;
    // 収穫済み
    GetedIndex = GetIndex;

    console.log(cnt);
  }
}

