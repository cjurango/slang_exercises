import 'mobx-remotedev';
import React, { Component } from 'react'
import { render } from 'react-dom';
import { observable, action } from 'mobx';
import { observer, Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Router, Route, Link, browserHistory } from 'react-router';

import AppIndex from './container/index/index';
import { StoresList } from './stores/index.store';  

@observer
export default class App extends Component<{},{}> {
  render() {
    return (
      <div>
        <Provider {...StoresList}>
          <Router history={browserHistory}>
            <Route path="/" component={AppIndex} />
          </Router>
        </Provider>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </div>
    );
  }
};