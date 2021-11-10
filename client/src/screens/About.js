// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Container, Col, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <header>
        <h1>ABOUT</h1>
        <h6 className="subheading">&#x2f;&#x2f; OUR COMPANY</h6>
      </header>
      <Row>
        <Col className="col-md-4">
          <Image src="./images/Ross3.jpg" alt="Ross" id="ross" fluid />
        </Col>
        <Col id="about-text">
          <p>
            &#10077; Since the age of 12 I dreamt of becoming an Architect and
            to some day run my own practice. In order to achieve this, I
            enrolled for a National Diploma in Architectural Technology with the
            Durban University of Technology in 2009 and graduated in 2011. I did
            my student in-service with Theunissen Jankowitz Architects in 2010.
          </p>
          <p>
            I currently work as a Senior Architectural Technologist at BVA
            Architects (Pty) Ltd, who specializes in healthcare architecture. I
            started at the company as a Junior Architectural Technologist in
            2013 and have worked my way up to the current position. My
            responsibilities include, but are not limited to, the following:
          </p>
          <p>
            Whilst working at BVA Architects (Pty) Ltd. I furthered my knowledge
            by completing an Online Project Management Foundations course hosted
            by the University of Cape Town in 2019 and am currently
            familiarizing myself with the Revit program. I constantly and
            actively seek out opportunities to broaden my knowledge and to
            improve the quality of service that I provide as I take great pride
            in the projects that I work on.
          </p>
          <p>
            I am a highly ambitious individual and pride myself on being
            punctual and meeting all project deadlines. I go above and beyond to
            achieve the best possible outcome for clients, as well as for the
            company, and am happy to do this in an individual or a team
            capacity.
          </p>
          <p>
            A combination of initiative, dedication and discipline aids me in
            delivering my services with the highest efficiency. &#10078;
            <font id="about-founder"> - Our founder, Ross Bösiger.</font>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
