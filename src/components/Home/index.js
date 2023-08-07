// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="image-container-home">
      <h1 className="heading">Providing Stable & Sturdy Services</h1>
      <p className="paragraph">
        Providing stable and sturdy solutions The best company to get you
        started
      </p>
      <Link to="/contact">
        <button className="button" type="button">
          Get In Touch
        </button>
      </Link>
    </div>
    <h1 className="heading2">
      The better information about the virtual world, The complete software
      solution
    </h1>
    <div className="content-container">
      <h1 className="offers">Key Offerings</h1>
      <p className="offer">
        We help businesses to transform their digital journeys with our superior
        strategy, design, and engineering services
      </p>
      <div className="clip-container">
        <Link to="/application" className="link">
          <div className="s1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCi9XQNxIJPmTSCPpbeZBTLslmMjEZ3NCawfj2SC1jytRSa0L&s"
              className="image1"
              alt="pic"
            />
            <p className="n1">Application Development</p>
          </div>
        </Link>
        <Link to="/training" className="link">
          <div className="s2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmSv4f1DXAFYyMYzCTpC3NZvb9asmGj4meh4bgP3XR9PgU5WK&s"
              className="image2"
              alt="pic"
            />
            <p className="n2">Software Training</p>
          </div>
        </Link>
        <Link to="/mobile" className="link">
          <div className="s3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyxt2vXuY_R77vhjkMPtNUqB6_JeTT0JBeZg-8uIEdE_PfxXD&s"
              className="image3"
              alt="pic"
            />
            <p className="n3">Mobile Services</p>
          </div>
        </Link>
        <Link to="/cloud" className="link">
          <div className="s4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKkmQLycbJroVDkkkxAi8iyjdNfMvCpazmOnkZWcDLv_K6YE&s"
              className="image4"
              alt="pic"
            />
            <p className="n4">Cloud</p>
          </div>
        </Link>
        <Link to="/careers" className="link">
          <div className="s5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5IqyS0i9XcgSdIi9MRi5PfJnY4s7TEo_m5HEh6qRF9ohVHZY&s"
              className="image4"
              alt="pic"
            />
            <p className="n5">Support</p>
          </div>
        </Link>
      </div>
      <Link to="/contact">
        <button className="button2" type="button">
          Contact Us
        </button>
      </Link>
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
    </div>
  </div>
)

export default Home
