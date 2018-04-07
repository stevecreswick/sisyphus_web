import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rock from './rock';
import RockForm from './addRockForm';

export default class RockSection extends Component {
  static propTypes = {
    rocks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  render() {
    const { rocks, actions } = this.props;

    return (
      <section className="rocks">
        <ul className="rock-list">
          {rocks.map( rock =>
            <Rock key={rock.id} rock={ rock } {...actions} />
          )}
        </ul>

        <RockForm onSubmit={actions.addRock} />
      </section>
    )
  }
}
