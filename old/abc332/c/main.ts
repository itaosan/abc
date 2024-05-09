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
const S = readLine();
let L = 0;

let l_cnt = 0;
let m_cnt = M;
for (let i = 0; i < N; i++) {
  const day = S[i];
  if (day === "0") {
    l_cnt = L;
    m_cnt = M;
  } else if (day === "1") {
    if (m_cnt > 0) {
      m_cnt--;
    } else if (l_cnt > 0) {
      l_cnt--;
    } else {
      L++;
    }
  } else if (day === "2") {
    if (l_cnt > 0) {
      l_cnt--;
    } else {
      L++;
    }
  }
}
console.log(L);
