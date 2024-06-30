import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [S, T] = readLine().split(" ").map(String);
//const S = readLine()


let ans = false;
for (let w = 1; w < S.length; w++) {
  const Word :string[] = Array(101).fill("");
  //Sをw文字ごとに区切った文字列を作る
  for (let i = 0; i < S.length; i++) {
    const idx = i%w
    Word[idx] += S[i];
  }
  //Tと一致するかどうかを判定
  for (let i = 0; i < 100; i++) {
    if (Word[i] === T) {
      ans = true;
      console.error(Word)
      break;
    }
  }
}

console.log(ans ? "Yes" : "No");
