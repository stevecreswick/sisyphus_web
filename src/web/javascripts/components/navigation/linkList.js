import React from 'react';
import Link from './link';

class LinkList extends React.Component {
  render() {
    return (
      <div className="links">
        <ul>
          {this.props.links.map(link => (
            <Link key={link.path} name={link.name} path={link.path} />
          ))}
        </ul>
      </div>
    );
  }
}

module.exports = LinkList;
