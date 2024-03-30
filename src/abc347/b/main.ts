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

//Sの部分文字列を全て列挙
const ans = new Set<string>();
for (let i = 0; i < S.length; i++) {
  for (let j = i + 1; j <= S.length; j++) {
    ans.add(S.slice(i, j));
  }
}

console.log(ans.size);