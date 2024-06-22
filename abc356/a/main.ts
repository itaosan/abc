import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, L,R] = readLine().split(" ").map(Number);
//const S = readLine()

//1からNまでの配列を作成
const a = Array.from({ length: N }, (_, i) => i + 1);
//LからRまでを逆にする
const b = []
let cnt =0
for(let i = 0; i < N; i++){
  if (i >= L-1 && i <= R-1) {
    b.push(a[R-1-cnt])
    cnt++
  }else{
    b.push(a[i])
  }
}

console.log(b.join(" "))