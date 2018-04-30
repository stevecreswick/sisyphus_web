import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as rocksActions from '../store/rocks/actions';
import * as rockSelectors from '../store/rocks/selectors';
import PropTypes from 'prop-types';
import Rock from '../components/Rock';
import ResourceList from '../components/ResourceList';
import Layout from '../components/Layout';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  middle: {
    width: 'calc(100% - 320px)',
    backgroundColor: 'cornflowerblue'
  },
  leftRail: {
    width: '320px',
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
    if (!this.props.rocks) return this.renderLoading();
    return (
      <Layout>
        <div className={css(styles.layout)}>
          <div className={css(styles.leftRail)}>
            <ResourceList
              resources={this.props.rocks.resourceList}
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
  const [ rocks ] = rockSelectors.getRocks(state);

  return {
    rocks
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(rocksActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tartarus);
