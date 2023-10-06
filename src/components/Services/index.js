// Write your JS code here

import {Link} from 'react-router-dom'

import Footer from '../Footer'

import './index.css'

const Services = () => (
  <div>
    <div className="about-container">
      <h1 className="about-heading">Our Services</h1>

      <div className="card-container">
        <Link to="/application" className="nav">
          <div className="card1">
            <h1 className="h1">Application Development</h1>
          </div>
        </Link>
        <Link to="/training" className="nav">
          <div className="card2">
            <h1 className="h1">Software Training</h1>
          </div>
        </Link>
        <Link to="/mobile" className="nav">
          <div className="card3">
            <h1 className="h1">Mobile Services</h1>
          </div>
        </Link>
      </div>

      <div className="second">
        <Link to="/cloud" className="nav">
          <div className="card4">
            <h1 className="h1">Cloud</h1>
          </div>
        </Link>
        <Link to="/contact">
          <div className="card5">
            <h1 className="h1">Support</h1>
          </div>
        </Link>
      </div>
    </div>
    <Footer />
  </div>
)

export default Services
