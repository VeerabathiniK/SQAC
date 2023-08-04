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
          src="https://www.logolynx.com/images/logolynx/8e/8e111925c8c0ca4a746278eeafc290c6.png"
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
        <Link className="route-link" to="/services">
          Services
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
