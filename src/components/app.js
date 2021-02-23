import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar'

// import pages
import Home from '../pages/home'
import About from '../pages/about'
import Brewery from '../pages/brewery'
import Error from '../pages/error'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/brewery/:id">
          <Brewery />
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
