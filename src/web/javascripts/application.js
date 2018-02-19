// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import store from './store';

// Stylesheets
import stylesheets from '../stylesheets/application.scss';

// Components
// Shared
import Navigation from './containers/navigation';

// Pages

// TODO: Current Project
// Seeing Tasks and Task Management
import Tartarus from './containers/tartarus';

// Future
import Welcome from './containers/welcome';
import Mountains from './containers/mountains';
import Persephone from './containers/persephone';
import User from './containers/user';
import NotFound from './containers/notFound';

const links = [
  {
    'name': 'Home',
    'path': '/',
  },
  {
    'name': 'Tartarus',
    'path': '/tartarus',
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
          <div className="current-page">
            <Navigation links={links} appName={title} />

            <Switch>
              <Route exact path='/' component={ Welcome }/>
              <Route path='/tartarus' component={ Tartarus }/>
              <Route path='/mountains' component={ Mountains }/>
              <Route path='/persephone' component={ Persephone }/>
              <Route path='/user' component={ User }/>

              {/* TODO: This should only trigger if there is NO match.  */}
              <Route component={ NotFound }/>
            </Switch>
          </div>
        </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Sisyphus />
  </Provider>,
  document.getElementById('sisyphus')
);
