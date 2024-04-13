import * as fs from "node:fs";

const input = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let inputIndex = 0;
const readLine = () => input[inputIndex++];

const scoresExample = [];
for (let i = 0; i < 3; i++) {
  scoresExample.push(readLine().split(" ").map(Number));
}

type Cell = "R" | "B" | ""; // R: Red (Takahashi), B: Blue (Aoki), '': Empty

interface GameState {
  board: Cell[][];
  scores: number[][];
  currentTurn: "Takahashi" | "Aoki";
  scoreT: number; // Takahashi's total score
  scoreA: number; // Aoki's total score
}

const allDirections = [
  [
    [0, 1],
    [0, 2],
  ], // Horizontal
  [
    [1, 0],
    [2, 0],
  ], // Vertical
  [
    [1, 1],
    [2, 2],
  ], // Diagonal from top-left to bottom-right
  [
    [1, -1],
    [2, -2],
  ], // Diagonal from top-right to bottom-left
];

function isGameOver(state: GameState): { gameOver: boolean; winner: string | null } {
  // Check for 3 in a row for both R and B
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.board[i][j] !== "") {
        for (const direction of allDirections) {
          if (
            direction.every(([dx, dy]) => {
              const nx = i + dx;
              const ny = j + dy;
              return nx >= 0 && nx < 3 && ny >= 0 && ny < 3 && state.board[nx][ny] === state.board[i][j];
            })
          ) {
            return { gameOver: true, winner: state.board[i][j] === "R" ? "Takahashi" : "Aoki" };
          }
        }
      }
    }
  }

  // Check if any moves are left
  if (state.board.flat().some((cell) => cell === "")) {
    return { gameOver: false, winner: null };
  }

  // If no moves are left, check the scores
  return {
    gameOver: true,
    winner: state.scoreT > state.scoreA ? "Takahashi" : "Aoki",
  };
}

// Recursive function to simulate the game
function simulateGame(state: GameState, alpha: number, beta: number): number {
  let a = alpha;
  let b = beta;
  const gameResult = isGameOver(state);
  if (gameResult.gameOver) {
    return gameResult.winner === "Takahashi" ? Number.POSITIVE_INFINITY : -Number.POSITIVE_INFINITY;
  }

  if (state.currentTurn === "Takahashi") {
    let maxValue = -Number.POSITIVE_INFINITY;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (state.board[i][j] === "") {
          state.board[i][j] = "R";
          state.scoreT += state.scores[i][j];
          const value = simulateGame({ ...state, currentTurn: "Aoki" }, a, b);
          state.board[i][j] = "";
          state.scoreT -= state.scores[i][j];
          maxValue = Math.max(maxValue, value);
          a = Math.max(a, value);
          if (b <= a) break; // Alpha-beta pruning
        }
      }
    }
    return maxValue;
  }
  let minValue = Number.POSITIVE_INFINITY;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (state.board[i][j] === "") {
        state.board[i][j] = "B";
        state.scoreA += state.scores[i][j];
        const value = simulateGame({ ...state, currentTurn: "Takahashi" }, a, b);
        state.board[i][j] = "";
        state.scoreA -= state.scores[i][j];
        minValue = Math.min(minValue, value);
        b = Math.min(b, value);
        if (b <= a) break; // Alpha-beta pruning
      }
    }
  }
  return minValue;
}

// Initialize and run the game simulation from the start state
function determineWinner(scores: number[][]): string {
  const initialState: GameState = {
    board: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    scores: scores,
    currentTurn: "Takahashi",
    scoreT: 0,
    scoreA: 0,
  };

  const result = simulateGame(initialState, -Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
  return result === Number.POSITIVE_INFINITY ? "Takahashi" : "Aoki";
}

console.log(determineWinner(scoresExample)); // Should output "Takahashi"
