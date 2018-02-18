import React from 'react';
import { Link } from 'react-router-dom';

class NavLink extends React.Component {
  render() {
    return (
      <li className="link">
        <Link to={this.props.path}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}

module.exports = NavLink;
