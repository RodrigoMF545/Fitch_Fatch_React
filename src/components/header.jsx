import logo from "../assets/game-logo.png"

function Header () {
    return(
        <header className="flex items-center justify-center top-0 z-50 py-10">
            <div className="flex items-center gap-4 ">
                <img className="h-14" src={logo} alt="logo" />
                <label className="text-">Fitch Facth Game</label>
            </div>

        </header>
    )
  
}
export default Header
