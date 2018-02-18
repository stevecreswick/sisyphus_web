import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import stylesheets from '../stylesheets/application.scss';
import Navigation from './containers/navigation';
import Mountains from './containers/mountains';
import Persephone from './containers/persephone';
import User from './containers/user';
import AddBoulder from './containers/addBoulder';
import NotFound from './components/notFound';

const links = [
  {
    'name': 'Add',
    'path': '/add',
  },
  {
    'name': 'Mountains',
    'path': '/mountains',
  },
  {
    'name': 'Persephone',
    'path': '/persephone',
  },
  {
    'name': 'User',
    'path': '/user',
  }
];

class Sisyphus extends React.Component {
  render() {
    const title = 'Sisyphus';

    return (
      <Router>
        <div>
          <Navigation links={links} appName={title} />

          <Route path='/add' component={ AddBoulder }/>
          <Route path='/mountains' component={ Mountains }/>
          <Route path='/persephone' component={ Persephone }/>
          <Route path='/user' component={ User }/>
          <Route path='*' component={ NotFound }/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Sisyphus />,
  document.getElementById('sisyphus')
);
