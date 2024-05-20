import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'

export default function NavigBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  return (
      <Navbar bg="secondary">
        <Container>
          <Navbar.Brand href="/">
          <img
              src="../ubicacion.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <NavLink className={setActiveClass} id="home" to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} id="pokemones" to={"/pokemones"}>
              Pokemones
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
  );
}
