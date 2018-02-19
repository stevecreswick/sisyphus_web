import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as rocksActions from '../store/rocks/actions';
import * as rocksSelectors from '../store/rocks/reducer';

import ListView from '../components/grids/ListView';
import ListRow from '../components/grids/ListRow';

class Tartarus extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(rocksActions.fetchRocks());
  }

  render() {
    if (!this.props.rocksByName) return this.renderLoading();
    return (
      <div className="rocks-screen">
        <ListView
          rowsIdArray={this.props.rocksNameArray}
          rowsById={this.props.rocksByName}
          renderRow={this.renderRow}
        />
      </div>
    )
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    )
  }

  renderRow(rockName, rock ) {
    return(
      <ListRow
        className="rock-row"
        rowId={rockName}>
        <h3>
          {rock.name}
        </h3>
        <p>{rock.message}</p>
      </ListRow>
    )
  }
}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  const [ rocksByName, rocksNameArray ] = rocksSelectors.getRocks(state);

  return {
    rocksByName,
    rocksNameArray
  };
}

export default connect(mapStateToProps)(Tartarus);
