import React, { useState } from "react";
import {
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import ImageLogo from "../../../Images/WareHouseLOGO.png";
import "./Navdesign.scss";
import { Link } from "react-router-dom";

const Navdesign = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const openNavMenu = (eventKey: any) => {
    setOpenMenu(eventKey);
  };

  const handleCloseNavMenu = () => {
    setOpenMenu(null);
  };

  const navMenu = [
    "File",
    "Image",
    "Layer",
    "Type",
    "Select",
    "3D",
    "View",
    "Window",
    "Help",
  ];
  const actionMenu = ["Action1", "Action2", "Action3"];

  return (
    <Navbar expand="lg" className="navbg ">
      <Navbar.Brand as={Link} to={"/#"}>
        <Image src={ImageLogo} width={30} height={30} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="dropdown">
          {navMenu.map((page) => (
            <NavDropdown
              title={page}
              id={`dropdown-${page}`}
              key={page}
              onSelect={openNavMenu}
              className="dropdown-toggle"
            >
              {actionMenu.map((action) => (
                <NavDropdown.Item
                  className="dropDownItems"
                  key={action}
                  eventKey={action}
                >
                  {action}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navdesign;
