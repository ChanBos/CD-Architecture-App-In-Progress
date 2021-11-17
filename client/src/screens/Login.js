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
 * Created a login function to allow the user to login.
 * Props: email, password, loading, error, success. Set the initial states.
 * Made use of an asynchronous function to Post the information to "/users/login".
 * If successful, the request will be sent and the user will be allowed to access the application. A message will display in the modal and the
 * user will be redirected to the application. setLoading is true when the request is sent and false when it is returned.
 * Set for the currentUser to be stringified and stored in local storage.
 * If an error occurs the error will be logged and an alert message will display in the modal. setLoading is false when an error is displayed.
 */

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      url: "/api/users/login",
      method: "post",
      data: {
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
        localStorage.setItem("token", response.data.token);
        setTimeout(function () {
          window.location.href = "/home";
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        setError(error);
      });
  };

  return (
    <div className="bs">
      {loading && <Loader />}
      <Row className="authcontainer">
        <Col className="col-md-5 authcontent" id="logincontent">
          {error && <Error message="Invalid Credentials." />}
          {success && <Success message="Login Successful." />}
          <h1>Login</h1>
          <Form>
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
            onClick={(e) => handleLogin(e)}
            className="appbutton"
            variant="success"
          >
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};

// Exporting Login.js to App.js.
export default Login;
