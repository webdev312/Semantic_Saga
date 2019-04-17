import React from 'react'
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import { CustomMessage, DataBlocks, DataBlocksStart, Com_00_01 } from 'components'
import 'styling/semantic.less'


const App = () => (
  <Router>
    <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
    <Route path="/home" component={DataBlocksStart}>
    </Route>
  </Router>
)

export default App
