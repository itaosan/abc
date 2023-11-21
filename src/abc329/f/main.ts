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

// 入力の1行目からNとQを取得
const [N, Q] = readLine().split(" ").map(Number);

// 入力の2行目からCを取得
const C = readLine().split(" ").map(Number);

// 集合を格納する配列の初期化
const se: Set<number>[] = C.map((c) => new Set([c]));

// クエリを処理
for (let i = 2; i < 2 + Q; i++) {
  //console.log(se);
  const [a, b] = readLine()
    .split(" ")
    .map((x) => Number(x) - 1);

  if (se[a].size < se[b].size) {
    for(const val of se[a]){
      se[b].add(val)
    }
    se[a] = new Set();
  } else {
    for(const val of se[b]){
      se[a].add(val)
    }
    se[b] = se[a];
    se[a] = new Set();
  }

  console.log(se[b].size);
}
