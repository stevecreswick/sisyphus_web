import React from 'react';
import Logo from './../components/navigation/logo';
import LinkList from './../components/navigation/linkList';

class Header extends React.Component {
  render() {
    return (
    <div className="navigation">
      <Logo appName={this.props.appName} />
      <LinkList links={this.props.links}/>
    </div>
    );
  }
}

export default Header;
