// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Image, Row, Col, Button } from "react-bootstrap";
// Importing AOS Animate on Scroll Library and the scripts and styles.
import AOS from "aos";
import "aos/dist/aos.css";
// Imported Link from Readt-router-dom.
import { Link } from "react-router-dom";

// Initializing the AOS functionality and setting the duration of the animation.
AOS.init({
  duration: 3000,
});

/**
 * Created a landing page for the application.
 * Added animations on the <h1> element (zoom-in) and the <h3> element (zoom-out).
 * Utilized React-router-dom's Link to create a button link to the home page.
 * @returns A page with two animated headers and a button that redirects the user to the home page.
 */

const Landing = () => {
  return (
    <Row id="landing">
      <Col className="col-md-12 landingcol">
        <Image
          src="./images/Westville-House-Bruce-Cresccent-Pool6.png"
          alt="Home Image"
          fluid
          id="landingimage"
        />
        <div id="landingcontent">
          <h1 id="brandname" data-aos="fade-zoom-in">
            CUSTOM DESIGN ARCHITECTURE
          </h1>
          <h3 id="slogan">Your Vision, Our Passion</h3>
          <Link to="/contact">
            <Button id="landingbutton">Get In Touch</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

// Exporting Landing.js to App.js.
export default Landing;
