import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {FrontPage, AboutPage, VimPage} from './components'

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
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/vim' component={VimPage} />
        <Route exact path='/' component={FrontPage} />
      </Switch>
      </div>
    )
  }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
