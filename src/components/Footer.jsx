
import "../scss/layout/Footer.scss";
import logofoot from "../images/2.png";

function Footer() {
    return (
        <footer className="footer" >

        <section className="rrss icons">

        <a href="https://www.tiktok.com/@all.in.crew_" target="_blank">
            <i className="fa-brands fa-tiktok"></i>
        </a>

        <a href="https://www.instagram.com/allin_crew_" target="_blank">
            <i className="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.youtube.com/@All.inCrewbcn" target="_blank">
            <i className="fa-brands fa-youtube"></i>
        </a>
    </section>

    <img className="footer__logo" src={logofoot} alt="logo" />

        <section class="copiright icons">
         <i className="fa-solid fa-copyright"></i>
         <a className="copy" href="index.html">PURR Skills, 2024</a>
         <i className="fa-solid fa-cat"></i>
        </section>
       
        </footer    >   
    );
}

export default Footer;