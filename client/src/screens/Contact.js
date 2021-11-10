// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";
// Importing Font Awesome library.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

/**
 * Created a contact page to display the resort's contact details, an image and a operational control form submission.
 * Added links to social media accounts and to the location's map.
 * Set a row with three columns to display the sections.
 */

const Contact = () => {
  return (
    <Container>
      <header>
        <h1>CONTACT</h1>
        <h6 className="subheading">&#x2f;&#x2f; REACH OUT TO US</h6>
      </header>
      <Row>
        <Col className="col-md-5">
          <Image src="./images/Contact5.jpg" alt="Get Started" fluid />
        </Col>
        <Col className="col-md-3 contact-col">
          <Row>
            <h6 className="contact-icons">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </h6>
            <p>+27 (0)83 258 1706</p>
          </Row>
          <Row>
            <h6 className="contact-icons">
              <FontAwesomeIcon icon={faEnvelope} />
            </h6>
            <p>info@cdarchitecture.co.za</p>
          </Row>
          <Row>
            <h6 className="contact-icons">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </h6>
            <p>
              Durban, <br /> KwaZulu-Natal, <br /> South Africa
            </p>
          </Row>
          <Row>
            <h6 className="contact-icons">
              <FontAwesomeIcon icon={faClock} />
            </h6>
            <p>
              <b>Monday to Friday:</b> 09:00 - 19:00 <br />
              <b>Saturday:</b> 09:00 - 13:00 <br />
              <b>Sunday and Public Holidays:</b> Closed
            </p>
          </Row>
          <Col id="social-col">
            <h6 id="connectheader">Connect With Us:</h6>
            <Row>
              <Col className="col-md-2">
                <a
                  href="https://www.facebook.com/CustomDesignArchitecture"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="social-icons" />
                </a>
              </Col>
              <Col className="col-md-2">
                <a
                  href="https://www.instagram.com/custom_design_architecture/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="social-icons"
                  />
                </a>
              </Col>
              <Col className="col-md-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=27832580706&text&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="social-icons" />
                </a>
              </Col>
            </Row>
          </Col>
        </Col>
        <Col Col className="col-md-3 contact-col">
          <Form
            action="mailto:casadeboho@gmail.com"
            method="post"
            type="text/plain"
          >
            <Form.Group className="form-group required">
              <Form.Label name="Name" className="control-label">
                Name and Surname{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Name"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Email" className="control-label">
                Email Address{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Email"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Contact" className="control-label">
                Contact Number{" "}
              </Form.Label>
              <Form.Control
                type="text"
                name="Contact"
                required
                className="contactinput"
              />
            </Form.Group>
            <Form.Group className="form-group required">
              <Form.Label name="Message" className="control-label">
                Message{" "}
              </Form.Label>
              <br />
              <textarea
                type="text"
                name="Message"
                required
                id="contactmessage"
              ></textarea>
              <br />
              <div>
                <Button
                  type="submit"
                  value="submit"
                  className="appbutton"
                  // variant="success"
                >
                  Send
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// Exporting Contact.js to App.js.
export default Contact;
