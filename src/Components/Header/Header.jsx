import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // ? for address location
  //   const location = useLocation();

  return (
    <Navbar>
      <Container className="nav">
        <Link to="/add" className="navlink">
          <Navbar.Brand>Add</Navbar.Brand>
        </Link>
        <Link to="/edit" className="navlink">
          <Navbar.Brand>Edit</Navbar.Brand>
        </Link>
        <Link to="/details" className="navlink">
          <Navbar.Brand>Details</Navbar.Brand>
        </Link>
      </Container>
      <hr className="line" />
    </Navbar>
  );
};

export default Header;
