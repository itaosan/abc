import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

let ok = true;
let sweetcnt = 0;
for (let i = 0; i < N; i++) {
  const S = readLine()
  if(S === "sweet"){
    sweetcnt++;
    if(sweetcnt >= 2 && i < N-1){
      ok = false;
    }
  }else{
    sweetcnt = 0;
  
  }
}

console.log(ok ? "Yes" : "No");