// Write your JS code here

import {Link} from 'react-router-dom'
import './index.css'

const Contact = () => (
  <div className="contact-container">
    <h1 className="contact-heading">CONTACT US</h1>
    <div className="username-container">
      <input className="user-input" placeholder="Enter Your Name" type="text" />
    </div>
    <div className="password-container">
      <input
        className="user-input"
        placeholder="Enter Your Phone no"
        type="number"
      />
    </div>
    <div className="password-container">
      <input
        className="user-input"
        placeholder="Enter Your Password"
        type="password"
      />
    </div>
    <div className="text-area">
      <textarea cols="40" rows="10">
        Write a Message To Us
      </textarea>
    </div>
    <Link to="/">
      <button type="button" className="submit-button">
        Submit
      </button>
    </Link>
    <footer className="footer">
      <p className="head">Head Office :</p>
      <p className="address">
        Manjeera Trinity Corp, Survey No: 1050, Plot No. S2 JNTU, Hitech City
        Rd, 8th floor, Cabin 820, Kukatpally, Hyderabad - 500072.
      </p>
      <p className="head">
        <a href="mailto:info@amruthasys.com" className="head">
          info@amruthasys.com
        </a>
      </p>
      <p className="address">Send us your query anytime!</p>
    </footer>
  </div>
)

export default Contact
