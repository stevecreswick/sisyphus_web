import React from 'react';
import ReactDOM from 'react-dom';
import stylesheets from '../stylesheets/application.scss';
import Navigation from './containers/navigation';

class Sisyphus extends React.Component {
  render() {
    const title = 'Sisyphus';

    return (
    <div>
      <Navigation appName={title} />
    </div>
    );
  }
}

ReactDOM.render(
  <Sisyphus />,
  document.getElementById('sisyphus')
);
