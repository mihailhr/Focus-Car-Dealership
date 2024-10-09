import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer>
      <section id="consultation">
        <p>
          Interested in buying a cheap car?
          <button>
            <Link to="/contacts">Book a free consultation</Link>
          </button>
        </p>
      </section>

      <h1 id="copyright">&copy; Focus Car dealership 2024. All rights reserved.</h1>
      <ul id="footerMenu">
      <li><Link to="/">Home page</Link></li>
        <li><Link to="/offers">Current offers</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li ><Link to="/contacts">Contacts us</Link></li>
      </ul>
      <ul id="icons">
        <li>
          <a href="" title="Coming soon">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="" title="Coming soon">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=focusdealership@gmail.com&su=Your%20Subject&body=Your%20message%20goes%20here" target="_blank"><i className="fa-regular fa-envelope"></i></a>
          
        </li>
        <li>
          
          <a href="tel:+35912345678" target="_blank"><i className="fa-solid fa-phone"></i></a>
         
        </li>
      </ul>
    </footer>
  );
}
