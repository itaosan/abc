import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, K] = readLine().split(" ").map(Number);

// グラフの隣接リストを作成します
const edge: Set<number>[] = Array.from({ length: N }, () => new Set<number>());

// 辺の情報を隣接リストに格納します
for (let i = 1; i < N; i++) {
    let [a, b] = readLine().split(' ').map(Number);
    a -= 1;
    b -= 1;
    edge[a].add(b);
    edge[b].add(a);
}

console.error('edge',edge);
// 削除を考慮するノード集合Vを作成します
const V = new Set(readLine().split(' ').map(x => Number(x) - 1));

// 各ノードの次数（接続数）を計算します
const deg: number[] = edge.map(s => s.size);

// 次数が1のノード（葉ノード）をキューに入れます
const q: number[] = [];
for (let i = 0; i < N; i++) {
    if (deg[i] === 1) q.push(i);
}
console.error('q',q);

let ans = N;

// 葉ノードを削除していきます
while (q.length > 0) {
    const v = q.pop()!;
    if (V.has(v)) continue;

    const vv = Array.from(edge[v])[0];
    edge[vv].delete(v);
    ans -= 1;

    if (edge[vv].size === 1) q.push(vv);
}

console.log(ans);
