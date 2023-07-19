import { readFileSync } from "fs";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

//1:食べたかず　2:皿の種類
const num: number[] = input[0].split(" ").map(Number);
const eat_cnt = num[0];
const syurui = num[1];

//食べた色
const tabeta = input[1].split(" ");

//皿の種類
const sara = input[2].split(" ");

//price
const price = input[3].split(" ").map(Number);

let total_price = 0;

tabeta.forEach((val) => {
    const i = sara.indexOf(val);
    if (i === -1) {
        total_price += price[0];
    } else {
        total_price += price[i + 1];
    }
});

console.log(total_price);
