const express = require("express");
const {
  addRecipe,
  getAllRecipes,
  getRecipeByTitle,
  getRecipes,
  updateRecipe,
  updateRecipeByTitle,
} = require("../controllers/recipeControllers");

const router = express.Router();

router.post("/add_recipe", addRecipe);
router.get("/all_recipes", getAllRecipes);
router.get("/get_recipe", getRecipeByTitle);
router.get("/get_recipes", getRecipes);
router.put("/update_recipe/:id", updateRecipe);
router.put("/update_recipe_by_title/:title", updateRecipeByTitle);

module.exports = router;
