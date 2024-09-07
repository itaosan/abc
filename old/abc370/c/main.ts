import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine().split("").map(String);
const T = readLine().split("").map(String);
const X: string[] = [];
let cnt = 0;
while (true) {
  if (S.join("") === T.join("")) break;
  let find = false;
  for (let i = 0; i < S.length; i++) {
    if (S[i] !== T[i] && S[i] > T[i]) {
      S[i] = T[i];
      X.push(S.join(""));
      cnt++;
      find = true;
      break;
    }
  }
  if (find) continue;
  for (let i = S.length-1; i >= 0; i--) {
    if (S[i] !== T[i]) {
      S[i] = T[i];
      X.push(S.join(""));
      cnt++;
      break;
    }
  }
}
if (cnt === 0) {
  console.log(0);
} else {
  console.log(cnt);
  for (let i = 0; i < X.length; i++) {
    console.log(X[i]);
  }
}
