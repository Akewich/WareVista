import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import "./Header.css";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar pt-5">
        <Container>
          <Navbar.Brand href="#">
            <Image src={imageLogo} width={100} height={100} alt="" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navobj ms-auto pe-5 " style={{ fontSize: "24px" }}>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link href="#design" style={{ color: "white" }}>
                Design
              </Nav.Link>
              <Nav.Link href="#report" style={{ color: "white" }}>
                Report
              </Nav.Link>
              <Nav.Link href="#document" style={{ color: "white" }}>
                Document
              </Nav.Link>
            </Nav>
            <Button
              className="signIn fs-5"
              style={{ color: "black" }}
              color="warning"
              variant="contained"
              sx={{ borderRadius: "12px" }}
            >
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
