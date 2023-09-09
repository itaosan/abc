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
  //   tourist 3858
  // ksun48 3679
  // Benq 3658
  // Um_nik 3648
  // apiad 3638
  // Stonefeang 3630
  // ecnerwala 3613
  // mnbvmar 3555
  // newbiedmy 3516
  // semiexp 3481
  const S = input[0];
  if (S === "tourist") console.log("3858")
  else if (S === "ksun48") console.log("3679")
  else if (S === "Benq") console.log("3658")
  else if (S === "Um_nik") console.log("3648")
  else if (S === "apiad") console.log("3638")
  else if (S === "Stonefeang") console.log("3630")
  else if (S === "ecnerwala") console.log("3613")
  else if (S === "mnbvmar") console.log("3555")
  else if (S === "newbiedmy") console.log("3516")
  else if (S === "semiexp") console.log("3481")

});
