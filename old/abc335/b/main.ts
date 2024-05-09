import * as fs from "fs";

const DEBUG = false;
function debug(arg: string) {
  if (DEBUG) {
    console.log(arg);
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;

const readLine = () => input[inputIndex++];

const N = parseInt(readLine());

let [x,y,z] = [0,0,0]

for(let x=0;x<=N;x++){
  for(let y=0;y<=N;y++){
    for(let z=0;z<=N;z++){
      if(x+y+z<=N){
        console.log(`${x} ${y} ${z}`)
      }else{
        break;
      }
    }
  }
}

//Number.MIN_VALUE
//Number.MAX_VALUE
