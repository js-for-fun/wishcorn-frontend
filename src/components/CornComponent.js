'use strict';

import React from 'react';

import { Button } from 'react-bootstrap';

require('styles/Corn.scss');

class CornComponent extends React.Component {
  render() {
    return (
      <div className="corn-component">
          <Button>YES</Button>
          <Button>NO</Button>
      </div>
    );
  }
  onYes() {

  }
}



CornComponent.displayName = 'CornComponent';

// Uncomment properties you need
// CornComponent.propTypes = {};
// CornComponent.defaultProps = {};

export default CornComponent;
