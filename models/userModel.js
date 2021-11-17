// Requiring Mongoose.
const mongoose = require("mongoose");

/**
 * Created a model, defining the schema of the users in order to save and retrieve data.
 * Set the type of the name, email and password to strings and isAdmin to a boolean.
 * Set the isAdmin's default value to false.
 * Added timestamps to show when the information has been updated
 */

const userSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting userShema to server.js.
module.exports = mongoose.model("Users", userSchema);
