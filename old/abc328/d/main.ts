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
const S = readLine();
// function removeABC(s: string): string {
//   let ans = "";

//   for (let c of s) {
//     ans += c;
//     if (ans.length >= 3 && ans.slice(ans.length - 3) === "ABC") {
//       ans = ans.slice(0, -3);
//     }
//   }

//   return ans;
// }

function removeABC(s: string): string {
  const buffer: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
    buffer.push(s[i]);
    if (buffer.length >= 3) {
      const len = buffer.length;
      if (buffer[len - 3] === 'A' && buffer[len - 2] === 'B' && buffer[len - 1] === 'C') {
        buffer.length -= 3; // 末尾の3文字を取り除く
      }
    }
  }

  return buffer.join('');
}

// 使用例
console.log(removeABC(S));
