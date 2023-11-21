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

const check = (pos: number, s: string[], t: string[], tn: number): boolean => {
  for (let i = 0; i < tn; i++) {
    if (s[pos + i] !== "." && s[pos + i] !== t[i]) {
      return false;
    }
  }

  let cnt = 0;
  for (let i = 0; i < tn; i++) {
    if (s[pos + i] === ".") {
      cnt++;
    }
    s[pos + i] = ".";
  }
  return cnt !== tn;
};

const [sn, tn] = readLine().split(" ").map(Number);
const s: string[] = readLine().split("");
const t: string[] = readLine().split("");

for (let i = 0; i <= sn - tn; i++) {
  if (check(i, s, t, tn)) {
    i = Math.max(-1, i - tn);
  }
}

let flag = true;
for (let i = 0; i < sn; i++) {
  if (s[i] !== ".") {
    console.log("No");
    flag = false;
    break;
  }
}
if (flag) console.log("Yes");
