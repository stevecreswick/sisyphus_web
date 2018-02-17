import React from 'react';
import Link from './link';

class LinkList extends React.Component {
  render() {
    return (
      <ul className="links">
        {this.props.links.map(link => (
          <Link key={link.path} name={link.name} path={link.path} />
        ))}
      </ul>
    );
  }
}

module.exports = LinkList;
