// Imported React library.
import React, { useState } from "react";
// Imported spinner from React Spinners.
import PulseLoader from "react-spinners/PulseLoader";

/**
 * Created a spinner component using React Spinners for when the page is loading.
 * Set the initial state of loading to true.
 * Passed the props to the component.
 */

const Loader = () => {
  let [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <PulseLoader color="#000000" loading={loading} size={20} id="loader" />
    </div>
  );
};

// Exporting Loader.js to Booking.js and Home.js.
export default Loader;
