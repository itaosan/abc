import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const X = BigInt(readLine());

if (X % BigInt(10) < BigInt(0) || X % BigInt(10) === BigInt(0)){
  console.log(((X)/BigInt(10)).toString());
}else{
  console.log(((X+BigInt(9))/BigInt(10)).toString());

}
