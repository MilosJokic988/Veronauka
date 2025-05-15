import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="navbar-custom"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          ⛪ Православна веронаука
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setExpanded(false)}>
            <Nav.Link as={NavLink} to="/" end>
              Почетна
            </Nav.Link>
            <Nav.Link as={NavLink} to="/postanje">
              Постање
            </Nav.Link>
            <Nav.Link as={NavLink} to="/avram">
              Аврам
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jakov">
              Јаков
            </Nav.Link>
            <Nav.Link as={NavLink} to="/josif">
              Јосиф
            </Nav.Link>
            <Nav.Link as={NavLink} to="/mojsije">
              Мојсије
            </Nav.Link>
            <Nav.Link as={NavLink} to="/bozic">
              Божић
            </Nav.Link>
            <Nav.Link as={NavLink} to="/jovan-krstitelj">
              Свети Јован Крститељ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/vaskrs">
              Васкрс
            </Nav.Link>
            <Nav.Link as={NavLink} to="/hristova-cuda">
              Чуда
            </Nav.Link>
            <Nav.Link as={NavLink} to="/andjeo-protiv-demona">
              Анђео против демона
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
