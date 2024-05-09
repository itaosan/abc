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

let [n, q] = readLine().split(" ").map(Number);
const a: number[] = readLine().split(" ").map(Number);

const bk: number[] = new Array(n + 1).fill(0);
a.forEach((value) => {
  if (value <= n) {
    bk[value]++;
  }
});

const st: Set<number> = new Set();
for (let i = 0; i <= n; i++) {
  if (bk[i] === 0) {
    st.add(i);
  }
}

for (let i = 0; i < q; i++) {
  let [index, x] = readLine().split(" ").map(Number);
  index--;

  if (a[index] <= n) {
    bk[a[index]]--;
    if (bk[a[index]] === 0) {
      st.add(a[index]);
    }
  }

  a[index] = x;

  if (a[index] <= n) {
    bk[a[index]]++;
    if (bk[a[index]] === 1) {
      st.delete(a[index]);
    }
  }

  console.log(getMinValue(st));
}

function getMinValue(set: Set<number>): number {
  let minValue = Number.MAX_SAFE_INTEGER;
  set.forEach((value) => {
    if (value < minValue) {
      minValue = value;
    }
  });
  return minValue;
}
