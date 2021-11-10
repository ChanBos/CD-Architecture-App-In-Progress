// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schema of the residential projects in order to save and retrieve data.
 * Set the type of the name and description to strings and the image urls and to arrays and added timestamps to show when the information
 * has been updated.
 */

const residentialSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrls: {
      type: [],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting residentialShema to server.js.
module.exports = mongoose.model("Residential", residentialSchema);
