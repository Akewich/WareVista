import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./Header.css";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="md" className="navbar1 pt-5 ">
        <Container>
          <Navbar.Brand href="#">
            <Image src={imageLogo} width={100} height={100} alt="" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navobj ms-auto  " style={{ fontSize: "24px" }}>
              <Nav.Link as={Link} to={"/"} style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/design"} style={{ color: "white" }}>
                Design
              </Nav.Link>
              <Nav.Link as={Link} to={"/report"} style={{ color: "white" }}>
                Report
              </Nav.Link>
              <Nav.Link as={Link} to={"/document"} style={{ color: "white" }}>
                Document
              </Nav.Link>
            </Nav>
            <Button
              className="signIn ms-4 fs-5"
              style={{ color: "black" }}
              color="warning"
              variant="contained"
              sx={{ borderRadius: "12px" }}
            >
              <Link
                to={"/login"}
                style={{ textDecoration: "none", color: "black" }}
              >
                Sign In
              </Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
