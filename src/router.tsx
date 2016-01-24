import React = require('react');

import { App } from './views/app';
import { About } from './views/about';

import { createMemoryHistory, IndexRoute, Route, Router } from 'react-router';

export class AppRouter extends React.Component<{}, {}> {
  public render() {
    return (
      <Router history={createMemoryHistory}>
        <Route path="" component={App}>
          <IndexRoute component={About} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    );
  }
}
