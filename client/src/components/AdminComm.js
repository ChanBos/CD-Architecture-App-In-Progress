// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import Error from "./Error";
import Loader from "./Loader";
import RemoveComm from "./RemoveComm";

/**
 * Set the initial states of the props.
 * Getting the commercial projects' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/commercial/getall.
 * The page's loading is set to true from it's initial state of being false, then once the data is returned or an error occurs to false.
 * If all is in order the list of commercial projects will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * Utlilized the toFixed() method to return the total with two decimal places.
 */

const AdminComm = () => {
  const [comms, setComms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await (await axios.get("/commercial/getall")).data;
        setComms(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div className="col-md-11">
      <h1>Commercial Projects</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          <table className="table table-bordered table-dark">
            <thead className="bs">
              <tr>
                <th>Project Id:</th>
                <th>Name:</th>
                <th>Description:</th>
              </tr>
            </thead>
            <tbody>
              {comms.map((commercial, i) => {
                return (
                  <tr key={i}>
                    <td>{commercial._id}</td>
                    <td>{commercial.name}</td>
                    <td>{commercial.description}</td>
                    <td>
                      <RemoveComm key={commercial._id} {...commercial} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Exporting AdminComm.js to Admin.js.
export default AdminComm;
