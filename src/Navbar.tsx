import { useState } from "react"; // Dodajemy import useState
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/Logo_White_Graphic_PNG.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Stan otwarcia menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="https://loosegoosestudios.com">
          <img src={logo} alt="Logo" className="navbar-logo" />
          </Link>
        </div>

        {/* Przycisk Hamburgera (widoczny tylko na mobile) */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "bar bar1 open" : "bar bar1"}></div>
          <div className={isOpen ? "bar bar2 open" : "bar bar2"}></div>
          <div className={isOpen ? "bar bar3 open" : "bar bar3"}></div>
        </div>

        {/* Menu z linkami */}
        <div className={`navbar-center ${isOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => setIsOpen(false)}><Link to="/">HOME</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/games">OUR GAMES</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/contact">CONTACT</Link></li>
            <li onClick={() => setIsOpen(false)}><Link to="/Blog">FLIGHT LOG</Link></li>
          </ul>
        </div>

        <div className="navbar-right">
          {/* Tu było puste w Twoim kodzie, zostawiam puste */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;