'use strict';

import React from 'react';
// import { Button } from 'react-bootstrap';
import { NavDropdown, Nav, NavItem, MenuItem } from 'react-bootstrap';

require('styles/Header.scss');

class HeaderComponent extends React.Component {
    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    }
    render() {
        return (
          <div className="header-component">
              <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
              <NavDropdown eventKey={4} title="Dropdown" id="nav-dropdown">
                <MenuItem eventKey="4.1">Action</MenuItem>
                <MenuItem eventKey="4.2">Another action</MenuItem>
                <MenuItem eventKey="4.3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4.4">Separated link</MenuItem>
              </NavDropdown>
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
