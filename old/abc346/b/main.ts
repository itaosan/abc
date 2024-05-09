import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [W, B] = readLine().split(" ").map(Number);

// 文字列 t の中で特定の条件を満たす部分が存在するかどうかを確認する関数
function checkSequence(w: number, b: number): string {
  const t: string = "wbwbwwbwbwbw";

  for (let i = 0; i < t.length; i++) {
    let nw = 0; // wの個数
    let nb = 0; // bの個数

    for (let j = 0; j < w + b; j++) {
      if (t[(i + j) % t.length] === 'w') {
        nw += 1;
      } else {
        nb += 1;
      }
    }

    // 条件を満たす場合は "Yes" を返す
    if (w === nw && b === nb) {
      return "Yes";
    }
  }

  // 条件を満たさない場合は "No" を返す
  return "No";
}

// 関数をテストするための例
console.log(checkSequence(W, B)); // w と b の値を適宜変更してください。





