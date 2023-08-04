// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h1 className="heading">
      <span className="style">P</span>roviding <span className="style">S</span>
      table & <span className="style">S</span>turdy{' '}
      <span className="style">S</span>ervices
    </h1>
    <p className="paragraph">
      Providing stable and sturdy solutions The best company to get you
      started.....
    </p>
    <Link to="/contact">
      <button className="button" type="button">
        GET IN TOUCH
      </button>
    </Link>
  </div>
)

export default Home
