import * as fs from "fs";

const DEBUG = true;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());

//N×Nのマス目を作成
const grid = Array.from({ length: N }, () => readLine());

//プレイヤー１の位置
let player1 = { row: -1, col: -1 };
//プレイヤー２の位置
let player2 = { row: -1, col: -1 };

//プレイヤーの位置を探す
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (grid[i][j] === "P") {
      if (player1.row === -1 && player1.col === -1) {
        player1.row = i;
        player1.col = j;
      } else {
        player2.row = i;
        player2.col = j;
      }
    }
  }
}

//プレイヤー１とプレイヤー２を同じ位置に移動させる
//同じ位置に移動できない場合は-1を出力
//BFSを使って最短距離を求める

//移動するためのキュー
//キューに入る要素はプレイヤー１とプレイヤー２の位置と移動回数なので、型を定義する
type Player = { row: number; col: number };
type QueueElement = { player1: Player; player2: Player; count: number };
//キューを作成
const queue: QueueElement[] = [];
//訪問済みのマス目(プレイヤー１)
const visited = Array.from({ length: N }, () => Array(N).fill(false));
//訪問済みのマス目(プレイヤー２)
const visited2 = Array.from({ length: N }, () => Array(N).fill(false));
//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
//プレイヤー１とプレイヤー２の位置をキューに追加
queue.push({ player1, player2, count: 0 });
//プレイヤー１とプレイヤー２が同じ位置になるまで移動する
//見つかったかどうかのフラグ
let found = false;
while (queue.length > 0) {
  //queueはundefinedにならないので、!をつける
  const { player1, player2, count } = queue.shift()!;
  if (player1.row === player2.row && player1.col === player2.col) {
    console.log(count);
    found = true;
    break;
  }
  for (let i = 0; i < 4; i++) {
    const nextPlayer1 = { row: player1.row + dy[i], col: player1.col + dx[i] };
    const nextPlayer2 = { row: player2.row + dy[i], col: player2.col + dx[i] };
    //両方のプレイヤーが移動できない場合はスキップ
    if (
      (nextPlayer1.row < 0 ||
        nextPlayer1.row >= N ||
        nextPlayer1.col < 0 ||
        nextPlayer1.col >= N ||
        grid[nextPlayer1.row][nextPlayer1.col] === "#") &&
      (nextPlayer2.row < 0 ||
        nextPlayer2.row >= N ||
        nextPlayer2.col < 0 ||
        nextPlayer2.col >= N ||
        grid[nextPlayer2.row][nextPlayer2.col] === "#")
    ) {
      continue;
    } else if (
      nextPlayer1.row < 0 ||
      nextPlayer1.row >= N ||
      nextPlayer1.col < 0 ||
      nextPlayer1.col >= N ||
      grid[nextPlayer1.row][nextPlayer1.col] === "#"
    ) {
      nextPlayer1.row = player1.row;
      nextPlayer1.col = player1.col;
    } else if (
      nextPlayer2.row < 0 ||
      nextPlayer2.row >= N ||
      nextPlayer2.col < 0 ||
      nextPlayer2.col >= N ||
      grid[nextPlayer2.row][nextPlayer2.col] === "#"
    ) {
      nextPlayer2.row = player2.row;
      nextPlayer2.col = player2.col;
    }

    //移動済みのマス目はスキップ
    if (visited[nextPlayer1.row][nextPlayer1.col] && visited2[nextPlayer2.row][nextPlayer2.col]) {
      continue;
    }
    //移動済みのマス目に追加
    visited[nextPlayer1.row][nextPlayer1.col] = true;
    visited2[nextPlayer2.row][nextPlayer2.col] = true;
    //プレイヤー１とプレイヤー２の位置を出力
    debug(`count: ${count}-${i} player1: ${nextPlayer1.row} ${nextPlayer1.col} player2: ${nextPlayer2.row} ${nextPlayer2.col}`);
    queue.push({ player1: nextPlayer1, player2: nextPlayer2, count: count + 1 });
  }
}
//同じ位置に移動できない場合は-1を出力
if (!found) console.log(-1);
