// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons'

// React, Next.js Router
import React from 'react';
import { useRouter } from 'next/router';

const NavbarComponent = () => {
    const router = useRouter();
    var currentActiveKey;
    if (router.pathname.includes("players")) {
      currentActiveKey = "/players"
    } else {
      if (router.pathname === "/") {
        currentActiveKey = "/"
      } else {
        currentActiveKey = "NULL"
      }
    }
    
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">HunetMC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" activeKey={currentActiveKey}>
                <Nav.Link href="/">
                  <FontAwesomeIcon icon={faHome} width={20} />&nbsp;
                  ホーム
                </Nav.Link>
                <Nav.Link href="/players">
                  <FontAwesomeIcon icon={faSearch} width={20} />&nbsp;
                  プレイヤー検索
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}

export default NavbarComponent