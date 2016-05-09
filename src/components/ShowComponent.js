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
        fetch('http://localhost:3000/corns/random', {
            credentials: 'same-origin',
            mode: 'no-cors'
        })
        .then((res) => {
            return res.json();
        }).then((json) => {
            json.previewImages = [];

            for (let i = 1; i <= json.thumbsCount; ++i) {
                json.previewImages.push(json.img.replace('{index}', i));
            }

            json.previewImage = json.previewImages[0];

            this.setState({corn: json});

            this.slideImages();
        });
    }

    slideImages() {
        if (this.interval)
            clearInterval(this.interval);
        let num = 0;
        this.interval = window.setInterval(() => {
            let index = (num % this.state.corn.thumbsCount) + 1;
            this.state.corn.previewImage = this.state.corn.previewImages[index];
            this.setState({corn: this.state.corn});
            num++;
        }, 1000);
    }

    increment() {
        fetch('http://localhost:3000/corns/increment', {
            method: 'POST',
            body: JSON.stringify({category: this.state.corn.category}),
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
                    <img src={this.state.corn.previewImage}/> {/* <div dangerouslySetInnerHTML={{
                        __html: this.state.corn.iframe
                    }}></div> */}
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
