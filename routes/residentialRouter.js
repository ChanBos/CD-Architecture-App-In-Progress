// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's residentialController.js.
const residential = require("../controllers/residentialController.js");

router.post("/add", residential.addController);
router.get("/getall", residential.getAllController);
router.delete("/delete/:id", residential.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
