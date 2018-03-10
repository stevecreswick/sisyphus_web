import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rock from './rock';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/rockFilters';

import RockForm from './addRockForm';

const ROCK_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: rock => rock.active,
  [SHOW_COMPLETED]: rock => !rock.active
}

export default class RockSection extends Component {
  static propTypes = {
    rocks: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  render() {
    const { rocks, actions } = this.props;
    const { filter } = this.state;
    const filteredRocks = rocks.filter(ROCK_FILTERS[ filter ]);
    // const completedCount = rocks.reduce((count, rock) =>
    //   !rock.active ? count + 1 : count,
    //   0
    // );

    return (
      <section className="rocks">
        <ul className="rock-list">
          {filteredRocks.map( rock =>
            <Rock key={rock.id} rock={ rock } {...actions} />
          )}
        </ul>

        <RockForm onSubmit={actions.addRock} />
      </section>
    )
  }
}
