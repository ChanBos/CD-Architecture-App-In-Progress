// Imported React library.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
// Imported components.
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";

/**
 * Created a register function to allow the user to register.
 * Props: name, email, password, cpassword, loading, error, success. Set the initial states.
 * Made use of an asynchronous function to Post the information to "/api/users/register".
 * If successful, the request will be sent and the user will be allowed to access the application. A message will display in the modal and the
 * user will be redirected to the application. setLoading is true when the request is sent and false when it is returned.
 * If an error occurs the error will be logged and an alert message will display in the modal. setLoading is false when an error is displayed.
 */

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    axios({
      url: "/api/users/register",
      method: "post",
      data: {
        Name: name,
        Email: email,
        Password: password,
      },
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        setLoading(false);
        setSuccess(true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        setTimeout(function () {
          window.location.href = "/login";
        }, 2000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="bs">
      {loading && <Loader />}
      <Row className="authcontainer">
        <Col className="col-md-5 authcontent" id="registercontent">
          {error && (
            <Error message="Something went wrong. Please try again later." />
          )}
          {success && <Success message="Registered Successfully." />}
          <h1>Register</h1>
          <Form>
            <FormControl
              className="authinput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormControl
              className="authinput"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormControl
              className="authinput"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form>
          <Button
            onClick={(e) => handleRegister(e)}
            className="appbutton"
            variant="success"
          >
            Register
          </Button>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Register.js to App.js.
export default Register;
