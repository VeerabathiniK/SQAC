// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <Link to="/">
        <img
          alt="wave"
          className="logo"
          src="https://res.cloudinary.com/dobt9633l/image/upload/v1691307521/2to7ypme_dtrn95.png"
        />
      </Link>
      <h1 className="title">
        <span className="s1">Amrutha</span> <br />
        <span className="s2">Systems Pvt Ltd</span>
      </h1>
    </div>

    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/services" className="route-link">
          Services
        </Link>
        <Link to="/contact" className="route-link">
          Contact us
        </Link>
        <Link to="/careers" className="route-link">
          Careers
        </Link>

        <Link to="/about" className="route-link">
          About us
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
