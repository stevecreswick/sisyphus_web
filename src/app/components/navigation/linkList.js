import React from 'react';
import NavLink from './navLink';

class LinkList extends React.Component {
  render() {
    return (
      <ul className="links">
        {this.props.links.map(link => (
          <NavLink key={link.path} name={link.name} path={link.path} />
        ))}
      </ul>
    );
  }
}

module.exports = LinkList;
