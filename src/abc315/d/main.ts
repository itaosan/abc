import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  let [H, W] = input[0].split(" ").map(Number);
  let cookies = input.slice(1).map((line) => line.split(""));
  while (true) {
    let removed = false;

    // 各行をチェック
    for (let i = 0; i < H; i++) {
      if (new Set(cookies[i]).size === 1 && cookies[i].length > 1) {
        cookies[i] = [];
        removed = true;
      }
    }

    // 各列をチェック
    let columnsToRemove: Set<number> = new Set();

    for (let j = 0; j < W; j++) {
      let column = cookies.map((row) => row[j]);

      if (new Set(column).size === 1 && column.filter((val) => val !== undefined).length > 1) {
        columnsToRemove.add(j);
        removed = true;
      }
    }

    // 列を削除
    for (let j of columnsToRemove) {
      for (let i = 0; i < H; i++) {
        cookies[i].splice(j, 1);
      }
      W--;
    }

    cookies = cookies.filter((row) => row.length > 0);
    H = cookies.length;

    if (!removed) break;
  }

  const remaining = cookies.reduce((acc, row) => acc + row.length, 0);
  console.log(remaining);
});
