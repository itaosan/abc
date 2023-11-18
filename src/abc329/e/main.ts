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

//const N = parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const S = readLine();
const T = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

function canTransform(N: number, M: number, S: string, T: string): string {
  for (let i = 0; i <= N - M; i++) {
      let isMatch = true;
      for (let j = 0; j < M; j++) {
          if (S[i + j] !== T[j]) {
              isMatch = false;
              break;
          }
      }
      if (isMatch) {
          // Sの部分文字列がTと一致した場合、残りの部分もチェックする
          const remaining = S.substring(0, i) + T + S.substring(i + M);
          if (remaining === S) {
              return "Yes";
          }
      }
  }
  return "No";
}

// 入力例
console.log(canTransform(N, M, S, T)); // 出力例1: Yes
