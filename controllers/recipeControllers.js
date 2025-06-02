const { createRecipe } = require("../services/recipeServices");

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

module.exports = { addRecipe };
