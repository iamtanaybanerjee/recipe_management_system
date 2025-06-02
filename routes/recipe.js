const express = require("express");
const {
  addRecipe,
  getAllRecipes,
} = require("../controllers/recipeControllers");

const router = express.Router();

router.post("/add_recipe", addRecipe);
router.get("/all_recipes", getAllRecipes);

module.exports = router;
