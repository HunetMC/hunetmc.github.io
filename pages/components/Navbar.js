// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">HunetMC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">ホーム</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )
}

export default NavbarComponent