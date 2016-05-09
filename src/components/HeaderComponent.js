'use strict';

import React from 'react';
// import { Button } from 'react-bootstrap';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// import {LinkContainer} from 'react-router';

require('styles/Header.scss');

class HeaderComponent extends React.Component {
    handleSelect() {
        // event.preventDefault();
    }
    render() {
        return (
            <div className="header-component">
                <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                    <LinkContainer to="/list">
                        <NavItem eventKey={1}>
                            Corn List
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/show">
                        <NavItem eventKey={2}>
                            Show Corn
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </div>
        );
    }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
