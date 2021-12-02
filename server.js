// Requiring Express.
const express = require("express");
// Initializing express with variable "app".
const app = express();
// Requiring CORS.
const cors = require("cors");
// Requiring body-parser.
const bodyParser = require("body-parser");
// Requiring Mongoose.
const mongoose = require("mongoose");
// Requiring Helmet.
const helmet = require("helmet");
// Requiring logger from Morgan.
const morgan = require("morgan");
// Requiring dotenv.
const dbConfig = require("./config/app.config.js");
// Requiring the routes files.
const commercialRouter = require("./routes/commercialRouter.js");
const residentialRouter = require("./routes/residentialRouter.js");
const usersRouter = require("./routes/usersRouter.js");

/**
 * Enabling App usages.
 */

// Included the body-parser middleware so that the Express server is able to access content that is passed in the body of the HTTP request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enabling middleware to allow server to access MongoDB. To accept requests to the body in .json format.
// Added credentials (set to boolean value true) and origin (set environment) headers to CORS to handle cross-site request cookies.
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Enabling app to use Helmet to secure the code. Disabled the `contentSecurityPolicy` middleware (keeps the rest) due to inline script errors.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// Enabling the connection to MongoDB via the uri from the config file.
// Added useNewUrlParser flag to allow falling back to the old parser should a bug be found in the new parser.
// Added useUnifiedTopology to set up a connection string and begin doing operations.
const uri = `mongodb+srv://${dbConfig.DB_USERNAME}:${dbConfig.DB_PASSWORD}@cluster0.3oyit.mongodb.net/CD-Architecture?retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Logging a confirmation message to the console should the connection be successful.
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Should an error occur connecting to the MongoDB database, a message will be logged to the console as a notification of the error.
mongoose.connection.on("error", () => {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

// Enabling the api app to use the routes from the commercialRouter.js, residentialRouter and usersRouter.js files.
app.use("/commercial", commercialRouter);
app.use("/residential", residentialRouter);
app.use("/users", usersRouter);

// Checking if the process is production mode and set for the index.html file from the build folder to be utilized, instead of the public folder.
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Specified to listen to port 8080's HTTP requests. Modified the port code in order to deploy the app to Heroku.
// Logging a response to the console to confirm that the server is listening to port 8080.
const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(
  "Navigate to http://localhost:8080. Server is listening on port",
  PORT
);

// If an error occurs locally, it gets passed to our error handler and a message will display stating that "Something Broke" in development.
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  next(err);
});
