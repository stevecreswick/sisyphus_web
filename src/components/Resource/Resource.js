import React from 'react'
import PropTypes from 'prop-types'

class Resource extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    resource: PropTypes.object.isRequired,
    component: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { resource, actions, component } = this.props

    return (
      React.createElement( component, {
        actions: actions,
        resource: resource
      }, null )
    )
  }
}

module.exports = Resource