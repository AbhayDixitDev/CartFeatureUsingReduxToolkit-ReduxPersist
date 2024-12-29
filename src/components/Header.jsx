import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

    const cartdata = useSelector(state=>state.cart.cart2)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="cart">
            {cartdata.length}
            <FaCartPlus style={{fontSize:"24px"}}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;