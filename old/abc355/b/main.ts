import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
const B = readLine().split(" ").map(Number);
//const S = readLine()

//ABの配列をつなげてソート
const AB = A.concat(B).sort((a, b) => a - b);

let aru = false
let renzoku = false
//ABの配列を順番に見ていく
for (let i = 0; i < N + M; i++) {
    const chk = AB[i];
    //Aにあるか
    console.error(A.indexOf(chk))
    if (A.indexOf(chk) >= 0) {
      //連続であるか
      if (renzoku){
        aru = true
        break
      }

      renzoku = true
    }else{
      renzoku = false
    }

}

console.log(aru ? "Yes" : "No")
