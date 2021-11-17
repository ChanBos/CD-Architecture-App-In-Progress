// Imported React library.
import React, { useState } from "react";
// Requiring Axios.
import axios from "axios";
// Imported Font Awesome library and icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// Imported Swal from sweetalert2.
import Swal from "sweetalert2";

/**
 * Set the initial values of the props.
 * Assigned an event.preventDefault() method to ensure that the page is not refreshed once the delete function is executed.
 * Fetching the content from http://localhost:8080/users/delete/:id. Utilizing the Delete method.
 * Added the necessary props to remove values from the database.
 * If successful a modal (Sweetalert2 - Swal.fire) will appear to confirm success.
 * If unsuccessful a modal (Sweetalert2 - Swal.fire) will appear displaying an error.
 * Passed onClick() event to delete the user.
 * @param {*} e Deleting content that exists in the database via id.
 * @param {*} param0 _id
 * @returns A button icon to delete the user.
 */

const RemoveUsers = ({ _id }) => {
  const [users, setUsers] = useState([]);

  const remove = (e, _id) => {
    e.preventDefault();

    axios
      .delete(`/users/delete/${_id}`)
      .then((response) => {
        const del = users.filter((user) => _id !== user._id);
        setUsers(del);
        Swal.fire(
          "Success!",
          "The user has been deleted successfully.",
          "success"
        ).then(function () {
          window.location.reload();
        });
      })
      .catch((error) => {
        Swal.fire("Error.", "Something went wrong.", "error").then(function () {
          window.location.reload();
        });
      });
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        onClick={(e) => remove(e, _id)}
        id="removebutton"
        title="Remove"
      />
    </div>
  );
};

// Exported the RemoveUsers.js to Admin.js.
export default RemoveUsers;
