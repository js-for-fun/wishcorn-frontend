'use strict';

import React from 'react';

import {Button} from 'react-bootstrap';

require('styles/Show.scss');

class ShowComponent extends React.Component {
    yesHandler() {
        console.log('Yes');
    }
    noHandler() {
        console.log('No');
    }
    render() {
        return (
            <div className="show-component">
                <div className="container">
                    <img src="https://i.ytimg.com/vi/FJEKF3iuvP8/hqdefault.jpg"/>
                    <Button className="col-md-6" onClick={this.yesHandler}>YES</Button>
                    <Button className="col-md-6" onClick={this.noHandler}>NO</Button>
                </div>
            </div>
        );
    }
}

ShowComponent.displayName = 'ShowComponent';

// Uncomment properties you need
// ShowComponent.propTypes = {};
// ShowComponent.defaultProps = {};

export default ShowComponent;
