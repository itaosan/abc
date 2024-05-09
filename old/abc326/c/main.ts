const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (input1: string) => {
  const [n, m] = input1.split(' ').map(Number);

  rl.question('', (input2: string) => {
    let a = input2.split(' ').map(Number);
    a.sort((x, y) => x - y);
    a.push(9_000_000_000_000);

    let res = 0;
    let r = 0;
    for (let l = 0; l < n; l++) {
      while (a[r] < a[l] + m) {
        r += 1;
      }
      res = Math.max(res, r - l);
    }

    console.log(res);
    rl.close();
  });
});
