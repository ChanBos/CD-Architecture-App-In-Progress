// Imported React library and hooks.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Row, Col, Button } from "react-bootstrap";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";
// Imported Font Awesome library and icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

/**
 * Set the initial states of the props.
 * Admin can add a new commercial project by entering data for the following input sections: comm, description, image 1 - 10.
 * If all is in order the project will be added and a success alert will be displayed. If an error occurs an error will be displayed.
 * Called for the state to be set onChange().
 * @param {*} res
 * @returns A container with a row and a column. The row contains a form with the following input fields: comm, description, image 1 - 10.
 */

const AddComm = (res) => {
  const [commercial, setCommercial] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

  const addComm = async () => {
    const commobj = {
      commercial,
      description,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
    };

    try {
      const result = await axios.post("/commercial/add", commobj);
      Swal.fire(
        "Success!",
        "The commercial project has been created successfully.",
        "success"
      ).then((result) => {
        window.location.href = "/admin";
      });
    } catch (error) {
      Swal.fire("Error", "Something went wrong.", "error");
    }
  };

  return (
    <Col>
      <Row className="col-md-12">
        <h6 className="admin-subheading">Add Commercial Project</h6>
        <Button className="btn btn-primary appbutton admin-button">
          <FontAwesomeIcon icon={faPlus} onClick={toggle} />
        </Button>
      </Row>

      {isOpened && (
        <Row>
          <Col className="col-md-6">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Name"
              value={commercial}
              onChange={(e) => {
                setCommercial(e.target.value);
              }}
            />

            <textarea
              type="text"
              className="form-control mt-1 project-description-area"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </Col>

          <Col className="col-md-6">
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 1"
              value={image1}
              onChange={(e) => {
                setImage1(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 2"
              value={image2}
              onChange={(e) => {
                setImage2(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 3"
              value={image3}
              onChange={(e) => {
                setImage3(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 4"
              value={image4}
              onChange={(e) => {
                setImage4(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 5"
              value={image5}
              onChange={(e) => {
                setImage5(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 6"
              value={image6}
              onChange={(e) => {
                setImage6(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 7"
              value={image7}
              onChange={(e) => {
                setImage7(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 8"
              value={image8}
              onChange={(e) => {
                setImage8(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 9"
              value={image9}
              onChange={(e) => {
                setImage9(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Image URL 10"
              value={image10}
              onChange={(e) => {
                setImage10(e.target.value);
              }}
            />
            <div className="mt-1 text-right">
              <Button
                className="btn btn-primary appbutton"
                variant="success"
                onClick={addComm}
              >
                ADD PROJECT
              </Button>
            </div>
          </Col>
        </Row>
      )}
    </Col>
  );
};

// Exporting AddComm.js to Admin.js.
export default AddComm;
