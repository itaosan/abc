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
const [M, D] = readLine().split(" ").map(Number);
let [y, m,d] = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

if (D !== d){
  d++
}else if(M !== m){
  m++
  d = 1
}else{
  y++
  m = 1
  d = 1
}
console.log(y + " " + m + " " + d)

//Number.MIN_VALUE
//Number.MAX_VALUE
