class Header extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h3>{this.props.subTitle}</h3>
    </div>
    );
  }
}

module.exports = Header;
