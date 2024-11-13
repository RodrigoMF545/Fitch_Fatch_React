import logo from "../assets/game-logo.png"

function Header () {
    return(
        <header className="flex items-center justify-center  ">
            <div className="flex items-center gap-4 ">
                <img className="h-14" src={logo} alt="logo" />
                <label className="text-">Fitch Facth Game</label>
            </div>

        </header>
    )
  
}
export default Header
