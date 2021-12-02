// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the usersModel.js file.
const User = require("../models/userModel.js");
// Requiring JWT.
const jwt = require("jsonwebtoken");
// Requiring Bcrypt.
const bcrypt = require("bcryptjs");
// Requiring JWT secret.
const jwtConfig = require("../config/app.config.js");

/**
 * POST/ CREATE:
 * Created a function to allow a user to sign up.
 * Stipulated the body requirements: Name, Email and Password.
 * If an error occurs, status 500 will be returned with an error.
 * If all is in order, a new user will be created in the database and the credentials will be saved.
 * The generated token will expire in 24 hours.
 * Generating the token and returning this, as well as with the status (200 - ok) and a message.
 * @param {*} req User's name, email and password.
 * @param {*} res The token and the message.
 */

exports.registerController = (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.Password, 8);

  User.create(
    {
      Name: req.body.Name,
      Email: req.body.Email,
      Password: hashedPassword,
    },
    function (err, user) {
      if (err)
        return res
          .status(500)
          .send("There was a problem registering the user.");
      const token = jwt.sign({ id: user._id }, jwtConfig.JWT_SECRET, {
        expiresIn: 86400,
      });
      res.status(200).send({ auth: true, token: token });
    }
  );
};

/**
 * POST/ CREATE:
 * Created a function to allow a user to login.
 * If an error occurs, either status 500 is shown for server issues or if the email is not found a 404 error will be shown.
 * Checking whether the user exists and using Bcrypt’s compareSync() method to compare the password sent with the request to the password in the
 * database.
 * If they match the token is signed and the expiration time set to 24 hours.
 * @param {*} req User's email and password.
 * @param {*} res The token and the status (200 - ok).
 */

exports.loginController = (req, res) => {
  User.findOne({ Email: req.body.Email }, function (err, user) {
    if (err) return res.status(500).send("Error on the server.");
    if (!user) return res.status(404).send("No user found.");

    const passwordIsValid = bcrypt.compareSync(
      req.body.Password,
      user.Password
    );
    if (!passwordIsValid)
      return res.status(401).send({ auth: false, token: null });

    const token = jwt.sign({ id: user._id }, jwtConfig.JWT_SECRET, {
      expiresIn: 86400,
    });
    res.status(200).send({ auth: true, token: token });
  });
};

/**
 * GET/ READ:
 * Created a function to get the user's data.
 * Finding the user by ID and setting for the password to not be returned along with the rest of the data.
 * If an error occurs, status 500 will be returned with an error.
 * If all is in order, the user's data will be verified and returned.
 * @param {*} req Information sent by the user.
 * @param {*} res Information sent back to the user.
 */

exports.getUserDataController = (req, res) => {
  User.findById(req.userId, { Password: 0 }, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });
};

/**
 * GET/ READ:
 * Created a function for admin members to get a list of all of the existing users from the database.
 * If all is in order the list of users will be returned.
 * If an error occurs status 400 and an error message will be returned.
 * @param {*} req Information sent from the client.
 * @param {*} res Information sent back to the client.
 * @returns Information on all the existing users.
 */

exports.getUsersController = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

/**
 * GET/ READ:
 * Created a function to allow a user to log out.
 * Setting the token to null to end the session.
 * @param {*} req Information sent from the client.
 * @param {*} res Information sent back to the client.
 */

exports.logOutController = (req, res) => {
  res.status(200).send({ auth: false, token: null });
};

/**
 * PUT/ UPDATE:
 * Body properties: id.
 * User with the matching id to be returned and updated with the new user.
 * Updated copy of the content (copyContent).
 * Fetching the information of one user by id for updating. Using $set to set the information for the relevant user with the matching id.
 * @param {*} req Information sent from the client.
 * @param {*} res Information sent back to the client.
 */

exports.updateOneController = (req, res) => {
  User.findOneAndUpdate(
    req.params.id,
    {
      $set: {
        Name: req.body.Name,
        Email: req.body.Email,
        isAdmin: req.body.isAdmin,
      },
    },
    { new: false }
  )
    .then((user) => res.json({ message: "User updated successfully.", user }))
    .catch((err) => res.status(400).json("Error updating the user.", err));
};

/**
 * DELETE:
 * @required Body properties: id.
 * @param {*} req User with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of users and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

exports.removeOneController = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) =>
      res.json({
        message: "User Deleted Successfully.",
        user,
      })
    )
    .catch((err) =>
      res.status(400).json({ message: "Error Deleting the User.", err })
    );
};
