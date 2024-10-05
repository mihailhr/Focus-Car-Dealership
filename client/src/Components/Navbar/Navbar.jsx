import Home from "../Home/Home";
import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  function displaySharedMenuForMobile(){
    const sharedMenu=document.getElementById("sharedMenu")
    const mobileMenu=document.getElementById("mobileMenu")
    const logo=document.getElementById("logoLi")

      sharedMenu.style.display="flex"
      mobileMenu.style.display="none"
      logo.style.display="none"
      

    
  }

  function hideSharedMenuForMobile(){
    const sharedMenu=document.getElementById("sharedMenu")
    const mobileMenu=document.getElementById("mobileMenu")
    const logo=document.getElementById("logoLi")
    sharedMenu.style.display="none"
    mobileMenu.style.display="flex"
    logo.style.display="block"
  }
  return (
    <nav>
      <ul id="mobileMenu">
        <li><Link to="/"><img src="/images/Focus.png" alt="" /></Link></li>
        <li><button onClick={displaySharedMenuForMobile}><i className="fa-solid fa-bars"></i></button></li>
      </ul>
      <ul id="sharedMenu">
        <li id="foldMenu"><button onClick={hideSharedMenuForMobile}><i className="fa-solid fa-x"></i></button></li>
        <li id="logoReplacement"><Link to="/">Home</Link></li>
        <li id="logoLi"><Link to="/"><img src="/images/Focus.png" alt="" /></Link></li>
        <li><Link to="/offers">Current offers</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li id="specialLi"><Link to="/contacts">Contacts us</Link></li>
        
      </ul>
    </nav>
  );
}
