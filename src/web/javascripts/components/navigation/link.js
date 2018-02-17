import React from 'react';

class Link extends React.Component {
  render() {
    return (
      <li className="link">
        <a href={this.props.path}>
          {this.props.name}
        </a>
      </li>
    );
  }
}

module.exports = Link;
