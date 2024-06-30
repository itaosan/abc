import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, T] = readLine().split(" ").map(Number);
const S = readLine();
const X = readLine().split(" ").map(Number);

const plus: { from: number; to: number }[] = [];
const minus: { from: number; to: number }[] = [];

//格納
for (let i = 0; i < N; i++) {
  if (S[i] === "1") {
    plus.push({ from: X[i], to: X[i] + T });
  } else {
    minus.push({ from: X[i], to: X[i] - T });
  }
}

// plus配列をfromの昇順にソート
plus.sort((a, b) => a.from - b.from);
// minus配列をfromの昇順ソート
minus.sort((a, b) => a.from - b.from);

//console.error(plus);
//console.error(minus);

let cnt = 0;
let start = 0;
for (let i = 0; i < plus.length; i++) {
  for (let j = start; j < minus.length; j++) {
    if (plus[i].from > minus[j].from) {
      start = j;
      //console.error(`start: ${start}`);
      continue;
    }
    if (plus[i].to >= minus[j].to) {
      //console.error(`minus.length-j: ${minus.length - j}`);
      cnt++;
    } else {
      break;
    }
  }
}

console.log(cnt);
