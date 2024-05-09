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

const N = parseInt(readLine());
//const [, M] = readLine().split(" ").map(Number);
//const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let cntX = 0;
let cntY = 0;

for (let i = 0; i < N; i++) {
  const [X, Y] = readLine().split(" ").map(Number);
  cntX += X;
  cntY += Y;
  
}

if (cntX > cntY) {
  console.log("Takahashi");
}else if (cntX < cntY) {
  console.log("Aoki");
}else{
  console.log("Draw");
}

//Number.MIN_VALUE
//Number.MAX_VALUE
