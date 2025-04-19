import * as fs from "node:fs";

//移動する方向
//const dx = [0, 1, 0, -1];
//const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    if (this.front >= this.data.length) return undefined;
    const item = this.data[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.front >= this.data.length;
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, X] = readLine().split(" ").map(Number);
//const S = readLine()

const S = [];
const C = [];
const P = [];
for (let i = 0; i < N; i++) {
  const [s,c,p] = readLine().split(" ").map(Number);
  S.push(s);
  C.push(c);
  //パーセント
  P.push(p / 100);  
}

//bitが 1 なら正解
const DP: Float64Array[] = new Array(1 << N);

// 全問題正解済みの状態(mask == (1<<N)-1)では残金にかかわらず期待得点 0
DP[(1 << N) - 1] = new Float64Array(X + 1);  // 自動で 0 で初期化

X < 10 ? console.error(DP) : null;
// --- DP 本体 (マスクを大きい順に、残金を小さい順に埋める) ---
for (let mask = (1 << N) - 2; mask >= 0; mask--) {
  const dp = new Float64Array(X + 1);
  for (let b = 0; b <= X; b++) {
    let best = 0;
    // いま解いていない問題 i に対して、提出するかを検討
    for (let i = 0; i < N; i++) {
      if (((mask >> i) & 1) === 0) {
        const cost = C[i];
        if (b < cost) continue;  // お金足りずスキップ

        const p = P[i];
        const nextMask = mask | (1 << i);

        // 1回提出した時の期待得点
        // 正解時: Si + DP[nextMask][b-cost]
        // 不正解時: DP[mask][b-cost]
        const exp = p * (S[i] + DP[nextMask][b - cost]) 
                  + (1 - p) * dp[b - cost];

        if (exp > best) best = exp;
        X < 10 ? console.error(DP) : null;

      }
    }
    dp[b] = best;
  }
  DP[mask] = dp;
}

// --- 答えの出力 ---
// 初期状態: mask = 0 (未解答), 残金 = X
console.log(DP[0][X].toFixed(10));
