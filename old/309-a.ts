import { readFileSync } from "fs";

const input: string[] = readFileSync("/dev/stdin", "utf8").split("\n");

const num = input[0].split(" ").map(Number);

const a = num[0];
const b = num[1];

if (a === 1) {
    if (b === 2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 2) {
    if (b === 3) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 3) {
    console.log("No");
} else if (a === 4) {
    if (b === 5) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 5) {
    if (b === 6) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 6) {
    console.log("No");
} else if (a === 7) {
    if (b === 8) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 8) {
    if (b === 9) {
        console.log("Yes");
    } else {
        console.log("No");
    }
} else if (a === 9) {
    console.log("No");
}
