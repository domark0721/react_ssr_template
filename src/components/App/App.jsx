import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
// import PropTypes from 'prop-types'

import Header from '../../containers/Header/Header'
// import './App.scss'

class App extends Component {
  componentDidMount() {
    console.log('hi')
  }

  render() {
    return (
      <div className="app-wrap">
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>home</div>} />
          <Route exact path="/catogory" component={() => <div>catogroy</div>} />
          <Route exact path="/live" component={() => <div>live</div>} />
        </Switch>
      </div>
    )
  }
}
App.defaultProps = {
}

App.propTypes = {
}

export default App
