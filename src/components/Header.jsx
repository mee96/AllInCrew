import "../scss/layout/Header.scss";
import logo from "../public/logo.png";


function Header() {
  return (
    <header className="header">
        
        <img className="header__logo" src={logo} alt="imagen pusheen" />
        <h1>alincreew</h1>
        
       
    </header>
  )
}

export default Header