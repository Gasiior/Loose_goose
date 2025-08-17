import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./assets/Logo_White_Graphic_PNG.png"; // ścieżka do logo
import logoSteam from './assets/stram.png';
function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/games">OUR GAMES</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
          <li><Link to="/Blog">FLIGHT LOG</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
        <img src={logoSteam} alt="Logo" className="navbar-social" />
        <img src={logoSteam} alt="Logo" className="navbar-social" />
        </ul>
      </div>

      
    </nav>
  );
}

export default Navbar;