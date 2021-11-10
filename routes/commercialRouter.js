// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's commercialController.js.
const commercial = require("../controllers/commercialController.js");

router.post("/getbyid", commercial.getByIDController);
router.post("/add", commercial.addController);
router.get("/getall", commercial.getAllController);
router.delete("/delete/:id", commercial.removeOneController);

// Exporting controllers to server.js.
module.exports = router;
