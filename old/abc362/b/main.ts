import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [Ax, Ay] = readLine().split(" ").map(Number);
const [Bx, By] = readLine().split(" ").map(Number);
const [Cx, Cy] = readLine().split(" ").map(Number);
//const S = readLine()

// 2点間の距離の二乗を計算する関数
function distanceSquared(x1: number, y1: number, x2: number, y2: number): number {
  return (x2 - x1) ** 2 + (y2 - y1) ** 2;
}

// 各辺の長さの二乗を計算
const AB2 = distanceSquared(Ax, Ay, Bx, By);
const BC2 = distanceSquared(Bx, By, Cx, Cy);
const CA2 = distanceSquared(Cx, Cy, Ax, Ay);

// 直角三角形かどうかを判定
function isRightTriangle(a2: number, b2: number, c2: number): boolean {
  return (a2 + b2 === c2) || (a2 + c2 === b2) || (b2 + c2 === a2);
}

// 結果を判定
const result = isRightTriangle(AB2, BC2, CA2);

console.log(result ? "Yes" : "No");


