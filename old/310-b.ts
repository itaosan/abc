import * as fs from "fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

function isSuperset(set: Set<number>, subset: Set<number>): boolean {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false;
        }
    }
    return true;
}

const [N, M] = readLine().split(" ").map(Number);
let P: number[] = [];
let C: number[] = [];
let F: Set<number>[] = [];

for (let i = 1; i <= N; i++) {
    const l = readLine().split(" ").map(Number);
    P.push(l[0]);
    C.push(l[1]);
    F.push(new Set(l.slice(2)));
}

let ans = false;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        ans = ans || (P[i] >= P[j] && isSuperset(F[j], F[i]) && (P[i] > P[j] || F[j].size > F[i].size));
    }
}

console.log(ans ? "Yes" : "No");
