import { useState } from 'react'; // 👈 PAS 1: Importem useState
import "../scss/layout/Header.scss";
import logoPortf from "../images/1.png";

function Header() {
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    
    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    
    const listClassName = `header__list ${menuIsOpen ? 'is-open' : ''}`;

    return (
        <header className="header">
            <img className="header__logo" src={logoPortf} alt="logo" />
            <h1>AllinCrew tus patronas </h1>
            
            
            <button 
                className="header__burger-btn" 
                onClick={handleToggleMenu}
                aria-expanded={menuIsOpen}
                aria-controls="main-nav-list" 
            >
                
                {menuIsOpen 
                    ? <i className="fa-solid fa-xmark"></i> 
                    : <i className="fa-solid fa-bars"></i> 
                }
            </button>
            
            
            <ul id="main-nav-list" className={listClassName}>
                <li onClick={handleToggleMenu}>Quienes somos</li>
                <li onClick={handleToggleMenu}>Covers</li>
                <li onClick={handleToggleMenu}>Fotos</li>
                <li onClick={handleToggleMenu}>Blogs</li>
                <li onClick={handleToggleMenu}>Contacte</li> {/* Afegim contacte! */}
            </ul>
        </header>
    );
}

export default Header;