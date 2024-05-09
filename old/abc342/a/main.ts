import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const S = readLine()

let ans = 0
for (let i = 0; i < S.length; i++) {
  if (S[i] !== S[i+1]) {
    if(i===0 && S[i+1] === S[i+2]){
      ans =1
    }else{
      ans = i+2
    }
    break
  }
}
console.log(ans)


//const h = [0, ...readLine().split(" ").map(Number)];

//Number.MIN_VALUE
//Number.MAX_VALUE
