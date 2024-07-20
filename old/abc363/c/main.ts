import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, K] = readLine().split(" ").map(Number);
const S = readLine()

function countNonPalindromePermutations(S: string, K: number): number {
  // 部分文字列が回文かどうかをチェックする関数
  function isPalindrome(s: string, start: number, end: number): boolean {
      while (start < end) {
          if (s[start] !== s[end]) return false;
          start++;
          end--;
      }
      return true;
  }

  // 文字の並び替えを生成するバックトラッキング関数
  function backtrack(path: string[], used: boolean[], depth: number): void {
      if (depth === N) {
          count++;
          return;
      }
      for (let i = 0; i < N; i++) {
          if (used[i] || (i > 0 && S[i] === S[i - 1] && !used[i - 1])) continue;
          if (depth >= K - 1 && isPalindrome(path.join('') + S[i], depth - K + 1, depth)) continue;
          path.push(S[i]);
          used[i] = true;
          backtrack(path, used, depth + 1);
          path.pop();
          used[i] = false;
      }
  }

  const N = S.length;
  let count = 0;
  const used = Array(N).fill(false);
  const path: string[] = [];

  S = S.split('').sort().join('');  // 辞書順にソート
  backtrack(path, used, 0);

  return count;
}

// 使用例
console.log(countNonPalindromePermutations(S, K)); // 出力例: 回文を含まない並び替えの個数
