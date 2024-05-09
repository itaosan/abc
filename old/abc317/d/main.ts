import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

type senkyo = { X: number; Y: number; Z: number; negaeri: number };

rl.on("close", () => {
  const N = parseInt(input[0]);
  //const N = input[0].split(" ").map(Number);
  let D = [];
  let giseki = 0;
  let sudeniget = 0;
  for (let i = 0; i < N; i++) {
    const v = input[i + 1].split(" ").map(Number);
    const dd: senkyo = { X: v[0], Y: v[1], Z: v[2], negaeri: Math.ceil((v[1] - v[0]) / 2) };
    giseki += dd.Z;
    //既に勝ってるものは除く
    if (dd.X < dd.Y) {
      D.push(dd);
    } else {
      sudeniget += dd.Z;
    }
  }
  //議席多い順
  D = D.sort((a, b) => a.Z - b.Z);

  //過半数の数を調べる
  giseki = Math.ceil(giseki / 2);
  const hitsuyou = giseki - sudeniget;

  const n = D.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(hitsuyou + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= hitsuyou; j++) {
      console.log(`D[${i - 1}].Z` + D[i - 1].Z);
      if (D[i - 1].Z >= j) {
        dp[i][j] = Math.max(dp[i - 1][j], D[i - 1].negaeri + dp[i - 1][j - D[i - 1].Z]);
        console.log(`dp[${i}][${j}]1;` + dp[i][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
        console.log(`dp[${i}][${j}]2;` + dp[i][j]);
      }
    }
  }

  // 得られたdpテーブルから選ばれたカードを再構築する
  let sum = 0;
  let w = hitsuyou;
  for (let i = n; i > 0 && w > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      sum += D[i - 1].negaeri;

      w -= D[i - 1].Z;
      console.log("sum" + sum);
      console.log("w" + w);
    }
  }

  console.log(D);
  console.log(giseki);
  console.log(sudeniget);
  console.log(hitsuyou);
  console.log(sum);
});
