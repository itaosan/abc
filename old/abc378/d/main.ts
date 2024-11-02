import * as fs from "node:fs";

// 移動する方向（上、右、下、左）
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [H, W, K] = readLine().split(" ").map(Number);

const map = Array.from({ length: H }, () => readLine().split(""));

let totalPaths = 0;

for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        if (map[i][j] === '.') {
            const visited = Array.from({ length: H }, () => Array(W).fill(false));
            visited[i][j] = true;
            totalPaths += dfs(i, j, K, visited);
        }
    }
}

console.log(totalPaths);

function dfs(x: number, y: number, stepsLeft: number, visited: boolean[][]): number {
    // 移動回数が0になったらOK
    if (stepsLeft === 0) {
        return 1;
    }

    let count = 0;
    // 4方向に対して探索
    for (let dir = 0; dir < 4; dir++) {
        const nx = x + dx[dir];
        const ny = y + dy[dir];

        // マップ内かつ空きマスで未訪問の場合
        if (nx >= 0 && nx < H && ny >= 0 && ny < W && map[nx][ny] === '.' && !visited[nx][ny]) {
            visited[nx][ny] = true; // 訪問済み
            count += dfs(nx, ny, stepsLeft - 1, visited);
            visited[nx][ny] = false; // 未探索に戻す
        }
    }

    return count;
}
