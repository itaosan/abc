import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const [n, q] = readLine().split(" ").map(Number);
const a = readLine().split(" ").map(Number);
a.sort((a, b) => a - b);

const lowerBound = (arr: number[], x: number) => {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < x) low = mid + 1;
        else high = mid;
    }
    return low;
};

const upperBound = (arr: number[], x: number) => {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] <= x) low = mid + 1;
        else high = mid;
    }
    return low;
};

const f = (x: number, b: number, k: number) => {
    const lb = lowerBound(a, b - x);
    const ub = upperBound(a, b + x);
    return (ub - lb) >= k;
};

for (let i = 0; i < q; i++) {
    const [b, k] = readLine().split(" ").map(Number);
    let ng = -1;
    let ok = 200000010;
    while (ok - ng > 1) {
        const mid = Math.floor((ok + ng) / 2);
        if (f(mid, b, k)) ok = mid;
        else ng = mid;
    }
    console.log(ok);
}
