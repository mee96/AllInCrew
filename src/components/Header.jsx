import "../scss/layout/Header.scss";
import logoPortf from "../images/logo.png";
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="header">
        
        <img className="header__logo" src={logoPortf} alt="imagen pusheen" />
        <h1>mee96</h1>
        <nav>
        <ul className="header__list">
          
          <li><Link to="sobre-mi" smooth={true} duration={500}>
              Sobre Mí
            </Link></li>
          <li><Link to="proyectos" smooth={true} duration={500}>
              Proyectos
            </Link></li>
          <li><Link to="formacion" smooth={true} duration={500}>
              
            Formación</Link></li>
          <li><Link to="contacto" smooth={true} duration={500}> Contacto </Link></li>
        </ul>
        </nav>
    </header>r>
  )
}

export default Header