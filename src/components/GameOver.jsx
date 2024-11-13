export default function GameOver({ winner, onRestart }) {
    return (
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-[rgba(40,38,23,0.95)] animate-pop-in">
        <h2 className="font-caprasimo text-4xl text-center text-[#fcd256] m-0">Game Over!</h2>
        {winner ? (
          <p className="text-2xl text-center text-[#e1dec7]">{winner} Won!</p>
        ) : (
          <p className="text-2xl text-center text-[#e1dec7]">It is a Draw!</p>
        )}
        <p>
          <button
            onClick={onRestart}
            className="mt-4 px-4 py-2 border-2 border-[#fcd256] text-[#fcd256] rounded transition-transform duration-200 transform hover:scale-110 hover:bg-[#fcd256] hover:text-[#3f3b00] shadow-lg shadow-yellow-500/50"
          >
            Restart
          </button>
        </p>
      </div>
    );
  }
  