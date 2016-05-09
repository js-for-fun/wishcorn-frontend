'use strict';

import React from 'react';

import {Button} from 'react-bootstrap';


require('styles/Show.scss');

class ShowComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            corn: {}
        };
    }

    yesHandler() {
        this.increment();
        this.getRandom();
    }
    noHandler() {
        this.getRandom();
    }

    getRandom() {
        fetch('/corns/random', {credentials: 'same-origin'}).then((res) => {
            return res.json();
        }).then((json) => {
            json.img = json.img.replace('{index}', 5);

            this.setState({corn: json});
        });
    }

    increment() {
        fetch('/corns/increment', {
            method: 'POST',
            body: JSON.stringify({ category: this.state.corn.category }),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            },
            credentials: 'same-origin'
        });
    }

    componentWillMount() {
        this.getRandom();
    }
    render() {
        return (
            <div className="show-component">
                <div className="container">
                    <h1>{this.state.corn.name}</h1>
                    <img src={this.state.corn.img}/>
                    <div dangerouslySetInnerHTML={{
                        __html: this.state.corn.iframe
                    }}></div>
                    <Button className="col-md-6" onClick={this.yesHandler.bind(this)}>YES</Button>
                    <Button className="col-md-6" onClick={this.noHandler.bind(this)}>NO</Button>
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
