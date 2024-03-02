import * as fs from "fs";

class SegmentTree {
  tree: Node[];
  n: number;

  constructor(arr: number[]) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n);
    this.build(arr, 1, 0, this.n - 1);
  }

  build(arr: number[], v: number, tl: number, tr: number) {
    if (tl === tr) {
      this.tree[v] = new Node(arr[tl], -Infinity, 1, 0);
    } else {
      let tm = Math.floor((tl + tr) / 2);
      this.build(arr, v * 2, tl, tm);
      this.build(arr, v * 2 + 1, tm + 1, tr);
      this.tree[v] = Node.merge(this.tree[v * 2], this.tree[v * 2 + 1]);
    }
  }

  update(v: number, tl: number, tr: number, pos: number, newVal: number) {
    if (tl === tr) {
      this.tree[v] = new Node(newVal, -Infinity, 1, 0);
    } else {
      let tm = Math.floor((tl + tr) / 2);
      if (pos <= tm) {
        this.update(v * 2, tl, tm, pos, newVal);
      } else {
        this.update(v * 2 + 1, tm + 1, tr, pos, newVal);
      }
      this.tree[v] = Node.merge(this.tree[v * 2], this.tree[v * 2 + 1]);
    }
  }

  query(v: number, tl: number, tr: number, l: number, r: number): Node {
    if (l > r) {
      return new Node(-Infinity, -Infinity, 0, 0); // 空の区間
    }
    if (l === tl && r === tr) {
      return this.tree[v];
    }
    let tm = Math.floor((tl + tr) / 2);
    return Node.merge(
      this.query(v * 2, tl, tm, l, Math.min(r, tm)),
      this.query(v * 2 + 1, tm + 1, tr, Math.max(l, tm + 1), r)
    );
  }

  // クエリを処理するための公開メソッド
  updateValue(pos: number, newVal: number) {
    this.update(1, 0, this.n - 1, pos, newVal);
  }

  getSecondLargest(l: number, r: number): number {
    const result = this.query(1, 0, this.n - 1, l, r);
    return result.secondMaxCount;
  }
}

class Node {
  maxVal: number; // 範囲内の最大値
  secondMaxVal: number; // 範囲内の2番目に大きい値
  maxCount: number; // 最大値の出現回数
  secondMaxCount: number; // 2番目に大きい値の出現回数

  constructor(maxVal = -Infinity, secondMaxVal = -Infinity, maxCount = 0, secondMaxCount = 0) {
    this.maxVal = maxVal;
    this.secondMaxVal = secondMaxVal;
    this.maxCount = maxCount;
    this.secondMaxCount = secondMaxCount;
  }

  // 2つのノードをマージして新しいノードを作成するメソッド
  static merge(left: Node, right: Node): Node {
    let newMaxVal = Math.max(left.maxVal, right.maxVal);
    let newSecondMaxVal = Math.max(
      Math.min(left.maxVal, right.maxVal),
      Math.max(left.secondMaxVal, right.secondMaxVal)
    );

    let newMaxCount = 0;
    if (left.maxVal === newMaxVal) newMaxCount += left.maxCount;
    if (right.maxVal === newMaxVal) newMaxCount += right.maxCount;

    let newSecondMaxCount = 0;
    // 新しい2番目に大きい値が左または右のノードの最大値と等しい場合、その出現回数を追加
    if (left.maxVal === newSecondMaxVal) newSecondMaxCount += left.maxCount;
    if (right.maxVal === newSecondMaxVal) newSecondMaxCount += right.maxCount;
    // 新しい2番目に大きい値が左または右のノードの2番目に大きい値と等しい場合、その出現回数を追加
    if (left.secondMaxVal === newSecondMaxVal) newSecondMaxCount += left.secondMaxCount;
    if (right.secondMaxVal === newSecondMaxVal) newSecondMaxCount += right.secondMaxCount;

    // 最大値と2番目に大きい値が同じ場合、2番目に大きい値の出現回数を0に設定
    if (newMaxVal === newSecondMaxVal) {
      newSecondMaxCount = 0;
    }

    return new Node(newMaxVal, newSecondMaxVal, newMaxCount, newSecondMaxCount);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const [N, Q] = readLine().split(" ").map(Number);

// 使用例
const arr = readLine().split(" ").map(Number);
const st = new SegmentTree(arr);

for (let i = 0; i < Q; i++) {
  const [t, a, b] = readLine().split(" ").map(Number);
  if (t === 1) {
    st.updateValue(a - 1, b);
  } else {
    console.log(st.getSecondLargest(a - 1, b - 1));
  }
}
