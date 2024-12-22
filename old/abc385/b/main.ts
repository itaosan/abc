import * as fs from "node:fs";

//移動する方向
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

// 頂点数 N を前提として、隣接リスト G を作成
//const G: number[][] = Array.from({ length: N + 1 }, () => []);

// 自作のキュー
class Queue<T> {
  private data: T[] = [];
  private front = 0;

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T | undefined {
    if (this.front >= this.data.length) return undefined;
    const item = this.data[this.front];
    this.front++;
    return item;
  }

  isEmpty(): boolean {
    return this.front >= this.data.length;
  }
}

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

//const N = Number.parseInt(readLine());
const [H, W,X,Y] = readLine().split(" ").map(Number);
//const S = readLine()
const map =[]
for(let i=0;i<H;i++){
  map.push(readLine().split(''))
}
const move : string[] = readLine().split('').map(String)
//サンタは(X,Y)にいる
let santaPos = [X-1,Y-1]  
let houseCnt = 0
for (let i=0;i<move.length;i++){
  //UDLRをそれぞれ0,1,2,3として扱う
  let moveIndex = 0
  if(move[i] === 'U'){
    moveIndex = 3
  }
  if(move[i] === 'D'){
    moveIndex = 1
  }
  if(move[i] === 'L'){
    moveIndex = 0
  }
  if(move[i] === 'R'){
    moveIndex = 2
  }

  const nextX = santaPos[0] + dx[moveIndex]
  const nextY = santaPos[1] + dy[moveIndex]
  if(nextX<0 || nextX>=H || nextY<0 || nextY>=W || map[nextX][nextY] === '#'){
    continue
  }
  //console.error(`santapos ${santaPos[0]+1} ${santaPos[1]+1} ${houseCnt}`)
  //console.error(`next ${nextX+1} ${nextY+1} ${houseCnt}`)
  santaPos = [nextX,nextY]
  if(map[nextX][nextY] === '@'){
    houseCnt++
    map[nextX][nextY] = '.'
  }
}
console.log(`${santaPos[0]+1} ${santaPos[1]+1} ${houseCnt}`)