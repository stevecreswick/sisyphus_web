import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as rocksActions from '../store/rocks/actions';
import * as rockSelectors from '../store/rocks/selectors';
import PropTypes from 'prop-types';
import Rocks from '../components/rocks/rocks';

class Tartarus extends Component {
  constructor(props) {
    super(props);
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
}

function mapStateToProps(state) {
  const [ activeRocks ] = rockSelectors.getRocks(state);

  return {
    activeRocks
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(rocksActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tartarus);
