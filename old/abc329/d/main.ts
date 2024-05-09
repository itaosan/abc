import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

//const N = parseInt(readLine());
const [N, M] = readLine().split(" ").map(Number);
const votes = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

// 候補者ごとの得票数を追跡する配列
const voteCounts = new Array(N + 1).fill(0);

// 現在の最多得票数とその候補者の番号
let maxVotes = 0;
let currentWinner = 1;

for (let i = 0; i < M; i++) {
  const candidate = votes[i];
  voteCounts[candidate]++;

  // 新しい最多得票数の候補者をチェック
  if (voteCounts[candidate] > maxVotes || (voteCounts[candidate] === maxVotes && candidate < currentWinner)) {
    maxVotes = voteCounts[candidate];
    currentWinner = candidate;
  }

  console.log(currentWinner);
}

