import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Intro from './intro'
import Guide from './guide'
import Reference from './reference';

import Header from './header'
const routing = (
  <Router>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/intro" component={Intro} />
      <Route path="/guide" component={Guide} />
      <Route path="/reference" component={Reference} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))