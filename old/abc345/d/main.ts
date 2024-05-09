import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, H, W] = readLine().split(" ").map(Number);
type Card = [number, number]; // カードの型を定義（[縦, 横]）

// タイルを選ぶ関数
function getTiles(choice: number, N: number, T: [number, number][]): [number, number][] {
  const tiles: [number, number][] = [];
  for (let k = 0; k < N; k++) {
    if (((choice >> k) & 1) === 1) {
      tiles.push(T[k]);
    }
  }
  return tiles;
}

// タイルを順番に配置して、マス目を埋められるか判定する関数
function completed(perm: [number, number][], spin: number, H: number, W: number): boolean {
  const used: boolean[][] = Array.from(Array(H), () => Array(W).fill(false));
  let k = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (used[i][j]) continue;
      if (k >= perm.length) return false;
      let [h, w] = perm[k];
      if (((spin >> k) & 1) === 1) {
        [h, w] = [w, h];
      }
      k++;
      if (!(i + h <= H && j + w <= W)) return false;
      for (let u = i; u < i + h; u++) {
        for (let v = j; v < j + w; v++) {
          if (used[u][v]) return false;
          used[u][v] = true;
        }
      }
    }
  }
  return used.every((row) => row.every((val) => val));
}

// エントリーポイント（この関数は例示のため、実際には入力値に応じた適切な呼び出し方を考える必要があります）
function solve(N: number, H: number, W: number, T: [number, number][]): void {
  for (let choice = 1; choice < 1 << N; choice++) {
    const tiles = getTiles(choice, N, T);
    const M = tiles.length;
    const permutations = getAllPermutations(tiles);
    for (const perm of permutations) {
      for (let spin = 0; spin < 1 << M; spin++) {
        if (completed(perm, spin, H, W)) {
          console.log("Yes");
          return;
        }
      }
    }
  }
  console.log("No");
}

// 全順列を取得する関数
function getAllPermutations<T>(array: T[]): T[][] {
  if (array.length === 0) return [[]];
  return array.reduce<T[][]>((acc, item, i) => {
    const rest = getAllPermutations(array.slice(0, i).concat(array.slice(i + 1)));
    return acc.concat(rest.map((x) => [item].concat(x)));
  }, []);
}

solve(N, H, W, Array.from({ length: N }, () => readLine().split(" ").map(Number)) as [number, number][]);
