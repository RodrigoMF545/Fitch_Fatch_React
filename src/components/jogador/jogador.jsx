
function Jogador (scores) {
  const {xScore, oScore} = scores;
  return (
    <div className="flex flex-row items-center justify-evenly w-80 text-xl bg-white m-9 mx-auto shadow-lg shadow-gray-400 rounded-md">
      <span className="text-[rgb(255,70,37)] border-b-4 border-[rgb(255,70,37)] rounded-bl-md">Jogador 1 - {xScore}</span>
      <span className="text-[rgb(44,135,255)] border-b-4 border-[rgb(44,135,255)] rounded-br-md">Jogador 2 - {oScore}</span>
    </div>
  )
}

export default Jogador;
