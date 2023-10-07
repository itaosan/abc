import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  input.push(line);
});

type Man = {
  no: number;
  point: number;
};

rl.on("close", () => {
  const N = parseInt(input[0]);
  //const [N, M] = input[0].split(" ").map(Number);
  const S = input.slice(1);
  let zyuni: Man[] = Array();
  for (let i = 0; i < N; i++) {
    let p = 0;
    for (let j = 0; j < N; j++) {
      if (S[i][j] === "o") p++;
    }
    const man: Man = { no: i + 1, point: p };
    zyuni.push(man);
  }
  zyuni.sort((a, b) => {
    if (a.point === b.point) {
      return a.no - b.no;
    } else {
      return b.point - a.point;
    }
  });
  console.log(zyuni.map((zyuni) => zyuni.no).join(" "));
});
