import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {FrontPage, AboutPage} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
  }

  render() {

    return (
      <div>
      <Switch>
        <Route path='/about' component={AboutPage} />
        <Route path='/' component={FrontPage} />
      </Switch>
      </div>
    )
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
