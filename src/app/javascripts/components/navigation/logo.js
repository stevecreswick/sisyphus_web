import React from 'react';
import logo from '../../../assets/logo.jpg';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-and-name">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="app-name">
          <h1>
            {this.props.appName}
          </h1>
        </div>
      </div>
    );
  }
}

module.exports = Logo;
