import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [N, Q] = readLine().split(" ").map(Number);

// 左手と右手の現在の位置を初期化
let leftPos = 1;
let rightPos = 2;
let totalMoves = 0;

// 各指示に対して処理を行う
for (let i = 0; i < Q; i++) {
  const [ H, Temp ] = readLine().split(" ").map(String);
  const T = Number(Temp);

  // 動かす手ともういっこのて
  let from = 0
  let otherHands = 0;
  if (H === "L") {
    from = leftPos;
    otherHands = rightPos;
  } else {
    from = rightPos;
    otherHands = leftPos;
  }

  if (from === T) {
    // 既に目的地にいる場合、操作回数は0
    // 手の位置は変更しない
  } else {
    // 時計回りと反時計回りの距離を計算
    const TokeiKyori = (T - from + N) % N;
    const HanTokeiKyori = (from - T + N) % N;

    // 時計回りの経路が他方の手を通らないか確認
    let canUseCW = true;
    if (TokeiKyori > 0) {
      const D_SO_CW = (otherHands - from + N) % N;
      const D_OT_CW = (T - otherHands + N) % N;
      if (D_SO_CW > 0 && D_SO_CW + D_OT_CW === TokeiKyori) {
        canUseCW = false; 
      }
    }

    // 反時計回りの経路が他方の手を通らないか確認
    let canUseCCW = true;
    if (HanTokeiKyori > 0) {
      const D_SO_CCW = (from - otherHands + N) % N;
      const D_OT_CCW = (otherHands - T + N) % N;
      if (D_SO_CCW > 0 && D_SO_CCW + D_OT_CCW === HanTokeiKyori) {
        canUseCCW = false; 
      }
    }

    let minDistance = Number.MAX_SAFE_INTEGER;
    if (canUseCW) minDistance = Math.min(minDistance, TokeiKyori);
    if (canUseCCW) minDistance = Math.min(minDistance, HanTokeiKyori);

    totalMoves += minDistance;
    // 手の位置を更新
    if (H === "L") {
      leftPos = T;
    } else {
      rightPos = T;
    }
  }
}

console.log(totalMoves);
