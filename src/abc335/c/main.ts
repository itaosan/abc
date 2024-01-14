import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, Q] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let x = 1;
let y = 0;
let zahyo = [];
let moveCnt = 0;
for (let i = 1; i <= Q; i++) {
  const [C, M] = readLine().split(" ").map(String);
  //コマンドが１の時は座標を動かす
  if (C === "1") {
    //現在の座標を保存
    zahyo.push([x, y]);
    //console.log(zahyo);
    if (M === "R") {
      x++;
    } else if (M === "L") {
      x--;
    } else if (M === "U") {
      y++;
    } else if (M === "D") {
      y--;
    }
    moveCnt++;
  } else if (C === "2") {
    const m = parseInt(M);
    if (m === 1) {
      console.log(`${x} ${y}`);
    } else if (m > moveCnt + 1) {
      console.log(`${m - moveCnt} 0`);
    } else {
      //console.log(`m=${m} moveCnt=${moveCnt}`)
      //console.log(zahyo)
      const pos = zahyo.length-m+1
      console.log(`${zahyo[pos][0]} ${zahyo[pos][1]}`);
    }
  }
}

//Number.MIN_VALUE
//Number.MAX_VALUE
