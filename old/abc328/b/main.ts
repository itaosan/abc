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

const N = parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const D = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];

let ans = 0;

for (let i = 0; i < D.length; i++) {
  const day = D[i].toString();
  const month = (i+1).toString();

  for (let j = 1; j <= D[i]; j++) {
    const day = j.toString();
    const chk = month[0];
    let ok = true;
    for (let x = 0; x < month.length; x++) {
      if (chk !== month[x]) {
        ok = false;
      }
    }
    if (ok === false) continue;
    for (let y = 0; y < day.length; y++) {
      if (chk !== day[y]) {
        ok = false;
      }
    }
    if (ok) ans++;
  }
}
console.log(ans)

//Number.MIN_VALUE
//Number.MAX_VALUE
