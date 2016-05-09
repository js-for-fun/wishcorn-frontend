require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HeaderComponent  from './HeaderComponent';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
          <HeaderComponent/>
          {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
