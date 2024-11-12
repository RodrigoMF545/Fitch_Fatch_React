
function Jogador ({name, symbol}) {


  return (
    <li>
      <span className="border-2 border-transparent p-2 rounded font-bold">
        <span className="inline-block w-40 text-xl  uppercase m-0 p-2 rounded text-ellipsis text-center"> {name}</span>
        <span className="ml-4 text-xl/[24px] text-#e1dec7 ">{symbol}</span>
      </span>
      
    </li>
  )
}

export default Jogador;
