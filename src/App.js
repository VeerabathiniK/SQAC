import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
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
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)
export default App
