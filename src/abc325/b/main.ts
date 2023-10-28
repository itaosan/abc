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
  const N = parseInt(input[0]);
  let ninzu = Array(24).fill(0)

  for (let i = 0; i < N; i++) {
    const v = input[i+1].split(" ").map(Number)
    for (let t = 0; t < 24; t++) {
      const ima = (t+v[1]) % 24
      if (ima >= 9 && ima <= 17){
        ninzu[t] +=v[0] 
      }
    }
    
  }
  const max = Math.max(...ninzu)
  console.log(max)

});
