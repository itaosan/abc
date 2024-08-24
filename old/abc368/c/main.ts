import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
const H = readLine().split(" ").map(Number);
//const S = readLine()

let T = 0;
let i = 0;
while (true) {
  //敵の位置を確認
  while (i < N) {
    if (H[i] <= 0) i++;
    else break;
  }
  //敵はいない
  if (i === N) break;

  //攻撃
  let hp = H[i];
  //1回目の３の倍数までの調整
  if (T % 3 === 0) {
    //調整不要
  } else if (T % 3 === 1) {
    T++;
    hp--;
    if (hp <= 0) {
      H[i] = 0;
      continue;
    }
    T++;
    hp = hp - 3;
    if (hp <= 0) {
      H[i] = 0;
      continue;
    }
  } else if (T % 3 === 2) {
    T++;
    hp = hp - 3;
    if (hp <= 0) {
      H[i] = 0;
      continue;
    }
  }

  //hp/5の切り上げ
  const t = Math.ceil(hp / 5) * 3;
  const amari = hp % 5;
  if (amari < 3 && amari > 0) {
    T += t - 3 + amari;
  } else {
    T += t;
  }
  H[i] = 0;
}
console.log(T);
