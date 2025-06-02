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

module.exports = { createRecipe };
