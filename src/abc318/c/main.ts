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
  const [N, D, P] = input[0].split(" ").map(Number);
  let F = input[1].split(" ").map(Number);

  //1枚当たりのチケット金額
  const one = P / D;
  //sort
  F = F.sort((a, b) => b - a);

  let min = -1;
  let max = F.length - 1;
  let point = 0;
  while (true) {
    if (max <= min) {
      point = min;
      break;
    }
    const tgt = Math.floor((max + min) / 2);
    //console.log(`min:${min} max:${max} tgt:${tgt} F[tgt]:${F[tgt]} one:${one}`);
    if (F[tgt] >= one) {
      min = tgt+1;
    } else {
      max = tgt-1;
    }
  }

  console.log(`point:${point}`);
  point += 1
  //周遊使う分 bigint
  let syuyu_cnt: bigint =BigInt(0)
  if(point > 1){
    syuyu_cnt = BigInt(Math.floor(point / D) * P);
    //console.log(`周遊使う分:${syuyu_cnt}`);
    //差分と周遊どっちがいいか
    let amari = point % D;
    let kinagku = 0;
    for (let i = 0; i < amari; i++) {
      kinagku = F[point - amari + i - 1];
    }
    if (kinagku > P) {
      //しゅーゆーかう
      syuyu_cnt += BigInt(P);
    } else {
      //しゅーゆーかわない
      syuyu_cnt += BigInt(kinagku);
    }
    //console.log(`差分:${kinagku}`);
  
  }
  //残り足す
  for (let i = point+1; i < N; i++) {
    syuyu_cnt += BigInt(F[i]);
  }
  console.log(syuyu_cnt.toString());
});
