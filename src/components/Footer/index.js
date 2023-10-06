import './index.css'

import {Link} from 'react-router-dom'

const Footer = () => (
  <div className="last-footer">
    <div className="footer-container">
      <div className="about">
        <Link to="/about" className="l">
          <h1 className="heading-about">About Us</h1>
        </Link>
        <li className="list">Company partners</li>
        <li className="list">Awards</li>
        <li className="list">Board of Directors</li>
        <li className="list">Leadership Team</li>
        <li className="list">Company partners</li>
      </div>
      <div className="about2">
        <h1 className="heading-about-2">NewsRoom</h1>
        <li className="list">Media coverage</li>
        <li className="list">Events</li>
      </div>
      <div className="about2">
        <Link to="/careers" className="l">
          <h1 className="heading-about">Careers</h1>
        </Link>
        <li className="list"> Web Developer</li>
        <li className="list">Software Trainee</li>
        <li className="list">Computer Application Trainee</li>
        <li className="list">Information Security Analyst</li>
        <li className="list">Network Analyst</li>
      </div>
      <div className="about2">
        <h1 className="heading-about">Insights</h1>

        <li className="list"> Success Stories</li>
        <li className="list">Blogs</li>
        <li className="list">Downloads</li>
      </div>
    </div>
    <h1 className="follow">Follow us</h1>
    <div className="symbol-container">
      <a href="https://www.linkedin.com/company/amrutha-systems-pvt-ltd/">
        <div className="linked">
          <img
            src="https://res.cloudinary.com/dobt9633l/image/upload/v1694443613/linkedin-removebg-preview_bvduzb.png"
            className="linked-in"
            alt="linked-img"
          />
        </div>
      </a>
      <a href="https://www.facebook.com/AmruthaSystemsPvtLtd">
        <div className="facebook">
          <img
            src="https://res.cloudinary.com/dobt9633l/image/upload/v1694443406/facebook-removebg-preview_vsedbo.png"
            className="facebook"
            alt="linked-img"
          />
        </div>
      </a>
      <a href="https://twitter.com/AmruthaSys123">
        <div className="instagram">
          <img
            src="https://res.cloudinary.com/dobt9633l/image/upload/v1694445083/twitter2-removebg-preview_oc6vyl.png"
            className="instagram"
            alt="linked-img"
          />
        </div>
      </a>
      <a href="https://www.youtube.com/@AmruthaSystems">
        <div className="youTube">
          <img
            src="https://res.cloudinary.com/dobt9633l/image/upload/v1694540347/youtube-removebg-preview_isfdlu.png"
            className="instagram"
            alt="linked-img"
          />
        </div>
      </a>
    </div>
  </div>
)
export default Footer
