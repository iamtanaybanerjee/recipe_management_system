const express = require("express");
const {
  addRecipe,
  getAllRecipes,
  getRecipeByTitle,
  getRecipes,
} = require("../controllers/recipeControllers");

const router = express.Router();

router.post("/add_recipe", addRecipe);
router.get("/all_recipes", getAllRecipes);
router.get("/get_recipe", getRecipeByTitle);
router.get("/get_recipes", getRecipes);

module.exports = router;
