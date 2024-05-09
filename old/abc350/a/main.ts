import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine()

//ABC001からABC349までの文字列の配列を作成
const ABC : string[] =[] 
for (let i = 1; i <= 349; i++) {
  //数字を3桁に変換
  const str = i.toString().padStart(3, "0")
  if (i !== 316) {
    ABC.push(`ABC${str}`)
  }
}

if (ABC.includes(S)) {
  console.log("Yes")
}else{
  console.log("No")
}
