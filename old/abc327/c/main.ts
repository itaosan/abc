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
  let A =[]
  for (let i = 0; i < 9; i++) {
    A.push(input[i].split(" ").map(Number))
    
  }

  let ok = "Yes"

  //各行
  //setにつっこむ
  for (let i = 0; i < 9; i++) {
    if (nine(A[i]) === false) ok = "No"
  }

  //各列
  for (let i = 0; i < 9; i++) {
    let chk2 = []
    for (let j = 0; j < 9; j++) {
      chk2.push(A[j][i])
    }
    if (nine(chk2) === false) ok = "No"
  }


  //升目
  let chk3 = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"


  chk3 = []
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"

  chk3 = []
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"
  chk3 = []
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      chk3.push(A[j][i])
    }
  }
  if (nine(chk3) === false) ok = "No"

  console.log(ok)


});

function nine(para : number[]){
  const s = new Set(para)
  if (s.size !== 9){
    return false
  }
  if (para.reduce((acc, current) => acc + current, 0) !== 45){
    return false
  }
  return true
  
}
