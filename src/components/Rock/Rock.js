import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import EditableText from '../EditableText';
import ResourceForm from '../ResourceForm'

export default class Rock extends Component {
  static propTypes = {
    resource: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
    // editRock, completeRock, deleteRock
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  render() {
    const { resource, actions } = this.props;

    const buttonClass = classnames({
      'active': resource.active
    });

    let element = (
      <div className="rock">
        <div className="row">
          <button
            className={buttonClass}
            onClick={() => actions.completeRock(resource)}
          />
        </div>

        <div className="row">
          <EditableText
            identifier={resource.id}
            concern={resource.name}
            onSave={actions.editRock}>
          </EditableText>
        </div>

        <div className="row">
          Add +
        </div>

        <div className="row">
          <ResourceForm
            identifier={resource.name + resource.id}
            parentId={resource.id}
            onSubmit={actions.addRock}>
          </ResourceForm>
        </div>

        <div className="row">
          Resource List
        </div>
      </div>
    );

    return (
      <li className={classnames({
        completed: !resource.active
      })}>
        {element}
      </li>
    );
  }
}
