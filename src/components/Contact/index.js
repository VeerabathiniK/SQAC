// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Contact = () => (
  <>
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT US</h1>
    </div>
    <div className="contact-container2">
      <img
        src="https://tricksladder.com/wp-content/uploads/2016/10/write-to-us.png"
        alt="pic2"
        className="contact-image"
      />
      <div className="last">
        <h1 className="write">Write to Us</h1>
        <p className="para">
          Amrutha systems has an open, tolerant, merit-driven, and transparent
          work culture, where we encourage ideas for improvement from all
          quarters and have even created a democratic space for dissent.
        </p>
      </div>
    </div>
    <div>
      <h1 className="final">Contact Us</h1>
      <p className="para-final">
        Please let us know dont hesitate to contact us via this form or email,
        and we will reply as soon as possible.
      </p>
    </div>
    <div className="sheet">
      <input className="name" placeholder="Enter Your name" type="text" />
      <input
        className="name"
        placeholder="Enter Your Password"
        type="password"
      />
      <input
        className="name"
        placeholder="Enter Your mobile no"
        type="number"
      />
      <textarea cols="40" rows="10" className="text-area">
        Write Your Message
      </textarea>
      <Link to="/">
        <button className="btn" type="button">
          Submit
        </button>
      </Link>
    </div>
    <h1 className="address-heading">Head Office :</h1>
    <p className="address-paragraph">
      Manjeera Trinity Corp, Survey No: 1050, Plot No. S2 JNTU, Hitech City Rd,
      8th floor, Cabin 820, Kukatpally, Hyderabad - 500072.
    </p>
    <a href="mailto: info@amruthasys.com" className="mail">
      info@amruthasys.com
    </a>
    <p className="address-paragraph2">Send us your query anytime!</p>
  </>
)

export default Contact
