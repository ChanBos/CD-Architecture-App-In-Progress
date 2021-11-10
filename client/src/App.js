// Imported React library.
import React from "react";
// Imported stylesheet.
import "./App.css";
// Imported components from Bootstrap.
import { Container, Row, Col } from "react-bootstrap";
// Imported components from React Router Dom.
import { BrowserRouter, Route } from "react-router-dom";
// Imported components.
import Navbar from "./components/Navbar";
// Imported screens.
import Landing from "./screens/Landing";
import About from "./screens/About";
import Services from "./screens/Services";
import Residential from "./screens/Residential";
// import Commercial from "./screens/Commercial";
import Contact from "./screens/Contact";

const App = (props) => {
  return (
    <Container fluid className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:300│Muli:300"
        rel="stylesheet"
      ></link>
      <Row className="flex-xl-nowrap">
        <Col as={Navbar} xs={12} md={3} lg={2} />
        <Navbar />
        {/* </Col> */}
        <Col className="content-col">
          {props.children}
          <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/residential/getall" exact component={Residential} />
            {/* <Route path="/commercial/getall" exact component={Commercial} /> */}
            <Route path="/contact" exact component={Contact} />
          </BrowserRouter>
        </Col>
      </Row>
    </Container>
  );
};

// Exporting App.js to index.js.
export default App;
