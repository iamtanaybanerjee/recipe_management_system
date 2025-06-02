const express = require("express");
const { addRecipe } = require("../controllers/recipeControllers");

const router = express.Router();

router.post("/addRecipe", addRecipe);

module.exports = router;
