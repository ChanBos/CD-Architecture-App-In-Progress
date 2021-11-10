// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  return (
    <Container>
      <Row>
        <header>
          <h1>SERVICES</h1>
          <h6 className="subheading">&#x2f;&#x2f; WHAT WE DO</h6>
        </header>
      </Row>
      <Row>
        <Card className="service-card">
          <Row>
            <Col className="service-container-1">
              <Card.Img
                src="./images/ProfessionalArchitecturalServices.png"
                alt=""
                className="service-img"
              />
            </Col>
            <Col className="service-container-2">
              <Card.Header className="service-header">
                ARCHITECTURAL SERVICES
              </Card.Header>
              <Card.Text className="service-text">
                CD Architecture offers full or partial services to best suit our
                clients' individual needs. We provide concept design and sketch
                plans and are able to manage every aspect of your project from
                assisting with a project brief, compiling tender documentation
                for pricing purposes, obtaining council approval through the
                relevant authorities to construction documentation for the
                reference of the necessary contractor parties. We do it all no
                matter the size of the project.
              </Card.Text>
            </Col>
          </Row>
        </Card>

        <Card className="service-card">
          <Row>
            <Col className="service-container-2">
              <Card.Header className="service-header">
                DEVELOPMENT PLANNING
              </Card.Header>
              <Card.Text className="service-text">
                CD Architecture provides innovative site development plans,
                master plans and layout plans for projects of all sizes. We work
                hand-in-hand with you, our client, as well as all other required
                professional consultants, whether it is for a residential home
                or a commercial building plan, from beginning to end in order to
                make your vision a reality. Our mission is to allow you to sit
                back and relax, to enjoy the process of this exciting venture,
                and to let us do what we do best.
              </Card.Text>
            </Col>
            <Col className="service-container-1">
              <Card.Img
                src="./images/DevelopmentPlanning.png"
                alt=""
                className="service-img"
              />
            </Col>
          </Row>
        </Card>

        <Card className="service-card">
          <Row>
            <Col className="service-container-1">
              <Card.Img
                src="./images/ArchitecturalGraphics.png"
                alt=""
                className="service-img"
              />
            </Col>
            <Col className="service-container-2">
              <Card.Header className="service-header">
                ARCHITECTURAL GRAPHICS
              </Card.Header>
              <Card.Text className="service-text">
                CD Architecture collaborates with you in order to create the
                architectural graphics required to comprehend and visualise your
                concept. We specialise in the 3D modelling of your project and
                are able to tend to everything, ranging from preliminary
                sketches and renderings to floor plans, building finishes and
                features, building signage and property development marketing
                materials.
              </Card.Text>
            </Col>
          </Row>
        </Card>

        <Card className="service-card">
          <Row>
            <Col className="service-container-2">
              <Card.Header className="service-header">
                ARCHITECTURAL PHOTOGRAPHY
              </Card.Header>
              <Card.Text className="service-text">
                CD Architecture provides professional architectural photography
                of buildings and other built structures. This service may be
                offered during the different stages of construction, from the
                soil turning to the roof wetting of your property. These
                photographs may be intended for commercial purposes or for the
                client to market or decorate the interiors of their home or
                workspace.{" "}
              </Card.Text>
            </Col>
            <Col className="service-container-1">
              <Card.Img
                src="./images/Photography.png"
                alt=""
                className="service-img"
              />
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Services;
