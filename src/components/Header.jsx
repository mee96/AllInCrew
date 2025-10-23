import "../scss/layout/Header.scss";
import logoPortf from "../images/1.png";


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoPortf} alt="logo" />
            <h1>AllinCrew tus patronas </h1>
           
           < ul className="header__list">
            <li>Quienes somos</li>
            <li>Covers</li>
            <li>Fotos</li>
            <li>Blogs</li>
           </ul>
        </header>
    );
}
export default Header;
