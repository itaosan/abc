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
const [H, W, N] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];
//H×Wのマス目を作成
const board = Array(H)
  .fill(".")
  .map(() => Array(W).fill("."));
let x = 0;
let y = 0;

let mode = "ue";

const movea = () => {
  if (mode === "ue") {
    mode = "migi";
    if (x + 1 < W) {
      x++;
    } else {
      x = 0;
    }
  } else if (mode === "migi") {
    mode = "sita";
    if (y + 1 < H) {
      y++;
    } else {
      y = 0;
    }
  } else if (mode === "sita") {
    mode = "hidari";
    if (x - 1 >= 0) {
      x--;
    } else {
      x = W - 1;
    }
  } else if (mode === "hidari") {
    mode = "ue";
    if (y - 1 >= 0) {
      y--;
    } else {
      y = H - 1;
    }
  }
};

const moveb = () => {
  if (mode === "ue") {
    mode = "hidari";
    if (x - 1 >= 0) {
      x--;
    } else {
      x = W - 1;
    }
  } else if (mode === "hidari") {
    mode = "sita";
    if (y + 1 < H) {
      y++;
    } else {
      y = 0;
    }
  } else if (mode === "sita") {
    mode = "migi";
    if (x + 1 < W) {
      x++;
    } else {
      x = 0;
    }
  } else if (mode === "migi") {
    mode = "ue";
    if (y - 1 >= 0) {
      y--;
    } else {
      y = H - 1;
    }
  }
};

//N回繰り返す
for (let i = 0; i < N; i++) {
  //升目が.の場合 # に変更
  if (board[y][x] === ".") {
    board[y][x] = "#";
    movea();
  } else {
    //升目が#の場合、.に変更
    board[y][x] = ".";
    moveb();
  }
}

//升目の内容を出力
console.log(board.map((row) => row.join("")).join("\n"));

//Number.MIN_VALUE
//Number.MAX_VALUE
