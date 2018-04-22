import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import EditableText from '../EditableText';

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

  render() {
    const { rock, completeRock, editRock, deleteRock } = this.props;
    const buttonClass = classnames( {
      'active': rock.active
    } );

    let element = (
      <div className="rock">
        <div className="row">
          <button
            className={buttonClass}
            onClick={ () => completeRock(rock) }
          />
        </div>

        <div className="row">
          <EditableText
            identifier={rock.id}
            concern={rock.name}
            onSave={editRock}>
          </EditableText>
        </div>
      </div>
    );

    return (
      <li className={classnames({
        completed: !rock.active,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}
