import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = [
  {
    id: 1,
    path: "",
    text: "Home",
  },
  {
    id: 2,
    path: "Articles",
    text: "Articles",
  },
  {
    id: 3,
    path: "Guru",
    text: "Guru",
  },
  {
    id: 4,
    path: "About",
    text: "About",
  },
];

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold text-primary">
            <img
              src={logo}
              alt="Smansa Logo"
              width="40"
              height="40"
              className="NavLogo"
            />
            {" Semansalun"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
