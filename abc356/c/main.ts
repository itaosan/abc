import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//N本の鍵、M回のテスト、K本以上正解で扉があく
const [N, M, K] = readLine().split(" ").map(Number);

const patterns = generatePatterns(N, K);
//あり得るパターンかどうか判定する配列、サイズはpatternの数
const isValid = Array(patterns.length).fill(true);

for (let i = 0; i < M; i++) {
  const C = readLine().split(" ").map(String);
  //Cの１～N-1がチェックするパターンの位置
  const chk = C.slice(1, C.length - 1).map(Number);
  //チェックする文字
  let chkStr = C[C.length - 1];
  if (chkStr === "o") {
    chkStr = "x";
  }else{
    chkStr = "o";
  }
  console.error(`chk: ${chk} chkStr: ${chkStr}`);
  //あり得ないパターンとしてマーク
  for (let j = 0; j < patterns.length; j++) {
    if (!isValid[j]) {
      continue;
    }
    const pattern = patterns[j];
    let isInvalid = true;
    for (const pos of chk) {
      if (pattern[pos - 1] !== chkStr) {
        isInvalid = false;
        break;
      }
    }
    if (isInvalid) {
      isValid[j] = false;
    }
  }
}

//あり得るパターンの数を出力
console.log(isValid.filter((v) => v).length);

/**
 * M個からN個選ぶ全パターンを生成する関数
 * @param M - 総数
 * @param N - 選ぶ数
 * @returns 全パターンの配列
 */
function generatePatterns(M: number, N: number): string[] {
  const results: string[] = [];

  // 組み合わせを生成するヘルパー関数
  function combine(start: number, chosen: number[], current: number) {
    if (current === N) {
      // パターンを作成
      const pattern = Array(M).fill("x");
      for (const index of chosen) {
        pattern[index] = "o";
      }
      results.push(pattern.join(""));
      return;
    }

    for (let i = start; i < M; i++) {
      chosen.push(i);
      combine(i + 1, chosen, current + 1);
      chosen.pop();
    }
  }

  combine(0, [], 0);
  return results;
}
