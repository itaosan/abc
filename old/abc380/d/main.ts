import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
//const [N, M] = readLine().split(" ").map(Number);
const S = readLine().split("");
const Q = Number.parseInt(readLine());
const K = readLine().split(" ").map(BigInt);

const Slengh = S.length;

const ans = [];

for (let i = 0; i < Q; i++) {
  const target = K[i]-1n;
  //繰り返し回数が偶数か奇数かで処理を変える
  let kurikaeshi = (target / BigInt(Slengh));
  //二進数表記で1の数が偶数か奇数かで処理を変える
  let count = 0;
  while (kurikaeshi > 0n) {
    // 1のビットがあればカウントを増やす
    count += Number(kurikaeshi & 1n);
    // 右に1ビットずらす
    kurikaeshi >>= 1n;
  }
  const isEven = count % 2 === 0;
  const index = target % BigInt(Slengh);
  //console.log(`target:${target} kurikaeshi:${kurikaeshi} index:${index} isEven:${isEven}`);
  if (isEven) {
    ans.push(S[Number(index)]);
  } else {
    //大文字小文字を反転
    // 文字が小文字の場合
    if (S[Number(index)] >= "a" && S[Number(index)] <= "z") {
      ans.push( S[Number(index)].toUpperCase());
    }

    // 文字が大文字の場合
    if (S[Number(index)] >= "A" && S[Number(index)] <= "Z") {
      ans.push( S[Number(index)].toLowerCase());
    }
  }
}
console.log(ans.join(" "));
