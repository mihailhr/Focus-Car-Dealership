import Home from "../Home/Home";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><img src="/images/Focus.png" alt="" /></Link></li>
        <li><Link to="/offers">Current offers</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li id="specialLi"><Link to="/contacts">Contacts us</Link></li>
        
      </ul>
    </nav>
  );
}
