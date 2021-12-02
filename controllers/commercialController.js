// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring the schemas that has been created in the commercialModel.js file.
const Commercial = require("../models/commercialModel.js");

/**
 * POST/ CREATE:
 * @required  Body properties: commercial, description, image 1 - 10.
 * @param {*} req Creating a new post request with the commercial project's props.
 * @param {*} res Data for a specific commercial project that has been added.
 * @returns Data of the commercial project that is being added from the request input or an error message should the
 * request be unsuccessful.
 */
exports.addController = async (req, res) => {
  const {
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
  } = req.body;

  const newcommercial = new Commercial({
    name: commercial,
    description,
    imageUrls: [
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
    ],
  });
  try {
    await newcommercial.save();
    res.send("New Commercial Project Added Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * GET/ READ:
 * Requesting all the commercial projects' information from MongoDB and returning the response with the information.
 * @required  Content.
 * @param {*} req Getting the array of commercial projects.
 * @param {*} res Copy of the content (copyContent).
 * @returns A list of the current commercial projects that are already written.
 */

exports.getAllController = async (req, res) => {
  try {
    const commercial = await Commercial.find({});
    res.json(commercial);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

/**
 * DELETE:
 * @required  Body properties: id.
 * @param {*} req Commercial project with the matching id to be deleted.
 * @param {*} res Updated copy of the content (copyContent).
 * @returns List of commercial projects and a confirmation message is returned to confirm that the post has been deleted or an error message should the
 * request be unsuccessful.
 */

exports.removeOneController = (req, res) => {
  Commercial.findByIdAndRemove(req.params.id)
    .then((commercial) =>
      res.json({
        message: "Commercial Project Deleted Successfully.",
        commercial,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Error Deleting the Commercial Project.", err })
    );
};
