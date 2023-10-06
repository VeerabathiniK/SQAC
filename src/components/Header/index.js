// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="main-container-header">
    <nav className="header-container">
      <div className="logo-and-title-container">
        <Link to="/">
          <img
            alt="wave"
            className="logo"
            src="https://res.cloudinary.com/dobt9633l/image/upload/v1691307521/2to7ypme_dtrn95.png"
          />
        </Link>
        <Link to="/" className="title-link">
          <h1 className="title">
            <span className="s1">Amrutha</span> <br />
            <span className="s2">Systems Pvt Ltd</span>
          </h1>
        </Link>
      </div>

      <ul className="nav-items-list">
        <li className="link-item">
          <Link to="/services" className="route-link">
            Services
          </Link>
          <Link to="/contact" className="route-link-c">
            Contact us
          </Link>
          <Link to="/careers" className="route-link">
            Careers
          </Link>

          <Link to="/about" className="route-link-lg">
            About
          </Link>
          <Link to="/about" className="route-link-ma">
            About
          </Link>
          <Link to="/blogs" className="route-link-lg">
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
