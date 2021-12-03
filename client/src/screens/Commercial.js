// Imported React library and hooks.
import "aos/dist/aos.css";

// Importing AOS Animate on Scroll Library and the scripts and styles.
import AOS from "aos";
// Requiring Axios.
import axios from "axios";
import React, {useEffect, useState} from "react";
// Imported components from React Bootstrap.
import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";

// Imported components.
import Loader from "../components/Loader";

// Initializing the AOS functionality and setting the duration of the animation.
AOS.init({
  duration : 3000,
});

/**
 * Set the initial states of the properties.
 * Utilized the useEffect() hook to get/ read the information from the database
 * and respond displaying the data. If an error occurs the error will be
 * displayed. Set loading to true before the data is returned and false after.
 * Also set loading to false if there is an error. Implemented the AOS library
 * to animate the card elements. Iterating over the data via map() to return the
 * data from the database.
 * @returns A container with data displayed in rows and columns with a loading
 *     feature.
 */

const Commercial = () => {
  const [resProjects, setResProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const commercial = (await axios.get("http://localhost:8080/commercial/getall")).data;
        setResProjects(commercial);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Row>
        <header>
          <h1>PROJECTS</h1>
          <h6 className="subheading">&#x2f;&#x2f; COMMERCIAL PROJECTS</h6>
        </header>
      </Row>
      <Row>
        {loading ? (
          <Loader />
        ) : (
          resProjects.map((commercial, i) => {
            return (
              <Card className="service-card" key={i} data-aos="fade-up">
                <Row>
                  <Col>
                    <Card.Img
                      src={commercial.imageUrls[0]}
                      alt="commercial"
                      className="smallimg"
                    />
                  </Col>
                  <Col>
                    <Card.Header className="service-header">
                      {commercial.name}
                    </Card.Header>
                    <Card.Text className="service-text">
                      {commercial.description}
                    </Card.Text>
                    <Button
                      onClick={handleShow}
                      className="appbutton"
                      variant="success"
                    >
                      More Images
                    </Button>

                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                      size="lg"
                    >
                      <Modal.Header closeButton>
                        <h5>{commercial.name}</h5>
                      </Modal.Header>
                      <Modal.Body id="commercialdetails">
                        <Carousel variant="dark">
                          {commercial.imageUrls.map((url, i) => {
                            return (
                              <Carousel.Item key={i}>
                                <img
                                  className="d-block w-100 bigimg"
                                  src={url}
                                  alt="commercial"
                                />
                              </Carousel.Item>
                            );
                          })}
                        </Carousel>
                      </Modal.Body>
                    </Modal>
                  </Col>
                </Row>
              </Card>
            );
          })
        )}
      </Row>
    </Container>
  );
};

// Exporting Commercial.js to App.js.
export default Commercial;
