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
  ask: number[];
  point: number;
};
rl.on("close", () => {
  //const N = parseInt(input[0]);
  const [N, M] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const S = input.slice(2);

  let sensyu: Man[] = new Array(N);
  let ans = new Array(N).fill(0);

  for (let i = 0; i < N; i++) {
    let ask_point: number[] = new Array(0);
    let p = i + 1;
    for (let j = 0; j < M; j++) {
      if (S[i][j] === "x") {
        ask_point.push(A[j]);
      } else {
        p += A[j];
      }
    }
    ask_point.sort((a, b) => b - a);
    const man: Man = { no: i, ask: ask_point, point: p };
    sensyu.push(man);
  }
  //console.log(sensyu)
  sensyu.sort((a, b) => b.point - a.point);
  const max_point = sensyu[0].point;
  //console.log(`max_point = ${max_point}`);
  for (let i = 0; i < N; i++) {
    const a_point = sensyu[i].ask;
    let ask_cnt = 0;
    let now_point = sensyu[i].point;
    //console.log(`now_point = ${now_point}`);
    while (now_point < max_point) {
      now_point += a_point[ask_cnt];
      ask_cnt++;
    }
    ans[sensyu[i].no] = ask_cnt;
    //console.log(`ask_cnt = ${ask_cnt}`);
  }
  ans.forEach((num) => {
    console.log(num);
  });
});
