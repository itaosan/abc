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
  //const [N, M] = input[0].split(" ").map(Number);
  type aisu = {F:number,S:number}
  const hoi: aisu[] = []
  for (let i = 0; i < N; i++) {
    const FS = input[i+1].split(" ").map(Number);
    hoi.push({F:FS[0],S:FS[1]})
  }
  //整列
  hoi.sort((a,b) => b.S - a.S)

  let val = 0
  let val2 = 0
  let tp =0
  for (let i = 0; i < hoi.length; i++) {
    if(i===0){
      val = hoi[i].S
      tp = hoi[i].F
    }else{
      let tmp = 0
      if (tp === hoi[i].F){
        tmp = hoi[i].S/2
      }else{
        tmp = hoi[i].S
      }
      if (tmp > val2)  val2 = tmp


    }
    
  }
  console.log(val + val2)


});
