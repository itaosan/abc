import * as fs from "node:fs";

//移動する方向
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [N, M, Sx, Sy] = readLine().split(" ").map(Number);
//const S = readLine()
//N点に家がある
//M回移動

const house = [];
const Santa = [Sx, Sy];
for (let i = 0; i < N; i++) {
  const [x, y] = readLine().split(" ").map(Number);
  house.push([x, y]);
}

//X軸の移動
const Xmove = new Map<number, [min: number, max: number]>();
//Y軸の移動
const Ymove = new Map<number, [min: number, max: number]>();

console.error(`firstSanta: ${Santa}`);
for (let i = 0; i < M; i++) {
  const [move, val] = readLine().split(" ").map(String);
  const moveVal = Number(val);
  let NextX = Santa[0];
  let NextY = Santa[1];
  if (move === "L") {
    //X軸の移動
    NextX = Santa[0] - moveVal;
    if (Xmove.has(Santa[1])) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const ima = Xmove.get(Santa[1])!;
      Xmove.set(Santa[1], [Math.min(ima[0], NextX), ima[1]]);
    } else {
      Xmove.set(Santa[1], [NextX, Santa[0]]);
    }
  }
  if (move === "U") {
    //Y軸の移動
    NextY = Santa[1] + moveVal;
    if (Ymove.has(Santa[0])) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const ima = Ymove.get(Santa[0])!;
      Ymove.set(Santa[0], [ima[0], Math.max(ima[1], NextY)]);
    } else {
      Ymove.set(Santa[0], [Santa[1], NextY]);
    }
  }
  if (move === "R") {
    //X軸の移動
    NextX = Santa[0] + moveVal;
    if (Xmove.has(Santa[1])) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const ima = Xmove.get(Santa[1])!;
      Xmove.set(Santa[1], [ima[0], Math.max(ima[1], NextX)]);
    } else {
      Xmove.set(Santa[1], [Santa[0], NextX]);
    }
  }
  if (move === "D") {
    //Y軸の移動
    NextY = Santa[1] - moveVal;
    if (Ymove.has(Santa[0])) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      const ima = Ymove.get(Santa[0])!;
      Ymove.set(Santa[0], [Math.min(ima[0], NextY), ima[1]]);
    } else {
      Ymove.set(Santa[0], [NextY, Santa[1]]);
    }
  }
  Santa[0] = NextX;
  Santa[1] = NextY;
  //console.error(`Santa: ${Santa}`);
}

const Xfind = new Set<number>();
const Yfind = new Set<number>();
//家を通っているかどうかカウントする
let ans = 0;
for (let i = 0; i < N; i++) {
  const [x, y] = house[i];
  if (Xmove.has(y)) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const [min, max] = Xmove.get(y)!;
    if (min <= x && x <= max && Xfind.has(y) === false) {
      //console.error(`findXmove x: ${x} y: ${y}`);
      ans++;
      Xfind.add(y);
      Yfind.add(x);
      continue
    }
  }
  if (Ymove.has(x)) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const [min, max] = Ymove.get(x)!;
    if (min <= y && y <= max && Yfind.has(x) === false) {
      //console.error(`findYmove x: ${x} y: ${y}`);
      ans++;
      Yfind.add(x);
    }
  }
}
console.log(`${Santa[0]} ${Santa[1]} ${ans}`);
