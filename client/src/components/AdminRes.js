// Imported React library and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import Error from "./Error";
import Loader from "./Loader";
import RemoveRes from "./RemoveRes";

/**
 * Set the initial states of the props.
 * Getting the residential projects' data via the the useEffect() hook and the Axios GET method from http://localhost:8080/residential/getall.
 * The page's loading is set to true from it's initial state of being false, then once the data is returned or an error occurs to false.
 * If all is in order the list of residential projects will be displayed. If an error occurs an error will be displayed.
 * Utilizing the map() method to iterate over the array and to return the data.
 * Utlilized the toFixed() method to return the total with two decimal places.
 */

const AdminRes = () => {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await (await axios.get("/residential/getall")).data;
        setRes(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div className="col-md-11">
      <h1>Residential Projects</h1>
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
              {res.map((residential, i) => {
                return (
                  <tr key={i}>
                    <td>{residential._id}</td>
                    <td>{residential.name}</td>
                    <td>{residential.description}</td>
                    <td>
                      <RemoveRes key={residential._id} {...residential} />
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

// Exporting AdminRes.js to Admin.js.
export default AdminRes;
