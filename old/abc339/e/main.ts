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
const [N, D] = readLine().split(" ").map(Number);
const A = readLine().split(" ").map(Number);
//const h = [0, ...readLine().split(" ").map(Number)];


//Number.MIN_VALUE
//Number.MAX_VALUE
class SegmentTree {
  private tree: number[];
  private n: number;

  constructor(n: number) {
    this.n = n;
    this.tree = new Array(4 * n).fill(0);
  }

  private build(arr: number[], node: number, start: number, end: number): void {
    if (start === end) {
      this.tree[node] = arr[start];
    } else {
      let mid = Math.floor((start + end) / 2);
      this.build(arr, 2 * node, start, mid);
      this.build(arr, 2 * node + 1, mid + 1, end);
      this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1]);
    }
  }

  public init(arr: number[]): void {
    this.build(arr, 1, 0, this.n - 1);
  }

  private update(node: number, start: number, end: number, idx: number, val: number): void {
    if (start === end) {
      this.tree[node] = val;
    } else {
      let mid = Math.floor((start + end) / 2);
      if (start <= idx && idx <= mid) {
        this.update(2 * node, start, mid, idx, val);
      } else {
        this.update(2 * node + 1, mid + 1, end, idx, val);
      }
      this.tree[node] = Math.max(this.tree[2 * node], this.tree[2 * node + 1]);
    }
  }

  public change(idx: number, val: number): void {
    this.update(1, 0, this.n - 1, idx, val);
  }

  private query(node: number, start: number, end: number, l: number, r: number): number {
    if (r < start || end < l) {
      return 0;
    }
    if (l <= start && end <= r) {
      return this.tree[node];
    }
    let mid = Math.floor((start + end) / 2);
    let p1 = this.query(2 * node, start, mid, l, r);
    let p2 = this.query(2 * node + 1, mid + 1, end, l, r);
    return Math.max(p1, p2);
  }

  public rangeQuery(l: number, r: number): number {
    return this.query(1, 0, this.n - 1, l, r);
  }
}

function compressCoordinates(A: number[]): Map<number, number> {
  let sortedA = Array.from(new Set(A)).sort((a, b) => a - b);
  let map = new Map<number, number>();
  sortedA.forEach((value, index) => map.set(value, index));
  return map;
}

function findLongestSubsequence(N: number, D: number, A: number[]): number {
  let map = compressCoordinates(A);
  let compressedA = A.map((value) => map.get(value)!);
  let maxVal = Math.max(...compressedA);
  let segTree = new SegmentTree(maxVal + 1);
  let maxLength = 0;

  for (let i = 0; i < N; i++) {
    let val = compressedA[i];
    let l = Math.max(0, val - D);
    let r = Math.min(maxVal, val + D);
    let maxPrevLength = segTree.rangeQuery(l, r);
    segTree.change(val, maxPrevLength + 1);
    maxLength = Math.max(maxLength, maxPrevLength + 1);
  }

  return maxLength;
}

// 入力例
console.log(findLongestSubsequence(N, D, A));
//console.log(findLongestSubsequence(4, 2, [3, 5, 1, 2])); // 期待される出力: 3
//console.log(findLongestSubsequence(5, 10, [10, 20, 100, 110, 120])); // 期待される出力: 3
//console.log(findLongestSubsequence(11, 7, [21, 10, 3, 19, 28, 12, 11, 3, 3, 15, 16])); // 期待される出力: 6
