import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { cssHover } from "../generic/hoverProps";
import { icons, randomColorGenerator } from "../../config/configuration";
import { useMediaQuery } from "react-responsive";

const avatarColor = randomColorGenerator();
const Header = ({ modalCallback }: any) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 820px)" });

  const myStuffNavItemStyle = cssHover(
    {
      color: "#2b59a1",
      cursor: "pointer",
    },
    {
      color: "#777",
      cursor: "pointer",
    }
  );

  const signInButtonStyle = cssHover(
    {
      backgroundColor: "#2b59a1",
      color: "white",
    },
    {
      backgroundColor: "white",
      color: "#2b59a1",
    },
    {
      cursor: "pointer",
      border: "1px solid #2b59a1",
    }
  );

  const navigate = useNavigate();
  const [isNavOpen, updateNavOpen] = useState(false);
  const [isDropdownOpen, updateDropdown] = useState(false);
  const [myProfileDropdown, updateMyProfileDropdown] = useState(false);

  const toggleNav = () => {
    updateNavOpen(!isNavOpen);
  };

  return (
    <div className="col-12">
      {/* Show toggle button when size is smaller than md */}
      <Navbar light expand="md" className="noselect border-bottom col-12">
        <div
          className="noselect container-fluid px-sm-4 row mx-sm-0"
          // style={{display: 'flex', flexDirection: 'row'}}
        >
          {/* Toggle button to show/hide list/elements */}
          <NavbarToggler
            className="noselect col-auto"
            onClick={() => toggleNav()}
          />
          <NavbarBrand
            className="noselect col-8 col-sm-3 m-sm-0 p-sm-0"
            href="/main/home"
          >
            <div
              className="noselect d-flex flex-row align-items-center"
              style={{ marginLeft: 12 }}
            >
              <span className="noselect   col-auto  mb-0 h-25 align-middle h5">
                My portfolio
              </span>
            </div>
          </NavbarBrand>
          {/* Wrapper to collapse. Has a key isOpen  */}
          <Collapse
            className="noselect col-sm-7  flex-row justify-content-between "
            isOpen={isNavOpen}
            navbar
          >
            {/* Navigation */}
            <Nav navbar className={isTabletOrMobile ? "offset-0" : "offset-2"}>
              <NavItem className="noselect ms-sm-4 ">
                <NavLink
                  tag={RRNavLink}
                  className={"nav-link "}
                  to="/main/home"
                >
                  <strong>Home</strong>
                </NavLink>
              </NavItem>
              <NavItem className="noselect ms-sm-4">
                <NavLink
                  tag={RRNavLink}
                  className={"nav-link "}
                  to="/main/projects"
                >
                  <strong>Recipes</strong>
                </NavLink>
              </NavItem>

              {/* For v2 */}
              <NavItem className="noselect mx-sm-1">
                <NavLink
                  tag={RRNavLink}
                  className={"nav-link "}
                  to="/main/contact-us"
                >
                  <strong>Contact Us</strong>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
