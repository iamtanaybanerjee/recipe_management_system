const {
  createRecipe,
  fetchAllRecipes,
  getRecipe,
  fetchRecipes,
  updateARecipe,
  updateARecipeByTitle,
  deleteSpecificRecipe,
} = require("../services/recipeServices");
const {
  validateTitle,
  validateQueryParams,
  validateRecipeId,
  validateBodyParams,
  validateTitle2,
} = require("../validations/validations");

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
    const response = await fetchAllRecipes();

    if (response.length === 0)
      return res.status(404).json({ message: "No recipes are found" });

    return res.status(200).json({ recipes: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRecipeByTitle = async (req, res) => {
  const title = req.query.title;
  try {
    const error = validateTitle(title);
    if (error) return res.status(400).json({ error });

    const response = await getRecipe(title);

    if (!response.message)
      return res.status(404).json({ message: "No recipe is found" });

    return res.status(200).json({ recipe: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRecipes = async (req, res) => {
  const author = req.query.author;
  const difficulty = req.query.difficulty;
  try {
    const error = validateQueryParams(author, difficulty);
    if (error) return res.status(400).json({ error });

    const response = await fetchRecipes(author, difficulty);

    if (response.length === 0)
      return res.status(404).json({ message: "No recipes are found" });

    return res.status(200).json({ recipes: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const body = req.body;
  const recipeId = req.params.id;
  try {
    const error = await validateBodyParams(body);
    if (error) return res.status(400).json({ error });

    const error2 = await validateRecipeId(recipeId);
    if (error2) return res.status(404).json({ error: error2 });

    const response = await updateARecipe(recipeId, body);

    return res
      .status(200)
      .json({ message: "Updated recipe successfully!", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateRecipeByTitle = async (req, res) => {
  const title = req.params.title;
  const body = req.body;
  try {
    const error = await validateTitle2(title);
    console.log(error);
    if (error) return res.status(404).json({ error });

    const response = await updateARecipeByTitle(title, body);

    return res
      .status(200)
      .json({ message: "Updated recipe successfully!", recipe: response });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteRecipe = async (req, res) => {
  const recipeId = req.params.id;
  try {
    const error = await validateRecipeId(recipeId);
    if (error) return res.status(404).json({ error });

    await deleteSpecificRecipe(recipeId);
    return res.status(200).json({ message: "Deleted recipe successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addRecipe,
  getAllRecipes,
  getRecipeByTitle,
  getRecipes,
  updateRecipe,
  updateRecipeByTitle,
  deleteRecipe,
};
