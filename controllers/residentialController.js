// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the residentialModel.js file.
const Residential = require("../models/residentialModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: _id
 * @param {*} req Creating a new post request with the residential project's id.
 * @param {*} res Data for a specific residential project that matches the requested id.
 * @returns Data of the residential project that matches the id of the request input or an error message should the
 * request be unsuccessful.
 */

exports.getByIDController = async (req, res) => {
  const residentialId = req.body.residentialId;
  try {
    const residential = await Residential.findOne({ _id: residentialId });
    res.json(residential);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * POST/ CREATE:
 * @required  Body properties: residential, description, image 1, 2, 3.
 * @param {*} req Creating a new post request with the residential project's props.
 * @param {*} res Data for a specific residential project that has been added.
 * @returns Data of the residential project that is being added from the request input or an error message should the
 * request be unsuccessful.
 */
exports.addController = async (req, res) => {
  const { residential, description, image1, image2, image3 } = req.body;

  const newresidential = new Residential({
    name: residential,
    description,
    imageUrls: [image1, image2, image3],
  });
  try {
    await newresidential.save();
    res.send("New Residential Project Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * GET/ READ:
 * Requesting all the residential projects' information from MongoDB and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of residential projects.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current residential projects that are already written.
 */

exports.getAllController = async (req, res) => {
  try {
    const residential = await Residential.find({});
    res.json(residential);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Residential project with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of residential projects and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

exports.removeOneController = (req, res) => {
  Residential.findByIdAndRemove(req.params.id)
    .then((residential) =>
      res.json({
        message: "Residential Project Deleted Successfully.",
        residential,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Error Deleting the Residential Project.", err })
    );
};
