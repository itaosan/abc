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
const [B, G] = readLine().split(" ").map(Number);
//const S = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

if (B > G) {
  console.log("Bat");
} else {
  console.log("Glove");
}

//Number.MIN_VALUE
//Number.MAX_VALUE
