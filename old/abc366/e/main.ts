import * as fs from "node:fs";
const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, D] = readLine().split(" ").map(Number);
type Point = { x: number; y: number };

function compressCoordinates(points: Point[]): [number[], number[], Map<number, number>, Map<number, number>] {
  const xs = Array.from(new Set(points.map((p) => p.x))).sort((a, b) => a - b);
  const ys = Array.from(new Set(points.map((p) => p.y))).sort((a, b) => a - b);
  const mapX = new Map<number, number>();
  const mapY = new Map<number, number>();

  xs.forEach((v, i) => mapX.set(v, i));
  ys.forEach((v, i) => mapY.set(v, i));

  return [xs, ys, mapX, mapY];
}

function countPointsWithinDistance(points: Point[], D: number): number {
  const [xs, ys, mapX, mapY] = compressCoordinates(points);
  const maxX = xs.length;
  const maxY = ys.length;

  const dp: number[][] = Array.from({ length: maxX + 1 }, () => Array(maxY + 1).fill(0));

  // 2次元累積和を計算
  for (let i = 1; i <= maxX; i++) {
    for (let j = 1; j <= maxY; j++) {
      dp[i][j] += dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
    }
  }

  let count = 0;

  // 全探索範囲を修正
  for (let i = 0; i <= maxX; i++) {
    for (let j = 0; j <= maxY; j++) {
      const cx = xs[i];
      const cy = ys[j];

      let totalDistance = 0;
      for (const point of points) {
        totalDistance += Math.abs(cx - point.x) + Math.abs(cy - point.y);
      }

      if (totalDistance <= D) {
        count++;
      }
    }
  }

  return count;
}

// 座標読み込み
const points: Point[] = [];
for (let i = 0; i < N; i++) {
  const [x, y] = readLine().split(" ").map(Number);
  points.push({ x, y });
}

console.log(countPointsWithinDistance(points, D));
