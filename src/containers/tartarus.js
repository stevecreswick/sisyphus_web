import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as rocksActions from '../store/rocks/actions';
import * as rockSelectors from '../store/rocks/selectors';
import PropTypes from 'prop-types';
import Rocks from '../components/rocks/rocks';
import Rock from '../components/rocks/rock';
import ResourceList from '../components/ResourceList';
import Layout from '../components/Layout';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  middle: {
    width: 'calc(100% - 300px)',
    backgroundColor: 'cornflowerblue'
  },
  leftRail: {
    width: '300px',
    backgroundColor: 'teal'
  }
});

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
      <Layout>
        <div className={css(styles.layout)}>
          <div className={css(styles.leftRail)}>
            <ResourceList
              resources={this.props.activeRocks}
              actions={this.props.actions}
              component={Rock}>
            </ResourceList>
          </div>
          <div className={css(styles.middle)}>
            Working Space
        </div>
        </div>
      </Layout>
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
