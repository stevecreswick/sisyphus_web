import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RockTextInput from './rockTextInput'

export default class Rock extends Component {
  static propTypes = {
    rock: PropTypes.object.isRequired,
    editRock: PropTypes.func.isRequired,
    deleteRock: PropTypes.func.isRequired,
    completeRock: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteRock(id);
    }
    else {
      this.props.editRock(id, text)
    }

    this.setState({ editing: false })
  }

  render() {
    const { rock, completeRock, deleteRock } = this.props;

    let element;

    if (this.state.editing) {
      element = (
        <RockTextInput
          text={rock.message}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(rock.id, text)}
        />
      );
    }
    else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={!rock.active}
            onChange={ () => completeRock(rock) }
          />
          <label onDoubleClick={this.handleDoubleClick}>
            {rock.name}
          </label>
          <button
            className="destroy"
            onClick={() => deleteRock( rock.id )}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: !rock.active,
          editing: this.state.editing
        })}>

        {element}
      </li>
    );
  }
}
