export default function GameBoard({ onSelectSquareFromApp, board }) {
 
    return (
        <ol className="flex flex-wrap justify-center gap-8 my-12 p-0 flex-col">
          {board.map((row, rowIndex) => (
            <li key={rowIndex}>
              <ol className="flex flex-wrap justify-center gap-8 p-0">
                {row.map((playerSymbol, colIndex) => (
                  <li key={colIndex}>
                    <button
                      onClick={() => onSelectSquareFromApp(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                      className="w-32 h-32 border-none bg-[#aca788] text-[#3f3b00] text-5xl cursor-pointer font-[Caprasimo] p-4"
                    >
                      {playerSymbol}
                    </button>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      );
      
  }