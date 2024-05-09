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
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

const arr =new Map()
for (let i = 0; i < N; i++) {
  arr.set(A[i],i+1)
  
}

const ans =[]
let val :number= arr.get(-1)
ans.push(val)
for (let i = 1; i < N; i++) {
  val= arr.get(val)
  ans.push(val)
}
console.log(ans.join(" "))  

//Number.MIN_VALUE
//Number.MAX_VALUE
