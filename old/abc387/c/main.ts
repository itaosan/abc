import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    if (this.front >= this.data.length) return undefined;
    const item = this.data[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.front >= this.data.length;
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [L, R] = readLine().split(" ").map(BigInt);
//const S = readLine()

const ans = cntHebi(R) - cntHebi(L - 1n);
console.log(ans.toString());

//k桁目までのヘビ数
function hebiKeta(k: number): bigint {
  let sum = 0n;
  for (let d = 1; d <= 9; d++) {
    sum += BigInt(d) ** BigInt(k - 1);
  }
  return sum;
}

function lastKetaHebi(N: bigint): bigint {
  const digits = N.toString()
    .split("")
    .map((ch) => Number(ch));
  const length = digits.length;
  const head = digits[0];
  let count = 0n;
  for (let d = 1; d < head; d++) {
    count += BigInt(d) ** BigInt(length - 1);
  }

  let checkNextKeta = true;
  for (let i = 1; i < length; i++) {
    if (!checkNextKeta) {
      break;
    }

    const x = digits[i];

    if (x >= head) {
      //次の桁が頭の桁より大きいので以下のヘビ数全部足して以降の桁チェックは不要
      count += BigInt(head) * BigInt(head) ** BigInt(length - 1 - i);
      checkNextKeta = false;
    } else {
      //xまでのヘビ数を足して次の桁をチェック
      count += BigInt(x) * BigInt(head) ** BigInt(length - 1 - i);

      if (i === length - 1) {
        //最後の桁
        count += 1n;
      }
    }
  }

  return count;
}

//ヘビ数の個数を返す
function cntHebi(N: bigint): bigint {
  if (N < 10n) {
    return 0n;
  }
  const digits = N.toString()
    .split("")
    .map((ch) => Number(ch));
  const L = digits.length;

  let result = 0n;
  for (let k = 2; k < L; k++) {
    result += hebiKeta(k);
  }

  result += lastKetaHebi(N);

  return result;
}
