import React from 'react';
import Logo from './../components/navigation/logo';
import LinkList from './../components/navigation/linkList';

const links = [
  {
    'name': 'Link',
    'path': '/mountains',
  },
  {
    'name': 'Cork Board',
    'path': '/cork-board',
  },
  {
    'name': 'User',
    'path': '/user',
  }
];

class Navigation extends React.Component {
  render() {
    return (
    <div className="navigation">
      <Logo appName={this.props.appName} />
      <LinkList links={links}/>
    </div>
    );
  }
}

export default Navigation;
