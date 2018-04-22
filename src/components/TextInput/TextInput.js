import React from 'react'
import PropTypes from 'prop-types'

class TextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }

  state = {
    submitting: false,
    value: this.props.text
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSave( event ) {
    event.preventDefault()
    this.setState({ submitting: true })

    const { action } = this.props

    action(this.state.value)
  }

  render() {
    const { text, action } = this.props

    return (
      <div>
        <form onSubmit={(event) => this.handleSave(event) }>
          <input 
            defaultValue={this.state.value}
            onChange={(event) => this.handleChange(event)}>
          </input>
        </form>
      </div>
    )
  }
}

module.exports = TextInput