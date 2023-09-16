import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const M = parseInt(input[0]);
  const S1 = input[1].split("").map(Number);
  const S2 = input[2].split("").map(Number);
  const S3 = input[3].split("").map(Number);

  let S1min = Array(9).fill(Array(3).fill(999));
  let S2min = Array(9).fill(Array(3).fill(999));
  let S3min = Array(9).fill(Array(3).fill(999));

  //各スロットの出目の3回目までの順番を入れる
  for (let i = 0; i < M; i++) {
    if (S1min[S1[i]][0] > i) {
      S1min[S1[i]][0] = i;
    } else if (S1min[S1[i]][1] > i) {
      S1min[S1[i]][1] = i;
    } else if (S1min[S1[i]][2] > i) {
      S1min[S1[i]][2] = i;
    }
  }
  for (let i = 0; i < M; i++) {
    if (S2min[S2[i]] > i) S2min[S2[i]] = i;
  }
  for (let i = 0; i < M; i++) {
    if (S3min[S3[i]] > i) S3min[S3[i]] = i;
  }

  //一番少ないコスト
  let hitS1 = 999;
  let hitS2 = 999;
  let hitS3 = 999;
  let checkS1 = true;
  let checkS2 = true;
  let checkS3 = true;
  for (let i = 0; i < 10; i++) {
    //全部iにするための手数
    for (let j = 0; j < M; j++) {
      if (checkS1 && S1[j] === i) hitS1 = j;
      if (checkS2 && S2[j] === i) hitS2 = j;
      if (checkS3 && S3[j] === i) hitS3 = j;
    }
    S1[i];
    S1min;
  }
});
