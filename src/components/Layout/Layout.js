import React from 'react'
// import PropTypes from 'prop-types'

export default class Layout extends React.Component {
  // static propTypes = {
  //   resource: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  //   // editRock: PropTypes.func.isRequired,
  //   // deleteRock: PropTypes.func.isRequired,
  //   // completeRock: PropTypes.func.isRequired
  // }

  render() {
    return(
      <div>
        Layout
        {this.props.children}
      </div>
    )
  }
}