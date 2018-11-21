import React from 'react';

import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Sample Page</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
    )
};

export default Header