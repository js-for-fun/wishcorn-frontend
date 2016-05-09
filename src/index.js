import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import CornComponent from './components/CornComponent';

import { Router, Route, browserHistory } from 'react-router';



// Render the main component into the dom
ReactDOM.render(
    (<Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="corn" component={CornComponent}/>
          {/*<Route path="users" component={Users}>
            <Route path="/user/:userId" component={User}/>
          </Route>
          <Route path="*" component={NoMatch}/>*/}
        </Route>
    </Router>),
    document.getElementById('app')
);
