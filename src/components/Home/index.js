// Write your JS code here
import {Link} from 'react-router-dom'

import Data from '../Data'
import Footer from '../Footer'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Data />
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
          <div className="image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCi9XQNxIJPmTSCPpbeZBTLslmMjEZ3NCawfj2SC1jytRSa0L&s"
              className="image1"
              alt="pic"
            />
            <div className="image-overlay">
              <p className="n1">Application Development</p>
            </div>
          </div>
        </Link>
        <Link to="/training" className="link">
          <div className="S2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmSv4f1DXAFYyMYzCTpC3NZvb9asmGj4meh4bgP3XR9PgU5WK&s"
              className="image2"
              alt="pic"
            />
            <p className="n2">Software Training</p>
          </div>
        </Link>
        <Link to="/mobile" className="link">
          <div className="S3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiyxt2vXuY_R77vhjkMPtNUqB6_JeTT0JBeZg-8uIEdE_PfxXD&s"
              className="image3"
              alt="pic"
            />
            <p className="n3">Mobile Services</p>
          </div>
        </Link>
        <Link to="/cloud" className="link">
          <div className="S4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKkmQLycbJroVDkkkxAi8iyjdNfMvCpazmOnkZWcDLv_K6YE&s"
              className="image4"
              alt="pic"
            />
            <p className="n4">Cloud</p>
          </div>
        </Link>
        <Link to="/careers" className="link">
          <div className="S5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5IqyS0i9XcgSdIi9MRi5PfJnY4s7TEo_m5HEh6qRF9ohVHZY&s"
              className="image5"
              alt="pic"
            />
            <p className="n5">Support</p>
          </div>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
)

export default Home
