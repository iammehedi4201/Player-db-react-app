import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import { InputContext } from "../../App";
import "./Header.css";

const Header = () => {

  const catchInputValue =useContext(InputContext);

  return (
    <div className="Header-section">
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="dark"
          expand={expand}
          className="mb-3 navbar-dark n"
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img
                className="img-sizing"
                src={require("../../logo/Free_Sample_By_Wix.jpg")}
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  THE PLAYER DB
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ">
                  <Nav.Link>
                    <NavLink
                      to="/"
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                      })}
                    >
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/Players"
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                      })}
                    >
                       Players
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink
                      to="/About"
                      style={({ isActive }) => ({
                        color: isActive ? "red" : "white",
                      })}
                    >
                       About Us
                    </NavLink>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    id="input-field"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button onClick={catchInputValue} variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
