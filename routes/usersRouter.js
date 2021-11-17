// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's userController.js.
const users = require("../controllers/userController.js");
// Requiring controllers from the controllers folder's userController.js.
const verifyToken = require("../controllers/verifyToken.js");

router.post("/register", users.registerController);
router.post("/login", users.loginController);

// If the user data is requested and the token exists, the jwt.verify() method will be called. This is to decode the token, making it possible
// to view the original payload.
router.get("/user", verifyToken, users.getUserDataController);

router.get("/getallusers", users.getUsersController);
router.get("/logout", users.logOutController);
router.put("/updateuser/:id", users.updateOneController);
router.delete("/delete/:id", users.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
