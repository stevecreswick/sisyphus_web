import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'

class EditableText extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    identifier: PropTypes.number.isRequired,
    concern: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  componentDidMount() {
    // console.log( 'Component Did Mount' )
    // console.log( this.props.identifier )
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (value) => {
    const { identifier, concern, onSave } = this.props

    if ( value !== concern ) {
      onSave( identifier, value )
    }

    this.setState({ editing: false })
  }

  render() {
    const { concern, onSave } = this.props

    return (
      <div onDoubleClick={this.handleDoubleClick}>
        { 
          this.state.editing ? (
            <div>
              <TextInput 
                text={concern}
                action={this.handleSave}>
              </TextInput>
            </div> 
          ) : (
            <div>
              {concern}
            </div>
          )
        }
      </div>
    );
  }
}

module.exports = EditableText;