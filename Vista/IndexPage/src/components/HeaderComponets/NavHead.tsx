import { Nav, Container, Navbar, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const NavbarHeader = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to={"/#"}>
            <Image src={imageLogo} width={100} height={100} alt="" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navobj ms-auto" style={{ fontSize: "24px" }}>
              <Nav.Link as={Link} to={"/#"} style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"} style={{ color: "white" }}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/dashboard"} style={{ color: "white" }}>
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
              className="signIn fs-5"
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

export default NavbarHeader;
