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

      <h1>Focus Car dealership 2024. All rights reserved.</h1>
      <ul>
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
          <a href="">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="" title="Coming soon">
            <i className="fa-solid fa-phone"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
