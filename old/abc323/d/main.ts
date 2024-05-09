import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

type Pair = {
  x: number;
  y: bigint;
};

let inputCount = 0;
let n = 0;
const mp: Map<number, bigint> = new Map();

rl.on("line", (input: string) => {
  if (inputCount === 0) {
    n = parseInt(input);
    inputCount++;
  } else {
    const inputs = input.split(" ").map((s) => parseInt(s));
    let x = inputs[0];
    let y = BigInt(inputs[1]);

    while ((x & 1) === 0) {
      x >>= 1;
      y <<= 1n;
    }

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

  for (let [_, y] of mp.entries()) {
    while (y > 0n) {
      if (y & 1n) ans++;
      y >>= 1n;
    }
  }

  console.log(ans);
});
