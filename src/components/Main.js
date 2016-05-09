require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { HeaderComponent as Header }  from './HeaderComponent';

// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
          <Header/>
          {this.props.children}
        {/*<img src={yeomanImage} alt="Yeoman Generator" />*/}
        {/*<div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
