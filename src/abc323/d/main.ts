import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputCount = 0;
let n = 0;
const mp: Map<bigint, bigint> = new Map();

rl.on("line", (input: string) => {
  if (inputCount === 0) {
    n = parseInt(input);
    inputCount++;
  } else {
    const [x, y] = input.split(" ").map(BigInt);
    //各スライムの個数にmap
    //存在する場合は足しこむ
    mp.set(x, (mp.get(x) || 0n) + y);

    if (inputCount === n) {
      rl.close();
    } else {
      inputCount++;
    }
  }
});

rl.on("close", () => {
  let ans = 0;

  for (const [x, y] of mp.entries()) {
    if (y > 1n) {
      //2個以上なら合成
      const newX = x * 2n;
      //合成語のサイズの Mapに足しこむ
      //入力例が昇順なので小さい方に足しこまれることはない
      mp.set(newX, (mp.get(newX) || 0n) + y / 2n);
    }
    if (y & 1n) {
      //奇数の場合は合成できない、匹を足す
      ans++;
    }
  }

  console.log(ans);
});
