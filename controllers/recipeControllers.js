const { createRecipe, getRecipes } = require("../services/recipeServices");

const addRecipe = async (req, res) => {
  console.log("add recipe called");
  const body = req.body;
  console.log(body);
  try {
    const response = await createRecipe(body);
    return res
      .status(201)
      .json({ message: "recipe created successfully", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const response = await getRecipes();

    if (response.length === 0)
      return res.status(404).json({ message: "No recipes are found" });

    return res.status(200).json({ recipes: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { addRecipe, getAllRecipes };
