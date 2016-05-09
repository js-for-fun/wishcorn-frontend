'use strict';

import React from 'react';

require('styles/Corn.scss');

class CornComponent extends React.Component {
  render() {
    return (
      <div className="corn-component">
          Please edit src/components/CornComponent.js to update this component!
      </div>
    );
  }
}

CornComponent.displayName = 'CornComponent';

// Uncomment properties you need
// CornComponent.propTypes = {};
// CornComponent.defaultProps = {};

export default CornComponent;
