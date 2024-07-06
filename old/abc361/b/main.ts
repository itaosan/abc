import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [a, b, c, d, e, f] = readLine().split(" ").map(Number);
const [g, h, i, j, k, l] = readLine().split(" ").map(Number);
//const S = readLine()

type Vector3D = [number, number, number];

type Cube = {
  min: Vector3D;
  max: Vector3D;
};

function doCubesOverlap(cube1: Cube, cube2: Cube): boolean {
  // 各軸について重なりをチェック（境界が一致している場合も重なりと見なさない）
  for (let i = 0; i < 3; i++) {
    if (cube1.max[i] <= cube2.min[i] || cube1.min[i] >= cube2.max[i]) {
      return false;
    }
  }
  return true;
}

function createCube(point1: Vector3D, point2: Vector3D): Cube {
  return {
    min: [
      Math.min(point1[0], point2[0]),
      Math.min(point1[1], point2[1]),
      Math.min(point1[2], point2[2])
    ],
    max: [
      Math.max(point1[0], point2[0]),
      Math.max(point1[1], point2[1]),
      Math.max(point1[2], point2[2])
    ]
  };
}

const pointA: Vector3D = [a, b, c];
const pointB: Vector3D = [d, e, f];
const pointG: Vector3D = [g, h, i];
const pointH: Vector3D = [j, k, l];

const cube1 = createCube(pointA, pointB);
const cube2 = createCube(pointG, pointH);

const overlap = doCubesOverlap(cube1, cube2);

console.log(overlap ? "Yes" : "No"); // 結果を表示


