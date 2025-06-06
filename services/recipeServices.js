const Recipe = require("../models/recipe.model");

const createRecipe = async (body) => {
  try {
    const newRecipe = new Recipe(body);
    const response = await newRecipe.save();
    return response;
  } catch (error) {
    throw error;
  }
};

const fetchAllRecipes = async () => {
  try {
    const recipes = await Recipe.find();
    return recipes;
  } catch (error) {
    throw error;
  }
};

const getRecipe = async (title) => {
  try {
    const recipe = await Recipe.findOne({ title: title });

    if (!recipe) return {};

    return { message: "recipe received", recipe };
  } catch (error) {
    throw error;
  }
};

const fetchRecipes = async (author, difficulty) => {
  try {
    let recipes;
    if (author && difficulty) {
      recipes = await Recipe.find({
        author: author,
        difficulty: difficulty,
      });
    } else if (difficulty) {
      recipes = await Recipe.find({
        difficulty: { $regex: new RegExp(`^${difficulty}$`, "i") },
      });
    } else {
      recipes = await Recipe.find({ author: author });
    }

    return recipes;
  } catch (error) {
    throw error;
  }
};

const updateARecipe = async (recipeId, data) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, data, {
      new: true,
    });
    return updatedRecipe;
  } catch (error) {
    throw error;
  }
};

const updateARecipeByTitle = async (title, data) => {
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate(
      { title: title },
      data,
      { new: true }
    );
    return updatedRecipe;
  } catch (error) {
    throw error;
  }
};

const deleteSpecificRecipe = async (id) => {
  try {
    await Recipe.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createRecipe,
  fetchAllRecipes,
  getRecipe,
  fetchRecipes,
  updateARecipe,
  updateARecipeByTitle,
  deleteSpecificRecipe,
};
