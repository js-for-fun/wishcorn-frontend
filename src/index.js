import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import CornListComponent from './components/CornListComponent';
import ShowComponent from './components/ShowComponent';

import { Router, Route, browserHistory } from 'react-router';



// Render the main component into the dom
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="list" component={CornListComponent}/>
          <Route path="show" component={ShowComponent}/>
          {/*<Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
          </Route>
          <Route path="*" component={NoMatch}/>*/}
        </Route>
    </Router>),
    document.getElementById('app')
);
