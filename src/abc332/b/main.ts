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
const [K, G,M] = readLine().split(" ").map(Number);

let g = 0
let m = 0
for (let i = 0; i < K; i++) {
  if(g===G){
    g= 0
  }else  if(m === 0){
    m = M
  }else{
    if(g + m >= G){
      m -= G - g
      g = G
    }else{
      g += m
      m = 0
    }
  }
}

console.log(g + " " + m)
//Number.MIN_VALUE
//Number.MAX_VALUE
