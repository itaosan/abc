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
  const [N, M,P] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const B = input[2].split(" ").map(Number);
  let sum = 0

  for (let i = 0; i < N; i++) {
    const sa = P -A[i]
    if(sa <= 0){
      sum += P *M
    }else{
      for (let j = 0; j < M; j++) {
        if ( B[j] < sa){
          sum += B[j]
        }else{
          sum += sa
        }
      }
      sum += A[i] * M
  
    }
    
  }
  console.log(sum)
});
