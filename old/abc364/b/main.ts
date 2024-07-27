import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [H, W] = readLine().split(" ").map(Number);
let [Sy,Sx] = readLine().split(" ").map(Number);
Sy -= 1;
Sx -= 1;
//const S = readLine()

const C =[]
for (let i = 0; i < H; i++) {
  C.push(readLine().split(""));
}
const X = readLine().split("")

//Xの要素を1つづつループ
for (let i = 0; i < X.length; i++) {
  // console.error(`${X[i]} ${Sy+1} ${Sx+1}`);
  //移動する方向
  let dir = 0;
  if(X[i] === "L"){
    dir = 3;
  }else if(X[i] === "R"){
    dir = 1;
  }else if(X[i] === "U"){
    dir = 0;
  }else if(X[i] === "D"){
    dir = 2;
  }

  //仮の移動先
  const nx = Sx + dx[dir];
  const ny = Sy + dy[dir];

  //移動先が壁かどうか
  // console.error(`nx:${nx} ny:${ny} `);
  if(nx < 0 || nx >= W || ny < 0 || ny >= H || C[ny][nx] === "#"){
    // console.error(`continue`);
    continue;
  }
  Sx = nx;
  Sy = ny;
}
console.log(`${Sy+1} ${Sx+1}`);