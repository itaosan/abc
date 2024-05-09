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


  
  console.log(go326(N))


  });

  function go326(N:number) {
    const n = N.toString().split("").map(Number);
    let  val = n[0] * n[1]
    if (val < n[2] || val > 9){
      return go326(N - n[2] +10)
    } else{
      return N - n[2] + val
    }
  }