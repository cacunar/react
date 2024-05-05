import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaBook } from "react-icons/fa";
import "./Navigation.css"

const Navigation = () => {
    return (
      <Navbar bg="danger" variant="danger" expand="lg" className='justify-content-end'>
        <Container>
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/home" className="nav-link text-white">
                <BsFillHouseDoorFill className="me-2" />Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contacto" className="nav-link text-white">
                <FaBook className="me-2" />Contacto
              </Link>
            </Nav.Item>
          </Nav>
          <Navbar.Brand href="/home" className='ms-auto text-white'>
            Happy Cake 🍰
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  };

export default Navigation;
