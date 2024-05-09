import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  //const N = parseInt(input[0]);
  //const [N, M] = input[0].split(" ").map(Number);
  const S = input[0]

  function isPalindrome(s: string): boolean {
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(s: string): number {
    let maxLength = 1;
    for (let start = 0; start < s.length; start++) {
        for (let end = s.length; end > start + maxLength - 1; end--) {
            let subString = s.substring(start, end);
            if (isPalindrome(subString) && subString.length > maxLength) {
                maxLength = subString.length;
            }
        }
    }
    return maxLength;
}

// 入力例
// let input1 = "TOYOTA";
// let input2 = "ABCDEFG";
// let input3 = "AAAAAAAAAA";

// 出力
console.log(longestPalindrome(S)); // 5

});
