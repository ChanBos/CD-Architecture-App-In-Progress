// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Carousel,
} from "react-bootstrap";
// Imported components.
import Loader from "../components/Loader";

/**
 * Set the initial states of the properties.
 * Utilized the useEffect() hook to get/ read the information from the database and respond displaying the data. If an error occurs the error
 * will be displayed.
 * Set loading to true before the data is returned and false after. Also set loading to false if there is an error.
 * Utlized the Ant Design library to add a from/ to date picker. Utilizing position 0 of the array to list the from date and position 1 for the
 * to date. Utilizing Moment to adjust the format of the dates. The dates will be updated via the onChange() function.
 * Iterating over the data via map() to return the data that is imported from the Room component.
 * @returns A container with data displayed in rows and columns with a loading feature.
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
        const commercial = (await axios.get("/commercial/getall")).data;
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
              <Card className="service-card" key={i}>
                <Row>
                  <Col className="service-container-1">
                    <Card.Img
                      src={commercial.imageUrls[0]}
                      alt="commercial"
                      className="smallimg"
                    />
                  </Col>
                  <Col className="service-container-2">
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

export default Commercial;
