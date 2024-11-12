import Header from './components/header'


import './App.css'
import Jogador from './components/player/jogador'



function App() {


  return (
    <div>
      <Header />
      <div className='max-w-[45rem] mx-auto my-12 p-8 rounded-lg bg-gradient-to-b from from-[#383624] to-[#282617] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative'>
        <ol className='flex m-4 justify-center items-center gap-8 p-0'>
          <Jogador name="Player 1" symbol="X"/>
          <Jogador name ="Player 2" symbol="O"/>
        </ol>
        
      </div>
      
      
    </div>
  )
}

export default App;
