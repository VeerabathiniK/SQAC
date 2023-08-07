import {Link} from 'react-router-dom'

import './index.css'

const Careers = () => (
  <div className="career-container">
    <div className="image-container">
      <h1 className="heading-career">
        Your
        <br /> Journey is a<br /> Click away...
      </h1>
    </div>
    <div className="image-container2-career">
      <div className="career-content-join">
        <h1 className="join-heading">Join us to be a part of our mission.</h1>
        <p className="join-paragraph">
          We are currently hiring for these roles-
        </p>
      </div>
      <div className="role-container">
        <p className="roles">1.Web Developer</p>
        <p className="roles">2.Software Trainee</p>
        <p className="roles">3.Computer Application Trainee</p>
        <p className="roles">4.Information Security Analyst</p>
        <p className="roles">5.Network Analyst</p>
      </div>
    </div>
    <div className="contact-career-container">
      <h1 className="hf">If you think you are fit for any of these roles,</h1>
      <p className="pf">Reach out to us!</p>
      <Link to="/contact">
        <button className="last-button" type="button">
          Contact Us
        </button>
      </Link>
    </div>
  </div>
)
export default Careers
