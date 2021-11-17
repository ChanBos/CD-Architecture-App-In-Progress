// Imported React library.
import React from "react";
// Imported components from React Bootstrap.
import { Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
// Importing Font Awesome library.
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Created a navigation function to display a navbar that changes, depending on whether the user is logged in or not.
 * Parsed the user's name that is stored in local storage and returning this as the dropdown value.
 * To allow a user to log out I created a function that removes the user from local storage. This will redirect them to the login page.
 * If the user is logged in, their name will display and they will have the option to logout.
 * All pages are displayed: Landing, Home, Profile, About, Activities, Contact and Logout.
 */

const Navigation = () => {
  // const user = JSON.parse(localStorage.getItem("currentUser"));

  // const logout = () => {
  //   localStorage.removeItem("currentUser");
  //   localStorage.removeItem("token");
  //   window.location.href = "/login";
  // };

  return (
    <div id="navbar">
      <Navbar collapseOnSelect expand={false} variant="dark" sticky="top">
        <div className="nav-container-1">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <NavDropdown
                title="Projects"
                id="collapsible-nav-dropdown"
                variant="dark"
              >
                <NavDropdown.Item href="/residential/getall">
                  Residential
                </NavDropdown.Item>
                <NavDropdown.Item href="/commercial/getall">
                  Commercial
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-container-2">
          <Navbar.Brand href="/">
            <Image src="./images/Logo.png" alt="Logo" id="logo" fluid />
          </Navbar.Brand>
        </div>
        {/* <div id="authbuttoncontainer">
          <SignUp />
          <h6 id="authbuttonheader">OR</h6>
          <Login />
        </div> */}
      </Navbar>
    </div>
  );
};

// Exporting Navbar to App.js
export default Navigation;
