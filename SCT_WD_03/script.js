const board = document.getElementById('board');
const statusText = document.getElementById('status');
let currentPlayer = 'X';
let gameActive = true;
let cells = ['', '', '', '', '', '', '', '', ''];

function drawBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.dataset.index = index;
    div.innerText = cell;
    div.addEventListener('click', handleClick);
    board.appendChild(div);
  });
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || cells[index] !== '') return;

  cells[index] = currentPlayer;
  drawBoard();
  if (checkWinner()) {
    statusText.innerText = `${currentPlayer} wins! 🎉`;
    gameActive = false;
  } else if (!cells.includes('')) {
    statusText.innerText = "It's a draw! 🤝";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.innerText = `${currentPlayer}'s turn`;
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
  ];
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function resetGame() {
  cells = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusText.innerText = `${currentPlayer}'s turn`;
  drawBoard();
}

drawBoard();
statusText.innerText = `${currentPlayer}'s turn`;
