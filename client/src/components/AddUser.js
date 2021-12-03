// Imported React library.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
// Imported Font Awesome library and icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    axios({
      url: "/users/register",
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
          window.location.href = "/admin";
        }, 2000);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Container id="new-user-container">
      <Row>
        <h6 className="admin-subheading">Add New User</h6>
        <Button
          className="btn btn-primary appbutton admin-button"
          onClick={toggle}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Row>
      {loading && <Loader />}
      {isOpened && (
        <Row>
          <Col className="col-md-5" id="registercontent">
            {error && (
              <Error message="Something went wrong. Please try again later." />
            )}
            {success && <Success message="Registered Successfully." />}
            <FormControl
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormControl
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FormControl
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              onClick={(e) => handleRegister(e)}
              className="appbutton"
              variant="success"
            >
              ADD USER
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

// Exporting Register.js to Users.js.
export default Register;
