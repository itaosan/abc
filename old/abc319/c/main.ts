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
  let C = [];

  C.push(input[0].split(" ").map(Number));
  C.push(input[1].split(" ").map(Number));
  C.push(input[2].split(" ").map(Number));

  function calculateProbability(c: number[][]): number {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let total = 0;
    let good = 0;

    // Create an array of all possible orders
    const orders = permutations(nums);

    // Check each order
    for (const order of orders) {
      let ok = true;
      total++;
      for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {
          for (let k = j + 1; k < 9; k++) {
            const xi = Math.floor((order[i] - 1) / 3);
            const yi = (order[i] - 1) % 3;
            const xj = Math.floor((order[j] - 1) / 3);
            const yj = (order[j] - 1) % 3;
            const xk = Math.floor((order[k] - 1) / 3);
            const yk = (order[k] - 1) % 3;

            if (
              c[xi][yi] === c[xj][yj] &&
              c[xj][yj] !== c[xk][yk] &&
              ((xi === xj && xj === xk) || (yi === yj && yj === yk) || (xi - xj === xj - xk && yi - yj === yj - yk))
            ) {
              ok = false;
            }
          }
        }
      }
      if (ok) {
        good++;
      }
    }

    const probability = good / total;
    return probability;
  }

  // Function to generate all possible permutations of an array
  function permutations(arr: number[]): number[][] {
    if (arr.length === 1) {
      return [arr];
    }

    const perms = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(0, i).concat(arr.slice(i + 1));
      for (const perm of permutations(rest)) {
        perms.push([arr[i]].concat(perm));
      }
    }

    return perms;
  }

  console.log(calculateProbability(C)); // 0.6666666666666666
});
