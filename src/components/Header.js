import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import MenuContainer from '../containers/MenuContainer';

const Header = ({color, categories, basicsLogo}) => {

  return (
    // TODO : update to offsetCanvas when available ?
    <Navbar bg="main-bg" expand="true">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <MenuContainer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header
