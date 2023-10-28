import { debug } from "console";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

let [H, W] = [0, 0];
let cnt = 0;
let flg = 0;
let chk: number[][]
rl.on("close", () => {
  //const N = parseInt(input[0]);
  [H, W] = input[0].split(" ").map(Number);
  let S = [];
  for (let i = 0; i < H; i++) {
    const val = input[i + 1].split("").map(String);
    S.push(val);
  }

  chk = Array.from({ length: H }, () => Array(W).fill(0));
  //console.log(chk);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      check(S, x, y);
    }
  }

  console.log(cnt);
});

function check(S: String[][], x: number, y: number) {
  //チェック済みの個所はしない
  if (chk[y][x] === 1) {
    return;
  }
  //console.log(`x:${x} y:${y}`);
  //チェック済みにする
  chk[y][x] = 1;
  if (S[y][x] === "#") {
    if (flg === 0) {
      cnt++;
    }
    flg++;
    //周り９か所チェックする
    //左上
    if (x > 0 && y > 0) {
      check( S, x - 1, y - 1);
    }
    //上
    if (y > 0) {
      check( S, x, y - 1);
    }
    //右上
    if (x < W - 1 && y > 0) {
      check( S, x + 1, y - 1);
    }
    //左
    if (x > 0) {
      check( S, x - 1, y);
    }
    //右
    if (x < W - 1) {
      check( S, x + 1, y);
    }
    //左下
    if (x > 0 && y < H - 1) {
      check( S, x - 1, y + 1);
    }
    //下
    if (y < H - 1) {
      check( S, x, y + 1);
    }
    //右下
    if (x < W - 1 && y < H - 1) {
      check( S, x + 1, y + 1);
    }
    flg--;
  }
}
