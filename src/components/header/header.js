import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarText,
} from "reactstrap";

import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggler, settoggler] = useState(false);

  const toggle = () => {
    settoggler(!toggler);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar expand="md" className="nav__header content_cursor">
        <NavbarBrand href="/" className="logo">
          Sambhav Jain
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <div
          onClick={toggle}
          className={toggler ? "menu-btn open" : "menu-btn"}
        >
          <div className="menu-btn__burger"></div>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#about" className="nav__elements">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience" className="nav__elements">
                Experience
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#achievement" className="nav__elements">
                Achievements
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#projects" className="nav__elements">
                Project
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#blog" className="nav__elements">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" className="nav__elements">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
