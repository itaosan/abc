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
  //const N = parseInt(input[0]);
  const [N, M] = input[0].split(" ").map(String);
  const S = input.slice(1);
  const nn = parseInt(N);
  let ans = [];
  for (let i = 0; i < nn; i++) {
    let ok = false;
    const val = S[i];
    if (val === M) {
      ans.push(i + 1);
      continue;
    }
    //M  は、S にある1 文字を挿入して得られる文字列である。
    let chk3 = true;
    if (M.length === val.length + 1) {
      let cnt = 0;
      for (let j = 0; j + cnt < M.length; j++) {
        if (cnt === 0 && j === M.length-1){
          break
        }
        if (M[j + cnt] !== val[j]) {
          cnt++;
          if (cnt > 1) {
            chk3 = false;
            break;
          }
          if (M[j + cnt] !== val[j]) {
            chk3 = false;
            break;
          }
        }
      }
      if (chk3) {
        ans.push(i + 1);
        continue;
      }
    }
    //M  は、S からある1 文字を削除して得られる文字列である。
    let chk4 = true;
    if (M.length + 1 === val.length) {
      let cnt = 0;
      for (let j = 0; j < M.length; j++) {
        if (M[j] !== val[j + cnt]) {
          cnt++;
          if (cnt > 1) {
            chk4 = false;
            break;
          }
          if (M[j] !== val[j + cnt]) {
            chk4 = false;
            break;
          }
        }
      }
      if (chk4) {
        ans.push(i + 1);
        continue;
      }
    }

    //M   は、S のある 1 文字を別の英小文字に変更して得られる文字列である。
    let chk5 = true;
    if (val.length === M.length) {
      let cnt = 0;
      for (let j = 0; j < M.length; j++) {
        if (M[j] !== val[j]) {
          cnt++;
        }
      }
      if (cnt === 1) {
        ans.push(i + 1);
        continue;
      }
    }
  }
  console.log(ans.length);
  console.log(ans.join(" "));
});
