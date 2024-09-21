import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

let M = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
//const S = readLine()

let n = 0
const ans = []
//Mを3の対数で表現する
while(M > 0){
  if(M<3){
    ans.push(0)
    M--
    n++
  }else{
    const log = Math.floor( Math.log(M) / Math.log(3))
    if (log > 10){
      ans.push(10)
      M -= 3 **10
      n++
    }else{
      ans.push(log)
      M -= 3 ** log
      n++
    }
  }
}
console.log(n)
console.log(ans.join(" "))