import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as rocksActions from '../store/rocks/actions';
import * as rocksSelectors from '../store/rocks/reducer';

import Rocks from '../components/rocks/rocks';

class Tartarus extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.actions.fetchRocks();
  }

  render() {
    if (!this.props.activeRocks) return this.renderLoading();
    return (
      <div className="rocks-screen">
        <Rocks rocks={this.props.activeRocks}
               actions={this.props.actions}
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

function mapStateToProps(state) {
  const [ activeRocks, activeRocksArray ] = rocksSelectors.getRocks(state);

  return {
    activeRocks,
    activeRocksArray
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(rocksActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tartarus);
