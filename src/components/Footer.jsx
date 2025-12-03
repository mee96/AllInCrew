import "../scss/layout/Footer.scss";
import logofoot from "../images/2.png";

function Footer() {
    return (
        <footer className="footer" >

            <section className="rrss icons">
                
                <a href="https://www.tiktok.com/@all.in.crew_" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-tiktok"></i>
                </a>

                <a href="https://www.instagram.com/allin_crew_" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://www.youtube.com/@All.inCrewbcn" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                </a>
            </section>

            <img className="footerlogo" src={logofoot} alt="All in Crew Logo" />

            
            <section className="copiright icons">
               <i className="fa-solid fa-copyright"></i>
               <a className="copy" href="index.html"> All in Crew, 2024 </a>
               <i className="fa-regular fa-face-smile"></i>
            </section>
        </footer> 
    );
}

export default Footer;