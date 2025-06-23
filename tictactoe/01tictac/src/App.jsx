import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [winnerDeclared, setWinnerDeclared] = useState(false);

  // Function to play the winning sound
  const playWinningSound = () => {
    const audio = new Audio(
      "https://www.myinstants.com/media/sounds/tada-fanfare-a.mp3"
    );
    audio.play();
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], winningSquares: [a, b, c] };
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = board.map((value, idx) =>
      idx === index ? (isXNext ? "X" : "O") : value
    );
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const winnerInfo = calculateWinner(board);
    if (winnerInfo && !winnerDeclared) {
      playWinningSound();
      setScore((prevScore) => ({
        ...prevScore,
        [winnerInfo.winner]: prevScore[winnerInfo.winner] + 1,
      }));
      setWinnerDeclared(true);
    }
  }, [board, winnerDeclared]);

  useEffect(() => {
    if (score.X === 3 || score.O === 3) {
      alert(
        `${score.X === 3 ? "Player X" : "Player O"} wins the best of 5! 🎉`
      );
      setScore({ X: 0, O: 0 });
    }
  }, [score]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinnerDeclared(false);
  };

  const winnerInfo = calculateWinner(board);
  const status = winnerInfo
    ? `Winner: ${winnerInfo.winner}`
    : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Tic-Tac-Toe</h1>
      <p className="text-lg mb-4">{status}</p>
      <p className="text-lg mb-4">
        Score - X: {score.X} | O: {score.O}
      </p>
      <div className="grid grid-cols-3 gap-2">
        {board.map((square, index) => (
          <motion.button
            key={index}
            className={`w-20 h-20 text-2xl font-bold flex items-center justify-center border border-gray-500 ${
              winnerInfo && winnerInfo.winningSquares.includes(index)
                ? "bg-green-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleClick(index)}
            animate={
              winnerInfo && winnerInfo.winningSquares.includes(index)
                ? { scale: 1.2, rotate: 360 }
                : { scale: 1 }
            }
            transition={{ duration: 0.5 }}
          >
            {square}
          </motion.button>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
      >
        Restart Game
      </button>
    </div>
  );
}
