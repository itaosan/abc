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

const N = parseInt(readLine());
const S = readLine();
//const h = [0, ...readLine().split(" ").map(Number)];

// 'a' から 'z' までの小文字を含む配列を作成
const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));

// 与えられた文字に対応するインデックスを返す関数
const getIndex = (char: string): number => {
  return alphabet.indexOf(char);
};

let ans = Array(26).fill(0)

let cnt = 0
let tango = ""
for (let i = 0; i < N; i++) {
  if( tango !== S[i]){
    tango = S[i]
    cnt = 1
  }else{
    cnt++
  }
  if (ans[getIndex(S[i])] < cnt)  ans[getIndex(S[i])] = cnt
  
}

let kazu = 0
for (let i = 0; i < ans.length; i++) {
  kazu += ans[i]
  
}

console.log(kazu)

//Number.MIN_VALUE
//Number.MAX_VALUE
