import { useState } from 'react';
import Header from './components/header';
import './App.css';
import Jogador from './components/player/jogador';
import GameBoard from './components/GameBoard';
import { winningCombinations } from './winningCombinations';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];




function App() {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleSelectSquare = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || winner) return;

    // Atualiza o tabuleiro com a jogada atual
    const newBoard = board.map((row, r) => 
      row.map((cell, c) => (r === rowIndex && c === colIndex ? currentPlayer : cell))
    );
    setBoard(newBoard);

    // Verifica vitória
    if (checkWinner(newBoard, currentPlayer)) {
      setWinner(currentPlayer);
    } else if (newBoard.flat().every(cell => cell !== null)) {
      setWinner("Empate");
    } else {
      // Alterna jogador
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const checkWinner = (board, player) => {
    return winningCombinations.some(combination =>
      combination.every(([row, col]) => board[row][col] === player)
    );
  };


  return (
    <div>
      <Header />
      <div className="max-w-[45rem] mx-auto my-12 p-8 rounded-lg bg-gradient-to-b from-[#383624] to-[#282617] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex m-4 justify-center items-center gap-8 p-0">
          <Jogador name="Player 1" symbol="X" isCurrentPlayer={currentPlayer === "X"}/>
          <Jogador name="Player 2" symbol="O" isCurrentPlayer={currentPlayer === "O"}/>
        </ol>
        
        <GameBoard board={board} onSelectSquareFromApp={handleSelectSquare} />

        {winner && (
          <div className="text-center mt-4">
            <p className="text-2xl font-bold">
              {winner === "Empate" ? "Empate!" : `Vitória de ${winner}!`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
