import { Nav, Container, Navbar, Image } from "react-bootstrap";
import imageLogo from "../../Images/WareHouseLOGO.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface Profile {
  email: string;
  name: string;
  profilePicture?: string; // Optional profile picture URL
  // Add other fields as needed
}

interface NavbarHeaderProps {
  profile: Profile | null;
  logOut: () => void;
}

const NavbarHeader: React.FC<NavbarHeaderProps> = ({ profile }) => {
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
            {profile ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {profile.profilePicture && (
                  <img
                    src={profile.profilePicture}
                    width={50}
                    height={50}
                    alt="Profile"
                    className="me-2"
                  />
                )}
                <span className="ms-5" style={{ color: "white" }}>
                  {profile.name}
                </span>
              </div>
            ) : (
              // If not logged in, display the Sign In button
              <Button
                className="fs-5"
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
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHeader;
