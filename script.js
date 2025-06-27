const board = document.getElementById('board');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let cells = Array(9).fill("");

function renderBoard() {
  board.innerHTML = "";
  cells.forEach((value, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = value;
    cell.addEventListener("click", () => makeMove(i));
    board.appendChild(cell);
  });
}

function makeMove(index) {
  if (cells[index] === "" && !checkWinner()) {
    cells[index] = currentPlayer;
    if (checkWinner()) {
      statusText.textContent = `Player ${currentPlayer} wins!`;
    } else if (cells.every(cell => cell !== "")) {
      statusText.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
    renderBoard();
  }
}

function checkWinner() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winCombos.some(combo => {
    const [a,b,c] = combo;
    return cells[a] && cells[a] === cells[b] && cells[b] === cells[c];
  });
}

function resetGame() {
  currentPlayer = 'X';
  cells = Array(9).fill("");
  statusText.textContent = "Player X's turn";
  renderBoard();
}

renderBoard();
