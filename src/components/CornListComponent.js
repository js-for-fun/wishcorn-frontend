'use strict';

import React from 'react';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

require('styles/Corn.scss');

class CornListComponent extends React.Component {
    render() {
        return (
            <div className="corn-component">
                <ListGroup>
                    <ListGroupItem>Item 1</ListGroupItem>
                    <ListGroupItem>Item 2</ListGroupItem>
                    <ListGroupItem>...</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
    onYes() {}
}

CornListComponent.displayName = 'CornListComponent';

// Uncomment properties you need
// CornComponent.propTypes = {};
// CornComponent.defaultProps = {};

export default CornListComponent;
