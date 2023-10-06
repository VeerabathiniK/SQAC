import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Blogs from './components/Blogs'
import Services from './components/Services'
import Contact from './components/Contact'

import About from './components/About'
import Careers from './components/Careers'
import Training from './components/Training'
import Application from './components/Application'
import Mobile from './components/Mobile'
import Cloud from './components/Cloud'

import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="main">
      <Header />

      <div className="sub-app-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/training" component={Training} />
          <Route exact path="/application" component={Application} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/cloud" component={Cloud} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
