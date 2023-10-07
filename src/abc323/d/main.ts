import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

type Slime = {
  no: number;
  size: number;
  cnt: number;
};

rl.on("close", () => {
  const N = parseInt(input[0]);
  //const [N, M] = input[0].split(" ").map(Number);
  let slimes: Slime[] = [];
  for (let i = 0; i < N; i++) {
    const S = input[i + 1].split(" ").map(Number);
    const slime: Slime = {
      no: i,
      size: S[0],
      cnt: S[1],
    };
    slimes.push(slime);
  }

  //小さい順にソート
  slimes.sort((a,b)=> a.size - b.size)

  const slimeMap = new Map<number, number>();

  for (const slime of slimes) {
    slimeMap.set(slime.size, slime.cnt);
  }

  for (const [size, count] of slimeMap) {
    let newCount = count;
    let multiplier = 2;
    
    // ビット演算を用いて合成を行う
    while (newCount >= 2) {
        const pairs = newCount >> 1; // 合成ペアの数
        const newSize = size * multiplier;
        const existingCount = slimeMap.get(newSize) || 0;

        slimeMap.set(newSize, existingCount + pairs);
        newCount %= 2;
        multiplier *= 2;
    }

    // 更新したカウントで現在のサイズを更新する
    slimeMap.set(size, newCount);
  }

  // 最終的なスライムの合計数を計算
  let totalCount = 0;
  for (const count of slimeMap.values()) {
    totalCount += count;
  }

  console.log(totalCount);
});
