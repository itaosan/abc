import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, Q] = readLine().split(" ").map(Number);
const S = readLine().split("");

//Sの中に"ABC"がいくつあるか
let cnt = 0;
const ans = [];
for (let i = 0; i < N - 2; i++) {
  if (S[i] + S[i + 1] + S[i + 2] === "ABC") {
    cnt++;
  }
}

for (let i = 0; i < Q; i++) {
  const [xTmp, c] = readLine().split(" ").map(String);
  const x = Number.parseInt(xTmp);
  //変換前がABCだった場合
  const before = S[x - 1];
  if (before === "A") {
    if (S[x] + S[x + 1] === "BC") {
      cnt--;
    }
  } else if (before === "B") {
    if (S[x - 2] + S[x] === "AC") {
      cnt--;
    }
  } else if (before === "C"){
    if (S[x - 3] + S[x - 2] === "AB") {
      cnt--;
    }
  }
  //x-1番目の文字をcに変更
  S[x - 1] = c;
  if (c === "A") {
    //変換後がABCになる場合
    if (S[x] + S[x + 1] === "BC") {
      cnt++;
    }
  } else if (c === "B") {
    //変換後がABCになる場合
    if (S[x - 2] + S[x] === "AC") {
      cnt++;
    }
  } else if (c === "C"){
    //変換後がABCになる場合
    if (S[x - 3] + S[x - 2] === "AB") {
      cnt++;
    }
  }
  ans.push(cnt);
}

for (let i = 0; i < Q; i++) {
  console.log(ans[i]);
}
