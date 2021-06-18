import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import MenuContainer from '../containers/MenuContainer';

const Header = ({color, categories, basicsLogo}) => {

  return (
    // TODO : update to offsetCanvas when available ?
    <Navbar bg="light" expand="true">
      <Container>
        <Navbar.Brand><Image src={basicsLogo} roundedCircle width="30" height="30" className="d-inline-block align-top" /> <span id="test">Randol's resume</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <MenuContainer />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header
