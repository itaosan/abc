import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
const P = readLine().split(" ").map(Number);

const map: Record<number, number> = {}; // 各数値のインデックスを記録するためのマップ
for (let i = N - 1; i >= 0; i--) {
  //各数字の添え字を記録
  map[P[i]] = i;
}

let ans = 200000;
let maxDeque: number[] = [0]; // 最大値のインデックスを保持するdeque
let minDeque: number[] = [200000]; // 最小値のインデックスを保持するdeque
let maxhead = 0;
let minhead = 0;

for (let i = N; i >= 1; i--) {
  const soezi = map[i];
  let max = maxDeque[maxhead];
  let min = minDeque[minhead];

  if (soezi > max) {
    maxDeque = [soezi];
    max = soezi;
    maxhead = 0;
  } else {
    let len = maxDeque.length;
    while (maxDeque[len - 1] < soezi) {
      maxDeque.pop();
      len--;
    }
    maxDeque.push(soezi);
  }

  if (soezi < min) {
    minDeque = [soezi];
    min = soezi;
    minhead = 0;
  } else {
    let len = minDeque.length;
    while (minDeque[len - 1] > soezi) {
      minDeque.pop();
      len--;
    }
    minDeque.push(soezi);
  }

  if (i <= N - K + 1) {
    const k1 = max - min;
    if (ans > k1) ans = k1;
    if (max === map[i + K - 1]) {
      maxhead++;
    }
    if (min === map[i + K - 1]) {
      minhead++;
    }
    if (ans === K - 1) break; // 早期終了条件
  }
}

console.log(ans);
